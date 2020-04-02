import { Result, Snippet, ok, err } from "../snippet";
import { indent, indentWS, row, outdent } from "./debug";
import {
  Token,
  LeafToken,
  LeafTokenType,
  RootToken,
  TokenType,
  debugFormatToken
} from "./tokens";

// export type Combinator<T> = (input: Snippet) => Result<[Snippet, T]>;
export type Pattern = string | RegExp;

export type CombinatorType = "transparent" | "arm" | "normal";

export interface ObjectCombinator<T> {
  name: string;
  kind?: CombinatorType;
  invoke(input: Snippet): Result<[Snippet, T]>;
}

export type FunctionCombinator<T> = (input: Snippet) => Result<[Snippet, T]>;

export type Debuggable =
  | string
  | null
  | Snippet
  | Snippet[]
  | Token
  | Token[]
  | LeafToken<LeafTokenType>
  | RootToken
  | Debuggable[];

function formatDebuggable(debuggable: Debuggable): string {
  if (typeof debuggable === "string") {
    return debuggable;
  } else if (debuggable === null) {
    return "null";
  } else if (Array.isArray(debuggable)) {
    if (debuggable.length <= 2) {
      return `[${debuggable.map(formatDebuggable).join(", ")}]`;
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

export type Combinator<T extends Debuggable = Debuggable> = ObjectCombinator<T>;

export function combinatorName(combinator: Combinator): string {
  if (combinator.name) {
    return combinator.name;
  } else {
    console.error(combinator);
    throw new Error(`assert: expected combinator name`);
  }
}

export function combinatorType(combinator: Combinator): CombinatorType {
  if (typeof combinator === "function") {
    return "normal";
  } else {
    return combinator.kind || "normal";
  }
}

export function isTransparent(combinator: Combinator): boolean {
  if (typeof combinator === "function") {
    return false;
  } else {
    return combinator.kind === "transparent";
  }
}

export function tag(source: string): Combinator<Snippet> {
  return {
    name: `string «${source}»`,
    invoke(input) {
      let next = input.slice(source.length);

      if (next.fragment === source) {
        return ok([next.rest, next]);
      } else {
        return { kind: "err", snippet: input, reason: "tag" };
      }
    }
  };
}

export function pattern(source: RegExp, name: string): Combinator<Snippet> {
  return {
    name: `pattern[${name}]`,
    invoke(input) {
      let rest = input.sliceRest;
      let match = rest.match(source);

      if (match) {
        let matched = match[0];
        let next = input.slice(matched.length);
        return ok([next.rest, next]);
      } else {
        return err(input, "pattern");
      }
    }
  };
}

export function takeUntil(pattern: Pattern): Combinator<Snippet> {
  if (typeof pattern === "string") {
    return {
      name: "takeUntil",
      invoke(input) {
        let next = input;

        while (true) {
          if (next.isEOF() || next.isMatch(pattern)) {
            return ok([next.rest, next]);
          } else {
            next = next.extend(1);
          }
        }
      }
    };
  } else {
    throw new Error("Not implemented");
  }
}

export function takeWhile(pattern: Pattern): Combinator<Snippet> {
  if (typeof pattern === "string") {
    return {
      name: "takeWhile",
      invoke(input) {
        let next = input;

        while (true) {
          if (next.isEOF()) {
            return ok([next.rest, next]);
          } else if (next.isMatch(pattern)) {
            next = next.extend(pattern.length);
          } else if (next.length === 0) {
            return err(input, "takeWhile");
          } else {
            return ok([next.rest, next]);
          }
        }
      }
    };
  } else {
    throw new Error("Not implemented");
  }
}

type Combinators<T extends { [key: string]: Debuggable }> = {
  [K in keyof T]: Combinator<T[K]>;
};

type TupleCombinators<T> = {
  [K in keyof T]: T[K] extends Debuggable ? Combinator<T[K]> : never;
};

export class Logger {
  constructor(private enableLogging: boolean) {}

  invoke<T extends Debuggable>(
    combinator: Combinator<T>,
    input: Snippet,
    {
      forceTransparent,
      context
    }: { forceTransparent?: boolean; context?: string } = {}
  ): Result<[Snippet, T]> {
    let logged =
      this.enableLogging && !isTransparent(combinator) && !forceTransparent;

    if (logged) {
      row(
        { result: "start", arrow: `${indentWS()}->`, combinator, context },
        "",
        input.debugRest()
      );
      indent();
    }

    let result = combinator.invoke(input);

    if (logged) {
      outdent();
    }

    if (result.kind === "ok") {
      if (logged) {
        row(
          {
            result: "success",
            arrow: `${indentWS()}<-`,
            combinator,
            context
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
            combinator,
            context
          },
          result.reason,
          result.snippet.debugRest()
        );
      }
    }
    return result;
  }
}

export function seq<T extends Debuggable[]>(
  desc: string,
  ...combinators: TupleCombinators<T>
): Combinator<T> {
  return {
    name: `seq • ${desc}`,
    kind: "arm",
    invoke(input) {
      let out: unknown[] = [];
      let current = input;

      for (let item of combinators) {
        let result = input.invoke(item, current);

        if (result.kind === "ok") {
          let [next, value] = result.value;
          out.push(value);
          current = next.rest;
        } else {
          return result as any;
        }
      }

      return ok([current.rest, out]);
    }
  };
}

export function any<T extends Debuggable[]>(
  desc: string,
  ...combinators: TupleCombinators<T>
): Combinator<T[number]> {
  if (String(desc) === "[object Object]") {
    throw new Error("Assert");
  }

  return {
    name: `any • ${desc}`,
    kind: "arm",
    invoke(input) {
      let current = input;

      for (let item of combinators) {
        let result = input.invoke(item, current);

        if (result.kind === "ok") {
          return result;
        }
      }

      return err(input, "any");
    }
  };
}

type PickCallbacks<T extends { [key: string]: Debuggable }> = {
  [P in keyof T]: (input: T[P]) => Result<Debuggable>;
};

type UnionCallbacks<
  T extends { [key: string]: (input: any) => Result<Debuggable> }
> = {
  [P in keyof T]: T[P] extends (input: any) => Result<infer R>
    ? R extends Debuggable
      ? R
      : never
    : never;
}[keyof T];

export function pick<
  T extends { [key: string]: Debuggable },
  U extends PickCallbacks<T>
>(combinators: Combinators<T>, callbacks: U): Combinator<UnionCallbacks<U>> {
  return {
    name: "pick",
    invoke(input) {
      let current = input;

      for (let [name, item] of Object.entries(combinators) as Array<
        [string, Combinator]
      >) {
        let firstResult = input.invoke(item, current, { context: name });

        if (firstResult.kind === "ok") {
          let [next, value] = firstResult.value;
          let result = callbacks[name](value as any);

          if (result.kind === "ok") {
            return ok([next, result.value as any]);
          } else {
            return result;
          }
        }
      }

      return err(input, "any");
    }
  };
}

export function maybe<T extends Debuggable>(
  combinator: Combinator<T>
): Combinator<T | null> {
  return {
    name: "maybe",
    invoke(input) {
      let result = input.invoke(combinator, input);

      if (result.kind === "err") {
        return ok([input, null]);
      } else {
        return result;
      }
    }
  };
}
