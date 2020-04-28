import "../../../read/tokens";
import * as ast from "../../nodes";
import { parseOk, ParserArrow } from "../../shape";
export const NumberArrow = ParserArrow.start()
    .token(TokenType.Number)
    .named("token")
    .extend("source", ParserArrow.start().source().map(parseOk))
    .ifOk(({ token, source }) => ast.number(token, source))
    .label("Number");
