import type { Result, Shape, ShapeResult } from "../../shape";
import { infallibleShape, ShapeConstructor } from "../abstract";
import { expand } from "../../tokens-iterator";

export function maybe<T extends Shape<Result<unknown>>>(
  input: T
): ShapeConstructor<ShapeResult<T> | null> {
  return infallibleShape(`maybe • ${input.desc}`, iterator => {
    let result = iterator.start(expand(input));

    if (result.kind === "err") {
      return null;
    }

    return result.value as ShapeResult<T>;
  });
}
