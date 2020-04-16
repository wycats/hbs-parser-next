import type { Shape, Result } from "../shape";
import { EXPAND } from "../shape";
import type TokensIterator from "../tokens-iterator";

export abstract class AbstractShape<T> implements Shape<Result<T>> {
  abstract readonly desc: string;
  abstract [EXPAND](iterator: TokensIterator): Result<T>;
}

export abstract class AbstractInfallibleShape<T> implements Shape<T> {
  declare abstract readonly desc: string;
  abstract [EXPAND](iterator: TokensIterator): T;
}

export function or<T, U>(
  left: Shape<Result<T>>,
  right: Shape<Result<U>>
): Shape<Result<T | U>> {
  return {
    desc: `${left.desc} OR ${right.desc}`,
    [EXPAND](iterator) {
      let leftResult = iterator.expand(left);

      if (leftResult.kind === "ok") {
        return leftResult;
      }

      return iterator.expand(right);
    },
  };
}
