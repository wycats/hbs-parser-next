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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SexpArrow = void 0;
require("../../../read/tokens");
const ast = __importStar(require("../../nodes"));
const shape_1 = require("../../shape");
const call_body_1 = require("../internal/call-body");
exports.SexpArrow = shape_1.ParserArrow.start()
    .parent("sexp", "Sexp" /* Sexp */, call_body_1.CallBodyArrow)
    .ifOk(({ result, token }) => ast.call(result, { span: token.span }))
    .label("Sexp");
