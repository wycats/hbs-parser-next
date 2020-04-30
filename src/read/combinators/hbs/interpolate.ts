import { ok, Result, Snippet } from "../../../snippet";
import { range } from "../../../span";
import { seq, tag } from "../../combinators";
// eslint-disable-next-line import/no-cycle
import { SPACED_TOKENS } from "../../hbs";
import { interpolate, InterpolateToken } from "../../tokens";
import { AbstractCombinator } from "../base";

export default class Interpolate extends AbstractCombinator<InterpolateToken> {
  readonly name = "INTERPOLATE";

  invoke(input: Snippet): Result<[Snippet, InterpolateToken]> {
    return input.invoke(
      seq("INTERPOLATE", tag("{{"), SPACED_TOKENS, tag("}}")).map(
        ([open, path, close]) => {
          return ok(interpolate(path, range(open, close)));
        }
      )
    );
  }
}
