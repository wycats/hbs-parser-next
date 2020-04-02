import { ok, Result, Snippet } from "../snippet";
import { range, SourceSpan } from "../span";
import { any, Combinator, pattern, seq, tag, Logger } from "./combinators";
import { many } from "./multi";
import {
  ArgumentToken,
  interpolate,
  LeafToken,
  LeafTokenType,
  root,
  RootToken,
  sexp,
  Token,
  TokenType,
  arg
} from "./tokens";
import { complete, map, mapResult } from "./utils";
import { TEXT, START_TAG, END_TAG } from "./html";
import { INTERPOLATE } from "./hbs";
import { printDebug } from "./debug";

export function read(
  source: string,
  { logging }: { logging?: true }
): Result<RootToken> {
  let input = Snippet.input(source, new Logger(logging || false));

  let result = input.invoke(
    complete(
      map(many(any(INTERPOLATE, CONTENT)), tokens => {
        return ok(root(tokens, range(...tokens)));
      })
    ),
    input
  );

  if (logging) {
    printDebug();
  }

  return mapResult(result, ([, token]) => ok(token));
}

export const CONTENT = any(END_TAG, START_TAG, TEXT);
