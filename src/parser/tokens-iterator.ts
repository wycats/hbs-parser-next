import type { Token, TokenType, TokenMap } from "../read/tokens";
import type { SourceSpan } from "../span";
import type { ParseTracer } from "./debug";
import {
  err,
  EXPAND,
  ok,
  Result,
  seq,
  Sequence,
  Shape,
  ErrSequence,
  ResultObject,
} from "./shape";
import type { ShapeConstructor } from "./shapes/abstract";

export const TOKENS = Symbol("TOKENS");
export const CONTEXT = Symbol("CONTEXT");
export const POS = Symbol("POS");

export class PeekedToken {
  #committed = false;
  #rejected = false;
  #optional = false;
  #ignored = false;

  constructor(
    private iterator: TokensIterator,
    private desc: string,
    private pos: number
  ) {}

  get isEOF(): boolean {
    return this.iterator[TOKENS].length === this.pos;
  }

  get finished(): boolean {
    return this.#committed || this.#rejected || this.#optional || this.#ignored;
  }

  get rejected(): boolean {
    return this.#rejected;
  }

  commit(): Token {
    if (this.finished) {
      throw new Error(`assert: cannot commit already committed peeked token`);
    }

    this.#committed = true;
    return this.iterator.commitPeek(this.desc, this.pos);
  }

  reject(): PeekedToken & { rejected: true } {
    if (this.finished) {
      throw new Error(`assert: cannot reject already committed peeked token`);
    }

    this.#rejected = true;
    this.iterator.rejectPeek(
      this.desc,
      this.pos,
      this as PeekedToken & { rejected: true }
    );
    return this as PeekedToken & { rejected: true };
  }

  ignore(): null {
    if (this.finished) {
      throw new Error(
        `assert: cannot mark already committed peeked token as optional`
      );
    }

    this.#ignored = true;
    this.iterator.peekFailure(this.desc, "ignored");
    return null;
  }

  optional(): null {
    if (this.finished) {
      throw new Error(
        `assert: cannot mark already committed peeked token as optional`
      );
    }

    this.#optional = true;
    this.iterator.peekFailure(this.desc, "optional");
    return null;
  }

  get token(): Token {
    return this.iterator[TOKENS][this.pos];
  }
}

export interface ParseContext {
  source: string;
  tracer: ParseTracer;
}

export default class TokensIterator {
  readonly [TOKENS]: readonly Token[];
  readonly [CONTEXT]: ParseContext;
  [POS]: number;

  constructor(tokens: readonly Token[], context: ParseContext, pos = 0) {
    this[TOKENS] = tokens;
    this[CONTEXT] = context;
    this[POS] = pos;
  }

  assertEOF(): Result<null> {
    let next = this.peek("eof");

    if (next.isEOF) {
      return ok(next.ignore(), this);
    } else {
      return err(next.reject(), "eof", this);
    }
  }

  start<T>(step: (iterator: TokensIterator) => Sequence<T>): Sequence<T> {
    return step(this);
  }

  consumeParent<T>(
    options: string | { desc: string; isLeaf: boolean },
    callback: (token: Token) => Result<T> | void
  ): Sequence<{ result: T; token: Token }> {
    let eof = notEOF()(this);
    if (eof.kind === "err") {
      return seq(eof);
    }

    let desc = typeof options === "string" ? options : options.desc;
    let peekOptions = typeof options === "string" ? undefined : options;

    let next = this.peek(desc, peekOptions);
    let result = callback(next.token);

    if (result === undefined) {
      return seq(err(next.reject(), "mismatch", this));
    } else if (result.kind === "err") {
      next.reject();
      return seq(result);
    }

    next.commit();

    return seq(ok({ result: result.value, token: next.token }, this));
  }

  assertNotNext(
    desc: string,
    callback: (token: Token) => boolean
  ): Sequence<null> & Result<null> {
    let next = this.peek(desc);

    if (next.token !== undefined && callback(next.token)) {
      return seq(err(next.reject(), "lookahead", this));
    } else {
      next.ignore();
      return seq(ok(null, this));
    }
  }

  err<T>(desc: string, reason = "mismatch"): ErrSequence<T> {
    return seq(err(this.peek(desc).reject(), reason, this)) as ErrSequence<T>;
  }

