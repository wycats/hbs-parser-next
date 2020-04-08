"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const utils_1 = require("./utils");
let table = [];
function row({ result, arrow, combinator, context, }, a, b) {
    let name = utils_1.combinatorName(combinator);
    if (context) {
        name = `${context}: ${name}`;
    }
    table.push({
        style: { result, kind: logger_1.combinatorDebugType(combinator) },
        data: [arrow, name, a, b],
    });
}
exports.row = row;
function snippetStyle(style) {
    switch (style.result) {
        case "start":
            return "color: #333";
        case "success":
            return "color: green";
        case "error":
            return "color: red";
    }
}
exports.snippetStyle = snippetStyle;
function armStyle(style) {
    switch (style.result) {
        case "start":
            switch (style.kind) {
                case "transparent":
                case "arm":
                    return "color: #bbb";
                case "normal":
                    return "color: #333";
            }
        case "success":
            return "color: green";
        case "error":
            return "color: red";
    }
}
exports.armStyle = armStyle;
function printDebug() {
    for (let { style, data: [arrow, name, a, b], } of table) {
        let first = `${arrow} %c${name}%c`.padEnd(60);
        // tslint:disable-next-line:no-console
        console.log(`${first} | %c${b}%c |`, armStyle(style), "color: #333", snippetStyle(style), "color: #333", a);
    }
    table = [];
}
exports.printDebug = printDebug;
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
