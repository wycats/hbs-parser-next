import { Combinator } from "./combinators";
import { Snippet, ok, err } from "../snippet";

export function many(source: Combinator<Snippet>): Combinator<Snippet[]> {
  return input => {
    let current = input;
    let out: Snippet[] = [];

    while (true) {
      let next = source(current);

      if (next.kind === "err") {
        return ok([current.rest, out]);
      } else {
        let [, match] = next.value;
        out.push(match);
        current = match;
      }
    }
  };
}

export function present<T>(source: Combinator<T>): Combinator<T> {
  return input => {
    let result = source(input);

    if (result.kind === "ok") {
      let [next, match] = result.value;
      if (input.eq(next)) {
        return err(input, "empty");
      } else {
        return result;
      }
    } else {
      return result;
    }
  };
}

export function alt<T, U>(
  a: Combinator<T>,
  b: Combinator<U>
): Combinator<T | U> {
  return input => {
    let resultA = a(input);

    if (resultA.kind === "ok") {
      return resultA;
    }

    let resultB = b(input);

    if (resultB.kind === "ok") {
      return resultB;
    } else {
      return {
        kind: "err",
        snippet: input,
        reason: "multi"
      };
    }
  };
}
