import { SourceSpan } from "../span";
import { BaseToken } from "./read";
export const enum TokenType {
  Root = "Root",
  Interpolate = "Interpolate",
  TrustedInterpolate = "TrustedInterpolate",
  Sexp = "Sexp",
  Identifier = "Identifier",
  Argument = "Argument",
  Dot = "Dot",
  Eq = "Eq",
  WS = "WS"
}

export type LeafTokenType =
  | TokenType.Identifier
  | TokenType.Dot
  | TokenType.Eq
  | TokenType.WS;

export type LeafToken<T extends LeafTokenType> = BaseToken & {
  type: T;
  span: SourceSpan;
};

export type IdentifierToken = LeafToken<TokenType.Identifier>;
export type DotToken = LeafToken<TokenType.Dot>;
export type EqToken = LeafToken<TokenType.Eq>;
export type WSToken = LeafToken<TokenType.WS>;

/**
 * A leaf token is a simple token whose value is represented entirely
 * by the text it contains with no additional structure.
 *
 * For example, an argument is not a leaf because it's structured: its
 * name is the part of the token after `@`.
 */
export type AnyLeafToken = IdentifierToken | DotToken | EqToken | WSToken;

export interface ArgumentToken extends BaseToken {
  type: TokenType.Argument;
  name: SourceSpan;
}

export interface SexpToken extends BaseToken {
  type: TokenType.Sexp;
  children: readonly Token[];
}

export interface InterpolateToken extends BaseToken {
  type: TokenType.Interpolate;
  children: readonly Token[];
}

export interface TrustedInterpolateToken extends BaseToken {
  type: TokenType.TrustedInterpolate;
  children: readonly Token[];
}

export function sexp(children: readonly Token[], span: SourceSpan): Token {
  return {
    type: TokenType.Sexp,
    span,
    children
  };
}
export function interpolate(
  children: readonly Token[],
  span: SourceSpan
): InterpolateToken {
  return {
    type: TokenType.Interpolate,
    span,
    children
  };
}

export function trustedInterpolate(
  children: readonly Token[],
  span: SourceSpan
): TrustedInterpolateToken {
  return {
    type: TokenType.TrustedInterpolate,
    span,
    children
  };
}

export interface RootToken extends BaseToken {
  type: TokenType.Root;
  children: readonly Token[];
}

export function root(children: readonly Token[], span: SourceSpan): RootToken {
  return {
    type: TokenType.Root,
    span,
    children
  };
}
export type Token =
  | AnyLeafToken
  | ArgumentToken
  | SexpToken
  | InterpolateToken
  | TrustedInterpolateToken;
