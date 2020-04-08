"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class AbstractCombinator {
    map(mapper) {
        return utils_1.map(this, mapper);
    }
}
exports.AbstractCombinator = AbstractCombinator;
