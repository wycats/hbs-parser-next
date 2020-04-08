"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const combinators = __importStar(require("./read/combinators"));
exports.combinators = combinators;
var logger_1 = require("./read/logger");
exports.Logger = logger_1.Logger;
const multi = __importStar(require("./read/multi"));
exports.multi = multi;
__export(require("./snippet"));
const ast = __importStar(require("./ast"));
exports.ast = ast;
__export(require("./read/hbs"));
const tokens = __importStar(require("./read/tokens"));
exports.tokens = tokens;
__export(require("./span"));
const b = __importStar(require("./read/token-builder"));
exports.b = b;
const utils = __importStar(require("./read/utils"));
exports.utils = utils;
__export(require("./read/serialize"));
__export(require("./read/read"));
function parse(_input) {
    return {};
}
exports.parse = parse;
