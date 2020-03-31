/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ast.ts":
/*!********************!*\
  !*** ./src/ast.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function interpolation(expr, span) {
    return {
        type: 0 /* Interpolation */,
        expr: expr,
        span: span
    };
}
exports.interpolation = interpolation;
function id(name, span) {
    return {
        type: 2 /* Identifier */,
        name: name,
        span: span
    };
}
exports.id = id;
function path(head, tail) {
    if (tail === void 0) { tail = []; }
    if (tail.length > 0) {
        return {
            type: 1 /* Path */,
            head: head,
            tail: tail,
            span: { start: head.span.start, end: tail[tail.length - 1].span.end }
        };
    }
    else {
        return {
            type: 1 /* Path */,
            head: head,
            span: head.span
        };
    }
}
exports.path = path;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var combinators = __importStar(__webpack_require__(/*! ./read/combinators */ "./src/read/combinators.ts"));
exports.combinators = combinators;
var multi = __importStar(__webpack_require__(/*! ./read/multi */ "./src/read/multi.ts"));
exports.multi = multi;
__export(__webpack_require__(/*! ./snippet */ "./src/snippet.ts"));
var ast = __importStar(__webpack_require__(/*! ./ast */ "./src/ast.ts"));
exports.ast = ast;
__export(__webpack_require__(/*! ./read/read */ "./src/read/read.ts"));
var tokens = __importStar(__webpack_require__(/*! ./read/tokens */ "./src/read/tokens.ts"));
exports.tokens = tokens;
__export(__webpack_require__(/*! ./span */ "./src/span.ts"));
var b = __importStar(__webpack_require__(/*! ./read/token-builder */ "./src/read/token-builder.ts"));
exports.b = b;
var utils = __importStar(__webpack_require__(/*! ./read/utils */ "./src/read/utils.ts"));
exports.utils = utils;
__export(__webpack_require__(/*! ./read/serialize */ "./src/read/serialize.ts"));
function parse(input) {
    return {};
}
exports.parse = parse;


/***/ }),

/***/ "./src/read/combinators.ts":
/*!*********************************!*\
  !*** ./src/read/combinators.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
function tag(source) {
    return function (input) {
        var next = input.slice(source.length);
        if (next.fragment === source) {
            return snippet_1.ok([next.rest, next]);
        }
        else {
            return { kind: "err", snippet: input, reason: "tag" };
        }
    };
}
exports.tag = tag;
function pattern(source) {
    return function (input) {
        var rest = input.sliceRest;
        var match = rest.match(source);
        if (match) {
            var matched = match[0];
            var next = input.slice(matched.length);
            return snippet_1.ok([next.rest, next]);
        }
        else {
            return snippet_1.err(input, "pattern");
        }
    };
}
exports.pattern = pattern;
function takeUntil(pattern) {
    if (typeof pattern === "string") {
        return function (input) {
            var next = input;
            while (true) {
                if (next.isEOF()) {
                    return snippet_1.err(input, "takeUntil");
                }
                else if (next.isMatch(pattern)) {
                    return snippet_1.ok([next.rest, next]);
                }
                else {
                    next = next.extend(1);
                }
            }
        };
    }
    else {
        throw new Error("Not implemented");
    }
}
exports.takeUntil = takeUntil;
function takeWhile(pattern) {
    if (typeof pattern === "string") {
        return function (input) {
            var next = input;
            while (true) {
                if (next.isEOF()) {
                    return snippet_1.ok([next.rest, next]);
                }
                else if (next.isMatch(pattern)) {
                    next = next.extend(pattern.length);
                }
                else if (next.length === 0) {
                    return snippet_1.err(input, "takeWhile");
                }
                else {
                    return snippet_1.ok([next.rest, next]);
                }
            }
        };
    }
    else {
        throw new Error("Not implemented");
    }
}
exports.takeWhile = takeWhile;
function seq() {
    var combinators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        combinators[_i] = arguments[_i];
    }
    return function (input) {
        var out = [];
        var current = input;
        for (var _i = 0, combinators_1 = combinators; _i < combinators_1.length; _i++) {
            var item = combinators_1[_i];
            var result = item(current);
            if (result.kind === "ok") {
                var _a = result.value, next = _a[0], value = _a[1];
                out.push(value);
                current = next.rest;
            }
            else {
                return result;
            }
        }
        return snippet_1.ok([current.rest, out]);
    };
}
exports.seq = seq;
function any() {
    var combinators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        combinators[_i] = arguments[_i];
    }
    return function (input) {
        var current = input;
        for (var _i = 0, combinators_2 = combinators; _i < combinators_2.length; _i++) {
            var item = combinators_2[_i];
            var result = item(current);
            if (result.kind === "ok") {
                return result;
            }
        }
        return snippet_1.err(input, "any");
    };
}
exports.any = any;


/***/ }),

/***/ "./src/read/multi.ts":
/*!***************************!*\
  !*** ./src/read/multi.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
function many(source) {
    return function (input) {
        var current = input;
        var out = [];
        while (true) {
            var iterate = source(current);
            if (iterate.kind === "err") {
                return snippet_1.ok([current.rest, out]);
            }
            else {
                var _a = iterate.value, next = _a[0], match = _a[1];
                out.push(match);
                current = next;
            }
        }
    };
}
exports.many = many;


/***/ }),

