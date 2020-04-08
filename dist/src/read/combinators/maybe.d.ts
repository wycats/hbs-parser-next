import { AbstractCombinator } from "./base";
import { Snippet, Result } from "../../snippet";
import type { CombinatorType } from "./types";
import type { Debuggable } from "../logger";
export default class Maybe<T extends Debuggable> extends AbstractCombinator<T | null> {
    private combinator;
    constructor(combinator: CombinatorType<T>);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, T | null]>;
}
//# sourceMappingURL=maybe.d.ts.map