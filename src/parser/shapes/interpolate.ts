import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import { EXPAND, Result, start } from "../shape";
import TokensIterator, {
  legacyExpand,
  legacyConsumeParent,
  consumeParent,
  processInner,
  expand,
  label,
} from "../tokens-iterator";
import { AbstractShape, recurse } from "./abstract";
import { ExpressionShape } from "./expression";
import { CallBodyShape, CallBodySequence } from "./internal/call-body";

export class HeadShape extends AbstractShape<Result<ast.ExpressionAstNode>> {
  readonly desc = "Head";

  [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    return legacyExpand(ExpressionShape)(iterator);
  }
}

export const HeadSequence = recurse(() =>
  label("Head", start(expand(ExpressionShape)))
);

export const InterpolateSequence = label(
  "Interpolate",
  consumeParent(
    { desc: "interpolate", isLeaf: false },
    TokenType.Interpolate,
    CallBodySequence
  ).andThen(({ result, token }) =>
    ast.interpolate(result, { span: token.span })
  )
);
