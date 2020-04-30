import { TokenType } from "../../read/token-enum";
import { interpolate } from "../create-node";
import { ParserArrow, recurse } from "../shape";
import { CallBodyArrow } from "./expression/path";
import { anyArrow } from "./internal/any";
import { TextArrow } from "./text";

export const InterpolateArrow = recurse(() =>
  ParserArrow.start()
    .parent("interpolate", TokenType.UntrustedInterpolate, CallBodyArrow)
    .ifOk(({ result, token }) => interpolate(result, { span: token.span }))
    .label("Interpolate")
);

export const TopLevelArrow = anyArrow([TextArrow, InterpolateArrow]).label(
  "TopLevel"
);
