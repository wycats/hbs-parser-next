import { AbstractCombinator } from "./base";
import { Snippet, Result, ok, err } from "../../snippet";

export default class TakeWhile extends AbstractCombinator<Snippet> {
  readonly name = "takeWhile";

  constructor(private pattern: string) {
    super();
  }

  invoke(input: Snippet): Result<[Snippet, Snippet]> {
    let next = input;

    while (true) {
      if (next.isEOF()) {
        return ok([next.rest, next]);
      } else if (next.isMatch(this.pattern)) {
        next = next.extend(this.pattern.length);
      } else if (next.length === 0) {
        return err(input, "takeWhile");
      } else {
        return ok([next.rest, next]);
      }
    }
  }
}
