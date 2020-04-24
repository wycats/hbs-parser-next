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
exports.PathArrow = exports.PathHeadArrow = exports.PathMemberArrow = void 0;
require("../../../read/tokens");
const span_1 = require("../../../span");
const ast = __importStar(require("../../nodes"));
const shape_1 = require("../../shape");
const any_1 = require("../internal/any");
const args_ref_1 = require("./args-ref");
const sexp_1 = require("./sexp");
const var_ref_1 = require("./var-ref");
exports.PathMemberArrow = shape_1.ParserArrow.start()
    .token("Dot" /* Dot */)
    .named("dot")
    .extend("id", shape_1.ParserArrow.start().token("Identifier" /* Identifier */))
    .ifOk(({ dot, id }) => ast.member(dot, id.span))
    .atomic()
    .label("PathMember");
exports.PathHeadArrow = any_1.anyArrow([
    sexp_1.SexpArrow,
    args_ref_1.ArgRefArrow,
    var_ref_1.VarRefArrow,
]).label("PathHead");
exports.PathArrow = exports.PathHeadArrow.named("head")
    .extend("tail", exports.PathMemberArrow.repeat().fallible())
    .ifOk(({ head, tail }) => tail.length === 0 ? head : ast.path({ head, tail }, span_1.range(head, ...tail)))
    .label("Path");
