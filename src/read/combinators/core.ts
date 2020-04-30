import Id from "../combinators/hbs/id";
import { TokenType } from "../token-enum";
import type { CombinatorType } from "./types";
import { tag } from "../combinators";
import type { LeafTokenMap } from "../tokens";
import type { Snippet } from "../../snippet";
import SomeToken from "./hbs/token";
import Wrap from "./wrap";
import type { Debuggable } from "../logger";
import { combinator } from "../combinator";

export const token = <T extends keyof LeafTokenMap>(
  c: CombinatorType<Snippet>,
  type: T
): CombinatorType<LeafTokenMap[T]> => new SomeToken(c, type);

export const ID_SNIPPET = combinator(() => new Id());
export const ID = combinator(() => token(ID_SNIPPET, TokenType.Identifier));

export const DOT = combinator(() => token(tag("."), TokenType.Dot));

export const wrap = <T extends Debuggable>(c: CombinatorType<T>): Wrap<T> =>
  new Wrap(c);
