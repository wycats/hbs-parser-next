import { TokenType, TextToken } from "../../read/tokens";
import * as ast from "../nodes";
import { SequenceBuilder, isOk, ok, ParserArrow } from "../shape";
import { token, label } from "../tokens-iterator";

export const TextSequence: SequenceBuilder<void, ast.TextNode> = label(
  "Text",
  token(TokenType.Text).andThen(text => ast.text(text))
);

export const TextArrow = ParserArrow.start()
  .token(TokenType.Text)
  .ifOk(text => ast.text(text))
  .label("Text");
