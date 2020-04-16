"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../nodes");
function root(children, span) {
    return {
        type: "Root" /* Root */,
        span,
        children,
    };
}
exports.root = root;
function text(token) {
    return {
        type: "Text" /* Text */,
        span: token.span,
    };
}
exports.text = text;
function interpolate({ head, positional = null, named = null, }, span) {
    return {
        type: "Interpolate" /* Interpolate */,
        span,
        head,
        positional,
        named,
    };
}
exports.interpolate = interpolate;
