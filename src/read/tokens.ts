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
  String = "String",
  Number = "Number",

  // HTML
  Text = "Text",
  Comment = "Comment",
  StartTag = "StartTag",
  EndTag = "EndTag",
  ArgName = "ArgName",
  AttributeName = "AttributeName",
  AttributeValue = "AttributeValue",
  ValuedAttribute = "ValuedAttribute",
  StringInterpolation = "StringInterpolation"
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
export const attrName = leaf(TokenType.AttributeName);

export const enum QuoteType {
  Single,
  Double
}

export interface StringToken extends BaseToken {
  type: TokenType.String;
  data: SourceSpan;
  quote: QuoteType;
}

export function stringToken(
  { data, quote }: { data: SourceSpan; quote: QuoteType },
  span: SourceSpan
): StringToken {
  return {
    type: TokenType.String,
    span,
    data,
    quote
  };
}

export interface NumberToken extends BaseToken {
  type: TokenType.Number;
  negative: SourceSpan | null;
  head: SourceSpan;
  tail: SourceSpan | null;
}

export function numberToken(
  {
    head,
    tail,
    negative
  }: { head: SourceSpan; tail: SourceSpan | null; negative: SourceSpan | null },
  span: SourceSpan
): NumberToken {
  return {
    type: TokenType.Number,
    span,
    negative,
    head,
    tail
  };
}

export function comment(data: SourceSpan, span: SourceSpan): CommentToken {
  return {
    type: TokenType.Comment,
    data,
    span
  };
}

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

export interface CommentToken extends BaseToken {
  type: TokenType.Comment;
  data: SourceSpan;
}

export interface ArgumentToken extends BaseToken {
  type: TokenType.Argument;
  name: SourceSpan;
}

export interface SexpToken extends BaseToken {
  type: TokenType.Sexp;
  children: readonly Token[];
}

export interface UntrustedInterpolateToken extends BaseToken {
  type: TokenType.Interpolate;
  children: readonly Token[];
}

export interface TrustedInterpolateToken extends BaseToken {
  type: TokenType.TrustedInterpolate;
  children: readonly Token[];
}

export type InterpolateToken =
  | TrustedInterpolateToken
  | UntrustedInterpolateToken;

export interface StartTagToken extends BaseToken {
  type: TokenType.StartTag;
  name: PresentTokens;
  attributes: readonly AttributeToken[];
  selfClosing?: true;
}

export interface EndTagToken extends BaseToken {
  type: TokenType.EndTag;
  trailing: Token | null;
  name: PresentTokens;
}

export const enum AttributeValueType {
  Interpolate = "Interpolate",
  Unquoted = "Unquoted",
  SingleQuoted = "SingleQuoted",
  DoubleQuoted = "DoubleQuoted"
}

export interface ArgNameToken extends BaseToken {
  type: TokenType.ArgName;
  name: SourceSpan;
}

export function argName(name: SourceSpan, span: SourceSpan): ArgNameToken {
  return {
    type: TokenType.ArgName,
    name,
    span
  };
}

export type AnyAttrNameToken = AttributeNameToken | ArgNameToken;

export interface StringAttributeValueToken extends BaseToken {
  type: TokenType.AttributeValue;
  valueType: AttributeValueType;
  value: StringInterpolationToken;
}

export interface InterpolateAttributeValueToken extends BaseToken {
  type: TokenType.AttributeValue;
  valueType: AttributeValueType.Interpolate;
  value: InterpolateToken;
}

export type StringInterpolationPart = TextToken | InterpolateToken;

export interface StringInterpolationToken extends BaseToken {
  type: TokenType.StringInterpolation;
  parts: StringInterpolationPart[];
}

export function stringInterpolation(
  parts: StringInterpolationPart[],
  span: SourceSpan
): StringInterpolationToken {
  return {
    type: TokenType.StringInterpolation,
    span,
    parts
  };
}

export function isInterpolateAttribute(
  input: AttributeValueToken
): input is InterpolateAttributeValueToken {
  return input.valueType === AttributeValueType.Interpolate;
}

export type AttributeValueToken =
  | StringAttributeValueToken
  | InterpolateAttributeValueToken; // disabled={{disabled}}

export type AttrValueOptions =
  | { type: AttributeValueType.Interpolate; value: InterpolateToken }
  | { type: AttributeValueType; value: StringInterpolationToken };

export function attrValue(
  { type, value }: AttrValueOptions,
  span: SourceSpan
): AttributeValueToken {
  return {
    type: TokenType.AttributeValue,
    span,
    valueType: type,
    value
  } as AttributeValueToken;
}

export interface ValuedAttributeToken extends BaseToken {
  type: TokenType.ValuedAttribute;
  name: AnyAttrNameToken;
  value: AttributeValueToken;
}

export function valuedAttr(
  { name, value }: { name: AnyAttrNameToken; value: AttributeValueToken },
  span: SourceSpan
): ValuedAttributeToken {
  return {
    type: TokenType.ValuedAttribute,
    span,
    name,
    value
  };
}

export interface StartTagOptions {
  name: PresentTokens;
  attrs?: readonly AttributeToken[];
  selfClosing?: true;
}

export function startTag(
  { name, attrs, selfClosing }: StartTagOptions,
  span: SourceSpan
): StartTagToken {
  return {
    type: TokenType.StartTag,
    span,
    name,
    attributes: attrs || [],
    selfClosing
  };
}

export function endTag(
  { name, trailing }: { name: PresentTokens; trailing?: Token | null },
  span: SourceSpan
): EndTagToken {
  return {
    type: TokenType.EndTag,
    span,
    trailing: trailing ? trailing : null,
    name
  };
}

export type AttributeToken =
  | AttributeNameToken
  | ArgNameToken
  | ValuedAttributeToken
  | UntrustedInterpolateToken
  | TrustedInterpolateToken
  | WSToken;

export function sexp(children: readonly Token[], span: SourceSpan): SexpToken {
  return {
    type: TokenType.Sexp,
    span,
    children
  };
}
export function interpolate(
  children: readonly Token[],
  span: SourceSpan
): UntrustedInterpolateToken {
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
  [TokenType.String]: StringToken;
  [TokenType.Number]: NumberToken;
  [TokenType.Comment]: CommentToken;
  [TokenType.Argument]: ArgumentToken;
  [TokenType.Sexp]: SexpToken;
  [TokenType.Interpolate]: UntrustedInterpolateToken;
  [TokenType.TrustedInterpolate]: TrustedInterpolateToken;
  [TokenType.StartTag]: StartTagToken;
  [TokenType.EndTag]: EndTagToken;
  [TokenType.ArgName]: ArgNameToken;
  [TokenType.AttributeValue]: AttributeValueToken;
  [TokenType.ValuedAttribute]: ValuedAttributeToken;
  [TokenType.StringInterpolation]: StringInterpolationToken;
}

export type Token = TokenMap[keyof TokenMap];

export type PresentTokens = [Token, ...Token[]];

export function debugFormatToken(token: Token | RootToken) {
  return `<token:${token.type}>`;
}
