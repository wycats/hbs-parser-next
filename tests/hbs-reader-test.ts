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

module("[READER] simple interpolation");

test("{{identifier}}", assert => {
  let tree = read("{{identifier}}");

  if (tree.kind === "err") {
    assert.ok(false, `expected tokens, got error (${tree.reason})`);
  } else {
    assert.deepEqual(tree.value, b.root([b.interpolate([b.id("identifier")])]));
  }
});

test("{{id}}", assert => {
  let tree = read("{{id}}");

  if (tree.kind === "err") {
    assert.ok(false, `expected tokens, got error (${tree.reason})`);
  } else {
    assert.deepEqual(tree.value, b.root([b.interpolate([b.id("id")])]));
  }
});
