import type { ParserArrow, Result } from "../../shape";

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
