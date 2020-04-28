import { ok } from "../../../snippet";
import { range } from "../../../span";
import { seq, tag } from "../../combinators";
import { SPACED_TOKENS } from "../../hbs";
import { sexp } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class Sexp extends AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "SEXP";
    }
    invoke(input) {
        return input.invoke(seq("SEXP", tag("("), SPACED_TOKENS, tag(")")).map(([open, path, close]) => ok(sexp({ children: path, inner: range(...path) }, range(open, close)))));
    }
}
