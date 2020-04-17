import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { consumeToken, source } from "../../tokens-iterator";

export const StringShape = shape("String", iterator =>
  iterator
    .start(consumeToken("token", TokenType.String))
    .extend("source", source())
    .andThen(({ token, source }) => ast.string(token, source))
);
