import {
  Result,
  ShapeConstructorResult,
  Step,
  err,
  isOk,
  SequenceBuilder,
  SequenceResult,
} from "../../shape";
import { shape, ShapeConstructor } from "../abstract";
import { legacyExpand, legacyNotEOF } from "../../tokens-iterator";

export function legacyAny<T extends Array<ShapeConstructor<Result<unknown>>>>(
  shapes: T,
  desc: string
): ShapeConstructor<Result<ShapeConstructorResult<T[number]>>> {
  return shape(desc, iterator =>
    iterator.start(legacyNotEOF()).andThen(() => {
      for (let shape of shapes) {
        let result = iterator.start(legacyExpand(shape));

        if (result.kind === "ok") {
          return result as Result<ShapeConstructorResult<T[number]>>;
        }
      }

      return iterator.err("any", "none");
    })
  );
}

export function any<Prev, T extends Array<SequenceBuilder<Prev, unknown>>>(
  desc: string,
  sequences: T
): SequenceBuilder<Prev, SequenceResult<T[number]>> {
  return new SequenceBuilder((iterator, prev) => {
    for (let sequence of sequences) {
      let result = sequence.run(iterator, prev) as Result<
        SequenceResult<T[number]>
      >;

      if (isOk(result)) {
        return result;
      }
    }

    return iterator.err(desc, desc) as Result<SequenceResult<T[number]>>;
  });
}
