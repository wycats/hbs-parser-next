import { ok, Result, Snippet } from "../snippet";
import { range } from "../span";
import { combinator } from "./combinator";
import { any } from "./combinators";
import { Logger } from "./logger";
import { printTrace, StateRow, getTrace } from "./debug";
import { COMMENT, END_TAG, START_TAG, TEXT } from "./html";
import { many } from "./multi";
import { root, RootToken, Token } from "./tokens";
import { complete, map, mapResult } from "./utils";
import type { CombinatorType } from "./combinators/types";
import { BLOCK, INTERPOLATE } from "./hbs";

export const enum LoggingType {
  Return = "Return",
  Print = "Print",
  None = "Off",
}
export const CONTENT = combinator(() =>
  any("CONTENT", COMMENT, END_TAG, START_TAG, TEXT)
);

export const TOP_LEVEL: CombinatorType<Token> = {
  name: "TOP_LEVEL",
  invoke(input) {
    return input.invoke(any("top level", BLOCK, INTERPOLATE, CONTENT));
  },
};

export function read(
  source: string,
  options: undefined | { logging: LoggingType.None | LoggingType.Print }
): { root: Result<RootToken> };
export function read(
  source: string,
  options: { logging: LoggingType.Return }
): { root: Result<RootToken>; trace: StateRow };
export function read(
  source: string,
  { logging }: { logging?: LoggingType } = {}
): { root: Result<RootToken>; trace?: StateRow } {
  try {
    let input = Snippet.input(
      source,
      new Logger(
        logging === LoggingType.Return || logging === LoggingType.Print
      )
    );

    let result = input.invoke(
      complete(
        map(many(TOP_LEVEL), tokens => {
          return ok(root(tokens, range(...tokens)));
        })
      )
    );

    if (logging === LoggingType.Return) {
      return {
        root: mapResult(result, ([, token]) => ok(token)),
        trace: getTrace(),
      };
    } else {
      return { root: mapResult(result, ([, token]) => ok(token)) };
    }
  } finally {
    if (logging === LoggingType.Print) {
      printTrace();
    }
  }
}
