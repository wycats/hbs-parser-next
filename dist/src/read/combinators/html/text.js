"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../../snippet");
const combinators_1 = require("../../combinators");
const tokens_1 = require("../../tokens");
const base_1 = require("../base");
class HTMLText extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "TEXT";
    }
    invoke(input) {
        let result = input.invoke(combinators_1.takeUntil("{{"));
        if (result.kind === "err") {
            return result;
        }
        let [next, value] = result.value;
        return snippet_1.ok([next, tokens_1.text(value.span)]);
    }
}
exports.default = HTMLText;
