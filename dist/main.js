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
exports.TAG_NAME = combinators_1.pattern(/^[A-Za-z][^/>\0\s]+/, "TAG_NAME");
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
exports.ATTRIBUTE_NAME = utils_1.map(combinators_1.pattern(/^[^/>\o"'<=].*?(?=[\u0009\u000a\u000C\u0020/=>\0"'<])/, "ATTRIBUTE_NAME"), function (name) { return snippet_1.ok(tokens_1.attrName(name.span)); });
exports.ATTRIBUTE_VALUE = combinators_1.pick({
    dq: combinators_1.seq(combinators_1.tag("\""), combinators_1.pattern(/^[^"]*/, "dq contents"), combinators_1.tag("\"")),
    sq: combinators_1.seq(combinators_1.tag("'"), combinators_1.pattern(/^[^']*/, "sq contents"), combinators_1.tag("'")),
    unquoted: combinators_1.pattern(/^[^\0009\000A\000C\0020>\0"'<=`]+/, "unquoted contents")
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
exports.ATTRIBUTES = utils_1.map(combinators_1.seq(hbs_1.WS, multi_1.many(combinators_1.any(exports.ATTRIBUTE, hbs_1.WS))), function (_a) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvaGJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvbXVsdGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvcmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9zZXJpYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdG9rZW4tYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xHYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRpb24oZXhwciwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAwIC8qIEludGVycG9sYXRpb24gKi8sXHJcbiAgICAgICAgZXhwcjogZXhwcixcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb247XHJcbmZ1bmN0aW9uIGlkKG5hbWUsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogMiAvKiBJZGVudGlmaWVyICovLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgc3Bhbjogc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmlkID0gaWQ7XHJcbmZ1bmN0aW9uIHBhdGgoaGVhZCwgdGFpbCkge1xyXG4gICAgaWYgKHRhaWwgPT09IHZvaWQgMCkgeyB0YWlsID0gW107IH1cclxuICAgIGlmICh0YWlsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAxIC8qIFBhdGggKi8sXHJcbiAgICAgICAgICAgIGhlYWQ6IGhlYWQsXHJcbiAgICAgICAgICAgIHRhaWw6IHRhaWwsXHJcbiAgICAgICAgICAgIHNwYW46IHsgc3RhcnQ6IGhlYWQuc3Bhbi5zdGFydCwgZW5kOiB0YWlsW3RhaWwubGVuZ3RoIC0gMV0uc3Bhbi5lbmQgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAxIC8qIFBhdGggKi8sXHJcbiAgICAgICAgICAgIGhlYWQ6IGhlYWQsXHJcbiAgICAgICAgICAgIHNwYW46IGhlYWQuc3BhblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wYXRoID0gcGF0aDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbWJpbmF0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvY29tYmluYXRvcnNcIikpO1xyXG5leHBvcnRzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XHJcbnZhciBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vcmVhZC9jb21iaW5hdG9yc1wiKTtcclxuZXhwb3J0cy5Mb2dnZXIgPSBjb21iaW5hdG9yc18xLkxvZ2dlcjtcclxudmFyIG11bHRpID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvbXVsdGlcIikpO1xyXG5leHBvcnRzLm11bHRpID0gbXVsdGk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NuaXBwZXRcIikpO1xyXG52YXIgYXN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzdFwiKSk7XHJcbmV4cG9ydHMuYXN0ID0gYXN0O1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL2hic1wiKSk7XHJcbnZhciB0b2tlbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC90b2tlbnNcIikpO1xyXG5leHBvcnRzLnRva2VucyA9IHRva2VucztcclxuX19leHBvcnQocmVxdWlyZShcIi4vc3BhblwiKSk7XHJcbnZhciBiID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvdG9rZW4tYnVpbGRlclwiKSk7XHJcbmV4cG9ydHMuYiA9IGI7XHJcbnZhciB1dGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3V0aWxzXCIpKTtcclxuZXhwb3J0cy51dGlscyA9IHV0aWxzO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3NlcmlhbGl6ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvcmVhZFwiKSk7XHJcbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciBkZWJ1Z18xID0gcmVxdWlyZShcIi4vZGVidWdcIik7XHJcbnZhciB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuZnVuY3Rpb24gZm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlKSB7XHJcbiAgICBpZiAodHlwZW9mIGRlYnVnZ2FibGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZGVidWdnYWJsZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnZ2FibGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRlYnVnZ2FibGUpKSB7XHJcbiAgICAgICAgaWYgKGRlYnVnZ2FibGUubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiW1wiICsgZGVidWdnYWJsZS5tYXAoZm9ybWF0RGVidWdnYWJsZSkuam9pbihcIiwgXCIpICsgXCJdXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJbXCIgKyBmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGVbMF0pICsgXCIsIFwiICsgZm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzFdKSArIFwiLCBcIiArIGZvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZVsyXSkgKyBcIiwgLi4uXVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnZ2FibGUgaW5zdGFuY2VvZiBzbmlwcGV0XzEuU25pcHBldCkge1xyXG4gICAgICAgIHJldHVybiBkZWJ1Z2dhYmxlLmZtdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vuc18xLmRlYnVnRm9ybWF0VG9rZW4oZGVidWdnYWJsZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY29tYmluYXRvck5hbWUoY29tYmluYXRvcikge1xyXG4gICAgaWYgKGNvbWJpbmF0b3IubmFtZSkge1xyXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yLm5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGNvbWJpbmF0b3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFzc2VydDogZXhwZWN0ZWQgY29tYmluYXRvciBuYW1lXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvck5hbWUgPSBjb21iaW5hdG9yTmFtZTtcclxuZnVuY3Rpb24gY29tYmluYXRvclR5cGUoY29tYmluYXRvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb21iaW5hdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gXCJub3JtYWxcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yLmtpbmQgfHwgXCJub3JtYWxcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNvbWJpbmF0b3JUeXBlID0gY29tYmluYXRvclR5cGU7XHJcbmZ1bmN0aW9uIGlzVHJhbnNwYXJlbnQoY29tYmluYXRvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb21iaW5hdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY29tYmluYXRvci5raW5kID09PSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pc1RyYW5zcGFyZW50ID0gaXNUcmFuc3BhcmVudDtcclxuZnVuY3Rpb24gdGFnKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInN0cmluZyBcXHUwMEFCXCIgKyBzb3VyY2UgKyBcIlxcdTAwQkJcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0LnNsaWNlKHNvdXJjZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAobmV4dC5mcmFnbWVudCA9PT0gc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGtpbmQ6IFwiZXJyXCIsIHNuaXBwZXQ6IGlucHV0LCByZWFzb246IFwidGFnXCIgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50YWcgPSB0YWc7XHJcbmZ1bmN0aW9uIHBhdHRlcm4oc291cmNlLCBuYW1lKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwicGF0dGVybiAoXCIgKyBuYW1lICsgXCIpXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3QgPSBpbnB1dC5zbGljZVJlc3Q7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHJlc3QubWF0Y2goc291cmNlKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dC5zbGljZShtYXRjaGVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInBhdHRlcm5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucGF0dGVybiA9IHBhdHRlcm47XHJcbmZ1bmN0aW9uIHRha2VVbnRpbChwYXR0ZXJuKSB7XHJcbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBcInRha2VVbnRpbFwiLFxyXG4gICAgICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQuaXNFT0YoKSB8fCBuZXh0LmlzTWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VVbnRpbCA9IHRha2VVbnRpbDtcclxuZnVuY3Rpb24gdGFrZVdoaWxlKHBhdHRlcm4pIHtcclxuICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidGFrZVdoaWxlXCIsXHJcbiAgICAgICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0LmlzTWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuZXh0ZW5kKHBhdHRlcm4ubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwidGFrZVdoaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VXaGlsZSA9IHRha2VXaGlsZTtcclxudmFyIExvZ2dlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvZ2dlcihlbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVMb2dnaW5nID0gZW5hYmxlTG9nZ2luZztcclxuICAgIH1cclxuICAgIExvZ2dlci5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGNvbWJpbmF0b3IsIGlucHV0LCBfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBmb3JjZVRyYW5zcGFyZW50ID0gX2IuZm9yY2VUcmFuc3BhcmVudCwgY29udGV4dCA9IF9iLmNvbnRleHQ7XHJcbiAgICAgICAgdmFyIGxvZ2dlZCA9IHRoaXMuZW5hYmxlTG9nZ2luZyAmJiAhaXNUcmFuc3BhcmVudChjb21iaW5hdG9yKSAmJiAhZm9yY2VUcmFuc3BhcmVudDtcclxuICAgICAgICBpZiAobG9nZ2VkKSB7XHJcbiAgICAgICAgICAgIGRlYnVnXzEucm93KHsgcmVzdWx0OiBcInN0YXJ0XCIsIGFycm93OiBkZWJ1Z18xLmluZGVudFdTKCkgKyBcIi0+XCIsIGNvbWJpbmF0b3I6IGNvbWJpbmF0b3IsIGNvbnRleHQ6IGNvbnRleHQgfSwgXCJcIiwgaW5wdXQuZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICBkZWJ1Z18xLmluZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gY29tYmluYXRvci5pbnZva2UoaW5wdXQpO1xyXG4gICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgZGVidWdfMS5vdXRkZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnXzEucm93KHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93OiBkZWJ1Z18xLmluZGVudFdTKCkgKyBcIjwtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcjogY29tYmluYXRvcixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICB9LCBmb3JtYXREZWJ1Z2dhYmxlKHJlc3VsdC52YWx1ZVsxXSksIHJlc3VsdC52YWx1ZVswXS5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnXzEucm93KHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdzogZGVidWdfMS5pbmRlbnRXUygpICsgXCI8LVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmF0b3I6IGNvbWJpbmF0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxyXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0LnJlYXNvbiwgcmVzdWx0LnNuaXBwZXQuZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExvZ2dlcjtcclxufSgpKTtcclxuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XHJcbmZ1bmN0aW9uIHNlcSgpIHtcclxuICAgIHZhciBjb21iaW5hdG9ycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBjb21iaW5hdG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInNlcVwiLFxyXG4gICAgICAgIGtpbmQ6IFwiYXJtXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbWJpbmF0b3JzXzEgPSBjb21iaW5hdG9yczsgX2kgPCBjb21iaW5hdG9yc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjb21iaW5hdG9yc18xW19pXTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UoaXRlbSwgY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gbmV4dC5yZXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXEgPSBzZXE7XHJcbmZ1bmN0aW9uIGFueSgpIHtcclxuICAgIHZhciBjb21iaW5hdG9ycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBjb21iaW5hdG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcImFueVwiLFxyXG4gICAgICAgIGtpbmQ6IFwiYXJtXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjb21iaW5hdG9yc18yID0gY29tYmluYXRvcnM7IF9pIDwgY29tYmluYXRvcnNfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY29tYmluYXRvcnNfMltfaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGl0ZW0sIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImFueVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYW55ID0gYW55O1xyXG5mdW5jdGlvbiBwaWNrKGNvbWJpbmF0b3JzLCBjYWxsYmFja3MpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJwaWNrXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKGNvbWJpbmF0b3JzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgbmFtZV8xID0gX2JbMF0sIGl0ZW0gPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgIHZhciBmaXJzdFJlc3VsdCA9IGlucHV0Lmludm9rZShpdGVtLCBjdXJyZW50LCB7IGNvbnRleHQ6IG5hbWVfMSB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdFJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSBmaXJzdFJlc3VsdC52YWx1ZSwgbmV4dCA9IF9jWzBdLCB2YWx1ZSA9IF9jWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFja3NbbmFtZV8xXSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJhbnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnBpY2sgPSBwaWNrO1xyXG5mdW5jdGlvbiBtYXliZShjb21iaW5hdG9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwibWF5YmVcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtpbnB1dCwgbnVsbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYXliZSA9IG1heWJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgdGFibGUgPSBbXTtcclxuZnVuY3Rpb24gcm93KF9hLCBhLCBiKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0LCBhcnJvdyA9IF9hLmFycm93LCBjb21iaW5hdG9yID0gX2EuY29tYmluYXRvciwgY29udGV4dCA9IF9hLmNvbnRleHQ7XHJcbiAgICB2YXIgbmFtZSA9IGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvcik7XHJcbiAgICBpZiAoY29udGV4dCkge1xyXG4gICAgICAgIG5hbWUgPSBjb250ZXh0ICsgXCI6IFwiICsgbmFtZTtcclxuICAgIH1cclxuICAgIHRhYmxlLnB1c2goe1xyXG4gICAgICAgIHN0eWxlOiB7IHJlc3VsdDogcmVzdWx0LCBraW5kOiBjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JUeXBlKGNvbWJpbmF0b3IpIH0sXHJcbiAgICAgICAgZGF0YTogW2Fycm93LCBuYW1lLCBhLCBiXVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yb3cgPSByb3c7XHJcbmZ1bmN0aW9uIHNuaXBwZXRTdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZS5yZXN1bHQpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICMzMzNcIjtcclxuICAgICAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogZ3JlZW5cIjtcclxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IHJlZFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc25pcHBldFN0eWxlID0gc25pcHBldFN0eWxlO1xyXG5mdW5jdGlvbiBhcm1TdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZS5yZXN1bHQpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgc3dpdGNoIChzdHlsZS5raW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXJtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICNiYmJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogIzMzM1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IGdyZWVuXCI7XHJcbiAgICAgICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiByZWRcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmFybVN0eWxlID0gYXJtU3R5bGU7XHJcbmZ1bmN0aW9uIHByaW50RGVidWcoKSB7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHRhYmxlXzEgPSB0YWJsZTsgX2kgPCB0YWJsZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBfYSA9IHRhYmxlXzFbX2ldLCBzdHlsZSA9IF9hLnN0eWxlLCBfYiA9IF9hLmRhdGEsIGFycm93ID0gX2JbMF0sIG5hbWVfMSA9IF9iWzFdLCBhID0gX2JbMl0sIGIgPSBfYlszXTtcclxuICAgICAgICB2YXIgZmlyc3QgPSAoYXJyb3cgKyBcIiAlY1wiICsgbmFtZV8xICsgXCIlY1wiKS5wYWRFbmQoNjApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0ICsgXCIgfCAlY1wiICsgYiArIFwiJWMgfFwiLCBhcm1TdHlsZShzdHlsZSksIFwiY29sb3I6ICMzMzNcIiwgc25pcHBldFN0eWxlKHN0eWxlKSwgXCJjb2xvcjogIzMzM1wiLCBhKTtcclxuICAgIH1cclxuICAgIHRhYmxlID0gW107XHJcbn1cclxuZXhwb3J0cy5wcmludERlYnVnID0gcHJpbnREZWJ1ZztcclxudmFyIFRBQiA9IDA7XHJcbmZ1bmN0aW9uIGluZGVudCgpIHtcclxuICAgIFRBQiArPSAxO1xyXG59XHJcbmV4cG9ydHMuaW5kZW50ID0gaW5kZW50O1xyXG5mdW5jdGlvbiBvdXRkZW50KCkge1xyXG4gICAgVEFCIC09IDE7XHJcbn1cclxuZXhwb3J0cy5vdXRkZW50ID0gb3V0ZGVudDtcclxuZnVuY3Rpb24gaW5kZW50V1MoKSB7XHJcbiAgICByZXR1cm4gXCIgXCIucmVwZWF0KFRBQik7XHJcbn1cclxuZXhwb3J0cy5pbmRlbnRXUyA9IGluZGVudFdTO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG4vLyBpbXBvcnQgeyBURVhULCBTVEFSVF9UQUcsIEVORF9UQUcgfSBmcm9tIFwiLi9odG1sXCI7XHJcbmV4cG9ydHMuU1BBQ0VEX1RPS0VOUyA9IHtcclxuICAgIG5hbWU6IFwiU1BBQ0VEX1RPS0VOU1wiLFxyXG4gICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgdmFyIHRrID0gY29tYmluYXRvcnNfMS5hbnkod3JhcChleHBvcnRzLlNFWFApLCBleHBvcnRzLk5BTUVELCBleHBvcnRzLlBBVEgsIHdyYXAoZXhwb3J0cy5XUykpO1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZSh0aywgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHRva2VucyA9IF9hWzFdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18yID0gdG9rZW5zOyBfaSA8IHRva2Vuc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuXzEgPSB0b2tlbnNfMltfaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbl8xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoLmFwcGx5KG91dCwgdG9rZW5fMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCh0b2tlbl8xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG91dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IFwicHJlc2VudFwiLFxyXG4gICAgICAgICAgICAgICAgc25pcHBldDogaW5wdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudCwgb3V0XSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuSU5URVJQT0xBVEUgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShjb21iaW5hdG9yc18xLnRhZyhcInt7XCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwifX1cIikpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBvcGVuID0gX2FbMF0sIHBhdGggPSBfYVsxXSwgY2xvc2UgPSBfYVsyXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuaW50ZXJwb2xhdGUocGF0aCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpO1xyXG59KTtcclxuZXhwb3J0cy5TRVhQID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCIoXCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwiKVwiKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIG9wZW4gPSBfYVswXSwgcGF0aCA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zZXhwKHBhdGgsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKTtcclxufSk7XHJcbnZhciBJRF9TTklQUEVUID0gY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eXFxwe0lEX1N0YXJ0fVtcXHB7SURfQ29udGludWV9LV0qL3UsIFwiSURfU05JUFBFVFwiKTtcclxuZXhwb3J0cy5JRCA9IHRva2VuKElEX1NOSVBQRVQsIFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi8pO1xyXG5leHBvcnRzLkRPVCA9IHRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiLlwiKSwgXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLldTID0gdG9rZW4oY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW1xcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjBdKy91LCBcIldTXCIpLCBcIldTXCIgLyogV1MgKi8pO1xyXG5leHBvcnRzLkVRID0gdG9rZW4oY29tYmluYXRvcnNfMS50YWcoXCI9XCIpLCBcIkVxXCIgLyogRXEgKi8pO1xyXG52YXIgQVJHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCJAXCIpLCBJRF9TTklQUEVUKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgYXQgPSBfYVswXSwgaWQgPSBfYVsxXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXJnKHNwYW5fMS5yYW5nZShhdCwgaWQpKSk7XHJcbn0pO1xyXG5mdW5jdGlvbiB3cmFwKGNvbWJpbmF0b3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJ3cmFwXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShjb21iaW5hdG9yLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW3Jlc3VsdC52YWx1ZVswXSwgW3Jlc3VsdC52YWx1ZVsxXV1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy53cmFwID0gd3JhcDtcclxuZnVuY3Rpb24gdG9rZW4oY29tYmluYXRvciwgdHlwZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInRva2VuIChcIiArIGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvcikgKyBcIilcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZVswXSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IHJlc3VsdC52YWx1ZVsxXS5zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudG9rZW4gPSB0b2tlbjtcclxuZXhwb3J0cy5QQVRIID0ge1xyXG4gICAgbmFtZTogXCJQQVRIXCIsXHJcbiAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UoZXhwb3J0cy5IRUFELCBpbnB1dCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgY3VycmVudCA9IF9hWzBdLCBoZWFkID0gX2FbMV07XHJcbiAgICAgICAgdmFyIG91dCA9IFtoZWFkXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0RG90ID0gaW5wdXQuaW52b2tlKGV4cG9ydHMuRE9ULCBjdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdERvdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0RG90LnZhbHVlWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV4dERvdCA9IHJlc3VsdERvdC52YWx1ZVsxXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdE1lbWJlciA9IGlucHV0Lmludm9rZShleHBvcnRzLk1FTUJFUiwgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRNZW1iZXIua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE1lbWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0TWVtYmVyLnZhbHVlWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV4dE1lbWJlciA9IHJlc3VsdE1lbWJlci52YWx1ZVsxXTtcclxuICAgICAgICAgICAgb3V0LnB1c2gobmV4dERvdCwgbmV4dE1lbWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLk5BTUVEID0gY29tYmluYXRvcnNfMS5zZXEoZXhwb3J0cy5JRCwgZXhwb3J0cy5FUSwgZXhwb3J0cy5QQVRIKTtcclxuZXhwb3J0cy5IRUFEID0gY29tYmluYXRvcnNfMS5hbnkoQVJHLCBleHBvcnRzLklEKTtcclxuLy8gVE9ETzogQWxsb3cgYFtdYCBvciBzdHJpbmcgbWVtYmVyc1xyXG5leHBvcnRzLk1FTUJFUiA9IGV4cG9ydHMuSUQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG52YXIgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbnZhciBtdWx0aV8xID0gcmVxdWlyZShcIi4vbXVsdGlcIik7XHJcbmV4cG9ydHMuVEVYVCA9IHtcclxuICAgIG5hbWU6IFwiVEVYVFwiLFxyXG4gICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEudGFrZVVudGlsKFwie3tcIiksIGlucHV0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgdG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKV0pO1xyXG4gICAgfVxyXG59O1xyXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy90b2tlbml6YXRpb24uaHRtbCN0YWctbmFtZS1zdGF0ZVxyXG5leHBvcnRzLlRBR19OQU1FID0gY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW0EtWmEtel1bXi8+XFwwXFxzXSsvLCBcIlRBR19OQU1FXCIpO1xyXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy90b2tlbml6YXRpb24uaHRtbCNiZWZvcmUtYXR0cmlidXRlLW5hbWUtc3RhdGVcclxuZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteLz5cXG9cIic8PV0uKj8oPz1bXFx1MDAwOVxcdTAwMGFcXHUwMDBDXFx1MDAyMC89PlxcMFwiJzxdKS8sIFwiQVRUUklCVVRFX05BTUVcIiksIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0ck5hbWUobmFtZS5zcGFuKSk7IH0pO1xyXG5leHBvcnRzLkFUVFJJQlVURV9WQUxVRSA9IGNvbWJpbmF0b3JzXzEucGljayh7XHJcbiAgICBkcTogY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCJcXFwiXCIpLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlwiXSovLCBcImRxIGNvbnRlbnRzXCIpLCBjb21iaW5hdG9yc18xLnRhZyhcIlxcXCJcIikpLFxyXG4gICAgc3E6IGNvbWJpbmF0b3JzXzEuc2VxKGNvbWJpbmF0b3JzXzEudGFnKFwiJ1wiKSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW14nXSovLCBcInNxIGNvbnRlbnRzXCIpLCBjb21iaW5hdG9yc18xLnRhZyhcIidcIikpLFxyXG4gICAgdW5xdW90ZWQ6IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteXFwwMDA5XFwwMDBBXFwwMDBDXFwwMDIwPlxcMFwiJzw9YF0rLywgXCJ1bnF1b3RlZCBjb250ZW50c1wiKVxyXG59LCB7XHJcbiAgICBkcTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBfYVswXSwgc3RyaW5nID0gX2FbMV0sIGNsb3NlID0gX2FbMl07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoeyB0eXBlOiBcIkRvdWJsZVF1b3RlZFwiIC8qIERvdWJsZVF1b3RlZCAqLywgdmFsdWU6IHN0cmluZy5zcGFuIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKTtcclxuICAgIH0sXHJcbiAgICBzcTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBfYVswXSwgc3RyaW5nID0gX2FbMV0sIGNsb3NlID0gX2FbMl07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoeyB0eXBlOiBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLywgdmFsdWU6IHN0cmluZy5zcGFuIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKTtcclxuICAgIH0sXHJcbiAgICB1bnF1b3RlZDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoeyB0eXBlOiBcIlVucXVvdGVkXCIgLyogVW5xdW90ZWQgKi8sIHZhbHVlOiB2YWx1ZS5zcGFuIH0sIHZhbHVlLnNwYW4pKTtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydHMuQVRUUklCVVRFID0gY29tYmluYXRvcnNfMS5waWNrKHtcclxuICAgIHZhbHVlZDogY29tYmluYXRvcnNfMS5zZXEoZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSwgaGJzXzEuRVEsIGV4cG9ydHMuQVRUUklCVVRFX1ZBTFVFKSxcclxuICAgIGJhcmU6IGV4cG9ydHMuQVRUUklCVVRFX05BTUVcclxufSwge1xyXG4gICAgdmFsdWVkOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzJdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEudmFsdWVkQXR0cih7IG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSB9LCBzcGFuXzEucmFuZ2UobmFtZSwgdmFsdWUpKSk7XHJcbiAgICB9LFxyXG4gICAgYmFyZTogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0ck5hbWUodmFsdWUuc3BhbikpOyB9XHJcbn0pO1xyXG5leHBvcnRzLkFUVFJJQlVURVMgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShoYnNfMS5XUywgbXVsdGlfMS5tYW55KGNvbWJpbmF0b3JzXzEuYW55KGV4cG9ydHMuQVRUUklCVVRFLCBoYnNfMS5XUykpKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgd3MgPSBfYVswXSwgYXR0cnMgPSBfYVsxXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2soX19zcHJlYWRBcnJheXMoW3dzXSwgYXR0cnMpKTtcclxufSk7XHJcbmV4cG9ydHMuU1RBUlRfVEFHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCI8XCIpLCBleHBvcnRzLlRBR19OQU1FLCBjb21iaW5hdG9yc18xLm1heWJlKGV4cG9ydHMuQVRUUklCVVRFUyksIGNvbWJpbmF0b3JzXzEudGFnKFwiPlwiKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHN0YXJ0ID0gX2FbMF0sIG5hbWUgPSBfYVsxXSwgYXR0cnMgPSBfYVsyXSwgZW5kID0gX2FbM107XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnN0YXJ0VGFnKHsgbmFtZTogbmFtZS5zcGFuLCBhdHRyczogYXR0cnMgfHwgdW5kZWZpbmVkIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSkpO1xyXG59KTtcclxuZXhwb3J0cy5FTkRfVEFHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCI8L1wiKSwgZXhwb3J0cy5UQUdfTkFNRSwgY29tYmluYXRvcnNfMS5tYXliZShoYnNfMS5XUyksIGNvbWJpbmF0b3JzXzEudGFnKFwiPlwiKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHN0YXJ0ID0gX2FbMF0sIG5hbWUgPSBfYVsxXSwgdHJhaWxpbmcgPSBfYVsyXSwgZW5kID0gX2FbM107XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmVuZFRhZyh7IG5hbWU6IG5hbWUuc3BhbiwgdHJhaWxpbmc6IHRyYWlsaW5nIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSkpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiBtYW55KHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcIm1hbnlcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpdGVyYXRlID0gaW5wdXQuaW52b2tlKHNvdXJjZSwgY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0ZS5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IGl0ZXJhdGUudmFsdWUsIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWFueSA9IG1hbnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgbXVsdGlfMSA9IHJlcXVpcmUoXCIuL211bHRpXCIpO1xyXG52YXIgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBodG1sXzEgPSByZXF1aXJlKFwiLi9odG1sXCIpO1xyXG52YXIgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbnZhciBkZWJ1Z18xID0gcmVxdWlyZShcIi4vZGVidWdcIik7XHJcbmZ1bmN0aW9uIHJlYWQoc291cmNlLCBfYSkge1xyXG4gICAgdmFyIGxvZ2dpbmcgPSBfYS5sb2dnaW5nO1xyXG4gICAgdmFyIGlucHV0ID0gc25pcHBldF8xLlNuaXBwZXQuaW5wdXQoc291cmNlLCBuZXcgY29tYmluYXRvcnNfMS5Mb2dnZXIobG9nZ2luZyB8fCBmYWxzZSkpO1xyXG4gICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZSh1dGlsc18xLmNvbXBsZXRlKHV0aWxzXzEubWFwKG11bHRpXzEubWFueShjb21iaW5hdG9yc18xLmFueShoYnNfMS5JTlRFUlBPTEFURSwgZXhwb3J0cy5DT05URU5UKSksIGZ1bmN0aW9uICh0b2tlbnMpIHtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnJvb3QodG9rZW5zLCBzcGFuXzEucmFuZ2UuYXBwbHkodm9pZCAwLCB0b2tlbnMpKSk7XHJcbiAgICB9KSksIGlucHV0KTtcclxuICAgIGlmIChsb2dnaW5nKSB7XHJcbiAgICAgICAgZGVidWdfMS5wcmludERlYnVnKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXRpbHNfMS5tYXBSZXN1bHQocmVzdWx0LCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBfYVsxXTtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2VuKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucmVhZCA9IHJlYWQ7XHJcbmV4cG9ydHMuQ09OVEVOVCA9IGNvbWJpbmF0b3JzXzEuYW55KGh0bWxfMS5FTkRfVEFHLCBodG1sXzEuU1RBUlRfVEFHLCBodG1sXzEuVEVYVCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVJvb3Qocm9vdCwgc291cmNlKSB7XHJcbiAgICB2YXIgb3V0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gcm9vdC5jaGlsZHJlbjsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBfYVtfaV07XHJcbiAgICAgICAgb3V0LnB1c2guYXBwbHkob3V0LCBzZXJpYWxpemVOb2RlKHRva2VuLCBzb3VyY2UpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXQuam9pbihcIlwiKTtcclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZVJvb3QgPSBzZXJpYWxpemVSb290O1xyXG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlKHRva2VuLCBzb3VyY2UpIHtcclxuICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBbXCJcIl07XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuICAgICAgICAvLyBsZWFmIHRva2Vuc1xyXG4gICAgICAgIGNhc2UgXCJEb3RcIiAvKiBEb3QgKi86XHJcbiAgICAgICAgY2FzZSBcIkVxXCIgLyogRXEgKi86XHJcbiAgICAgICAgY2FzZSBcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovOlxyXG4gICAgICAgIGNhc2UgXCJXU1wiIC8qIFdTICovOlxyXG4gICAgICAgIGNhc2UgXCJUZXh0XCIgLyogVGV4dCAqLzpcclxuICAgICAgICBjYXNlIFwiQXR0cmlidXRlTmFtZVwiIC8qIEF0dHJpYnV0ZU5hbWUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbc3Bhbl8xLnNsaWNlKHRva2VuLnNwYW4sIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJBdHRyaWJ1dGVWYWx1ZVwiIC8qIEF0dHJpYnV0ZVZhbHVlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pLFxyXG4gICAgICAgICAgICAgICAgc3Bhbl8xLnNsaWNlKHRva2VuLnZhbHVlLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSBcIkFyZ3VtZW50XCIgLyogQXJndW1lbnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJAXCIsIHNwYW5fMS5zbGljZSh0b2tlbi5uYW1lLCBzb3VyY2UpXTtcclxuICAgICAgICBjYXNlIFwiU2V4cFwiIC8qIFNleHAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbXCIoXCJdLCBzZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBbXCIpXCJdKTtcclxuICAgICAgICBjYXNlIFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFtcInt7XCJdLCBzZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBbXCJ9fVwiXSk7XHJcbiAgICAgICAgY2FzZSBcIlRydXN0ZWRJbnRlcnBvbGF0ZVwiIC8qIFRydXN0ZWRJbnRlcnBvbGF0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFtcInt7e1wiXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgW1wifX19XCJdKTtcclxuICAgICAgICBjYXNlIFwiU3RhcnRUYWdcIiAvKiBTdGFydFRhZyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFtcclxuICAgICAgICAgICAgICAgIFwiPFwiLFxyXG4gICAgICAgICAgICAgICAgc3Bhbl8xLnNsaWNlKHRva2VuLm5hbWUsIHNvdXJjZSlcclxuICAgICAgICAgICAgXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5hdHRyaWJ1dGVzLCBzb3VyY2UpLCBbXHJcbiAgICAgICAgICAgICAgICBcIj5cIlxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICBjYXNlIFwiRW5kVGFnXCIgLyogRW5kVGFnICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1xyXG4gICAgICAgICAgICAgICAgXCI8L1wiLFxyXG4gICAgICAgICAgICAgICAgc3Bhbl8xLnNsaWNlKHRva2VuLm5hbWUsIHNvdXJjZSlcclxuICAgICAgICAgICAgXSwgc2VyaWFsaXplTm9kZSh0b2tlbi50cmFpbGluZywgc291cmNlKSwgW1xyXG4gICAgICAgICAgICAgICAgXCI+XCJcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgY2FzZSBcIlZhbHVlZEF0dHJpYnV0ZVwiIC8qIFZhbHVlZEF0dHJpYnV0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKHNlcmlhbGl6ZU5vZGUodG9rZW4ubmFtZSwgc291cmNlKSwgW1xyXG4gICAgICAgICAgICAgICAgXCI9XCJcclxuICAgICAgICAgICAgXSwgc2VyaWFsaXplTm9kZSh0b2tlbi52YWx1ZSwgc291cmNlKSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzXzEudW5yZWFjaGFibGUodG9rZW4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc2VyaWFsaXplTm9kZSA9IHNlcmlhbGl6ZU5vZGU7XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVF1b3RlKHRva2VuKSB7XHJcbiAgICBzd2l0Y2ggKHRva2VuLnZhbHVlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJTaW5nbGVRdW90ZWRcIiAvKiBTaW5nbGVRdW90ZWQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcIidcIjtcclxuICAgICAgICBjYXNlIFwiRG91YmxlUXVvdGVkXCIgLyogRG91YmxlUXVvdGVkICovOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplTGlzdCh0b2tlbnMsIHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKHRva2Vucy5mbGF0TWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gc2VyaWFsaXplTm9kZShjaGlsZCwgc291cmNlKTsgfSkpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHRva2VucyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi90b2tlbnNcIikpO1xyXG52YXIgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmZ1bmN0aW9uIGlkKG5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gdG9rZW5zLmlkKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7IH07XHJcbn1cclxuZXhwb3J0cy5pZCA9IGlkO1xyXG5mdW5jdGlvbiBhcmcobmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiB0b2tlbnMuYXJnKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7IH07XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmV4cG9ydHMuZG90ID0gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHRva2Vucy5kb3QoYnVpbGRlci5jb25zdW1lKFwiLlwiKSk7IH07XHJcbmV4cG9ydHMuZXEgPSBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gdG9rZW5zLmVxKGJ1aWxkZXIuY29uc3VtZShcIj1cIikpOyB9O1xyXG5leHBvcnRzLnNwID0gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgIHJldHVybiB0b2tlbnMud3MoYnVpbGRlci5jb25zdW1lKFwiIFwiKSk7XHJcbn07XHJcbmZ1bmN0aW9uIHdzKHNwYWNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHRva2Vucy53cyhidWlsZGVyLmNvbnN1bWUoc3BhY2UpKTsgfTtcclxufVxyXG5leHBvcnRzLndzID0gd3M7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IGJ1aWxkZXIuY29uc3VtZShcInt7XCIpO1xyXG4gICAgICAgIHZhciBvdXQgPSBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZChidWlsZGVyKTsgfSk7XHJcbiAgICAgICAgdmFyIGNsb3NlID0gYnVpbGRlci5jb25zdW1lKFwifX1cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5pbnRlcnBvbGF0ZShvdXQsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHNleHAoY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwiKFwiKTtcclxuICAgICAgICB2YXIgb3V0ID0gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQoYnVpbGRlcik7IH0pO1xyXG4gICAgICAgIHZhciBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcIilcIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5zZXhwKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2V4cCA9IHNleHA7XHJcbmZ1bmN0aW9uIHRleHQoY2hhcnMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBvdXQgPSBidWlsZGVyLmNvbnN1bWUoY2hhcnMpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMudGV4dChvdXQpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRleHQgPSB0ZXh0O1xyXG5mdW5jdGlvbiBzdGFydFRhZyhvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPFwiKTtcclxuICAgICAgICAgICAgdmFyIG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5zdGFydFRhZyh7IG5hbWU6IG5hbWVTcGFuIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSwgYXR0cnMgPSBvcHRpb25zLmF0dHJzO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8XCIpO1xyXG4gICAgICAgICAgICB2YXIgbmFtZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUobmFtZSk7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGF0dHJzLm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gYXR0cihidWlsZGVyKTsgfSk7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCI+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnN0YXJ0VGFnKHsgbmFtZTogbmFtZVNwYW4sIGF0dHJzOiBjaGlsZHJlbiB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zdGFydFRhZyA9IHN0YXJ0VGFnO1xyXG5mdW5jdGlvbiBlbmRUYWcob3B0aW9ucykge1xyXG4gICAgdmFyIHRhZ05hbWUgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/IG9wdGlvbnMgOiBvcHRpb25zLm5hbWU7XHJcbiAgICB2YXIgdHJhaWxpbmcgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IG9wdGlvbnMudHJhaWxpbmc7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8L1wiKTtcclxuICAgICAgICB2YXIgdGFnID0gYnVpbGRlci5jb25zdW1lKHRhZ05hbWUpO1xyXG4gICAgICAgIHZhciB0cmFpbGluZ1Rva2VuID0gdHJhaWxpbmcgPyB3cyh0cmFpbGluZykoYnVpbGRlcikgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5lbmRUYWcoeyBuYW1lOiB0YWcsIHRyYWlsaW5nOiB0cmFpbGluZ1Rva2VuIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBhdHRyKG9wdGlvbnMpIHtcclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgICAgICB2YXIgbmFtZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMuYXR0ck5hbWUobmFtZVNwYW4pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUsIHJhd1ZhbHVlID0gb3B0aW9ucy52YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgcXVvdGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocmF3VmFsdWVbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJcXFwiXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByYXdWYWx1ZS5zbGljZSgxLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBcIlxcXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCInXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByYXdWYWx1ZS5zbGljZSgxLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBcIidcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByYXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgICAgICAgICAgdmFyIG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUoXCI9XCIpO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWVTdGFydCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICBpZiAocXVvdGUpIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29uc3VtZShxdW90ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChxdW90ZSkge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5jb25zdW1lKHF1b3RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmFsdWVFbmQgPSBidWlsZGVyLnBvcztcclxuICAgICAgICAgICAgdmFyIGVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICB2YXIgbmFtZVRva2VuID0gdG9rZW5zLmF0dHJOYW1lKG5hbWVTcGFuKTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlVG9rZW4gPSB0b2tlbnMuYXR0clZhbHVlKHsgdHlwZTogcXVvdGVUeXBlKHF1b3RlKSwgdmFsdWU6IHZhbHVlU3BhbiB9LCB7IHN0YXJ0OiB2YWx1ZVN0YXJ0LCBlbmQ6IHZhbHVlRW5kIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnZhbHVlZEF0dHIoeyBuYW1lOiBuYW1lVG9rZW4sIHZhbHVlOiB2YWx1ZVRva2VuIH0sIHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IGVuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuYXR0ciA9IGF0dHI7XHJcbmZ1bmN0aW9uIHF1b3RlVHlwZShxdW90ZSkge1xyXG4gICAgc3dpdGNoIChxdW90ZSkge1xyXG4gICAgICAgIGNhc2UgXCJcXFwiXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIkRvdWJsZVF1b3RlZFwiIC8qIERvdWJsZVF1b3RlZCAqLztcclxuICAgICAgICBjYXNlIFwiJ1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTaW5nbGVRdW90ZWRcIiAvKiBTaW5nbGVRdW90ZWQgKi87XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVW5xdW90ZWRcIiAvKiBVbnF1b3RlZCAqLztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuKSB7XHJcbiAgICB2YXIgYnVpbGRlciA9IG5ldyBUb2tlbkJ1aWxkZXIoKTtcclxuICAgIHZhciBzdGFydCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgdmFyIG91dCA9IGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkKGJ1aWxkZXIpOyB9KTtcclxuICAgIHZhciBlbmQgPSBidWlsZGVyLnBvcztcclxuICAgIHJldHVybiB0b2tlbnMucm9vdChvdXQsIHNwYW5fMS5zcGFuKHN0YXJ0LCBlbmQpKTtcclxufVxyXG5leHBvcnRzLnJvb3QgPSByb290O1xyXG52YXIgVG9rZW5CdWlsZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVG9rZW5CdWlsZGVyKHBvcykge1xyXG4gICAgICAgIGlmIChwb3MgPT09IHZvaWQgMCkgeyBwb3MgPSAwOyB9XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICB9XHJcbiAgICBUb2tlbkJ1aWxkZXIucHJvdG90eXBlLmNvbnN1bWUgPSBmdW5jdGlvbiAoY2hhcnMpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcclxuICAgICAgICB0aGlzLnBvcyArPSBjaGFycy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IHRoaXMucG9zIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRva2VuQnVpbGRlcjtcclxufSgpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gbGVhZih0eXBlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNwYW4pIHsgcmV0dXJuICh7IHR5cGU6IHR5cGUsIHNwYW46IHNwYW4gfSk7IH07XHJcbn1cclxuZXhwb3J0cy5sZWFmID0gbGVhZjtcclxuZXhwb3J0cy5pZCA9IGxlYWYoXCJJZGVudGlmaWVyXCIgLyogSWRlbnRpZmllciAqLyk7XHJcbmV4cG9ydHMuZG90ID0gbGVhZihcIkRvdFwiIC8qIERvdCAqLyk7XHJcbmV4cG9ydHMuZXEgPSBsZWFmKFwiRXFcIiAvKiBFcSAqLyk7XHJcbmV4cG9ydHMud3MgPSBsZWFmKFwiV1NcIiAvKiBXUyAqLyk7XHJcbmV4cG9ydHMudGV4dCA9IGxlYWYoXCJUZXh0XCIgLyogVGV4dCAqLyk7XHJcbmV4cG9ydHMuYXR0ck5hbWUgPSBsZWFmKFwiQXR0cmlidXRlTmFtZVwiIC8qIEF0dHJpYnV0ZU5hbWUgKi8pO1xyXG5mdW5jdGlvbiBhcmcoc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkFyZ3VtZW50XCIgLyogQXJndW1lbnQgKi8sXHJcbiAgICAgICAgbmFtZTogeyBzdGFydDogc3Bhbi5zdGFydCArIDEsIGVuZDogc3Bhbi5lbmQgfSxcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXJnID0gYXJnO1xyXG5mdW5jdGlvbiBhdHRyVmFsdWUoX2EsIHNwYW4pIHtcclxuICAgIHZhciB0eXBlID0gX2EudHlwZSwgdmFsdWUgPSBfYS52YWx1ZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBdHRyaWJ1dGVWYWx1ZVwiIC8qIEF0dHJpYnV0ZVZhbHVlICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgdmFsdWVUeXBlOiB0eXBlLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmF0dHJWYWx1ZSA9IGF0dHJWYWx1ZTtcclxuZnVuY3Rpb24gdmFsdWVkQXR0cihfYSwgc3Bhbikge1xyXG4gICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlZhbHVlZEF0dHJpYnV0ZVwiIC8qIFZhbHVlZEF0dHJpYnV0ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudmFsdWVkQXR0ciA9IHZhbHVlZEF0dHI7XHJcbmZ1bmN0aW9uIHN0YXJ0VGFnKF9hLCBzcGFuKSB7XHJcbiAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIGF0dHJzID0gX2EuYXR0cnM7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU3RhcnRUYWdcIiAvKiBTdGFydFRhZyAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgYXR0cmlidXRlczogYXR0cnMgfHwgW11cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdGFydFRhZyA9IHN0YXJ0VGFnO1xyXG5mdW5jdGlvbiBlbmRUYWcoX2EsIHNwYW4pIHtcclxuICAgIHZhciBuYW1lID0gX2EubmFtZSwgdHJhaWxpbmcgPSBfYS50cmFpbGluZztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJFbmRUYWdcIiAvKiBFbmRUYWcgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICB0cmFpbGluZzogdHJhaWxpbmcgPyB0cmFpbGluZyA6IG51bGwsXHJcbiAgICAgICAgbmFtZTogbmFtZVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmVuZFRhZyA9IGVuZFRhZztcclxuZnVuY3Rpb24gc2V4cChjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlNleHBcIiAvKiBTZXhwICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2V4cCA9IHNleHA7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHRydXN0ZWRJbnRlcnBvbGF0ZShjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlRydXN0ZWRJbnRlcnBvbGF0ZVwiIC8qIFRydXN0ZWRJbnRlcnBvbGF0ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRydXN0ZWRJbnRlcnBvbGF0ZSA9IHRydXN0ZWRJbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gcm9vdChjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlJvb3RcIiAvKiBSb290ICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbmZ1bmN0aW9uIGRlYnVnRm9ybWF0VG9rZW4odG9rZW4pIHtcclxuICAgIHJldHVybiBcIjx0b2tlbjpcIiArIHRva2VuLnR5cGUgKyBcIj5cIjtcclxufVxyXG5leHBvcnRzLmRlYnVnRm9ybWF0VG9rZW4gPSBkZWJ1Z0Zvcm1hdFRva2VuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmZ1bmN0aW9uIG1hcFJlc3VsdChyZXN1bHQsIGNhbGxiYWNrKSB7XHJcbiAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XHJcbn1cclxuZXhwb3J0cy5tYXBSZXN1bHQgPSBtYXBSZXN1bHQ7XHJcbmZ1bmN0aW9uIG1hcChjb21iaW5hdG9yLCBtYXBwZXIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogY29tYmluYXRvcnNfMS5jb21iaW5hdG9yTmFtZShjb21iaW5hdG9yKSxcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgZmlyc3QgPSBpbnB1dC5pbnZva2UoY29tYmluYXRvciwgaW5wdXQsIHsgZm9yY2VUcmFuc3BhcmVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgX2EgPSBmaXJzdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbWFwcGVyKHZhbHVlLCBuZXh0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQsIHJlc3VsdC52YWx1ZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYXAgPSBtYXA7XHJcbmZ1bmN0aW9uIGNvbXBsZXRlKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcImNvbXBsZXRlXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShtYXAoc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIG5leHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0LnJlc3RMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJpbmNvbXBsZXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLCBpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbmZ1bmN0aW9uIHByZXNlbnQoc291cmNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwicHJlc2VudFwiLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2Uoc291cmNlLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSByZXN1bHQudmFsdWUsIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5lcShuZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucHJlc2VudCA9IHByZXNlbnQ7XHJcbmZ1bmN0aW9uIHVucmVhY2hhYmxlKHZhbHVlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlYWNoYWJsZSBjb2RlIHJlYWNoZWRcIik7XHJcbn1cclxuZXhwb3J0cy51bnJlYWNoYWJsZSA9IHVucmVhY2hhYmxlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU25pcHBldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNuaXBwZXQoc291cmNlLCBvZmZzZXQsIGxlbmd0aCwgbG9nZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICBTbmlwcGV0LmlucHV0ID0gZnVuY3Rpb24gKHNvdXJjZSwgbG9nZ2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHNvdXJjZSwgMCwgMCwgbG9nZ2VyKTtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAoY29tYmluYXRvciwgaW5wdXQsIF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIGZvcmNlVHJhbnNwYXJlbnQgPSBfYi5mb3JjZVRyYW5zcGFyZW50LCBjb250ZXh0ID0gX2IuY29udGV4dDtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXIuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0KTtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5lcSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zb3VyY2UgPT09IG90aGVyLnNvdXJjZSAmJlxyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9PT0gb3RoZXIub2Zmc2V0ICYmXHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID09PSBvdGhlci5sZW5ndGgpO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmZtdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCI8b2Zmc2V0OlwiICsgdGhpcy5vZmZzZXQgKyBcIiBsZW5ndGg6XCIgKyB0aGlzLmxlbmd0aCArIFwiPlwiO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmRlYnVnUmVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIihlb2YpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChjaGFycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgY2hhcnMsIHRoaXMubG9nZ2VyKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwic2xpY2VSZXN0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInJlc3RcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIDAsIHRoaXMubG9nZ2VyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmlzRU9GID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoID09PSB0aGlzLnNvdXJjZS5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuaXNNYXRjaCA9IGZ1bmN0aW9uIChjaGFycykge1xyXG4gICAgICAgIHZhciBzbGljZSA9IHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGggKyBjaGFycy5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBzbGljZSA9PT0gY2hhcnM7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKGNvdW50KSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSB2b2lkIDApIHsgY291bnQgPSAxOyB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCwgdGhpcy5sZW5ndGggKyBjb3VudCwgdGhpcy5sb2dnZXIpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJzcGFuXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLm9mZnNldCxcclxuICAgICAgICAgICAgICAgIGVuZDogdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcImZyYWdtZW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJyZXN0TGVuZ3RoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmxlbmd0aCAtIHRoaXMub2Zmc2V0IC0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gU25pcHBldDtcclxufSgpKTtcclxuZXhwb3J0cy5TbmlwcGV0ID0gU25pcHBldDtcclxuZnVuY3Rpb24gb2sodmFsdWUpIHtcclxuICAgIHJldHVybiB7IGtpbmQ6IFwib2tcIiwgdmFsdWU6IHZhbHVlIH07XHJcbn1cclxuZXhwb3J0cy5vayA9IG9rO1xyXG5mdW5jdGlvbiBlcnIoc25pcHBldCwgcmVhc29uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgc25pcHBldDogc25pcHBldCxcclxuICAgICAgICByZWFzb246IHJlYXNvblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmVyciA9IGVycjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gc3BhbihzdGFydCwgZW5kKSB7XHJcbiAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogZW5kIH07XHJcbn1cclxuZXhwb3J0cy5zcGFuID0gc3BhbjtcclxuZnVuY3Rpb24gcmFuZ2UoKSB7XHJcbiAgICB2YXIgc3BhbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgc3BhbnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChzcGFucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gc3BhbigwLCAwKTtcclxuICAgIH1cclxuICAgIHZhciBmaXJzdCA9IHNwYW5zWzBdO1xyXG4gICAgdmFyIGxhc3QgPSBmaXJzdDtcclxuICAgIGZvciAodmFyIF9hID0gMCwgc3BhbnNfMSA9IHNwYW5zOyBfYSA8IHNwYW5zXzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgdmFyIHNwYW5fMSA9IHNwYW5zXzFbX2FdO1xyXG4gICAgICAgIGxhc3QgPSBzcGFuXzE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdGFydDogZ2V0U3BhbihmaXJzdCkuc3RhcnQsIGVuZDogZ2V0U3BhbihsYXN0KS5lbmQgfTtcclxufVxyXG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XHJcbmZ1bmN0aW9uIGlzU3BhbihpdGVtKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0uc3RhcnQgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGl0ZW0uZW5kID09PSBcIm51bWJlclwiO1xyXG59XHJcbmV4cG9ydHMuaXNTcGFuID0gaXNTcGFuO1xyXG5mdW5jdGlvbiBnZXRTcGFuKGl0ZW0pIHtcclxuICAgIGlmIChpc1NwYW4oaXRlbSkpIHtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnNwYW47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5nZXRTcGFuID0gZ2V0U3BhbjtcclxuZnVuY3Rpb24gc2xpY2Uoc3Bhbiwgc291cmNlKSB7XHJcbiAgICByZXR1cm4gc291cmNlLnNsaWNlKHNwYW4uc3RhcnQsIHNwYW4uZW5kKTtcclxufVxyXG5leHBvcnRzLnNsaWNlID0gc2xpY2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=