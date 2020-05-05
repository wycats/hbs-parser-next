import { BaseResult as Result, FORMAT, Formattable, Formatted, ops, RawFormattable, SNAPSHOT, SourceSpan, SOURCE_FORMAT, SourceFormattable } from "hbs-parser-next";
import { Step, Tracer } from "../tracer";
export declare type Arrow<In, Out> = ops.Arrow<In, Out>;
export declare const enum LeafTokenType {
    Number = "Number",
    WS = "WS",
    OpenParen = "OpenParen",
    CloseParen = "CloseParen",
    Plus = "Plus"
}
export declare const enum NestedTokenType {
    Sum = "Sum",
    Parens = "Parens"
}
export declare class LeafToken<T extends LeafTokenType> implements SourceFormattable {
    readonly type: T;
    readonly span: SourceSpan;
    constructor(type: T, span: SourceSpan);
    [SOURCE_FORMAT](source: string): Formatted;
    [SNAPSHOT](): SourceFormattable;
}
export declare class NestedToken<T extends NestedTokenType, O extends readonly Output[]> implements SourceFormattable {
    readonly type: T;
    readonly children: O;
    constructor(type: T, children: O);
    get span(): SourceSpan;
    [SOURCE_FORMAT](source: string, nesting: number | undefined): Formatted;
    [SNAPSHOT](): SourceFormattable;
}
export declare type Token = LeafToken<LeafTokenType> | NestedToken<NestedTokenType, readonly Output[]>;
export declare function leafTok<T extends LeafTokenType>(type: T): (span: SourceSpan) => LeafToken<T>;
export declare function tok<C extends string, T extends LeafTokenType>(chars: C, tokenType: T): ComputedArg<LeafToken<T>>;
export declare const ERR: Result<unknown>;
export declare type MaybeWS = SourceSpan | null;
export declare type SumToken = NestedToken<NestedTokenType.Sum, readonly [Expr, MaybeWS, LeafToken<LeafTokenType.Plus>, MaybeWS, Expr]>;
export declare type ParensToken = NestedToken<NestedTokenType.Parens, readonly [LeafToken<LeafTokenType.OpenParen>, MaybeWS, Expr, MaybeWS, LeafToken<LeafTokenType.CloseParen>]>;
export declare type Expr = LeafToken<LeafTokenType.Number> | SumToken | ParensToken;
export declare const takeInt: ParseArrow<Expr>;
export declare function keyword<T extends LeafTokenType>(type: T, chars: string, label?: string): ParseArrow<LeafToken<T>>;
export declare const takePlus: Arrow<unknown, Result<LeafToken<LeafTokenType.Plus>>>;
export declare const takeWS: Arrow<unknown, null | SourceSpan>;
export declare const maybeWS: ops.Arrow<unknown, Result<MaybeWS>>;
export declare const takeParens: ParseArrow<ParensToken>;
export declare const takeExpr: ParseArrow<Expr>;
export declare const takeSum: ParseArrow<SumToken>;
export declare function okState(label: string, value: unknown): Step;
export declare function okToken(label: string, value: LeafToken<LeafTokenType>): Step;
export declare function errState(label: string, reason: string): Step;
export declare function state(out: unknown): Step;
export declare function state(label: string, out: unknown): Step;
export declare class State implements RawFormattable {
    readonly tracer: Tracer;
    readonly parser: Parser;
    constructor(tracer: Tracer, parser: Parser);
    [FORMAT](): Formatted;
    [SNAPSHOT](): Formattable;
}
export declare class Parser {
    private source;
    private pos;
    constructor(source: string, pos?: number);
    tryMatch(pattern: RegExp | string): Result<SourceSpan>;
    match(pattern: RegExp | string): SourceSpan | null;
}
export declare function fromState<In, T>(callback: (state: {
    parser: Parser;
}) => T, label?: string): ops.Arrow<In, T>;
export declare function fallible<In, Out>(arrow: ops.Arrow<In, Out>): ops.Arrow<In, Result<Out>>;
export declare function recurse<A extends ops.Arrow<unknown, unknown>>(callback: () => A): A;
export declare function exact(s: string, label?: string): ParseArrow<SourceSpan>;
export declare type ArrowResult<T extends Arrow<unknown, unknown>> = T extends Arrow<unknown, infer R> ? R : never;
export declare type ParseArrow<Out> = Arrow<unknown, Result<Out>>;
export declare type ParserEvaluator = ops.StatefulEvaluator<{
    parser: Parser;
    tracer: Tracer;
}>;
export declare function parserEvaluator(source: string): ParserEvaluator;
export declare type Prepend<Tuple extends unknown[], Addend> = ((_: Addend, ..._1: Tuple) => unknown) extends (..._: infer Result) => unknown ? Result : never;
export declare type Reverse<Tuple extends unknown[], Prefix extends unknown[] = []> = {
    0: Prefix;
    1: ((..._: Tuple) => unknown) extends (_: infer First, ..._1: infer Next) => unknown ? Reverse<Next, Prepend<Prefix, First>> : never;
}[Tuple extends [unknown, ...unknown[]] ? 1 : 0];
export declare type Append<Tuple extends unknown[], Next extends unknown> = Reverse<Prepend<Reverse<Tuple>, Next>>;
export declare class SpanBuilder<T extends unknown[]> {
    #private;
    private pos;
    constructor(source?: string, pos?: number);
    get source(): string;
    get output(): T;
    add<I>(s: AbstractArg<I>): SpanBuilder<unknown[]>;
    consume(s: string): SourceSpan;
}
declare abstract class AbstractArg<T> {
    abstract build(builder: SpanBuilder<unknown[]>): T;
}
export declare type Output = SourceSpan | null | LeafToken<LeafTokenType> | SumToken | ParensToken | Expr;
declare class ComputedArg<I extends Output> extends AbstractArg<I> {
    readonly chars: string;
    readonly callback: (span: SourceSpan) => I;
    constructor(chars: string, callback: (span: SourceSpan) => I);
    build(builder: SpanBuilder<I[]>): I;
}
declare class StringArg extends AbstractArg<SourceSpan> {
    readonly chars: string;
    constructor(chars: string);
    build(builder: SpanBuilder<unknown[]>): SourceSpan;
}
declare class NullArg extends AbstractArg<null> {
    build(_builder: SpanBuilder<unknown[]>): null;
}
declare class NestedArg<I extends Output, A extends readonly AnyArg[]> {
    readonly args: A;
    readonly callback: (children: ArgsReturn<A>) => I;
    constructor(args: A, callback: (children: ArgsReturn<A>) => I);
    build(builder: SpanBuilder<I[]>): I;
}
declare type AnyArg = ComputedArg<any> | StringArg | NullArg | NestedArg<any, any>;
export declare function computed<O extends Output>(chars: string, callback: (span: SourceSpan) => O): ComputedArg<O>;
export declare function chars(chars: string): StringArg;
export declare const NULL: NullArg;
export declare function nested<A extends readonly AnyArg[], O extends Output>(args: A, callback: (children: ArgsReturn<A>) => O): NestedArg<O, A>;
declare type ArgsReturn<A extends readonly AnyArg[]> = {
    [P in keyof A]: A[P] extends StringArg ? SourceSpan : A[P] extends ComputedArg<infer R> ? R : A[P] extends NullArg ? null : A[P] extends NestedArg<infer R, any> ? R : "something went wrong";
};
export declare function spanned<Args extends readonly AnyArg[]>(...args: Args): ArgsReturn<Args>;
export declare function build<Arg extends AnyArg>(arg: Arg): ReturnType<Arg["build"]>;
export {};
//# sourceMappingURL=tokens.d.ts.map