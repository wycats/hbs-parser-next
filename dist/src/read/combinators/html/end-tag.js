"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../../snippet");
const span_1 = require("../../../span");
const combinators_1 = require("../../combinators");
const hbs_1 = require("../../hbs");
const tokens_1 = require("../../tokens");
const utils_1 = require("../../utils");
const base_1 = require("../base");
const tag_1 = require("./tag");
class HTMLEndTag extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "END_TAG";
    }
    invoke(input) {
        return input.invoke(utils_1.map(combinators_1.seq("END_TAG", combinators_1.tag("</"), tag_1.TAG_OR_COMPONENT_NAME, combinators_1.maybe(hbs_1.WS), combinators_1.tag(">")), ([start, name, trailing, end]) => {
            return snippet_1.ok(tokens_1.endTag({ name, trailing }, span_1.range(start, end)));
        }));
    }
}
exports.default = HTMLEndTag;
