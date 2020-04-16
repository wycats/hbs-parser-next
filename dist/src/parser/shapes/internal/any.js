"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("../../shape");
const abstract_1 = require("../abstract");
class Any extends abstract_1.AbstractShape {
    constructor(shapes) {
        super();
        this.shapes = shapes;
    }
    expandFallible(iterator) {
        let next = iterator.peek();
        if (next.isEOF) {
            return shape_1.err(next, "eof");
        }
        for (let shape of this.shapes) {
            let result = shape.expandFallible(iterator);
            if (result.kind === "ok") {
                return result;
            }
        }
        return shape_1.err(next, "none");
    }
}
exports.Any = Any;
