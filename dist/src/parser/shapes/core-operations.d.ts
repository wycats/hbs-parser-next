import type { Result, Err } from "../shape";
export declare class Arrow<In, Out> {
    readonly operation: Operation;
    static delay<A extends Arrow<unknown, unknown>>(callback: () => A): A;
    constructor(operation: Operation);
    invoke<State>(state: State, evaluator: StatefulEvaluator<State>, input: In): Out;
}
export declare class DelayedArrow<In, Out> implements Arrow<In, Out> {
    #private;
    constructor(operation: () => Operation);
    get operation(): Operation;
    invoke<State>(state: State, evaluator: StatefulEvaluator<State>, input: In): Out;
}
export interface SimpleEvaluator<State> {
}
export interface StatefulEvaluator<State> extends SimpleEvaluator<State> {
}
export interface OperationMap {
}
export interface BaseOperation {
    label?: string;
}
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
export declare function source<Out>(callback: () => Out, label?: string): Arrow<unknown, Out>;
/**
 * This is a placeholder operation for the input of an arrow
 */
export interface InputOperation<In> extends BaseOperation {
    type: "Input";
    in?: In;
}
export interface SimpleEvaluator<State> {
    Input<In>(state: State, input: In, op: InputOperation<In>): In;
}
export interface OperationMap {
    Input: InputOperation<unknown>;
}
export declare function input<In>(label?: string): Arrow<In, In>;
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
export declare function pure<In, Out>(callback: (input: In) => Out, label?: string): Arrow<In, Out>;
export interface ZipOperation<In1, Out1, In2, Out2> extends BaseOperation {
    type: "Zip";
    left: Arrow<In1, Out1>;
    right: Arrow<In2, Out2>;
}
export interface SimpleEvaluator<State> {
    Zip<In1, Out1, In2, Out2>(state: State, input: [In1, In2], op: ZipOperation<In1, Out1, In2, Out2>): [Out1, Out2];
}
export interface OperationMap {
    Zip: ZipOperation<any, unknown, any, unknown>;
}
export declare function zip<In1, Out1, In2, Out2>(left: Arrow<In1, Out1>, right: Arrow<In2, Out2>, label?: string): Arrow<[In1, In2], [Out1, Out2]>;
export interface PipelineOperation<LeftIn, Middle, RightOut> extends BaseOperation {
    type: "Pipeline";
    left: Arrow<LeftIn, Middle>;
    right: Arrow<Middle, RightOut>;
}
export interface SimpleEvaluator<State> {
    Pipeline<LeftIn, Middle, RightOut>(state: State, input: LeftIn, op: PipelineOperation<LeftIn, Middle, RightOut>): RightOut;
}
export interface OperationMap extends BaseOperation {
    Pipeline: PipelineOperation<any, unknown, unknown>;
}
export declare function pipeline<LeftIn, Middle, RightOut>(left: Arrow<LeftIn, Middle>, right: Arrow<Middle, RightOut>, label?: string): Arrow<LeftIn, RightOut>;
export interface MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut> extends BaseOperation {
    type: "MapResult";
    left: Arrow<LeftIn, Result<ResultInner>>;
    ifOk: Arrow<ResultInner, IfOkOut>;
    ifErr: Arrow<Err, IfErrOut>;
}
export interface SimpleEvaluator<State> {
    MapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(state: State, input: LeftIn, op: MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>): IfOkOut | IfErrOut;
}
export interface OperationMap extends BaseOperation {
    MapResult: MapResultOperation<any, unknown, unknown, unknown>;
}
export declare function mapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(left: Arrow<LeftIn, Result<ResultInner>>, ifOk: Arrow<ResultInner, IfOkOut>, ifErr: Arrow<Err, IfErrOut>, label?: string): Arrow<LeftIn, IfOkOut | IfErrOut>;
export interface BothOkOperation<In, LeftOut, RightOut> extends BaseOperation {
    type: "BothOk";
    left: Arrow<In, Result<LeftOut>>;
    right: Arrow<In, Result<RightOut>>;
}
export interface SimpleEvaluator<State> {
    BothOk<In, RightOut, LeftOut>(state: State, input: In, op: BothOkOperation<In, LeftOut, RightOut>): Result<[LeftOut, RightOut]>;
}
export interface OperationMap extends BaseOperation {
    BothOk: BothOkOperation<any, unknown, unknown>;
}
export declare function bothOk<In, LeftOut, RightOut>(left: Arrow<In, Result<LeftOut>>, right: Arrow<In, Result<RightOut>>, label?: string): Arrow<In, Result<[LeftOut, RightOut]>>;
export declare type FallibleArrows<In> = [Arrow<In, Result<unknown>>, ...Array<Arrow<In, Result<unknown>>>];
export declare type MapFallibleArrows<T extends [Arrow<unknown, Result<unknown>>, ...Arrow<unknown, Result<unknown>>[]]> = Result<{
    [P in keyof T]: T[P] extends Arrow<unknown, Result<infer Out>> ? Out : never;
}>;
export interface AllOkOperation<In, Arrows extends FallibleArrows<In>> extends BaseOperation {
    type: "AllOk";
    arrows: Arrows;
}
export interface SimpleEvaluator<State> {
    AllOk<In extends unknown, Arrows extends FallibleArrows<In>>(state: State, input: In, op: AllOkOperation<In, Arrows>): MapFallibleArrows<Arrows>;
}
export interface OperationMap extends BaseOperation {
    AllOk: AllOkOperation<any, FallibleArrows<any>>;
}
export declare function allOk<In, Arrows extends FallibleArrows<In>>(arrows: Arrows, label?: string): Arrow<In, MapFallibleArrows<Arrows>>;
export interface FirstOkOperation<In, LeftOut, RightOut> extends BaseOperation {
    type: "FirstOk";
    left: Arrow<In, Result<LeftOut>>;
    right: Arrow<In, Result<RightOut>>;
}
export interface SimpleEvaluator<State> {
    FirstOk<In, RightOut, LeftOut>(state: State, input: In, op: FirstOkOperation<In, LeftOut, RightOut>): Result<LeftOut | RightOut>;
}
export interface OperationMap extends BaseOperation {
    FirstOk: FirstOkOperation<any, unknown, unknown>;
}
export declare function firstOk<In, LeftOut, RightOut>(left: Arrow<In, Result<LeftOut>>, right: Arrow<In, Result<RightOut>>, label?: string): Arrow<In, Result<LeftOut | RightOut>>;
export interface MapInputOperation<ArrowIn, MapOut> extends BaseOperation {
    type: "MapInput";
    arrow: Arrow<ArrowIn, unknown>;
    map: Arrow<ArrowIn, MapOut>;
}
export interface SimpleEvaluator<State> {
    MapInput<ArrowIn, MapOut>(state: State, input: ArrowIn, op: MapInputOperation<ArrowIn, MapOut>): MapOut;
}
export interface OperationMap extends BaseOperation {
    MapInput: MapInputOperation<any, unknown>;
}
export declare function mapInput<ArrowIn, MapOut>(arrow: Arrow<ArrowIn, unknown>, map: Arrow<ArrowIn, MapOut>, label?: string): Arrow<ArrowIn, MapOut>;
export interface MergeOperation<In, LeftOut, RightOut> extends BaseOperation {
    type: "Merge";
    left: Arrow<In, LeftOut>;
    right: Arrow<In, RightOut>;
}
export interface SimpleEvaluator<State> {
    Merge<In, LeftOut, RightOut>(state: State, input: In, op: MergeOperation<In, LeftOut, RightOut>): [LeftOut, RightOut];
}
export interface OperationMap {
    Merge: MergeOperation<any, unknown, unknown>;
}
export declare function merge<In, LeftOut, RightOut>(left: Arrow<In, LeftOut>, right: Arrow<In, RightOut>, label?: string): Arrow<In, [LeftOut, RightOut]>;
export interface KeepAndThenOperation<In, LeftOut, RightOut> extends BaseOperation {
    type: "KeepAndThen";
    left: Arrow<In, LeftOut>;
    right: Arrow<LeftOut, RightOut>;
}
export interface SimpleEvaluator<State> {
    KeepAndThen<In, LeftOut, RightOut>(state: State, input: In, op: KeepAndThenOperation<In, LeftOut, RightOut>): [LeftOut, RightOut];
}
export interface OperationMap {
    KeepAndThen: KeepAndThenOperation<any, unknown, unknown>;
}
export declare function keepAndThen<In, LeftOut, RightOut>(left: Arrow<In, LeftOut>, right: Arrow<LeftOut, RightOut>, label?: string): Arrow<In, [LeftOut, RightOut]>;
export interface RepeatOperation<State, In, Out> extends BaseOperation {
    type: "Repeat";
    callback: Arrow<[In, State], Result<Out>>;
}
export interface StatefulEvaluator<State> {
    Repeat<In, Out>(state: State, input: In, op: RepeatOperation<State, In, Out>): Out[];
}
export interface OperationMap {
    Repeat: RepeatOperation<any, any, unknown>;
}
export declare function repeat<State, In, Out>(callback: Arrow<[State, In], Result<Out>>, label?: string): Arrow<void, Out[]>;
export interface StateOperation extends BaseOperation {
    type: "State";
}
export interface SimpleEvaluator<State> {
    State(state: State, input: unknown, op: StateOperation): State;
}
export interface OperationMap {
    State: StateOperation;
}
export declare function state<Out>(label?: string): Arrow<unknown, Out>;
export interface ReduceOperation<In, Out> extends BaseOperation {
    type: "Reduce";
    callback: Arrow<[Out, In], Out>;
}
export interface SimpleEvaluator<State> {
    Reduce<In, Out>(state: State, input: [Out, Iterable<In>], op: ReduceOperation<In, Out>): Out;
}
export interface OperationMap {
    Reduce: ReduceOperation<any, unknown>;
}
export declare function reduce<In, Out>(callback: Arrow<[Out, In], Out>, label?: string): Arrow<[Out, Iterable<In>], Out>;
export interface Concattable {
    zero(): Concattable;
    merge(item: this): void;
}
export interface Reducable<T> {
    breakableReduce<Output>(callback: (accum: Output, item: T) => IteratorResult<Output>, init: Output): Output;
}
export declare type SimpleOperationType = keyof OperationMap & keyof SimpleEvaluator<unknown>;
export declare type SimpleOperation = OperationMap[SimpleOperationType];
export declare type OperationType = keyof OperationMap & keyof StatefulEvaluator<unknown>;
export declare type Operation = OperationMap[OperationType];
export declare function evaluate<K extends OperationType, Input, State>(op: OperationMap[K], state: State, input: Input, evaluator: StatefulEvaluator<State>): ReturnType<StatefulEvaluator<State>[K]>;
//# sourceMappingURL=core-operations.d.ts.map