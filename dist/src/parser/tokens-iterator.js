"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensIteratorTransaction = exports.TokensIteratorState = exports.PeekedToken = exports.ITERATOR_SOURCE = exports.POS = exports.CONTEXT = exports.TOKENS = void 0;
const utils_1 = require("../read/utils");
const shape_1 = require("./shape");
exports.TOKENS = Symbol("TOKENS");
exports.CONTEXT = Symbol("CONTEXT");
exports.POS = Symbol("POS");
exports.ITERATOR_SOURCE = Symbol("SOURCE");
class PeekedToken {
    constructor(iterator, desc, pos) {
        this.iterator = iterator;
        this.desc = desc;
        this.pos = pos;
        this.#committed = false;
        this.#rejected = false;
        this.#optional = false;
        this.#ignored = false;
    }
    #committed;
    #rejected;
    #optional;
    #ignored;
    get isEOF() {
        return this.iterator[exports.TOKENS].length === this.pos;
    }
    get finished() {
        return this.#committed || this.#rejected || this.#optional || this.#ignored;
    }
    get rejected() {
        return this.#rejected;
    }
    commit() {
        if (this.finished) {
            throw new Error(`assert: cannot commit already committed peeked token`);
        }
        this.#committed = true;
        return this.iterator.commitPeek(this.desc, this.pos);
    }
    silentReject() {
        if (this.finished) {
            throw new Error(`assert: cannot reject already committed peeked token`);
        }
        this.#rejected = true;
        return this;
    }
    reject() {
        if (this.finished) {
            throw new Error(`assert: cannot reject already committed peeked token`);
        }
        this.#rejected = true;
        this.iterator.rejectPeek(this.desc, this.pos, this);
        return this;
    }
    ignore() {
        if (this.finished) {
            throw new Error(`assert: cannot mark already committed peeked token as optional`);
        }
        this.#ignored = true;
        this.iterator.peekFailure(this.desc, "ignored");
        return null;
    }
    optional() {
        if (this.finished) {
            throw new Error(`assert: cannot mark already committed peeked token as optional`);
        }
        this.#optional = true;
        this.iterator.peekFailure(this.desc, "optional");
        return null;
    }
    get token() {
        return this.iterator[exports.TOKENS][this.pos];
    }
}
exports.PeekedToken = PeekedToken;
class TokensIteratorState {
    constructor(iterator) {
        this.iterator = iterator;
        if (new.target !== TokensIteratorState) {
            throw new Error(`TokensIteratorState is final`);
        }
    }
    get [exports.ITERATOR_SOURCE]() {
        return this.iterator[exports.ITERATOR_SOURCE];
    }
    lookahead() {
        let next = this.iterator.peek("lookahead");
        next.ignore();
        return next.token;
    }
    atomic(callback) {
        let result = this.iterator.atomic(iterator => {
            let state = new TokensIteratorState(iterator);
            let [newState, result] = callback(state);
            if (shape_1.isOk(result)) {
                return shape_1.parseOk([newState, result]);
            }
            else {
                return result;
            }
        });
        if (shape_1.isOk(result)) {
            return [this, result.value[1]];
        }
        else {
            return [this, result];
        }
    }
    label(desc, callback) {
        let innerState;
        let result = this.iterator.label(desc, iterator => {
            let [state, result] = callback(new TokensIteratorState(iterator));
            innerState = state;
            return result;
        });
        return [utils_1.unwrap(innerState), result];
    }
    next(desc, callback) {
        return this.iterator.next(desc, callback);
    }
    parent(desc, tokenType, arrow) {
        return this.iterator.processChildren(desc, tokenType, iterator => {
            let [, result] = arrow.invoke(iterator.arrowState);
            return result;
        });
    }
}
exports.TokensIteratorState = TokensIteratorState;
class TokensIterator {
    constructor(tokens, context, pos = 0) {
        this.activeTransaction = null;
        this[exports.TOKENS] = tokens;
        this[exports.CONTEXT] = context;
        this[exports.POS] = pos;
    }
    get arrowState() {
        return new TokensIteratorState(this);
    }
    get [exports.ITERATOR_SOURCE]() {
        return this[exports.CONTEXT].source;
    }
    assertNotEOF() {
        let next = this.peek("eof");
        if (next.isEOF) {
            return shape_1.parseErr(next.reject().token || "EOF", {
                type: "unexpected-eof",
            });
        }
        else {
            next.ignore();
            return shape_1.parseOk(undefined);
        }
    }
    start(step) {
        return step(this);
    }
    ok(value) {
        return shape_1.parseOk(value);
    }
    label(desc, callback) {
        this[exports.CONTEXT].tracer.preInvoke({ desc, isLeaf: false }, this[exports.TOKENS][this[exports.POS]]);
        let result = callback(this);
        this[exports.CONTEXT].tracer.postInvoke({ desc }, result, this[exports.TOKENS][this[exports.POS]]);
        return result;
    }
    peek(desc, options = { isLeaf: true }) {
        this[exports.CONTEXT].tracer.preInvoke({ desc, isLeaf: options.isLeaf }, this[exports.TOKENS][this[exports.POS]]);
        return new PeekedToken(this, desc, this[exports.POS]);
    }
    commitPeek(desc, pos) {
        if (this[exports.POS] !== pos) {
            throw new Error(`assert: can't commit a peeked token after the iterator advanced`);
        }
        this[exports.POS]++;
        this[exports.CONTEXT].tracer.postInvoke({ desc }, this[exports.TOKENS][pos], this[exports.TOKENS][pos + 1]);
        return this[exports.TOKENS][this[exports.POS] - 1];
    }
    rejectPeek(desc, pos, peeked) {
        this[exports.CONTEXT].tracer.postInvoke({ desc }, shape_1.parseErr(peeked.token || "EOF", {
            type: "rejected",
            token: peeked.token || "EOF",
        }), this[exports.TOKENS][pos]);
    }
    peekFailure(desc, reason) {
        this[exports.CONTEXT].tracer.postInvokeFailure({ desc }, reason);
    }
    silentPeek(desc) {
        return new PeekedToken(this, desc, this[exports.POS]);
    }
    get source() {
        return this[exports.CONTEXT].source;
    }
    withChildTokens(tokens) {
        return new TokensIterator(tokens, this[exports.CONTEXT]);
    }
    atomic(callback) {
        let transaction = this.begin();
        let result = callback(transaction);
        if (result.kind === "ok") {
            transaction.commit();
        }
        else {
            transaction.rollback();
        }
        return result;
    }
    begin() {
        if (this.activeTransaction) {
            throw new Error(`ASSERT: Can only have one active transaction for a parent at a time`);
        }
        this[exports.CONTEXT].tracer.begin(this[exports.TOKENS][this[exports.POS]]);
        let t = new TokensIteratorTransaction(this[exports.TOKENS], this[exports.CONTEXT], this[exports.POS], this);
        this.activeTransaction = t;
        return t;
    }
    commitTransaction(pos, transaction) {
        if (this[exports.POS] > pos) {
            throw new Error(`assert: can't commit a transaction if it rewinds the position`);
        }
        if (transaction !== this.activeTransaction) {
            throw new Error(`ASSERT: Can only commit a transaction if it's the active transaction`);
        }
        this.activeTransaction = null;
        this[exports.CONTEXT].tracer.commit();
        this[exports.POS] = pos;
    }
    rollbackTransaction(pos, transaction) {
        if (this[exports.POS] > pos) {
            throw new Error(`assert: transaction's position is in the past`);
        }
        if (transaction !== this.activeTransaction) {
            throw new Error(`ASSERT: Can only roll back a transaction if it's the active transaction`);
        }
        this.activeTransaction = null;
        this[exports.CONTEXT].tracer.rollback();
    }
    processInner(tokens, callback) {
        let child = this.withChildTokens(tokens);
        let result = callback(child);
        if (result.kind === "err") {
            return result;
        }
        let eof = child.peek("eof");
        if (eof.token === undefined) {
            eof.ignore();
        }
        else {
            eof.reject();
            return shape_1.parseErr(eof.token, {
                type: "mismatch",
                expected: "EOF",
                actual: eof.token,
            });
        }
        return result;
    }
    processChildren(desc, tokenType, step) {
        let next = this.peek(desc, { isLeaf: false });
        if (next.token === undefined) {
            next.reject();
            return shape_1.parseErr("EOF", { type: "unexpected-eof" });
        }
        else if (next.token.type !== tokenType) {
            next.reject();
            return shape_1.parseErr(next.token, {
                type: "mismatch",
                expected: tokenType,
                actual: next.token,
            });
        }
        else {
            let result = this.processInner(next.token.children, step);
            if (shape_1.isParseErr(result)) {
                next.reject();
                return result;
            }
            next.commit();
            return shape_1.parseOk({ result: result.value, token: next.token });
        }
    }
    next(desc, callback) {
        let next = this.peek(desc);
        let result = callback(next.token);
        if (shape_1.isErr(result)) {
            let token = next.reject().token;
            return shape_1.parseErr(token || "EOF", {
                type: "rejected",
                token: token || "EOF",
            });
        }
        next.commit();
        return shape_1.parseOk(result.value);
    }
}
exports.default = TokensIterator;
class TokensIteratorTransaction extends TokensIterator {
    constructor(tokens, context, pos = 0, transactionParent) {
        super(tokens, context, pos);
        this.transactionParent = transactionParent;
        this.#committed = false;
        this.#rolledBack = false;
    }
    #committed;
    #rolledBack;
    get isActive() {
        return !this.#committed && !this.#rolledBack;
    }
    begin() {
        if (this.#committed || this.#rolledBack) {
            throw new Error(`ASSERT: can't create a nested transaction for a committed or rolled back parent`);
        }
        return super.begin();
    }
    commit() {
        if (this.#committed || this.#rolledBack) {
            throw new Error(`ASSERT: can only commit a transaction once`);
        }
        if (this.activeTransaction) {
            throw new Error(`ASSERT: can't commit a transaction if it has active nested transactions`);
        }
        this.#committed = true;
        this.transactionParent.commitTransaction(this[exports.POS], this);
    }
    rollback() {
        if (this.#committed || this.#rolledBack) {
            throw new Error(`ASSERT: can only commit a transaction once`);
        }
        if (this.activeTransaction) {
            throw new Error(`ASSERT: can't roll back a transaction if it has active nested transactions`);
        }
        this.#rolledBack = true;
        this.transactionParent.rollbackTransaction(this[exports.POS], this);
    }
    commitTransaction(pos, transaction) {
        if (this.#committed || this.#rolledBack) {
            throw new Error(`ASSERT: Can't commit a nested transaction if the parent is already committed or rolled back`);
        }
        super.commitTransaction(pos, transaction);
    }
    rollbackTransaction(pos, transaction) {
        if (this.#committed || this.#rolledBack) {
            throw new Error(`ASSERT: Can't commit a nested transaction if the parent is already committed or rolled back`);
        }
        super.rollbackTransaction(pos, transaction);
    }
    finallyRollback() {
        if (!this.#committed && !this.#rolledBack) {
            this.rollback();
        }
    }
}
exports.TokensIteratorTransaction = TokensIteratorTransaction;
