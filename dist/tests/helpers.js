"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eqError = exports.eqSnippets = exports.eqSnippet = exports.eqResult = exports.unwrap = void 0;
const qunit_1 = require("qunit");
function unwrap(input) {
    if (input.kind === "ok") {
        return input.value;
    }
    else {
        throw new Error(`Expected Ok result, got Err (reason=${input.reason})`);
    }
}
exports.unwrap = unwrap;
function eqResult(left, right) {
    qunit_1.assert.strictEqual(left.kind, right.kind);
    if (left.kind === "ok" && right.kind === "ok") {
        qunit_1.assert.ok(left.value.eq(right.value));
    }
    else if (left.kind === "err" && right.kind === "err") {
        qunit_1.assert.ok(left.snippet.eq(right.snippet), `left=${left.snippet.fmt()} right=${right.snippet.fmt()}`);
        qunit_1.assert.strictEqual(left.reason, right.reason);
    }
}
exports.eqResult = eqResult;
function eqSnippet(left, right) {
    qunit_1.assert.ok(left.eq(right), `left=${left.fmt()} right=${right.fmt()}`);
}
exports.eqSnippet = eqSnippet;
function eqSnippets(left, right) {
    if (left.length !== right.length) {
        qunit_1.assert.ok(false, `left=${JSON.stringify(left.map(s => s.fmt()))}\nright=${JSON.stringify(right.map(s => s.fmt()))}`);
    }
    else {
        for (let i = 0; i < left.length; i++) {
            let leftItem = left[i];
            let rightItem = right[i];
            eqSnippet(leftItem, rightItem);
        }
    }
}
exports.eqSnippets = eqSnippets;
function eqError(left, right) {
    if (left.kind === "err") {
        qunit_1.assert.ok(left.snippet.eq(right.snippet), `left=${left.snippet.fmt()} right=${right.snippet.fmt()}`);
        qunit_1.assert.strictEqual(left.reason, right.reason);
    }
    else {
        qunit_1.assert.strictEqual(left.kind, "err", `expected an error`);
    }
}
exports.eqError = eqError;
