import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { consume } from "../../tokens-iterator";

export const StringShape = shape("String", iterator =>
  iterator.start(
    consume("string", token => {
      if (token.type === TokenType.String) {
        return ast.string(token, iterator.source);
      }
    })
  )
);
