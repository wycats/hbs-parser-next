import { range, slice } from "../span";
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
export var TokenType;
(function (TokenType) {
    TokenType["Root"] = "Root";
    TokenType["UntrustedInterpolate"] = "Interpolate";
    TokenType["TrustedInterpolate"] = "TrustedInterpolate";
    // TODO: Either we should have Block and Element or StartBlock/EndBlock and StartElement/EndElement
    TokenType["Block"] = "Block";
    TokenType["BlockParams"] = "BlockParams";
    TokenType["OpenBlock"] = "OpenBlock";
    TokenType["CloseBlock"] = "CloseBlock";
    TokenType["Sexp"] = "Sexp";
    TokenType["Identifier"] = "Identifier";
    TokenType["Argument"] = "Argument";
    TokenType["Dot"] = "Dot";
    TokenType["Eq"] = "Eq";
    TokenType["WS"] = "WS";
    TokenType["String"] = "String";
    TokenType["Number"] = "Number";
    // HTML
    TokenType["Text"] = "Text";
    TokenType["Comment"] = "Comment";
    TokenType["StartTag"] = "StartTag";
    TokenType["EndTag"] = "EndTag";
    TokenType["ArgName"] = "ArgName";
    TokenType["AttributeName"] = "AttributeName";
    TokenType["AttributeValue"] = "AttributeValue";
    TokenType["ValuedAttribute"] = "ValuedAttribute";
    TokenType["StringInterpolation"] = "StringInterpolation";
})(TokenType || (TokenType = {}));
export function leaf(type) {
    return span => ({ type, span });
}
export const id = leaf(TokenType.Identifier);
export const dot = leaf(TokenType.Dot);
export const eq = leaf(TokenType.Eq);
export const ws = leaf(TokenType.WS);
export const text = leaf(TokenType.Text);
export const attrName = leaf(TokenType.AttributeName);
export var QuoteType;
(function (QuoteType) {
    QuoteType[QuoteType["Single"] = 0] = "Single";
    QuoteType[QuoteType["Double"] = 1] = "Double";
})(QuoteType || (QuoteType = {}));
export function stringToken({ data, quote }, span) {
    return {
        type: TokenType.String,
        span,
        data,
        quote,
    };
}
export function numberToken({ head, tail, negative, }, span) {
    return {
        type: TokenType.Number,
        span,
        negative,
        head,
        tail,
    };
}
export function comment(data, span) {
    return {
        type: TokenType.Comment,
        data,
        span,
    };
}
export function arg(span) {
    return {
        type: TokenType.Argument,
        name: { start: span.start + 1, end: span.end },
        span,
    };
}
export function equalPath(leftTokens, rightTokens, source) {
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
                return (slice(left.name, source) ===
                    slice(right.name, source));
            case TokenType.Identifier:
                return (slice(left.span, source) ===
                    slice(right.span, source));
            case TokenType.Dot:
                return true;
            default:
                throw new Error(`assert: unexpected token type ${left.type}`);
        }
    });
}
export function blockParams(params, span) {
    return {
        type: TokenType.BlockParams,
        span,
        params,
    };
}
export function block({ open, body, close }) {
    return {
        type: TokenType.Block,
        span: range(open.span, close.span),
        open,
        body,
        close,
    };
}
export function openBlock({ name, head }, span) {
    return {
        type: TokenType.OpenBlock,
        span,
        name,
        head,
    };
}
export function closeBlock(name, span) {
    return {
        type: TokenType.CloseBlock,
        span,
        name,
    };
}
export var AttributeValueType;
(function (AttributeValueType) {
    AttributeValueType["Interpolate"] = "Interpolate";
    AttributeValueType["Unquoted"] = "Unquoted";
    AttributeValueType["SingleQuoted"] = "SingleQuoted";
    AttributeValueType["DoubleQuoted"] = "DoubleQuoted";
})(AttributeValueType || (AttributeValueType = {}));
export function argName(name, span) {
    return {
        type: TokenType.ArgName,
        name,
        span,
    };
}
export function stringInterpolation(parts, span) {
    return {
        type: TokenType.StringInterpolation,
        span,
        parts,
    };
}
export function isInterpolateAttribute(input) {
    return input.valueType === AttributeValueType.Interpolate;
}
export function attrValue({ type, value }, span) {
    return {
        type: TokenType.AttributeValue,
        span,
        valueType: type,
        value,
    };
}
export function valuedAttr({ name, value }, span) {
    return {
        type: TokenType.ValuedAttribute,
        span,
        name,
        value,
    };
}
export function startTag({ name, attrs, selfClosing }, span) {
    return {
        type: TokenType.StartTag,
        span,
        name,
        attributes: attrs || [],
        selfClosing,
    };
}
export function endTag({ name, trailing }, span) {
    return {
        type: TokenType.EndTag,
        span,
        trailing: trailing ? trailing : null,
        name,
    };
}
export function sexp({ children, inner }, span) {
    return {
        type: TokenType.Sexp,
        span,
        inner,
        children,
    };
}
export function interpolate(children, span) {
    return {
        type: TokenType.UntrustedInterpolate,
        span,
        children,
    };
}
export function trustedInterpolate(children, span) {
    return {
        type: TokenType.TrustedInterpolate,
        span,
        children,
    };
}
export function root(children, span) {
    return {
        type: TokenType.Root,
        span,
        children,
    };
}
export function isParentToken(token) {
    switch (token.type) {
        case TokenType.TrustedInterpolate:
        case TokenType.UntrustedInterpolate:
        case TokenType.Sexp:
            return true;
        default:
            if ("children" in token && Array.isArray(token["children"])) {
                throw new Error(`Missing parent token in isParentToken`);
            }
            return false;
    }
}
export function debugFormatToken(token) {
    return `<token:${token.type}>`;
}
