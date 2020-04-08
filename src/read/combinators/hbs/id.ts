import { Result, Snippet, err, ok } from "../../../snippet";
import { pattern } from "../../combinators";
import { AbstractCombinator } from "../base";

export default class Id extends AbstractCombinator<Snippet> {
  constructor(private readonly disallowedKeywords?: string[]) {
    super();
  }

  get name(): string {
    if (this.disallowedKeywords) {
      return `ID • not ${JSON.stringify(this.disallowedKeywords)}`;
    } else {
      return "ID";
    }
  }

  invoke(input: Snippet): Result<[Snippet, Snippet]> {
    const disallowedKeywords = this.disallowedKeywords;

    if (disallowedKeywords) {
      return input.invoke(
        pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET").map(
          snippet => {
            let frag = snippet.fragment;
            if (disallowedKeywords.some(k => frag === k)) {
              return err(snippet, "disallowed keyword");
            } else {
              return ok(snippet);
            }
          }
        )
      );
    } else {
      return input.invoke(
        pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET")
      );
    }
  }
}
