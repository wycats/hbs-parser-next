"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensIteratorTransaction = exports.expandInfallible = exports.expand = exports.legacyExpand = exports.consume = exports.legacyConsume = exports.source = exports.legacySource = exports.consumeToken = exports.legacyConsumeToken = exports.consumeParent = exports.notEOF = exports.legacyNotEOF = exports.many = exports.legacyMany = exports.repeat = exports.legacyRepeat = exports.present = exports.legacyPresent = exports.assertNotNext = exports.inner = exports.atomic = exports.start = exports.PeekedToken = exports.SOURCE = exports.POS = exports.CONTEXT = exports.TOKENS = void 0;
const shape_1 = require("./shape");
exports.TOKENS = Symbol("TOKENS");
exports.CONTEXT = Symbol("CONTEXT");
exports.POS = Symbol("POS");
exports.SOURCE = Symbol("SOURCE");
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
class TokensIterator {
    constructor(tokens, context, pos = 0) {
        this.activeTransaction = null;
        this[exports.TOKENS] = tokens;
        this[exports.CONTEXT] = context;
        this[exports.POS] = pos;
    }
    get [exports.SOURCE]() {
        return this[exports.CONTEXT].source;
    }
    start(step) {
        return step(this);
    }
    err(desc, reason = "mismatch") {
        return shape_1.seq(shape_1.err(this.silentPeek(desc).token, reason), this);
    }
    ok(value) {
        return shape_1.seq(shape_1.ok(value), this);
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
        this[exports.CONTEXT].tracer.postInvoke({ desc }, shape_1.err(peeked.token, "rejected"), this[exports.TOKENS][pos]);
    }
    peekFailure(desc, reason) {
        this[exports.CONTEXT].tracer.postInvokeFailure({ desc }, reason);
    }
    silentPeek(desc) {
        return new PeekedToken(this, desc, this[exports.POS]);
    }
    expandFallible(shapeOrClass) {
        return this.expand(shapeOrClass, expanded => shape_1.seq(expanded, this));
    }
    expandInfallible(shapeOrClass) {
        return this.expand(shapeOrClass, expanded => expanded);
    }
    expand(shapeOrClass, callback) {
        let shape = typeof shapeOrClass === "function" ? new shapeOrClass() : shapeOrClass;
        this[exports.CONTEXT].tracer.preInvoke(shape, this[exports.TOKENS][this[exports.POS]]);
        let expanded = shape[shape_1.EXPAND](this);
        let result = callback(expanded);
        this[exports.CONTEXT].tracer.postInvoke(shape, result, this[exports.TOKENS][this[exports.POS]]);
        return result;
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
        return shape_1.seq(result, this);
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
        let eof = child.start(assertEOF());
        if (eof.kind === "err") {
            return eof;
        }
        return result;
    }
}
exports.default = TokensIterator;
function start(step) {
    return iterator => step(iterator);
}
exports.start = start;
function atomic(callback) {
    return iterator => iterator.atomic(callback);
}
exports.atomic = atomic;
function inner(tokens, callback) {
    return iterator => {
        let child = iterator.withChildTokens(tokens);
        let result = callback(child);
        if (result.kind === "err") {
            // parent.reject();
            return result;
        }
        let eof = child.start(assertEOF());
        if (eof.kind === "err") {
            // parent.reject();
            return eof;
        }
        return result;
    };
}
exports.inner = inner;
function assertNotNext(desc, callback) {
    return iterator => {
        let next = iterator.peek(desc);
        if (next.token !== undefined && callback(next.token)) {
            next.reject();
            return iterator.err(desc, "lookahead");
        }
        else {
            next.ignore();
            return iterator.ok(null);
        }
    };
}
exports.assertNotNext = assertNotNext;
function legacyPresent(desc) {
    return (out, iterator) => out.length === 0 ? iterator.err(desc, "empty") : iterator.ok(out);
}
exports.legacyPresent = legacyPresent;
function present(desc) {
    return (iterator, prev) => {
        if (shape_1.isOk(prev)) {
            return prev.value.length === 0
                ? iterator.err(desc, "empty")
                : iterator.ok(prev.value);
        }
        else {
            return prev;
        }
    };
}
exports.present = present;
function legacyRepeat(callback) {
    return iterator => {
        let out = [];
        while (true) {
            let result = callback(iterator);
            if (result.kind === "err") {
                break;
            }
            else {
                out.push(result.value);
            }
        }
        return out;
    };
}
exports.legacyRepeat = legacyRepeat;
function repeat(callback) {
    return iterator => {
        let out = [];
        while (true) {
            let result = callback(iterator);
            if (result.kind === "err") {
                break;
            }
            else {
                out.push(result.value);
            }
        }
        return shape_1.ok(out);
    };
}
exports.repeat = repeat;
function legacyMany(Shape) {
    return iterator => {
        let out = [];
        while (true) {
            let shape = new Shape();
            let result = legacyExpand(shape)(iterator);
            if (result.kind === "err") {
                break;
            }
            else {
                out.push(result.value);
            }
        }
        return out;
    };
}
exports.legacyMany = legacyMany;
function many(Shape) {
    return iterator => {
        let out = [];
        while (true) {
            let shape = new Shape();
            let result = legacyExpand(shape)(iterator);
            if (result.kind === "err") {
                break;
            }
            else {
                out.push(result.value);
            }
        }
        return shape_1.ok(out);
    };
}
exports.many = many;
function legacyNotEOF() {
    return iterator => {
        let next = iterator.peek("eof");
        if (next.isEOF) {
            return shape_1.seq(shape_1.err(next.reject().token, "eof"), iterator);
        }
        else {
            return shape_1.seq(shape_1.ok(next.ignore()), iterator);
        }
    };
}
exports.legacyNotEOF = legacyNotEOF;
function notEOF() {
    return iterator => {
        let next = iterator.peek("eof");
        if (next.isEOF) {
            return shape_1.err(next.reject().token, "eof");
        }
        else {
            return shape_1.ok(next.ignore());
        }
    };
}
exports.notEOF = notEOF;
function assertEOF() {
    return iterator => {
        let next = iterator.peek("eof");
        if (next.isEOF) {
            return shape_1.ok(next.ignore());
        }
        else {
            return shape_1.err(next.reject().token, "eof");
        }
    };
}
function consumeParent(options, callback) {
    return iterator => {
        let eof = legacyNotEOF()(iterator);
        if (eof.kind === "err") {
            return shape_1.seq(eof, iterator);
        }
        let desc = typeof options === "string" ? options : options.desc;
        let peekOptions = typeof options === "string" ? undefined : options;
        let next = iterator.peek(desc, peekOptions);
        let result = callback(next.token);
        if (result === undefined) {
            return shape_1.seq(shape_1.err(next.reject().token, "mismatch"), iterator);
        }
        else if (result.kind === "err") {
            next.reject();
            return shape_1.seq(result, iterator);
        }
        next.commit();
        return shape_1.seq(shape_1.ok({ result: result.value, token: next.token }), iterator);
    };
}
exports.consumeParent = consumeParent;
function legacyConsumeToken(nameOrTokenType, maybeTokenType) {
    let name = maybeTokenType === undefined ? undefined : nameOrTokenType;
    let tokenType = maybeTokenType === undefined ? nameOrTokenType : maybeTokenType;
    return legacyConsume(tokenType, token => {
        if (token.type === tokenType) {
            if (name !== undefined) {
                return { [name]: token };
            }
            else {
                return token;
            }
        }
    });
}
exports.legacyConsumeToken = legacyConsumeToken;
function consumeToken(nameOrTokenType, maybeTokenType) {
    let name = maybeTokenType === undefined ? undefined : nameOrTokenType;
    let tokenType = maybeTokenType === undefined ? nameOrTokenType : maybeTokenType;
    return consume(tokenType, token => {
        if (token.type === tokenType) {
            if (name !== undefined) {
                return { [name]: token };
            }
            else {
                return token;
            }
        }
    });
}
exports.consumeToken = consumeToken;
function legacySource() {
    return iterator => shape_1.seq(shape_1.ok(iterator[exports.SOURCE]), iterator);
}
exports.legacySource = legacySource;
function source() {
    return iterator => shape_1.seq(shape_1.ok(iterator[exports.SOURCE]), iterator);
}
exports.source = source;
function legacyConsume(options, callback) {
    return iterator => {
        let eof = legacyNotEOF()(iterator);
        if (eof.kind === "err") {
            return shape_1.seq(eof, iterator);
        }
        let desc = typeof options === "string" ? options : options.desc;
        let peekOptions = typeof options === "string" ? undefined : options;
        let next = iterator.peek(desc, peekOptions);
        let result = callback(next.token);
        if (result === undefined) {
            return shape_1.seq(shape_1.err(next.reject().token, "mismatch"), iterator);
        }
        next.commit();
        return shape_1.seq(shape_1.ok(result), iterator);
    };
}
exports.legacyConsume = legacyConsume;
function consume(options, callback) {
    return iterator => {
        let eof = notEOF()(iterator);
        if (eof.kind === "err") {
            return eof;
        }
        let desc = typeof options === "string" ? options : options.desc;
        let peekOptions = typeof options === "string" ? undefined : options;
        let next = iterator.peek(desc, peekOptions);
        let result = callback(next.token);
        if (result === undefined) {
            return shape_1.err(next.reject().token, "mismatch");
        }
        next.commit();
        return shape_1.ok(result);
    };
}
exports.consume = consume;
function legacyExpand(shapeOrClass) {
    return iterator => iterator.expandFallible(shapeOrClass);
}
exports.legacyExpand = legacyExpand;
function expand(shapeOrClass) {
    return iterator => iterator.expandFallible(shapeOrClass);
}
exports.expand = expand;
function expandInfallible(shapeOrClass) {
    return iterator => iterator.expandInfallible(shapeOrClass);
}
exports.expandInfallible = expandInfallible;
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
