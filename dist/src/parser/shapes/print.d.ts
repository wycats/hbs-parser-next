import type { Arrow } from "./core-operations";
export declare type PrintedAST = string | [string, PrintedAST[]] | [string, {
    [key: string]: PrintedAST;
}];
export declare function printAST(arrow: Arrow<unknown, unknown>): PrintedAST;
export declare type IndentedItem = string | [string, IndentedItem[]];
export declare function toIndented(ast: PrintedAST, key?: string): IndentedItem;
//# sourceMappingURL=print.d.ts.map