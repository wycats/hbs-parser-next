import Id from "../combinators/hbs/id";
import { TokenType } from "../token-enum";
import type { CombinatorType } from "./types";
import type { LeafTokenMap } from "../tokens";
import type { Snippet } from "../../snippet";
import Wrap from "./wrap";
import type { Debuggable } from "../logger";
export declare const token: <T extends TokenType.Identifier | TokenType.Dot | TokenType.Eq | TokenType.WS | TokenType.Text | TokenType.AttributeName>(c: CombinatorType<Snippet>, type: T) => CombinatorType<LeafTokenMap[T]>;
export declare const ID_SNIPPET: Id;
export declare const ID: CombinatorType<import("../tokens").IdentifierToken>;
export declare const DOT: CombinatorType<import("../tokens").DotToken>;
export declare const wrap: <T extends Debuggable>(c: CombinatorType<T>) => Wrap<T>;
//# sourceMappingURL=core.d.ts.map