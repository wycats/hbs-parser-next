import type {
  StatementResult,
  EvaluatableStatement,
  State,
  EvaluatableExpression,
} from "./interfaces";
import { UNDEFINED } from "./sentinels";
import { invariant, violation, unsafeCast } from "./assert";
import { ok, Result } from "../parser/shape";
import { InvariantViolation } from "./errors";

/**
 * An `Expression` corresponds to a step of evaluation.
 */
export class Expression<In, Out, S extends State>
  implements EvaluatableExpression<In, Out, S> {
  #callback: (state: S, input: In) => Out;

  constructor(callback: (state: S, input: In) => Out) {
    this.#callback = callback;
  }

  evaluateExpression(state: S, input: In): Out {
    return this.#callback(state, input);
  }

  evaluateStatement(state: S, input: In): StatementResult<Out> {
    return { type: "Ok", value: this.#callback(state, input) };
  }
}

/**
 * A `Statement` corresponds to a step of evaluation inside a block,
 * and can control the value produced by the entire block.
 */
export class Statement<In, Out, S extends State>
  implements EvaluatableStatement<In, Out, S> {
  #callback: (state: S, input: In) => StatementResult<Out>;

  constructor(callback: (state: S, input: In) => StatementResult<Out>) {
    this.#callback = callback;
  }

  evaluateStatement(state: S, input: In): StatementResult<Out> {
    return this.#callback(state, input);
  }
}

/**
 * A `Block` contains a list of statements and a final statement.
 *
 * It evaluates each statement:
 *
 * - if the statement produces an Ok value, it ignores the value
 * - if the statement produces an Err value, the entire block evaluates
 *   to that value
 * - if the statement produces a Produce value, the entire block
 *   produces that value, provided that all of the remaining statements
 *   produce an Ok value.
 *
 * If no Produce values were reached, the entire block evaluates to the
 * result of evaluating the final statement.
 */
export class Block<In, Out, S extends State>
  implements EvaluatableStatement<In, Result<Out>, S> {
  #head: readonly EvaluatableStatement<In, Out, S>[];
  #last: EvaluatableStatement<In, Out, S>;

  constructor(
    head: readonly EvaluatableStatement<In, Out, S>[],
    last: EvaluatableStatement<In, Out, S>
  ) {
    this.#head = head;
    this.#last = last;
  }

  evaluateStatement(state: S, input: In): StatementResult<Out> {
    let produced: Out | UNDEFINED = UNDEFINED;

    for (let arrow of this.#head) {
      let result = arrow.evaluate(state, input);

      switch (result.type) {
        case "Ok":
          break;
        case "Err":
          return result.reason;
        case "Produce":
          invariant(produced !== UNDEFINED, InvariantViolation.ProduceError);
          produced = result.value;
      }
    }

    let lastResult = this.#last.evaluate(state, input);

    if (produced === UNDEFINED) {
      switch (lastResult.type) {
        case "Ok":
        case "Produce":
          return ok(lastResult.value);
        case "Err":
          return lastResult.reason;
      }
    } else {
      switch (lastResult.type) {
        case "Ok":
          return ok(produced);
        case "Produce":
          violation(InvariantViolation.ProduceError);
        case "Err":
          return lastResult.reason;
      }
    }
  }
}

/**
 * This mapper maps an array of evaluatable statements into an array of
 * outputs, without losing type information.
 */
export type ListEvaluationOutput<
  Statements extends readonly EvaluatableStatement<unknown, unknown, State>[]
> = {
  [Index in keyof Statements]: Statements[Index] extends EvaluatableStatement<
    unknown,
    infer Out,
    State
  >
    ? Out
    : never;
};

export class List<
  S extends State,
  In,
  Items extends readonly EvaluatableStatement<In, unknown, S>[]
> implements EvaluatableStatement<In, ListEvaluationOutput<Items>, S> {
  #list: readonly EvaluatableStatement<In, unknown, S>[];

  constructor(list: readonly EvaluatableStatement<In, unknown, S>[]) {
    this.#list = list;
  }

  evaluateStatement(
    state: S,
    input: In
  ): StatementResult<ListEvaluationOutput<Items>> {
    let out = [];

    for (let item of this.#list) {
      let result = item.evaluate(state, input);

      switch (result.type) {
        case "Ok":
          out.push(result.value);
          break;
        case "Produce":
          violation(InvariantViolation.InvalidPattern);
        case "Err":
          return result;
      }
    }

    unsafeCast<ListEvaluationOutput<Items>>(out);
    return { type: "Ok", value: out };
  }
}

export type EvaluatableRecord<S> = {
  readonly [key: string]: EvaluatableStatement<unknown, unknown, S>;
};

/**
 * This mapper maps an dictionary of evaluatable statements into a dictionary of
 * outputs, without losing type information.
 */
export type RecordEvaluationOutput<Statements extends EvaluatableRecord> = {
  [P in keyof Statements]: Statements[P] extends EvaluatableStatement<
    unknown,
    infer Out,
    State
  >
    ? Out
    : never;
};

export class RuntimeRecord<S extends State, In, Items extends EvaluatableRecord>
  implements EvaluatableStatement<In, RecordEvaluationOutput<Items>, S> {
  #record: EvaluatableRecord;

  constructor(record: EvaluatableRecord) {
    this.#record = record;
  }

  evaluateStatement(
    state: S,
    input: In
  ): StatementResult<RecordEvaluationOutput<Items>> {
    let out = {};

    for (let [key, value] of Object.entries(this.#record)) {
      let result = item.evaluate(state, input);

      switch (result.type) {
        case "Ok":
          out.push(result.value);
          break;
        case "Produce":
          violation(InvariantViolation.InvalidPattern);
        case "Err":
          return result;
      }
    }

    unsafeCast<ListEvaluationOutput<Items>>(out);
    return { type: "Ok", value: out };
  }
}
