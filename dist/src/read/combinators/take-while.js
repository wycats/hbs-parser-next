import { AbstractCombinator } from "./base";
import { ok, err } from "../../snippet";
export default class TakeWhile extends AbstractCombinator {
    constructor(pattern) {
        super();
        this.pattern = pattern;
        this.name = "takeWhile";
    }
    invoke(input) {
        let next = input;
        while (true) {
            if (next.isEOF()) {
                return ok([next.rest, next]);
            }
            else if (next.isMatch(this.pattern)) {
                next = next.extend(this.pattern.length);
            }
            else if (next.length === 0) {
                return err(input, "takeWhile");
            }
            else {
                return ok([next.rest, next]);
            }
        }
    }
}
