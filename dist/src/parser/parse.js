"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast = __importStar(require("./nodes"));
const block_body_1 = __importDefault(require("./shapes/block-body"));
const tokens_iterator_1 = __importDefault(require("./tokens-iterator"));
const shape_1 = require("./shape");
function parse(input, source) {
    let iterator = new tokens_iterator_1.default(input.children, { source });
    let topLevel = new block_body_1.default();
    let root = topLevel.expandInfallible(iterator);
    if (iterator.peek().isEOF) {
        return shape_1.ok(ast.root(root, {
            start: 0,
            end: source.length,
        }));
    }
    else {
        return shape_1.err(iterator.peek(), "incomplete");
    }
}
exports.default = parse;
