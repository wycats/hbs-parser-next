"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.seq = exports.isSequence = exports.ErrSequence = exports.OkSequence = exports.AbstractSequence = exports.legacyStep = exports.step = exports.start = exports.SequenceBuilder = exports.infallible = exports.InfallibleSequenceBuilder = exports.SOURCE = exports.mapResult = exports.isErr = exports.isOk = exports.isResult = exports.fatalError = exports.err = exports.ok = exports.RESULT_KIND = exports.EXPAND = void 0;
const abstract_1 = require("./shapes/abstract");
exports.EXPAND = Symbol("EXPAND");
exports.RESULT_KIND = Symbol("RESULT_KIND");
function ok(value) {
    return {
        [exports.RESULT_KIND]: "ok",
        kind: "ok",
        value,
    };
}
exports.ok = ok;
function err(token, reason) {
    return {
        [exports.RESULT_KIND]: "err",
        kind: "err",
        token,
        reason,
        fatal: false,
    };
}
exports.err = err;
function fatalError(token, reason) {
    return {
        [exports.RESULT_KIND]: "err",
        kind: "err",
        token,
        reason,
        fatal: true,
    };
}
exports.fatalError = fatalError;
function isResult(input) {
    if (typeof input === "object" && input !== null) {
        return exports.RESULT_KIND in input;
    }
    else {
        return false;
    }
}
exports.isResult = isResult;
function isOk(input) {
    return input[exports.RESULT_KIND] === "ok";
}
exports.isOk = isOk;
function isErr(input) {
    return input[exports.RESULT_KIND] === "err";
}
exports.isErr = isErr;
function mapResult(result, callback) {
    if (result.kind === "err") {
        return result;
    }
    return callback(result.value);
}
exports.mapResult = mapResult;
exports.SOURCE = ok(undefined);
//// TODO: Differentiate SequenceBuilder (with input) from SourceSequenceBuilder (no input) ////
class InfallibleSequenceBuilder {
    constructor(start) {
        this.start = start;
    }
    run(iterator, prev) {
        return this.start(iterator, prev);
    }
}
exports.InfallibleSequenceBuilder = InfallibleSequenceBuilder;
function infallible(step) {
    return new InfallibleSequenceBuilder(step);
}
exports.infallible = infallible;
/**
 * InnerT is the previous result
 * InnerU is the successful value when executing this step
 */
