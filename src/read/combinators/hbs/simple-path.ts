import { combinator } from "../../combinator";
import { ok, Result, Snippet } from "../../../snippet";
import { any } from "../../combinators";
import { AbstractCombinator } from "../base";
import { ID, DOT, ARG } from "../../hbs";
import type { PresentTokens, Token } from "../../tokens";

export default class SimplePath extends AbstractCombinator<PresentTokens> {
  readonly name = "PATH";

  invoke(input: Snippet): Result<[Snippet, PresentTokens]> {
    let result = input.invoke(SIMPLE_HEAD);

    if (result.kind === "err") {
      return result;
    }

    let [current, head] = result.value;
    let out: Token[] & PresentTokens = [head];

    while (true) {
      if (current.isEOF()) {
        return ok([current, out]);
      }

      let resultDot = current.invoke(DOT);

      if (resultDot.kind === "err") {
        return ok([current, out]);
      }

      current = resultDot.value[0];
      let nextDot = resultDot.value[1];

      let resultMember = current.invoke(MEMBER);

      if (resultMember.kind === "err") {
        return resultMember;
      }

      current = resultMember.value[0];
      let nextMember = resultMember.value[1];

      out.push(nextDot, nextMember);
    }
  }
}

export const SIMPLE_HEAD = combinator(() => any("HEAD", ARG, ID));
// TODO: Allow `[]` or string members
export const MEMBER = combinator(() => ID);
