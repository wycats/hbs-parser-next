import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { ParserArrow, ParseResult } from "../../shape";
import { CallBodyArrow } from "../internal/call-body";

export const SexpArrow: ParserArrow<
  void,
  ParseResult<ast.CallNode>
> = ParserArrow.start()
  .parent("sexp", TokenType.Sexp, CallBodyArrow)
  .ifOk(({ result, token }) => ast.call(result, { span: token.span }))
  .label("Sexp");
