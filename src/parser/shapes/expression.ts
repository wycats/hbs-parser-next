import type * as ast from "../nodes";
import { err, EXPAND, Result, Shape } from "../shape";
import TokensIterator, { expand } from "../tokens-iterator";
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
      let expanded = expand(shape)(iterator);

      if (expanded.kind === "ok") {
        return expanded;
      }
    }

    return err(iterator.peek("expression").reject(), "expression", iterator);
  }
}
