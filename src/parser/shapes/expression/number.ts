import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { SequenceBuilder, isOk, ok, ParserArrow } from "../../shape";
import { token, source } from "../../tokens-iterator";

export const NumberSequence: SequenceBuilder<void, ast.NumberNode> = token(
  "token",
  TokenType.Number
)
  .extend("source", source())
  .andThen(({ source, token }) => ast.number(token, source));

export const NumberArrow = ParserArrow.start()
  .token(TokenType.Number)
  .named("token")
  .extend("source", ParserArrow.start().source().map(ok))
  .ifOk(({ token, source }) => ast.number(token, source))
  .label("Number");
