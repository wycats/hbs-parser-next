"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = require("hbs-parser-next");
const qunit_1 = require("qunit");
qunit_1.module("[READER] HTML");
qunit_1.test("simple content", assert => {
    assert.tree("hello", [hbs_parser_next_1.r.text("hello")], [hbs_parser_next_1.a.text("hello")]);
});
qunit_1.test("a simple tag", assert => {
    assert.tree("<div>", hbs_parser_next_1.r.startTag("div"));
});
qunit_1.test("a simple tag with closing tag", assert => {
    assert.tree("<div></div>", [hbs_parser_next_1.r.startTag("div"), hbs_parser_next_1.r.endTag("div")]);
    assert.tree("<div>hello</div>", [
        hbs_parser_next_1.r.startTag("div"),
        hbs_parser_next_1.r.text("hello"),
        hbs_parser_next_1.r.endTag("div"),
    ]);
    assert.tree("<div>hello\nworld</div>", [
        hbs_parser_next_1.r.startTag("div"),
        hbs_parser_next_1.r.text("hello\nworld"),
        hbs_parser_next_1.r.endTag("div"),
    ]);
});
qunit_1.test("A simple tag with trailing spaces", assert => {
    assert.tree("<div   \t\n>", hbs_parser_next_1.r.startTag({ name: "div", attrs: [hbs_parser_next_1.r.ws("   \t\n")] }));
});
qunit_1.test("A simple closing tag", assert => {
    assert.tree("</div>", hbs_parser_next_1.r.endTag("div"));
});
qunit_1.test("A simple closing tag with trailing spaces", assert => {
    assert.tree("</div   \t\n>", hbs_parser_next_1.r.endTag({ name: "div", trailing: "   \t\n" }));
});
qunit_1.test("A pair of hyphenated tags", assert => {
    assert.tree("<x-foo></x-foo>", [hbs_parser_next_1.r.startTag("x-foo"), hbs_parser_next_1.r.endTag("x-foo")]);
});
qunit_1.test("A tag with a single-quoted attribute", assert => {
    assert.tree(`<div id='foo'>`, hbs_parser_next_1.r.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.attr({ name: "id", value: `'foo'` })],
    }));
});
qunit_1.test("A tag with a double-quoted attribute", assert => {
    assert.tree(`<div id="foo">`, hbs_parser_next_1.r.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.attr({ name: "id", value: `"foo"` })],
    }));
});
qunit_1.test("A tag with a double-quoted empty", assert => {
    assert.tree(`<div id="">`, hbs_parser_next_1.r.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.r.sp,
            hbs_parser_next_1.r.attr({ name: "id", value: hbs_parser_next_1.r.stringInterpolate([], `"`) }),
        ],
    }));
});
qunit_1.test("A tag with unquoted attribute", assert => {
    assert.tree(`<div id=foo>`, hbs_parser_next_1.r.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.attr({ name: "id", value: `foo` })],
    }));
});
qunit_1.test("A tag with valueless attributes", assert => {
    assert.tree(`<div foo bar>`, hbs_parser_next_1.r.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.attr("foo"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.attr("bar")],
    }));
});
qunit_1.test("A tag with multiple attributes", assert => {
    assert.tree(`<div id=foo class="bar baz" href='bat'>`, hbs_parser_next_1.r.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.r.sp,
            hbs_parser_next_1.r.attr({ name: "id", value: `foo` }),
            hbs_parser_next_1.r.sp,
            hbs_parser_next_1.r.attr({ name: "class", value: `"bar baz"` }),
            hbs_parser_next_1.r.sp,
            hbs_parser_next_1.r.attr({ name: "href", value: `'bat'` }),
        ],
    }));
});
qunit_1.test("A self-closing tag", assert => {
    assert.tree(`<img />`, hbs_parser_next_1.r.startTag({
        name: "img",
        attrs: [hbs_parser_next_1.r.sp],
        selfClosing: true,
    }));
});
qunit_1.test("A self-closing tag with valueless attributes", assert => {
    assert.tree(`<input disabled />`, hbs_parser_next_1.r.startTag({
        name: "input",
        attrs: [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.attr("disabled"), hbs_parser_next_1.r.sp],
        selfClosing: true,
    }));
    assert.tree(`<input disabled/>`, hbs_parser_next_1.r.startTag({
        name: "input",
        attrs: [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.attr("disabled")],
        selfClosing: true,
    }));
    assert.tree(`<input data-foo=bar/>`, hbs_parser_next_1.r.startTag({
        name: "input",
        attrs: [hbs_parser_next_1.r.sp, hbs_parser_next_1.r.attr({ name: "data-foo", value: "bar/" })],
    }));
});
qunit_1.test("A comment", assert => {
    assert.tree("<!-- hello -->", hbs_parser_next_1.r.comment(" hello "));
    assert.tree("<!---->", hbs_parser_next_1.r.comment(""));
    assert.tree("<!-- A perfectly legal - appears -->", hbs_parser_next_1.r.comment(" A perfectly legal - appears "));
});
