import type { Token } from "../read/tokens";
import type { SourceSpan } from "../span";
import { Result, Shape, EXPAND, err, ok, Sequence, seq } from "./shape";
import type { ParseTracer } from "./debug";

export const TOKENS = Symbol("TOKENS");

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

  constructor(
    tokens: readonly Token[],
    private context: ParseContext,
    protected pos = 0
  ) {
    this[TOKENS] = tokens;
  }

  assertNotEOF(): Result<null> {
    let next = this.peek("eof");

    if (next.isEOF) {
      return err(next.reject(), "eof");
    } else {
      return ok(next.ignore());
    }
  }

  assertEOF(): Result<null> {
    let next = this.peek("eof");

    if (next.isEOF) {
      return ok(next.ignore());
    } else {
      return err(next.reject(), "eof");
    }
  }

  consume<T>(
    options: string | { desc: string; isLeaf: boolean },
    callback: (token: Token) => T | void | undefined
  ): Result<T> & Sequence<T> {
    let eof = this.assertNotEOF();
    if (eof.kind === "err") {
      return seq(eof);
    }

    let desc = typeof options === "string" ? options : options.desc;
    let peekOptions = typeof options === "string" ? undefined : options;

    let next = this.peek(desc, peekOptions);
    let result = callback(next.token);

    if (result === undefined) {
      return seq(err(next.reject(), "mismatch"));
    }

    next.commit();

    return seq(ok(result));
  }

  consumeParent<T>(
    options: string | { desc: string; isLeaf: boolean },
    callback: (token: Token) => Result<T> | void
  ): Result<{ result: T; token: Token }> &
    Sequence<{ result: T; token: Token }> {
    let eof = this.assertNotEOF();
    if (eof.kind === "err") {
      return seq(eof);
    }

    let desc = typeof options === "string" ? options : options.desc;
    let peekOptions = typeof options === "string" ? undefined : options;

    let next = this.peek(desc, peekOptions);
    let result = callback(next.token);

    if (result === undefined) {
      return seq(err(next.reject(), "mismatch"));
    } else if (result.kind === "err") {
      next.reject();
      return seq(result);
    }

    next.commit();

    return seq(ok({ result: result.value, token: next.token }));
  }

  assertNotNext(
    desc: string,
    callback: (token: Token) => boolean
  ): Sequence<null> & Result<null> {
    let next = this.peek(desc);

    if (next.token !== undefined && callback(next.token)) {
      return seq(err(next.reject(), "lookahead"));
    } else {
      next.ignore();
      return seq(ok(null));
    }
  }

  peek(
    desc: string,
    options: { isLeaf: boolean } = { isLeaf: true }
  ): PeekedToken {
    this.context.tracer.preInvoke(
      { desc, isLeaf: options.isLeaf },
      this[TOKENS][this.pos]
    );
    return new PeekedToken(this, desc, this.pos);
  }

  expandShape<T>(shape: Shape<T>): T {
    this.context.tracer.preInvoke(shape, this[TOKENS][this.pos]);
    let result = shape[EXPAND](this);
    this.context.tracer.postInvoke(shape, result, this[TOKENS][this.pos]);
    return result;
  }

  expand<T>(shapeOrClass: { new (): Shape<T> } | Shape<T>): T {
    let shape =
      typeof shapeOrClass === "function" ? new shapeOrClass() : shapeOrClass;
    this.context.tracer.preInvoke(shape, this[TOKENS][this.pos]);
    let result = shape[EXPAND](this);
    this.context.tracer.postInvoke(shape, result, this[TOKENS][this.pos]);
    return result;
  }

  spanned<T>(
    callback: () => Result<(span: SourceSpan) => Result<T>>
  ): Result<T> {
    let start = this.pos;
    let cb = callback();

    if (cb.kind === "err") {
      return cb;
    }

    let end = this.pos;

    return cb.value({ start, end });
  }

  get source(): string {
    return this.context.source;
  }

  child(tokens: readonly Token[]): TokensIterator {
    return new TokensIterator(tokens, this.context);
  }

  commitPeek(desc: string, pos: number): Token {
    if (this.pos !== pos) {
      throw new Error(
        `assert: can't commit a peeked token after the iterator advanced`
      );
    }

    this.pos++;
    this.context.tracer.postInvoke(
      { desc },
      this[TOKENS][pos],
      this[TOKENS][pos]
    );
    return this[TOKENS][this.pos - 1];
  }

  rejectPeek(
    desc: string,
    pos: number,
    peeked: PeekedToken & { rejected: true }
  ): void {
    this.context.tracer.postInvoke(
      { desc },
      err(peeked, "rejected"),
      this[TOKENS][pos]
    );
  }

  peekFailure(desc: string, reason: "ignored" | "optional"): void {
    this.context.tracer.postInvokeFailure({ desc }, reason);
  }

  begin(): TokensIteratorTransaction {
    this.context.tracer.begin();
    return new TokensIteratorTransaction(
      this[TOKENS],
      this.context,
      this.pos,
      this
    );
  }

  commitTransaction(pos: number): void {
    if (this.pos > pos) {
      throw new Error(
        `assert: can't commit a transaction if it rewinds the position`
      );
    }
    this.context.tracer.commit();
    this.pos = pos;
  }

  rollbackTransaction(pos: number): void {
    if (this.pos > pos) {
      throw new Error(`assert: transaction's position is in the past`);
    }
    this.context.tracer.rollback();
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
    this.transactionParent.commitTransaction(this.pos);
  }

  rollback(): void {
    if (this.#committed) {
      throw new Error(`ASSERT: can only commit a transaction once`);
    }

    this.#rolledBack = true;
    this.transactionParent.rollbackTransaction(this.pos);
  }

  finallyRollback(): void {
    if (!this.#committed) {
      this.rollback();
    }
  }
}
