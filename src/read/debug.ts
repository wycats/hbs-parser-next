import type { CombinatorDebugType, CombinatorType } from "./combinators/types";
import { Debuggable, formatDebuggable } from "./logger";
import type { Result, Snippet } from "../snippet";

export type RowResult = "success" | "error" | "start";

export type RowStyle = {
  result: RowResult;
  kind: CombinatorDebugType;
};

export type TableRow = {
  style: RowStyle;
  data: [string, string, string, string];
};

interface StateRow {
  combinator: CombinatorType;
  preSnippet: Snippet;
  optional: boolean;
  output?: Result<[Snippet, Debuggable]>;
  children: StateRow[];
}

let childStack: StateRow[] = [];
let root: StateRow | undefined;

export function preInvoke({
  combinator,
  snippet,
  optional,
}: {
  combinator: CombinatorType;
  snippet: Snippet;
  optional: boolean;
}) {
  let child: StateRow = {
    combinator,
    preSnippet: snippet,
    optional,
    children: [],
  };

  if (childStack.length !== 0) {
    let last = childStack[childStack.length - 1];
    last.children.push(child);
  }
  childStack.push(child);
}

export function postInvoke(result: Result<[Snippet, Debuggable]>) {
  let last = childStack[childStack.length - 1];
  last.output = result;
  let row = childStack.pop();

  if (childStack.length === 0) {
    root = row;
  }
}

// export function row(
//   {
//     result,
//     arrow,
//     combinator,
//     context,
//   }: {
//     result: RowResult;
//     arrow: string;
//     combinator: CombinatorType;
//     context?: string;
//   },
//   a: any,
//   b: string
// ) {
//   let name = combinatorName(combinator);

//   if (context) {
//     name = `${context}: ${name}`;
//   }

//   table.push({
//     style: { result, kind: combinatorDebugType(combinator) },
//     data: [arrow, name, a, b],
//   });
// }

// export function snippetStyle(style: RowStyle) {
//   switch (style.result) {
//     case "start":
//       return "color: #333";
//     case "success":
//       return "color: green";
//     case "error":
//       return "color: red";
//   }
// }

// export function armStyle(style: RowStyle) {
//   switch (style.result) {
//     case "start":
//       switch (style.kind) {
//         case "transparent":
//         case "arm":
//           return "color: #bbb";
//         case "normal":
//           return "color: #333";
//       }
//     case "success":
//       return "color: green";
//     case "error":
//       return "color: red";
//   }
// }

export function outputStyle(
  { output, optional }: StateRow,
  weight: string
): string {
  if (output === undefined) {
    throw new Error(`assert: unexpected undefined output (should be a result)`);
  }

  switch (output.kind) {
    case "ok":
      return `${SUCCESS};${weight}`;
    case "err": {
      if (optional) {
        return OPTIONAL;
      } else {
        return `${ERROR};${weight}`;
      }
    }
  }
}

export function outputString(
  output: Result<[Snippet, Debuggable]> | undefined
): string {
  if (output === undefined) {
    throw new Error(`assert: unexpected undefined output (should be a result)`);
  }

  switch (output.kind) {
    case "ok":
      return `${formatDebuggable(output.value[1])}%c`;
    case "err":
      return `${output.fatal ? "fatal " : ""}error: ${
        output.reason
      } %c@ ${output.snippet.fmt()}`;
  }
}

export function afterSnippet(
  output: Result<[Snippet, Debuggable]> | undefined
) {
  if (output === undefined) {
    throw new Error(`assert: unexpected undefined output (should be a result)`);
  }

  switch (output.kind) {
    case "ok":
      return output.value[0];
    case "err":
      return output.snippet;
  }
}

export function trunc(snippet: Snippet): string {
  let rest = snippet.sliceRest;

  if (rest.length > 13) {
    return `${rest.slice(0, 10)}...`;
  } else {
    return rest.padEnd(13);
  }
}

const ERROR = "color: red";
const SUCCESS = "color: green";
const NORMAL = "color: #333";
const OPTIONAL = "color: #999";

export function printDebug(
  indent = 0,
  nestedError = 0,
  parentStatus?: "success" | "error" | "optional" | undefined,
  row: StateRow | undefined = root
) {
  if (row === undefined) {
    // tslint:disable-next-line:no-console
    console.log(`%cassert: unexpected undefined row`, ERROR);
    return;
  }

  let context = row.combinator.name;
  let afterPad = Math.max(60 - indent - context.length - nestedError, 0);

  let inErrorHere =
    row.output &&
    row.output.kind === "err" &&
    row.children.length > 0 &&
    indent !== 0;

  let currentStatus: "success" | "error" | "optional";

  if (row.output && row.output.kind === "err") {
    if (row.optional) {
      currentStatus = "optional";
    } else {
      currentStatus = "error";
    }
  } else {
    currentStatus = "success";
  }

  let weight =
    parentStatus === currentStatus
      ? "font-weight: normal"
      : "font-weight: bold";

  if (inErrorHere) {
    // tslint:disable-next-line:no-console
    console.groupCollapsed(
      `${String(indent).padEnd(3)}%c${" ".repeat(
        indent
      )}%c${context}%c${" ".repeat(afterPad)}| ${trunc(
        row.preSnippet
      )} | ${trunc(afterSnippet(row.output))} | %c${outputString(row.output)}`,
      NORMAL,
      outputStyle(row, weight),
      NORMAL,
      outputStyle(row, weight),
      NORMAL
    );

    nestedError += 2;
  } else {
    // tslint:disable-next-line:no-console
    console.log(
      `${String(indent).padEnd(3)}%c${" ".repeat(
        indent
      )}%c${context}%c${" ".repeat(afterPad)}| ${trunc(
        row.preSnippet
      )} | ${trunc(afterSnippet(row.output))} | %c${outputString(row.output)}`,
      NORMAL,
      outputStyle(row, weight),
      NORMAL,
      outputStyle(row, weight),
      NORMAL
    );
  }

  for (let child of row.children) {
    printDebug(indent + 1, nestedError, currentStatus, child);
  }

  if (inErrorHere) {
    console.groupEnd();
  }
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
