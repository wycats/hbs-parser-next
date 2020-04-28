import { ok } from "../../../snippet";
import { AbstractCombinator } from "../base";
import { combinatorName } from "../../utils";
export default class SomeToken extends AbstractCombinator {
    constructor(combinator, type) {
        super();
        this.combinator = combinator;
        this.type = type;
    }
    get name() {
        return `token • ${combinatorName(this.combinator)}`;
    }
    invoke(input) {
        let result = input.invoke(this.combinator, {
            forceTransparent: true,
        });
        if (result.kind === "err") {
            return result;
        }
        else {
            return ok([
                result.value[0],
                {
                    type: this.type,
                    span: result.value[1].span,
                },
            ]);
        }
    }
}
