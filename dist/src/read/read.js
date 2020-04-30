import { ok, Snippet } from "../snippet";
import { range } from "../span";
import { combinator } from "./combinator";
import { any } from "./combinators";
import { Logger } from "./logger";
import { printTrace, getTrace } from "./debug";
import { COMMENT, END_TAG, START_TAG, TEXT } from "./html";
import { many } from "./multi";
import { root } from "./tokens";
import { complete, map, mapResult } from "./utils";
import { BLOCK, INTERPOLATE } from "./hbs";
export const CONTENT = combinator(() => any("CONTENT", COMMENT, END_TAG, START_TAG, TEXT));
export const TOP_LEVEL = {
    name: "TOP_LEVEL",
    invoke(input) {
        return input.invoke(any("top level", BLOCK, INTERPOLATE, CONTENT));
    },
};
export function read(source, { logging } = {}) {
    try {
        let input = Snippet.input(source, new Logger(logging === "Return" /* Return */ || logging === "Print" /* Print */));
        let result = input.invoke(complete(map(many(TOP_LEVEL), tokens => {
            return ok(root(tokens, range(...tokens)));
        })));
        if (logging === "Return" /* Return */) {
            return {
                root: mapResult(result, ([, token]) => ok(token)),
                trace: getTrace(),
            };
        }
        else {
            return { root: mapResult(result, ([, token]) => ok(token)) };
        }
    }
    finally {
        if (logging === "Print" /* Print */) {
            printTrace();
        }
    }
}
