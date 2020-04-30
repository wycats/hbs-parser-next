import { BaseResult as Result } from "hbs-parser-next";
import type * as qunit from "qunit";
export declare class MathParserTest {
    assert: qunit.Assert;
    private evaluator;
    parser: Parser;
    plus(): void;
    paren(): void;
    private assertInvoke;
    private invoke;
}
declare class Parser {
    private source;
    private pos;
    constructor(source: string, pos?: number);
    tryMatch(pattern: RegExp | string): Result<string>;
    match(pattern: RegExp | string): string | null;
}
export {};
//# sourceMappingURL=parser-shape-test.d.ts.map