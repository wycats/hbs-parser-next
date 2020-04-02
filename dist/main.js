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
            return "[" + debuggable
                .map(formatDebuggable)
                .join(", ") + "]";
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
exports.ARG_NAME = utils_1.map(combinators_1.seq("ARG_NAME", combinators_1.tag("@"), exports.ATTRIBUTE_NAME), function (_a) {
    var at = _a[0], attr = _a[1];
    return snippet_1.ok(tokens_1.argName(attr.span, span_1.range(at.span, attr.span)));
});
exports.ANY_ATTR_NAME = combinators_1.any("ANY_ATTR_NAME", exports.ARG_NAME, exports.ATTRIBUTE_NAME);
exports.DQ_STRING_INTERPOLATE = combinators_1.any("DQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, utils_1.map(combinators_1.pattern(/^[^"]+/, "dq text"), function (value) { return snippet_1.ok(tokens_1.text(value.span)); }));
exports.SQ_STRING_INTERPOLATE = combinators_1.any("SQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, utils_1.map(combinators_1.pattern(/^[^']+/, "sq text"), function (value) { return snippet_1.ok(tokens_1.text(value.span)); }));
function STRING_INTERPOLATION(combinator) {
    return {
        name: "STRING_INTERPOLATION",
        invoke: function (input) {
            return input.invoke(utils_1.map(multi_1.many(combinator), function (value) {
                return snippet_1.ok(tokens_1.stringInterpolation(value, span_1.range.apply(void 0, value)));
            }), input);
        }
    };
}
exports.STRING_INTERPOLATION = STRING_INTERPOLATION;
exports.ATTRIBUTE_VALUE = combinators_1.pick({
    interpolate: hbs_1.INTERPOLATE,
    dq: combinators_1.seq("dq", combinators_1.tag("\""), STRING_INTERPOLATION(exports.DQ_STRING_INTERPOLATE), combinators_1.tag("\"")),
    sq: combinators_1.seq("sq", combinators_1.tag("'"), STRING_INTERPOLATION(exports.SQ_STRING_INTERPOLATE), combinators_1.tag("'")),
    unquoted: combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020>\0"'<=`]+/u, "unquoted contents")
}, {
    interpolate: function (interpolate) {
        return snippet_1.ok(tokens_1.attrValue({ type: "Interpolate" /* Interpolate */, value: interpolate }, interpolate.span));
    },
    dq: function (_a) {
        var open = _a[0], value = _a[1], close = _a[2];
        return snippet_1.ok(tokens_1.attrValue({
            type: "DoubleQuoted" /* DoubleQuoted */,
            value: value
        }, span_1.range(open, close)));
    },
    sq: function (_a) {
        var open = _a[0], value = _a[1], close = _a[2];
        return snippet_1.ok(tokens_1.attrValue({
            type: "SingleQuoted" /* SingleQuoted */,
            value: value
        }, span_1.range(open, close)));
    },
    unquoted: function (value) {
        return snippet_1.ok(tokens_1.attrValue({
            type: "Unquoted" /* Unquoted */,
            value: tokens_1.stringInterpolation([tokens_1.text(value.span)], value.span)
        }, value.span));
    }
});
exports.ATTRIBUTE = combinators_1.pick({
    valued: combinators_1.seq("valued attribute", exports.ANY_ATTR_NAME, hbs_1.EQ, exports.ATTRIBUTE_VALUE),
    bare: exports.ATTRIBUTE_NAME
}, {
    valued: function (_a) {
        var name = _a[0], value = _a[2];
        return snippet_1.ok(tokens_1.valuedAttr({ name: name, value: value }, span_1.range(name, value)));
    },
    bare: function (value) { return snippet_1.ok(tokens_1.attrName(value.span)); }
});
exports.ATTRIBUTES = utils_1.map(combinators_1.seq("ATTRIBUTES", hbs_1.WS, multi_1.many(combinators_1.any("spaced attribute", hbs_1.WS, hbs_1.INTERPOLATE, exports.ATTRIBUTE))), function (_a) {
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
var utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
function many(source) {
    return {
        name: "many \u2022 " + combinators_1.combinatorName(source),
        invoke: function (input) {
            var current = input;
            var out = [];
            var count = 0;
            while (true) {
                if (count++ > 50) {
                    return snippet_1.err(input, "likely infinite loop");
                }
                if (current.isEOF()) {
                    return snippet_1.ok([current.rest, out]);
                }
                var iterate = input.invoke(utils_1.present(source), current);
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
var tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
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
        case "ArgName" /* ArgName */:
            return ["@", span_1.slice(token.name, source)];
        case "AttributeValue" /* AttributeValue */:
            return serializeAttributeValue(token, source);
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
        case "StringInterpolation" /* StringInterpolation */:
            return serializeList(token.parts, source);
        default:
            return utils_1.unreachable(token);
    }
}
exports.serializeNode = serializeNode;
function serializeAttributeValue(token, source) {
    if (tokens_1.isInterpolateAttribute(token)) {
        return serializeNode(token.value, source);
    }
    return __spreadArrays([
        serializeQuote(token)
    ], serializeNode(token.value, source), [
        serializeQuote(token)
    ]);
}
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
function stringInterpolate(children, quote) {
    return function (builder) {
        var open = builder.consume(quote);
        var out = children.map(function (child) { return child(builder); });
        var close = builder.consume(quote);
        return tokens.attrValue({
            type: quoteType(quote),
            value: tokens.stringInterpolation(out, span_1.range.apply(void 0, out))
        }, span_1.range(open, close));
    };
}
exports.stringInterpolate = stringInterpolate;
function attrInterpolate() {
    var tokenList = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tokenList[_i] = arguments[_i];
    }
    return function (builder) {
        var value = interpolate(tokenList)(builder);
        return tokens.attrValue({
            type: "Interpolate" /* Interpolate */,
            value: value
        }, value.span);
    };
}
exports.attrInterpolate = attrInterpolate;
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
function argName(name) {
    return function (builder) {
        var startSpan = builder.consume(name[0]);
        var nameSpan = builder.consume(name.slice(1));
        return tokens.argName(nameSpan, span_1.range(startSpan, nameSpan));
    };
}
exports.argName = argName;
function attr(options) {
    if (typeof options === "string") {
        return function (builder) {
            var nameSpan = builder.consume(options);
            return tokens.attrName(nameSpan);
        };
    }
    else if (typeof options === "function") {
        return options;
    }
    else {
        return function (builder) {
            var name = options.name, rawValue = options.value;
            var start = builder.pos;
            var nameToken = typeof name === "string"
                ? tokens.attrName(builder.consume(name))
                : name(builder);
            builder.consume("=");
            var valueStart = builder.pos;
            var valueToken;
            if (typeof rawValue === "string") {
                switch (rawValue[0]) {
                    case "\"": {
                        var start_1 = builder.consume("\"");
                        var valueSpan = builder.consume(rawValue.slice(1, -1));
                        var end_1 = builder.consume("\"");
                        var interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "DoubleQuoted" /* DoubleQuoted */,
                            value: interpolation
                        }, span_1.range(start_1, end_1));
                        break;
                    }
                    case "'": {
                        var start_2 = builder.consume("'");
                        var valueSpan = builder.consume(rawValue.slice(1, -1));
                        var end_2 = builder.consume("'");
                        var interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "SingleQuoted" /* SingleQuoted */,
                            value: interpolation
                        }, span_1.range(start_2, end_2));
                        break;
                    }
                    default: {
                        var valueSpan = builder.consume(rawValue);
                        var interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "Unquoted" /* Unquoted */,
                            value: interpolation
                        }, valueSpan);
                    }
                }
            }
            else {
                valueToken = rawValue(builder);
            }
            var end = builder.pos;
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
    return { root: tokens.root(out, span_1.span(start, end)), source: builder.source };
}
exports.root = root;
var TokenBuilder = /** @class */ (function () {
    function TokenBuilder(pos) {
        if (pos === void 0) { pos = 0; }
        this.pos = pos;
        this.output = "";
    }
    TokenBuilder.prototype.consume = function (chars) {
        this.output += chars;
        var start = this.pos;
        this.pos += chars.length;
        return { start: start, end: this.pos };
    };
    Object.defineProperty(TokenBuilder.prototype, "source", {
        get: function () {
            return this.output;
        },
        enumerable: true,
        configurable: true
    });
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
function argName(name, span) {
    return {
        type: "ArgName" /* ArgName */,
        name: name,
        span: span
    };
}
exports.argName = argName;
function stringInterpolation(parts, span) {
    return {
        type: "StringInterpolation" /* StringInterpolation */,
        span: span,
        parts: parts
    };
}
exports.stringInterpolation = stringInterpolation;
function isInterpolateAttribute(input) {
    return input.valueType === "Interpolate" /* Interpolate */;
}
exports.isInterpolateAttribute = isInterpolateAttribute;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvaGJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvbXVsdGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvcmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9zZXJpYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdG9rZW4tYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELCtCQUErQixtQkFBTyxDQUFDLHFEQUFvQjtBQUMzRDtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRDtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHlDQUFjO0FBQy9DO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLG1DQUFXO0FBQzVCLHVCQUF1QixtQkFBTyxDQUFDLDJCQUFPO0FBQ3RDO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLHFDQUFZO0FBQzdCLDBCQUEwQixtQkFBTyxDQUFDLDJDQUFlO0FBQ2pEO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLDZCQUFRO0FBQ3pCLHFCQUFxQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNuRDtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHlDQUFjO0FBQy9DO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLGlEQUFrQjtBQUNuQyxTQUFTLG1CQUFPLENBQUMsdUNBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwQyxjQUFjLG1CQUFPLENBQUMsb0NBQVM7QUFDL0IsZUFBZSxtQkFBTyxDQUFDLHNDQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EseUJBQXlCLDhGQUE4RjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsMkJBQTJCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsMkJBQTJCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGdCQUFnQjtBQUM5RTtBQUNBLCtEQUErRCxrQkFBa0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvUWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyxnREFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFpRTtBQUNqRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwQyxhQUFhLG1CQUFPLENBQUMsOEJBQVM7QUFDOUIsb0JBQW9CLG1CQUFPLENBQUMsZ0RBQWU7QUFDM0MsZUFBZSxtQkFBTyxDQUFDLHNDQUFVO0FBQ2pDLGNBQWMsbUJBQU8sQ0FBQyxvQ0FBUztBQUMvQixXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msc0JBQXNCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsZ0RBQWdEO0FBQ3hJO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDRDQUE0QyxTQUFTLElBQUksWUFBWTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCx5QkFBeUI7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqSWE7QUFDYjtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pELHdDQUF3QyxRQUFRO0FBQ2hELHdEQUF3RCxRQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLG9DQUFZO0FBQ3BDLGVBQWUsbUJBQU8sQ0FBQyxzQ0FBVTtBQUNqQyxvQkFBb0IsbUJBQU8sQ0FBQyxnREFBZTtBQUMzQyxjQUFjLG1CQUFPLENBQUMsb0NBQVM7QUFDL0IsYUFBYSxtQkFBTyxDQUFDLDhCQUFTO0FBQzlCLFlBQVksbUJBQU8sQ0FBQyxnQ0FBTztBQUMzQixjQUFjLG1CQUFPLENBQUMsb0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxrREFBa0QsRUFBRTtBQUMvSDtBQUNBO0FBQ0EseUxBQXlMLG1EQUFtRCxFQUFFO0FBQzlPO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHdLQUF3SyxnREFBZ0QsRUFBRTtBQUMxTix3S0FBd0ssZ0RBQWdELEVBQUU7QUFDMU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGdEQUFnRCw0REFBNEQ7QUFDNUcsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaURBQWlELDJCQUEyQjtBQUM1RSxLQUFLO0FBQ0wsNEJBQTRCLG9EQUFvRDtBQUNoRixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlDQUF5QyxpQ0FBaUM7QUFDMUUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM5R1k7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyxnREFBZTtBQUMzQyxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwQyxjQUFjLG1CQUFPLENBQUMsb0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwQyxhQUFhLG1CQUFPLENBQUMsOEJBQVM7QUFDOUIsb0JBQW9CLG1CQUFPLENBQUMsZ0RBQWU7QUFDM0MsY0FBYyxtQkFBTyxDQUFDLG9DQUFTO0FBQy9CLGVBQWUsbUJBQU8sQ0FBQyxzQ0FBVTtBQUNqQyxjQUFjLG1CQUFPLENBQUMsb0NBQVM7QUFDL0IsYUFBYSxtQkFBTyxDQUFDLGtDQUFRO0FBQzdCLFlBQVksbUJBQU8sQ0FBQyxnQ0FBTztBQUMzQixjQUFjLG1CQUFPLENBQUMsb0NBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJhO0FBQ2I7QUFDQSxpREFBaUQsUUFBUTtBQUN6RCx3Q0FBd0MsUUFBUTtBQUNoRCx3REFBd0QsUUFBUTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsc0NBQVU7QUFDakMsYUFBYSxtQkFBTyxDQUFDLDhCQUFTO0FBQzlCLGNBQWMsbUJBQU8sQ0FBQyxvQ0FBUztBQUMvQjtBQUNBO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrQ0FBK0M7QUFDckY7QUFDQSx1Q0FBdUMsZ0RBQWdEO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHFDQUFxQyxFQUFFO0FBQ2xHOzs7Ozs7Ozs7Ozs7O0FDN0ZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQyxzQ0FBVTtBQUM1QyxhQUFhLG1CQUFPLENBQUMsOEJBQVM7QUFDOUI7QUFDQSx3Q0FBd0MsdUJBQXVCLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlDQUF5QztBQUN4RTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQTBDO0FBQ3pFO0FBQ0E7QUFDQSxrQ0FBa0MseUNBQXlDO0FBQzNFLGlDQUFpQyx3Q0FBd0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQTBDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLGlEQUFpRCx1QkFBdUIsRUFBRTtBQUMxRSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsdUJBQXVCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHVCQUF1QixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHNCQUFzQixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDhEQUE4RDtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkNBQTJDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQ0FBcUMsR0FBRyx5QkFBeUI7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx1QkFBdUIsRUFBRTtBQUN0RTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDblJZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw0QkFBNEIsVUFBVSx5QkFBeUIsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUNBQXVDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1SGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxvQkFBb0IsbUJBQU8sQ0FBQyxnREFBZTtBQUMzQyxnQkFBZ0IsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELHlCQUF5QjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGlvbihleHByLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IDAgLyogSW50ZXJwb2xhdGlvbiAqLyxcclxuICAgICAgICBleHByOiBleHByLFxyXG4gICAgICAgIHNwYW46IHNwYW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbjtcclxuZnVuY3Rpb24gaWQobmFtZSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAyIC8qIElkZW50aWZpZXIgKi8sXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaWQgPSBpZDtcclxuZnVuY3Rpb24gcGF0aChoZWFkLCB0YWlsKSB7XHJcbiAgICBpZiAodGFpbCA9PT0gdm9pZCAwKSB7IHRhaWwgPSBbXTsgfVxyXG4gICAgaWYgKHRhaWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEgLyogUGF0aCAqLyxcclxuICAgICAgICAgICAgaGVhZDogaGVhZCxcclxuICAgICAgICAgICAgdGFpbDogdGFpbCxcclxuICAgICAgICAgICAgc3BhbjogeyBzdGFydDogaGVhZC5zcGFuLnN0YXJ0LCBlbmQ6IHRhaWxbdGFpbC5sZW5ndGggLSAxXS5zcGFuLmVuZCB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEgLyogUGF0aCAqLyxcclxuICAgICAgICAgICAgaGVhZDogaGVhZCxcclxuICAgICAgICAgICAgc3BhbjogaGVhZC5zcGFuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBhdGggPSBwYXRoO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tYmluYXRvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC9jb21iaW5hdG9yc1wiKSk7XHJcbmV4cG9ydHMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9yZWFkL2NvbWJpbmF0b3JzXCIpO1xyXG5leHBvcnRzLkxvZ2dlciA9IGNvbWJpbmF0b3JzXzEuTG9nZ2VyO1xyXG52YXIgbXVsdGkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC9tdWx0aVwiKSk7XHJcbmV4cG9ydHMubXVsdGkgPSBtdWx0aTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc25pcHBldFwiKSk7XHJcbnZhciBhc3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vYXN0XCIpKTtcclxuZXhwb3J0cy5hc3QgPSBhc3Q7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvaGJzXCIpKTtcclxudmFyIHRva2VucyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2Vuc1wiKSk7XHJcbmV4cG9ydHMudG9rZW5zID0gdG9rZW5zO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcGFuXCIpKTtcclxudmFyIGIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC90b2tlbi1idWlsZGVyXCIpKTtcclxuZXhwb3J0cy5iID0gYjtcclxudmFyIHV0aWxzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvdXRpbHNcIikpO1xyXG5leHBvcnRzLnV0aWxzID0gdXRpbHM7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvc2VyaWFsaXplXCIpKTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVhZC9yZWFkXCIpKTtcclxuZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcclxuICAgIHJldHVybiB7fTtcclxufVxyXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxudmFyIGRlYnVnXzEgPSByZXF1aXJlKFwiLi9kZWJ1Z1wiKTtcclxudmFyIHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG5mdW5jdGlvbiBmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGUpIHtcclxuICAgIGlmICh0eXBlb2YgZGVidWdnYWJsZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBkZWJ1Z2dhYmxlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVidWdnYWJsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBcIm51bGxcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGVidWdnYWJsZSkpIHtcclxuICAgICAgICBpZiAoZGVidWdnYWJsZS5sZW5ndGggPD0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJbXCIgKyBkZWJ1Z2dhYmxlXHJcbiAgICAgICAgICAgICAgICAubWFwKGZvcm1hdERlYnVnZ2FibGUpXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpICsgXCJdXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJbXCIgKyBmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGVbMF0pICsgXCIsIFwiICsgZm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzFdKSArIFwiLCBcIiArIGZvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZVsyXSkgKyBcIiwgLi4uXVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnZ2FibGUgaW5zdGFuY2VvZiBzbmlwcGV0XzEuU25pcHBldCkge1xyXG4gICAgICAgIHJldHVybiBkZWJ1Z2dhYmxlLmZtdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vuc18xLmRlYnVnRm9ybWF0VG9rZW4oZGVidWdnYWJsZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY29tYmluYXRvck5hbWUoY29tYmluYXRvcikge1xyXG4gICAgaWYgKGNvbWJpbmF0b3IubmFtZSkge1xyXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yLm5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGNvbWJpbmF0b3IpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFzc2VydDogZXhwZWN0ZWQgY29tYmluYXRvciBuYW1lXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvck5hbWUgPSBjb21iaW5hdG9yTmFtZTtcclxuZnVuY3Rpb24gY29tYmluYXRvclR5cGUoY29tYmluYXRvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb21iaW5hdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gXCJub3JtYWxcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yLmtpbmQgfHwgXCJub3JtYWxcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNvbWJpbmF0b3JUeXBlID0gY29tYmluYXRvclR5cGU7XHJcbmZ1bmN0aW9uIGlzVHJhbnNwYXJlbnQoY29tYmluYXRvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb21iaW5hdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY29tYmluYXRvci5raW5kID09PSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pc1RyYW5zcGFyZW50ID0gaXNUcmFuc3BhcmVudDtcclxuZnVuY3Rpb24gdGFnKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInN0cmluZyBcXHUwMEFCXCIgKyBzb3VyY2UgKyBcIlxcdTAwQkJcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0LnNsaWNlKHNvdXJjZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAobmV4dC5mcmFnbWVudCA9PT0gc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGtpbmQ6IFwiZXJyXCIsIHNuaXBwZXQ6IGlucHV0LCByZWFzb246IFwidGFnXCIgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50YWcgPSB0YWc7XHJcbmZ1bmN0aW9uIHBhdHRlcm4oc291cmNlLCBuYW1lKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwicGF0dGVybltcIiArIG5hbWUgKyBcIl1cIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdCA9IGlucHV0LnNsaWNlUmVzdDtcclxuICAgICAgICAgICAgdmFyIG1hdGNoID0gcmVzdC5tYXRjaChzb3VyY2UpO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVkID0gbWF0Y2hbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0LnNsaWNlKG1hdGNoZWQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwicGF0dGVyblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5wYXR0ZXJuID0gcGF0dGVybjtcclxuZnVuY3Rpb24gdGFrZVVudGlsKHBhdHRlcm4pIHtcclxuICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwidGFrZVVudGlsXCIsXHJcbiAgICAgICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpIHx8IG5leHQuaXNNYXRjaChwYXR0ZXJuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBuZXh0LmV4dGVuZCgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMudGFrZVVudGlsID0gdGFrZVVudGlsO1xyXG5mdW5jdGlvbiB0YWtlV2hpbGUocGF0dGVybikge1xyXG4gICAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogXCJ0YWtlV2hpbGVcIixcclxuICAgICAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHQuaXNNYXRjaChwYXR0ZXJuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQocGF0dGVybi5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJ0YWtlV2hpbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMudGFrZVdoaWxlID0gdGFrZVdoaWxlO1xyXG52YXIgTG9nZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUxvZ2dpbmcgPSBlbmFibGVMb2dnaW5nO1xyXG4gICAgfVxyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAoY29tYmluYXRvciwgaW5wdXQsIF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIGZvcmNlVHJhbnNwYXJlbnQgPSBfYi5mb3JjZVRyYW5zcGFyZW50LCBjb250ZXh0ID0gX2IuY29udGV4dDtcclxuICAgICAgICB2YXIgbG9nZ2VkID0gdGhpcy5lbmFibGVMb2dnaW5nICYmICFpc1RyYW5zcGFyZW50KGNvbWJpbmF0b3IpICYmICFmb3JjZVRyYW5zcGFyZW50O1xyXG4gICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgZGVidWdfMS5yb3coeyByZXN1bHQ6IFwic3RhcnRcIiwgYXJyb3c6IGRlYnVnXzEuaW5kZW50V1MoKSArIFwiLT5cIiwgY29tYmluYXRvcjogY29tYmluYXRvciwgY29udGV4dDogY29udGV4dCB9LCBcIlwiLCBpbnB1dC5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIGRlYnVnXzEuaW5kZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSBjb21iaW5hdG9yLmludm9rZShpbnB1dCk7XHJcbiAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBkZWJ1Z18xLm91dGRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdfMS5yb3coe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3c6IGRlYnVnXzEuaW5kZW50V1MoKSArIFwiPC1cIixcclxuICAgICAgICAgICAgICAgICAgICBjb21iaW5hdG9yOiBjb21iaW5hdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcclxuICAgICAgICAgICAgICAgIH0sIGZvcm1hdERlYnVnZ2FibGUocmVzdWx0LnZhbHVlWzFdKSwgcmVzdWx0LnZhbHVlWzBdLmRlYnVnUmVzdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdfMS5yb3coe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogXCJlcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93OiBkZWJ1Z18xLmluZGVudFdTKCkgKyBcIjwtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcjogY29tYmluYXRvcixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICB9LCByZXN1bHQucmVhc29uLCByZXN1bHQuc25pcHBldC5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9nZ2VyO1xyXG59KCkpO1xyXG5leHBvcnRzLkxvZ2dlciA9IExvZ2dlcjtcclxuZnVuY3Rpb24gc2VxKGRlc2MpIHtcclxuICAgIHZhciBjb21iaW5hdG9ycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBjb21iaW5hdG9yc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJzZXEgXFx1MjAyMiBcIiArIGRlc2MsXHJcbiAgICAgICAga2luZDogXCJhcm1cIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgY29tYmluYXRvcnNfMSA9IGNvbWJpbmF0b3JzOyBfaSA8IGNvbWJpbmF0b3JzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGNvbWJpbmF0b3JzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShpdGVtLCBjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0LnJlc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNlcSA9IHNlcTtcclxuZnVuY3Rpb24gYW55KGRlc2MpIHtcclxuICAgIHZhciBjb21iaW5hdG9ycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBjb21iaW5hdG9yc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChTdHJpbmcoZGVzYykgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3NlcnRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwiYW55IFxcdTIwMjIgXCIgKyBkZXNjLFxyXG4gICAgICAgIGtpbmQ6IFwiYXJtXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjb21iaW5hdG9yc18yID0gY29tYmluYXRvcnM7IF9pIDwgY29tYmluYXRvcnNfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY29tYmluYXRvcnNfMltfaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGl0ZW0sIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImFueVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYW55ID0gYW55O1xyXG5mdW5jdGlvbiBwaWNrKGNvbWJpbmF0b3JzLCBjYWxsYmFja3MpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJwaWNrXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5lbnRyaWVzKGNvbWJpbmF0b3JzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9hW19pXSwgbmFtZV8xID0gX2JbMF0sIGl0ZW0gPSBfYlsxXTtcclxuICAgICAgICAgICAgICAgIHZhciBmaXJzdFJlc3VsdCA9IGlucHV0Lmludm9rZShpdGVtLCBjdXJyZW50LCB7IGNvbnRleHQ6IG5hbWVfMSB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdFJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2MgPSBmaXJzdFJlc3VsdC52YWx1ZSwgbmV4dCA9IF9jWzBdLCB2YWx1ZSA9IF9jWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFja3NbbmFtZV8xXSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJhbnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnBpY2sgPSBwaWNrO1xyXG5mdW5jdGlvbiBtYXliZShjb21iaW5hdG9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwibWF5YmVcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtpbnB1dCwgbnVsbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYXliZSA9IG1heWJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgdGFibGUgPSBbXTtcclxuZnVuY3Rpb24gcm93KF9hLCBhLCBiKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gX2EucmVzdWx0LCBhcnJvdyA9IF9hLmFycm93LCBjb21iaW5hdG9yID0gX2EuY29tYmluYXRvciwgY29udGV4dCA9IF9hLmNvbnRleHQ7XHJcbiAgICB2YXIgbmFtZSA9IGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvcik7XHJcbiAgICBpZiAoY29udGV4dCkge1xyXG4gICAgICAgIG5hbWUgPSBjb250ZXh0ICsgXCI6IFwiICsgbmFtZTtcclxuICAgIH1cclxuICAgIHRhYmxlLnB1c2goe1xyXG4gICAgICAgIHN0eWxlOiB7IHJlc3VsdDogcmVzdWx0LCBraW5kOiBjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JUeXBlKGNvbWJpbmF0b3IpIH0sXHJcbiAgICAgICAgZGF0YTogW2Fycm93LCBuYW1lLCBhLCBiXVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yb3cgPSByb3c7XHJcbmZ1bmN0aW9uIHNuaXBwZXRTdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZS5yZXN1bHQpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICMzMzNcIjtcclxuICAgICAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogZ3JlZW5cIjtcclxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IHJlZFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc25pcHBldFN0eWxlID0gc25pcHBldFN0eWxlO1xyXG5mdW5jdGlvbiBhcm1TdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZS5yZXN1bHQpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgc3dpdGNoIChzdHlsZS5raW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXJtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICNiYmJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogIzMzM1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IGdyZWVuXCI7XHJcbiAgICAgICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiByZWRcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmFybVN0eWxlID0gYXJtU3R5bGU7XHJcbmZ1bmN0aW9uIHByaW50RGVidWcoKSB7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHRhYmxlXzEgPSB0YWJsZTsgX2kgPCB0YWJsZV8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBfYSA9IHRhYmxlXzFbX2ldLCBzdHlsZSA9IF9hLnN0eWxlLCBfYiA9IF9hLmRhdGEsIGFycm93ID0gX2JbMF0sIG5hbWVfMSA9IF9iWzFdLCBhID0gX2JbMl0sIGIgPSBfYlszXTtcclxuICAgICAgICB2YXIgZmlyc3QgPSAoYXJyb3cgKyBcIiAlY1wiICsgbmFtZV8xICsgXCIlY1wiKS5wYWRFbmQoNjApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0ICsgXCIgfCAlY1wiICsgYiArIFwiJWMgfFwiLCBhcm1TdHlsZShzdHlsZSksIFwiY29sb3I6ICMzMzNcIiwgc25pcHBldFN0eWxlKHN0eWxlKSwgXCJjb2xvcjogIzMzM1wiLCBhKTtcclxuICAgIH1cclxuICAgIHRhYmxlID0gW107XHJcbn1cclxuZXhwb3J0cy5wcmludERlYnVnID0gcHJpbnREZWJ1ZztcclxudmFyIFRBQiA9IDA7XHJcbmZ1bmN0aW9uIGluZGVudCgpIHtcclxuICAgIFRBQiArPSAxO1xyXG59XHJcbmV4cG9ydHMuaW5kZW50ID0gaW5kZW50O1xyXG5mdW5jdGlvbiBvdXRkZW50KCkge1xyXG4gICAgVEFCIC09IDE7XHJcbn1cclxuZXhwb3J0cy5vdXRkZW50ID0gb3V0ZGVudDtcclxuZnVuY3Rpb24gaW5kZW50V1MoKSB7XHJcbiAgICByZXR1cm4gXCIgXCIucmVwZWF0KFRBQik7XHJcbn1cclxuZXhwb3J0cy5pbmRlbnRXUyA9IGluZGVudFdTO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG4vLyBpbXBvcnQgeyBURVhULCBTVEFSVF9UQUcsIEVORF9UQUcgfSBmcm9tIFwiLi9odG1sXCI7XHJcbmV4cG9ydHMuU1BBQ0VEX1RPS0VOUyA9IHtcclxuICAgIG5hbWU6IFwiU1BBQ0VEX1RPS0VOU1wiLFxyXG4gICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgdmFyIHRrID0gY29tYmluYXRvcnNfMS5hbnkoXCJ0b2tlblwiLCB3cmFwKGV4cG9ydHMuU0VYUCksIGV4cG9ydHMuTkFNRUQsIGV4cG9ydHMuU0lNUExFX1BBVEgsIHdyYXAoZXhwb3J0cy5XUykpO1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZSh0aywgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHRva2VucyA9IF9hWzFdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18yID0gdG9rZW5zOyBfaSA8IHRva2Vuc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VuXzEgPSB0b2tlbnNfMltfaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbl8xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoLmFwcGx5KG91dCwgdG9rZW5fMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCh0b2tlbl8xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG91dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IFwicHJlc2VudFwiLFxyXG4gICAgICAgICAgICAgICAgc25pcHBldDogaW5wdXRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudCwgb3V0XSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuSU5URVJQT0xBVEUgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIklOVEVSUE9MQVRFXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwie3tcIiksIGV4cG9ydHMuU1BBQ0VEX1RPS0VOUywgY29tYmluYXRvcnNfMS50YWcoXCJ9fVwiKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIG9wZW4gPSBfYVswXSwgcGF0aCA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5pbnRlcnBvbGF0ZShwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbn0pO1xyXG5leHBvcnRzLlNFWFAgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIlNFWFBcIiwgY29tYmluYXRvcnNfMS50YWcoXCIoXCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwiKVwiKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIG9wZW4gPSBfYVswXSwgcGF0aCA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zZXhwKHBhdGgsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKTtcclxufSk7XHJcbnZhciBJRF9TTklQUEVUID0gY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eXFxwe0lEX1N0YXJ0fVtcXHB7SURfQ29udGludWV9LV0qL3UsIFwiSURfU05JUFBFVFwiKTtcclxuZXhwb3J0cy5JRCA9IHRva2VuKElEX1NOSVBQRVQsIFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi8pO1xyXG5leHBvcnRzLkRPVCA9IHRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiLlwiKSwgXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLldTID0gdG9rZW4oY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW1xcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjBdKy91LCBcIldTXCIpLCBcIldTXCIgLyogV1MgKi8pO1xyXG5leHBvcnRzLkVRID0gdG9rZW4oY29tYmluYXRvcnNfMS50YWcoXCI9XCIpLCBcIkVxXCIgLyogRXEgKi8pO1xyXG52YXIgQVJHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJAaWRcIiwgY29tYmluYXRvcnNfMS50YWcoXCJAXCIpLCBJRF9TTklQUEVUKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgYXQgPSBfYVswXSwgaWQgPSBfYVsxXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXJnKHNwYW5fMS5yYW5nZShhdCwgaWQpKSk7XHJcbn0pO1xyXG5mdW5jdGlvbiB3cmFwKGNvbWJpbmF0b3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJ3cmFwXCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShjb21iaW5hdG9yLCBpbnB1dCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW3Jlc3VsdC52YWx1ZVswXSwgW3Jlc3VsdC52YWx1ZVsxXV1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy53cmFwID0gd3JhcDtcclxuZnVuY3Rpb24gdG9rZW4oY29tYmluYXRvciwgdHlwZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInRva2VuIChcIiArIGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvcikgKyBcIilcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZVswXSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IHJlc3VsdC52YWx1ZVsxXS5zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudG9rZW4gPSB0b2tlbjtcclxuZXhwb3J0cy5TSU1QTEVfUEFUSCA9IHtcclxuICAgIG5hbWU6IFwiUEFUSFwiLFxyXG4gICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGV4cG9ydHMuU0lNUExFX0hFQUQsIGlucHV0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBjdXJyZW50ID0gX2FbMF0sIGhlYWQgPSBfYVsxXTtcclxuICAgICAgICB2YXIgb3V0ID0gW2hlYWRdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZXN1bHREb3QgPSBpbnB1dC5pbnZva2UoZXhwb3J0cy5ET1QsIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0RG90LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSByZXN1bHREb3QudmFsdWVbMF07XHJcbiAgICAgICAgICAgIHZhciBuZXh0RG90ID0gcmVzdWx0RG90LnZhbHVlWzFdO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0TWVtYmVyID0gaW5wdXQuaW52b2tlKGV4cG9ydHMuTUVNQkVSLCBjdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdE1lbWJlci5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0TWVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSByZXN1bHRNZW1iZXIudmFsdWVbMF07XHJcbiAgICAgICAgICAgIHZhciBuZXh0TWVtYmVyID0gcmVzdWx0TWVtYmVyLnZhbHVlWzFdO1xyXG4gICAgICAgICAgICBvdXQucHVzaChuZXh0RG90LCBuZXh0TWVtYmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydHMuTkFNRUQgPSBjb21iaW5hdG9yc18xLnNlcShcIk5BTUVEXCIsIGV4cG9ydHMuSUQsIGV4cG9ydHMuRVEsIGV4cG9ydHMuU0lNUExFX1BBVEgpO1xyXG5leHBvcnRzLlNJTVBMRV9IRUFEID0gY29tYmluYXRvcnNfMS5hbnkoXCJIRUFEXCIsIEFSRywgZXhwb3J0cy5JRCk7XHJcbi8vIFRPRE86IEFsbG93IGBbXWAgb3Igc3RyaW5nIG1lbWJlcnNcclxuZXhwb3J0cy5NRU1CRVIgPSBleHBvcnRzLklEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG52YXIgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbnZhciBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vY29tYmluYXRvcnNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIGhic18xID0gcmVxdWlyZShcIi4vaGJzXCIpO1xyXG52YXIgbXVsdGlfMSA9IHJlcXVpcmUoXCIuL211bHRpXCIpO1xyXG5leHBvcnRzLlRFWFQgPSB7XHJcbiAgICBuYW1lOiBcIlRFWFRcIixcclxuICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShjb21iaW5hdG9yc18xLnRha2VVbnRpbChcInt7XCIpLCBpbnB1dCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQsIHRva2Vuc18xLnRleHQodmFsdWUuc3BhbildKTtcclxuICAgIH1cclxufTtcclxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvdG9rZW5pemF0aW9uLmh0bWwjdGFnLW5hbWUtc3RhdGVcclxuZXhwb3J0cy5UQUdfTkFNRSA9IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXltBLVphLXpdW14vPlxcMFxcc10rL3UsIFwiVEFHX05BTUVcIik7XHJcbmV4cG9ydHMuVEFHX05BTUVfVE9LRU4gPSB1dGlsc18xLm1hcChleHBvcnRzLlRBR19OQU1FLCBmdW5jdGlvbiAoc25pcHBldCkgeyByZXR1cm4gc25pcHBldF8xLm9rKFt0b2tlbnNfMS5pZChzbmlwcGV0LnNwYW4pXSk7IH0pO1xyXG5leHBvcnRzLlRBR19PUl9DT01QT05FTlRfTkFNRSA9IGNvbWJpbmF0b3JzXzEuYW55KFwidGFnIG9yIGNvbXBvbmVudCBuYW1lXCIsIGhic18xLlNJTVBMRV9QQVRILCBleHBvcnRzLlRBR19OQU1FX1RPS0VOKTtcclxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvdG9rZW5pemF0aW9uLmh0bWwjYmVmb3JlLWF0dHJpYnV0ZS1uYW1lLXN0YXRlXHJcbmV4cG9ydHMuQVRUUklCVVRFX05BTUUgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlxcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjAvPlxcdTAwMDBcIic8PV0uKj8oPz1bXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMC89PlxcdTAwMDBcIic8XSkvdSwgXCJBVFRSSUJVVEVfTkFNRVwiKSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyTmFtZShuYW1lLnNwYW4pKTsgfSk7XHJcbmV4cG9ydHMuQVJHX05BTUUgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIkFSR19OQU1FXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiQFwiKSwgZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIGF0ID0gX2FbMF0sIGF0dHIgPSBfYVsxXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXJnTmFtZShhdHRyLnNwYW4sIHNwYW5fMS5yYW5nZShhdC5zcGFuLCBhdHRyLnNwYW4pKSk7XHJcbn0pO1xyXG5leHBvcnRzLkFOWV9BVFRSX05BTUUgPSBjb21iaW5hdG9yc18xLmFueShcIkFOWV9BVFRSX05BTUVcIiwgZXhwb3J0cy5BUkdfTkFNRSwgZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSk7XHJcbmV4cG9ydHMuRFFfU1RSSU5HX0lOVEVSUE9MQVRFID0gY29tYmluYXRvcnNfMS5hbnkoXCJEUV9TVFJJTkdfSU5URVJQT0xBVEVcIiwgaGJzXzEuSU5URVJQT0xBVEUsIHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteXCJdKy8sIFwiZHEgdGV4dFwiKSwgZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKSk7IH0pKTtcclxuZXhwb3J0cy5TUV9TVFJJTkdfSU5URVJQT0xBVEUgPSBjb21iaW5hdG9yc18xLmFueShcIlNRX1NUUklOR19JTlRFUlBPTEFURVwiLCBoYnNfMS5JTlRFUlBPTEFURSwgdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW14nXSsvLCBcInNxIHRleHRcIiksIGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnRleHQodmFsdWUuc3BhbikpOyB9KSk7XHJcbmZ1bmN0aW9uIFNUUklOR19JTlRFUlBPTEFUSU9OKGNvbWJpbmF0b3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJTVFJJTkdfSU5URVJQT0xBVElPTlwiLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UodXRpbHNfMS5tYXAobXVsdGlfMS5tYW55KGNvbWJpbmF0b3IpLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuc3RyaW5nSW50ZXJwb2xhdGlvbih2YWx1ZSwgc3Bhbl8xLnJhbmdlLmFwcGx5KHZvaWQgMCwgdmFsdWUpKSk7XHJcbiAgICAgICAgICAgIH0pLCBpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLlNUUklOR19JTlRFUlBPTEFUSU9OID0gU1RSSU5HX0lOVEVSUE9MQVRJT047XHJcbmV4cG9ydHMuQVRUUklCVVRFX1ZBTFVFID0gY29tYmluYXRvcnNfMS5waWNrKHtcclxuICAgIGludGVycG9sYXRlOiBoYnNfMS5JTlRFUlBPTEFURSxcclxuICAgIGRxOiBjb21iaW5hdG9yc18xLnNlcShcImRxXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiXFxcIlwiKSwgU1RSSU5HX0lOVEVSUE9MQVRJT04oZXhwb3J0cy5EUV9TVFJJTkdfSU5URVJQT0xBVEUpLCBjb21iaW5hdG9yc18xLnRhZyhcIlxcXCJcIikpLFxyXG4gICAgc3E6IGNvbWJpbmF0b3JzXzEuc2VxKFwic3FcIiwgY29tYmluYXRvcnNfMS50YWcoXCInXCIpLCBTVFJJTkdfSU5URVJQT0xBVElPTihleHBvcnRzLlNRX1NUUklOR19JTlRFUlBPTEFURSksIGNvbWJpbmF0b3JzXzEudGFnKFwiJ1wiKSksXHJcbiAgICB1bnF1b3RlZDogY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW15cXHUwMDA5XFx1MDAwQVxcdTAwMENcXHUwMDIwPlxcMFwiJzw9YF0rL3UsIFwidW5xdW90ZWQgY29udGVudHNcIilcclxufSwge1xyXG4gICAgaW50ZXJwb2xhdGU6IGZ1bmN0aW9uIChpbnRlcnBvbGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHsgdHlwZTogXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovLCB2YWx1ZTogaW50ZXJwb2xhdGUgfSwgaW50ZXJwb2xhdGUuc3BhbikpO1xyXG4gICAgfSxcclxuICAgIGRxOiBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgdHlwZTogXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi8sXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKTtcclxuICAgIH0sXHJcbiAgICBzcTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBfYVswXSwgdmFsdWUgPSBfYVsxXSwgY2xvc2UgPSBfYVsyXTtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiU2luZ2xlUXVvdGVkXCIgLyogU2luZ2xlUXVvdGVkICovLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbiAgICB9LFxyXG4gICAgdW5xdW90ZWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgdHlwZTogXCJVbnF1b3RlZFwiIC8qIFVucXVvdGVkICovLFxyXG4gICAgICAgICAgICB2YWx1ZTogdG9rZW5zXzEuc3RyaW5nSW50ZXJwb2xhdGlvbihbdG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKV0sIHZhbHVlLnNwYW4pXHJcbiAgICAgICAgfSwgdmFsdWUuc3BhbikpO1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0cy5BVFRSSUJVVEUgPSBjb21iaW5hdG9yc18xLnBpY2soe1xyXG4gICAgdmFsdWVkOiBjb21iaW5hdG9yc18xLnNlcShcInZhbHVlZCBhdHRyaWJ1dGVcIiwgZXhwb3J0cy5BTllfQVRUUl9OQU1FLCBoYnNfMS5FUSwgZXhwb3J0cy5BVFRSSUJVVEVfVkFMVUUpLFxyXG4gICAgYmFyZTogZXhwb3J0cy5BVFRSSUJVVEVfTkFNRVxyXG59LCB7XHJcbiAgICB2YWx1ZWQ6IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBuYW1lID0gX2FbMF0sIHZhbHVlID0gX2FbMl07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS52YWx1ZWRBdHRyKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0sIHNwYW5fMS5yYW5nZShuYW1lLCB2YWx1ZSkpKTtcclxuICAgIH0sXHJcbiAgICBiYXJlOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyTmFtZSh2YWx1ZS5zcGFuKSk7IH1cclxufSk7XHJcbmV4cG9ydHMuQVRUUklCVVRFUyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQVRUUklCVVRFU1wiLCBoYnNfMS5XUywgbXVsdGlfMS5tYW55KGNvbWJpbmF0b3JzXzEuYW55KFwic3BhY2VkIGF0dHJpYnV0ZVwiLCBoYnNfMS5XUywgaGJzXzEuSU5URVJQT0xBVEUsIGV4cG9ydHMuQVRUUklCVVRFKSkpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciB3cyA9IF9hWzBdLCBhdHRycyA9IF9hWzFdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayhfX3NwcmVhZEFycmF5cyhbd3NdLCBhdHRycykpO1xyXG59KTtcclxuZXhwb3J0cy5TVEFSVF9UQUcgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIlNUQVJUX1RBR1wiLCBjb21iaW5hdG9yc18xLnRhZyhcIjxcIiksIGV4cG9ydHMuVEFHX09SX0NPTVBPTkVOVF9OQU1FLCBjb21iaW5hdG9yc18xLm1heWJlKGV4cG9ydHMuQVRUUklCVVRFUyksIGNvbWJpbmF0b3JzXzEubWF5YmUoY29tYmluYXRvcnNfMS50YWcoXCIvXCIpKSwgY29tYmluYXRvcnNfMS50YWcoXCI+XCIpKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgc3RhcnQgPSBfYVswXSwgbmFtZSA9IF9hWzFdLCBhdHRycyA9IF9hWzJdLCBzZWxmQ2xvc2luZyA9IF9hWzNdLCBlbmQgPSBfYVs0XTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuc3RhcnRUYWcoe1xyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgYXR0cnM6IGF0dHJzIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICBzZWxmQ2xvc2luZzogc2VsZkNsb3NpbmcgPyB0cnVlIDogdW5kZWZpbmVkXHJcbiAgICB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpKTtcclxufSk7XHJcbmV4cG9ydHMuRU5EX1RBRyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiRU5EX1RBR1wiLCBjb21iaW5hdG9yc18xLnRhZyhcIjwvXCIpLCBleHBvcnRzLlRBR19PUl9DT01QT05FTlRfTkFNRSwgY29tYmluYXRvcnNfMS5tYXliZShoYnNfMS5XUyksIGNvbWJpbmF0b3JzXzEudGFnKFwiPlwiKSksIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHN0YXJ0ID0gX2FbMF0sIG5hbWUgPSBfYVsxXSwgdHJhaWxpbmcgPSBfYVsyXSwgZW5kID0gX2FbM107XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmVuZFRhZyh7IG5hbWU6IG5hbWUsIHRyYWlsaW5nOiB0cmFpbGluZyB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpKTtcclxufSk7XHJcbmV4cG9ydHMuQ09NTUVOVCA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQ09NTUVOVFwiLCBjb21iaW5hdG9yc18xLnRhZyhcIjwhLS1cIiksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXi4qKD89Wy1dWy1dWz5dKS91LCBcImNvbW1lbnQgYm9keVwiKSwgY29tYmluYXRvcnNfMS50YWcoXCItLT5cIikpLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBzdGFydCA9IF9hWzBdLCBkYXRhID0gX2FbMV0sIGVuZCA9IF9hWzJdO1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5jb21tZW50KGRhdGEuc3Bhbiwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIG1hbnkoc291cmNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwibWFueSBcXHUyMDIyIFwiICsgY29tYmluYXRvcnNfMS5jb21iaW5hdG9yTmFtZShzb3VyY2UpLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIHZhciBvdXQgPSBbXTtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCsrID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJsaWtlbHkgaW5maW5pdGUgbG9vcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZXJhdGUgPSBpbnB1dC5pbnZva2UodXRpbHNfMS5wcmVzZW50KHNvdXJjZSksIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGUua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBpdGVyYXRlLnZhbHVlLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1hbnkgPSBtYW55O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxudmFyIG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxudmFyIHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG52YXIgaHRtbF8xID0gcmVxdWlyZShcIi4vaHRtbFwiKTtcclxudmFyIGhic18xID0gcmVxdWlyZShcIi4vaGJzXCIpO1xyXG52YXIgZGVidWdfMSA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xyXG5mdW5jdGlvbiByZWFkKHNvdXJjZSwgX2EpIHtcclxuICAgIHZhciBsb2dnaW5nID0gX2EubG9nZ2luZztcclxuICAgIHZhciBpbnB1dCA9IHNuaXBwZXRfMS5TbmlwcGV0LmlucHV0KHNvdXJjZSwgbmV3IGNvbWJpbmF0b3JzXzEuTG9nZ2VyKGxvZ2dpbmcgfHwgZmFsc2UpKTtcclxuICAgIHZhciByZXN1bHQgPSBpbnB1dC5pbnZva2UodXRpbHNfMS5jb21wbGV0ZSh1dGlsc18xLm1hcChtdWx0aV8xLm1hbnkoY29tYmluYXRvcnNfMS5hbnkoXCJ0b3AgbGV2ZWxcIiwgaGJzXzEuSU5URVJQT0xBVEUsIGV4cG9ydHMuQ09OVEVOVCkpLCBmdW5jdGlvbiAodG9rZW5zKSB7XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5yb290KHRva2Vucywgc3Bhbl8xLnJhbmdlLmFwcGx5KHZvaWQgMCwgdG9rZW5zKSkpO1xyXG4gICAgfSkpLCBpbnB1dCk7XHJcbiAgICBpZiAobG9nZ2luZykge1xyXG4gICAgICAgIGRlYnVnXzEucHJpbnREZWJ1ZygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV0aWxzXzEubWFwUmVzdWx0KHJlc3VsdCwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gX2FbMV07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbik7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnJlYWQgPSByZWFkO1xyXG5leHBvcnRzLkNPTlRFTlQgPSBjb21iaW5hdG9yc18xLmFueShcIkNPTlRFTlRcIiwgaHRtbF8xLkNPTU1FTlQsIGh0bWxfMS5FTkRfVEFHLCBodG1sXzEuU1RBUlRfVEFHLCBodG1sXzEuVEVYVCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gc2VyaWFsaXplUm9vdChyb290LCBzb3VyY2UpIHtcclxuICAgIHZhciBvdXQgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSByb290LmNoaWxkcmVuOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IF9hW19pXTtcclxuICAgICAgICBvdXQucHVzaC5hcHBseShvdXQsIHNlcmlhbGl6ZU5vZGUodG9rZW4sIHNvdXJjZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dC5qb2luKFwiXCIpO1xyXG59XHJcbmV4cG9ydHMuc2VyaWFsaXplUm9vdCA9IHNlcmlhbGl6ZVJvb3Q7XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGUodG9rZW4sIHNvdXJjZSkge1xyXG4gICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcIlwiXTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xyXG4gICAgICAgIC8vIGxlYWYgdG9rZW5zXHJcbiAgICAgICAgY2FzZSBcIkRvdFwiIC8qIERvdCAqLzpcclxuICAgICAgICBjYXNlIFwiRXFcIiAvKiBFcSAqLzpcclxuICAgICAgICBjYXNlIFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi86XHJcbiAgICAgICAgY2FzZSBcIldTXCIgLyogV1MgKi86XHJcbiAgICAgICAgY2FzZSBcIlRleHRcIiAvKiBUZXh0ICovOlxyXG4gICAgICAgIGNhc2UgXCJBdHRyaWJ1dGVOYW1lXCIgLyogQXR0cmlidXRlTmFtZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtzcGFuXzEuc2xpY2UodG9rZW4uc3Bhbiwgc291cmNlKV07XHJcbiAgICAgICAgY2FzZSBcIkFyZ05hbWVcIiAvKiBBcmdOYW1lICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiQFwiLCBzcGFuXzEuc2xpY2UodG9rZW4ubmFtZSwgc291cmNlKV07XHJcbiAgICAgICAgY2FzZSBcIkF0dHJpYnV0ZVZhbHVlXCIgLyogQXR0cmlidXRlVmFsdWUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZSh0b2tlbiwgc291cmNlKTtcclxuICAgICAgICBjYXNlIFwiQXJndW1lbnRcIiAvKiBBcmd1bWVudCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIkBcIiwgc3Bhbl8xLnNsaWNlKHRva2VuLm5hbWUsIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJTZXhwXCIgLyogU2V4cCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFtcIihcIl0sIHNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFtcIilcIl0pO1xyXG4gICAgICAgIGNhc2UgXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1wie3tcIl0sIHNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFtcIn19XCJdKTtcclxuICAgICAgICBjYXNlIFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1wie3t7XCJdLCBzZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBbXCJ9fX1cIl0pO1xyXG4gICAgICAgIGNhc2UgXCJDb21tZW50XCIgLyogQ29tbWVudCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIjwhLS1cIiwgc3Bhbl8xLnNsaWNlKHRva2VuLmRhdGEsIHNvdXJjZSksIFwiLS0+XCJdO1xyXG4gICAgICAgIGNhc2UgXCJTdGFydFRhZ1wiIC8qIFN0YXJ0VGFnICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW1xyXG4gICAgICAgICAgICAgICAgXCI8XCJcclxuICAgICAgICAgICAgXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5uYW1lLCBzb3VyY2UpLCBzZXJpYWxpemVMaXN0KHRva2VuLmF0dHJpYnV0ZXMsIHNvdXJjZSksIFtcclxuICAgICAgICAgICAgICAgIFwiPlwiXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIGNhc2UgXCJFbmRUYWdcIiAvKiBFbmRUYWcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbXHJcbiAgICAgICAgICAgICAgICBcIjwvXCJcclxuICAgICAgICAgICAgXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5uYW1lLCBzb3VyY2UpLCBzZXJpYWxpemVOb2RlKHRva2VuLnRyYWlsaW5nLCBzb3VyY2UpLCBbXHJcbiAgICAgICAgICAgICAgICBcIj5cIlxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICBjYXNlIFwiVmFsdWVkQXR0cmlidXRlXCIgLyogVmFsdWVkQXR0cmlidXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoc2VyaWFsaXplTm9kZSh0b2tlbi5uYW1lLCBzb3VyY2UpLCBbXHJcbiAgICAgICAgICAgICAgICBcIj1cIlxyXG4gICAgICAgICAgICBdLCBzZXJpYWxpemVOb2RlKHRva2VuLnZhbHVlLCBzb3VyY2UpKTtcclxuICAgICAgICBjYXNlIFwiU3RyaW5nSW50ZXJwb2xhdGlvblwiIC8qIFN0cmluZ0ludGVycG9sYXRpb24gKi86XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0KHRva2VuLnBhcnRzLCBzb3VyY2UpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLnVucmVhY2hhYmxlKHRva2VuKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZU5vZGUgPSBzZXJpYWxpemVOb2RlO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZSh0b2tlbiwgc291cmNlKSB7XHJcbiAgICBpZiAodG9rZW5zXzEuaXNJbnRlcnBvbGF0ZUF0dHJpYnV0ZSh0b2tlbikpIHtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplTm9kZSh0b2tlbi52YWx1ZSwgc291cmNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbXHJcbiAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pXHJcbiAgICBdLCBzZXJpYWxpemVOb2RlKHRva2VuLnZhbHVlLCBzb3VyY2UpLCBbXHJcbiAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pXHJcbiAgICBdKTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVRdW90ZSh0b2tlbikge1xyXG4gICAgc3dpdGNoICh0b2tlbi52YWx1ZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU2luZ2xlUXVvdGVkXCIgLyogU2luZ2xlUXVvdGVkICovOlxyXG4gICAgICAgICAgICByZXR1cm4gXCInXCI7XHJcbiAgICAgICAgY2FzZSBcIkRvdWJsZVF1b3RlZFwiIC8qIERvdWJsZVF1b3RlZCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXFxcIlwiO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUxpc3QodG9rZW5zLCBzb3VyY2UpIHtcclxuICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyh0b2tlbnMuZmxhdE1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIHNlcmlhbGl6ZU5vZGUoY2hpbGQsIHNvdXJjZSk7IH0pKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB0b2tlbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdG9rZW5zXCIpKTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5mdW5jdGlvbiBidWlsZFByZXNlbnRUb2tlbnModG9rZW5zLCBidWlsZGVyKSB7XHJcbiAgICByZXR1cm4gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHsgcmV0dXJuIHRva2VuKGJ1aWxkZXIpOyB9KTtcclxufVxyXG5leHBvcnRzLmJ1aWxkUHJlc2VudFRva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucztcclxuZnVuY3Rpb24gaWQobmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiB0b2tlbnMuaWQoYnVpbGRlci5jb25zdW1lKG5hbWUpKTsgfTtcclxufVxyXG5leHBvcnRzLmlkID0gaWQ7XHJcbmZ1bmN0aW9uIGFyZyhuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHRva2Vucy5hcmcoYnVpbGRlci5jb25zdW1lKG5hbWUpKTsgfTtcclxufVxyXG5leHBvcnRzLmFyZyA9IGFyZztcclxuZXhwb3J0cy5kb3QgPSBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gdG9rZW5zLmRvdChidWlsZGVyLmNvbnN1bWUoXCIuXCIpKTsgfTtcclxuZXhwb3J0cy5lcSA9IGZ1bmN0aW9uIChidWlsZGVyKSB7IHJldHVybiB0b2tlbnMuZXEoYnVpbGRlci5jb25zdW1lKFwiPVwiKSk7IH07XHJcbmV4cG9ydHMuc3AgPSBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgcmV0dXJuIHRva2Vucy53cyhidWlsZGVyLmNvbnN1bWUoXCIgXCIpKTtcclxufTtcclxuZnVuY3Rpb24gd3Moc3BhY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gdG9rZW5zLndzKGJ1aWxkZXIuY29uc3VtZShzcGFjZSkpOyB9O1xyXG59XHJcbmV4cG9ydHMud3MgPSB3cztcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwie3tcIik7XHJcbiAgICAgICAgdmFyIG91dCA9IGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkKGJ1aWxkZXIpOyB9KTtcclxuICAgICAgICB2YXIgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCJ9fVwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmludGVycG9sYXRlKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gc3RyaW5nSW50ZXJwb2xhdGUoY2hpbGRyZW4sIHF1b3RlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IGJ1aWxkZXIuY29uc3VtZShxdW90ZSk7XHJcbiAgICAgICAgdmFyIG91dCA9IGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkKGJ1aWxkZXIpOyB9KTtcclxuICAgICAgICB2YXIgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUocXVvdGUpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgdHlwZTogcXVvdGVUeXBlKHF1b3RlKSxcclxuICAgICAgICAgICAgdmFsdWU6IHRva2Vucy5zdHJpbmdJbnRlcnBvbGF0aW9uKG91dCwgc3Bhbl8xLnJhbmdlLmFwcGx5KHZvaWQgMCwgb3V0KSlcclxuICAgICAgICB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdHJpbmdJbnRlcnBvbGF0ZSA9IHN0cmluZ0ludGVycG9sYXRlO1xyXG5mdW5jdGlvbiBhdHRySW50ZXJwb2xhdGUoKSB7XHJcbiAgICB2YXIgdG9rZW5MaXN0ID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHRva2VuTGlzdFtfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gaW50ZXJwb2xhdGUodG9rZW5MaXN0KShidWlsZGVyKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLyxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfSwgdmFsdWUuc3Bhbik7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXR0ckludGVycG9sYXRlID0gYXR0ckludGVycG9sYXRlO1xyXG5mdW5jdGlvbiBzZXhwKGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IGJ1aWxkZXIuY29uc3VtZShcIihcIik7XHJcbiAgICAgICAgdmFyIG91dCA9IGNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkKGJ1aWxkZXIpOyB9KTtcclxuICAgICAgICB2YXIgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCIpXCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuc2V4cChvdXQsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNleHAgPSBzZXhwO1xyXG5mdW5jdGlvbiB0ZXh0KGNoYXJzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgb3V0ID0gYnVpbGRlci5jb25zdW1lKGNoYXJzKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLnRleHQob3V0KTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50ZXh0ID0gdGV4dDtcclxuZnVuY3Rpb24gY29tbWVudChjaGFycykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPCEtLVwiKTtcclxuICAgICAgICB2YXIgZGF0YSA9IGJ1aWxkZXIuY29uc3VtZShjaGFycyk7XHJcbiAgICAgICAgdmFyIGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIi0tPlwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmNvbW1lbnQoZGF0YSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21tZW50ID0gY29tbWVudDtcclxuZnVuY3Rpb24gaXNUYWdOYW1lKGlucHV0KSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIiB8fFxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkoaW5wdXQpIHx8XHJcbiAgICAgICAgdHlwZW9mIGlucHV0ID09PSBcImZ1bmN0aW9uXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkVGFnTmFtZShuYW1lKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lKSkge1xyXG4gICAgICAgIHZhciB0b2tlbnNfMSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbmFtZV8xID0gbmFtZTsgX2kgPCBuYW1lXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gbmFtZV8xW19pXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJ0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRva2Vuc18xLnB1c2gocGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnRbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnNfMS5wdXNoKGFyZyhwYXJ0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zXzEucHVzaChpZChwYXJ0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRva2Vuc18xO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobmFtZVswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkBcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2FyZyhuYW1lKV07XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbaWQobmFtZSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0VGFnKG9wdGlvbnMpIHtcclxuICAgIGlmIChpc1RhZ05hbWUob3B0aW9ucykpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPFwiKTtcclxuICAgICAgICAgICAgdmFyIG5hbWVUb2tlbnMgPSBidWlsZFByZXNlbnRUb2tlbnMoYnVpbGRUYWdOYW1lKG9wdGlvbnMpLCBidWlsZGVyKTtcclxuICAgICAgICAgICAgdmFyIGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMuc3RhcnRUYWcoeyBuYW1lOiBuYW1lVG9rZW5zIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSwgYXR0cnMgPSBvcHRpb25zLmF0dHJzLCBzZWxmQ2xvc2luZyA9IG9wdGlvbnMuc2VsZkNsb3Npbmc7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IGJ1aWxkZXIuY29uc3VtZShcIjxcIik7XHJcbiAgICAgICAgICAgIHZhciBuYW1lVG9rZW5zID0gYnVpbGRQcmVzZW50VG9rZW5zKGJ1aWxkVGFnTmFtZShuYW1lKSwgYnVpbGRlcik7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGF0dHJzLm1hcChmdW5jdGlvbiAoYXR0cikgeyByZXR1cm4gYXR0cihidWlsZGVyKTsgfSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5jb25zdW1lKFwiL1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5zdGFydFRhZyh7IG5hbWU6IG5hbWVUb2tlbnMsIGF0dHJzOiBjaGlsZHJlbiwgc2VsZkNsb3Npbmc6IHNlbGZDbG9zaW5nIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnN0YXJ0VGFnID0gc3RhcnRUYWc7XHJcbmZ1bmN0aW9uIGVuZFRhZyhvcHRpb25zKSB7XHJcbiAgICB2YXIgdGFnTmFtZSA9IGlzVGFnTmFtZShvcHRpb25zKSA/IG9wdGlvbnMgOiBvcHRpb25zLm5hbWU7XHJcbiAgICB2YXIgdHJhaWxpbmcgPSBpc1RhZ05hbWUob3B0aW9ucykgPyB1bmRlZmluZWQgOiBvcHRpb25zLnRyYWlsaW5nO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPC9cIik7XHJcbiAgICAgICAgdmFyIHRhZ1Rva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucyhidWlsZFRhZ05hbWUodGFnTmFtZSksIGJ1aWxkZXIpO1xyXG4gICAgICAgIHZhciB0cmFpbGluZ1Rva2VuID0gdHJhaWxpbmcgPyB3cyh0cmFpbGluZykoYnVpbGRlcikgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5lbmRUYWcoeyBuYW1lOiB0YWdUb2tlbnMsIHRyYWlsaW5nOiB0cmFpbGluZ1Rva2VuIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBhcmdOYW1lKG5hbWUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBzdGFydFNwYW4gPSBidWlsZGVyLmNvbnN1bWUobmFtZVswXSk7XHJcbiAgICAgICAgdmFyIG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG5hbWUuc2xpY2UoMSkpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYXJnTmFtZShuYW1lU3Bhbiwgc3Bhbl8xLnJhbmdlKHN0YXJ0U3BhbiwgbmFtZVNwYW4pKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hcmdOYW1lID0gYXJnTmFtZTtcclxuZnVuY3Rpb24gYXR0cihvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLmF0dHJOYW1lKG5hbWVTcGFuKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lLCByYXdWYWx1ZSA9IG9wdGlvbnMudmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICB2YXIgbmFtZVRva2VuID0gdHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgID8gdG9rZW5zLmF0dHJOYW1lKGJ1aWxkZXIuY29uc3VtZShuYW1lKSlcclxuICAgICAgICAgICAgICAgIDogbmFtZShidWlsZGVyKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jb25zdW1lKFwiPVwiKTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlU3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgICAgICAgICAgdmFyIHZhbHVlVG9rZW47XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmF3VmFsdWUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmF3VmFsdWVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiXFxcIlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGFydF8xID0gYnVpbGRlci5jb25zdW1lKFwiXFxcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShyYXdWYWx1ZS5zbGljZSgxLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kXzEgPSBidWlsZGVyLmNvbnN1bWUoXCJcXFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW50ZXJwb2xhdGlvbiA9IHRva2Vucy5zdHJpbmdJbnRlcnBvbGF0aW9uKFt0b2tlbnMudGV4dCh2YWx1ZVNwYW4pXSwgdmFsdWVTcGFuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb2tlbiA9IHRva2Vucy5hdHRyVmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW50ZXJwb2xhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzcGFuXzEucmFuZ2Uoc3RhcnRfMSwgZW5kXzEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCInXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0XzIgPSBidWlsZGVyLmNvbnN1bWUoXCInXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVTcGFuID0gYnVpbGRlci5jb25zdW1lKHJhd1ZhbHVlLnNsaWNlKDEsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmRfMiA9IGJ1aWxkZXIuY29uc3VtZShcIidcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcnBvbGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNwYW5fMS5yYW5nZShzdGFydF8yLCBlbmRfMikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVTcGFuID0gYnVpbGRlci5jb25zdW1lKHJhd1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGludGVycG9sYXRpb24gPSB0b2tlbnMuc3RyaW5nSW50ZXJwb2xhdGlvbihbdG9rZW5zLnRleHQodmFsdWVTcGFuKV0sIHZhbHVlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9rZW4gPSB0b2tlbnMuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiVW5xdW90ZWRcIiAvKiBVbnF1b3RlZCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcnBvbGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbHVlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVUb2tlbiA9IHJhd1ZhbHVlKGJ1aWxkZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBidWlsZGVyLnBvcztcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy52YWx1ZWRBdHRyKHsgbmFtZTogbmFtZVRva2VuLCB2YWx1ZTogdmFsdWVUb2tlbiB9LCB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmF0dHIgPSBhdHRyO1xyXG5mdW5jdGlvbiBxdW90ZVR5cGUocXVvdGUpIHtcclxuICAgIHN3aXRjaCAocXVvdGUpIHtcclxuICAgICAgICBjYXNlIFwiXFxcIlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi87XHJcbiAgICAgICAgY2FzZSBcIidcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiU2luZ2xlUXVvdGVkXCIgLyogU2luZ2xlUXVvdGVkICovO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlVucXVvdGVkXCIgLyogVW5xdW90ZWQgKi87XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcm9vdChjaGlsZHJlbikge1xyXG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgVG9rZW5CdWlsZGVyKCk7XHJcbiAgICB2YXIgc3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgIHZhciBvdXQgPSBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZChidWlsZGVyKTsgfSk7XHJcbiAgICB2YXIgZW5kID0gYnVpbGRlci5wb3M7XHJcbiAgICByZXR1cm4geyByb290OiB0b2tlbnMucm9vdChvdXQsIHNwYW5fMS5zcGFuKHN0YXJ0LCBlbmQpKSwgc291cmNlOiBidWlsZGVyLnNvdXJjZSB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbnZhciBUb2tlbkJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUb2tlbkJ1aWxkZXIocG9zKSB7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IDA7IH1cclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICB0aGlzLm91dHB1dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBUb2tlbkJ1aWxkZXIucHJvdG90eXBlLmNvbnN1bWUgPSBmdW5jdGlvbiAoY2hhcnMpIHtcclxuICAgICAgICB0aGlzLm91dHB1dCArPSBjaGFycztcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcclxuICAgICAgICB0aGlzLnBvcyArPSBjaGFycy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IHRoaXMucG9zIH07XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRva2VuQnVpbGRlci5wcm90b3R5cGUsIFwic291cmNlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFRva2VuQnVpbGRlcjtcclxufSgpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gbGVhZih0eXBlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNwYW4pIHsgcmV0dXJuICh7IHR5cGU6IHR5cGUsIHNwYW46IHNwYW4gfSk7IH07XHJcbn1cclxuZXhwb3J0cy5sZWFmID0gbGVhZjtcclxuZXhwb3J0cy5pZCA9IGxlYWYoXCJJZGVudGlmaWVyXCIgLyogSWRlbnRpZmllciAqLyk7XHJcbmV4cG9ydHMuZG90ID0gbGVhZihcIkRvdFwiIC8qIERvdCAqLyk7XHJcbmV4cG9ydHMuZXEgPSBsZWFmKFwiRXFcIiAvKiBFcSAqLyk7XHJcbmV4cG9ydHMud3MgPSBsZWFmKFwiV1NcIiAvKiBXUyAqLyk7XHJcbmV4cG9ydHMudGV4dCA9IGxlYWYoXCJUZXh0XCIgLyogVGV4dCAqLyk7XHJcbmV4cG9ydHMuYXR0ck5hbWUgPSBsZWFmKFwiQXR0cmlidXRlTmFtZVwiIC8qIEF0dHJpYnV0ZU5hbWUgKi8pO1xyXG5mdW5jdGlvbiBjb21tZW50KGRhdGEsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJDb21tZW50XCIgLyogQ29tbWVudCAqLyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHNwYW46IHNwYW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21tZW50ID0gY29tbWVudDtcclxuZnVuY3Rpb24gYXJnKHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBcmd1bWVudFwiIC8qIEFyZ3VtZW50ICovLFxyXG4gICAgICAgIG5hbWU6IHsgc3RhcnQ6IHNwYW4uc3RhcnQgKyAxLCBlbmQ6IHNwYW4uZW5kIH0sXHJcbiAgICAgICAgc3Bhbjogc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFyZyA9IGFyZztcclxuZnVuY3Rpb24gYXJnTmFtZShuYW1lLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiQXJnTmFtZVwiIC8qIEFyZ05hbWUgKi8sXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXJnTmFtZSA9IGFyZ05hbWU7XHJcbmZ1bmN0aW9uIHN0cmluZ0ludGVycG9sYXRpb24ocGFydHMsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTdHJpbmdJbnRlcnBvbGF0aW9uXCIgLyogU3RyaW5nSW50ZXJwb2xhdGlvbiAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0cmluZ0ludGVycG9sYXRpb24gPSBzdHJpbmdJbnRlcnBvbGF0aW9uO1xyXG5mdW5jdGlvbiBpc0ludGVycG9sYXRlQXR0cmlidXRlKGlucHV0KSB7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWVUeXBlID09PSBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi87XHJcbn1cclxuZXhwb3J0cy5pc0ludGVycG9sYXRlQXR0cmlidXRlID0gaXNJbnRlcnBvbGF0ZUF0dHJpYnV0ZTtcclxuZnVuY3Rpb24gYXR0clZhbHVlKF9hLCBzcGFuKSB7XHJcbiAgICB2YXIgdHlwZSA9IF9hLnR5cGUsIHZhbHVlID0gX2EudmFsdWU7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiQXR0cmlidXRlVmFsdWVcIiAvKiBBdHRyaWJ1dGVWYWx1ZSAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIHZhbHVlVHlwZTogdHlwZSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hdHRyVmFsdWUgPSBhdHRyVmFsdWU7XHJcbmZ1bmN0aW9uIHZhbHVlZEF0dHIoX2EsIHNwYW4pIHtcclxuICAgIHZhciBuYW1lID0gX2EubmFtZSwgdmFsdWUgPSBfYS52YWx1ZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJWYWx1ZWRBdHRyaWJ1dGVcIiAvKiBWYWx1ZWRBdHRyaWJ1dGUgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnZhbHVlZEF0dHIgPSB2YWx1ZWRBdHRyO1xyXG5mdW5jdGlvbiBzdGFydFRhZyhfYSwgc3Bhbikge1xyXG4gICAgdmFyIG5hbWUgPSBfYS5uYW1lLCBhdHRycyA9IF9hLmF0dHJzLCBzZWxmQ2xvc2luZyA9IF9hLnNlbGZDbG9zaW5nO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlN0YXJ0VGFnXCIgLyogU3RhcnRUYWcgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJzIHx8IFtdLFxyXG4gICAgICAgIHNlbGZDbG9zaW5nOiBzZWxmQ2xvc2luZ1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0YXJ0VGFnID0gc3RhcnRUYWc7XHJcbmZ1bmN0aW9uIGVuZFRhZyhfYSwgc3Bhbikge1xyXG4gICAgdmFyIG5hbWUgPSBfYS5uYW1lLCB0cmFpbGluZyA9IF9hLnRyYWlsaW5nO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkVuZFRhZ1wiIC8qIEVuZFRhZyAqLyxcclxuICAgICAgICBzcGFuOiBzcGFuLFxyXG4gICAgICAgIHRyYWlsaW5nOiB0cmFpbGluZyA/IHRyYWlsaW5nIDogbnVsbCxcclxuICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBzZXhwKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU2V4cFwiIC8qIFNleHAgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXhwID0gc2V4cDtcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gdHJ1c3RlZEludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudHJ1c3RlZEludGVycG9sYXRlID0gdHJ1c3RlZEludGVycG9sYXRlO1xyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiUm9vdFwiIC8qIFJvb3QgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5yb290ID0gcm9vdDtcclxuZnVuY3Rpb24gZGVidWdGb3JtYXRUb2tlbih0b2tlbikge1xyXG4gICAgcmV0dXJuIFwiPHRva2VuOlwiICsgdG9rZW4udHlwZSArIFwiPlwiO1xyXG59XHJcbmV4cG9ydHMuZGVidWdGb3JtYXRUb2tlbiA9IGRlYnVnRm9ybWF0VG9rZW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vY29tYmluYXRvcnNcIik7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuZnVuY3Rpb24gbWFwUmVzdWx0KHJlc3VsdCwgY2FsbGJhY2spIHtcclxuICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcclxufVxyXG5leHBvcnRzLm1hcFJlc3VsdCA9IG1hcFJlc3VsdDtcclxuZnVuY3Rpb24gbWFwKGNvbWJpbmF0b3IsIG1hcHBlcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpLFxyXG4gICAgICAgIGludm9rZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdCA9IGlucHV0Lmludm9rZShjb21iaW5hdG9yLCBpbnB1dCwgeyBmb3JjZVRyYW5zcGFyZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3Qua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGZpcnN0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBtYXBwZXIodmFsdWUsIG5leHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1hcCA9IG1hcDtcclxuZnVuY3Rpb24gY29tcGxldGUoc291cmNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwiY29tcGxldGVcIixcclxuICAgICAgICBpbnZva2U6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKG1hcChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwgbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQucmVzdExlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImluY29tcGxldGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksIGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuZnVuY3Rpb24gcHJlc2VudChzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJwcmVzZW50XCIsXHJcbiAgICAgICAgaW52b2tlOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGlucHV0Lmludm9rZShzb3VyY2UsIGlucHV0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IHJlc3VsdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCBtYXRjaCA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmVxKG5leHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiZW1wdHlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5wcmVzZW50ID0gcHJlc2VudDtcclxuZnVuY3Rpb24gdW5yZWFjaGFibGUodmFsdWUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcInVucmVhY2hhYmxlIGNvZGUgcmVhY2hlZFwiKTtcclxufVxyXG5leHBvcnRzLnVucmVhY2hhYmxlID0gdW5yZWFjaGFibGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBTbmlwcGV0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU25pcHBldChzb3VyY2UsIG9mZnNldCwgbGVuZ3RoLCBsb2dnZXIpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcclxuICAgIH1cclxuICAgIFNuaXBwZXQuaW5wdXQgPSBmdW5jdGlvbiAoc291cmNlLCBsb2dnZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQoc291cmNlLCAwLCAwLCBsb2dnZXIpO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uIChjb21iaW5hdG9yLCBpbnB1dCwgX2EpIHtcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgZm9yY2VUcmFuc3BhcmVudCA9IF9iLmZvcmNlVHJhbnNwYXJlbnQsIGNvbnRleHQgPSBfYi5jb250ZXh0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5pbnZva2UoY29tYmluYXRvciwgaW5wdXQpO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmVxID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnNvdXJjZSA9PT0gb3RoZXIuc291cmNlICYmXHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID09PSBvdGhlci5vZmZzZXQgJiZcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPT09IG90aGVyLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuZm10ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIjxvZmZzZXQ6XCIgKyB0aGlzLm9mZnNldCArIFwiIGxlbmd0aDpcIiArIHRoaXMubGVuZ3RoICsgXCI+XCI7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuZGVidWdSZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiKGVvZilcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKGNoYXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCBjaGFycywgdGhpcy5sb2dnZXIpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJzbGljZVJlc3RcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwicmVzdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgMCwgdGhpcy5sb2dnZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuaXNFT0YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGggPT09IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5pc01hdGNoID0gZnVuY3Rpb24gKGNoYXJzKSB7XHJcbiAgICAgICAgdmFyIHNsaWNlID0gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCArIGNoYXJzLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHNsaWNlID09PSBjaGFycztcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAoY291bnQpIHtcclxuICAgICAgICBpZiAoY291bnQgPT09IHZvaWQgMCkgeyBjb3VudCA9IDE7IH1cclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0LCB0aGlzLmxlbmd0aCArIGNvdW50LCB0aGlzLmxvZ2dlcik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInNwYW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMub2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgZW5kOiB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwiZnJhZ21lbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcInJlc3RMZW5ndGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2UubGVuZ3RoIC0gdGhpcy5vZmZzZXQgLSB0aGlzLmxlbmd0aDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBTbmlwcGV0O1xyXG59KCkpO1xyXG5leHBvcnRzLlNuaXBwZXQgPSBTbmlwcGV0O1xyXG5mdW5jdGlvbiBvayh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHsga2luZDogXCJva1wiLCB2YWx1ZTogdmFsdWUgfTtcclxufVxyXG5leHBvcnRzLm9rID0gb2s7XHJcbmZ1bmN0aW9uIGVycihzbmlwcGV0LCByZWFzb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICBzbmlwcGV0OiBzbmlwcGV0LFxyXG4gICAgICAgIHJlYXNvbjogcmVhc29uXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZXJyID0gZXJyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBzcGFuKHN0YXJ0LCBlbmQpIHtcclxuICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfTtcclxufVxyXG5leHBvcnRzLnNwYW4gPSBzcGFuO1xyXG5mdW5jdGlvbiByYW5nZSgpIHtcclxuICAgIHZhciBzcGFucyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBzcGFuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKHNwYW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBzcGFuKDAsIDApO1xyXG4gICAgfVxyXG4gICAgdmFyIGZpcnN0ID0gc3BhbnNbMF07XHJcbiAgICB2YXIgbGFzdCA9IGZpcnN0O1xyXG4gICAgZm9yICh2YXIgX2EgPSAwLCBzcGFuc18xID0gc3BhbnM7IF9hIDwgc3BhbnNfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICB2YXIgc3Bhbl8xID0gc3BhbnNfMVtfYV07XHJcbiAgICAgICAgbGFzdCA9IHNwYW5fMTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN0YXJ0OiBnZXRTcGFuKGZpcnN0KS5zdGFydCwgZW5kOiBnZXRTcGFuKGxhc3QpLmVuZCB9O1xyXG59XHJcbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcclxuZnVuY3Rpb24gaXNTcGFuKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbS5zdGFydCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgaXRlbS5lbmQgPT09IFwibnVtYmVyXCI7XHJcbn1cclxuZXhwb3J0cy5pc1NwYW4gPSBpc1NwYW47XHJcbmZ1bmN0aW9uIGdldFNwYW4oaXRlbSkge1xyXG4gICAgaWYgKGlzU3BhbihpdGVtKSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3BhbjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmdldFNwYW4gPSBnZXRTcGFuO1xyXG5mdW5jdGlvbiBzbGljZShzcGFuLCBzb3VyY2UpIHtcclxuICAgIHJldHVybiBzb3VyY2Uuc2xpY2Uoc3Bhbi5zdGFydCwgc3Bhbi5lbmQpO1xyXG59XHJcbmV4cG9ydHMuc2xpY2UgPSBzbGljZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==