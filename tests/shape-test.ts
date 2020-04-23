import type * as qunit from "qunit";
import { config, module as qunitModule, test as qunitTest, todo } from "qunit";
import {
  read,
  serializeRoot,
  r,
  SourceSpan,
  Err,
  a,
  parse,
  LoggingType,
  StatefulEvaluator,
  ops,
} from "hbs-parser-next";

const increment = ops.pure((i: number) => i + 1);
const decrement = ops.pure((i: number) => i - 1);
const double = ops.pure((i: number) => i * 2);

@module("Arrow Evaluation")
export class ArrowEvaluationTest {
  private evaluator = new StatefulEvaluator();

  private invoke<T, U>(op: ops.Arrow<T, U>, input: T): U {
    return op.invoke(null, this.evaluator, input);
  }

  @test pure(assert: qunit.Assert) {
    assert.equal(this.invoke(increment, 1), 2);
  }

  @test zip(assert: qunit.Assert) {
    let zipped = ops.zip(increment, decrement);
    assert.deepEqual(this.invoke(zipped, [5, 5]), [6, 4]);
  }

  @test andThen(assert: qunit.Assert) {
    let pipeline = ops.andThen(increment, double);
    assert.deepEqual(this.invoke(pipeline, 5), 12);
  }

  @test split(assert: qunit.Assert) {
    let concurrent = ops.split(increment, double);
    assert.deepEqual(this.invoke(concurrent, 5), [6, 10]);
  }

  @test mergeAndThen(assert: qunit.Assert) {
    let pipeline = ops.keepAndThen(increment, double);
    assert.deepEqual(this.invoke(pipeline, 5), [6, 12]);
  }
}

class Tracer {
  private stack: StartedTraceRecord[] = [];

  constructor(private children: TraceRecord[] = []) {}

  get records(): TraceRecord[] {
    if (this.stack.length > 0) {
      throw new Error(
        `Unexpectedly getting records before program is done evaluating`
      );
    }
    return this.children;
  }

  preInvoke(op: string, input: unknown) {
    let record = {
      operation: op,
      inout: { in: input },
      children: [],
    };

    this.stack.push(record);
  }

  postInvoke(output: unknown) {
    let startedRecord = this.stack.pop();

    if (startedRecord === undefined) {
      throw new Error("ASSERT");
    }

    let finishedRecord = {
      operation: startedRecord.operation,
      inout: { in: startedRecord.inout.in, out: output },
      children: startedRecord.children,
    };

    assertFinishedTraceRecord(finishedRecord);

    if (this.stack.length > 0) {
      let last = this.stack[this.stack.length - 1];
      last.children.push(finishedRecord);
    } else {
      this.children.push(finishedRecord);
    }
  }
}

interface StartedTraceRecord {
  operation: string;
  inout: { in: unknown };
  children: StartedTraceRecord[];
}

function assertFinishedTraceRecord(
  record: StartedTraceRecord
): asserts record is TraceRecord {
  if (!("inout" in record)) {
    throw new Error(`unexpected unfinished trace record`);
  }

  for (let child of record.children) {
    assertFinishedTraceRecord(child);
  }
}

interface TraceRecord {
  operation: string;
  inout: { in: unknown; out: unknown; label?: string };
  children: TraceRecord[];
}

class CollectingEvaluator extends StatefulEvaluator<Tracer> {
  private trace<In, Out>(
    operation: string,
    state: Tracer,
    input: In,
    callback: () => Out
  ): Out {
    state.preInvoke(operation, input);
    let output = callback();
    state.postInvoke(output);
    return output;
  }

  Pure<In, Out>(state: Tracer, input: In, op: ops.PureOperation<In, Out>): Out {
    return this.trace("Pure", state, input, () => super.Pure(state, input, op));
  }

  Zip<In1, Out1, In2, Out2>(
    state: Tracer,
    input: [In1, In2],
    op: ops.ZipOperation<In1, Out1, In2, Out2>
  ): [Out1, Out2] {
    return this.trace("Zip", state, input, () => super.Zip(state, input, op));
  }

  AndThen<LeftIn, Middle, RightOut>(
    state: Tracer,
    input: LeftIn,
    op: ops.AndThenOperation<LeftIn, Middle, RightOut>
  ): RightOut {
    return this.trace("AndThen", state, input, () =>
      super.AndThen(state, input, op)
    );
  }

  Split<In, LeftOut, RightOut>(
    state: Tracer,
    input: In,
    op: ops.SplitOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut] {
    return this.trace("Split", state, input, () =>
      super.Split(state, input, op)
    );
  }

