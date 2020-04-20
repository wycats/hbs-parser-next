import { Result, Snippet } from "../../../snippet";
import { StartTagToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class HTMLStartTag extends AbstractCombinator<StartTagToken> {
    readonly name = "START_TAG";
    invoke(input: Snippet): Result<[Snippet, StartTagToken]>;
}
//# sourceMappingURL=start-tag.d.ts.map