import { FORMAT, formatUnknown, snapshot, SNAPSHOT, } from "hbs-parser-next";
export class TracedEvaluator {
    constructor(source) {
        this.source = source;
        this.#inner = undefined;
    }
    #inner;
    setInner(inner) {
        this.#inner = inner;
    }
    get inner() {
        if (this.#inner === undefined) {
            throw new Error(`Must set inner on WithTrace before using it`);
        }
        return this.#inner;
    }
    parent(callback, state, input, op) {
        state.tracer.preInvoke(op.type);
        let clonedInput = snapshot(input);
        let out = callback();
        state.tracer.postInvoke(formatOp(clonedInput, op, out, this.source));
        return out;
    }
    Id(state, input, op) {
        state.tracer.pushLeaf(`${formatOpName(op)}`);
        return input;
    }
    State(state, input, op) {
        let out = this.inner.State(state, input, op);
        if (op.label) {
            state.tracer.pushLeaf(`Get-State: ${formatUnknown(out, this.source)} (${op.label})`);
        }
        else {
            state.tracer.pushLeaf(`Get-State: ${formatUnknown(out, this.source)}`);
        }
        return out;
    }
    Source(...args) {
        let out = this.inner.Source(...args);
        if (args[2].label) {
            args[0].tracer.pushLeaf(`Source: ${formatUnknown(out, this.source)} (${args[2].label})`);
        }
        else {
            args[0].tracer.pushLeaf(`Source: ${formatUnknown(out, this.source)}`);
        }
        return out;
    }
    Input(state, input, _op) {
        state.tracer.pushLeaf(`Input: ${formatUnknown(input, this.source)}`);
        return input;
    }
    Pure(state, ...args) {
        debugger;
        let input = snapshot(args[0]);
        let out = this.inner.Pure(state, ...args);
        state.tracer.pushLeaf(formatOp2(formatUnknown(input, this.source), args[1], out, this.source));
        return out;
    }
    Zip(...args) {
        return this.parent(() => this.inner.Zip(...args), ...args);
    }
    Pipeline(...args) {
        return this.parent(() => this.inner.Pipeline(...args), ...args);
    }
    MapResult(...args) {
        return this.parent(() => this.inner.MapResult(...args), ...args);
    }
    BothOk(...args) {
        return this.parent(() => this.inner.BothOk(...args), ...args);
    }
    AllOk(...args) {
        return this.parent(() => this.inner.AllOk(...args), ...args);
    }
    FirstOk(...args) {
        return this.parent(() => this.inner.FirstOk(...args), ...args);
    }
    Merge(...args) {
        return this.parent(() => this.inner.Merge(...args), ...args);
    }
    MapInput(...args) {
        return this.parent(() => this.inner.MapInput(...args), ...args);
    }
    KeepAndThen(...args) {
        return this.parent(() => this.inner.KeepAndThen(...args), ...args);
    }
    Reduce(...args) {
        return this.parent(() => this.inner.Reduce(...args), ...args);
    }
    Repeat(...args) {
        return this.parent(() => this.inner.Repeat(...args), ...args);
    }
}
export class Tracer {
    constructor(input = []) {
        this.input = input;
        this.stack = [];
        this.linear = [];
    }
    [FORMAT]() {
        return { type: "raw", value: "<State>" };
    }
    [SNAPSHOT]() {
        return this;
    }
    get currentChildren() {
        if (this.stack.length === 0) {
            return this.stack;
        }
        else {
            return this.stack[this.stack.length - 1][1];
        }
    }
    get currentName() {
        if (this.stack.length === 0) {
            return;
        }
        else {
            return this.stack[this.stack.length - 1][0];
        }
    }
    get records() {
        return this.stack;
    }
    pushLeaf(leaf) {
        this.currentChildren.push(leaf);
    }
    preInvoke(name) {
        this.linear.push(["enter", name]);
        let record = [name, []];
        this.currentChildren.push(record);
        this.stack.push(record);
    }
    postInvoke(desc) {
        this.linear.push(["exit", desc]);
        let last = this.stack.pop();
        last[0] = desc;
    }
}
export function trace(source, op, input, output, children) {
    let name = formatOpName(op);
    if (children) {
        return [formatOp(input, name, output, source), children];
    }
    else {
        return formatOp(input, name, output, source);
    }
}
export function formatOpName(op) {
    if (typeof op === "string") {
        let parsedName = op.match(/^([^(]*)(?:\((.*)\))?$/);
        if (parsedName === null) {
            throw new Error(`SYNTAX ERROR, name must be label(Kind) or Kind`);
        }
        let leftName = parsedName[1];
        let inParen = parsedName[2];
        return inParen ? `${leftName}(${inParen})` : `${leftName}`;
    }
    else {
        return op.label ? `${op.label}(${op.type})` : op.type;
    }
}
function formatOp(input, op, out, source) {
    let formattedOp;
    if (typeof op === "string") {
        formattedOp = op;
    }
    else if (Array.isArray(op)) {
        formattedOp = formatOpName({ type: op[0], label: op[1] });
    }
    else {
        formattedOp = formatOpName(op);
    }
    let formattedInput = input === undefined ? undefined : formatUnknown(input, source);
    let formattedOutput = out === undefined ? undefined : formatUnknown(out, source);
    if (formattedInput !== undefined && formattedOutput !== undefined) {
        return `${formattedOp}: ${formattedInput} -> ${formattedOutput}`;
    }
    else if (formattedInput) {
        return `${formattedOp}: ${formattedInput}`;
    }
    else if (formattedOutput) {
        return `${formattedOp}: VOID -> ${formattedOutput}`;
    }
    else {
        return formattedOp;
    }
}
function formatOp2(formattedInput, op, out, source) {
    let formattedOutput = formatUnknown(out, source);
    let formattedOp;
    if (typeof op === "string") {
        formattedOp = op;
    }
    else if (Array.isArray(op)) {
        formattedOp = formatOpName({ type: op[0], label: op[1] });
    }
    else {
        formattedOp = formatOpName(op);
    }
    return `${formattedOp}: ${formattedInput} -> ${formattedOutput}`;
}
export function raw(value) {
    let formatted = { type: "raw", value };
    return {
        [FORMAT]: () => formatted,
        [SNAPSHOT]() {
            return this;
        },
    };
}
export const STATE = raw("<State>");
export const VOID = raw("<void>");
export const STATE_TRACE = `Get-State: <State>`;
export class TraceBuilder {
    constructor(traces = []) {
        this.traces = traces;
    }
    addTraces(traces) {
        this.traces.push(...traces.map(trace => typeof trace === "string" ? { opName: trace } : trace));
        return this;
    }
    merge(builder) {
        this.traces.push(...builder.traces);
        return this;
    }
    addRaw(trace) {
        this.traces.push({ opName: trace });
        return this;
    }
    get out() {
        if (this.traces.length) {
            return this.traces[this.traces.length - 1].output;
        }
        else {
            throw new Error(`can't get output from an empty builder`);
        }
    }
    addTrace(opName, input, output, children) {
        this.traces.push({
            opName,
            input,
            output,
            children,
        });
    }
    step(opName, input, output) {
        this.addTrace(opName, input, output);
        return this;
    }
    into(opName, ...args) {
        let input = args.length === 2 ? args[0] : VOID;
        let output = args.length === 2 ? args[1] : args[0];
        this.traces = [{ opName, input, output, children: this.traces }];
        return this;
    }
    getTraces() {
        return this.traces;
    }
    done(context) {
        return this.traces.map(trace => context.format(trace));
    }
}
export function step(name, input, output) {
    return {
        type: "step",
        name,
        input,
        output,
    };
}
// | { type: "context"; value: (context: Context) => StringTrace[] };
function getOutput(step) {
    if (Array.isArray(step)) {
        if (step.length === 3) {
            return step[2];
        }
        else if (step.length === 2) {
            return step[1];
        }
        else {
            return VOID;
        }
    }
    else {
        switch (step.type) {
            case "step":
                return step.output;
            case "traces":
                return step.traces[step.traces.length - 1].output;
            case "multiple":
                return step.builder.out;
            default:
                assertNever(step);
        }
    }
}
export class Context {
    constructor(source) {
        this.source = source;
    }
    format(unbuilt) {
        if (typeof unbuilt === "string") {
            return unbuilt;
        }
        else {
            return trace(this.source, unbuilt.opName, unbuilt.input, unbuilt.output, unbuilt.children?.map(child => this.format(child)));
        }
    }
}
export function call(input, ...out) {
    return steps(...input, out);
}
export function trySteps(
// the final step is an ok step
firstStep, ...remaining) {
    let builder = new TraceBuilder();
    let ok = remaining.length === 0 ? firstStep : remaining.pop();
    let allSteps = [firstStep, ...remaining];
    for (let [key, value] of allSteps) {
        let out = getOutput(value);
        builder.addTraces(steps(value, [key, out]).traces);
    }
    builder.addTraces(steps(ok[1]).traces);
    builder.into(formatOpName({ type: "FirstOk", label: ok[0] }), getOutput(ok[1]));
    return { type: "traces", traces: builder.getTraces() };
}
export function steps(...steps) {
    let builder = new TraceBuilder();
    for (let step of steps) {
        if (Array.isArray(step)) {
            if (step.length === 3) {
                builder = builder.into(step[0], step[1], step[2]);
            }
            else {
                builder = builder.into(step[0], VOID, step[1]);
            }
        }
        else {
            switch (step.type) {
                case "step":
                    builder = builder.step(step.name, step.input, step.output);
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
function assertNever(_v) {
    throw new Error(`unreachable`);
}
