import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import { EXPAND, Result } from "../shape";
import TokensIterator, { expand, consumeParent } from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { ExpressionShape } from "./expression";
import { CallBodyShape } from "./internal/call-body";

export class HeadShape extends AbstractShape<ast.ExpressionAstNode> {
  readonly desc = "Head";

  [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    return expand(ExpressionShape)(iterator);
  }
}

export class InterpolateShape extends AbstractShape<InterpolateNode> {
  readonly desc = "Interpolate";

  [EXPAND](iterator: TokensIterator): Result<InterpolateNode> {
    return iterator
      .start(
        consumeParent({ desc: "interpolate", isLeaf: false }, token => {
          if (token.type === TokenType.Interpolate) {
            return iterator.processInner(token.children, iterator =>
              expand(CallBodyShape)(iterator)
            );
          }
        })
      )
      .andThen(({ result, token }) =>
        ast.interpolate(result, { span: token.span })
      );
  }
}
