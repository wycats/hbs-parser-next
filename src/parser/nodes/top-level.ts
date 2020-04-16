import type { TextToken } from "../../read/tokens";
import type { SourceSpan } from "../../span";
import {
  AstNode,
  AstNodeType,
  BaseNode,
  ExpressionAstNode,
  TopLevelAstNode,
} from "../nodes";
import type {
  CallBodyNode,
  PositionalArgumentsNode,
  NamedArgumentsNode,
} from "./call";

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
  body: CallBodyNode;
}

export function interpolate(
  body: CallBodyNode,
  base: BaseNode
): InterpolateNode {
  return {
    type: AstNodeType.Interpolate,
    ...base,
    body,
  };
}

export interface BlockParamsNode extends BaseNode {
  type: AstNodeType.BlockParams;
  params: SourceSpan[];
}

export function blockParams(
  params: SourceSpan[],
  span: SourceSpan
): BlockParamsNode {
  return {
    type: AstNodeType.BlockParams,
    params,
    span,
  };
}

export interface OpenBlockNode extends Omit<CallBodyNode, "type"> {
  type: AstNodeType.OpenBlock;
  params: BlockParamsNode | null;
}

export function openBlock(
  {
    head,
    positional = null,
    named = null,
    params = null,
  }: {
    head: ExpressionAstNode;
    positional?: PositionalArgumentsNode | null;
    named?: NamedArgumentsNode | null;
    params?: BlockParamsNode | null;
  },
  base: BaseNode
): OpenBlockNode {
  return {
    type: AstNodeType.OpenBlock,
    ...base,
    head,
    positional,
    named,
    params,
  };
}

export interface CloseBlockNode extends BaseNode {
  type: AstNodeType.CloseBlock;
  name: SourceSpan;
}

export function closeBlock(name: SourceSpan, base: BaseNode): CloseBlockNode {
  return {
    type: AstNodeType.CloseBlock,
    ...base,
    name,
  };
}

export interface BlockNode extends BaseNode {
  type: AstNodeType.Block;
  open: OpenBlockNode;
  close: CloseBlockNode;
  body: TopLevelAstNode[];
}

export function block(
  {
    open,
    body,
    close,
  }: {
    open: OpenBlockNode;
    body: TopLevelAstNode[];
    close: CloseBlockNode;
  },
  base: BaseNode
): BlockNode {
  return {
    type: AstNodeType.Block,
    ...base,
    open,
    body,
    close,
  };
}
