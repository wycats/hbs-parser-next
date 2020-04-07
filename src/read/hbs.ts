import { ok, Snippet } from "../snippet";
import { range } from "../span";
import { combinator } from "./combinator";
import { any, pattern, seq, tag } from "./combinators";
import Block from "./combinators/hbs/block";
import Interpolate from "./combinators/hbs/interpolate";
import SomeNumber from "./combinators/hbs/number";
import Sexp from "./combinators/hbs/sexp";
import SimplePath from "./combinators/hbs/simple-path";
import SpacedTokens from "./combinators/hbs/spaced-tokens";
import SomeString from "./combinators/hbs/string";
import SomeToken from "./combinators/hbs/token";
import type { CombinatorType } from "./combinators/types";
import Wrap from "./combinators/wrap";
import type { Debuggable } from "./logger";
import { arg, LeafTokenMap, Token, TokenType } from "./tokens";
import { map } from "./utils";
import Id from "./combinators/hbs/id";

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
export const NUMBER = new SomeNumber();
export const SEXP = new Sexp();

export const NAMED = combinator(() => seq("NAMED", ID, EQ, EXPRESSION));
export const SIMPLE_PATH = new SimplePath();

export const SPACED_TOKENS = new SpacedTokens();
export const BLOCK = new Block();
export const INTERPOLATE = new Interpolate();

const ID_SNIPPET = new Id();

export const ID = token(ID_SNIPPET, TokenType.Identifier);
export const DOT = token(tag("."), TokenType.Dot);
export const EQ = token(tag("="), TokenType.Eq);

export const ARG: CombinatorType<Token> = map(
  seq("@id", tag("@"), ID_SNIPPET),
  ([at, id]) => ok(arg(range(at, id)))
);

export const EXPRESSION = combinator(() =>
  any("EXPRESSION", SEXP, SIMPLE_PATH, STRING, NUMBER)
);
