import { AbstractCombinator } from "./base";
import { ok } from "../../snippet";
export default class Maybe extends AbstractCombinator {
    constructor(combinator) {
        super();
        this.combinator = combinator;
    }
    get name() {
        return `maybe ${this.combinator.name}`;
    }
    invoke(input) {
        let result = input.invoke(this.combinator);
        if (result.kind === "err") {
            return ok([input, null]);
        }
        else {
            return result;
        }
    }
}
