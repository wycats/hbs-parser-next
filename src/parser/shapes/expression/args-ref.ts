import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type { ArgReferenceNode } from "../../nodes/expression";
import { ok, Result, EXPAND, seq } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";

export class ArgRefShape extends AbstractShape<ArgReferenceNode> {
  readonly desc = "ArgRef";

  [EXPAND](iterator: TokensIterator): Result<ArgReferenceNode> {
    return seq(
      iterator.consume("arg ref", token => {
        if (token.type === TokenType.Argument) {
          return ast.argReference(token);
        }
      })
    );
  }
}
