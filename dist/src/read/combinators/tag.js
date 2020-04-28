import { AbstractCombinator } from "./base";
import { ok } from "../../snippet";
export default class Tag extends AbstractCombinator {
    constructor(source) {
        super();
        this.source = source;
    }
    get name() {
        return JSON.stringify(this.source);
    }
    invoke(input) {
        let next = input.slice(this.source.length);
        if (next.fragment === this.source) {
            return ok([next.rest, next]);
        }
        else {
            return { kind: "err", snippet: input, reason: "tag" };
        }
    }
}
