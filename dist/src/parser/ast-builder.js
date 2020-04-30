import * as a from "./create-node";
import * as b from "../read/token-builder";
import { span, range } from "../span";
import { TokenBuilder } from "../read/token-builder";
export default class AstBuilder {
    constructor(pos = 0) {
        this.pos = pos;
        this.output = "";
        this.tokenBuilder = new TokenBuilder();
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
export function text(chars) {
    return builder => a.text(builder.token(b.text(chars)));
}
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
            args.push(a.namedArg({ name, value: expr }, { span: range(name, expr), after }));
        }
        return a.namedArgs(args, { span: range(...args), before: leading });
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
        return a.positional(args, {
            span: { start, end },
            ...(currentWS ? { after: currentWS } : {}),
        });
    };
}
export function block(parts) {
    let { head } = extractCallParts(...parts);
    let openBlock = callBody(...parts);
    return builder => {
        let openStart = builder.consume(`{{#`);
        let open = openBlock(builder);
        let openEnd = builder.consume("}}");
        let closeStart = builder.consume(`{{/`);
        let closeHead = head(builder);
        let closeEnd = builder.consume(`}}`);
        return a.block({
            open: a.openBlock({ ...open }, { span: range(openStart, openEnd) }),
            body: [],
            close: a.closeBlock(closeHead.span, {
                span: range(closeStart, closeEnd),
            }),
        }, { span: range(openStart, closeEnd) });
    };
}
export function interpolate(...parts) {
    return builder => {
        let start = builder.pos;
        builder.consume("{{");
        let body = callBody(...parts)(builder);
        builder.consume("}}");
        let end = builder.pos;
        return a.interpolate(body, { span: { start, end } });
    };
}
function assert(input, cb) {
    let success = typeof cb === "function" ? cb(input) : !!input;
    if (success === false) {
        throw new Error(`ASSERT`);
    }
}
export function call(...parts) {
    return builder => {
        let start = builder.pos;
        builder.consume("(");
        let body = callBody(...parts)(builder);
        builder.consume(")");
        let end = builder.pos;
        return a.call(body, { span: { start, end } });
    };
}
function callBody(...parts) {
    return builder => {
        let { beforeWS, afterWS, head, positional, named } = extractCallParts(...parts);
        let before = beforeWS && builder.token(beforeWS);
        let headNode = head(builder);
        let positionalNodes = positional && positional(builder);
        let namedNode = named && named(builder);
        let after = afterWS && builder.token(afterWS);
        return a.callBody({
            head: headNode,
            positional: positionalNodes,
            named: namedNode,
        }, { span: range(headNode, positionalNodes, namedNode), before, after });
    };
}
/**
 * This function turns a string into the appropriate token typ:
 *
 * - `this` -> ThisReferenceToken
 * - `@` ID -> ArgReferenceToken
 * - ID -> VarReferenceToken
 */
export function ref(name) {
    return builder => {
        if (name === "this") {
            return a.thisReference(builder.token(b.id("this")));
        }
        else if (name.startsWith("@")) {
            return a.argReference(builder.token(b.arg(name)));
        }
        else {
            return a.varReference(builder.token(b.id(name)));
        }
    };
}
export function path(curriedHead, ...tailParts) {
    return builder => {
        let start = builder.pos;
        let head = normalizeExpr(curriedHead)(builder);
        let splitTail = tailParts.length === 1 ? tailParts[0].split(".") : tailParts;
        let tail = splitTail.map(part => {
            return member(part)(builder);
        });
        let end = builder.pos;
        return a.path({ head, tail }, { start, end });
    };
}
export function member(part) {
    return builder => {
        let dot = builder.token(b.dot);
        let span = builder.consume(part);
        return a.member(dot, span);
    };
}
/**
 *
 * @param body the outer contents of the string (like `"hello"`)
 */
export function str(body) {
    return builder => {
        let tok = builder.token(b.str(body));
        return a.string(tok, builder.source);
    };
}
export function int(body) {
    return builder => {
        let tok = builder.token(b.int(body));
        return a.number(tok, builder.source);
    };
}
export function decimal(body) {
    return builder => {
        let tok = builder.token(b.decimal(body));
        return a.number(tok, builder.source);
    };
}
export function root(...children) {
    let builder = new AstBuilder();
    let start = builder.pos;
    let out = children.map(child => child(builder));
    let end = builder.pos;
    return { root: a.root(out, span(start, end)), source: builder.source };
}
