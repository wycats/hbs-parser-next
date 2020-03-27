import { module, test, config } from "qunit";
import { combinators, Snippet, Result, Ok } from "hbs-parser-next";

module("[combinators] tag");

test("match: one character tag", assert => {
  let input = Snippet.input("hello world");
  let next = combinators.tag("h")(input);

  assert.deepEqual(next, {
    kind: "ok",
    value: input.slice(1)
  });
});

test("match: multi-character tag", assert => {
  let input = Snippet.input("hello world");
  let next = combinators.tag("hello")(input);

  assert.deepEqual(next, {
    kind: "ok",
    value: input.slice(5)
  });
});

test("mismatch: multi-character tag", assert => {
  let input = Snippet.input("hello world");
  let next = combinators.tag("holla")(input);

  assert.deepEqual(next, {
    kind: "err",
    snippet: input,
    reason: "tag"
  });
});

test("mismatch: not at 0 offset", assert => {
  let input = Snippet.input("hello world");
  let next = unwrap(combinators.tag("hello ")(input));

  let mismatch = combinators.tag("woold")(next);

  assert.deepEqual(mismatch, {
    kind: "err",
    snippet: next,
    reason: "tag"
  });
});

function unwrap<T>(input: Result<T>): T {
  if (input.kind === "ok") {
    return input.value;
  } else {
    throw new Error(`Expected Ok result, got Err (reason=${input.reason})`);
  }
}
