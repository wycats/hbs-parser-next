import { ok, Result, Snippet } from "../../../snippet";
import { range } from "../../../span";
import { seq, tag } from "../../combinators";
import { SPACED_TOKENS } from "../../hbs";
import { sexp, SexpToken } from "../../tokens";
import { AbstractCombinator } from "../base";

export default class Sexp extends AbstractCombinator<SexpToken> {
  readonly name = "INTERPOLATE";

  invoke(input: Snippet): Result<[Snippet, SexpToken]> {
    return input.invoke(
      seq(
        "SEXP",
        tag("("),
        SPACED_TOKENS,
        tag(")")
      ).map(([open, path, close]) => ok(sexp(path, range(open, close))))
    );
  }
}
