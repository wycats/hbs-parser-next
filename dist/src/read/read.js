"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../snippet");
const span_1 = require("../span");
const combinator_1 = require("./combinator");
const combinators_1 = require("./combinators");
const logger_1 = require("./logger");
const debug_1 = require("./debug");
const html_1 = require("./html");
const multi_1 = require("./multi");
const tokens_1 = require("./tokens");
const utils_1 = require("./utils");
const hbs_1 = require("./hbs");
exports.CONTENT = combinator_1.combinator(() => combinators_1.any("CONTENT", html_1.COMMENT, html_1.END_TAG, html_1.START_TAG, html_1.TEXT));
exports.TOP_LEVEL = {
    name: "TOP_LEVEL",
    invoke(input) {
        return input.invoke(combinators_1.any("top level", hbs_1.BLOCK, hbs_1.INTERPOLATE, exports.CONTENT));
    },
};
function read(source, { logging } = {}) {
    try {
        let input = snippet_1.Snippet.input(source, new logger_1.Logger(logging === "Return" /* Return */ || logging === "Print" /* Print */));
        let result = input.invoke(utils_1.complete(utils_1.map(multi_1.many(exports.TOP_LEVEL), tokens => {
            return snippet_1.ok(tokens_1.root(tokens, span_1.range(...tokens)));
        })));
        if (logging === "Return" /* Return */) {
            return {
                root: utils_1.mapResult(result, ([, token]) => snippet_1.ok(token)),
                trace: debug_1.getTrace(),
            };
        }
        else {
            return { root: utils_1.mapResult(result, ([, token]) => snippet_1.ok(token)) };
        }
    }
    finally {
        if (logging === "Print" /* Print */) {
            debug_1.printTrace();
        }
    }
}
exports.read = read;
