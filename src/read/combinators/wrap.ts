import { AbstractCombinator } from "./base";
import { Snippet, Result, ok } from "../../snippet";
import type { Debuggable } from "../logger";
import type { CombinatorType } from "./types";

export default class Wrap<T extends Debuggable> extends AbstractCombinator<
  T[]
> {
  constructor(private combinator: CombinatorType<T>) {
    super();
  }

  get name(): string {
    return `wrap • ${this.combinator.name}`;
  }

  invoke(input: Snippet): Result<[Snippet, T[]]> {
    let result = input.invoke(this.combinator);

    if (result.kind === "err") {
      return result;
    } else {
      return ok([result.value[0], [result.value[1]]]);
    }
  }
}
