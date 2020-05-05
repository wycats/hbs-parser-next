import "../../read/token-enum";
import { text } from "../create-node";
import { ParserArrow } from "../shape";
export const TextArrow = ParserArrow.start()
    .token("Text" /* Text */)
    .ifOk(text)
    .label("Text");
