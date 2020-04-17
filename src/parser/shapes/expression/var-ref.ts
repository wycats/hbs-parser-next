import { TokenType } from "../../../read/tokens";
import { slice } from "../../../span";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { consume } from "../../tokens-iterator";

export const VarRefShape = shape("VarRef", iterator => {
  let transaction = iterator.begin();

  try {
    return transaction
      .start(
        consume("var ref", token => {
          if (token.type === TokenType.Identifier) {
            return token;
          }
        })
      )
      .andCheck(() =>
        transaction.assertNotNext("eq", token => token.type === TokenType.Eq)
      )
      .andThen(id => {
        transaction.commit();
        if (slice(id.span, transaction.source) === "this") {
          return ast.thisReference(id);
        } else {
          return ast.varReference(id);
        }
      });
  } finally {
    transaction.finallyRollback();
  }
});
