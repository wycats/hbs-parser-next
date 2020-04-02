import { module, test, config, assert } from "qunit";
import {
  combinators,
  Snippet,
  Result,
  Ok,
  ok,
  err,
  Err,
  Logger
} from "hbs-parser-next";
import { eqSnippet, unwrap, eqError } from "./helpers";

const LOGGER = new Logger(config.logging || false);

module("[combinators] tag");

test("match: one character tag", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, fragment] = unwrap(input.invoke(combinators.tag("h"), input));

  eqSnippet(next, input.slice(1).rest);
  eqSnippet(fragment, input.slice(1));
});

test("match: multi-character tag", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, fragment] = unwrap(input.invoke(combinators.tag("hello"), input));

  eqSnippet(next, input.slice(5).rest);
  eqSnippet(fragment, input.slice(5));
});

test("mismatch: multi-character tag", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let next = input.invoke(combinators.tag("holla"), input);

  eqError(next, err(input, "tag"));
});

test("mismatch: not at 0 offset", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next] = unwrap(input.invoke(combinators.tag("hello "), input));

  let mismatch = next.invoke(combinators.tag("woold"), next);

  eqError(mismatch, err(next, "tag"));
});

module("[combinators] takeUntil");

test("match: skipping a chunk of characters", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(combinators.takeUntil("world"), input)
  );

  eqSnippet(next, input.slice(6).rest);
  eqSnippet(match, input.slice(6));
});

test("match: skipping zero characters", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(combinators.takeUntil("hello"), input)
  );

  eqSnippet(next, input.rest);
  eqSnippet(match, input.rest);
});

test("match: skipping until the last character", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(input.invoke(combinators.takeUntil("d"), input));

  eqSnippet(next, input.slice(10).rest);
  eqSnippet(match, input.slice(10));
});

test("match: skipping until the last characters", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(combinators.takeUntil("world"), input)
  );

  eqSnippet(next, input.slice(6).rest);
  eqSnippet(match, input.slice(6));
});

test("mismatch: no match before the end", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(combinators.takeUntil("cruel"), input)
  );

  eqSnippet(next, input.slice(11).rest);
  eqSnippet(match, input.slice(11));
});

module("[combinators] takeWhile");

test("match: at non-zero offset", assert => {
  let input = Snippet.input("hello!!!!", LOGGER);
  let [next1] = unwrap(input.invoke(combinators.tag("hello"), input));
  let [next, match] = unwrap(next1.invoke(combinators.takeWhile("!"), next1));

  eqSnippet(next, input.slice(9).rest);
  eqSnippet(match, input.slice(5).slice(4));
});

test("match: skipping zero characters", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(combinators.takeWhile("hello"), input)
  );

  eqSnippet(next, input.slice(5).rest);
  eqSnippet(match, input.slice(5));
});

test("match: skipping until the last characters", assert => {
  let input = Snippet.input("hello world", LOGGER);
  let [next, match] = unwrap(
    input.invoke(combinators.takeWhile("hello world"), input)
  );

  eqSnippet(next, input.slice(11).rest);
  eqSnippet(match, input.slice(11));
});

test("mismatch: no match before the end", assert => {
  let input = Snippet.input("hellohello", LOGGER);
  let [next, match] = unwrap(
    input.invoke(combinators.takeWhile("hellohello"), input)
  );

  eqSnippet(next, input.slice(10).rest);
  eqSnippet(match, input.slice(10));
});
