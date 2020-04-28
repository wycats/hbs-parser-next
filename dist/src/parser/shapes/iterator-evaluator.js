import { isOk, ok, isErr } from "../shape";
export class PureEvaluatorImpl {
    constructor(delegate) {
        this.delegate = delegate ?? this;
    }
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
        let out1 = op.left.invoke(state, this.delegate, input[0]);
        let out2 = op.right.invoke(state, this.delegate, input[1]);
        return [out1, out2];
    }
    Pipeline(state, input, op) {
        let middle = op.left.invoke(state, this.delegate, input);
        let out = op.right.invoke(state, this.delegate, middle);
        return out;
    }
    MapResult(state, input, op) {
        let result = op.left.invoke(state, this.delegate, input);
        if (isOk(result)) {
            return op.ifOk.invoke(state, this.delegate, result.value);
        }
        else {
            return op.ifErr.invoke(state, this.delegate, result);
        }
    }
    BothOk(state, input, op) {
        let leftResult = op.left.invoke(state, this.delegate, input);
        if (!isOk(leftResult)) {
            return leftResult;
        }
        let rightResult = op.right.invoke(state, this.delegate, input);
        if (isOk(rightResult)) {
            return ok([leftResult.value, rightResult.value]);
        }
        else {
            return rightResult;
        }
    }
    AllOk(state, input, op) {
        let out = [];
        for (let arrow of op.arrows) {
            let result = arrow.invoke(state, this.delegate, input);
            if (isErr(result)) {
                return result;
            }
            else {
                out.push(result.value);
            }
        }
        return ok(out);
    }
    FirstOk(state, input, op) {
        let leftResult = op.left.invoke(state, this.delegate, input);
        if (isOk(leftResult)) {
            return leftResult;
        }
        return op.right.invoke(state, this.delegate, input);
    }
    MapInput(state, input, op) {
        return op.map.invoke(state, this.delegate, input);
    }
    Merge(state, input, op) {
        let leftOut = op.left.invoke(state, this.delegate, input);
        let rightOut = op.right.invoke(state, this.delegate, input);
        return [leftOut, rightOut];
    }
    KeepAndThen(state, input, op) {
        let leftOut = op.left.invoke(state, this.delegate, input);
        let rightOut = op.right.invoke(state, this.delegate, leftOut);
        return [leftOut, rightOut];
    }
    Reduce(state, [accum, input], op) {
        let current = accum;
        for (let item of input) {
            current = op.callback.invoke(state, this.delegate, [current, item]);
        }
        return current;
    }
}
export class StatefulEvaluatorImpl extends PureEvaluatorImpl {
    State(state, _input, _op) {
        return state;
    }
    Repeat(state, input, op) {
        let out = [];
        while (true) {
            let item = op.callback.invoke(state, this.delegate, [input, state]);
            if (isOk(item)) {
                out.push(item.value);
            }
            else {
                break;
            }
        }
        return out;
    }
}
export class IteratorEvaluator extends StatefulEvaluatorImpl {
    constructor(iterator) {
        super();
        this.iterator = iterator;
    }
}
