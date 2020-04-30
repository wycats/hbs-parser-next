import type { ParserArrow, ParseResult } from "../../shape";
export declare type UnionResult<T extends ReadonlyArray<ParserArrow<void, ParseResult<unknown>>>> = {
    [P in keyof T]: P extends number ? T[P] extends ParserArrow<unknown, ParseResult<infer R>> ? R : never : never;
}[number];
export declare function anyArrow<T extends ReadonlyArray<ParserArrow<void, ParseResult<unknown>>>>(sequences: T): ParserArrow<void, ParseResult<UnionResult<T>>>;
//# sourceMappingURL=any.d.ts.map