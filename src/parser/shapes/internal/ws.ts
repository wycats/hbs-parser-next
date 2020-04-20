import { TokenType, WSToken } from "../../../read/tokens";
import { infallibleShape, shape, ShapeConstructor } from "../abstract";
import {
  legacyConsumeToken,
  legacyNotEOF,
  consumeToken,
  label,
} from "../../tokens-iterator";
import { step, start, isErr } from "../../shape";

export const Ws = shape("WS", iterator =>
  iterator.start(legacyConsumeToken(TokenType.WS))
);

export const MaybeWs: ShapeConstructor<WSToken | undefined> = infallibleShape(
  "MaybeWS",
  iterator => {
    let next = iterator.peek("eof");
    next.ignore();

    if (next.token === undefined) {
      return undefined;
    }

    let token = legacyConsumeToken(TokenType.WS)(iterator);

    if (isErr(token)) {
      return undefined;
    } else {
      return token.value;
    }
  }
);

export const MaybeWsSequence = label(
  "WS?",
  consumeToken(TokenType.WS).or(undefined)
);
export const WsSequence = label("WS", consumeToken(TokenType.WS));
