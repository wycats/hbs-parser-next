import { TokenType } from "../../../read/token-enum";
import { slice } from "../../../span";
import { parseErr, parseOk, ParserArrow, ParseResult } from "../../shape";
import type * as ast from "../../node-types";
import { thisReference, varReference } from "../../create-node";

export const VarRefArrow: ParserArrow<
  void,
  ParseResult<ast.VarReferenceNode | ast.ThisReferenceNode>
> = ParserArrow.start()
  .token(TokenType.Identifier)
  .named("id")
  .checkNext(
    ParserArrow.start()
      .lookahead()
      .map(token =>
        token === undefined || token.type !== TokenType.Eq
          ? parseOk(undefined)
          : parseErr("unknown", {
              type: "lookahead",
              expected: TokenType.Eq,
              actual: token,
            })
      )
  )
  .extend("source", ParserArrow.start().source().fallible())
  .ifOk(({ id, source }) => {
    if (slice(id.span, source) === "this") {
      return thisReference(id);
    } else {
      return varReference(id);
    }
  })
  .label("VarRef");
