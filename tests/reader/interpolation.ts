import { module, test, config, assert, equiv } from "qunit";
import {
  combinators,
  Snippet,
  Result,
  Ok,
  ok,
  err,
  Err,
  multi,
  parse,
  read,
  tokens,
  span,
  b,
  serializeRoot,
  Logger
} from "hbs-parser-next";
import { eqSnippet, unwrap, eqError, eqSnippets } from "../helpers";

module("[READER] interpolation");

// Patch QUnit.assert with assert.tree
declare module "qunit" {
  interface Assert {
    tree(this: Assert, source: string, ...expected: b.CurriedToken[]): void;
  }

  interface Config {
    logging: true | undefined;
  }
}

assert.tree = function(source: string, ...expected: b.CurriedToken[]) {
  let step = source || "(empty)";
  this.step(step);
  let tree = read(source, { logging: config.logging });

  let { root: expectedRoot, source: expectedSource } = b.root(expected);

  let expectedString = serializeRoot(expectedRoot, expectedSource);

  if (tree.kind === "err") {
    this.ok(
      false,
      `expected tokens (${expectedString}), got error (${tree.reason})`
    );
  } else {
    let actualString = serializeRoot(tree.value, source);
    this.strictEqual(
      actualString,
      expectedString,
      "serialization of expected and actual match"
    );
    this.deepEqual(tree.value, expectedRoot, "token trees match");
  }
  this.verifySteps([step], "verified steps");
};

test("empty", assert => {
  assert.tree("" /* no body */);
});

test("{{id}} interpolating an id", assert => {
  assert.tree("{{identifier}}", b.interpolate([b.id("identifier")]));
  assert.tree("{{id}}", b.interpolate([b.id("id")]));
  assert.tree("{{id-with-dash}}", b.interpolate([b.id("id-with-dash")]));
});

test("{{(id)}} interpolating an expression", assert => {
  assert.tree("{{(id)}}", b.interpolate([b.sexp([b.id("id")])]));
  assert.tree("{{ (id) }}", b.interpolate([b.sp, b.sexp([b.id("id")]), b.sp]));
  assert.tree("{{( id )}}", b.interpolate([b.sexp([b.sp, b.id("id"), b.sp])]));
  assert.tree(
    "{{ ( id ) }}",
    b.interpolate([b.sp, b.sexp([b.sp, b.id("id"), b.sp]), b.sp])
  );
});

test("{{@id}} interpolating an argument", assert => {
  assert.tree("{{@identifier}}", b.interpolate([b.arg("@identifier")]));
  assert.tree("{{@id}}", b.interpolate([b.arg("@id")]));
  assert.tree("{{@id-with-dash}}", b.interpolate([b.arg("@id-with-dash")]));
});

test("whitespace around interpolation", assert => {
  assert.tree(
    "{{ identifier }}",
    b.interpolate([b.sp, b.id("identifier"), b.sp])
  );
  assert.tree("{{ id }}", b.interpolate([b.sp, b.id("id"), b.sp]));
  assert.tree(
    "{{ id-with-dash }}",
    b.interpolate([b.sp, b.id("id-with-dash"), b.sp])
  );
});

test("paths", assert => {
  assert.tree(
    "{{id.with.path}}",
    b.interpolate([b.id("id"), b.dot, b.id("with"), b.dot, b.id("path")])
  );

  assert.tree(
    "{{ id.with.path }}",
    b.interpolate([
      b.sp,
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp
    ])
  );

  assert.tree(
    "{{  id.with.path  }}",
    b.interpolate([
      b.ws("  "),
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.ws("  ")
    ])
  );

  assert.tree(
    "{{@id.with.path}}",
    b.interpolate([b.arg("@id"), b.dot, b.id("with"), b.dot, b.id("path")])
  );

  assert.tree(
    "{{@dash-id.with-dashed.path}}",
    b.interpolate([
      b.arg("@dash-id"),
      b.dot,
      b.id("with-dashed"),
      b.dot,
      b.id("path")
    ])
  );
});

test("{{id.with.path some other.stuff}}", assert => {
  assert.tree(
    "{{id.with.path some other.stuff}}",
    b.interpolate([
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp,
      b.id("some"),
      b.sp,
      b.id("other"),
      b.dot,
      b.id("stuff")
    ])
  );
});

test("named arguments", assert => {
  assert.tree(
    "{{id.with.path some named=args other=named.args}}",
    b.interpolate([
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp,
      b.id("some"),
      b.sp,
      b.id("named"),
      b.eq,
      b.id("args"),
      b.sp,
      b.id("other"),
      b.eq,
      b.id("named"),
      b.dot,
      b.id("args")
    ])
  );

  assert.tree(
    "{{id.with.path some @arg named=args other=@named.args}}",
    b.interpolate([
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp,
      b.id("some"),
      b.sp,
      b.arg("@arg"),
      b.sp,
      b.id("named"),
      b.eq,
      b.id("args"),
      b.sp,
      b.id("other"),
      b.eq,
      b.arg("@named"),
      b.dot,
      b.id("args")
    ])
  );
});

test("using all the features", assert => {
  assert.tree(
    "{{  (id.with.path some @arg named=args other=@named.args) @some.arg another.arg named=@arg other=named.arg  }}",
    b.interpolate([
      b.ws("  "),
      b.sexp([
        b.id("id"),
        b.dot,
        b.id("with"),
        b.dot,
        b.id("path"),
        b.sp,
        b.id("some"),
        b.sp,
        b.arg("@arg"),
        b.sp,
        b.id("named"),
        b.eq,
        b.id("args"),
        b.sp,
        b.id("other"),
        b.eq,
        b.arg("@named"),
        b.dot,
        b.id("args")
      ]),
      b.sp,
      b.arg("@some"),
      b.dot,
      b.id("arg"),
      b.sp,
      b.id("another"),
      b.dot,
      b.id("arg"),
      b.sp,
      b.id("named"),
      b.eq,
      b.arg("@arg"),
      b.sp,
      b.id("other"),
      b.eq,
      b.id("named"),
      b.dot,
      b.id("arg"),
      b.ws("  ")
    ])
  );
});

test("two interpolations next to each other", assert => {
  assert.tree(
    "{{id.with.path some named=args other=named.args}}{{some.stuff}}",
    b.interpolate([
      b.id("id"),
      b.dot,
      b.id("with"),
      b.dot,
      b.id("path"),
      b.sp,
      b.id("some"),
      b.sp,
      b.id("named"),
      b.eq,
      b.id("args"),
      b.sp,
      b.id("other"),
      b.eq,
      b.id("named"),
      b.dot,
      b.id("args")
    ]),
    b.interpolate([b.id("some"), b.dot, b.id("stuff")])
  );
});
