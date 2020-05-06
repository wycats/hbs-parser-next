import { arrow } from "hbs-parser-next";

const { ok, err, span, invariant } = arrow;
import SourceSpan = arrow.SourceSpan;
import Result = arrow.Result;
import Source = arrow.Source;
import InvariantViolation = arrow.InvariantViolation;
import TransactionToken = arrow.TransactionToken;
import { IntoPattern, intoPattern, Pattern } from "./pattern";

/**
 * EOF is a special value that corresponds to the end of a source string.
 */
export const EOF = Symbol("EOF");

/**
 * The required implementation of `TransactionToken`
 */
class ReaderTransaction extends TransactionToken {
  #parent: Reader;
  #current: Reader;
  #committed = false;
  #rolledBack = false;

  constructor(current: Reader, parent: Reader) {
    super();
    this.#current = current;
    this.#parent = parent;
  }

  /**
   * Assert that a single transaction can only be committed or
   * rolled back once.
   */
  private assertActive() {
    arrow.invariant(
      !this.#committed && !this.#rolledBack,
      InvariantViolation.ClosedTransaction
    );
  }

  /**
   * Commit the current transaction, returning the current reader
   * and the parent reader. The `Reader` class is responsible for
   * updating the parent reader.
   */
  commit(): { current: Reader; parent: Reader } {
    this.assertActive();
    this.#committed = true;
    return { current: this.#current, parent: this.#parent };
  }

  /**
   * Roll back the current transaction, returning the parent reader.
   * Since the transaction is rolled back, the `Reader` class
   * doesn't need to do anything other than replace the current
   * reader with the parent.
   */
  rollback(): Reader {
    this.assertActive();
    this.#rolledBack = true;
    return this.#parent;
  }
}

export interface ReaderState {
  readonly pos: number;
  readonly source: Source;
}

/**
 * This class is responsible for reading tokens from the source
 */
export class Reader {
  static crate(string: string): Reader {
    return new Reader(new Source(string));
  }

  /**
   * The internal state of the reader. This is separated from other
   * private fields because the rest of the class should always go
   * through `#current` to get the current state.
   */
  #state: ReaderState;

  /**
   * This is the current `Reader`. When there is an active transaction,
   * the `#current` reader is replaced with the reader for the transaction.
   *
   * Only `begin`, `commit` and `rollback` should manipulate `#current`
   * directly. Everything else should use the `state` getter and setter,
   * which indirects through `#current`.
   */
  #current: Reader = this;

  constructor(source: Source, pos = 0) {
    this.#state = {
      pos,
      source,
    };
  }

  private get state(): ReaderState {
    return this.#current.#state;
  }

  private set state(value: ReaderState) {
    this.#current.#state = value;
  }

  private get pos(): number {
    return this.state.pos;
  }

  private get source(): Source {
    return this.state.source;
  }

  private advancePos(count: number): void {
    this.state = { ...this.#state, pos: this.#state.pos + count };
  }

  /**
   * The implementation of `begin` for `arrow.State`
   */
  begin(): ReaderTransaction {
    let reader = new Reader(this.#state.source, this.#state.pos);
    let transaction = new ReaderTransaction(reader, this.#current);
    this.#current = reader;
    return transaction;
  }

  /**
   * The implementation of `commit` for `arrow.State`
   */
  commit(token: ReaderTransaction): void {
    let { current, parent } = token.commit();
    parent.#state = { ...parent.#state, pos: current.#state.pos };
    this.#current = parent;
  }

  /**
   * The implementation of `rollback` for `arrow.State`
   */
  rollback(token: ReaderTransaction): void {
    let parent = token.rollback();
    this.#current = parent;
  }

  /**
   * Try to match the pattern. If the match succeeds, `tryMatch` returns
   * Ok<SourceSpan>. If the match fails, `tryMatch` returns Err.
   */
  tryMatch(pattern: IntoPattern): Result<SourceSpan> {
    let result = this.match(pattern);

    if (result === null) {
      return err("mismatch");
    } else {
      return ok(result);
    }
  }

  /**
   * Match the pattern. If the match succeeds, `match` returns
   * SourceSpan. If the match fails, `match` returns null.
   */
  match(pattern: IntoPattern): SourceSpan | null {
    let start = this.pos;
    let rest = this.source.slice(start);

    if (rest === null) {
      return null;
    }

    let count = intoPattern(pattern).match(rest);

    if (count === null) {
      return null;
    }

    this.advancePos(count);
    return span(start, this.pos);
  }
}
