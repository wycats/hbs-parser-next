import { indent, outdent, preInvoke, postInvoke } from "./debug";
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
