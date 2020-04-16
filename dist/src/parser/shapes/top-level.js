"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
const text_1 = require("./text");
const interpolate_1 = require("./interpolate");
class TopLevelShape extends abstract_1.AbstractShape {
    expandFallible(iterator) {
        return abstract_1.or(new text_1.TextShape(), new interpolate_1.InterpolateShape()).expandFallible(iterator);
    }
}
exports.TopLevelShape = TopLevelShape;
