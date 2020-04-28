import "../../../read/tokens";
import { slice } from "../../../span";
import * as ast from "../../nodes";
import { parseErr, parseOk, ParserArrow } from "../../shape";
export const VarRefArrow = ParserArrow.start()
    .token(TokenType.Identifier)
    .named("id")
    .checkNext(ParserArrow.start()
    .lookahead()
    .map(token => token === undefined || token.type !== TokenType.Eq
    ? parseOk(undefined)
    : parseErr("unknown", {
        type: "lookahead",
        expected: TokenType.Eq,
        actual: token,
    })))
    .extend("source", ParserArrow.start().source().fallible())
    .ifOk(({ id, source }) => {
    if (slice(id.span, source) === "this") {
        return ast.thisReference(id);
    }
    else {
        return ast.varReference(id);
    }
})
    .label("VarRef");
