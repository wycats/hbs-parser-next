import { ok, Result, Snippet } from "../../../snippet";
import { takeUntil } from "../../combinators";
import { text, TextToken } from "../../tokens";
import { AbstractCombinator } from "../base";

export default class HTMLText extends AbstractCombinator<TextToken> {
  readonly name = "TEXT";

  invoke(input: Snippet): Result<[Snippet, TextToken]> {
    let result = input.invoke(takeUntil("{{"));

    if (result.kind === "err") {
      return result;
    }

    let [next, value] = result.value;
    return ok([next, text(value.span)]);
  }
}
