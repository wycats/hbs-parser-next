import { AstNodeType, ExpressionNode, ExpressionAstNode, BaseNode } from "../nodes";
import type { SourceSpan } from "../../span";
import type { IdentifierToken } from "../../read/tokens";
export interface CallBodyNode extends BaseNode {
    type: AstNodeType.CallBody;
    head: ExpressionNode;
    positional: ExpressionNode[] | null;
    named: NamedNode | null;
}
export declare function callBody({ head, positional, named, }: {
    head: ExpressionNode;
    positional?: ExpressionNode[] | null;
    named?: NamedNode | null;
}, span: SourceSpan): CallBodyNode;
export interface NamedNode extends BaseNode {
    type: AstNodeType.Named;
    name: SourceSpan;
    value: ExpressionNode;
}
export declare function named({ name, value }: {
    name: IdentifierToken;
    value: ExpressionAstNode;
}, span: SourceSpan): NamedNode;
//# sourceMappingURL=call.d.ts.map