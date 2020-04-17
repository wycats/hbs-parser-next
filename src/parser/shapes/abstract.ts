import type { Shape, Result } from "../shape";
import { EXPAND } from "../shape";
import TokensIterator, {
  expand,
  CombinatorTokensIterator,
} from "../tokens-iterator";

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
  expand: (iterator: CombinatorTokensIterator) => Result<T>
): ShapeConstructor<Result<T>> {
  return class extends AbstractShape<T> {
    readonly desc = desc;

    [EXPAND] = expand;
  };
}

export function infallibleShape<T>(
  desc: string,
  expand: (iterator: CombinatorTokensIterator) => T
): ShapeConstructor<T> {
  return class extends AbstractInfallibleShape<T> {
    readonly desc = desc;

    [EXPAND] = expand;
  };
}

export abstract class AbstractInfallibleShape<T> implements Shape<T> {
  readonly fallible = false;
  declare abstract readonly desc: string;
  abstract [EXPAND](iterator: CombinatorTokensIterator): T;
}

export function or<T, U>(
  left: Shape<Result<T>>,
  right: Shape<Result<U>>
): Shape<Result<T | U>> {
  return {
    desc: `${left.desc} OR ${right.desc}`,
    fallible: true,
    [EXPAND](iterator) {
      let leftResult = expand(left)(iterator);

      if (leftResult.kind === "ok") {
        return leftResult;
      }

      return expand(right)(iterator);
    },
  };
}
