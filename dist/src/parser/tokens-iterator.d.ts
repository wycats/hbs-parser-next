import type { Token } from "../read/tokens";
export declare class PeekedToken {
    private iterator;
    private pos;
    private committed;
    constructor(iterator: TokensIterator, pos: number);
    get isEOF(): boolean;
    commit(): void;
    get token(): Token;
}
declare const TOKENS: unique symbol;
export interface ParseContext {
    source: string;
}
export default class TokensIterator {
    private context;
    private pos;
    readonly [TOKENS]: readonly Token[];
    constructor(tokens: readonly Token[], context: ParseContext, pos?: number);
    peek(): PeekedToken;
    get source(): string;
    child(tokens: readonly Token[]): TokensIterator;
    commit(pos: number): void;
}
export {};
//# sourceMappingURL=tokens-iterator.d.ts.map