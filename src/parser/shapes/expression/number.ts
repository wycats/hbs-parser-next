import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { consumeToken, source } from "../../tokens-iterator";
import { shape } from "../abstract";

export const NumberShape = shape("Number", iterator =>
  iterator
    .start(consumeToken("token", TokenType.Number))
    .extend("source", source())
    .andThen(({ source, token }) => ast.number(token, source))
);
