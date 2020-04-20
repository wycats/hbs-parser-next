import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import {
  legacyConsumeToken,
  legacySource,
  consumeToken,
  source,
} from "../../tokens-iterator";
import type { SequenceBuilder } from "../../shape";

export const StringShape = shape("String", iterator =>
  iterator
    .start(legacyConsumeToken("token", TokenType.String))
    .extend("source", legacySource())
    .andThen(({ token, source }) => ast.string(token, source))
);

export const StringSequence: SequenceBuilder<
  void,
  ast.StringNode
> = consumeToken("token", TokenType.String)
  .extend("source", source())
  .andThen(({ token, source }) => ast.string(token, source));
