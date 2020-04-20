import type { Token, TokenType, TokenMap } from "../read/tokens";
import type { ParseTracer } from "./debug";
import { Result, Sequence, Shape, ErrSequence, ResultObject, OkSequence, Step, SourceStep } from "./shape";
import type { ShapeConstructor } from "./shapes/abstract";
export declare const TOKENS: unique symbol;
export declare const CONTEXT: unique symbol;
export declare const POS: unique symbol;
export declare const SOURCE: unique symbol;
export declare class PeekedToken {
    #private;
    private iterator;
    private desc;
    private pos;
    constructor(iterator: TokensIterator, desc: string, pos: number);
    get isEOF(): boolean;
    get finished(): boolean;
    get rejected(): boolean;
    commit(): Token;
    silentReject(): PeekedToken & {
        rejected: true;
    };
    reject(): PeekedToken & {
        rejected: true;
    };
    ignore(): null;
    optional(): null;
    get token(): Token;
}
export interface ParseContext {
    source: string;
    tracer: ParseTracer;
}
export interface CombinatorTokensIterator {
    readonly [SOURCE]: string;
    start<T>(step: (iterator: CombinatorTokensIterator) => T): T;
    peek(desc: string, options?: {
        isLeaf: boolean;
    }): PeekedToken;
    err<T>(desc: string, reason?: string): ErrSequence<T>;
    ok<T>(value: T): OkSequence<T>;
    atomic<T>(callback: (iterator: CombinatorTokensIterator) => Result<T>): Sequence<T>;
    expandFallible<T>(shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>): Sequence<T>;
    expandInfallible<T>(shapeOrClass: ShapeConstructor<T> | Shape<T>): T;
    withChildTokens(tokens: readonly Token[]): CombinatorTokensIterator;
}
export default class TokensIterator implements CombinatorTokensIterator {
    readonly [TOKENS]: readonly Token[];
    readonly [CONTEXT]: ParseContext;
    [POS]: number;
    protected activeTransaction: TokensIteratorTransaction | null;
    constructor(tokens: readonly Token[], context: ParseContext, pos?: number);
    get [SOURCE](): string;
    start<T>(step: (iterator: CombinatorTokensIterator) => T): T;
    err<T>(desc: string, reason?: string): ErrSequence<T>;
    ok<T>(value: T): OkSequence<T>;
    peek(desc: string, options?: {
        isLeaf: boolean;
    }): PeekedToken;
    commitPeek(desc: string, pos: number): Token;
    rejectPeek(desc: string, pos: number, peeked: PeekedToken & {
        rejected: true;
    }): void;
    peekFailure(desc: string, reason: "ignored" | "optional"): void;
    silentPeek(desc: string): PeekedToken;
    expandFallible<T>(shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>): Sequence<T>;
    expandInfallible<T>(shapeOrClass: {
        new (): Shape<T>;
    } | Shape<T>): T;
    private expand;
    get source(): string;
    withChildTokens(tokens: readonly Token[]): TokensIterator;
    atomic<T>(callback: (iterator: TokensIterator) => Result<T>): Sequence<T>;
    begin(): TokensIteratorTransaction;
    commitTransaction(pos: number, transaction: TokensIteratorTransaction): void;
    rollbackTransaction(pos: number, transaction: TokensIteratorTransaction): void;
    processInner<T>(tokens: readonly Token[], callback: (t: TokensIterator) => Result<T>): Result<T>;
}
export declare function start<T>(step: (iterator: CombinatorTokensIterator) => T): (iterator: CombinatorTokensIterator) => T;
export declare function atomic<T>(callback: (iterator: CombinatorTokensIterator) => Result<T>): (iterator: CombinatorTokensIterator) => Sequence<T>;
export declare function inner<T>(tokens: readonly Token[], callback: (t: CombinatorTokensIterator) => Result<T>): (iterator: CombinatorTokensIterator) => Result<T>;
export declare function assertNotNext(desc: string, callback: (token: Token) => boolean): (iterator: CombinatorTokensIterator) => Sequence<null>;
export declare function legacyPresent<T>(desc: string): (out: T[], iterator: CombinatorTokensIterator) => Result<T[]>;
export declare function present<T>(desc: string): Step<T[], T[]>;
export declare function legacyRepeat<T>(callback: (iterator: CombinatorTokensIterator) => Result<T>): (iterator: CombinatorTokensIterator) => T[];
export declare function repeat<T>(callback: (iterator: CombinatorTokensIterator) => Result<T>): SourceStep<T[]>;
export declare function legacyMany<T>(Shape: ShapeConstructor<Result<T>>): (iterator: CombinatorTokensIterator) => T[];
export declare function many<T>(Shape: ShapeConstructor<Result<T>>): SourceStep<T[]>;
export declare function legacyNotEOF(): (iterator: CombinatorTokensIterator) => Sequence<null>;
export declare function notEOF(): SourceStep<null>;
export declare function consumeParent<T>(options: string | {
    desc: string;
    isLeaf: boolean;
}, callback: (token: Token) => Result<T> | void): (iterator: CombinatorTokensIterator) => Sequence<{
    result: T;
    token: Token;
}>;
export declare function legacyConsumeToken<K extends TokenType & keyof TokenMap, N extends string>(name: N, tokenType: K): (iterator: CombinatorTokensIterator) => Sequence<ResultObject<N, TokenMap[K]>>;
export declare function legacyConsumeToken<K extends TokenType & keyof TokenMap>(tokenType: K): (iterator: CombinatorTokensIterator) => Sequence<TokenMap[K]>;
export declare function consumeToken<K extends TokenType & keyof TokenMap, N extends string>(name: N, tokenType: K): SourceStep<ResultObject<N, TokenMap[K]>>;
export declare function consumeToken<K extends TokenType & keyof TokenMap>(tokenType: K): SourceStep<TokenMap[K]>;
export declare function legacySource(): (iterator: CombinatorTokensIterator) => Sequence<string>;
export declare function source(): SourceStep<string>;
export declare function legacyConsume<T>(options: string | {
    desc: string;
    isLeaf: boolean;
}, callback: (token: Token) => T | undefined): (iterator: CombinatorTokensIterator) => Sequence<T>;
export declare function consume<T>(options: string | {
    desc: string;
    isLeaf: boolean;
}, callback: (token: Token) => T | undefined): SourceStep<T>;
export declare function legacyExpand<T>(shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>): (iterator: CombinatorTokensIterator) => Sequence<T>;
export declare function expand<T>(shapeOrClass: ShapeConstructor<Result<T>> | Shape<Result<T>>): Step<void, T>;
export declare function expandInfallible<T>(shapeOrClass: {
    new (): Shape<T>;
} | Shape<T>): (iterator: CombinatorTokensIterator) => T;
export declare class TokensIteratorTransaction extends TokensIterator {
    #private;
    private transactionParent;
    constructor(tokens: readonly Token[], context: ParseContext, pos: number | undefined, transactionParent: TokensIterator);
    get isActive(): boolean;
    begin(): TokensIteratorTransaction;
    commit(): void;
    rollback(): void;
    commitTransaction(pos: number, transaction: TokensIteratorTransaction): void;
    rollbackTransaction(pos: number, transaction: TokensIteratorTransaction): void;
    finallyRollback(): void;
}
//# sourceMappingURL=tokens-iterator.d.ts.map