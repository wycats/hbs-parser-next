"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../snippet");
const utils_1 = require("./utils");
function many(source) {
    return {
        name: `many • ${utils_1.combinatorName(source)}`,
        invoke(input) {
            let current = input;
            let out = [];
            let count = 0;
            while (true) {
                if (count++ > 1000) {
                    return snippet_1.err(input, "likely infinite loop");
                }
                if (current.isEOF()) {
                    return snippet_1.ok([current.rest, out]);
                }
                let iterate = current.invoke(utils_1.present(source));
                if (iterate.kind === "err") {
                    // if we encountered a fatal error, the entire `many`
                    // is an error
                    if (iterate.fatal) {
                        return iterate;
                    }
                    else {
                        return snippet_1.ok([current.rest, out]);
                    }
                }
                else {
                    let [next, match] = iterate.value;
                    out.push(match);
                    current = next;
                }
            }
        },
    };
}
exports.many = many;
