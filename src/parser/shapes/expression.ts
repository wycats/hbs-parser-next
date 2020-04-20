import type * as ast from "../nodes";
import type { SequenceBuilder } from "../shape";
import { recurse } from "./abstract";
import { NumberSequence } from "./expression/number";
import { PathSequence } from "./expression/path";
import { SexpSequence } from "./expression/sexp";
import { StringSequence } from "./expression/string";
import { any } from "./internal/any";

export const ExpressionSequence: SequenceBuilder<
  void,
  ast.ExpressionAstNode
> = recurse(() =>
  any("expression", [
    SexpSequence,
    StringSequence,
    NumberSequence,
    PathSequence,
  ])
);
