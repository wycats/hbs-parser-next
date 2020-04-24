"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IteratorEvaluator = exports.StatefulEvaluatorImpl = exports.PureEvaluatorImpl = void 0;
const shape_1 = require("../shape");
class PureEvaluatorImpl {
    Source(_state, _input, op) {
        return op.callback();
    }
    Input(_state, input, _op) {
        return input;
    }
    Pure(_, input, op) {
        return op.callback(input);
    }
    Zip(state, input, op) {
        let out1 = op.left.invoke(state, this, input[0]);
        let out2 = op.right.invoke(state, this, input[1]);
        return [out1, out2];
    }
    Pipeline(state, input, op) {
        let middle = op.left.invoke(state, this, input);
        let out = op.right.invoke(state, this, middle);
        return out;
    }
    MapInput(state, input, op) {
        return op.map.invoke(state, this, input);
    }
    Merge(state, input, op) {
        let leftOut = op.left.invoke(state, this, input);
        let rightOut = op.right.invoke(state, this, input);
        return [leftOut, rightOut];
    }
    KeepAndThen(state, input, op) {
        let leftOut = op.left.invoke(state, this, input);
        let rightOut = op.right.invoke(state, this, leftOut);
        return [leftOut, rightOut];
    }
    Reduce(state, [accum, input], op) {
        let current = accum;
        for (let item of input) {
            current = op.callback.invoke(state, this, [current, item]);
        }
        return current;
    }
}
exports.PureEvaluatorImpl = PureEvaluatorImpl;
class StatefulEvaluatorImpl extends PureEvaluatorImpl {
    Repeat(state, input, op) {
        let out = [];
        while (true) {
            let item = op.callback.invoke(state, this, [input, state]);
            if (shape_1.isOk(item)) {
                out.push(item.value);
            }
            else {
                break;
            }
        }
        return out;
    }
}
exports.StatefulEvaluatorImpl = StatefulEvaluatorImpl;
class IteratorEvaluator extends StatefulEvaluatorImpl {
    constructor(iterator) {
        super();
        this.iterator = iterator;
    }
}
exports.IteratorEvaluator = IteratorEvaluator;
