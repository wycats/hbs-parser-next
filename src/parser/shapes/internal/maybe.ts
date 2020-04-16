import { Shape, Result, ShapeResult, EXPAND } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractInfallibleShape } from "../abstract";

export class MaybeShape<
  T extends Shape<Result<unknown>>
> extends AbstractInfallibleShape<ShapeResult<T> | null> {
  constructor(private inner: T) {
    super();
  }

  get desc(): string {
    return `maybe • ${this.inner.desc}`;
  }

  [EXPAND](iterator: TokensIterator): ShapeResult<T> | null {
    let result = iterator.expand(this.inner);

    if (result.kind === "err") {
      return null;
    }

    return result.value as ShapeResult<T>;
  }
}

export function maybe<T extends Shape<Result<unknown>>>(
  input: T
): Shape<ShapeResult<T> | null> {
  return new MaybeShape(input);
}
