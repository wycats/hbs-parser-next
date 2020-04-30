import type { BaseNode, AstNode } from "./node-types";
export * from "./nodes/top-level";
export * from "./nodes/expression";
export * from "./nodes/call";
export declare function formatAstNode(node: AstNode): string;
export declare function extendNode<N extends AstNode>(node: N, base: Partial<BaseNode>): N;
//# sourceMappingURL=create-node.d.ts.map