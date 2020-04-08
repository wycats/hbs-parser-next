import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type { VarReferenceNode } from "../../nodes/expression";
import { err, ok, Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";

export class VarRefShape extends AbstractShape<VarReferenceNode> {
  expandFallible(iterator: TokensIterator): Result<VarReferenceNode> {
    let next = iterator.peek();

    if (next.isEOF) {
      return err(next, "eof");
    }

    let token = next.token;

    if (token.type === TokenType.Identifier) {
      next.commit();
      return ok(ast.varReference(token));
    } else {
      return err(next, "mismatch");
    }
  }
}
