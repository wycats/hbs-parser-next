import { Result, Snippet } from "../../../snippet";
import { NumberToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class SomeNumber extends AbstractCombinator<NumberToken> {
    readonly name = "NUMBER";
    invoke(input: Snippet): Result<[Snippet, NumberToken]>;
}
//# sourceMappingURL=number.d.ts.map