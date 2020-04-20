"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../../snippet");
const span_1 = require("../../../span");
const combinators_1 = require("../../combinators");
const hbs_1 = require("../../hbs");
const tokens_1 = require("../../tokens");
const base_1 = require("../base");
class Sexp extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "SEXP";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("SEXP", combinators_1.tag("("), hbs_1.SPACED_TOKENS, combinators_1.tag(")")).map(([open, path, close]) => snippet_1.ok(tokens_1.sexp({ children: path, inner: span_1.range(...path) }, span_1.range(open, close)))));
    }
}
exports.default = Sexp;
