import { TokenType } from "../../read/tokens";
import type * as ast from "../nodes";
import type { BlockNode } from "../nodes/top-level";
import { err, EXPAND, Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { ExpressionShape } from "./expression";

export class HeadShape extends AbstractShape<ast.ExpressionAstNode> {
  readonly desc = "Head";

  [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    return iterator.expand(ExpressionShape);
  }
}

export class BlockShape extends AbstractShape<BlockNode> {
  readonly desc = "Interpolate";

  [EXPAND](iterator: TokensIterator): Result<BlockNode> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    let next = iterator.peek("block", { isLeaf: false });

    if (next.token.type === TokenType.Block) {
      let token = next.token;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let _open = iterator.processInner(token.open.name, iterator =>
        iterator.expand(ExpressionShape)
      );

      throw new Error("not implemented");
    } else {
      return err(next.reject(), "mismatch");
    }
  }
}
