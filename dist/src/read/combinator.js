"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinator = void 0;
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
