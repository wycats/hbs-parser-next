import { Result, Snippet, ok, err } from "../snippet";

export type Combinator<T> = (input: Snippet) => Result<[Snippet, T]>;
export type Pattern = string | RegExp;

export function tag(source: string): Combinator<Snippet> {
  return input => {
    let next = input.slice(source.length);

    if (next.fragment === source) {
      return ok([next.rest, next]);
    } else {
      return { kind: "err", snippet: input, reason: "tag" };
    }
  };
}

export function pattern(source: RegExp): Combinator<Snippet> {
  return input => {
    let rest = input.sliceRest;
    let match = rest.match(source);

    if (match) {
      let matched = match[0];
      let next = input.slice(matched.length);
      return ok([next.rest, next]);
    } else {
      return err(input, "pattern");
    }
  };
}

export function takeUntil(pattern: Pattern): Combinator<Snippet> {
  if (typeof pattern === "string") {
    return input => {
      let next = input;

      while (true) {
        if (next.isEOF() || next.isMatch(pattern)) {
          return ok([next.rest, next]);
        } else {
          next = next.extend(1);
        }
      }
    };
  } else {
    throw new Error("Not implemented");
  }
}

export function takeWhile(pattern: Pattern): Combinator<Snippet> {
  if (typeof pattern === "string") {
    return input => {
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
    };
  } else {
    throw new Error("Not implemented");
  }
}

type Combinators<T> = {
  [K in keyof T]: Combinator<T[K]>;
};

export function seq<T extends [unknown, ...unknown[]]>(
  ...combinators: Combinators<T>
): Combinator<T> {
  return input => {
    let out: unknown[] = [];
    let current = input;

    for (let item of combinators) {
      let result = item(current);

      if (result.kind === "ok") {
        let [next, value] = result.value;
        out.push(value);
        current = next.rest;
      } else {
        return result as any;
      }
    }

    return ok([current.rest, out]);
  };
}

export function any<T extends [unknown, ...unknown[]]>(
  ...combinators: Combinators<T>
): Combinator<T[number]> {
  return input => {
    let current = input;

    for (let item of combinators) {
      let result = item(current);

      if (result.kind === "ok") {
        return result;
      }
    }

    return err(input, "any");
  };
}

export function maybe<T>(combinator: Combinator<T>): Combinator<T | null> {
  return input => {
    let result = combinator(input);

    if (result.kind === "err") {
      return ok([input, null]);
    } else {
      return result;
    }
  };
}
