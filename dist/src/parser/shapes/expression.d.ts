import type * as ast from "../nodes";
import { Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
export declare class ExpressionShape extends AbstractShape<ast.ExpressionAstNode> {
    expandFallible(iterator: TokensIterator): Result<ast.ExpressionAstNode>;
}
//# sourceMappingURL=expression.d.ts.map