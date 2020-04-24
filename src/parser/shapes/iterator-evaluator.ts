import type TokensIterator from "../tokens-iterator";
import type * as ops from "./core-operations";
import type { SimpleEvaluator } from "./core-operations";
import { isOk } from "../shape";

export abstract class PureEvaluatorImpl<State>
  implements ops.StatefulEvaluator<State> {
  Source<Out>(
    _state: State,
    _input: unknown,
    op: ops.SourceOperation<Out>
  ): Out {
    return op.callback();
  }

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
    let out1 = op.left.invoke(state, this, input[0]);
    let out2 = op.right.invoke(state, this, input[1]);

    return [out1, out2];
  }

  Pipeline<LeftIn, Middle, RightOut>(
    state: State,
    input: LeftIn,
    op: ops.PipelineOperation<LeftIn, Middle, RightOut>
  ): RightOut {
    let middle = op.left.invoke(state, this, input);
    let out = op.right.invoke(state, this, middle);

    return out;
  }

  MapInput<ArrowIn, MapOut>(
    state: State,
    input: ArrowIn,
    op: ops.MapInputOperation<ArrowIn, MapOut>
  ): MapOut {
    return op.map.invoke(state, this, input);
  }

  Merge<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: ops.MergeOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut] {
    let leftOut = op.left.invoke(state, this, input);
    let rightOut = op.right.invoke(state, this, input);

    return [leftOut, rightOut];
  }

  KeepAndThen<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: ops.KeepAndThenOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut] {
    let leftOut = op.left.invoke(state, this, input);
    let rightOut = op.right.invoke(state, this, leftOut);

    return [leftOut, rightOut];
  }

  abstract Repeat<In, Out>(
    state: State,
    input: In,
    op: ops.RepeatOperation<In, Out>
  ): Out[];

  Reduce<In, Out>(
    state: State,
    [accum, input]: [Out, Iterable<In>],
    op: ops.ReduceOperation<In, Out>
  ): Out {
    let current = accum;

    for (let item of input) {
      current = op.callback.invoke(state, this, [current, item]);
    }

    return current;
  }
}

export class StatefulEvaluatorImpl<State> extends PureEvaluatorImpl<State>
  implements SimpleEvaluator<State> {
  Repeat<In, Out>(
    state: State,
    input: In,
    op: ops.RepeatOperation<In, Out>
  ): Out[] {
    let out: Out[] = [];

    while (true) {
      let item = op.callback.invoke(state, this, input);

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
