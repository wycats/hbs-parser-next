"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../nodes");
function callBody({ head, positional = null, named = null, }, span) {
    return {
        type: "CallBody" /* CallBody */,
        span,
        head,
        positional,
        named,
    };
}
exports.callBody = callBody;
function named({ name, value }, span) {
    return {
        type: "Named" /* Named */,
        span,
        name: name.span,
        value,
    };
}
exports.named = named;
