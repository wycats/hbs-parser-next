import { AbstractCombinator } from "./base";
import { Snippet, Result, ok } from "../../snippet";

export default class Tag extends AbstractCombinator<Snippet> {
  readonly name = "tag";

  constructor(private source: string) {
    super();
  }

  invoke(input: Snippet): Result<[Snippet, Snippet]> {
    let next = input.slice(this.source.length);

    if (next.fragment === this.source) {
      return ok([next.rest, next]);
    } else {
      return { kind: "err", snippet: input, reason: "tag" };
    }
  }
}
