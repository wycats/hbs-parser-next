import { ops, JSONValue } from "hbs-parser-next";
import type * as qunit from "qunit";
export declare class CustomArray<T> extends Array<T> implements ops.Concattable, ops.Reducable<T> {
    constructor(...args: ConstructorParameters<typeof Array>);
    breakableReduce<Output>(callback: (accum: Output, item: T) => IteratorResult<Output>, init: Output): Output;
    zero<U>(): CustomArray<U>;
    merge(other: this): void;
}
export declare function flatIncrementTrace(input: number, out: number[]): StringTrace;
export declare class ArrowEvaluationTest {
    private evaluator;
    private invoke;
    pure(assert: qunit.Assert): void;
    zip(assert: qunit.Assert): void;
    pipeline(assert: qunit.Assert): void;
    merge(assert: qunit.Assert): void;
    mergeAndThen(assert: qunit.Assert): void;
}
declare type StringTraceTuple = [string, StringTrace[]];
declare type StringTrace = string | StringTraceTuple;
export declare function formatJSON(input: unknown): string;
export declare class StatefulArrowEvaluationTest {
    private evaluator;
    private tracer;
    assert: qunit.Assert;
    assertInvoke<T extends JSONValue | undefined | void, U extends JSONValue | undefined | void>(arrow: ops.Arrow<T, U>, input: T, expectedOutput: U, ...expectedTraceRecords: StringTrace[]): void;
    private invoke;
    pure(): void;
    zip(): void;
    pipeline(): void;
    merge(): void;
    mergeAndThen(): void;
    iterate(): void;
    repeat(): void;
}
export {};
//# sourceMappingURL=shape-test.d.ts.map