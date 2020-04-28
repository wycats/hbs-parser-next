import { FORMAT, formatFormattable, formatUnknown, snapshot, SNAPSHOT, } from "hbs-parser-next";
export class TracedEvaluator {
    constructor() {
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
        state.tracer.postInvoke(formatOp(clonedInput, op, out));
        return out;
    }
    State(state, input, op) {
        let out = this.inner.State(state, input, op);
        if (op.label) {
            state.tracer.pushLeaf(`State: ${formatUnknown(out)} (${op.label})`);
        }
        else {
            state.tracer.pushLeaf(`State: ${formatUnknown(out)}`);
        }
        return out;
    }
    Source(...args) {
        let out = this.inner.Source(...args);
        if (args[2].label) {
            args[0].tracer.pushLeaf(`Source: ${formatUnknown(out)} (${args[2].label})`);
        }
        else {
            args[0].tracer.pushLeaf(`Source: ${formatUnknown(out)}`);
        }
        return out;
    }
    Input(state, input, _op) {
        state.tracer.pushLeaf(`Input: ${formatUnknown(input)}`);
        return input;
    }
    Pure(state, ...args) {
        let input = snapshot(args[0]);
        let out = this.inner.Pure(state, ...args);
        state.tracer.pushLeaf(formatOp2(formatFormattable(input), args[1], out));
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
export function trace(op, input, output, children) {
    let name = formatOpName(op);
    if (children) {
        return [formatOp(input, name, output), children];
    }
    else {
        return formatOp(input, name, output);
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
        return inParen ? { type: inParen, label: leftName } : { type: leftName };
    }
    else {
        return op.label ? `${op.label}(${op.type})` : op.type;
    }
}
function formatOp(input, op, out) {
    let formattedInput = formatUnknown(input);
    let formattedOutput = formatUnknown(out);
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
function formatOp2(formattedInput, op, out) {
    let formattedOutput = formatUnknown(out);
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
export const STATE_TRACE = `State: ${formatUnknown(STATE)}`;
