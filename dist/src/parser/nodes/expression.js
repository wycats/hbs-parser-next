"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function call(body, span) {
    return {
        type: "Call" /* Call */,
        span,
        body,
    };
}
exports.call = call;
