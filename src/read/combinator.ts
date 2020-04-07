import type { CombinatorType } from "./combinators/types";

export function combinator<T extends CombinatorType>(func: () => T): T {
  return {
    name: "wrapper",
    kind: "transparent",
    invoke(input) {
      return input.invoke(func());
    },
  } as T;
}
