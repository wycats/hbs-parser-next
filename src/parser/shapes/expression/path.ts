import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import type {
  PathNode,
  VarReferenceNode,
  ArgReferenceNode,
  ThisReferenceNode,
  CallNode,
  MemberNode,
} from "../../nodes/expression";
import { err, ok, Result, EXPAND, Shape } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
import { VarRefShape } from "./var-ref";
import { ArgRefShape } from "./args-ref";
import { SexpShape } from "./sexp";
import { range } from "../../../span";

export type PathOutput = PathNode | PathHeadOutput;

export class PathShape extends AbstractShape<PathOutput> {
  readonly desc = "ArgRef";

  [EXPAND](iterator: TokensIterator): Result<PathOutput> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    let head = iterator.expand(PathHeadShape);

    if (head.kind === "err") {
      return err(iterator.peek("path head").reject(), "mismatch");
    }

    let tail = [];

    while (true) {
      let member = iterator.expand(PathMemberShape);

      if (member.kind === "err") {
        break;
      } else {
        tail.push(member.value);
      }
    }

    if (tail.length === 0) {
      return ok(head.value);
    } else {
      return ok(
        ast.path({ head: head.value, tail }, range(head.value, ...tail))
      );
    }
  }
}

export type PathHeadOutput =
  | CallNode
  | ArgReferenceNode
  | VarReferenceNode
  | ThisReferenceNode;

export class PathHeadShape extends AbstractShape<PathHeadOutput> {
  readonly desc = "Expression";

  [EXPAND](iterator: TokensIterator): Result<PathHeadOutput> {
    let shapes: Shape<Result<PathHeadOutput>>[] = [
      new SexpShape(),
      new ArgRefShape(),
      new VarRefShape(),
    ];

    for (let shape of shapes) {
      let expand = iterator.expand(shape);

      if (expand.kind === "ok") {
        return expand;
      }
    }

    return err(iterator.peek("expression").reject(), "expression");
  }
}

export class PathMemberShape extends AbstractShape<MemberNode> {
  readonly desc = "PathMember";

  [EXPAND](iterator: TokensIterator): Result<ast.MemberNode> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    let transaction = iterator.begin();

    try {
      let maybeDot = transaction.peek("dot");

      if (maybeDot.token.type === TokenType.Dot) {
        maybeDot.commit();
      } else {
        return err(maybeDot.reject(), "mismatch");
      }

      let maybeID = transaction.peek("id");

      if (maybeID.token.type === TokenType.Identifier) {
        maybeID.commit();
        transaction.commit();

        return ok(ast.member(maybeDot.token, maybeID.token.span));
      } else {
        return err(maybeID.reject(), "mismatch");
      }
    } finally {
      transaction.finallyRollback();
    }
  }
}
