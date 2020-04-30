import { TokenType } from "../../../read/token-enum";
import { parseOk, ParserArrow } from "../../shape";
import { number } from "../../create-node";

export const NumberArrow = ParserArrow.start()
  .token(TokenType.Number)
  .named("token")
  .extend("source", ParserArrow.start().source().map(parseOk))
  .ifOk(({ token, source }) => number(token, source))
  .label("Number");
