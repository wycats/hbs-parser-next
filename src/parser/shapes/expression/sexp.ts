import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { SequenceBuilder, ParserArrow, Result } from "../../shape";
import { consumeParent, label } from "../../tokens-iterator";
import { CallBodySequence, CallBodyArrow } from "../internal/call-body";

export const SexpSequence: SequenceBuilder<void, ast.CallNode> = label(
  "Sexp",
  consumeParent(
    { desc: "sexp ", isLeaf: false },
    TokenType.Sexp,
    CallBodySequence
  ).andThen(({ result, token }) => ast.call(result, { span: token.span }))
);

export const SexpArrow: ParserArrow<
  void,
  Result<ast.CallNode>
> = ParserArrow.start()
  .parent("sexp", TokenType.Sexp, CallBodyArrow)
  .ifOk(({ result, token }) => ast.call(result, { span: token.span }))
  .label("Sexp");
