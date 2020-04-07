import {
  combinators,
  err,
  Logger,
  multi,
  Snippet,
  utils,
} from "hbs-parser-next";
import { config, module, test } from "qunit";
import { eqError, eqSnippet, eqSnippets, unwrap } from "./helpers";

const LOGGER = new Logger(config.logging || false);

module("[combinators] many");

test("zero times", () => {
  let input = Snippet.input("abcabcabc", LOGGER);
  let [next, match] = unwrap(input.invoke(multi.many(combinators.tag("def"))));

  eqSnippet(next, input);
  eqSnippets(match, []);
});

test("one time", () => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(multi.many(combinators.tag("hello")))
  );

  eqSnippet(next, input.slice(5).rest);
  eqSnippets(match, [input.slice(5)]);
});

test("several times", () => {
  let input = Snippet.input("abcabcabc", LOGGER);
  let [next, match] = unwrap(input.invoke(multi.many(combinators.tag("abc"))));

  eqSnippet(next, input.slice(9).rest);
  eqSnippets(match, [
    input.slice(3),
    input.slice(3).slice(3),
    input.slice(6).slice(3),
  ]);
});

module("[combinators] present(many) (at least one match)");

test("zero times", () => {
  let input = Snippet.input("abcabcabc", LOGGER);
  let mismatch = input.invoke(
    utils.present(multi.many(combinators.tag("def")))
  );

  eqError(mismatch, err(input, "empty"));
});

test("one time", () => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(utils.present(multi.many(combinators.tag("hello"))))
  );

  eqSnippet(next, input.slice(5).rest);
  eqSnippets(match, [input.slice(5)]);
});

test("several times", () => {
  let input = Snippet.input("abcabcabc", LOGGER);
  let [next, match] = unwrap(
    input.invoke(utils.present(multi.many(combinators.tag("abc"))))
  );

  eqSnippet(next, input.slice(9).rest);
  eqSnippets(match, [
    input.slice(3),
    input.slice(3).slice(3),
    input.slice(6).slice(3),
  ]);
});
