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

/***/ "./src/combinators.ts":
/*!****************************!*\
  !*** ./src/combinators.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var snippet_1 = __webpack_require__(/*! ./snippet */ "./src/snippet.ts");
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
var combinators = __importStar(__webpack_require__(/*! ./combinators */ "./src/combinators.ts"));
exports.combinators = combinators;
var multi = __importStar(__webpack_require__(/*! ./multi */ "./src/multi.ts"));
exports.multi = multi;
__export(__webpack_require__(/*! ./snippet */ "./src/snippet.ts"));
var ast = __importStar(__webpack_require__(/*! ./ast */ "./src/ast.ts"));
exports.ast = ast;
__export(__webpack_require__(/*! ./read */ "./src/read.ts"));
var tokens = __importStar(__webpack_require__(/*! ./read */ "./src/read.ts"));
exports.tokens = tokens;
__export(__webpack_require__(/*! ./span */ "./src/span.ts"));
var b = __importStar(__webpack_require__(/*! ./token-builder */ "./src/token-builder.ts"));
exports.b = b;
function parse(input) {
    return {};
}
exports.parse = parse;


/***/ }),

/***/ "./src/multi.ts":
/*!**********************!*\
  !*** ./src/multi.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var snippet_1 = __webpack_require__(/*! ./snippet */ "./src/snippet.ts");
function many(source) {
    return function (input) {
        var current = input;
        var out = [];
        while (true) {
            var next = source(current);
            if (next.kind === "err") {
                return snippet_1.ok([current.rest, out]);
            }
            else {
                var _a = next.value, match = _a[1];
                out.push(match);
                current = match;
            }
        }
    };
}
exports.many = many;
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


/***/ }),

/***/ "./src/read.ts":
/*!*********************!*\
  !*** ./src/read.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var span_1 = __webpack_require__(/*! ./span */ "./src/span.ts");
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/combinators.ts");
var snippet_1 = __webpack_require__(/*! ./snippet */ "./src/snippet.ts");
function read(source) {
    var input = snippet_1.Snippet.input(source);
    debugger;
    var result = combinators_1.seq(combinators_1.tag("{{"), ID, combinators_1.tag("}}"))(input);
    if (result.kind === "err") {
        return result;
    }
    var _a = result.value, next = _a[0], _b = _a[1], open = _b[0], ident = _b[1], close = _b[2];
    return snippet_1.ok(root([interpolate([exports.id(ident.span)], span_1.range(open.span, close.span))], span_1.range(open.span, close.span)));
}
exports.read = read;
var ID = combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u);
function leaf(type) {
    return function (span) { return ({ type: type, span: span }); };
}
exports.leaf = leaf;
exports.id = leaf("Identifier" /* Identifier */);
exports.dot = leaf("Dot" /* Dot */);
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
function range(start, end) {
    return { start: start.start, end: end.end };
}
exports.range = range;


/***/ }),

