"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.any = void 0;
const abstract_1 = require("../abstract");
const tokens_iterator_1 = require("../../tokens-iterator");
function any(shapes, desc) {
    return abstract_1.shape(desc, iterator => iterator.start(tokens_iterator_1.legacyNotEOF()).andThen(() => {
        for (let shape of shapes) {
            let result = iterator.start(tokens_iterator_1.legacyExpand(shape));
            if (result.kind === "ok") {
                return result;
            }
        }
        return iterator.err("any", "none");
    }));
}
exports.any = any;
