import { module, test, config } from "qunit";
import {
  combinators,
  Snippet,
  Result,
  Ok,
  ok,
  err,
  Err,
  multi,
  utils,
  Logger
} from "hbs-parser-next";
import { eqSnippet, unwrap, eqError, eqSnippets } from "./helpers";

const LOGGER = new Logger(config.logging || false);

module("[combinators] many");

test("zero times", assert => {
  let input = Snippet.input("abcabcabc", LOGGER);
  let [next, match] = unwrap(
    input.invoke(multi.many(combinators.tag("def")), input)
  );

  eqSnippet(next, input);
  eqSnippets(match, []);
});

test("one time", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(multi.many(combinators.tag("hello")), input)
  );

  eqSnippet(next, input.slice(5).rest);
  eqSnippets(match, [input.slice(5)]);
});

test("several times", assert => {
  let input = Snippet.input("abcabcabc", LOGGER);
  let [next, match] = unwrap(
    input.invoke(multi.many(combinators.tag("abc")), input)
  );

  eqSnippet(next, input.slice(9).rest);
  eqSnippets(match, [
    input.slice(3),
    input.slice(3).slice(3),
    input.slice(6).slice(3)
  ]);
});

module("[combinators] present(many) (at least one match)");

test("zero times", assert => {
  let input = Snippet.input("abcabcabc", LOGGER);
  let mismatch = input.invoke(
    utils.present(multi.many(combinators.tag("def"))),
    input
  );

  eqError(mismatch, err(input, "empty"));
});

test("one time", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(utils.present(multi.many(combinators.tag("hello"))), input)
  );

  eqSnippet(next, input.slice(5).rest);
  eqSnippets(match, [input.slice(5)]);
});

test("several times", assert => {
  let input = Snippet.input("abcabcabc", LOGGER);
  let [next, match] = unwrap(
    input.invoke(utils.present(multi.many(combinators.tag("abc"))), input)
  );

  eqSnippet(next, input.slice(9).rest);
  eqSnippets(match, [
    input.slice(3),
    input.slice(3).slice(3),
    input.slice(6).slice(3)
  ]);
});
