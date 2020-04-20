import type { Debuggable, Logger } from "./read/logger";
import type { SourceSpan } from "./span";
import type { CombinatorType } from "./read/combinators/types";
export declare class Snippet {
    readonly source: string;
    readonly offset: number;
    readonly length: number;
    readonly logger: Logger;
    static input(source: string, logger: Logger): Snippet;
    constructor(source: string, offset: number, length: number, logger: Logger);
    invoke<T extends Debuggable>(combinator: CombinatorType<T>, options?: {
        forceTransparent?: boolean;
        context?: string;
        optional?: true;
    }): Result<[Snippet, T]>;
    eq(other: Snippet): boolean;
    forSpan(span: SourceSpan): Snippet;
    fmt(): string;
    debugRest(): string;
    slice(chars: number): Snippet;
    get sliceRest(): string;
    get rest(): Snippet;
    isEOF(): boolean;
    isMatch(chars: string): boolean;
    extend(count?: number): Snippet;
    get span(): SourceSpan;
    get fragment(): string;
    get restLength(): number;
}
export interface Ok<T> {
    kind: "ok";
    value: T;
}
export declare function ok<T>(value: T): Ok<T>;
export interface Err {
    kind: "err";
    snippet: Snippet;
    reason: string;
    fatal?: true;
}
export declare function err(snippet: Snippet, reason: string): Err;
export declare function fatalError(snippet: Snippet, reason: string): Err;
export declare type Result<T> = Ok<T> | Err;
//# sourceMappingURL=snippet.d.ts.map