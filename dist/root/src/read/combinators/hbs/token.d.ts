import { Result, Snippet } from "../../../snippet";
import { AbstractCombinator } from "../base";
import type { LeafTokenMap } from "../../tokens";
import type { CombinatorType } from "../types";
export default class SomeToken<T extends keyof LeafTokenMap> extends AbstractCombinator<LeafTokenMap[T]> {
    private combinator;
    private type;
    constructor(combinator: CombinatorType<Snippet>, type: T);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, LeafTokenMap[T]]>;
}
//# sourceMappingURL=token.d.ts.map