"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyArrow = void 0;
function anyArrow(sequences) {
    let [current, ...tail] = sequences;
    for (let item of tail) {
        current = current.orElse(item);
    }
    return current;
}
exports.anyArrow = anyArrow;
