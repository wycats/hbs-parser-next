import type { default as TokensIterator, PeekedToken } from "./tokens-iterator";

export interface FallibleShape<T> {
  expandFallible(iterator: TokensIterator): Result<T>;
}

export interface InfallibleShape<T> {
  expandInfallible(iterator: TokensIterator): T;
}

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

export function err(token: PeekedToken, reason: string): Err {
  return {
    kind: "err",
    token,
    reason,
  };
}

export function fatalError(token: PeekedToken, reason: string): Err {
  return {
    kind: "err",
    token,
    reason,
    fatal: true,
  };
}

export type Result<T> = Ok<T> | Err;
