import * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import { EXPAND, Result } from "../shape";
import TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
export declare class HeadShape extends AbstractShape<Result<ast.ExpressionAstNode>> {
    readonly desc = "Head";
    [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode>;
}
export declare class InterpolateShape extends AbstractShape<Result<InterpolateNode>> {
    readonly desc = "Interpolate";
    [EXPAND](iterator: TokensIterator): Result<InterpolateNode>;
}
//# sourceMappingURL=interpolate.d.ts.map