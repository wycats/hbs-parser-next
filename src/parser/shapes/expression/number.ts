import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type { NumberNode } from "../../nodes/expression";
import { EXPAND, Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";

export class NumberShape extends AbstractShape<NumberNode> {
  readonly desc = "Number";

  [EXPAND](iterator: TokensIterator): Result<NumberNode> {
    return iterator.consume("number", token => {
      if (token.type === TokenType.Number) {
        return ast.number(token, iterator.source);
      }
    });
  }
}
