import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";

export const ArgRefShape = shape("ArgRef", iterator =>
  iterator.consume("arg ref", token => {
    if (token.type === TokenType.Argument) {
      return ast.argReference(token);
    }
  })
);
