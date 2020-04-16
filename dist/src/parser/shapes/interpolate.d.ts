import * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import { Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
export declare class InterpolateShape extends AbstractShape<InterpolateNode> {
    expandFallible(iterator: TokensIterator): Result<InterpolateNode>;
}
export declare class HeadShape extends AbstractShape<ast.ExpressionAstNode> {
    expandFallible(iterator: TokensIterator): Result<ast.ExpressionAstNode>;
}
//# sourceMappingURL=interpolate.d.ts.map