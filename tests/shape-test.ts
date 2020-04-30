import {
  ops,
  StatefulEvaluatorImpl,
  baseErr as err,
  baseOk as ok,
  BaseResult as Result,
  JSONValue,
} from "hbs-parser-next";
import type * as qunit from "qunit";
import { printIndentedItems, module, test } from "./helpers";

// The test facilities below are intentionally using unnecessary
// combinators when they could have used `lift` to stress-test
// the system.

export class CustomArray<T> extends Array<T>
  implements ops.Concattable, ops.Reducable<T> {
  constructor(...args: ConstructorParameters<typeof Array>) {
    if (new.target !== CustomArray) {
      throw new Error(`CustomArray is final -- don't subclass`);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    super(...(args as any));
  }

  breakableReduce<Output>(
    callback: (accum: Output, item: T) => IteratorResult<Output>,
    init: Output
  ): Output {
    let current = init;

    for (let item of this) {
      let next = callback(current, item);

      if (next.done) {
        return next.value;
      }

      current = next.value;
    }

    return current;
  }

  zero<U>(): CustomArray<U> {
    return new CustomArray() as CustomArray<U>;
  }

  merge(other: this): void {
    for (let item of other) {
      this.push(item);
    }
  }
}

function list<T>(...items: T[]): CustomArray<T> {
  let a = new CustomArray<T>();
  a.push(...items);
  return a;
}

const flatIncrement = ops.pure((i: number) => list(i + 1), "flat-increment");

export function flatIncrementTrace(input: number, out: number[]): StringTrace {
  return formatOp(input, { type: "Pure", label: "flat-increment" }, out);
}

const firstReducable = ops.pure(
  (numbers: ops.Reducable<number>) =>
    numbers.breakableReduce((_, value) => ({ done: true, value }), 0),
  "first"
);

function firstReducableTrace(input: number[], output: number): StringTrace {
  return formatOp(input, { type: "Pure", label: "first" }, output);
}

const increment = ops.pipeline(flatIncrement, firstReducable, "increment");

// this is useful for examples that are already very noisy
const boringIncrement = ops.pure(
  (input: number) => input + 1,
  "boring-increment"
);

function incrementTrace(input: number, output: number): StringTrace {
  return [
    formatOp(input, { type: "Pipeline", label: "increment" }, output),
    [
      flatIncrementTrace(input, [output]),
      firstReducableTrace([output], output),
    ],
  ];
}

const decrement = ops.pure((i: number) => i - 1, "decrement");
const double = ops.pure((i: number) => i * 2, "double");

function iterateOne(
  map: ops.Arrow<number, number>
): ops.Arrow<[number[], number], number[]> {
  // extract the first value from the input
  const accumulator = ops.pure(
    (input: [number[], number]) => input[0],
    "first"
  );

  // extract the second value from the input
  const value = ops.pure((input: [number[], number]) => input[1], "second");

  // merge them back together, mapping the value over the map arrow
  const pair = ops.merge(accumulator, ops.pipeline(value, map));

  // the append function takes an [accum, input] and pushes the input
  // into the accum; yes, I know this is not really pure 🤔
  let append = ops.pure(([accum, input]: [number[], number]) => {
    accum.push(input);
    return accum;
  }, "append");

  // pipe [accum, input -> map] into append
  return ops.pipeline(pair, append, "iterate");
}

function iterate(
  arrow: ops.Arrow<number, number>
): ops.Arrow<number[], number[]> {
  // create the initial `[]`
  const inputAccumulator = ops.source(() => [] as number[], "initialize");

  // build a single iteration arrow
  // [accum: number[], in: number] -> number
  let iteration = iterateOne(arrow);

  // turn the iteration arrow into a reduce
  // [in: number[], accum: number[]] -> number[]
  let reduce = ops.reduce(iteration);

  // create the input
  let input = ops.merge(inputAccumulator, ops.input<number[]>(), "input-pair");

  // [in: number[]] -> reduce: ([in: number[], accum: number[]] -> number[])
  return ops.pipeline(input, reduce, "iteration");
}

function decrementTrace(input: number, output: number): StringTrace {
  return formatArrow(input, decrement, output);
}

function doubleTrace(input: number, output: number): StringTrace {
  return formatArrow(input, double, output);
}

@module("Arrow Evaluation")
export class ArrowEvaluationTest {
  private evaluator = new StatefulEvaluatorImpl();

  private invoke<T, U>(op: ops.Arrow<T, U>, input: T): U {
    return op.invoke(null, this.evaluator, input);
  }

  @test pure(assert: qunit.Assert): void {
    assert.equal(this.invoke(increment, 1), 2);
  }

  @test zip(assert: qunit.Assert): void {
    let zipped = ops.zip(increment, decrement);
    assert.deepEqual(this.invoke(zipped, [5, 5]), [6, 4]);
  }

  @test pipeline(assert: qunit.Assert): void {
    let pipeline = ops.pipeline(increment, double);
    assert.deepEqual(this.invoke(pipeline, 5), 12);
  }

  @test merge(assert: qunit.Assert): void {
    let concurrent = ops.merge(increment, double);
    assert.deepEqual(this.invoke(concurrent, 5), [6, 10]);
  }

  @test mergeAndThen(assert: qunit.Assert): void {
    let pipeline = ops.keepAndThen(increment, double);
    assert.deepEqual(this.invoke(pipeline, 5), [6, 12]);
  }
}

type StringTraceTuple = [string, StringTrace[]];
type StringTrace = string | StringTraceTuple;

class Tracer {
  private stack: StringTrace[] = [];
  constructor(public input: number[] = []) {}

  toJSON(): string {
    return "<State>";
  }

  get currentChildren(): StringTrace[] {
    if (this.stack.length === 0) {
      return this.stack;
    } else {
      return this.stack[this.stack.length - 1][1] as StringTrace[];
    }
  }

  get currentName(): string | undefined {
    if (this.stack.length === 0) {
      return;
    } else {
      return this.stack[this.stack.length - 1][0] as string;
    }
  }

  get records(): StringTrace[] {
    return this.stack;
  }

  pushLeaf(leaf: string): void {
    this.currentChildren.push(leaf);
  }

  preInvoke(name: string): void {
    let record = [name, []] as StringTrace;
    this.currentChildren.push(record);
    this.stack.push(record);
  }

  postInvoke(desc: string): void {
    let last = this.stack.pop() as [string, StringTrace[]];
    last[0] = desc;
  }
}

type TraceLineArgs = [
  unknown,
  { type: string; label?: string } | [string, string] | string,
  unknown
];

function trace(
  rawName: string,
  input: TraceLineArgs[0],
  output: TraceLineArgs[2],
  children?: StringTrace[]
): StringTrace {
  let parsedName = rawName.match(/^([^(]*)(?:\((.*)\))?$/);

  if (parsedName === null) {
    throw new Error(`SYNTAX ERROR, name must be label(Kind) or Kind`);
  }

  let leftName = parsedName[1];
  let inParen = parsedName[2];

  let name: string | [string, string] = inParen
    ? [inParen, leftName]
    : leftName;

  debugger;
  if (children) {
    return [formatOp(input, name, output), children];
  } else {
    return formatOp(input, name, output);
  }
}

function format(op: { type: string; label?: string }): string {
  return op.label ? `${op.label}(${op.type})` : op.type;
}

export function formatJSON(input: unknown): string {
  return JSON.stringify(input)
    .replace(/\\?"/g, `'`)
    .replace(/'(<.*?>)'/, "$1");
}

function formatOp(
  input: unknown,
  op: { type: string; label?: string } | [string, string] | string,
  out: unknown
): string {
  let formattedInput = formatJSON(input);
  let formattedOutput = formatJSON(out);

  let formattedOp;

  if (typeof op === "string") {
    formattedOp = op;
  } else if (Array.isArray(op)) {
    formattedOp = format({ type: op[0], label: op[1] });
  } else {
    formattedOp = format(op);
  }

  return `${formattedOp}: ${formattedInput} -> ${formattedOutput}`;
}

function source(value: unknown, label?: string): StringTrace {
  let out = `Source: ${formatJSON(value)}`;

  if (label) {
    out += ` (${label})`;
  }

  return out;
}

function input(value: unknown): StringTrace {
  return `Input: ${formatJSON(value)}`;
}

function formatArrow(
  input: unknown,
  op: ops.Arrow<unknown, unknown>,
  out: unknown
): string {
  return formatOp(input, op.operation, out);
}

class CollectingEvaluator extends StatefulEvaluatorImpl<Tracer> {
  private parent<T>(
    callback: () => T,
    state: Tracer,
    input: unknown,
    op: ops.Operation
  ): T {
    state.preInvoke(op.type);
    let clonedInput = JSON.parse(JSON.stringify(input));
    let out = callback();
    state.postInvoke(formatOp(clonedInput, op, out));
    return out;
  }

  Source<Out>(...args: [Tracer, unknown, ops.SourceOperation<Out>]): Out {
    let out = super.Source(...args);

    if (args[2].label) {
      args[0].pushLeaf(`Source: ${formatJSON(out)} (${args[2].label})`);
    } else {
      args[0].pushLeaf(`Source: ${formatJSON(out)}`);
    }
    return out;
  }

  Input<In>(tracer: Tracer, input: In, _op: ops.InputOperation<In>): In {
    tracer.pushLeaf(`Input: ${formatJSON(input)}`);
    return input;
  }

  Pure<In, Out>(
    state: Tracer,
    ...args: readonly [In, ops.PureOperation<In, Out>]
  ): Out {
    let input = JSON.parse(JSON.stringify(args[0]));
    let out = super.Pure(state, ...args);
    state.pushLeaf(formatOp(input, args[1], out));
    return out;
  }

  Zip<In1, Out1, In2, Out2>(
    ...args: [Tracer, [In1, In2], ops.ZipOperation<In1, Out1, In2, Out2>]
  ): [Out1, Out2] {
    return this.parent(() => super.Zip(...args), ...args);
  }

  Pipeline<LeftIn, Middle, RightOut>(
    ...args: [Tracer, LeftIn, ops.PipelineOperation<LeftIn, Middle, RightOut>]
  ): RightOut {
    return this.parent(() => super.Pipeline(...args), ...args);
  }

  Merge<In, LeftOut, RightOut>(
    ...args: [Tracer, In, ops.MergeOperation<In, LeftOut, RightOut>]
  ): [LeftOut, RightOut] {
    return this.parent(() => super.Merge(...args), ...args);
  }

  MapInput<ArrowIn, MapOut>(
    ...args: [Tracer, ArrowIn, ops.MapInputOperation<ArrowIn, MapOut>]
  ): MapOut {
    return this.parent(() => super.MapInput(...args), ...args);
  }

  KeepAndThen<In, LeftOut, RightOut>(
    ...args: [Tracer, In, ops.KeepAndThenOperation<In, LeftOut, RightOut>]
  ): [LeftOut, RightOut] {
    return this.parent(() => super.KeepAndThen(...args), ...args);
  }

  Reduce<In, Out>(
    ...args: [Tracer, [Out, Iterable<In>], ops.ReduceOperation<In, Out>]
  ): Out {
    return this.parent(() => super.Reduce(...args), ...args);
  }

  Repeat<In, Out>(
    ...args: [Tracer, In, ops.RepeatOperation<Tracer, In, Out>]
  ): Out[] {
    return this.parent(() => super.Repeat(...args), ...args);
  }
}

@module("Stateful Arrow Evaluation")
export class StatefulArrowEvaluationTest {
  private evaluator = new CollectingEvaluator();
  private tracer = new Tracer();

  declare assert: qunit.Assert;

  assertInvoke<
    T extends JSONValue | undefined | void,
    U extends JSONValue | undefined | void
  >(
    arrow: ops.Arrow<T, U>,
    input: T,
    expectedOutput: U,
    ...expectedTraceRecords: StringTrace[]
  ): void {
    let actual = this.invoke(arrow, input);
    this.assert.deepEqual(
      actual,
      expectedOutput,
      `expected output to be ${formatJSON(expectedOutput)}`
    );

    this.assert.deepEqual(
      `\n${printIndentedItems(this.tracer.records)}\n`,
      `\n${printIndentedItems(expectedTraceRecords)}\n`,
      "expected trace to match"
    );
  }

  private invoke<T, U>(op: ops.Arrow<T, U>, input: T): U {
    return op.invoke(this.tracer, this.evaluator, input);
  }

  @test pure(): void {
    this.assertInvoke(increment, 1, 2, incrementTrace(1, 2));
  }

  @test zip(): void {
    this.assertInvoke(
      ops.zip(increment, decrement),
      [5, 5],
      [6, 4],
      [
        formatOp([5, 5], "Zip", [6, 4]),
        [incrementTrace(5, 6), decrementTrace(5, 4)],
      ]
    );
  }

  @test pipeline(): void {
    this.assertInvoke(ops.pipeline(increment, double), 5, 12, [
      formatOp(5, { type: "Pipeline" }, 12),
      [incrementTrace(5, 6), doubleTrace(6, 12)],
    ]);
  }

  @test merge(): void {
    this.assertInvoke(
      ops.merge(increment, double),
      5,
      [6, 10],
      [
        formatOp(5, "Merge", [6, 10]),
        [incrementTrace(5, 6), doubleTrace(5, 10)],
      ]
    );
  }

  @test mergeAndThen(): void {
    this.assertInvoke(
      ops.keepAndThen(increment, double),
      5,
      [6, 12],
      [
        formatOp(5, "KeepAndThen", [6, 12]),
        [incrementTrace(5, 6), doubleTrace(6, 12)],
      ]
    );
  }

  @test iterate() {
    this.assertInvoke(
      iterate(boringIncrement),
      [3, 6, 9],
      [4, 7, 10],
      trace(
        "iteration(Pipeline)",
        [3, 6, 9],
        [4, 7, 10],
        [
          trace(
            "input-pair(Merge)",
            [3, 6, 9],
            [[], [3, 6, 9]],
            [source([], "initialize"), input([3, 6, 9])]
          ),
          trace(
            "Reduce",
            [[], [3, 6, 9]],
            [4, 7, 10],
            [
              iterateTrace([], 3, 4),
              iterateTrace([4], 6, 7),
              iterateTrace([4, 7], 9, 10),
            ]
          ),
        ]
      )
    );
  }

  @test repeat(): void {
    this.tracer.input = [1, 2, 3];

    let extract = ops.pure<[unknown, Tracer], Result<number>>(([, state]) => {
      if (state.input.length === 0) {
        return err("done") as Result<number>;
      } else {
        return ok(state.input.shift()) as Result<number>;
      }
    }, "shift");

    let fallible = ops.pure((v: number) => ok(v), "fallible");

    let increment = ops.mapResult(
      extract,
      ops.pipeline(boringIncrement, fallible, "ifOk"),
      ops.pure(err => err, "ifErr")
    );

    let repeat: ops.Arrow<void, number[]> = ops.repeat(increment);

    this.assertInvoke(
      repeat,
      null,
      [2, 3, 4],
      trace(
        "Repeat",
        null,
        [2, 3, 4],
        [
          trace("shift(Pure)", [null, this.tracer], ok(1)),
          trace("ifOk(Pipeline)", 1, ok(2), [
            trace("boring-increment(Pure)", 1, 2),
            trace("fallible(Pure)", 2, ok(2)),
          ]),
          trace("shift(Pure)", [null, this.tracer], ok(2)),
          trace("ifOk(Pipeline)", 2, ok(3), [
            trace("boring-increment(Pure)", 2, 3),
            trace("fallible(Pure)", 3, ok(3)),
          ]),
          trace("shift(Pure)", [null, this.tracer], ok(3)),
          trace("ifOk(Pipeline)", 3, ok(4), [
            trace("boring-increment(Pure)", 3, 4),
            trace("fallible(Pure)", 4, ok(4)),
          ]),
          trace("shift(Pure)", [null, this.tracer], err("done")),
          trace("ifErr(Pure)", err("done"), err("done")),
        ]
      )
    );
  }
}

function iterateTrace(
  accum: number[],
  input: number,
  output: number
): StringTrace {
  return trace(
    "iterate(Pipeline)",
    [accum, input],
    [...accum, output],
    [
      trace(
        "Merge",
        [accum, input],
        [accum, output],
        [
          trace("first(Pure)", [accum, input], accum),
          trace("Pipeline", [accum, input], output, [
            trace("second(Pure)", [accum, input], input),
            trace("boring-increment(Pure)", input, output),
          ]),
        ]
      ),
      trace("append(Pure)", [accum, output], [...accum, output]),
    ]
  );
}
