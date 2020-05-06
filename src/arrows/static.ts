/**
 * This file implements a JS DSL that corresponds to the speculative syntax in `example.elixir`
 *
 * Vocabulary:
 *
 * - thunk: a function that takes no parameters and returns a value
 * - expression: an expression is an arrow that evaluates to a value
 * - statement: a statement is an arrow that either evaluates to a value
 *   *or* affects the control flow of the block it is contained inside.
 *
 * Each Arrow class defined in this file comes along with a method for
 * constructing the arrow on `Host`, which produces arrows for the host's
 * implementation of `State`.
 */

import { isOk, Result } from "../parser/shape";
import type {
  CompilableExpression,
  CompilableStatement,
  State,
  EvaluatableStatement,
  EvaluatableExpression,
} from "./interfaces";
import {
  Block,
  Expression,
  Statement,
  List,
  ListEvaluationOutput,
  RecordEvaluationOutput,
  RuntimeRecord,
} from "./runtime";
import { unreachable, unsafeCast } from "./assert";

/**
 * A `WithArgs` arrow takes a compilable arrow and its static parameters, and produces
 * a new compilable arrow with no static parameters.
 */
export class WithArgs<In, Out, S extends State, Static extends []>
  implements CompilableExpression<In, Out, S, []> {
  #arrow: CompilableExpression<In, Out, S, Static>;
  #parameters: Static;

  constructor(
    arrow: CompilableExpression<In, Out, S, Static>,
    parameters: Static
  ) {
    this.#arrow = arrow;
    this.#parameters = parameters;
  }

  compile(): EvaluatableExpression<In, Out, S> {
    return this.#arrow.compile(...this.#parameters);
  }

  try<OutOkValue>(
    this: CompilableExpression<In, Result<OutOkValue>, S, Static>
  ): CompilableStatement<In, OutOkValue, S, Static> {
    return new ReturnIfErr(this);
  }
}

export class GetState<S extends State>
  implements CompilableExpression<void, S, S, []> {
  compile(): EvaluatableExpression<void, S, S> {
    return new Expression((state, _input) => state);
  }
}

/**
 * A `Pure` arrow takes a bunch of static parameters, which are evaluated once,
 * and an input, which is evaluated once per arrow evaluation.
 *
 * It doesn't have access to the state.
 */
export class Pure<In, Out, S extends State, Static extends []>
  implements CompilableExpression<In, Out, S, Static> {
  #callback: (...staticParameters: Static) => (input: In) => Out;

  constructor(callback: (...staticParameters: Static) => (input: In) => Out) {
    this.#callback = callback;
  }

  compile(...parameters: Static): EvaluatableExpression<In, Out, S> {
    let inner = this.#callback(...parameters);
    return new Expression((_state, input) => inner(input));
  }
}

/**
 * A `Pipeline` takes an arrow that produces a T and an arrow that takes a T
 * and produces a new arrow pipelining their computation.
 */
export class Pipeline<In, Middle, Out, S extends State>
  implements CompilableExpression<In, Out, S, []> {
  #left: CompilableExpression<In, Middle, S, []>;
  #right: CompilableExpression<Middle, Out, S, []>;

  constructor(
    left: CompilableExpression<In, Middle, S, []>,
    right: CompilableExpression<Middle, Out, S, []>
  ) {
    this.#left = left;
    this.#right = right;
  }

  compile(): EvaluatableExpression<In, Out, S> {
    let left = this.#left.compile();
    let right = this.#right.compile();

    return new Expression((state, input) => {
      let middle = left.evaluateExpression(state, input);
      return right.evaluateExpression(state, middle);
    });
  }
}

/**
 * A `Source` arrow takes a thunk for a JavaScript value and compiles into
 * an expression that evaluates to that value.
 */
export class Source<Out> implements CompilableExpression<void, Out, State, []> {
  #value: () => Out;

  constructor(value: () => Out) {
    this.#value = value;
  }

  compile(): EvaluatableExpression<void, Out, State> {
    let value = this.#value();
    return new Expression((_state, _input) => value);
  }
}

/**
 * A `Block` corresponds to a sequence of operations.
 *
 * A `Try` inside of a `Block` causes the entire block to produce Err
 * if the arrow produced Err.
 *
 * A `Produce` inside of a `Block` causes the entire block to produce
 * the value produced by that arrow, provided the final arrow finished
 * successfully.
 */
export class CompilableBlock<In, Out, S extends State>
  implements CompilableStatement<In, Out, S, []> {
  #statements: readonly CompilableStatement<In, Out, S, []>[];
  #last: CompilableStatement<In, Out, S, []>;

  constructor(
    arrows: readonly CompilableStatement<In, Out, S, []>[],
    last: CompilableStatement<In, Out, S, []>
  ) {
    this.#statements = arrows;
    this.#last = last;
  }

  compile(): EvaluatableStatement<In, Out, S> {
    let head = this.#statements.map(arrow => arrow.compile());
    let last = this.#last.compile();
    return new Block(head, last);
  }
}

/**
 * This mapper maps an array of compilable statements into an array of
 * evaluatable statements, without losing type information.
 */
export type EvaluatableStatementList<
  Statements extends readonly CompilableStatement<unknown, unknown, State, []>[]
> = {
  [Index in keyof Statements]: Statements[Index] extends CompilableStatement<
    infer In,
    infer Out,
    infer S,
    []
  >
    ? EvaluatableStatement<In, Out, S>
    : never;
};

