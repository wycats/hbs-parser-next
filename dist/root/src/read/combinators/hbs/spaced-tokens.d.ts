import type { PresentTokens } from "../../tokens";
import { AbstractCombinator } from "../base";
import { Snippet, Result } from "../../../snippet";
export default class SpacedTokens extends AbstractCombinator<PresentTokens> {
    readonly name = "SPACED_TOKENS";
    invoke(input: Snippet): Result<[Snippet, PresentTokens]>;
}
//# sourceMappingURL=spaced-tokens.d.ts.map