/***/ "./src/read/read.ts":
/*!**************************!*\
  !*** ./src/read/read.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
var tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
var multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
function read(source) {
    var input = snippet_1.Snippet.input(source);
    var result = utils_1.map(multi_1.many(INTERPOLATE), function (tokens) {
        return snippet_1.ok(tokens_1.root(tokens, span_1.range.apply(void 0, tokens)));
    })(input);
    return utils_1.mapResult(result, function (_a) {
        var token = _a[1];
        return snippet_1.ok(token);
    });
}
exports.read = read;
function INTERPOLATE(input) {
    return utils_1.map(utils_1.present(combinators_1.seq(combinators_1.tag("{{"), SPACED_TOKENS, combinators_1.tag("}}"))), function (_a, next) {
        var open = _a[0], path = _a[1], close = _a[2];
        if (next.length > 0) {
            return {
                kind: "err",
                reason: "remaining",
                snippet: next
            };
        }
        return snippet_1.ok(tokens_1.interpolate(path, span_1.range(open, close)));
    })(input);
}
exports.INTERPOLATE = INTERPOLATE;
var ID_SNIPPET = combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u);
var ID = token(ID_SNIPPET, "Identifier" /* Identifier */);
var DOT = token(combinators_1.tag("."), "Dot" /* Dot */);
var WS = token(combinators_1.pattern(/^[ ]+/), "WS" /* WS */);
var EQ = token(combinators_1.tag("="), "Eq" /* Eq */);
var ARG = utils_1.map(combinators_1.seq(combinators_1.tag("@"), ID_SNIPPET), function (_a) {
    var at = _a[0], id = _a[1];
    return snippet_1.ok(arg(span_1.range(at, id)));
});
function wrap(combinator) {
    return function (input) {
        var result = combinator(input);
        if (result.kind === "err") {
            return result;
        }
        else {
            return snippet_1.ok([result.value[0], [result.value[1]]]);
        }
    };
}
exports.wrap = wrap;
function token(combinator, type) {
    return function (input) {
        var result = combinator(input);
        if (result.kind === "err") {
            return result;
        }
        else {
            return snippet_1.ok([
                result.value[0],
                {
                    type: type,
                    span: result.value[1].span
                }
            ]);
        }
    };
}
exports.token = token;
function SPACED_TOKENS(input) {
    var out = [];
    var tk = combinators_1.any(exports.NAMED, PATH, wrap(WS));
    var current = input;
    while (true) {
        if (current.isEOF()) {
            break;
        }
        var result = tk(current);
        if (result.kind === "err") {
            break;
        }
        var _a = result.value, next = _a[0], tokens = _a[1];
        for (var _i = 0, tokens_2 = tokens; _i < tokens_2.length; _i++) {
            var token_1 = tokens_2[_i];
            if (Array.isArray(token_1)) {
                out.push.apply(out, token_1);
            }
            else {
                out.push(token_1);
            }
        }
        current = next;
    }
    if (out.length === 0) {
        return {
            kind: "err",
            reason: "present",
            snippet: input
        };
    }
    return snippet_1.ok([current, out]);
}
exports.SPACED_TOKENS = SPACED_TOKENS;
exports.NAMED = combinators_1.seq(ID, EQ, PATH);
exports.HEAD = combinators_1.any(ARG, ID);
// TODO: Allow `[]` or string members
exports.MEMBER = ID;
function PATH(input) {
    var result = exports.HEAD(input);
    if (result.kind === "err") {
        return result;
    }
    var _a = result.value, current = _a[0], head = _a[1];
    var out = [head];
    while (true) {
        var resultDot = DOT(current);
        if (resultDot.kind === "err") {
            return snippet_1.ok([current, out]);
        }
        current = resultDot.value[0];
        var nextDot = resultDot.value[1];
        var resultMember = exports.MEMBER(current);
        if (resultMember.kind === "err") {
            return resultMember;
        }
        current = resultMember.value[0];
        var nextMember = resultMember.value[1];
        out.push(nextDot, nextMember);
    }
}
exports.PATH = PATH;
function leaf(type) {
    return function (span) { return ({ type: type, span: span }); };
}
exports.leaf = leaf;
exports.id = leaf("Identifier" /* Identifier */);
exports.dot = leaf("Dot" /* Dot */);
exports.eq = leaf("Eq" /* Eq */);
exports.ws = leaf("WS" /* WS */);
function arg(span) {
    return {
        type: "Argument" /* Argument */,
        name: { start: span.start + 1, end: span.end },
        span: span
    };
}
exports.arg = arg;


/***/ }),

/***/ "./src/read/serialize.ts":
/*!*******************************!*\
  !*** ./src/read/serialize.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
function serializeRoot(root, source) {
    var out = [];
    for (var _i = 0, _a = root.children; _i < _a.length; _i++) {
        var token = _a[_i];
        out.push.apply(out, serializeNode(token, source));
    }
    return out.join("");
}
exports.serializeRoot = serializeRoot;
function serializeNode(token, source) {
    switch (token.type) {
        case "Dot" /* Dot */:
            return ["."];
        case "Eq" /* Eq */:
            return ["="];
        case "Argument" /* Argument */:
            return ["@", span_1.slice(token.name, source)];
        case "Identifier" /* Identifier */:
        case "WS" /* WS */:
            return [span_1.slice(token.span, source)];
        case "Interpolate" /* Interpolate */:
            return __spreadArrays(["{{"], serializeList(token.children, source), ["}}"]);
        case "TrustedInterpolate" /* TrustedInterpolate */:
            return __spreadArrays(["{{{"], serializeList(token.children, source), ["}}}"]);
        default:
            return utils_1.unreachable(token);
    }
}
exports.serializeNode = serializeNode;
function serializeList(tokens, source) {
    return __spreadArrays(tokens.flatMap(function (child) { return serializeNode(child, source); }));
}