  present<T>(
    desc: string
  ): (out: T[], iterator: TokensIterator) => Result<T[]> {
    return (out, iterator) =>
      out.length === 0 ? this.err(desc, "empty") : ok(out, iterator);
  }

  peek(
    desc: string,
    options: { isLeaf: boolean } = { isLeaf: true }
  ): PeekedToken {
    this[CONTEXT].tracer.preInvoke(
      { desc, isLeaf: options.isLeaf },
      this[TOKENS][this[POS]]
    );
    return new PeekedToken(this, desc, this[POS]);
  }

  expandShape<T>(shape: Shape<T>): T {
    this[CONTEXT].tracer.preInvoke(shape, this[TOKENS][this[POS]]);
    let result = shape[EXPAND](this);
    this[CONTEXT].tracer.postInvoke(shape, result, this[TOKENS][this[POS]]);
    return result;
  }

  expandInfallible<T>(shapeOrClass: { new (): Shape<T> } | Shape<T>): T {
    let shape =
      typeof shapeOrClass === "function" ? new shapeOrClass() : shapeOrClass;
    this[CONTEXT].tracer.preInvoke(shape, this[TOKENS][this[POS]]);
    let result = shape[EXPAND](this);
    this[CONTEXT].tracer.postInvoke(shape, result, this[TOKENS][this[POS]]);

    return result;
  }

  spanned<T>(
    callback: () => Result<(span: SourceSpan) => Result<T>>
  ): Result<T> {
    let start = this[POS];
    let cb = callback();

    if (cb.kind === "err") {
      return cb;
    }

    let end = this[POS];

    return cb.value({ start, end });
  }

  get source(): string {
    return this[CONTEXT].source;
  }

  child(tokens: readonly Token[]): TokensIterator {
    return new TokensIterator(tokens, this[CONTEXT]);
  }

  commitPeek(desc: string, pos: number): Token {
    if (this[POS] !== pos) {
      throw new Error(
        `assert: can't commit a peeked token after the iterator advanced`
      );
    }

    this[POS]++;
    this[CONTEXT].tracer.postInvoke(
      { desc },
      this[TOKENS][pos],
      this[TOKENS][pos]
    );
    return this[TOKENS][this[POS] - 1];
  }

  rejectPeek(
    desc: string,
    pos: number,
    peeked: PeekedToken & { rejected: true }
  ): void {
    this[CONTEXT].tracer.postInvoke(
      { desc },
      err(peeked, "rejected", this),
      this[TOKENS][pos]
    );
  }

  peekFailure(desc: string, reason: "ignored" | "optional"): void {
    this[CONTEXT].tracer.postInvokeFailure({ desc }, reason);
  }

  atomic<T>(callback: (iterator: TokensIterator) => Result<T>): Result<T> {
    let transaction = this.begin();

    let result = callback(transaction);

    if (result.kind === "ok") {
      transaction.commit();
    } else {
      transaction.rollback();
    }

    return result;
  }

  begin(): TokensIteratorTransaction {
    this[CONTEXT].tracer.begin();
    return new TokensIteratorTransaction(
      this[TOKENS],
      this[CONTEXT],
      this[POS],
      this
    );
  }

  commitTransaction(pos: number): void {
    if (this[POS] > pos) {
      throw new Error(
        `assert: can't commit a transaction if it rewinds the position`
      );
    }
    this[CONTEXT].tracer.commit();
    this[POS] = pos;
  }

  rollbackTransaction(pos: number): void {
    if (this[POS] > pos) {
      throw new Error(`assert: transaction's position is in the past`);
    }
    this[CONTEXT].tracer.rollback();
  }

  processInner<T>(
    tokens: readonly Token[],
    callback: (t: TokensIterator) => Result<T>
  ): Result<T> {
    let child = this.child(tokens);
    let result = callback(child);

    if (result.kind === "err") {
      // parent.reject();
      return result;
    }

    let eof = child.assertEOF();

    if (eof.kind === "err") {
      // parent.reject();
      return eof;
    }

    return result;
  }
}

