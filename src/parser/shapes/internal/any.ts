import type { Result, ShapeConstructorResult } from "../../shape";
import { shape, ShapeConstructor } from "../abstract";
import { expand, notEOF } from "../../tokens-iterator";

export function any<T extends Array<ShapeConstructor<Result<unknown>>>>(
  shapes: T,
  desc: string
): ShapeConstructor<Result<ShapeConstructorResult<T[number]>>> {
  return shape(desc, iterator =>
    iterator.start(notEOF()).andThen(() => {
      for (let shape of shapes) {
        let result = iterator.start(expand(shape));

        if (result.kind === "ok") {
          return result as Result<ShapeConstructorResult<T[number]>>;
        }
      }

      return iterator.err("any", "none");
    })
  );
}
