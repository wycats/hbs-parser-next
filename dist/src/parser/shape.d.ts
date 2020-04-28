import type { Token, TokenType, TokenMap } from "../read/tokens";
import TokensIterator, { ITERATOR_SOURCE } from "./tokens-iterator";
import { FORMAT, Formatted, SNAPSHOT, Formattable, RawFormattable } from "../debug";
export declare const EXPAND: unique symbol;
export declare const RESULT_KIND: unique symbol;
export declare type ResultValue<T extends ParseResult<unknown>> = T extends ParseResult<infer R> ? R : never;
export declare function parseOk<T>(value: T): ParseResult<T>;
export declare function parseErr<T>(token: Token | "EOF" | "unknown", reason: ErrorReason): ParseResult<T>;
export declare function fatalError<T>(token: Token, reason: ErrorReason): ParseResult<T>;
export interface Ok<T> extends RawFormattable {
    [RESULT_KIND]: "ok";
    [FORMAT]: () => Formatted;
    [SNAPSHOT]: () => Formattable;
    value: T;
}
export declare function ok<T>(value: T): Result<T>;
export interface ParseOk<T> extends Ok<T> {
    [RESULT_KIND]: "ok";
    kind: "ok";
    value: T;
}
export declare type ErrorReason = {
    type: "rejected";
    token: Token | "EOF";
} | {
    type: "unexpected-eof";
} | {
    type: "mismatch";
    expected: TokenType | "EOF";
    actual: Token | "EOF";
} | {
    type: "not";
    result: unknown;
} | {
    type: "empty";
} | {
    type: "lookahead";
    expected: TokenType | "EOF";
    actual: Token | "EOF";
};
export interface Err extends RawFormattable {
    [RESULT_KIND]: "err";
    [FORMAT]: () => Formatted;
    [SNAPSHOT]: () => Formattable;
    reason: unknown;
}
export declare function err<T>(reason: unknown): Result<T>;
export interface ParseErr extends Err {
    [RESULT_KIND]: "err";
    kind: "err";
    token: Token | "EOF" | "unknown";
    reason: ErrorReason;
    fatal: boolean;
}
export declare type Result<T> = Ok<T> | Err;
export declare type ParseResult<T> = Result<T> & (ParseOk<T> | ParseErr);
export declare function isResult<T>(input: unknown): input is Result<T>;
export declare function isOk<T>(input: Result<T>): input is Ok<T>;
export declare function isErr<T>(input: Result<T>): input is Err;
export declare function isParseErr<T>(input: ParseResult<T>): input is ParseErr;
export declare function mapResult<T, U>(result: ParseResult<T>, callback: (input: T) => ParseResult<U>): ParseResult<U>;
export declare type Thunk<T> = () => T;
export declare type Step<T, U> = (iterator: TokensIterator, prev: ParseResult<T>) => ParseResult<U>;
export declare type ArrowResult<T extends ParserArrow<any, any>> = T extends ParserArrow<unknown, infer R> ? R : never;
export declare type FallibleArrowResult<T extends ParserArrow<any, ParseResult<any>>> = T extends ParserArrow<unknown, ParseResult<infer R>> ? ParseResult<R> : never;
export declare type SourceStep<U> = (iterator: TokensIterator) => ParseResult<U>;
export declare const SOURCE: ParseResult<void>;
export interface ParserArrowCore {
    Id<T>(): ParserArrow<T, T>;
    Arr<T, U>(callback: (input: T) => U): ParserArrow<T, U>;
    recurse<T, U>(callback: () => ParserArrow<T, U>): ParserArrow<T, U>;
    zip<T, U, T2, U2>(left: ParserArrow<T, U>, right: ParserArrow<T2, U2>): ParserArrow<[T, T2], [U, U2]>;
    andThen<T, U, V>(left: ParserArrow<T, U>, arrow: ParserArrow<U, V>): ParserArrow<T, V>;
    mergeNext<T, U, V>(left: ParserArrow<T, U>, right: ParserArrow<T, V>): ParserArrow<T, [U, V]>;
    mergeAndThen<T, U, V>(left: ParserArrow<T, U>, right: ParserArrow<U, V>): ParserArrow<T, [U, V]>;
}
export interface IterateParserArrow extends ParserArrowCore {
    iterate<T, U>(left: ParserArrow<T, U>): ParserArrow<T[], U[]>;
    repeat<Pre, InnerU>(arrow: ParserArrow<Pre, ParseResult<InnerU>>): ParserArrow<Pre, InnerU[]>;
    Reduce<T, U>(callback: (list: T[]) => U): ParserArrow<T[], U>;
}
export interface ChoiceParserArrowCore extends ParserArrowCore {
    FallibleArr<T, U>(ok: (input: T) => U, err: (input: ParseErr) => U): ParserArrow<ParseResult<T>, U>;
    BothOk<Pre, Left, Right>(arrow: ParserArrow<Pre, [ParseResult<Left>, ParseResult<Right>]>): ParserArrow<Pre, ParseResult<[Left, Right]>>;
    OrElse<T, InnerU, V>(left: ParserArrow<T, ParseResult<InnerU>>, right: ParserArrow<T, ParseResult<V>>): ParserArrow<T, ParseResult<InnerU | V>>;
    fallibleInput<T, U>(arrow: ParserArrow<T, U>): ParserArrow<ParseResult<T>, ParseResult<U>>;
}
export interface IteratorParserArrowCore extends ParserArrowCore {
    Source(): ParserArrow<void, string>;
    Atomic<T, InnerU>(step: ParserArrow<T, ParseResult<InnerU>>): ParserArrow<T, ParseResult<InnerU>>;
    label<T, U>(label: string, arrow: ParserArrow<T, U>): ParserArrow<T, U>;
    parent<T>(desc: string, tokenType: TokenType, arrow: ParserArrow<void, ParseResult<T>>): ParserArrow<void, ParseResult<{
        result: T;
        token: Token;
    }>>;
    token<K extends TokenType & keyof TokenMap>(tokenType: K): ParserArrow<void, ParseResult<TokenMap[K]>>;
    lookahead(): ParserArrow<void, Token | undefined>;
    eof<T>(): ParserArrow<T, ParseResult<void>>;
}
export interface ParserArrowFullCore extends ParserArrowCore, IterateParserArrow, ChoiceParserArrowCore, IteratorParserArrowCore {
}
export interface Evaluator<S, T, U> {
    evaluate(prev: T): U;
    withState<V>(callback: (state: S) => [V, S]): V;
}
export interface ArrowState {
    [ITERATOR_SOURCE]: string;
    atomic<T>(callback: (state: this) => [this, ParseResult<T>]): [this, ParseResult<T>];
    label<T>(desc: string, callback: (state: this) => [this, T]): [this, T];
    next<T>(state: string, callback: (token: Token | undefined) => ParseResult<T>): ParseResult<T>;
    lookahead(): Token | undefined;
    parent<T>(desc: string, tokenType: TokenType, arrow: ParserArrow<void, ParseResult<T>>): ParseResult<{
        result: T;
        token: Token;
    }>;
}
export declare class ParseEvaluator<S extends ArrowState, T, U> {
    private state;
    private arrow;
    constructor(state: S, arrow: ParserArrow<T, U>);
    evaluate(prev: T): U;
    withState<V>(callback: (state: S) => [S, V]): V;
}
export declare class ParserArrowEvaluateCore implements ParserArrowFullCore {
    Id<T>(): ParserArrow<T, T>;
    evalArr<T, U>(callback: <S extends ArrowState>(state: S, prev: T) => [S, U]): ParserArrow<T, U>;
    recurse<T, U>(callback: () => ParserArrow<T, U>): ParserArrow<T, U>;
    Arr<T, U>(callback: (input: T) => U): ParserArrow<T, U>;
    zip<T, U, T2, U2>(left: ParserArrow<T, U>, right: ParserArrow<T2, U2>): ParserArrow<[T, T2], [U, U2]>;
    andThen<T, U, V>(left: ParserArrow<T, U>, right: ParserArrow<U, V>): ParserArrow<T, V>;
    mergeNext<T, U, U2>(left: ParserArrow<T, U>, right: ParserArrow<T, U2>): ParserArrow<T, [U, U2]>;
    mergeAndThen<T, U, U2>(left: ParserArrow<T, U>, right: ParserArrow<U, U2>): ParserArrow<T, [U, U2]>;
    iterate<T, U>(arrow: ParserArrow<T, U>): ParserArrow<T[], U[]>;
    repeat<Pre, InnerU>(arrow: ParserArrow<Pre, ParseResult<InnerU>>): ParserArrow<Pre, InnerU[]>;
    Reduce<T2, U2>(callback: (list: T2[]) => U2): ParserArrow<T2[], U2>;
    FallibleArr<T, U>(ok: (input: T) => U, err: (input: ParseErr) => U): ParserArrow<ParseResult<T>, U>;
    BothOk<Pre, Left, Right>(arrow: ParserArrow<Pre, [ParseResult<Left>, ParseResult<Right>]>): ParserArrow<Pre, ParseResult<[Left, Right]>>;
    OrElse<T, V, InnerU>(left: ParserArrow<T, ParseResult<InnerU>>, right: ParserArrow<T, ParseResult<V>>): ParserArrow<T, ParseResult<V | InnerU>>;
    fallibleInput<T, U>(arrow: ParserArrow<T, U>): ParserArrow<ParseResult<T>, ParseResult<U>>;
    Source(): ParserArrow<void, string>;
    Atomic<T, InnerU>(arrow: ParserArrow<T, ParseResult<InnerU>>): ParserArrow<T, ParseResult<InnerU>>;
    label<T, U>(label: string, arrow: ParserArrow<T, U>): ParserArrow<T, U>;
    parent<T>(desc: string, tokenType: TokenType, arrow: ParserArrow<void, ParseResult<T>>): ParserArrow<void, ParseResult<{
        result: T;
        token: Token;
    }>>;
    token<K extends TokenType & keyof TokenMap>(tokenType: K): ParserArrow<void, ParseResult<TokenMap[K]>>;
    lookahead(): ParserArrow<void, Token | undefined>;
    eof<T>(): ParserArrow<T, ParseResult<void>>;
}
export declare function token<K extends TokenType & keyof TokenMap>(type: K): ParserArrow<void, ParseResult<TokenMap[K]>>;
export declare function source(): ParserArrow<void, ParseResult<string>>;
export declare function recurse<T>(callback: () => ParserArrow<void, T>): ParserArrow<void, T>;
export declare class ParserArrow<T, U> {
    private core;
    private start;
    static start<T, U = T>(): ParserArrow<T, U>;
    constructor(core: ParserArrowFullCore, start: <S extends ArrowState>(state: S, prev: T) => [S, U]);
    evaluate<S extends ArrowState>(evaluator: ParseEvaluator<S, T, U>, prev: T): U;
    invoke<S extends ArrowState>(state: S, prev: T): [S, U];
    iterate(): ParserArrow<T[], U[]>;
    lift<T2, U2>(callback: (input: T2) => U2): ParserArrow<T2, U2>;
    liftFallible<T2, U2>(ifOk: (ok: T2) => U2, ifErr: (err: ParseErr) => U2): ParserArrow<ParseResult<T2>, U2>;
    repeat<InnerU>(this: ParserArrow<void, ParseResult<InnerU>>): ParserArrow<void, InnerU[]>;
    bothOk<Pre, Left, Right>(this: ParserArrow<Pre, [ParseResult<Left>, ParseResult<Right>]>): ParserArrow<Pre, ParseResult<[Left, Right]>>;
    andThen<V>(arrow: ParserArrow<U, V>): ParserArrow<T, V>;
    map<V>(callback: (input: U) => V): ParserArrow<T, V>;
    fallible(): ParserArrow<T, ParseResult<U>>;
    orElse<V, InnerU>(this: ParserArrow<T, ParseResult<InnerU>>, arrow: ParserArrow<T, ParseResult<V>>): ParserArrow<T, ParseResult<InnerU | V>>;
    checkNext<InnerU, V>(this: ParserArrow<T, ParseResult<InnerU>>, arrow: ParserArrow<T, ParseResult<V>>): ParserArrow<T, ParseResult<InnerU>>;
    andCheck<InnerU, V>(this: ParserArrow<T, ParseResult<InnerU>>, arrow: ParserArrow<ParseResult<InnerU>, ParseResult<V>>): ParserArrow<T, ParseResult<InnerU>>;
    ifOk<V, InnerU>(this: ParserArrow<T, ParseResult<InnerU>>, callback: (input: InnerU) => V): ParserArrow<T, ParseResult<V>>;
    mergeNext<InnerU, V>(this: ParserArrow<T, ParseResult<InnerU>>, arrow: ParserArrow<T, ParseResult<V>>): ParserArrow<T, ParseResult<[InnerU, V]>>;
    extend<K extends string, InnerU, V>(this: ParserArrow<T, ParseResult<InnerU>>, key: K, arrow: ParserArrow<T, ParseResult<V>>): ParserArrow<T, ParseResult<InnerU & ResultObject<K, V>>>;
    or<V, InnerU>(this: ParserArrow<T, ParseResult<InnerU>>, value: V): ParserArrow<T, InnerU | V>;
    named<K extends string, InnerU>(this: ParserArrow<T, ParseResult<InnerU>>, name: K): ParserArrow<T, ParseResult<ResultObject<K, InnerU>>>;
    present<Pre>(this: ParserArrow<Pre, T[]>): ParserArrow<Pre, ParseResult<void>>;
    not<InnerU>(this: ParserArrow<T, ParseResult<InnerU>>): ParserArrow<T, ParseResult<void>>;
    source(): ParserArrow<void, string>;
    debug(): ParserArrow<T, U>;
    atomic<InnerU>(this: ParserArrow<T, ParseResult<InnerU>>): ParserArrow<T, ParseResult<InnerU>>;
    token<K extends TokenType & keyof TokenMap>(type: K): ParserArrow<void, ParseResult<TokenMap[K]>>;
    eof(): ParserArrow<T, ParseResult<void>>;
    parent<T>(desc: string, tokenType: TokenType, arrow: ParserArrow<void, ParseResult<T>>): ParserArrow<void, ParseResult<{
        result: T;
        token: Token;
    }>>;
    label(label: string): ParserArrow<T, U>;
    lookahead(): ParserArrow<void, Token | undefined>;
}
export declare type Inner<T> = T extends ParseResult<infer R> ? R : never;
export declare type ResultObject<K extends string, T> = {
    [P in K]: T;
};
//# sourceMappingURL=shape.d.ts.map