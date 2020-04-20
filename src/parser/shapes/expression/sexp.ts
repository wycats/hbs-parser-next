import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type { SequenceBuilder } from "../../shape";
import { consumeParent, label } from "../../tokens-iterator";
import { CallBodySequence } from "../internal/call-body";

export const SexpSequence: SequenceBuilder<void, ast.CallNode> = label(
  "Sexp",
  consumeParent(
    { desc: "sexp ", isLeaf: false },
    TokenType.Sexp,
    CallBodySequence
  ).andThen(({ result, token }) => ast.call(result, { span: token.span }))
);
