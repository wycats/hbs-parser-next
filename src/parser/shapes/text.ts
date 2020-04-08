import { AbstractShape } from "./abstract";
import type { TextNode } from "../nodes";
import type TokensIterator from "../tokens-iterator";
import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import { Result, ok, err } from "../shape";

export class TextShape extends AbstractShape<TextNode> {
  expandFallible(iterator: TokensIterator): Result<TextNode> {
    let next = iterator.peek();

    if (next.isEOF) {
      return err(next, "eof");
    }

    let token = next.token;

    if (token.type === TokenType.Text) {
      next.commit();
      return ok(ast.text(token.span));
    } else {
      return err(next, "mismatch");
    }
  }
}
