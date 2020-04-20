"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugFormatToken = exports.root = exports.trustedInterpolate = exports.interpolate = exports.sexp = exports.endTag = exports.startTag = exports.valuedAttr = exports.attrValue = exports.isInterpolateAttribute = exports.stringInterpolation = exports.argName = exports.closeBlock = exports.openBlock = exports.block = exports.blockParams = exports.equalPath = exports.arg = exports.comment = exports.numberToken = exports.stringToken = exports.attrName = exports.text = exports.ws = exports.eq = exports.dot = exports.id = exports.leaf = void 0;
const span_1 = require("../span");
function leaf(type) {
    return span => ({ type, span });
}
exports.leaf = leaf;
exports.id = leaf("Identifier" /* Identifier */);
exports.dot = leaf("Dot" /* Dot */);
exports.eq = leaf("Eq" /* Eq */);
exports.ws = leaf("WS" /* WS */);
exports.text = leaf("Text" /* Text */);
exports.attrName = leaf("AttributeName" /* AttributeName */);
function stringToken({ data, quote }, span) {
    return {
        type: "String" /* String */,
        span,
        data,
        quote,
    };
}
exports.stringToken = stringToken;
function numberToken({ head, tail, negative, }, span) {
    return {
        type: "Number" /* Number */,
        span,
        negative,
        head,
        tail,
    };
}
exports.numberToken = numberToken;
function comment(data, span) {
    return {
        type: "Comment" /* Comment */,
        data,
        span,
    };
}
exports.comment = comment;
function arg(span) {
    return {
        type: "Argument" /* Argument */,
        name: { start: span.start + 1, end: span.end },
        span,
    };
}
exports.arg = arg;
function equalPath(leftTokens, rightTokens, source) {
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
                return (span_1.slice(left.name, source) ===
                    span_1.slice(right.name, source));
            case "Identifier" /* Identifier */:
                return (span_1.slice(left.span, source) ===
                    span_1.slice(right.span, source));
            case "Dot" /* Dot */:
                return true;
            default:
                throw new Error(`assert: unexpected token type ${left.type}`);
        }
    });
}
exports.equalPath = equalPath;
function blockParams(params, span) {
    return {
        type: "BlockParams" /* BlockParams */,
        span,
        params,
    };
}
exports.blockParams = blockParams;
function block({ open, body, close }) {
    return {
        type: "Block" /* Block */,
        span: span_1.range(open.span, close.span),
        open,
        body,
        close,
    };
}
exports.block = block;
function openBlock({ name, head }, span) {
    return {
        type: "OpenBlock" /* OpenBlock */,
        span,
        name,
        head,
    };
}
exports.openBlock = openBlock;
function closeBlock(name, span) {
    return {
        type: "CloseBlock" /* CloseBlock */,
        span,
        name,
    };
}
exports.closeBlock = closeBlock;
function argName(name, span) {
    return {
        type: "ArgName" /* ArgName */,
        name,
        span,
    };
}
exports.argName = argName;
function stringInterpolation(parts, span) {
    return {
        type: "StringInterpolation" /* StringInterpolation */,
        span,
        parts,
    };
}
exports.stringInterpolation = stringInterpolation;
function isInterpolateAttribute(input) {
    return input.valueType === "Interpolate" /* Interpolate */;
}
exports.isInterpolateAttribute = isInterpolateAttribute;
function attrValue({ type, value }, span) {
    return {
        type: "AttributeValue" /* AttributeValue */,
        span,
        valueType: type,
        value,
    };
}
exports.attrValue = attrValue;
function valuedAttr({ name, value }, span) {
    return {
        type: "ValuedAttribute" /* ValuedAttribute */,
        span,
        name,
        value,
    };
}
exports.valuedAttr = valuedAttr;
function startTag({ name, attrs, selfClosing }, span) {
    return {
        type: "StartTag" /* StartTag */,
        span,
        name,
        attributes: attrs || [],
        selfClosing,
    };
}
exports.startTag = startTag;
function endTag({ name, trailing }, span) {
    return {
        type: "EndTag" /* EndTag */,
        span,
        trailing: trailing ? trailing : null,
        name,
    };
}
exports.endTag = endTag;
function sexp({ children, inner }, span) {
    return {
        type: "Sexp" /* Sexp */,
        span,
        inner,
        children,
    };
}
exports.sexp = sexp;
function interpolate(children, span) {
    return {
        type: "Interpolate" /* Interpolate */,
        span,
        children,
    };
}
exports.interpolate = interpolate;
function trustedInterpolate(children, span) {
    return {
        type: "TrustedInterpolate" /* TrustedInterpolate */,
        span,
        children,
    };
}
exports.trustedInterpolate = trustedInterpolate;
function root(children, span) {
    return {
        type: "Root" /* Root */,
        span,
        children,
    };
}
exports.root = root;
function debugFormatToken(token) {
    return `<token:${token.type}>`;
}
exports.debugFormatToken = debugFormatToken;
