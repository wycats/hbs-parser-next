import { err } from "../../snippet";
import { AbstractCombinator } from "./base";
export default class Any extends AbstractCombinator {
    constructor(desc, combinators) {
        super();
        this.desc = desc;
        this.combinators = combinators;
    }
    get name() {
        return `any • ${this.desc}`;
    }
    invoke(input) {
        let current = input;
        for (let item of this.combinators) {
            let result = current.invoke(item);
            if (result.kind === "ok") {
                return result;
            }
            // if there was a fatal error, don't try other variants
            if (result.kind === "err" && result.fatal) {
                return result;
            }
        }
        return err(input, "any");
    }
}
