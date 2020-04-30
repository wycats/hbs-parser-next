import type { CombinatorDebugType, CombinatorType } from "./combinators/types";
import type { Debuggable } from "./logger";
import { Result, Snippet } from "../snippet";
import type { Token, RootToken } from "./tokens";

const ERROR = "color: red";
const SUCCESS = "color: green";
const NORMAL = "color: #333";
const OPTIONAL = "color: #999";

export type RowResult = "success" | "error" | "start";

export type RowStyle = {
  result: RowResult;
  kind: CombinatorDebugType;
};

export type TableRow = {
  style: RowStyle;
  data: [string, string, string, string];
};

export interface StateRow {
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
}): void {
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

export function postInvoke(result: Result<[Snippet, Debuggable]>): void {
  let last = childStack[childStack.length - 1];
  last.output = result;
  let row = childStack.pop();

  if (childStack.length === 0) {
    root = row;
  }
}

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
): Snippet {
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

export function truncString(snippet: string, length = 13): string {
  if (snippet.length > length) {
    return `${snippet.slice(0, length - 3)}...`;
  } else {
    return snippet.padEnd(length);
  }
}

export function getTrace(): StateRow {
  let current = root;

  if (current === undefined) {
    throw new Error(`attempting to get the trace, but none was recorded`);
  }

  root = undefined;
  return current;
}

export function printTrace(
  indent = 0,
  nestedError = 0,
  parentStatus?: "success" | "error" | "optional" | undefined,
  row: StateRow | undefined = getTrace()
): void {
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
    printTrace(indent + 1, nestedError, currentStatus, child);
  }

  if (inErrorHere) {
    console.groupEnd();
  }
}

let TAB = 0;

export function indent(): void {
  TAB += 1;
}

export function outdent(): void {
  TAB -= 1;
}

export function indentWS(): string {
  return " ".repeat(TAB);
}

export function formatDebuggable(debuggable: Debuggable): string {
  if (typeof debuggable === "string") {
    return debuggable;
  } else if (debuggable === null) {
    return "null";
  } else if (Array.isArray(debuggable)) {
    if (debuggable.length <= 2) {
      return `[${(debuggable as Debuggable[])
        .map(formatDebuggable)
        .join(", ")}]`;
    } else {
      return `[${formatDebuggable(debuggable[0])}, ${formatDebuggable(
        debuggable[1]
      )}, ${formatDebuggable(debuggable[2])}, ...]`;
    }
  } else if (debuggable instanceof Snippet) {
    return debuggable.fmt();
  } else {
    return debugFormatToken(debuggable);
  }
}

export function debugFormatToken(token: Token | RootToken): string {
  return `<token:${token.type}>`;
}
