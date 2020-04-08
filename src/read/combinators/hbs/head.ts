import type { Result, Snippet } from "../../../snippet";
import { any } from "../../combinators";
import { ARG } from "../../hbs";
import { ArgumentToken, IdentifierToken, TokenType } from "../../tokens";
import { AbstractCombinator } from "../base";
import type { CombinatorType } from "../types";
import Id from "./id";
import SomeToken from "./token";

export default class Head extends AbstractCombinator<
  IdentifierToken | ArgumentToken
> {
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
