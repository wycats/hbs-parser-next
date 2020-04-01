import { SourceSpan } from "../span";
export const enum TokenType {
  Root = "Root",
  Interpolate = "Interpolate",
  TrustedInterpolate = "TrustedInterpolate",
  Sexp = "Sexp",
  Identifier = "Identifier",
  Argument = "Argument",
  Dot = "Dot",
  Eq = "Eq",
  WS = "WS",

  // HTML
  Text = "Text",
  StartTag = "StartTag",
  EndTag = "EndTag",
  AttributeName = "AttributeName",
  AttributeValue = "AttributeValue",
  ValuedAttribute = "ValuedAttribute"
}

export type LeafTokenType =
  | TokenType.Identifier
  | TokenType.Dot
  | TokenType.Eq
  | TokenType.WS
  | TokenType.Text
  | TokenType.AttributeName;

export type LeafToken<T extends LeafTokenType> = BaseToken & {
  type: T;
  span: SourceSpan;
};

export interface BaseToken {
  span: SourceSpan;
}

export function leaf<T extends keyof LeafTokenMap>(
  type: T
): (span: SourceSpan) => LeafTokenMap[T] {
  return span => ({ type, span } as LeafTokenMap[T]);
}

export const id = leaf(TokenType.Identifier);
export const dot = leaf(TokenType.Dot);
export const eq = leaf(TokenType.Eq);
export const ws = leaf(TokenType.WS);
export const text = leaf(TokenType.Text);
export const bareAttr: (span: SourceSpan) => Token & AttributeToken = leaf(
  TokenType.AttributeName
);
export function arg(span: SourceSpan): ArgumentToken {
  return {
    type: TokenType.Argument,
    name: { start: span.start + 1, end: span.end },
    span
  };
}

export type IdentifierToken = LeafToken<TokenType.Identifier>;
export type DotToken = LeafToken<TokenType.Dot>;
export type EqToken = LeafToken<TokenType.Eq>;
export type WSToken = LeafToken<TokenType.WS>;
export type TextToken = LeafToken<TokenType.Text>;
export type AttributeNameToken = LeafToken<TokenType.AttributeName>;

/**
 * A leaf token is a simple token whose value is represented entirely
 * by the text it contains with no additional structure.
 *
 * For example, an argument is not a leaf because it's structured: its
 * name is the part of the token after `@`.
 */

export interface LeafTokenMap {
  [TokenType.Identifier]: IdentifierToken;
  [TokenType.Dot]: DotToken;
  [TokenType.Eq]: EqToken;
  [TokenType.WS]: WSToken;
  [TokenType.Text]: TextToken;
  [TokenType.AttributeName]: AttributeNameToken;
}

export type AnyLeafToken = LeafTokenMap[keyof LeafTokenMap];

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

export interface StartTagToken extends BaseToken {
  type: TokenType.StartTag;
  name: SourceSpan;
  attributes: readonly AttributeToken[];
}

export interface EndTagToken extends BaseToken {
  type: TokenType.EndTag;
  name: SourceSpan;
}

export const enum AttributeValueType {
  Unquoted = "Unquoted",
  SingleQuoted = "SingleQuoted",
  DoubleQuoted = "DoubleQuoted"
}

export interface AttributeValueToken extends BaseToken {
  type: TokenType.AttributeValue;
  valueType: AttributeValueType;
  value: SourceSpan;
}

export interface ValuedAttributeToken extends BaseToken {
  type: TokenType.ValuedAttribute;
  name: AttributeNameToken;
  value: AttributeValueToken;
}

export function startTag(
  { name, attrs }: { name: SourceSpan; attrs?: readonly AttributeToken[] },
  span: SourceSpan
): StartTagToken {
  return {
    type: TokenType.StartTag,
    span,
    name,
    attributes: attrs || []
  };
}

export function endTag(name: SourceSpan, span: SourceSpan): EndTagToken {
  return {
    type: TokenType.EndTag,
    span,
    name
  };
}

export type AttributeToken =
  | AttributeNameToken
  | ValuedAttributeToken
  | WSToken;

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

export interface TokenMap extends LeafTokenMap {
  [TokenType.Argument]: ArgumentToken;
  [TokenType.Sexp]: SexpToken;
  [TokenType.Interpolate]: InterpolateToken;
  [TokenType.TrustedInterpolate]: TrustedInterpolateToken;
  [TokenType.StartTag]: StartTagToken;
  [TokenType.EndTag]: EndTagToken;
  [TokenType.AttributeName]: AttributeNameToken;
  [TokenType.AttributeValue]: AttributeValueToken;
  [TokenType.ValuedAttribute]: ValuedAttributeToken;
}

export type Token = TokenMap[keyof TokenMap];
