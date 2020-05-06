import type {
  CompilableExpression,
  State,
  CompilableStatement,
  EvaluatableStatement,
  EvaluatableExpression,
  StatementResult,
} from "./interfaces";
import type { Expression } from "./runtime";
import {
  WithArgs,
  Pure,
  Pipeline,
  Source,
  CompilableBlock,
  Def,
  ReturnIfErr,
  Atomic,
  GetState,
  CompilableList,
} from "./static";
import type { Result } from "../parser/shape";

/**
 * A `Host` is created by the environment that is using the arrows.
 *
 * It is responsible for compiling and evaluating the arrows produced
 * by `HostOperations` with a concrete instance of its `State`.
 */
export class Host<S extends State> {
  #state: S;

  constructor(state: S) {
    this.#state = state;
  }

  /**
   * Compile a `CompilableExpression` into an `Evaluatable`.
   */
  compileExpr<In, Out, Static extends []>(
    compilable: CompilableExpression<In, Out, S, Static>,
    ...parameters: Static
  ): EvaluatableExpression<In, Out, S> {
    return compilable.compile(...parameters);
  }

  /**
   * Compile a `CompilableStatement` into an `EvaluatableStatement`.
   */
  compileStatement<In, Out, Static extends []>(
    compilable: CompilableStatement<In, Out, S, Static>,
    ...parameters: Static
  ): EvaluatableStatement<In, Out, S> {
    return compilable.compile(...parameters);
  }

  /**
   * Evaluate an `EvaluatableExpression`, passing in the current state and input,
   * and returning the output.
   */
  evaluateExpression<In, Out>(
    expr: EvaluatableExpression<In, Out, S>,
    input: In
  ): Out {
    return expr.evaluateExpression(this.#state, input);
  }

  /**
   * Evaluate an `EvaluatableStatement`, passing in the current state and input,
   * and returning the output.
   */
  evaluateStatement<In, Out>(
    statement: EvaluatableStatement<In, Out, S>,
    input: In
  ): StatementResult<Out> {
    return statement.evaluateStatement(this.#state, input);
  }
}

/**
 * A `HostOperations` is created by the environment that is using the arrows.
 *
 * It ties together the concrete `State` in the host environment
 * with the abstract arrow implementations.
 */
export class HostOperations<S extends State> {
  withArgs<In, Out, Static extends []>(
    arrow: CompilableExpression<In, Out, S, Static>,
    parameters: Static
  ): CompilableExpression<In, Out, S, []> {
    return new WithArgs(arrow, parameters);
  }

  state(): CompilableExpression<void, S, S, []> {
    return new GetState();
  }

  host<In, Out, Static extends []>(
    callback: (...staticParameters: Static) => (input: In) => Out
  ): CompilableExpression<In, Out, S, Static> {
    return new Pure(callback);
  }

  pipeline<In, Middle, Out>(
    left: CompilableExpression<In, Middle, S, []>,
    right: CompilableExpression<Middle, Out, S, []>
  ): CompilableExpression<In, Out, S, []> {
    return new Pipeline(left, right);
  }

  source<Out>(value: () => Out): CompilableExpression<void, Out, S, []> {
    return new Source(value);
  }

  block<In, Out>(
    arrows: readonly CompilableStatement<In, Out, S, []>[],
    last: CompilableStatement<In, Out, S, []>
  ): CompilableExpression<In, Result<Out>, S, []> {
    return new CompilableBlock(arrows, last);
  }

  list<
    S extends State,
    In,
    Statements extends ReadonlyArray<CompilableStatement<In, unknown, S, []>>
  >(statements: Statements) {
    return new CompilableList(statements);
  }

  def<In, Out, Static extends []>(
    arrows: readonly CompilableStatement<In, Out, S, Static>[],
    last: CompilableStatement<In, Out, S, Static>
  ): CompilableExpression<In, Result<Out>, S, Static> {
    return new Def(arrows, last);
  }

  try<In, Out, Static extends []>(
    arrow: CompilableExpression<In, Result<Out>, S, Static>
  ): CompilableStatement<In, Out, S, Static> {
    return new ReturnIfErr(arrow);
  }

  atomic<In, Out, Static extends []>(
    arrow: CompilableStatement<In, Out, S, Static>
  ): CompilableStatement<In, Out, S, Static> {
    return new Atomic(arrow);
  }
}

export function build<S extends State>(): HostOperations<S> {
  return new HostOperations();
}
