import { Result, Snippet } from "../../../snippet";
import { TextToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class HTMLText extends AbstractCombinator<TextToken> {
    readonly name = "TEXT";
    invoke(input: Snippet): Result<[Snippet, TextToken]>;
}
//# sourceMappingURL=text.d.ts.map