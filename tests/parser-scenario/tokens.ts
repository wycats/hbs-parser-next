import {
  baseErr as err,
  baseOk as ok,
  BaseResult as Result,
  FORMAT,
  Formattable,
  Formatted,
  ops,
  RawFormattable,
  SNAPSHOT,
  StatefulEvaluatorImpl,
  SourceSpan,
  span,
  SOURCE_FORMAT,
  SourceFormattable,
  formatUnknown,
  range,
  HasSpan,
} from "hbs-parser-next";
import {
  STATE,
  Step,
  step,
  TraceBuilder,
  TracedEvaluator,
  Tracer,
  VOID,
  steps,
} from "../tracer";

export type Arrow<In, Out> = ops.Arrow<In, Out>;

export type LeafTokenType =
  | "Number"
  | "WS"
  | "OpenParen"
  | "CloseParen"
  | "Plus";

export type NestedTokenType = "Sum" | "Parens";

export interface NestedChildren {
  Sum: readonly [Expr, MaybeWS, LeafToken<"Plus">, MaybeWS, Expr];
  Parens: readonly [
    LeafToken<"OpenParen">,
    MaybeWS,
    Expr,
    MaybeWS,
    LeafToken<"CloseParen">
  ];
}

export interface NestedArgs {
  Sum: readonly [
    Arg<Expr>,
    Arg<MaybeWS>,
    Arg<LeafToken<"Plus">>,
    Arg<MaybeWS>,
    Arg<Expr>
  ];
  Parens: readonly [
    Arg<LeafToken<"OpenParen">>,
    Arg<MaybeWS>,
    Arg<Expr>,
    Arg<MaybeWS>,
    Arg<LeafToken<"CloseParen">>
  ];
}

export class LeafToken<T extends LeafTokenType> implements SourceFormattable {
  constructor(readonly type: T, readonly span: SourceSpan) {}

  [SOURCE_FORMAT](source: string): Formatted {
    return {
      type: "raw",
      value: `<Token:${this.type} ${this.span.slice(source)}>`,
    };
  }

  [SNAPSHOT](): SourceFormattable {
    return this;
  }
}

export class NestedToken<
  T extends NestedTokenType,
  A extends readonly (HasSpan | null)[]
> implements SourceFormattable {
  constructor(readonly type: T, readonly children: A) {}

  get span(): SourceSpan {
    let first = this.children[0];
    let last = this.children[this.children.length - 1];

    return range(first, last);
  }

  [SOURCE_FORMAT](source: string, nesting: number | undefined): Formatted {
    if (nesting !== undefined) {
      let children = (this.children as readonly unknown[])
        .map(c => " ".repeat(nesting) + formatUnknown(c, source, nesting + 2))
        .join(`\n`);

      return {
        type: "raw",
        value: `<#Token:${this.type}>\n${children}\n${" ".repeat(
          nesting - 2
        )}</Token:${this.type}>`,
      };
    } else {
      let children = (this.children as readonly unknown[])
        .map(c => formatUnknown(c, source, undefined))
        .join(` `);

      return {
        type: "raw",
        value: `<#Token:${this.type}>${children}</Token:${this.type}>`,
      };
    }
  }

  [SNAPSHOT](): SourceFormattable {
    return this;
  }
}

export type Token =
  | LeafToken<LeafTokenType>
  | NestedToken<NestedTokenType, NestedChildren[NestedTokenType]>;

export function leafTok<T extends LeafTokenType>(
  type: T
): (span: SourceSpan) => LeafToken<T> {
  return span => new LeafToken(type, span);
}

export function tok<C extends string, T extends LeafTokenType>(
  chars: C,
  tokenType: T
): ComputedArg<LeafToken<T>> {
  return computed(chars, leafTok(tokenType));
}

export function nestedTok<
  T extends NestedTokenType,
  U extends NestedChildren[T]
>(tokenType: T): (children: U) => NestedToken<T, U> {
  return children => new NestedToken(tokenType, children);
}

export const ERR = err("mismatch");

export type MaybeWS = SourceSpan | null;

export type SumToken<C extends NestedChildren["Sum"]> = NestedToken<"Sum", C>;
export type ParensToken<C extends NestedChildren["Parens"]> = NestedToken<
  "Parens",
  C
>;

export type Expr =
  | LeafToken<"Number">
  | NestedToken<"Sum", NestedChildren["Sum"]>
  | NestedToken<"Parens", NestedChildren["Parens"]>;

export function okState(label: string, value: unknown): Step {
  return steps(state(label, value), step(`Pure`, value, ok(value)), [
    `ok[${label}](Pipeline)`,
    ok(value),
  ]);
}

export function okToken(label: string, value: LeafToken<LeafTokenType>): Step {
  return steps(
    state(`${label}?`, ok(value.span)),
    step(`to-token(Pure)`, value.span, ok(value)),
    ["MapResult", ok(value)]
  );
}

export function state(out: unknown): Step;
export function state(label: string, out: unknown): Step;
export function state(...args: [string | unknown, unknown?]): Step {
  let out = args.length === 2 ? args[1] : args[0];
  let label = args.length === 2 ? (args[0] as string) : undefined;

  let builder = new TraceBuilder()
    .addTraces([`Get-State: <State>`])
    .step(label ? `${label}(Pure)` : "Pure", STATE, out)
    .into({ type: "Pipeline", label }, VOID, out);

  return { type: "multiple", builder };
}

export class State implements RawFormattable {
  constructor(readonly tracer: Tracer, readonly parser: Parser) {}

  [FORMAT](): Formatted {
    return { type: "raw", value: `<State>` };
  }

