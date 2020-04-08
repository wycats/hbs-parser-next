"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../../snippet");
const span_1 = require("../../../span");
const combinators_1 = require("../../combinators");
const hbs_1 = require("../../hbs");
const tokens_1 = require("../../tokens");
const base_1 = require("../base");
class Interpolate extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "INTERPOLATE";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("INTERPOLATE", combinators_1.tag("{{"), hbs_1.SPACED_TOKENS, combinators_1.tag("}}")).map(([open, path, close]) => {
            return snippet_1.ok(tokens_1.interpolate(path, span_1.range(open, close)));
        }));
    }
}
exports.default = Interpolate;
