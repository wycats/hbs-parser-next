// eslint-disable-next-line import/no-cycle
import { SEXP, NUMBER, NAMED, WS, STRING } from "../../hbs";
import { any } from "../../combinators";
import type { Token, PresentTokens } from "../../tokens";
import { AbstractCombinator } from "../base";
import { Snippet, Result, ok } from "../../../snippet";
import type { CombinatorType } from "../types";
import SimplePath from "./simple-path";
import { wrap } from "../core";

export default class SpacedTokens extends AbstractCombinator<PresentTokens> {
  private path: CombinatorType<Token[]>;

  constructor(private disallowedKeywords?: string[]) {
    super();
    this.path = new SimplePath(disallowedKeywords);
  }

  get name(): string {
    if (this.disallowedKeywords) {
      return `SPACED_TOKENS • not ${JSON.stringify(this.disallowedKeywords)}`;
    } else {
      return "SPACED_TOKENS";
    }
  }

  invoke(input: Snippet): Result<[Snippet, PresentTokens]> {
    let out: Token[] = [];
    let tk = any(
      "token",
      wrap(SEXP),
      wrap(STRING),
      wrap(NUMBER),
      NAMED,
      this.path,
      wrap(WS)
    );
    let current = input;

    while (true) {
      if (current.isEOF()) {
        break;
      }

      let result = current.invoke(tk);

      if (result.kind === "err") {
        break;
      }

      let [next, tokens] = result.value;

      for (let tok of tokens) {
        if (Array.isArray(tok)) {
          out.push(...tok);
        } else {
          out.push(tok);
        }
      }

      current = next;
    }

    if (out.length === 0) {
      return {
        kind: "err",
        reason: "present",
        snippet: input,
      };
    }

    return ok([current, out as PresentTokens]);
  }
}
