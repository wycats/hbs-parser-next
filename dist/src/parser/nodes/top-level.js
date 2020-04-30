import "../nodes";
export function root(children, span) {
    return {
        type: "Root" /* Root */,
        span,
        children,
    };
}
export function text(token) {
    return {
        type: "Text" /* Text */,
        span: token.span,
    };
}
export function interpolate(body, base) {
    return {
        type: "Interpolate" /* Interpolate */,
        ...base,
        body,
    };
}
export function blockParams(params, span) {
    return {
        type: "BlockParams" /* BlockParams */,
        params,
        span,
    };
}
export function openBlock({ head, positional = null, named = null, params = null, }, base) {
    return {
        type: "OpenBlock" /* OpenBlock */,
        ...base,
        head,
        positional,
        named,
        params,
    };
}
export function closeBlock(name, base) {
    return {
        type: "CloseBlock" /* CloseBlock */,
        ...base,
        name,
    };
}
export function block({ open, body, close, }, base) {
    return {
        type: "Block" /* Block */,
        ...base,
        open,
        body,
        close,
    };
}
