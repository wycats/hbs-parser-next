import { TokenType } from "../../../read/tokens";
import { infallibleShape, shape } from "../abstract";

export const MaybeWS = infallibleShape("WS?", iterator =>
  iterator
    .assertNotEOF()
    .andThen(() =>
      iterator.consume("ws", token => {
        if (token.type === TokenType.WS) {
          return token;
        }
      })
    )
    .or(null)
);

export const Ws = shape("WS", iterator =>
  iterator.assertNotEOF().andThen(() =>
    iterator.consume("ws", token => {
      if (token.type === TokenType.WS) {
        return token;
      }
    })
  )
);
