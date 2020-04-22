import type * as ast from "../nodes";
import { SequenceBuilder, ParserArrow, Result, recurse } from "../shape";
import { recurse as recurseLegacy } from "./abstract";
import { NumberSequence, NumberArrow } from "./expression/number";
import { PathSequence, PathArrow } from "./expression/path";
import { SexpSequence, SexpArrow } from "./expression/sexp";
import { StringSequence, StringArrow } from "./expression/string";
import { any, anyArrow } from "./internal/any";

export const ExpressionSequence: SequenceBuilder<
  void,
  ast.ExpressionAstNode
> = recurseLegacy(() =>
  any("expression", [
    SexpSequence,
    StringSequence,
    NumberSequence,
    PathSequence,
  ])
);

export const ExpressionArrow = recurse(() =>
  anyArrow([SexpArrow, StringArrow, NumberArrow, PathArrow]).label("Expression")
);
