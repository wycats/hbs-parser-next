import "../nodes";
export function root(children, span) {
    return {
        type: AstNodeType.Root,
        span,
        children,
    };
}
export function text(token) {
    return {
        type: AstNodeType.Text,
        span: token.span,
    };
}
export function interpolate(body, base) {
    return {
        type: AstNodeType.Interpolate,
        ...base,
        body,
    };
}
export function blockParams(params, span) {
    return {
        type: AstNodeType.BlockParams,
        params,
        span,
    };
}
export function openBlock({ head, positional = null, named = null, params = null, }, base) {
    return {
        type: AstNodeType.OpenBlock,
        ...base,
        head,
        positional,
        named,
        params,
    };
}
export function closeBlock(name, base) {
    return {
        type: AstNodeType.CloseBlock,
        ...base,
        name,
    };
}
export function block({ open, body, close, }, base) {
    return {
        type: AstNodeType.Block,
        ...base,
        open,
        body,
        close,
    };
}
