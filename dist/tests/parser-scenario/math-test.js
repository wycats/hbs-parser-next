// A simplistic parser built on top of the arrow library
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { baseOk as ok, formatUnknown, baseErr as err, } from "hbs-parser-next";
import { module, printIndentedItems, test } from "../helpers";
import { steps, Tracer, VOID, Context, trySteps, step, } from "../tracer";
import { Parser, takeSum, state, State, parserEvaluator, SpanBuilder, leafTok, computed, okState, errState, okToken, nested, NestedToken, chars, NULL, build, tok, } from "./tokens";
let MathParserTest = /** @class */ (() => {
    let MathParserTest = class MathParserTest {
        constructor() {
            this.#builder = new SpanBuilder();
        }
        #builder;
        "plus without whitespace"() {
            let expected = build(nested([
                tok("1", "Number" /* Number */),
                NULL,
                tok("+", "Plus" /* Plus */),
                NULL,
                tok("1", "Number" /* Number */),
            ], tokens => new NestedToken("Sum" /* Sum */, tokens)));
            let { children: [one1, , plus, , one2], } = expected;
            this.assertInvoke(takeSum, VOID, "1+1", ok(expected), ...steps(int(one1), okState("ws?", null), okToken("+", plus), okState("ws?", null), int(one2), ["sum(AllOk)", ok(expected.children)], step("Pure", expected.children, ok(expected)), ["sum(MapResult)", ok(expected)]).traces);
        }
        "plus with whitespace"() {
            let expected = build(nested([
                computed("1", leafTok("Number" /* Number */)),
                chars(" "),
                computed("+", leafTok("Plus" /* Plus */)),
                chars(" "),
                computed("1", leafTok("Number" /* Number */)),
            ], tokens => new NestedToken("Sum" /* Sum */, tokens)));
            let { children: [one1, ws1, plus, ws2, one2], } = expected;
            this.assertInvoke(takeSum, VOID, "1 + 1", ok(expected), ...steps(trySteps(["parens(AllOk)", errState("open-paren", "mismatch")], ["expr", okToken("int", one1)]), okState("ws?", ws1), okToken("+", plus), okState("ws?", ws2), trySteps(["parens(AllOk)", errState("open-paren", "mismatch")], ["expr", okToken("int", one2)]), ["sum(AllOk)", ok(expected)]).traces);
        }
        "paren (without whitespace)"() {
            let expected = build(nested([
                nested([
                    computed("(", leafTok("OpenParen" /* OpenParen */)),
                    NULL,
                    nested([
                        computed("1", leafTok("Number" /* Number */)),
                        NULL,
                        computed("+", leafTok("Plus" /* Plus */)),
                        NULL,
                        computed("1", leafTok("Number" /* Number */)),
                    ], tokens => new NestedToken("Sum" /* Sum */, tokens)),
                    NULL,
                    computed(")", leafTok("CloseParen" /* CloseParen */)),
                ], tokens => new NestedToken("Parens" /* Parens */, tokens)),
                NULL,
                computed("+", leafTok("Plus" /* Plus */)),
                NULL,
                computed("1", leafTok("Number" /* Number */)),
            ], tokens => new NestedToken("Sum" /* Sum */, tokens)));
            this.assertInvoke(takeSum, VOID, "(1+1)+1", ok(expected), ...steps(state("open-parens", ok("(")), okState("ws?", null), steps(steps(okState("int", "1"), okState("ws?", null), state("+", ok("+")), okState("ws?", null), okState("int", "1")), ["sum(AllOk)", ok(["1", null, "+", null, "1"])]), okState("ws?", null), state("close-parens", ok(")")), [
                "parens(AllOk)",
                ok(["(", null, ["1", null, "+", null, "1"], null, ")"]),
            ], [
                "expr(FirstOk)",
                ok(["(", null, ["1", null, "+", null, "1"], null, ")"]),
            ], okState("ws?", null), state("+", ok("+")), okState("ws?", null), okState("int", "1"), [
                "sum(AllOk)",
                ok([
                    ["(", null, ["1", null, "+", null, "1"], null, ")"],
                    null,
                    "+",
                    null,
                    "1",
                ]),
            ]).traces);
        }
        assertInvoke(arrow, input, source, expectedOutput, ...expectedTraceRecords) {
            let step = `source: ${JSON.stringify(source)}`;
            this.assert.step(step);
            let state = new State(new Tracer(), new Parser(source));
            let actual = this.invoke(arrow, input, state, source);
            let formattedActual = formatUnknown(actual, source, 2);
            let formattedExpected = formatUnknown(expectedOutput, source, 2);
            this.assert.equal(formattedActual, formattedExpected, `expected output to be ${formatUnknown(expectedOutput, source)}`);
            let context = new Context(source);
            let expected = expectedTraceRecords.map(trace => context.format(trace));
            this.assert.deepEqual(`\n${printIndentedItems(state.tracer.records)}\n`, `\n${printIndentedItems(expected)}\n`, "expected trace to match");
            this.assert.verifySteps([step]);
        }
        invoke(op, input, state, source) {
            return op.invoke(state, parserEvaluator(source), input);
        }
    };
    __decorate([
        test
    ], MathParserTest.prototype, "plus without whitespace", null);
    __decorate([
        test
    ], MathParserTest.prototype, "plus with whitespace", null);
    __decorate([
        test
    ], MathParserTest.prototype, "paren (without whitespace)", null);
    MathParserTest = __decorate([
        module("math reader")
    ], MathParserTest);
    return MathParserTest;
})();
export { MathParserTest };
function int(token) {
    return steps(noParens(), okToken("int", token), ["expr(FirstOk)", ok(token)]);
}
function noParens() {
    return steps(errState("open-paren", "mismatch"), ["parens(AllOk)", err("mismatch")], step("Id"), ["parens(MapResult)", err("mismatch")]);
}
