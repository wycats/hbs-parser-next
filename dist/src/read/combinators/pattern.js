import { AbstractCombinator } from "./base";
import { ok, err } from "../../snippet";
export default class Pattern extends AbstractCombinator {
    constructor(desc, pattern) {
        super();
        this.desc = desc;
        this.pattern = pattern;
    }
    get name() {
        return `pattern[${this.desc}]`;
    }
    invoke(input) {
        let rest = input.sliceRest;
        let match = rest.match(this.pattern);
        if (match) {
            let matched = match[0];
            let next = input.slice(matched.length);
            return ok([next.rest, next]);
        }
        else {
            return err(input, "pattern");
        }
    }
}
