export * from "./nodes/top-level";
export * from "./nodes/expression";
export * from "./nodes/call";
export function formatAstNode(node) {
    return `<${node.type}:${node.span.start}..${node.span.end}>`;
}
export function extendNode(node, base) {
    return { ...node, ...base };
}
