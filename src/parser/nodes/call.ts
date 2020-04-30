import type { ExpressionAstNode, BaseNode } from "../node-types";
import { AstNodeType } from "../node";
import type { SourceSpan } from "../../span";
import type { IdentifierToken } from "../../read/tokens";

export interface CallBodyNode extends BaseNode {
  type: AstNodeType.CallBody;
  head: ExpressionAstNode;
  positional: PositionalArgumentsNode | null;
  named: NamedArgumentsNode | null;
}

export function callBody(
  {
    head,
    positional = null,
    named = null,
  }: {
    head: ExpressionAstNode;
    positional?: PositionalArgumentsNode | null;
    named?: NamedArgumentsNode | null;
  },
  base: BaseNode
): CallBodyNode {
  return {
    type: AstNodeType.CallBody,
    ...base,
    head,
    positional,
    named,
  };
}

export interface NamedArgumentNode extends BaseNode {
  type: AstNodeType.NamedArgument;
  name: SourceSpan;
  value: ExpressionAstNode;
}

export function namedArg(
  { name, value }: { name: IdentifierToken; value: ExpressionAstNode },
  base: BaseNode
): NamedArgumentNode {
  return {
    type: AstNodeType.NamedArgument,
    ...base,
    name: name.span,
    value,
  };
}

export interface NamedArgumentsNode extends BaseNode {
  type: AstNodeType.NamedArguments;
  args: readonly NamedArgumentNode[];
}

export function namedArgs(
  args: NamedArgumentNode[],
  base: BaseNode
): NamedArgumentsNode {
  return {
    type: AstNodeType.NamedArguments,
    ...base,
    args,
  };
}

export interface PositionalArgumentsNode extends BaseNode {
  type: AstNodeType.PositionalArguments;
  args: ExpressionAstNode[];
}

export function positional(
  args: ExpressionAstNode[],
  base: BaseNode
): PositionalArgumentsNode {
  return {
    type: AstNodeType.PositionalArguments,
    ...base,
    args,
  };
}
