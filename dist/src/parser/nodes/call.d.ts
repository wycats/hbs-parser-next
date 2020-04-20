import { AstNodeType, ExpressionAstNode, BaseNode } from "../nodes";
import type { SourceSpan } from "../../span";
import type { IdentifierToken } from "../../read/tokens";
export interface CallBodyNode extends BaseNode {
    type: AstNodeType.CallBody;
    head: ExpressionAstNode;
    positional: PositionalArgumentsNode | null;
    named: NamedArgumentsNode | null;
}
export declare function callBody({ head, positional, named, }: {
    head: ExpressionAstNode;
    positional?: PositionalArgumentsNode | null;
    named?: NamedArgumentsNode | null;
}, base: BaseNode): CallBodyNode;
export interface NamedArgumentNode extends BaseNode {
    type: AstNodeType.NamedArgument;
    name: SourceSpan;
    value: ExpressionAstNode;
}
export declare function namedArg({ name, value }: {
    name: IdentifierToken;
    value: ExpressionAstNode;
}, base: BaseNode): NamedArgumentNode;
export interface NamedArgumentsNode extends BaseNode {
    type: AstNodeType.NamedArguments;
    args: readonly NamedArgumentNode[];
}
export declare function namedArgs(args: NamedArgumentNode[], base: BaseNode): NamedArgumentsNode;
export interface PositionalArgumentsNode extends BaseNode {
    type: AstNodeType.PositionalArguments;
    args: ExpressionAstNode[];
}
export declare function positional(args: ExpressionAstNode[], base: BaseNode): PositionalArgumentsNode;
//# sourceMappingURL=call.d.ts.map