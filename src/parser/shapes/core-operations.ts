import type { ParserArrow, ParseResult, Result, Err } from "../shape";

export class Arrow<In, Out> {
  constructor(readonly operation: Operation) {}

  invoke<State>(
    state: State,
    evaluator: StatefulEvaluator<State>,
    input: In
  ): Out {
    return (evaluate(
      this.operation,
      state,
      input,
      evaluator
    ) as unknown) as Out;
  }
}

// PureEvaluator includes methods that can plausibly work
// in the absence of any state.
export interface SimpleEvaluator<State> {}

// StatefulEvaluator includes methods that can only work by
// getting values out of `State`, like `repeat`.
export interface StatefulEvaluator<State> extends SimpleEvaluator<State> {}

export interface OperationMap {}

/// OPERATION ///

export interface BaseOperation {
  label?: string;
}

/// SOURCE ///

export interface SourceOperation<Out> extends BaseOperation {
  type: "Source";
  callback: () => Out;
}

export interface SimpleEvaluator<State> {
  Source<Out>(state: State, input: unknown, op: SourceOperation<Out>): Out;
}

export interface OperationMap {
  Source: SourceOperation<unknown>;
}

export function source<Out>(
  callback: () => Out,
  label?: string
): Arrow<unknown, Out> {
  return new Arrow({
    type: "Source",
    callback,
    label,
  });
}

/// INPUT ///

/**
 * This is a placeholder operation for the input of an arrow
 */

export interface InputOperation<In> extends BaseOperation {
  type: "Input";
  // phantom data
  in?: In;
}

export interface SimpleEvaluator<State> {
  Input<In>(state: State, input: In, op: InputOperation<In>): In;
}

export interface OperationMap {
  Input: InputOperation<unknown>;
}

export function input<In>(label?: string): Arrow<In, In> {
  return new Arrow({
    type: "Input",
    label,
  });
}

/// PURE ///

export interface PureOperation<In, Out> extends BaseOperation {
  type: "Pure";
  callback: (input: In) => Out;
}

export interface SimpleEvaluator<State> {
  Pure<In, Out>(state: State, input: In, op: PureOperation<In, Out>): Out;
}

export interface OperationMap {
  Pure: PureOperation<any, unknown>;
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

export interface SimpleEvaluator<State> {
  Zip<In1, Out1, In2, Out2>(
    state: State,
    input: [In1, In2],
    op: ZipOperation<In1, Out1, In2, Out2>
  ): [Out1, Out2];
}

export interface OperationMap {
  Zip: ZipOperation<any, unknown, any, unknown>;
}

export function zip<In1, Out1, In2, Out2>(
  left: Arrow<In1, Out1>,
  right: Arrow<In2, Out2>,
  label?: string
): Arrow<[In1, In2], [Out1, Out2]> {
  return new Arrow({ type: "Zip", label, left, right });
}

/// PIPELINE ///

export interface PipelineOperation<LeftIn, Middle, RightOut>
  extends BaseOperation {
  type: "Pipeline";
  left: Arrow<LeftIn, Middle>;
  right: Arrow<Middle, RightOut>;
}

export interface SimpleEvaluator<State> {
  Pipeline<LeftIn, Middle, RightOut>(
    state: State,
    input: LeftIn,
    op: PipelineOperation<LeftIn, Middle, RightOut>
  ): RightOut;
}

export interface OperationMap extends BaseOperation {
  Pipeline: PipelineOperation<any, unknown, unknown>;
}

export function pipeline<LeftIn, Middle, RightOut>(
  left: Arrow<LeftIn, Middle>,
  right: Arrow<Middle, RightOut>,
  label?: string
): Arrow<LeftIn, RightOut> {
  return new Arrow({ type: "Pipeline", label, left, right });
}

/// MAP RESULT ///

export interface MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>
  extends BaseOperation {
  type: "MapResult";
  left: Arrow<LeftIn, Result<ResultInner>>;
  ifOk: Arrow<ResultInner, IfOkOut>;
  ifErr: Arrow<Err, IfErrOut>;
}

export interface SimpleEvaluator<State> {
  MapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(
    state: State,
    input: LeftIn,
    op: MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>
  ): IfOkOut | IfErrOut;
}

export interface OperationMap extends BaseOperation {
  MapResult: MapResultOperation<any, unknown, unknown, unknown>;
}

export function mapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(
  left: Arrow<LeftIn, Result<ResultInner>>,
  ifOk: Arrow<ResultInner, IfOkOut>,
  ifErr: Arrow<Err, IfErrOut>,
  label?: string
): Arrow<LeftIn, IfOkOut | IfErrOut> {
  return new Arrow({ type: "MapResult", label, left, ifOk, ifErr });
}

/// MAP INPUT ///

export interface MapInputOperation<ArrowIn, MapOut> extends BaseOperation {
  type: "MapInput";
  arrow: Arrow<ArrowIn, unknown>;
  map: Arrow<ArrowIn, MapOut>;
}

export interface SimpleEvaluator<State> {
  MapInput<ArrowIn, MapOut>(
    state: State,
    input: ArrowIn,
    op: MapInputOperation<ArrowIn, MapOut>
  ): MapOut;
}

export interface OperationMap extends BaseOperation {
  MapInput: MapInputOperation<any, unknown>;
}

export function mapInput<ArrowIn, MapOut>(
  arrow: Arrow<ArrowIn, unknown>,
  map: Arrow<ArrowIn, MapOut>,
  label?: string
): Arrow<ArrowIn, MapOut> {
  return new Arrow({ type: "MapInput", label, arrow, map });
}

/// SPLIT ///

export interface MergeOperation<In, LeftOut, RightOut> extends BaseOperation {
  type: "Merge";
  left: Arrow<In, LeftOut>;
  right: Arrow<In, RightOut>;
}

export interface SimpleEvaluator<State> {
  Merge<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: MergeOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut];
}

