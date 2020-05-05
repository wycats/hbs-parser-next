import { baseErr as err, baseOk as ok, FORMAT, ops, SNAPSHOT, StatefulEvaluatorImpl, span, SOURCE_FORMAT, formatUnknown, range, } from "hbs-parser-next";
import { STATE, step, TraceBuilder, TracedEvaluator, VOID, steps, } from "../tracer";
export class LeafToken {
    constructor(type, span) {
        this.type = type;
        this.span = span;
    }
    [SOURCE_FORMAT](source) {
        return {
            type: "raw",
            value: `<Token:${this.type} ${this.span.slice(source)}>`,
        };
    }
    [SNAPSHOT]() {
        return this;
    }
}
export class NestedToken {
    constructor(type, children) {
        this.type = type;
        this.children = children;
    }
    get span() {
        let first = this.children[0];
        let last = this.children[this.children.length - 1];
        return range(first, last);
    }
    [SOURCE_FORMAT](source, nesting) {
        if (nesting !== undefined) {
            let children = this.children
                .map(c => " ".repeat(nesting) + formatUnknown(c, source, nesting + 2))
                .join(`\n`);
            return {
                type: "raw",
                value: `<Token:${this.type}>\n${children}\n${" ".repeat(nesting - 2)}</Token:${this.type}>`,
            };
        }
        else {
            let children = this.children
                .map(c => formatUnknown(c, source, undefined))
                .join(` `);
            return {
                type: "raw",
                value: `<Token:${this.type}>${children}</Token:${this.type}>`,
            };
        }
    }
    [SNAPSHOT]() {
        return this;
    }
}
export function leafTok(type) {
    return span => new LeafToken(type, span);
}
export function tok(chars, tokenType) {
    return computed(chars, leafTok(tokenType));
}
export const ERR = err("mismatch");
export const takeInt = ops.mapResult(fromState(state => state.parser.tryMatch(/^\d+/), "int?"), ops.pure(span => ok(leafTok("Number" /* Number */)(span)), "to-token"), ops.id("propagate-err"));
export function keyword(type, chars, label) {
    let token = exact(chars, label || chars);
    return ops.mapResult(token, ops.pure(span => ok(leafTok(type)(span)), "to-token"), ops.id("propagate-err"), label);
}
export const takePlus = keyword("Plus" /* Plus */, "+");
export const takeWS = fromState(state => state.parser.match(/^\s+/), "ws?");
export const maybeWS = fallible(takeWS);
export const takeParens = recurse(() => ops.mapResult(ops.allOk([
    keyword("OpenParen" /* OpenParen */, "(", "open-paren"),
    maybeWS,
    takeSum,
    maybeWS,
    keyword("CloseParen" /* CloseParen */, ")", "close-paren"),
], "parens"), ops.pure(tokens => ok(new NestedToken("Parens" /* Parens */, tokens))), ops.id(), "parens"));
export const takeExpr = ops.firstOk(takeParens, takeInt, "expr");
export const takeSum = ops.mapResult(ops.allOk([takeExpr, maybeWS, takePlus, maybeWS, takeExpr], "sum"), ops.pure(tokens => ok(new NestedToken("Sum" /* Sum */, tokens))), ops.id(), "sum");
export function okState(label, value) {
    return steps(state(label, value), step(`Pure`, value, ok(value)), [
        `ok[${label}](Pipeline)`,
        ok(value),
    ]);
}
export function okToken(label, value) {
    return steps(state(`${label}?`, ok(value.span)), step(`to-token(Pure)`, value.span, ok(value)), ["MapResult", ok(value)]);
}
export function errState(label, reason) {
    let builder = new TraceBuilder()
        .addTraces([`Get-State: <State>`])
        .step(`${label}?(Pure)`, STATE, err(reason))
        .into({ type: "Pipeline", label: `${label}?` }, VOID, err(reason))
        .step(`propagate-err(Id)`)
        .into({ type: "MapResult", label }, VOID, err(reason));
    return steps({ type: "multiple", builder });
}
export function state(...args) {
    let out = args.length === 2 ? args[1] : args[0];
    let label = args.length === 2 ? args[0] : undefined;
    let builder = new TraceBuilder()
        .addTraces([`Get-State: <State>`])
        .step(label ? `${label}(Pure)` : "Pure", STATE, out)
        .into({ type: "Pipeline", label }, VOID, out);
    return { type: "multiple", builder };
}
export class State {
    constructor(tracer, parser) {
        this.tracer = tracer;
        this.parser = parser;
    }
    [FORMAT]() {
        return { type: "raw", value: `<State>` };
    }
    [SNAPSHOT]() {
        return this;
    }
}
export class Parser {
    constructor(source, pos = 0) {
        this.source = source;
        this.pos = pos;
    }
    tryMatch(pattern) {
        let result = this.match(pattern);
        if (result === null) {
            return err("mismatch");
        }
        else {
            return ok(result);
        }
    }
    match(pattern) {
        let start = this.pos;
        let next = this.source.slice(start);
        if (typeof pattern === "string") {
            let sliced = next.slice(0, pattern.length);
            let match = sliced === pattern;
            if (match) {
                this.pos += sliced.length;
                return span(start, this.pos);
            }
        }
        else {
            let match = next.match(pattern);
            if (match) {
                this.pos += match[0].length;
                return span(start, this.pos);
            }
        }
        return null;
    }
}
export function fromState(callback, label) {
    return ops.pipeline(ops.state(), ops.pure(callback, label), label);
}
export function fallible(arrow) {
    return ops.pipeline(arrow, ops.pure(input => ok(input)), arrow.operation.label ? `ok[${arrow.operation.label}]` : undefined);
}
export function recurse(callback) {
    return ops.Arrow.delay(callback);
}
export function exact(s, label = s) {
    return fromState(state => state.parser.tryMatch(s), `${label}?`);
}
export function parserEvaluator(source) {
    let tracer = new TracedEvaluator(source);
    let evaluator = new StatefulEvaluatorImpl(tracer);
    tracer.setInner(evaluator);
    return tracer;
}
export class SpanBuilder {
    constructor(source = "", pos = 0) {
        this.pos = pos;
        this.#output = [];
        this.#source = source;
    }
    #source;
    #output;
    get source() {
        return this.#source;
    }
    get output() {
        return this.#output;
    }
    add(s) {
        let result = s.build(this);
        this.#output.push(result);
        return this;
    }
    consume(s) {
        let start = this.pos;
        this.pos += s.length;
        this.#source += s;
        return span(start, this.pos);
    }
}
class AbstractArg {
}
class ComputedArg extends AbstractArg {
    constructor(chars, callback) {
        super();
        this.chars = chars;
        this.callback = callback;
    }
    build(builder) {
        return this.callback(builder.consume(this.chars));
    }
}
class StringArg extends AbstractArg {
    constructor(chars) {
        super();
        this.chars = chars;
    }
    build(builder) {
        return builder.consume(this.chars);
    }
}
class NullArg extends AbstractArg {
    build(_builder) {
        return null;
    }
}
class NestedArg {
    constructor(args, callback) {
        this.args = args;
        this.callback = callback;
    }
    build(builder) {
        let results = this.args.map(arg => arg.build(builder));
        return this.callback(results);
    }
}
export function computed(chars, callback) {
    return new ComputedArg(chars, callback);
}
export function chars(chars) {
    return new StringArg(chars);
}
export const NULL = new NullArg();
export function nested(args, callback) {
    return new NestedArg(args, callback);
}
export function spanned(...args) {
    let builder = new SpanBuilder();
    for (let arg of args) {
        builder.add(arg);
    }
    return builder.output;
}
export function build(arg) {
    let builder = new SpanBuilder();
    builder.add(arg);
    return builder.output[0];
}
