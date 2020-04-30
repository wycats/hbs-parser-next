import { ok, Result, Snippet, err } from "../../snippet";
import type { Debuggable } from "../logger";
import { AbstractCombinator } from "./base";
import type { Combinators, CombinatorType } from "./types";
import type { Dict } from "../../utils";

export default class Pick<
  T extends Dict<Debuggable>,
  U extends PickCallbacks<T>
> extends AbstractCombinator<UnionCallbacks<U>> {
  readonly name = "pick";

  constructor(private combinators: Combinators<T>, private callbacks: U) {
    super();
  }

  invoke(input: Snippet): Result<[Snippet, UnionCallbacks<U>]> {
    let current = input;

    for (let [name, item] of Object.entries(this.combinators) as Array<
      [string, CombinatorType]
    >) {
      let firstResult = current.invoke(item, { context: name });

      if (firstResult.kind === "ok") {
        let [next, value] = firstResult.value;
        let result = ((this.callbacks as unknown) as Dict<Function>)[name](
          value
        );

        if (result.kind === "ok") {
          return ok([next, result.value]);
        } else {
          return result;
        }
      }
    }

    return err(input, "any");
  }
}

export type PickCallbacks<T extends { [key: string]: Debuggable }> = {
  [P in keyof T]: (input: T[P]) => Result<Debuggable>;
};

type UnionCallbacks<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends { [key: string]: (input: any) => Result<Debuggable> }
> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [P in keyof T]: T[P] extends (input: any) => Result<infer R>
    ? R extends Debuggable
      ? R
      : never
    : never;
}[keyof T];
