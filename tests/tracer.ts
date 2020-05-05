import {
  BaseResult as Result,
  FORMAT,
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

  constructor(private source: string) {}

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
    state.tracer.postInvoke(formatOp(clonedInput, op, out, this.source));
    return out;
  }

  Id<In>(state: State, input: In, op: ops.IdOperation): In {
    state.tracer.pushLeaf(`${formatOpName(op)}`);
    return input;
  }

  State(
    state: OriginalState & State,
    input: unknown,
    op: ops.StateOperation
  ): OriginalState & State {
    let out = this.inner.State(state, input, op) as OriginalState & State;

    if (op.label) {
      state.tracer.pushLeaf(
        `Get-State: ${formatUnknown(out, this.source)} (${op.label})`
      );
    } else {
      state.tracer.pushLeaf(`Get-State: ${formatUnknown(out, this.source)}`);
    }
    return out;
  }

  Source<Out>(
    ...args: [State & OriginalState, unknown, ops.SourceOperation<Out>]
  ): Out {
    let out = this.inner.Source(...args);

    if (args[2].label) {
      args[0].tracer.pushLeaf(
        `Source: ${formatUnknown(out, this.source)} (${args[2].label})`
      );
    } else {
      args[0].tracer.pushLeaf(`Source: ${formatUnknown(out, this.source)}`);
    }
    return out;
  }

  Input<In>(
    state: State & OriginalState,
    input: In,
    _op: ops.InputOperation<In>
  ): In {
    state.tracer.pushLeaf(`Input: ${formatUnknown(input, this.source)}`);
    return input;
  }

  Pure<In, Out>(
    state: State & OriginalState,
    ...args: readonly [In, ops.PureOperation<In, Out>]
  ): Out {
    let input = snapshot(args[0]);
    let out = this.inner.Pure(state, ...args);
    state.tracer.pushLeaf(
      formatOp2(formatUnknown(input, this.source), args[1], out, this.source)
    );
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
  source: string,
  op: OpName,
  input: unknown,
  output: unknown,
  children?: StringTrace[]
): StringTrace {
  let name = formatOpName(op);

  if (children) {
    return [formatOp(input, name, output, source), children];
  } else {
    return formatOp(input, name, output, source);
  }
}

export type OpName = { type: string; label?: string } | string;

export function getOpType(name: OpName): string {
  if (typeof name === "string") {
    return name;
  } else {
    return name.type;
  }
}

