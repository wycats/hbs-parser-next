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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast = __importStar(require("./nodes"));
const block_body_1 = __importDefault(require("./shapes/block-body"));
const tokens_iterator_1 = __importStar(require("./tokens-iterator"));
const shape_1 = require("./shape");
require("../read/read");
const debug_1 = require("./debug");
function parse({ input, source, logging, }) {
    let tracer = new debug_1.ParseTracer(input);
    let iterator = new tokens_iterator_1.default(input.children, {
        source,
        tracer,
    });
    try {
        let topLevel = new block_body_1.default();
        let root = iterator.start(tokens_iterator_1.expandInfallible(topLevel));
        let maybeEOF = iterator.peek("eof");
        if (maybeEOF.isEOF) {
            maybeEOF.commit();
            return shape_1.ok(ast.root(root, {
                start: 0,
                end: source.length,
            }));
        }
        else {
            return shape_1.err(maybeEOF.reject().token, "incomplete");
        }
    }
    finally {
        if (logging === "Print" /* Print */) {
            tracer.print(iterator[tokens_iterator_1.TOKENS], iterator.source);
        }
    }
}
exports.default = parse;
