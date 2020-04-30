import "../../../read/tokens";
import { ParserArrow } from "../../shape";
export const MaybeWsArrow = ParserArrow.start()
    .token("WS" /* WS */)
    .or(undefined)
    .label("WS?");
export const WsArrow = ParserArrow.start().token("WS" /* WS */).label("WS");
