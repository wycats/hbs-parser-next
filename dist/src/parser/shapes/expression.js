"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("../shape");
const abstract_1 = require("./abstract");
const var_ref_1 = require("./expression/var-ref");
const string_1 = require("./expression/string");
const number_1 = require("./expression/number");
class ExpressionShape extends abstract_1.AbstractShape {
    expandFallible(iterator) {
        let shapes = [new var_ref_1.VarRefShape(), new string_1.StringShape(), new number_1.NumberShape()];
        for (let shape of shapes) {
            let expand = shape.expandFallible(iterator);
            if (expand.kind === "ok") {
                return expand;
            }
        }
        return shape_1.err(iterator.peek(), "expression");
    }
}
exports.ExpressionShape = ExpressionShape;
