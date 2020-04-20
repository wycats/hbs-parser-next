import { ok, Result, Snippet } from "../../../snippet";
import { combinator } from "../../combinator";
import { DOT, ID } from "../../hbs";
import type { PresentTokens, Token } from "../../tokens";
import { AbstractCombinator } from "../base";
import Head from "./head";

// export const SIMPLE_HEAD = combinator(() => any("HEAD", ARG, ID));
// TODO: Allow `[]` or string members
export const MEMBER = combinator(() => ID);

export default class SimplePath extends AbstractCombinator<PresentTokens> {
  private head: Head;

  constructor(private disallowedKeywords?: string[]) {
    super();
    this.head = new Head(disallowedKeywords);
  }

  get name(): string {
    if (this.disallowedKeywords) {
      return `SIMPLE_PATH • not ${JSON.stringify(this.disallowedKeywords)}`;
    } else {
      return `SIMPLE_PATH`;
    }
  }

  invoke(input: Snippet): Result<[Snippet, PresentTokens]> {
    let result = input.invoke(this.head);

    if (result.kind === "err") {
      return result;
    }

    let [current, head] = result.value;
    let out: PresentTokens = [head];

    while (true) {
      if (current.isEOF()) {
        return ok([current, out]);
      }

      let resultDot = current.invoke(DOT, { optional: true });

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
