import {
  BaseResult as Result,
  FORMAT,
  formatFormattable,
  Formattable,
  Formatted,
  formatUnknown,
  ops,
  RawFormattable,
  snapshot,
  SNAPSHOT,
} from "hbs-parser-next";

export type State = { tracer: Tracer };

export interface EvaluatorClass<T> {
  new (...args: any[]): ops.StatefulEvaluator<T>;
}
export class TracedEvaluator<OriginalState>
  implements ops.StatefulEvaluator<OriginalState & State> {
  #inner: ops.StatefulEvaluator<OriginalState> | undefined = undefined;

  setInner(inner: ops.StatefulEvaluator<OriginalState>): void {
    this.#inner = inner;
  }

  get inner(): ops.StatefulEvaluator<OriginalState> {
    if (this.#inner === undefined) {
      throw new Error(`Must set inner on WithTrace before using it`);
    }

    return this.#inner;
  }

  private parent<T>(
    callback: () => T,
    state: State,
    input: unknown,
    op: ops.Operation
  ): T {
    state.tracer.preInvoke(op.type);
    let clonedInput = snapshot(input);
    let out = callback();
    state.tracer.postInvoke(formatOp(clonedInput, op, out));
    return out;
  }

  State(
    state: OriginalState & State,
    input: unknown,
    op: ops.StateOperation
  ): OriginalState & State {
    let out = this.inner.State(state, input, op) as OriginalState & State;

    if (op.label) {
      state.tracer.pushLeaf(`State: ${formatUnknown(out)} (${op.label})`);
    } else {
      state.tracer.pushLeaf(`State: ${formatUnknown(out)}`);
    }
    return out;
  }

  Source<Out>(
    ...args: [State & OriginalState, unknown, ops.SourceOperation<Out>]
  ): Out {
    let out = this.inner.Source(...args);

    if (args[2].label) {
      args[0].tracer.pushLeaf(
        `Source: ${formatUnknown(out)} (${args[2].label})`
      );
    } else {
      args[0].tracer.pushLeaf(`Source: ${formatUnknown(out)}`);
    }
    return out;
  }

  Input<In>(
    state: State & OriginalState,
    input: In,
    _op: ops.InputOperation<In>
  ): In {
    state.tracer.pushLeaf(`Input: ${formatUnknown(input)}`);
    return input;
  }

  Pure<In, Out>(
    state: State & OriginalState,
    ...args: readonly [In, ops.PureOperation<In, Out>]
  ): Out {
    let input = snapshot(args[0]);
    let out = this.inner.Pure(state, ...args);
    state.tracer.pushLeaf(formatOp2(formatFormattable(input), args[1], out));
    return out;
  }

  Zip<In1, Out1, In2, Out2>(
    ...args: [
      State & OriginalState,
      [In1, In2],
      ops.ZipOperation<In1, Out1, In2, Out2>
    ]
  ): [Out1, Out2] {
    return this.parent(() => this.inner.Zip(...args), ...args);
  }

  Pipeline<LeftIn, Middle, RightOut>(
    ...args: [
      State & OriginalState,
      LeftIn,
      ops.PipelineOperation<LeftIn, Middle, RightOut>
    ]
  ): RightOut {
    return this.parent(() => this.inner.Pipeline(...args), ...args);
  }

  MapResult<LeftIn, ResultInner, IfOkOut, IfErrOut>(
    ...args: [
      State & OriginalState,
      LeftIn,
      ops.MapResultOperation<LeftIn, ResultInner, IfOkOut, IfErrOut>
    ]
  ): IfOkOut | IfErrOut {
    return this.parent(() => this.inner.MapResult(...args), ...args);
  }

  BothOk<In, RightOut, LeftOut>(
    ...args: [
      State & OriginalState,
      In,
      ops.BothOkOperation<In, LeftOut, RightOut>
    ]
  ): Result<[LeftOut, RightOut]> {
    return this.parent(() => this.inner.BothOk(...args), ...args);
  }

  AllOk<In, Arrows extends ops.FallibleArrows<In>>(
    ...args: [State & OriginalState, In, ops.AllOkOperation<In, Arrows>]
  ): ops.MapFallibleArrows<Arrows> {
    return this.parent(() => this.inner.AllOk(...args), ...args);
  }

  FirstOk<In, RightOut, LeftOut>(
    ...args: [
      State & OriginalState,
      In,
      ops.FirstOkOperation<In, LeftOut, RightOut>
    ]
  ): Result<LeftOut | RightOut> {
    return this.parent(() => this.inner.FirstOk(...args), ...args);
  }

  Merge<In, LeftOut, RightOut>(
    ...args: [
      State & OriginalState,
      In,
      ops.MergeOperation<In, LeftOut, RightOut>
    ]
  ): [LeftOut, RightOut] {
    return this.parent(() => this.inner.Merge(...args), ...args);
  }

  MapInput<ArrowIn, MapOut>(
    ...args: [
      State & OriginalState,
      ArrowIn,
      ops.MapInputOperation<ArrowIn, MapOut>
    ]
  ): MapOut {
    return this.parent(() => this.inner.MapInput(...args), ...args);
  }

  KeepAndThen<In, LeftOut, RightOut>(
    ...args: [
      State & OriginalState,
      In,
      ops.KeepAndThenOperation<In, LeftOut, RightOut>
    ]
  ): [LeftOut, RightOut] {
    return this.parent(() => this.inner.KeepAndThen(...args), ...args);
  }

  Reduce<In, Out>(
    ...args: [
      State & OriginalState,
      [Out, Iterable<In>],
      ops.ReduceOperation<In, Out>
    ]
  ): Out {
    return this.parent(() => this.inner.Reduce(...args), ...args);
  }

  Repeat<In, Out>(
    ...args: [
      State & OriginalState,
      In,
      ops.RepeatOperation<State & OriginalState, In, Out>
    ]
  ): Out[] {
    return this.parent(() => this.inner.Repeat(...args), ...args);
  }
}

