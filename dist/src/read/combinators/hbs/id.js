"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combinators_1 = require("../../combinators");
const base_1 = require("../base");
class Id extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "ID";
    }
    invoke(input) {
        return input.invoke(combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET"));
    }
}
exports.default = Id;
