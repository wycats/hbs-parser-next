import { ok } from "../../../snippet";
import { pattern } from "../../combinators";
import { text } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class HTMLText extends AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "TEXT";
    }
    invoke(input) {
        let result = input.invoke(pattern(/^[\s\S]*?(?=[{<}]|$)/u, "TEXT"));
        if (result.kind === "err") {
            return result;
        }
        let [next, value] = result.value;
        return ok([next, text(value.span)]);
    }
}
