import { AbstractCombinator } from "./base";
import { ok } from "../../snippet";
export default class Wrap extends AbstractCombinator {
    constructor(combinator) {
        super();
        this.combinator = combinator;
    }
    get name() {
        return `wrap • ${this.combinator.name}`;
    }
    invoke(input) {
        let result = input.invoke(this.combinator);
        if (result.kind === "err") {
            return result;
        }
        else {
            return ok([result.value[0], [result.value[1]]]);
        }
    }
}
