"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockShape = exports.HeadShape = void 0;
require("../../read/tokens");
const shape_1 = require("../shape");
const tokens_iterator_1 = require("../tokens-iterator");
const abstract_1 = require("./abstract");
const expression_1 = require("./expression");
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
class BlockShape extends abstract_1.AbstractShape {
    constructor() {
        super(...arguments);
        this.desc = "Interpolate";
    }
    [shape_1.EXPAND](iterator) {
        let eof = tokens_iterator_1.legacyNotEOF()(iterator);
        if (eof.kind === "err") {
            return eof;
        }
        let next = iterator.peek("block", { isLeaf: false });
        if (next.token.type === "Block" /* Block */) {
            let token = next.token;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            let _open = iterator.processInner(token.open.name, tokens_iterator_1.legacyExpand(expression_1.ExpressionShape));
            throw new Error("not implemented");
        }
        else {
            return shape_1.err(next.reject().token, "mismatch");
        }
    }
}
exports.BlockShape = BlockShape;
