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
exports.CallBodyShape = exports.NamedArgumentsShape = exports.NamedArgumentShape = exports.PositionalShape = void 0;
require("../../../read/tokens");
const span_1 = require("../../../span");
const ast = __importStar(require("../../nodes"));
const abstract_1 = require("../abstract");
const expression_1 = require("../expression");
const interpolate_1 = require("../interpolate");
const maybe_1 = require("./maybe");
const ws_1 = require("./ws");
const tokens_iterator_1 = require("../../tokens-iterator");
exports.PositionalShape = abstract_1.shape("Positional", iterator => iterator
    .start(tokens_iterator_1.legacyNotEOF())
    .next(tokens_iterator_1.legacyRepeat(tokens_iterator_1.atomic(iterator => iterator
    .start(tokens_iterator_1.legacyExpand(ws_1.Ws))
    .named("before")
    .extend("expr", tokens_iterator_1.legacyExpand(expression_1.ExpressionShape))
    .andThen(({ before, expr }) => ast.extendNode(expr, { before })))))
    .andCheck(tokens_iterator_1.legacyPresent("any args"))
    .andThen(out => ast.positional(out, { span: span_1.range(...out) })));
exports.NamedArgumentShape = abstract_1.shape("NamedArgument", iterator => iterator.start(tokens_iterator_1.legacyNotEOF()).next(tokens_iterator_1.atomic(iterator => iterator
    .start(tokens_iterator_1.legacyConsumeToken("id", "Identifier" /* Identifier */))
    .checkNext(tokens_iterator_1.legacyConsumeToken("Eq" /* Eq */))
    .extend("expr", tokens_iterator_1.legacyExpand(expression_1.ExpressionShape))
    .andThen(({ id, expr }) => {
    let trailingWS = iterator.expandInfallible(ws_1.MaybeWs);
    return ast.namedArg({ name: id, value: expr }, { span: span_1.range(id, expr), after: trailingWS || undefined });
}))));
exports.NamedArgumentsShape = abstract_1.shape("NamedArguments", iterator => {
    return iterator.start(tokens_iterator_1.legacyNotEOF()).next(tokens_iterator_1.atomic(iterator => iterator
        .start(tokens_iterator_1.legacyExpand(ws_1.Ws))
        .named("leadingWS")
        .extend("args", tokens_iterator_1.legacyMany(exports.NamedArgumentShape))
        .andCheck(({ args }) => tokens_iterator_1.legacyPresent("any args")(args, iterator))
        .andThen(({ leadingWS, args }) => ast.namedArgs(args, { span: span_1.range(...args), before: leadingWS }))));
});
exports.CallBodyShape = abstract_1.shape("CallBody", iterator => {
    let before = iterator.start(tokens_iterator_1.expandInfallible(ws_1.MaybeWs)) || undefined;
    return iterator.start(tokens_iterator_1.legacyExpand(interpolate_1.HeadShape)).andThen(head => {
        let positional = iterator.start(tokens_iterator_1.expandInfallible(maybe_1.maybe(new exports.PositionalShape())));
        let named = iterator.start(tokens_iterator_1.expandInfallible(maybe_1.maybe(new exports.NamedArgumentsShape())));
        let after = iterator.start(tokens_iterator_1.expandInfallible(ws_1.MaybeWs)) || undefined;
        return ast.callBody({ head: head, positional, named }, { span: span_1.range(head, positional, named), before, after });
    });
});
