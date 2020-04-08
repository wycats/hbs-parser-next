"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combinator(func) {
    return {
        name: "wrapper",
        kind: "transparent",
        invoke(input) {
            return input.invoke(func());
        },
    };
}
exports.combinator = combinator;
