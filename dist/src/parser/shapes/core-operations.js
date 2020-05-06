/**
 * An Arrow corresponds to a computation with a particular input and output.
 *
 * You can build up arrows into more sophisticated computations using the
 * core operations in this file.
 */
export class Arrow {
    constructor(operation) {
        this.operation = operation;
    }
    static delay(callback) {
        return new DelayedArrow(() => {
            return callback().operation;
        });
    }
    /**
     * The invoke method takes a `State` and input value, producing the
     * output value, and possibly changing the `State`.
     *
     * @param state The computation's persistent state
     * @param evaluator An evaluator
     * @param input The input of this computation
     * @returns The invoke method returns the computation's output
     */
    invoke(state, evaluator, input) {
        return evaluate(this.operation, state, input, evaluator);
    }
}
/**
 * `DelayedArrow<In, Out>` implements `Arrow<In, Out>`, but invokes a thunk for its
 * internal operation lazily, the first time it's invoked. This makes it possible to
 * build recursive arrows.
 */
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
