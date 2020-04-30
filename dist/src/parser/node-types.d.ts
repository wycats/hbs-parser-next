import type { SourceSpan } from "../span";
import type { RootNode, TextNode, InterpolateNode, BlockNode, OpenBlockNode, BlockParamsNode } from "./nodes/top-level";
import type { StringNode, VarReferenceNode, ArgReferenceNode, NumberNode, CallNode, PathNode, MemberNode, ThisReferenceNode } from "./nodes/expression";
import type { WSToken } from "../read/tokens";
import type { NamedArgumentNode, NamedArgumentsNode, PositionalArgumentsNode, CallBodyNode } from "./nodes/call";
import { AstNodeType } from "./node";
export interface BaseNode {
    span: SourceSpan;
    before?: WSToken;
    after?: WSToken;
}
export interface TopLevelNodeMap {
    [AstNodeType.Root]: RootNode;
    [AstNodeType.Text]: TextNode;
    [AstNodeType.Interpolate]: InterpolateNode;
    [AstNodeType.Block]: BlockNode;
}
export declare type TopLevelAstNode = TopLevelNodeMap[keyof TopLevelNodeMap];
export interface ExpressionNodeMap {
    [AstNodeType.String]: StringNode;
    [AstNodeType.Number]: NumberNode;
    [AstNodeType.VarReference]: VarReferenceNode;
    [AstNodeType.ArgReference]: ArgReferenceNode;
    [AstNodeType.ThisReference]: ThisReferenceNode;
    [AstNodeType.Path]: PathNode;
    [AstNodeType.Call]: CallNode;
}
export declare type ExpressionAstNode = ExpressionNodeMap[keyof ExpressionNodeMap];
export interface InternalNodeMap {
    [AstNodeType.NamedArgument]: NamedArgumentNode;
    [AstNodeType.NamedArguments]: NamedArgumentsNode;
    [AstNodeType.PositionalArguments]: PositionalArgumentsNode;
    [AstNodeType.CallBody]: CallBodyNode;
    [AstNodeType.Member]: MemberNode;
    [AstNodeType.OpenBlock]: OpenBlockNode;
    [AstNodeType.BlockParams]: BlockParamsNode;
}
export declare type InternalAstNode = InternalNodeMap[keyof InternalNodeMap];
export interface AstNodeMap extends TopLevelNodeMap, ExpressionNodeMap, InternalNodeMap {
}
export declare type AstNode = AstNodeMap[keyof AstNodeMap];
export type { RootNode, TextNode, InterpolateNode, BlockParamsNode, OpenBlockNode, CloseBlockNode, BlockNode, } from "./nodes/top-level";
export type { StringNode, NumberNode, ThisReferenceNode, VarReferenceNode, ArgReferenceNode, CallNode, PathNode, PathTailNode, MemberNode, } from "./nodes/expression";
export type { CallBodyNode, NamedArgumentNode, NamedArgumentsNode, PositionalArgumentsNode, } from "./nodes/call";
//# sourceMappingURL=node-types.d.ts.map