export function formatOpName(op: OpName): string {
  if (typeof op === "string") {
    let parsedName = op.match(/^([^(]*)(?:\((.*)\))?$/);

    if (parsedName === null) {
      throw new Error(`SYNTAX ERROR, name must be label(Kind) or Kind`);
    }

    let leftName = parsedName[1];
    let inParen = parsedName[2];

    return inParen ? `${leftName}(${inParen})` : `${leftName}`;
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
  out: unknown,
  source: string
): string {
  let formattedOp: string;
  let opType: string;

  if (typeof op === "string") {
    formattedOp = op;
    opType = op;
  } else if (Array.isArray(op)) {
    formattedOp = formatOpName({ type: op[0], label: op[1] });
    opType = op[0];
  } else {
    formattedOp = formatOpName(op);
    opType = op.type;
  }

  let formattedInput =
    input === undefined ? undefined : formatUnknown(input, source);
  let formattedOutput =
    out === undefined ? undefined : formatUnknown(out, source);

  if (opType === "Get-State") {
    return `${formattedOp}: ${formattedOutput}`;
  } else if (formattedInput !== undefined && formattedOutput !== undefined) {
    return `${formattedOp}: ${formattedInput} -> ${formattedOutput}`;
  } else if (formattedInput) {
    return `${formattedOp}: ${formattedInput}`;
  } else if (formattedOutput) {
    return `${formattedOp}: VOID -> ${formattedOutput}`;
  } else {
    return formattedOp;
  }
}

function formatOp2(
  formattedInput: string,
  op: { type: string; label?: string } | [string, string] | Formatted | string,
  out: unknown,
  source: string
): string {
  let formattedOutput = formatUnknown(out, source);

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
export const STATE_TRACE = `Get-State: <State>`;

export interface UnbuiltTrace {
  opName: OpName;
  input?: unknown;
  output?: unknown;
  children?: Array<UnbuiltTrace>;
}

export class TraceBuilder<Output = unknown> {
  constructor(private traces: Array<UnbuiltTrace> = []) {}

  addTraces(traces: Array<UnbuiltTrace | string>): this {
    this.traces.push(
      ...traces.map(trace =>
        typeof trace === "string" ? { opName: trace } : trace
      )
    );
    return this;
  }

  merge(builder: TraceBuilder): this {
    this.traces.push(...builder.traces);
    return this;
  }

  addRaw(trace: string): this {
    this.traces.push({ opName: trace });
    return this;
  }

  get out(): Output {
    if (this.traces.length) {
      return this.traces[this.traces.length - 1].output as Output;
    } else {
      throw new Error(`can't get output from an empty builder`);
    }
  }

  step(opName: OpName, input: unknown, output: unknown): this {
    this.traces.push({ opName, input, output });
    return this;
  }

  into(opName: OpName, input: unknown, output: unknown): this {
    this.traces = [{ opName, input, output, children: this.traces }];
    return this;
  }

  getTraces(): Array<UnbuiltTrace> {
    return this.traces;
  }

  done(context: Context): StringTrace[] {
    return this.traces.map(trace => context.format(trace));
  }
}

export function step<O>(name: OpName, output: O): Step<O>;
export function step<O>(name: OpName, input: unknown, output: O): Step<O>;
export function step(name: OpName, ...args: [unknown, unknown?]): Step {
  let type = stepType(name);

  console.log(JSON.stringify(name), type);

  if (type === "state") {
    let output = args[0];

    return {
      type,
      name,
      input: undefined,
      output,
    };
  } else {
    let input = args.length === 2 ? args[0] : VOID;
    let output = args.length === 2 ? args[1] : args[0];

    return {
      type,
      name,
      input,
      output,
    };
  }
}

function stepType(name: OpName): "step" | "state" | "id" {
  switch (getOpType(name)) {
    case "Get-State":
      return "state";
    case "Id":
      return "id";
    default:
      return "step";
  }
}

export function into(name: OpName, ...args: [unknown, unknown?]): Step {
  let input = args.length === 2 ? args[0] : VOID;
  let output = args.length === 2 ? args[1] : args[0];

  return {
    type: "into",
    name,
    input,
    output,
  };
}

export type OutStep<Output = unknown> =
  | [OpName, unknown, Output]
  | [OpName, Output]
  | [OpName];

export type Step<Output = unknown> =
  | Steps
  | {
      type: "step";
      name: OpName;
      input?: unknown;
      output?: Output;
    }
  | {
      type: "state";
      name: OpName;
      input?: unknown;
      output?: Output;
    }
  | {
      type: "id";
      name: OpName;
      input?: unknown;
      output?: Output;
    }
  | {
      type: "into";
      name: OpName;
      input?: unknown;
      output?: Output;
    }
  | OutStep
  | {
      type: "multiple";
      builder: TraceBuilder;
    };
// | { type: "context"; value: (context: Context) => StringTrace[] };

export function getOutput<T>(step: Step<T>): T {
  if (Array.isArray(step)) {
    if (step.length === 3) {
      return step[2] as T;
    } else if (step.length === 2) {
      return step[1] as T;
    } else {
      return (VOID as unknown) as T;
    }
  } else {
    switch (step.type) {
      case "step":
      case "into":
      case "state":
      case "id":
        return step.output as T;
      case "traces":
        return step.traces[step.traces.length - 1].output as T;
      case "multiple":
        return step.builder.out as T;
      default:
        assertNever(step);
    }
  }
}

export type Steps = { type: "traces"; traces: Array<UnbuiltTrace> };

export class Context {
  constructor(private source: string) {}

  format(unbuilt: UnbuiltTrace | string): StringTrace {
    if (typeof unbuilt === "string") {
      return unbuilt;
    } else {
      return trace(
        this.source,
        unbuilt.opName,
        unbuilt.input,
        unbuilt.output,
        unbuilt.children?.map(child => this.format(child))
      );
    }
  }
}

export function call(input: Step[], ...out: OutStep): Steps {
  return steps(...input, out);
}

export function trySteps(
  // the final step is an ok step
  firstStep: [string, Step],
  ...remaining: [string, Step][]
): Steps {
  let builder = new TraceBuilder();

  let ok =
    remaining.length === 0 ? firstStep : (remaining.pop() as [string, Step]);
  let allSteps = [firstStep, ...remaining];

  for (let [key, value] of allSteps) {
    let out = getOutput(value);
    builder.addTraces(steps(value, [key, out]).traces);
  }

  builder.addTraces(steps(ok[1]).traces);
  builder.into(
    formatOpName({ type: "FirstOk", label: ok[0] }),
    VOID,
    getOutput(ok[1])
  );

  return { type: "traces", traces: builder.getTraces() };
}

export function steps(...steps: Step[]): Steps {
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
        case "state":
          builder = builder.step(step.name, undefined, step.output);
          break;
        case "id":
          builder = builder.step(step.name, undefined, undefined);
          break;
        case "into":
          builder = builder.into(step.name, step.input, step.output);
          break;
        case "traces":
          builder = builder.addTraces(step.traces);
          break;
        case "multiple":
          builder = builder.merge(step.builder);
          break;
        default:
          assertNever(step);
      }
    }
  }

  return { type: "traces", traces: builder.getTraces() };
}

function assertNever(_v: never): never {
  throw new Error(`unreachable`);
}
