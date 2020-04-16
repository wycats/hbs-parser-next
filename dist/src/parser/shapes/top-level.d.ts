import type { TextNode } from "../nodes";
import type { Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import type { InterpolateNode } from "../nodes/top-level";
export declare type TopLevelNode = TextNode | InterpolateNode;
export declare class TopLevelShape extends AbstractShape<TopLevelNode> {
    expandFallible(iterator: TokensIterator): Result<TopLevelNode>;
}
//# sourceMappingURL=top-level.d.ts.map