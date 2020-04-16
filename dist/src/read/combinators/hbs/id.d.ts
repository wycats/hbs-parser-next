import { Result, Snippet } from "../../../snippet";
import { AbstractCombinator } from "../base";
export default class Id extends AbstractCombinator<Snippet> {
    private readonly disallowedKeywords?;
    constructor(disallowedKeywords?: string[] | undefined);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, Snippet]>;
}
//# sourceMappingURL=id.d.ts.map