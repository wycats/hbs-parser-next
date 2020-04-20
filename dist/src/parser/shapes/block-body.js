"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_iterator_1 = require("../tokens-iterator");
const top_level_1 = require("./top-level");
const shape_1 = require("../shape");
const abstract_1 = require("./abstract");
class BlockBodyShape extends abstract_1.AbstractShape {
    constructor() {
        super(...arguments);
        this.desc = "BlockBody";
    }
    [shape_1.EXPAND](iterator) {
        let out = [];
        while (true) {
            let next = iterator.start(tokens_iterator_1.legacyExpand(top_level_1.TopLevelShape));
            if (next.kind === "err") {
                break;
            }
            out.push(next.value);
        }
        return out;
    }
}
exports.default = BlockBodyShape;
