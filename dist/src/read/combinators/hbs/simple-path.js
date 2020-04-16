"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../../snippet");
const combinator_1 = require("../../combinator");
const hbs_1 = require("../../hbs");
const base_1 = require("../base");
const head_1 = __importDefault(require("./head"));
class SimplePath extends base_1.AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
        this.head = new head_1.default(disallowedKeywords);
    }
    get name() {
        if (this.disallowedKeywords) {
            return `SIMPLE_PATH • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return `SIMPLE_PATH`;
        }
    }
    invoke(input) {
        let result = input.invoke(this.head);
        if (result.kind === "err") {
            return result;
        }
        let [current, head] = result.value;
        let out = [head];
        while (true) {
            if (current.isEOF()) {
                return snippet_1.ok([current, out]);
            }
            let resultDot = current.invoke(hbs_1.DOT, { optional: true });
            if (resultDot.kind === "err") {
                return snippet_1.ok([current, out]);
            }
            current = resultDot.value[0];
            let nextDot = resultDot.value[1];
            let resultMember = current.invoke(exports.MEMBER);
            if (resultMember.kind === "err") {
                return resultMember;
            }
            current = resultMember.value[0];
            let nextMember = resultMember.value[1];
            out.push(nextDot, nextMember);
        }
    }
}
exports.default = SimplePath;
// export const SIMPLE_HEAD = combinator(() => any("HEAD", ARG, ID));
// TODO: Allow `[]` or string members
exports.MEMBER = combinator_1.combinator(() => hbs_1.ID);
