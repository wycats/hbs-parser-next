import type { Token, TokenType, TokenMap } from "../read/tokens";
import type { ShapeConstructor } from "./shapes/abstract";
import { CombinatorTokensIterator, ITERATOR_SOURCE } from "./tokens-iterator";

export const EXPAND = Symbol("EXPAND");
export const RESULT_KIND = Symbol("RESULT_KIND");

export interface Shape<T> {
  readonly desc: string;
  [EXPAND](iterator: CombinatorTokensIterator): T;
}

export type ResultValue<T extends Result<unknown>> = T extends Result<infer R>
  ? R
  : never;

export type ShapeResult<T extends Shape<Result<unknown>>> = T extends Shape<
  Result<infer R>
>
  ? R
  : T extends Shape<infer R>
  ? R
  : never;

export type ShapeConstructorResult<
  T extends ShapeConstructor<Result<unknown>>
> = T extends { new (): Shape<Result<infer R>> }
  ? R
  : T extends ShapeConstructor<infer R>
  ? R
  : never;

export function ok<T>(value: T): Result<T> {
  return {
    [RESULT_KIND]: "ok",
    kind: "ok",
    value,
  };
}

export function err<T>(token: Token | undefined, reason: string): Result<T> {
  return {
    [RESULT_KIND]: "err",
    kind: "err",
    token,
    reason,
    fatal: false,
  };
}

export function fatalError(token: Token, reason: string): Result<unknown> {
  return {
    [RESULT_KIND]: "err",
    kind: "err",
    token,
    reason,
    fatal: true,
  };
}

export interface Ok<T> {
  [RESULT_KIND]: "ok";
  // compat
  kind: "ok";
  value: T;
}

export interface Err {
  [RESULT_KIND]: "err";
  // compat
  kind: "err";
  token: Token | undefined;
  reason: string;
  fatal: boolean;
}

export type Result<T> = Ok<T> | Err;

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

export function mapResult<T, U>(
  result: Result<T>,
  callback: (input: T) => Result<U>
): Result<U> {
  if (result.kind === "err") {
    return result;
  }

  return callback(result.value);
}

export type Thunk<T> = () => T;

export type Step<T, U> = (
  iterator: CombinatorTokensIterator,
  prev: Result<T>
) => Result<U>;

export type SequenceResult<
  T extends SequenceBuilder<any, any>
> = T extends SequenceBuilder<unknown, infer R> ? R : never;

export type ArrowResult<
  T extends ParserArrow<any, any>
> = T extends ParserArrow<unknown, infer R> ? R : never;

export type FallibleArrowResult<
  T extends ParserArrow<any, Result<any>>
> = T extends ParserArrow<unknown, Result<infer R>> ? Result<R> : never;

export type SourceStep<U> = (iterator: CombinatorTokensIterator) => Result<U>;

export const SOURCE: Result<void> = ok(undefined);

//// TODO: Differentiate SequenceBuilder (with input) from SourceSequenceBuilder (no input) ////

