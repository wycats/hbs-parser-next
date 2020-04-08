"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../snippet");
const base_1 = require("./base");
class Seq extends base_1.AbstractCombinator {
    constructor(name, combinators) {
        super();
        this.name = name;
        this.combinators = combinators;
    }
    invoke(input) {
        let out = [];
        let current = input;
        for (let item of this.combinators) {
            let result = current.invoke(item);
            if (result.kind === "ok") {
                let [next, value] = result.value;
                out.push(value);
                current = next.rest;
            }
            else {
                return result;
            }
        }
        return snippet_1.ok([current.rest, out]);
    }
}
exports.default = Seq;
