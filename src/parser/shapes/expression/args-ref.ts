import { TokenType } from "../../../read/token-enum";
import type * as ast from "../../node-types";
import { ParserArrow, ParseResult } from "../../shape";
import { argReference } from "../../create-node";

export const ArgRefArrow: ParserArrow<
  void,
  ParseResult<ast.ArgReferenceNode>
> = ParserArrow.start()
  .token(TokenType.Argument)
  .ifOk(ref => argReference(ref))
  .label("ArgRef");
