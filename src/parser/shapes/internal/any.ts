import type { ParserArrow, ParseResult } from "../../shape";

export type UnionResult<
  T extends ReadonlyArray<ParserArrow<void, ParseResult<any>>>
> = {
  [P in keyof T]: P extends number
    ? T[P] extends ParserArrow<any, ParseResult<infer R>>
      ? R
      : never
    : never;
}[number];

export function anyArrow<
  T extends ReadonlyArray<ParserArrow<void, ParseResult<unknown>>>
>(sequences: T): ParserArrow<void, ParseResult<UnionResult<T>>> {
  let [current, ...tail] = sequences;

  for (let item of tail) {
    current = current.orElse(item);
  }

  return (current as unknown) as ParserArrow<void, ParseResult<UnionResult<T>>>;
}
