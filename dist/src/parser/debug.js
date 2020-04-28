import { truncString } from "../read/debug";
import { unwrap } from "../read/utils";
import { slice } from "../span";
import { formatAstNode } from "./nodes";
import { isParseErr } from "./shape";
export class ParseTracer {
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
        this.stackCheck("begin");
    }
    rollback() {
        let last = this.stackCheck("begin");
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
        let last = this.stackCheck(shape.desc);
        last.result = result;
        last.postToken = postToken;
    }
    stackCheck(expected) {
        let last = unwrap(this.stack.pop());
        if (last.shape.desc !== expected) {
            console.warn("unbalanced stack", "stack =", this.stack.map(s => s.shape.desc), "last =", last.shape.desc, "expected =", expected);
            throw new Error(`ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=${expected}`);
        }
        return last;
    }
    postInvokeFailure(shape, reason) {
        let last = this.stackCheck(shape.desc);
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
        console.log(`%c| ${this.preSlice} | ${truncString(this.details, 80)} | ${this.postSlice}`, NORMAL, NORMAL, this.descStyle, DIM);
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
            return truncString(slice({ start: span.start, end: this.source.length }, this.source), length);
        }
        else {
            return truncString("<eof>");
        }
    }
    get formattedResult() {
        return formatResult(this.trace.result);
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
function formatResult(result) {
    if (typeof result !== "object" || result === null) {
        return String(result);
    }
    else if (Array.isArray(result)) {
        if (result.length > 3) {
            return `[${result.slice(0, 2).map(formatResult).join(", ")}...]`;
        }
        else {
            return `[${result.map(formatResult).join(", ")}]`;
        }
    }
    else if (isResult(result)) {
        if (isParseErr(result)) {
            return formatReason(result.reason);
        }
        else {
            return formatResult(result.value);
        }
    }
    else if (isNodeish(result)) {
        return formatAstNode(result);
    }
    else {
        console.log("not debuggable", result);
        return result + "";
    }
}
function formatReason(reason) {
    switch (reason.type) {
        case "empty":
            return `empty`;
        case "lookahead":
            return `lookahead was ${formatToken(reason.actual)}, expected ${reason.expected}`;
        case "mismatch":
            return `expected ${formatToken(reason.actual)}, got ${reason.expected}`;
        case "not":
            return `expected not ${formatResult(reason.result)}`;
        case "rejected":
            return `rejected ${formatToken(reason.token)}`;
        case "unexpected-eof":
            return `unexpected eof`;
    }
}
function formatToken(token) {
    if (token === "EOF") {
        return "EOF";
    }
    else {
        return token.type;
    }
}
function isNodeish(item) {
    if (typeof item === "object" && item !== null) {
        let obj = item;
        return ("type" in obj &&
            typeof obj.type === "string" &&
            typeof obj.span === "object" &&
            obj.span !== null &&
            typeof obj.span.start === "number" &&
            typeof obj.span.end === "number");
    }
    else {
        return false;
    }
}
function isResult(item) {
    if (typeof item === "object" && item !== null) {
        let obj = item;
        return ("kind" in obj && obj.kind === "ok") || obj.kind === "err";
    }
    else {
        return false;
    }
}
