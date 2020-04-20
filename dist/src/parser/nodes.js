"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendNode = exports.formatAstNode = void 0;
__exportStar(require("./nodes/top-level"), exports);
__exportStar(require("./nodes/expression"), exports);
__exportStar(require("./nodes/call"), exports);
function formatAstNode(node) {
    return `<${node.type}:${node.span.start}..${node.span.end}>`;
}
exports.formatAstNode = formatAstNode;
function extendNode(node, base) {
    return { ...node, ...base };
}
exports.extendNode = extendNode;
