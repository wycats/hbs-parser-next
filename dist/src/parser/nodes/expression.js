import "../node";
import { slice } from "../../span";
import "../../read/tokens";
export function string(token, source) {
    let processed;
    let inner = slice(token.data, source);
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
export function number(token, source) {
    let wholeString = slice(token.head, source);
    let decimalString = token.tail ? slice(token.tail, source) : undefined;
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
export function thisReference(token) {
    return {
        type: "ThisReference" /* ThisReference */,
        span: token.span,
    };
}
export function varReference(token) {
    return {
        type: "VarReference" /* VarReference */,
        span: token.span,
    };
}
export function argReference(token) {
    return {
        type: "ArgReference" /* ArgReference */,
        span: token.span,
        token,
    };
}
export function call(body, { span, before, after }) {
    return {
        type: "Call" /* Call */,
        span,
        before,
        after,
        body,
    };
}
export function path({ head, tail }, span) {
    return {
        type: "Path" /* Path */,
        span,
        head,
        tail,
    };
}
export function member(dot, span) {
    return {
        type: "Member" /* Member */,
        dot,
        span,
    };
}
