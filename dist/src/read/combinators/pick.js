import { ok, err } from "../../snippet";
import { AbstractCombinator } from "./base";
export default class Pick extends AbstractCombinator {
    constructor(combinators, callbacks) {
        super();
        this.combinators = combinators;
        this.callbacks = callbacks;
        this.name = "pick";
    }
    invoke(input) {
        let current = input;
        for (let [name, item] of Object.entries(this.combinators)) {
            let firstResult = current.invoke(item, { context: name });
            if (firstResult.kind === "ok") {
                let [next, value] = firstResult.value;
                let result = this.callbacks[name](value);
                if (result.kind === "ok") {
                    return ok([next, result.value]);
                }
                else {
                    return result;
                }
            }
        }
        return err(input, "any");
    }
}
