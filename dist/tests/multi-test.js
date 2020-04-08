"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = require("hbs-parser-next");
const qunit_1 = require("qunit");
const helpers_1 = require("./helpers");
const LOGGER = new hbs_parser_next_1.Logger(qunit_1.config.logging || false);
qunit_1.module("[combinators] many");
qunit_1.test("zero times", () => {
    let input = hbs_parser_next_1.Snippet.input("abcabcabc", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("def"))));
    helpers_1.eqSnippet(next, input);
    helpers_1.eqSnippets(match, []);
});
qunit_1.test("one time", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("hello"))));
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippets(match, [input.slice(5)]);
});
qunit_1.test("several times", () => {
    let input = hbs_parser_next_1.Snippet.input("abcabcabc", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("abc"))));
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippets(match, [
        input.slice(3),
        input.slice(3).slice(3),
        input.slice(6).slice(3),
    ]);
});
qunit_1.module("[combinators] present(many) (at least one match)");
qunit_1.test("zero times", () => {
    let input = hbs_parser_next_1.Snippet.input("abcabcabc", LOGGER);
    let mismatch = input.invoke(hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("def"))));
    helpers_1.eqError(mismatch, hbs_parser_next_1.err(input, "empty"));
});
qunit_1.test("one time", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("hello")))));
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippets(match, [input.slice(5)]);
});
qunit_1.test("several times", () => {
    let input = hbs_parser_next_1.Snippet.input("abcabcabc", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("abc")))));
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippets(match, [
        input.slice(3),
        input.slice(3).slice(3),
        input.slice(6).slice(3),
    ]);
});
