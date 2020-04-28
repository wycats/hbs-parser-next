import { r, a } from "hbs-parser-next";
import { module, test } from "qunit";
module("[READER] HTML");
test("simple content", assert => {
    assert.tree("hello", [r.text("hello")], [a.text("hello")]);
});
test("a simple tag", assert => {
    assert.tree("<div>", r.startTag("div"));
});
test("a simple tag with closing tag", assert => {
    assert.tree("<div></div>", [r.startTag("div"), r.endTag("div")]);
    assert.tree("<div>hello</div>", [
        r.startTag("div"),
        r.text("hello"),
        r.endTag("div"),
    ]);
    assert.tree("<div>hello\nworld</div>", [
        r.startTag("div"),
        r.text("hello\nworld"),
        r.endTag("div"),
    ]);
});
test("A simple tag with trailing spaces", assert => {
    assert.tree("<div   \t\n>", r.startTag({ name: "div", attrs: [r.ws("   \t\n")] }));
});
test("A simple closing tag", assert => {
    assert.tree("</div>", r.endTag("div"));
});
test("A simple closing tag with trailing spaces", assert => {
    assert.tree("</div   \t\n>", r.endTag({ name: "div", trailing: "   \t\n" }));
});
test("A pair of hyphenated tags", assert => {
    assert.tree("<x-foo></x-foo>", [r.startTag("x-foo"), r.endTag("x-foo")]);
});
test("A tag with a single-quoted attribute", assert => {
    assert.tree(`<div id='foo'>`, r.startTag({
        name: "div",
        attrs: [r.sp, r.attr({ name: "id", value: `'foo'` })],
    }));
});
test("A tag with a double-quoted attribute", assert => {
    assert.tree(`<div id="foo">`, r.startTag({
        name: "div",
        attrs: [r.sp, r.attr({ name: "id", value: `"foo"` })],
    }));
});
test("A tag with a double-quoted empty", assert => {
    assert.tree(`<div id="">`, r.startTag({
        name: "div",
        attrs: [
            r.sp,
            r.attr({ name: "id", value: r.stringInterpolate([], `"`) }),
        ],
    }));
});
test("A tag with unquoted attribute", assert => {
    assert.tree(`<div id=foo>`, r.startTag({
        name: "div",
        attrs: [r.sp, r.attr({ name: "id", value: `foo` })],
    }));
});
test("A tag with valueless attributes", assert => {
    assert.tree(`<div foo bar>`, r.startTag({
        name: "div",
        attrs: [r.sp, r.attr("foo"), r.sp, r.attr("bar")],
    }));
});
test("A tag with multiple attributes", assert => {
    assert.tree(`<div id=foo class="bar baz" href='bat'>`, r.startTag({
        name: "div",
        attrs: [
            r.sp,
            r.attr({ name: "id", value: `foo` }),
            r.sp,
            r.attr({ name: "class", value: `"bar baz"` }),
            r.sp,
            r.attr({ name: "href", value: `'bat'` }),
        ],
    }));
});
test("A self-closing tag", assert => {
    assert.tree(`<img />`, r.startTag({
        name: "img",
        attrs: [r.sp],
        selfClosing: true,
    }));
});
test("A self-closing tag with valueless attributes", assert => {
    assert.tree(`<input disabled />`, r.startTag({
        name: "input",
        attrs: [r.sp, r.attr("disabled"), r.sp],
        selfClosing: true,
    }));
    assert.tree(`<input disabled/>`, r.startTag({
        name: "input",
        attrs: [r.sp, r.attr("disabled")],
        selfClosing: true,
    }));
    assert.tree(`<input data-foo=bar/>`, r.startTag({
        name: "input",
        attrs: [r.sp, r.attr({ name: "data-foo", value: "bar/" })],
    }));
});
test("A comment", assert => {
    assert.tree("<!-- hello -->", r.comment(" hello "));
    assert.tree("<!---->", r.comment(""));
    assert.tree("<!-- A perfectly legal - appears -->", r.comment(" A perfectly legal - appears "));
});
