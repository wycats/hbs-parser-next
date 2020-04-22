import { TokenType } from "../../../read/tokens";
import { range } from "../../../span";
import * as ast from "../../nodes";
import type {
  ArgReferenceNode,
  CallNode,
  PathNode,
  ThisReferenceNode,
  VarReferenceNode,
} from "../../nodes/expression";
import { SequenceBuilder, ParserArrow, Result, ArrowResult } from "../../shape";
import { atomic, token, label, repeat } from "../../tokens-iterator";
import { any, anyArrow } from "../internal/any";
import { ArgRefSequence, ArgRefArrow } from "./args-ref";
import { SexpSequence, SexpArrow } from "./sexp";
import { VarRefSequence, VarRefArrow } from "./var-ref";

export type PathOutput = PathNode | PathHeadOutput;

export type PathHeadOutput =
  | CallNode
  | ArgReferenceNode
  | VarReferenceNode
  | ThisReferenceNode;

export const PathMemberSequence = label(
  "PathMember",
  atomic(
    token("dot", TokenType.Dot).extend("id", token(TokenType.Identifier))
  ).andThen(({ dot, id }) => ast.member(dot, id.span))
);

export const PathMemberArrow = ParserArrow.start()
  .token(TokenType.Dot)
  .named("dot")
  .extend("id", ParserArrow.start().token(TokenType.Identifier))
  .ifOk(({ dot, id }) => ast.member(dot, id.span))
  .atomic()
  .label("PathMember");

export const PathHeadSequence: SequenceBuilder<
  void,
  ast.ExpressionAstNode
> = label(
  "PathHead",
  any("any path head", [SexpSequence, ArgRefSequence, VarRefSequence])
);

export const PathSequence = label(
  "Path",
  PathHeadSequence.named("head")
    .extend("tail", repeat(PathMemberSequence))
    .andThen(({ head, tail }) =>
      tail.length === 0 ? head : ast.path({ head, tail }, range(head, ...tail))
    )
);

export const PathHeadArrow = anyArrow([
  SexpArrow,
  ArgRefArrow,
  VarRefArrow,
]).label("PathHead");

export const PathArrow = PathHeadArrow.named("head")
  .extend("tail", PathMemberArrow.repeat().fallible())
  .ifOk(({ head, tail }) =>
    tail.length === 0 ? head : ast.path({ head, tail }, range(head, ...tail))
  )
  .label("Path");
