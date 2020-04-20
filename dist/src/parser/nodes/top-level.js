"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.block = exports.closeBlock = exports.openBlock = exports.blockParams = exports.interpolate = exports.text = exports.root = void 0;
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
function interpolate(body, base) {
    return {
        type: "Interpolate" /* Interpolate */,
        ...base,
        body,
    };
}
exports.interpolate = interpolate;
function blockParams(params, span) {
    return {
        type: "BlockParams" /* BlockParams */,
        params,
        span,
    };
}
exports.blockParams = blockParams;
function openBlock({ head, positional = null, named = null, params = null, }, base) {
    return {
        type: "OpenBlock" /* OpenBlock */,
        ...base,
        head,
        positional,
        named,
        params,
    };
}
exports.openBlock = openBlock;
function closeBlock(name, base) {
    return {
        type: "CloseBlock" /* CloseBlock */,
        ...base,
        name,
    };
}
exports.closeBlock = closeBlock;
function block({ open, body, close, }, base) {
    return {
        type: "Block" /* Block */,
        ...base,
        open,
        body,
        close,
    };
}
exports.block = block;
