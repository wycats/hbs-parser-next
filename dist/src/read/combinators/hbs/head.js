"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const combinators_1 = require("../../combinators");
const hbs_1 = require("../../hbs");
require("../../tokens");
const base_1 = require("../base");
const id_1 = __importDefault(require("./id"));
const token_1 = __importDefault(require("./token"));
class Head extends base_1.AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
        this.id = new token_1.default(new id_1.default(disallowedKeywords), "Identifier" /* Identifier */);
    }
    get name() {
        if (this.disallowedKeywords) {
            return `HEAD • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return "HEAD";
        }
    }
    invoke(input) {
        return input.invoke(combinators_1.any("HEAD", hbs_1.ARG, this.id));
    }
}
exports.default = Head;
