"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const qunit = __importStar(require("qunit"));
const qunit_1 = require("qunit");
const hbs_parser_next_1 = require("hbs-parser-next");
qunit_1.module("[READER] interpolation");
qunit.assert.tree = function (source, expectedRead, expectedAst) {
    let readStep = `read: ${source || "(empty)"}` || "(empty)";
    let parseStep = `parse: ${source || "(empty)"}` || "(empty)";
    let steps = [readStep];
    this.step(readStep);
    let { root: tree } = hbs_parser_next_1.read(source, {
        logging: qunit_1.config.logging ? "Print" /* Print */ : "Off" /* None */,
    });
    let expectedTokens = Array.isArray(expectedRead)
        ? expectedRead
        : [expectedRead];
    let { root: expectedRoot, source: expectedSource } = hbs_parser_next_1.r.root(...expectedTokens);
    let expectedString = hbs_parser_next_1.serializeRoot(expectedRoot, expectedSource);
    if (tree.kind === "err") {
        this.ok(false, `expected tokens (${expectedString}), got error (${tree.reason})`);
    }
    else {
        let actualString = hbs_parser_next_1.serializeRoot(tree.value, source);
        this.strictEqual(actualString, expectedString, "serialization of expected and actual match");
        this.deepEqual(tree.value, expectedRoot, "token trees match");
        if (expectedAst) {
            if (qunit.equiv(tree.value, expectedRoot)) {
                steps.push(parseStep);
                this.step(parseStep);
                let expected = Array.isArray(expectedAst)
                    ? expectedAst
                    : [expectedAst];
                let result = hbs_parser_next_1.parse(tree.value, source);
                let ast = hbs_parser_next_1.a.root(...expected);
                this.pushResult({
                    result: result.kind === "ok",
                    actual: result.kind,
                    expected: "ok",
                    message: `parse succeeded`,
                });
                if (result.kind === "ok") {
                    this.deepEqual(result.value, ast.root);
                }
            }
        }
    }
    this.verifySteps(steps, "verified steps");
};
qunit.assert.readError = function (source, expected) {
    let { root: tree } = hbs_parser_next_1.read(source, {
        logging: qunit_1.config.logging ? "Print" /* Print */ : "Off" /* None */,
    });
    this.pushResult({
        result: tree.kind === "err",
        actual: tree.kind,
        expected: "err",
        message: `expected an error`,
    });
    isType(tree);
    this.pushResult({
        result: tree.reason === expected.reason,
        actual: tree.reason,
        expected: expected.reason,
        message: `reason matches`,
    });
    this.pushResult({
        result: tree.snippet.span.start === expected.span.start &&
            tree.snippet.span.end === expected.span.end,
        actual: `${tree.snippet.span.start}..${tree.snippet.span.end}`,
        expected: `${expected.span.start}..${expected.span.end}`,
        message: `span matches`,
    });
};
function isType(_input) {
    _input;
    return;
}
qunit_1.test("empty", assert => {
    assert.tree("", []);
});
qunit_1.test("{{id}} interpolating an id", assert => {
    assert.tree("{{identifier}}", [hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("identifier"))], [hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.varRef("identifier"))]);
    assert.tree("{{id}}", [hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("id"))], [hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.varRef("id"))]);
    assert.tree("{{id-with-dash}}", [hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("id-with-dash"))], [hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.varRef("id-with-dash"))]);
});
qunit_1.test(`{{"string"}} interpolating a string`, assert => {
    assert.tree(`{{"hello"}}`, [hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.str(`"hello"`))], [hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.str(`"hello"`))]);
    assert.tree(`{{"hello world"}}`, [hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.str(`"hello world"`))], [hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.str(`"hello world"`))]);
    assert.tree(`{{"hello\\"world"}}`, [hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.str(`"hello\\"world"`))], [hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.str(`"hello\\"world"`))]);
    assert.tree(`{{'hello'}}`, hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.str(`'hello'`)), hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.str(`'hello'`)));
    assert.tree(`{{'hello world'}}`, hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.str(`'hello world'`)), hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.str(`'hello world'`)));
    assert.tree(`{{'hello\\'world'}}`, hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.str(`'hello\\'world'`)), hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.str(`'hello\\'world'`)));
});
qunit_1.test("{{id}} interpolating a number", assert => {
    assert.tree("{{10}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.int("10")), hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.int("10")));
    assert.tree("{{-10}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.int("-10")), hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.int("-10")));
    assert.tree("{{100.5123}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.decimal("100.5123")), hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.decimal("100.5123")));
    assert.tree("{{-100.5123}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.decimal("-100.5123")), hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.decimal("-100.5123")));
});
qunit_1.test("{{(id)}} interpolating an expression", assert => {
    assert.tree("{{(id)}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.sexp([hbs_parser_next_1.r.id("id")])), hbs_parser_next_1.a.interpolate(hbs_parser_next_1.a.call(hbs_parser_next_1.a.varRef("id"))));
    assert.tree("{{ (id) }}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.sp, hbs_parser_next_1.r.sexp([hbs_parser_next_1.r.id("id")]), hbs_parser_next_1.r.sp));
    assert.tree("{{( id )}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.sexp([hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.sp])));
    assert.tree("{{ ( id ) }}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.sp, hbs_parser_next_1.r.sexp([hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.sp]), hbs_parser_next_1.r.sp));
});
qunit_1.test("{{@id}} interpolating an argument", assert => {
    assert.tree("{{@identifier}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.arg("@identifier")));
    assert.tree("{{@id}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.arg("@id")));
    assert.tree("{{@id-with-dash}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.arg("@id-with-dash")));
});
qunit_1.test("whitespace around interpolation", assert => {
    assert.tree("{{ identifier }}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("identifier"), hbs_parser_next_1.r.sp));
    assert.tree("{{ id }}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.sp));
    assert.tree("{{ id-with-dash }}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("id-with-dash"), hbs_parser_next_1.r.sp));
});
qunit_1.test("paths", assert => {
    assert.tree("{{id.with.path}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path")));
    assert.tree("{{ id.with.path }}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path"), hbs_parser_next_1.r.sp));
    assert.tree("{{  id.with.path  }}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.ws("  "), hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path"), hbs_parser_next_1.r.ws("  ")));
    assert.tree("{{@id.with.path}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.arg("@id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path")));
    assert.tree("{{@dash-id.with-dashed.path}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.arg("@dash-id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with-dashed"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path")));
});
qunit_1.test("{{id.with.path some other.stuff}}", assert => {
    assert.tree("{{id.with.path some other.stuff}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("some"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("other"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("stuff")));
});
qunit_1.test("named arguments", assert => {
    assert.tree("{{id.with.path some named=args other=named.args}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("some"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("named"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.id("args"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("other"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.id("named"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("args")));
    assert.tree("{{id.with.path some @arg named=args other=@named.args}}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("some"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@arg"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("named"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.id("args"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("other"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.arg("@named"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("args")));
});
qunit_1.test("using all the features", assert => {
    assert.tree("{{  (id.with.path some @arg named=args other=@named.args) @some.arg another.arg named=@arg other=named.arg yet-another=-12.5  }}", hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.ws("  "), hbs_parser_next_1.r.sexp([
        hbs_parser_next_1.r.id("id"),
        hbs_parser_next_1.r.dot,
        hbs_parser_next_1.r.id("with"),
        hbs_parser_next_1.r.dot,
        hbs_parser_next_1.r.id("path"),
        hbs_parser_next_1.r.sp,
        hbs_parser_next_1.r.id("some"),
        hbs_parser_next_1.r.sp,
        hbs_parser_next_1.r.arg("@arg"),
        hbs_parser_next_1.r.sp,
        hbs_parser_next_1.r.id("named"),
        hbs_parser_next_1.r.eq,
        hbs_parser_next_1.r.id("args"),
        hbs_parser_next_1.r.sp,
        hbs_parser_next_1.r.id("other"),
        hbs_parser_next_1.r.eq,
        hbs_parser_next_1.r.arg("@named"),
        hbs_parser_next_1.r.dot,
        hbs_parser_next_1.r.id("args"),
    ]), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@some"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("arg"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("another"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("arg"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("named"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.arg("@arg"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("other"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.id("named"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("arg"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("yet-another"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.decimal("-12.5"), hbs_parser_next_1.r.ws("  ")));
});
qunit_1.test("two interpolations next to each other", assert => {
    assert.tree("{{id.with.path some named=args other=named.args}}{{some.stuff}}", [
        hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("id"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("with"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("path"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("some"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("named"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.id("args"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.id("other"), hbs_parser_next_1.r.eq, hbs_parser_next_1.r.id("named"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("args")),
        hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("some"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("stuff")),
    ]);
});
qunit_1.test("blocks", assert => {
    assert.tree("{{#if @x}}{{/if}}", hbs_parser_next_1.r.block("if", [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@x")]));
    assert.tree("{{#if @x}}a b c {{#unless @y.z}}some stuff{{/unless}}{{/if}}", hbs_parser_next_1.r.block("if", [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@x")], hbs_parser_next_1.r.text("a b c "), hbs_parser_next_1.r.block("unless", [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@y"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("z")], hbs_parser_next_1.r.text("some stuff"))));
});
qunit_1.test("blocks with block params", assert => {
    assert.tree("{{#let @x as |x|}}insert {{x}}{{/let}}", hbs_parser_next_1.r.block("let", [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@x"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.as("x")], hbs_parser_next_1.r.text("insert "), hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("x"))));
    assert.tree("{{#let @x as |x| }}insert {{x}}{{/let}}", hbs_parser_next_1.r.block("let", [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@x"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.as("x"), hbs_parser_next_1.r.sp], hbs_parser_next_1.r.text("insert "), hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("x"))));
    assert.tree("{{#let @x as |x|}}a b c {{#with @y.z as |z|}}some stuff{{/with}}{{/let}}", hbs_parser_next_1.r.block("let", [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@x"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.as("x")], hbs_parser_next_1.r.text("a b c "), hbs_parser_next_1.r.block("with", [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.arg("@y"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("z"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.as("z")], hbs_parser_next_1.r.text("some stuff"))));
});
qunit_1.test("mismatched blocks", assert => {
    assert.readError("{{#if @x}}{{/unless}}", {
        reason: "mismatch",
        span: { start: 13, end: 19 },
    });
});
