import { AstNodeType, BaseNode, ExpressionAstNode } from "../nodes";
import { slice, SourceSpan } from "../../span";
import {
  StringToken,
  QuoteType,
  IdentifierToken,
  NumberToken,
  ArgumentToken,
  DotToken,
} from "../../read/tokens";
import type { CallBodyNode } from "./call";

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

export interface NumberNode extends BaseNode {
  type: AstNodeType.Number;
  number: number;
  token: NumberToken;
}

export function number(token: NumberToken, source: string): NumberNode {
  let wholeString = slice(token.head, source);
  let decimalString = token.tail ? slice(token.tail, source) : undefined;

  let wholeNumber = decimalString
    ? parseFloat(`${wholeString}.${decimalString}`)
    : parseInt(wholeString, 10);
  let num = token.negative ? wholeNumber * -1 : wholeNumber;

  return {
    type: AstNodeType.Number,
    span: token.span,
    number: num,
    token,
  };
}

export interface ThisReferenceNode extends BaseNode {
  type: AstNodeType.ThisReference;
}

export function thisReference(token: IdentifierToken): ThisReferenceNode {
  return {
    type: AstNodeType.ThisReference,
    span: token.span,
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
  token: ArgumentToken;
}

export function argReference(token: ArgumentToken): ArgReferenceNode {
  return {
    type: AstNodeType.ArgReference,
    span: token.span,
    token,
  };
}

export interface CallNode extends BaseNode {
  type: AstNodeType.Call;
  body: CallBodyNode;
}

export function call(
  body: CallBodyNode,
  { span, before, after }: BaseNode
): CallNode {
  return {
    type: AstNodeType.Call,
    span,
    before,
    after,
    body,
  };
}

export interface PathNode extends BaseNode {
  type: AstNodeType.Path;
  head: ExpressionAstNode;
  tail: PathTailNode[];
}

export function path(
  { head, tail }: { head: ExpressionAstNode; tail: PathTailNode[] },
  span: SourceSpan
): PathNode {
  return {
    type: AstNodeType.Path,
    span,
    head,
    tail,
  };
}

// TODO: Support other kinds of tails
export type PathTailNode = MemberNode;

export interface MemberNode extends BaseNode {
  type: AstNodeType.Member;
  dot: DotToken;
}

export function member(dot: DotToken, span: SourceSpan): MemberNode {
  return {
    type: AstNodeType.Member,
    dot,
    span,
  };
}
