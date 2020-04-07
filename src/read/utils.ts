import { ok, Result, Snippet, err } from "../snippet";
import type { Debuggable } from "./logger";
import type { CombinatorType } from "./combinators/types";

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
  combinator: CombinatorType<T>,
  mapper: (value: T, next: Snippet) => Result<U>
): CombinatorType<U> {
  return {
    name: combinatorName(combinator),
    invoke(input) {
      let first = input.invoke(combinator, { forceTransparent: true });

      if (first.kind === "err") {
        return first;
      }

      let [next, value] = first.value;

      let result = mapper(value, next);

      if (result.kind === "err") {
        return result;
      }

      return ok([next, result.value]);
    },
  };
}

export function complete<T extends Debuggable>(
  source: CombinatorType<T>
): CombinatorType<T> {
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
        })
      );
    },
  };
}

export function present<T extends Debuggable>(
  source: CombinatorType<T>
): CombinatorType<T> {
  return {
    name: "present",
    invoke(input) {
      let result = input.invoke(source);

      if (result.kind === "ok") {
        let [next] = result.value;
        if (input.eq(next)) {
          return err(input, "empty");
        } else {
          return result;
        }
      } else {
        return result;
      }
    },
  };
}

export function combinatorName(c: CombinatorType): string {
  if (c.name) {
    return c.name;
  } else {
    console.error(c);
    throw new Error(`assert: expected combinator name`);
  }
}

export function unreachable(value: never): never {
  console.error(`unreachable value`, value);
  throw new Error(`unreachable code reached`);
}

export type Dict<T> = { [key: number]: T };
