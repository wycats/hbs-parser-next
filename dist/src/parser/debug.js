"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseTracer = void 0;
const debug_1 = require("../read/debug");
const utils_1 = require("../read/utils");
const span_1 = require("../span");
const nodes_1 = require("./nodes");
class ParseTracer {
    constructor(token) {
        this.stack = [
            {
                shape: { desc: "root" },
                preToken: token,
                postToken: undefined,
                result: null,
                children: [],
            },
        ];
    }
    print(tokens, source) {
        let trace = this.trace;
        new PrintTracer(trace, tokens, source).print();
    }
    get trace() {
        if (this.stack.length !== 1) {
            throw new Error(`ASSERT: can only get trace when the stack is empty`);
        }
        return this.stack[0];
    }
    begin(preToken) {
        let trace = {
            shape: { desc: "begin" },
            preToken: preToken,
            postToken: undefined,
            result: null,
            children: [],
        };
        let last = this.last;
        if (last) {
            if (last.children) {
                last.children.push(trace);
            }
            else {
                throw new Error(`ASSERT: Can't add children to leaf: ${last.shape.desc}`);
            }
        }
        this.stack.push(trace);
    }
    commit() {
        let last = utils_1.unwrap(this.stack.pop());
        if (last.shape.desc !== "begin") {
            throw new Error(`ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=begin`);
        }
    }
    rollback() {
        let last = utils_1.unwrap(this.stack.pop());
        if (last.shape.desc !== "begin") {
            throw new Error(`ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=begin`);
        }
        last.failure = "rollback";
    }
    preInvoke(shape, token) {
        let trace = {
            shape,
            preToken: token,
            postToken: undefined,
            result: null,
            children: "isLeaf" in shape && shape.isLeaf === true ? undefined : [],
        };
        let last = this.last;
        if (last) {
            if (last.children) {
                last.children.push(trace);
            }
            else {
                throw new Error(`ASSERT: Can't add children to leaf: ${last.shape.desc}`);
            }
        }
        this.stack.push(trace);
    }
    postInvoke(shape, result, postToken) {
        let last = utils_1.unwrap(this.stack.pop());
        if (last.shape.desc !== shape.desc) {
            throw new Error(`ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=${shape.desc}`);
        }
        last.result = result;
        last.postToken = postToken;
    }
    postInvokeFailure(shape, reason) {
        let last = utils_1.unwrap(this.stack.pop());
        if (last.shape.desc !== shape.desc) {
            throw new Error(`ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=${shape.desc}`);
        }
        last.result = undefined;
        last.postToken = undefined;
        last.failure = reason;
    }
    get last() {
        if (this.stack.length === 0) {
            return null;
        }
        else {
            return this.stack[this.stack.length - 1];
        }
    }
}
exports.ParseTracer = ParseTracer;
const SUCCESS = "color: green";
const ERROR = "color: red";
const TRANSACTION_SUCCESS = "background-color: #6a6; color: white; font-weight: bold";
const TRANSACTION_FAILURE = "background-color: #a66; color: white; font-weight: bold";
const NORMAL = "color: #333";
const DIM = "color: #999";
class PrintTracer {
    constructor(trace, tokens, source, indent = 0) {
        this.trace = trace;
        this.tokens = tokens;
        this.source = source;
        this.indent = indent;
    }
    print() {
        if (this.trace.shape.desc === undefined) {
            debugger;
        }
        console.log(`%c| ${this.preSlice} | ${debug_1.truncString(this.details, 60)} | ${this.postSlice}`, NORMAL, NORMAL, this.descStyle, DIM);
        if (this.trace.children) {
            for (let child of this.trace.children) {
                if (child.failure === "ignored") {
                    continue;
                }
                new PrintTracer(child, this.tokens, this.source, this.indent + 1).print();
            }
        }
    }
    get details() {
        let retval = this.trace.shape.desc === "begin" ? "" : ` 🠪 ${this.formattedResult}`;
        return `%c${" ".repeat(this.indent)}%c${this.trace.shape.desc}%c${retval}`;
    }
    get preSlice() {
        return this.slice(this.trace.preToken);
    }
    get postSlice() {
        return this.slice(this.trace.postToken, 25);
    }
    slice(token, length = 13) {
        if (token) {
            let span = token.span;
            return debug_1.truncString(span_1.slice({ start: span.start, end: this.source.length }, this.source), length);
        }
        else {
            return debug_1.truncString("<eof>");
        }
    }
    get formattedResult() {
        let result = this.trace.result;
        if (isResult(result)) {
            if (result.kind === "err") {
                return `ERR reason=${result.reason}`;
            }
            else {
                if (isNodeish(result.value)) {
                    return nodes_1.formatAstNode(result.value);
                }
                else {
                    return this.trace.result + "";
                }
            }
        }
        else if (isNodeish(result)) {
            return nodes_1.formatAstNode(result);
        }
        else {
            return this.trace.result + "";
        }
    }
    get descStyle() {
        let result = this.trace.result;
        if (isResult(result)) {
            if (result.kind === "ok") {
                return SUCCESS;
            }
            else {
                return ERROR;
            }
        }
        else if (this.trace.failure === "rollback") {
            return TRANSACTION_FAILURE;
        }
        else if (this.trace.shape.desc === "begin") {
            return TRANSACTION_SUCCESS;
        }
        else {
            return SUCCESS;
        }
    }
}
function isNodeish(item) {
    if (typeof item === "object" && item !== null) {
        return ("type" in item &&
            typeof item.type === "string" &&
            typeof item.span === "object" &&
            item.span !== null &&
            typeof item.span.start === "number" &&
            typeof item.span.end === "number");
    }
    else {
        return false;
    }
}
function isResult(item) {
    if (typeof item === "object" && item !== null) {
        return ("kind" in item && item.kind === "ok") || item.kind === "err";
    }
    else {
        return false;
    }
}
