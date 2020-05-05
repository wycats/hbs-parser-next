import { Result, Snippet } from "../../../snippet";
import { ArgumentToken, IdentifierToken, PresentTokens } from "../../tokens";
import { AbstractCombinator } from "../base";
import type { CombinatorType } from "../types";
export declare const MEMBER: CombinatorType<IdentifierToken>;
export declare const ARG: CombinatorType<ArgumentToken>;
export declare class Head extends AbstractCombinator<IdentifierToken | ArgumentToken> {
    private disallowedKeywords?;
    private id;
    constructor(disallowedKeywords?: string[] | undefined);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, IdentifierToken | ArgumentToken]>;
}
export default class SimplePath extends AbstractCombinator<PresentTokens> {
    private disallowedKeywords?;
    private head;
    constructor(disallowedKeywords?: string[] | undefined);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, PresentTokens]>;
}
export declare const SIMPLE_PATH: SimplePath;
//# sourceMappingURL=simple-path.d.ts.map