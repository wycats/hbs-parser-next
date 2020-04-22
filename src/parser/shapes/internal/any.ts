import {
  isOk,
  Result,
  SequenceBuilder,
  SequenceResult,
  ParserArrow,
  ArrowResult,
  FallibleArrowResult,
} from "../../shape";

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

export type UnionResult<
  T extends ReadonlyArray<ParserArrow<void, Result<any>>>
> = {
  [P in keyof T]: P extends number
    ? T[P] extends ParserArrow<any, Result<infer R>>
      ? R
      : never
    : never;
}[number];

export function anyArrow<
  T extends ReadonlyArray<ParserArrow<void, Result<unknown>>>
>(sequences: T): ParserArrow<void, Result<UnionResult<T>>> {
  let [current, ...tail] = sequences;

  for (let item of tail) {
    current = current.orElse(item);
  }

  return (current as unknown) as ParserArrow<void, Result<UnionResult<T>>>;
}
