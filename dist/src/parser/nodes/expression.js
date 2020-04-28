import "../nodes";
import { slice } from "../../span";
import "../../read/tokens";
export function string(token, source) {
    let processed;
    let inner = slice(token.data, source);
    switch (token.quote) {
        case QuoteType.Double:
            processed = inner.replace(`\\"`, `"`);
            break;
        case QuoteType.Single:
            processed = inner.replace(`\\'`, `'`);
            break;
    }
    return {
        type: AstNodeType.String,
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
        type: AstNodeType.Number,
        span: token.span,
        number: num,
        token,
    };
}
export function thisReference(token) {
    return {
        type: AstNodeType.ThisReference,
        span: token.span,
    };
}
export function varReference(token) {
    return {
        type: AstNodeType.VarReference,
        span: token.span,
    };
}
export function argReference(token) {
    return {
        type: AstNodeType.ArgReference,
        span: token.span,
        token,
    };
}
export function call(body, { span, before, after }) {
    return {
        type: AstNodeType.Call,
        span,
        before,
        after,
        body,
    };
}
export function path({ head, tail }, span) {
    return {
        type: AstNodeType.Path,
        span,
        head,
        tail,
    };
}
export function member(dot, span) {
    return {
        type: AstNodeType.Member,
        dot,
        span,
    };
}
