import { Result, Snippet } from "../../../snippet";
import { StringToken } from "../../tokens";
import { AbstractCombinator } from "../base";
import type { CombinatorType } from "../types";
export default class SomeString extends AbstractCombinator<StringToken> {
    readonly name = "STRING";
    invoke(input: Snippet): Result<[Snippet, StringToken]>;
}
export declare const SINGLE_QUOTED: CombinatorType<StringToken>;
export declare const DOUBLE_QUOTED: CombinatorType<StringToken>;
//# sourceMappingURL=string.d.ts.map