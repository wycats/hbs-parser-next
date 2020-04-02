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
var combinators_1 = __webpack_require__(/*! ./read/combinators */ "./src/read/combinators.ts");
exports.Logger = combinators_1.Logger;
var multi = __importStar(__webpack_require__(/*! ./read/multi */ "./src/read/multi.ts"));
exports.multi = multi;
__export(__webpack_require__(/*! ./snippet */ "./src/snippet.ts"));
var ast = __importStar(__webpack_require__(/*! ./ast */ "./src/ast.ts"));
exports.ast = ast;
__export(__webpack_require__(/*! ./read/hbs */ "./src/read/hbs.ts"));
var tokens = __importStar(__webpack_require__(/*! ./read/tokens */ "./src/read/tokens.ts"));
exports.tokens = tokens;
__export(__webpack_require__(/*! ./span */ "./src/span.ts"));
var b = __importStar(__webpack_require__(/*! ./read/token-builder */ "./src/read/token-builder.ts"));
exports.b = b;
var utils = __importStar(__webpack_require__(/*! ./read/utils */ "./src/read/utils.ts"));
exports.utils = utils;
__export(__webpack_require__(/*! ./read/serialize */ "./src/read/serialize.ts"));
__export(__webpack_require__(/*! ./read/read */ "./src/read/read.ts"));
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
var debug_1 = __webpack_require__(/*! ./debug */ "./src/read/debug.ts");
var tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
function formatDebuggable(debuggable) {
    if (typeof debuggable === "string") {
        return debuggable;
    }
    else if (debuggable === null) {
        return "null";
    }
    else if (Array.isArray(debuggable)) {
        if (debuggable.length <= 2) {
            return "[" + debuggable.map(formatDebuggable).join(", ") + "]";
        }
        else {
            return "[" + formatDebuggable(debuggable[0]) + ", " + formatDebuggable(debuggable[1]) + ", " + formatDebuggable(debuggable[2]) + ", ...]";
        }
    }
    else if (debuggable instanceof snippet_1.Snippet) {
        return debuggable.fmt();
    }
    else {
        return tokens_1.debugFormatToken(debuggable);
    }
}
function combinatorName(combinator) {
    if (combinator.name) {
        return combinator.name;
    }
    else {
        console.error(combinator);
        throw new Error("assert: expected combinator name");
    }
}
exports.combinatorName = combinatorName;
function combinatorType(combinator) {
    if (typeof combinator === "function") {
        return "normal";
    }
    else {
        return combinator.kind || "normal";
    }
}
exports.combinatorType = combinatorType;
function isTransparent(combinator) {
    if (typeof combinator === "function") {
        return false;
    }
    else {
        return combinator.kind === "transparent";
    }
}
exports.isTransparent = isTransparent;
function tag(source) {
    return {
        name: "string \u00AB" + source + "\u00BB",
        invoke: function (input) {
            var next = input.slice(source.length);
            if (next.fragment === source) {
                return snippet_1.ok([next.rest, next]);
            }
            else {
                return { kind: "err", snippet: input, reason: "tag" };
            }
        }
    };
}
exports.tag = tag;
function pattern(source, name) {
    return {
        name: "pattern (" + name + ")",
        invoke: function (input) {
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
        }
    };
}
exports.pattern = pattern;
function takeUntil(pattern) {
    if (typeof pattern === "string") {
        return {
            name: "takeUntil",
            invoke: function (input) {
                var next = input;
                while (true) {
                    if (next.isEOF() || next.isMatch(pattern)) {
                        return snippet_1.ok([next.rest, next]);
                    }
                    else {
                        next = next.extend(1);
                    }
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
        return {
            name: "takeWhile",
            invoke: function (input) {
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
            }
        };
    }
    else {
        throw new Error("Not implemented");
    }
}
exports.takeWhile = takeWhile;
var Logger = /** @class */ (function () {
    function Logger(enableLogging) {
        this.enableLogging = enableLogging;
    }
    Logger.prototype.invoke = function (combinator, input, _a) {
        var _b = _a === void 0 ? {} : _a, forceTransparent = _b.forceTransparent, context = _b.context;
        var logged = this.enableLogging && !isTransparent(combinator) && !forceTransparent;
        if (logged) {
            debug_1.row({ result: "start", arrow: debug_1.indentWS() + "->", combinator: combinator, context: context }, "", input.debugRest());
            debug_1.indent();
        }
        var result = combinator.invoke(input);
        if (logged) {
            debug_1.outdent();
        }
        if (result.kind === "ok") {
            if (logged) {
                debug_1.row({
                    result: "success",
                    arrow: debug_1.indentWS() + "<-",
                    combinator: combinator,
                    context: context
                }, formatDebuggable(result.value[1]), result.value[0].debugRest());
            }
        }
        else {
            if (logged) {
                debug_1.row({
                    result: "error",
                    arrow: debug_1.indentWS() + "<-",
                    combinator: combinator,
                    context: context
                }, result.reason, result.snippet.debugRest());
            }
        }
        return result;
    };
    return Logger;
}());
exports.Logger = Logger;
function seq() {
    var combinators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        combinators[_i] = arguments[_i];
    }
    return {
        name: "seq",
        kind: "arm",
        invoke: function (input) {
            var out = [];
            var current = input;
            for (var _i = 0, combinators_1 = combinators; _i < combinators_1.length; _i++) {
                var item = combinators_1[_i];
                var result = input.invoke(item, current);
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
        }
    };
}
exports.seq = seq;
function any() {
    var combinators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        combinators[_i] = arguments[_i];
    }
    return {
        name: "any",
        kind: "arm",
        invoke: function (input) {
            var current = input;
            for (var _i = 0, combinators_2 = combinators; _i < combinators_2.length; _i++) {
                var item = combinators_2[_i];
                var result = input.invoke(item, current);
                if (result.kind === "ok") {
                    return result;
                }
            }
            return snippet_1.err(input, "any");
        }
    };
}
exports.any = any;
function pick(combinators, callbacks) {
    return {
        name: "pick",
        invoke: function (input) {
            var current = input;
            for (var _i = 0, _a = Object.entries(combinators); _i < _a.length; _i++) {
                var _b = _a[_i], name_1 = _b[0], item = _b[1];
                var firstResult = input.invoke(item, current, { context: name_1 });
                if (firstResult.kind === "ok") {
                    var _c = firstResult.value, next = _c[0], value = _c[1];
                    var result = callbacks[name_1](value);
                    if (result.kind === "ok") {
                        return snippet_1.ok([next, result.value]);
                    }
                    else {
                        return result;
                    }
                }
            }
            return snippet_1.err(input, "any");
        }
    };
}
exports.pick = pick;
function maybe(combinator) {
    return {
        name: "maybe",
        invoke: function (input) {
            var result = input.invoke(combinator, input);
            if (result.kind === "err") {
                return snippet_1.ok([input, null]);
            }
            else {
                return result;
            }
        }
    };
}
exports.maybe = maybe;


/***/ }),

/***/ "./src/read/debug.ts":
/*!***************************!*\
  !*** ./src/read/debug.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
var table = [];
function row(_a, a, b) {
    var result = _a.result, arrow = _a.arrow, combinator = _a.combinator, context = _a.context;
    var name = combinators_1.combinatorName(combinator);
    if (context) {
        name = context + ": " + name;
    }
    table.push({
        style: { result: result, kind: combinators_1.combinatorType(combinator) },
        data: [arrow, name, a, b]
    });
}
exports.row = row;
function snippetStyle(style) {
    switch (style.result) {
        case "start":
            return "color: #333";
        case "success":
            return "color: green";
        case "error":
            return "color: red";
    }
}
exports.snippetStyle = snippetStyle;
function armStyle(style) {
    switch (style.result) {
        case "start":
            switch (style.kind) {
                case "arm":
                    return "color: #bbb";
                case "normal":
                    return "color: #333";
            }
        case "success":
            return "color: green";
        case "error":
            return "color: red";
    }
}
exports.armStyle = armStyle;
function printDebug() {
    for (var _i = 0, table_1 = table; _i < table_1.length; _i++) {
        var _a = table_1[_i], style = _a.style, _b = _a.data, arrow = _b[0], name_1 = _b[1], a = _b[2], b = _b[3];
        var first = (arrow + " %c" + name_1 + "%c").padEnd(60);
        console.log(first + " | %c" + b + "%c |", armStyle(style), "color: #333", snippetStyle(style), "color: #333", a);
    }
    table = [];
}
exports.printDebug = printDebug;
var TAB = 0;
function indent() {
    TAB += 1;
}
exports.indent = indent;
function outdent() {
    TAB -= 1;
}
exports.outdent = outdent;
function indentWS() {
    return " ".repeat(TAB);
}
exports.indentWS = indentWS;


/***/ }),

