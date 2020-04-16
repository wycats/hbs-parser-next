import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import { EXPAND, Result, seq } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { ExpressionShape } from "./expression";
import { CallBodyShape } from "./internal/call-body";

export class HeadShape extends AbstractShape<ast.ExpressionAstNode> {
  readonly desc = "Head";

  [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    return iterator.expand(ExpressionShape);
  }
}

export class InterpolateShape extends AbstractShape<InterpolateNode> {
  readonly desc = "Interpolate";

  [EXPAND](iterator: TokensIterator): Result<InterpolateNode> {
    return seq(
      iterator.consumeParent({ desc: "interpolate", isLeaf: false }, token => {
        if (token.type === TokenType.Interpolate) {
          return iterator.processInner(token.children, iterator =>
            iterator.expand(CallBodyShape)
          );
        }
      })
    ).map(({ result, token }) => ast.interpolate(result, { span: token.span }));
  }
}
