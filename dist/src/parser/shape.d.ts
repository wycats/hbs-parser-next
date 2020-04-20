import type { Token } from "../read/tokens";
import { ShapeConstructor } from "./shapes/abstract";
import type { CombinatorTokensIterator } from "./tokens-iterator";
export declare const EXPAND: unique symbol;
export declare const RESULT_KIND: unique symbol;
export interface Shape<T> {
    readonly desc: string;
    [EXPAND](iterator: CombinatorTokensIterator): T;
}
export declare type ResultValue<T extends Result<unknown>> = T extends Result<infer R> ? R : never;
export declare type ShapeResult<T extends Shape<Result<unknown>>> = T extends Shape<Result<infer R>> ? R : T extends Shape<infer R> ? R : never;
export declare type ShapeConstructorResult<T extends ShapeConstructor<Result<unknown>>> = T extends {
    new (): Shape<Result<infer R>>;
} ? R : T extends ShapeConstructor<infer R> ? R : never;
export declare function ok<T>(value: T): Ok<T>;
export declare function err(token: Token, reason: string): Err;
export declare function fatalError(token: Token, reason: string): Err;
export interface Ok<T> {
    [RESULT_KIND]: "ok";
    kind: "ok";
    value: T;
}
export interface Err {
    [RESULT_KIND]: "err";
    kind: "err";
    token: Token;
    reason: string;
    fatal: boolean;
}
export declare type Result<T> = Ok<T> | Err;
export declare function isResult<T>(input: unknown): input is Result<T>;
export declare function isOk<T>(input: Result<T>): input is Ok<T>;
export declare function isErr<T>(input: Result<T>): input is Err;
export declare function mapResult<T, U>(result: Result<T>, callback: (input: T) => Result<U>): Result<U>;
export interface AnySequence<T, U> {
    run(iterator: CombinatorTokensIterator, prev: T): U;
}
export interface InfallibleSequence<T, U> extends AnySequence<T, U> {
}
export interface FallibleSequence<InnerT, InnerU> extends AnySequence<Result<InnerT>, Result<InnerU>> {
    named<K extends string>(name: K): FallibleSequence<Result<InnerU>, ResultObject<K, InnerU>>;
    andThen<V>(callback: (input: InnerU) => Result<V>): FallibleSequence<InnerT, V>;
    andThen<V>(callback: (input: InnerU) => V): FallibleSequence<InnerT, V>;
    extend<K extends string, V>(key: K, step: SourceStep<V>): FallibleSequence<InnerT, InnerU & ResultObject<K, V>>;
    andCheck(callback: (input: InnerU) => Result<unknown>): FallibleSequence<InnerT, InnerU>;
    mapErr<V>(callback: (input: Err) => Result<V>): FallibleSequence<InnerT, InnerU | V>;
    mapErr<V>(callback: (input: Err) => V): FallibleSequence<InnerT, InnerU | V>;
    or<V>(value: V | Thunk<V>): InfallibleSequence<InnerT, InnerU | V>;
}
export declare type Thunk<T> = () => T;
export declare type Step<T, U> = (iterator: CombinatorTokensIterator, prev: Result<T>) => Result<U>;
export declare type SourceStep<U> = (iterator: CombinatorTokensIterator) => Result<U>;
export declare type InfallibleStep<T, U> = (iterator: CombinatorTokensIterator, prev: T) => U;
export declare type InfallibleSourceStep<U> = (iterator: CombinatorTokensIterator) => U & InfallibleStep<void, U>;
export declare const SOURCE: Result<void>;
export declare class InfallibleSequenceBuilder<T, U> implements AnySequence<T, U> {
    private start;
    constructor(start: InfallibleStep<T, U>);
    run(iterator: CombinatorTokensIterator, prev: T): U;
}
export declare function infallible<T>(step: InfallibleSourceStep<T>): InfallibleSequenceBuilder<void, T>;
/**
 * InnerT is the previous result
 * InnerU is the successful value when executing this step
 */
