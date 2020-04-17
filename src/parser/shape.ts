import type { Token } from "../read/tokens";
import type { ShapeConstructor } from "./shapes/abstract";
import type { CombinatorTokensIterator } from "./tokens-iterator";

export const EXPAND = Symbol("EXPAND");
export const RESULT_KIND = Symbol("RESULT_KIND");

export interface Shape<T> {
  readonly desc: string;
  readonly fallible: boolean;
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

export function ok<T>(value: T, iterator: CombinatorTokensIterator): Ok<T> {
  return {
    [RESULT_KIND]: "ok",
    kind: "ok",
    iterator,
    value,
  };
}

export function err(
  token: Token,
  reason: string,
  iterator: CombinatorTokensIterator
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
  token: Token,
  reason: string,
  iterator: CombinatorTokensIterator
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
  iterator: CombinatorTokensIterator;
  value: T;
}

export interface Err {
  [RESULT_KIND]: "err";
  // compat
  kind: "err";
  iterator: CombinatorTokensIterator;
  token: Token;
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
  constructor(
    protected inner: Result<T>,
    readonly iterator: CombinatorTokensIterator
  ) {}

  abstract withIterator(iterator: CombinatorTokensIterator): Sequence<T>;

  abstract named<K extends string>(name: K): Sequence<ResultObject<K, T>>;

  abstract mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U>;

  abstract andThen<U>(callback: (input: T) => Result<U>): Sequence<U>;
  abstract andThen<U>(callback: (input: T) => U): Sequence<U>;
  abstract andThen<U>(callback: (input: T) => U | Result<U>): Sequence<U>;

  abstract next<U>(
    callback: (iterator: CombinatorTokensIterator) => Result<U>
  ): Sequence<U>;
  abstract next<U>(
    callback: (iterator: CombinatorTokensIterator) => U
  ): Sequence<U>;
  abstract next<U>(
    callback: (iterator: CombinatorTokensIterator) => U | Result<U>
  ): Sequence<U>;

  abstract extend<K extends string, U>(
    key: K,
    callback: (iterator: CombinatorTokensIterator) => Result<U>
  ): Sequence<T & ResultObject<K, U>>;
  abstract extend<K extends string, U>(
    key: K,
    callback: (iterator: CombinatorTokensIterator) => U
  ): Sequence<T & ResultObject<K, U>>;
  abstract extend<K extends string, U>(
    key: K,
    callback: (iterator: CombinatorTokensIterator) => U | Result<U>
  ): Sequence<T & ResultObject<K, U>>;

  abstract mapErr<U>(callback: (input: Err) => Result<U>): Result<T | U>;
  abstract mapErr<U>(callback: (input: Err) => U): Result<T | U>;
  abstract mapErr<U>(callback: (input: Err) => Result<U> | U): Result<T | U>;

  abstract or<U>(callback: (input: Err) => U): T | U;
  abstract or<U>(callback: U): T | U;
  abstract or<U>(callback: (input: Err) => U | U): T | U;

  abstract andCheck(
    callback: (input: T, iterator: CombinatorTokensIterator) => Result<unknown>
  ): Sequence<T>;

  abstract checkNext(
    callback: (iterator: CombinatorTokensIterator) => Result<unknown>
  ): Sequence<T>;
}

export class OkSequence<T> extends AbstractSequence<T> implements Ok<T> {
  static fromResult<T>(
    result: Ok<T>,
    iterator: CombinatorTokensIterator
  ): OkSequence<T> {
    if (result instanceof OkSequence) {
      return result;
    } else {
      return new OkSequence(result.value, iterator);
    }
  }

  declare inner: Ok<T>;
  readonly kind = "ok";
  readonly [RESULT_KIND] = "ok";
  readonly value: T;

  constructor(value: T, iterator: CombinatorTokensIterator) {
    super({ kind: "ok", [RESULT_KIND]: "ok", value, iterator }, iterator);
    this.value = value;
  }

  withIterator(iterator: CombinatorTokensIterator): OkSequence<T> {
    return new OkSequence(this.value, iterator);
  }

  named<K extends string>(name: K): Sequence<ResultObject<K, T>> {
    return seq(
      ok({ [name]: this.value }, this.iterator),
      this.iterator
    ) as Sequence<ResultObject<K, T>>;
  }

  mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U> {
    let result = callback(this);
    return seq(result, this.iterator);
  }

  andThen<U>(callback: (input: T) => Result<U>): Sequence<U>;
  andThen<U>(callback: (input: T) => U): Sequence<U>;
  andThen<U>(callback: (input: T) => U | Result<U>): Sequence<U> {
    let result = callback(this.value);

    if (isResult(result)) {
      return seq(result, this.iterator);
    } else {
      return new OkSequence(result, this.iterator);
    }
  }

  next<U>(
    callback: (iterator: CombinatorTokensIterator) => Result<U>
  ): Sequence<U>;
  next<U>(callback: (iterator: CombinatorTokensIterator) => U): Sequence<U>;
  next<U>(
    callback: (iterator: CombinatorTokensIterator) => U | Result<U>
  ): Sequence<U> {
    let result = callback(this.iterator);

    if (isResult(result)) {
      return seq(result, this.iterator);
    } else {
      return new OkSequence(result, this.iterator);
    }
  }

