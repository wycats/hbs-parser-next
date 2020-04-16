import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { err, ok, Result, EXPAND, seq } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
import { HeadShape } from "../interpolate";
import { MAYBE_WS, WS } from "./ws";
import { range } from "../../../span";
import { ExpressionShape } from "../expression";
import { maybe } from "./maybe";

class PositionalShape extends AbstractShape<ast.PositionalArgumentsNode> {
  readonly desc = "Positional";

  [EXPAND](iterator: TokensIterator): Result<ast.PositionalArgumentsNode> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    let out: ast.ExpressionAstNode[] = [];

    while (true) {
      let transaction = iterator.begin();

      try {
        let before = transaction.expand(WS);

        if (before.kind === "err") {
          break;
        }

        let expr = transaction.expand(ExpressionShape);

        if (expr.kind === "err") {
          break;
        }

        transaction.commit();
        out.push({ ...expr.value, before: before.value });
      } finally {
        transaction.finallyRollback();
      }
    }

    if (out.length === 0) {
      return err(iterator.peek("positional").reject(), "empty");
    } else {
      return ok(ast.positional(out, { span: range(...out) }));
    }
  }
}

class NamedArgumentShape extends AbstractShape<ast.NamedArgumentNode> {
  readonly desc = "NamedArgument";

  [EXPAND](iterator: TokensIterator): Result<ast.NamedArgumentNode> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    let transaction = iterator.begin();

    try {
      let maybeID = transaction.peek("id");

      if (maybeID.token.type === TokenType.Identifier) {
        maybeID.commit();
      } else {
        return err(maybeID.reject(), "mismatch");
      }

      let id = maybeID.token;

      let eq = transaction.peek("eq");

      if (eq.token.type === TokenType.Eq) {
        eq.commit();
      } else {
        return err(eq.reject(), "mismatch");
      }

      let expr = transaction.expand(ExpressionShape);

      if (expr.kind === "err") {
        return expr;
      }

      let trailingWS = transaction.expand(MAYBE_WS);

      transaction.commit();

      return ok(
        ast.namedArg(
          { name: id, value: expr.value },
          { span: range(id, expr.value), after: trailingWS || undefined }
        )
      );
    } finally {
      transaction.finallyRollback();
    }
  }
}

class NamedArgumentsShape extends AbstractShape<ast.NamedArgumentsNode> {
  readonly desc = "NamedArguments";

  [EXPAND](iterator: TokensIterator): Result<ast.NamedArgumentsNode> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    let out: ast.NamedArgumentNode[] = [];

    let transaction = iterator.begin();

    try {
      let leadingWS = transaction.expand(WS);

      if (leadingWS.kind === "err") {
        return leadingWS;
      }

      while (true) {
        let expr = transaction.expand(NamedArgumentShape);

        if (expr.kind === "err") {
          break;
        }

        out.push(expr.value);
      }

      if (out.length === 0) {
        return err(transaction.peek("any args").reject(), "empty");
      } else {
        transaction.commit();
        return ok(
          ast.namedArgs(out, { span: range(...out), before: leadingWS.value })
        );
      }
    } finally {
      transaction.finallyRollback();
    }
  }
}

export class CallBodyShape extends AbstractShape<ast.CallBodyNode> {
  readonly desc = "CallBody";

  [EXPAND](iterator: TokensIterator): Result<ast.CallBodyNode> {
    let before = iterator.expand(MAYBE_WS) || undefined;

    return seq(iterator.expand(HeadShape)).map(head => {
      let positional = iterator.expand(maybe(new PositionalShape()));
      let named = iterator.expand(maybe(new NamedArgumentsShape()));
      let after = iterator.expand(MAYBE_WS) || undefined;

      return ast.callBody(
        { head: head, positional, named },
        { span: range(head, positional, named), before, after }
      );
    });
  }
}
