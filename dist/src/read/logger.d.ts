import { Result, Snippet } from "../snippet";
import { Token, LeafToken, RootToken } from "./tokens";
import type { CombinatorType, CombinatorDebugType } from "./combinators/types";
export declare type Debuggable = string | null | Snippet | Snippet[] | Token | Token[] | LeafToken | RootToken | Debuggable[];
export declare class Logger {
    private enableLogging;
    constructor(enableLogging: boolean);
    invoke<T extends Debuggable>(c: CombinatorType<T>, input: Snippet, { forceTransparent, context, }?: {
        forceTransparent?: boolean;
        context?: string;
    }): Result<[Snippet, T]>;
}
export declare function combinatorDebugType(c: CombinatorType): CombinatorDebugType;
export declare function isTransparent(c: CombinatorType): boolean;
export declare function formatDebuggable(debuggable: Debuggable): string;
//# sourceMappingURL=logger.d.ts.map