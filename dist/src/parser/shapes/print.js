function isTuple(ast) {
    return Array.isArray(ast);
}
export function printAST(arrow) {
    let seen = new Set();
    return iteration(arrow, seen);
}
export function toIndented(ast, key) {
    if (isTuple(ast)) {
        let [head, tail] = ast;
        if (Array.isArray(tail)) {
            return [head, tail.map(value => toIndented(value))];
        }
        else {
            let printedTail = Object.entries(tail).map(([key, value]) => toIndented(value, key));
            return [head, printedTail];
        }
    }
    else if (typeof ast === "string") {
        return keyed(ast, key);
    }
    else {
        assertNever(ast);
    }
}
function keyed(head, key) {
    if (key) {
        return `${key}: ${head}`;
    }
    else {
        return head;
    }
}
function iteration(arrow, seen) {
    if (seen.has(arrow)) {
        return `<cycle:${labelled(arrow.operation)}>`;
        // throw new Error(`unexpected cycle`);
    }
    else {
        seen.add(arrow);
    }
    let op = arrow.operation;
    switch (op.type) {
        case "Source":
            return "source";
        case "Input":
            return "input";
        case "Pure":
            return labelled(op);
        case "AllOk":
            return [labelled(op), op.arrows.map(arrow => iteration(arrow, seen))];
        case "Zip":
        case "Pipeline":
        case "BothOk":
        case "FirstOk":
        case "Merge":
        case "KeepAndThen":
            return [
                labelled(op),
                [iteration(op.left, seen), iteration(op.right, seen)],
            ];
        case "MapResult":
            return [
                labelled(op),
                {
                    arrow: iteration(op.left, seen),
                    ifOk: iteration(op.ifOk, seen),
                    ifErr: iteration(op.ifErr, seen),
                },
            ];
        case "MapInput":
            return [
                labelled(op),
                { pre: iteration(op.map, seen), arrow: iteration(op.arrow, seen) },
            ];
        case "Repeat":
            return [labelled(op), [iteration(op.callback, seen)]];
        case "State":
            return "state";
        case "Reduce":
            return [labelled(op), [iteration(op.callback, seen)]];
        default:
            assertNever(op);
    }
}
function labelled(op) {
    if (op.label) {
        return `${op.type}(${op.label})`;
    }
    else {
        return op.type;
    }
}
function assertNever(_v) {
    throw new Error(`unreachable`);
}
