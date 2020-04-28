import type { Err, Result, Snippet } from "hbs-parser-next";
import { assert, module as qunitModule, test as qunitTest } from "qunit";
import type * as qunit from "qunit";

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

export type ListIndentedItem = [string, IndentedItem[]];
export interface InnerIndentedItem extends ListIndentedItem {}
export type IndentedItem = string | InnerIndentedItem;

const SIMPLE = true;
const SPACE = "   ";
const CROSS = SIMPLE ? SPACE : " ┣━";
const CORNER = SIMPLE ? SPACE : " ┗━";
const VERTICAL = SIMPLE ? SPACE : " ┃ ";

export function printIndentedItems(nodes: IndentedItem[]): string {
  let out = "";

  for (let node of nodes) {
    out += printNode(node, "");
  }

  return out;
}

function printNode(node: IndentedItem, indent: string): string {
  let out = "";

  if (Array.isArray(node)) {
    out += `${node[0]}\n`;

    let childrenCount = node[1].length;

    node[1].forEach((child, i) => {
      let isLast = i === childrenCount - 1;
      out += printChildNode(child, indent, isLast);
    });
  } else {
    out += `${node}\n`;
  }

  return out;
}

function printChildNode(node: IndentedItem, indent: string, isLast: boolean) {
  let out = indent;

  if (isLast) {
    out += CORNER;
    indent += SPACE;
  } else {
    out += CROSS;
    indent += VERTICAL;
  }

  out += printNode(node, indent);

  return out;
}

export function module(
  name: string
): <T extends { new (): object }>(target: T) => T {
  qunitModule(name);

  return c => c;
}

export function test(target: object, name: string) {
  qunitTest(name, assert => {
    let constructor = target.constructor as {
      new (): {
        assert: qunit.Assert;
      };
    };
    let instance = new constructor();
    instance.assert = assert;
    return (instance as any)[name](assert);
  });
}
