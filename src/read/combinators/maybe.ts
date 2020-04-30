import { AbstractCombinator } from "./base";
import { Snippet, Result, ok } from "../../snippet";
import type { CombinatorType } from "./types";
import type { Debuggable } from "../logger";

export default class Maybe<
  T extends Debuggable
> extends AbstractCombinator<T | null> {
  constructor(private combinator: CombinatorType<T>) {
    super();
  }

  get name(): string {
    return `maybe ${this.combinator.name}`;
  }

  invoke(input: Snippet): Result<[Snippet, T | null]> {
    let result = input.invoke(this.combinator);

    if (result.kind === "err") {
      return ok([input, null]);
    } else {
      return result;
    }
  }
}
