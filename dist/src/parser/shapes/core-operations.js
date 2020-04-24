"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = exports.reduce = exports.repeat = exports.keepAndThen = exports.merge = exports.mapInput = exports.pipeline = exports.zip = exports.pure = exports.input = exports.source = exports.Arrow = void 0;
class Arrow {
    constructor(operation) {
        this.operation = operation;
    }
    invoke(state, evaluator, input) {
        return evaluate(this.operation, state, input, evaluator);
    }
}
exports.Arrow = Arrow;
function source(callback, label) {
    return new Arrow({
        type: "Source",
        callback,
        label,
    });
}
exports.source = source;
function input(label) {
    return new Arrow({
        type: "Input",
        label,
    });
}
exports.input = input;
function pure(callback, label) {
    return new Arrow({
        type: "Pure",
        label,
        callback: callback,
    });
}
exports.pure = pure;
function zip(left, right, label) {
    return new Arrow({ type: "Zip", label, left, right });
}
exports.zip = zip;
function pipeline(left, right, label) {
    return new Arrow({ type: "Pipeline", label, left, right });
}
exports.pipeline = pipeline;
function mapInput(arrow, map, label) {
    return new Arrow({ type: "MapInput", label, arrow, map });
}
exports.mapInput = mapInput;
function merge(left, right, label) {
    return new Arrow({ type: "Merge", label, left, right });
}
exports.merge = merge;
function keepAndThen(left, right, label) {
    return new Arrow({ type: "KeepAndThen", label, left, right });
}
exports.keepAndThen = keepAndThen;
function repeat(callback, label) {
    return new Arrow({ type: "Repeat", label, callback });
}
exports.repeat = repeat;
function reduce(callback, label) {
    return new Arrow({ type: "Reduce", label, callback });
}
exports.reduce = reduce;
/// FUNCTIONS ///
function evaluate(op, state, input, evaluator) {
    return evaluator[op.type](state, input, op);
}
exports.evaluate = evaluate;
