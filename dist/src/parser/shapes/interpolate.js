"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpolateShape = exports.HeadShape = void 0;
require("../../read/tokens");
const ast = __importStar(require("../nodes"));
const shape_1 = require("../shape");
const tokens_iterator_1 = require("../tokens-iterator");
const abstract_1 = require("./abstract");
const expression_1 = require("./expression");
const call_body_1 = require("./internal/call-body");
class HeadShape extends abstract_1.AbstractShape {
    constructor() {
        super(...arguments);
        this.desc = "Head";
    }
    [shape_1.EXPAND](iterator) {
        return tokens_iterator_1.legacyExpand(expression_1.ExpressionShape)(iterator);
    }
}
exports.HeadShape = HeadShape;
class InterpolateShape extends abstract_1.AbstractShape {
    constructor() {
        super(...arguments);
        this.desc = "Interpolate";
    }
    [shape_1.EXPAND](iterator) {
        return iterator
            .start(tokens_iterator_1.consumeParent({ desc: "interpolate", isLeaf: false }, token => {
            if (token.type === "Interpolate" /* Interpolate */) {
                return iterator.processInner(token.children, iterator => tokens_iterator_1.legacyExpand(call_body_1.CallBodyShape)(iterator));
            }
        }))
            .andThen(({ result, token }) => ast.interpolate(result, { span: token.span }));
    }
}
exports.InterpolateShape = InterpolateShape;
