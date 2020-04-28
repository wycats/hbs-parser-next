import type { Token, TokenType, TokenMap } from "../read/tokens";
import TokensIterator, { ITERATOR_SOURCE } from "./tokens-iterator";
import {
  FORMAT,
  Formatted,
  SNAPSHOT,
  formatUnknown,
  Formattable,
  RawFormattable,
} from "../debug";

export const EXPAND = Symbol("EXPAND");
export const RESULT_KIND = Symbol("RESULT_KIND");

export type ResultValue<T extends ParseResult<unknown>> = T extends ParseResult<
  infer R
>
  ? R
  : never;

export function parseOk<T>(value: T): ParseResult<T> {
  return {
    [RESULT_KIND]: "ok",
    kind: "ok",
    [FORMAT]() {
      return { type: "raw", value: `Ok(${value})` };
    },
    [SNAPSHOT]() {
      return this;
    },
    value,
  };
}

export function parseErr<T>(
  token: Token | "EOF" | "unknown",
  reason: ErrorReason
): ParseResult<T> {
  return {
    [RESULT_KIND]: "err",
    [FORMAT]() {
      return { type: "raw", value: `Err` } as const;
    },
    [SNAPSHOT]() {
      return this;
    },
    kind: "err",
    token,
    reason,
    fatal: false,
  } as const;
}

export function fatalError<T>(
  token: Token,
  reason: ErrorReason
): ParseResult<T> {
  return {
    [RESULT_KIND]: "err",
    [FORMAT]() {
      return { type: "raw", value: `Err` } as const;
    },
    [SNAPSHOT]() {
      return this;
    },
    kind: "err",
    token,
    reason,
    fatal: true,
  } as const;
}

export interface Ok<T> extends RawFormattable {
  [RESULT_KIND]: "ok";
  [FORMAT]: () => Formatted;
  [SNAPSHOT]: () => Formattable;
  value: T;
}

export function ok<T>(value: T): Result<T> {
  return {
    [RESULT_KIND]: "ok",
    [FORMAT]() {
      return { type: "raw", value: `Ok(${formatUnknown(value)})` } as const;
    },
    [SNAPSHOT]() {
      return this;
    },
    value,
  } as const;
}

export interface ParseOk<T> extends Ok<T> {
  [RESULT_KIND]: "ok";
  // compat
  kind: "ok";
  value: T;
}

export type ErrorReason =
  | {
      type: "rejected";
      token: Token | "EOF";
    }
  | {
      type: "unexpected-eof";
    }
  | {
      type: "mismatch";
      expected: TokenType | "EOF";
      actual: Token | "EOF";
    }
  | {
      type: "not";
      result: unknown;
    }
  | { type: "empty" }
  | { type: "lookahead"; expected: TokenType | "EOF"; actual: Token | "EOF" };

export interface Err extends RawFormattable {
  [RESULT_KIND]: "err";
  [FORMAT]: () => Formatted;
  [SNAPSHOT]: () => Formattable;
  reason: unknown;
}

export function err<T>(reason: unknown): Result<T> {
  return {
    [RESULT_KIND]: "err",
    [FORMAT]() {
      return { type: "raw", value: `Err` } as const;
    },
    [SNAPSHOT]() {
      return this;
    },
    reason,
  } as const;
}

export interface ParseErr extends Err {
  [RESULT_KIND]: "err";
  // compat
  kind: "err";
  token: Token | "EOF" | "unknown";
  reason: ErrorReason;
  fatal: boolean;
}

export type Result<T> = Ok<T> | Err;
export type ParseResult<T> = Result<T> & (ParseOk<T> | ParseErr);

export function isResult<T>(input: unknown): input is Result<T> {
  if (typeof input === "object" && input !== null) {
    return RESULT_KIND in input;
  } else {
    return false;
  }
}

export function isOk<T>(input: Result<T>): input is Ok<T> {
  if (!isResult(input)) {
    throw new Error(`ASSERT: Expected Result, got something else`);
  }

  return input[RESULT_KIND] === "ok";
}

export function isErr<T>(input: Result<T>): input is Err {
  if (!isResult(input)) {
    throw new Error(`ASSERT: Expected Result, got something else`);
  }

  return input[RESULT_KIND] === "err";
}

