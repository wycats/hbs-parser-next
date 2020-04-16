import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type { CallNode } from "../../nodes/expression";
import { EXPAND, mapResult, ok, Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
import { CallBodyShape } from "../internal/call-body";

export class SexpShape extends AbstractShape<CallNode> {
  readonly desc = "Sexp";

  [EXPAND](iterator: TokensIterator): Result<CallNode> {
    return mapResult(
      iterator.consumeParent({ desc: "sexp", isLeaf: false }, token => {
        if (token.type === TokenType.Sexp) {
          return iterator.processInner(token.children, iterator =>
            iterator.expand(CallBodyShape)
          );
        }
      }),
      ({ result, token }) => ok(ast.call(result, { span: token.span }))
    );

    // if (body.kind === "err") {
    //   return body;
    // }

    // return ok(ast.call(body.value.result, { span: body.value.token.span }));

    // let eof = iterator.assertNotEOF();

    // if (eof.kind === "err") {
    //   return eof;
    // }

    // let next = iterator.peek("sexp", { isLeaf: false });
    // let token = next.token;

    // if (token.type === TokenType.Sexp) {
    //   let body = iterator.processInner(next, token.children, iterator => {
    //     return iterator.expand(CallBodyShape);
    //   });

    //   if (body.kind === "err") {
    //     return body;
    //   }

    //   next.commit();
    //   return ok(ast.call(body.value, { span: token.span }));
    // } else {
    //   return err(next.reject(), "mismatch");
    // }
  }
}
