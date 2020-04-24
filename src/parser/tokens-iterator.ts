import type { ParentToken, Token } from "../read/tokens";
import { unwrap } from "../read/utils";
import type { ParseTracer } from "./debug";
import {
  ArrowState,
  err,
  isErr,
  isOk,
  ok,
  ParserArrow,
  ParseResult,
  isParseErr,
} from "./shape";

export const TOKENS = Symbol("TOKENS");
export const CONTEXT = Symbol("CONTEXT");
export const POS = Symbol("POS");
export const ITERATOR_SOURCE = Symbol("SOURCE");

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

  get token(): Token | undefined {
    return this.iterator[TOKENS][this.pos];
  }
}

export interface ParseContext {
  source: string;
  tracer: ParseTracer;
}

export class TokensIteratorState implements ArrowState {
  constructor(private iterator: TokensIterator) {
    if (new.target !== TokensIteratorState) {
      throw new Error(`TokensIteratorState is final`);
    }
  }

  get [ITERATOR_SOURCE](): string {
    return this.iterator[ITERATOR_SOURCE];
  }

  lookahead(): Token | undefined {
    let next = this.iterator.peek("lookahead");
    next.ignore();
    return next.token;
  }

  atomic<T>(
    callback: (state: this) => [this, ParseResult<T>]
  ): [this, ParseResult<T>] {
    let result = this.iterator.atomic(iterator => {
      let state = new TokensIteratorState(iterator);
      let [newState, result] = callback(state as this);

      if (isOk(result)) {
        return ok([newState, result] as [this, ParseResult<T>]);
      } else {
        return result;
      }
    });

    if (isOk(result)) {
      return [this, result.value[1]];
    } else {
      return [this, result];
    }
  }

  label<T>(desc: string, callback: (state: this) => [this, T]): [this, T] {
    let innerState: this | undefined;

    let result = this.iterator.label(desc, iterator => {
      let [state, result] = callback(new TokensIteratorState(iterator) as this);
      innerState = state;
      return result;
    });

    return [unwrap(innerState), result];
  }

  next<T>(
    desc: string,
    callback: (token: Token | undefined) => ParseResult<T>
  ): ParseResult<T> {
    return this.iterator.next(desc, callback);
  }

  parent<T, K extends ParentToken["type"]>(
    desc: string,
    tokenType: K,
    arrow: ParserArrow<void, ParseResult<T>>
  ): ParseResult<{
    result: T;
    token: Token;
  }> {
    return this.iterator.processChildren(desc, tokenType, iterator => {
      let [, result] = arrow.invoke(iterator.arrowState);
      return result;
    });
  }
}

export default class TokensIterator {
  readonly [TOKENS]: readonly Token[];
  readonly [CONTEXT]: ParseContext;
  [POS]: number;

  protected activeTransaction: TokensIteratorTransaction | null = null;

  constructor(tokens: readonly Token[], context: ParseContext, pos = 0) {
    this[TOKENS] = tokens;
    this[CONTEXT] = context;
    this[POS] = pos;
  }

  get arrowState(): TokensIteratorState {
    return new TokensIteratorState(this);
  }

  get [ITERATOR_SOURCE](): string {
    return this[CONTEXT].source;
  }

  assertNotEOF(): ParseResult<void> {
    let next = this.peek("eof");
    if (next.isEOF) {
      return err(next.reject().token || "EOF", {
        type: "unexpected-eof",
      }) as ParseResult<void>;
    } else {
      next.ignore();
      return ok(undefined);
    }
  }

  start<T>(step: (iterator: TokensIterator) => T): T {
    return step(this);
  }

  ok<T>(value: T): ParseResult<T> {
    return ok(value);
  }

  label<T>(desc: string, callback: (iterator: TokensIterator) => T): T {
    this[CONTEXT].tracer.preInvoke(
      { desc, isLeaf: false },
      this[TOKENS][this[POS]]
    );

    let result = callback(this);

    this[CONTEXT].tracer.postInvoke({ desc }, result, this[TOKENS][this[POS]]);

    return result;
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
      err(peeked.token || "EOF", {
        type: "rejected",
        token: peeked.token || "EOF",
      }),
      this[TOKENS][pos]
    );
  }

  peekFailure(desc: string, reason: "ignored" | "optional"): void {
    this[CONTEXT].tracer.postInvokeFailure({ desc }, reason);
  }

  silentPeek(desc: string): PeekedToken {
    return new PeekedToken(this, desc, this[POS]);
  }

  get source(): string {
    return this[CONTEXT].source;
  }

  withChildTokens(tokens: readonly Token[]): TokensIterator {
    return new TokensIterator(tokens, this[CONTEXT]);
  }

  atomic<T>(
    callback: (iterator: TokensIterator) => ParseResult<T>
  ): ParseResult<T> {
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
    callback: (t: TokensIterator) => ParseResult<T>
  ): ParseResult<T> {
    let child = this.withChildTokens(tokens);
    let result = callback(child);

    if (result.kind === "err") {
      return result;
    }

    let eof = child.peek("eof");

    if (eof.token === undefined) {
      eof.ignore();
    } else {
      eof.reject();
      return err(eof.token, {
        type: "mismatch",
        expected: "EOF",
        actual: eof.token,
      });
    }

    return result;
  }

  processChildren<T, K extends ParentToken["type"]>(
    desc: string,
    tokenType: K,
    step: (iterator: TokensIterator) => ParseResult<T>
  ): ParseResult<{ result: T; token: Token }> {
    let next = this.peek(desc, { isLeaf: false });

    if (next.token === undefined) {
      next.reject();
      return err("EOF", { type: "unexpected-eof" });
    } else if (next.token.type !== tokenType) {
      next.reject();
      return err(next.token, {
        type: "mismatch",
        expected: tokenType,
        actual: next.token,
      });
    } else {
      let result = this.processInner(next.token.children, step);

      if (isParseErr(result)) {
        next.reject();
        return result;
      }

      next.commit();

      return ok({ result: result.value, token: next.token });
    }
  }

  next<T>(
    desc: string,
    callback: (token: Token | undefined) => ParseResult<T>
  ): ParseResult<T> {
    let next = this.peek(desc);
    let result = callback(next.token);

    if (isErr(result)) {
      let token = next.reject().token;
      return err(token || "EOF", { type: "rejected", token: token || "EOF" });
    }

    next.commit();

    return ok(result.value);
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