/***/ }),

/***/ "./src/read/token-builder.ts":
/*!***********************************!*\
  !*** ./src/read/token-builder.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var read = __importStar(__webpack_require__(/*! ./read */ "./src/read/read.ts"));
var tokens = __importStar(__webpack_require__(/*! ./tokens */ "./src/read/tokens.ts"));
var span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
function id(name) {
    return function (builder) { return read.id(builder.consume(name)); };
}
exports.id = id;
function arg(name) {
    return function (builder) { return read.arg(builder.consume(name)); };
}
exports.arg = arg;
exports.dot = function (builder) { return read.dot(builder.consume(".")); };
exports.eq = function (builder) { return read.eq(builder.consume("=")); };
exports.sp = function (builder) { return read.ws(builder.consume(" ")); };
function ws(space) {
    return function (builder) { return read.ws(builder.consume(space)); };
}
exports.ws = ws;
function interpolate(children) {
    return function (builder) {
        var open = builder.consume("{{");
        var out = children.map(function (child) { return child(builder); });
        var close = builder.consume("}}");
        return tokens.interpolate(out, span_1.range(open, close));
    };
}
exports.interpolate = interpolate;
function root(children) {
    var builder = new TokenBuilder();
    var start = builder.pos;
    var out = children.map(function (child) { return child(builder); });
    var end = builder.pos;
    return tokens.root(out, span_1.span(start, end));
}
exports.root = root;
var TokenBuilder = /** @class */ (function () {
    function TokenBuilder(pos) {
        if (pos === void 0) { pos = 0; }
        this.pos = pos;
    }
    TokenBuilder.prototype.consume = function (chars) {
        var start = this.pos;
        this.pos += chars.length;
        return { start: start, end: this.pos };
    };
    return TokenBuilder;
}());


/***/ }),

/***/ "./src/read/tokens.ts":
/*!****************************!*\
  !*** ./src/read/tokens.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function interpolate(children, span) {
    return {
        type: "Interpolate" /* Interpolate */,
        span: span,
        children: children
    };
}
exports.interpolate = interpolate;
function trustedInterpolate(children, span) {
    return {
        type: "TrustedInterpolate" /* TrustedInterpolate */,
        span: span,
        children: children
    };
}
exports.trustedInterpolate = trustedInterpolate;
function root(children, span) {
    return {
        type: "Root" /* Root */,
        span: span,
        children: children
    };
}
exports.root = root;


/***/ }),

/***/ "./src/read/utils.ts":
/*!***************************!*\
  !*** ./src/read/utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
function then(combinator, then) {
    return function (input) {
        var first = combinator(input);
        if (first.kind === "err") {
            return first;
        }
        var _a = first.value, next = _a[0], firstValue = _a[1];
        var second = then(next);
        if (second.kind === "err") {
            return second;
        }
        var _b = second.value, rest = _b[0], secondValue = _b[1];
        return snippet_1.ok([rest, [firstValue, secondValue]]);
    };
}
exports.then = then;
function mapResult(result, callback) {
    if (result.kind === "err") {
        return result;
    }
    return callback(result.value);
}
exports.mapResult = mapResult;
function map(combinator, mapper) {
    return function (input) {
        var first = combinator(input);
        if (first.kind === "err") {
            return first;
        }
        var _a = first.value, next = _a[0], value = _a[1];
        var result = mapper(value, next);
        if (result.kind === "err") {
            return result;
        }
        return snippet_1.ok([next, result.value]);
    };
}
exports.map = map;
function present(source) {
    return function (input) {
        var result = source(input);
        if (result.kind === "ok") {
            var _a = result.value, next = _a[0], match = _a[1];
            if (input.eq(next)) {
                return snippet_1.err(input, "empty");
            }
            else {
                return result;
            }
        }
        else {
            return result;
        }
    };
}
exports.present = present;
function unreachable(value) {
    throw new Error("unreachable code reached");
}
exports.unreachable = unreachable;


/***/ }),

