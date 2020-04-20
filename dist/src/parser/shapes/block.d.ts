import type * as ast from "../nodes";
import type { BlockNode } from "../nodes/top-level";
import { EXPAND, Result } from "../shape";
import TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
export declare class HeadShape extends AbstractShape<Result<ast.ExpressionAstNode>> {
    readonly desc = "Head";
    [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode>;
}
export declare class BlockShape extends AbstractShape<Result<BlockNode>> {
    readonly desc = "Interpolate";
    [EXPAND](iterator: TokensIterator): Result<BlockNode>;
}
//# sourceMappingURL=block.d.ts.map