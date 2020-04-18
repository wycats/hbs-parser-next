import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shapeStep, start } from "../../shape";
import { consumeTokenStep, sourceStep } from "../../tokens-iterator";

export const NumberShape = shapeStep(
  "Number",
  start(consumeTokenStep("token", TokenType.Number))
    .extend("source", sourceStep())
    .andThen(({ source, token }) => ast.number(token, source))
);
