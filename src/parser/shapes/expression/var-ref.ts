import { TokenType } from "../../../read/tokens";
import { slice } from "../../../span";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import {
  legacyAssertNotNext,
  legacyAtomic,
  legacyConsumeToken,
  legacySource,
  atomic,
  consumeToken,
  notNext,
  source,
  label,
} from "../../tokens-iterator";
import type { SequenceBuilder } from "../../shape";

export const VarRefShape = shape(
  "VarRef",
  legacyAtomic(iterator =>
    iterator
      .start(legacyConsumeToken("id", TokenType.Identifier))
      .checkNext(
        legacyAssertNotNext("eq", token => token.type === TokenType.Eq)
      )
      .extend("source", legacySource())
      .andThen(({ id, source }) => {
        if (slice(id.span, source) === "this") {
          return ast.thisReference(id);
        } else {
          return ast.varReference(id);
        }
      })
  )
);

export const VarRefSequence: SequenceBuilder<
  void,
  ast.VarReferenceNode | ast.ThisReferenceNode
> = label(
  "VarRef",
  atomic(
    consumeToken("id", TokenType.Identifier)
      .check(notNext("eq", token => token.type === TokenType.Eq))
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
