import type { Token, TokenType, TokenMap } from "../read/tokens";
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
  OkSequence,
  Step,
  isOk,
  SourceStep,
} from "./shape";
import type { ShapeConstructor } from "./shapes/abstract";

export const TOKENS = Symbol("TOKENS");
export const CONTEXT = Symbol("CONTEXT");
export const POS = Symbol("POS");
export const SOURCE = Symbol("SOURCE");

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

  silentReject(): PeekedToken & { rejected: true } {
    if (this.finished) {
      throw new Error(`assert: cannot reject already committed peeked token`);
    }

    this.#rejected = true;
    return this as PeekedToken & { rejected: true };
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

export interface CombinatorTokensIterator {
  // TODO: Figure out how to make this not necessary
  readonly [SOURCE]: string;
  start<T>(step: (iterator: CombinatorTokensIterator) => T): T;
  peek(desc: string, options?: { isLeaf: boolean }): PeekedToken;
  err<T>(desc: string, reason?: string): ErrSequence<T>;
  ok<T>(value: T): OkSequence<T>;
  atomic<T>(
    callback: (iterator: CombinatorTokensIterator) => Result<T>
  ): Sequence<T>;
  expandFallible<T>(
    shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>
  ): Sequence<T>;
  expandInfallible<T>(shapeOrClass: ShapeConstructor<T> | Shape<T>): T;
  withChildTokens(tokens: readonly Token[]): CombinatorTokensIterator;
}

export default class TokensIterator implements CombinatorTokensIterator {
  readonly [TOKENS]: readonly Token[];
  readonly [CONTEXT]: ParseContext;
  [POS]: number;

  protected activeTransaction: TokensIteratorTransaction | null = null;

  constructor(tokens: readonly Token[], context: ParseContext, pos = 0) {
    this[TOKENS] = tokens;
    this[CONTEXT] = context;
    this[POS] = pos;
  }

  get [SOURCE](): string {
    return this[CONTEXT].source;
  }

  start<T>(step: (iterator: CombinatorTokensIterator) => T): T {
    return step(this);
  }

  err<T>(desc: string, reason = "mismatch"): ErrSequence<T> {
    return seq(err(this.silentPeek(desc).token, reason), this) as ErrSequence<
      T
    >;
  }

  ok<T>(value: T): OkSequence<T> {
    return seq(ok(value), this);
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
      this[TOKENS][pos + 1]
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
      err(peeked.token, "rejected"),
      this[TOKENS][pos]
    );
  }

  peekFailure(desc: string, reason: "ignored" | "optional"): void {
    this[CONTEXT].tracer.postInvokeFailure({ desc }, reason);
  }

  silentPeek(desc: string): PeekedToken {
    return new PeekedToken(this, desc, this[POS]);
  }

  expandFallible<T>(
    shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>
  ): Sequence<T> {
    return this.expand(shapeOrClass, expanded => seq(expanded, this));
  }

  expandInfallible<T>(shapeOrClass: { new (): Shape<T> } | Shape<T>): T {
    return this.expand(shapeOrClass, expanded => expanded);
  }

  private expand<T, U>(
    shapeOrClass: { new (): Shape<T> } | Shape<T>,
    callback: (result: T) => U
  ): U {
    let shape =
      typeof shapeOrClass === "function" ? new shapeOrClass() : shapeOrClass;
    this[CONTEXT].tracer.preInvoke(shape, this[TOKENS][this[POS]]);
    let expanded = shape[EXPAND](this);
    let result = callback(expanded);
    this[CONTEXT].tracer.postInvoke(shape, result, this[TOKENS][this[POS]]);

    return result;
  }

  get source(): string {
    return this[CONTEXT].source;
  }

  withChildTokens(tokens: readonly Token[]): TokensIterator {
    return new TokensIterator(tokens, this[CONTEXT]);
  }

  atomic<T>(callback: (iterator: TokensIterator) => Result<T>): Sequence<T> {
    let transaction = this.begin();

    let result = callback(transaction);

    if (result.kind === "ok") {
      transaction.commit();
    } else {
      transaction.rollback();
    }

    return seq(result, this);
  }

  begin(): TokensIteratorTransaction {
    if (this.activeTransaction) {
      throw new Error(
        `ASSERT: Can only have one active transaction for a parent at a time`
      );
    }

    this[CONTEXT].tracer.begin(this[TOKENS][this[POS]]);
    let t = new TokensIteratorTransaction(
      this[TOKENS],
      this[CONTEXT],
      this[POS],
      this
    );

    this.activeTransaction = t;
    return t;
  }

  commitTransaction(pos: number, transaction: TokensIteratorTransaction): void {
    if (this[POS] > pos) {
      throw new Error(
        `assert: can't commit a transaction if it rewinds the position`
      );
    }

    if (transaction !== this.activeTransaction) {
      throw new Error(
        `ASSERT: Can only commit a transaction if it's the active transaction`
      );
    }

    this.activeTransaction = null;
    this[CONTEXT].tracer.commit();
    this[POS] = pos;
  }

  rollbackTransaction(
    pos: number,
    transaction: TokensIteratorTransaction
  ): void {
    if (this[POS] > pos) {
      throw new Error(`assert: transaction's position is in the past`);
    }

    if (transaction !== this.activeTransaction) {
      throw new Error(
        `ASSERT: Can only roll back a transaction if it's the active transaction`
      );
    }

    this.activeTransaction = null;

    this[CONTEXT].tracer.rollback();
  }

  processInner<T>(
    tokens: readonly Token[],
    callback: (t: TokensIterator) => Result<T>
  ): Result<T> {
    let child = this.withChildTokens(tokens);
    let result = callback(child);

    if (result.kind === "err") {
      return result;
    }

    let eof = child.start(assertEOF());

    if (eof.kind === "err") {
      return eof;
    }

    return result;
  }
}