export function repeat<T>(
  callback: (iterator: TokensIterator) => Result<T>
): (iterator: TokensIterator) => T[] {
  return iterator => {
    let out: T[] = [];

    while (true) {
      let result = callback(iterator);

      if (result.kind === "err") {
        break;
      } else {
        out.push(result.value);
      }
    }

    return out;
  };
}

export function many<T>(
  Shape: ShapeConstructor<Result<T>>
): (iterator: TokensIterator) => T[] {
  return iterator => {
    let out: T[] = [];

    while (true) {
      let shape = new Shape();

      let result = expand(shape)(iterator);
      if (result.kind === "err") {
        break;
      } else {
        out.push(result.value);
      }
    }

    return out;
  };
}

export function notEOF(): (iterator: TokensIterator) => Sequence<null> {
  return iterator => {
    let next = iterator.peek("eof");

    if (next.isEOF) {
      return seq(err(next.reject(), "eof", iterator));
    } else {
      return seq(ok(next.ignore(), iterator));
    }
  };
}

export function consumeToken<
  K extends TokenType & keyof TokenMap,
  N extends string
>(
  name: N,
  tokenType: K
): (iterator: TokensIterator) => Sequence<ResultObject<N, TokenMap[K]>>;
export function consumeToken<K extends TokenType & keyof TokenMap>(
  tokenType: K
): (iterator: TokensIterator) => Sequence<TokenMap[K]>;
export function consumeToken<
  K extends TokenType & keyof TokenMap,
  N extends string
>(
  nameOrTokenType: N | K,
  maybeTokenType?: K
): (
  iterator: TokensIterator
) => Sequence<TokenMap[K]> | Sequence<ResultObject<N, TokenMap[K]>> {
  let name = maybeTokenType === undefined ? undefined : nameOrTokenType;
  let tokenType =
    maybeTokenType === undefined ? nameOrTokenType : maybeTokenType;

  return consume(tokenType, token => {
    if (token.type === tokenType) {
      if (name !== undefined) {
        return { [name]: token };
      } else {
        return token;
      }
    }
  }) as (
    iterator: TokensIterator
  ) => Sequence<TokenMap[K]> | Sequence<ResultObject<N, TokenMap[K]>>;
}

export function consume<T>(
  options: string | { desc: string; isLeaf: boolean },
  callback: (token: Token) => T | undefined
): (iterator: TokensIterator) => Sequence<T> {
  return iterator => {
    let eof = notEOF()(iterator);
    if (eof.kind === "err") {
      return seq(eof);
    }

    let desc = typeof options === "string" ? options : options.desc;
    let peekOptions = typeof options === "string" ? undefined : options;

    let next = iterator.peek(desc, peekOptions);
    let result = callback(next.token);

    if (result === undefined) {
      return seq(err(next.reject(), "mismatch", iterator));
    }

    next.commit();

    return seq(ok(result, iterator));
  };
}

export function expand<T>(
  shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>
): (iterator: TokensIterator) => Sequence<T> {
  return iterator => {
    let shape =
      typeof shapeOrClass === "function" ? new shapeOrClass() : shapeOrClass;
    iterator[CONTEXT].tracer.preInvoke(shape, iterator[TOKENS][iterator[POS]]);
    let result = shape[EXPAND](iterator);
    iterator[CONTEXT].tracer.postInvoke(
      shape,
      result,
      iterator[TOKENS][iterator[POS]]
    );

    return seq(result) as Sequence<T> & Result<T>;
  };
}

export class TokensIteratorTransaction extends TokensIterator {
  constructor(
    tokens: readonly Token[],
    context: ParseContext,
    pos = 0,
    private transactionParent: TokensIterator
  ) {
    super(tokens, context, pos);
  }

  #committed = false;
  #rolledBack = false;

  commit(): void {
    if (this.#committed) {
      throw new Error(`ASSERT: can only commit a transaction once`);
    }

    this.#committed = true;
    this.transactionParent.commitTransaction(this[POS]);
  }

  rollback(): void {
    if (this.#committed) {
      throw new Error(`ASSERT: can only commit a transaction once`);
    }

    this.#rolledBack = true;
    this.transactionParent.rollbackTransaction(this[POS]);
  }

  finallyRollback(): void {
    if (!this.#committed) {
      this.rollback();
    }
  }
}
