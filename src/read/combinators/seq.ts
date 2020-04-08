import { ok, Result, Snippet } from "../../snippet";
import type { Debuggable } from "../logger";
import { AbstractCombinator } from "./base";
import type { TupleCombinators } from "./types";

export default class Seq<T extends Debuggable[]> extends AbstractCombinator<T> {
  constructor(readonly name: string, private combinators: TupleCombinators<T>) {
    super();
  }

  invoke(input: Snippet): Result<[Snippet, T]> {
    let out: unknown[] = [];
    let current = input;

    for (let item of this.combinators) {
      let result = current.invoke(item);

      if (result.kind === "ok") {
        let [next, value] = result.value;
        out.push(value);
        current = next.rest;
      } else {
        return result as any;
      }
    }

    return ok([current.rest, out as T]);
  }
}
