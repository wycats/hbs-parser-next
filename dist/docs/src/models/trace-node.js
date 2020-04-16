"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class TraceNodeModel {
    constructor(node) {
        this.node = node;
    }
    get output() {
        return utils_1.unwrap(this.node.output);
    }
    get name() {
        return this.node.combinator.name;
    }
    get kind() {
        let kind = this.output.kind;
        if (kind === "err" && this.node.optional) {
            return "optional-err";
        }
        else {
            return kind;
        }
    }
    get isExpandable() {
        return (this.output.kind === "err" &&
            this.node.children.some(child => utils_1.unwrap(child.output).kind === "err"));
    }
    get isLeaf() {
        return this.node.children.length === 0;
    }
}
exports.default = TraceNodeModel;
