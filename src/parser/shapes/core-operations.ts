import type { ParserArrow } from "../shape";

export class Arrow<In, Out> {
  constructor(readonly operation: Operation) {}

  invoke<State>(state: State, evaluator: Evaluator<State>, input: In): Out {
    return (evaluate(
      this.operation,
      state,
      input,
      evaluator
    ) as unknown) as Out;
  }
}

export interface Evaluator<State> {}
export interface OperationMap {}

/// OPERATION ///

export interface BaseOperation {
  label?: string;
}

/// TO ARROW ///

export interface PureOperation<In, Out> extends BaseOperation {
  type: "Pure";
  callback: (input: In) => Out;
}

export interface Evaluator<State> {
  Pure<In, Out>(state: State, input: In, op: PureOperation<In, Out>): Out;
}

export interface OperationMap {
  Pure: PureOperation<unknown, unknown>;
}

export function pure<In, Out>(
  callback: (input: In) => Out,
  label?: string
): Arrow<In, Out> {
  return new Arrow({
    type: "Pure",
    label,
    callback: callback as (input: unknown) => unknown,
  });
}

/// ZIP ///

export interface ZipOperation<In1, Out1, In2, Out2> extends BaseOperation {
  type: "Zip";
  left: Arrow<In1, Out1>;
  right: Arrow<In2, Out2>;
}

export interface Evaluator<State> {
  Zip<In1, Out1, In2, Out2>(
    state: State,
    input: [In1, In2],
    op: ZipOperation<In1, Out1, In2, Out2>
  ): [Out1, Out2];
}

export interface OperationMap {
  Zip: ZipOperation<unknown, unknown, unknown, unknown>;
}

export function zip<In1, Out1, In2, Out2>(
  left: Arrow<In1, Out1>,
  right: Arrow<In2, Out2>,
  label?: string
): Arrow<[In1, In2], [Out1, Out2]> {
  return new Arrow({ type: "Zip", label, left, right });
}

/// AND THEN ///

export interface AndThenOperation<LeftIn, Middle, RightOut>
  extends BaseOperation {
  type: "AndThen";
  left: Arrow<LeftIn, Middle>;
  right: Arrow<Middle, RightOut>;
}

export interface Evaluator<State> {
  AndThen<LeftIn, Middle, RightOut>(
    state: State,
    input: LeftIn,
    op: AndThenOperation<LeftIn, Middle, RightOut>
  ): RightOut;
}

export interface OperationMap extends BaseOperation {
  AndThen: AndThenOperation<unknown, unknown, unknown>;
}

export function andThen<LeftIn, Middle, RightOut>(
  left: Arrow<LeftIn, Middle>,
  right: Arrow<Middle, RightOut>,
  label?: string
): Arrow<LeftIn, RightOut> {
  return new Arrow({ type: "AndThen", label, left, right });
}

/// SPLIT ///

export interface SplitOperation<In, LeftOut, RightOut> extends BaseOperation {
  type: "Split";
  left: Arrow<In, LeftOut>;
  right: Arrow<In, RightOut>;
}

export interface Evaluator<State> {
  Split<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: SplitOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut];
}

export interface OperationMap {
  Split: SplitOperation<unknown, unknown, unknown>;
}

export function split<In, LeftOut, RightOut>(
  left: Arrow<In, LeftOut>,
  right: Arrow<In, RightOut>,
  label?: string
): Arrow<In, [LeftOut, RightOut]> {
  return new Arrow({ type: "Split", label, left, right });
}

/// KEEP AND THEN ///

export interface KeepAndThenOperation<In, LeftOut, RightOut>
  extends BaseOperation {
  type: "KeepAndThen";
  left: Arrow<In, LeftOut>;
  right: Arrow<LeftOut, RightOut>;
}

export interface Evaluator<State> {
  KeepAndThen<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: KeepAndThenOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut];
}

export interface OperationMap {
  KeepAndThen: KeepAndThenOperation<unknown, unknown, unknown>;
}

export function keepAndThen<In, LeftOut, RightOut>(
  left: Arrow<In, LeftOut>,
  right: Arrow<LeftOut, RightOut>,
  label?: string
): Arrow<In, [LeftOut, RightOut]> {
  return new Arrow({ type: "KeepAndThen", label, left, right });
}

/// TYPE ALIASES ///

export type OperationType = keyof OperationMap & keyof Evaluator<unknown>;
export type Operation = OperationMap[OperationType];

/// FUNCTIONS ///

export function evaluate<K extends OperationType, Input, State>(
  op: OperationMap[K],
  state: State,
  input: Input,
  evaluator: Evaluator<State>
): ReturnType<Evaluator<State>[K]> {
  return (evaluator[op.type] as (
    this: Evaluator<State>,
    state: State,
    input: Input,
    op: OperationMap[K]
  ) => ReturnType<Evaluator<State>[K]>)(state, input, op);
}