export function start<T>(
  step: (iterator: CombinatorTokensIterator) => T
): (iterator: CombinatorTokensIterator) => T {
  return iterator => step(iterator);
}

export function atomic<T>(
  callback: (iterator: CombinatorTokensIterator) => Result<T>
): (iterator: CombinatorTokensIterator) => Sequence<T> {
  return iterator => iterator.atomic(callback);
}

export function inner<T>(
  tokens: readonly Token[],
  callback: (t: CombinatorTokensIterator) => Result<T>
): (iterator: CombinatorTokensIterator) => Result<T> {
  return iterator => {
    let child = iterator.withChildTokens(tokens);
    let result = callback(child);

    if (result.kind === "err") {
      // parent.reject();
      return result;
    }

    let eof = child.start(assertEOF());

    if (eof.kind === "err") {
      // parent.reject();
      return eof;
    }

    return result;
  };
}
export function assertNotNext(
  desc: string,
  callback: (token: Token) => boolean
): (iterator: CombinatorTokensIterator) => Sequence<null> {
  return iterator => {
    let next = iterator.peek(desc);

    if (next.token !== undefined && callback(next.token)) {
      next.reject();
      return iterator.err(desc, "lookahead");
    } else {
      next.ignore();
      return iterator.ok(null);
    }
  };
}

export function present<T>(
  desc: string
): (out: T[], iterator: CombinatorTokensIterator) => Result<T[]> {
  return (out, iterator) =>
    out.length === 0 ? iterator.err(desc, "empty") : iterator.ok(out);
}

export function presentStep<T>(desc: string): Step<T[], T[]> {
  return (iterator, prev) => {
    if (isOk(prev)) {
      return prev.value.length === 0
        ? iterator.err(desc, "empty")
        : iterator.ok(prev.value);
    } else {
      return prev;
    }
  };
}

export function repeat<T>(
  callback: (iterator: CombinatorTokensIterator) => Result<T>
): (iterator: CombinatorTokensIterator) => T[] {
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

export function repeatStep<T>(
  callback: (iterator: CombinatorTokensIterator) => Result<T>
): SourceStep<T[]> {
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

    return ok(out);
  };
}

