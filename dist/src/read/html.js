"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMENT = exports.END_TAG = exports.START_TAG = exports.TEXT = void 0;
const snippet_1 = require("../snippet");
const span_1 = require("../span");
const combinator_1 = require("./combinator");
const combinators_1 = require("./combinators");
const start_tag_1 = __importDefault(require("./combinators/html/start-tag"));
const text_1 = __importDefault(require("./combinators/html/text"));
const tokens_1 = require("./tokens");
const utils_1 = require("./utils");
const end_tag_1 = __importDefault(require("./combinators/html/end-tag"));
exports.TEXT = new text_1.default();
exports.START_TAG = new start_tag_1.default();
exports.END_TAG = new end_tag_1.default();
exports.COMMENT = combinator_1.combinator(() => utils_1.map(combinators_1.seq("COMMENT", combinators_1.tag("<!--"), combinators_1.pattern(/^.*(?=[-][-][>])/u, "comment body"), combinators_1.tag("-->")), ([start, data, end]) => {
    return snippet_1.ok(tokens_1.comment(data.span, span_1.range(start, end)));
}));
