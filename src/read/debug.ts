import { combinatorDebugType } from "./logger";
import type { CombinatorDebugType, CombinatorType } from "./combinators/types";
import { combinatorName } from "./utils";

export type RowResult = "success" | "error" | "start";

export type RowStyle = {
  result: RowResult;
  kind: CombinatorDebugType;
};

export type TableRow = {
  style: RowStyle;
  data: [string, string, string, string];
};

let table: TableRow[] = [];

export function row(
  {
    result,
    arrow,
    combinator,
    context,
  }: {
    result: RowResult;
    arrow: string;
    combinator: CombinatorType;
    context?: string;
  },
  a: any,
  b: string
) {
  let name = combinatorName(combinator);

  if (context) {
    name = `${context}: ${name}`;
  }

  table.push({
    style: { result, kind: combinatorDebugType(combinator) },
    data: [arrow, name, a, b],
  });
}

export function snippetStyle(style: RowStyle) {
  switch (style.result) {
    case "start":
      return "color: #333";
    case "success":
      return "color: green";
    case "error":
      return "color: red";
  }
}

export function armStyle(style: RowStyle) {
  switch (style.result) {
    case "start":
      switch (style.kind) {
        case "transparent":
        case "arm":
          return "color: #bbb";
        case "normal":
          return "color: #333";
      }
    case "success":
      return "color: green";
    case "error":
      return "color: red";
  }
}

export function printDebug() {
  for (let {
    style,
    data: [arrow, name, a, b],
  } of table) {
    let first = `${arrow} %c${name}%c`.padEnd(60);
    // tslint:disable-next-line:no-console
    console.log(
      `${first} | %c${b}%c |`,
      armStyle(style),
      "color: #333",
      snippetStyle(style),
      "color: #333",
      a
    );
  }
  table = [];
}

let TAB = 0;

export function indent() {
  TAB += 1;
}

export function outdent() {
  TAB -= 1;
}

export function indentWS() {
  return " ".repeat(TAB);
}
