import { AbstractCombinator } from "./base";
import { Snippet, Result } from "../../snippet";
export default class TakeUntil extends AbstractCombinator<Snippet> {
    private pattern;
    readonly name = "takeUntil";
    constructor(pattern: string);
    invoke(input: Snippet): Result<[Snippet, Snippet]>;
}
//# sourceMappingURL=take-until.d.ts.map