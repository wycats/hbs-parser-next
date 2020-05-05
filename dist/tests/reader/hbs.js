import * as qunit from "qunit";
import { config, module, test, todo } from "qunit";
import { read, serializeRoot, r, a, parse, span, } from "hbs-parser-next";
module("[READER] interpolation");
qunit.assert.tree = function (source, expectedRead, expectedAst) {
    let readStep = `read: ${source || "(empty)"}` || "(empty)";
    let parseStep = `parse: ${source || "(empty)"}` || "(empty)";
    let steps = [readStep];
    this.step(readStep);
    let { root: tree } = read(source, {
        logging: config.logging ? "Print" /* Print */ : "Off" /* None */,
    });
    let expectedTokens = Array.isArray(expectedRead)
        ? expectedRead
        : [expectedRead];
    let { root: expectedRoot, source: expectedSource } = r.root(...expectedTokens);
    let expectedString = serializeRoot(expectedRoot, expectedSource);
    if (tree.kind === "err") {
        this.ok(false, `expected tokens (${expectedString}), got error (${tree.reason})`);
    }
    else {
        let actualString = serializeRoot(tree.value, source);
        this.strictEqual(actualString, expectedString, "serialization of expected and actual match");
        this.deepEqual(tree.value, expectedRoot, "token trees match");
        if (expectedAst) {
            if (qunit.equiv(tree.value, expectedRoot)) {
                steps.push(parseStep);
                this.step(parseStep);
                let expected = Array.isArray(expectedAst)
                    ? expectedAst
                    : [expectedAst];
                let result = parse({
                    input: tree.value,
                    source,
                    logging: config.logging ? "Print" /* Print */ : "Off" /* None */,
                });
                let ast = a.root(...expected);
                this.pushResult({
                    result: result.kind === "ok",
                    actual: result,
                    expected: "ok",
                    message: `parse succeeded`,
                });
                if (result.kind === "ok") {
                    if (!qunit.equiv(result.value, ast.root)) {
                        console.log("expected", ast.root);
                        console.log("actual", result.value);
                    }
                    this.deepEqual(result.value, ast.root);
                }
            }
        }
    }
    this.verifySteps(steps, "verified steps");
};
qunit.assert.readError = function (source, expected) {
    let { root: tree } = read(source, {
        logging: config.logging ? "Print" /* Print */ : "Off" /* None */,
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
test("empty", assert => {
    assert.tree("", []);
});
test("{{id}} interpolating an id", assert => {
    assert.tree("{{identifier}}", [r.interpolate(r.id("identifier"))], [a.interpolate("identifier")]);
    // assert.tree("{{id}}", [r.interpolate(r.id("id"))], [a.interpolate("id")]);
    // assert.tree(
    //   "{{id-with-dash}}",
    //   [r.interpolate(r.id("id-with-dash"))],
    //   [a.interpolate("id-with-dash")]
    // );
});
test("{{this}} interpolating the keyword this", assert => {
    assert.tree("{{this}}", [r.interpolate(r.id("this"))], [a.interpolate("this")]);
});
test(`{{"string"}} interpolating a string`, assert => {
    assert.tree(`{{"hello"}}`, [r.interpolate(r.str(`"hello"`))], [a.interpolate(a.str(`"hello"`))]);
    assert.tree(`{{"hello world"}}`, [r.interpolate(r.str(`"hello world"`))], [a.interpolate(a.str(`"hello world"`))]);
    assert.tree(`{{"hello\\"world"}}`, [r.interpolate(r.str(`"hello\\"world"`))], [a.interpolate(a.str(`"hello\\"world"`))]);
    assert.tree(`{{'hello'}}`, r.interpolate(r.str(`'hello'`)), a.interpolate(a.str(`'hello'`)));
    assert.tree(`{{'hello world'}}`, r.interpolate(r.str(`'hello world'`)), a.interpolate(a.str(`'hello world'`)));
    assert.tree(`{{'hello\\'world'}}`, r.interpolate(r.str(`'hello\\'world'`)), a.interpolate(a.str(`'hello\\'world'`)));
});
test("{{123}} interpolating a number", assert => {
    assert.tree("{{10}}", r.interpolate(r.int("10")), a.interpolate(a.int("10")));
    assert.tree("{{-10}}", r.interpolate(r.int("-10")), a.interpolate(a.int("-10")));
    assert.tree("{{100.5123}}", r.interpolate(r.decimal("100.5123")), a.interpolate(a.decimal("100.5123")));
    assert.tree("{{-100.5123}}", r.interpolate(r.decimal("-100.5123")), a.interpolate(a.decimal("-100.5123")));
});
// test("{{(id)}} interpolating a sexp", assert => {
//   assert.tree(
//     "{{(id)}}",
//     r.interpolate(r.sexp([r.id("id")])),
//     a.interpolate(a.call("id"))
//   );
//   assert.tree(
//     "{{ (id) }}",
//     r.interpolate(r.sp, r.sexp([r.id("id")]), r.sp),
//     a.interpolate(" ", a.call("id"), " ")
//   );
//   assert.tree(
//     "{{( id )}}",
//     r.interpolate(r.sexp([r.sp, r.id("id"), r.sp])),
//     a.interpolate(a.call(" ", "id", " "))
//   );
//   assert.tree(
//     "{{ ( id ) }}",
//     r.interpolate(r.sp, r.sexp([r.sp, r.id("id"), r.sp]), r.sp),
//     a.interpolate(" ", a.call(" ", "id", " "), " ")
//   );
// });
test("{{@id}} interpolating an argument", assert => {
    assert.tree("{{@identifier}}", r.interpolate(r.arg("@identifier")), a.interpolate("@identifier"));
    assert.tree("{{@id}}", r.interpolate(r.arg("@id")), a.interpolate("@id"));
    assert.tree("{{@id-with-dash}}", r.interpolate(r.arg("@id-with-dash")), a.interpolate("@id-with-dash"));
});
test("whitespace around interpolation", assert => {
    assert.tree("{{ identifier }}", r.interpolate(r.sp, r.id("identifier"), r.sp), a.interpolate(" ", "identifier", " "));
    assert.tree("{{ id }}", r.interpolate(r.sp, r.id("id"), r.sp), a.interpolate(" ", "id", " "));
    assert.tree("{{ this }}", r.interpolate(r.sp, r.id("this"), r.sp), a.interpolate(" ", "this", " "));
    assert.tree("{{ id-with-dash }}", r.interpolate(r.sp, r.id("id-with-dash"), r.sp), a.interpolate(" ", "id-with-dash", " "));
});
test("paths", assert => {
    assert.tree("{{this.path}}", r.interpolate(r.id("this"), r.dot, r.id("path")), a.interpolate(a.path("this", "path")));
    assert.tree("{{id.with.path}}", r.interpolate(r.id("id"), r.dot, r.id("with"), r.dot, r.id("path")), a.interpolate(a.path("id", "with", "path")));
    assert.tree("{{ id.with.path }}", r.interpolate(r.sp, r.id("id"), r.dot, r.id("with"), r.dot, r.id("path"), r.sp), a.interpolate(" ", a.path("id", "with", "path"), " "));
    assert.tree("{{  id.with.path  }}", r.interpolate(r.ws("  "), r.id("id"), r.dot, r.id("with"), r.dot, r.id("path"), r.ws("  ")), a.interpolate("  ", a.path("id", "with", "path"), "  "));
    assert.tree("{{@id.with.path}}", r.interpolate(r.arg("@id"), r.dot, r.id("with"), r.dot, r.id("path")), a.interpolate(a.path("@id", "with", "path")));
    assert.tree("{{@dash-id.with-dashed.path}}", r.interpolate(r.arg("@dash-id"), r.dot, r.id("with-dashed"), r.dot, r.id("path")), a.interpolate(a.path("@dash-id", "with-dashed", "path")));
});
test("{{id.with.path some other.stuff}}", assert => {
    assert.tree("{{id.with.path some other.stuff}}", r.interpolate(r.id("id"), r.dot, r.id("with"), r.dot, r.id("path"), r.sp, r.id("some"), r.sp, r.id("other"), r.dot, r.id("stuff")), a.interpolate(a.path("id", "with.path"), [
        " ",
        a.ref("some"),
        " ",
        a.path("other", "stuff"),
    ]));
});
test("named arguments", assert => {
    assert.tree("{{id some named=args other=named}}", r.interpolate(r.id("id"), r.sp, r.id("some"), r.sp, r.id("named"), r.eq, r.id("args"), r.sp, r.id("other"), r.eq, r.id("named")), a.interpolate(a.ref("id"), [" ", a.ref("some")], {
        named: ["args", " "],
        other: "named",
    }));
    // assert.tree(
    //   "{{id.with.path some named=args other=named.args}}",
    //   r.interpolate(
    //     r.id("id"),
    //     r.dot,
    //     r.id("with"),
    //     r.dot,
    //     r.id("path"),
    //     r.sp,
    //     r.id("some"),
    //     r.sp,
    //     r.id("named"),
    //     r.eq,
    //     r.id("args"),
    //     r.sp,
    //     r.id("other"),
    //     r.eq,
    //     r.id("named"),
    //     r.dot,
    //     r.id("args")
    //   ),
    //   a.interpolate(a.path("id", "with.path"), [" ", "some"], {
    //     named: ["args", " "],
    //     other: a.path("named", "args"),
    //   })
    // );
    // assert.tree(
    //   "{{id.with.path some @arg named=args other=@named.args}}",
    //   r.interpolate(
    //     r.id("id"),
    //     r.dot,
    //     r.id("with"),
    //     r.dot,
    //     r.id("path"),
    //     r.sp,
    //     r.id("some"),
    //     r.sp,
    //     r.arg("@arg"),
    //     r.sp,
    //     r.id("named"),
    //     r.eq,
    //     r.id("args"),
    //     r.sp,
    //     r.id("other"),
    //     r.eq,
    //     r.arg("@named"),
    //     r.dot,
    //     r.id("args")
    //   ),
    //   a.interpolate(a.path("id", "with.path"), [" ", "some", " ", "@arg"], {
    //     named: ["args", " "],
    //     other: a.path("@named", "args"),
    //   })
    // );
});
// test("using all the features", assert => {
//   assert.tree(
//     "{{  (id.with.path some @arg named=args other=@named.args) @some.arg another.arg named=@arg other=named.arg yet-another=-12.5  }}",
//     r.interpolate(
//       r.ws("  "),
//       r.sexp([
//         r.id("id"),
//         r.dot,
//         r.id("with"),
//         r.dot,
//         r.id("path"),
//         r.sp,
//         r.id("some"),
//         r.sp,
//         r.arg("@arg"),
//         r.sp,
//         r.id("named"),
//         r.eq,
//         r.id("args"),
//         r.sp,
//         r.id("other"),
//         r.eq,
//         r.arg("@named"),
//         r.dot,
//         r.id("args"),
//       ]),
//       r.sp,
//       r.arg("@some"),
//       r.dot,
//       r.id("arg"),
//       r.sp,
//       r.id("another"),
//       r.dot,
//       r.id("arg"),
//       r.sp,
//       r.id("named"),
//       r.eq,
//       r.arg("@arg"),
//       r.sp,
//       r.id("other"),
//       r.eq,
//       r.id("named"),
//       r.dot,
//       r.id("arg"),
//       r.sp,
//       r.id("yet-another"),
//       r.eq,
//       r.decimal("-12.5"),
//       r.ws("  ")
//     ),
//     a.interpolate(
//       "  ",
//       a.call(a.path("id", "with.path"), [" ", "some", " ", "@arg"], {
//         named: ["args", " "],
//         other: a.path("@named", "args"),
//       }),
//       [" ", a.path("@some", "arg"), " ", a.path("another", "arg")],
//       {
//         named: ["@arg", " "],
//         other: [a.path("named", "arg"), " "],
//         "yet-another": [a.decimal("-12.5"), "  "],
//       }
//     )
//   );
// });
test("two interpolations next to each other", assert => {
    assert.tree("{{id.with.path some named=args other=named.args}}{{some.stuff}}", [
        r.interpolate(r.id("id"), r.dot, r.id("with"), r.dot, r.id("path"), r.sp, r.id("some"), r.sp, r.id("named"), r.eq, r.id("args"), r.sp, r.id("other"), r.eq, r.id("named"), r.dot, r.id("args")),
        r.interpolate(r.id("some"), r.dot, r.id("stuff")),
    ], [
        a.interpolate(a.path("id", "with.path"), [" ", "some"], {
            named: ["args", " "],
            other: a.path("named", "args"),
        }),
        a.interpolate(a.path("some", "stuff")),
    ]);
});
todo("blocks", assert => {
    assert.tree("{{#if @x}}{{/if}}", r.block("if", [r.sp, r.arg("@x")]), a.block(["if", [" ", "@x"]]));
    assert.tree("{{#if @x}}a b c {{#unless @y.z}}some stuff{{/unless}}{{/if}}", r.block("if", [r.sp, r.arg("@x")], r.text("a b c "), r.block("unless", [r.sp, r.arg("@y"), r.dot, r.id("z")], r.text("some stuff"))));
});
test("blocks with block params", assert => {
    assert.tree("{{#let @x as |x|}}insert {{x}}{{/let}}", r.block("let", [r.sp, r.arg("@x"), r.sp, r.as("x")], r.text("insert "), r.interpolate(r.id("x"))));
    assert.tree("{{#let @x as |x| }}insert {{x}}{{/let}}", r.block("let", [r.sp, r.arg("@x"), r.sp, r.as("x"), r.sp], r.text("insert "), r.interpolate(r.id("x"))));
    assert.tree("{{#let @x as |x|}}a b c {{#with @y.z as |z|}}some stuff{{/with}}{{/let}}", r.block("let", [r.sp, r.arg("@x"), r.sp, r.as("x")], r.text("a b c "), r.block("with", [r.sp, r.arg("@y"), r.dot, r.id("z"), r.sp, r.as("z")], r.text("some stuff"))));
});
test("mismatched blocks", assert => {
    assert.readError("{{#if @x}}{{/unless}}", {
        reason: "mismatch",
        span: span(13, 19),
    });
});
