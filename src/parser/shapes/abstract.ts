import type { Shape, Result } from "../shape";
import { EXPAND } from "../shape";
import type TokensIterator from "../tokens-iterator";

export abstract class AbstractShape<T> implements Shape<Result<T>> {
  readonly fallible = true;
  abstract readonly desc: string;
  abstract [EXPAND](iterator: TokensIterator): Result<T>;
}

export interface ShapeConstructor<T> {
  new (): Shape<T>;
}

export function shape<T>(
  desc: string,
  expand: (iterator: TokensIterator) => Result<T>
): ShapeConstructor<Result<T>> {
  return class extends AbstractShape<T> {
    readonly desc = desc;

    [EXPAND] = expand;
  };
}

export function infallibleShape<T>(
  desc: string,
  expand: (iterator: TokensIterator) => T
): ShapeConstructor<T> {
  return class extends AbstractInfallibleShape<T> {
    readonly desc = desc;

    [EXPAND] = expand;
  };
}

export abstract class AbstractInfallibleShape<T> implements Shape<T> {
  readonly fallible = false;
  declare abstract readonly desc: string;
  abstract [EXPAND](iterator: TokensIterator): T;
}

export function or<T, U>(
  left: Shape<Result<T>>,
  right: Shape<Result<U>>
): Shape<Result<T | U>> {
  return {
    desc: `${left.desc} OR ${right.desc}`,
    fallible: true,
    [EXPAND](iterator) {
      let leftResult = iterator.expand(left);

      if (leftResult.kind === "ok") {
        return leftResult;
      }

      return iterator.expand(right);
    },
  };
}
