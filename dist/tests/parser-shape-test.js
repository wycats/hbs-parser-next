// A simplistic parser built on top of the arrow library
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { baseErr as err, baseOk as ok, FORMAT, formatUnknown, ops, printAST, SNAPSHOT, StatefulEvaluatorImpl, toIndented, } from "hbs-parser-next";
import { module, printIndentedItems, test } from "./helpers";
import { STATE, step, steps, TraceBuilder, TracedEvaluator, Tracer, VOID, } from "./tracer";
const ERR = err("mismatch");
const takeInt = fromState(state => state.parser.tryMatch(/^\d+/), "int");
const takePlus = exact("+");
const takeWS = fromState(state => state.parser.match(/^\s+/), "ws?");
const maybeWS = fallible(takeWS);
const takeParens = recurse(() => ops.allOk([
    exact("(", "open-parens"),
    maybeWS,
    takeSum,
    maybeWS,
    exact(")", "close-parens"),
], "parens"));
const takeExpr = ops.firstOk(takeParens, takeInt, "expr");
const takeSum = ops.allOk([takeExpr, maybeWS, takePlus, maybeWS, takeExpr], "sum");
let MathParserTest = /** @class */ (() => {
    let MathParserTest = class MathParserTest {
        constructor() {
            this.evaluator = parserEvaluator();
        }
        plus() {
            console.log(printIndentedItems([toIndented(printAST(takeSum))]));
            this.assertInvoke(takeSum, VOID, "1+1", ok(["1", null, "+", null, "1"]), ...steps(int("1"), fallibleState("ws?", null), state("+", ok("+")), fallibleState("ws?", null), int("1"), ["sum(AllOk)", ok(["1", null, "+", null, "1"])]).traces);
            this.assertInvoke(takeSum, VOID, "1 + 1", ok(["1", " ", "+", " ", "1"]), ...steps(int("1"), fallibleState("ws?", " "), state("+", ok("+")), fallibleState("ws?", " "), int("1"), ["sum(AllOk)", ok(["1", " ", "+", " ", "1"])]).traces);
        }
        paren() {
            this.assertInvoke(takeSum, VOID, "(1+1)+1", ok([
                ["(", null, ["1", null, "+", null, "1"], null, ")"],
                null,
                "+",
                null,
                "1",
            ]), ...steps(state("open-parens", ok("(")), fallibleState("ws?", null), steps(steps(int("1"), fallibleState("ws?", null), state("+", ok("+")), fallibleState("ws?", null), int("1")), ["sum(AllOk)", ok(["1", null, "+", null, "1"])]), fallibleState("ws?", null), state("close-parens", ok(")")), [
                "parens(AllOk)",
                ok(["(", null, ["1", null, "+", null, "1"], null, ")"]),
            ], [
                "expr(FirstOk)",
                ok(["(", null, ["1", null, "+", null, "1"], null, ")"]),
            ], fallibleState("ws?", null), state("+", ok("+")), fallibleState("ws?", null), int("1"), [
                "sum(AllOk)",
                ok([
                    ["(", null, ["1", null, "+", null, "1"], null, ")"],
                    null,
                    "+",
                    null,
                    "1",
                ]),
            ]).traces);
            this.assertInvoke(takeSum, VOID, "( 1 + 1 ) + 1", ok([
                ["(", " ", ["1", " ", "+", " ", "1"], " ", ")"],
                " ",
                "+",
                " ",
                "1",
            ]), ...steps(state("open-parens", ok("(")), fallibleState("ws?", " "), steps(steps(int("1"), fallibleState("ws?", " "), state("+", ok("+")), fallibleState("ws?", " "), int("1")), ["sum(AllOk)", ok(["1", " ", "+", " ", "1"])]), fallibleState("ws?", " "), state("close-parens", ok(")")), ["parens(AllOk)", ok(["(", " ", ["1", " ", "+", " ", "1"], " ", ")"])], ["expr(FirstOk)", ok(["(", " ", ["1", " ", "+", " ", "1"], " ", ")"])], fallibleState("ws?", " "), state("+", ok("+")), fallibleState("ws?", " "), int("1"), [
                "sum(AllOk)",
                ok([
                    ["(", " ", ["1", " ", "+", " ", "1"], " ", ")"],
                    " ",
                    "+",
                    " ",
                    "1",
                ]),
            ]).traces);
        }
        assertInvoke(arrow, input, source, expectedOutput, ...expectedTraceRecords) {
            let step = `source: ${JSON.stringify(source)}`;
            this.assert.step(step);
            let state = new State(new Tracer(), new Parser(source));
            let actual = this.invoke(arrow, input, state);
            this.assert.deepEqual(actual, expectedOutput, `expected output to be ${formatUnknown(expectedOutput)}`);
            this.assert.deepEqual(`\n${printIndentedItems(state.tracer.records)}\n`, `\n${printIndentedItems(expectedTraceRecords)}\n`, "expected trace to match");
            this.assert.verifySteps([step]);
        }
        invoke(op, input, state) {
            return op.invoke(state, this.evaluator, input);
        }
    };
    __decorate([
        test
    ], MathParserTest.prototype, "plus", null);
    __decorate([
        test
    ], MathParserTest.prototype, "paren", null);
    MathParserTest = __decorate([
        module("math reader")
    ], MathParserTest);
    return MathParserTest;
})();
export { MathParserTest };
function int(value) {
    return steps(state("open-parens", ERR), ["parens(AllOk)", ERR], state("int", ok(value)), ["expr(FirstOk)", ok(value)]);
}
function fallibleState(label, value) {
    return steps(state(label, value), step("Pure", value, ok(value)), [
        `ok[${label}](Pipeline)`,
        ok(value),
    ]);
}
function state(...args) {
    let out = args.length === 2 ? args[1] : args[0];
    let label = args.length === 2 ? args[0] : undefined;
    let builder = new TraceBuilder()
        .addTraces([`State: ${formatUnknown(STATE)}`])
        .step("Pure", STATE, out)
        .into({ type: "Pipeline", label }, VOID, out);
    return { type: "multiple", builder };
}
class State {
    constructor(tracer, parser) {
        this.tracer = tracer;
        this.parser = parser;
    }
    [FORMAT]() {
        return { type: "raw", value: `<State>` };
    }
    [SNAPSHOT]() {
        return this;
    }
}
class Parser {
    constructor(source, pos = 0) {
        this.source = source;
        this.pos = pos;
    }
    tryMatch(pattern) {
        let result = this.match(pattern);
        if (result === null) {
            return err("mismatch");
        }
        else {
            return ok(result);
        }
    }
    match(pattern) {
        let next = this.source.slice(this.pos);
        if (typeof pattern === "string") {
            let sliced = next.slice(0, pattern.length);
            let match = sliced === pattern;
            if (match) {
                this.pos += sliced.length;
                return sliced;
            }
        }
        else {
            let match = next.match(pattern);
            if (match) {
                this.pos += match[0].length;
                return match[0];
            }
        }
        return null;
    }
}
function fromState(callback, label) {
    return ops.pipeline(ops.state(), ops.pure(callback), label);
}
function fallible(arrow) {
    return ops.pipeline(arrow, ops.pure(input => ok(input)), arrow.operation.label ? `ok[${arrow.operation.label}]` : undefined);
}
function recurse(callback) {
    return ops.Arrow.delay(callback);
}
function exact(s, label = s) {
    return fromState(state => state.parser.tryMatch(s), label);
}
function parserEvaluator() {
    let tracer = new TracedEvaluator();
    let evaluator = new StatefulEvaluatorImpl(tracer);
    tracer.setInner(evaluator);
    return tracer;
}
