import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import { shapeStep, start } from "../shape";
import { consumeTokenStep } from "../tokens-iterator";

export const TextShape = shapeStep(
  "TextShape",
  start(consumeTokenStep(TokenType.Text)).andThen(text => ast.text(text))
);
