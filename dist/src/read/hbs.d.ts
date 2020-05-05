import Interpolate from "./combinators/hbs/interpolate";
import SomeNumber from "./combinators/hbs/number";
import Sexp from "./combinators/hbs/sexp";
import SpacedTokens from "./combinators/hbs/spaced-tokens";
import SomeString from "./combinators/hbs/string";
export declare const WS: import("./combinators/types").CombinatorType<import("./tokens").WSToken>;
export declare const STRING: SomeString;
export declare const NUMBER: SomeNumber;
export declare const SEXP: Sexp;
export declare const EQ: import("./combinators/types").CombinatorType<import("./tokens").EqToken>;
export declare const NAMED: import("./combinators/seq").default<[import("./tokens").IdentifierToken, import("./tokens").EqToken, import("./tokens").StringToken | import("./tokens").NumberToken | import("./tokens").SexpToken | import("./tokens").PresentTokens]>;
export declare const SPACED_TOKENS: SpacedTokens;
export declare const INTERPOLATE: Interpolate;
export declare const EXPRESSION: import("./combinators/any").default<[import("./tokens").SexpToken, import("./tokens").PresentTokens, import("./tokens").StringToken, import("./tokens").NumberToken]>;
//# sourceMappingURL=hbs.d.ts.map