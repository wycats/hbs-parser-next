import { assert, module as qunitModule, test as qunitTest } from "qunit";
export function unwrap(input) {
    if (input.kind === "ok") {
        return input.value;
    }
    else {
        throw new Error(`Expected Ok result, got Err (reason=${input.reason})`);
    }
}
export function eqResult(left, right) {
    assert.strictEqual(left.kind, right.kind);
    if (left.kind === "ok" && right.kind === "ok") {
        assert.ok(left.value.eq(right.value));
    }
    else if (left.kind === "err" && right.kind === "err") {
        assert.ok(left.snippet.eq(right.snippet), `left=${left.snippet.fmt()} right=${right.snippet.fmt()}`);
        assert.strictEqual(left.reason, right.reason);
    }
}
export function eqSnippet(left, right) {
    assert.ok(left.eq(right), `left=${left.fmt()} right=${right.fmt()}`);
}
export function eqSnippets(left, right) {
    if (left.length !== right.length) {
        assert.ok(false, `left=${JSON.stringify(left.map(s => s.fmt()))}\nright=${JSON.stringify(right.map(s => s.fmt()))}`);
    }
    else {
        for (let i = 0; i < left.length; i++) {
            let leftItem = left[i];
            let rightItem = right[i];
            eqSnippet(leftItem, rightItem);
        }
    }
}
export function eqError(left, right) {
    if (left.kind === "err") {
        assert.ok(left.snippet.eq(right.snippet), `left=${left.snippet.fmt()} right=${right.snippet.fmt()}`);
        assert.strictEqual(left.reason, right.reason);
    }
    else {
        assert.strictEqual(left.kind, "err", `expected an error`);
    }
}
const SIMPLE = true;
const SPACE = "   ";
const CROSS = SIMPLE ? SPACE : " ┣━";
const CORNER = SIMPLE ? SPACE : " ┗━";
const VERTICAL = SIMPLE ? SPACE : " ┃ ";
export function printIndentedItems(nodes) {
    let out = "";
    for (let node of nodes) {
        out += printNode(node, "");
    }
    return out;
}
function printNode(node, indent) {
    let out = "";
    if (Array.isArray(node)) {
        out += `${node[0]}\n`;
        let childrenCount = node[1].length;
        node[1].forEach((child, i) => {
            let isLast = i === childrenCount - 1;
            out += printChildNode(child, indent, isLast);
        });
    }
    else {
        out += `${node}\n`;
    }
    return out;
}
function printChildNode(node, indent, isLast) {
    let out = indent;
    if (isLast) {
        out += CORNER;
        indent += SPACE;
    }
    else {
        out += CROSS;
        indent += VERTICAL;
    }
    out += printNode(node, indent);
    return out;
}
export function module(name) {
    qunitModule(name);
    return c => c;
}
export function test(target, name) {
    qunitTest(name, assert => {
        let constructor = target.constructor;
        let instance = new constructor();
        instance.assert = assert;
        return instance[name](assert);
    });
}
