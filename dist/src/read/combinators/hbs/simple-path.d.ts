import { Result, Snippet } from "../../../snippet";
import type { PresentTokens } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class SimplePath extends AbstractCombinator<PresentTokens> {
    private disallowedKeywords?;
    private head;
    constructor(disallowedKeywords?: string[] | undefined);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, PresentTokens]>;
}
export declare const MEMBER: import("../types").CombinatorType<import("../../tokens").IdentifierToken>;
//# sourceMappingURL=simple-path.d.ts.map