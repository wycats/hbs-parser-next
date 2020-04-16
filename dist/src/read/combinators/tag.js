"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const snippet_1 = require("../../snippet");
class Tag extends base_1.AbstractCombinator {
    constructor(source) {
        super();
        this.source = source;
    }
    get name() {
        return JSON.stringify(this.source);
    }
    invoke(input) {
        let next = input.slice(this.source.length);
        if (next.fragment === this.source) {
            return snippet_1.ok([next.rest, next]);
        }
        else {
            return { kind: "err", snippet: input, reason: "tag" };
        }
    }
}
exports.default = Tag;
