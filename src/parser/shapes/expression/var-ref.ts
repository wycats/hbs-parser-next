import { TokenType } from "../../../read/tokens";
import { slice } from "../../../span";
import * as ast from "../../nodes";
import type {
  ThisReferenceNode,
  VarReferenceNode,
} from "../../nodes/expression";
import { EXPAND, Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";

export class VarRefShape extends AbstractShape<
  VarReferenceNode | ThisReferenceNode
> {
  readonly desc = "VarRef";

  [EXPAND](
    iterator: TokensIterator
  ): Result<VarReferenceNode | ThisReferenceNode> {
    let transaction = iterator.begin();

    try {
      return transaction
        .consume("var ref", token => {
          if (token.type === TokenType.Identifier) {
            return token;
          }
        })
        .andThen(id => {
          debugger;
          return transaction
            .assertNotNext("eq", token => token.type === TokenType.Eq)
            .map(() => id);
        })
        .map(id => {
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
  }
}
