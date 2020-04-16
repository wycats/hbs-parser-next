import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type {
  VarReferenceNode,
  ThisReferenceNode,
} from "../../nodes/expression";
import { err, ok, Result, EXPAND } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
import { slice } from "../../../span";

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
          return transaction
            .assertNotNext("eq", token => token.type === TokenType.Eq)
            .mapResult(() => ok(id));
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
