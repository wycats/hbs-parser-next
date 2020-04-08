import { Result } from "../snippet";
import { RootToken, Token } from "./tokens";
import type { CombinatorType } from "./combinators/types";
export declare function read(source: string, { logging }: {
    logging?: true;
}): Result<RootToken>;
export declare const TOP_LEVEL: CombinatorType<Token>;
export declare const CONTENT: import("./combinators/any").default<[import("./tokens").CommentToken, import("./tokens").EndTagToken, import("./tokens").StartTagToken, import("./tokens").TextToken]>;
//# sourceMappingURL=read.d.ts.map