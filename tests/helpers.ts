import type { Err, Result, Snippet } from "hbs-parser-next";
import { assert } from "qunit";

export function unwrap<T>(input: Result<T>): T {
  if (input.kind === "ok") {
    return input.value;
  } else {
    throw new Error(`Expected Ok result, got Err (reason=${input.reason})`);
  }
}

export function eqResult(left: Result<Snippet>, right: Result<Snippet>) {
  assert.strictEqual(left.kind, right.kind);

  if (left.kind === "ok" && right.kind === "ok") {
    assert.ok(left.value.eq(right.value));
  } else if (left.kind === "err" && right.kind === "err") {
    assert.ok(
      left.snippet.eq(right.snippet),
      `left=${left.snippet.fmt()} right=${right.snippet.fmt()}`
    );
    assert.strictEqual(left.reason, right.reason);
  }
}

export function eqSnippet(left: Snippet, right: Snippet) {
  assert.ok(left.eq(right), `left=${left.fmt()} right=${right.fmt()}`);
}

export function eqSnippets(left: Snippet[], right: Snippet[]) {
  if (left.length !== right.length) {
    assert.ok(
      false,
      `left=${JSON.stringify(left.map(s => s.fmt()))}\nright=${JSON.stringify(
        right.map(s => s.fmt())
      )}`
    );
  } else {
    for (let i = 0; i < left.length; i++) {
      let leftItem = left[i];
      let rightItem = right[i];

      eqSnippet(leftItem, rightItem);
    }
  }
}

export function eqError(left: Result<unknown>, right: Err) {
  if (left.kind === "err") {
    assert.ok(
      left.snippet.eq(right.snippet),
      `left=${left.snippet.fmt()} right=${right.snippet.fmt()}`
    );
    assert.strictEqual(left.reason, right.reason);
  } else {
    assert.strictEqual(left.kind, "err", `expected an error`);
  }
}