  [SNAPSHOT](): Formattable {
    return this;
  }
}

export class Parser {
  constructor(private source: string, private pos = 0) {}

  tryMatch(pattern: RegExp | string): Result<SourceSpan> {
    let result = this.match(pattern);

    if (result === null) {
      return err("mismatch");
    } else {
      return ok(result);
    }
  }

  match(pattern: RegExp | string): SourceSpan | null {
    let start = this.pos;
    let next = this.source.slice(start);

    if (typeof pattern === "string") {
      let sliced = next.slice(0, pattern.length);
      let match = sliced === pattern;

      if (match) {
        this.pos += sliced.length;
        return span(start, this.pos);
      }
    } else {
      let match = next.match(pattern);
      if (match) {
        this.pos += match[0].length;
        return span(start, this.pos);
      }
    }

    return null;
  }
}

export type ArrowResult<T extends Arrow<unknown, unknown>> = T extends Arrow<
  unknown,
  infer R
>
  ? R
  : never;

export type ParseArrow<Out> = Arrow<unknown, Result<Out>>;

export type ParserEvaluator = ops.StatefulEvaluator<{
  parser: Parser;
  tracer: Tracer;
}>;

export function parserEvaluator(source: string): ParserEvaluator {
  let tracer = new TracedEvaluator<{ parser: Parser; tracer: Tracer }>(source);
  let evaluator = new StatefulEvaluatorImpl<{ parser: Parser; tracer: Tracer }>(
    tracer
  );
  tracer.setInner(evaluator);
  return tracer;
}

export type Prepend<Tuple extends unknown[], Addend> = ((
  _: Addend,
  ..._1: Tuple
) => unknown) extends (..._: infer Result) => unknown
  ? Result
  : never;

export type Reverse<Tuple extends unknown[], Prefix extends unknown[] = []> = {
  0: Prefix;
  1: ((..._: Tuple) => unknown) extends (
    _: infer First,
    ..._1: infer Next
  ) => unknown
    ? Reverse<Next, Prepend<Prefix, First>>
    : never;
}[Tuple extends [unknown, ...unknown[]] ? 1 : 0];

export type Append<Tuple extends unknown[], Next extends unknown> = Reverse<
  Prepend<Reverse<Tuple>, Next>
>;

export class SpanBuilder {
  #source: string;
  #output: unknown[] = [];

  constructor(source = "", private pos = 0) {
    this.#source = source;
  }

  get source(): string {
    return this.#source;
  }

  get output(): unknown[] {
    return this.#output;
  }

  add<I>(s: Arg<I>): SpanBuilder {
    let result = s.build(this);
    this.#output.push(result);
    return this;
  }

  consume(s: string): SourceSpan {
    let start = this.pos;
    this.pos += s.length;
    this.#source += s;
    return span(start, this.pos);
  }
}

abstract class Arg<T> {
  abstract build(builder: SpanBuilder): T;
}

class ComputedArg<I> extends Arg<I> {
  constructor(
    readonly chars: string,
    readonly callback: (span: SourceSpan) => I
  ) {
    super();
  }

  build(builder: SpanBuilder): I {
    return this.callback(builder.consume(this.chars));
  }
}

class StringArg extends Arg<SourceSpan> {
  constructor(readonly chars: string) {
    super();
  }

  build(builder: SpanBuilder): SourceSpan {
    return builder.consume(this.chars);
  }
}

class NullArg extends Arg<null> {
  build(_builder: SpanBuilder): null {
    return null;
  }
}

class NestedArg<K extends NestedTokenType, A extends NestedArgs[K]> {
  constructor(
    readonly args: A,
    readonly callback: (
      children: NestedChildren[K]
    ) => NestedToken<K, NestedChildren[K]>
  ) {}

  build(builder: SpanBuilder): NestedToken<K, NestedChildren[K]> {
    let results = ((this.args as readonly Arg<unknown>[]).map(arg =>
      arg.build(builder)
    ) as unknown) as NestedChildren[K];
    return this.callback(results) as any;
  }
}

type ArgValues<A extends readonly Arg<HasSpan | null>[]> = {
  [P in keyof A]: A[P] extends Arg<HasSpan | null> ? ArgValue<A[P]> : A[P];
} &
  (HasSpan | null)[];

type ArgValue<A extends Arg<unknown>> = A extends ComputedArg<infer R>
  ? R
  : A extends NestedArg<infer K, infer A>
  ? A extends readonly Arg<HasSpan | null>[]
    ? NestedToken<K, ArgValues<A>>
    : never
  : A extends StringArg
  ? SourceSpan
  : A extends NullArg
  ? null
  : "unreachable in ArgValue";

export function computed<O>(
  chars: string,
  callback: (span: SourceSpan) => O
): ComputedArg<O> {
  return new ComputedArg(chars, callback);
}

export function chars(chars: string): StringArg {
  return new StringArg(chars);
}

export const NULL = new NullArg();

export function nested<K extends NestedTokenType, A extends NestedArgs[K]>(
  tokenType: K,
  ...args: A
): NestedArg<K, A> {
  return new NestedArg(args, children => new NestedToken(tokenType, children));
}

export function spanned<A extends readonly Arg<HasSpan | null>[]>(
  ...args: A
): ArgValues<A> {
  let builder = new SpanBuilder();

  for (let arg of args) {
    builder.add(arg);
  }

  return (builder.output as unknown) as ArgValues<A>;
}

export function build<A extends Arg<unknown>>(arg: A): ArgValue<A> {
  let builder = new SpanBuilder();
  builder.add(arg);

  return builder.output[0] as ArgValue<A>;
}
