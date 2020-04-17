import { TokenType } from "../../../read/tokens";
import { slice } from "../../../span";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import {
  assertNotNext,
  atomic,
  consumeToken,
  source,
} from "../../tokens-iterator";

export const VarRefShape = shape(
  "VarRef",
  atomic(iterator =>
    iterator
      .start(consumeToken("id", TokenType.Identifier))
      .checkNext(assertNotNext("eq", token => token.type === TokenType.Eq))
      .extend("source", source())
      .andThen(({ id, source }) => {
        if (slice(id.span, source) === "this") {
          return ast.thisReference(id);
        } else {
          return ast.varReference(id);
        }
      })
  )
);
