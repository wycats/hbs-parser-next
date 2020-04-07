import { Result, Snippet } from "../snippet";
import { indent, indentWS, row, outdent } from "./debug";
import { Token, LeafToken, RootToken, debugFormatToken } from "./tokens";
import type { CombinatorType, CombinatorDebugType } from "./combinators/types";

export type Debuggable =
  | string
  | null
  | Snippet
  | Snippet[]
  | Token
  | Token[]
  | LeafToken
  | RootToken
  | Debuggable[];

export class Logger {
  constructor(private enableLogging: boolean) {}
  invoke<T extends Debuggable>(
    c: CombinatorType<T>,
    input: Snippet,
    {
      forceTransparent,
      context,
    }: {
      forceTransparent?: boolean;
      context?: string;
    } = {}
  ): Result<[Snippet, T]> {
    let logged = this.enableLogging && !isTransparent(c) && !forceTransparent;
    if (logged) {
      row(
        { result: "start", arrow: `${indentWS()}->`, combinator: c, context },
        "",
        input.debugRest()
      );
      indent();
    }
    let result = c.invoke(input);
    if (logged) {
      outdent();
    }
    if (result.kind === "ok") {
      if (logged) {
        row(
          {
            result: "success",
            arrow: `${indentWS()}<-`,
            combinator: c,
            context,
          },
          formatDebuggable(result.value[1]),
          result.value[0].debugRest()
        );
      }
    } else {
      if (logged) {
        row(
          {
            result: "error",
            arrow: `${indentWS()}<-`,
            combinator: c,
            context,
          },
          result.reason,
          result.snippet.debugRest()
        );
      }
    }
    return result;
  }
}

export function combinatorDebugType(c: CombinatorType): CombinatorDebugType {
  if (typeof c === "function") {
    return "normal";
  } else {
    return c.kind || "normal";
  }
}

export function isTransparent(c: CombinatorType): boolean {
  if (typeof c === "function") {
    return false;
  } else {
    return c.kind === "transparent";
  }
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