  KeepAndThen<In, LeftOut, RightOut>(
    state: Tracer,
    input: In,
    op: ops.KeepAndThenOperation<In, LeftOut, RightOut>
  ): [LeftOut, RightOut] {
    return this.trace("KeepAndThen", state, input, () =>
      super.KeepAndThen(state, input, op)
    );
  }
}

type TraceRecordShorthand = readonly [
  ops.OperationType,
  { in: unknown; out: unknown; label?: string },
  ...TraceRecordShorthand[]
];

function expandShorthand([
  operation,
  { in: input, out: output, label },
  ...children
]: TraceRecordShorthand): TraceRecord {
  return compact({
    operation,
    inout: { in: input, out: output, label },
    children: children ? children.map(expandShorthand) : [],
  });
}

interface Dict {
  [key: string]: unknown;
}

type Primitive =
  | string
  | number
  | boolean
  | undefined
  | null
  | symbol
  | bigint
  | unknown;

type RemoveUndefined<T> = {
  [P in keyof T]: T[P] extends undefined
    ? never
    : T[P] extends Primitive | unknown
    ? T[P]
    : RemoveUndefined<T>;
};

function compact<T>(o: T): RemoveUndefined<T> {
  if (Array.isArray(o)) {
    return (o.map(compact) as unknown) as RemoveUndefined<T>;
  } else if (typeof o === "object" && o !== null) {
    let out = {} as Dict;
    for (let [key, value] of Object.entries(o)) {
      if (value !== undefined) {
        out[key] = compact(value);
      }
    }
    return out as RemoveUndefined<T>;
  } else {
    return o as RemoveUndefined<T>;
  }
}

function record<T extends TraceRecordShorthand>(...shorthand: T): TraceRecord {
  return expandShorthand(shorthand);
}

@module("Stateful Arrow Evaluation")
export class StatefulArrowEvaluationTest {
  private evaluator = new CollectingEvaluator();
  private tracer = new Tracer();

  private invoke<T, U>(op: ops.Arrow<T, U>, input: T): U {
    return op.invoke(this.tracer, this.evaluator, input);
  }

  private get state() {
    return this.tracer.records;
  }

  @test pure(assert: qunit.Assert) {
    assert.equal(this.invoke(increment, 1), 2);
    assert.deepEqual(this.state, [record("Pure", { in: 1, out: 2 })]);
  }

  @test zip(assert: qunit.Assert) {
    let zipped = ops.zip(increment, decrement);
    assert.deepEqual(this.invoke(zipped, [5, 5]), [6, 4]);
    assert.deepEqual(this.state, [
      record(
        "Zip",
        { in: [5, 5], out: [6, 4] },
        ["Pure", { in: 5, out: 6 }],
        ["Pure", { in: 5, out: 4 }]
      ),
    ]);
  }

  @test andThen(assert: qunit.Assert) {
    let pipeline = ops.andThen(increment, double);
    assert.deepEqual(this.invoke(pipeline, 5), 12);
    assert.deepEqual(this.state, [
      record(
        "AndThen",
        { in: 5, out: 12 },
        ["Pure", { in: 5, out: 6 }],
        ["Pure", { in: 6, out: 12 }]
      ),
    ]);
  }

  @test split(assert: qunit.Assert) {
    let concurrent = ops.split(increment, double);
    assert.deepEqual(this.invoke(concurrent, 5), [6, 10]);
    assert.deepEqual(this.state, [
      record(
        "Split",
        { in: 5, out: [6, 10] },
        ["Pure", { in: 5, out: 6 }],
        ["Pure", { in: 5, out: 10 }]
      ),
    ]);
  }

  @test mergeAndThen(assert: qunit.Assert) {
    let pipeline = ops.keepAndThen(increment, double);
    assert.deepEqual(this.invoke(pipeline, 5), [6, 12]);
    assert.deepEqual(this.state, [
      record(
        "KeepAndThen",
        { in: 5, out: [6, 12] },
        ["Pure", { in: 5, out: 6 }],
        ["Pure", { in: 6, out: 12 }]
      ),
    ]);
  }
}

function module(name: string): <T>(target: T) => T {
  qunitModule(name);

  return c => c;
}

function test(target: object, name: string, descriptor: PropertyDescriptor) {
  qunitTest(name, assert => {
    let constructor = target.constructor as {
      new (): { [key: string]: (assert: qunit.Assert) => Promise<void> | void };
    };
    let instance = new constructor();
    return instance[name](assert);
  });
}
