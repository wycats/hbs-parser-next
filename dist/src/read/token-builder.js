import * as tokens from "./tokens";
import { range, span } from "../span";
import { unwrap } from "./utils";
export function buildPresentTokens(tok, builder) {
    return tok.map(token => token(builder));
}
export function str(name) {
    return builder => {
        let start = builder.consume(name[0]);
        let data = builder.consume(name.slice(1, -1));
        let end = builder.consume(name.slice(-1));
        let quote = name[0] === `'` ? 0 /* Single */ : 1 /* Double */;
        return tokens.stringToken({ data, quote }, range(start, end));
    };
}
export function int(num) {
    if (num[0] === "-") {
        return builder => {
            let negative = builder.consume("-");
            let head = builder.consume(num.slice(1));
            return tokens.numberToken({ head, tail: null, negative }, range(negative, head));
        };
    }
    else {
        return builder => {
            let head = builder.consume(num);
            return tokens.numberToken({ head, tail: null, negative: null }, head);
        };
    }
}
export function decimal(num) {
    let [, negative, head, tail] = unwrap(num.match(/^(-?)([0-9]+)\.([0-9]+)$/));
    return builder => {
        let negativeSpan = negative ? builder.consume("-") : null;
        let headSpan = builder.consume(head);
        let tailSpan = null;
        if (tail) {
            builder.consume(".");
            tailSpan = builder.consume(tail);
        }
        return tokens.numberToken({
            head: headSpan,
            tail: tailSpan,
            negative: negativeSpan,
        }, range(negativeSpan, headSpan, tailSpan));
    };
}
export function id(name) {
    return builder => tokens.id(builder.consume(name));
}
export function arg(name) {
    return builder => tokens.arg(builder.consume(name));
}
export const dot = builder => tokens.dot(builder.consume("."));
export const eq = builder => tokens.eq(builder.consume("="));
export const sp = builder => tokens.ws(builder.consume(" "));
export function ws(space) {
    return builder => tokens.ws(builder.consume(space));
}
export function block(name, head, ...body) {
    let curriedName = typeof name === "string" ? [id(name)] : name;
    return builder => {
        let openToken = builder.consume("{{#");
        let nameTokens = buildTokens(curriedName, builder);
        let headTokens = buildTokens(head, builder);
        let endOpen = builder.consume("}}");
        let bodyTokens = body.map(tok => tok(builder));
        let close = builder.consume("{{/");
        let closeName = buildTokens(curriedName, builder);
        let endClose = builder.consume("}}");
        return tokens.block({
            open: tokens.openBlock({
                name: nameTokens,
                head: headTokens,
            }, range(openToken, endOpen)),
            body: bodyTokens,
            close: tokens.closeBlock(closeName, range(close, endClose)),
        });
    };
}
export function as(...params) {
    return builder => {
        let start = builder.consume("as |");
        let head = params.slice(0, -1);
        let tail = params.slice(-1)[0];
        let tokenList = head.flatMap(param => typeof param === "function"
            ? [param(builder)]
            : [id(param)(builder), sp(builder)]);
        tokenList.push(id(tail)(builder));
        let end = builder.consume("|");
        return tokens.blockParams(tokenList, range(start, end));
    };
}
function buildTokens(input, builder) {
    return input.map(tok => tok(builder));
}
export function interpolate(...children) {
    return builder => {
        let open = builder.consume("{{");
        let out = children.map(child => child(builder));
        let close = builder.consume("}}");
        return tokens.interpolate(out, range(open, close));
    };
}
export function stringInterpolate(children, quote) {
    return builder => {
        let open = builder.consume(quote);
        let out = children.map(child => child(builder));
        let close = builder.consume(quote);
        return tokens.attrValue({
            type: quoteType(quote),
            value: tokens.stringInterpolation(out, range(...out)),
        }, range(open, close));
    };
}
export function attrInterpolate(...tokenList) {
    return builder => {
        let value = interpolate(...tokenList)(builder);
        return tokens.attrValue({
            type: "Interpolate" /* Interpolate */,
            value,
        }, value.span);
    };
}
export function sexp(children) {
    return builder => {
        let open = builder.consume("(");
        let innerStart = builder.pos;
        let out = children.map(child => child(builder));
        let innerEnd = builder.pos;
        let close = builder.consume(")");
        return tokens.sexp({ children: out, inner: span(innerStart, innerEnd) }, range(open, close));
    };
}
export function text(chars) {
    return builder => {
        let out = builder.consume(chars);
        return tokens.text(out);
    };
}
export function comment(chars) {
    return builder => {
        let start = builder.consume("<!--");
        let data = builder.consume(chars);
        let end = builder.consume("-->");
        return tokens.comment(data, range(start, end));
    };
}
function isTagName(input) {
    return (typeof input === "string" ||
        Array.isArray(input) ||
        typeof input === "function");
}
function buildTagName(name) {
    if (Array.isArray(name)) {
        let toks = [];
        for (let part of name) {
            if (typeof part === "function") {
                toks.push(part);
            }
            else {
                switch (part[0]) {
                    case "@":
                        toks.push(arg(part));
                        break;
                    default:
                        toks.push(id(part));
                }
            }
        }
        return toks;
    }
    else {
        if (typeof name === "function") {
            return [name];
        }
        else {
            switch (name[0]) {
                case "@":
                    return [arg(name)];
                default:
                    return [id(name)];
            }
        }
    }
}
export function startTag(options) {
    if (isTagName(options)) {
        return builder => {
            let start = builder.consume("<");
            let nameTokens = buildPresentTokens(buildTagName(options), builder);
            let end = builder.consume(">");
            return tokens.startTag({ name: nameTokens }, range(start, end));
        };
    }
    else {
        return builder => {
            let { name, attrs, selfClosing } = options;
            let start = builder.consume("<");
            let nameTokens = buildPresentTokens(buildTagName(name), builder);
            let children = attrs.map(a => a(builder));
            if (selfClosing) {
                builder.consume("/");
            }
            let end = builder.consume(">");
            return tokens.startTag({ name: nameTokens, attrs: children, selfClosing }, range(start, end));
        };
    }
}
export function endTag(options) {
    let tagName = isTagName(options) ? options : options.name;
    let trailing = isTagName(options) ? undefined : options.trailing;
    return builder => {
        let start = builder.consume("</");
        let tagTokens = buildPresentTokens(buildTagName(tagName), builder);
        let trailingToken = trailing ? ws(trailing)(builder) : undefined;
        let end = builder.consume(">");
        return tokens.endTag({ name: tagTokens, trailing: trailingToken }, range(start, end));
    };
}
export function argName(name) {
    return builder => {
        let startSpan = builder.consume(name[0]);
        let nameSpan = builder.consume(name.slice(1));
        return tokens.argName(nameSpan, range(startSpan, nameSpan));
    };
}
export function attr(options) {
    if (typeof options === "string") {
        return builder => {
            let nameSpan = builder.consume(options);
            return tokens.attrName(nameSpan);
        };
    }
    else if (typeof options === "function") {
        return options;
    }
    else {
        return builder => {
            let { name, value: rawValue } = options;
            let start = builder.pos;
            let nameToken = typeof name === "string"
                ? tokens.attrName(builder.consume(name))
                : name(builder);
            builder.consume("=");
            let valueToken;
            if (typeof rawValue === "string") {
                switch (rawValue[0]) {
                    case `"`: {
                        let quoteStart = builder.consume(`"`);
                        let valueSpan = builder.consume(rawValue.slice(1, -1));
                        let quoteEnd = builder.consume(`"`);
                        let interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "DoubleQuoted" /* DoubleQuoted */,
                            value: interpolation,
                        }, range(quoteStart, quoteEnd));
                        break;
                    }
                    case `'`: {
                        let quoteStart = builder.consume(`'`);
                        let valueSpan = builder.consume(rawValue.slice(1, -1));
                        let quoteEnd = builder.consume(`'`);
                        let interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "SingleQuoted" /* SingleQuoted */,
                            value: interpolation,
                        }, range(quoteStart, quoteEnd));
                        break;
                    }
                    default: {
                        let valueSpan = builder.consume(rawValue);
                        let interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "Unquoted" /* Unquoted */,
                            value: interpolation,
                        }, valueSpan);
                    }
                }
            }
            else {
                valueToken = rawValue(builder);
            }
            let end = builder.pos;
            return tokens.valuedAttr({ name: nameToken, value: valueToken }, span(start, end));
        };
    }
}
function quoteType(quote) {
    switch (quote) {
        case `"`:
            return "DoubleQuoted" /* DoubleQuoted */;
        case `'`:
            return "SingleQuoted" /* SingleQuoted */;
        default:
            return "Unquoted" /* Unquoted */;
    }
}
export class TokenBuilder {
    constructor(pos = 0) {
        this.pos = pos;
        this.output = "";
    }
    consume(chars) {
        this.output += chars;
        let start = this.pos;
        this.pos += chars.length;
        return span(start, this.pos);
    }
    /**
     * This method is used by the AstBuilder to share an output
     */
    updateOutput(output) {
        this.output = output;
    }
    get source() {
        return this.output;
    }
}
export function root(...children) {
    let builder = new TokenBuilder();
    let start = builder.pos;
    let out = children.map(child => child(builder));
    let end = builder.pos;
    return { root: tokens.root(out, span(start, end)), source: builder.source };
}
