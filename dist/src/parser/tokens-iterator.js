"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PeekedToken {
    constructor(iterator, pos) {
        this.iterator = iterator;
        this.pos = pos;
        this.committed = false;
    }
    get isEOF() {
        return this.iterator[TOKENS].length === this.pos;
    }
    commit() {
        if (this.committed) {
            throw new Error(`assert: cannot commit already committed peeked token`);
        }
        this.iterator.commit(this.pos);
    }
    get token() {
        return this.iterator[TOKENS][this.pos];
    }
}
exports.PeekedToken = PeekedToken;
const TOKENS = Symbol("TOKENS");
class TokensIterator {
    constructor(tokens, context, pos = 0) {
        this.context = context;
        this.pos = pos;
        this[TOKENS] = tokens;
    }
    peek() {
        return new PeekedToken(this, this.pos);
    }
    get source() {
        return this.context.source;
    }
    child(tokens) {
        return new TokensIterator(tokens, this.context);
    }
    commit(pos) {
        if (this.pos !== pos) {
            throw new Error(`assert: can't commit a peeked token after the iterator advanced`);
        }
        this.pos++;
    }
}
exports.default = TokensIterator;
