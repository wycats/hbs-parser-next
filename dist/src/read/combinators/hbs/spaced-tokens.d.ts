import type { PresentTokens } from "../../tokens";
import { AbstractCombinator } from "../base";
import { Snippet, Result } from "../../../snippet";
export default class SpacedTokens extends AbstractCombinator<PresentTokens> {
    private disallowedKeywords?;
    private path;
    constructor(disallowedKeywords?: string[] | undefined);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, PresentTokens]>;
}
//# sourceMappingURL=spaced-tokens.d.ts.map