/***/ "./src/token-builder.ts":
/*!******************************!*\
  !*** ./src/token-builder.ts ***!
  \******************************/
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
var read = __importStar(__webpack_require__(/*! ./read */ "./src/read.ts"));
var span_1 = __webpack_require__(/*! ./span */ "./src/span.ts");
function id(name) {
    return function (builder) { return read.id(builder.consume(name)); };
}
exports.id = id;
function interpolate(children) {
    return function (builder) {
        var open = builder.consume("{{");
        var out = children.map(function (child) { return child(builder); });
        var close = builder.consume("}}");
        return read.interpolate(out, span_1.range(open, close));
    };
}
exports.interpolate = interpolate;
function root(children) {
    var builder = new TokenBuilder();
    var start = builder.pos;
    var out = children.map(function (child) { return child(builder); });
    var end = builder.pos;
    return read.root(out, span_1.span(start, end));
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tYmluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc25pcHBldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3Bhbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4tYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGlvbihleHByLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IDAgLyogSW50ZXJwb2xhdGlvbiAqLyxcclxuICAgICAgICBleHByOiBleHByLFxyXG4gICAgICAgIHNwYW46IHNwYW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbjtcclxuZnVuY3Rpb24gaWQobmFtZSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAyIC8qIElkZW50aWZpZXIgKi8sXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaWQgPSBpZDtcclxuZnVuY3Rpb24gcGF0aChoZWFkLCB0YWlsKSB7XHJcbiAgICBpZiAodGFpbCA9PT0gdm9pZCAwKSB7IHRhaWwgPSBbXTsgfVxyXG4gICAgaWYgKHRhaWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEgLyogUGF0aCAqLyxcclxuICAgICAgICAgICAgaGVhZDogaGVhZCxcclxuICAgICAgICAgICAgdGFpbDogdGFpbCxcclxuICAgICAgICAgICAgc3BhbjogeyBzdGFydDogaGVhZC5zcGFuLnN0YXJ0LCBlbmQ6IHRhaWxbdGFpbC5sZW5ndGggLSAxXS5zcGFuLmVuZCB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEgLyogUGF0aCAqLyxcclxuICAgICAgICAgICAgaGVhZDogaGVhZCxcclxuICAgICAgICAgICAgc3BhbjogaGVhZC5zcGFuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBhdGggPSBwYXRoO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4vc25pcHBldFwiKTtcclxuZnVuY3Rpb24gdGFnKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciBuZXh0ID0gaW5wdXQuc2xpY2Uoc291cmNlLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKG5leHQuZnJhZ21lbnQgPT09IHNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtpbmQ6IFwiZXJyXCIsIHNuaXBwZXQ6IGlucHV0LCByZWFzb246IFwidGFnXCIgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudGFnID0gdGFnO1xyXG5mdW5jdGlvbiBwYXR0ZXJuKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciByZXN0ID0gaW5wdXQuc2xpY2VSZXN0O1xyXG4gICAgICAgIHZhciBtYXRjaCA9IHJlc3QubWF0Y2goc291cmNlKTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSBtYXRjaFswXTtcclxuICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dC5zbGljZShtYXRjaGVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwicGF0dGVyblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucGF0dGVybiA9IHBhdHRlcm47XHJcbmZ1bmN0aW9uIHRha2VVbnRpbChwYXR0ZXJuKSB7XHJcbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwidGFrZVVudGlsXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dC5pc01hdGNoKHBhdHRlcm4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMudGFrZVVudGlsID0gdGFrZVVudGlsO1xyXG5mdW5jdGlvbiB0YWtlV2hpbGUocGF0dGVybikge1xyXG4gICAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dC5pc01hdGNoKHBhdHRlcm4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuZXh0ZW5kKHBhdHRlcm4ubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwidGFrZVdoaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMudGFrZVdoaWxlID0gdGFrZVdoaWxlO1xyXG5mdW5jdGlvbiBzZXEoKSB7XHJcbiAgICB2YXIgY29tYmluYXRvcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgY29tYmluYXRvcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbWJpbmF0b3JzXzEgPSBjb21iaW5hdG9yczsgX2kgPCBjb21iaW5hdG9yc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNvbWJpbmF0b3JzXzFbX2ldO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlbShjdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQucmVzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXEgPSBzZXE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21iaW5hdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKSk7XHJcbmV4cG9ydHMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcclxudmFyIG11bHRpID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL211bHRpXCIpKTtcclxuZXhwb3J0cy5tdWx0aSA9IG11bHRpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zbmlwcGV0XCIpKTtcclxudmFyIGFzdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9hc3RcIikpO1xyXG5leHBvcnRzLmFzdCA9IGFzdDtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVhZFwiKSk7XHJcbnZhciB0b2tlbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZFwiKSk7XHJcbmV4cG9ydHMudG9rZW5zID0gdG9rZW5zO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcGFuXCIpKTtcclxudmFyIGIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdG9rZW4tYnVpbGRlclwiKSk7XHJcbmV4cG9ydHMuYiA9IGI7XHJcbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4vc25pcHBldFwiKTtcclxuZnVuY3Rpb24gbWFueShzb3VyY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIHZhciBvdXQgPSBbXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IHNvdXJjZShjdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKG5leHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IG5leHQudmFsdWUsIG1hdGNoID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gbWF0Y2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWFueSA9IG1hbnk7XHJcbmZ1bmN0aW9uIHByZXNlbnQoc291cmNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHNvdXJjZShpbnB1dCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5lcShuZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiZW1wdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5wcmVzZW50ID0gcHJlc2VudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuL3NwYW5cIik7XHJcbnZhciBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vY29tYmluYXRvcnNcIik7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiByZWFkKHNvdXJjZSkge1xyXG4gICAgdmFyIGlucHV0ID0gc25pcHBldF8xLlNuaXBwZXQuaW5wdXQoc291cmNlKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgdmFyIHJlc3VsdCA9IGNvbWJpbmF0b3JzXzEuc2VxKGNvbWJpbmF0b3JzXzEudGFnKFwie3tcIiksIElELCBjb21iaW5hdG9yc18xLnRhZyhcIn19XCIpKShpbnB1dCk7XHJcbiAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIF9iID0gX2FbMV0sIG9wZW4gPSBfYlswXSwgaWRlbnQgPSBfYlsxXSwgY2xvc2UgPSBfYlsyXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2socm9vdChbaW50ZXJwb2xhdGUoW2V4cG9ydHMuaWQoaWRlbnQuc3BhbildLCBzcGFuXzEucmFuZ2Uob3Blbi5zcGFuLCBjbG9zZS5zcGFuKSldLCBzcGFuXzEucmFuZ2Uob3Blbi5zcGFuLCBjbG9zZS5zcGFuKSkpO1xyXG59XHJcbmV4cG9ydHMucmVhZCA9IHJlYWQ7XHJcbnZhciBJRCA9IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlxccHtJRF9TdGFydH1bXFxwe0lEX0NvbnRpbnVlfS1dKi91KTtcclxuZnVuY3Rpb24gbGVhZih0eXBlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNwYW4pIHsgcmV0dXJuICh7IHR5cGU6IHR5cGUsIHNwYW46IHNwYW4gfSk7IH07XHJcbn1cclxuZXhwb3J0cy5sZWFmID0gbGVhZjtcclxuZXhwb3J0cy5pZCA9IGxlYWYoXCJJZGVudGlmaWVyXCIgLyogSWRlbnRpZmllciAqLyk7XHJcbmV4cG9ydHMuZG90ID0gbGVhZihcIkRvdFwiIC8qIERvdCAqLyk7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHRydXN0ZWRJbnRlcnBvbGF0ZShjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlRydXN0ZWRJbnRlcnBvbGF0ZVwiIC8qIFRydXN0ZWRJbnRlcnBvbGF0ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRydXN0ZWRJbnRlcnBvbGF0ZSA9IHRydXN0ZWRJbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gcm9vdChjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlJvb3RcIiAvKiBSb290ICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTbmlwcGV0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU25pcHBldChzb3VyY2UsIG9mZnNldCwgbGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB9XHJcbiAgICBTbmlwcGV0LmlucHV0ID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldChzb3VyY2UsIDAsIDApO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmVxID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnNvdXJjZSA9PT0gb3RoZXIuc291cmNlICYmXHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID09PSBvdGhlci5vZmZzZXQgJiZcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPT09IG90aGVyLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuZm10ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIjxvZmZzZXQ6XCIgKyB0aGlzLm9mZnNldCArIFwiIGxlbmd0aDpcIiArIHRoaXMubGVuZ3RoICsgXCI+XCI7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoY2hhcnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIGNoYXJzKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwic2xpY2VSZXN0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInJlc3RcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuaXNFT0YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGggPT09IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5pc01hdGNoID0gZnVuY3Rpb24gKGNoYXJzKSB7XHJcbiAgICAgICAgdmFyIHNsaWNlID0gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCArIGNoYXJzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHNsaWNlID09PSBjaGFycztcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAoY291bnQpIHtcclxuICAgICAgICBpZiAoY291bnQgPT09IHZvaWQgMCkgeyBjb3VudCA9IDE7IH1cclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0LCB0aGlzLmxlbmd0aCArIGNvdW50KTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwic3BhblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJmcmFnbWVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwicmVzdExlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5sZW5ndGggLSB0aGlzLm9mZnNldCAtIHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFNuaXBwZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU25pcHBldCA9IFNuaXBwZXQ7XHJcbmZ1bmN0aW9uIG9rKHZhbHVlKSB7XHJcbiAgICByZXR1cm4geyBraW5kOiBcIm9rXCIsIHZhbHVlOiB2YWx1ZSB9O1xyXG59XHJcbmV4cG9ydHMub2sgPSBvaztcclxuZnVuY3Rpb24gZXJyKHNuaXBwZXQsIHJlYXNvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBraW5kOiBcImVyclwiLFxyXG4gICAgICAgIHNuaXBwZXQ6IHNuaXBwZXQsXHJcbiAgICAgICAgcmVhc29uOiByZWFzb25cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lcnIgPSBlcnI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHNwYW4oc3RhcnQsIGVuZCkge1xyXG4gICAgcmV0dXJuIHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IGVuZCB9O1xyXG59XHJcbmV4cG9ydHMuc3BhbiA9IHNwYW47XHJcbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBlbmQpIHtcclxuICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydC5zdGFydCwgZW5kOiBlbmQuZW5kIH07XHJcbn1cclxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciByZWFkID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWRcIikpO1xyXG52YXIgc3Bhbl8xID0gcmVxdWlyZShcIi4vc3BhblwiKTtcclxuZnVuY3Rpb24gaWQobmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiByZWFkLmlkKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7IH07XHJcbn1cclxuZXhwb3J0cy5pZCA9IGlkO1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShjaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBidWlsZGVyLmNvbnN1bWUoXCJ7e1wiKTtcclxuICAgICAgICB2YXIgb3V0ID0gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQoYnVpbGRlcik7IH0pO1xyXG4gICAgICAgIHZhciBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcIn19XCIpO1xyXG4gICAgICAgIHJldHVybiByZWFkLmludGVycG9sYXRlKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gcm9vdChjaGlsZHJlbikge1xyXG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgVG9rZW5CdWlsZGVyKCk7XHJcbiAgICB2YXIgc3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgIHZhciBvdXQgPSBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZChidWlsZGVyKTsgfSk7XHJcbiAgICB2YXIgZW5kID0gYnVpbGRlci5wb3M7XHJcbiAgICByZXR1cm4gcmVhZC5yb290KG91dCwgc3Bhbl8xLnNwYW4oc3RhcnQsIGVuZCkpO1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbnZhciBUb2tlbkJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUb2tlbkJ1aWxkZXIocG9zKSB7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IDA7IH1cclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIH1cclxuICAgIFRva2VuQnVpbGRlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChjaGFycykge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMucG9zICs9IGNoYXJzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogdGhpcy5wb3MgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVG9rZW5CdWlsZGVyO1xyXG59KCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9