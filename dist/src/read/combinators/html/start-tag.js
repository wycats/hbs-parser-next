import { ok } from "../../../snippet";
import { range } from "../../../span";
import { maybe, seq, tag } from "../../combinators";
import { startTag } from "../../tokens";
import { map } from "../../utils";
import { AbstractCombinator } from "../base";
import { ATTRIBUTES } from "./attribute";
import { TAG_OR_COMPONENT_NAME } from "./tag";
export default class HTMLStartTag extends AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "START_TAG";
    }
    invoke(input) {
        return input.invoke(map(seq("START_TAG", tag("<"), TAG_OR_COMPONENT_NAME, maybe(ATTRIBUTES), maybe(tag("/")), tag(">")), ([start, name, attrs, selfClosing, end]) => {
            return ok(startTag({
                name,
                attrs: attrs || undefined,
                selfClosing: selfClosing ? true : undefined,
            }, range(start, end)));
        }));
    }
}
