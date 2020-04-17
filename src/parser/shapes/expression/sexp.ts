import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { CallBodyShape } from "../internal/call-body";
import { expand, consumeParent, inner } from "../../tokens-iterator";

export const SexpShape = shape("Sexp", iterator =>
  iterator
    .start(
      consumeParent({ desc: "sexp", isLeaf: false }, token => {
        if (token.type === TokenType.Sexp) {
          return inner(token.children, expand(CallBodyShape))(iterator);
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
