"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = exports.infallibleShape = exports.shape = exports.AbstractShape = void 0;
const shape_1 = require("../shape");
const tokens_iterator_1 = require("../tokens-iterator");
class AbstractShape {
}
exports.AbstractShape = AbstractShape;
function shape(desc, expand) {
    var _a, _b;
    return _b = class extends AbstractShape {
            constructor() {
                super(...arguments);
                this.desc = desc;
                this[_a] = expand;
            }
        },
        _a = shape_1.EXPAND,
        _b;
}
exports.shape = shape;
function infallibleShape(desc, expand) {
    var _a, _b;
    return _b = class extends AbstractShape {
            constructor() {
                super(...arguments);
                this.desc = desc;
                this[_a] = expand;
            }
        },
        _a = shape_1.EXPAND,
        _b;
}
exports.infallibleShape = infallibleShape;
function or(left, right) {
    return {
        desc: `${left.desc} OR ${right.desc}`,
        [shape_1.EXPAND](iterator) {
            let leftResult = tokens_iterator_1.legacyExpand(left)(iterator);
            if (leftResult.kind === "ok") {
                return leftResult;
            }
            return tokens_iterator_1.legacyExpand(right)(iterator);
        },
    };
}
exports.or = or;
