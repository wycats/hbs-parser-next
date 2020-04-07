import type { Result, Snippet } from "../../../snippet";
import { pattern } from "../../combinators";
import { AbstractCombinator } from "../base";

export default class Id extends AbstractCombinator<Snippet> {
  readonly name = "ID";

  invoke(input: Snippet): Result<[Snippet, Snippet]> {
    return input.invoke(
      pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET")
    );
  }
}
