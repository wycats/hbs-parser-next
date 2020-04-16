import { Result } from "../snippet";
import { StateRow } from "./debug";
import { RootToken, Token } from "./tokens";
import type { CombinatorType } from "./combinators/types";
export declare const enum LoggingType {
    Return = "Return",
    Print = "Print",
    None = "Off"
}
export declare const CONTENT: import("./combinators/any").default<[import("./tokens").CommentToken, import("./tokens").EndTagToken, import("./tokens").StartTagToken, import("./tokens").TextToken]>;
export declare const TOP_LEVEL: CombinatorType<Token>;
export declare function read(source: string, options: undefined | {
    logging: LoggingType.None | LoggingType.Print;
}): {
    root: Result<RootToken>;
};
export declare function read(source: string, options: {
    logging: LoggingType.Return;
}): {
    root: Result<RootToken>;
    trace: StateRow;
};
//# sourceMappingURL=read.d.ts.map