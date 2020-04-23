import type TokensIterator from "../tokens-iterator";
import type * as ops from "./core-operations";
import type { Evaluator } from "./core-operations";

export class StatefulEvaluator<State> implements Evaluator<State> {
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

  AndThen<LeftIn, Middle, RightOut>(
    state: State,
    input: LeftIn,
    op: ops.AndThenOperation<LeftIn, Middle, RightOut>
  ): RightOut {
    let middle = op.left.invoke(state, this, input);
    let out = op.right.invoke(state, this, middle);

    return out;
  }

  Split<In, LeftOut, RightOut>(
    state: State,
    input: In,
    op: ops.SplitOperation<In, LeftOut, RightOut>
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
}

export class IteratorEvaluator extends StatefulEvaluator<TokensIterator> {
  constructor(private iterator: TokensIterator) {
    super();
  }
}