class SequenceBuilder {
    constructor(start) {
        this.start = start;
    }
    run(iterator, prev) {
        return this.start(iterator, prev);
    }
    named(name) {
        return new SequenceBuilder((iterator, prev) => {
            if (isOk(prev)) {
                return ok({ [name]: prev.value });
            }
            else {
                return { ...prev, iterator };
            }
        });
    }
    andThen(callback) {
        return new SequenceBuilder((iterator, last) => {
            let prev = this.start(iterator, last);
            if (isOk(prev)) {
                let result = callback(prev.value);
                if (isResult(result)) {
                    return { ...result, iterator };
                }
                else {
                    return ok(result);
                }
            }
            else {
                return { ...prev, iterator };
            }
        });
    }
    concat(other) {
        return new SequenceBuilder((iterator, last) => {
            let lastResult = this.run(iterator, last);
            let otherResult = other(iterator);
            if (isOk(lastResult) && isOk(otherResult)) {
                return ok([lastResult.value, otherResult.value]);
            }
            else if (isErr(otherResult)) {
                return { ...otherResult };
            }
            else {
                return { ...lastResult };
            }
        });
    }
    extend(key, sequence) {
        let concat = this.concat(sequence);
        let result = concat.andThen(([a, b]) => {
            let right = { [key]: b };
            return { ...a, ...right };
        });
        return result;
    }
    mapErr(callback) {
        return new SequenceBuilder((iterator, last) => {
            let prev = this.start(iterator, last);
            if (isErr(prev)) {
                let result = callback(prev);
                if (isResult(result)) {
                    return { ...result };
                }
                else {
                    return ok(result);
                }
            }
            else {
                return { ...prev };
            }
        });
    }
    or(value) {
        return new InfallibleSequenceBuilder((iterator, last) => {
            let prev = this.start(iterator, ok(last));
            if (isOk(prev)) {
                return prev.value;
            }
            else if (typeof value === "function") {
                return value();
            }
            else {
                return value;
            }
        });
    }
    andCheck(callback) {
        return new SequenceBuilder((iterator, last) => {
            let prev = this.start(iterator, last);
            if (isOk(prev)) {
                let check = callback(prev.value);
                if (isOk(check)) {
                    return prev;
                }
                else {
                    return check;
                }
            }
            else {
                return { ...prev, iterator };
            }
        });
    }
}
exports.SequenceBuilder = SequenceBuilder;
function start(step) {
    return new SequenceBuilder(step);
}
exports.start = start;
function step(desc, step) {
    return class Shape extends abstract_1.AbstractShape {
        constructor() {
            super(...arguments);
            this.desc = desc;
        }
        [exports.EXPAND](iterator) {
            return step.run(iterator, exports.SOURCE);
        }
    };
}
exports.step = step;
function legacyStep(s) {
    return s;
}
exports.legacyStep = legacyStep;
class AbstractSequence {
    constructor(inner, iterator) {
        this.inner = inner;
        this.iterator = iterator;
    }
}
exports.AbstractSequence = AbstractSequence;
class OkSequence extends AbstractSequence {
    constructor(value, iterator) {
        super({ kind: "ok", [exports.RESULT_KIND]: "ok", value }, iterator);
        this.kind = "ok";
        this[_a] = "ok";
        this.value = value;
    }
    static fromResult(result, iterator) {
        if (result instanceof OkSequence) {
            return result;
        }
        else {
            return new OkSequence(result.value, iterator);
        }
    }
    withIterator(iterator) {
        return new OkSequence(this.value, iterator);
    }
    named(name) {
        return seq(ok({ [name]: this.value }), this.iterator);
    }
    mapResult(callback) {
        let result = callback(this);
        return seq(result, this.iterator);
    }
    andThen(callback) {
        let result = callback(this.value);
        if (isResult(result)) {
            return seq(result, this.iterator);
        }
        else {
            return new OkSequence(result, this.iterator);
        }
    }
    next(callback) {
        let result = callback(this.iterator);
        if (isResult(result)) {
            return seq(result, this.iterator);
        }
        else {
            return new OkSequence(result, this.iterator);
        }
    }
    extend(key, callback) {
        let result = callback(this.iterator);
        if (isResult(result)) {
            if (isOk(result)) {
                return seq(ok({ ...this.value, [key]: result.value }), this.iterator);
            }
            else {
                return seq(result, this.iterator);
            }
        }
        else {
            return seq(ok({ ...this.value, [key]: result }), this.iterator);
        }
    }
    mapErr(_callback) {
        return this;
    }
    or(_callback) {
        return this.value;
    }
    checkNext(callback) {
        let result = callback(this.iterator);
        if (result.kind === "err") {
            return seq(result, this.iterator);
        }
        else {
            return this;
        }
    }
    andCheck(callback) {
        let result = callback(this.value, this.iterator);
        if (result.kind === "err") {
            return seq(result, this.iterator);
        }
        else {
            return this;
        }
    }
}
exports.OkSequence = OkSequence;
_a = exports.RESULT_KIND;
class ErrSequence extends AbstractSequence {
    constructor(token, reason, fatal, iterator) {
        super({ kind: "err", [exports.RESULT_KIND]: "err", token, reason, fatal }, iterator);
        this.token = token;
        this.reason = reason;
        this.fatal = fatal;
        this.kind = "err";
        this[_b] = "err";
    }
    static fromResult(result, iterator) {
        if (result instanceof ErrSequence) {
            return result.withIterator(iterator);
        }
        else {
            return new ErrSequence(result.token, result.reason, result.fatal, iterator);
        }
    }
    withIterator(iterator) {
        return new ErrSequence(this.token, this.reason, this.fatal, iterator);
    }
    named(_name) {
        return this;
    }
    mapResult(callback) {
        let result = callback(this);
        return seq(result, this.iterator);
    }
    next(_callback) {
        return this;
    }
    andThen(_callback) {
        return this;
    }
    extend(_key, _callback) {
        return this;
    }
    mapErr(callback) {
        let result = callback(this);
        if (isResult(result)) {
            return seq(result, this.iterator);
        }
        else {
            return new OkSequence(result, this.iterator);
        }
    }
    or(callback) {
        if (typeof callback === "function") {
            return callback(this);
        }
        else {
            return callback;
        }
    }
    andCheck(_callback) {
        return this;
    }
    checkNext(_callback) {
        return this;
    }
}
exports.ErrSequence = ErrSequence;
_b = exports.RESULT_KIND;
function isSequence(input) {
    return input instanceof OkSequence || input instanceof ErrSequence;
}
exports.isSequence = isSequence;
function seq(input, iterator) {
    if (isSequence(input)) {
        return input.withIterator(iterator);
    }
    if (input[exports.RESULT_KIND] === "ok") {
        return OkSequence.fromResult(input, iterator);
    }
    else {
        return ErrSequence.fromResult(input, iterator);
    }
}
exports.seq = seq;
