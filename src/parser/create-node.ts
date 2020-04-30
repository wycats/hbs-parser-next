import type { BaseNode, AstNode } from "./node-types";

export * from "./nodes/top-level";
export * from "./nodes/expression";
export * from "./nodes/call";

export function formatAstNode(node: AstNode): string {
  return `<${node.type}:${node.span.start}..${node.span.end}>`;
}

export function extendNode<N extends AstNode>(
  node: N,
  base: Partial<BaseNode>
): N {
  return { ...node, ...base };
}
