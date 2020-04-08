import { AbstractCombinator } from "./base";
import { Snippet, Result } from "../../snippet";
export default class TakeWhile extends AbstractCombinator<Snippet> {
    private pattern;
    readonly name = "takeWhile";
    constructor(pattern: string);
    invoke(input: Snippet): Result<[Snippet, Snippet]>;
}
//# sourceMappingURL=take-while.d.ts.map