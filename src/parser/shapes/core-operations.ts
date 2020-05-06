import type { Err, Result } from "../shape";

/**
 * An Arrow corresponds to a computation with a particular input and output.
 *
 * You can build up arrows into more sophisticated computations using the
 * core operations in this file.
 */
export class Arrow<In, Out> {
  static delay<A extends Arrow<unknown, unknown>>(callback: () => A): A {
    return (new DelayedArrow(() => {
      return callback().operation;
    }) as unknown) as A;
  }

  constructor(readonly operation: Operation) {}

  /**
   * The invoke method takes a `State` and input value, producing the
   * output value, and possibly changing the `State`.
   *
   * @param state The computation's persistent state
   * @param evaluator An evaluator
   * @param input The input of this computation
   * @returns The invoke method returns the computation's output
   */
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

/**
 * `DelayedArrow<In, Out>` implements `Arrow<In, Out>`, but invokes a thunk for its
 * internal operation lazily, the first time it's invoked. This makes it possible to
 * build recursive arrows.
 */
export class DelayedArrow<In, Out> implements Arrow<In, Out> {
  #delayed: () => Operation;
  #operation: Operation | undefined = undefined;

  constructor(operation: () => Operation) {
    this.#delayed = operation;
  }

  get operation(): Operation {
    if (!this.#operation) {
      this.#operation = this.#delayed();
    }

    return this.#operation;
  }

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

// SimpleEvaluator includes methods that can plausibly work
// in the absence of state.
export interface SimpleEvaluator<State> {}

// StatefulEvaluator includes methods that can only work by
// getting values out of `State`, like `repeat`.
export interface StatefulEvaluator<State> extends SimpleEvaluator<State> {}

export interface OperationMap {}

/// OPERATION ///

export interface BaseOperation {
  label?: string;
}

/**
 * Id
 * type parameters: T
 * Arrow<T, T>
 *
 * parameters: None
 *
 * The IdOperation is a special operation that is equivalent to
 * pure(v => v). It technically doesn't need to exist, but helps
 * with optimization.
 */

export interface IdOperation extends BaseOperation {
  type: "Id";
}

export interface SimpleEvaluator<State> {
  /**
   * The Id operation is evaluated by returning the input value
   */
  Id<T>(state: State, input: T, op: IdOperation): T;
}

export interface OperationMap {
  Id: IdOperation;
}

export function id<Out>(label?: string): Arrow<unknown, Out> {
  return new Arrow({
    type: "Id",
    label,
  });
}

/**
 * Source
 * type Parameters: Out
 * Arrow<VOID, Out>
 *
 * parameters: () => Out
 *
 * The SourceOperation produces a new arrow from a value. The value
 * is provided as a thunk, since an arrow may be composed multiple
 * times, and this means we don't need to worry about clonability.
 */

export interface SourceOperation<Out> extends BaseOperation {
  type: "Source";
  value: () => Out;
}

export interface SimpleEvaluator<State> {
  /**
   * The Source operation is evaluated by returning its value and ignoring
   * the input.
   */
  Source<Out>(state: State, input: unknown, op: SourceOperation<Out>): Out;
}

export interface OperationMap {
  Source: SourceOperation<unknown>;
}

export function source<Out>(
  value: () => Out,
  label?: string
): Arrow<unknown, Out> {
  return new Arrow({
    type: "Source",
    value,
    label,
  });
}

/**
 * Input
 * type parameters: In
 * Arrow<In, In>
 *
 * parameters: None
 *
 * This is a placeholder operation that represents the input in a combined
 * computation. For example, it makes it possible to build up a computation
 * that produced a new value from source and merges it with the input of
 * the composed operation.
 *
 * TODO: This doesn't seem necessary. Try to eliminate this operation in
 * `iterate` in `shape-test`.
 */

export interface InputOperation<In> extends BaseOperation {
  type: "Input";
  // phantom data
  in?: In;
}

export interface SimpleEvaluator<State> {
  /**
   * The Input operation is evaluated by returning the input value
   */
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

/**
 * Pure
 * type parameters: In, Out
 * Arrow<In, Out>
 *
 * parameters: (input: In) => Out;
 *
 * This is the most basic operation for creating an arrow. It lifts a
 * function from `In` to `Out` into an Arrow from `In` to `Out`. The
 * function must be pure with respect to State.
 */

export interface PureOperation<In, Out> extends BaseOperation {
  type: "Pure";
  callback: (input: In) => Out;
}

export interface SimpleEvaluator<State> {
  /**
   * The Pure operation is evaluated by calling its function with the
   * input value, returning the output value.
   */
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

/**
 * Zip
 * type parameters: In1, Out1, In2, Out2
 * Arrow<[In1, In2], [Out1, Out2]>
 *
 * parameters:
 * - Arrow<In1, Out1>
 * - Arrow<In2, Out2>
 */

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
  Zip: ZipOperation<unknown, unknown, unknown, unknown>;
}

export function zip<In1, Out1, In2, Out2>(
  left: Arrow<In1, Out1>,
  right: Arrow<In2, Out2>,
  label?: string
): Arrow<[In1, In2], [Out1, Out2]> {
  return new Arrow({ type: "Zip", label, left, right });
}

/**
 * Pipeline
 * type parameters: LeftIn, Middle, RightOut
 * Arrow<LeftIn, RightOut>
 *
 * parameters:
 * - Arrow<LeftIn, Middle>
 * - Arrow<Middle, RightOut>
 */

export interface PipelineOperation<LeftIn, Middle, RightOut>
  extends BaseOperation {
  type: "Pipeline";
  left: Arrow<LeftIn, Middle>;
  right: Arrow<Middle, RightOut>;
}

export interface SimpleEvaluator<State> {
  /**
   * The Pipeline operation is evaluated by:
   *
   * 1. evaluate the left arrow with `input`, producing `middle`
   * 2. evaluate the right arrow with `middle`, producing `output`
   * 3. return `output`
   */
  Pipeline<LeftIn, Middle, RightOut>(
    state: State,
    input: LeftIn,
    op: PipelineOperation<LeftIn, Middle, RightOut>
  ): RightOut;
}

export interface OperationMap extends BaseOperation {
  Pipeline: PipelineOperation<unknown, unknown, unknown>;
}

export function pipeline<LeftIn, Middle, RightOut>(
  left: Arrow<LeftIn, Middle>,
  right: Arrow<Middle, RightOut>,
  label?: string
): Arrow<LeftIn, RightOut> {
  return new Arrow({ type: "Pipeline", label, left, right });
}

/**
 * MapResult
 * type parameters: LeftIn, Middle, IfOkOut, IfErrOut
 * Arrow<LeftIn, IfOkOut | IfErrOut>
 *
 * parameters:
 * - Arrow<LeftIn, Result<Middle>>
 * - ifOk: Arrow<Middle, IfOkOut>
 * - ifErr: Arrow<Err, IfErrOut>
 */

export interface MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>
  extends BaseOperation {
  type: "MapResult";
  left: Arrow<LeftIn, Result<ResultInner>>;
  ifOk: Arrow<ResultInner, IfOkOut>;
  ifErr: Arrow<Err, IfErrOut>;
}

export interface SimpleEvaluator<State> {
  /**
   * The MapResult operation is evaluated by:
   *
   * 1. evaluate the left arrow with `input`, producing `middle`
   * 2. if `middle` is Ok(`value`)
   *   a. evaluate the ifOk arrow with `value`, producing `output`
   *   b. return `output`
   * 3. if `middle` is Err
   *   a. evaluate the ifErr arrow with the error, producing `output`
   *   b. return `output`
   */
  MapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(
    state: State,
    input: LeftIn,
    op: MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>
  ): IfOkOut | IfErrOut;
}

export interface OperationMap extends BaseOperation {
  MapResult: MapResultOperation<unknown, unknown, unknown, unknown>;
}

export function mapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(
  left: Arrow<LeftIn, Result<ResultInner>>,
  ifOk: Arrow<ResultInner, IfOkOut>,
  ifErr: Arrow<Err, IfErrOut>,
  label?: string
): Arrow<LeftIn, IfOkOut | IfErrOut> {
  return new Arrow({ type: "MapResult", label, left, ifOk, ifErr });
}

/**
 * BothOk
 * type parameters: In, LeftOut, RightOut
 * Arrow<In, Result<[LeftOut, RightOut]>>
 *
 * parameters:
 * - Arrow<In, Result<LeftOut>>
 * - Arrow<In, Result<RightOut>>
 */

export interface BothOkOperation<In, LeftOut, RightOut> extends BaseOperation {
  type: "BothOk";
  left: Arrow<In, Result<LeftOut>>;
  right: Arrow<In, Result<RightOut>>;
}

export interface SimpleEvaluator<State> {
  BothOk<In, RightOut, LeftOut>(
    state: State,
    input: In,
    op: BothOkOperation<In, LeftOut, RightOut>
  ): Result<[LeftOut, RightOut]>;
}

export interface OperationMap extends BaseOperation {
  BothOk: BothOkOperation<unknown, unknown, unknown>;
}

export function bothOk<In, LeftOut, RightOut>(
  left: Arrow<In, Result<LeftOut>>,
  right: Arrow<In, Result<RightOut>>,
  label?: string
): Arrow<In, Result<[LeftOut, RightOut]>> {
  return new Arrow({ type: "BothOk", label, left, right });
}

/// ALL OK ///

export type FallibleArrows<In> = [
  Arrow<In, Result<unknown>>,
  ...Array<Arrow<In, Result<unknown>>>
];

export type MapFallibleArrows<
  T extends [
    Arrow<unknown, Result<unknown>>,
    ...Arrow<unknown, Result<unknown>>[]
  ]
> = Result<
  {
    [P in keyof T]: T[P] extends Arrow<unknown, Result<infer Out>>
      ? Out
      : never;
  }
>;

export interface AllOkOperation<In, Arrows extends FallibleArrows<In>>
  extends BaseOperation {
  type: "AllOk";
  arrows: Arrows;
}

export interface SimpleEvaluator<State> {
  // TODO: what's up with this `extends unknown`?
  AllOk<In extends unknown, Arrows extends FallibleArrows<In>>(
    state: State,
    input: In,
    op: AllOkOperation<In, Arrows>
  ): MapFallibleArrows<Arrows>;
}

export interface OperationMap extends BaseOperation {
  AllOk: AllOkOperation<unknown, FallibleArrows<unknown>>;
}

export function allOk<In, Arrows extends FallibleArrows<In>>(
  arrows: Arrows,
  label?: string
): Arrow<In, MapFallibleArrows<Arrows>> {
  return new Arrow({ type: "AllOk", label, arrows });
}

/// FIRST OK ///

export interface FirstOkOperation<In, LeftOut, RightOut> extends BaseOperation {
  type: "FirstOk";
  left: Arrow<In, Result<LeftOut>>;
  right: Arrow<In, Result<RightOut>>;
}

export interface SimpleEvaluator<State> {
  FirstOk<In, RightOut, LeftOut>(
    state: State,
    input: In,
    op: FirstOkOperation<In, LeftOut, RightOut>
  ): Result<LeftOut | RightOut>;
}

export interface OperationMap extends BaseOperation {
  FirstOk: FirstOkOperation<unknown, unknown, unknown>;
}

export function firstOk<In, LeftOut, RightOut>(
  left: Arrow<In, Result<LeftOut>>,
  right: Arrow<In, Result<RightOut>>,
  label?: string
): Arrow<In, Result<LeftOut | RightOut>> {
  return new Arrow({ type: "FirstOk", label, left, right });
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
  MapInput: MapInputOperation<unknown, unknown>;
}

export function mapInput<ArrowIn, MapOut>(
  arrow: Arrow<ArrowIn, unknown>,
  map: Arrow<ArrowIn, MapOut>,
  label?: string
): Arrow<ArrowIn, MapOut> {
  return new Arrow({ type: "MapInput", label, arrow, map });
}

/// Merge ///

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
  Merge: MergeOperation<unknown, unknown, unknown>;
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
  KeepAndThen: KeepAndThenOperation<unknown, unknown, unknown>;
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
  Repeat: RepeatOperation<unknown, unknown, unknown>;
}

export function repeat<State, In, Out>(
  callback: Arrow<[State, In], Result<Out>>,
  label?: string
): Arrow<void, Out[]> {
  return new Arrow({ type: "Repeat", label, callback });
}

/// STATE ///

export interface StateOperation extends BaseOperation {
  type: "State";
}

export interface SimpleEvaluator<State> {
  State(state: State, input: unknown, op: StateOperation): State;
}

export interface OperationMap {
  State: StateOperation;
}

export function state<Out>(label?: string): Arrow<unknown, Out> {
  return new Arrow({
    type: "State",
    label,
  });
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
  Reduce: ReduceOperation<unknown, unknown>;
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
