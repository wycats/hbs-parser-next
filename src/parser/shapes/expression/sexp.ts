import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { CallBodyShape, CallBodySequence } from "../internal/call-body";
import {
  legacyExpand,
  legacyConsumeParent,
  inner,
  consumeParent,
  expand,
  label,
} from "../../tokens-iterator";
import type { SequenceBuilder } from "../../shape";

export const SexpShape = shape("Sexp", iterator =>
  iterator
    .start(
      legacyConsumeParent({ desc: "sexp", isLeaf: false }, token => {
        if (token.type === TokenType.Sexp) {
          return inner(token.children, legacyExpand(CallBodyShape))(iterator);
        }
      })
    )
    .andThen(({ result, token }) => ast.call(result, { span: token.span }))
);
//   mapResult(
//     iterator.consumeParent({ desc: "sexp", isLeaf: false }, token => {

//     }),
//     ({ result, token }) => ok(ast.call(result, { span: token.span }), iterator)
//   )
// );

export const SexpSequence: SequenceBuilder<void, ast.CallNode> = label(
  "Sexp",
  consumeParent(
    { desc: "sexp ", isLeaf: false },
    TokenType.Sexp,
    CallBodySequence
  ).andThen(({ result, token }) => ast.call(result, { span: token.span }))
);
