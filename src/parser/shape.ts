import type { default as TokensIterator, PeekedToken } from "./tokens-iterator";

export const EXPAND = Symbol("EXPAND");

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

export interface Ok<T> {
  kind: "ok";
  value: T;
}

export function ok<T>(value: T): Ok<T> {
  return { kind: "ok", value };
}

export interface Err {
  kind: "err";
  token: PeekedToken;
  reason: string;
  fatal?: true;
}

export function err(
  token: PeekedToken & { rejected: true },
  reason: string
): Err {
  return {
    kind: "err",
    token,
    reason,
  };
}

export function fatalError(
  token: PeekedToken & { rejected: true },
  reason: string
): Err {
  return {
    kind: "err",
    token,
    reason,
    fatal: true,
  };
}

export type Result<T> = Ok<T> | Err;

export function mapResult<T, U>(
  result: Result<T>,
  callback: (input: T) => Result<U>
): Result<U> {
  if (result.kind === "err") {
    return result;
  }

  return callback(result.value);
}

export type ResultGenerator<T, U> = Generator<Result<T>, U, Result<T>>;

export class Sequence<T> {
  constructor(private inner: Result<T>) {}

  get kind(): "err" | "ok" {
    return this.inner.kind;
  }

  get value(): T | undefined {
    return this.inner.kind === "err" ? undefined : this.inner.value;
  }

  mapResult<U>(
    callback: (input: Result<T>) => Result<U>
  ): Sequence<U> & Result<U> {
    // The type system doesn't know that our `kind` and `value` are guaranteed
    // to be valid results, so we tell it
    if (this.inner.kind === "err") {
      return new Sequence(this.inner) as Sequence<U> & Err;
    } else {
      return new Sequence(callback(this.inner)) as Sequence<U> & Result<U>;
    }
  }

  map<U>(callback: (input: T) => U): Sequence<U> & Result<U> {
    // The type system doesn't know that our `kind` and `value` are guaranteed
    // to be valid results, so we tell it
    if (this.inner.kind === "err") {
      return new Sequence(this.inner) as Sequence<U> & Err;
    } else {
      return new Sequence(ok(callback(this.inner.value))) as Sequence<U> &
        Ok<U>;
    }
  }

  andThen<U>(callback: (input: T) => Result<U>): Sequence<U> & Result<U> {
    // The type system doesn't know that our `kind` and `value` are guaranteed
    // to be valid results, so we tell it
    if (this.inner.kind === "err") {
      return new Sequence(this.inner) as Sequence<U> & Err;
    } else {
      return new Sequence(callback(this.inner.value)) as Sequence<U> &
        Result<U>;
    }
  }
}

export function seq<T>(input: Result<T>): Sequence<T> & Result<T> {
  return new Sequence(input) as Sequence<T> & Result<T>;
}