export function many<T>(
  Shape: ShapeConstructor<Result<T>>
): (iterator: CombinatorTokensIterator) => T[] {
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

export function manyStep<T>(
  Shape: ShapeConstructor<Result<T>>
): SourceStep<T[]> {
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

    return ok(out);
  };
}

export function notEOF(): (
  iterator: CombinatorTokensIterator
) => Sequence<null> {
  return iterator => {
    let next = iterator.peek("eof");

    if (next.isEOF) {
      return seq(err(next.reject().token, "eof"), iterator);
    } else {
      return seq(ok(next.ignore()), iterator);
    }
  };
}

export function notEOFStep(): SourceStep<null> {
  return iterator => {
    let next = iterator.peek("eof");

    if (next.isEOF) {
      return err(next.reject().token, "eof");
    } else {
      return ok(next.ignore());
    }
  };
}

function assertEOF(): (iterator: CombinatorTokensIterator) => Result<null> {
  return iterator => {
    let next = iterator.peek("eof");

    if (next.isEOF) {
      return ok(next.ignore());
    } else {
      return err(next.reject().token, "eof");
    }
  };
}

export function consumeParent<T>(
  options: string | { desc: string; isLeaf: boolean },
  callback: (token: Token) => Result<T> | void
): (
  iterator: CombinatorTokensIterator
) => Sequence<{ result: T; token: Token }> {
  return iterator => {
    let eof = notEOF()(iterator);
    if (eof.kind === "err") {
      return seq(eof, iterator);
    }

    let desc = typeof options === "string" ? options : options.desc;
    let peekOptions = typeof options === "string" ? undefined : options;

    let next = iterator.peek(desc, peekOptions);
    let result = callback(next.token);

    if (result === undefined) {
      return seq(err(next.reject().token, "mismatch"), iterator);
    } else if (result.kind === "err") {
      next.reject();
      return seq(result, iterator);
    }

    next.commit();

    return seq(ok({ result: result.value, token: next.token }), iterator);
  };
}

export function consumeToken<
  K extends TokenType & keyof TokenMap,
  N extends string
>(
  name: N,
  tokenType: K
): (
  iterator: CombinatorTokensIterator
) => Sequence<ResultObject<N, TokenMap[K]>>;
export function consumeToken<K extends TokenType & keyof TokenMap>(
  tokenType: K
): (iterator: CombinatorTokensIterator) => Sequence<TokenMap[K]>;
export function consumeToken<
  K extends TokenType & keyof TokenMap,
  N extends string
>(
  nameOrTokenType: N | K,
  maybeTokenType?: K
): (
  iterator: CombinatorTokensIterator
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
    iterator: CombinatorTokensIterator
  ) => Sequence<TokenMap[K]> | Sequence<ResultObject<N, TokenMap[K]>>;
}

export function consumeTokenStep<
  K extends TokenType & keyof TokenMap,
  N extends string
>(name: N, tokenType: K): SourceStep<ResultObject<N, TokenMap[K]>>;
export function consumeTokenStep<K extends TokenType & keyof TokenMap>(
  tokenType: K
): SourceStep<TokenMap[K]>;
export function consumeTokenStep<
  K extends TokenType & keyof TokenMap,
  N extends string
>(
  nameOrTokenType: N | K,
  maybeTokenType?: K
): SourceStep<ResultObject<N, TokenMap[K]> | TokenMap[K]> {
  let name = maybeTokenType === undefined ? undefined : nameOrTokenType;
  let tokenType =
    maybeTokenType === undefined ? nameOrTokenType : maybeTokenType;

  return consumeStep(tokenType, token => {
    if (token.type === tokenType) {
      if (name !== undefined) {
        return { [name]: token };
      } else {
        return token;
      }
    }
  }) as SourceStep<ResultObject<N, TokenMap[K]> | TokenMap[K]>;
}

