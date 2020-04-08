import { SourceSpan, range, slice } from "../span";

/**
 * Steps for creating a new token type:
 *
 * 1. add a variant to TokenType
 * 2. create an interface {Name}Token
 * 3. add the new token to LeafTokenMap or TokenMap
 * 4. update serializeNode to serialize the new token
 * 5. add a function to construct the new token (unless it's always nested
 *    inside another token like `BlockParams`)
 * 6. update token-builder.ts to support building the new token
 */

export const enum TokenType {
  Root = "Root",
  Interpolate = "Interpolate",
  TrustedInterpolate = "TrustedInterpolate",
  // TODO: Either we should have Block and Element or StartBlock/EndBlock and StartElement/EndElement
  Block = "Block",
  BlockParams = "BlockParams",
  OpenBlock = "OpenBlock",
  CloseBlock = "CloseBlock",
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
  StringInterpolation = "StringInterpolation",
}

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
  Double,
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
    quote,
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
    negative,
  }: { head: SourceSpan; tail: SourceSpan | null; negative: SourceSpan | null },
  span: SourceSpan
): NumberToken {
  return {
    type: TokenType.Number,
    span,
    negative,
    head,
    tail,
  };
}

export function comment(data: SourceSpan, span: SourceSpan): CommentToken {
  return {
    type: TokenType.Comment,
    data,
    span,
  };
}

export function arg(span: SourceSpan): ArgumentToken {
  return {
    type: TokenType.Argument,
    name: { start: span.start + 1, end: span.end },
    span,
  };
}

export interface IdentifierToken {
  type: TokenType.Identifier;
  span: SourceSpan;
}

export interface DotToken {
  type: TokenType.Dot;
  span: SourceSpan;
}

export interface EqToken {
  type: TokenType.Eq;
  span: SourceSpan;
}

export interface WSToken {
  type: TokenType.WS;
  span: SourceSpan;
}

export interface TextToken {
  type: TokenType.Text;
  span: SourceSpan;
}

export interface AttributeNameToken {
  type: TokenType.AttributeName;
  span: SourceSpan;
}

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

export type LeafToken = LeafTokenMap[keyof LeafTokenMap];

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

export interface BlockToken extends BaseToken {
  type: TokenType.Block;
  open: OpenBlockToken;
  body: readonly Token[];
  close: CloseBlockToken;
}

export interface OpenBlockToken extends BaseToken {
  type: TokenType.OpenBlock;
  // {{#if}} has a single token name, while {{#f.input}} has a
  // three-token head. Blocks must close with `/` followed by
  // the same tokens as the name.
  name: readonly Token[];
  // the rest of the tokens in the opening part of the block,
  // including an optional trailing block param
  head: readonly Token[] | null;
}

export function equalPath(
  leftTokens: readonly Token[],
  rightTokens: readonly Token[],
  source: string
): boolean {
  if (leftTokens.length !== rightTokens.length) {
    return false;
  }

  return leftTokens.every((left, index) => {
    let right = rightTokens[index];

    if (left.type !== right.type) {
      return false;
    }

    switch (left.type) {
      case TokenType.ArgName:
        return (
          slice(left.name, source) ===
          slice((right as ArgNameToken).name, source)
        );
      case TokenType.Identifier:
        return (
          slice(left.span, source) ===
          slice((right as IdentifierToken).span, source)
        );
      case TokenType.Dot:
        return true;
      default:
        throw new Error(`assert: unexpected token type ${left.type}`);
    }
  });
}

export type BlockParamToken = WSToken | IdentifierToken;

export interface BlockParamsToken extends BaseToken {
  type: TokenType.BlockParams;
  params: readonly BlockParamToken[];
}

export function blockParams(
  params: readonly BlockParamToken[],
  span: SourceSpan
): BlockParamsToken {
  return {
    type: TokenType.BlockParams,
    span,
    params,
  };
}

export interface CloseBlockToken extends BaseToken {
  type: TokenType.CloseBlock;
  name: readonly Token[];
}

export interface BlockOptions {
  open: OpenBlockToken;
  body: readonly Token[];
  close: CloseBlockToken;
}

export function block({ open, body, close }: BlockOptions): BlockToken {
  return {
    type: TokenType.Block,
    span: range(open.span, close.span),
    open,
    body,
    close,
  };
}

export interface OpenBlockOptions {
  name: PresentTokens;
  head: readonly Token[] | null;
}

export function openBlock(
  { name, head }: OpenBlockOptions,
  span: SourceSpan
): OpenBlockToken {
  return {
    type: TokenType.OpenBlock,
    span,
    name,
    head,
  };
}

export interface CloseBlockOptions {
  span: SourceSpan;
  name: PresentTokens;
}

export function closeBlock(
  name: PresentTokens,
  span: SourceSpan
): CloseBlockToken {
  return {
    type: TokenType.CloseBlock,
    span,
    name,
  };
}

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
  DoubleQuoted = "DoubleQuoted",
}

export interface ArgNameToken extends BaseToken {
  type: TokenType.ArgName;
  name: SourceSpan;
}

export function argName(name: SourceSpan, span: SourceSpan): ArgNameToken {
  return {
    type: TokenType.ArgName,
    name,
    span,
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
    parts,
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
    value,
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
    value,
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
    selfClosing,
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
    name,
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
    children,
  };
}
export function interpolate(
  children: readonly Token[],
  span: SourceSpan
): UntrustedInterpolateToken {
  return {
    type: TokenType.Interpolate,
    span,
    children,
  };
}

export function trustedInterpolate(
  children: readonly Token[],
  span: SourceSpan
): TrustedInterpolateToken {
  return {
    type: TokenType.TrustedInterpolate,
    span,
    children,
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
    children,
  };
}

export interface HBSTokenMap extends LeafTokenMap {
  [TokenType.String]: StringToken;
  [TokenType.Number]: NumberToken;
  [TokenType.Comment]: CommentToken;
  [TokenType.Argument]: ArgumentToken;
  [TokenType.Sexp]: SexpToken;
  [TokenType.Interpolate]: UntrustedInterpolateToken;
  [TokenType.TrustedInterpolate]: TrustedInterpolateToken;
  [TokenType.Block]: BlockToken;
  [TokenType.OpenBlock]: OpenBlockToken;
  [TokenType.BlockParams]: BlockParamsToken;
  [TokenType.CloseBlock]: CloseBlockToken;
}

export type HBSToken = HBSTokenMap[keyof HBSTokenMap];

export interface HTMLTokenMap {
  [TokenType.StartTag]: StartTagToken;
  [TokenType.EndTag]: EndTagToken;
  [TokenType.ArgName]: ArgNameToken;
  [TokenType.AttributeValue]: AttributeValueToken;
  [TokenType.ValuedAttribute]: ValuedAttributeToken;
  [TokenType.StringInterpolation]: StringInterpolationToken;
}

export type HTMLToken = HTMLTokenMap[keyof HTMLTokenMap];

export interface TokenMap extends HBSTokenMap, HTMLTokenMap {}

export type Token = TokenMap[keyof TokenMap];

export type PresentTokens = [Token, ...Token[]];

export function debugFormatToken(token: Token | RootToken) {
  return `<token:${token.type}>`;
}
