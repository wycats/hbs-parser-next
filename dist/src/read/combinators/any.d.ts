import { Result, Snippet } from "../../snippet";
import type { Debuggable } from "../logger";
import { AbstractCombinator } from "./base";
import type { TupleCombinators } from "./types";
export default class Any<T extends Debuggable[]> extends AbstractCombinator<T[number]> {
    private desc;
    private combinators;
    constructor(desc: string, combinators: TupleCombinators<T>);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, T[number]]>;
}
//# sourceMappingURL=any.d.ts.map