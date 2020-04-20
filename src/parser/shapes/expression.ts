import type * as ast from "../nodes";
import type { Result, SequenceBuilder } from "../shape";
import { legacyExpand, legacyStart } from "../tokens-iterator";
import { shape, ShapeConstructor, recurse } from "./abstract";
import { NumberSequence, NumberShape } from "./expression/number";
import { PathSequence, PathShape } from "./expression/path";
import { SexpSequence, SexpShape } from "./expression/sexp";
import { StringSequence, StringShape } from "./expression/string";
import { any, legacyAny } from "./internal/any";

export const ExpressionShape: ShapeConstructor<Result<
  ast.ExpressionAstNode
>> = shape(
  "Expression",
  legacyStart(
    legacyExpand(
      legacyAny([SexpShape, StringShape, NumberShape, PathShape], "expression")
    )
  )
);

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