export function isParseErr<T>(input: ParseResult<T>): input is ParseErr {
  return isErr(input);
}

export function mapResult<T, U>(
  result: ParseResult<T>,
  callback: (input: T) => ParseResult<U>
): ParseResult<U> {
  if (isParseErr(result)) {
    return result;
  }

  return callback(result.value);
}

export type Thunk<T> = () => T;

export type Step<T, U> = (
  iterator: TokensIterator,
  prev: ParseResult<T>
) => ParseResult<U>;

export type ArrowResult<
  T extends ParserArrow<any, any>
> = T extends ParserArrow<unknown, infer R> ? R : never;

export type FallibleArrowResult<
  T extends ParserArrow<any, ParseResult<any>>
> = T extends ParserArrow<unknown, ParseResult<infer R>>
  ? ParseResult<R>
  : never;

export type SourceStep<U> = (iterator: TokensIterator) => ParseResult<U>;

export const SOURCE: ParseResult<void> = parseOk(undefined);

export interface ParserArrowCore {
  Id<T>(): ParserArrow<T, T>;
  Arr<T, U>(callback: (input: T) => U): ParserArrow<T, U>;
  recurse<T, U>(callback: () => ParserArrow<T, U>): ParserArrow<T, U>;
  zip<T, U, T2, U2>(
    left: ParserArrow<T, U>,
    right: ParserArrow<T2, U2>
  ): ParserArrow<[T, T2], [U, U2]>;
  andThen<T, U, V>(
    left: ParserArrow<T, U>,
    arrow: ParserArrow<U, V>
  ): ParserArrow<T, V>;
  mergeNext<T, U, V>(
    left: ParserArrow<T, U>,
    right: ParserArrow<T, V>
  ): ParserArrow<T, [U, V]>;
  mergeAndThen<T, U, V>(
    left: ParserArrow<T, U>,
    right: ParserArrow<U, V>
  ): ParserArrow<T, [U, V]>;
}

export interface IterateParserArrow extends ParserArrowCore {
  iterate<T, U>(left: ParserArrow<T, U>): ParserArrow<T[], U[]>;
  repeat<Pre, InnerU>(
    arrow: ParserArrow<Pre, ParseResult<InnerU>>
  ): ParserArrow<Pre, InnerU[]>;
  Reduce<T, U>(callback: (list: T[]) => U): ParserArrow<T[], U>;
}

export interface ChoiceParserArrowCore extends ParserArrowCore {
  FallibleArr<T, U>(
    ok: (input: T) => U,
    err: (input: ParseErr) => U
  ): ParserArrow<ParseResult<T>, U>;

  BothOk<Pre, Left, Right>(
    arrow: ParserArrow<Pre, [ParseResult<Left>, ParseResult<Right>]>
  ): ParserArrow<Pre, ParseResult<[Left, Right]>>;

  OrElse<T, InnerU, V>(
    left: ParserArrow<T, ParseResult<InnerU>>,
    right: ParserArrow<T, ParseResult<V>>
  ): ParserArrow<T, ParseResult<InnerU | V>>;

  fallibleInput<T, U>(
    arrow: ParserArrow<T, U>
  ): ParserArrow<ParseResult<T>, ParseResult<U>>;
}

export interface IteratorParserArrowCore extends ParserArrowCore {
  Source(): ParserArrow<void, string>;
  Atomic<T, InnerU>(
    step: ParserArrow<T, ParseResult<InnerU>>
  ): ParserArrow<T, ParseResult<InnerU>>;
  label<T, U>(label: string, arrow: ParserArrow<T, U>): ParserArrow<T, U>;
  parent<T>(
    desc: string,
    tokenType: TokenType,
    arrow: ParserArrow<void, ParseResult<T>>
  ): ParserArrow<void, ParseResult<{ result: T; token: Token }>>;
  token<K extends TokenType & keyof TokenMap>(
    tokenType: K
  ): ParserArrow<void, ParseResult<TokenMap[K]>>;
  lookahead(): ParserArrow<void, Token | undefined>;
  eof<T>(): ParserArrow<T, ParseResult<void>>;
}

