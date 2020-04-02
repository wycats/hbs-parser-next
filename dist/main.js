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
        name: "pattern[" + name + "]",
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
function seq(desc) {
    var combinators = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        combinators[_i - 1] = arguments[_i];
    }
    return {
        name: "seq \u2022 " + desc,
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
function any(desc) {
    var combinators = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        combinators[_i - 1] = arguments[_i];
    }
    if (String(desc) === "[object Object]") {
        throw new Error("Assert");
    }
    return {
        name: "any \u2022 " + desc,
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
        var tk = combinators_1.any("token", wrap(exports.SEXP), exports.NAMED, exports.SIMPLE_PATH, wrap(exports.WS));
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
exports.INTERPOLATE = utils_1.map(combinators_1.seq("INTERPOLATE", combinators_1.tag("{{"), exports.SPACED_TOKENS, combinators_1.tag("}}")), function (_a) {
    var open = _a[0], path = _a[1], close = _a[2];
    return snippet_1.ok(tokens_1.interpolate(path, span_1.range(open, close)));
});
exports.SEXP = utils_1.map(combinators_1.seq("SEXP", combinators_1.tag("("), exports.SPACED_TOKENS, combinators_1.tag(")")), function (_a) {
    var open = _a[0], path = _a[1], close = _a[2];
    return snippet_1.ok(tokens_1.sexp(path, span_1.range(open, close)));
});
var ID_SNIPPET = combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET");
exports.ID = token(ID_SNIPPET, "Identifier" /* Identifier */);
exports.DOT = token(combinators_1.tag("."), "Dot" /* Dot */);
exports.WS = token(combinators_1.pattern(/^[\u0009\u000A\u000C\u0020]+/u, "WS"), "WS" /* WS */);
exports.EQ = token(combinators_1.tag("="), "Eq" /* Eq */);
var ARG = utils_1.map(combinators_1.seq("@id", combinators_1.tag("@"), ID_SNIPPET), function (_a) {
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
exports.SIMPLE_PATH = {
    name: "PATH",
    invoke: function (input) {
        var result = input.invoke(exports.SIMPLE_HEAD, input);
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
exports.NAMED = combinators_1.seq("NAMED", exports.ID, exports.EQ, exports.SIMPLE_PATH);
exports.SIMPLE_HEAD = combinators_1.any("HEAD", ARG, exports.ID);
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
exports.TAG_NAME_TOKEN = utils_1.map(exports.TAG_NAME, function (snippet) { return snippet_1.ok([tokens_1.id(snippet.span)]); });
exports.TAG_OR_COMPONENT_NAME = combinators_1.any("tag or component name", hbs_1.SIMPLE_PATH, exports.TAG_NAME_TOKEN);
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
exports.ATTRIBUTE_NAME = utils_1.map(combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u, "ATTRIBUTE_NAME"), function (name) { return snippet_1.ok(tokens_1.attrName(name.span)); });
exports.ATTRIBUTE_VALUE = combinators_1.pick({
    dq: combinators_1.seq("dq", combinators_1.tag("\""), combinators_1.pattern(/^[^"]*/, "dq contents"), combinators_1.tag("\"")),
    sq: combinators_1.seq("sq", combinators_1.tag("'"), combinators_1.pattern(/^[^']*/, "sq contents"), combinators_1.tag("'")),
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
    valued: combinators_1.seq("valued attribute", exports.ATTRIBUTE_NAME, hbs_1.EQ, exports.ATTRIBUTE_VALUE),
    bare: exports.ATTRIBUTE_NAME
}, {
    valued: function (_a) {
        var name = _a[0], value = _a[2];
        return snippet_1.ok(tokens_1.valuedAttr({ name: name, value: value }, span_1.range(name, value)));
    },
    bare: function (value) { return snippet_1.ok(tokens_1.attrName(value.span)); }
});
exports.ATTRIBUTES = utils_1.map(combinators_1.seq("ATTRIBUTES", hbs_1.WS, multi_1.many(combinators_1.any("spaced attribute", hbs_1.WS, exports.ATTRIBUTE))), function (_a) {
    var ws = _a[0], attrs = _a[1];
    return snippet_1.ok(__spreadArrays([ws], attrs));
});
exports.START_TAG = utils_1.map(combinators_1.seq("START_TAG", combinators_1.tag("<"), exports.TAG_OR_COMPONENT_NAME, combinators_1.maybe(exports.ATTRIBUTES), combinators_1.maybe(combinators_1.tag("/")), combinators_1.tag(">")), function (_a) {
    var start = _a[0], name = _a[1], attrs = _a[2], selfClosing = _a[3], end = _a[4];
    return snippet_1.ok(tokens_1.startTag({
        name: name,
        attrs: attrs || undefined,
        selfClosing: selfClosing ? true : undefined
    }, span_1.range(start, end)));
});
exports.END_TAG = utils_1.map(combinators_1.seq("END_TAG", combinators_1.tag("</"), exports.TAG_OR_COMPONENT_NAME, combinators_1.maybe(hbs_1.WS), combinators_1.tag(">")), function (_a) {
    var start = _a[0], name = _a[1], trailing = _a[2], end = _a[3];
    return snippet_1.ok(tokens_1.endTag({ name: name, trailing: trailing }, span_1.range(start, end)));
});
exports.COMMENT = utils_1.map(combinators_1.seq("COMMENT", combinators_1.tag("<!--"), combinators_1.pattern(/^.*(?=[-][-][>])/u, "comment body"), combinators_1.tag("-->")), function (_a) {
    var start = _a[0], data = _a[1], end = _a[2];
    return snippet_1.ok(tokens_1.comment(data.span, span_1.range(start, end)));
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
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
function many(source) {
    return {
        name: "many \u2022 " + combinators_1.combinatorName(source),
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
    var result = input.invoke(utils_1.complete(utils_1.map(multi_1.many(combinators_1.any("top level", hbs_1.INTERPOLATE, exports.CONTENT)), function (tokens) {
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
exports.CONTENT = combinators_1.any("CONTENT", html_1.COMMENT, html_1.END_TAG, html_1.START_TAG, html_1.TEXT);


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
        case "Comment" /* Comment */:
            return ["<!--", span_1.slice(token.data, source), "-->"];
        case "StartTag" /* StartTag */:
            return __spreadArrays([
                "<"
            ], serializeList(token.name, source), serializeList(token.attributes, source), [
                ">"
            ]);
        case "EndTag" /* EndTag */:
            return __spreadArrays([
                "</"
            ], serializeList(token.name, source), serializeNode(token.trailing, source), [
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
function buildPresentTokens(tokens, builder) {
    return tokens.map(function (token) { return token(builder); });
}
exports.buildPresentTokens = buildPresentTokens;
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
function comment(chars) {
    return function (builder) {
        var start = builder.consume("<!--");
        var data = builder.consume(chars);
        var end = builder.consume("-->");
        return tokens.comment(data, span_1.range(start, end));
    };
}
exports.comment = comment;
function isTagName(input) {
    return (typeof input === "string" ||
        Array.isArray(input) ||
        typeof input === "function");
}
function buildTagName(name) {
    if (Array.isArray(name)) {
        var tokens_1 = [];
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var part = name_1[_i];
            if (typeof part === "function") {
                tokens_1.push(part);
            }
            else {
                switch (part[0]) {
                    case "@":
                        tokens_1.push(arg(part));
                    default:
                        tokens_1.push(id(part));
                }
            }
        }
        return tokens_1;
    }
    else {
        if (typeof name === "function") {
            return [name];
        }
        else {
            switch (name[0]) {
                case "@":
                    return [arg(name)];
                default:
                    return [id(name)];
            }
        }
    }
}
function startTag(options) {
    if (isTagName(options)) {
        return function (builder) {
            var start = builder.consume("<");
            var nameTokens = buildPresentTokens(buildTagName(options), builder);
            var end = builder.consume(">");
            return tokens.startTag({ name: nameTokens }, span_1.range(start, end));
        };
    }
    else {
        return function (builder) {
            var name = options.name, attrs = options.attrs, selfClosing = options.selfClosing;
            var start = builder.consume("<");
            var nameTokens = buildPresentTokens(buildTagName(name), builder);
            var children = attrs.map(function (attr) { return attr(builder); });
            if (selfClosing) {
                builder.consume("/");
            }
            var end = builder.consume(">");
            return tokens.startTag({ name: nameTokens, attrs: children, selfClosing: selfClosing }, span_1.range(start, end));
        };
    }
}
exports.startTag = startTag;
function endTag(options) {
    var tagName = isTagName(options) ? options : options.name;
    var trailing = isTagName(options) ? undefined : options.trailing;
    return function (builder) {
        var start = builder.consume("</");
        var tagTokens = buildPresentTokens(buildTagName(tagName), builder);
        var trailingToken = trailing ? ws(trailing)(builder) : undefined;
        var end = builder.consume(">");
        return tokens.endTag({ name: tagTokens, trailing: trailingToken }, span_1.range(start, end));
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
function comment(data, span) {
    return {
        type: "Comment" /* Comment */,
        data: data,
        span: span
    };
}
exports.comment = comment;
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
    var name = _a.name, attrs = _a.attrs, selfClosing = _a.selfClosing;
    return {
        type: "StartTag" /* StartTag */,
        span: span,
        name: name,
        attributes: attrs || [],
        selfClosing: selfClosing
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvaGJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvbXVsdGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvcmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9zZXJpYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdG9rZW4tYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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cUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0aW9uKGV4cHIsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogMCAvKiBJbnRlcnBvbGF0aW9uICovLFxyXG4gICAgICAgIGV4cHI6IGV4cHIsXHJcbiAgICAgICAgc3Bhbjogc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRpb24gPSBpbnRlcnBvbGF0aW9uO1xyXG5mdW5jdGlvbiBpZChuYW1lLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IDIgLyogSWRlbnRpZmllciAqLyxcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIHNwYW46IHNwYW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pZCA9IGlkO1xyXG5mdW5jdGlvbiBwYXRoKGhlYWQsIHRhaWwpIHtcclxuICAgIGlmICh0YWlsID09PSB2b2lkIDApIHsgdGFpbCA9IFtdOyB9XHJcbiAgICBpZiAodGFpbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogMSAvKiBQYXRoICovLFxyXG4gICAgICAgICAgICBoZWFkOiBoZWFkLFxyXG4gICAgICAgICAgICB0YWlsOiB0YWlsLFxyXG4gICAgICAgICAgICBzcGFuOiB7IHN0YXJ0OiBoZWFkLnNwYW4uc3RhcnQsIGVuZDogdGFpbFt0YWlsLmxlbmd0aCAtIDFdLnNwYW4uZW5kIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogMSAvKiBQYXRoICovLFxyXG4gICAgICAgICAgICBoZWFkOiBoZWFkLFxyXG4gICAgICAgICAgICBzcGFuOiBoZWFkLnNwYW5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMucGF0aCA9IHBhdGg7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21iaW5hdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL2NvbWJpbmF0b3JzXCIpKTtcclxuZXhwb3J0cy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL3JlYWQvY29tYmluYXRvcnNcIik7XHJcbmV4cG9ydHMuTG9nZ2VyID0gY29tYmluYXRvcnNfMS5Mb2dnZXI7XHJcbnZhciBtdWx0aSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL211bHRpXCIpKTtcclxuZXhwb3J0cy5tdWx0aSA9IG11bHRpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zbmlwcGV0XCIpKTtcclxudmFyIGFzdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9hc3RcIikpO1xyXG5leHBvcnRzLmFzdCA9IGFzdDtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVhZC9oYnNcIikpO1xyXG52YXIgdG9rZW5zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvdG9rZW5zXCIpKTtcclxuZXhwb3J0cy50b2tlbnMgPSB0b2tlbnM7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NwYW5cIikpO1xyXG52YXIgYiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2VuLWJ1aWxkZXJcIikpO1xyXG5leHBvcnRzLmIgPSBiO1xyXG52YXIgdXRpbHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC91dGlsc1wiKSk7XHJcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVhZC9zZXJpYWxpemVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3JlYWRcIikpO1xyXG5mdW5jdGlvbiBwYXJzZShpbnB1dCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG52YXIgZGVidWdfMSA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xyXG52YXIgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmZ1bmN0aW9uIGZvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWJ1Z2dhYmxlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlYnVnZ2FibGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z2dhYmxlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkZWJ1Z2dhYmxlKSkge1xyXG4gICAgICAgIGlmIChkZWJ1Z2dhYmxlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIltcIiArIGRlYnVnZ2FibGUubWFwKGZvcm1hdERlYnVnZ2FibGUpLmpvaW4oXCIsIFwiKSArIFwiXVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiW1wiICsgZm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzBdKSArIFwiLCBcIiArIGZvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZVsxXSkgKyBcIiwgXCIgKyBmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGVbMl0pICsgXCIsIC4uLl1cIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z2dhYmxlIGluc3RhbmNlb2Ygc25pcHBldF8xLlNuaXBwZXQpIHtcclxuICAgICAgICByZXR1cm4gZGVidWdnYWJsZS5mbXQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0b2tlbnNfMS5kZWJ1Z0Zvcm1hdFRva2VuKGRlYnVnZ2FibGUpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpIHtcclxuICAgIGlmIChjb21iaW5hdG9yLm5hbWUpIHtcclxuICAgICAgICByZXR1cm4gY29tYmluYXRvci5uYW1lO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihjb21iaW5hdG9yKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnQ6IGV4cGVjdGVkIGNvbWJpbmF0b3IgbmFtZVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNvbWJpbmF0b3JOYW1lID0gY29tYmluYXRvck5hbWU7XHJcbmZ1bmN0aW9uIGNvbWJpbmF0b3JUeXBlKGNvbWJpbmF0b3IpIHtcclxuICAgIGlmICh0eXBlb2YgY29tYmluYXRvciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY29tYmluYXRvci5raW5kIHx8IFwibm9ybWFsXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5jb21iaW5hdG9yVHlwZSA9IGNvbWJpbmF0b3JUeXBlO1xyXG5mdW5jdGlvbiBpc1RyYW5zcGFyZW50KGNvbWJpbmF0b3IpIHtcclxuICAgIGlmICh0eXBlb2YgY29tYmluYXRvciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmF0b3Iua2luZCA9PT0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaXNUcmFuc3BhcmVudCA9IGlzVHJhbnNwYXJlbnQ7XHJcbmZ1bmN0aW9uIHRhZyhzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJzdHJpbmcgXFx1MDBBQlwiICsgc291cmNlICsgXCJcXHUwMEJCXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dC5zbGljZShzb3VyY2UubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKG5leHQuZnJhZ21lbnQgPT09IHNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBraW5kOiBcImVyclwiLCBzbmlwcGV0OiBpbnB1dCwgcmVhc29uOiBcInRhZ1wiIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudGFnID0gdGFnO1xyXG5mdW5jdGlvbiBwYXR0ZXJuKHNvdXJjZSwgbmFtZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInBhdHRlcm5bXCIgKyBuYW1lICsgXCJdXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3QgPSBpbnB1dC5zbGljZVJlc3Q7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHJlc3QubWF0Y2goc291cmNlKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dC5zbGljZShtYXRjaGVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInBhdHRlcm5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucGF0dGVybiA9IHBhdHRlcm47XHJcbmZ1bmN0aW9uIHRha2VVbnRpbChwYXR0ZXJuKSB7XHJcbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBcInRha2VVbnRpbFwiLFxyXG4gICAgICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQuaXNFT0YoKSB8fCBuZXh0LmlzTWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VVbnRpbCA9IHRha2VVbnRpbDtcclxuZnVuY3Rpb24gdGFrZVdoaWxlKHBhdHRlcm4pIHtcclxuICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidGFrZVdoaWxlXCIsXHJcbiAgICAgICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0LmlzTWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuZXh0ZW5kKHBhdHRlcm4ubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwidGFrZVdoaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRha2VXaGlsZSA9IHRha2VXaGlsZTtcclxudmFyIExvZ2dlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExvZ2dlcihlbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVMb2dnaW5nID0gZW5hYmxlTG9nZ2luZztcclxuICAgIH1cclxuICAgIExvZ2dlci5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGNvbWJpbmF0b3IsIGlucHV0LCBfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBmb3JjZVRyYW5zcGFyZW50ID0gX2IuZm9yY2VUcmFuc3BhcmVudCwgY29udGV4dCA9IF9iLmNvbnRleHQ7XHJcbiAgICAgICAgdmFyIGxvZ2dlZCA9IHRoaXMuZW5hYmxlTG9nZ2luZyAmJiAhaXNUcmFuc3BhcmVudChjb21iaW5hdG9yKSAmJiAhZm9yY2VUcmFuc3BhcmVudDtcclxuICAgICAgICBpZiAobG9nZ2VkKSB7XHJcbiAgICAgICAgICAgIGRlYnVnXzEucm93KHsgcmVzdWx0OiBcInN0YXJ0XCIsIGFycm93OiBkZWJ1Z18xLmluZGVudFdTKCkgKyBcIi0+XCIsIGNvbWJpbmF0b3I6IGNvbWJpbmF0b3IsIGNvbnRleHQ6IGNvbnRleHQgfSwgXCJcIiwgaW5wdXQuZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICBkZWJ1Z18xLmluZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gY29tYmluYXRvci5pbnZva2UoaW5wdXQpO1xyXG4gICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgZGVidWdfMS5vdXRkZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnXzEucm93KHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93OiBkZWJ1Z18xLmluZGVudFdTKCkgKyBcIjwtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcjogY29tYmluYXRvcixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICB9LCBmb3JtYXREZWJ1Z2dhYmxlKHJlc3VsdC52YWx1ZVsxXSksIHJlc3VsdC52YWx1ZVswXS5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnXzEucm93KHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdzogZGVidWdfMS5pbmRlbnRXUygpICsgXCI8LVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmF0b3I6IGNvbWJpbmF0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxyXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0LnJlYXNvbiwgcmVzdWx0LnNuaXBwZXQuZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExvZ2dlcjtcclxufSgpKTtcclxuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XHJcbmZ1bmN0aW9uIHNlcShkZXNjKSB7XHJcbiAgICB2YXIgY29tYmluYXRvcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgY29tYmluYXRvcnNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwic2VxIFxcdTIwMjIgXCIgKyBkZXNjLFxyXG4gICAgICAgIGtpbmQ6IFwiYXJtXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbWJpbmF0b3JzXzEgPSBjb21iaW5hdG9yczsgX2kgPCBjb21iaW5hdG9yc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjb21iaW5hdG9yc18xW19pXTtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UoaXRlbSwgY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gbmV4dC5yZXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXEgPSBzZXE7XHJcbmZ1bmN0aW9uIGFueShkZXNjKSB7XHJcbiAgICB2YXIgY29tYmluYXRvcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgY29tYmluYXRvcnNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoU3RyaW5nKGRlc2MpID09PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXNzZXJ0XCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcImFueSBcXHUyMDIyIFwiICsgZGVzYyxcclxuICAgICAgICBraW5kOiBcImFybVwiLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY29tYmluYXRvcnNfMiA9IGNvbWJpbmF0b3JzOyBfaSA8IGNvbWJpbmF0b3JzXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGNvbWJpbmF0b3JzXzJbX2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShpdGVtLCBjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJhbnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFueSA9IGFueTtcclxuZnVuY3Rpb24gcGljayhjb21iaW5hdG9ycywgY2FsbGJhY2tzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwicGlja1wiLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3QuZW50cmllcyhjb21iaW5hdG9ycyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIG5hbWVfMSA9IF9iWzBdLCBpdGVtID0gX2JbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RSZXN1bHQgPSBpbnB1dC5pbnZva2UoaXRlbSwgY3VycmVudCwgeyBjb250ZXh0OiBuYW1lXzEgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RSZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gZmlyc3RSZXN1bHQudmFsdWUsIG5leHQgPSBfY1swXSwgdmFsdWUgPSBfY1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2tzW25hbWVfMV0odmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQsIHJlc3VsdC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiYW55XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5waWNrID0gcGljaztcclxuZnVuY3Rpb24gbWF5YmUoY29tYmluYXRvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcIm1heWJlXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShjb21iaW5hdG9yLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbaW5wdXQsIG51bGxdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWF5YmUgPSBtYXliZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHRhYmxlID0gW107XHJcbmZ1bmN0aW9uIHJvdyhfYSwgYSwgYikge1xyXG4gICAgdmFyIHJlc3VsdCA9IF9hLnJlc3VsdCwgYXJyb3cgPSBfYS5hcnJvdywgY29tYmluYXRvciA9IF9hLmNvbWJpbmF0b3IsIGNvbnRleHQgPSBfYS5jb250ZXh0O1xyXG4gICAgdmFyIG5hbWUgPSBjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpO1xyXG4gICAgaWYgKGNvbnRleHQpIHtcclxuICAgICAgICBuYW1lID0gY29udGV4dCArIFwiOiBcIiArIG5hbWU7XHJcbiAgICB9XHJcbiAgICB0YWJsZS5wdXNoKHtcclxuICAgICAgICBzdHlsZTogeyByZXN1bHQ6IHJlc3VsdCwga2luZDogY29tYmluYXRvcnNfMS5jb21iaW5hdG9yVHlwZShjb21iaW5hdG9yKSB9LFxyXG4gICAgICAgIGRhdGE6IFthcnJvdywgbmFtZSwgYSwgYl1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucm93ID0gcm93O1xyXG5mdW5jdGlvbiBzbmlwcGV0U3R5bGUoc3R5bGUpIHtcclxuICAgIHN3aXRjaCAoc3R5bGUucmVzdWx0KSB7XHJcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiAjMzMzXCI7XHJcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IGdyZWVuXCI7XHJcbiAgICAgICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiByZWRcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNuaXBwZXRTdHlsZSA9IHNuaXBwZXRTdHlsZTtcclxuZnVuY3Rpb24gYXJtU3R5bGUoc3R5bGUpIHtcclxuICAgIHN3aXRjaCAoc3R5bGUucmVzdWx0KSB7XHJcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGUua2luZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFybVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiAjYmJiXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICMzMzNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiBncmVlblwiO1xyXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogcmVkXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5hcm1TdHlsZSA9IGFybVN0eWxlO1xyXG5mdW5jdGlvbiBwcmludERlYnVnKCkge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0YWJsZV8xID0gdGFibGU7IF9pIDwgdGFibGVfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgX2EgPSB0YWJsZV8xW19pXSwgc3R5bGUgPSBfYS5zdHlsZSwgX2IgPSBfYS5kYXRhLCBhcnJvdyA9IF9iWzBdLCBuYW1lXzEgPSBfYlsxXSwgYSA9IF9iWzJdLCBiID0gX2JbM107XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gKGFycm93ICsgXCIgJWNcIiArIG5hbWVfMSArIFwiJWNcIikucGFkRW5kKDYwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmaXJzdCArIFwiIHwgJWNcIiArIGIgKyBcIiVjIHxcIiwgYXJtU3R5bGUoc3R5bGUpLCBcImNvbG9yOiAjMzMzXCIsIHNuaXBwZXRTdHlsZShzdHlsZSksIFwiY29sb3I6ICMzMzNcIiwgYSk7XHJcbiAgICB9XHJcbiAgICB0YWJsZSA9IFtdO1xyXG59XHJcbmV4cG9ydHMucHJpbnREZWJ1ZyA9IHByaW50RGVidWc7XHJcbnZhciBUQUIgPSAwO1xyXG5mdW5jdGlvbiBpbmRlbnQoKSB7XHJcbiAgICBUQUIgKz0gMTtcclxufVxyXG5leHBvcnRzLmluZGVudCA9IGluZGVudDtcclxuZnVuY3Rpb24gb3V0ZGVudCgpIHtcclxuICAgIFRBQiAtPSAxO1xyXG59XHJcbmV4cG9ydHMub3V0ZGVudCA9IG91dGRlbnQ7XHJcbmZ1bmN0aW9uIGluZGVudFdTKCkge1xyXG4gICAgcmV0dXJuIFwiIFwiLnJlcGVhdChUQUIpO1xyXG59XHJcbmV4cG9ydHMuaW5kZW50V1MgPSBpbmRlbnRXUztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG52YXIgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbnZhciBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vY29tYmluYXRvcnNcIik7XHJcbnZhciB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuLy8gaW1wb3J0IHsgVEVYVCwgU1RBUlRfVEFHLCBFTkRfVEFHIH0gZnJvbSBcIi4vaHRtbFwiO1xyXG5leHBvcnRzLlNQQUNFRF9UT0tFTlMgPSB7XHJcbiAgICBuYW1lOiBcIlNQQUNFRF9UT0tFTlNcIixcclxuICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgIHZhciB0ayA9IGNvbWJpbmF0b3JzXzEuYW55KFwidG9rZW5cIiwgd3JhcChleHBvcnRzLlNFWFApLCBleHBvcnRzLk5BTUVELCBleHBvcnRzLlNJTVBMRV9QQVRILCB3cmFwKGV4cG9ydHMuV1MpKTtcclxuICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UodGssIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCB0b2tlbnMgPSBfYVsxXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMiA9IHRva2VuczsgX2kgPCB0b2tlbnNfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbl8xID0gdG9rZW5zXzJbX2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodG9rZW5fMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaC5hcHBseShvdXQsIHRva2VuXzEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2godG9rZW5fMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBraW5kOiBcImVyclwiLFxyXG4gICAgICAgICAgICAgICAgcmVhc29uOiBcInByZXNlbnRcIixcclxuICAgICAgICAgICAgICAgIHNuaXBwZXQ6IGlucHV0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLklOVEVSUE9MQVRFID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJJTlRFUlBPTEFURVwiLCBjb21iaW5hdG9yc18xLnRhZyhcInt7XCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwifX1cIikpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBvcGVuID0gX2FbMF0sIHBhdGggPSBfYVsxXSwgY2xvc2UgPSBfYVsyXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuaW50ZXJwb2xhdGUocGF0aCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpO1xyXG59KTtcclxuZXhwb3J0cy5TRVhQID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJTRVhQXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiKFwiKSwgZXhwb3J0cy5TUEFDRURfVE9LRU5TLCBjb21iaW5hdG9yc18xLnRhZyhcIilcIikpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBvcGVuID0gX2FbMF0sIHBhdGggPSBfYVsxXSwgY2xvc2UgPSBfYVsyXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuc2V4cChwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbn0pO1xyXG52YXIgSURfU05JUFBFVCA9IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlxccHtJRF9TdGFydH1bXFxwe0lEX0NvbnRpbnVlfS1dKi91LCBcIklEX1NOSVBQRVRcIik7XHJcbmV4cG9ydHMuSUQgPSB0b2tlbihJRF9TTklQUEVULCBcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovKTtcclxuZXhwb3J0cy5ET1QgPSB0b2tlbihjb21iaW5hdG9yc18xLnRhZyhcIi5cIiksIFwiRG90XCIgLyogRG90ICovKTtcclxuZXhwb3J0cy5XUyA9IHRva2VuKGNvbWJpbmF0b3JzXzEucGF0dGVybigvXltcXHUwMDA5XFx1MDAwQVxcdTAwMENcXHUwMDIwXSsvdSwgXCJXU1wiKSwgXCJXU1wiIC8qIFdTICovKTtcclxuZXhwb3J0cy5FUSA9IHRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiPVwiKSwgXCJFcVwiIC8qIEVxICovKTtcclxudmFyIEFSRyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQGlkXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiQFwiKSwgSURfU05JUFBFVCksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGF0ID0gX2FbMF0sIGlkID0gX2FbMV07XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmFyZyhzcGFuXzEucmFuZ2UoYXQsIGlkKSkpO1xyXG59KTtcclxuZnVuY3Rpb24gd3JhcChjb21iaW5hdG9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwid3JhcFwiLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UoY29tYmluYXRvciwgaW5wdXQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtyZXN1bHQudmFsdWVbMF0sIFtyZXN1bHQudmFsdWVbMV1dXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMud3JhcCA9IHdyYXA7XHJcbmZ1bmN0aW9uIHRva2VuKGNvbWJpbmF0b3IsIHR5cGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJ0b2tlbiAoXCIgKyBjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpICsgXCIpXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShjb21iaW5hdG9yLCBpbnB1dCwgeyBmb3JjZVRyYW5zcGFyZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuOiByZXN1bHQudmFsdWVbMV0uc3BhblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRva2VuID0gdG9rZW47XHJcbmV4cG9ydHMuU0lNUExFX1BBVEggPSB7XHJcbiAgICBuYW1lOiBcIlBBVEhcIixcclxuICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShleHBvcnRzLlNJTVBMRV9IRUFELCBpbnB1dCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgY3VycmVudCA9IF9hWzBdLCBoZWFkID0gX2FbMV07XHJcbiAgICAgICAgdmFyIG91dCA9IFtoZWFkXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0RG90ID0gaW5wdXQuaW52b2tlKGV4cG9ydHMuRE9ULCBjdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdERvdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0RG90LnZhbHVlWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV4dERvdCA9IHJlc3VsdERvdC52YWx1ZVsxXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdE1lbWJlciA9IGlucHV0Lmludm9rZShleHBvcnRzLk1FTUJFUiwgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRNZW1iZXIua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE1lbWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0TWVtYmVyLnZhbHVlWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV4dE1lbWJlciA9IHJlc3VsdE1lbWJlci52YWx1ZVsxXTtcclxuICAgICAgICAgICAgb3V0LnB1c2gobmV4dERvdCwgbmV4dE1lbWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLk5BTUVEID0gY29tYmluYXRvcnNfMS5zZXEoXCJOQU1FRFwiLCBleHBvcnRzLklELCBleHBvcnRzLkVRLCBleHBvcnRzLlNJTVBMRV9QQVRIKTtcclxuZXhwb3J0cy5TSU1QTEVfSEVBRCA9IGNvbWJpbmF0b3JzXzEuYW55KFwiSEVBRFwiLCBBUkcsIGV4cG9ydHMuSUQpO1xyXG4vLyBUT0RPOiBBbGxvdyBgW11gIG9yIHN0cmluZyBtZW1iZXJzXHJcbmV4cG9ydHMuTUVNQkVSID0gZXhwb3J0cy5JRDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxudmFyIHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG52YXIgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbnZhciBoYnNfMSA9IHJlcXVpcmUoXCIuL2hic1wiKTtcclxudmFyIG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxuZXhwb3J0cy5URVhUID0ge1xyXG4gICAgbmFtZTogXCJURVhUXCIsXHJcbiAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UoY29tYmluYXRvcnNfMS50YWtlVW50aWwoXCJ7e1wiKSwgaW5wdXQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSByZXN1bHQudmFsdWUsIG5leHQgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LCB0b2tlbnNfMS50ZXh0KHZhbHVlLnNwYW4pXSk7XHJcbiAgICB9XHJcbn07XHJcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDExL1dELWh0bWw1LTIwMTEwMTEzL3Rva2VuaXphdGlvbi5odG1sI3RhZy1uYW1lLXN0YXRlXHJcbmV4cG9ydHMuVEFHX05BTUUgPSBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bQS1aYS16XVteLz5cXDBcXHNdKy91LCBcIlRBR19OQU1FXCIpO1xyXG5leHBvcnRzLlRBR19OQU1FX1RPS0VOID0gdXRpbHNfMS5tYXAoZXhwb3J0cy5UQUdfTkFNRSwgZnVuY3Rpb24gKHNuaXBwZXQpIHsgcmV0dXJuIHNuaXBwZXRfMS5vayhbdG9rZW5zXzEuaWQoc25pcHBldC5zcGFuKV0pOyB9KTtcclxuZXhwb3J0cy5UQUdfT1JfQ09NUE9ORU5UX05BTUUgPSBjb21iaW5hdG9yc18xLmFueShcInRhZyBvciBjb21wb25lbnQgbmFtZVwiLCBoYnNfMS5TSU1QTEVfUEFUSCwgZXhwb3J0cy5UQUdfTkFNRV9UT0tFTik7XHJcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDExL1dELWh0bWw1LTIwMTEwMTEzL3Rva2VuaXphdGlvbi5odG1sI2JlZm9yZS1hdHRyaWJ1dGUtbmFtZS1zdGF0ZVxyXG5leHBvcnRzLkFUVFJJQlVURV9OQU1FID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW15cXHUwMDA5XFx1MDAwQVxcdTAwMENcXHUwMDIwLz5cXHUwMDAwXCInPD1dLio/KD89W1xcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjAvPT5cXHUwMDAwXCInPF0pL3UsIFwiQVRUUklCVVRFX05BTUVcIiksIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0ck5hbWUobmFtZS5zcGFuKSk7IH0pO1xyXG5leHBvcnRzLkFUVFJJQlVURV9WQUxVRSA9IGNvbWJpbmF0b3JzXzEucGljayh7XHJcbiAgICBkcTogY29tYmluYXRvcnNfMS5zZXEoXCJkcVwiLCBjb21iaW5hdG9yc18xLnRhZyhcIlxcXCJcIiksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteXCJdKi8sIFwiZHEgY29udGVudHNcIiksIGNvbWJpbmF0b3JzXzEudGFnKFwiXFxcIlwiKSksXHJcbiAgICBzcTogY29tYmluYXRvcnNfMS5zZXEoXCJzcVwiLCBjb21iaW5hdG9yc18xLnRhZyhcIidcIiksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteJ10qLywgXCJzcSBjb250ZW50c1wiKSwgY29tYmluYXRvcnNfMS50YWcoXCInXCIpKSxcclxuICAgIHVucXVvdGVkOiBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlxcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjA+XFwwXCInPD1gXSsvdSwgXCJ1bnF1b3RlZCBjb250ZW50c1wiKVxyXG59LCB7XHJcbiAgICBkcTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBfYVswXSwgc3RyaW5nID0gX2FbMV0sIGNsb3NlID0gX2FbMl07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoeyB0eXBlOiBcIkRvdWJsZVF1b3RlZFwiIC8qIERvdWJsZVF1b3RlZCAqLywgdmFsdWU6IHN0cmluZy5zcGFuIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKTtcclxuICAgIH0sXHJcbiAgICBzcTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBfYVswXSwgc3RyaW5nID0gX2FbMV0sIGNsb3NlID0gX2FbMl07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoeyB0eXBlOiBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLywgdmFsdWU6IHN0cmluZy5zcGFuIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKTtcclxuICAgIH0sXHJcbiAgICB1bnF1b3RlZDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoeyB0eXBlOiBcIlVucXVvdGVkXCIgLyogVW5xdW90ZWQgKi8sIHZhbHVlOiB2YWx1ZS5zcGFuIH0sIHZhbHVlLnNwYW4pKTtcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydHMuQVRUUklCVVRFID0gY29tYmluYXRvcnNfMS5waWNrKHtcclxuICAgIHZhbHVlZDogY29tYmluYXRvcnNfMS5zZXEoXCJ2YWx1ZWQgYXR0cmlidXRlXCIsIGV4cG9ydHMuQVRUUklCVVRFX05BTUUsIGhic18xLkVRLCBleHBvcnRzLkFUVFJJQlVURV9WQUxVRSksXHJcbiAgICBiYXJlOiBleHBvcnRzLkFUVFJJQlVURV9OQU1FXHJcbn0sIHtcclxuICAgIHZhbHVlZDogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBfYVswXSwgdmFsdWUgPSBfYVsyXTtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnZhbHVlZEF0dHIoeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUgfSwgc3Bhbl8xLnJhbmdlKG5hbWUsIHZhbHVlKSkpO1xyXG4gICAgfSxcclxuICAgIGJhcmU6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJOYW1lKHZhbHVlLnNwYW4pKTsgfVxyXG59KTtcclxuZXhwb3J0cy5BVFRSSUJVVEVTID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJBVFRSSUJVVEVTXCIsIGhic18xLldTLCBtdWx0aV8xLm1hbnkoY29tYmluYXRvcnNfMS5hbnkoXCJzcGFjZWQgYXR0cmlidXRlXCIsIGhic18xLldTLCBleHBvcnRzLkFUVFJJQlVURSkpKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgd3MgPSBfYVswXSwgYXR0cnMgPSBfYVsxXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2soX19zcHJlYWRBcnJheXMoW3dzXSwgYXR0cnMpKTtcclxufSk7XHJcbmV4cG9ydHMuU1RBUlRfVEFHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJTVEFSVF9UQUdcIiwgY29tYmluYXRvcnNfMS50YWcoXCI8XCIpLCBleHBvcnRzLlRBR19PUl9DT01QT05FTlRfTkFNRSwgY29tYmluYXRvcnNfMS5tYXliZShleHBvcnRzLkFUVFJJQlVURVMpLCBjb21iaW5hdG9yc18xLm1heWJlKGNvbWJpbmF0b3JzXzEudGFnKFwiL1wiKSksIGNvbWJpbmF0b3JzXzEudGFnKFwiPlwiKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHN0YXJ0ID0gX2FbMF0sIG5hbWUgPSBfYVsxXSwgYXR0cnMgPSBfYVsyXSwgc2VsZkNsb3NpbmcgPSBfYVszXSwgZW5kID0gX2FbNF07XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIGF0dHJzOiBhdHRycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2VsZkNsb3Npbmc6IHNlbGZDbG9zaW5nID8gdHJ1ZSA6IHVuZGVmaW5lZFxyXG4gICAgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKSk7XHJcbn0pO1xyXG5leHBvcnRzLkVORF9UQUcgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIkVORF9UQUdcIiwgY29tYmluYXRvcnNfMS50YWcoXCI8L1wiKSwgZXhwb3J0cy5UQUdfT1JfQ09NUE9ORU5UX05BTUUsIGNvbWJpbmF0b3JzXzEubWF5YmUoaGJzXzEuV1MpLCBjb21iaW5hdG9yc18xLnRhZyhcIj5cIikpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBzdGFydCA9IF9hWzBdLCBuYW1lID0gX2FbMV0sIHRyYWlsaW5nID0gX2FbMl0sIGVuZCA9IF9hWzNdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5lbmRUYWcoeyBuYW1lOiBuYW1lLCB0cmFpbGluZzogdHJhaWxpbmcgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKSk7XHJcbn0pO1xyXG5leHBvcnRzLkNPTU1FTlQgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIkNPTU1FTlRcIiwgY29tYmluYXRvcnNfMS50YWcoXCI8IS0tXCIpLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL14uKig/PVstXVstXVs+XSkvdSwgXCJjb21tZW50IGJvZHlcIiksIGNvbWJpbmF0b3JzXzEudGFnKFwiLS0+XCIpKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgc3RhcnQgPSBfYVswXSwgZGF0YSA9IF9hWzFdLCBlbmQgPSBfYVsyXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuY29tbWVudChkYXRhLnNwYW4sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSkpO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiBtYW55KHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcIm1hbnkgXFx1MjAyMiBcIiArIGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoc291cmNlKSxcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpdGVyYXRlID0gaW5wdXQuaW52b2tlKHNvdXJjZSwgY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0ZS5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfYSA9IGl0ZXJhdGUudmFsdWUsIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWFueSA9IG1hbnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgbXVsdGlfMSA9IHJlcXVpcmUoXCIuL211bHRpXCIpO1xyXG52YXIgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBodG1sXzEgPSByZXF1aXJlKFwiLi9odG1sXCIpO1xyXG52YXIgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbnZhciBkZWJ1Z18xID0gcmVxdWlyZShcIi4vZGVidWdcIik7XHJcbmZ1bmN0aW9uIHJlYWQoc291cmNlLCBfYSkge1xyXG4gICAgdmFyIGxvZ2dpbmcgPSBfYS5sb2dnaW5nO1xyXG4gICAgdmFyIGlucHV0ID0gc25pcHBldF8xLlNuaXBwZXQuaW5wdXQoc291cmNlLCBuZXcgY29tYmluYXRvcnNfMS5Mb2dnZXIobG9nZ2luZyB8fCBmYWxzZSkpO1xyXG4gICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZSh1dGlsc18xLmNvbXBsZXRlKHV0aWxzXzEubWFwKG11bHRpXzEubWFueShjb21iaW5hdG9yc18xLmFueShcInRvcCBsZXZlbFwiLCBoYnNfMS5JTlRFUlBPTEFURSwgZXhwb3J0cy5DT05URU5UKSksIGZ1bmN0aW9uICh0b2tlbnMpIHtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnJvb3QodG9rZW5zLCBzcGFuXzEucmFuZ2UuYXBwbHkodm9pZCAwLCB0b2tlbnMpKSk7XHJcbiAgICB9KSksIGlucHV0KTtcclxuICAgIGlmIChsb2dnaW5nKSB7XHJcbiAgICAgICAgZGVidWdfMS5wcmludERlYnVnKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXRpbHNfMS5tYXBSZXN1bHQocmVzdWx0LCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSBfYVsxXTtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2VuKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMucmVhZCA9IHJlYWQ7XHJcbmV4cG9ydHMuQ09OVEVOVCA9IGNvbWJpbmF0b3JzXzEuYW55KFwiQ09OVEVOVFwiLCBodG1sXzEuQ09NTUVOVCwgaHRtbF8xLkVORF9UQUcsIGh0bWxfMS5TVEFSVF9UQUcsIGh0bWxfMS5URVhUKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gc2VyaWFsaXplUm9vdChyb290LCBzb3VyY2UpIHtcclxuICAgIHZhciBvdXQgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSByb290LmNoaWxkcmVuOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IF9hW19pXTtcclxuICAgICAgICBvdXQucHVzaC5hcHBseShvdXQsIHNlcmlhbGl6ZU5vZGUodG9rZW4sIHNvdXJjZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dC5qb2luKFwiXCIpO1xyXG59XHJcbmV4cG9ydHMuc2VyaWFsaXplUm9vdCA9IHNlcmlhbGl6ZVJvb3Q7XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGUodG9rZW4sIHNvdXJjZSkge1xyXG4gICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcIlwiXTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xyXG4gICAgICAgIC8vIGxlYWYgdG9rZW5zXHJcbiAgICAgICAgY2FzZSBcIkRvdFwiIC8qIERvdCAqLzpcclxuICAgICAgICBjYXNlIFwiRXFcIiAvKiBFcSAqLzpcclxuICAgICAgICBjYXNlIFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi86XHJcbiAgICAgICAgY2FzZSBcIldTXCIgLyogV1MgKi86XHJcbiAgICAgICAgY2FzZSBcIlRleHRcIiAvKiBUZXh0ICovOlxyXG4gICAgICAgIGNhc2UgXCJBdHRyaWJ1dGVOYW1lXCIgLyogQXR0cmlidXRlTmFtZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtzcGFuXzEuc2xpY2UodG9rZW4uc3Bhbiwgc291cmNlKV07XHJcbiAgICAgICAgY2FzZSBcIkF0dHJpYnV0ZVZhbHVlXCIgLyogQXR0cmlidXRlVmFsdWUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVRdW90ZSh0b2tlbiksXHJcbiAgICAgICAgICAgICAgICBzcGFuXzEuc2xpY2UodG9rZW4udmFsdWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVRdW90ZSh0b2tlbilcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBjYXNlIFwiQXJndW1lbnRcIiAvKiBBcmd1bWVudCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIkBcIiwgc3Bhbl8xLnNsaWNlKHRva2VuLm5hbWUsIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJTZXhwXCIgLyogU2V4cCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFtcIihcIl0sIHNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFtcIilcIl0pO1xyXG4gICAgICAgIGNhc2UgXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1wie3tcIl0sIHNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFtcIn19XCJdKTtcclxuICAgICAgICBjYXNlIFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1wie3t7XCJdLCBzZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBbXCJ9fX1cIl0pO1xyXG4gICAgICAgIGNhc2UgXCJDb21tZW50XCIgLyogQ29tbWVudCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIjwhLS1cIiwgc3Bhbl8xLnNsaWNlKHRva2VuLmRhdGEsIHNvdXJjZSksIFwiLS0+XCJdO1xyXG4gICAgICAgIGNhc2UgXCJTdGFydFRhZ1wiIC8qIFN0YXJ0VGFnICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1xyXG4gICAgICAgICAgICAgICAgXCI8XCJcclxuICAgICAgICAgICAgXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5uYW1lLCBzb3VyY2UpLCBzZXJpYWxpemVMaXN0KHRva2VuLmF0dHJpYnV0ZXMsIHNvdXJjZSksIFtcclxuICAgICAgICAgICAgICAgIFwiPlwiXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIGNhc2UgXCJFbmRUYWdcIiAvKiBFbmRUYWcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbXHJcbiAgICAgICAgICAgICAgICBcIjwvXCJcclxuICAgICAgICAgICAgXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5uYW1lLCBzb3VyY2UpLCBzZXJpYWxpemVOb2RlKHRva2VuLnRyYWlsaW5nLCBzb3VyY2UpLCBbXHJcbiAgICAgICAgICAgICAgICBcIj5cIlxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICBjYXNlIFwiVmFsdWVkQXR0cmlidXRlXCIgLyogVmFsdWVkQXR0cmlidXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoc2VyaWFsaXplTm9kZSh0b2tlbi5uYW1lLCBzb3VyY2UpLCBbXHJcbiAgICAgICAgICAgICAgICBcIj1cIlxyXG4gICAgICAgICAgICBdLCBzZXJpYWxpemVOb2RlKHRva2VuLnZhbHVlLCBzb3VyY2UpKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS51bnJlYWNoYWJsZSh0b2tlbik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zZXJpYWxpemVOb2RlID0gc2VyaWFsaXplTm9kZTtcclxuZnVuY3Rpb24gc2VyaWFsaXplUXVvdGUodG9rZW4pIHtcclxuICAgIHN3aXRjaCAodG9rZW4udmFsdWVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiJ1wiO1xyXG4gICAgICAgIGNhc2UgXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBcIlxcXCJcIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVMaXN0KHRva2Vucywgc291cmNlKSB7XHJcbiAgICByZXR1cm4gX19zcHJlYWRBcnJheXModG9rZW5zLmZsYXRNYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBzZXJpYWxpemVOb2RlKGNoaWxkLCBzb3VyY2UpOyB9KSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdG9rZW5zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3Rva2Vuc1wiKSk7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxuZnVuY3Rpb24gYnVpbGRQcmVzZW50VG9rZW5zKHRva2VucywgYnVpbGRlcikge1xyXG4gICAgcmV0dXJuIHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7IHJldHVybiB0b2tlbihidWlsZGVyKTsgfSk7XHJcbn1cclxuZXhwb3J0cy5idWlsZFByZXNlbnRUb2tlbnMgPSBidWlsZFByZXNlbnRUb2tlbnM7XHJcbmZ1bmN0aW9uIGlkKG5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gdG9rZW5zLmlkKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7IH07XHJcbn1cclxuZXhwb3J0cy5pZCA9IGlkO1xyXG5mdW5jdGlvbiBhcmcobmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiB0b2tlbnMuYXJnKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7IH07XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmV4cG9ydHMuZG90ID0gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHRva2Vucy5kb3QoYnVpbGRlci5jb25zdW1lKFwiLlwiKSk7IH07XHJcbmV4cG9ydHMuZXEgPSBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gdG9rZW5zLmVxKGJ1aWxkZXIuY29uc3VtZShcIj1cIikpOyB9O1xyXG5leHBvcnRzLnNwID0gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgIHJldHVybiB0b2tlbnMud3MoYnVpbGRlci5jb25zdW1lKFwiIFwiKSk7XHJcbn07XHJcbmZ1bmN0aW9uIHdzKHNwYWNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHRva2Vucy53cyhidWlsZGVyLmNvbnN1bWUoc3BhY2UpKTsgfTtcclxufVxyXG5leHBvcnRzLndzID0gd3M7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IGJ1aWxkZXIuY29uc3VtZShcInt7XCIpO1xyXG4gICAgICAgIHZhciBvdXQgPSBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZChidWlsZGVyKTsgfSk7XHJcbiAgICAgICAgdmFyIGNsb3NlID0gYnVpbGRlci5jb25zdW1lKFwifX1cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5pbnRlcnBvbGF0ZShvdXQsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHNleHAoY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwiKFwiKTtcclxuICAgICAgICB2YXIgb3V0ID0gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQoYnVpbGRlcik7IH0pO1xyXG4gICAgICAgIHZhciBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcIilcIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5zZXhwKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2V4cCA9IHNleHA7XHJcbmZ1bmN0aW9uIHRleHQoY2hhcnMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBvdXQgPSBidWlsZGVyLmNvbnN1bWUoY2hhcnMpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMudGV4dChvdXQpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRleHQgPSB0ZXh0O1xyXG5mdW5jdGlvbiBjb21tZW50KGNoYXJzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8IS0tXCIpO1xyXG4gICAgICAgIHZhciBkYXRhID0gYnVpbGRlci5jb25zdW1lKGNoYXJzKTtcclxuICAgICAgICB2YXIgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiLS0+XCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuY29tbWVudChkYXRhLCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNvbW1lbnQgPSBjb21tZW50O1xyXG5mdW5jdGlvbiBpc1RhZ05hbWUoaW5wdXQpIHtcclxuICAgIHJldHVybiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShpbnB1dCkgfHxcclxuICAgICAgICB0eXBlb2YgaW5wdXQgPT09IFwiZnVuY3Rpb25cIik7XHJcbn1cclxuZnVuY3Rpb24gYnVpbGRUYWdOYW1lKG5hbWUpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XHJcbiAgICAgICAgdmFyIHRva2Vuc18xID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBuYW1lXzEgPSBuYW1lOyBfaSA8IG5hbWVfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHBhcnQgPSBuYW1lXzFbX2ldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zXzEucHVzaChwYXJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFydFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJAXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vuc18xLnB1c2goYXJnKHBhcnQpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnNfMS5wdXNoKGlkKHBhcnQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9rZW5zXzE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChuYW1lWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbYXJnKG5hbWUpXTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtpZChuYW1lKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc3RhcnRUYWcob3B0aW9ucykge1xyXG4gICAgaWYgKGlzVGFnTmFtZShvcHRpb25zKSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8XCIpO1xyXG4gICAgICAgICAgICB2YXIgbmFtZVRva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucyhidWlsZFRhZ05hbWUob3B0aW9ucyksIGJ1aWxkZXIpO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5zdGFydFRhZyh7IG5hbWU6IG5hbWVUb2tlbnMgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lLCBhdHRycyA9IG9wdGlvbnMuYXR0cnMsIHNlbGZDbG9zaW5nID0gb3B0aW9ucy5zZWxmQ2xvc2luZztcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPFwiKTtcclxuICAgICAgICAgICAgdmFyIG5hbWVUb2tlbnMgPSBidWlsZFByZXNlbnRUb2tlbnMoYnVpbGRUYWdOYW1lKG5hbWUpLCBidWlsZGVyKTtcclxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gYXR0cnMubWFwKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBhdHRyKGJ1aWxkZXIpOyB9KTtcclxuICAgICAgICAgICAgaWYgKHNlbGZDbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUoXCIvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCI+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnN0YXJ0VGFnKHsgbmFtZTogbmFtZVRva2VucywgYXR0cnM6IGNoaWxkcmVuLCBzZWxmQ2xvc2luZzogc2VsZkNsb3NpbmcgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc3RhcnRUYWcgPSBzdGFydFRhZztcclxuZnVuY3Rpb24gZW5kVGFnKG9wdGlvbnMpIHtcclxuICAgIHZhciB0YWdOYW1lID0gaXNUYWdOYW1lKG9wdGlvbnMpID8gb3B0aW9ucyA6IG9wdGlvbnMubmFtZTtcclxuICAgIHZhciB0cmFpbGluZyA9IGlzVGFnTmFtZShvcHRpb25zKSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMudHJhaWxpbmc7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8L1wiKTtcclxuICAgICAgICB2YXIgdGFnVG9rZW5zID0gYnVpbGRQcmVzZW50VG9rZW5zKGJ1aWxkVGFnTmFtZSh0YWdOYW1lKSwgYnVpbGRlcik7XHJcbiAgICAgICAgdmFyIHRyYWlsaW5nVG9rZW4gPSB0cmFpbGluZyA/IHdzKHRyYWlsaW5nKShidWlsZGVyKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiPlwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmVuZFRhZyh7IG5hbWU6IHRhZ1Rva2VucywgdHJhaWxpbmc6IHRyYWlsaW5nVG9rZW4gfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lbmRUYWcgPSBlbmRUYWc7XHJcbmZ1bmN0aW9uIGF0dHIob3B0aW9ucykge1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShvcHRpb25zKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5hdHRyTmFtZShuYW1lU3Bhbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSwgcmF3VmFsdWUgPSBvcHRpb25zLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBxdW90ZTtcclxuICAgICAgICAgICAgc3dpdGNoIChyYXdWYWx1ZVswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlxcXCJcIjpcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd1ZhbHVlLnNsaWNlKDEsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IFwiXFxcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIidcIjpcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd1ZhbHVlLnNsaWNlKDEsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IFwiJ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJhd1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICB2YXIgbmFtZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUobmFtZSk7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29uc3VtZShcIj1cIik7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZVN0YXJ0ID0gYnVpbGRlci5wb3M7XHJcbiAgICAgICAgICAgIGlmIChxdW90ZSkge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5jb25zdW1lKHF1b3RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmFsdWVTcGFuID0gYnVpbGRlci5jb25zdW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHF1b3RlKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUocXVvdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZUVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICB2YXIgZW5kID0gYnVpbGRlci5wb3M7XHJcbiAgICAgICAgICAgIHZhciBuYW1lVG9rZW4gPSB0b2tlbnMuYXR0ck5hbWUobmFtZVNwYW4pO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWVUb2tlbiA9IHRva2Vucy5hdHRyVmFsdWUoeyB0eXBlOiBxdW90ZVR5cGUocXVvdGUpLCB2YWx1ZTogdmFsdWVTcGFuIH0sIHsgc3RhcnQ6IHZhbHVlU3RhcnQsIGVuZDogdmFsdWVFbmQgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMudmFsdWVkQXR0cih7IG5hbWU6IG5hbWVUb2tlbiwgdmFsdWU6IHZhbHVlVG9rZW4gfSwgeyBzdGFydDogc3RhcnQsIGVuZDogZW5kIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5hdHRyID0gYXR0cjtcclxuZnVuY3Rpb24gcXVvdGVUeXBlKHF1b3RlKSB7XHJcbiAgICBzd2l0Y2ggKHF1b3RlKSB7XHJcbiAgICAgICAgY2FzZSBcIlxcXCJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiRG91YmxlUXVvdGVkXCIgLyogRG91YmxlUXVvdGVkICovO1xyXG4gICAgICAgIGNhc2UgXCInXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJVbnF1b3RlZFwiIC8qIFVucXVvdGVkICovO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJvb3QoY2hpbGRyZW4pIHtcclxuICAgIHZhciBidWlsZGVyID0gbmV3IFRva2VuQnVpbGRlcigpO1xyXG4gICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5wb3M7XHJcbiAgICB2YXIgb3V0ID0gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQoYnVpbGRlcik7IH0pO1xyXG4gICAgdmFyIGVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgcmV0dXJuIHRva2Vucy5yb290KG91dCwgc3Bhbl8xLnNwYW4oc3RhcnQsIGVuZCkpO1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbnZhciBUb2tlbkJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUb2tlbkJ1aWxkZXIocG9zKSB7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IDA7IH1cclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIH1cclxuICAgIFRva2VuQnVpbGRlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChjaGFycykge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMucG9zICs9IGNoYXJzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogdGhpcy5wb3MgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVG9rZW5CdWlsZGVyO1xyXG59KCkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBsZWFmKHR5cGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoc3BhbikgeyByZXR1cm4gKHsgdHlwZTogdHlwZSwgc3Bhbjogc3BhbiB9KTsgfTtcclxufVxyXG5leHBvcnRzLmxlYWYgPSBsZWFmO1xyXG5leHBvcnRzLmlkID0gbGVhZihcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovKTtcclxuZXhwb3J0cy5kb3QgPSBsZWFmKFwiRG90XCIgLyogRG90ICovKTtcclxuZXhwb3J0cy5lcSA9IGxlYWYoXCJFcVwiIC8qIEVxICovKTtcclxuZXhwb3J0cy53cyA9IGxlYWYoXCJXU1wiIC8qIFdTICovKTtcclxuZXhwb3J0cy50ZXh0ID0gbGVhZihcIlRleHRcIiAvKiBUZXh0ICovKTtcclxuZXhwb3J0cy5hdHRyTmFtZSA9IGxlYWYoXCJBdHRyaWJ1dGVOYW1lXCIgLyogQXR0cmlidXRlTmFtZSAqLyk7XHJcbmZ1bmN0aW9uIGNvbW1lbnQoZGF0YSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkNvbW1lbnRcIiAvKiBDb21tZW50ICovLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgc3Bhbjogc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNvbW1lbnQgPSBjb21tZW50O1xyXG5mdW5jdGlvbiBhcmcoc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkFyZ3VtZW50XCIgLyogQXJndW1lbnQgKi8sXHJcbiAgICAgICAgbmFtZTogeyBzdGFydDogc3Bhbi5zdGFydCArIDEsIGVuZDogc3Bhbi5lbmQgfSxcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXJnID0gYXJnO1xyXG5mdW5jdGlvbiBhdHRyVmFsdWUoX2EsIHNwYW4pIHtcclxuICAgIHZhciB0eXBlID0gX2EudHlwZSwgdmFsdWUgPSBfYS52YWx1ZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBdHRyaWJ1dGVWYWx1ZVwiIC8qIEF0dHJpYnV0ZVZhbHVlICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgdmFsdWVUeXBlOiB0eXBlLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmF0dHJWYWx1ZSA9IGF0dHJWYWx1ZTtcclxuZnVuY3Rpb24gdmFsdWVkQXR0cihfYSwgc3Bhbikge1xyXG4gICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB2YWx1ZSA9IF9hLnZhbHVlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlZhbHVlZEF0dHJpYnV0ZVwiIC8qIFZhbHVlZEF0dHJpYnV0ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudmFsdWVkQXR0ciA9IHZhbHVlZEF0dHI7XHJcbmZ1bmN0aW9uIHN0YXJ0VGFnKF9hLCBzcGFuKSB7XHJcbiAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIGF0dHJzID0gX2EuYXR0cnMsIHNlbGZDbG9zaW5nID0gX2Euc2VsZkNsb3Npbmc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU3RhcnRUYWdcIiAvKiBTdGFydFRhZyAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgYXR0cmlidXRlczogYXR0cnMgfHwgW10sXHJcbiAgICAgICAgc2VsZkNsb3Npbmc6IHNlbGZDbG9zaW5nXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc3RhcnRUYWcgPSBzdGFydFRhZztcclxuZnVuY3Rpb24gZW5kVGFnKF9hLCBzcGFuKSB7XHJcbiAgICB2YXIgbmFtZSA9IF9hLm5hbWUsIHRyYWlsaW5nID0gX2EudHJhaWxpbmc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiRW5kVGFnXCIgLyogRW5kVGFnICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgdHJhaWxpbmc6IHRyYWlsaW5nID8gdHJhaWxpbmcgOiBudWxsLFxyXG4gICAgICAgIG5hbWU6IG5hbWVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lbmRUYWcgPSBlbmRUYWc7XHJcbmZ1bmN0aW9uIHNleHAoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTZXhwXCIgLyogU2V4cCAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNleHAgPSBzZXhwO1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGludGVycG9sYXRlO1xyXG5mdW5jdGlvbiB0cnVzdGVkSW50ZXJwb2xhdGUoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJUcnVzdGVkSW50ZXJwb2xhdGVcIiAvKiBUcnVzdGVkSW50ZXJwb2xhdGUgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50cnVzdGVkSW50ZXJwb2xhdGUgPSB0cnVzdGVkSW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHJvb3QoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJSb290XCIgLyogUm9vdCAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnJvb3QgPSByb290O1xyXG5mdW5jdGlvbiBkZWJ1Z0Zvcm1hdFRva2VuKHRva2VuKSB7XHJcbiAgICByZXR1cm4gXCI8dG9rZW46XCIgKyB0b2tlbi50eXBlICsgXCI+XCI7XHJcbn1cclxuZXhwb3J0cy5kZWJ1Z0Zvcm1hdFRva2VuID0gZGVidWdGb3JtYXRUb2tlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiBtYXBSZXN1bHQocmVzdWx0LCBjYWxsYmFjaykge1xyXG4gICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xyXG59XHJcbmV4cG9ydHMubWFwUmVzdWx0ID0gbWFwUmVzdWx0O1xyXG5mdW5jdGlvbiBtYXAoY29tYmluYXRvciwgbWFwcGVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvciksXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGZpcnN0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlmIChmaXJzdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlyc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gZmlyc3QudmFsdWUsIG5leHQgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG1hcHBlcih2YWx1ZSwgbmV4dCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LCByZXN1bHQudmFsdWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWFwID0gbWFwO1xyXG5mdW5jdGlvbiBjb21wbGV0ZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJjb21wbGV0ZVwiLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UobWFwKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dC5yZXN0TGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiaW5jb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSwgaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG5mdW5jdGlvbiBwcmVzZW50KHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInByZXNlbnRcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKHNvdXJjZSwgaW5wdXQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZXEobmV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnByZXNlbnQgPSBwcmVzZW50O1xyXG5mdW5jdGlvbiB1bnJlYWNoYWJsZSh2YWx1ZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWFjaGFibGUgY29kZSByZWFjaGVkXCIpO1xyXG59XHJcbmV4cG9ydHMudW5yZWFjaGFibGUgPSB1bnJlYWNoYWJsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNuaXBwZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTbmlwcGV0KHNvdXJjZSwgb2Zmc2V0LCBsZW5ndGgsIGxvZ2dlcikge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgfVxyXG4gICAgU25pcHBldC5pbnB1dCA9IGZ1bmN0aW9uIChzb3VyY2UsIGxvZ2dlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldChzb3VyY2UsIDAsIDAsIGxvZ2dlcik7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGNvbWJpbmF0b3IsIGlucHV0LCBfYSkge1xyXG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBmb3JjZVRyYW5zcGFyZW50ID0gX2IuZm9yY2VUcmFuc3BhcmVudCwgY29udGV4dCA9IF9iLmNvbnRleHQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLmludm9rZShjb21iaW5hdG9yLCBpbnB1dCk7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuZXEgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc291cmNlID09PSBvdGhlci5zb3VyY2UgJiZcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPT09IG90aGVyLm9mZnNldCAmJlxyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9PT0gb3RoZXIubGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5mbXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPG9mZnNldDpcIiArIHRoaXMub2Zmc2V0ICsgXCIgbGVuZ3RoOlwiICsgdGhpcy5sZW5ndGggKyBcIj5cIjtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5kZWJ1Z1Jlc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIoZW9mKVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoY2hhcnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIGNoYXJzLCB0aGlzLmxvZ2dlcik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInNsaWNlUmVzdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJyZXN0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCAwLCB0aGlzLmxvZ2dlcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5pc0VPRiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCA9PT0gdGhpcy5zb3VyY2UubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmlzTWF0Y2ggPSBmdW5jdGlvbiAoY2hhcnMpIHtcclxuICAgICAgICB2YXIgc2xpY2UgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoICsgY2hhcnMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gc2xpY2UgPT09IGNoYXJzO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChjb3VudCkge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gdm9pZCAwKSB7IGNvdW50ID0gMTsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQsIHRoaXMubGVuZ3RoICsgY291bnQsIHRoaXMubG9nZ2VyKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwic3BhblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgICAgICAgICBlbmQ6IHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJmcmFnbWVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwicmVzdExlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5sZW5ndGggLSB0aGlzLm9mZnNldCAtIHRoaXMubGVuZ3RoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFNuaXBwZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU25pcHBldCA9IFNuaXBwZXQ7XHJcbmZ1bmN0aW9uIG9rKHZhbHVlKSB7XHJcbiAgICByZXR1cm4geyBraW5kOiBcIm9rXCIsIHZhbHVlOiB2YWx1ZSB9O1xyXG59XHJcbmV4cG9ydHMub2sgPSBvaztcclxuZnVuY3Rpb24gZXJyKHNuaXBwZXQsIHJlYXNvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBraW5kOiBcImVyclwiLFxyXG4gICAgICAgIHNuaXBwZXQ6IHNuaXBwZXQsXHJcbiAgICAgICAgcmVhc29uOiByZWFzb25cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lcnIgPSBlcnI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHNwYW4oc3RhcnQsIGVuZCkge1xyXG4gICAgcmV0dXJuIHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IGVuZCB9O1xyXG59XHJcbmV4cG9ydHMuc3BhbiA9IHNwYW47XHJcbmZ1bmN0aW9uIHJhbmdlKCkge1xyXG4gICAgdmFyIHNwYW5zID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHNwYW5zW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoc3BhbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHNwYW4oMCwgMCk7XHJcbiAgICB9XHJcbiAgICB2YXIgZmlyc3QgPSBzcGFuc1swXTtcclxuICAgIHZhciBsYXN0ID0gZmlyc3Q7XHJcbiAgICBmb3IgKHZhciBfYSA9IDAsIHNwYW5zXzEgPSBzcGFuczsgX2EgPCBzcGFuc18xLmxlbmd0aDsgX2ErKykge1xyXG4gICAgICAgIHZhciBzcGFuXzEgPSBzcGFuc18xW19hXTtcclxuICAgICAgICBsYXN0ID0gc3Bhbl8xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3RhcnQ6IGdldFNwYW4oZmlyc3QpLnN0YXJ0LCBlbmQ6IGdldFNwYW4obGFzdCkuZW5kIH07XHJcbn1cclxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xyXG5mdW5jdGlvbiBpc1NwYW4oaXRlbSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtLnN0YXJ0ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBpdGVtLmVuZCA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5leHBvcnRzLmlzU3BhbiA9IGlzU3BhbjtcclxuZnVuY3Rpb24gZ2V0U3BhbihpdGVtKSB7XHJcbiAgICBpZiAoaXNTcGFuKGl0ZW0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5zcGFuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZ2V0U3BhbiA9IGdldFNwYW47XHJcbmZ1bmN0aW9uIHNsaWNlKHNwYW4sIHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHNvdXJjZS5zbGljZShzcGFuLnN0YXJ0LCBzcGFuLmVuZCk7XHJcbn1cclxuZXhwb3J0cy5zbGljZSA9IHNsaWNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9