  extend<K extends string, U>(
    key: K,
    callback: (iterator: CombinatorTokensIterator) => Result<U>
  ): Sequence<T & ResultObject<K, U>>;
  extend<K extends string, U>(
    key: K,
    callback: (iterator: CombinatorTokensIterator) => U
  ): Sequence<T & ResultObject<K, U>>;
  extend<K extends string, U>(
    key: K,
    callback: (iterator: CombinatorTokensIterator) => U | Result<U>
  ): Sequence<T & ResultObject<K, U>> {
    let result = callback(this.iterator);

    if (isResult(result)) {
      if (isOk(result)) {
        return seq(
          ok({ ...this.value, [key]: result.value }, this.iterator),
          this.iterator
        ) as Sequence<T & ResultObject<K, U>>;
      } else {
        return seq(result, this.iterator);
      }
    } else {
      return seq(
        ok({ ...this.value, [key]: result }, this.iterator),
        this.iterator
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
    callback: (iterator: CombinatorTokensIterator) => Result<unknown>
  ): Sequence<T> {
    let result = callback(this.iterator);

    if (result.kind === "err") {
      return seq(result, this.iterator);
    } else {
      return this;
    }
  }

  andCheck(
    callback: (input: T, iterator: CombinatorTokensIterator) => Result<unknown>
  ): Sequence<T> {
    let result = callback(this.value, this.iterator);

    if (result.kind === "err") {
      return seq(result, this.iterator);
    } else {
      return this;
    }
  }
}

export class ErrSequence<T> extends AbstractSequence<T> implements Err {
  static fromResult<T>(
    result: Err,
    iterator: CombinatorTokensIterator
  ): ErrSequence<T> {
    if (result instanceof ErrSequence) {
      return result.withIterator(iterator);
    } else {
      return new ErrSequence(
        result.token,
        result.reason,
        result.fatal,
        iterator
      );
    }
  }

  declare inner: Err;
  declare type: T;
  readonly kind = "err";
  readonly [RESULT_KIND] = "err";

  constructor(
    readonly token: Token,
    readonly reason: string,
    readonly fatal: boolean,
    iterator: CombinatorTokensIterator
  ) {
    super(
      { kind: "err", [RESULT_KIND]: "err", token, reason, fatal, iterator },
      iterator
    );
  }

  withIterator(iterator: CombinatorTokensIterator): ErrSequence<T> {
    return new ErrSequence(this.token, this.reason, this.fatal, iterator);
  }

  named<K extends string>(_name: K): Sequence<ResultObject<K, T>> {
    return (this as unknown) as Sequence<ResultObject<K, T>>;
  }

  mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U> {
    let result = callback(this);
    return seq(result, this.iterator);
  }

  next<U>(
    _callback: (iterator: CombinatorTokensIterator) => Result<U>
  ): Sequence<U>;
  next<U>(_callback: (iterator: CombinatorTokensIterator) => U): Sequence<U>;
  next<U>(
    _callback: (iterator: CombinatorTokensIterator) => U | Result<U>
  ): Sequence<U> {
    return (this as unknown) as Sequence<U>;
  }

  andThen<U>(_callback: (input: T) => Result<U>): Sequence<U>;
  andThen<U>(_callback: (input: T) => U): Sequence<U>;
  andThen<U>(_callback: (input: T) => U | Result<U>): Sequence<U> {
    return (this as unknown) as Sequence<U>;
  }

  extend<K extends string, U>(
    key: K,
    callback: (iterator: CombinatorTokensIterator) => Result<U>
  ): Sequence<T & ResultObject<K, U>>;
  extend<K extends string, U>(
    key: K,
    callback: (iterator: CombinatorTokensIterator) => U
  ): Sequence<T & ResultObject<K, U>>;
  extend<K extends string, U>(
    _key: K,
    _callback: (iterator: CombinatorTokensIterator) => U | Result<U>
  ): Sequence<T & ResultObject<K, U>> {
    return (this as unknown) as Sequence<T & ResultObject<K, U>>;
  }

  mapErr<U>(callback: (input: Err) => Result<U>): Sequence<T | U>;
  mapErr<U>(callback: (input: Err) => U): Sequence<T | U>;
  mapErr<U>(callback: (input: Err) => Result<U> | U): Sequence<T | U> {
    let result = callback(this) as Result<U> | U;

    if (isResult(result)) {
      return seq(result, this.iterator);
    } else {
      return new OkSequence(result, this.iterator);
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
    _callback: (input: T, iterator: CombinatorTokensIterator) => Result<unknown>
  ): Sequence<T> {
    return this;
  }

  checkNext(
    _callback: (iterator: CombinatorTokensIterator) => Result<unknown>
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

export function seq<T>(
  input: Result<T> & Err,
  iterator: CombinatorTokensIterator
): ErrSequence<T>;
export function seq<T>(
  input: Result<T> & Ok<T>,
  iterator: CombinatorTokensIterator
): OkSequence<T>;
export function seq<T>(
  input: Result<T>,
  iterator: CombinatorTokensIterator
): Sequence<T>;
export function seq<T>(
  input: Result<T>,
  iterator: CombinatorTokensIterator
): Sequence<T> {
  if (isSequence(input)) {
    return input.withIterator(iterator);
  }

  if (input[RESULT_KIND] === "ok") {
    return OkSequence.fromResult(input as Ok<T>, iterator);
  } else {
    return ErrSequence.fromResult(input as Err, iterator);
  }
}

export type ResultObject<K extends string, T> = {
  [P in K]: T;
};
