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
  serializeRoot
} from "hbs-parser-next";
import { eqSnippet, unwrap, eqError, eqSnippets } from "./helpers";
import { CurriedToken } from "src/read/token-builder";

module("[READER] simple interpolation");

assert.tree = function(source: string, ...expected: CurriedToken[]) {
  this.step(source);
  let tree = read(source);

  let expectedString = serializeRoot(b.root(expected), source);

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
    this.deepEqual(tree.value, b.root(expected), "token trees match");
  }
  this.verifySteps([source], "verified steps");
};

test("{{id}} interpolating an id", assert => {
  assert.tree("{{identifier}}", b.interpolate([b.id("identifier")]));
  assert.tree("{{id}}", b.interpolate([b.id("id")]));
  assert.tree("{{id-with-dash}}", b.interpolate([b.id("id-with-dash")]));
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
