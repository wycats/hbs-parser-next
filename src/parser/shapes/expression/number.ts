import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";

export const NumberShape = shape("Number", iterator =>
  iterator.consume("number", token => {
    if (token.type === TokenType.Number) {
      return ast.number(token, iterator.source);
    }
  })
);
