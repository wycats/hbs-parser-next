"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopLevelShape = void 0;
const shape_1 = require("../shape");
const tokens_iterator_1 = require("../tokens-iterator");
const abstract_1 = require("./abstract");
const text_1 = require("./text");
const interpolate_1 = require("./interpolate");
const any_1 = require("./internal/any");
class TopLevelShape extends abstract_1.AbstractShape {
    constructor() {
        super(...arguments);
        this.desc = "TopLevel";
    }
    [shape_1.EXPAND](iterator) {
        return iterator.start(tokens_iterator_1.legacyExpand(any_1.any([text_1.TextShape, interpolate_1.InterpolateShape], "top level")));
    }
}
exports.TopLevelShape = TopLevelShape;