export interface ParserArrowCore<EvalT, EvalU> {
  Id<T>(): ParserArrow<T, T>;
  Arr<T, U>(callback: (input: T) => U): ParserArrow<T, U>;
  recurse<T, U>(callback: () => ParserArrow<T, U>): ParserArrow<T, U>;
  invoke: <S extends ArrowState>(state: S, prev: EvalT) => [S, EvalU];
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

export interface IterateParserArrow<EvalT, EvalU>
  extends ParserArrowCore<EvalT, EvalU> {
  iterate<T, U>(left: ParserArrow<T, U>): ParserArrow<T[], U[]>;
  repeat<Pre, InnerU>(
    arrow: ParserArrow<Pre, Result<InnerU>>
  ): ParserArrow<Pre, InnerU[]>;
  Reduce<T, U>(callback: (list: T[]) => U): ParserArrow<T[], U>;
}

export interface ChoiceParserArrowCore<EvalT, EvalU>
  extends ParserArrowCore<EvalT, EvalU> {
  FallibleArr<T, U>(
    ok: (input: T) => U,
    err: (input: Err) => U
  ): ParserArrow<Result<T>, U>;

  BothOk<Pre, Left, Right>(
    arrow: ParserArrow<Pre, [Result<Left>, Result<Right>]>
  ): ParserArrow<Pre, Result<[Left, Right]>>;

  OrElse<T, InnerU, V>(
    left: ParserArrow<T, Result<InnerU>>,
    right: ParserArrow<T, Result<V>>
  ): ParserArrow<T, Result<InnerU | V>>;

  fallibleInput<T, U>(
    arrow: ParserArrow<T, U>
  ): ParserArrow<Result<T>, Result<U>>;
}

export interface IteratorParserArrowCore<EvalT, EvalU>
  extends ParserArrowCore<EvalT, EvalU> {
  Source(): ParserArrow<void, string>;
  Atomic<T, InnerU>(
    step: ParserArrow<T, Result<InnerU>>
  ): ParserArrow<T, Result<InnerU>>;
  label<T, U>(label: string, arrow: ParserArrow<T, U>): ParserArrow<T, U>;
  parent<T>(
    desc: string,
    tokenType: TokenType,
    arrow: ParserArrow<void, Result<T>>
  ): ParserArrow<void, Result<{ result: T; token: Token }>>;
  token<K extends TokenType & keyof TokenMap>(
    tokenType: K
  ): ParserArrow<void, Result<TokenMap[K]>>;
  lookahead(): ParserArrow<void, Token | undefined>;
  eof<T>(): ParserArrow<T, Result<void>>;
}

export interface ParserArrowFullCore<EvalT, EvalU>
  extends ParserArrowCore<EvalT, EvalU>,
    IterateParserArrow<EvalT, EvalU>,
    ChoiceParserArrowCore<EvalT, EvalU>,
    IteratorParserArrowCore<EvalT, EvalU> {}

export interface Evaluator<S, T, U> {
  evaluate(prev: T): U;
  withState<V>(callback: (state: S) => [V, S]): V;
}

export interface ArrowState {
  [ITERATOR_SOURCE]: string;
  atomic<T>(callback: (state: this) => [this, Result<T>]): [this, Result<T>];
  label<T>(desc: string, callback: (state: this) => [this, T]): [this, T];
  // TODO: this might be too generic to be useful for other interpreters
  next<T>(
    state: string,
    callback: (token: Token | undefined) => Result<T>
  ): Result<T>;
  lookahead(): Token | undefined;
  parent<T>(
    desc: string,
    tokenType: TokenType,
    arrow: ParserArrow<void, Result<T>>
  ): Result<{ result: T; token: Token }>;
}

export class ParseEvaluator<S extends ArrowState, T, U> {
  constructor(private state: S, private core: ParserArrowEvaluateCore<T, U>) {}

  evaluate(prev: T): U {
    return this.core.evaluate(this, prev);
  }

