"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = exports.a = exports.r = exports.ast = exports.tokens = exports.multi = exports.combinators = void 0;
const combinators = __importStar(require("./read/combinators"));
exports.combinators = combinators;
var logger_1 = require("./read/logger");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.Logger; } });
Object.defineProperty(exports, "formatDebuggable", { enumerable: true, get: function () { return logger_1.formatDebuggable; } });
const multi = __importStar(require("./read/multi"));
exports.multi = multi;
__exportStar(require("./snippet"), exports);
__exportStar(require("./read/hbs"), exports);
const tokens = __importStar(require("./read/tokens"));
exports.tokens = tokens;
const ast = __importStar(require("./parser/nodes"));
exports.ast = ast;
__exportStar(require("./span"), exports);
const r = __importStar(require("./read/token-builder"));
exports.r = r;
const a = __importStar(require("./parser/ast-builder"));
exports.a = a;
const utils = __importStar(require("./read/utils"));
exports.utils = utils;
__exportStar(require("./read/serialize"), exports);
__exportStar(require("./read/read"), exports);
var parse_1 = require("./parser/parse");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parse_1.default; } });
var debug_1 = require("./read/debug");
Object.defineProperty(exports, "trunc", { enumerable: true, get: function () { return debug_1.trunc; } });
