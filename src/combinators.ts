import { Result, Snippet, ok, err } from "./snippet";

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
        if (next.isEOF()) {
          return err(input, "takeUntil");
        } else if (next.isMatch(pattern)) {
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

export function seq<T, U>(
  a: Combinator<T>,
  b: Combinator<U>
): Combinator<[T, U]>;
export function seq<T, U, V>(
  a: Combinator<T>,
  b: Combinator<U>,
  c: Combinator<V>
): Combinator<[T, U, V]>;
export function seq(
  ...combinators: Combinator<unknown>[]
): Combinator<unknown[]> {
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
        return result;
      }
    }

    return ok([current.rest, out]);
  };
}
