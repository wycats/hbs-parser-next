import { TokenType } from "../../../read/tokens";
import { token, label } from "../../tokens-iterator";
import { ParserArrow } from "../../shape";

export const MaybeWsSequence = label("WS?", token(TokenType.WS).or(undefined));
export const WsSequence = label("WS", token(TokenType.WS));

export const MaybeWsArrow = ParserArrow.start()
  .token(TokenType.WS)
  .or(undefined)
  .label("WS?");

export const WsArrow = ParserArrow.start().token(TokenType.WS).label("WS");
