import { TokenType, TextToken } from "../../read/tokens";
import * as ast from "../nodes";
import type { SequenceBuilder } from "../shape";
import { consumeToken, label } from "../tokens-iterator";

export const TextSequence: SequenceBuilder<void, ast.TextNode> = label(
  "Text",
  consumeToken(TokenType.Text).andThen(text => ast.text(text))
);
