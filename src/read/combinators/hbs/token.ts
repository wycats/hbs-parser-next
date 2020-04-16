import { ok, Result, Snippet } from "../../../snippet";
import { AbstractCombinator } from "../base";
import type { LeafTokenMap } from "../../tokens";
import { combinatorName } from "../../utils";
import type { CombinatorType } from "../types";

export default class SomeToken<
  T extends keyof LeafTokenMap
> extends AbstractCombinator<LeafTokenMap[T]> {
  constructor(private combinator: CombinatorType<Snippet>, private type: T) {
    super();
  }

  get name(): string {
    return `token • ${combinatorName(this.combinator)}`;
  }

  invoke(input: Snippet): Result<[Snippet, LeafTokenMap[T]]> {
    let result = input.invoke(this.combinator, {
      forceTransparent: true,
    });

    if (result.kind === "err") {
      return result;
    } else {
      return ok([
        result.value[0],
        ({
          type: this.type,
          span: result.value[1].span,
        } as unknown) as LeafTokenMap[T],
      ]);
    }
  }
}
