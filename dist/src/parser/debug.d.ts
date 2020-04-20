import type { Token, RootToken } from "../read/tokens";
import type { Shape } from "./shape";
export interface ParseTrace {
    shape: Shape<unknown> | {
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
    preInvoke(shape: Shape<unknown> | {
        desc: string;
        isLeaf: boolean;
    }, token: Token | undefined): void;
    postInvoke(shape: Shape<unknown> | {
        desc: string;
    }, result: unknown, postToken: Token | undefined): void;
    postInvokeFailure(shape: Shape<unknown> | {
        desc: string;
    }, reason: "ignored" | "optional"): void;
    private get last();
}
//# sourceMappingURL=debug.d.ts.map