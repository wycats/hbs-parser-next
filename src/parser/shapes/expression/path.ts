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
import { expand, consumeToken, notEOF, many } from "../../tokens-iterator";

export type PathOutput = PathNode | PathHeadOutput;

export type PathHeadOutput =
  | CallNode
  | ArgReferenceNode
  | VarReferenceNode
  | ThisReferenceNode;

export const PathMemberShape = shape("PathMember", iterator =>
  iterator.start(notEOF()).andThen(() => {
    return iterator.atomic(iterator => {
      return iterator
        .start(consumeToken("dot", TokenType.Dot))
        .extend("id", consumeToken(TokenType.Identifier))
        .andThen(({ dot, id }) => ast.member(dot, id.span));
    });
  })
);

export const PathHeadShape = shape("PathHead", iterator =>
  iterator.start(
    expand(any([SexpShape, ArgRefShape, VarRefShape], "path head"))
  )
);

export const PathShape = shape("Path", iterator =>
  iterator
    .start(notEOF())
    .next(expand(PathHeadShape))
    .andThen(head => {
      let tail = many(PathMemberShape)(iterator);
      if (tail.length === 0) {
        return head;
      } else {
        return ast.path({ head, tail }, range(head, ...tail));
      }
    })
);
