import { module, test, config, assert, equiv, todo } from "qunit";
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

  assert.tree(
    "<@f.input></@f.input>",
    b.startTag([b.arg("@f"), b.dot, b.id("input")]),
    b.endTag([b.arg("@f"), b.dot, b.id("input")])
  );
});

test("Curly attributes", assert => {
  assert.tree(
    "<div disabled={{disabled}}></div>",
    b.startTag({
      name: "div",
      attrs: [
        b.sp,
        b.attr({
          name: "disabled",
          value: b.attrInterpolate(b.id("disabled"))
        })
      ]
    }),
    b.endTag("div")
  );
});

test("Curlies inside quoted attributes", assert => {
  assert.tree(
    `<div disabled="{{disabled}}"></div>`,
    b.startTag({
      name: "div",
      attrs: [
        b.sp,
        b.attr({
          name: "disabled",
          value: b.stringInterpolate([b.interpolate([b.id("disabled")])], `"`)
        })
      ]
    }),
    b.endTag("div")
  );

  assert.tree(
    `<a href="{{url}}.html"></a>`,
    b.startTag({
      name: "a",
      attrs: [
        b.sp,
        b.attr({
          name: "href",
          value: b.stringInterpolate(
            [b.interpolate([b.id("url")]), b.text(".html")],
            `"`
          )
        })
      ]
    }),
    b.endTag("a")
  );
});

test("Arguments", assert => {
  assert.tree(
    `<div @disabled="{{disabled}}"></div>`,
    b.startTag({
      name: "div",
      attrs: [
        b.sp,
        b.attr({
          name: b.argName("@disabled"),
          value: b.stringInterpolate([b.interpolate([b.id("disabled")])], `"`)
        })
      ]
    }),
    b.endTag("div")
  );

  assert.tree(
    `<a @href="{{url}}.html"></a>`,
    b.startTag({
      name: "a",
      attrs: [
        b.sp,
        b.attr({
          name: b.argName("@href"),
          value: b.stringInterpolate(
            [b.interpolate([b.id("url")]), b.text(".html")],
            `"`
          )
        })
      ]
    }),
    b.endTag("a")
  );
});

test("Modifiers", assert => {
  assert.tree(
    `<div disabled {{on click (fn this.handleClick @arg)}}></div>`,
    b.startTag({
      name: "div",
      attrs: [
        b.sp,
        b.attr("disabled"),
        b.sp,
        b.interpolate([
          b.id("on"),
          b.sp,
          b.id("click"),
          b.sp,
          b.sexp([
            b.id("fn"),
            b.sp,
            b.id("this"),
            b.dot,
            b.id("handleClick"),
            b.sp,
            b.arg("@arg")
          ])
        ])
      ]
    }),
    b.endTag("div")
  );
});
