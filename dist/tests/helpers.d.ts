import type { Err, Result, Snippet } from "hbs-parser-next";
export declare function unwrap<T>(input: Result<T>): T;
export declare function eqResult(left: Result<Snippet>, right: Result<Snippet>): void;
export declare function eqSnippet(left: Snippet, right: Snippet): void;
export declare function eqSnippets(left: Snippet[], right: Snippet[]): void;
export declare function eqError(left: Result<unknown>, right: Err): void;
//# sourceMappingURL=helpers.d.ts.map