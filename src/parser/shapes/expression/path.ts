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
import { ok, SequenceBuilder } from "../../shape";
import {
  atomic,
  consumeToken,
  label,
  legacyAtomic,
  legacyConsumeToken,
  legacyExpand,
  legacyMany,
  legacyNotEOF,
  repeat,
} from "../../tokens-iterator";
import { shape } from "../abstract";
import { any } from "../internal/any";
import { ArgRefSequence } from "./args-ref";
import { SexpSequence } from "./sexp";
import { VarRefSequence } from "./var-ref";

export type PathOutput = PathNode | PathHeadOutput;

export type PathHeadOutput =
  | CallNode
  | ArgReferenceNode
  | VarReferenceNode
  | ThisReferenceNode;

export const PathMemberShape = shape("PathMember", iterator => {
  return iterator.start(legacyNotEOF()).next(
    legacyAtomic(iterator => {
      return iterator
        .start(legacyConsumeToken("dot", TokenType.Dot))
        .extend("id", legacyConsumeToken(TokenType.Identifier))
        .andThen(({ dot, id }) => ast.member(dot, id.span));
    })
  );
});

export const PathMemberSequence = label(
  "PathMember",
  atomic(
    consumeToken("dot", TokenType.Dot).extend(
      "id",
      consumeToken(TokenType.Identifier)
    )
  ).andThen(({ dot, id }) => ast.member(dot, id.span))
);

export const PathHeadShape = shape("PathHead", iterator =>
  PathHeadSequence.run(iterator, ok(undefined))
);

export const PathHeadSequence: SequenceBuilder<
  void,
  ast.ExpressionAstNode
> = label(
  "PathHead",
  any("any path head", [SexpSequence, ArgRefSequence, VarRefSequence])
);

export const PathShape = shape("Path", iterator =>
  iterator
    .start(legacyExpand(PathHeadShape))
    .named("head")
    .extend("tail", legacyMany(PathMemberShape))
    .andThen(({ head, tail }) => {
      return tail.length === 0
        ? head
        : ast.path({ head, tail }, range(head, ...tail));
    })
);

export const PathSequence = label(
  "Path",
  PathHeadSequence.named("head")
    .extend("tail", repeat(PathMemberSequence))
    .andThen(({ head, tail }) =>
      tail.length === 0 ? head : ast.path({ head, tail }, range(head, ...tail))
    )
);
