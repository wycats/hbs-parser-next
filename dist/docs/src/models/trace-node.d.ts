import type { Result, Snippet, Debuggable, ReadTrace } from "hbs-parser-next";
export declare type TraceNodeOutput = Result<[Snippet, Debuggable]>;
export default class TraceNodeModel {
    private node;
    constructor(node: ReadTrace);
    get output(): TraceNodeOutput;
    get name(): string;
    get kind(): "err" | "ok" | "optional-err";
    get isExpandable(): boolean;
    get isLeaf(): boolean;
}
//# sourceMappingURL=trace-node.d.ts.map