export type NestedStringTrace = [string, StringTrace[]];
export type StringTrace = string | NestedStringTrace;

export class Tracer implements RawFormattable {
  private stack: StringTrace[] = [];
  private linear: ["enter" | "exit", string][] = [];
  constructor(public input: number[] = []) {}

  [FORMAT](): Formatted {
    return { type: "raw", value: "<State>" };
  }

  [SNAPSHOT](): Formattable {
    return this;
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
    this.linear.push(["enter", name]);
    let record = [name, []] as StringTrace;
    this.currentChildren.push(record);
    this.stack.push(record);
  }

  postInvoke(desc: string): void {
    this.linear.push(["exit", desc]);

    let last = this.stack.pop() as [string, StringTrace[]];
    last[0] = desc;
  }
}

export function trace(
  op: OpName,
  input: unknown,
  output: unknown,
  children?: StringTrace[]
): StringTrace {
  let name = formatOpName(op);

  if (children) {
    return [formatOp(input, name, output), children];
  } else {
    return formatOp(input, name, output);
  }
}

export type OpName = { type: string; label?: string } | string;

export function formatOpName(op: OpName): OpName {
  if (typeof op === "string") {
    let parsedName = op.match(/^([^(]*)(?:\((.*)\))?$/);

    if (parsedName === null) {
      throw new Error(`SYNTAX ERROR, name must be label(Kind) or Kind`);
    }

    let leftName = parsedName[1];
    let inParen = parsedName[2];

    return inParen ? { type: inParen, label: leftName } : { type: leftName };
  } else {
    return op.label ? `${op.label}(${op.type})` : op.type;
  }
}

interface FormattedOp {
  type: string;
  label?: string;
}

function formatOp(
  input: unknown,
  op: FormattedOp | [string, string] | Formatted | string,
  out: unknown
): string {
  let formattedInput = formatUnknown(input);
  let formattedOutput = formatUnknown(out);

  let formattedOp;

  if (typeof op === "string") {
    formattedOp = op;
  } else if (Array.isArray(op)) {
    formattedOp = formatOpName({ type: op[0], label: op[1] });
  } else {
    formattedOp = formatOpName(op);
  }

  return `${formattedOp}: ${formattedInput} -> ${formattedOutput}`;
}

function formatOp2(
  formattedInput: string,
  op: { type: string; label?: string } | [string, string] | Formatted | string,
  out: unknown
): string {
  let formattedOutput = formatUnknown(out);

  let formattedOp;

  if (typeof op === "string") {
    formattedOp = op;
  } else if (Array.isArray(op)) {
    formattedOp = formatOpName({ type: op[0], label: op[1] });
  } else {
    formattedOp = formatOpName(op);
  }

  return `${formattedOp}: ${formattedInput} -> ${formattedOutput}`;
}

export function raw(value: string): Formattable {
  let formatted: Formatted = { type: "raw", value };

  return {
    [FORMAT]: () => formatted,
    [SNAPSHOT]() {
      return this;
    },
  } as const;
}

export const STATE = raw("<State>");
export const VOID = raw("<void>");
export const STATE_TRACE = `State: ${formatUnknown(STATE)}`;

export class TraceBuilder {
  constructor(private traces: StringTrace[] = []) {}

  addTraces(traces: StringTrace[]): this {
    this.traces.push(...traces);
    return this;
  }

  step(opName: OpName, input: unknown, output: unknown): this {
    this.traces.push(trace(opName, input, output));

    return this;
  }

  into(opName: OpName, input: unknown, output: unknown): this {
    this.traces = [trace(opName, input, output, this.traces)];
    return this;
  }

  done(): StringTrace[] {
    return this.traces;
  }
}

export function step(name: OpName, input: unknown, output: unknown): Step {
  return {
    type: "step",
    name,
    input,
    output,
  };
}

export type Step =
  | {
      type: "step";
      name: OpName;
      input: unknown;
      output: unknown;
    }
  | [OpName, unknown, unknown]
  | [OpName, unknown] // VOID input
  | {
      type: "multiple";
      builder: TraceBuilder;
    }
  | { type: "traces"; traces: StringTrace[] };

export type Steps = { type: "traces"; traces: StringTrace[] };

export function steps(
  ...steps: Step[]
): { type: "traces"; traces: StringTrace[] } {
  let builder = new TraceBuilder();

  for (let step of steps) {
    if (Array.isArray(step)) {
      if (step.length === 3) {
        builder = builder.into(step[0], step[1], step[2]);
      } else {
        builder = builder.into(step[0], VOID, step[1]);
      }
    } else {
      switch (step.type) {
        case "step":
          builder = builder.step(step.name, step.input, step.output);
          break;
        case "multiple":
          builder = builder.addTraces(step.builder.done());
          break;
        case "traces":
          builder = builder.addTraces(step.traces);
          break;
      }
    }
  }

  return { type: "traces", traces: builder.done() };
}
