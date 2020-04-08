import { Result, Snippet } from "../../../snippet";
import { EndTagToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class HTMLEndTag extends AbstractCombinator<EndTagToken> {
    readonly name = "END_TAG";
    invoke(input: Snippet): Result<[Snippet, EndTagToken]>;
}
//# sourceMappingURL=end-tag.d.ts.map