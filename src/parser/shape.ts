import type { default as TokensIterator, PeekedToken } from "./tokens-iterator";

export const EXPAND = Symbol("EXPAND");
export const RESULT_KIND = Symbol("RESULT_KIND");

export interface Shape<T> {
  readonly desc: string;
  [EXPAND](iterator: TokensIterator): T;
}

export type ShapeResult<T extends Shape<Result<unknown>>> = T extends Shape<
  Result<infer R>
>
  ? R
  : T extends Shape<infer R>
  ? R
  : never;

export function ok<T>(value: T): Ok<T> {
  return {
    [RESULT_KIND]: "ok",
    kind: "ok",
    value,
  };
}

export function err(
  token: PeekedToken & { rejected: true },
  reason: string
): Err {
  return {
    [RESULT_KIND]: "err",
    kind: "err",
    token,
    reason,
    fatal: false,
  };
}

export function fatalError(
  token: PeekedToken & { rejected: true },
  reason: string
): Err {
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

  abstract mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U>;
  abstract map<U>(callback: (input: T) => U): Sequence<U>;
  abstract andThen<U>(callback: (input: T) => Result<U>): Sequence<U>;
}

export class OkSequence<T> extends AbstractSequence<T> implements Ok<T> {
  declare inner: Ok<T>;
  readonly kind = "ok";
  readonly [RESULT_KIND] = "ok";
  readonly value: T;

  constructor(inner: Ok<T>) {
    super(inner);
    this.value = inner.value;
  }

  mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U> {
    let result = callback(this);
    return seq(result);
  }

  map<U>(callback: (input: T) => U): Sequence<U> {
    return new OkSequence(ok(callback(this.value)));
  }

  andThen<U>(callback: (input: T) => Result<U>): Sequence<U> {
    return seq(callback(this.value));
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

  constructor(inner: Err) {
    super(inner);
    this.token = inner.token;
    this.reason = inner.reason;
    this.fatal = inner.fatal;
  }

  mapResult<U>(callback: (input: Result<T>) => Result<U>): Sequence<U> {
    let result = callback(this);
    return seq(result);
  }

  map<U>(_callback: (input: T) => U): Sequence<U> {
    return (this as unknown) as Sequence<U>;
  }

  andThen<U>(_callback: (input: T) => Result<U>): Sequence<U> {
    return (this as unknown) as Sequence<U>;
  }
}

export type Sequence<T> = OkSequence<T> | ErrSequence<T>;

export function seq<T>(input: Result<T>): Sequence<T> {
  if (input[RESULT_KIND] === "ok") {
    return new OkSequence(input as Ok<T>);
  } else {
    return new ErrSequence(input as Err);
  }
}
