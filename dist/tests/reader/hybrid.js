"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = require("hbs-parser-next");
const qunit_1 = require("qunit");
qunit_1.module("[READER] Hybrid");
qunit_1.test("content plus interpolation", assert => {
    assert.tree("hello {{world}} goodbye", [
        hbs_parser_next_1.r.text("hello "),
        hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("world")),
        hbs_parser_next_1.r.text(" goodbye"),
    ]);
});
qunit_1.test("A named arg invocation", assert => {
    assert.tree("<@foo></@foo>", [hbs_parser_next_1.r.startTag(hbs_parser_next_1.r.arg("@foo")), hbs_parser_next_1.r.endTag("@foo")]);
});
qunit_1.test("A path invocation", assert => {
    assert.tree("<f.input></f.input>", [
        hbs_parser_next_1.r.startTag([hbs_parser_next_1.r.id("f"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("input")]),
        hbs_parser_next_1.r.endTag([hbs_parser_next_1.r.id("f"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("input")]),
    ]);
    assert.tree("<@f.input></@f.input>", [
        hbs_parser_next_1.r.startTag([hbs_parser_next_1.r.arg("@f"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("input")]),
        hbs_parser_next_1.r.endTag([hbs_parser_next_1.r.arg("@f"), hbs_parser_next_1.r.dot, hbs_parser_next_1.r.id("input")]),
    ]);
});
qunit_1.test("Curly attributes", assert => {
    assert.tree("<div disabled={{disabled}}></div>", [
        hbs_parser_next_1.r.startTag({
            name: "div",
            attrs: [
                hbs_parser_next_1.r.sp,
                hbs_parser_next_1.r.attr({
                    name: "disabled",
                    value: hbs_parser_next_1.r.attrInterpolate(hbs_parser_next_1.r.id("disabled")),
                }),
            ],
        }),
        hbs_parser_next_1.r.endTag("div"),
    ]);
});
qunit_1.test("Curlies inside quoted attributes", assert => {
    assert.tree(`<div disabled="{{disabled}}"></div>`, [
        hbs_parser_next_1.r.startTag({
            name: "div",
            attrs: [
                hbs_parser_next_1.r.sp,
                hbs_parser_next_1.r.attr({
                    name: "disabled",
                    value: hbs_parser_next_1.r.stringInterpolate([hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("disabled"))], `"`),
                }),
            ],
        }),
        hbs_parser_next_1.r.endTag("div"),
    ]);
    assert.tree(`<a href="{{url}}.html"></a>`, [
        hbs_parser_next_1.r.startTag({
            name: "a",
            attrs: [
                hbs_parser_next_1.r.sp,
                hbs_parser_next_1.r.attr({
                    name: "href",
                    value: hbs_parser_next_1.r.stringInterpolate([hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("url")), hbs_parser_next_1.r.text(".html")], `"`),
                }),
            ],
        }),
        hbs_parser_next_1.r.endTag("a"),
    ]);
});
qunit_1.test("Arguments", assert => {
    assert.tree(`<div @disabled="{{disabled}}"></div>`, [
        hbs_parser_next_1.r.startTag({
            name: "div",
            attrs: [
                hbs_parser_next_1.r.sp,
                hbs_parser_next_1.r.attr({
                    name: hbs_parser_next_1.r.argName("@disabled"),
                    value: hbs_parser_next_1.r.stringInterpolate([hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("disabled"))], `"`),
                }),
            ],
        }),
        hbs_parser_next_1.r.endTag("div"),
    ]);
    assert.tree(`<a @href="{{url}}.html"></a>`, [
        hbs_parser_next_1.r.startTag({
            name: "a",
            attrs: [
                hbs_parser_next_1.r.sp,
                hbs_parser_next_1.r.attr({
                    name: hbs_parser_next_1.r.argName("@href"),
                    value: hbs_parser_next_1.r.stringInterpolate([hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("url")), hbs_parser_next_1.r.text(".html")], `"`),
                }),
            ],
        }),
        hbs_parser_next_1.r.endTag("a"),
    ]);
});
qunit_1.test("Modifiers", assert => {
    assert.tree(`<div disabled {{on "click" (fn this.handleClick @arg)}}></div>`, [
        hbs_parser_next_1.r.startTag({
            name: "div",
            attrs: [
                hbs_parser_next_1.r.sp,
                hbs_parser_next_1.r.attr("disabled"),
                hbs_parser_next_1.r.sp,
                hbs_parser_next_1.r.interpolate(hbs_parser_next_1.r.id("on"), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.str(`"click"`), hbs_parser_next_1.r.sp, hbs_parser_next_1.r.sexp([
                    hbs_parser_next_1.r.id("fn"),
                    hbs_parser_next_1.r.sp,
                    hbs_parser_next_1.r.id("this"),
                    hbs_parser_next_1.r.dot,
                    hbs_parser_next_1.r.id("handleClick"),
                    hbs_parser_next_1.r.sp,
                    hbs_parser_next_1.r.arg("@arg"),
                ])),
            ],
        }),
        hbs_parser_next_1.r.endTag("div"),
    ]);
});
