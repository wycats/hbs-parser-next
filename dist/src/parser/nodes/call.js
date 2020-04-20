"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positional = exports.namedArgs = exports.namedArg = exports.callBody = void 0;
require("../nodes");
function callBody({ head, positional = null, named = null, }, base) {
    return {
        type: "CallBody" /* CallBody */,
        ...base,
        head,
        positional,
        named,
    };
}
exports.callBody = callBody;
function namedArg({ name, value }, base) {
    return {
        type: "NamedArgument" /* NamedArgument */,
        ...base,
        name: name.span,
        value,
    };
}
exports.namedArg = namedArg;
function namedArgs(args, base) {
    return {
        type: "NamedArguments" /* NamedArguments */,
        ...base,
        args,
    };
}
exports.namedArgs = namedArgs;
function positional(args, base) {
    return {
        type: "PositionalArguments" /* PositionalArguments */,
        ...base,
        args,
    };
}
exports.positional = positional;
