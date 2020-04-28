import "../../read/tokens";
import * as ast from "../nodes";
import { ParserArrow, recurse } from "../shape";
import { ExpressionArrow } from "./expression";
import { CallBodyArrow } from "./internal/call-body";
export const HeadArrow = recurse(() => ExpressionArrow.label("Head"));
export const InterpolateArrow = recurse(() => ParserArrow.start()
    .parent("interpolate", TokenType.UntrustedInterpolate, CallBodyArrow)
    .ifOk(({ result, token }) => ast.interpolate(result, { span: token.span }))
    .label("Interpolate"));
