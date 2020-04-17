import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { consume } from "../../tokens-iterator";

export const NumberShape = shape("Number", iterator =>
  iterator.start(
    consume("number", token => {
      if (token.type === TokenType.Number) {
        return ast.number(token, iterator.source);
      }
    })
  )
);
