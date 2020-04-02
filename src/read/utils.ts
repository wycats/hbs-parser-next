import { Combinator, combinatorName, Debuggable } from "./combinators";
import { ok, Result, Snippet, err } from "../snippet";

export function mapResult<T, U>(
  result: Result<T>,
  callback: (input: T) => Result<U>
): Result<U> {
  if (result.kind === "err") {
    return result;
  }

  return callback(result.value);
}

export function map<T extends Debuggable, U extends Debuggable>(
  combinator: Combinator<T>,
  mapper: (value: T, next: Snippet) => Result<U>
): Combinator<U> {
  return {
    name: combinatorName(combinator),
    invoke(input) {
      let first = input.invoke(combinator, input, { forceTransparent: true });

      if (first.kind === "err") {
        return first;
      }

      let [next, value] = first.value;

      let result = mapper(value, next);

      if (result.kind === "err") {
        return result;
      }

      return ok([next, result.value]);
    }
  };
}

export function complete<T extends Debuggable>(
  source: Combinator<T>
): Combinator<T> {
  return {
    name: "complete",
    invoke(input) {
      return input.invoke(
        map(source, (value, next) => {
          if (next.restLength !== 0) {
            return err(input, "incomplete") as Result<T>;
          } else {
            return ok(value);
          }
        }),
        input
      );
    }
  };
}

export function present<T extends Debuggable>(
  source: Combinator<T>
): Combinator<T> {
  return {
    name: "present",
    invoke(input) {
      let result = input.invoke(source, input);

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
    }
  };
}

export function unreachable(value: never): never {
  throw new Error(`unreachable code reached`);
}