/**
 * This mapper maps an array of compilable statements into an array of
 * outputs, without losing type information.
 */
export type ListOutput<
  Statements extends readonly CompilableStatement<unknown, unknown, State, []>[]
> = ListEvaluationOutput<EvaluatableStatementList<Statements>>;

/**
 * A `List` corresponds to a number of operations. If all of the operations
 * succeed, the `List` evaluates into an array of the outputs.
 *
 * Otherwise, the `List` evaluates into an error.
 */
export class CompilableList<
  S extends State,
  In,
  Statements extends readonly CompilableStatement<In, unknown, S, []>[]
> implements CompilableStatement<In, ListOutput<Statements>, S, []> {
  #statements: Statements;

  constructor(statements: Statements) {
    this.#statements = statements;
  }

  compile(): EvaluatableStatement<In, ListOutput<Statements>, S> {
    let statements = this.#statements.map(arrow => arrow.compile());

    // The `map` method on arrays isn't precise enough for TypeScript
    // to believe this, so assert it.
    unsafeCast<EvaluatableStatementList<Statements>>(statements);

    return new List(statements);
  }
}

export type StatementRecord = {
  readonly [key: string]: CompilableStatement<unknown, unknown, State, []>;
};

/**
 * This mapper maps a dictionary of compilable statements into a dictionary of
 * evaluatable statements, without losing type information.
 */
export type EvaluatableStatementRecord<Statements extends StatementRecord> = {
  [P in keyof Statements]: Statements[P] extends CompilableStatement<
    infer In,
    infer Out,
    infer S,
    []
  >
    ? EvaluatableStatement<In, Out, S>
    : never;
};

/**
 * This mapper maps a record of compilable statements into an array of
 * outputs, without losing type information.
 */
export type RecordOutput<
  Statements extends StatementRecord
> = RecordEvaluationOutput<EvaluatableStatementRecord<Statements>>;

export class CompilableRecord<
  S extends State,
  In,
  Statements extends StatementRecord
> implements CompilableStatement<In, RecordOutput<Statements>, S, []> {
  #statements: StatementRecord;

  constructor(statements: StatementRecord) {
    this.#statements = statements;
  }

  compile(): EvaluatableStatement<In, RecordOutput<Statements>, S> {
    let out: { [key: string]: EvaluatableStatement<unknown, unknown, S> } = {};

    for (let [key, value] of Object.entries(this.#statements)) {
      out[key] = value.compile();
    }

    unsafeCast<EvaluatableStatementRecord<Statements>>(out);

    return new RuntimeRecord(out);
  }
}

/**
 * A `Def` corresponds to a *parameterized* sequence of operations.
 *
 * Each statement in the list is compiled using the parameters passed
 * to the `Def`'s `compile` method, producing a `Block`.
 */
export class Def<In, Out, S extends State, Static extends []>
  implements CompilableStatement<In, Out, S, Static> {
  #arrows: readonly CompilableStatement<In, Out, S, Static>[];
  #last: CompilableStatement<In, Out, S, Static>;

  constructor(
    arrows: readonly CompilableStatement<In, Out, S, Static>[],
    last: CompilableStatement<In, Out, S, Static>
  ) {
    this.#arrows = arrows;
    this.#last = last;
  }

  compile(...parameters: Static): EvaluatableStatement<In, Out, S> {
    let head = this.#arrows.map(arrow => arrow.compile(...parameters));
    let last = this.#last.compile(...parameters);

    return new Block(head, last);
  }
}

/**
 * A `ReturnIfErr` adapts an expression arrow returning a runtime `Result` into a statement
 * arrow capable of producing values in a block.
 */
export class ReturnIfErr<In, Out, S extends State, Static extends []>
  implements CompilableStatement<In, Out, S, Static> {
  #arrow: CompilableExpression<In, Result<Out>, S, Static>;

  constructor(arrow: CompilableExpression<In, Result<Out>, S, Static>) {
    this.#arrow = arrow;
  }

  compile(...parameters: Static): EvaluatableStatement<In, Out, S> {
    let inner = this.#arrow.compile(...parameters);
    return new Statement((state, input) => {
      let result = inner.evaluateExpression(state, input);

      if (isOk(result)) {
        return {
          type: "Ok",
          value: result.value,
        };
      } else {
        return {
          type: "Err",
          reason: result,
        };
      }
    });
  }
}

/**
 * An `Atomic` takes a statement arrow and turns it into a transaction on the state.
 *
 * The evaluation steps of `Atomic` are:
 *
 * 1. call begin() on the State
 * 2. if the result of evaluating the statement arrow is a success (`Ok` or `Produce`)
 *   a. call commit() on the State
 * 3. otherwise,
 *   a. call rollback() on the State
 * 4. return the result
 */
export class Atomic<In, Out, S extends State, Static extends []>
  implements CompilableStatement<In, Out, S, Static> {
  #arrow: CompilableStatement<In, Out, S, Static>;

  constructor(arrow: CompilableStatement<In, Out, S, Static>) {
    this.#arrow = arrow;
  }

  compile(...parameters: Static): Statement<In, Out, S> {
    let inner = this.#arrow.compile(...parameters);

    return new Statement((state, input) => {
      let token = state.begin();
      let result = inner.evaluateStatement(state, input);

      switch (result.type) {
        case "Ok":
        case "Produce":
          state.commit(token);
          break;
        case "Err":
          state.rollback(token);
          break;
        default:
          unreachable(result);
      }

      return result;
    });
  }
}
