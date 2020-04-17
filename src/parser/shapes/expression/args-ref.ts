import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { consumeToken } from "../../tokens-iterator";

export const ArgRefShape = shape("ArgRef", iterator =>
  iterator
    .start(consumeToken(TokenType.Argument))
    .andThen(ref => ast.argReference(ref))
);
