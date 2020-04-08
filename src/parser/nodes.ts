import type { SourceSpan } from "../span";
import type {
  RootNode,
  TextNode,
  InterpolateNode,
  NamedNode,
} from "./nodes/top-level";
import type {
  StringNode,
  VarReferenceNode,
  ArgReferenceNode,
} from "./nodes/expression";

export interface BaseNode {
  span: SourceSpan;
}

export const enum AstNodeType {
  Root = "Root",
  Text = "Text",
  Interpolate = "Interpolate",
  Named = "Named",

  // Expressions
  String = "String",
  VarReference = "VarReference",
  ArgReference = "ArgReference",
}

export interface TopLevelNodeMap {
  [AstNodeType.Root]: RootNode;
  [AstNodeType.Text]: TextNode;
  [AstNodeType.Interpolate]: InterpolateNode;
}

export type TopLevelAstNode = TopLevelNodeMap[keyof TopLevelNodeMap];

export interface ExpressionNodeMap {
  [AstNodeType.String]: StringNode;
  [AstNodeType.VarReference]: VarReferenceNode;
  [AstNodeType.ArgReference]: ArgReferenceNode;
}

export type ExpressionAstNode = ExpressionNodeMap[keyof ExpressionNodeMap];

export interface InternalNodeMap {
  [AstNodeType.Named]: NamedNode;
}

export type InternalAstNode = InternalNodeMap[keyof InternalNodeMap];

export interface AstNodeMap
  extends TopLevelNodeMap,
    ExpressionNodeMap,
    InternalNodeMap {}

export type AstNode = AstNodeMap[keyof AstNodeMap];

export * from "./nodes/top-level";
export * from "./nodes/expression";
