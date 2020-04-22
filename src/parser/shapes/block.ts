import { TokenType } from "../../read/tokens";
import type * as ast from "../nodes";
import type { BlockNode } from "../nodes/top-level";
import { err, EXPAND, ok, Result } from "../shape";
import TokensIterator, { notEOF } from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { ExpressionSequence } from "./expression";

export class HeadShape extends AbstractShape<Result<ast.ExpressionAstNode>> {
  readonly desc = "Head";

  [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    return ExpressionSequence.run(iterator, ok(undefined));
  }
}

export class BlockShape extends AbstractShape<Result<BlockNode>> {
  readonly desc = "Interpolate";

  [EXPAND](iterator: TokensIterator): Result<BlockNode> {
    let eof = notEOF().run(iterator, ok(undefined));

    if (eof.kind === "err") {
      return eof;
    }

    let next = iterator.peek("block", { isLeaf: false });

    if (next.token.type === TokenType.Block) {
      let token = next.token;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let _open = iterator.processInner(token.open.name, iterator =>
        ExpressionSequence.run(iterator, ok(undefined))
      );

      throw new Error("not implemented");
    } else {
      return err(next.reject().token, "mismatch");
    }
  }
}
