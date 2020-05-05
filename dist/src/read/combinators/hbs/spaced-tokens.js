// eslint-disable-next-line import/no-cycle
import { SEXP, NUMBER, NAMED, WS, STRING } from "../../hbs";
import { any } from "../../combinators";
import { AbstractCombinator } from "../base";
import { ok } from "../../../snippet";
import SimplePath from "./simple-path";
import { wrap } from "../core";
export default class SpacedTokens extends AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
        this.path = new SimplePath(disallowedKeywords);
    }
    get name() {
        if (this.disallowedKeywords) {
            return `SPACED_TOKENS • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return "SPACED_TOKENS";
        }
    }
    invoke(input) {
        let out = [];
        let tk = any("token", wrap(SEXP), wrap(STRING), wrap(NUMBER), NAMED, this.path, wrap(WS));
        let current = input;
        while (true) {
            if (current.isEOF()) {
                break;
            }
            let result = current.invoke(tk);
            if (result.kind === "err") {
                break;
            }
            let [next, tokens] = result.value;
            for (let tok of tokens) {
                if (Array.isArray(tok)) {
                    out.push(...tok);
                }
                else {
                    out.push(tok);
                }
            }
            current = next;
        }
        if (out.length === 0) {
            return {
                kind: "err",
                reason: "present",
                snippet: input,
            };
        }
        return ok([current, out]);
    }
}
