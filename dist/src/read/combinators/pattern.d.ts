import { AbstractCombinator } from "./base";
import { Snippet, Result } from "../../snippet";
export default class Pattern extends AbstractCombinator<Snippet> {
    private desc;
    private pattern;
    constructor(desc: string, pattern: RegExp);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, Snippet]>;
}
//# sourceMappingURL=pattern.d.ts.map