import { TokenType } from "../../read/tokens";
import * as ast from "../nodes";
import { consumeParent, label } from "../tokens-iterator";
import { recurse as legacyRecurse } from "./abstract";
import { ExpressionSequence, ExpressionArrow } from "./expression";
import { CallBodySequence, CallBodyArrow } from "./internal/call-body";
import { ParserArrow, recurse } from "../shape";

export const HeadSequence = legacyRecurse(() =>
  label("Head", ExpressionSequence)
);

export const HeadArrow = recurse(() => ExpressionArrow.label("Head"));

export const InterpolateSequence = label(
  "Interpolate",
  consumeParent(
    { desc: "interpolate", isLeaf: false },
    TokenType.UntrustedInterpolate,
    CallBodySequence
  ).andThen(({ result, token }) =>
    ast.interpolate(result, { span: token.span })
  )
);

export const InterpolateArrow = recurse(() =>
  ParserArrow.start()
    .parent("interpolate", TokenType.UntrustedInterpolate, CallBodyArrow)
    .ifOk(({ result, token }) => ast.interpolate(result, { span: token.span }))
    .label("Interpolate")
);
