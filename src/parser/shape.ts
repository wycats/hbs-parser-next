import type { default as TokensIterator, PeekedToken } from "./tokens-iterator";
import type { ShapeConstructor } from "./shapes/abstract";

export const EXPAND = Symbol("EXPAND");
export const RESULT_KIND = Symbol("RESULT_KIND");

export interface Shape<T> {
  readonly desc: string;
  readonly fallible: boolean;
  [EXPAND](iterator: TokensIterator): T;
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

export function ok<T>(value: T, iterator: TokensIterator): Ok<T> {
  return {
    [RESULT_KIND]: "ok",
    kind: "ok",
    iterator,
    value,
  };
}

export function err(
  token: PeekedToken & { rejected: true },
  reason: string,
  iterator: TokensIterator
): Err {
  return {
    [RESULT_KIND]: "err",
    kind: "err",
    iterator,
    token,
    reason,
    fatal: false,
  };
}

export function fatalError(
  token: PeekedToken & { rejected: true },
  reason: string,
  iterator: TokensIterator
): Err {
  return {
    [RESULT_KIND]: "err",
    kind: "err",
    iterator,
    token,
    reason,
    fatal: true,
  };
}

export interface Ok<T> {
  [RESULT_KIND]: "ok";
  // compat
  kind: "ok";
  iterator: TokensIterator;
  value: T;
}

export interface Err {
  [RESULT_KIND]: "err";
  // compat
  kind: "err";
  iterator: TokensIterator;
  token: PeekedToken;
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
  return input[RESULT_KIND] === "ok";
}

export function isErr<T>(input: Result<T>): input is Err {
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

export abstract class AbstractSequence<T> {
  constructor(protected inner: Result<T>) {}

  abstract named<K extends string>(name: K): Sequence<ResultObject<K, T>>;

  abstract mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U>;

  abstract andThen<U>(callback: (input: T) => Result<U>): Sequence<U>;
  abstract andThen<U>(callback: (input: T) => U): Sequence<U>;
  abstract andThen<U>(callback: (input: T) => U | Result<U>): Sequence<U>;

  abstract next<U>(
    callback: (iterator: TokensIterator) => Result<U>
  ): Sequence<U>;
  abstract next<U>(callback: (iterator: TokensIterator) => U): Sequence<U>;
  abstract next<U>(
    callback: (iterator: TokensIterator) => U | Result<U>
  ): Sequence<U>;

  abstract extend<K extends string, U>(
    key: K,
    callback: (iterator: TokensIterator) => Result<U>
  ): Sequence<T & ResultObject<K, U>>;
  abstract extend<K extends string, U>(
    key: K,
    callback: (iterator: TokensIterator) => U
  ): Sequence<T & ResultObject<K, U>>;
  abstract extend<K extends string, U>(
    key: K,
    callback: (iterator: TokensIterator) => U | Result<U>
  ): Sequence<T & ResultObject<K, U>>;

  abstract mapErr<U>(callback: (input: Err) => Result<U>): Result<T | U>;
  abstract mapErr<U>(callback: (input: Err) => U): Result<T | U>;
  abstract mapErr<U>(callback: (input: Err) => Result<U> | U): Result<T | U>;

  abstract or<U>(callback: (input: Err) => U): T | U;
  abstract or<U>(callback: U): T | U;
  abstract or<U>(callback: (input: Err) => U | U): T | U;

  abstract andCheck(
    callback: (input: T, iterator: TokensIterator) => Result<unknown>
  ): Sequence<T>;

  abstract checkNext(
    callback: (iterator: TokensIterator) => Result<unknown>
  ): Sequence<T>;
}

export class OkSequence<T> extends AbstractSequence<T> implements Ok<T> {
  declare inner: Ok<T>;
  readonly kind = "ok";
  readonly [RESULT_KIND] = "ok";
  readonly value: T;
  readonly iterator: TokensIterator;

  constructor(inner: Ok<T>) {
    super(inner);
    this.value = inner.value;
    this.iterator = inner.iterator;
  }

  named<K extends string>(name: K): Sequence<ResultObject<K, T>> {
    return seq(ok({ [name]: this.value }, this.iterator)) as Sequence<
      ResultObject<K, T>
    >;
  }

  mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U> {
    let result = callback(this);
    return seq(result);
  }

  andThen<U>(callback: (input: T) => Result<U>): Sequence<U>;
  andThen<U>(callback: (input: T) => U): Sequence<U>;
  andThen<U>(callback: (input: T) => U | Result<U>): Sequence<U> {
    let result = callback(this.value);

    if (isResult(result)) {
      return seq(result);
    } else {
      return new OkSequence(ok(result, this.iterator));
    }
  }

  next<U>(callback: (iterator: TokensIterator) => Result<U>): Sequence<U>;
  next<U>(callback: (iterator: TokensIterator) => U): Sequence<U>;
  next<U>(callback: (iterator: TokensIterator) => U | Result<U>): Sequence<U> {
    let result = callback(this.iterator);

    if (isResult(result)) {
      return seq(result);
    } else {
      return new OkSequence(ok(result, this.iterator));
    }
  }

  extend<K extends string, U>(
    key: K,
    callback: (iterator: TokensIterator) => Result<U>
  ): Sequence<T & ResultObject<K, U>>;
  extend<K extends string, U>(
    key: K,
    callback: (iterator: TokensIterator) => U
  ): Sequence<T & ResultObject<K, U>>;
  extend<K extends string, U>(
    key: K,
    callback: (iterator: TokensIterator) => U | Result<U>
  ): Sequence<T & ResultObject<K, U>> {
    let result = callback(this.iterator);

    if (isResult(result)) {
      if (isOk(result)) {
        return seq(
          ok({ ...this.value, [key]: result.value }, this.iterator)
        ) as Sequence<T & ResultObject<K, U>>;
      } else {
        return seq(result);
      }
    } else {
      return seq(
        ok({ ...this.value, [key]: result }, this.iterator)
      ) as Sequence<T & ResultObject<K, U>>;
    }
  }

  mapErr<U>(_callback: (input: Err) => Result<U>): Sequence<T | U>;
  mapErr<U>(_callback: (input: Err) => U): Sequence<T | U>;
  mapErr<U>(_callback: (input: Err) => Result<U> | U): Sequence<T | U> {
    return this;
  }

  or<U>(_callback: (input: Err) => U): T | U;
  or<U>(_callback: Exclude<U, (input: Err) => U>): T | U;
  or<U>(_callback: ((input: Err) => U) | U): T | U {
    return this.value;
  }

  checkNext(
    callback: (iterator: TokensIterator) => Result<unknown>
  ): Sequence<T> {
    let result = callback(this.iterator);

    if (result.kind === "err") {
      return seq(result);
    } else {
      return this;
    }
  }

  andCheck(
    callback: (input: T, iterator: TokensIterator) => Result<unknown>
  ): Sequence<T> {
    let result = callback(this.value, this.iterator);

    if (result.kind === "err") {
      return seq(result);
    } else {
      return this;
    }
  }
}

export class ErrSequence<T> extends AbstractSequence<T> implements Err {
  declare inner: Err;
  declare type: T;
  readonly kind = "err";
  readonly [RESULT_KIND] = "err";
  readonly token: PeekedToken;
  readonly reason: string;
  readonly fatal: boolean;
  readonly iterator: TokensIterator;

  constructor(inner: Err) {
    super(inner);
    this.token = inner.token;
    this.reason = inner.reason;
    this.fatal = inner.fatal;
    this.iterator = inner.iterator;
  }

  named<K extends string>(_name: K): Sequence<ResultObject<K, T>> {
    return (this as unknown) as Sequence<ResultObject<K, T>>;
  }

  mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U> {
    let result = callback(this);
    return seq(result);
  }

  next<U>(_callback: (iterator: TokensIterator) => Result<U>): Sequence<U>;
  next<U>(_callback: (iterator: TokensIterator) => U): Sequence<U>;
  next<U>(_callback: (iterator: TokensIterator) => U | Result<U>): Sequence<U> {
    return (this as unknown) as Sequence<U>;
  }

  andThen<U>(_callback: (input: T) => Result<U>): Sequence<U>;
  andThen<U>(_callback: (input: T) => U): Sequence<U>;
  andThen<U>(_callback: (input: T) => U | Result<U>): Sequence<U> {
    return (this as unknown) as Sequence<U>;
  }

  extend<K extends string, U>(
    key: K,
    callback: (iterator: TokensIterator) => Result<U>
  ): Sequence<T & ResultObject<K, U>>;
  extend<K extends string, U>(
    key: K,
    callback: (iterator: TokensIterator) => U
  ): Sequence<T & ResultObject<K, U>>;
  extend<K extends string, U>(
    _key: K,
    _callback: (iterator: TokensIterator) => U | Result<U>
  ): Sequence<T & ResultObject<K, U>> {
    return (this as unknown) as Sequence<T & ResultObject<K, U>>;
  }

  mapErr<U>(callback: (input: Err) => Result<U>): Sequence<T | U>;
  mapErr<U>(callback: (input: Err) => U): Sequence<T | U>;
  mapErr<U>(callback: (input: Err) => Result<U> | U): Sequence<T | U> {
    let result = callback(this) as Result<U> | U;

    if (isResult(result)) {
      return seq(result);
    } else {
      return new OkSequence(ok(result, this.iterator));
    }
  }

  or<U>(callback: (input: Err) => U): T | U;
  or<U>(callback: Exclude<U, (input: Err) => U>): T | U;
  or<U>(callback: ((input: Err) => U) | U): T | U {
    if (typeof callback === "function") {
      return (callback as (input: Err) => U)(this);
    } else {
      return callback;
    }
  }

  andCheck(
    _callback: (input: T, iterator: TokensIterator) => Result<unknown>
  ): Sequence<T> {
    return this;
  }

  checkNext(
    _callback: (iterator: TokensIterator) => Result<unknown>
  ): Sequence<T> {
    return this;
  }
}

export type Sequence<T> = Result<T> & (OkSequence<T> | ErrSequence<T>);

export function isSequence<T>(input: Result<T>): input is Sequence<T>;
export function isSequence(input: unknown): input is Sequence<unknown>;
export function isSequence(input: unknown): input is Sequence<unknown> {
  return input instanceof OkSequence || input instanceof ErrSequence;
}

export function seq<T>(input: Result<T>): Sequence<T> {
  if (isSequence(input)) {
    return input;
  }

  if (input[RESULT_KIND] === "ok") {
    return new OkSequence(input as Ok<T>);
  } else {
    return new ErrSequence(input as Err);
  }
}

export type ResultObject<K extends string, T> = {
  [P in K]: T;
};
