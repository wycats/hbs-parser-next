import { ok, Result, Snippet } from "../../../snippet";
import { range } from "../../../span";
import { combinator } from "../../combinator";
import { seq, tag, any } from "../../combinators";
import {
  arg,
  ArgumentToken,
  IdentifierToken,
  PresentTokens,
} from "../../tokens";
import { map } from "../../utils";
import { AbstractCombinator } from "../base";
import { DOT, ID, ID_SNIPPET } from "../core";
import type { CombinatorType } from "../types";
import { TokenType } from "../../token-enum";
import SomeToken from "./token";
import Id from "./id";

// export const SIMPLE_HEAD = combinator(() => any("HEAD", ARG, ID));
// TODO: Allow `[]` or string members
export const MEMBER = combinator(() => ID);

export const ARG: CombinatorType<ArgumentToken> = map(
  seq("@id", tag("@"), ID_SNIPPET),
  ([at, id]) => ok(arg(range(at, id)))
);

export class Head extends AbstractCombinator<IdentifierToken | ArgumentToken> {
  private id: CombinatorType<IdentifierToken>;

  constructor(private disallowedKeywords?: string[]) {
    super();
    this.id = new SomeToken(new Id(disallowedKeywords), TokenType.Identifier);
  }

  get name(): string {
    if (this.disallowedKeywords) {
      return `HEAD • not ${JSON.stringify(this.disallowedKeywords)}`;
    } else {
      return "HEAD";
    }
  }

  invoke(input: Snippet): Result<[Snippet, IdentifierToken | ArgumentToken]> {
    return input.invoke(any("HEAD", ARG, this.id));
  }
}

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

export const SIMPLE_PATH = new SimplePath();
