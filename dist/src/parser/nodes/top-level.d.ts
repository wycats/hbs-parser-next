import type { TextToken } from "../../read/tokens";
import type { SourceSpan } from "../../span";
import { AstNode, AstNodeType, BaseNode, ExpressionAstNode, TopLevelAstNode } from "../nodes";
import type { CallBodyNode, PositionalArgumentsNode, NamedArgumentsNode } from "./call";
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
    body: CallBodyNode;
}
export declare function interpolate(body: CallBodyNode, base: BaseNode): InterpolateNode;
export interface BlockParamsNode extends BaseNode {
    type: AstNodeType.BlockParams;
    params: SourceSpan[];
}
export declare function blockParams(params: SourceSpan[], span: SourceSpan): BlockParamsNode;
export interface OpenBlockNode extends Omit<CallBodyNode, "type"> {
    type: AstNodeType.OpenBlock;
    params: BlockParamsNode | null;
}
export declare function openBlock({ head, positional, named, params, }: {
    head: ExpressionAstNode;
    positional?: PositionalArgumentsNode | null;
    named?: NamedArgumentsNode | null;
    params?: BlockParamsNode | null;
}, base: BaseNode): OpenBlockNode;
export interface CloseBlockNode extends BaseNode {
    type: AstNodeType.CloseBlock;
    name: SourceSpan;
}
export declare function closeBlock(name: SourceSpan, base: BaseNode): CloseBlockNode;
export interface BlockNode extends BaseNode {
    type: AstNodeType.Block;
    open: OpenBlockNode;
    close: CloseBlockNode;
    body: TopLevelAstNode[];
}
export declare function block({ open, body, close, }: {
    open: OpenBlockNode;
    body: TopLevelAstNode[];
    close: CloseBlockNode;
}, base: BaseNode): BlockNode;
//# sourceMappingURL=top-level.d.ts.map