import { Result, Snippet } from "../../../snippet";
import { BlockToken, CloseBlockToken, OpenBlockToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class Block extends AbstractCombinator<BlockToken> {
    readonly name = "BLOCK";
    invoke(input: Snippet): Result<[Snippet, BlockToken]>;
}
export declare class OpenBlock extends AbstractCombinator<OpenBlockToken> {
    readonly name = "OPEN_BLOCK";
    invoke(input: Snippet): Result<[Snippet, OpenBlockToken]>;
}
export declare class CloseBlock extends AbstractCombinator<CloseBlockToken> {
    readonly name = "CLOSE_BLOCK";
    invoke(input: Snippet): Result<[Snippet, CloseBlockToken]>;
}
//# sourceMappingURL=block.d.ts.map