export interface ParserArrowFullCore
  extends ParserArrowCore,
    IterateParserArrow,
    ChoiceParserArrowCore,
    IteratorParserArrowCore {}

export interface Evaluator<S, T, U> {
  evaluate(prev: T): U;
  withState<V>(callback: (state: S) => [V, S]): V;
}

export interface ArrowState {
  [ITERATOR_SOURCE]: string;
  atomic<T>(
    callback: (state: this) => [this, ParseResult<T>]
  ): [this, ParseResult<T>];
  label<T>(desc: string, callback: (state: this) => [this, T]): [this, T];
  // TODO: this might be too generic to be useful for other interpreters
  next<T>(
    state: string,
    callback: (token: Token | undefined) => ParseResult<T>
  ): ParseResult<T>;
  lookahead(): Token | undefined;
  parent<T>(
    desc: string,
    tokenType: TokenType,
    arrow: ParserArrow<void, ParseResult<T>>
  ): ParseResult<{ result: T; token: Token }>;
}

export class ParseEvaluator<S extends ArrowState, T, U> {
  constructor(private state: S, private arrow: ParserArrow<T, U>) {}

  evaluate(prev: T): U {
    return this.arrow.evaluate(this, prev);
  }

  withState<V>(callback: (state: S) => [S, V]): V {
    let state = this.state;
    let [newState, result] = callback(state);
    this.state = newState;
    return result;
  }
}

export class ParserArrowEvaluateCore implements ParserArrowFullCore {
  Id<T>(): ParserArrow<T, T> {
    return new ParserArrow(new ParserArrowEvaluateCore(), (s, t) => [s, t]);
  }

  evalArr<T, U>(
    callback: <S extends ArrowState>(state: S, prev: T) => [S, U]
  ): ParserArrow<T, U> {
    return new ParserArrow(new ParserArrowEvaluateCore(), callback);
  }

  recurse<T, U>(callback: () => ParserArrow<T, U>): ParserArrow<T, U> {
    return this.evalArr((state, last) => {
      let arrow = callback();
      return arrow.invoke(state, last);
    });
  }

  Arr<T, U>(callback: (input: T) => U): ParserArrow<T, U> {
    return this.evalArr((state, last) => [state, callback(last)]);
  }

  zip<T, U, T2, U2>(
    left: ParserArrow<T, U>,
    right: ParserArrow<T2, U2>
  ): ParserArrow<[T, T2], [U, U2]> {
    return this.evalArr((state, [t, t2]) => {
      let [state2, u] = left.invoke(state, t);
      let [state3, u2] = right.invoke(state2, t2);

      return [state3, [u, u2]];
    });
  }

  andThen<T, U, V>(
    left: ParserArrow<T, U>,
    right: ParserArrow<U, V>
  ): ParserArrow<T, V> {
    return this.evalArr((state, prev) => {
      let [state2, leftResult] = left.invoke(state, prev);
      return right.invoke(state2, leftResult);
    });
  }

  mergeNext<T, U, U2>(
    left: ParserArrow<T, U>,
    right: ParserArrow<T, U2>
  ): ParserArrow<T, [U, U2]> {
    return this.evalArr((state, prev) => {
      let [state2, u] = left.invoke(state, prev);
      let [state3, u2] = right.invoke(state2, prev);

      return [state3, [u, u2]];
    });
  }

  mergeAndThen<T, U, U2>(
    left: ParserArrow<T, U>,
    right: ParserArrow<U, U2>
  ): ParserArrow<T, [U, U2]> {
    return this.evalArr((state, prev) => {
      let [state2, u] = left.invoke(state, prev);
      let [state3, u2] = right.invoke(state2, u);

      return [state3, [u, u2]];
    });
  }

  iterate<T, U>(arrow: ParserArrow<T, U>): ParserArrow<T[], U[]> {
    return this.evalArr((state, last) => {
      let currentState = state;
      let out = [];

      for (let item of last) {
        let [nextState, result] = arrow.invoke(currentState, item);
        out.push(result);
        currentState = nextState;
      }

      return [currentState, out];
    });
  }

