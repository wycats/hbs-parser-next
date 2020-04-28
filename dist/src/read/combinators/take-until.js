import { AbstractCombinator } from "./base";
import { ok } from "../../snippet";
export default class TakeUntil extends AbstractCombinator {
    constructor(pattern) {
        super();
        this.pattern = pattern;
        this.name = "takeUntil";
    }
    invoke(input) {
        let next = input;
        while (true) {
            if (next.isEOF() || next.isMatch(this.pattern)) {
                return ok([next.rest, next]);
            }
            else {
                next = next.extend(1);
            }
        }
    }
}
