import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { SequenceBuilder, ok, ParserArrow, Result } from "../../shape";
import { token, label } from "../../tokens-iterator";

export const ArgRefSequence: SequenceBuilder<
  void,
  ast.ArgReferenceNode
> = label("ArgRef", token(TokenType.Argument).andThen(ast.argReference));

export const ArgRefArrow: ParserArrow<
  void,
  Result<ast.ArgReferenceNode>
> = ParserArrow.start()
  .token(TokenType.Argument)
  .ifOk(ref => ast.argReference(ref))
  .label("ArgRef");
