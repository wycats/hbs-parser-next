import { BaseResult as Result } from "hbs-parser-next";
import type * as qunit from "qunit";
import { OpName, StringTrace } from "./tracer";
export declare class MathParserTest {
    assert: qunit.Assert;
    private evaluator;
    parser: Parser;
    plus(): void;
    paren(): void;
    private assertInvoke;
    private invoke;
}
export declare function traceStep(opName: OpName, input: unknown, output: unknown): TraceBuilder;
export declare function traceStep(callback: (builder: TraceBuilder) => TraceBuilder): TraceBuilder;
export declare function token(label: string, value: unknown): Step;
export declare function merge(head: unknown[], tail: unknown): Step;
declare type Step = {
    type: "step";
    name: OpName;
    input: unknown;
    output: unknown;
} | [OpName, unknown, unknown] | [OpName, unknown] | {
    type: "multiple";
    builder: TraceBuilder;
} | {
    type: "traces";
    traces: StringTrace[];
};
export declare function getState(): Step;
export declare function state(out: unknown): Step;
export declare function state(label: string, out: unknown): Step;
declare class TraceBuilder {
    private traces;
    constructor(traces?: StringTrace[]);
    addTraces(traces: StringTrace[]): this;
    step(opName: OpName, input: unknown, output: unknown): this;
    into(opName: OpName, input: unknown, output: unknown): this;
    done(): StringTrace[];
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