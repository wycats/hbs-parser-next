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
import { any } from "../internal/any";
import { ArgRefShape } from "./args-ref";
import { SexpShape } from "./sexp";
import { VarRefShape } from "./var-ref";
import {
  expand,
  consumeToken,
  notEOF,
  many,
  atomic,
} from "../../tokens-iterator";

export type PathOutput = PathNode | PathHeadOutput;

export type PathHeadOutput =
  | CallNode
  | ArgReferenceNode
  | VarReferenceNode
  | ThisReferenceNode;

export const PathMemberShape = shape("PathMember", iterator => {
  return iterator.start(notEOF()).next(
    atomic(iterator => {
      return iterator
        .start(consumeToken("dot", TokenType.Dot))
        .extend("id", consumeToken(TokenType.Identifier))
        .andThen(({ dot, id }) => ast.member(dot, id.span));
    })
  );
});

export const PathHeadShape = shape("PathHead", iterator =>
  iterator.start(
    expand(any([SexpShape, ArgRefShape, VarRefShape], "path head"))
  )
);

export const PathShape = shape("Path", iterator =>
  iterator
    .start(expand(PathHeadShape))
    .named("head")
    .extend("tail", many(PathMemberShape))
    .andThen(({ head, tail }) => {
      return tail.length === 0
        ? head
        : ast.path({ head, tail }, range(head, ...tail));
    })
);
