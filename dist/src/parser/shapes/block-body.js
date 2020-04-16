"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
const top_level_1 = require("./top-level");
class BlockBodyShape extends abstract_1.AbstractInfallibleShape {
    expandInfallible(iterator) {
        let out = [];
        while (true) {
            let next = new top_level_1.TopLevelShape().expandFallible(iterator);
            if (next.kind === "err") {
                break;
            }
            out.push(next.value);
        }
        return out;
    }
}
exports.default = BlockBodyShape;
