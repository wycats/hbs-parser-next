import { ok } from "../snippet";
import { range } from "../span";
import { combinator } from "./combinator";
import { pattern, seq, tag } from "./combinators";
import HTMLStartTag from "./combinators/html/start-tag";
import HTMLText from "./combinators/html/text";
import { comment } from "./tokens";
import { map } from "./utils";
import HTMLEndTag from "./combinators/html/end-tag";
export const TEXT = new HTMLText();
export const START_TAG = new HTMLStartTag();
export const END_TAG = new HTMLEndTag();
export const COMMENT = combinator(() => map(seq("COMMENT", tag("<!--"), pattern(/^.*(?=[-][-][>])/u, "comment body"), tag("-->")), ([start, data, end]) => {
    return ok(comment(data.span, range(start, end)));
}));
