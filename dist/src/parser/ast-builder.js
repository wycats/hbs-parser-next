"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast = __importStar(require("./nodes"));
const b = __importStar(require("../read/token-builder"));
const span_1 = require("../span");
const token_builder_1 = require("../read/token-builder");
class AstBuilder {
    constructor(pos = 0) {
        this.pos = pos;
        this.output = "";
        this.tokenBuilder = new token_builder_1.TokenBuilder();
    }
    consume(chars) {
        this.output += chars;
        let start = this.pos;
        this.pos += chars.length;
        return { start, end: this.pos };
    }
    token(token) {
        this.tokenBuilder.pos = this.pos;
        this.tokenBuilder.updateOutput(this.output);
        let built = token(this.tokenBuilder);
        this.pos = this.tokenBuilder.pos;
        this.output = this.tokenBuilder.source;
        return built;
    }
    get source() {
        return this.output;
    }
}
exports.default = AstBuilder;
function text(chars) {
    return builder => ast.text(builder.token(b.text(chars)));
}
exports.text = text;
function interpolate(head, positional, named) {
    return builder => {
        let start = builder.pos;
        builder.consume("{{");
        let headNode = head(builder);
        let positionalNodes = positional && positional.map(p => p(builder));
        let namedNode = named && named(builder);
        builder.consume("}}");
        let end = builder.pos;
        return ast.interpolate({ head: headNode, positional: positionalNodes, named: namedNode }, { start, end });
    };
}
exports.interpolate = interpolate;
function call(head, positional, named) {
    return builder => {
        let start = builder.pos;
        builder.consume("(");
        let startInner = builder.pos;
        let headNode = head(builder);
        let positionalNodes = positional && positional.map(p => p(builder));
        let namedNode = named && named(builder);
        let endInner = builder.pos;
        builder.consume(")");
        let end = builder.pos;
        return ast.call(ast.callBody({
            head: headNode,
            positional: positionalNodes,
            named: namedNode,
        }, { start: startInner, end: endInner }), { start, end });
    };
}
exports.call = call;
function varRef(name) {
    return builder => ast.varReference(builder.token(b.id(name)));
}
exports.varRef = varRef;
/**
 *
 * @param body the outer contents of the string (like `"hello"`)
 */
function str(body) {
    return builder => {
        let tok = builder.token(b.str(body));
        return ast.string(tok, builder.source);
    };
}
exports.str = str;
function int(body) {
    return builder => {
        let tok = builder.token(b.int(body));
        return ast.number(tok, builder.source);
    };
}
exports.int = int;
function decimal(body) {
    return builder => {
        let tok = builder.token(b.decimal(body));
        return ast.number(tok, builder.source);
    };
}
exports.decimal = decimal;
function root(...children) {
    let builder = new AstBuilder();
    let start = builder.pos;
    let out = children.map(child => child(builder));
    let end = builder.pos;
    return { root: ast.root(out, span_1.span(start, end)), source: builder.source };
}
exports.root = root;
