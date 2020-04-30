import type { Arrow, Operation } from "./core-operations";

export type PrintedAST =
  | string
  | [string, PrintedAST[]]
  | [string, { [key: string]: PrintedAST }];

function isTuple(
  ast: PrintedAST
): ast is [string, PrintedAST[]] | [string, { [key: string]: PrintedAST }] {
  return Array.isArray(ast);
}

export function printAST(arrow: Arrow<unknown, unknown>): PrintedAST {
  let seen = new Set<Arrow<unknown, unknown>>();
  return iteration(arrow, seen);
}

export type IndentedItem = string | [string, IndentedItem[]];

export function toIndented(ast: PrintedAST, key?: string): IndentedItem {
  if (isTuple(ast)) {
    let [head, tail] = ast;

    if (Array.isArray(tail)) {
      return [head, tail.map(value => toIndented(value))];
    } else {
      let printedTail = Object.entries(tail).map(([key, value]) =>
        toIndented(value, key)
      );

      return [head, printedTail];
    }
  } else if (typeof ast === "string") {
    return keyed(ast, key);
  } else {
    assertNever(ast);
  }
}

function keyed(head: string, key?: string): string {
  if (key) {
    return `${key}: ${head}`;
  } else {
    return head;
  }
}

function iteration(
  arrow: Arrow<unknown, unknown>,
  seen: Set<Arrow<unknown, unknown>>
): PrintedAST {
  if (seen.has(arrow)) {
    return `<cycle:${labelled(arrow.operation)}>`;
    // throw new Error(`unexpected cycle`);
  } else {
    seen.add(arrow);
  }

  let op = arrow.operation;
  switch (op.type) {
    case "Source":
      return "source";
    case "Input":
      return "input";
    case "Pure":
      return labelled(op);
    case "AllOk":
      return [labelled(op), op.arrows.map(arrow => iteration(arrow, seen))];
    case "Zip":
    case "Pipeline":
    case "BothOk":
    case "FirstOk":
    case "Merge":
    case "KeepAndThen":
      return [
        labelled(op),
        [iteration(op.left, seen), iteration(op.right, seen)],
      ];
    case "MapResult":
      return [
        labelled(op),
        {
          arrow: iteration(op.left, seen),
          ifOk: iteration(op.ifOk, seen),
          ifErr: iteration(op.ifErr, seen),
        },
      ];
    case "MapInput":
      return [
        labelled(op),
        { pre: iteration(op.map, seen), arrow: iteration(op.arrow, seen) },
      ];
    case "Repeat":
      return [labelled(op), [iteration(op.callback, seen)]];
    case "State":
      return "state";
    case "Reduce":
      return [labelled(op), [iteration(op.callback, seen)]];
    default:
      assertNever(op);
  }
}

function labelled(op: Operation): string {
  if (op.label) {
    return `${op.type}(${op.label})`;
  } else {
    return op.type;
  }
}

function assertNever(_v: never): never {
  throw new Error(`unreachable`);
}
