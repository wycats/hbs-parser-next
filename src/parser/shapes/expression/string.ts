import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type { StringNode } from "../../nodes/expression";
import { err, ok, Result, EXPAND } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";

export class StringShape extends AbstractShape<StringNode> {
  readonly desc = "String";

  [EXPAND](iterator: TokensIterator): Result<StringNode> {
    return iterator.consume("string", token => {
      if (token.type === TokenType.String) {
        return ast.string(token, iterator.source);
      }
    });
  }
}
