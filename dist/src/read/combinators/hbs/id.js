import { err, ok } from "../../../snippet";
import { pattern } from "../../combinators";
import { AbstractCombinator } from "../base";
export default class Id extends AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
    }
    get name() {
        if (this.disallowedKeywords) {
            return `ID • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return "ID";
        }
    }
    invoke(input) {
        const disallowedKeywords = this.disallowedKeywords;
        if (disallowedKeywords) {
            return input.invoke(pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET").map(snippet => {
                let frag = snippet.fragment;
                if (disallowedKeywords.some(k => frag === k)) {
                    return err(snippet, "disallowed keyword");
                }
                else {
                    return ok(snippet);
                }
            }));
        }
        else {
            return input.invoke(pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET"));
        }
    }
}
