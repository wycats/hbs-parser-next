import type { Err, Result, Snippet } from "hbs-parser-next";
export declare function unwrap<T>(input: Result<T>): T;
export declare function eqResult(left: Result<Snippet>, right: Result<Snippet>): void;
export declare function eqSnippet(left: Snippet, right: Snippet): void;
export declare function eqSnippets(left: Snippet[], right: Snippet[]): void;
export declare function eqError(left: Result<unknown>, right: Err): void;
export declare type ListIndentedItem = [string, IndentedItem[]];
export interface InnerIndentedItem extends ListIndentedItem {
}
export declare type IndentedItem = string | InnerIndentedItem;
export declare function printIndentedItems(nodes: IndentedItem[]): string;
export declare function module(name: string): <T extends {
    new (): object;
}>(target: T) => T;
export declare function test(target: object, name: string): void;
//# sourceMappingURL=helpers.d.ts.map