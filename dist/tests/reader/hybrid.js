"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = require("hbs-parser-next");
const qunit_1 = require("qunit");
qunit_1.module("[READER] Hybrid");
qunit_1.test("content plus interpolation", assert => {
    assert.tree("hello {{world}} goodbye", hbs_parser_next_1.b.text("hello "), hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("world")]), hbs_parser_next_1.b.text(" goodbye"));
});
qunit_1.test("A named arg invocation", assert => {
    assert.tree("<@foo></@foo>", hbs_parser_next_1.b.startTag(hbs_parser_next_1.b.arg("@foo")), hbs_parser_next_1.b.endTag("@foo"));
});
qunit_1.test("A path invocation", assert => {
    assert.tree("<f.input></f.input>", hbs_parser_next_1.b.startTag([hbs_parser_next_1.b.id("f"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("input")]), hbs_parser_next_1.b.endTag([hbs_parser_next_1.b.id("f"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("input")]));
    assert.tree("<@f.input></@f.input>", hbs_parser_next_1.b.startTag([hbs_parser_next_1.b.arg("@f"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("input")]), hbs_parser_next_1.b.endTag([hbs_parser_next_1.b.arg("@f"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("input")]));
});
qunit_1.test("Curly attributes", assert => {
    assert.tree("<div disabled={{disabled}}></div>", hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: "disabled",
                value: hbs_parser_next_1.b.attrInterpolate(hbs_parser_next_1.b.id("disabled")),
            }),
        ],
    }), hbs_parser_next_1.b.endTag("div"));
});
qunit_1.test("Curlies inside quoted attributes", assert => {
    assert.tree(`<div disabled="{{disabled}}"></div>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: "disabled",
                value: hbs_parser_next_1.b.stringInterpolate([hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("disabled")])], `"`),
            }),
        ],
    }), hbs_parser_next_1.b.endTag("div"));
    assert.tree(`<a href="{{url}}.html"></a>`, hbs_parser_next_1.b.startTag({
        name: "a",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: "href",
                value: hbs_parser_next_1.b.stringInterpolate([hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("url")]), hbs_parser_next_1.b.text(".html")], `"`),
            }),
        ],
    }), hbs_parser_next_1.b.endTag("a"));
});
qunit_1.test("Arguments", assert => {
    assert.tree(`<div @disabled="{{disabled}}"></div>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: hbs_parser_next_1.b.argName("@disabled"),
                value: hbs_parser_next_1.b.stringInterpolate([hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("disabled")])], `"`),
            }),
        ],
    }), hbs_parser_next_1.b.endTag("div"));
    assert.tree(`<a @href="{{url}}.html"></a>`, hbs_parser_next_1.b.startTag({
        name: "a",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: hbs_parser_next_1.b.argName("@href"),
                value: hbs_parser_next_1.b.stringInterpolate([hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("url")]), hbs_parser_next_1.b.text(".html")], `"`),
            }),
        ],
    }), hbs_parser_next_1.b.endTag("a"));
});
qunit_1.test("Modifiers", assert => {
    assert.tree(`<div disabled {{on "click" (fn this.handleClick @arg)}}></div>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr("disabled"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.interpolate([
                hbs_parser_next_1.b.id("on"),
                hbs_parser_next_1.b.sp,
                hbs_parser_next_1.b.str(`"click"`),
                hbs_parser_next_1.b.sp,
                hbs_parser_next_1.b.sexp([
                    hbs_parser_next_1.b.id("fn"),
                    hbs_parser_next_1.b.sp,
                    hbs_parser_next_1.b.id("this"),
                    hbs_parser_next_1.b.dot,
                    hbs_parser_next_1.b.id("handleClick"),
                    hbs_parser_next_1.b.sp,
                    hbs_parser_next_1.b.arg("@arg"),
                ]),
            ]),
        ],
    }), hbs_parser_next_1.b.endTag("div"));
});
