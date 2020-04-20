"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../../snippet");
const combinators_1 = require("../../combinators");
const base_1 = require("../base");
class Id extends base_1.AbstractCombinator {
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
            return input.invoke(combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET").map(snippet => {
                let frag = snippet.fragment;
                if (disallowedKeywords.some(k => frag === k)) {
                    return snippet_1.err(snippet, "disallowed keyword");
                }
                else {
                    return snippet_1.ok(snippet);
                }
            }));
        }
        else {
            return input.invoke(combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET"));
        }
    }
}
exports.default = Id;
