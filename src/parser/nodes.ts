import { SourceSpan, range } from "../span";

export interface BaseNode {
  span: SourceSpan;
}

export const enum NodeType {
  Root = "Root",
  Text = "Text",
}

export interface NodeMap {
  [NodeType.Text]: TextNode;
}

export type Node = NodeMap[keyof NodeMap];

export interface RootNode extends BaseNode {
  type: NodeType.Root;
  children: readonly Node[];
}

export function root(children: readonly Node[]): RootNode {
  return {
    type: NodeType.Root,
    span: range(...children),
    children,
  };
}

export interface TextNode extends BaseNode {
  type: NodeType.Text;
}

export function text(span: SourceSpan): TextNode {
  return {
    type: NodeType.Text,
    span,
  };
}
