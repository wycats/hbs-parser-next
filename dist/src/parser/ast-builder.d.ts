import type { AstNode } from "./nodes";
import * as ast from "./nodes";
import { SourceSpan } from "../span";
import { CurriedToken } from "../read/token-builder";
import type { Token } from "../read/tokens";
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
export declare function interpolate(head: CurriedNode<ast.ExpressionAstNode>, positional?: ReadonlyArray<CurriedNode<ast.ExpressionAstNode>>, named?: CurriedNode<ast.NamedNode>): CurriedNode<ast.InterpolateNode>;
export declare function call(head: CurriedNode<ast.ExpressionAstNode>, positional?: ReadonlyArray<CurriedNode<ast.ExpressionAstNode>>, named?: CurriedNode<ast.NamedNode>): CurriedNode<ast.CallNode>;
export declare function varRef(name: string): CurriedNode<ast.VarReferenceNode>;
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
//# sourceMappingURL=ast-builder.d.ts.map