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
exports.root = exports.decimal = exports.int = exports.str = exports.member = exports.path = exports.ref = exports.call = exports.interpolate = exports.block = exports.text = void 0;
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
function normalizeExpr(expr) {
    if (typeof expr === "string") {
        return ref(expr);
    }
    else {
        return expr;
    }
}
function normalizeCallPart(part) {
    if (typeof part === "string" && part.match(/^\s+$/)) {
        return {
            type: "ws",
            value: part,
        };
    }
    else {
        return { type: "expr", value: normalizeExpr(part) };
    }
}
function extractCallParts(...parts) {
    let head;
    let beforeWS;
    let afterWS;
    let positional;
    let named;
    for (const part of parts) {
        if (Array.isArray(part)) {
            if (positional) {
                throw new Error(`ASSERT: only pass one array (positional) to interpolate`);
            }
            else {
                positional = curriedPositional(...part);
            }
        }
        else if (typeof part === "object") {
            if (named) {
                throw new Error(`ASSERT: only pass one object (named) to interpolate`);
            }
            else {
                named = curriedNamed(part);
            }
        }
        else if (typeof part === "function") {
            if (head) {
                throw new Error(`ASSERT: only pass one head (expression or string) to interpolate`);
            }
            else {
                head = part;
            }
        }
        else if (part.match(/^\s*$/)) {
            if (beforeWS && afterWS) {
                throw new Error(`ASSERT: pass at most two whitespace to interpolate`);
            }
            else if (beforeWS) {
                afterWS = b.ws(part);
            }
            else {
                beforeWS = b.ws(part);
            }
        }
        else {
            if (head) {
                throw new Error(`ASSERT: only pass one head (expression or string) to interpolate`);
            }
            head = ref(part);
        }
    }
    assert(head);
    return { beforeWS, head, positional, named, afterWS };
}
function curriedNamed(obj) {
    return builder => {
        let args = [];
        let leading = builder.token(b.ws(" "));
        for (let [key, value] of Object.entries(obj)) {
            let after = undefined;
            let name = builder.token(b.id(key));
            let expr;
            builder.token(b.eq);
            if (Array.isArray(value)) {
                expr = normalizeExpr(value[0])(builder);
                after = builder.token(b.ws(value[1]));
            }
            else {
                expr = normalizeExpr(value)(builder);
            }
            args.push(ast.namedArg({ name, value: expr }, { span: span_1.range(name, expr), after }));
        }
        return ast.namedArgs(args, { span: span_1.range(...args), before: leading });
    };
}
function curriedPositional(...parts) {
    return builder => {
        let args = [];
        let [first, ...rest] = parts;
        let currentWS = builder.token(b.ws(first));
        let start = builder.pos;
        for (let part of rest) {
            let result = normalizeCallPart(part);
            switch (result.type) {
                case "expr": {
                    let node = normalizeExpr(part)(builder);
                    if (currentWS) {
                        node.before = currentWS;
                        currentWS = undefined;
                    }
                    args.push(node);
                    break;
                }
                case "ws":
                    currentWS = builder.token(b.ws(result.value));
            }
        }
        let end = builder.pos;
        return ast.positional(args, {
            span: { start, end },
            ...(currentWS ? { after: currentWS } : {}),
        });
    };
}
function block(parts) {
    let { head } = extractCallParts(...parts);
    let openBlock = callBody(...parts);
    return builder => {
        let openStart = builder.consume(`{{#`);
        let open = openBlock(builder);
        let openEnd = builder.consume("}}");
        let closeStart = builder.consume(`{{/`);
        let closeHead = head(builder);
        let closeEnd = builder.consume(`}}`);
        return ast.block({
            open: ast.openBlock({ ...open }, { span: span_1.range(openStart, openEnd) }),
            body: [],
            close: ast.closeBlock(closeHead.span, {
                span: span_1.range(closeStart, closeEnd),
            }),
        }, { span: span_1.range(openStart, closeEnd) });
    };
}
exports.block = block;
function interpolate(...parts) {
    return builder => {
        let start = builder.pos;
        builder.consume("{{");
        let body = callBody(...parts)(builder);
        builder.consume("}}");
        let end = builder.pos;
        return ast.interpolate(body, { span: { start, end } });
    };
}
exports.interpolate = interpolate;
function assert(input, cb) {
    let success = typeof cb === "function" ? cb(input) : !!input;
    if (success === false) {
        throw new Error(`ASSERT`);
    }
}
function call(...parts) {
    return builder => {
        let start = builder.pos;
        builder.consume("(");
        let body = callBody(...parts)(builder);
        builder.consume(")");
        let end = builder.pos;
        return ast.call(body, { span: { start, end } });
    };
}
exports.call = call;
function callBody(...parts) {
    return builder => {
        let { beforeWS, afterWS, head, positional, named } = extractCallParts(...parts);
        let before = beforeWS && builder.token(beforeWS);
        let headNode = head(builder);
        let positionalNodes = positional && positional(builder);
        let namedNode = named && named(builder);
        let after = afterWS && builder.token(afterWS);
        return ast.callBody({
            head: headNode,
            positional: positionalNodes,
            named: namedNode,
        }, { span: span_1.range(headNode, positionalNodes, namedNode), before, after });
    };
}
/**
 * This function turns a string into the appropriate token typ:
 *
 * - `this` -> ThisReferenceToken
 * - `@` ID -> ArgReferenceToken
 * - ID -> VarReferenceToken
 */
function ref(name) {
    return builder => {
        if (name === "this") {
            return ast.thisReference(builder.token(b.id("this")));
        }
        else if (name.startsWith("@")) {
            return ast.argReference(builder.token(b.arg(name)));
        }
        else {
            return ast.varReference(builder.token(b.id(name)));
        }
    };
}
exports.ref = ref;
function path(curriedHead, ...tailParts) {
    return builder => {
        let start = builder.pos;
        let head = normalizeExpr(curriedHead)(builder);
        let splitTail = tailParts.length === 1 ? tailParts[0].split(".") : tailParts;
        let tail = splitTail.map(part => {
            return member(part)(builder);
        });
        let end = builder.pos;
        return ast.path({ head, tail }, { start, end });
    };
}
exports.path = path;
function member(part) {
    return builder => {
        let dot = builder.token(b.dot);
        let span = builder.consume(part);
        return ast.member(dot, span);
    };
}
exports.member = member;
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
