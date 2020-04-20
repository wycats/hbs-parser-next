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
exports.VarRefShape = void 0;
require("../../../read/tokens");
const span_1 = require("../../../span");
const ast = __importStar(require("../../nodes"));
const abstract_1 = require("../abstract");
const tokens_iterator_1 = require("../../tokens-iterator");
exports.VarRefShape = abstract_1.shape("VarRef", tokens_iterator_1.atomic(iterator => iterator
    .start(tokens_iterator_1.legacyConsumeToken("id", "Identifier" /* Identifier */))
    .checkNext(tokens_iterator_1.assertNotNext("eq", token => token.type === "Eq" /* Eq */))
    .extend("source", tokens_iterator_1.legacySource())
    .andThen(({ id, source }) => {
    if (span_1.slice(id.span, source) === "this") {
        return ast.thisReference(id);
    }
    else {
        return ast.varReference(id);
    }
})));
