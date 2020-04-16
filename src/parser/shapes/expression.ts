import type * as ast from "../nodes";
import { err, EXPAND, Result, Shape } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { NumberShape } from "./expression/number";
import { PathShape } from "./expression/path";
import { SexpShape } from "./expression/sexp";
import { StringShape } from "./expression/string";

export class ExpressionShape extends AbstractShape<ast.ExpressionAstNode> {
  readonly desc = "Expression";

  [EXPAND](iterator: TokensIterator): Result<ast.ExpressionAstNode> {
    let shapes: Shape<Result<ast.ExpressionAstNode>>[] = [
      new SexpShape(),
      new StringShape(),
      new NumberShape(),
      new PathShape(),
    ];

    for (let shape of shapes) {
      let expand = iterator.expand(shape);

      if (expand.kind === "ok") {
        return expand;
      }
    }

    return err(iterator.peek("expression").reject(), "expression");
  }
}
