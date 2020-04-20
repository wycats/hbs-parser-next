import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import { EXPAND, Result, start, ok } from "../shape";
import TokensIterator, {
  legacyExpand,
  legacyConsumeParent,
  consumeParent,
  processInner,
  expand,
  label,
} from "../tokens-iterator";
import { AbstractShape, recurse } from "./abstract";
import { ExpressionSequence } from "./expression";
import { CallBodySequence } from "./internal/call-body";

export class HeadShape extends AbstractShape<Result<ast.ExpressionAstNode>> {
  readonly desc = "Head";

  [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    return ExpressionSequence.run(iterator, ok(undefined));
  }
}

export const HeadSequence = recurse(() => label("Head", ExpressionSequence));

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
