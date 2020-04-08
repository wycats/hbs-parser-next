"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../snippet");
const debug_1 = require("./debug");
const tokens_1 = require("./tokens");
class Logger {
    constructor(enableLogging) {
        this.enableLogging = enableLogging;
    }
    invoke(c, input, { forceTransparent, context, } = {}) {
        let logged = this.enableLogging && !isTransparent(c) && !forceTransparent;
        if (logged) {
            debug_1.row({ result: "start", arrow: `${debug_1.indentWS()}->`, combinator: c, context }, "", input.debugRest());
            debug_1.indent();
        }
        let result = c.invoke(input);
        if (logged) {
            debug_1.outdent();
        }
        if (result.kind === "ok") {
            if (logged) {
                debug_1.row({
                    result: "success",
                    arrow: `${debug_1.indentWS()}<-`,
                    combinator: c,
                    context,
                }, formatDebuggable(result.value[1]), result.value[0].debugRest());
            }
        }
        else {
            if (logged) {
                debug_1.row({
                    result: "error",
                    arrow: `${debug_1.indentWS()}<-`,
                    combinator: c,
                    context,
                }, result.reason, result.snippet.debugRest());
            }
        }
        return result;
    }
}
exports.Logger = Logger;
function combinatorDebugType(c) {
    if (typeof c === "function") {
        return "normal";
    }
    else {
        return c.kind || "normal";
    }
}
exports.combinatorDebugType = combinatorDebugType;
function isTransparent(c) {
    if (typeof c === "function") {
        return false;
    }
    else {
        return c.kind === "transparent";
    }
}
exports.isTransparent = isTransparent;
function formatDebuggable(debuggable) {
    if (typeof debuggable === "string") {
        return debuggable;
    }
    else if (debuggable === null) {
        return "null";
    }
    else if (Array.isArray(debuggable)) {
        if (debuggable.length <= 2) {
            return `[${debuggable
                .map(formatDebuggable)
                .join(", ")}]`;
        }
        else {
            return `[${formatDebuggable(debuggable[0])}, ${formatDebuggable(debuggable[1])}, ${formatDebuggable(debuggable[2])}, ...]`;
        }
    }
    else if (debuggable instanceof snippet_1.Snippet) {
        return debuggable.fmt();
    }
    else {
        return tokens_1.debugFormatToken(debuggable);
    }
}
exports.formatDebuggable = formatDebuggable;
