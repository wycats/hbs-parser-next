import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { consume } from "../../tokens-iterator";

export const ArgRefShape = shape(
  "ArgRef",
  consume("arg ref", token => {
    if (token.type === TokenType.Argument) {
      return ast.argReference(token);
    }
  })
);
