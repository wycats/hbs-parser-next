import type { AstNode } from "./nodes";
import * as ast from "./nodes";
import { SourceSpan } from "../span";
import { CurriedToken } from "../read/token-builder";
import type { Token, WSToken } from "../read/tokens";
/**
 * For the purpose of this DSL, an expression is:
 *
 * - the string `this` -> ThisReferenceNode
 * - `@` ID -> ArgumentReferenceNode
 * - ID -> VarReferenceNode
 * - the result of calling one of the builder methods
 *
 * A string containing literal whitespace is used to represent
 * a whitespace token containing the same whitespace.
 */
export declare type CurriedNode<N extends AstNode = AstNode> = (builder: AstBuilder) => N;
export default class AstBuilder {
    pos: number;
    private output;
    private tokenBuilder;
    constructor(pos?: number);
    consume(chars: string): SourceSpan;
    token<T extends Token>(token: CurriedToken<T>): T;
    get source(): string;
}
export declare function text(chars: string): CurriedNode<ast.TextNode>;
export declare type ExprInput = CurriedNode<ast.ExpressionAstNode> | string;
declare type NamedArgumentInput = CurriedNode<ast.ExpressionAstNode> | string | [CurriedNode<ast.ExpressionAstNode> | string, string];
interface NamedArgumentsInput {
    [key: string]: NamedArgumentInput;
}
declare type CallPart = string | NamedArgumentsInput | CurriedNode<ast.ExpressionAstNode> | Array<CurriedNode<ast.ExpressionAstNode> | string>;
export interface CallParts {
    beforeWS?: CurriedToken<WSToken>;
    afterWS?: CurriedToken<WSToken>;
    head: CurriedNode<ast.ExpressionAstNode>;
    positional?: CurriedNode<ast.PositionalArgumentsNode>;
    named?: CurriedNode<ast.NamedArgumentsNode>;
}
export declare type BlockPart = CallPart;
export declare function block(parts: BlockPart[]): CurriedNode<ast.BlockNode>;
export declare function interpolate(...parts: CallPart[]): CurriedNode<ast.InterpolateNode>;
export declare function call(...parts: CallPart[]): CurriedNode<ast.CallNode>;
/**
 * This function turns a string into the appropriate token typ:
 *
 * - `this` -> ThisReferenceToken
 * - `@` ID -> ArgReferenceToken
 * - ID -> VarReferenceToken
 */
export declare function ref(name: string): CurriedNode<ast.VarReferenceNode | ast.ArgReferenceNode | ast.ThisReferenceNode>;
export declare function path(curriedHead: CurriedNode<ast.ExpressionAstNode> | string, ...tailParts: string[]): CurriedNode<ast.PathNode>;
export declare function member(part: string): CurriedNode<ast.MemberNode>;
/**
 *
 * @param body the outer contents of the string (like `"hello"`)
 */
export declare function str(body: string): CurriedNode<ast.StringNode>;
export declare function int(body: string): CurriedNode<ast.NumberNode>;
export declare function decimal(body: string): CurriedNode<ast.NumberNode>;
export declare function root(...children: CurriedNode[]): {
    root: ast.RootNode;
    source: string;
};
export {};
//# sourceMappingURL=ast-builder.d.ts.map