  repeat<Pre, InnerU>(
    arrow: ParserArrow<Pre, ParseResult<InnerU>>
  ): ParserArrow<Pre, InnerU[]> {
    return this.evalArr((state, input) => {
      let currentState = state;

      let [nextState, nextInput] = arrow.invoke(state, input);

      if (isErr(nextInput)) {
        return [nextState, []];
      }

      let out: InnerU[] = [nextInput.value];
      currentState = nextState;

      loop(() => {
        let [nextState, nextInput] = arrow.invoke(currentState, input);

        if (isErr(nextInput)) {
          return "break";
        }

        currentState = nextState;

        out.push(nextInput.value);
      });

      return [currentState, out];
    });
  }

  Reduce<T2, U2>(callback: (list: T2[]) => U2): ParserArrow<T2[], U2> {
    return this.evalArr((state, last) => {
      return [state, callback(last)];
    });
  }

  FallibleArr<T, U>(
    ok: (input: T) => U,
    err: (input: ParseErr) => U
  ): ParserArrow<ParseResult<T>, U> {
    return this.evalArr((state, last) => {
      if (isOk(last)) {
        return [state, ok(last.value)];
      } else {
        return [state, err(last)];
      }
    });
  }

  BothOk<Pre, Left, Right>(
    arrow: ParserArrow<Pre, [ParseResult<Left>, ParseResult<Right>]>
  ): ParserArrow<Pre, ParseResult<[Left, Right]>> {
    return this.evalArr((state, last) => {
      let [state2, [left, right]] = arrow.invoke(state, last);

      if (isOk(left) && isOk(right)) {
        return [
          state2,
          parseOk([left.value, right.value]) as ParseResult<[Left, Right]>,
        ];
      } else if (isOk(left)) {
        return [state2, right as ParseErr];
      } else {
        return [state2, left];
      }
    });
  }

  OrElse<T, V, InnerU>(
    left: ParserArrow<T, ParseResult<InnerU>>,
    right: ParserArrow<T, ParseResult<V>>
  ): ParserArrow<T, ParseResult<V | InnerU>> {
    return this.evalArr((state, last) => {
      let [state2, prev] = left.invoke(state, last);

      if (isOk(prev)) {
        return [state2, prev as ParseResult<V | InnerU>];
      } else {
        return right.invoke(state2, last);
      }
    });
  }

  fallibleInput<T, U>(
    arrow: ParserArrow<T, U>
  ): ParserArrow<ParseResult<T>, ParseResult<U>> {
    return this.evalArr((state, last) => {
      if (isOk(last)) {
        let [state2, result] = arrow.invoke(state, last.value);
        return [state2, parseOk(result)];
      } else {
        return [state, last];
      }
    });
  }

  Source(): ParserArrow<void, string> {
    return this.evalArr(state => [state, state[ITERATOR_SOURCE]]);
  }

  Atomic<T, InnerU>(
    arrow: ParserArrow<T, ParseResult<InnerU>>
  ): ParserArrow<T, ParseResult<InnerU>> {
    return this.evalArr((state, prev) =>
      state.atomic(state2 => arrow.invoke(state2, prev))
    );
  }

  label<T, U>(label: string, arrow: ParserArrow<T, U>): ParserArrow<T, U> {
    return this.evalArr((state, prev) =>
      state.label(label, state2 => arrow.invoke(state2, prev))
    );
  }

  parent<T>(
    desc: string,
    tokenType: TokenType,
    arrow: ParserArrow<void, ParseResult<T>>
  ): ParserArrow<void, ParseResult<{ result: T; token: Token }>> {
    return this.evalArr(state => [state, state.parent(desc, tokenType, arrow)]);
  }

  token<K extends TokenType & keyof TokenMap>(
    tokenType: K
  ): ParserArrow<void, ParseResult<TokenMap[K]>> {
    return this.evalArr(state => [
      state,
      state.next(tokenType, token => {
        if (token === undefined) {
          return parseErr("EOF", { type: "unexpected-eof" });
        }

        if (token.type === tokenType) {
          return parseOk(token) as ParseResult<TokenMap[K]>;
        } else {
          return parseErr(token, {
            type: "mismatch",
            expected: tokenType,
            actual: token,
          });
        }
      }),
    ]);
  }

