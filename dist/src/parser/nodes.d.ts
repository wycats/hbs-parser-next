import type { SourceSpan } from "../span";
import type { RootNode, TextNode, InterpolateNode } from "./nodes/top-level";
import type { StringNode, VarReferenceNode, ArgReferenceNode, NumberNode, CallNode } from "./nodes/expression";
import type { WSToken } from "../read/tokens";
import type { NamedNode } from "./nodes/call";
export interface BaseNode {
    span: SourceSpan;
    before?: WSToken;
    after?: WSToken;
}
export declare const enum AstNodeType {
    Root = "Root",
    Text = "Text",
    Interpolate = "Interpolate",
    Named = "Named",
    CallBody = "CallBody",
    Call = "Call",
    String = "String",
    Number = "Number",
    VarReference = "VarReference",
    ArgReference = "ArgReference"
}
export interface TopLevelNodeMap {
    [AstNodeType.Root]: RootNode;
    [AstNodeType.Text]: TextNode;
    [AstNodeType.Interpolate]: InterpolateNode;
}
export declare type TopLevelAstNode = TopLevelNodeMap[keyof TopLevelNodeMap];
export interface ExpressionNodeMap {
    [AstNodeType.String]: StringNode;
    [AstNodeType.Number]: NumberNode;
    [AstNodeType.VarReference]: VarReferenceNode;
    [AstNodeType.ArgReference]: ArgReferenceNode;
    [AstNodeType.Call]: CallNode;
}
export declare type ExpressionAstNode = ExpressionNodeMap[keyof ExpressionNodeMap];
export interface InternalNodeMap {
    [AstNodeType.Named]: NamedNode;
}
export declare type InternalAstNode = InternalNodeMap[keyof InternalNodeMap];
export interface AstNodeMap extends TopLevelNodeMap, ExpressionNodeMap, InternalNodeMap {
}
export declare type AstNode = AstNodeMap[keyof AstNodeMap];
export * from "./nodes/top-level";
export * from "./nodes/expression";
export * from "./nodes/call";
//# sourceMappingURL=nodes.d.ts.map