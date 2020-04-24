"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopLevelArrow = void 0;
const any_1 = require("./internal/any");
const interpolate_1 = require("./interpolate");
const text_1 = require("./text");
exports.TopLevelArrow = any_1.anyArrow([text_1.TextArrow, interpolate_1.InterpolateArrow]).label("TopLevel");
