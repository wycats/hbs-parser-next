import type * as ast from "../nodes";
import type { Result } from "../shape";
import { expand, start } from "../tokens-iterator";
import { shape, ShapeConstructor } from "./abstract";
import { NumberShape } from "./expression/number";
import { PathShape } from "./expression/path";
import { SexpShape } from "./expression/sexp";
import { StringShape } from "./expression/string";
import { any } from "./internal/any";

export const ExpressionShape: ShapeConstructor<Result<
  ast.ExpressionAstNode
>> = shape(
  "Expression",
  start(
    expand(any([SexpShape, StringShape, NumberShape, PathShape], "expression"))
  )
);
