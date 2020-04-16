import { AbstractShape } from "./abstract";
import type { TextNode } from "../nodes";
import type TokensIterator from "../tokens-iterator";
import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import { Result, ok, err, EXPAND } from "../shape";

export class TextShape extends AbstractShape<TextNode> {
  readonly desc = "Text";

  [EXPAND](iterator: TokensIterator): Result<TextNode> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    let next = iterator.peek("text");
    let token = next.token;

    if (token.type === TokenType.Text) {
      next.commit();
      return ok(ast.text(token));
    } else {
      return err(next.reject(), "mismatch");
    }
  }
}
