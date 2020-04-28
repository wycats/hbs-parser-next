export var AstNodeType;
(function (AstNodeType) {
    AstNodeType["Root"] = "Root";
    AstNodeType["Text"] = "Text";
    AstNodeType["Interpolate"] = "Interpolate";
    // Internal
    AstNodeType["NamedArgument"] = "NamedArgument";
    AstNodeType["NamedArguments"] = "NamedArguments";
    AstNodeType["PositionalArguments"] = "PositionalArguments";
    AstNodeType["Member"] = "Member";
    AstNodeType["CallBody"] = "CallBody";
    AstNodeType["OpenBlock"] = "OpenBlock";
    AstNodeType["BlockParams"] = "BlockParams";
    AstNodeType["CloseBlock"] = "CloseBlock";
    // Expressions
    AstNodeType["Block"] = "Block";
    AstNodeType["Call"] = "Call";
    AstNodeType["Path"] = "Path";
    AstNodeType["String"] = "String";
    AstNodeType["Number"] = "Number";
    AstNodeType["ThisReference"] = "ThisReference";
    AstNodeType["VarReference"] = "VarReference";
    AstNodeType["ArgReference"] = "ArgReference";
})(AstNodeType || (AstNodeType = {}));
export * from "./nodes/top-level";
export * from "./nodes/expression";
export * from "./nodes/call";
export function formatAstNode(node) {
    return `<${node.type}:${node.span.start}..${node.span.end}>`;
}
export function extendNode(node, base) {
    return { ...node, ...base };
}
