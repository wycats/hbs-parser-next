import "../../../read/tokens";
import { parseOk, ParserArrow } from "../../shape";
import { number } from "../../create-node";
export const NumberArrow = ParserArrow.start()
    .token("Number" /* Number */)
    .named("token")
    .extend("source", ParserArrow.start().source().map(parseOk))
    .ifOk(({ token, source }) => number(token, source))
    .label("Number");
