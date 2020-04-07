import { AbstractCombinator } from "./base";
import { Snippet, Result, ok, err } from "../../snippet";

export default class Pattern extends AbstractCombinator<Snippet> {
  constructor(private desc: string, private pattern: RegExp) {
    super();
  }

  get name() {
    return `pattern[${this.desc}]`;
  }

  invoke(input: Snippet): Result<[Snippet, Snippet]> {
    let rest = input.sliceRest;
    let match = rest.match(this.pattern);

    if (match) {
      let matched = match[0];
      let next = input.slice(matched.length);
      return ok([next.rest, next]);
    } else {
      return err(input, "pattern");
    }
  }
}
