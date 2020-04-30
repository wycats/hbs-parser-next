import type { BaseNode, ExpressionAstNode } from "../node-types";
import { AstNodeType } from "../node";
import { SourceSpan } from "../../span";
import { StringToken, IdentifierToken, NumberToken, ArgumentToken, DotToken } from "../../read/tokens";
import type { CallBodyNode } from "./call";
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
export interface ThisReferenceNode extends BaseNode {
    type: AstNodeType.ThisReference;
}
export declare function thisReference(token: IdentifierToken): ThisReferenceNode;
export interface VarReferenceNode extends BaseNode {
    type: AstNodeType.VarReference;
}
export declare function varReference(token: IdentifierToken): VarReferenceNode;
export interface ArgReferenceNode extends BaseNode {
    type: AstNodeType.ArgReference;
    token: ArgumentToken;
}
export declare function argReference(token: ArgumentToken): ArgReferenceNode;
export interface CallNode extends BaseNode {
    type: AstNodeType.Call;
    body: CallBodyNode;
}
export declare function call(body: CallBodyNode, { span, before, after }: BaseNode): CallNode;
export interface PathNode extends BaseNode {
    type: AstNodeType.Path;
    head: ExpressionAstNode;
    tail: PathTailNode[];
}
export declare function path({ head, tail }: {
    head: ExpressionAstNode;
    tail: PathTailNode[];
}, span: SourceSpan): PathNode;
export declare type PathTailNode = MemberNode;
export interface MemberNode extends BaseNode {
    type: AstNodeType.Member;
    dot: DotToken;
}
export declare function member(dot: DotToken, span: SourceSpan): MemberNode;
//# sourceMappingURL=expression.d.ts.map