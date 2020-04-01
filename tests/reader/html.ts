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
import { CurriedToken } from "src/read/token-builder";

module("[READER] HTML");

test("simple content", assert => {
  assert.tree("hello", b.text("hello"));
});

test("a simple tag", assert => {
  assert.tree("<div>", b.startTag("div"));
});

test("A simple tag with trailing spaces", assert => {
  assert.tree(
    "<div   \t\n>",
    b.startTag({ name: "div", attrs: [b.ws("   \t\n")] })
  );
});

test("A simple closing tag", assert => {
  assert.tree("</div>", b.endTag("div"));
});
