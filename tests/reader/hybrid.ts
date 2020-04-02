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
import { eqSnippet, unwrap, eqError, eqSnippets } from "../helpers";

module("[READER] Hybrid");

test("content plus interpolation", assert => {
  assert.tree(
    "hello {{world}} goodbye",
    b.text("hello "),
    b.interpolate([b.id("world")]),
    b.text(" goodbye")
  );
});

test("A named arg invocation", assert => {
  assert.tree("<@foo></@foo>", b.startTag(b.arg("@foo")), b.endTag("@foo"));
});

test("A path invocation", assert => {
  assert.tree(
    "<f.input></f.input>",
    b.startTag([b.id("f"), b.dot, b.id("input")]),
    b.endTag([b.id("f"), b.dot, b.id("input")])
  );
});
