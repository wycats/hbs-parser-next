import { ok, Snippet } from "../snippet";
import { range } from "../span";
import { combinator } from "./combinator";
import { any, maybe, pattern, seq, tag } from "./combinators";
import Block from "./combinators/hbs/block";
import Interpolate from "./combinators/hbs/interpolate";
import SpacedTokens from "./combinators/hbs/spaced-tokens";
import SomeString from "./combinators/hbs/string";
import SomeToken from "./combinators/hbs/token";
import type { CombinatorType } from "./combinators/types";
import Wrap from "./combinators/wrap";
import type { Debuggable } from "./logger";
import {
  arg,
  LeafTokenMap,
  numberToken,
  PresentTokens,
  sexp,
  Token,
  TokenType,
} from "./tokens";
import { map } from "./utils";

export const token = <T extends keyof LeafTokenMap>(
  c: CombinatorType<Snippet>,
  type: T
) => new SomeToken(c, type);

export const wrap = <T extends Debuggable>(c: CombinatorType<T>) => new Wrap(c);

export const WS = token(
  pattern(/^[\u0009\u000A\u000C\u0020]+/u, "WS"),
  TokenType.WS
);

export const STRING = new SomeString();

export const NUMBER = seq(
  "NUMBER",
  maybe(tag("-")),
  pattern(/^[0-9]+/, "digits"),
  maybe(
    map(seq("decimal", tag("."), pattern(/^[0-9]+/, "digits")), ([, tail]) =>
      ok(tail)
    )
  )
).map(([negative, head, tail]) =>
  ok(
    numberToken(
      {
        head: head.span,
        tail: tail ? tail.span : null,
        negative: negative ? negative.span : null,
      },
      range(negative, head, tail ? tail : null)
    )
  )
);

export const SEXP = combinator(() =>
  seq("SEXP", tag("("), SPACED_TOKENS, tag(")")).map(([open, path, close]) =>
    ok(sexp(path, range(open, close)))
  )
);

export const NAMED = combinator(() => seq("NAMED", ID, EQ, EXPRESSION));

export const SIMPLE_PATH: CombinatorType<PresentTokens> = {
  name: "PATH",
  invoke(input) {
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
  },
};

export const SPACED_TOKENS = new SpacedTokens();
export const BLOCK = new Block();
export const INTERPOLATE = new Interpolate();

const ID_SNIPPET: CombinatorType<Snippet> = pattern(
  /^\p{ID_Start}[\p{ID_Continue}-]*/u,
  "ID_SNIPPET"
);

export const ID = token(ID_SNIPPET, TokenType.Identifier);
export const DOT = token(tag("."), TokenType.Dot);
export const EQ = token(tag("="), TokenType.Eq);

const ARG: CombinatorType<Token> = map(
  seq("@id", tag("@"), ID_SNIPPET),
  ([at, id]) => ok(arg(range(at, id)))
);

export const EXPRESSION = any("EXPRESSION", SEXP, SIMPLE_PATH, STRING, NUMBER);

export const SIMPLE_HEAD = any("HEAD", ARG, ID);

// TODO: Allow `[]` or string members
export const MEMBER = ID;
