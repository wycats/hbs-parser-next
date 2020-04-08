"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combinator_1 = require("../../combinator");
const tokens_1 = require("../../tokens");
const combinators_1 = require("../../combinators");
const utils_1 = require("../../utils");
const snippet_1 = require("../../../snippet");
const hbs_1 = require("../../hbs");
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
exports.TAG_NAME = combinator_1.combinator(() => combinators_1.pattern(/^[A-Za-z][^/>\0\s]+/u, "TAG_NAME"));
exports.TAG_NAME_TOKEN = combinator_1.combinator(() => utils_1.map(exports.TAG_NAME, snippet => snippet_1.ok([tokens_1.id(snippet.span)])));
exports.TAG_OR_COMPONENT_NAME = combinator_1.combinator(() => combinators_1.any("tag or component name", hbs_1.SIMPLE_PATH, exports.TAG_NAME_TOKEN));
