import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { ParserArrow, ParseResult } from "../../shape";

export const ArgRefArrow: ParserArrow<
  void,
  ParseResult<ast.ArgReferenceNode>
> = ParserArrow.start()
  .token(TokenType.Argument)
  .ifOk(ref => ast.argReference(ref))
  .label("ArgRef");
