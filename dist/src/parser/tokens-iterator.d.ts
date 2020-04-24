import type { ParentToken, Token } from "../read/tokens";
import type { ParseTracer } from "./debug";
import { ArrowState, ParserArrow, ParseResult } from "./shape";
export declare const TOKENS: unique symbol;
export declare const CONTEXT: unique symbol;
export declare const POS: unique symbol;
export declare const ITERATOR_SOURCE: unique symbol;
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
    get token(): Token | undefined;
}
export interface ParseContext {
    source: string;
    tracer: ParseTracer;
}
export declare class TokensIteratorState implements ArrowState {
    private iterator;
    constructor(iterator: TokensIterator);
    get [ITERATOR_SOURCE](): string;
    lookahead(): Token | undefined;
    atomic<T>(callback: (state: this) => [this, ParseResult<T>]): [this, ParseResult<T>];
    label<T>(desc: string, callback: (state: this) => [this, T]): [this, T];
    next<T>(desc: string, callback: (token: Token | undefined) => ParseResult<T>): ParseResult<T>;
    parent<T, K extends ParentToken["type"]>(desc: string, tokenType: K, arrow: ParserArrow<void, ParseResult<T>>): ParseResult<{
        result: T;
        token: Token;
    }>;
}
export default class TokensIterator {
    readonly [TOKENS]: readonly Token[];
    readonly [CONTEXT]: ParseContext;
    [POS]: number;
    protected activeTransaction: TokensIteratorTransaction | null;
    constructor(tokens: readonly Token[], context: ParseContext, pos?: number);
    get arrowState(): TokensIteratorState;
    get [ITERATOR_SOURCE](): string;
    assertNotEOF(): ParseResult<void>;
    start<T>(step: (iterator: TokensIterator) => T): T;
    ok<T>(value: T): ParseResult<T>;
    label<T>(desc: string, callback: (iterator: TokensIterator) => T): T;
    peek(desc: string, options?: {
        isLeaf: boolean;
    }): PeekedToken;
    commitPeek(desc: string, pos: number): Token;
    rejectPeek(desc: string, pos: number, peeked: PeekedToken & {
        rejected: true;
    }): void;
    peekFailure(desc: string, reason: "ignored" | "optional"): void;
    silentPeek(desc: string): PeekedToken;
    get source(): string;
    withChildTokens(tokens: readonly Token[]): TokensIterator;
    atomic<T>(callback: (iterator: TokensIterator) => ParseResult<T>): ParseResult<T>;
    begin(): TokensIteratorTransaction;
    commitTransaction(pos: number, transaction: TokensIteratorTransaction): void;
    rollbackTransaction(pos: number, transaction: TokensIteratorTransaction): void;
    processInner<T>(tokens: readonly Token[], callback: (t: TokensIterator) => ParseResult<T>): ParseResult<T>;
    processChildren<T, K extends ParentToken["type"]>(desc: string, tokenType: K, step: (iterator: TokensIterator) => ParseResult<T>): ParseResult<{
        result: T;
        token: Token;
    }>;
    next<T>(desc: string, callback: (token: Token | undefined) => ParseResult<T>): ParseResult<T>;
}
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