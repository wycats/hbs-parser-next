"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function eq(left, right) {
    return left === right;
}
exports.eq = eq;
function not(item) {
    return !item;
}
exports.not = not;
function set(parent, key) {
    return (value) => {
        parent[key] = value;
    };
}
exports.set = set;
function json(o) {
    return JSON.stringify(o, undefined, 2);
}
exports.json = json;
function present(o) {
    return Array.isArray(o) && o.length > 0;
}
exports.present = present;
function unwrap(v) {
    if (v === null || v === undefined) {
        throw new Error(`ASSERT: Expected non-null`);
    }
    return v;
}
exports.unwrap = unwrap;
