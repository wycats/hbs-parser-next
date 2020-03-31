import { Combinator } from "./combinators";
import { ok, Result, Snippet, err } from "../snippet";

export function then<T, U>(
  combinator: Combinator<T>,
  then: Combinator<U>
): Combinator<[T, U]> {
  return input => {
    let first = combinator(input);

    if (first.kind === "err") {
      return first;
    }

    let [next, firstValue] = first.value;

    let second = then(next);

    if (second.kind === "err") {
      return second;
    }

    let [rest, secondValue] = second.value;

    return ok([rest, [firstValue, secondValue]]);
  };
}

export function mapResult<T, U>(
  result: Result<T>,
  callback: (input: T) => Result<U>
): Result<U> {
  if (result.kind === "err") {
    return result;
  }

  return callback(result.value);
}

export function map<T, U>(
  combinator: Combinator<T>,
  mapper: (value: T, next: Snippet) => Result<U>
): Combinator<U> {
  return input => {
    let first = combinator(input);

    if (first.kind === "err") {
      return first;
    }

    let [next, value] = first.value;

    let result = mapper(value, next);

    if (result.kind === "err") {
      return result;
    }

    return ok([next, result.value]);
  };
}

export function complete<T>(source: Combinator<T>): Combinator<T> {
  return input =>
    map(source, (value, next) => {
      if (next.length !== 0) {
        return err(input, "incomplete") as Result<T>;
      } else {
        return ok(value);
      }
    })(input);
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

export function unreachable(value: never): never {
  throw new Error(`unreachable code reached`);
}
