import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type { SequenceBuilder, Result } from "../../shape";
import {
  consumeToken,
  source,
  legacyConsumeToken,
  legacySource,
} from "../../tokens-iterator";
import { ShapeConstructor, shape } from "../abstract";

export const NumberShape: ShapeConstructor<Result<ast.NumberNode>> = shape(
  "Number",
  iterator =>
    iterator
      .start(legacyConsumeToken("token", TokenType.Number))
      .extend("source", legacySource())
      .andThen(({ source, token }) => ast.number(token, source))
);

export const NumberSequence: SequenceBuilder<
  void,
  ast.NumberNode
> = consumeToken("token", TokenType.Number)
  .extend("source", source())
  .andThen(({ source, token }) => ast.number(token, source));
