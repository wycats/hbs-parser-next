"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybe = void 0;
const abstract_1 = require("../abstract");
const tokens_iterator_1 = require("../../tokens-iterator");
function maybe(input) {
    return abstract_1.infallibleShape(`maybe • ${input.desc}`, iterator => {
        let result = iterator.start(tokens_iterator_1.legacyExpand(input));
        if (result.kind === "err") {
            return null;
        }
        return result.value;
    });
}
exports.maybe = maybe;
