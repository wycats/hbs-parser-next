import { EXPAND, Result, SequenceBuilder, Shape } from "../shape";
import type {
  default as TokensIterator,
  CombinatorTokensIterator,
} from "../tokens-iterator";

export abstract class AbstractShape<T> implements Shape<T> {
  abstract readonly desc: string;
  abstract [EXPAND](iterator: TokensIterator): T;
}

export interface ShapeConstructor<T> {
  new (): Shape<T>;
}

export function recurse<T, U>(
  sequence: () => SequenceBuilder<T, U>
): SequenceBuilder<T, U> {
  return new SequenceBuilder((iterator, prev) => {
    return sequence().run(iterator, prev);
  });
}

export function shape<T>(
  desc: string,
  expand: (iterator: CombinatorTokensIterator) => Result<T>
): ShapeConstructor<Result<T>> {
  return class extends AbstractShape<Result<T>> {
    readonly desc = desc;

    [EXPAND] = expand;
  };
}

export function infallibleShape<T>(
  desc: string,
  expand: (iterator: CombinatorTokensIterator) => T
): ShapeConstructor<T> {
  return class extends AbstractShape<T> {
    readonly desc = desc;

    [EXPAND] = expand;
  };
}
