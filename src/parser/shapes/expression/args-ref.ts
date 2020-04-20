import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { legacyConsumeToken, consumeToken, label } from "../../tokens-iterator";
import type { SequenceBuilder } from "../../shape";

export const ArgRefShape = shape("ArgRef", iterator =>
  iterator
    .start(legacyConsumeToken(TokenType.Argument))
    .andThen(ref => ast.argReference(ref))
);

export const ArgRefSequence: SequenceBuilder<
  void,
  ast.ArgReferenceNode
> = label("ArgRef", consumeToken(TokenType.Argument).andThen(ast.argReference));
