"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ok(value) {
    return { kind: "ok", value };
}
exports.ok = ok;
function err(token, reason) {
    return {
        kind: "err",
        token,
        reason,
    };
}
exports.err = err;
function fatalError(token, reason) {
    return {
        kind: "err",
        token,
        reason,
        fatal: true,
    };
}
exports.fatalError = fatalError;
