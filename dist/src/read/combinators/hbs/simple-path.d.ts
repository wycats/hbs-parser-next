import { Result, Snippet } from "../../../snippet";
import type { PresentTokens } from "../../tokens";
import { AbstractCombinator } from "../base";
export declare const MEMBER: import("../types").CombinatorType<import("../../tokens").IdentifierToken>;
export default class SimplePath extends AbstractCombinator<PresentTokens> {
    private disallowedKeywords?;
    private head;
    constructor(disallowedKeywords?: string[] | undefined);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, PresentTokens]>;
}
//# sourceMappingURL=simple-path.d.ts.map