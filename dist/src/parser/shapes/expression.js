import { recurse } from "../shape";
import { NumberArrow } from "./expression/number";
import { PathArrow } from "./expression/path";
import { SexpArrow } from "./expression/sexp";
import { StringArrow } from "./expression/string";
import { anyArrow } from "./internal/any";
export const ExpressionArrow = recurse(() => anyArrow([SexpArrow, StringArrow, NumberArrow, PathArrow]).label("Expression"));