export declare class SequenceBuilder<InnerT, InnerU> implements FallibleSequence<InnerT, InnerU> {
    private start;
    constructor(start: Step<InnerT, InnerU>);
    run(iterator: CombinatorTokensIterator, prev: Result<InnerT>): Result<InnerU>;
    named<K extends string>(name: K): FallibleSequence<Result<InnerU>, ResultObject<K, InnerU>>;
    andThen<V>(callback: (input: InnerU) => Result<V>): FallibleSequence<InnerT, V>;
    andThen<V>(callback: (input: InnerU) => V): FallibleSequence<InnerT, V>;
    concat<V>(other: SourceStep<V>): FallibleSequence<InnerT, [InnerU, V]>;
    extend<K extends string, V>(key: K, sequence: SourceStep<V>): FallibleSequence<InnerT, InnerU & ResultObject<K, V>>;
    mapErr<V>(callback: (input: Err) => Result<V>): FallibleSequence<InnerT, InnerU | V>;
    mapErr<V>(callback: (input: Err) => V): FallibleSequence<InnerT, InnerU | V>;
    or<V>(value: V | Thunk<V>): InfallibleSequence<InnerT, InnerU | V>;
    andCheck(callback: (input: InnerU) => Result<unknown>): FallibleSequence<InnerT, InnerU>;
}
export declare function start<T>(step: SourceStep<T>): SequenceBuilder<void, T>;
export declare function step<T>(desc: string, step: FallibleSequence<void, T>): ShapeConstructor<Result<T>>;
export declare function step<T>(desc: string, step: InfallibleSequence<void, T>): ShapeConstructor<T>;
export declare function legacyStep<T, U>(s: Step<T, U>): Step<T, U>;
export declare function legacyStep<T, U>(s: SourceStep<U>): SourceStep<U>;
export declare abstract class AbstractSequence<T> {
    protected inner: Result<T>;
    readonly iterator: CombinatorTokensIterator;
    constructor(inner: Result<T>, iterator: CombinatorTokensIterator);
    abstract withIterator(iterator: CombinatorTokensIterator): Sequence<T>;
    abstract named<K extends string>(name: K): Sequence<ResultObject<K, T>>;
    abstract mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U>;
    abstract andThen<U>(callback: (input: T) => Result<U>): Sequence<U>;
    abstract andThen<U>(callback: (input: T) => U): Sequence<U>;
    abstract andThen<U>(callback: (input: T) => U | Result<U>): Sequence<U>;
    abstract next<U>(callback: (iterator: CombinatorTokensIterator) => Result<U>): Sequence<U>;
    abstract next<U>(callback: (iterator: CombinatorTokensIterator) => U): Sequence<U>;
    abstract next<U>(callback: (iterator: CombinatorTokensIterator) => U | Result<U>): Sequence<U>;
    abstract extend<K extends string, U>(key: K, callback: (iterator: CombinatorTokensIterator) => Result<U>): Sequence<T & ResultObject<K, U>>;
    abstract extend<K extends string, U>(key: K, callback: (iterator: CombinatorTokensIterator) => U): Sequence<T & ResultObject<K, U>>;
    abstract extend<K extends string, U>(key: K, callback: (iterator: CombinatorTokensIterator) => U | Result<U>): Sequence<T & ResultObject<K, U>>;
    abstract mapErr<U>(callback: (input: Err) => Result<U>): Result<T | U>;
    abstract mapErr<U>(callback: (input: Err) => U): Result<T | U>;
    abstract mapErr<U>(callback: (input: Err) => Result<U> | U): Result<T | U>;
    abstract or<U>(callback: (input: Err) => U): T | U;
    abstract or<U>(callback: U): T | U;
    abstract or<U>(callback: (input: Err) => U | U): T | U;
    abstract andCheck(callback: (input: T, iterator: CombinatorTokensIterator) => Result<unknown>): Sequence<T>;
    abstract checkNext(callback: (iterator: CombinatorTokensIterator) => Result<unknown>): Sequence<T>;
}
export declare class OkSequence<T> extends AbstractSequence<T> implements Ok<T> {
    static fromResult<T>(result: Ok<T>, iterator: CombinatorTokensIterator): OkSequence<T>;
    inner: Ok<T>;
    readonly kind = "ok";
    readonly [RESULT_KIND] = "ok";
    readonly value: T;
    constructor(value: T, iterator: CombinatorTokensIterator);
    withIterator(iterator: CombinatorTokensIterator): OkSequence<T>;
    named<K extends string>(name: K): Sequence<ResultObject<K, T>>;
    mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U>;
    andThen<U>(callback: (input: T) => Result<U>): Sequence<U>;
    andThen<U>(callback: (input: T) => U): Sequence<U>;
    next<U>(callback: (iterator: CombinatorTokensIterator) => Result<U>): Sequence<U>;
    next<U>(callback: (iterator: CombinatorTokensIterator) => U): Sequence<U>;
    extend<K extends string, U>(key: K, callback: (iterator: CombinatorTokensIterator) => Result<U>): Sequence<T & ResultObject<K, U>>;
    extend<K extends string, U>(key: K, callback: (iterator: CombinatorTokensIterator) => U): Sequence<T & ResultObject<K, U>>;
    mapErr<U>(_callback: (input: Err) => Result<U>): Sequence<T | U>;
    mapErr<U>(_callback: (input: Err) => U): Sequence<T | U>;
    or<U>(_callback: (input: Err) => U): T | U;
    or<U>(_callback: Exclude<U, (input: Err) => U>): T | U;
    checkNext(callback: (iterator: CombinatorTokensIterator) => Result<unknown>): Sequence<T>;
    andCheck(callback: (input: T, iterator: CombinatorTokensIterator) => Result<unknown>): Sequence<T>;
}
export declare class ErrSequence<T> extends AbstractSequence<T> implements Err {
    readonly token: Token;
    readonly reason: string;
    readonly fatal: boolean;
    static fromResult<T>(result: Err, iterator: CombinatorTokensIterator): ErrSequence<T>;
    inner: Err;
    type: T;
    readonly kind = "err";
    readonly [RESULT_KIND] = "err";
    constructor(token: Token, reason: string, fatal: boolean, iterator: CombinatorTokensIterator);
    withIterator(iterator: CombinatorTokensIterator): ErrSequence<T>;
    named<K extends string>(_name: K): Sequence<ResultObject<K, T>>;
    mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U>;
    next<U>(_callback: (iterator: CombinatorTokensIterator) => Result<U>): Sequence<U>;
    next<U>(_callback: (iterator: CombinatorTokensIterator) => U): Sequence<U>;
    andThen<U>(_callback: (input: T) => Result<U>): Sequence<U>;
    andThen<U>(_callback: (input: T) => U): Sequence<U>;
    extend<K extends string, U>(key: K, callback: (iterator: CombinatorTokensIterator) => Result<U>): Sequence<T & ResultObject<K, U>>;
    extend<K extends string, U>(key: K, callback: (iterator: CombinatorTokensIterator) => U): Sequence<T & ResultObject<K, U>>;
    mapErr<U>(callback: (input: Err) => Result<U>): Sequence<T | U>;
    mapErr<U>(callback: (input: Err) => U): Sequence<T | U>;
    or<U>(callback: (input: Err) => U): T | U;
    or<U>(callback: Exclude<U, (input: Err) => U>): T | U;
    andCheck(_callback: (input: T, iterator: CombinatorTokensIterator) => Result<unknown>): Sequence<T>;
    checkNext(_callback: (iterator: CombinatorTokensIterator) => Result<unknown>): Sequence<T>;
}
export declare type Sequence<T> = OkSequence<T> | ErrSequence<T>;
export declare function isSequence<T>(input: Result<T>): input is Sequence<T>;
export declare function isSequence(input: unknown): input is Sequence<unknown>;
export declare function seq<T>(input: Result<T> & Err, iterator: CombinatorTokensIterator): ErrSequence<T>;
export declare function seq<T>(input: Result<T> & Ok<T>, iterator: CombinatorTokensIterator): OkSequence<T>;
export declare function seq<T>(input: Result<T>, iterator: CombinatorTokensIterator): Sequence<T>;
export declare type ResultObject<K extends string, T> = {
    [P in K]: T;
};
//# sourceMappingURL=shape.d.ts.map