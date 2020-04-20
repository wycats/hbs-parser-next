"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indentWS = exports.outdent = exports.indent = exports.printTrace = exports.getTrace = exports.truncString = exports.trunc = exports.afterSnippet = exports.outputString = exports.outputStyle = exports.postInvoke = exports.preInvoke = void 0;
const logger_1 = require("./logger");
const ERROR = "color: red";
const SUCCESS = "color: green";
const NORMAL = "color: #333";
const OPTIONAL = "color: #999";
let childStack = [];
let root;
function preInvoke({ combinator, snippet, optional, }) {
    let child = {
        combinator,
        preSnippet: snippet,
        optional,
        children: [],
    };
    if (childStack.length !== 0) {
        let last = childStack[childStack.length - 1];
        last.children.push(child);
    }
    childStack.push(child);
}
exports.preInvoke = preInvoke;
function postInvoke(result) {
    let last = childStack[childStack.length - 1];
    last.output = result;
    let row = childStack.pop();
    if (childStack.length === 0) {
        root = row;
    }
}
exports.postInvoke = postInvoke;
function outputStyle({ output, optional }, weight) {
    if (output === undefined) {
        throw new Error(`assert: unexpected undefined output (should be a result)`);
    }
    switch (output.kind) {
        case "ok":
            return `${SUCCESS};${weight}`;
        case "err": {
            if (optional) {
                return OPTIONAL;
            }
            else {
                return `${ERROR};${weight}`;
            }
        }
    }
}
exports.outputStyle = outputStyle;
function outputString(output) {
    if (output === undefined) {
        throw new Error(`assert: unexpected undefined output (should be a result)`);
    }
    switch (output.kind) {
        case "ok":
            return `${logger_1.formatDebuggable(output.value[1])}%c`;
        case "err":
            return `${output.fatal ? "fatal " : ""}error: ${output.reason} %c@ ${output.snippet.fmt()}`;
    }
}
exports.outputString = outputString;
function afterSnippet(output) {
    if (output === undefined) {
        throw new Error(`assert: unexpected undefined output (should be a result)`);
    }
    switch (output.kind) {
        case "ok":
            return output.value[0];
        case "err":
            return output.snippet;
    }
}
exports.afterSnippet = afterSnippet;
function trunc(snippet) {
    let rest = snippet.sliceRest;
    if (rest.length > 13) {
        return `${rest.slice(0, 10)}...`;
    }
    else {
        return rest.padEnd(13);
    }
}
exports.trunc = trunc;
function truncString(snippet, length = 13) {
    if (snippet.length > length) {
        return `${snippet.slice(0, length - 3)}...`;
    }
    else {
        return snippet.padEnd(length);
    }
}
exports.truncString = truncString;
function getTrace() {
    let current = root;
    if (current === undefined) {
        throw new Error(`attempting to get the trace, but none was recorded`);
    }
    root = undefined;
    return current;
}
exports.getTrace = getTrace;
function printTrace(indent = 0, nestedError = 0, parentStatus, row = getTrace()) {
    if (row === undefined) {
        // tslint:disable-next-line:no-console
        console.log(`%cassert: unexpected undefined row`, ERROR);
        return;
    }
    let context = row.combinator.name;
    let afterPad = Math.max(60 - indent - context.length - nestedError, 0);
    let inErrorHere = row.output &&
        row.output.kind === "err" &&
        row.children.length > 0 &&
        indent !== 0;
    let currentStatus;
    if (row.output && row.output.kind === "err") {
        if (row.optional) {
            currentStatus = "optional";
        }
        else {
            currentStatus = "error";
        }
    }
    else {
        currentStatus = "success";
    }
    let weight = parentStatus === currentStatus
        ? "font-weight: normal"
        : "font-weight: bold";
    if (inErrorHere) {
        // tslint:disable-next-line:no-console
        console.groupCollapsed(`${String(indent).padEnd(3)}%c${" ".repeat(indent)}%c${context}%c${" ".repeat(afterPad)}| ${trunc(row.preSnippet)} | ${trunc(afterSnippet(row.output))} | %c${outputString(row.output)}`, NORMAL, outputStyle(row, weight), NORMAL, outputStyle(row, weight), NORMAL);
        nestedError += 2;
    }
    else {
        // tslint:disable-next-line:no-console
        console.log(`${String(indent).padEnd(3)}%c${" ".repeat(indent)}%c${context}%c${" ".repeat(afterPad)}| ${trunc(row.preSnippet)} | ${trunc(afterSnippet(row.output))} | %c${outputString(row.output)}`, NORMAL, outputStyle(row, weight), NORMAL, outputStyle(row, weight), NORMAL);
    }
    for (let child of row.children) {
        printTrace(indent + 1, nestedError, currentStatus, child);
    }
    if (inErrorHere) {
        console.groupEnd();
    }
}
exports.printTrace = printTrace;
let TAB = 0;
function indent() {
    TAB += 1;
}
exports.indent = indent;
function outdent() {
    TAB -= 1;
}
exports.outdent = outdent;
function indentWS() {
    return " ".repeat(TAB);
}
exports.indentWS = indentWS;
