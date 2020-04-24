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
exports.CallBodyArrow = exports.NamedArgumentsArrow = exports.NamedArgumentArrow = exports.PositionalArrow = void 0;
require("../../../read/tokens");
const span_1 = require("../../../span");
const ast = __importStar(require("../../nodes"));
const shape_1 = require("../../shape");
const expression_1 = require("../expression");
const interpolate_1 = require("../interpolate");
const ws_1 = require("./ws");
exports.PositionalArrow = shape_1.recurse(() => ws_1.WsArrow.named("before")
    .extend("expr", expression_1.ExpressionArrow)
    .ifOk(({ before, expr }) => ast.extendNode(expr, { before }))
    .atomic()
    .repeat()
    .andThen(assertPresent())
    .ifOk(out => ast.positional(out, { span: span_1.range(...out) }))
    .label("Positional"));
exports.NamedArgumentArrow = shape_1.recurse(() => shape_1.ParserArrow.start()
    .token("Identifier" /* Identifier */)
    .named("id")
    .extend("eq", shape_1.ParserArrow.start().token("Eq" /* Eq */))
    .extend("expr", expression_1.ExpressionArrow)
    .extend("trailingWS", ws_1.MaybeWsArrow.fallible())
    .ifOk(({ id, expr, trailingWS }) => ast.namedArg({ name: id, value: expr }, {
    span: span_1.range(id, expr),
    after: trailingWS || undefined,
}))
    .label("NamedArgument"));
function assertPresent() {
    return shape_1.ParserArrow.start().lift(list => list.length > 0 ? shape_1.parseOk(list) : shape_1.parseErr("unknown", { type: "empty" }));
}
exports.NamedArgumentsArrow = ws_1.WsArrow.named("leadingWS")
    .extend("args", exports.NamedArgumentArrow.repeat().andThen(assertPresent()))
    .atomic()
    .ifOk(({ leadingWS, args }) => ast.namedArgs(args, { span: span_1.range(...args), before: leadingWS }))
    .label("NamedArguments");
exports.CallBodyArrow = shape_1.recurse(() => ws_1.MaybeWsArrow.fallible()
    .named("before")
    .extend("head", interpolate_1.HeadArrow)
    .extend("positional", exports.PositionalArrow.or(null).fallible())
    .extend("named", exports.NamedArgumentsArrow.or(null).fallible())
    .extend("after", ws_1.MaybeWsArrow.fallible())
    .ifOk(({ before, after, head, positional, named }) => ast.callBody({ head, positional, named }, {
    span: span_1.range(head, positional, named),
    before,
    after,
}))
    .label("CallBody"));
