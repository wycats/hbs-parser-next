import type { Result, Snippet } from "../../../snippet";
import { ArgumentToken, IdentifierToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class Head extends AbstractCombinator<IdentifierToken | ArgumentToken> {
    private disallowedKeywords?;
    private id;
    constructor(disallowedKeywords?: string[] | undefined);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, IdentifierToken | ArgumentToken]>;
}
//# sourceMappingURL=head.d.ts.map