/***/ "./src/read/hbs.ts":
/*!*************************!*\
  !*** ./src/read/hbs.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
var span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
var tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
// import { TEXT, START_TAG, END_TAG } from "./html";
exports.SPACED_TOKENS = {
    name: "SPACED_TOKENS",
    invoke: function (input) {
        var out = [];
        var tk = combinators_1.any(wrap(exports.SEXP), exports.NAMED, exports.PATH, wrap(exports.WS));
        var current = input;
        while (true) {
            if (current.isEOF()) {
                break;
            }
            var result = input.invoke(tk, current);
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
};
exports.INTERPOLATE = utils_1.map(combinators_1.seq(combinators_1.tag("{{"), exports.SPACED_TOKENS, combinators_1.tag("}}")), function (_a) {
    var open = _a[0], path = _a[1], close = _a[2];
    return snippet_1.ok(tokens_1.interpolate(path, span_1.range(open, close)));
});
exports.SEXP = utils_1.map(combinators_1.seq(combinators_1.tag("("), exports.SPACED_TOKENS, combinators_1.tag(")")), function (_a) {
    var open = _a[0], path = _a[1], close = _a[2];
    return snippet_1.ok(tokens_1.sexp(path, span_1.range(open, close)));
});
var ID_SNIPPET = combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET");
exports.ID = token(ID_SNIPPET, "Identifier" /* Identifier */);
exports.DOT = token(combinators_1.tag("."), "Dot" /* Dot */);
exports.WS = token(combinators_1.pattern(/^[\u0009\u000A\u000C\u0020]+/u, "WS"), "WS" /* WS */);
exports.EQ = token(combinators_1.tag("="), "Eq" /* Eq */);
var ARG = utils_1.map(combinators_1.seq(combinators_1.tag("@"), ID_SNIPPET), function (_a) {
    var at = _a[0], id = _a[1];
    return snippet_1.ok(tokens_1.arg(span_1.range(at, id)));
});
function wrap(combinator) {
    return {
        name: "wrap",
        invoke: function (input) {
            var result = input.invoke(combinator, input);
            if (result.kind === "err") {
                return result;
            }
            else {
                return snippet_1.ok([result.value[0], [result.value[1]]]);
            }
        }
    };
}
exports.wrap = wrap;
function token(combinator, type) {
    return {
        name: "token (" + combinators_1.combinatorName(combinator) + ")",
        invoke: function (input) {
            var result = input.invoke(combinator, input, { forceTransparent: true });
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
        }
    };
}
exports.token = token;
exports.PATH = {
    name: "PATH",
    invoke: function (input) {
        var result = input.invoke(exports.HEAD, input);
        if (result.kind === "err") {
            return result;
        }
        var _a = result.value, current = _a[0], head = _a[1];
        var out = [head];
        while (true) {
            if (current.isEOF()) {
                return snippet_1.ok([current, out]);
            }
            var resultDot = input.invoke(exports.DOT, current);
            if (resultDot.kind === "err") {
                return snippet_1.ok([current, out]);
            }
            current = resultDot.value[0];
            var nextDot = resultDot.value[1];
            var resultMember = input.invoke(exports.MEMBER, current);
            if (resultMember.kind === "err") {
                return resultMember;
            }
            current = resultMember.value[0];
            var nextMember = resultMember.value[1];
            out.push(nextDot, nextMember);
        }
    }
};
exports.NAMED = combinators_1.seq(exports.ID, exports.EQ, exports.PATH);
exports.HEAD = combinators_1.any(ARG, exports.ID);
// TODO: Allow `[]` or string members
exports.MEMBER = exports.ID;


/***/ }),