  withState<V>(callback: (state: S) => [S, V]): V {
    let state = this.state;
    let [newState, result] = callback(state);
    this.state = newState;
    return result;
  }
}

export function evalArr<T, U>(
  callback: <S extends ArrowState>(state: S, prev: T) => [S, U]
): ParserArrow<T, U> {
  return new ParserArrow(new ParserArrowEvaluateCore(callback));
}

export class ParserArrowEvaluateCore<EvalT, EvalU>
  implements ParserArrowFullCore<EvalT, EvalU> {
  static start<T, U = T>(): ParserArrowEvaluateCore<T, U> {
    return new ParserArrowEvaluateCore((s, t) => [s, (t as unknown) as U]);
  }

  constructor(
    readonly invoke: <S extends ArrowState>(state: S, prev: EvalT) => [S, EvalU]
  ) {}

  evaluate<S extends ArrowState>(
    evaluator: ParseEvaluator<S, EvalT, EvalU>,
    prev: EvalT
  ): EvalU {
    return evaluator.withState(state => this.invoke(state, prev));
  }

  Id<T>(): ParserArrow<T, T> {
    return new ParserArrow(ParserArrowEvaluateCore.start());
  }

  recurse<T, U>(callback: () => ParserArrow<T, U>): ParserArrow<T, U> {
    return evalArr((state, last) => {
      let arrow = callback();
      return arrow.invoke(state, last);
    });
  }

  Arr<T, U>(callback: (input: T) => U): ParserArrow<T, U> {
    return evalArr((state, last) => [state, callback(last)]);
  }

  zip<T, U, T2, U2>(
    left: ParserArrow<T, U>,
    right: ParserArrow<T2, U2>
  ): ParserArrow<[T, T2], [U, U2]> {
    return evalArr((state, [t, t2]) => {
      let [state2, u] = left.invoke(state, t);
      let [state3, u2] = right.invoke(state2, t2);

      return [state3, [u, u2]];
    });
  }

  andThen<T, U, V>(
    left: ParserArrow<T, U>,
    right: ParserArrow<U, V>
  ): ParserArrow<T, V> {
    return evalArr((state, prev) => {
      let [state2, leftResult] = left.invoke(state, prev);
      return right.invoke(state2, leftResult);
    });
  }

  mergeNext<T, U, U2>(
    left: ParserArrow<T, U>,
    right: ParserArrow<T, U2>
  ): ParserArrow<T, [U, U2]> {
    return evalArr((state, prev) => {
      let [state2, u] = left.invoke(state, prev);
      let [state3, u2] = right.invoke(state2, prev);

      return [state3, [u, u2]];
    });
  }

  mergeAndThen<T, U, U2>(
    left: ParserArrow<T, U>,
    right: ParserArrow<U, U2>
  ): ParserArrow<T, [U, U2]> {
    return evalArr((state, prev) => {
      let [state2, u] = left.invoke(state, prev);
      let [state3, u2] = right.invoke(state2, u);

      return [state3, [u, u2]];
    });
  }

  iterate<T, U>(arrow: ParserArrow<T, U>): ParserArrow<T[], U[]> {
    return evalArr((state, last) => {
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
    arrow: ParserArrow<Pre, Result<InnerU>>
  ): ParserArrow<Pre, InnerU[]> {
    return evalArr((state, input) => {
      let currentState = state;

      let [nextState, nextInput] = arrow.invoke(state, input);

      if (isErr(nextInput)) {
        return [nextState, []];
      }

      let out: InnerU[] = [nextInput.value];
      currentState = nextState;

      loop(i => {
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
    return evalArr((state, last) => {
      return [state, callback(last)];
    });
  }

  FallibleArr<T, U>(
    ok: (input: T) => U,
    err: (input: Err) => U
  ): ParserArrow<Result<T>, U> {
    return evalArr((state, last) => {
      if (isOk(last)) {
        return [state, ok(last.value)];
      } else {
        return [state, err(last)];
      }
    });
  }

  BothOk<Pre, Left, Right>(
    arrow: ParserArrow<Pre, [Result<Left>, Result<Right>]>
  ): ParserArrow<Pre, Result<[Left, Right]>> {
    return evalArr((state, last) => {
      let [state2, [left, right]] = arrow.invoke(state, last);

      if (isOk(left) && isOk(right)) {
        return [state2, ok([left.value, right.value]) as Result<[Left, Right]>];
      } else if (isOk(left)) {
        return [state2, right as Err];
      } else {
        return [state2, left];
      }
    });
  }

  OrElse<T, V, InnerU>(
    left: ParserArrow<T, Result<InnerU>>,
    right: ParserArrow<T, Result<V>>
  ): ParserArrow<T, Result<V | InnerU>> {
    return evalArr((state, last) => {
      let [state2, prev] = left.invoke(state, last);

      if (isOk(prev)) {
        return [state2, prev as Result<V | InnerU>];
      } else {
        return right.invoke(state2, last);
      }
    });
  }

  fallibleInput<T, U>(
    arrow: ParserArrow<T, U>
  ): ParserArrow<Result<T>, Result<U>> {
    return evalArr((state, last) => {
      if (isOk(last)) {
        let [state2, result] = arrow.invoke(state, last.value);
        return [state2, ok(result)];
      } else {
        return [state, last];
      }
    });
  }

  Source(): ParserArrow<void, string> {
    return evalArr(state => [state, state[ITERATOR_SOURCE]]);
  }

  Atomic<T, InnerU>(
    arrow: ParserArrow<T, Result<InnerU>>
  ): ParserArrow<T, Result<InnerU>> {
    return evalArr((state, prev) =>
      state.atomic(state2 => arrow.invoke(state2, prev))
    );
  }

  label<T, U>(label: string, arrow: ParserArrow<T, U>): ParserArrow<T, U> {
    return evalArr((state, prev) =>
      state.label(label, state2 => arrow.invoke(state2, prev))
    );
  }

  parent<T>(
    desc: string,
    tokenType: TokenType,
    arrow: ParserArrow<void, Result<T>>
  ): ParserArrow<void, Result<{ result: T; token: Token }>> {
    return evalArr(state => [state, state.parent(desc, tokenType, arrow)]);
  }

  token<K extends TokenType & keyof TokenMap>(
    tokenType: K
  ): ParserArrow<void, Result<TokenMap[K]>> {
    return evalArr(state => [
      state,
      state.next(tokenType, token => {
        if (token === undefined) {
          return err(token, "eof");
        }

        if (token.type === tokenType) {
          return ok(token) as Result<TokenMap[K]>;
        } else {
          return err(token, "mismatch");
        }
      }),
    ]);
  }

  lookahead(): ParserArrow<void, Token | undefined> {
    return evalArr(state => [state, state.lookahead()]);
  }

  eof<T>(): ParserArrow<T, Result<void>> {
    return evalArr(state => [
      state,
      state.next("eof", token => {
        if (token === undefined) {
          return ok(undefined);
        } else {
          return err(token, "mismatch");
        }
      }),
    ]);
  }
}

export function token<K extends TokenType & keyof TokenMap>(
  type: K
): ParserArrow<void, Result<TokenMap[K]>> {
  return ParserArrow.start().token(type);
}

export function source(): ParserArrow<void, Result<string>> {
  return ParserArrow.start().source().fallible();
}

export function recurse<T>(
  callback: () => ParserArrow<void, T>
): ParserArrow<void, T> {
  return ParserArrowEvaluateCore.start().recurse(callback);
}

export class ParserArrow<T, U> {
  static start<T, U = T>(): ParserArrow<T, U> {
    return new ParserArrow(ParserArrowEvaluateCore.start());
  }

  constructor(
    private core: ParserArrowFullCore<T, U> // readonly start: (iterator: CombinatorTokensIterator, prev: T) => U
  ) {}

  invoke<S extends ArrowState>(state: S, prev: T): [S, U] {
    return this.core.invoke(state, prev);
  }

  iterate(): ParserArrow<T[], U[]> {
    return this.core.iterate(this);
  }

  lift<T2, U2>(callback: (input: T2) => U2): ParserArrow<T2, U2> {
    return this.core.Arr(callback);
  }

  liftFallible<T2, U2>(
    ifOk: (ok: T2) => U2,
    ifErr: (err: Err) => U2
  ): ParserArrow<Result<T2>, U2> {
    return this.core.FallibleArr(ifOk, ifErr);
  }

  repeat<InnerU>(
    this: ParserArrow<void, Result<InnerU>>
  ): ParserArrow<void, InnerU[]> {
    return this.core.repeat(this.label("repeated")).label("repeat");
  }

  bothOk<Pre, Left, Right>(
    this: ParserArrow<Pre, [Result<Left>, Result<Right>]>
  ): ParserArrow<Pre, Result<[Left, Right]>> {
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
  fallible(): ParserArrow<T, Result<U>> {
    return this.map(input => ok(input));
  }

  orElse<V, InnerU>(
    this: ParserArrow<T, Result<InnerU>>,
    arrow: ParserArrow<T, Result<V>>
  ): ParserArrow<T, Result<InnerU | V>> {
    return this.core.OrElse(this, arrow);
  }

  checkNext<InnerU, V>(
    this: ParserArrow<T, Result<InnerU>>,
    arrow: ParserArrow<T, Result<V>>
  ): ParserArrow<T, Result<InnerU>> {
    return this.mergeNext(arrow).ifOk(([left]) => left);
  }

  andCheck<InnerU, V>(
    this: ParserArrow<T, Result<InnerU>>,
    arrow: ParserArrow<Result<InnerU>, Result<V>>
  ): ParserArrow<T, Result<InnerU>> {
    return this.core
      .mergeAndThen(this, arrow)
      .bothOk()
      .ifOk(([left]) => left);
  }

  ifOk<V, InnerU>(
    this: ParserArrow<T, Result<InnerU>>,
    callback: (input: InnerU) => V
  ): ParserArrow<T, Result<V>> {
    return this.core.andThen(
      this,
      this.core.FallibleArr(
        input => ok(callback(input)),
        err => err
      )
    );
  }

  mergeNext<InnerU, V>(
    this: ParserArrow<T, Result<InnerU>>,
    arrow: ParserArrow<T, Result<V>>
  ): ParserArrow<T, Result<[InnerU, V]>> {
    return this.core.mergeNext(this, arrow).bothOk();
  }

  extend<K extends string, InnerU, V>(
    this: ParserArrow<T, Result<InnerU>>,
    key: K,
    arrow: ParserArrow<T, Result<V>>
  ): ParserArrow<T, Result<InnerU & ResultObject<K, V>>> {
    return this.mergeNext(arrow).ifOk(([left, right]: [InnerU, V]) => {
      return {
        ...left,
        [key]: right,
      } as InnerU & ResultObject<K, V>;
    });
  }

  or<V, InnerU>(
    this: ParserArrow<T, Result<InnerU>>,
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
    this: ParserArrow<T, Result<InnerU>>,
    name: K
  ): ParserArrow<T, Result<ResultObject<K, InnerU>>> {
    return this.ifOk(val => {
      return { [name]: val } as ResultObject<K, InnerU>;
    });
  }

  present<Pre>(this: ParserArrow<Pre, T[]>): ParserArrow<Pre, Result<void>> {
    return this.core.andThen(
      this,
      this.core.Arr(list =>
        list.length > 0
          ? (ok(undefined) as Result<void>)
          : (err(undefined, "not present") as Result<void>)
      )
    );
  }

  not<InnerU>(
    this: ParserArrow<T, Result<InnerU>>
  ): ParserArrow<T, Result<void>> {
    return this.core.andThen(
      this,
      this.core.FallibleArr(
        _ => err(undefined, "not"),
        _ => ok(undefined)
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
    this: ParserArrow<T, Result<InnerU>>
  ): ParserArrow<T, Result<InnerU>> {
    return this.core.Atomic(this);
  }

  token<K extends TokenType & keyof TokenMap>(
    type: K
  ): ParserArrow<void, Result<TokenMap[K]>> {
    return this.core.token(type);
  }

  eof(): ParserArrow<T, Result<void>> {
    return this.core.eof();
  }

  parent<T>(
    desc: string,
    tokenType: TokenType,
    arrow: ParserArrow<void, Result<T>>
  ): ParserArrow<void, Result<{ result: T; token: Token }>> {
    return this.core.parent(desc, tokenType, arrow);
  }

  label(label: string): ParserArrow<T, U> {
    return this.core.label(label, this);
  }

  lookahead(): ParserArrow<void, Token | undefined> {
    return this.core.lookahead();
  }
}

export type Inner<T> = T extends Result<infer R> ? R : never;

/**
 * InnerT is the previous result
 * InnerU is the successful value when executing this step
 */
export class SequenceBuilder<InnerT, InnerU> {
  static arr<T, U>(callback: (input: T) => U): SequenceBuilder<T, U> {
    return new SequenceBuilder((_, last) => {
      if (isOk(last)) {
        return ok(callback(last.value));
      } else {
        return last;
      }
    });
  }

  constructor(private start: Step<InnerT, InnerU>) {
    if (start instanceof SequenceBuilder) {
      debugger;
    }
  }

  run(
    iterator: CombinatorTokensIterator,
    prev: Result<InnerT>
  ): Result<InnerU> {
    return this.start(iterator, prev);
  }

  named<K extends string>(
    name: K
  ): SequenceBuilder<InnerT, ResultObject<K, InnerU>> {
    return new SequenceBuilder<InnerT, ResultObject<K, InnerU>>(
      (iterator, last) => {
        let prev = this.start(iterator, last);
        if (isOk(prev)) {
          return (ok({ [name]: prev.value }) as unknown) as Result<
            ResultObject<K, InnerU>
          >;
        } else {
          return { ...prev, iterator };
        }
      }
    );
  }

  andThen<V>(
    callback: (input: InnerU) => Result<V>
  ): SequenceBuilder<InnerT, V>;
  andThen<V>(callback: (input: InnerU) => V): SequenceBuilder<InnerT, V>;
  andThen<V>(
    callback: (input: InnerU) => Err | V | Ok<V>
  ): SequenceBuilder<InnerT, V> {
    return new SequenceBuilder((iterator, last) => {
      let prev = this.start(iterator, last);
      if (isOk(prev)) {
        let result = callback(prev.value);
        if (isResult(result)) {
          return { ...result, iterator };
        } else {
          return ok(result);
        }
      } else {
        return { ...prev, iterator };
      }
    });
  }

  next<V>(sequence: SequenceBuilder<InnerU, V>): SequenceBuilder<InnerT, V> {
    return new SequenceBuilder((iterator, last) => {
      let prev = this.start(iterator, last);

      if (isOk(prev)) {
        let result: Result<V> = sequence.run(iterator, prev);
        return result as Result<V>;
      } else {
        return prev as Result<V>;
      }
    });
  }

  concat<V>(
    other: SequenceBuilder<void, V>
  ): SequenceBuilder<InnerT, [InnerU, V]> {
    return new SequenceBuilder((iterator, last) => {
      if (isOk(last)) {
        let lastResult = this.run(iterator, last);
        let otherResult = other.run(iterator, ok(undefined));

        if (isOk(lastResult) && isOk(otherResult)) {
          return ok([lastResult.value, otherResult.value]);
        } else if (isErr(otherResult)) {
          return { ...otherResult } as Result<[InnerU, V]>;
        } else {
          return { ...lastResult } as Result<[InnerU, V]>;
        }
      } else {
        return last;
      }
    });
  }

  extend<K extends string, V>(
    key: K,
    sequence: SequenceBuilder<void, V>
  ): SequenceBuilder<InnerT, InnerU & ResultObject<K, V>> {
    let concat = this.concat(sequence);
    let result = concat.andThen(([a, b]) => {
      let right = { [key]: b } as ResultObject<K, V>;
      return { ...a, ...right };
    });

    return result;
  }

  mapErr<V>(
    callback: (input: Err) => Result<V>
  ): SequenceBuilder<InnerT, InnerU | V>;
  mapErr<V>(callback: (input: Err) => V): SequenceBuilder<InnerT, InnerU | V>;
  mapErr<V>(
    callback: (input: Err) => V | Result<V>
  ): SequenceBuilder<InnerT, InnerU | V> {
    return new SequenceBuilder((iterator, last) => {
      let prev = this.start(iterator, last);
      if (isErr(prev)) {
        let result = callback(prev);
        if (isResult(result)) {
          return { ...result } as Result<InnerU | V>;
        } else {
          return ok(result) as Result<InnerU | V>;
        }
      } else {
        return { ...prev } as Result<InnerU | V>;
      }
    });
  }

  or<V>(value: V | Thunk<V>): SequenceBuilder<InnerT, InnerU | V> {
    return new SequenceBuilder((iterator, last) => {
      let prev = this.start(iterator, last);

      if (isOk(prev)) {
        return prev as Result<InnerU | V>;
      } else if (typeof value === "function") {
        return ok((value as Thunk<V>)()) as Result<V>;
      } else {
        return ok(value) as Result<V>;
      }
    });
  }

  get not(): SequenceBuilder<InnerT, void> {
    return new SequenceBuilder((iterator, last) => {
      let prev = this.start(iterator, last);

      if (isOk(prev)) {
        return iterator.err("not");
      } else {
        return ok(undefined);
      }
    });
  }

  check(
    sequence: SequenceBuilder<InnerU, InnerU>
  ): SequenceBuilder<InnerT, InnerU> {
    return new SequenceBuilder((iterator, last) => {
      let prev = this.start(iterator, last);

      if (isOk(prev)) {
        let check = sequence.run(iterator, prev);

        if (isOk(check)) {
          return prev as Result<InnerU>;
        } else {
          return check as Result<InnerU>;
        }
      } else {
        return prev as Result<InnerU>;
      }
    });
  }

  andCheck(
    sequence: SequenceBuilder<void, void>
  ): SequenceBuilder<InnerT, InnerU> {
    return new SequenceBuilder((iterator, last) => {
      let prev = this.start(iterator, last);

      if (isOk(prev)) {
        let check = sequence.run(iterator, ok(undefined));

        if (isOk(check)) {
          return prev as Result<InnerU>;
        } else {
          return check as Result<InnerU>;
        }
      } else {
        return prev;
      }
    });
  }
}

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
