import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { ok, ParserArrow } from "../../shape";

export const NumberArrow = ParserArrow.start()
  .token(TokenType.Number)
  .named("token")
  .extend("source", ParserArrow.start().source().map(ok))
  .ifOk(({ token, source }) => ast.number(token, source))
  .label("Number");