/***/ "./src/read/html.ts":
/*!**************************!*\
  !*** ./src/read/html.ts ***!
  \**************************/
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
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
var tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
var span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
var hbs_1 = __webpack_require__(/*! ./hbs */ "./src/read/hbs.ts");
var multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
exports.TEXT = {
    name: "TEXT",
    invoke: function (input) {
        var result = input.invoke(combinators_1.takeUntil("{{"), input);
        if (result.kind === "err") {
            return result;
        }
        var _a = result.value, next = _a[0], value = _a[1];
        return snippet_1.ok([next, tokens_1.text(value.span)]);
    }
};
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
exports.TAG_NAME = combinators_1.pattern(/^[A-Za-z][^/>\0\s]+/u, "TAG_NAME");
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
exports.ATTRIBUTE_NAME = utils_1.map(combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u, "ATTRIBUTE_NAME"), function (name) { return snippet_1.ok(tokens_1.attrName(name.span)); });
exports.ATTRIBUTE_VALUE = combinators_1.pick({
    dq: combinators_1.seq(combinators_1.tag("\""), combinators_1.pattern(/^[^"]*/, "dq contents"), combinators_1.tag("\"")),
    sq: combinators_1.seq(combinators_1.tag("'"), combinators_1.pattern(/^[^']*/, "sq contents"), combinators_1.tag("'")),
    unquoted: combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020>\0"'<=`]+/u, "unquoted contents")
}, {
    dq: function (_a) {
        var open = _a[0], string = _a[1], close = _a[2];
        return snippet_1.ok(tokens_1.attrValue({ type: "DoubleQuoted" /* DoubleQuoted */, value: string.span }, span_1.range(open, close)));
    },
    sq: function (_a) {
        var open = _a[0], string = _a[1], close = _a[2];
        return snippet_1.ok(tokens_1.attrValue({ type: "SingleQuoted" /* SingleQuoted */, value: string.span }, span_1.range(open, close)));
    },
    unquoted: function (value) {
        return snippet_1.ok(tokens_1.attrValue({ type: "Unquoted" /* Unquoted */, value: value.span }, value.span));
    }
});
exports.ATTRIBUTE = combinators_1.pick({
    valued: combinators_1.seq(exports.ATTRIBUTE_NAME, hbs_1.EQ, exports.ATTRIBUTE_VALUE),
    bare: exports.ATTRIBUTE_NAME
}, {
    valued: function (_a) {
        var name = _a[0], value = _a[2];
        return snippet_1.ok(tokens_1.valuedAttr({ name: name, value: value }, span_1.range(name, value)));
    },
    bare: function (value) { return snippet_1.ok(tokens_1.attrName(value.span)); }
});
exports.ATTRIBUTES = utils_1.map(combinators_1.seq(hbs_1.WS, multi_1.many(combinators_1.any(hbs_1.WS, exports.ATTRIBUTE))), function (_a) {
    var ws = _a[0], attrs = _a[1];
    return snippet_1.ok(__spreadArrays([ws], attrs));
});
exports.START_TAG = utils_1.map(combinators_1.seq(combinators_1.tag("<"), exports.TAG_NAME, combinators_1.maybe(exports.ATTRIBUTES), combinators_1.tag(">")), function (_a) {
    var start = _a[0], name = _a[1], attrs = _a[2], end = _a[3];
    return snippet_1.ok(tokens_1.startTag({ name: name.span, attrs: attrs || undefined }, span_1.range(start, end)));
});
exports.END_TAG = utils_1.map(combinators_1.seq(combinators_1.tag("</"), exports.TAG_NAME, combinators_1.maybe(hbs_1.WS), combinators_1.tag(">")), function (_a) {
    var start = _a[0], name = _a[1], trailing = _a[2], end = _a[3];
    return snippet_1.ok(tokens_1.endTag({ name: name.span, trailing: trailing }, span_1.range(start, end)));
});


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
    return {
        name: "many",
        invoke: function (input) {
            var current = input;
            var out = [];
            while (true) {
                if (current.isEOF()) {
                    return snippet_1.ok([current.rest, out]);
                }
                var iterate = input.invoke(source, current);
                if (iterate.kind === "err") {
                    return snippet_1.ok([current.rest, out]);
                }
                else {
                    var _a = iterate.value, next = _a[0], match = _a[1];
                    out.push(match);
                    current = next;
                }
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
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
var span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
var multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
var tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
var html_1 = __webpack_require__(/*! ./html */ "./src/read/html.ts");
var hbs_1 = __webpack_require__(/*! ./hbs */ "./src/read/hbs.ts");
var debug_1 = __webpack_require__(/*! ./debug */ "./src/read/debug.ts");
function read(source, _a) {
    var logging = _a.logging;
    var input = snippet_1.Snippet.input(source, new combinators_1.Logger(logging || false));
    var result = input.invoke(utils_1.complete(utils_1.map(multi_1.many(combinators_1.any(hbs_1.INTERPOLATE, exports.CONTENT)), function (tokens) {
        return snippet_1.ok(tokens_1.root(tokens, span_1.range.apply(void 0, tokens)));
    })), input);
    if (logging) {
        debug_1.printDebug();
    }
    return utils_1.mapResult(result, function (_a) {
        var token = _a[1];
        return snippet_1.ok(token);
    });
}
exports.read = read;
exports.CONTENT = combinators_1.any(html_1.END_TAG, html_1.START_TAG, html_1.TEXT);


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
    if (token === null) {
        return [""];
    }
    switch (token.type) {
        // leaf tokens
        case "Dot" /* Dot */:
        case "Eq" /* Eq */:
        case "Identifier" /* Identifier */:
        case "WS" /* WS */:
        case "Text" /* Text */:
        case "AttributeName" /* AttributeName */:
            return [span_1.slice(token.span, source)];
        case "AttributeValue" /* AttributeValue */:
            return [
                serializeQuote(token),
                span_1.slice(token.value, source),
                serializeQuote(token)
            ];
        case "Argument" /* Argument */:
            return ["@", span_1.slice(token.name, source)];
        case "Sexp" /* Sexp */:
            return __spreadArrays(["("], serializeList(token.children, source), [")"]);
        case "Interpolate" /* Interpolate */:
            return __spreadArrays(["{{"], serializeList(token.children, source), ["}}"]);
        case "TrustedInterpolate" /* TrustedInterpolate */:
            return __spreadArrays(["{{{"], serializeList(token.children, source), ["}}}"]);
        case "StartTag" /* StartTag */:
            return __spreadArrays([
                "<",
                span_1.slice(token.name, source)
            ], serializeList(token.attributes, source), [
                ">"
            ]);
        case "EndTag" /* EndTag */:
            return __spreadArrays([
                "</",
                span_1.slice(token.name, source)
            ], serializeNode(token.trailing, source), [
                ">"
            ]);
        case "ValuedAttribute" /* ValuedAttribute */:
            return __spreadArrays(serializeNode(token.name, source), [
                "="
            ], serializeNode(token.value, source));
        default:
            return utils_1.unreachable(token);
    }
}
exports.serializeNode = serializeNode;
function serializeQuote(token) {
    switch (token.valueType) {
        case "SingleQuoted" /* SingleQuoted */:
            return "'";
        case "DoubleQuoted" /* DoubleQuoted */:
            return "\"";
        default:
            return "";
    }
}
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
var tokens = __importStar(__webpack_require__(/*! ./tokens */ "./src/read/tokens.ts"));
var span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
function id(name) {
    return function (builder) { return tokens.id(builder.consume(name)); };
}
exports.id = id;
function arg(name) {
    return function (builder) { return tokens.arg(builder.consume(name)); };
}
exports.arg = arg;
exports.dot = function (builder) { return tokens.dot(builder.consume(".")); };
exports.eq = function (builder) { return tokens.eq(builder.consume("=")); };
exports.sp = function (builder) {
    return tokens.ws(builder.consume(" "));
};
function ws(space) {
    return function (builder) { return tokens.ws(builder.consume(space)); };
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
function sexp(children) {
    return function (builder) {
        var open = builder.consume("(");
        var out = children.map(function (child) { return child(builder); });
        var close = builder.consume(")");
        return tokens.sexp(out, span_1.range(open, close));
    };
}
exports.sexp = sexp;
function text(chars) {
    return function (builder) {
        var out = builder.consume(chars);
        return tokens.text(out);
    };
}
exports.text = text;
function startTag(options) {
    if (typeof options === "string") {
        return function (builder) {
            var start = builder.consume("<");
            var nameSpan = builder.consume(options);
            var end = builder.consume(">");
            return tokens.startTag({ name: nameSpan }, span_1.range(start, end));
        };
    }
    else {
        return function (builder) {
            var name = options.name, attrs = options.attrs;
            var start = builder.consume("<");
            var nameSpan = builder.consume(name);
            var children = attrs.map(function (attr) { return attr(builder); });
            var end = builder.consume(">");
            return tokens.startTag({ name: nameSpan, attrs: children }, span_1.range(start, end));
        };
    }
}
exports.startTag = startTag;
function endTag(options) {
    var tagName = typeof options === "string" ? options : options.name;
    var trailing = typeof options === "string" ? undefined : options.trailing;
    return function (builder) {
        var start = builder.consume("</");
        var tag = builder.consume(tagName);
        var trailingToken = trailing ? ws(trailing)(builder) : undefined;
        var end = builder.consume(">");
        return tokens.endTag({ name: tag, trailing: trailingToken }, span_1.range(start, end));
    };
}
exports.endTag = endTag;
function attr(options) {
    if (typeof options === "string") {
        return function (builder) {
            var nameSpan = builder.consume(options);
            return tokens.attrName(nameSpan);
        };
    }
    else {
        return function (builder) {
            var name = options.name, rawValue = options.value;
            var value;
            var quote;
            switch (rawValue[0]) {
                case "\"":
                    value = rawValue.slice(1, -1);
                    quote = "\"";
                    break;
                case "'":
                    value = rawValue.slice(1, -1);
                    quote = "'";
                    break;
                default:
                    value = rawValue;
                    quote = undefined;
            }
            var start = builder.pos;
            var nameSpan = builder.consume(name);
            builder.consume("=");
            var valueStart = builder.pos;
            if (quote) {
                builder.consume(quote);
            }
            var valueSpan = builder.consume(value);
            if (quote) {
                builder.consume(quote);
            }
            var valueEnd = builder.pos;
            var end = builder.pos;
            var nameToken = tokens.attrName(nameSpan);
            var valueToken = tokens.attrValue({ type: quoteType(quote), value: valueSpan }, { start: valueStart, end: valueEnd });
            return tokens.valuedAttr({ name: nameToken, value: valueToken }, { start: start, end: end });
        };
    }
}
exports.attr = attr;
function quoteType(quote) {
    switch (quote) {
        case "\"":
            return "DoubleQuoted" /* DoubleQuoted */;
        case "'":
            return "SingleQuoted" /* SingleQuoted */;
        default:
            return "Unquoted" /* Unquoted */;
    }
}
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
function leaf(type) {
    return function (span) { return ({ type: type, span: span }); };
}
exports.leaf = leaf;
exports.id = leaf("Identifier" /* Identifier */);
exports.dot = leaf("Dot" /* Dot */);
exports.eq = leaf("Eq" /* Eq */);
exports.ws = leaf("WS" /* WS */);
exports.text = leaf("Text" /* Text */);
exports.attrName = leaf("AttributeName" /* AttributeName */);
function arg(span) {
    return {
        type: "Argument" /* Argument */,
        name: { start: span.start + 1, end: span.end },
        span: span
    };
}
exports.arg = arg;
function attrValue(_a, span) {
    var type = _a.type, value = _a.value;
    return {
        type: "AttributeValue" /* AttributeValue */,
        span: span,
        valueType: type,
        value: value
    };
}
exports.attrValue = attrValue;
function valuedAttr(_a, span) {
    var name = _a.name, value = _a.value;
    return {
        type: "ValuedAttribute" /* ValuedAttribute */,
        span: span,
        name: name,
        value: value
    };
}
exports.valuedAttr = valuedAttr;
function startTag(_a, span) {
    var name = _a.name, attrs = _a.attrs;
    return {
        type: "StartTag" /* StartTag */,
        span: span,
        name: name,
        attributes: attrs || []
    };
}
exports.startTag = startTag;
function endTag(_a, span) {
    var name = _a.name, trailing = _a.trailing;
    return {
        type: "EndTag" /* EndTag */,
        span: span,
        trailing: trailing ? trailing : null,
        name: name
    };
}
exports.endTag = endTag;
function sexp(children, span) {
    return {
        type: "Sexp" /* Sexp */,
        span: span,
        children: children
    };
}
exports.sexp = sexp;
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
function debugFormatToken(token) {
    return "<token:" + token.type + ">";
}
exports.debugFormatToken = debugFormatToken;


/***/ }),

/***/ "./src/read/utils.ts":
/*!***************************!*\
  !*** ./src/read/utils.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
function mapResult(result, callback) {
    if (result.kind === "err") {
        return result;
    }
    return callback(result.value);
}
exports.mapResult = mapResult;
function map(combinator, mapper) {
    return {
        name: combinators_1.combinatorName(combinator),
        invoke: function (input) {
            var first = input.invoke(combinator, input, { forceTransparent: true });
            if (first.kind === "err") {
                return first;
            }
            var _a = first.value, next = _a[0], value = _a[1];
            var result = mapper(value, next);
            if (result.kind === "err") {
                return result;
            }
            return snippet_1.ok([next, result.value]);
        }
    };
}
exports.map = map;
function complete(source) {
    return {
        name: "complete",
        invoke: function (input) {
            return input.invoke(map(source, function (value, next) {
                if (next.restLength !== 0) {
                    return snippet_1.err(input, "incomplete");
                }
                else {
                    return snippet_1.ok(value);
                }
            }), input);
        }
    };
}
exports.complete = complete;
function present(source) {
    return {
        name: "present",
        invoke: function (input) {
            var result = input.invoke(source, input);
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
    function Snippet(source, offset, length, logger) {
        this.source = source;
        this.offset = offset;
        this.length = length;
        this.logger = logger;
    }
    Snippet.input = function (source, logger) {
        return new Snippet(source, 0, 0, logger);
    };
    Snippet.prototype.invoke = function (combinator, input, _a) {
        var _b = _a === void 0 ? {} : _a, forceTransparent = _b.forceTransparent, context = _b.context;
        return this.logger.invoke(combinator, input);
    };
    Snippet.prototype.eq = function (other) {
        return (this.source === other.source &&
            this.offset === other.offset &&
            this.length === other.length);
    };
    Snippet.prototype.fmt = function () {
        return "<offset:" + this.offset + " length:" + this.length + ">";
    };
    Snippet.prototype.debugRest = function () {
        if (this.isEOF()) {
            return "(eof)";
        }
        else {
            return "" + this.source.slice(this.offset + this.length);
        }
    };
    Snippet.prototype.slice = function (chars) {
        return new Snippet(this.source, this.offset + this.length, chars, this.logger);
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
            return new Snippet(this.source, this.offset + this.length, 0, this.logger);
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
        return new Snippet(this.source, this.offset, this.length + count, this.logger);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvaGJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvbXVsdGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvcmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9zZXJpYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdG9rZW4tYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xHYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRpb24oZXhwciwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAwIC8qIEludGVycG9sYXRpb24gKi8sXHJcbiAgICAgICAgZXhwcjogZXhwcixcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb247XHJcbmZ1bmN0aW9uIGlkKG5hbWUsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogMiAvKiBJZGVudGlmaWVyICovLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgc3Bhbjogc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmlkID0gaWQ7XHJcbmZ1bmN0aW9uIHBhdGgoaGVhZCwgdGFpbCkge1xyXG4gICAgaWYgKHRhaWwgPT09IHZvaWQgMCkgeyB0YWlsID0gW107IH1cclxuICAgIGlmICh0YWlsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAxIC8qIFBhdGggKi8sXHJcbiAgICAgICAgICAgIGhlYWQ6IGhlYWQsXHJcbiAgICAgICAgICAgIHRhaWw6IHRhaWwsXHJcbiAgICAgICAgICAgIHNwYW46IHsgc3RhcnQ6IGhlYWQuc3Bhbi5zdGFydCwgZW5kOiB0YWlsW3RhaWwubGVuZ3RoIC0gMV0uc3Bhbi5lbmQgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAxIC8qIFBhdGggKi8sXHJcbiAgICAgICAgICAgIGhlYWQ6IGhlYWQsXHJcbiAgICAgICAgICAgIHNwYW46IGhlYWQuc3BhblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wYXRoID0gcGF0aDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbWJpbmF0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvY29tYmluYXRvcnNcIikpO1xyXG5leHBvcnRzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XHJcbnZhciBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vcmVhZC9jb21iaW5hdG9yc1wiKTtcclxuZXhwb3J0cy5Mb2dnZXIgPSBjb21iaW5hdG9yc18xLkxvZ2dlcjtcclxudmFyIG11bHRpID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvbXVsdGlcIikpO1xyXG5leHBvcnRzLm11bHRpID0gbXVsdGk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NuaXBwZXRcIikpO1xyXG52YXIgYXN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzdFwiKSk7XHJcbmV4cG9ydHMuYXN0ID0gYXN0O1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL2hic1wiKSk7XHJcbnZhciB0b2tlbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC90b2tlbnNcIikpO1xyXG5leHBvcnRzLnRva2VucyA9IHRva2VucztcclxuX19leHBvcnQocmVxdWlyZShcIi4vc3BhblwiKSk7XHJcbnZhciBiID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvdG9rZW4tYnVpbGRlclwiKSk7XHJcbmV4cG9ydHMuYiA9IGI7XHJcbnZhciB1dGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3V0aWxzXCIpKTtcclxuZXhwb3J0cy51dGlscyA9IHV0aWxzO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3NlcmlhbGl6ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvcmVhZFwiKSk7XHJcbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciBkZWJ1Z18xID0gcmVxdWlyZShcIi4vZGVidWdcIik7XHJcbnZhciB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuZnVuY3Rpb24gZm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlKSB7XHJcbiAgICBpZiAodHlwZW9mIGRlYnVnZ2FibGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZGVidWdnYWJsZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnZ2FibGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRlYnVnZ2FibGUpKSB7XHJcbiAgICAgICAgaWYgKGRlYnVnZ2FibGUubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiW1wiICsgZGVidWdnYWJsZS5tYXAoZm9ybWF0RGVidWdnYWJsZSkuam9pbihcIiwgXCIpICsgXCJdXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJbXCIgKyBmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGVbMF0pICsgXCIsIFwiICsgZm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzFdKSArIFwiLCBcIiArIGZvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZVsyXSkgKyBcIiwgLi4uXVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnZ2FibGUgaW5zdGFuY2VvZiBzbmlwcGV0XzEuU25pcHBldCkge1xyXG4gICAgICAgIHJldHVybiBkZWJ1Z2dhYmxlLmZtdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vuc18xLmRlYnVnRm9ybWF0VG9rZW4oZGVidWdnYWJsZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY29tYmluYXRvck5hbWUoY29tYmluYXRvcikge1xyXG4gICAgaWYgKGNvbWJpbmF0b3IubmFtZSkge1xyXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yLm5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGNvbWJpbmF0b3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFzc2VydDogZXhwZWN0ZWQgY29tYmluYXRvciBuYW1lXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvck5hbWUgPSBjb21iaW5hdG9yTmFtZTtcclxuZnVuY3Rpb24gY29tYmluYXRvclR5cGUoY29tYmluYXRvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb21iaW5hdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gXCJub3JtYWxcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yLmtpbmQgfHwgXCJub3JtYWxcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNvbWJpbmF0b3JUeXBlID0gY29tYmluYXRvclR5cGU7XHJcbmZ1bmN0aW9uIGlzVHJhbnNwYXJlbnQoY29tYmluYXRvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb21iaW5hdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY29tYmluYXRvci5raW5kID09PSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pc1RyYW5zcGFyZW50ID0gaXNUcmFuc3BhcmVudDtcclxuZnVuY3Rpb24gdGFnKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInN0cmluZyBcXHUwMEFCXCIgKyBzb3VyY2UgKyBcIlxcdTAwQkJcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0LnNsaWNlKHNvdXJjZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAobmV4dC5mcmFnbWVudCA9PT0gc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGtpbmQ6IFwiZXJyXCIsIHNuaXBwZXQ6IGlucHV0LCByZWFzb246IFwidGFnXCIgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50YWcgPSB0YWc7XHJcbmZ1bmN0aW9uIHBhdHRlcm4oc291cmNlLCBuYW1lKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwicGF0dGVybiAoXCIgKyBuYW1lICsgXCIpXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3QgPSBpbnB1dC5zbGljZVJlc3Q7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHJlc3QubWF0Y2goc291cmNlKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dC5zbGljZShtYXRjaGVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInBhdHRlcm5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucGF0dGVybiA9IHBhdHRlcm47XHJcbmZ1bmN0aW9uIHRha2VVbnRpbChwYXR0ZXJuKSB7XHJcbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBcInRha2VVbnRpbFwiLFxyXG4gICAgICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQuaXNFT0YoKSB8fCBuZXh0LmlzTWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VVbnRpbCA9IHRha2VVbnRpbDtcclxuZnVuY3Rpb24gdGFrZVdoaWxlKHBhdHRlcm4pIHtcclxuICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidGFrZVdoaWxlXCIsXHJcbiAgICAgICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0LmlzTWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuZXh0ZW5kKHBhdHRlcm4ubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwidGFrZVdoaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VXaGlsZSA9IHRha2VXaGlsZTtcclxudmFyIExvZ2dlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvZ2dlcihlbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVMb2dnaW5nID0gZW5hYmxlTG9nZ2luZztcclxuICAgIH1cclxuICAgIExvZ2dlci5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGNvbWJpbmF0b3IsIGlucHV0LCBfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBmb3JjZVRyYW5zcGFyZW50ID0gX2IuZm9yY2VUcmFuc3BhcmVudCwgY29udGV4dCA9IF9iLmNvbnRleHQ7XHJcbiAgICAgICAgdmFyIGxvZ2dlZCA9IHRoaXMuZW5hYmxlTG9nZ2luZyAmJiAhaXNUcmFuc3BhcmVudChjb21iaW5hdG9yKSAmJiAhZm9yY2VUcmFuc3BhcmVudDtcclxuICAgICAgICBpZiAobG9nZ2VkKSB7XHJcbiAgICAgICAgICAgIGRlYnVnXzEucm93KHsgcmVzdWx0OiBcInN0YXJ0XCIsIGFycm93OiBkZWJ1Z18xLmluZGVudFdTKCkgKyBcIi0+XCIsIGNvbWJpbmF0b3I6IGNvbWJpbmF0b3IsIGNvbnRleHQ6IGNvbnRleHQgfSwgXCJcIiwgaW5wdXQuZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICBkZWJ1Z18xLmluZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gY29tYmluYXRvci5pbnZva2UoaW5wdXQpO1xyXG4gICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgZGVidWdfMS5vdXRkZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnXzEucm93KHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93OiBkZWJ1Z18xLmluZGVudFdTKCkgKyBcIjwtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcjogY29tYmluYXRvcixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICB9LCBmb3JtYXREZWJ1Z2dhYmxlKHJlc3VsdC52YWx1ZVsxXSksIHJlc3VsdC52YWx1ZVswXS5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnXzEucm93KHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdzogZGVidWdfMS5pbmRlbnRXUygpICsgXCI8LVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmF0b3I6IGNvbWJpbmF0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxyXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0LnJlYXNvbiwgcmVzdWx0LnNuaXBwZXQuZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExvZ2dlcjtcclxufSgpKTtcclxuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XHJcbmZ1bmN0aW9uIHNlcSgpIHtcclxuICAgIHZhciBjb21iaW5hdG9ycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBjb21iaW5hdG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInNlcVwiLFxyXG4gICAgICAgIGtpbmQ6IFwiYXJtXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbWJpbmF0b3JzXzEgPSBjb21iaW5hdG9yczsgX2kgPCBjb21iaW5hdG9yc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjb21iaW5hdG9yc18xW19pXTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UoaXRlbSwgY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gbmV4dC5yZXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXEgPSBzZXE7XHJcbmZ1bmN0aW9uIGFueSgpIHtcclxuICAgIHZhciBjb21iaW5hdG9ycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBjb21iaW5hdG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcImFueVwiLFxyXG4gICAgICAgIGtpbmQ6IFwiYXJtXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjb21iaW5hdG9yc18yID0gY29tYmluYXRvcnM7IF9pIDwgY29tYmluYXRvcnNfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY29tYmluYXRvcnNfMltfaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGl0ZW0sIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImFueVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYW55ID0gYW55O1xyXG5mdW5jdGlvbiBwaWNrKGNvbWJpbmF0b3JzLCBjYWxsYmFja3MpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJwaWNrXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKGNvbWJpbmF0b3JzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgbmFtZV8xID0gX2JbMF0sIGl0ZW0gPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgIHZhciBmaXJzdFJlc3VsdCA9IGlucHV0Lmludm9rZShpdGVtLCBjdXJyZW50LCB7IGNvbnRleHQ6IG5hbWVfMSB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdFJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSBmaXJzdFJlc3VsdC52YWx1ZSwgbmV4dCA9IF9jWzBdLCB2YWx1ZSA9IF9jWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFja3NbbmFtZV8xXSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJhbnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnBpY2sgPSBwaWNrO1xyXG5mdW5jdGlvbiBtYXliZShjb21iaW5hdG9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwibWF5YmVcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtpbnB1dCwgbnVsbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYXliZSA9IG1heWJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgdGFibGUgPSBbXTtcclxuZnVuY3Rpb24gcm93KF9hLCBhLCBiKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0LCBhcnJvdyA9IF9hLmFycm93LCBjb21iaW5hdG9yID0gX2EuY29tYmluYXRvciwgY29udGV4dCA9IF9hLmNvbnRleHQ7XHJcbiAgICB2YXIgbmFtZSA9IGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvcik7XHJcbiAgICBpZiAoY29udGV4dCkge1xyXG4gICAgICAgIG5hbWUgPSBjb250ZXh0ICsgXCI6IFwiICsgbmFtZTtcclxuICAgIH1cclxuICAgIHRhYmxlLnB1c2goe1xyXG4gICAgICAgIHN0eWxlOiB7IHJlc3VsdDogcmVzdWx0LCBraW5kOiBjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JUeXBlKGNvbWJpbmF0b3IpIH0sXHJcbiAgICAgICAgZGF0YTogW2Fycm93LCBuYW1lLCBhLCBiXVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yb3cgPSByb3c7XHJcbmZ1bmN0aW9uIHNuaXBwZXRTdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZS5yZXN1bHQpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICMzMzNcIjtcclxuICAgICAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogZ3JlZW5cIjtcclxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IHJlZFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc25pcHBldFN0eWxlID0gc25pcHBldFN0eWxlO1xyXG5mdW5jdGlvbiBhcm1TdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZS5yZXN1bHQpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgc3dpdGNoIChzdHlsZS5raW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXJtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICNiYmJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogIzMzM1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IGdyZWVuXCI7XHJcbiAgICAgICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiByZWRcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmFybVN0eWxlID0gYXJtU3R5bGU7XHJcbmZ1bmN0aW9uIHByaW50RGVidWcoKSB7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHRhYmxlXzEgPSB0YWJsZTsgX2kgPCB0YWJsZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBfYSA9IHRhYmxlXzFbX2ldLCBzdHlsZSA9IF9hLnN0eWxlLCBfYiA9IF9hLmRhdGEsIGFycm93ID0gX2JbMF0sIG5hbWVfMSA9IF9iWzFdLCBhID0gX2JbMl0sIGIgPSBfYlszXTtcclxuICAgICAgICB2YXIgZmlyc3QgPSAoYXJyb3cgKyBcIiAlY1wiICsgbmFtZV8xICsgXCIlY1wiKS5wYWRFbmQoNjApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0ICsgXCIgfCAlY1wiICsgYiArIFwiJWMgfFwiLCBhcm1TdHlsZShzdHlsZSksIFwiY29sb3I6ICMzMzNcIiwgc25pcHBldFN0eWxlKHN0eWxlKSwgXCJjb2xvcjogIzMzM1wiLCBhKTtcclxuICAgIH1cclxuICAgIHRhYmxlID0gW107XHJcbn1cclxuZXhwb3J0cy5wcmludERlYnVnID0gcHJpbnREZWJ1ZztcclxudmFyIFRBQiA9IDA7XHJcbmZ1bmN0aW9uIGluZGVudCgpIHtcclxuICAgIFRBQiArPSAxO1xyXG59XHJcbmV4cG9ydHMuaW5kZW50ID0gaW5kZW50O1xyXG5mdW5jdGlvbiBvdXRkZW50KCkge1xyXG4gICAgVEFCIC09IDE7XHJcbn1cclxuZXhwb3J0cy5vdXRkZW50ID0gb3V0ZGVudDtcclxuZnVuY3Rpb24gaW5kZW50V1MoKSB7XHJcbiAgICByZXR1cm4gXCIgXCIucmVwZWF0KFRBQik7XHJcbn1cclxuZXhwb3J0cy5pbmRlbnRXUyA9IGluZGVudFdTO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG4vLyBpbXBvcnQgeyBURVhULCBTVEFSVF9UQUcsIEVORF9UQUcgfSBmcm9tIFwiLi9odG1sXCI7XHJcbmV4cG9ydHMuU1BBQ0VEX1RPS0VOUyA9IHtcclxuICAgIG5hbWU6IFwiU1BBQ0VEX1RPS0VOU1wiLFxyXG4gICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgdmFyIHRrID0gY29tYmluYXRvcnNfMS5hbnkod3JhcChleHBvcnRzLlNFWFApLCBleHBvcnRzLk5BTUVELCBleHBvcnRzLlBBVEgsIHdyYXAoZXhwb3J0cy5XUykpO1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZSh0aywgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHRva2VucyA9IF9hWzFdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18yID0gdG9rZW5zOyBfaSA8IHRva2Vuc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuXzEgPSB0b2tlbnNfMltfaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbl8xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoLmFwcGx5KG91dCwgdG9rZW5fMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCh0b2tlbl8xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG91dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IFwicHJlc2VudFwiLFxyXG4gICAgICAgICAgICAgICAgc25pcHBldDogaW5wdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudCwgb3V0XSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuSU5URVJQT0xBVEUgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShjb21iaW5hdG9yc18xLnRhZyhcInt7XCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwifX1cIikpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBvcGVuID0gX2FbMF0sIHBhdGggPSBfYVsxXSwgY2xvc2UgPSBfYVsyXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuaW50ZXJwb2xhdGUocGF0aCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpO1xyXG59KTtcclxuZXhwb3J0cy5TRVhQID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCIoXCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwiKVwiKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIG9wZW4gPSBfYVswXSwgcGF0aCA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zZXhwKHBhdGgsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKTtcclxufSk7XHJcbnZhciBJRF9TTklQUEVUID0gY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eXFxwe0lEX1N0YXJ0fVtcXHB7SURfQ29udGludWV9LV0qL3UsIFwiSURfU05JUFBFVFwiKTtcclxuZXhwb3J0cy5JRCA9IHRva2VuKElEX1NOSVBQRVQsIFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi8pO1xyXG5leHBvcnRzLkRPVCA9IHRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiLlwiKSwgXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLldTID0gdG9rZW4oY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW1xcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjBdKy91LCBcIldTXCIpLCBcIldTXCIgLyogV1MgKi8pO1xyXG5leHBvcnRzLkVRID0gdG9rZW4oY29tYmluYXRvcnNfMS50YWcoXCI9XCIpLCBcIkVxXCIgLyogRXEgKi8pO1xyXG52YXIgQVJHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCJAXCIpLCBJRF9TTklQUEVUKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgYXQgPSBfYVswXSwgaWQgPSBfYVsxXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXJnKHNwYW5fMS5yYW5nZShhdCwgaWQpKSk7XHJcbn0pO1xyXG5mdW5jdGlvbiB3cmFwKGNvbWJpbmF0b3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJ3cmFwXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShjb21iaW5hdG9yLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW3Jlc3VsdC52YWx1ZVswXSwgW3Jlc3VsdC52YWx1ZVsxXV1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy53cmFwID0gd3JhcDtcclxuZnVuY3Rpb24gdG9rZW4oY29tYmluYXRvciwgdHlwZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInRva2VuIChcIiArIGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvcikgKyBcIilcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZVswXSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IHJlc3VsdC52YWx1ZVsxXS5zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudG9rZW4gPSB0b2tlbjtcclxuZXhwb3J0cy5QQVRIID0ge1xyXG4gICAgbmFtZTogXCJQQVRIXCIsXHJcbiAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UoZXhwb3J0cy5IRUFELCBpbnB1dCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgY3VycmVudCA9IF9hWzBdLCBoZWFkID0gX2FbMV07XHJcbiAgICAgICAgdmFyIG91dCA9IFtoZWFkXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0RG90ID0gaW5wdXQuaW52b2tlKGV4cG9ydHMuRE9ULCBjdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdERvdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0RG90LnZhbHVlWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV4dERvdCA9IHJlc3VsdERvdC52YWx1ZVsxXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdE1lbWJlciA9IGlucHV0Lmludm9rZShleHBvcnRzLk1FTUJFUiwgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRNZW1iZXIua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE1lbWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0TWVtYmVyLnZhbHVlWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV4dE1lbWJlciA9IHJlc3VsdE1lbWJlci52YWx1ZVsxXTtcclxuICAgICAgICAgICAgb3V0LnB1c2gobmV4dERvdCwgbmV4dE1lbWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLk5BTUVEID0gY29tYmluYXRvcnNfMS5zZXEoZXhwb3J0cy5JRCwgZXhwb3J0cy5FUSwgZXhwb3J0cy5QQVRIKTtcclxuZXhwb3J0cy5IRUFEID0gY29tYmluYXRvcnNfMS5hbnkoQVJHLCBleHBvcnRzLklEKTtcclxuLy8gVE9ETzogQWxsb3cgYFtdYCBvciBzdHJpbmcgbWVtYmVyc1xyXG5leHBvcnRzLk1FTUJFUiA9IGV4cG9ydHMuSUQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG52YXIgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbnZhciBtdWx0aV8xID0gcmVxdWlyZShcIi4vbXVsdGlcIik7XHJcbmV4cG9ydHMuVEVYVCA9IHtcclxuICAgIG5hbWU6IFwiVEVYVFwiLFxyXG4gICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEudGFrZVVudGlsKFwie3tcIiksIGlucHV0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgdG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKV0pO1xyXG4gICAgfVxyXG59O1xyXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy90b2tlbml6YXRpb24uaHRtbCN0YWctbmFtZS1zdGF0ZVxyXG5leHBvcnRzLlRBR19OQU1FID0gY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW0EtWmEtel1bXi8+XFwwXFxzXSsvdSwgXCJUQUdfTkFNRVwiKTtcclxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvdG9rZW5pemF0aW9uLmh0bWwjYmVmb3JlLWF0dHJpYnV0ZS1uYW1lLXN0YXRlXHJcbmV4cG9ydHMuQVRUUklCVVRFX05BTUUgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlxcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjAvPlxcdTAwMDBcIic8PV0uKj8oPz1bXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMC89PlxcdTAwMDBcIic8XSkvdSwgXCJBVFRSSUJVVEVfTkFNRVwiKSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyTmFtZShuYW1lLnNwYW4pKTsgfSk7XHJcbmV4cG9ydHMuQVRUUklCVVRFX1ZBTFVFID0gY29tYmluYXRvcnNfMS5waWNrKHtcclxuICAgIGRxOiBjb21iaW5hdG9yc18xLnNlcShjb21iaW5hdG9yc18xLnRhZyhcIlxcXCJcIiksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteXCJdKi8sIFwiZHEgY29udGVudHNcIiksIGNvbWJpbmF0b3JzXzEudGFnKFwiXFxcIlwiKSksXHJcbiAgICBzcTogY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCInXCIpLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXiddKi8sIFwic3EgY29udGVudHNcIiksIGNvbWJpbmF0b3JzXzEudGFnKFwiJ1wiKSksXHJcbiAgICB1bnF1b3RlZDogY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW15cXHUwMDA5XFx1MDAwQVxcdTAwMENcXHUwMDIwPlxcMFwiJzw9YF0rL3UsIFwidW5xdW90ZWQgY29udGVudHNcIilcclxufSwge1xyXG4gICAgZHE6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBvcGVuID0gX2FbMF0sIHN0cmluZyA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHsgdHlwZTogXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi8sIHZhbHVlOiBzdHJpbmcuc3BhbiB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbiAgICB9LFxyXG4gICAgc3E6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBvcGVuID0gX2FbMF0sIHN0cmluZyA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHsgdHlwZTogXCJTaW5nbGVRdW90ZWRcIiAvKiBTaW5nbGVRdW90ZWQgKi8sIHZhbHVlOiBzdHJpbmcuc3BhbiB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbiAgICB9LFxyXG4gICAgdW5xdW90ZWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHsgdHlwZTogXCJVbnF1b3RlZFwiIC8qIFVucXVvdGVkICovLCB2YWx1ZTogdmFsdWUuc3BhbiB9LCB2YWx1ZS5zcGFuKSk7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnRzLkFUVFJJQlVURSA9IGNvbWJpbmF0b3JzXzEucGljayh7XHJcbiAgICB2YWx1ZWQ6IGNvbWJpbmF0b3JzXzEuc2VxKGV4cG9ydHMuQVRUUklCVVRFX05BTUUsIGhic18xLkVRLCBleHBvcnRzLkFUVFJJQlVURV9WQUxVRSksXHJcbiAgICBiYXJlOiBleHBvcnRzLkFUVFJJQlVURV9OQU1FXHJcbn0sIHtcclxuICAgIHZhbHVlZDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBfYVswXSwgdmFsdWUgPSBfYVsyXTtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnZhbHVlZEF0dHIoeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSwgc3Bhbl8xLnJhbmdlKG5hbWUsIHZhbHVlKSkpO1xyXG4gICAgfSxcclxuICAgIGJhcmU6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJOYW1lKHZhbHVlLnNwYW4pKTsgfVxyXG59KTtcclxuZXhwb3J0cy5BVFRSSUJVVEVTID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoaGJzXzEuV1MsIG11bHRpXzEubWFueShjb21iaW5hdG9yc18xLmFueShoYnNfMS5XUywgZXhwb3J0cy5BVFRSSUJVVEUpKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHdzID0gX2FbMF0sIGF0dHJzID0gX2FbMV07XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKF9fc3ByZWFkQXJyYXlzKFt3c10sIGF0dHJzKSk7XHJcbn0pO1xyXG5leHBvcnRzLlNUQVJUX1RBRyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKGNvbWJpbmF0b3JzXzEudGFnKFwiPFwiKSwgZXhwb3J0cy5UQUdfTkFNRSwgY29tYmluYXRvcnNfMS5tYXliZShleHBvcnRzLkFUVFJJQlVURVMpLCBjb21iaW5hdG9yc18xLnRhZyhcIj5cIikpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBzdGFydCA9IF9hWzBdLCBuYW1lID0gX2FbMV0sIGF0dHJzID0gX2FbMl0sIGVuZCA9IF9hWzNdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdGFydFRhZyh7IG5hbWU6IG5hbWUuc3BhbiwgYXR0cnM6IGF0dHJzIHx8IHVuZGVmaW5lZCB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpKTtcclxufSk7XHJcbmV4cG9ydHMuRU5EX1RBRyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKGNvbWJpbmF0b3JzXzEudGFnKFwiPC9cIiksIGV4cG9ydHMuVEFHX05BTUUsIGNvbWJpbmF0b3JzXzEubWF5YmUoaGJzXzEuV1MpLCBjb21iaW5hdG9yc18xLnRhZyhcIj5cIikpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBzdGFydCA9IF9hWzBdLCBuYW1lID0gX2FbMV0sIHRyYWlsaW5nID0gX2FbMl0sIGVuZCA9IF9hWzNdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5lbmRUYWcoeyBuYW1lOiBuYW1lLnNwYW4sIHRyYWlsaW5nOiB0cmFpbGluZyB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuZnVuY3Rpb24gbWFueShzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJtYW55XCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlcmF0ZSA9IGlucHV0Lmludm9rZShzb3VyY2UsIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGUua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBpdGVyYXRlLnZhbHVlLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1hbnkgPSBtYW55O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxudmFyIHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG52YXIgaHRtbF8xID0gcmVxdWlyZShcIi4vaHRtbFwiKTtcclxudmFyIGhic18xID0gcmVxdWlyZShcIi4vaGJzXCIpO1xyXG52YXIgZGVidWdfMSA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xyXG5mdW5jdGlvbiByZWFkKHNvdXJjZSwgX2EpIHtcclxuICAgIHZhciBsb2dnaW5nID0gX2EubG9nZ2luZztcclxuICAgIHZhciBpbnB1dCA9IHNuaXBwZXRfMS5TbmlwcGV0LmlucHV0KHNvdXJjZSwgbmV3IGNvbWJpbmF0b3JzXzEuTG9nZ2VyKGxvZ2dpbmcgfHwgZmFsc2UpKTtcclxuICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UodXRpbHNfMS5jb21wbGV0ZSh1dGlsc18xLm1hcChtdWx0aV8xLm1hbnkoY29tYmluYXRvcnNfMS5hbnkoaGJzXzEuSU5URVJQT0xBVEUsIGV4cG9ydHMuQ09OVEVOVCkpLCBmdW5jdGlvbiAodG9rZW5zKSB7XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5yb290KHRva2Vucywgc3Bhbl8xLnJhbmdlLmFwcGx5KHZvaWQgMCwgdG9rZW5zKSkpO1xyXG4gICAgfSkpLCBpbnB1dCk7XHJcbiAgICBpZiAobG9nZ2luZykge1xyXG4gICAgICAgIGRlYnVnXzEucHJpbnREZWJ1ZygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV0aWxzXzEubWFwUmVzdWx0KHJlc3VsdCwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gX2FbMV07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbik7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnJlYWQgPSByZWFkO1xyXG5leHBvcnRzLkNPTlRFTlQgPSBjb21iaW5hdG9yc18xLmFueShodG1sXzEuRU5EX1RBRywgaHRtbF8xLlNUQVJUX1RBRywgaHRtbF8xLlRFWFQpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVSb290KHJvb3QsIHNvdXJjZSkge1xyXG4gICAgdmFyIG91dCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHJvb3QuY2hpbGRyZW47IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gX2FbX2ldO1xyXG4gICAgICAgIG91dC5wdXNoLmFwcGx5KG91dCwgc2VyaWFsaXplTm9kZSh0b2tlbiwgc291cmNlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0LmpvaW4oXCJcIik7XHJcbn1cclxuZXhwb3J0cy5zZXJpYWxpemVSb290ID0gc2VyaWFsaXplUm9vdDtcclxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZSh0b2tlbiwgc291cmNlKSB7XHJcbiAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW1wiXCJdO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgLy8gbGVhZiB0b2tlbnNcclxuICAgICAgICBjYXNlIFwiRG90XCIgLyogRG90ICovOlxyXG4gICAgICAgIGNhc2UgXCJFcVwiIC8qIEVxICovOlxyXG4gICAgICAgIGNhc2UgXCJJZGVudGlmaWVyXCIgLyogSWRlbnRpZmllciAqLzpcclxuICAgICAgICBjYXNlIFwiV1NcIiAvKiBXUyAqLzpcclxuICAgICAgICBjYXNlIFwiVGV4dFwiIC8qIFRleHQgKi86XHJcbiAgICAgICAgY2FzZSBcIkF0dHJpYnV0ZU5hbWVcIiAvKiBBdHRyaWJ1dGVOYW1lICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW3NwYW5fMS5zbGljZSh0b2tlbi5zcGFuLCBzb3VyY2UpXTtcclxuICAgICAgICBjYXNlIFwiQXR0cmlidXRlVmFsdWVcIiAvKiBBdHRyaWJ1dGVWYWx1ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZVF1b3RlKHRva2VuKSxcclxuICAgICAgICAgICAgICAgIHNwYW5fMS5zbGljZSh0b2tlbi52YWx1ZSwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZVF1b3RlKHRva2VuKVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgXCJBcmd1bWVudFwiIC8qIEFyZ3VtZW50ICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiQFwiLCBzcGFuXzEuc2xpY2UodG9rZW4ubmFtZSwgc291cmNlKV07XHJcbiAgICAgICAgY2FzZSBcIlNleHBcIiAvKiBTZXhwICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1wiKFwiXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgW1wiKVwiXSk7XHJcbiAgICAgICAgY2FzZSBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbXCJ7e1wiXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgW1wifX1cIl0pO1xyXG4gICAgICAgIGNhc2UgXCJUcnVzdGVkSW50ZXJwb2xhdGVcIiAvKiBUcnVzdGVkSW50ZXJwb2xhdGUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbXCJ7e3tcIl0sIHNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFtcIn19fVwiXSk7XHJcbiAgICAgICAgY2FzZSBcIlN0YXJ0VGFnXCIgLyogU3RhcnRUYWcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbXHJcbiAgICAgICAgICAgICAgICBcIjxcIixcclxuICAgICAgICAgICAgICAgIHNwYW5fMS5zbGljZSh0b2tlbi5uYW1lLCBzb3VyY2UpXHJcbiAgICAgICAgICAgIF0sIHNlcmlhbGl6ZUxpc3QodG9rZW4uYXR0cmlidXRlcywgc291cmNlKSwgW1xyXG4gICAgICAgICAgICAgICAgXCI+XCJcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgY2FzZSBcIkVuZFRhZ1wiIC8qIEVuZFRhZyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFtcclxuICAgICAgICAgICAgICAgIFwiPC9cIixcclxuICAgICAgICAgICAgICAgIHNwYW5fMS5zbGljZSh0b2tlbi5uYW1lLCBzb3VyY2UpXHJcbiAgICAgICAgICAgIF0sIHNlcmlhbGl6ZU5vZGUodG9rZW4udHJhaWxpbmcsIHNvdXJjZSksIFtcclxuICAgICAgICAgICAgICAgIFwiPlwiXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIGNhc2UgXCJWYWx1ZWRBdHRyaWJ1dGVcIiAvKiBWYWx1ZWRBdHRyaWJ1dGUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhzZXJpYWxpemVOb2RlKHRva2VuLm5hbWUsIHNvdXJjZSksIFtcclxuICAgICAgICAgICAgICAgIFwiPVwiXHJcbiAgICAgICAgICAgIF0sIHNlcmlhbGl6ZU5vZGUodG9rZW4udmFsdWUsIHNvdXJjZSkpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLnVucmVhY2hhYmxlKHRva2VuKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZU5vZGUgPSBzZXJpYWxpemVOb2RlO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVRdW90ZSh0b2tlbikge1xyXG4gICAgc3dpdGNoICh0b2tlbi52YWx1ZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU2luZ2xlUXVvdGVkXCIgLyogU2luZ2xlUXVvdGVkICovOlxyXG4gICAgICAgICAgICByZXR1cm4gXCInXCI7XHJcbiAgICAgICAgY2FzZSBcIkRvdWJsZVF1b3RlZFwiIC8qIERvdWJsZVF1b3RlZCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUxpc3QodG9rZW5zLCBzb3VyY2UpIHtcclxuICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyh0b2tlbnMuZmxhdE1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIHNlcmlhbGl6ZU5vZGUoY2hpbGQsIHNvdXJjZSk7IH0pKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0b2tlbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdG9rZW5zXCIpKTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5mdW5jdGlvbiBpZChuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHRva2Vucy5pZChidWlsZGVyLmNvbnN1bWUobmFtZSkpOyB9O1xyXG59XHJcbmV4cG9ydHMuaWQgPSBpZDtcclxuZnVuY3Rpb24gYXJnKG5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gdG9rZW5zLmFyZyhidWlsZGVyLmNvbnN1bWUobmFtZSkpOyB9O1xyXG59XHJcbmV4cG9ydHMuYXJnID0gYXJnO1xyXG5leHBvcnRzLmRvdCA9IGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiB0b2tlbnMuZG90KGJ1aWxkZXIuY29uc3VtZShcIi5cIikpOyB9O1xyXG5leHBvcnRzLmVxID0gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHRva2Vucy5lcShidWlsZGVyLmNvbnN1bWUoXCI9XCIpKTsgfTtcclxuZXhwb3J0cy5zcCA9IGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICByZXR1cm4gdG9rZW5zLndzKGJ1aWxkZXIuY29uc3VtZShcIiBcIikpO1xyXG59O1xyXG5mdW5jdGlvbiB3cyhzcGFjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiB0b2tlbnMud3MoYnVpbGRlci5jb25zdW1lKHNwYWNlKSk7IH07XHJcbn1cclxuZXhwb3J0cy53cyA9IHdzO1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShjaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBidWlsZGVyLmNvbnN1bWUoXCJ7e1wiKTtcclxuICAgICAgICB2YXIgb3V0ID0gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQoYnVpbGRlcik7IH0pO1xyXG4gICAgICAgIHZhciBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcIn19XCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuaW50ZXJwb2xhdGUob3V0LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xyXG5mdW5jdGlvbiBzZXhwKGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IGJ1aWxkZXIuY29uc3VtZShcIihcIik7XHJcbiAgICAgICAgdmFyIG91dCA9IGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkKGJ1aWxkZXIpOyB9KTtcclxuICAgICAgICB2YXIgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCIpXCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuc2V4cChvdXQsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNleHAgPSBzZXhwO1xyXG5mdW5jdGlvbiB0ZXh0KGNoYXJzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgb3V0ID0gYnVpbGRlci5jb25zdW1lKGNoYXJzKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLnRleHQob3V0KTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50ZXh0ID0gdGV4dDtcclxuZnVuY3Rpb24gc3RhcnRUYWcob3B0aW9ucykge1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IGJ1aWxkZXIuY29uc3VtZShcIjxcIik7XHJcbiAgICAgICAgICAgIHZhciBuYW1lU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShvcHRpb25zKTtcclxuICAgICAgICAgICAgdmFyIGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMuc3RhcnRUYWcoeyBuYW1lOiBuYW1lU3BhbiB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUsIGF0dHJzID0gb3B0aW9ucy5hdHRycztcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPFwiKTtcclxuICAgICAgICAgICAgdmFyIG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG5hbWUpO1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBhdHRycy5tYXAoZnVuY3Rpb24gKGF0dHIpIHsgcmV0dXJuIGF0dHIoYnVpbGRlcik7IH0pO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5zdGFydFRhZyh7IG5hbWU6IG5hbWVTcGFuLCBhdHRyczogY2hpbGRyZW4gfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc3RhcnRUYWcgPSBzdGFydFRhZztcclxuZnVuY3Rpb24gZW5kVGFnKG9wdGlvbnMpIHtcclxuICAgIHZhciB0YWdOYW1lID0gdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgPyBvcHRpb25zIDogb3B0aW9ucy5uYW1lO1xyXG4gICAgdmFyIHRyYWlsaW5nID0gdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBvcHRpb25zLnRyYWlsaW5nO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPC9cIik7XHJcbiAgICAgICAgdmFyIHRhZyA9IGJ1aWxkZXIuY29uc3VtZSh0YWdOYW1lKTtcclxuICAgICAgICB2YXIgdHJhaWxpbmdUb2tlbiA9IHRyYWlsaW5nID8gd3ModHJhaWxpbmcpKGJ1aWxkZXIpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIHZhciBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCI+XCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuZW5kVGFnKHsgbmFtZTogdGFnLCB0cmFpbGluZzogdHJhaWxpbmdUb2tlbiB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmVuZFRhZyA9IGVuZFRhZztcclxuZnVuY3Rpb24gYXR0cihvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLmF0dHJOYW1lKG5hbWVTcGFuKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lLCByYXdWYWx1ZSA9IG9wdGlvbnMudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHF1b3RlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJhd1ZhbHVlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiXFxcIlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3VmFsdWUuc2xpY2UoMSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gXCJcXFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiJ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3VmFsdWUuc2xpY2UoMSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gXCInXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmF3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5wb3M7XHJcbiAgICAgICAgICAgIHZhciBuYW1lU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShuYW1lKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jb25zdW1lKFwiPVwiKTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlU3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgICAgICAgICAgaWYgKHF1b3RlKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUocXVvdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAocXVvdGUpIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29uc3VtZShxdW90ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbHVlRW5kID0gYnVpbGRlci5wb3M7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBidWlsZGVyLnBvcztcclxuICAgICAgICAgICAgdmFyIG5hbWVUb2tlbiA9IHRva2Vucy5hdHRyTmFtZShuYW1lU3Bhbik7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7IHR5cGU6IHF1b3RlVHlwZShxdW90ZSksIHZhbHVlOiB2YWx1ZVNwYW4gfSwgeyBzdGFydDogdmFsdWVTdGFydCwgZW5kOiB2YWx1ZUVuZCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy52YWx1ZWRBdHRyKHsgbmFtZTogbmFtZVRva2VuLCB2YWx1ZTogdmFsdWVUb2tlbiB9LCB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmF0dHIgPSBhdHRyO1xyXG5mdW5jdGlvbiBxdW90ZVR5cGUocXVvdGUpIHtcclxuICAgIHN3aXRjaCAocXVvdGUpIHtcclxuICAgICAgICBjYXNlIFwiXFxcIlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi87XHJcbiAgICAgICAgY2FzZSBcIidcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiU2luZ2xlUXVvdGVkXCIgLyogU2luZ2xlUXVvdGVkICovO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlVucXVvdGVkXCIgLyogVW5xdW90ZWQgKi87XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcm9vdChjaGlsZHJlbikge1xyXG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgVG9rZW5CdWlsZGVyKCk7XHJcbiAgICB2YXIgc3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgIHZhciBvdXQgPSBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZChidWlsZGVyKTsgfSk7XHJcbiAgICB2YXIgZW5kID0gYnVpbGRlci5wb3M7XHJcbiAgICByZXR1cm4gdG9rZW5zLnJvb3Qob3V0LCBzcGFuXzEuc3BhbihzdGFydCwgZW5kKSk7XHJcbn1cclxuZXhwb3J0cy5yb290ID0gcm9vdDtcclxudmFyIFRva2VuQnVpbGRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRva2VuQnVpbGRlcihwb3MpIHtcclxuICAgICAgICBpZiAocG9zID09PSB2b2lkIDApIHsgcG9zID0gMDsgfVxyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgfVxyXG4gICAgVG9rZW5CdWlsZGVyLnByb3RvdHlwZS5jb25zdW1lID0gZnVuY3Rpb24gKGNoYXJzKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5wb3MgKz0gY2hhcnMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiB0aGlzLnBvcyB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUb2tlbkJ1aWxkZXI7XHJcbn0oKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGxlYWYodHlwZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzcGFuKSB7IHJldHVybiAoeyB0eXBlOiB0eXBlLCBzcGFuOiBzcGFuIH0pOyB9O1xyXG59XHJcbmV4cG9ydHMubGVhZiA9IGxlYWY7XHJcbmV4cG9ydHMuaWQgPSBsZWFmKFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi8pO1xyXG5leHBvcnRzLmRvdCA9IGxlYWYoXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLmVxID0gbGVhZihcIkVxXCIgLyogRXEgKi8pO1xyXG5leHBvcnRzLndzID0gbGVhZihcIldTXCIgLyogV1MgKi8pO1xyXG5leHBvcnRzLnRleHQgPSBsZWFmKFwiVGV4dFwiIC8qIFRleHQgKi8pO1xyXG5leHBvcnRzLmF0dHJOYW1lID0gbGVhZihcIkF0dHJpYnV0ZU5hbWVcIiAvKiBBdHRyaWJ1dGVOYW1lICovKTtcclxuZnVuY3Rpb24gYXJnKHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBcmd1bWVudFwiIC8qIEFyZ3VtZW50ICovLFxyXG4gICAgICAgIG5hbWU6IHsgc3RhcnQ6IHNwYW4uc3RhcnQgKyAxLCBlbmQ6IHNwYW4uZW5kIH0sXHJcbiAgICAgICAgc3Bhbjogc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFyZyA9IGFyZztcclxuZnVuY3Rpb24gYXR0clZhbHVlKF9hLCBzcGFuKSB7XHJcbiAgICB2YXIgdHlwZSA9IF9hLnR5cGUsIHZhbHVlID0gX2EudmFsdWU7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiQXR0cmlidXRlVmFsdWVcIiAvKiBBdHRyaWJ1dGVWYWx1ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIHZhbHVlVHlwZTogdHlwZSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hdHRyVmFsdWUgPSBhdHRyVmFsdWU7XHJcbmZ1bmN0aW9uIHZhbHVlZEF0dHIoX2EsIHNwYW4pIHtcclxuICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJWYWx1ZWRBdHRyaWJ1dGVcIiAvKiBWYWx1ZWRBdHRyaWJ1dGUgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnZhbHVlZEF0dHIgPSB2YWx1ZWRBdHRyO1xyXG5mdW5jdGlvbiBzdGFydFRhZyhfYSwgc3Bhbikge1xyXG4gICAgdmFyIG5hbWUgPSBfYS5uYW1lLCBhdHRycyA9IF9hLmF0dHJzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlN0YXJ0VGFnXCIgLyogU3RhcnRUYWcgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJzIHx8IFtdXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc3RhcnRUYWcgPSBzdGFydFRhZztcclxuZnVuY3Rpb24gZW5kVGFnKF9hLCBzcGFuKSB7XHJcbiAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHRyYWlsaW5nID0gX2EudHJhaWxpbmc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiRW5kVGFnXCIgLyogRW5kVGFnICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgdHJhaWxpbmc6IHRyYWlsaW5nID8gdHJhaWxpbmcgOiBudWxsLFxyXG4gICAgICAgIG5hbWU6IG5hbWVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lbmRUYWcgPSBlbmRUYWc7XHJcbmZ1bmN0aW9uIHNleHAoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTZXhwXCIgLyogU2V4cCAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNleHAgPSBzZXhwO1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xyXG5mdW5jdGlvbiB0cnVzdGVkSW50ZXJwb2xhdGUoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJUcnVzdGVkSW50ZXJwb2xhdGVcIiAvKiBUcnVzdGVkSW50ZXJwb2xhdGUgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50cnVzdGVkSW50ZXJwb2xhdGUgPSB0cnVzdGVkSW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHJvb3QoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJSb290XCIgLyogUm9vdCAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnJvb3QgPSByb290O1xyXG5mdW5jdGlvbiBkZWJ1Z0Zvcm1hdFRva2VuKHRva2VuKSB7XHJcbiAgICByZXR1cm4gXCI8dG9rZW46XCIgKyB0b2tlbi50eXBlICsgXCI+XCI7XHJcbn1cclxuZXhwb3J0cy5kZWJ1Z0Zvcm1hdFRva2VuID0gZGVidWdGb3JtYXRUb2tlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiBtYXBSZXN1bHQocmVzdWx0LCBjYWxsYmFjaykge1xyXG4gICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xyXG59XHJcbmV4cG9ydHMubWFwUmVzdWx0ID0gbWFwUmVzdWx0O1xyXG5mdW5jdGlvbiBtYXAoY29tYmluYXRvciwgbWFwcGVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvciksXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGZpcnN0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gZmlyc3QudmFsdWUsIG5leHQgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG1hcHBlcih2YWx1ZSwgbmV4dCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LCByZXN1bHQudmFsdWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWFwID0gbWFwO1xyXG5mdW5jdGlvbiBjb21wbGV0ZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJjb21wbGV0ZVwiLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UobWFwKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dC5yZXN0TGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiaW5jb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSwgaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG5mdW5jdGlvbiBwcmVzZW50KHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInByZXNlbnRcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKHNvdXJjZSwgaW5wdXQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZXEobmV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnByZXNlbnQgPSBwcmVzZW50O1xyXG5mdW5jdGlvbiB1bnJlYWNoYWJsZSh2YWx1ZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWFjaGFibGUgY29kZSByZWFjaGVkXCIpO1xyXG59XHJcbmV4cG9ydHMudW5yZWFjaGFibGUgPSB1bnJlYWNoYWJsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNuaXBwZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTbmlwcGV0KHNvdXJjZSwgb2Zmc2V0LCBsZW5ndGgsIGxvZ2dlcikge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgfVxyXG4gICAgU25pcHBldC5pbnB1dCA9IGZ1bmN0aW9uIChzb3VyY2UsIGxvZ2dlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldChzb3VyY2UsIDAsIDAsIGxvZ2dlcik7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGNvbWJpbmF0b3IsIGlucHV0LCBfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBmb3JjZVRyYW5zcGFyZW50ID0gX2IuZm9yY2VUcmFuc3BhcmVudCwgY29udGV4dCA9IF9iLmNvbnRleHQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLmludm9rZShjb21iaW5hdG9yLCBpbnB1dCk7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuZXEgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc291cmNlID09PSBvdGhlci5zb3VyY2UgJiZcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPT09IG90aGVyLm9mZnNldCAmJlxyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9PT0gb3RoZXIubGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5mbXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPG9mZnNldDpcIiArIHRoaXMub2Zmc2V0ICsgXCIgbGVuZ3RoOlwiICsgdGhpcy5sZW5ndGggKyBcIj5cIjtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5kZWJ1Z1Jlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIoZW9mKVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoY2hhcnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIGNoYXJzLCB0aGlzLmxvZ2dlcik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInNsaWNlUmVzdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJyZXN0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCAwLCB0aGlzLmxvZ2dlcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5pc0VPRiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCA9PT0gdGhpcy5zb3VyY2UubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmlzTWF0Y2ggPSBmdW5jdGlvbiAoY2hhcnMpIHtcclxuICAgICAgICB2YXIgc2xpY2UgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoICsgY2hhcnMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gc2xpY2UgPT09IGNoYXJzO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChjb3VudCkge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gdm9pZCAwKSB7IGNvdW50ID0gMTsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQsIHRoaXMubGVuZ3RoICsgY291bnQsIHRoaXMubG9nZ2VyKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwic3BhblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJmcmFnbWVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwicmVzdExlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5sZW5ndGggLSB0aGlzLm9mZnNldCAtIHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFNuaXBwZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU25pcHBldCA9IFNuaXBwZXQ7XHJcbmZ1bmN0aW9uIG9rKHZhbHVlKSB7XHJcbiAgICByZXR1cm4geyBraW5kOiBcIm9rXCIsIHZhbHVlOiB2YWx1ZSB9O1xyXG59XHJcbmV4cG9ydHMub2sgPSBvaztcclxuZnVuY3Rpb24gZXJyKHNuaXBwZXQsIHJlYXNvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBraW5kOiBcImVyclwiLFxyXG4gICAgICAgIHNuaXBwZXQ6IHNuaXBwZXQsXHJcbiAgICAgICAgcmVhc29uOiByZWFzb25cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lcnIgPSBlcnI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHNwYW4oc3RhcnQsIGVuZCkge1xyXG4gICAgcmV0dXJuIHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IGVuZCB9O1xyXG59XHJcbmV4cG9ydHMuc3BhbiA9IHNwYW47XHJcbmZ1bmN0aW9uIHJhbmdlKCkge1xyXG4gICAgdmFyIHNwYW5zID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHNwYW5zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoc3BhbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHNwYW4oMCwgMCk7XHJcbiAgICB9XHJcbiAgICB2YXIgZmlyc3QgPSBzcGFuc1swXTtcclxuICAgIHZhciBsYXN0ID0gZmlyc3Q7XHJcbiAgICBmb3IgKHZhciBfYSA9IDAsIHNwYW5zXzEgPSBzcGFuczsgX2EgPCBzcGFuc18xLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgIHZhciBzcGFuXzEgPSBzcGFuc18xW19hXTtcclxuICAgICAgICBsYXN0ID0gc3Bhbl8xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3RhcnQ6IGdldFNwYW4oZmlyc3QpLnN0YXJ0LCBlbmQ6IGdldFNwYW4obGFzdCkuZW5kIH07XHJcbn1cclxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xyXG5mdW5jdGlvbiBpc1NwYW4oaXRlbSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtLnN0YXJ0ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBpdGVtLmVuZCA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5leHBvcnRzLmlzU3BhbiA9IGlzU3BhbjtcclxuZnVuY3Rpb24gZ2V0U3BhbihpdGVtKSB7XHJcbiAgICBpZiAoaXNTcGFuKGl0ZW0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5zcGFuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZ2V0U3BhbiA9IGdldFNwYW47XHJcbmZ1bmN0aW9uIHNsaWNlKHNwYW4sIHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHNvdXJjZS5zbGljZShzcGFuLnN0YXJ0LCBzcGFuLmVuZCk7XHJcbn1cclxuZXhwb3J0cy5zbGljZSA9IHNsaWNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9