  lookahead(): ParserArrow<void, Token | undefined> {
    return this.evalArr(state => [state, state.lookahead()]);
  }

  eof<T>(): ParserArrow<T, ParseResult<void>> {
    return this.evalArr(state => [
      state,
      state.next("eof", token => {
        if (token === undefined) {
          return parseOk(undefined);
        } else {
          return parseErr(token, {
            type: "mismatch",
            expected: "EOF",
            actual: token,
          });
        }
      }),
    ]);
  }
}

export function token<K extends TokenType & keyof TokenMap>(
  type: K
): ParserArrow<void, ParseResult<TokenMap[K]>> {
  return ParserArrow.start().token(type);
}

export function source(): ParserArrow<void, ParseResult<string>> {
  return ParserArrow.start().source().fallible();
}

export function recurse<T>(
  callback: () => ParserArrow<void, T>
): ParserArrow<void, T> {
  return new ParserArrowEvaluateCore().recurse(callback);
}

export class ParserArrow<T, U> {
  static start<T, U = T>(): ParserArrow<T, U> {
    return new ParserArrow(new ParserArrowEvaluateCore(), (s, t) => [
      s,
      (t as unknown) as U,
    ]);
  }

  constructor(
    private core: ParserArrowFullCore,
    private start: <S extends ArrowState>(state: S, prev: T) => [S, U]
  ) {}

  evaluate<S extends ArrowState>(
    evaluator: ParseEvaluator<S, T, U>,
    prev: T
  ): U {
    return evaluator.withState(state => this.invoke(state, prev));
  }

  invoke<S extends ArrowState>(state: S, prev: T): [S, U] {
    return this.start(state, prev);
  }

  iterate(): ParserArrow<T[], U[]> {
    return this.core.iterate(this);
  }

  lift<T2, U2>(callback: (input: T2) => U2): ParserArrow<T2, U2> {
    return this.core.Arr(callback);
  }

  liftFallible<T2, U2>(
    ifOk: (ok: T2) => U2,
    ifErr: (err: ParseErr) => U2
  ): ParserArrow<ParseResult<T2>, U2> {
    return this.core.FallibleArr(ifOk, ifErr);
  }

  repeat<InnerU>(
    this: ParserArrow<void, ParseResult<InnerU>>
  ): ParserArrow<void, InnerU[]> {
    return this.core.repeat(this.label("repeated")).label("repeat");
  }

  bothOk<Pre, Left, Right>(
    this: ParserArrow<Pre, [ParseResult<Left>, ParseResult<Right>]>
  ): ParserArrow<Pre, ParseResult<[Left, Right]>> {
    return this.core.BothOk(this);
  }

  andThen<V>(arrow: ParserArrow<U, V>): ParserArrow<T, V> {
    return this.core.andThen(this, arrow);
  }

  map<V>(callback: (input: U) => V): ParserArrow<T, V> {
    return this.core.andThen(this, this.core.Arr(callback));
  }

  // An adapter for cases where something assumes fallibility
  // but you have something infallible
  fallible(): ParserArrow<T, ParseResult<U>> {
    return this.map(input => parseOk(input));
  }

  orElse<V, InnerU>(
    this: ParserArrow<T, ParseResult<InnerU>>,
    arrow: ParserArrow<T, ParseResult<V>>
  ): ParserArrow<T, ParseResult<InnerU | V>> {
    return this.core.OrElse(this, arrow);
  }

  checkNext<InnerU, V>(
    this: ParserArrow<T, ParseResult<InnerU>>,
    arrow: ParserArrow<T, ParseResult<V>>
  ): ParserArrow<T, ParseResult<InnerU>> {
    return this.mergeNext(arrow).ifOk(([left]) => left);
  }

  andCheck<InnerU, V>(
    this: ParserArrow<T, ParseResult<InnerU>>,
    arrow: ParserArrow<ParseResult<InnerU>, ParseResult<V>>
  ): ParserArrow<T, ParseResult<InnerU>> {
    return this.core
      .mergeAndThen(this, arrow)
      .bothOk()
      .ifOk(([left]) => left);
  }

