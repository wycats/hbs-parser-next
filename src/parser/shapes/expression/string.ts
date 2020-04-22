import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { SequenceBuilder, ParserArrow, token, source } from "../../shape";
import {
  token as legacyToken,
  source as legacySource,
} from "../../tokens-iterator";

export const StringSequence: SequenceBuilder<
  void,
  ast.StringNode
> = legacyToken("token", TokenType.String)
  .extend("source", legacySource())
  .andThen(({ token, source }) => ast.string(token, source));

export const StringArrow = token(TokenType.String)
  .named("token")
  .extend("source", source())
  .ifOk(({ token, source }) => ast.string(token, source))
  .label("String");
