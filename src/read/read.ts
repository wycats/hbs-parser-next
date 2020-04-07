import { ok, Result, Snippet } from "../snippet";
import { range } from "../span";
import { combinator } from "./combinator";
import { any } from "./combinators";
import { Logger } from "./logger";
import { printDebug } from "./debug";
import { BLOCK, INTERPOLATE } from "./hbs";
import { COMMENT, END_TAG, START_TAG, TEXT } from "./html";
import { many } from "./multi";
import { root, RootToken, Token } from "./tokens";
import { complete, map, mapResult } from "./utils";
import type { CombinatorType } from "./combinators/types";

export function read(
  source: string,
  { logging }: { logging?: true }
): Result<RootToken> {
  try {
    let input = Snippet.input(source, new Logger(logging || false));

    let result = input.invoke(
      complete(
        map(many(TOP_LEVEL), tokens => {
          return ok(root(tokens, range(...tokens)));
        })
      )
    );

    return mapResult(result, ([, token]) => ok(token));
  } finally {
    if (logging) {
      printDebug();
    }
  }
}

export const TOP_LEVEL: CombinatorType<Token> = {
  name: "TOP_LEVEL",
  invoke(input) {
    return input.invoke(any("top level", BLOCK, INTERPOLATE, CONTENT));
  },
};

export const CONTENT = combinator(() =>
  any("CONTENT", COMMENT, END_TAG, START_TAG, TEXT)
);
