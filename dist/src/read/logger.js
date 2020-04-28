import { Snippet } from "../snippet";
import { indent, outdent, preInvoke, postInvoke } from "./debug";
import { debugFormatToken } from "./tokens";
export class Logger {
    constructor(enableLogging) {
        this.enableLogging = enableLogging;
    }
    invoke(c, input, { forceTransparent, optional, } = {}) {
        let logged = this.enableLogging && !isTransparent(c) && !forceTransparent;
        if (logged) {
            preInvoke({ combinator: c, snippet: input, optional: !!optional });
            indent();
        }
        let result = c.invoke(input);
        if (logged) {
            outdent();
            postInvoke(result);
        }
        return result;
    }
}
export function combinatorDebugType(c) {
    if (typeof c === "function") {
        return "normal";
    }
    else {
        return c.kind || "normal";
    }
}
export function isTransparent(c) {
    if (typeof c === "function") {
        return false;
    }
    else {
        return c.kind === "transparent";
    }
}
export function formatDebuggable(debuggable) {
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
    else if (debuggable instanceof Snippet) {
        return debuggable.fmt();
    }
    else {
        return debugFormatToken(debuggable);
    }
}
