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

test("A simple closing tag with trailing spaces", assert => {
  assert.tree("</div   \t\n>", b.endTag({ name: "div", trailing: "   \t\n" }));
});

test("A pair of hyphenated tags", assert => {
  assert.tree("<x-foo></x-foo>", b.startTag("x-foo"), b.endTag("x-foo"));
});

test("A tag with a single-quoted attribute", assert => {
  assert.tree(
    `<div id='foo'>`,
    b.startTag({
      name: "div",
      attrs: [b.sp, b.attr({ name: "id", value: `'foo'` })]
    })
  );
});

test("A tag with a double-quoted attribute", assert => {
  assert.tree(
    `<div id="foo">`,
    b.startTag({
      name: "div",
      attrs: [b.sp, b.attr({ name: "id", value: `"foo"` })]
    })
  );
});

test("A tag with a double-quoted empty", assert => {
  assert.tree(
    `<div id="">`,
    b.startTag({
      name: "div",
      attrs: [b.sp, b.attr({ name: "id", value: `""` })]
    })
  );
});

test("A tag with unquoted attribute", assert => {
  assert.tree(
    `<div id=foo>`,
    b.startTag({
      name: "div",
      attrs: [b.sp, b.attr({ name: "id", value: `foo` })]
    })
  );
});

test("A tag with valueless attributes", assert => {
  assert.tree(
    `<div foo bar>`,
    b.startTag({
      name: "div",
      attrs: [b.sp, b.attr("foo"), b.sp, b.attr("bar")]
    })
  );
});

test("A tag with multiple attributes", assert => {
  assert.tree(
    `<div id=foo class="bar baz" href='bat'>`,
    b.startTag({
      name: "div",
      attrs: [
        b.sp,
        b.attr({ name: "id", value: `foo` }),
        b.sp,
        b.attr({ name: "class", value: `"bar baz"` }),
        b.sp,
        b.attr({ name: "href", value: `'bat'` })
      ]
    })
  );
});
