import { AbstractCombinator } from "./base";
import { Snippet, Result, ok } from "../../snippet";

export default class TakeUntil extends AbstractCombinator<Snippet> {
  readonly name = "takeUntil";

  constructor(private pattern: string) {
    super();
  }

  invoke(input: Snippet): Result<[Snippet, Snippet]> {
    let next = input;

    while (true) {
      if (next.isEOF() || next.isMatch(this.pattern)) {
        return ok([next.rest, next]);
      } else {
        next = next.extend(1);
      }
    }
  }
}
