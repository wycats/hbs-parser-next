export class Arrow {
    constructor(operation) {
        this.operation = operation;
    }
    static delay(callback) {
        return new DelayedArrow(() => {
            return callback().operation;
        });
    }
    invoke(state, evaluator, input) {
        return evaluate(this.operation, state, input, evaluator);
    }
}
export class DelayedArrow {
    constructor(operation) {
        this.#operation = undefined;
        this.#delayed = operation;
    }
    #delayed;
    #operation;
    get operation() {
        if (!this.#operation) {
            this.#operation = this.#delayed();
        }
        return this.#operation;
    }
    invoke(state, evaluator, input) {
        return evaluate(this.operation, state, input, evaluator);
    }
}
export function id(label) {
    return new Arrow({
        type: "Id",
        label,
    });
}
export function source(callback, label) {
    return new Arrow({
        type: "Source",
        callback,
        label,
    });
}
export function input(label) {
    return new Arrow({
        type: "Input",
        label,
    });
}
export function pure(callback, label) {
    return new Arrow({
        type: "Pure",
        label,
        callback: callback,
    });
}
export function zip(left, right, label) {
    return new Arrow({ type: "Zip", label, left, right });
}
export function pipeline(left, right, label) {
    return new Arrow({ type: "Pipeline", label, left, right });
}
export function mapResult(left, ifOk, ifErr, label) {
    return new Arrow({ type: "MapResult", label, left, ifOk, ifErr });
}
export function bothOk(left, right, label) {
    return new Arrow({ type: "BothOk", label, left, right });
}
export function allOk(arrows, label) {
    return new Arrow({ type: "AllOk", label, arrows });
}
export function firstOk(left, right, label) {
    return new Arrow({ type: "FirstOk", label, left, right });
}
export function mapInput(arrow, map, label) {
    return new Arrow({ type: "MapInput", label, arrow, map });
}
export function merge(left, right, label) {
    return new Arrow({ type: "Merge", label, left, right });
}
export function keepAndThen(left, right, label) {
    return new Arrow({ type: "KeepAndThen", label, left, right });
}
export function repeat(callback, label) {
    return new Arrow({ type: "Repeat", label, callback });
}
export function state(label) {
    return new Arrow({
        type: "State",
        label,
    });
}
export function reduce(callback, label) {
    return new Arrow({ type: "Reduce", label, callback });
}
/// FUNCTIONS ///
export function evaluate(op, state, input, evaluator) {
    return evaluator[op.type](state, input, op);
}
