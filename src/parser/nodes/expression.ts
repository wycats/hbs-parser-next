import { AstNodeType, BaseNode } from "../nodes";
import { slice } from "../../span";
import {
  StringToken,
  QuoteType,
  ArgNameToken,
  IdentifierToken,
} from "../../read/tokens";

export type ExpressionNode = unknown;

export interface StringNode extends BaseNode {
  type: AstNodeType.String;
  string: string;
  token: StringToken;
}

export function string(token: StringToken, source: string): StringNode {
  let processed: string;
  let inner = slice(token.data, source);

  switch (token.quote) {
    case QuoteType.Double:
      processed = inner.replace(`\\"`, `"`);
      break;
    case QuoteType.Single:
      processed = inner.replace(`\\'`, `'`);
      break;
  }

  return {
    type: AstNodeType.String,
    span: token.span,
    string: processed,
    token,
  };
}

export interface VarReferenceNode extends BaseNode {
  type: AstNodeType.VarReference;
}

export function varReference(token: IdentifierToken): VarReferenceNode {
  return {
    type: AstNodeType.VarReference,
    span: token.span,
  };
}

export interface ArgReferenceNode extends BaseNode {
  type: AstNodeType.ArgReference;
  token: ArgNameToken;
}

export function argReference(token: ArgNameToken): ArgReferenceNode {
  return {
    type: AstNodeType.ArgReference,
    span: token.span,
    token,
  };
}
