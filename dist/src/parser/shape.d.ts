import type { default as TokensIterator, PeekedToken } from "./tokens-iterator";
export interface FallibleShape<T> {
    expandFallible(iterator: TokensIterator): Result<T>;
}
export interface InfallibleShape<T> {
    expandInfallible(iterator: TokensIterator): T;
}
export interface Ok<T> {
    kind: "ok";
    value: T;
}
export declare function ok<T>(value: T): Ok<T>;
export interface Err {
    kind: "err";
    token: PeekedToken;
    reason: string;
    fatal?: true;
}
export declare function err(token: PeekedToken, reason: string): Err;
export declare function fatalError(token: PeekedToken, reason: string): Err;
export declare type Result<T> = Ok<T> | Err;
//# sourceMappingURL=shape.d.ts.map