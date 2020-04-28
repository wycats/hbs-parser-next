import "../nodes";
export function callBody({ head, positional = null, named = null, }, base) {
    return {
        type: AstNodeType.CallBody,
        ...base,
        head,
        positional,
        named,
    };
}
export function namedArg({ name, value }, base) {
    return {
        type: AstNodeType.NamedArgument,
        ...base,
        name: name.span,
        value,
    };
}
export function namedArgs(args, base) {
    return {
        type: AstNodeType.NamedArguments,
        ...base,
        args,
    };
}
export function positional(args, base) {
    return {
        type: AstNodeType.PositionalArguments,
        ...base,
        args,
    };
}
