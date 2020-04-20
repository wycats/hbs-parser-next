"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.member = exports.path = exports.call = exports.argReference = exports.varReference = exports.thisReference = exports.number = exports.string = void 0;
require("../nodes");
const span_1 = require("../../span");
require("../../read/tokens");
function string(token, source) {
    let processed;
    let inner = span_1.slice(token.data, source);
    switch (token.quote) {
        case 1 /* Double */:
            processed = inner.replace(`\\"`, `"`);
            break;
        case 0 /* Single */:
            processed = inner.replace(`\\'`, `'`);
            break;
    }
    return {
        type: "String" /* String */,
        span: token.span,
        string: processed,
        token,
    };
}
exports.string = string;
function number(token, source) {
    let wholeString = span_1.slice(token.head, source);
    let decimalString = token.tail ? span_1.slice(token.tail, source) : undefined;
    let wholeNumber = decimalString
        ? parseFloat(`${wholeString}.${decimalString}`)
        : parseInt(wholeString, 10);
    let num = token.negative ? wholeNumber * -1 : wholeNumber;
    return {
        type: "Number" /* Number */,
        span: token.span,
        number: num,
        token,
    };
}
exports.number = number;
function thisReference(token) {
    return {
        type: "ThisReference" /* ThisReference */,
        span: token.span,
    };
}
exports.thisReference = thisReference;
function varReference(token) {
    return {
        type: "VarReference" /* VarReference */,
        span: token.span,
    };
}
exports.varReference = varReference;
function argReference(token) {
    return {
        type: "ArgReference" /* ArgReference */,
        span: token.span,
        token,
    };
}
exports.argReference = argReference;
function call(body, { span, before, after }) {
    return {
        type: "Call" /* Call */,
        span,
        before,
        after,
        body,
    };
}
exports.call = call;
function path({ head, tail }, span) {
    return {
        type: "Path" /* Path */,
        span,
        head,
        tail,
    };
}
exports.path = path;
function member(dot, span) {
    return {
        type: "Member" /* Member */,
        dot,
        span,
    };
}
exports.member = member;
