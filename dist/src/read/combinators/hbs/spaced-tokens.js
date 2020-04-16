"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_1 = require("../../hbs");
const combinators_1 = require("../../combinators");
const base_1 = require("../base");
const snippet_1 = require("../../../snippet");
const simple_path_1 = __importDefault(require("./simple-path"));
class SpacedTokens extends base_1.AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
        this.path = new simple_path_1.default(disallowedKeywords);
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
        let tk = combinators_1.any("token", hbs_1.wrap(hbs_1.SEXP), hbs_1.wrap(hbs_1.STRING), hbs_1.wrap(hbs_1.NUMBER), hbs_1.NAMED, this.path, hbs_1.wrap(hbs_1.WS));
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
        return snippet_1.ok([current, out]);
    }
}
exports.default = SpacedTokens;
