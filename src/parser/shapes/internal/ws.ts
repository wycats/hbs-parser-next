import { TokenType } from "../../../read/tokens";
import { infallibleShape, shape } from "../abstract";
import { consumeToken, notEOF } from "../../tokens-iterator";

export const MaybeWS = infallibleShape("WS?", iterator =>
  iterator.start(notEOF()).next(consumeToken(TokenType.WS)).or(null)
);

export const Ws = shape("WS", iterator =>
  iterator.start(notEOF()).next(consumeToken(TokenType.WS))
);
