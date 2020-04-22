import { TokenType } from "../../../read/tokens";
import { slice } from "../../../span";
import * as ast from "../../nodes";
import { SequenceBuilder, ParserArrow, Result, ok, err } from "../../shape";
import {
  atomic,
  token,
  label,
  notNext,
  source,
  lookahead,
  isToken,
} from "../../tokens-iterator";

const notEQ = lookahead().next(isToken(TokenType.Eq)).not;

export const VarRefSequence: SequenceBuilder<
  void,
  ast.VarReferenceNode | ast.ThisReferenceNode
> = label(
  "VarRef",
  atomic(
    token("id", TokenType.Identifier)
      .andCheck(notEQ)
      .extend("source", source())
      .andThen(({ id, source }) => {
        if (slice(id.span, source) === "this") {
          return ast.thisReference(id);
        } else {
          return ast.varReference(id);
        }
      })
  )
);

export const VarRefArrow: ParserArrow<
  void,
  Result<ast.VarReferenceNode | ast.ThisReferenceNode>
> = ParserArrow.start()
  .token(TokenType.Identifier)
  .named("id")
  .checkNext(
    ParserArrow.start()
      .lookahead()
      .map(token =>
        token === undefined || token.type !== TokenType.Eq
          ? ok(undefined)
          : err(undefined, "lookahead")
      )
  )
  .extend("source", ParserArrow.start().source().fallible())
  .ifOk(({ id, source }) => {
    if (slice(id.span, source) === "this") {
      return ast.thisReference(id);
    } else {
      return ast.varReference(id);
    }
  })
  .label("VarRef");
