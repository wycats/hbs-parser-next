import "../../../read/tokens";
import { slice } from "../../../span";
import { parseErr, parseOk, ParserArrow } from "../../shape";
import { thisReference, varReference } from "../../create-node";
export const VarRefArrow = ParserArrow.start()
    .token("Identifier" /* Identifier */)
    .named("id")
    .checkNext(ParserArrow.start()
    .lookahead()
    .map(token => token === undefined || token.type !== "Eq" /* Eq */
    ? parseOk(undefined)
    : parseErr("unknown", {
        type: "lookahead",
        expected: "Eq" /* Eq */,
        actual: token,
    })))
    .extend("source", ParserArrow.start().source().fallible())
    .ifOk(({ id, source }) => {
    if (slice(id.span, source) === "this") {
        return thisReference(id);
    }
    else {
        return varReference(id);
    }
})
    .label("VarRef");
