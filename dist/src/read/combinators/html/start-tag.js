"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../../snippet");
const span_1 = require("../../../span");
const combinators_1 = require("../../combinators");
const tokens_1 = require("../../tokens");
const utils_1 = require("../../utils");
const base_1 = require("../base");
const attribute_1 = require("./attribute");
const tag_1 = require("./tag");
class HTMLStartTag extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "START_TAG";
    }
    invoke(input) {
        return input.invoke(utils_1.map(combinators_1.seq("START_TAG", combinators_1.tag("<"), tag_1.TAG_OR_COMPONENT_NAME, combinators_1.maybe(attribute_1.ATTRIBUTES), combinators_1.maybe(combinators_1.tag("/")), combinators_1.tag(">")), ([start, name, attrs, selfClosing, end]) => {
            return snippet_1.ok(tokens_1.startTag({
                name,
                attrs: attrs || undefined,
                selfClosing: selfClosing ? true : undefined,
            }, span_1.range(start, end)));
        }));
    }
}
exports.default = HTMLStartTag;
