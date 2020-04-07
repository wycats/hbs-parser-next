import type { SourceSpan } from "./span";

export const enum NodeType {
  Interpolation,
  Path,
  Identifier,
}

export interface Root {}

export interface AnyNode {
  span: SourceSpan;
}

// -- Statements -- //

export interface Interpolation extends AnyNode {
  type: NodeType.Interpolation;
  expr: Expression;
}

export function interpolation(
  expr: Expression,
  span: SourceSpan
): Interpolation {
  return {
    type: NodeType.Interpolation,
    expr,
    span,
  };
}

export type Node = Interpolation;

// -- Expressions -- //

export interface Identifier extends AnyNode {
  type: NodeType.Identifier;
  name: string;
}

export function id(name: string, span: SourceSpan): Identifier {
  return {
    type: NodeType.Identifier,
    name,
    span,
  };
}

export type PathHead = Identifier;
export type PathTail = Identifier;

export interface Path extends AnyNode {
  type: NodeType.Path;
  head: PathHead;
  tail?: PathTail[];
}

export function path(head: PathHead, tail: PathTail[] = []): Path {
  if (tail.length > 0) {
    return {
      type: NodeType.Path,
      head,
      tail,
      span: { start: head.span.start, end: tail[tail.length - 1].span.end },
    };
  } else {
    return {
      type: NodeType.Path,
      head,
      span: head.span,
    };
  }
}

export type Expression = Path;
