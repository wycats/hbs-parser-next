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
qunit.assert.tree = function (source, ...expected) {
    let step = source || "(empty)";
    this.step(step);
    let tree = hbs_parser_next_1.read(source, { logging: qunit_1.config.logging });
    let { root: expectedRoot, source: expectedSource } = hbs_parser_next_1.b.root(expected);
    let expectedString = hbs_parser_next_1.serializeRoot(expectedRoot, expectedSource);
    if (tree.kind === "err") {
        this.ok(false, `expected tokens (${expectedString}), got error (${tree.reason})`);
    }
    else {
        let actualString = hbs_parser_next_1.serializeRoot(tree.value, source);
        this.strictEqual(actualString, expectedString, "serialization of expected and actual match");
        this.deepEqual(tree.value, expectedRoot, "token trees match");
    }
    this.verifySteps([step], "verified steps");
};
qunit_1.test("empty", assert => {
    assert.tree("" /* no body */);
});
qunit_1.test("{{id}} interpolating an id", assert => {
    assert.tree("{{identifier}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("identifier")]));
    assert.tree("{{id}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id")]));
    assert.tree("{{id-with-dash}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id-with-dash")]));
});
qunit_1.test("{{id}} interpolating a string", assert => {
    assert.tree(`{{"hello"}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`"hello"`)]));
    assert.tree(`{{"hello world"}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`"hello world"`)]));
    assert.tree(`{{"hello\\"world"}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`"hello\\"world"`)]));
    assert.tree(`{{'hello'}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`'hello'`)]));
    assert.tree(`{{'hello world'}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`'hello world'`)]));
    assert.tree(`{{'hello\\'world'}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`'hello\\'world'`)]));
});
qunit_1.test("{{id}} interpolating a number", assert => {
    assert.tree("{{10}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.int("10")]));
    assert.tree("{{-10}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.int("-10")]));
    assert.tree("{{100.5123}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.decimal("100.5123")]));
    assert.tree("{{-100.5123}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.decimal("-100.5123")]));
});
qunit_1.test("{{(id)}} interpolating an expression", assert => {
    assert.tree("{{(id)}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.id("id")])]));
    assert.tree("{{ (id) }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.id("id")]), hbs_parser_next_1.b.sp]));
    assert.tree("{{( id )}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp])]));
    assert.tree("{{ ( id ) }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp]), hbs_parser_next_1.b.sp]));
});
qunit_1.test("{{@id}} interpolating an argument", assert => {
    assert.tree("{{@identifier}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@identifier")]));
    assert.tree("{{@id}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id")]));
    assert.tree("{{@id-with-dash}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id-with-dash")]));
});
qunit_1.test("whitespace around interpolation", assert => {
    assert.tree("{{ identifier }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("identifier"), hbs_parser_next_1.b.sp]));
    assert.tree("{{ id }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp]));
    assert.tree("{{ id-with-dash }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id-with-dash"), hbs_parser_next_1.b.sp]));
});
qunit_1.test("paths", assert => {
    assert.tree("{{id.with.path}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("with"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("path")]));
    assert.tree("{{ id.with.path }}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
    ]));
    assert.tree("{{  id.with.path  }}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.ws("  "),
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.ws("  "),
    ]));
    assert.tree("{{@id.with.path}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("with"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("path")]));
    assert.tree("{{@dash-id.with-dashed.path}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.arg("@dash-id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with-dashed"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
    ]));
});
qunit_1.test("{{id.with.path some other.stuff}}", assert => {
    assert.tree("{{id.with.path some other.stuff}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("some"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("stuff"),
    ]));
});
qunit_1.test("named arguments", assert => {
    assert.tree("{{id.with.path some named=args other=named.args}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("some"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("args"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("args"),
    ]));
    assert.tree("{{id.with.path some @arg named=args other=@named.args}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("some"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.arg("@arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("args"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.arg("@named"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("args"),
    ]));
});
qunit_1.test("using all the features", assert => {
    assert.tree("{{  (id.with.path some @arg named=args other=@named.args) @some.arg another.arg named=@arg other=named.arg yet-another=-12.5  }}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.ws("  "),
        hbs_parser_next_1.b.sexp([
            hbs_parser_next_1.b.id("id"),
            hbs_parser_next_1.b.dot,
            hbs_parser_next_1.b.id("with"),
            hbs_parser_next_1.b.dot,
            hbs_parser_next_1.b.id("path"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.id("some"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.arg("@arg"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.id("named"),
            hbs_parser_next_1.b.eq,
            hbs_parser_next_1.b.id("args"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.id("other"),
            hbs_parser_next_1.b.eq,
            hbs_parser_next_1.b.arg("@named"),
            hbs_parser_next_1.b.dot,
            hbs_parser_next_1.b.id("args"),
        ]),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.arg("@some"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("another"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.arg("@arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("yet-another"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.decimal("-12.5"),
        hbs_parser_next_1.b.ws("  "),
    ]));
});
qunit_1.test("two interpolations next to each other", assert => {
    assert.tree("{{id.with.path some named=args other=named.args}}{{some.stuff}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("some"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("args"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("args"),
    ]), hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("some"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("stuff")]));
});
qunit_1.test("blocks", assert => {
    assert.tree("{{#if @x}}{{/if}}", hbs_parser_next_1.b.block({
        open: {
            name: "if",
            head: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.arg("@x")],
        },
    }));
});
