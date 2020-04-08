import {
  AstNode,
  AstNodeType,
  BaseNode,
  ExpressionNode,
  ExpressionAstNode,
} from "../nodes";
import type { SourceSpan } from "../../span";
import type { TextToken, IdentifierToken } from "../../read/tokens";

export interface RootNode extends BaseNode {
  type: AstNodeType.Root;
  children: readonly AstNode[];
}

export function root(children: readonly AstNode[], span: SourceSpan): RootNode {
  return {
    type: AstNodeType.Root,
    span,
    children,
  };
}

export interface TextNode extends BaseNode {
  type: AstNodeType.Text;
}

export function text(token: TextToken): TextNode {
  return {
    type: AstNodeType.Text,
    span: token.span,
  };
}

export interface InterpolateNode extends BaseNode {
  type: AstNodeType.Interpolate;
  head: ExpressionNode;
  positional: ExpressionNode[] | null;
  named: NamedNode | null;
}

export function interpolate(
  {
    head,
    positional = null,
    named = null,
  }: {
    head: ExpressionAstNode;
    positional?: ExpressionNode[] | null;
    named?: NamedNode | null;
  },
  span: SourceSpan
): InterpolateNode {
  return {
    type: AstNodeType.Interpolate,
    span,
    head,
    positional,
    named,
  };
}

export interface NamedNode extends BaseNode {
  type: AstNodeType.Named;
  name: SourceSpan;
  value: ExpressionNode;
}

export function named(
  { name, value }: { name: IdentifierToken; value: ExpressionAstNode },
  span: SourceSpan
): NamedNode {
  return {
    type: AstNodeType.Named,
    span,
    name: name.span,
    value,
  };
}
