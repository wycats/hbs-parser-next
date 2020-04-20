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
import { shape } from "../abstract";
import { legacyAny, any } from "../internal/any";
import { ArgRefShape, ArgRefSequence } from "./args-ref";
import { SexpShape, SexpSequence } from "./sexp";
import { VarRefShape, VarRefSequence } from "./var-ref";
import {
  legacyExpand,
  legacyConsumeToken,
  legacyNotEOF,
  legacyMany,
  legacyAtomic,
  label,
  consumeToken,
  atomic,
  repeat,
} from "../../tokens-iterator";
import type { SequenceBuilder } from "../../shape";

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
  iterator.start(
    legacyExpand(legacyAny([SexpShape, ArgRefShape, VarRefShape], "path head"))
  )
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
