import { BaseResult as Result, FORMAT, Formattable, Formatted, ops, RawFormattable, SNAPSHOT } from "hbs-parser-next";
export declare type State = {
    tracer: Tracer;
};
export interface EvaluatorClass<T> {
    new (...args: any[]): ops.StatefulEvaluator<T>;
}
export declare class TracedEvaluator<OriginalState> implements ops.StatefulEvaluator<OriginalState & State> {
    #private;
    setInner(inner: ops.StatefulEvaluator<OriginalState>): void;
    get inner(): ops.StatefulEvaluator<OriginalState>;
    private parent;
    State(state: OriginalState & State, input: unknown, op: ops.StateOperation): OriginalState & State;
    Source<Out>(...args: [State & OriginalState, unknown, ops.SourceOperation<Out>]): Out;
    Input<In>(state: State & OriginalState, input: In, _op: ops.InputOperation<In>): In;
    Pure<In, Out>(state: State & OriginalState, ...args: readonly [In, ops.PureOperation<In, Out>]): Out;
    Zip<In1, Out1, In2, Out2>(...args: [State & OriginalState, [In1, In2], ops.ZipOperation<In1, Out1, In2, Out2>]): [Out1, Out2];
    Pipeline<LeftIn, Middle, RightOut>(...args: [State & OriginalState, LeftIn, ops.PipelineOperation<LeftIn, Middle, RightOut>]): RightOut;
    MapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(...args: [State & OriginalState, LeftIn, ops.MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>]): IfOkOut | IfErrOut;
    BothOk<In, RightOut, LeftOut>(...args: [State & OriginalState, In, ops.BothOkOperation<In, LeftOut, RightOut>]): Result<[LeftOut, RightOut]>;
    AllOk<In, Arrows extends ops.FallibleArrows<In>>(...args: [State & OriginalState, In, ops.AllOkOperation<In, Arrows>]): ops.MapFallibleArrows<Arrows>;
    FirstOk<In, RightOut, LeftOut>(...args: [State & OriginalState, In, ops.FirstOkOperation<In, LeftOut, RightOut>]): Result<LeftOut | RightOut>;
    Merge<In, LeftOut, RightOut>(...args: [State & OriginalState, In, ops.MergeOperation<In, LeftOut, RightOut>]): [LeftOut, RightOut];
    MapInput<ArrowIn, MapOut>(...args: [State & OriginalState, ArrowIn, ops.MapInputOperation<ArrowIn, MapOut>]): MapOut;
    KeepAndThen<In, LeftOut, RightOut>(...args: [State & OriginalState, In, ops.KeepAndThenOperation<In, LeftOut, RightOut>]): [LeftOut, RightOut];
    Reduce<In, Out>(...args: [State & OriginalState, [Out, Iterable<In>], ops.ReduceOperation<In, Out>]): Out;
    Repeat<In, Out>(...args: [State & OriginalState, In, ops.RepeatOperation<State & OriginalState, In, Out>]): Out[];
}
export declare type NestedStringTrace = [string, StringTrace[]];
export declare type StringTrace = string | NestedStringTrace;
export declare class Tracer implements RawFormattable {
    input: number[];
    private stack;
    private linear;
    constructor(input?: number[]);
    [FORMAT](): Formatted;
    [SNAPSHOT](): Formattable;
    get currentChildren(): StringTrace[];
    get currentName(): string | undefined;
    get records(): StringTrace[];
    pushLeaf(leaf: string): void;
    preInvoke(name: string): void;
    postInvoke(desc: string): void;
}
export declare function trace(op: OpName, input: unknown, output: unknown, children?: StringTrace[]): StringTrace;
export declare type OpName = {
    type: string;
    label?: string;
} | string;
export declare function formatOpName(op: OpName): OpName;
export declare function raw(value: string): Formattable;
export declare const STATE: Formattable;
export declare const VOID: Formattable;
export declare const STATE_TRACE: string;
export declare class TraceBuilder {
    private traces;
    constructor(traces?: StringTrace[]);
    addTraces(traces: StringTrace[]): this;
    step(opName: OpName, input: unknown, output: unknown): this;
    into(opName: OpName, input: unknown, output: unknown): this;
    done(): StringTrace[];
}
export declare function step(name: OpName, input: unknown, output: unknown): Step;
export declare type Step = {
    type: "step";
    name: OpName;
    input: unknown;
    output: unknown;
} | [OpName, unknown, unknown] | [OpName, unknown] | {
    type: "multiple";
    builder: TraceBuilder;
} | {
    type: "traces";
    traces: StringTrace[];
};
export declare type Steps = {
    type: "traces";
    traces: StringTrace[];
};
export declare function steps(...steps: Step[]): {
    type: "traces";
    traces: StringTrace[];
};
//# sourceMappingURL=tracer.d.ts.map