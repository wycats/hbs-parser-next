import { err, Result, ShapeConstructorResult } from "../../shape";
import { shape, ShapeConstructor } from "../abstract";

export function any<T extends Array<ShapeConstructor<Result<unknown>>>>(
  shapes: T,
  desc: string
): ShapeConstructor<Result<ShapeConstructorResult<T[number]>>> {
  return shape(desc, iterator => {
    return iterator.assertNotEOF().andThen(() => {
      for (let shape of shapes) {
        let result = iterator.expand(shape);

        if (result.kind === "ok") {
          return result as Result<ShapeConstructorResult<T[number]>>;
        }
      }

      return err(iterator.peek("any").reject(), "none") as Result<
        ShapeConstructorResult<T[number]>
      >;
    });
  });
}
