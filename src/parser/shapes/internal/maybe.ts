import {
  Result,
  Shape,
  ShapeResult,
  start,
  step,
  ResultValue,
  isOk,
} from "../../shape";
import { ShapeConstructor, shape, infallibleShape } from "../abstract";
import { expand } from "../../tokens-iterator";

export function maybe<T extends Shape<Result<unknown>>>(
  input: T
): ShapeConstructor<ShapeResult<T> | null> {
  return infallibleShape(`maybe • ${input.desc}`, iterator => {
    let result = expand(input)(iterator);

    if (isOk(result)) {
      return result.value;
    } else {
      return null;
    }
  }) as ShapeConstructor<ShapeResult<T> | null>;
}
