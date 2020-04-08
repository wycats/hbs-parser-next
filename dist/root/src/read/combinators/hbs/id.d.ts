import type { Result, Snippet } from "../../../snippet";
import { AbstractCombinator } from "../base";
export default class Id extends AbstractCombinator<Snippet> {
    readonly name = "ID";
    invoke(input: Snippet): Result<[Snippet, Snippet]>;
}
//# sourceMappingURL=id.d.ts.map