  ifOk<V, InnerU>(
    this: ParserArrow<T, ParseResult<InnerU>>,
    callback: (input: InnerU) => V
  ): ParserArrow<T, ParseResult<V>> {
    return this.core.andThen(
      this,
      this.core.FallibleArr(
        input => parseOk(callback(input)),
        err => err
      )
    );
  }

  mergeNext<InnerU, V>(
    this: ParserArrow<T, ParseResult<InnerU>>,
    arrow: ParserArrow<T, ParseResult<V>>
  ): ParserArrow<T, ParseResult<[InnerU, V]>> {
    return this.core.mergeNext(this, arrow).bothOk();
  }

  extend<K extends string, InnerU, V>(
    this: ParserArrow<T, ParseResult<InnerU>>,
    key: K,
    arrow: ParserArrow<T, ParseResult<V>>
  ): ParserArrow<T, ParseResult<InnerU & ResultObject<K, V>>> {
    return this.mergeNext(arrow).ifOk(([left, right]: [InnerU, V]) => {
      return {
        ...left,
        [key]: right,
      } as InnerU & ResultObject<K, V>;
    });
  }

  or<V, InnerU>(
    this: ParserArrow<T, ParseResult<InnerU>>,
    value: V
  ): ParserArrow<T, InnerU | V> {
    return this.andThen(
      this.core.FallibleArr<InnerU, InnerU | V>(
        input => input,
        () => value
      )
    );
  }

  // convenient

  named<K extends string, InnerU>(
    this: ParserArrow<T, ParseResult<InnerU>>,
    name: K
  ): ParserArrow<T, ParseResult<ResultObject<K, InnerU>>> {
    return this.ifOk(val => {
      return { [name]: val } as ResultObject<K, InnerU>;
    });
  }

  present<Pre>(
    this: ParserArrow<Pre, T[]>
  ): ParserArrow<Pre, ParseResult<void>> {
    return this.core.andThen(
      this,
      this.core.Arr(list =>
        list.length > 0
          ? (parseOk(undefined) as ParseResult<void>)
          : (parseErr("unknown", { type: "empty" }) as ParseResult<void>)
      )
    );
  }

  not<InnerU>(
    this: ParserArrow<T, ParseResult<InnerU>>
  ): ParserArrow<T, ParseResult<void>> {
    return this.core.andThen(
      this,
      this.core.FallibleArr(
        input => parseErr("unknown", { type: "not", result: input }),
        _ => parseOk(undefined)
      )
    );
  }

  // special parser combinators

  source(): ParserArrow<void, string> {
    return this.core.Source();
  }

  debug(): ParserArrow<T, U> {
    return this.core.andThen(
      this,
      this.core.Arr(input => {
        debugger;
        return input;
      })
    );
  }

  atomic<InnerU>(
    this: ParserArrow<T, ParseResult<InnerU>>
  ): ParserArrow<T, ParseResult<InnerU>> {
    return this.core.Atomic(this);
  }

  token<K extends TokenType & keyof TokenMap>(
    type: K
  ): ParserArrow<void, ParseResult<TokenMap[K]>> {
    return this.core.token(type);
  }

  eof(): ParserArrow<T, ParseResult<void>> {
    return this.core.eof();
  }

  parent<T>(
    desc: string,
    tokenType: TokenType,
    arrow: ParserArrow<void, ParseResult<T>>
  ): ParserArrow<void, ParseResult<{ result: T; token: Token }>> {
    return this.core.parent(desc, tokenType, arrow);
  }

  label(label: string): ParserArrow<T, U> {
    return this.core.label(label, this);
  }

  lookahead(): ParserArrow<void, Token | undefined> {
    return this.core.lookahead();
  }
}

export type Inner<T> = T extends ParseResult<infer R> ? R : never;

export type ResultObject<K extends string, T> = {
  [P in K]: T;
};

function loop(callback: (i: number) => "break" | "continue" | undefined) {
  let count = 0;

  while (true) {
    count++;

    if (count > 1000) {
      throw new Error(`likely infinite loop`);
    }

    if (callback(count) === "break") {
      break;
    }
  }
}
