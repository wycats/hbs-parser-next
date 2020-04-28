import { ok } from "../../../snippet";
import { range } from "../../../span";
import { maybe, seq, tag } from "../../combinators";
import { WS } from "../../hbs";
import { endTag } from "../../tokens";
import { map } from "../../utils";
import { AbstractCombinator } from "../base";
import { TAG_OR_COMPONENT_NAME } from "./tag";
export default class HTMLEndTag extends AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "END_TAG";
    }
    invoke(input) {
        return input.invoke(map(seq("END_TAG", tag("</"), TAG_OR_COMPONENT_NAME, maybe(WS), tag(">")), ([start, name, trailing, end]) => {
            return ok(endTag({ name, trailing }, range(start, end)));
        }));
    }
}
