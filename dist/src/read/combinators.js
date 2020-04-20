"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybe = exports.pick = exports.any = exports.seq = exports.takeWhile = exports.takeUntil = exports.pattern = exports.tag = void 0;
const any_1 = __importDefault(require("./combinators/any"));
const pattern_1 = __importDefault(require("./combinators/pattern"));
const seq_1 = __importDefault(require("./combinators/seq"));
const tag_1 = __importDefault(require("./combinators/tag"));
const take_until_1 = __importDefault(require("./combinators/take-until"));
const take_while_1 = __importDefault(require("./combinators/take-while"));
const pick_1 = __importDefault(require("./combinators/pick"));
const maybe_1 = __importDefault(require("./combinators/maybe"));
exports.tag = (source) => new tag_1.default(source);
exports.pattern = (pat, name) => new pattern_1.default(name, pat);
exports.takeUntil = (pat) => new take_until_1.default(pat);
exports.takeWhile = (pat) => new take_while_1.default(pat);
exports.seq = (desc, ...combinators) => new seq_1.default(desc, combinators);
// tslint:disable-next-line:variable-name
exports.any = (desc, ...combinators) => new any_1.default(desc, combinators);
exports.pick = (combinators, callbacks) => new pick_1.default(combinators, callbacks);
exports.maybe = (c) => new maybe_1.default(c);
