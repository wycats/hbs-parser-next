"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaybeWs = exports.Ws = void 0;
require("../../../read/tokens");
require("../abstract");
const tokens_iterator_1 = require("../../tokens-iterator");
const shape_1 = require("../../shape");
exports.Ws = shape_1.step("WS", shape_1.start(tokens_iterator_1.consumeToken("WS" /* WS */)));
exports.MaybeWs = shape_1.step("MaybeWS", shape_1.start(tokens_iterator_1.consumeToken("WS" /* WS */)).or(null));
