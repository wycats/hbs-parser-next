"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = require("../../../snippet");
const combinators_1 = require("../../combinators");
const hbs_1 = require("../../hbs");
const multi_1 = require("../../multi");
const read_1 = require("../../read");
const tokens_1 = require("../../tokens");
const base_1 = require("../base");
const span_1 = require("../../../span");
class Block extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "BLOCK";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("BLOCK", OPEN_BLOCK, multi_1.many(read_1.TOP_LEVEL), CLOSE_BLOCK).map(([open, body, close]) => snippet_1.ok(tokens_1.block({ open, body, close }))));
    }
}
exports.default = Block;
// tslint:disable-next-line:max-classes-per-file
class OpenBlock extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "OPEN_BLOCK";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("OPEN_BLOCK", combinators_1.tag("{{#"), hbs_1.SIMPLE_PATH, hbs_1.SPACED_TOKENS, combinators_1.tag("}}")).map(([open, path, head, close]) => snippet_1.ok(tokens_1.openBlock({ name: path, head, blockParams: null }, span_1.range(open, close)))));
    }
}
exports.OpenBlock = OpenBlock;
const OPEN_BLOCK = new OpenBlock();
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
