import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import { err, ok, Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { VarRefShape } from "./expression/var-ref";

export class InterpolateShape extends AbstractShape<InterpolateNode> {
  expandFallible(iterator: TokensIterator): Result<InterpolateNode> {
    let next = iterator.peek();

    if (next.isEOF) {
      return err(next, "eof");
    }

    let token = next.token;

    if (token.type === TokenType.Interpolate) {
      let inner = iterator.child(token.children);
      let head = new HeadShape().expandFallible(inner);

      if (head.kind === "err") {
        return head;
      }

      next.commit();
      return ok(ast.interpolate({ head: head.value }, token.span));
    } else {
      return err(next, "mismatch");
    }
  }
}

export class HeadShape extends AbstractShape<ast.ExpressionAstNode> {
  expandFallible(iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    return new VarRefShape().expandFallible(iterator);
  }
}
