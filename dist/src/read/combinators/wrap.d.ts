import { AbstractCombinator } from "./base";
import { Snippet, Result } from "../../snippet";
import type { Debuggable } from "../logger";
import type { CombinatorType } from "./types";
export default class Wrap<T extends Debuggable> extends AbstractCombinator<T[]> {
    private combinator;
    constructor(combinator: CombinatorType<T>);
    get name(): string;
    invoke(input: Snippet): Result<[Snippet, T[]]>;
}
//# sourceMappingURL=wrap.d.ts.map