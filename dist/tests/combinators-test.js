"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = require("hbs-parser-next");
const qunit_1 = require("qunit");
const helpers_1 = require("./helpers");
const LOGGER = new hbs_parser_next_1.Logger(qunit_1.config.logging || false);
qunit_1.module("[combinators] tag");
qunit_1.test("match: one character tag", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, fragment] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.tag("h")));
    helpers_1.eqSnippet(next, input.slice(1).rest);
    helpers_1.eqSnippet(fragment, input.slice(1));
});
qunit_1.test("match: multi-character tag", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, fragment] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.tag("hello")));
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippet(fragment, input.slice(5));
});
qunit_1.test("mismatch: multi-character tag", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let next = input.invoke(hbs_parser_next_1.combinators.tag("holla"));
    helpers_1.eqError(next, hbs_parser_next_1.err(input, "tag"));
});
qunit_1.test("mismatch: not at 0 offset", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.tag("hello ")));
    let mismatch = next.invoke(hbs_parser_next_1.combinators.tag("woold"));
    helpers_1.eqError(mismatch, hbs_parser_next_1.err(next, "tag"));
});
qunit_1.module("[combinators] takeUntil");
qunit_1.test("match: skipping a chunk of characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("world")));
    helpers_1.eqSnippet(next, input.slice(6).rest);
    helpers_1.eqSnippet(match, input.slice(6));
});
qunit_1.test("match: skipping zero characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("hello")));
    helpers_1.eqSnippet(next, input.rest);
    helpers_1.eqSnippet(match, input.rest);
});
qunit_1.test("match: skipping until the last character", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("d")));
    helpers_1.eqSnippet(next, input.slice(10).rest);
    helpers_1.eqSnippet(match, input.slice(10));
});
qunit_1.test("match: skipping until the last characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("world")));
    helpers_1.eqSnippet(next, input.slice(6).rest);
    helpers_1.eqSnippet(match, input.slice(6));
});
qunit_1.test("mismatch: no match before the end", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("cruel")));
    helpers_1.eqSnippet(next, input.slice(11).rest);
    helpers_1.eqSnippet(match, input.slice(11));
});
qunit_1.module("[combinators] takeWhile");
qunit_1.test("match: at non-zero offset", () => {
    let input = hbs_parser_next_1.Snippet.input("hello!!!!", LOGGER);
    let [next1] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.tag("hello")));
    let [next, match] = helpers_1.unwrap(next1.invoke(hbs_parser_next_1.combinators.takeWhile("!")));
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippet(match, input.slice(5).slice(4));
});
qunit_1.test("match: skipping zero characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeWhile("hello")));
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippet(match, input.slice(5));
});
qunit_1.test("match: skipping until the last characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeWhile("hello world")));
    helpers_1.eqSnippet(next, input.slice(11).rest);
    helpers_1.eqSnippet(match, input.slice(11));
});
qunit_1.test("mismatch: no match before the end", () => {
    let input = hbs_parser_next_1.Snippet.input("hellohello", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeWhile("hellohello")));
    helpers_1.eqSnippet(next, input.slice(10).rest);
    helpers_1.eqSnippet(match, input.slice(10));
});
