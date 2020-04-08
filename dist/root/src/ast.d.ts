import type { SourceSpan } from "./span";
export declare const enum NodeType {
    Interpolation = 0,
    Path = 1,
    Identifier = 2
}
export interface Root {
}
export interface AnyNode {
    span: SourceSpan;
}
export interface Interpolation extends AnyNode {
    type: NodeType.Interpolation;
    expr: Expression;
}
export declare function interpolation(expr: Expression, span: SourceSpan): Interpolation;
export declare type Node = Interpolation;
export interface Identifier extends AnyNode {
    type: NodeType.Identifier;
    name: string;
}
export declare function id(name: string, span: SourceSpan): Identifier;
export declare type PathHead = Identifier;
export declare type PathTail = Identifier;
export interface Path extends AnyNode {
    type: NodeType.Path;
    head: PathHead;
    tail?: PathTail[];
}
export declare function path(head: PathHead, tail?: PathTail[]): Path;
export declare type Expression = Path;
//# sourceMappingURL=ast.d.ts.map