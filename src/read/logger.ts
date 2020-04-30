import type { Result, Snippet } from "../snippet";
import { indent, outdent, preInvoke, postInvoke } from "./debug";
import type { Token, LeafToken, RootToken } from "./tokens";
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
      optional,
    }: {
      forceTransparent?: boolean;
      context?: string;
      optional?: true;
    } = {}
  ): Result<[Snippet, T]> {
    let logged = this.enableLogging && !isTransparent(c) && !forceTransparent;
    if (logged) {
      preInvoke({ combinator: c, snippet: input, optional: !!optional });
      indent();
    }
    let result = c.invoke(input);
    if (logged) {
      outdent();
      postInvoke(result);
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
