import type { CombinatorDebugType, CombinatorType } from "./combinators/types";
export declare type RowResult = "success" | "error" | "start";
export declare type RowStyle = {
    result: RowResult;
    kind: CombinatorDebugType;
};
export declare type TableRow = {
    style: RowStyle;
    data: [string, string, string, string];
};
export declare function row({ result, arrow, combinator, context, }: {
    result: RowResult;
    arrow: string;
    combinator: CombinatorType;
    context?: string;
}, a: any, b: string): void;
export declare function snippetStyle(style: RowStyle): "color: #333" | "color: green" | "color: red";
export declare function armStyle(style: RowStyle): "color: #333" | "color: green" | "color: red" | "color: #bbb";
export declare function printDebug(): void;
export declare function indent(): void;
export declare function outdent(): void;
export declare function indentWS(): string;
//# sourceMappingURL=debug.d.ts.map