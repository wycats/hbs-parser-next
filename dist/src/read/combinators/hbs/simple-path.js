"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combinator_1 = require("../../combinator");
const snippet_1 = require("../../../snippet");
const combinators_1 = require("../../combinators");
const base_1 = require("../base");
const hbs_1 = require("../../hbs");
class SimplePath extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "PATH";
    }
    invoke(input) {
        let result = input.invoke(exports.SIMPLE_HEAD);
        if (result.kind === "err") {
            return result;
        }
        let [current, head] = result.value;
        let out = [head];
        while (true) {
            if (current.isEOF()) {
                return snippet_1.ok([current, out]);
            }
            let resultDot = current.invoke(hbs_1.DOT);
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
exports.SIMPLE_HEAD = combinator_1.combinator(() => combinators_1.any("HEAD", hbs_1.ARG, hbs_1.ID));
// TODO: Allow `[]` or string members
exports.MEMBER = combinator_1.combinator(() => hbs_1.ID);
