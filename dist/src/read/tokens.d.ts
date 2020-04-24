import { SourceSpan } from "../span";
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
export declare const enum TokenType {
    Root = "Root",
    UntrustedInterpolate = "Interpolate",
    TrustedInterpolate = "TrustedInterpolate",
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
export interface BaseToken {
    span: SourceSpan;
}
export declare function leaf<T extends keyof LeafTokenMap>(type: T): (span: SourceSpan) => LeafTokenMap[T];
export declare const id: (span: SourceSpan) => IdentifierToken;
export declare const dot: (span: SourceSpan) => DotToken;
export declare const eq: (span: SourceSpan) => EqToken;
export declare const ws: (span: SourceSpan) => WSToken;
export declare const text: (span: SourceSpan) => TextToken;
export declare const attrName: (span: SourceSpan) => AttributeNameToken;
export declare const enum QuoteType {
    Single = 0,
    Double = 1
}
export interface StringToken extends BaseToken {
    type: TokenType.String;
    data: SourceSpan;
    quote: QuoteType;
}
export declare function stringToken({ data, quote }: {
    data: SourceSpan;
    quote: QuoteType;
}, span: SourceSpan): StringToken;
export interface NumberToken extends BaseToken {
    type: TokenType.Number;
    negative: SourceSpan | null;
    head: SourceSpan;
    tail: SourceSpan | null;
}
export declare function numberToken({ head, tail, negative, }: {
    head: SourceSpan;
    tail: SourceSpan | null;
    negative: SourceSpan | null;
}, span: SourceSpan): NumberToken;
export declare function comment(data: SourceSpan, span: SourceSpan): CommentToken;
export declare function arg(span: SourceSpan): ArgumentToken;
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
export declare type LeafToken = LeafTokenMap[keyof LeafTokenMap];
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
    inner: SourceSpan;
    children: readonly Token[];
}
export interface UntrustedInterpolateToken extends BaseToken {
    type: TokenType.UntrustedInterpolate;
    children: readonly Token[];
}
export interface TrustedInterpolateToken extends BaseToken {
    type: TokenType.TrustedInterpolate;
    children: readonly Token[];
}
export declare type InterpolateToken = TrustedInterpolateToken | UntrustedInterpolateToken;
export interface BlockToken extends BaseToken {
    type: TokenType.Block;
    open: OpenBlockToken;
    body: readonly Token[];
    close: CloseBlockToken;
}
export interface OpenBlockToken extends BaseToken {
    type: TokenType.OpenBlock;
    name: readonly Token[];
    head: readonly Token[] | null;
}
export declare function equalPath(leftTokens: readonly Token[], rightTokens: readonly Token[], source: string): boolean;
export declare type BlockParamToken = WSToken | IdentifierToken;
export interface BlockParamsToken extends BaseToken {
    type: TokenType.BlockParams;
    params: readonly BlockParamToken[];
}
export declare function blockParams(params: readonly BlockParamToken[], span: SourceSpan): BlockParamsToken;
export interface CloseBlockToken extends BaseToken {
    type: TokenType.CloseBlock;
    name: readonly Token[];
}
export interface BlockOptions {
    open: OpenBlockToken;
    body: readonly Token[];
    close: CloseBlockToken;
}
export declare function block({ open, body, close }: BlockOptions): BlockToken;
export interface OpenBlockOptions {
    name: PresentTokens;
    head: readonly Token[] | null;
}
export declare function openBlock({ name, head }: OpenBlockOptions, span: SourceSpan): OpenBlockToken;
export interface CloseBlockOptions {
    span: SourceSpan;
    name: PresentTokens;
}
export declare function closeBlock(name: PresentTokens, span: SourceSpan): CloseBlockToken;
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
export declare const enum AttributeValueType {
    Interpolate = "Interpolate",
    Unquoted = "Unquoted",
    SingleQuoted = "SingleQuoted",
    DoubleQuoted = "DoubleQuoted"
}
export interface ArgNameToken extends BaseToken {
    type: TokenType.ArgName;
    name: SourceSpan;
}
export declare function argName(name: SourceSpan, span: SourceSpan): ArgNameToken;
export declare type AnyAttrNameToken = AttributeNameToken | ArgNameToken;
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
export declare type StringInterpolationPart = TextToken | InterpolateToken;
export interface StringInterpolationToken extends BaseToken {
    type: TokenType.StringInterpolation;
    parts: StringInterpolationPart[];
}
export declare function stringInterpolation(parts: StringInterpolationPart[], span: SourceSpan): StringInterpolationToken;
export declare function isInterpolateAttribute(input: AttributeValueToken): input is InterpolateAttributeValueToken;
export declare type AttributeValueToken = StringAttributeValueToken | InterpolateAttributeValueToken;
export declare type AttrValueOptions = {
    type: AttributeValueType.Interpolate;
    value: InterpolateToken;
} | {
    type: AttributeValueType;
    value: StringInterpolationToken;
};
export declare function attrValue({ type, value }: AttrValueOptions, span: SourceSpan): AttributeValueToken;
export interface ValuedAttributeToken extends BaseToken {
    type: TokenType.ValuedAttribute;
    name: AnyAttrNameToken;
    value: AttributeValueToken;
}
export declare function valuedAttr({ name, value }: {
    name: AnyAttrNameToken;
    value: AttributeValueToken;
}, span: SourceSpan): ValuedAttributeToken;
export interface StartTagOptions {
    name: PresentTokens;
    attrs?: readonly AttributeToken[];
    selfClosing?: true;
}
export declare function startTag({ name, attrs, selfClosing }: StartTagOptions, span: SourceSpan): StartTagToken;
export declare function endTag({ name, trailing }: {
    name: PresentTokens;
    trailing?: Token | null;
}, span: SourceSpan): EndTagToken;
export declare type AttributeToken = AttributeNameToken | ArgNameToken | ValuedAttributeToken | UntrustedInterpolateToken | TrustedInterpolateToken | WSToken;
export declare function sexp({ children, inner }: {
    children: readonly Token[];
    inner: SourceSpan;
}, span: SourceSpan): SexpToken;
export declare function interpolate(children: readonly Token[], span: SourceSpan): UntrustedInterpolateToken;
export declare function trustedInterpolate(children: readonly Token[], span: SourceSpan): TrustedInterpolateToken;
export interface RootToken extends BaseToken {
    type: TokenType.Root;
    children: readonly Token[];
}
export declare function root(children: readonly Token[], span: SourceSpan): RootToken;
export interface HBSTokenMap extends LeafTokenMap {
    [TokenType.String]: StringToken;
    [TokenType.Number]: NumberToken;
    [TokenType.Comment]: CommentToken;
    [TokenType.Argument]: ArgumentToken;
    [TokenType.Sexp]: SexpToken;
    [TokenType.UntrustedInterpolate]: UntrustedInterpolateToken;
    [TokenType.TrustedInterpolate]: TrustedInterpolateToken;
    [TokenType.Block]: BlockToken;
    [TokenType.OpenBlock]: OpenBlockToken;
    [TokenType.BlockParams]: BlockParamsToken;
    [TokenType.CloseBlock]: CloseBlockToken;
}
export declare type HBSToken = HBSTokenMap[keyof HBSTokenMap];
export interface HTMLTokenMap {
    [TokenType.StartTag]: StartTagToken;
    [TokenType.EndTag]: EndTagToken;
    [TokenType.ArgName]: ArgNameToken;
    [TokenType.AttributeValue]: AttributeValueToken;
    [TokenType.ValuedAttribute]: ValuedAttributeToken;
    [TokenType.StringInterpolation]: StringInterpolationToken;
}
export declare type ParentToken = Extract<Token, {
    children: readonly Token[];
}>;
export declare function isParentToken(token: Token): token is ParentToken;
export declare type HTMLToken = HTMLTokenMap[keyof HTMLTokenMap];
export interface TokenMap extends HBSTokenMap, HTMLTokenMap {
}
export declare type Token = TokenMap[keyof TokenMap];
export declare type PresentTokens = [Token, ...Token[]];
export declare function debugFormatToken(token: Token | RootToken): string;
//# sourceMappingURL=tokens.d.ts.map