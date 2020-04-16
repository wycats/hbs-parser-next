import { Result, Snippet } from "../../../snippet";
import { SexpToken } from "../../tokens";
import { AbstractCombinator } from "../base";
export default class Sexp extends AbstractCombinator<SexpToken> {
    readonly name = "SEXP";
    invoke(input: Snippet): Result<[Snippet, SexpToken]>;
}
//# sourceMappingURL=sexp.d.ts.map