import { Result, Snippet } from "../../snippet";
import type { Debuggable } from "../logger";
import { AbstractCombinator } from "./base";
import type { TupleCombinators } from "./types";
export default class Seq<T extends Debuggable[]> extends AbstractCombinator<T> {
    readonly name: string;
    private combinators;
    constructor(name: string, combinators: TupleCombinators<T>);
    invoke(input: Snippet): Result<[Snippet, T]>;
}
//# sourceMappingURL=seq.d.ts.map