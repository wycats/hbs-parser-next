import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import { consumeToken } from "../tokens-iterator";
import { shape } from "./abstract";

export const TextShape = shape("Text", iterator =>
  iterator
    .start(consumeToken("text", TokenType.Text))
    .andThen(({ text }) => ast.text(text))
);
