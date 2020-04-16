import { AstNodeType, BaseNode } from "../nodes";
import { SourceSpan } from "../../span";
import { StringToken, ArgNameToken, IdentifierToken, NumberToken } from "../../read/tokens";
import type { CallBodyNode } from "./call";
export declare type ExpressionNode = unknown;
export interface StringNode extends BaseNode {
    type: AstNodeType.String;
    string: string;
    token: StringToken;
}
export declare function string(token: StringToken, source: string): StringNode;
export interface NumberNode extends BaseNode {
    type: AstNodeType.Number;
    number: number;
    token: NumberToken;
}
export declare function number(token: NumberToken, source: string): NumberNode;
export interface VarReferenceNode extends BaseNode {
    type: AstNodeType.VarReference;
}
export declare function varReference(token: IdentifierToken): VarReferenceNode;
export interface ArgReferenceNode extends BaseNode {
    type: AstNodeType.ArgReference;
    token: ArgNameToken;
}
export declare function argReference(token: ArgNameToken): ArgReferenceNode;
export interface CallNode extends BaseNode {
    type: AstNodeType.Call;
    body: CallBodyNode;
}
export declare function call(body: CallBodyNode, span: SourceSpan): CallNode;
//# sourceMappingURL=expression.d.ts.map