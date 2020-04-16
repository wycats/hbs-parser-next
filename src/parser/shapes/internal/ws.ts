import { TokenType, WSToken } from "../../../read/tokens";
import { err, ok, Result, EXPAND } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape, AbstractInfallibleShape } from "../abstract";

export class MaybeWS extends AbstractInfallibleShape<WSToken | null> {
  readonly desc = "WS?";

  constructor() {
    super();
  }

  [EXPAND](iterator: TokensIterator): WSToken | null {
    let next = iterator.peek("ws");

    if (next.isEOF) {
      next.optional();
      return null;
    }

    if (next.token.type === TokenType.WS) {
      next.commit();
      return next.token;
    }

    return next.optional();
  }
}

export const MAYBE_WS = new MaybeWS();

export class Ws extends AbstractShape<WSToken> {
  readonly desc = "WS";

  constructor() {
    super();
  }

  [EXPAND](iterator: TokensIterator): Result<WSToken> {
    let eof = iterator.assertNotEOF();

    if (eof.kind === "err") {
      return eof;
    }

    let next = iterator.peek("ws");
    if (next.token.type === TokenType.WS) {
      next.commit();
      return ok(next.token);
    }

    return err(next.reject(), "mismatch");
  }
}

export const WS = new Ws();
