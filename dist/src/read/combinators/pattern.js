"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const snippet_1 = require("../../snippet");
class Pattern extends base_1.AbstractCombinator {
    constructor(desc, pattern) {
        super();
        this.desc = desc;
        this.pattern = pattern;
    }
    get name() {
        return `pattern[${this.desc}]`;
    }
    invoke(input) {
        let rest = input.sliceRest;
        let match = rest.match(this.pattern);
        if (match) {
            let matched = match[0];
            let next = input.slice(matched.length);
            return snippet_1.ok([next.rest, next]);
        }
        else {
            return snippet_1.err(input, "pattern");
        }
    }
}
exports.default = Pattern;
