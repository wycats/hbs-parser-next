"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsArrow = exports.MaybeWsArrow = void 0;
require("../../../read/tokens");
const shape_1 = require("../../shape");
exports.MaybeWsArrow = shape_1.ParserArrow.start()
    .token("WS" /* WS */)
    .or(undefined)
    .label("WS?");
exports.WsArrow = shape_1.ParserArrow.start().token("WS" /* WS */).label("WS");