export interface OperationMap {
  Merge: MergeOperation<any, unknown, unknown>;
}

export function merge<In, LeftOut, RightOut>(
  left: Arrow<In, LeftOut>,
  right: Arrow<In, RightOut>,
  label?: string
): Arrow<In, [LeftOut, RightOut]> {
  return new Arrow({ type: "Merge", label, left, right });
}

/// KEEP AND THEN ///

export interface KeepAndThenOperation<In, LeftOut, RightOut>
  extends BaseOperation {
  type: "KeepAndThen";
  left: Arrow<In, LeftOut>;
  right: Arrow<LeftOut, RightOut>;
}

export interface SimpleEvaluator<State> {
  KeepAndThen<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: KeepAndThenOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut];
}

export interface OperationMap {
  KeepAndThen: KeepAndThenOperation<any, unknown, unknown>;
}

export function keepAndThen<In, LeftOut, RightOut>(
  left: Arrow<In, LeftOut>,
  right: Arrow<LeftOut, RightOut>,
  label?: string
): Arrow<In, [LeftOut, RightOut]> {
  return new Arrow({ type: "KeepAndThen", label, left, right });
}

/// REPEAT ///

export interface RepeatOperation<State, In, Out> extends BaseOperation {
  type: "Repeat";
  callback: Arrow<[In, State], Result<Out>>;
}

export interface StatefulEvaluator<State> {
  Repeat<In, Out>(
    state: State,
    input: In,
    op: RepeatOperation<State, In, Out>
  ): Out[];
}

export interface OperationMap {
  Repeat: RepeatOperation<any, any, unknown>;
}

export function repeat<State, In, Out>(
  callback: Arrow<[State, In], Result<Out>>,
  label?: string
): Arrow<void, Out[]> {
  return new Arrow({ type: "Repeat", label, callback });
}

/// REDUCE ///

export interface ReduceOperation<In, Out> extends BaseOperation {
  type: "Reduce";
  callback: Arrow<[Out, In], Out>;
}

export interface SimpleEvaluator<State> {
  Reduce<In, Out>(
    state: State,
    input: [Out, Iterable<In>],
    op: ReduceOperation<In, Out>
  ): Out;
}

export interface OperationMap {
  Reduce: ReduceOperation<any, unknown>;
}

export function reduce<In, Out>(
  callback: Arrow<[Out, In], Out>,
  label?: string
): Arrow<[Out, Iterable<In>], Out> {
  return new Arrow({ type: "Reduce", label, callback });
}

/// UTILITY TYPES ///

export interface Concattable {
  zero(): Concattable;
  merge(item: this): void;
}

export interface Reducable<T> {
  breakableReduce<Output>(
    callback: (accum: Output, item: T) => IteratorResult<Output>,
    init: Output
  ): Output;
}

/// TYPE ALIASES ///

export type SimpleOperationType = keyof OperationMap &
  keyof SimpleEvaluator<unknown>;
export type SimpleOperation = OperationMap[SimpleOperationType];

export type OperationType = keyof OperationMap &
  keyof StatefulEvaluator<unknown>;
export type Operation = OperationMap[OperationType];

/// FUNCTIONS ///

export function evaluate<K extends OperationType, Input, State>(
  op: OperationMap[K],
  state: State,
  input: Input,
  evaluator: StatefulEvaluator<State>
): ReturnType<StatefulEvaluator<State>[K]> {
  return (evaluator[op.type] as (
    this: SimpleEvaluator<State>,
    state: State,
    input: Input,
    op: OperationMap[K]
  ) => ReturnType<StatefulEvaluator<State>[K]>)(state, input, op);
}
