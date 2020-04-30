import { range, slice } from "../span";
export function leaf(type) {
    return span => ({ type, span });
}
export const id = leaf("Identifier" /* Identifier */);
export const dot = leaf("Dot" /* Dot */);
export const eq = leaf("Eq" /* Eq */);
export const ws = leaf("WS" /* WS */);
export const text = leaf("Text" /* Text */);
export const attrName = leaf("AttributeName" /* AttributeName */);
export function stringToken({ data, quote }, span) {
    return {
        type: "String" /* String */,
        span,
        data,
        quote,
    };
}
export function numberToken({ head, tail, negative, }, span) {
    return {
        type: "Number" /* Number */,
        span,
        negative,
        head,
        tail,
    };
}
export function comment(data, span) {
    return {
        type: "Comment" /* Comment */,
        data,
        span,
    };
}
export function arg(span) {
    return {
        type: "Argument" /* Argument */,
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
            case "ArgName" /* ArgName */:
                return (slice(left.name, source) ===
                    slice(right.name, source));
            case "Identifier" /* Identifier */:
                return (slice(left.span, source) ===
                    slice(right.span, source));
            case "Dot" /* Dot */:
                return true;
            default:
                throw new Error(`assert: unexpected token type ${left.type}`);
        }
    });
}
export function blockParams(params, span) {
    return {
        type: "BlockParams" /* BlockParams */,
        span,
        params,
    };
}
export function block({ open, body, close }) {
    return {
        type: "Block" /* Block */,
        span: range(open.span, close.span),
        open,
        body,
        close,
    };
}
export function openBlock({ name, head }, span) {
    return {
        type: "OpenBlock" /* OpenBlock */,
        span,
        name,
        head,
    };
}
export function closeBlock(name, span) {
    return {
        type: "CloseBlock" /* CloseBlock */,
        span,
        name,
    };
}
export function argName(name, span) {
    return {
        type: "ArgName" /* ArgName */,
        name,
        span,
    };
}
export function stringInterpolation(parts, span) {
    return {
        type: "StringInterpolation" /* StringInterpolation */,
        span,
        parts,
    };
}
export function isInterpolateAttribute(input) {
    return input.valueType === "Interpolate" /* Interpolate */;
}
export function attrValue({ type, value }, span) {
    return {
        type: "AttributeValue" /* AttributeValue */,
        span,
        valueType: type,
        value,
    };
}
export function valuedAttr({ name, value }, span) {
    return {
        type: "ValuedAttribute" /* ValuedAttribute */,
        span,
        name,
        value,
    };
}
export function startTag({ name, attrs, selfClosing }, span) {
    return {
        type: "StartTag" /* StartTag */,
        span,
        name,
        attributes: attrs || [],
        selfClosing,
    };
}
export function endTag({ name, trailing }, span) {
    return {
        type: "EndTag" /* EndTag */,
        span,
        trailing: trailing ? trailing : null,
        name,
    };
}
export function sexp({ children, inner }, span) {
    return {
        type: "Sexp" /* Sexp */,
        span,
        inner,
        children,
    };
}
export function interpolate(children, span) {
    return {
        type: "Interpolate" /* UntrustedInterpolate */,
        span,
        children,
    };
}
export function trustedInterpolate(children, span) {
    return {
        type: "TrustedInterpolate" /* TrustedInterpolate */,
        span,
        children,
    };
}
export function root(children, span) {
    return {
        type: "Root" /* Root */,
        span,
        children,
    };
}
export function isParentToken(token) {
    switch (token.type) {
        case "TrustedInterpolate" /* TrustedInterpolate */:
        case "Interpolate" /* UntrustedInterpolate */:
        case "Sexp" /* Sexp */:
            return true;
        default:
            if ("children" in token && Array.isArray(token["children"])) {
                throw new Error(`Missing parent token in isParentToken`);
            }
            return false;
    }
}
