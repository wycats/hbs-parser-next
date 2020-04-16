"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../read/tokens");
const ast = __importStar(require("../nodes"));
const shape_1 = require("../shape");
const abstract_1 = require("./abstract");
const expression_1 = require("./expression");
class InterpolateShape extends abstract_1.AbstractShape {
    expandFallible(iterator) {
        let next = iterator.peek();
        if (next.isEOF) {
            return shape_1.err(next, "eof");
        }
        let token = next.token;
        if (token.type === "Interpolate" /* Interpolate */) {
            let inner = iterator.child(token.children);
            let head = new HeadShape().expandFallible(inner);
            if (head.kind === "err") {
                return head;
            }
            next.commit();
            return shape_1.ok(ast.interpolate({ head: head.value }, token.span));
        }
        else {
            return shape_1.err(next, "mismatch");
        }
    }
}
exports.InterpolateShape = InterpolateShape;
class HeadShape extends abstract_1.AbstractShape {
    expandFallible(iterator) {
        return new expression_1.ExpressionShape().expandFallible(iterator);
    }
}
exports.HeadShape = HeadShape;
