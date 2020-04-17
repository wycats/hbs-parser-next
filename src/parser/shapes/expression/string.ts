import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";

export const StringShape = shape("String", iterator =>
  iterator.consume("string", token => {
    if (token.type === TokenType.String) {
      return ast.string(token, iterator.source);
    }
  })
);
