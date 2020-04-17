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

export type PathOutput = PathNode | PathHeadOutput;

export type PathHeadOutput =
  | CallNode
  | ArgReferenceNode
  | VarReferenceNode
  | ThisReferenceNode;

export const PathMemberShape = shape("PathMember", iterator =>
  iterator.assertNotEOF().andThen(() => {
    return iterator.atomic(iterator => {
      return iterator
        .consume("dot", token =>
          token.type === TokenType.Dot ? { dot: token } : undefined
        )
        .extend("id", () =>
          iterator.consume("id", token =>
            token.type === TokenType.Identifier ? token : undefined
          )
        )
        .andThen(({ dot, id }) => ast.member(dot, id.span));
    });
  })
);

export const PathHeadShape = shape("PathHead", iterator => {
  return iterator.expand(
    any([SexpShape, ArgRefShape, VarRefShape], "path head")
  );
});

export const PathShape = shape("Path", iterator =>
  iterator
    .assertNotEOF()
    .andThen(() => iterator.expand(PathHeadShape))
    .andThen(head => {
      let tail = iterator.many(PathMemberShape);
      if (tail.length === 0) {
        return head;
      } else {
        return ast.path({ head, tail }, range(head, ...tail));
      }
    })
);
