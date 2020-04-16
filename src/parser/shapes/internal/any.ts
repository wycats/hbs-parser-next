import { err, Shape, Result, EXPAND, ShapeResult } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";

export class Any<T extends Array<Shape<Result<unknown>>>> extends AbstractShape<
  ShapeResult<T[number]>
> {
  constructor(private shapes: T, readonly desc: string) {
    super();
  }

  [EXPAND](iterator: TokensIterator): Result<ShapeResult<T[number]>> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    for (let shape of this.shapes) {
      let result = iterator.expand(shape);

      if (result.kind === "ok") {
        return result as Result<ShapeResult<T[number]>>;
      }
    }

    return err(iterator.peek("any").reject(), "none");
  }
}
