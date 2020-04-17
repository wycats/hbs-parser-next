import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { mapResult, ok } from "../../shape";
import { shape } from "../abstract";
import { CallBodyShape } from "../internal/call-body";

export const SexpShape = shape("Sexp", iterator =>
  mapResult(
    iterator.consumeParent({ desc: "sexp", isLeaf: false }, token => {
      if (token.type === TokenType.Sexp) {
        return iterator.processInner(token.children, iterator =>
          iterator.expand(CallBodyShape)
        );
      }
    }),
    ({ result, token }) => ok(ast.call(result, { span: token.span }))
  )
);
