import "../../../read/tokens";
import * as ast from "../../nodes";
import { ParserArrow } from "../../shape";
import { CallBodyArrow } from "../internal/call-body";
export const SexpArrow = ParserArrow.start()
    .parent("sexp", TokenType.Sexp, CallBodyArrow)
    .ifOk(({ result, token }) => ast.call(result, { span: token.span }))
    .label("Sexp");