/***/ "./src/snippet.ts":
/*!************************!*\
  !*** ./src/snippet.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Snippet = /** @class */ (function () {
    function Snippet(source, offset, length) {
        this.source = source;
        this.offset = offset;
        this.length = length;
    }
    Snippet.input = function (source) {
        return new Snippet(source, 0, 0);
    };
    Snippet.prototype.eq = function (other) {
        return (this.source === other.source &&
            this.offset === other.offset &&
            this.length === other.length);
    };
    Snippet.prototype.fmt = function () {
        return "<offset:" + this.offset + " length:" + this.length + ">";
    };
    Snippet.prototype.slice = function (chars) {
        return new Snippet(this.source, this.offset + this.length, chars);
    };
    Object.defineProperty(Snippet.prototype, "sliceRest", {
        get: function () {
            return this.source.slice(this.offset + this.length);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Snippet.prototype, "rest", {
        get: function () {
            return new Snippet(this.source, this.offset + this.length, 0);
        },
        enumerable: true,
        configurable: true
    });
    Snippet.prototype.isEOF = function () {
        return this.offset + this.length === this.source.length;
    };
    Snippet.prototype.isMatch = function (chars) {
        var slice = this.source.slice(this.offset + this.length, this.offset + this.length + chars.length);
        return slice === chars;
    };
    Snippet.prototype.extend = function (count) {
        if (count === void 0) { count = 1; }
        return new Snippet(this.source, this.offset, this.length + count);
    };
    Object.defineProperty(Snippet.prototype, "span", {
        get: function () {
            return {
                start: this.offset,
                end: this.offset + this.length
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Snippet.prototype, "fragment", {
        get: function () {
            return this.source.slice(this.offset, this.offset + this.length);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Snippet.prototype, "restLength", {
        get: function () {
            return this.source.length - this.offset - this.length;
        },
        enumerable: true,
        configurable: true
    });
    return Snippet;
}());
exports.Snippet = Snippet;
function ok(value) {
    return { kind: "ok", value: value };
}
exports.ok = ok;
function err(snippet, reason) {
    return {
        kind: "err",
        snippet: snippet,
        reason: reason
    };
}
exports.err = err;


/***/ }),

/***/ "./src/span.ts":
/*!*********************!*\
  !*** ./src/span.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function span(start, end) {
    return { start: start, end: end };
}
exports.span = span;
function range() {
    var spans = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        spans[_i] = arguments[_i];
    }
    if (spans.length === 0) {
        return span(0, 0);
    }
    var first = spans[0];
    var last = first;
    for (var _a = 0, spans_1 = spans; _a < spans_1.length; _a++) {
        var span_1 = spans_1[_a];
        last = span_1;
    }
    return { start: getSpan(first).start, end: getSpan(last).end };
}
exports.range = range;
function isSpan(item) {
    return typeof item.start === "number" && typeof item.end === "number";
}
exports.isSpan = isSpan;
function getSpan(item) {
    if (isSpan(item)) {
        return item;
    }
    else {
        return item.span;
    }
}
exports.getSpan = getSpan;
function slice(span, source) {
    return source.slice(span.start, span.end);
}
exports.slice = slice;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvbXVsdGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvcmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9zZXJpYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdG9rZW4tYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLG9DQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0aW9uKGV4cHIsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogMCAvKiBJbnRlcnBvbGF0aW9uICovLFxyXG4gICAgICAgIGV4cHI6IGV4cHIsXHJcbiAgICAgICAgc3Bhbjogc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRpb24gPSBpbnRlcnBvbGF0aW9uO1xyXG5mdW5jdGlvbiBpZChuYW1lLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IDIgLyogSWRlbnRpZmllciAqLyxcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIHNwYW46IHNwYW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pZCA9IGlkO1xyXG5mdW5jdGlvbiBwYXRoKGhlYWQsIHRhaWwpIHtcclxuICAgIGlmICh0YWlsID09PSB2b2lkIDApIHsgdGFpbCA9IFtdOyB9XHJcbiAgICBpZiAodGFpbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogMSAvKiBQYXRoICovLFxyXG4gICAgICAgICAgICBoZWFkOiBoZWFkLFxyXG4gICAgICAgICAgICB0YWlsOiB0YWlsLFxyXG4gICAgICAgICAgICBzcGFuOiB7IHN0YXJ0OiBoZWFkLnNwYW4uc3RhcnQsIGVuZDogdGFpbFt0YWlsLmxlbmd0aCAtIDFdLnNwYW4uZW5kIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogMSAvKiBQYXRoICovLFxyXG4gICAgICAgICAgICBoZWFkOiBoZWFkLFxyXG4gICAgICAgICAgICBzcGFuOiBoZWFkLnNwYW5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucGF0aCA9IHBhdGg7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21iaW5hdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL2NvbWJpbmF0b3JzXCIpKTtcclxuZXhwb3J0cy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xyXG52YXIgbXVsdGkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC9tdWx0aVwiKSk7XHJcbmV4cG9ydHMubXVsdGkgPSBtdWx0aTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc25pcHBldFwiKSk7XHJcbnZhciBhc3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vYXN0XCIpKTtcclxuZXhwb3J0cy5hc3QgPSBhc3Q7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvcmVhZFwiKSk7XHJcbnZhciB0b2tlbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC90b2tlbnNcIikpO1xyXG5leHBvcnRzLnRva2VucyA9IHRva2VucztcclxuX19leHBvcnQocmVxdWlyZShcIi4vc3BhblwiKSk7XHJcbnZhciBiID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvdG9rZW4tYnVpbGRlclwiKSk7XHJcbmV4cG9ydHMuYiA9IGI7XHJcbnZhciB1dGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3V0aWxzXCIpKTtcclxuZXhwb3J0cy51dGlscyA9IHV0aWxzO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3NlcmlhbGl6ZVwiKSk7XHJcbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmZ1bmN0aW9uIHRhZyhzb3VyY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgbmV4dCA9IGlucHV0LnNsaWNlKHNvdXJjZS5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChuZXh0LmZyYWdtZW50ID09PSBzb3VyY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4geyBraW5kOiBcImVyclwiLCBzbmlwcGV0OiBpbnB1dCwgcmVhc29uOiBcInRhZ1wiIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRhZyA9IHRhZztcclxuZnVuY3Rpb24gcGF0dGVybihzb3VyY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgcmVzdCA9IGlucHV0LnNsaWNlUmVzdDtcclxuICAgICAgICB2YXIgbWF0Y2ggPSByZXN0Lm1hdGNoKHNvdXJjZSk7XHJcbiAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVkID0gbWF0Y2hbMF07XHJcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaW5wdXQuc2xpY2UobWF0Y2hlZC5sZW5ndGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInBhdHRlcm5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnBhdHRlcm4gPSBwYXR0ZXJuO1xyXG5mdW5jdGlvbiB0YWtlVW50aWwocGF0dGVybikge1xyXG4gICAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInRha2VVbnRpbFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHQuaXNNYXRjaChwYXR0ZXJuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuZXh0ZW5kKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VVbnRpbCA9IHRha2VVbnRpbDtcclxuZnVuY3Rpb24gdGFrZVdoaWxlKHBhdHRlcm4pIHtcclxuICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dDtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHQuaXNNYXRjaChwYXR0ZXJuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBuZXh0LmV4dGVuZChwYXR0ZXJuLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInRha2VXaGlsZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VXaGlsZSA9IHRha2VXaGlsZTtcclxuZnVuY3Rpb24gc2VxKCkge1xyXG4gICAgdmFyIGNvbWJpbmF0b3JzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGNvbWJpbmF0b3JzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjb21iaW5hdG9yc18xID0gY29tYmluYXRvcnM7IF9pIDwgY29tYmluYXRvcnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjb21iaW5hdG9yc18xW19pXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZW0oY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSByZXN1bHQudmFsdWUsIG5leHQgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcclxuICAgICAgICAgICAgICAgIG91dC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0LnJlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2VxID0gc2VxO1xyXG5mdW5jdGlvbiBhbnkoKSB7XHJcbiAgICB2YXIgY29tYmluYXRvcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgY29tYmluYXRvcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgY29tYmluYXRvcnNfMiA9IGNvbWJpbmF0b3JzOyBfaSA8IGNvbWJpbmF0b3JzXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gY29tYmluYXRvcnNfMltfaV07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVtKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJhbnlcIik7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYW55ID0gYW55O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmZ1bmN0aW9uIG1hbnkoc291cmNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZXJhdGUgPSBzb3VyY2UoY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVyYXRlLmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBpdGVyYXRlLnZhbHVlLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYW55ID0gbWFueTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxudmFyIG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxuZnVuY3Rpb24gcmVhZChzb3VyY2UpIHtcclxuICAgIHZhciBpbnB1dCA9IHNuaXBwZXRfMS5TbmlwcGV0LmlucHV0KHNvdXJjZSk7XHJcbiAgICB2YXIgcmVzdWx0ID0gdXRpbHNfMS5tYXAobXVsdGlfMS5tYW55KElOVEVSUE9MQVRFKSwgZnVuY3Rpb24gKHRva2Vucykge1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEucm9vdCh0b2tlbnMsIHNwYW5fMS5yYW5nZS5hcHBseSh2b2lkIDAsIHRva2VucykpKTtcclxuICAgIH0pKGlucHV0KTtcclxuICAgIHJldHVybiB1dGlsc18xLm1hcFJlc3VsdChyZXN1bHQsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IF9hWzFdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW4pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yZWFkID0gcmVhZDtcclxuZnVuY3Rpb24gSU5URVJQT0xBVEUoaW5wdXQpIHtcclxuICAgIHJldHVybiB1dGlsc18xLm1hcCh1dGlsc18xLnByZXNlbnQoY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCJ7e1wiKSwgU1BBQ0VEX1RPS0VOUywgY29tYmluYXRvcnNfMS50YWcoXCJ9fVwiKSkpLCBmdW5jdGlvbiAoX2EsIG5leHQpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IF9hWzBdLCBwYXRoID0gX2FbMV0sIGNsb3NlID0gX2FbMl07XHJcbiAgICAgICAgaWYgKG5leHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICAgICAgICAgIHJlYXNvbjogXCJyZW1haW5pbmdcIixcclxuICAgICAgICAgICAgICAgIHNuaXBwZXQ6IG5leHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5pbnRlcnBvbGF0ZShwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbiAgICB9KShpbnB1dCk7XHJcbn1cclxuZXhwb3J0cy5JTlRFUlBPTEFURSA9IElOVEVSUE9MQVRFO1xyXG52YXIgSURfU05JUFBFVCA9IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlxccHtJRF9TdGFydH1bXFxwe0lEX0NvbnRpbnVlfS1dKi91KTtcclxudmFyIElEID0gdG9rZW4oSURfU05JUFBFVCwgXCJJZGVudGlmaWVyXCIgLyogSWRlbnRpZmllciAqLyk7XHJcbnZhciBET1QgPSB0b2tlbihjb21iaW5hdG9yc18xLnRhZyhcIi5cIiksIFwiRG90XCIgLyogRG90ICovKTtcclxudmFyIFdTID0gdG9rZW4oY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eWyBdKy8pLCBcIldTXCIgLyogV1MgKi8pO1xyXG52YXIgRVEgPSB0b2tlbihjb21iaW5hdG9yc18xLnRhZyhcIj1cIiksIFwiRXFcIiAvKiBFcSAqLyk7XHJcbnZhciBBUkcgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShjb21iaW5hdG9yc18xLnRhZyhcIkBcIiksIElEX1NOSVBQRVQpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBhdCA9IF9hWzBdLCBpZCA9IF9hWzFdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayhhcmcoc3Bhbl8xLnJhbmdlKGF0LCBpZCkpKTtcclxufSk7XHJcbmZ1bmN0aW9uIHdyYXAoY29tYmluYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBjb21iaW5hdG9yKGlucHV0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW3Jlc3VsdC52YWx1ZVswXSwgW3Jlc3VsdC52YWx1ZVsxXV1dKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMud3JhcCA9IHdyYXA7XHJcbmZ1bmN0aW9uIHRva2VuKGNvbWJpbmF0b3IsIHR5cGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gY29tYmluYXRvcihpbnB1dCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZVswXSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW46IHJlc3VsdC52YWx1ZVsxXS5zcGFuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50b2tlbiA9IHRva2VuO1xyXG5mdW5jdGlvbiBTUEFDRURfVE9LRU5TKGlucHV0KSB7XHJcbiAgICB2YXIgb3V0ID0gW107XHJcbiAgICB2YXIgdGsgPSBjb21iaW5hdG9yc18xLmFueShleHBvcnRzLk5BTUVELCBQQVRILCB3cmFwKFdTKSk7XHJcbiAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBpZiAoY3VycmVudC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGsoY3VycmVudCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSByZXN1bHQudmFsdWUsIG5leHQgPSBfYVswXSwgdG9rZW5zID0gX2FbMV07XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMiA9IHRva2VuczsgX2kgPCB0b2tlbnNfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuXzEgPSB0b2tlbnNfMltfaV07XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRva2VuXzEpKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaC5hcHBseShvdXQsIHRva2VuXzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2godG9rZW5fMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICB9XHJcbiAgICBpZiAob3V0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgICAgIHJlYXNvbjogXCJwcmVzZW50XCIsXHJcbiAgICAgICAgICAgIHNuaXBwZXQ6IGlucHV0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG59XHJcbmV4cG9ydHMuU1BBQ0VEX1RPS0VOUyA9IFNQQUNFRF9UT0tFTlM7XHJcbmV4cG9ydHMuTkFNRUQgPSBjb21iaW5hdG9yc18xLnNlcShJRCwgRVEsIFBBVEgpO1xyXG5leHBvcnRzLkhFQUQgPSBjb21iaW5hdG9yc18xLmFueShBUkcsIElEKTtcclxuLy8gVE9ETzogQWxsb3cgYFtdYCBvciBzdHJpbmcgbWVtYmVyc1xyXG5leHBvcnRzLk1FTUJFUiA9IElEO1xyXG5mdW5jdGlvbiBQQVRIKGlucHV0KSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gZXhwb3J0cy5IRUFEKGlucHV0KTtcclxuICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB2YXIgX2EgPSByZXN1bHQudmFsdWUsIGN1cnJlbnQgPSBfYVswXSwgaGVhZCA9IF9hWzFdO1xyXG4gICAgdmFyIG91dCA9IFtoZWFkXTtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdERvdCA9IERPVChjdXJyZW50KTtcclxuICAgICAgICBpZiAocmVzdWx0RG90LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudCwgb3V0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnQgPSByZXN1bHREb3QudmFsdWVbMF07XHJcbiAgICAgICAgdmFyIG5leHREb3QgPSByZXN1bHREb3QudmFsdWVbMV07XHJcbiAgICAgICAgdmFyIHJlc3VsdE1lbWJlciA9IGV4cG9ydHMuTUVNQkVSKGN1cnJlbnQpO1xyXG4gICAgICAgIGlmIChyZXN1bHRNZW1iZXIua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0TWVtYmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50ID0gcmVzdWx0TWVtYmVyLnZhbHVlWzBdO1xyXG4gICAgICAgIHZhciBuZXh0TWVtYmVyID0gcmVzdWx0TWVtYmVyLnZhbHVlWzFdO1xyXG4gICAgICAgIG91dC5wdXNoKG5leHREb3QsIG5leHRNZW1iZXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUEFUSCA9IFBBVEg7XHJcbmZ1bmN0aW9uIGxlYWYodHlwZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcGFuKSB7IHJldHVybiAoeyB0eXBlOiB0eXBlLCBzcGFuOiBzcGFuIH0pOyB9O1xyXG59XHJcbmV4cG9ydHMubGVhZiA9IGxlYWY7XHJcbmV4cG9ydHMuaWQgPSBsZWFmKFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi8pO1xyXG5leHBvcnRzLmRvdCA9IGxlYWYoXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLmVxID0gbGVhZihcIkVxXCIgLyogRXEgKi8pO1xyXG5leHBvcnRzLndzID0gbGVhZihcIldTXCIgLyogV1MgKi8pO1xyXG5mdW5jdGlvbiBhcmcoc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkFyZ3VtZW50XCIgLyogQXJndW1lbnQgKi8sXHJcbiAgICAgICAgbmFtZTogeyBzdGFydDogc3Bhbi5zdGFydCArIDEsIGVuZDogc3Bhbi5lbmQgfSxcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXJnID0gYXJnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVSb290KHJvb3QsIHNvdXJjZSkge1xyXG4gICAgdmFyIG91dCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHJvb3QuY2hpbGRyZW47IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gX2FbX2ldO1xyXG4gICAgICAgIG91dC5wdXNoLmFwcGx5KG91dCwgc2VyaWFsaXplTm9kZSh0b2tlbiwgc291cmNlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0LmpvaW4oXCJcIik7XHJcbn1cclxuZXhwb3J0cy5zZXJpYWxpemVSb290ID0gc2VyaWFsaXplUm9vdDtcclxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZSh0b2tlbiwgc291cmNlKSB7XHJcbiAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiRG90XCIgLyogRG90ICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiLlwiXTtcclxuICAgICAgICBjYXNlIFwiRXFcIiAvKiBFcSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIj1cIl07XHJcbiAgICAgICAgY2FzZSBcIkFyZ3VtZW50XCIgLyogQXJndW1lbnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJAXCIsIHNwYW5fMS5zbGljZSh0b2tlbi5uYW1lLCBzb3VyY2UpXTtcclxuICAgICAgICBjYXNlIFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi86XHJcbiAgICAgICAgY2FzZSBcIldTXCIgLyogV1MgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbc3Bhbl8xLnNsaWNlKHRva2VuLnNwYW4sIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1wie3tcIl0sIHNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFtcIn19XCJdKTtcclxuICAgICAgICBjYXNlIFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1wie3t7XCJdLCBzZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBbXCJ9fX1cIl0pO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLnVucmVhY2hhYmxlKHRva2VuKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZU5vZGUgPSBzZXJpYWxpemVOb2RlO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVMaXN0KHRva2Vucywgc291cmNlKSB7XHJcbiAgICByZXR1cm4gX19zcHJlYWRBcnJheXModG9rZW5zLmZsYXRNYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBzZXJpYWxpemVOb2RlKGNoaWxkLCBzb3VyY2UpOyB9KSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcmVhZCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkXCIpKTtcclxudmFyIHRva2VucyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi90b2tlbnNcIikpO1xyXG52YXIgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmZ1bmN0aW9uIGlkKG5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gcmVhZC5pZChidWlsZGVyLmNvbnN1bWUobmFtZSkpOyB9O1xyXG59XHJcbmV4cG9ydHMuaWQgPSBpZDtcclxuZnVuY3Rpb24gYXJnKG5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gcmVhZC5hcmcoYnVpbGRlci5jb25zdW1lKG5hbWUpKTsgfTtcclxufVxyXG5leHBvcnRzLmFyZyA9IGFyZztcclxuZXhwb3J0cy5kb3QgPSBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gcmVhZC5kb3QoYnVpbGRlci5jb25zdW1lKFwiLlwiKSk7IH07XHJcbmV4cG9ydHMuZXEgPSBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gcmVhZC5lcShidWlsZGVyLmNvbnN1bWUoXCI9XCIpKTsgfTtcclxuZXhwb3J0cy5zcCA9IGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiByZWFkLndzKGJ1aWxkZXIuY29uc3VtZShcIiBcIikpOyB9O1xyXG5mdW5jdGlvbiB3cyhzcGFjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiByZWFkLndzKGJ1aWxkZXIuY29uc3VtZShzcGFjZSkpOyB9O1xyXG59XHJcbmV4cG9ydHMud3MgPSB3cztcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwie3tcIik7XHJcbiAgICAgICAgdmFyIG91dCA9IGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkKGJ1aWxkZXIpOyB9KTtcclxuICAgICAgICB2YXIgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCJ9fVwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmludGVycG9sYXRlKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gcm9vdChjaGlsZHJlbikge1xyXG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgVG9rZW5CdWlsZGVyKCk7XHJcbiAgICB2YXIgc3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgIHZhciBvdXQgPSBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZChidWlsZGVyKTsgfSk7XHJcbiAgICB2YXIgZW5kID0gYnVpbGRlci5wb3M7XHJcbiAgICByZXR1cm4gdG9rZW5zLnJvb3Qob3V0LCBzcGFuXzEuc3BhbihzdGFydCwgZW5kKSk7XHJcbn1cclxuZXhwb3J0cy5yb290ID0gcm9vdDtcclxudmFyIFRva2VuQnVpbGRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRva2VuQnVpbGRlcihwb3MpIHtcclxuICAgICAgICBpZiAocG9zID09PSB2b2lkIDApIHsgcG9zID0gMDsgfVxyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgfVxyXG4gICAgVG9rZW5CdWlsZGVyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGNoYXJzKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5wb3MgKz0gY2hhcnMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiB0aGlzLnBvcyB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUb2tlbkJ1aWxkZXI7XHJcbn0oKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHRydXN0ZWRJbnRlcnBvbGF0ZShjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlRydXN0ZWRJbnRlcnBvbGF0ZVwiIC8qIFRydXN0ZWRJbnRlcnBvbGF0ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRydXN0ZWRJbnRlcnBvbGF0ZSA9IHRydXN0ZWRJbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gcm9vdChjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlJvb3RcIiAvKiBSb290ICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuZnVuY3Rpb24gdGhlbihjb21iaW5hdG9yLCB0aGVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gY29tYmluYXRvcihpbnB1dCk7XHJcbiAgICAgICAgaWYgKGZpcnN0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSBmaXJzdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCBmaXJzdFZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgdmFyIHNlY29uZCA9IHRoZW4obmV4dCk7XHJcbiAgICAgICAgaWYgKHNlY29uZC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWNvbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYiA9IHNlY29uZC52YWx1ZSwgcmVzdCA9IF9iWzBdLCBzZWNvbmRWYWx1ZSA9IF9iWzFdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW3Jlc3QsIFtmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZV1dKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50aGVuID0gdGhlbjtcclxuZnVuY3Rpb24gbWFwUmVzdWx0KHJlc3VsdCwgY2FsbGJhY2spIHtcclxuICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcclxufVxyXG5leHBvcnRzLm1hcFJlc3VsdCA9IG1hcFJlc3VsdDtcclxuZnVuY3Rpb24gbWFwKGNvbWJpbmF0b3IsIG1hcHBlcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciBmaXJzdCA9IGNvbWJpbmF0b3IoaW5wdXQpO1xyXG4gICAgICAgIGlmIChmaXJzdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaXJzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gZmlyc3QudmFsdWUsIG5leHQgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbWFwcGVyKHZhbHVlLCBuZXh0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWFwID0gbWFwO1xyXG5mdW5jdGlvbiBwcmVzZW50KHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBzb3VyY2UoaW5wdXQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCBtYXRjaCA9IF9hWzFdO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQuZXEobmV4dCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucHJlc2VudCA9IHByZXNlbnQ7XHJcbmZ1bmN0aW9uIHVucmVhY2hhYmxlKHZhbHVlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlYWNoYWJsZSBjb2RlIHJlYWNoZWRcIik7XHJcbn1cclxuZXhwb3J0cy51bnJlYWNoYWJsZSA9IHVucmVhY2hhYmxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU25pcHBldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNuaXBwZXQoc291cmNlLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgU25pcHBldC5pbnB1dCA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQoc291cmNlLCAwLCAwKTtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5lcSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zb3VyY2UgPT09IG90aGVyLnNvdXJjZSAmJlxyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9PT0gb3RoZXIub2Zmc2V0ICYmXHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID09PSBvdGhlci5sZW5ndGgpO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmZtdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCI8b2Zmc2V0OlwiICsgdGhpcy5vZmZzZXQgKyBcIiBsZW5ndGg6XCIgKyB0aGlzLmxlbmd0aCArIFwiPlwiO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKGNoYXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCBjaGFycyk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInNsaWNlUmVzdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJyZXN0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmlzRU9GID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoID09PSB0aGlzLnNvdXJjZS5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuaXNNYXRjaCA9IGZ1bmN0aW9uIChjaGFycykge1xyXG4gICAgICAgIHZhciBzbGljZSA9IHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGggKyBjaGFycy5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBzbGljZSA9PT0gY2hhcnM7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKGNvdW50KSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSB2b2lkIDApIHsgY291bnQgPSAxOyB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCwgdGhpcy5sZW5ndGggKyBjb3VudCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInNwYW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMub2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwiZnJhZ21lbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInJlc3RMZW5ndGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UubGVuZ3RoIC0gdGhpcy5vZmZzZXQgLSB0aGlzLmxlbmd0aDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBTbmlwcGV0O1xyXG59KCkpO1xyXG5leHBvcnRzLlNuaXBwZXQgPSBTbmlwcGV0O1xyXG5mdW5jdGlvbiBvayh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHsga2luZDogXCJva1wiLCB2YWx1ZTogdmFsdWUgfTtcclxufVxyXG5leHBvcnRzLm9rID0gb2s7XHJcbmZ1bmN0aW9uIGVycihzbmlwcGV0LCByZWFzb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICBzbmlwcGV0OiBzbmlwcGV0LFxyXG4gICAgICAgIHJlYXNvbjogcmVhc29uXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZXJyID0gZXJyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBzcGFuKHN0YXJ0LCBlbmQpIHtcclxuICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfTtcclxufVxyXG5leHBvcnRzLnNwYW4gPSBzcGFuO1xyXG5mdW5jdGlvbiByYW5nZSgpIHtcclxuICAgIHZhciBzcGFucyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBzcGFuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKHNwYW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBzcGFuKDAsIDApO1xyXG4gICAgfVxyXG4gICAgdmFyIGZpcnN0ID0gc3BhbnNbMF07XHJcbiAgICB2YXIgbGFzdCA9IGZpcnN0O1xyXG4gICAgZm9yICh2YXIgX2EgPSAwLCBzcGFuc18xID0gc3BhbnM7IF9hIDwgc3BhbnNfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICB2YXIgc3Bhbl8xID0gc3BhbnNfMVtfYV07XHJcbiAgICAgICAgbGFzdCA9IHNwYW5fMTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN0YXJ0OiBnZXRTcGFuKGZpcnN0KS5zdGFydCwgZW5kOiBnZXRTcGFuKGxhc3QpLmVuZCB9O1xyXG59XHJcbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcclxuZnVuY3Rpb24gaXNTcGFuKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbS5zdGFydCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgaXRlbS5lbmQgPT09IFwibnVtYmVyXCI7XHJcbn1cclxuZXhwb3J0cy5pc1NwYW4gPSBpc1NwYW47XHJcbmZ1bmN0aW9uIGdldFNwYW4oaXRlbSkge1xyXG4gICAgaWYgKGlzU3BhbihpdGVtKSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3BhbjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmdldFNwYW4gPSBnZXRTcGFuO1xyXG5mdW5jdGlvbiBzbGljZShzcGFuLCBzb3VyY2UpIHtcclxuICAgIHJldHVybiBzb3VyY2Uuc2xpY2Uoc3Bhbi5zdGFydCwgc3Bhbi5lbmQpO1xyXG59XHJcbmV4cG9ydHMuc2xpY2UgPSBzbGljZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==