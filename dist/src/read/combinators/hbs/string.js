import { ok } from "../../../snippet";
import { range } from "../../../span";
import { any, pattern, seq, tag } from "../../combinators";
import { stringToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class SomeString extends AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "STRING";
    }
    invoke(input) {
        return input.invoke(any("QUOTED_STRING", SINGLE_QUOTED, DOUBLE_QUOTED));
    }
}
export const SINGLE_QUOTED = seq("SINGLE_QUOTED", tag(`'`), pattern(/^(\\'|[^'])*/u, "single quote body"), tag(`'`)).map(([open, body, close]) => ok(stringToken({ data: body.span, quote: QuoteType.Single }, range(open, close))));
export const DOUBLE_QUOTED = seq("DOUBLE_QUOTED", tag(`"`), pattern(/^(\\"|[^"])*/u, "double quote body"), tag(`"`)).map(([open, body, close]) => ok(stringToken({ data: body.span, quote: QuoteType.Double }, range(open, close))));
