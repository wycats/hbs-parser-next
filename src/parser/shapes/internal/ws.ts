import { TokenType } from "../../../read/token-enum";
import { ParserArrow } from "../../shape";

export const MaybeWsArrow = ParserArrow.start()
  .token(TokenType.WS)
  .or(undefined)
  .label("WS?");

export const WsArrow = ParserArrow.start().token(TokenType.WS).label("WS");
