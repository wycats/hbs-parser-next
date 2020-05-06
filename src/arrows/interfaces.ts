import type { Err, Result } from "../parser/shape";

/**
 * The `TransactionToken` class is an opaque value that is passed between `begin` and
 * `rollback` or `commit` on an implementation of `State`. Its main purpose
 * is to allow implementations of `State` to do bookkeeping.
 */
export abstract class TransactionToken {}

/**
 * A `State` is an object supplied by the host implementation.
 *
 * It has two main purposes:
 *
 * 1. Its API is available to callbacks passed to `host`
 * 2. `atomic` uses `begin`, `commit` and `rollback` to turn a
 *    statement arrow into a transaction.
 *
 * `State` corresponds to a stateful object.
 *
 * The design of `State` assumes that most `host` operations either
 * change the state successfully or fail to change the state.
 *
 * The `atomic` operation allows compound operations that can partially
 * succeed.
 */
export interface State {
  /**
   * A transaction has begun.
   */
  begin(): TransactionToken;
  /**
   * The transaction succeeded.
   */
  commit(token: TransactionToken): void;
  /**
   * The transaction failed.
   */
  rollback(token: TransactionToken): void;
}

/**
 * An `EvaluatableStatement` is a runtime arrow that takes state and input and
 * produces output and possibly control flow effects.
 */
export interface EvaluatableStatement<In, Out, S extends State> {
  evaluateStatement(state: S, input: In): StatementResult<Out>;
}

/**
 * An `EvaluatableExpression` is a runtime arrow that takes state and input and
 * produces output. It implements `EvaluatableStatement` so that expressions
 * can be used in contexts where statements are expected.
 */
export interface EvaluatableExpression<In, Out, S extends State>
  extends EvaluatableStatement<In, Out, S> {
  evaluateExpression(state: S, input: In): Out;
}

/**
 * A `CompilableExpression` can be compiled into an `Evaluatable` by taking
 * in any static parameters.
 *
 * A `CompilableExpression` is also a `CompilableStatement`, because an
 * expression is also a statement (an expression is lifted into an Ok statement).
 */
export interface CompilableExpression<
  In,
  Out,
  S extends State,
  Static extends []
> extends CompilableStatement<In, Out, S, Static> {
  compile(...parameters: Static): EvaluatableExpression<In, Out, S>;
}

/**
 * A `CompilableStatement` can be compiled into a `Statement` by taking in
 * any static parameters.
 */
export interface CompilableStatement<
  In,
  Out,
  S extends State,
  Static extends []
> {
  compile(...parameters: Static): EvaluatableStatement<In, Out, S>;
}

/**
 * A `StatementResult` is the result of evaluating a statement. It either
 * contains the result of evaluating the expression, or it contains
 * control flow effects:
 *
 * - Err: the block containing this statement should evaluate to this
 *   error, and no further statements should evaluate.
 * - Produce: the block containing this statement should evaluate to
 *   the value contained inside `Produce`, provided all further statements
 *   evaluate as Ok.
 *
 * Invariant: once a statement evaluates to `Produce`, no further statements may
 * evaluate to `Produce`.
 */
export type StatementResult<T> =
  | {
      type: "Ok";
      value: T;
    }
  | {
      type: "Err";
      reason: Err;
    }
  | {
      type: "Produce";
      value: T;
    };

/**
 * The `Produces` type is a special `StatementResult` that must **produce** a `T`,
 * but is permitted to evaluate to another value. It corresponds to statements in
 * the middle of a block.
 */
export type Produces<T, V> =
  | { type: "Produce"; value: T }
  | { type: "Ok"; value: V }
  | { type: "Err"; reason: Err };