export function source(): (
  iterator: CombinatorTokensIterator
) => Sequence<string> {
  return iterator => seq(ok(iterator[SOURCE]), iterator);
}

export function sourceStep(): SourceStep<string> {
  return iterator => seq(ok(iterator[SOURCE]), iterator);
}

export function consume<T>(
  options: string | { desc: string; isLeaf: boolean },
  callback: (token: Token) => T | undefined
): (iterator: CombinatorTokensIterator) => Sequence<T> {
  return iterator => {
    let eof = notEOF()(iterator);
    if (eof.kind === "err") {
      return seq(eof, iterator);
    }

    let desc = typeof options === "string" ? options : options.desc;
    let peekOptions = typeof options === "string" ? undefined : options;

    let next = iterator.peek(desc, peekOptions);
    let result = callback(next.token);

    if (result === undefined) {
      return seq(err(next.reject().token, "mismatch"), iterator);
    }

    next.commit();

    return seq(ok(result), iterator);
  };
}

export function consumeStep<T>(
  options: string | { desc: string; isLeaf: boolean },
  callback: (token: Token) => T | undefined
): SourceStep<T> {
  return iterator => {
    let eof = notEOFStep()(iterator);
    if (eof.kind === "err") {
      return eof;
    }

    let desc = typeof options === "string" ? options : options.desc;
    let peekOptions = typeof options === "string" ? undefined : options;

    let next = iterator.peek(desc, peekOptions);
    let result = callback(next.token);

    if (result === undefined) {
      return err(next.reject().token, "mismatch");
    }

    next.commit();

    return ok(result);
  };
}

export function expand<T>(
  shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>
): (iterator: CombinatorTokensIterator) => Sequence<T> {
  return iterator => iterator.expandFallible(shapeOrClass);
}

export function expandStep<T>(
  shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>
): Step<void, T> {
  return iterator => iterator.expandFallible(shapeOrClass);
}

export function expandInfallible<T>(
  shapeOrClass: { new (): Shape<T> } | Shape<T>
): (iterator: CombinatorTokensIterator) => T {
  return iterator => iterator.expandInfallible(shapeOrClass);
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

  get isActive(): boolean {
    return !this.#committed && !this.#rolledBack;
  }

  begin(): TokensIteratorTransaction {
    if (this.#committed || this.#rolledBack) {
      throw new Error(
        `ASSERT: can't create a nested transaction for a committed or rolled back parent`
      );
    }

    return super.begin();
  }

  commit(): void {
    if (this.#committed || this.#rolledBack) {
      throw new Error(`ASSERT: can only commit a transaction once`);
    }

    if (this.activeTransaction) {
      throw new Error(
        `ASSERT: can't commit a transaction if it has active nested transactions`
      );
    }

    this.#committed = true;
    this.transactionParent.commitTransaction(this[POS], this);
  }

  rollback(): void {
    if (this.#committed || this.#rolledBack) {
      throw new Error(`ASSERT: can only commit a transaction once`);
    }

    if (this.activeTransaction) {
      throw new Error(
        `ASSERT: can't roll back a transaction if it has active nested transactions`
      );
    }

    this.#rolledBack = true;
    this.transactionParent.rollbackTransaction(this[POS], this);
  }

  commitTransaction(pos: number, transaction: TokensIteratorTransaction): void {
    if (this.#committed || this.#rolledBack) {
      throw new Error(
        `ASSERT: Can't commit a nested transaction if the parent is already committed or rolled back`
      );
    }

    super.commitTransaction(pos, transaction);
  }

  rollbackTransaction(
    pos: number,
    transaction: TokensIteratorTransaction
  ): void {
    if (this.#committed || this.#rolledBack) {
      throw new Error(
        `ASSERT: Can't commit a nested transaction if the parent is already committed or rolled back`
      );
    }

    super.rollbackTransaction(pos, transaction);
  }

  finallyRollback(): void {
    if (!this.#committed && !this.#rolledBack) {
      this.rollback();
    }
  }
}
