"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../snippet");
const base_1 = require("./base");
class Any extends base_1.AbstractCombinator {
    constructor(desc, combinators) {
        super();
        this.desc = desc;
        this.combinators = combinators;
    }
    get name() {
        return `any • ${this.desc}`;
    }
    invoke(input) {
        let current = input;
        for (let item of this.combinators) {
            let result = current.invoke(item);
            if (result.kind === "ok") {
                return result;
            }
        }
        return snippet_1.err(input, "any");
    }
}
exports.default = Any;
