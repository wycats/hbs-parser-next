import type { Token, RootToken } from "../read/tokens";
export interface ParseTrace {
    shape: {
        desc: string;
    };
    preToken: Token | RootToken | undefined;
    postToken: Token | undefined;
    result: unknown;
    failure?: "ignored" | "optional" | "rollback";
    children?: ParseTrace[];
}
export declare class ParseTracer {
    private stack;
    constructor(token: Token | RootToken);
    print(tokens: readonly Token[], source: string): void;
    get trace(): ParseTrace;
    begin(preToken: Token): void;
    commit(): void;
    rollback(): void;
    preInvoke(shape: {
        desc: string;
        isLeaf: boolean;
    }, token: Token | undefined): void;
    postInvoke(shape: {
        desc: string;
    }, result: unknown, postToken: Token | undefined): void;
    private stackCheck;
    postInvokeFailure(shape: {
        desc: string;
    }, reason: "ignored" | "optional"): void;
    private get last();
}
//# sourceMappingURL=debug.d.ts.map