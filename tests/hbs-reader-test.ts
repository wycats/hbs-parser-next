import { module, test, config, assert } from "qunit";
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
  ParentTokenType,
  LeafTokenType,
  tokens,
  span,
  b
} from "hbs-parser-next";
import { eqSnippet, unwrap, eqError, eqSnippets } from "./helpers";
import { CurriedToken } from "src/read/token-builder";

module("[READER] simple interpolation");

test("{{id}} interpolating an id", assert => {
  assertTree("{{identifier}}", b.interpolate([b.id("identifier")]));
  assertTree("{{id}}", b.interpolate([b.id("id")]));
  assertTree("{{id-with-dash}}", b.interpolate([b.id("id-with-dash")]));
});

test("{{id.with.path}}", assert => {
  assertTree(
    "{{id.with.path}}",
    b.interpolate([b.id("id"), b.dot, b.id("with"), b.dot, b.id("path")])
  );
});

function assertTree(source: string, ...expected: CurriedToken[]) {
  let tree = read(source);

  if (tree.kind === "err") {
    assert.ok(false, `expected tokens, got error (${tree.reason})`);
  } else {
    assert.deepEqual(tree.value, b.root(expected));
  }
}
