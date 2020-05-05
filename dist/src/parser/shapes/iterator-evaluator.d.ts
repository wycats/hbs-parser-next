import { Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import type * as ops from "./core-operations";
import type { FallibleArrows, MapFallibleArrows, SimpleEvaluator } from "./core-operations";
export declare abstract class PureEvaluatorImpl<State> implements ops.StatefulEvaluator<State> {
    protected delegate: ops.StatefulEvaluator<State>;
    constructor(delegate?: ops.StatefulEvaluator<State>);
    Source<Out>(_state: State, _input: unknown, op: ops.SourceOperation<Out>): Out;
    abstract State(state: State, _input: void, _op: ops.StateOperation): State;
    Id<In>(_state: State, input: In, _op: ops.IdOperation): In;
    Input<In>(_state: State, input: In, _op: ops.InputOperation<In>): In;
    Pure<In, Out>(_: State, input: In, op: ops.PureOperation<In, Out>): Out;
    Zip<In1, Out1, In2, Out2>(state: State, input: [In1, In2], op: ops.ZipOperation<In1, Out1, In2, Out2>): [Out1, Out2];
    Pipeline<LeftIn, Middle, RightOut>(state: State, input: LeftIn, op: ops.PipelineOperation<LeftIn, Middle, RightOut>): RightOut;
    MapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(state: State, input: LeftIn, op: ops.MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>): IfOkOut | IfErrOut;
    BothOk<In, RightOut, LeftOut>(state: State, input: In, op: ops.BothOkOperation<In, LeftOut, RightOut>): Result<[LeftOut, RightOut]>;
    AllOk<In, Arrows extends FallibleArrows<In>>(state: State, input: In, op: ops.AllOkOperation<In, Arrows>): MapFallibleArrows<Arrows>;
    FirstOk<In, RightOut, LeftOut>(state: State, input: In, op: ops.FirstOkOperation<In, LeftOut, RightOut>): Result<LeftOut | RightOut>;
    MapInput<ArrowIn, MapOut>(state: State, input: ArrowIn, op: ops.MapInputOperation<ArrowIn, MapOut>): MapOut;
    Merge<In, LeftOut, RightOut>(state: State, input: In, op: ops.MergeOperation<In, LeftOut, RightOut>): [LeftOut, RightOut];
    KeepAndThen<In, LeftOut, RightOut>(state: State, input: In, op: ops.KeepAndThenOperation<In, LeftOut, RightOut>): [LeftOut, RightOut];
    abstract Repeat<In, Out>(state: State, input: In, op: ops.RepeatOperation<State, In, Out>): Out[];
    Reduce<In, Out>(state: State, [accum, input]: [Out, Iterable<In>], op: ops.ReduceOperation<In, Out>): Out;
}
export declare class StatefulEvaluatorImpl<State> extends PureEvaluatorImpl<State> implements SimpleEvaluator<State> {
    static create<State>(delegate?: ops.StatefulEvaluator<State>): StatefulEvaluatorImpl<State>;
    State(state: State, _input: void, _op: ops.StateOperation): State;
    Repeat<In, Out>(state: State, input: In, op: ops.RepeatOperation<State, In, Out>): Out[];
}
export declare class IteratorEvaluator extends StatefulEvaluatorImpl<TokensIterator> {
    private iterator;
    constructor(iterator: TokensIterator);
}
//# sourceMappingURL=iterator-evaluator.d.ts.map