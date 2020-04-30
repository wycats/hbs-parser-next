import "../node";
export function callBody({ head, positional = null, named = null, }, base) {
    return {
        type: "CallBody" /* CallBody */,
        ...base,
        head,
        positional,
        named,
    };
}
export function namedArg({ name, value }, base) {
    return {
        type: "NamedArgument" /* NamedArgument */,
        ...base,
        name: name.span,
        value,
    };
}
export function namedArgs(args, base) {
    return {
        type: "NamedArguments" /* NamedArguments */,
        ...base,
        args,
    };
}
export function positional(args, base) {
    return {
        type: "PositionalArguments" /* PositionalArguments */,
        ...base,
        args,
    };
}
