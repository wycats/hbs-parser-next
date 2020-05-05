var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ops, StatefulEvaluatorImpl, baseErr as err, baseOk as ok, } from "hbs-parser-next";
import { printIndentedItems, module, test } from "./helpers";
// The test facilities below are intentionally using unnecessary
// combinators when they could have used `lift` to stress-test
// the system.
export class CustomArray extends Array {
    constructor(...args) {
        if (new.target !== CustomArray) {
            throw new Error(`CustomArray is final -- don't subclass`);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        super(...args);
    }
    breakableReduce(callback, init) {
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
    zero() {
        return new CustomArray();
    }
    merge(other) {
        for (let item of other) {
            this.push(item);
        }
    }
}
function list(...items) {
    let a = new CustomArray();
    a.push(...items);
    return a;
}
const flatIncrement = ops.pure((i) => list(i + 1), "flat-increment");
export function flatIncrementTrace(input, out) {
    return formatOp(input, { type: "Pure", label: "flat-increment" }, out);
}
const firstReducable = ops.pure((numbers) => numbers.breakableReduce((_, value) => ({ done: true, value }), 0), "first");
function firstReducableTrace(input, output) {
    return formatOp(input, { type: "Pure", label: "first" }, output);
}
const increment = ops.pipeline(flatIncrement, firstReducable, "increment");
// this is useful for examples that are already very noisy
const boringIncrement = ops.pure((input) => input + 1, "boring-increment");
function incrementTrace(input, output) {
    return [
        formatOp(input, { type: "Pipeline", label: "increment" }, output),
        [
            flatIncrementTrace(input, [output]),
            firstReducableTrace([output], output),
        ],
    ];
}
const decrement = ops.pure((i) => i - 1, "decrement");
const double = ops.pure((i) => i * 2, "double");
function iterateOne(map) {
    // extract the first value from the input
    const accumulator = ops.pure((input) => input[0], "first");
    // extract the second value from the input
    const value = ops.pure((input) => input[1], "second");
    // merge them back together, mapping the value over the map arrow
    const pair = ops.merge(accumulator, ops.pipeline(value, map));
    // the append function takes an [accum, input] and pushes the input
    // into the accum; yes, I know this is not really pure 🤔
    let append = ops.pure(([accum, input]) => {
        accum.push(input);
        return accum;
    }, "append");
    // pipe [accum, input -> map] into append
    return ops.pipeline(pair, append, "iterate");
}
function iterate(arrow) {
    // create the initial `[]`
    const inputAccumulator = ops.source(() => [], "initialize");
    // build a single iteration arrow
    // [accum: number[], in: number] -> number
    let iteration = iterateOne(arrow);
    // turn the iteration arrow into a reduce
    // [in: number[], accum: number[]] -> number[]
    let reduce = ops.reduce(iteration);
    // create the input
    let input = ops.merge(inputAccumulator, ops.input(), "input-pair");
    // [in: number[]] -> reduce: ([in: number[], accum: number[]] -> number[])
    return ops.pipeline(input, reduce, "iteration");
}
function decrementTrace(input, output) {
    return formatArrow(input, decrement, output);
}
function doubleTrace(input, output) {
    return formatArrow(input, double, output);
}
let ArrowEvaluationTest = /** @class */ (() => {
    let ArrowEvaluationTest = class ArrowEvaluationTest {
        constructor() {
            this.evaluator = new StatefulEvaluatorImpl();
        }
        invoke(op, input) {
            return op.invoke(null, this.evaluator, input);
        }
        pure(assert) {
            assert.equal(this.invoke(increment, 1), 2);
        }
        zip(assert) {
            let zipped = ops.zip(increment, decrement);
            assert.deepEqual(this.invoke(zipped, [5, 5]), [6, 4]);
        }
        pipeline(assert) {
            let pipeline = ops.pipeline(increment, double);
            assert.deepEqual(this.invoke(pipeline, 5), 12);
        }
        merge(assert) {
            let concurrent = ops.merge(increment, double);
            assert.deepEqual(this.invoke(concurrent, 5), [6, 10]);
        }
        mergeAndThen(assert) {
            let pipeline = ops.keepAndThen(increment, double);
            assert.deepEqual(this.invoke(pipeline, 5), [6, 12]);
        }
    };
    __decorate([
        test
    ], ArrowEvaluationTest.prototype, "pure", null);
    __decorate([
        test
    ], ArrowEvaluationTest.prototype, "zip", null);
    __decorate([
        test
    ], ArrowEvaluationTest.prototype, "pipeline", null);
    __decorate([
        test
    ], ArrowEvaluationTest.prototype, "merge", null);
    __decorate([
        test
    ], ArrowEvaluationTest.prototype, "mergeAndThen", null);
    ArrowEvaluationTest = __decorate([
        module("Arrow Evaluation")
    ], ArrowEvaluationTest);
    return ArrowEvaluationTest;
})();
export { ArrowEvaluationTest };
class Tracer {
    constructor(input = []) {
        this.input = input;
        this.stack = [];
    }
    toJSON() {
        return "<State>";
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
        let record = [name, []];
        this.currentChildren.push(record);
        this.stack.push(record);
    }
    postInvoke(desc) {
        let last = this.stack.pop();
        last[0] = desc;
    }
}
function trace(rawName, input, output, children) {
    let parsedName = rawName.match(/^([^(]*)(?:\((.*)\))?$/);
    if (parsedName === null) {
        throw new Error(`SYNTAX ERROR, name must be label(Kind) or Kind`);
    }
    let leftName = parsedName[1];
    let inParen = parsedName[2];
    let name = inParen
        ? [inParen, leftName]
        : leftName;
    debugger;
    if (children) {
        return [formatOp(input, name, output), children];
    }
    else {
        return formatOp(input, name, output);
    }
}
function format(op) {
    return op.label ? `${op.label}(${op.type})` : op.type;
}
export function formatJSON(input) {
    return JSON.stringify(input)
        .replace(/\\?"/g, `'`)
        .replace(/'(<.*?>)'/, "$1");
}
function formatOp(input, op, out) {
    let formattedInput = formatJSON(input);
    let formattedOutput = formatJSON(out);
    let formattedOp;
    if (typeof op === "string") {
        formattedOp = op;
    }
    else if (Array.isArray(op)) {
        formattedOp = format({ type: op[0], label: op[1] });
    }
    else {
        formattedOp = format(op);
    }
    return `${formattedOp}: ${formattedInput} -> ${formattedOutput}`;
}
function source(value, label) {
    let out = `Source: ${formatJSON(value)}`;
    if (label) {
        out += ` (${label})`;
    }
    return out;
}
function input(value) {
    return `Input: ${formatJSON(value)}`;
}
function formatArrow(input, op, out) {
    return formatOp(input, op.operation, out);
}
class CollectingEvaluator extends StatefulEvaluatorImpl {
    parent(callback, state, input, op) {
        state.preInvoke(op.type);
        let clonedInput = JSON.parse(JSON.stringify(input));
        let out = callback();
        state.postInvoke(formatOp(clonedInput, op, out));
        return out;
    }
    Source(...args) {
        let out = super.Source(...args);
        if (args[2].label) {
            args[0].pushLeaf(`Source: ${formatJSON(out)} (${args[2].label})`);
        }
        else {
            args[0].pushLeaf(`Source: ${formatJSON(out)}`);
        }
        return out;
    }
    Input(tracer, input, _op) {
        tracer.pushLeaf(`Input: ${formatJSON(input)}`);
        return input;
    }
    Pure(state, ...args) {
        let input = JSON.parse(JSON.stringify(args[0]));
        let out = super.Pure(state, ...args);
        state.pushLeaf(formatOp(input, args[1], out));
        return out;
    }
    Zip(...args) {
        return this.parent(() => super.Zip(...args), ...args);
    }
    Pipeline(...args) {
        return this.parent(() => super.Pipeline(...args), ...args);
    }
    Merge(...args) {
        return this.parent(() => super.Merge(...args), ...args);
    }
    MapInput(...args) {
        return this.parent(() => super.MapInput(...args), ...args);
    }
    KeepAndThen(...args) {
        return this.parent(() => super.KeepAndThen(...args), ...args);
    }
    Reduce(...args) {
        return this.parent(() => super.Reduce(...args), ...args);
    }
    Repeat(...args) {
        return this.parent(() => super.Repeat(...args), ...args);
    }
}
let StatefulArrowEvaluationTest = /** @class */ (() => {
    let StatefulArrowEvaluationTest = class StatefulArrowEvaluationTest {
        constructor() {
            this.evaluator = new CollectingEvaluator();
            this.tracer = new Tracer();
        }
        assertInvoke(arrow, input, expectedOutput, ...expectedTraceRecords) {
            let actual = this.invoke(arrow, input);
            this.assert.deepEqual(actual, expectedOutput, `expected output to be ${expectedOutput}`);
            this.assert.deepEqual(`\n${printIndentedItems(this.tracer.records)}\n`, `\n${printIndentedItems(expectedTraceRecords)}\n`, "expected trace to match");
        }
        invoke(op, input) {
            return op.invoke(this.tracer, this.evaluator, input);
        }
        pure() {
            this.assertInvoke(increment, 1, 2, incrementTrace(1, 2));
        }
        zip() {
            this.assertInvoke(ops.zip(increment, decrement), [5, 5], [6, 4], [
                formatOp([5, 5], "Zip", [6, 4]),
                [incrementTrace(5, 6), decrementTrace(5, 4)],
            ]);
        }
        pipeline() {
            this.assertInvoke(ops.pipeline(increment, double), 5, 12, [
                formatOp(5, { type: "Pipeline" }, 12),
                [incrementTrace(5, 6), doubleTrace(6, 12)],
            ]);
        }
        merge() {
            this.assertInvoke(ops.merge(increment, double), 5, [6, 10], [
                formatOp(5, "Merge", [6, 10]),
                [incrementTrace(5, 6), doubleTrace(5, 10)],
            ]);
        }
        mergeAndThen() {
            this.assertInvoke(ops.keepAndThen(increment, double), 5, [6, 12], [
                formatOp(5, "KeepAndThen", [6, 12]),
                [incrementTrace(5, 6), doubleTrace(6, 12)],
            ]);
        }
        iterate() {
            this.assertInvoke(iterate(boringIncrement), [3, 6, 9], [4, 7, 10], trace("iteration(Pipeline)", [3, 6, 9], [4, 7, 10], [
                trace("input-pair(Merge)", [3, 6, 9], [[], [3, 6, 9]], [source([], "initialize"), input([3, 6, 9])]),
                trace("Reduce", [[], [3, 6, 9]], [4, 7, 10], [
                    iterateTrace([], 3, 4),
                    iterateTrace([4], 6, 7),
                    iterateTrace([4, 7], 9, 10),
                ]),
            ]));
        }
        repeat() {
            this.tracer.input = [1, 2, 3];
            let extract = ops.pure(([, state]) => {
                if (state.input.length === 0) {
                    return err("done");
                }
                else {
                    return ok(state.input.shift());
                }
            }, "shift");
            let fallible = ops.pure((v) => ok(v), "fallible");
            let increment = ops.mapResult(extract, ops.pipeline(boringIncrement, fallible, "ifOk"), ops.pure(err => err, "ifErr"));
            let repeat = ops.repeat(increment);
            this.assertInvoke(repeat, null, [2, 3, 4], trace("Repeat", null, [2, 3, 4], [
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
            ]));
        }
    };
    __decorate([
        test
    ], StatefulArrowEvaluationTest.prototype, "pure", null);
    __decorate([
        test
    ], StatefulArrowEvaluationTest.prototype, "zip", null);
    __decorate([
        test
    ], StatefulArrowEvaluationTest.prototype, "pipeline", null);
    __decorate([
        test
    ], StatefulArrowEvaluationTest.prototype, "merge", null);
    __decorate([
        test
    ], StatefulArrowEvaluationTest.prototype, "mergeAndThen", null);
    __decorate([
        test
    ], StatefulArrowEvaluationTest.prototype, "iterate", null);
    __decorate([
        test
    ], StatefulArrowEvaluationTest.prototype, "repeat", null);
    StatefulArrowEvaluationTest = __decorate([
        module("Stateful Arrow Evaluation")
    ], StatefulArrowEvaluationTest);
    return StatefulArrowEvaluationTest;
})();
export { StatefulArrowEvaluationTest };
function iterateTrace(accum, input, output) {
    return trace("iterate(Pipeline)", [accum, input], [...accum, output], [
        trace("Merge", [accum, input], [accum, output], [
            trace("first(Pure)", [accum, input], accum),
            trace("Pipeline", [accum, input], output, [
                trace("second(Pure)", [accum, input], input),
                trace("boring-increment(Pure)", input, output),
            ]),
        ]),
        trace("append(Pure)", [accum, output], [...accum, output]),
    ]);
}
