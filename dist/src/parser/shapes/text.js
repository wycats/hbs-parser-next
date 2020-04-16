"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
require("../../read/tokens");
const ast = __importStar(require("../nodes"));
const shape_1 = require("../shape");
class TextShape extends abstract_1.AbstractShape {
    expandFallible(iterator) {
        let next = iterator.peek();
        if (next.isEOF) {
            return shape_1.err(next, "eof");
        }
        let token = next.token;
        if (token.type === "Text" /* Text */) {
            next.commit();
            return shape_1.ok(ast.text(token));
        }
        else {
            return shape_1.err(next, "mismatch");
        }
    }
}
exports.TextShape = TextShape;
