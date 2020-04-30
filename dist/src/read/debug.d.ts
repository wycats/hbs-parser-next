import type { CombinatorDebugType, CombinatorType } from "./combinators/types";
import type { Debuggable } from "./logger";
import { Result, Snippet } from "../snippet";
import type { Token, RootToken } from "./tokens";
export declare type RowResult = "success" | "error" | "start";
export declare type RowStyle = {
    result: RowResult;
    kind: CombinatorDebugType;
};
export declare type TableRow = {
    style: RowStyle;
    data: [string, string, string, string];
};
export interface StateRow {
    combinator: CombinatorType;
    preSnippet: Snippet;
    optional: boolean;
    output?: Result<[Snippet, Debuggable]>;
    children: StateRow[];
}
export declare function preInvoke({ combinator, snippet, optional, }: {
    combinator: CombinatorType;
    snippet: Snippet;
    optional: boolean;
}): void;
export declare function postInvoke(result: Result<[Snippet, Debuggable]>): void;
export declare function outputStyle({ output, optional }: StateRow, weight: string): string;
export declare function outputString(output: Result<[Snippet, Debuggable]> | undefined): string;
export declare function afterSnippet(output: Result<[Snippet, Debuggable]> | undefined): Snippet;
export declare function trunc(snippet: Snippet): string;
export declare function truncString(snippet: string, length?: number): string;
export declare function getTrace(): StateRow;
export declare function printTrace(indent?: number, nestedError?: number, parentStatus?: "success" | "error" | "optional" | undefined, row?: StateRow | undefined): void;
export declare function indent(): void;
export declare function outdent(): void;
export declare function indentWS(): string;
export declare function formatDebuggable(debuggable: Debuggable): string;
export declare function debugFormatToken(token: Token | RootToken): string;
//# sourceMappingURL=debug.d.ts.map