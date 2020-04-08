import type * as ast from "../nodes";
import type { Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { VarRefShape } from "./expression/var-ref";

export class ExpressionShape extends AbstractShape<ast.ExpressionAstNode> {
  expandFallible(iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    return new VarRefShape().expandFallible(iterator);
  }
}
