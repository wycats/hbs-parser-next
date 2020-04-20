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
exports.PathShape = exports.PathHeadShape = exports.PathMemberShape = void 0;
require("../../../read/tokens");
const span_1 = require("../../../span");
const ast = __importStar(require("../../nodes"));
const abstract_1 = require("../abstract");
const any_1 = require("../internal/any");
const args_ref_1 = require("./args-ref");
const sexp_1 = require("./sexp");
const var_ref_1 = require("./var-ref");
const tokens_iterator_1 = require("../../tokens-iterator");
exports.PathMemberShape = abstract_1.shape("PathMember", iterator => {
    return iterator.start(tokens_iterator_1.legacyNotEOF()).next(tokens_iterator_1.atomic(iterator => {
        return iterator
            .start(tokens_iterator_1.legacyConsumeToken("dot", "Dot" /* Dot */))
            .extend("id", tokens_iterator_1.legacyConsumeToken("Identifier" /* Identifier */))
            .andThen(({ dot, id }) => ast.member(dot, id.span));
    }));
});
exports.PathHeadShape = abstract_1.shape("PathHead", iterator => iterator.start(tokens_iterator_1.legacyExpand(any_1.any([sexp_1.SexpShape, args_ref_1.ArgRefShape, var_ref_1.VarRefShape], "path head"))));
exports.PathShape = abstract_1.shape("Path", iterator => iterator
    .start(tokens_iterator_1.legacyExpand(exports.PathHeadShape))
    .named("head")
    .extend("tail", tokens_iterator_1.legacyMany(exports.PathMemberShape))
    .andThen(({ head, tail }) => {
    return tail.length === 0
        ? head
        : ast.path({ head, tail }, span_1.range(head, ...tail));
}));
