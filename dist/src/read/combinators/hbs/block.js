"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseBlock = exports.OpenBlock = void 0;
const snippet_1 = require("../../../snippet");
const span_1 = require("../../../span");
const combinators_1 = require("../../combinators");
const hbs_1 = require("../../hbs");
const multi_1 = require("../../multi");
const read_1 = require("../../read");
const tokens_1 = require("../../tokens");
const base_1 = require("../base");
const spaced_tokens_1 = __importDefault(require("./spaced-tokens"));
class Block extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "BLOCK";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("BLOCK", OPEN_BLOCK, multi_1.many(read_1.TOP_LEVEL), CLOSE_BLOCK).map(([open, body, close]) => {
            if (!tokens_1.equalPath(open.name, close.name, input.source)) {
                return snippet_1.fatalError(input.forSpan(span_1.range(...close.name)), "mismatch");
            }
            return snippet_1.ok(tokens_1.block({ open, body, close }));
        }));
    }
}
exports.default = Block;
const BLOCK_SPACED_TOKENS = new spaced_tokens_1.default(["as"]);
// tslint:disable-next-line:max-classes-per-file
class OpenBlock extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "OPEN_BLOCK";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("OPEN_BLOCK", combinators_1.tag("{{#"), hbs_1.SIMPLE_PATH, BLOCK_SPACED_TOKENS, combinators_1.maybe(BLOCK_PARAMS), combinators_1.maybe(hbs_1.WS), combinators_1.tag("}}")).map(([open, path, head, params, ws, close]) => snippet_1.ok(tokens_1.openBlock({
            name: path,
            head: [...head, ...(params ? [params] : []), ...(ws ? [ws] : [])],
        }, span_1.range(open, close)))));
    }
}
exports.OpenBlock = OpenBlock;
const OPEN_BLOCK = new OpenBlock();
// tslint:disable-next-line:max-classes-per-file
class BlockParams extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "BLOCK_PARAMS";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("BLOCK_PARAMS", combinators_1.tag("as |"), multi_1.many(combinators_1.any("block param", hbs_1.ID, hbs_1.WS)), combinators_1.tag("|")).map(([open, params, close]) => snippet_1.ok(tokens_1.blockParams(params, span_1.range(open, close)))));
    }
}
const BLOCK_PARAMS = new BlockParams();
// tslint:disable-next-line:max-classes-per-file
class CloseBlock extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "CLOSE_BLOCK";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("CLOSE_BLOCK", combinators_1.tag("{{/"), hbs_1.SIMPLE_PATH, combinators_1.tag("}}")).map(([open, path, close]) => snippet_1.ok(tokens_1.closeBlock(path, span_1.range(open, close)))));
    }
}
exports.CloseBlock = CloseBlock;
const CLOSE_BLOCK = new CloseBlock();
