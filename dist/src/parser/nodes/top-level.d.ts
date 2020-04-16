import { AstNode, AstNodeType, BaseNode, ExpressionNode, ExpressionAstNode } from "../nodes";
import type { SourceSpan } from "../../span";
import type { TextToken } from "../../read/tokens";
import type { NamedNode } from "./call";
export interface RootNode extends BaseNode {
    type: AstNodeType.Root;
    children: readonly AstNode[];
}
export declare function root(children: readonly AstNode[], span: SourceSpan): RootNode;
export interface TextNode extends BaseNode {
    type: AstNodeType.Text;
}
export declare function text(token: TextToken): TextNode;
export interface InterpolateNode extends BaseNode {
    type: AstNodeType.Interpolate;
    head: ExpressionNode;
    positional: ExpressionNode[] | null;
    named: NamedNode | null;
}
export declare function interpolate({ head, positional, named, }: {
    head: ExpressionAstNode;
    positional?: ExpressionNode[] | null;
    named?: NamedNode | null;
}, span: SourceSpan): InterpolateNode;
//# sourceMappingURL=top-level.d.ts.map