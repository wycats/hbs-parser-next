import { combinator } from "./combinator";
import { any, pattern, seq, tag } from "./combinators";
import { ID, token } from "./combinators/core";
// eslint-disable-next-line import/no-cycle
import Interpolate from "./combinators/hbs/interpolate";
import SomeNumber from "./combinators/hbs/number";
// eslint-disable-next-line import/no-cycle
import Sexp from "./combinators/hbs/sexp";
import { SIMPLE_PATH } from "./combinators/hbs/simple-path";
// eslint-disable-next-line import/no-cycle
import SpacedTokens from "./combinators/hbs/spaced-tokens";
import SomeString from "./combinators/hbs/string";
import "./token-enum";
export const WS = combinator(() => token(pattern(/^[\u0009\u000A\u000C\u0020]+/u, "WS"), "WS" /* WS */));
export const STRING = combinator(() => new SomeString());
export const NUMBER = combinator(() => new SomeNumber());
export const SEXP = combinator(() => new Sexp());
export const EQ = combinator(() => token(tag("="), "Eq" /* Eq */));
export const NAMED = combinator(() => seq("NAMED", ID, EQ, EXPRESSION));
export const SPACED_TOKENS = combinator(() => new SpacedTokens());
export const INTERPOLATE = combinator(() => new Interpolate());
export const EXPRESSION = combinator(() => any("EXPRESSION", SEXP, SIMPLE_PATH, STRING, NUMBER));
