import { r } from "hbs-parser-next";
import { module, test } from "qunit";
module("[READER] Hybrid");
test("content plus interpolation", assert => {
    assert.tree("hello {{world}} goodbye", [
        r.text("hello "),
        r.interpolate(r.id("world")),
        r.text(" goodbye"),
    ]);
});
test("A named arg invocation", assert => {
    assert.tree("<@foo></@foo>", [r.startTag(r.arg("@foo")), r.endTag("@foo")]);
});
test("A path invocation", assert => {
    assert.tree("<f.input></f.input>", [
        r.startTag([r.id("f"), r.dot, r.id("input")]),
        r.endTag([r.id("f"), r.dot, r.id("input")]),
    ]);
    assert.tree("<@f.input></@f.input>", [
        r.startTag([r.arg("@f"), r.dot, r.id("input")]),
        r.endTag([r.arg("@f"), r.dot, r.id("input")]),
    ]);
});
test("Curly attributes", assert => {
    assert.tree("<div disabled={{disabled}}></div>", [
        r.startTag({
            name: "div",
            attrs: [
                r.sp,
                r.attr({
                    name: "disabled",
                    value: r.attrInterpolate(r.id("disabled")),
                }),
            ],
        }),
        r.endTag("div"),
    ]);
});
test("Curlies inside quoted attributes", assert => {
    assert.tree(`<div disabled="{{disabled}}"></div>`, [
        r.startTag({
            name: "div",
            attrs: [
                r.sp,
                r.attr({
                    name: "disabled",
                    value: r.stringInterpolate([r.interpolate(r.id("disabled"))], `"`),
                }),
            ],
        }),
        r.endTag("div"),
    ]);
    assert.tree(`<a href="{{url}}.html"></a>`, [
        r.startTag({
            name: "a",
            attrs: [
                r.sp,
                r.attr({
                    name: "href",
                    value: r.stringInterpolate([r.interpolate(r.id("url")), r.text(".html")], `"`),
                }),
            ],
        }),
        r.endTag("a"),
    ]);
});
test("Arguments", assert => {
    assert.tree(`<div @disabled="{{disabled}}"></div>`, [
        r.startTag({
            name: "div",
            attrs: [
                r.sp,
                r.attr({
                    name: r.argName("@disabled"),
                    value: r.stringInterpolate([r.interpolate(r.id("disabled"))], `"`),
                }),
            ],
        }),
        r.endTag("div"),
    ]);
    assert.tree(`<a @href="{{url}}.html"></a>`, [
        r.startTag({
            name: "a",
            attrs: [
                r.sp,
                r.attr({
                    name: r.argName("@href"),
                    value: r.stringInterpolate([r.interpolate(r.id("url")), r.text(".html")], `"`),
                }),
            ],
        }),
        r.endTag("a"),
    ]);
});
test("Modifiers", assert => {
    assert.tree(`<div disabled {{on "click" (fn this.handleClick @arg)}}></div>`, [
        r.startTag({
            name: "div",
            attrs: [
                r.sp,
                r.attr("disabled"),
                r.sp,
                r.interpolate(r.id("on"), r.sp, r.str(`"click"`), r.sp, r.sexp([
                    r.id("fn"),
                    r.sp,
                    r.id("this"),
                    r.dot,
                    r.id("handleClick"),
                    r.sp,
                    r.arg("@arg"),
                ])),
            ],
        }),
        r.endTag("div"),
    ]);
});
