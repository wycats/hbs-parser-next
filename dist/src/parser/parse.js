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
const __1 = require("..");
require("../read/read");
const debug_1 = require("./debug");
const ast = __importStar(require("./nodes"));
const shape_1 = require("./shape");
const top_level_1 = require("./shapes/top-level");
const tokens_iterator_1 = __importStar(require("./tokens-iterator"));
function parse({ input, source, logging, }) {
    let tracer = new debug_1.ParseTracer(input);
    let iterator = new tokens_iterator_1.default(input.children, {
        source,
        tracer,
    });
    try {
        let topLevel = top_level_1.TopLevelArrow.repeat()
            .fallible()
            .checkNext(shape_1.ParserArrow.start().eof())
            .ifOk(nodes => ast.root(nodes, __1.range(...nodes)))
            .label("root");
        let state = iterator.arrowState;
        let [, root] = topLevel.invoke(state);
        return root;
    }
    finally {
        if (logging === "Print" /* Print */) {
            tracer.print(iterator[tokens_iterator_1.TOKENS], iterator.source);
        }
    }
}
exports.default = parse;
