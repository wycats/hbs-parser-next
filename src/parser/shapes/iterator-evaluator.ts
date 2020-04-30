import { isErr, isOk, ok, Result } from "../shape";
import type TokensIterator from "../tokens-iterator";

/* eslint-disable import/no-duplicates */
import type * as ops from "./core-operations";
import type {
  FallibleArrows,
  MapFallibleArrows,
  SimpleEvaluator,
} from "./core-operations";
/* eslint-enable import/no-duplicates */

export abstract class PureEvaluatorImpl<State>
  implements ops.StatefulEvaluator<State> {
  protected delegate: ops.StatefulEvaluator<State>;

  constructor(delegate?: ops.StatefulEvaluator<State>) {
    this.delegate = delegate ?? this;
  }

  Source<Out>(
    _state: State,
    _input: unknown,
    op: ops.SourceOperation<Out>
  ): Out {
    return op.callback();
  }

  abstract State(state: State, _input: void, _op: ops.StateOperation): State;

  Input<In>(_state: State, input: In, _op: ops.InputOperation<In>): In {
    return input;
  }

  Pure<In, Out>(_: State, input: In, op: ops.PureOperation<In, Out>): Out {
    return op.callback(input);
  }

  Zip<In1, Out1, In2, Out2>(
    state: State,
    input: [In1, In2],
    op: ops.ZipOperation<In1, Out1, In2, Out2>
  ): [Out1, Out2] {
    let out1 = op.left.invoke(state, this.delegate, input[0]);
    let out2 = op.right.invoke(state, this.delegate, input[1]);

    return [out1, out2];
  }

  Pipeline<LeftIn, Middle, RightOut>(
    state: State,
    input: LeftIn,
    op: ops.PipelineOperation<LeftIn, Middle, RightOut>
  ): RightOut {
    let middle = op.left.invoke(state, this.delegate, input);
    let out = op.right.invoke(state, this.delegate, middle);

    return out;
  }

  MapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(
    state: State,
    input: LeftIn,
    op: ops.MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>
  ): IfOkOut | IfErrOut {
    let result = op.left.invoke(state, this.delegate, input);

    if (isOk(result)) {
      return op.ifOk.invoke(state, this.delegate, result.value);
    } else {
      return op.ifErr.invoke(state, this.delegate, result);
    }
  }

  BothOk<In, RightOut, LeftOut>(
    state: State,
    input: In,
    op: ops.BothOkOperation<In, LeftOut, RightOut>
  ): Result<[LeftOut, RightOut]> {
    let leftResult = op.left.invoke(state, this.delegate, input);

    if (!isOk(leftResult)) {
      return leftResult;
    }

    let rightResult = op.right.invoke(state, this.delegate, input);

    if (isOk(rightResult)) {
      return ok([leftResult.value, rightResult.value]);
    } else {
      return rightResult;
    }
  }

  AllOk<In, Arrows extends FallibleArrows<In>>(
    state: State,
    input: In,
    op: ops.AllOkOperation<In, Arrows>
  ): MapFallibleArrows<Arrows> {
    let out = [];

    for (let arrow of op.arrows) {
      let result = arrow.invoke(state, this.delegate, input);

      if (isErr(result)) {
        return result;
      } else {
        out.push(result.value);
      }
    }

    return ok(out) as ops.MapFallibleArrows<Arrows>;
  }

  FirstOk<In, RightOut, LeftOut>(
    state: State,
    input: In,
    op: ops.FirstOkOperation<In, LeftOut, RightOut>
  ): Result<LeftOut | RightOut> {
    let leftResult = op.left.invoke(state, this.delegate, input);

    if (isOk(leftResult)) {
      return leftResult;
    }

    return op.right.invoke(state, this.delegate, input);
  }

  MapInput<ArrowIn, MapOut>(
    state: State,
    input: ArrowIn,
    op: ops.MapInputOperation<ArrowIn, MapOut>
  ): MapOut {
    return op.map.invoke(state, this.delegate, input);
  }

  Merge<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: ops.MergeOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut] {
    let leftOut = op.left.invoke(state, this.delegate, input);
    let rightOut = op.right.invoke(state, this.delegate, input);

    return [leftOut, rightOut];
  }

  KeepAndThen<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: ops.KeepAndThenOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut] {
    let leftOut = op.left.invoke(state, this.delegate, input);
    let rightOut = op.right.invoke(state, this.delegate, leftOut);

    return [leftOut, rightOut];
  }

  abstract Repeat<In, Out>(
    state: State,
    input: In,
    op: ops.RepeatOperation<State, In, Out>
  ): Out[];

  Reduce<In, Out>(
    state: State,
    [accum, input]: [Out, Iterable<In>],
    op: ops.ReduceOperation<In, Out>
  ): Out {
    let current = accum;

    for (let item of input) {
      current = op.callback.invoke(state, this.delegate, [current, item]);
    }

    return current;
  }
}

export class StatefulEvaluatorImpl<State> extends PureEvaluatorImpl<State>
  implements SimpleEvaluator<State> {
  State(state: State, _input: void, _op: ops.StateOperation): State {
    return state;
  }

  Repeat<In, Out>(
    state: State,
    input: In,
    op: ops.RepeatOperation<State, In, Out>
  ): Out[] {
    let out: Out[] = [];

    while (true) {
      let item = op.callback.invoke(state, this.delegate, [input, state]);

      if (isOk(item)) {
        out.push(item.value);
      } else {
        break;
      }
    }

    return out;
  }
}

export class IteratorEvaluator extends StatefulEvaluatorImpl<TokensIterator> {
  constructor(private iterator: TokensIterator) {
    super();
  }
}
