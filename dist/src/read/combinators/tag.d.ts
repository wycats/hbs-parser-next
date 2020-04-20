import { AbstractCombinator } from "./base";
import { Snippet, Result } from "../../snippet";
export default class Tag extends AbstractCombinator<Snippet> {
    private source;
    constructor(source: string);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, Snippet]>;
}
//# sourceMappingURL=tag.d.ts.map