import type { TextNode } from "../nodes";
import { Result, EXPAND } from "../shape";
import TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import type { InterpolateNode } from "../nodes/top-level";
export declare type TopLevelNode = TextNode | InterpolateNode;
export declare class TopLevelShape extends AbstractShape<Result<TopLevelNode>> {
    readonly desc = "TopLevel";
    [EXPAND](iterator: TokensIterator): Result<TopLevelNode>;
}
//# sourceMappingURL=top-level.d.ts.map