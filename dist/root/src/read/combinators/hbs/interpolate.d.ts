import { Result, Snippet } from "../../../snippet";
import { InterpolateToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class Interpolate extends AbstractCombinator<InterpolateToken> {
    readonly name = "INTERPOLATE";
    invoke(input: Snippet): Result<[Snippet, InterpolateToken]>;
}
//# sourceMappingURL=interpolate.d.ts.map