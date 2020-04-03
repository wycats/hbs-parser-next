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
        expr,
        span
    };
}
exports.interpolation = interpolation;
function id(name, span) {
    return {
        type: 2 /* Identifier */,
        name,
        span
    };
}
exports.id = id;
function path(head, tail = []) {
    if (tail.length > 0) {
        return {
            type: 1 /* Path */,
            head,
            tail,
            span: { start: head.span.start, end: tail[tail.length - 1].span.end }
        };
    }
    else {
        return {
            type: 1 /* Path */,
            head,
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
const combinators = __importStar(__webpack_require__(/*! ./read/combinators */ "./src/read/combinators.ts"));
exports.combinators = combinators;
var combinators_1 = __webpack_require__(/*! ./read/combinators */ "./src/read/combinators.ts");
exports.Logger = combinators_1.Logger;
const multi = __importStar(__webpack_require__(/*! ./read/multi */ "./src/read/multi.ts"));
exports.multi = multi;
__export(__webpack_require__(/*! ./snippet */ "./src/snippet.ts"));
const ast = __importStar(__webpack_require__(/*! ./ast */ "./src/ast.ts"));
exports.ast = ast;
__export(__webpack_require__(/*! ./read/hbs */ "./src/read/hbs.ts"));
const tokens = __importStar(__webpack_require__(/*! ./read/tokens */ "./src/read/tokens.ts"));
exports.tokens = tokens;
__export(__webpack_require__(/*! ./span */ "./src/span.ts"));
const b = __importStar(__webpack_require__(/*! ./read/token-builder */ "./src/read/token-builder.ts"));
exports.b = b;
const utils = __importStar(__webpack_require__(/*! ./read/utils */ "./src/read/utils.ts"));
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
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const debug_1 = __webpack_require__(/*! ./debug */ "./src/read/debug.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
function formatDebuggable(debuggable) {
    if (typeof debuggable === "string") {
        return debuggable;
    }
    else if (debuggable === null) {
        return "null";
    }
    else if (Array.isArray(debuggable)) {
        if (debuggable.length <= 2) {
            return `[${debuggable
                .map(formatDebuggable)
                .join(", ")}]`;
        }
        else {
            return `[${formatDebuggable(debuggable[0])}, ${formatDebuggable(debuggable[1])}, ${formatDebuggable(debuggable[2])}, ...]`;
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
        throw new Error(`assert: expected combinator name`);
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
        name: `string «${source}»`,
        invoke(input) {
            let next = input.slice(source.length);
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
        name: `pattern[${name}]`,
        invoke(input) {
            let rest = input.sliceRest;
            let match = rest.match(source);
            if (match) {
                let matched = match[0];
                let next = input.slice(matched.length);
                return snippet_1.ok([next.rest, next]);
            }
            else {
                return snippet_1.err(input, "pattern");
            }
        }
    };
}
exports.pattern = pattern;
function takeUntil(pat) {
    if (typeof pat === "string") {
        return {
            name: "takeUntil",
            invoke(input) {
                let next = input;
                while (true) {
                    if (next.isEOF() || next.isMatch(pat)) {
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
function takeWhile(pat) {
    if (typeof pat === "string") {
        return {
            name: "takeWhile",
            invoke(input) {
                let next = input;
                while (true) {
                    if (next.isEOF()) {
                        return snippet_1.ok([next.rest, next]);
                    }
                    else if (next.isMatch(pat)) {
                        next = next.extend(pat.length);
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
class Logger {
    constructor(enableLogging) {
        this.enableLogging = enableLogging;
    }
    invoke(combinator, input, { forceTransparent, context } = {}) {
        let logged = this.enableLogging && !isTransparent(combinator) && !forceTransparent;
        if (logged) {
            debug_1.row({ result: "start", arrow: `${debug_1.indentWS()}->`, combinator, context }, "", input.debugRest());
            debug_1.indent();
        }
        let result = combinator.invoke(input);
        if (logged) {
            debug_1.outdent();
        }
        if (result.kind === "ok") {
            if (logged) {
                debug_1.row({
                    result: "success",
                    arrow: `${debug_1.indentWS()}<-`,
                    combinator,
                    context
                }, formatDebuggable(result.value[1]), result.value[0].debugRest());
            }
        }
        else {
            if (logged) {
                debug_1.row({
                    result: "error",
                    arrow: `${debug_1.indentWS()}<-`,
                    combinator,
                    context
                }, result.reason, result.snippet.debugRest());
            }
        }
        return result;
    }
}
exports.Logger = Logger;
function seq(desc, ...combinators) {
    return {
        name: `seq • ${desc}`,
        kind: "arm",
        invoke(input) {
            let out = [];
            let current = input;
            for (let item of combinators) {
                let result = input.invoke(item, current);
                if (result.kind === "ok") {
                    let [next, value] = result.value;
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
function any(desc, ...combinators) {
    if (String(desc) === "[object Object]") {
        throw new Error("Assert");
    }
    return {
        name: `any • ${desc}`,
        kind: "arm",
        invoke(input) {
            let current = input;
            for (let item of combinators) {
                let result = input.invoke(item, current);
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
        invoke(input) {
            let current = input;
            for (let [name, item] of Object.entries(combinators)) {
                let firstResult = input.invoke(item, current, { context: name });
                if (firstResult.kind === "ok") {
                    let [next, value] = firstResult.value;
                    let result = callbacks[name](value);
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
        invoke(input) {
            let result = input.invoke(combinator, input);
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
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
let table = [];
function row({ result, arrow, combinator, context }, a, b) {
    let name = combinators_1.combinatorName(combinator);
    if (context) {
        name = `${context}: ${name}`;
    }
    table.push({
        style: { result, kind: combinators_1.combinatorType(combinator) },
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
    for (let { style, data: [arrow, name, a, b] } of table) {
        let first = `${arrow} %c${name}%c`.padEnd(60);
        // tslint:disable-next-line:no-console
        console.log(`${first} | %c${b}%c |`, armStyle(style), "color: #333", snippetStyle(style), "color: #333", a);
    }
    table = [];
}
exports.printDebug = printDebug;
let TAB = 0;
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
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
exports.SINGLE_QUOTED = utils_1.map(combinators_1.seq("SINGLE_QUOTED", combinators_1.tag(`'`), combinators_1.pattern(/^(\\'|[^'])*/u, "single quote body"), combinators_1.tag(`'`)), ([open, body, close]) => snippet_1.ok(tokens_1.stringToken({ data: body.span, quote: 0 /* Single */ }, span_1.range(open, close))));
exports.DOUBLE_QUOTED = utils_1.map(combinators_1.seq("DOUBLE_QUOTED", combinators_1.tag(`"`), combinators_1.pattern(/^(\\"|[^"])*/u, "double quote body"), combinators_1.tag(`"`)), ([open, body, close]) => snippet_1.ok(tokens_1.stringToken({ data: body.span, quote: 1 /* Double */ }, span_1.range(open, close))));
exports.NUMBER = utils_1.map(combinators_1.seq("NUMBER", combinators_1.maybe(combinators_1.tag("-")), combinators_1.pattern(/^[0-9]+/, "digits"), combinators_1.maybe(utils_1.map(combinators_1.seq("decimal", combinators_1.tag("."), combinators_1.pattern(/^[0-9]+/, "digits")), ([, tail]) => snippet_1.ok(tail)))), ([negative, head, tail]) => snippet_1.ok(tokens_1.numberToken({
    head: head.span,
    tail: tail ? tail.span : null,
    negative: negative ? negative.span : null
}, span_1.range(negative, head, tail ? tail : null))));
exports.SPACED_TOKENS = {
    name: "SPACED_TOKENS",
    invoke(input) {
        let out = [];
        let tk = combinators_1.any("token", wrap(exports.SEXP), wrap(exports.DOUBLE_QUOTED), wrap(exports.SINGLE_QUOTED), wrap(exports.NUMBER), exports.NAMED, exports.SIMPLE_PATH, wrap(exports.WS));
        let current = input;
        while (true) {
            if (current.isEOF()) {
                break;
            }
            let result = input.invoke(tk, current);
            if (result.kind === "err") {
                break;
            }
            let [next, tokens] = result.value;
            for (let tok of tokens) {
                if (Array.isArray(tok)) {
                    out.push(...tok);
                }
                else {
                    out.push(tok);
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
exports.INTERPOLATE = utils_1.map(combinators_1.seq("INTERPOLATE", combinators_1.tag("{{"), exports.SPACED_TOKENS, combinators_1.tag("}}")), ([open, path, close]) => {
    return snippet_1.ok(tokens_1.interpolate(path, span_1.range(open, close)));
});
exports.SEXP = {
    name: "SEXP",
    invoke(input) {
        return input.invoke(utils_1.map(combinators_1.seq("SEXP", combinators_1.tag("("), exports.SPACED_TOKENS, combinators_1.tag(")")), ([open, path, close]) => {
            return snippet_1.ok(tokens_1.sexp(path, span_1.range(open, close)));
        }), input);
    }
};
const ID_SNIPPET = combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET");
exports.ID = token(ID_SNIPPET, "Identifier" /* Identifier */);
exports.DOT = token(combinators_1.tag("."), "Dot" /* Dot */);
exports.WS = token(combinators_1.pattern(/^[\u0009\u000A\u000C\u0020]+/u, "WS"), "WS" /* WS */);
exports.EQ = token(combinators_1.tag("="), "Eq" /* Eq */);
const ARG = utils_1.map(combinators_1.seq("@id", combinators_1.tag("@"), ID_SNIPPET), ([at, id]) => snippet_1.ok(tokens_1.arg(span_1.range(at, id))));
function wrap(combinator) {
    return {
        name: "wrap",
        invoke(input) {
            let result = input.invoke(combinator, input);
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
        name: `token (${combinators_1.combinatorName(combinator)})`,
        invoke(input) {
            let result = input.invoke(combinator, input, { forceTransparent: true });
            if (result.kind === "err") {
                return result;
            }
            else {
                return snippet_1.ok([
                    result.value[0],
                    {
                        type,
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
    invoke(input) {
        let result = input.invoke(exports.SIMPLE_HEAD, input);
        if (result.kind === "err") {
            return result;
        }
        let [current, head] = result.value;
        let out = [head];
        while (true) {
            if (current.isEOF()) {
                return snippet_1.ok([current, out]);
            }
            let resultDot = input.invoke(exports.DOT, current);
            if (resultDot.kind === "err") {
                return snippet_1.ok([current, out]);
            }
            current = resultDot.value[0];
            let nextDot = resultDot.value[1];
            let resultMember = input.invoke(exports.MEMBER, current);
            if (resultMember.kind === "err") {
                return resultMember;
            }
            current = resultMember.value[0];
            let nextMember = resultMember.value[1];
            out.push(nextDot, nextMember);
        }
    }
};
exports.EXPRESSION = combinators_1.any("EXPRESSION", exports.SEXP, exports.SIMPLE_PATH, exports.DOUBLE_QUOTED, exports.SINGLE_QUOTED, exports.NUMBER);
exports.NAMED = combinators_1.seq("NAMED", exports.ID, exports.EQ, exports.EXPRESSION);
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

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
const hbs_1 = __webpack_require__(/*! ./hbs */ "./src/read/hbs.ts");
const multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
exports.TEXT = {
    name: "TEXT",
    invoke(input) {
        let result = input.invoke(combinators_1.takeUntil("{{"), input);
        if (result.kind === "err") {
            return result;
        }
        let [next, value] = result.value;
        return snippet_1.ok([next, tokens_1.text(value.span)]);
    }
};
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
exports.TAG_NAME = combinators_1.pattern(/^[A-Za-z][^/>\0\s]+/u, "TAG_NAME");
exports.TAG_NAME_TOKEN = utils_1.map(exports.TAG_NAME, snippet => snippet_1.ok([tokens_1.id(snippet.span)]));
exports.TAG_OR_COMPONENT_NAME = combinators_1.any("tag or component name", hbs_1.SIMPLE_PATH, exports.TAG_NAME_TOKEN);
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
exports.ATTRIBUTE_NAME = utils_1.map(combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u, "ATTRIBUTE_NAME"), name => snippet_1.ok(tokens_1.attrName(name.span)));
exports.ARG_NAME = utils_1.map(combinators_1.seq("ARG_NAME", combinators_1.tag("@"), exports.ATTRIBUTE_NAME), ([at, attr]) => snippet_1.ok(tokens_1.argName(attr.span, span_1.range(at.span, attr.span))));
exports.ANY_ATTR_NAME = combinators_1.any("ANY_ATTR_NAME", exports.ARG_NAME, exports.ATTRIBUTE_NAME);
exports.DQ_STRING_INTERPOLATE = combinators_1.any("DQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, utils_1.map(combinators_1.pattern(/^[^"]+/, `dq text`), value => snippet_1.ok(tokens_1.text(value.span))));
exports.SQ_STRING_INTERPOLATE = combinators_1.any("SQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, utils_1.map(combinators_1.pattern(/^[^']+/, `sq text`), value => snippet_1.ok(tokens_1.text(value.span))));
function STRING_INTERPOLATION(combinator) {
    return {
        name: "STRING_INTERPOLATION",
        invoke(input) {
            return input.invoke(utils_1.map(multi_1.many(combinator), value => snippet_1.ok(tokens_1.stringInterpolation(value, span_1.range(...value)))), input);
        }
    };
}
exports.STRING_INTERPOLATION = STRING_INTERPOLATION;
exports.ATTRIBUTE_VALUE = combinators_1.pick({
    interpolate: hbs_1.INTERPOLATE,
    dq: combinators_1.seq("dq", combinators_1.tag(`"`), STRING_INTERPOLATION(exports.DQ_STRING_INTERPOLATE), combinators_1.tag(`"`)),
    sq: combinators_1.seq("sq", combinators_1.tag(`'`), STRING_INTERPOLATION(exports.SQ_STRING_INTERPOLATE), combinators_1.tag(`'`)),
    unquoted: combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020>\0"'<=`]+/u, `unquoted contents`)
}, {
    interpolate: interpolate => snippet_1.ok(tokens_1.attrValue({ type: "Interpolate" /* Interpolate */, value: interpolate }, interpolate.span)),
    dq: ([open, value, close]) => snippet_1.ok(tokens_1.attrValue({
        type: "DoubleQuoted" /* DoubleQuoted */,
        value
    }, span_1.range(open, close))),
    sq: ([open, value, close]) => snippet_1.ok(tokens_1.attrValue({
        type: "SingleQuoted" /* SingleQuoted */,
        value
    }, span_1.range(open, close))),
    unquoted: value => snippet_1.ok(tokens_1.attrValue({
        type: "Unquoted" /* Unquoted */,
        value: tokens_1.stringInterpolation([tokens_1.text(value.span)], value.span)
    }, value.span))
});
exports.ATTRIBUTE = combinators_1.pick({
    valued: combinators_1.seq("valued attribute", exports.ANY_ATTR_NAME, hbs_1.EQ, exports.ATTRIBUTE_VALUE),
    bare: exports.ATTRIBUTE_NAME
}, {
    valued: ([name, , value]) => {
        return snippet_1.ok(tokens_1.valuedAttr({ name, value }, span_1.range(name, value)));
    },
    bare: value => snippet_1.ok(tokens_1.attrName(value.span))
});
exports.ATTRIBUTES = utils_1.map(combinators_1.seq("ATTRIBUTES", hbs_1.WS, multi_1.many(combinators_1.any("spaced attribute", hbs_1.WS, hbs_1.INTERPOLATE, exports.ATTRIBUTE))), ([ws, attrs]) => {
    return snippet_1.ok([ws, ...attrs]);
});
exports.START_TAG = utils_1.map(combinators_1.seq("START_TAG", combinators_1.tag("<"), exports.TAG_OR_COMPONENT_NAME, combinators_1.maybe(exports.ATTRIBUTES), combinators_1.maybe(combinators_1.tag("/")), combinators_1.tag(">")), ([start, name, attrs, selfClosing, end]) => {
    return snippet_1.ok(tokens_1.startTag({
        name,
        attrs: attrs || undefined,
        selfClosing: selfClosing ? true : undefined
    }, span_1.range(start, end)));
});
exports.END_TAG = utils_1.map(combinators_1.seq("END_TAG", combinators_1.tag("</"), exports.TAG_OR_COMPONENT_NAME, combinators_1.maybe(hbs_1.WS), combinators_1.tag(">")), ([start, name, trailing, end]) => {
    return snippet_1.ok(tokens_1.endTag({ name, trailing }, span_1.range(start, end)));
});
exports.COMMENT = utils_1.map(combinators_1.seq("COMMENT", combinators_1.tag("<!--"), combinators_1.pattern(/^.*(?=[-][-][>])/u, "comment body"), combinators_1.tag("-->")), ([start, data, end]) => {
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
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
function many(source) {
    return {
        name: `many • ${combinators_1.combinatorName(source)}`,
        invoke(input) {
            let current = input;
            let out = [];
            let count = 0;
            while (true) {
                if (count++ > 50) {
                    return snippet_1.err(input, "likely infinite loop");
                }
                if (current.isEOF()) {
                    return snippet_1.ok([current.rest, out]);
                }
                let iterate = input.invoke(utils_1.present(source), current);
                if (iterate.kind === "err") {
                    return snippet_1.ok([current.rest, out]);
                }
                else {
                    let [next, match] = iterate.value;
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
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
const html_1 = __webpack_require__(/*! ./html */ "./src/read/html.ts");
const hbs_1 = __webpack_require__(/*! ./hbs */ "./src/read/hbs.ts");
const debug_1 = __webpack_require__(/*! ./debug */ "./src/read/debug.ts");
function read(source, { logging }) {
    let input = snippet_1.Snippet.input(source, new combinators_1.Logger(logging || false));
    let result = input.invoke(utils_1.complete(utils_1.map(multi_1.many(combinators_1.any("top level", hbs_1.INTERPOLATE, exports.CONTENT)), tokens => {
        return snippet_1.ok(tokens_1.root(tokens, span_1.range(...tokens)));
    })), input);
    if (logging) {
        debug_1.printDebug();
    }
    return utils_1.mapResult(result, ([, token]) => snippet_1.ok(token));
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

Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
function serializeRoot(root, source) {
    let out = [];
    for (let token of root.children) {
        out.push(...serializeNode(token, source));
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
        case "String" /* String */: {
            let quote = token.quote === 0 /* Single */ ? `'` : `"`;
            return [quote, span_1.slice(token.data, source), quote];
        }
        case "Number" /* Number */: {
            let out = [];
            if (token.negative) {
                out.push(span_1.slice(token.negative, source));
            }
            out.push(span_1.slice(token.head, source));
            if (token.tail) {
                out.push(".", span_1.slice(token.tail, source));
            }
            return out;
        }
        case "ArgName" /* ArgName */:
            return ["@", span_1.slice(token.name, source)];
        case "AttributeValue" /* AttributeValue */:
            return serializeAttributeValue(token, source);
        case "Argument" /* Argument */:
            return ["@", span_1.slice(token.name, source)];
        case "Sexp" /* Sexp */:
            return ["(", ...serializeList(token.children, source), ")"];
        case "Interpolate" /* Interpolate */:
            return ["{{", ...serializeList(token.children, source), "}}"];
        case "TrustedInterpolate" /* TrustedInterpolate */:
            return ["{{{", ...serializeList(token.children, source), "}}}"];
        case "Comment" /* Comment */:
            return ["<!--", span_1.slice(token.data, source), "-->"];
        case "StartTag" /* StartTag */:
            return [
                "<",
                ...serializeList(token.name, source),
                ...serializeList(token.attributes, source),
                ">"
            ];
        case "EndTag" /* EndTag */:
            return [
                "</",
                ...serializeList(token.name, source),
                ...serializeNode(token.trailing, source),
                ">"
            ];
        case "ValuedAttribute" /* ValuedAttribute */:
            return [
                ...serializeNode(token.name, source),
                "=",
                ...serializeNode(token.value, source)
            ];
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
    return [
        serializeQuote(token),
        ...serializeNode(token.value, source),
        serializeQuote(token)
    ];
}
function serializeQuote(token) {
    switch (token.valueType) {
        case "SingleQuoted" /* SingleQuoted */:
            return `'`;
        case "DoubleQuoted" /* DoubleQuoted */:
            return `"`;
        default:
            return "";
    }
}
function serializeList(tokens, source) {
    return [...tokens.flatMap(child => serializeNode(child, source))];
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
const tokens = __importStar(__webpack_require__(/*! ./tokens */ "./src/read/tokens.ts"));
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
function buildPresentTokens(tok, builder) {
    return tok.map((token) => token(builder));
}
exports.buildPresentTokens = buildPresentTokens;
function str(name) {
    return (builder) => {
        let start = builder.consume(name[0]);
        let data = builder.consume(name.slice(1, -1));
        let end = builder.consume(name.slice(-1));
        let quote = name[0] === `'` ? 0 /* Single */ : 1 /* Double */;
        return tokens.stringToken({ data, quote }, span_1.range(start, end));
    };
}
exports.str = str;
function int(num) {
    if (num[0] === "-") {
        return (builder) => {
            let negative = builder.consume("-");
            let head = builder.consume(num.slice(1));
            return tokens.numberToken({ head, tail: null, negative }, span_1.range(negative, head));
        };
    }
    else {
        return (builder) => {
            let head = builder.consume(num);
            return tokens.numberToken({ head, tail: null, negative: null }, head);
        };
    }
}
exports.int = int;
function decimal(num) {
    let [, negative, head, tail] = num.match(/^(-?)([0-9]+)\.([0-9]+)$/);
    return (builder) => {
        let negativeSpan = negative ? builder.consume("-") : null;
        let headSpan = builder.consume(head);
        let tailSpan = null;
        if (tail) {
            builder.consume(".");
            tailSpan = builder.consume(tail);
        }
        return tokens.numberToken({
            head: headSpan,
            tail: tailSpan,
            negative: negativeSpan,
        }, span_1.range(negativeSpan, headSpan, tailSpan));
    };
}
exports.decimal = decimal;
function id(name) {
    return (builder) => tokens.id(builder.consume(name));
}
exports.id = id;
function arg(name) {
    return (builder) => tokens.arg(builder.consume(name));
}
exports.arg = arg;
exports.dot = (builder) => tokens.dot(builder.consume("."));
exports.eq = (builder) => tokens.eq(builder.consume("="));
exports.sp = (builder) => tokens.ws(builder.consume(" "));
function ws(space) {
    return (builder) => tokens.ws(builder.consume(space));
}
exports.ws = ws;
function interpolate(children) {
    return (builder) => {
        let open = builder.consume("{{");
        let out = children.map((child) => child(builder));
        let close = builder.consume("}}");
        return tokens.interpolate(out, span_1.range(open, close));
    };
}
exports.interpolate = interpolate;
function stringInterpolate(children, quote) {
    return (builder) => {
        let open = builder.consume(quote);
        let out = children.map((child) => child(builder));
        let close = builder.consume(quote);
        return tokens.attrValue({
            type: quoteType(quote),
            value: tokens.stringInterpolation(out, span_1.range(...out)),
        }, span_1.range(open, close));
    };
}
exports.stringInterpolate = stringInterpolate;
function attrInterpolate(...tokenList) {
    return (builder) => {
        let value = interpolate(tokenList)(builder);
        return tokens.attrValue({
            type: "Interpolate" /* Interpolate */,
            value,
        }, value.span);
    };
}
exports.attrInterpolate = attrInterpolate;
function sexp(children) {
    return (builder) => {
        let open = builder.consume("(");
        let out = children.map((child) => child(builder));
        let close = builder.consume(")");
        return tokens.sexp(out, span_1.range(open, close));
    };
}
exports.sexp = sexp;
function text(chars) {
    return (builder) => {
        let out = builder.consume(chars);
        return tokens.text(out);
    };
}
exports.text = text;
function comment(chars) {
    return (builder) => {
        let start = builder.consume("<!--");
        let data = builder.consume(chars);
        let end = builder.consume("-->");
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
        let toks = [];
        for (let part of name) {
            if (typeof part === "function") {
                toks.push(part);
            }
            else {
                switch (part[0]) {
                    case "@":
                        toks.push(arg(part));
                    default:
                        toks.push(id(part));
                }
            }
        }
        return toks;
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
        return (builder) => {
            let start = builder.consume("<");
            let nameTokens = buildPresentTokens(buildTagName(options), builder);
            let end = builder.consume(">");
            return tokens.startTag({ name: nameTokens }, span_1.range(start, end));
        };
    }
    else {
        return (builder) => {
            let { name, attrs, selfClosing } = options;
            let start = builder.consume("<");
            let nameTokens = buildPresentTokens(buildTagName(name), builder);
            let children = attrs.map((a) => a(builder));
            if (selfClosing) {
                builder.consume("/");
            }
            let end = builder.consume(">");
            return tokens.startTag({ name: nameTokens, attrs: children, selfClosing }, span_1.range(start, end));
        };
    }
}
exports.startTag = startTag;
function endTag(options) {
    let tagName = isTagName(options) ? options : options.name;
    let trailing = isTagName(options) ? undefined : options.trailing;
    return (builder) => {
        let start = builder.consume("</");
        let tagTokens = buildPresentTokens(buildTagName(tagName), builder);
        let trailingToken = trailing ? ws(trailing)(builder) : undefined;
        let end = builder.consume(">");
        return tokens.endTag({ name: tagTokens, trailing: trailingToken }, span_1.range(start, end));
    };
}
exports.endTag = endTag;
function argName(name) {
    return (builder) => {
        let startSpan = builder.consume(name[0]);
        let nameSpan = builder.consume(name.slice(1));
        return tokens.argName(nameSpan, span_1.range(startSpan, nameSpan));
    };
}
exports.argName = argName;
function attr(options) {
    if (typeof options === "string") {
        return (builder) => {
            let nameSpan = builder.consume(options);
            return tokens.attrName(nameSpan);
        };
    }
    else if (typeof options === "function") {
        return options;
    }
    else {
        return (builder) => {
            let { name, value: rawValue } = options;
            let start = builder.pos;
            let nameToken = typeof name === "string"
                ? tokens.attrName(builder.consume(name))
                : name(builder);
            builder.consume("=");
            let valueStart = builder.pos;
            let valueToken;
            if (typeof rawValue === "string") {
                switch (rawValue[0]) {
                    case `"`: {
                        let quoteStart = builder.consume(`"`);
                        let valueSpan = builder.consume(rawValue.slice(1, -1));
                        let quoteEnd = builder.consume(`"`);
                        let interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "DoubleQuoted" /* DoubleQuoted */,
                            value: interpolation,
                        }, span_1.range(quoteStart, quoteEnd));
                        break;
                    }
                    case `'`: {
                        let quoteStart = builder.consume(`'`);
                        let valueSpan = builder.consume(rawValue.slice(1, -1));
                        let quoteEnd = builder.consume(`'`);
                        let interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "SingleQuoted" /* SingleQuoted */,
                            value: interpolation,
                        }, span_1.range(quoteStart, quoteEnd));
                        break;
                    }
                    default: {
                        let valueSpan = builder.consume(rawValue);
                        let interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: "Unquoted" /* Unquoted */,
                            value: interpolation,
                        }, valueSpan);
                    }
                }
            }
            else {
                valueToken = rawValue(builder);
            }
            let end = builder.pos;
            return tokens.valuedAttr({ name: nameToken, value: valueToken }, { start, end });
        };
    }
}
exports.attr = attr;
function quoteType(quote) {
    switch (quote) {
        case `"`:
            return "DoubleQuoted" /* DoubleQuoted */;
        case `'`:
            return "SingleQuoted" /* SingleQuoted */;
        default:
            return "Unquoted" /* Unquoted */;
    }
}
function root(children) {
    let builder = new TokenBuilder();
    let start = builder.pos;
    let out = children.map((child) => child(builder));
    let end = builder.pos;
    return { root: tokens.root(out, span_1.span(start, end)), source: builder.source };
}
exports.root = root;
class TokenBuilder {
    constructor(pos = 0) {
        this.pos = pos;
        this.output = "";
    }
    consume(chars) {
        this.output += chars;
        let start = this.pos;
        this.pos += chars.length;
        return { start, end: this.pos };
    }
    get source() {
        return this.output;
    }
}


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
    return span => ({ type, span });
}
exports.leaf = leaf;
exports.id = leaf("Identifier" /* Identifier */);
exports.dot = leaf("Dot" /* Dot */);
exports.eq = leaf("Eq" /* Eq */);
exports.ws = leaf("WS" /* WS */);
exports.text = leaf("Text" /* Text */);
exports.attrName = leaf("AttributeName" /* AttributeName */);
function stringToken({ data, quote }, span) {
    return {
        type: "String" /* String */,
        span,
        data,
        quote
    };
}
exports.stringToken = stringToken;
function numberToken({ head, tail, negative }, span) {
    return {
        type: "Number" /* Number */,
        span,
        negative,
        head,
        tail
    };
}
exports.numberToken = numberToken;
function comment(data, span) {
    return {
        type: "Comment" /* Comment */,
        data,
        span
    };
}
exports.comment = comment;
function arg(span) {
    return {
        type: "Argument" /* Argument */,
        name: { start: span.start + 1, end: span.end },
        span
    };
}
exports.arg = arg;
function argName(name, span) {
    return {
        type: "ArgName" /* ArgName */,
        name,
        span
    };
}
exports.argName = argName;
function stringInterpolation(parts, span) {
    return {
        type: "StringInterpolation" /* StringInterpolation */,
        span,
        parts
    };
}
exports.stringInterpolation = stringInterpolation;
function isInterpolateAttribute(input) {
    return input.valueType === "Interpolate" /* Interpolate */;
}
exports.isInterpolateAttribute = isInterpolateAttribute;
function attrValue({ type, value }, span) {
    return {
        type: "AttributeValue" /* AttributeValue */,
        span,
        valueType: type,
        value
    };
}
exports.attrValue = attrValue;
function valuedAttr({ name, value }, span) {
    return {
        type: "ValuedAttribute" /* ValuedAttribute */,
        span,
        name,
        value
    };
}
exports.valuedAttr = valuedAttr;
function startTag({ name, attrs, selfClosing }, span) {
    return {
        type: "StartTag" /* StartTag */,
        span,
        name,
        attributes: attrs || [],
        selfClosing
    };
}
exports.startTag = startTag;
function endTag({ name, trailing }, span) {
    return {
        type: "EndTag" /* EndTag */,
        span,
        trailing: trailing ? trailing : null,
        name
    };
}
exports.endTag = endTag;
function sexp(children, span) {
    return {
        type: "Sexp" /* Sexp */,
        span,
        children
    };
}
exports.sexp = sexp;
function interpolate(children, span) {
    return {
        type: "Interpolate" /* Interpolate */,
        span,
        children
    };
}
exports.interpolate = interpolate;
function trustedInterpolate(children, span) {
    return {
        type: "TrustedInterpolate" /* TrustedInterpolate */,
        span,
        children
    };
}
exports.trustedInterpolate = trustedInterpolate;
function root(children, span) {
    return {
        type: "Root" /* Root */,
        span,
        children
    };
}
exports.root = root;
function debugFormatToken(token) {
    return `<token:${token.type}>`;
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
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
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
        invoke(input) {
            let first = input.invoke(combinator, input, { forceTransparent: true });
            if (first.kind === "err") {
                return first;
            }
            let [next, value] = first.value;
            let result = mapper(value, next);
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
        invoke(input) {
            return input.invoke(map(source, (value, next) => {
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
        invoke(input) {
            let result = input.invoke(source, input);
            if (result.kind === "ok") {
                let [next, match] = result.value;
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
    throw new Error(`unreachable code reached`);
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
class Snippet {
    constructor(source, offset, length, logger) {
        this.source = source;
        this.offset = offset;
        this.length = length;
        this.logger = logger;
    }
    static input(source, logger) {
        return new Snippet(source, 0, 0, logger);
    }
    invoke(combinator, input, { forceTransparent, context } = {}) {
        return this.logger.invoke(combinator, input);
    }
    eq(other) {
        return (this.source === other.source &&
            this.offset === other.offset &&
            this.length === other.length);
    }
    fmt() {
        return `<offset:${this.offset} length:${this.length}>`;
    }
    debugRest() {
        if (this.isEOF()) {
            return `(eof)`;
        }
        else {
            return `${this.source.slice(this.offset + this.length)}`;
        }
    }
    slice(chars) {
        return new Snippet(this.source, this.offset + this.length, chars, this.logger);
    }
    get sliceRest() {
        return this.source.slice(this.offset + this.length);
    }
    get rest() {
        return new Snippet(this.source, this.offset + this.length, 0, this.logger);
    }
    isEOF() {
        return this.offset + this.length === this.source.length;
    }
    isMatch(chars) {
        let slice = this.source.slice(this.offset + this.length, this.offset + this.length + chars.length);
        return slice === chars;
    }
    extend(count = 1) {
        return new Snippet(this.source, this.offset, this.length + count, this.logger);
    }
    get span() {
        return {
            start: this.offset,
            end: this.offset + this.length
        };
    }
    get fragment() {
        return this.source.slice(this.offset, this.offset + this.length);
    }
    get restLength() {
        return this.source.length - this.offset - this.length;
    }
}
exports.Snippet = Snippet;
function ok(value) {
    return { kind: "ok", value };
}
exports.ok = ok;
function err(snippet, reason) {
    return {
        kind: "err",
        snippet,
        reason
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
    return { start, end };
}
exports.span = span;
function range(...rawSpans) {
    let spans = rawSpans.filter(s => s !== null && s !== undefined);
    if (spans.length === 0) {
        return span(0, 0);
    }
    let first = spans[0];
    let last = first;
    for (let s of spans) {
        last = s;
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
function slice(s, source) {
    return source.slice(s.start, s.end);
}
exports.slice = slice;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvaGJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvbXVsdGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvcmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9zZXJpYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdG9rZW4tYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDRCQUE0QixLQUFLO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWSxVQUFVLFlBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUE2QztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGlvbihleHByLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IDAgLyogSW50ZXJwb2xhdGlvbiAqLyxcclxuICAgICAgICBleHByLFxyXG4gICAgICAgIHNwYW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbjtcclxuZnVuY3Rpb24gaWQobmFtZSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAyIC8qIElkZW50aWZpZXIgKi8sXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaWQgPSBpZDtcclxuZnVuY3Rpb24gcGF0aChoZWFkLCB0YWlsID0gW10pIHtcclxuICAgIGlmICh0YWlsLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAxIC8qIFBhdGggKi8sXHJcbiAgICAgICAgICAgIGhlYWQsXHJcbiAgICAgICAgICAgIHRhaWwsXHJcbiAgICAgICAgICAgIHNwYW46IHsgc3RhcnQ6IGhlYWQuc3Bhbi5zdGFydCwgZW5kOiB0YWlsW3RhaWwubGVuZ3RoIC0gMV0uc3Bhbi5lbmQgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAxIC8qIFBhdGggKi8sXHJcbiAgICAgICAgICAgIGhlYWQsXHJcbiAgICAgICAgICAgIHNwYW46IGhlYWQuc3BhblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wYXRoID0gcGF0aDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29tYmluYXRvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC9jb21iaW5hdG9yc1wiKSk7XHJcbmV4cG9ydHMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcclxudmFyIGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9yZWFkL2NvbWJpbmF0b3JzXCIpO1xyXG5leHBvcnRzLkxvZ2dlciA9IGNvbWJpbmF0b3JzXzEuTG9nZ2VyO1xyXG5jb25zdCBtdWx0aSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL211bHRpXCIpKTtcclxuZXhwb3J0cy5tdWx0aSA9IG11bHRpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zbmlwcGV0XCIpKTtcclxuY29uc3QgYXN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzdFwiKSk7XHJcbmV4cG9ydHMuYXN0ID0gYXN0O1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL2hic1wiKSk7XHJcbmNvbnN0IHRva2VucyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2Vuc1wiKSk7XHJcbmV4cG9ydHMudG9rZW5zID0gdG9rZW5zO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcGFuXCIpKTtcclxuY29uc3QgYiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2VuLWJ1aWxkZXJcIikpO1xyXG5leHBvcnRzLmIgPSBiO1xyXG5jb25zdCB1dGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3V0aWxzXCIpKTtcclxuZXhwb3J0cy51dGlscyA9IHV0aWxzO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3NlcmlhbGl6ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvcmVhZFwiKSk7XHJcbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3QgZGVidWdfMSA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuZnVuY3Rpb24gZm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlKSB7XHJcbiAgICBpZiAodHlwZW9mIGRlYnVnZ2FibGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZGVidWdnYWJsZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnZ2FibGUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gXCJudWxsXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRlYnVnZ2FibGUpKSB7XHJcbiAgICAgICAgaWYgKGRlYnVnZ2FibGUubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBbJHtkZWJ1Z2dhYmxlXHJcbiAgICAgICAgICAgICAgICAubWFwKGZvcm1hdERlYnVnZ2FibGUpXHJcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpfV1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBbJHtmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGVbMF0pfSwgJHtmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGVbMV0pfSwgJHtmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGVbMl0pfSwgLi4uXWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVidWdnYWJsZSBpbnN0YW5jZW9mIHNuaXBwZXRfMS5TbmlwcGV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGRlYnVnZ2FibGUuZm10KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdG9rZW5zXzEuZGVidWdGb3JtYXRUb2tlbihkZWJ1Z2dhYmxlKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjb21iaW5hdG9yTmFtZShjb21iaW5hdG9yKSB7XHJcbiAgICBpZiAoY29tYmluYXRvci5uYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmF0b3IubmFtZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoY29tYmluYXRvcik7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhc3NlcnQ6IGV4cGVjdGVkIGNvbWJpbmF0b3IgbmFtZWApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvck5hbWUgPSBjb21iaW5hdG9yTmFtZTtcclxuZnVuY3Rpb24gY29tYmluYXRvclR5cGUoY29tYmluYXRvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb21iaW5hdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gXCJub3JtYWxcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjb21iaW5hdG9yLmtpbmQgfHwgXCJub3JtYWxcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNvbWJpbmF0b3JUeXBlID0gY29tYmluYXRvclR5cGU7XHJcbmZ1bmN0aW9uIGlzVHJhbnNwYXJlbnQoY29tYmluYXRvcikge1xyXG4gICAgaWYgKHR5cGVvZiBjb21iaW5hdG9yID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gY29tYmluYXRvci5raW5kID09PSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pc1RyYW5zcGFyZW50ID0gaXNUcmFuc3BhcmVudDtcclxuZnVuY3Rpb24gdGFnKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBgc3RyaW5nIMKrJHtzb3VyY2V9wrtgLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IGlucHV0LnNsaWNlKHNvdXJjZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAobmV4dC5mcmFnbWVudCA9PT0gc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGtpbmQ6IFwiZXJyXCIsIHNuaXBwZXQ6IGlucHV0LCByZWFzb246IFwidGFnXCIgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50YWcgPSB0YWc7XHJcbmZ1bmN0aW9uIHBhdHRlcm4oc291cmNlLCBuYW1lKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGBwYXR0ZXJuWyR7bmFtZX1dYCxcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3QgPSBpbnB1dC5zbGljZVJlc3Q7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaCA9IHJlc3QubWF0Y2goc291cmNlKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2hlZCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSBpbnB1dC5zbGljZShtYXRjaGVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInBhdHRlcm5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucGF0dGVybiA9IHBhdHRlcm47XHJcbmZ1bmN0aW9uIHRha2VVbnRpbChwYXQpIHtcclxuICAgIGlmICh0eXBlb2YgcGF0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogXCJ0YWtlVW50aWxcIixcclxuICAgICAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpIHx8IG5leHQuaXNNYXRjaChwYXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuZXh0ZW5kKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy50YWtlVW50aWwgPSB0YWtlVW50aWw7XHJcbmZ1bmN0aW9uIHRha2VXaGlsZShwYXQpIHtcclxuICAgIGlmICh0eXBlb2YgcGF0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogXCJ0YWtlV2hpbGVcIixcclxuICAgICAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0LmlzTWF0Y2gocGF0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQocGF0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5leHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInRha2VXaGlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy50YWtlV2hpbGUgPSB0YWtlV2hpbGU7XHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVMb2dnaW5nID0gZW5hYmxlTG9nZ2luZztcclxuICAgIH1cclxuICAgIGludm9rZShjb21iaW5hdG9yLCBpbnB1dCwgeyBmb3JjZVRyYW5zcGFyZW50LCBjb250ZXh0IH0gPSB7fSkge1xyXG4gICAgICAgIGxldCBsb2dnZWQgPSB0aGlzLmVuYWJsZUxvZ2dpbmcgJiYgIWlzVHJhbnNwYXJlbnQoY29tYmluYXRvcikgJiYgIWZvcmNlVHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBkZWJ1Z18xLnJvdyh7IHJlc3VsdDogXCJzdGFydFwiLCBhcnJvdzogYCR7ZGVidWdfMS5pbmRlbnRXUygpfS0+YCwgY29tYmluYXRvciwgY29udGV4dCB9LCBcIlwiLCBpbnB1dC5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIGRlYnVnXzEuaW5kZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb21iaW5hdG9yLmludm9rZShpbnB1dCk7XHJcbiAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBkZWJ1Z18xLm91dGRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdfMS5yb3coe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3c6IGAke2RlYnVnXzEuaW5kZW50V1MoKX08LWAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0XHJcbiAgICAgICAgICAgICAgICB9LCBmb3JtYXREZWJ1Z2dhYmxlKHJlc3VsdC52YWx1ZVsxXSksIHJlc3VsdC52YWx1ZVswXS5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnXzEucm93KHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdzogYCR7ZGVidWdfMS5pbmRlbnRXUygpfTwtYCxcclxuICAgICAgICAgICAgICAgICAgICBjb21iaW5hdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRcclxuICAgICAgICAgICAgICAgIH0sIHJlc3VsdC5yZWFzb24sIHJlc3VsdC5zbmlwcGV0LmRlYnVnUmVzdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9nZ2VyID0gTG9nZ2VyO1xyXG5mdW5jdGlvbiBzZXEoZGVzYywgLi4uY29tYmluYXRvcnMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogYHNlcSDigKIgJHtkZXNjfWAsXHJcbiAgICAgICAga2luZDogXCJhcm1cIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IG91dCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNvbWJpbmF0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGl0ZW0sIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQucmVzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2VxID0gc2VxO1xyXG5mdW5jdGlvbiBhbnkoZGVzYywgLi4uY29tYmluYXRvcnMpIHtcclxuICAgIGlmIChTdHJpbmcoZGVzYykgPT09IFwiW29iamVjdCBPYmplY3RdXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3NlcnRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGBhbnkg4oCiICR7ZGVzY31gLFxyXG4gICAgICAgIGtpbmQ6IFwiYXJtXCIsXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29tYmluYXRvcnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UoaXRlbSwgY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiYW55XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hbnkgPSBhbnk7XHJcbmZ1bmN0aW9uIHBpY2soY29tYmluYXRvcnMsIGNhbGxiYWNrcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInBpY2tcIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICAgICAgZm9yIChsZXQgW25hbWUsIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKGNvbWJpbmF0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0UmVzdWx0ID0gaW5wdXQuaW52b2tlKGl0ZW0sIGN1cnJlbnQsIHsgY29udGV4dDogbmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChmaXJzdFJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IGZpcnN0UmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYWxsYmFja3NbbmFtZV0odmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQsIHJlc3VsdC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiYW55XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5waWNrID0gcGljaztcclxuZnVuY3Rpb24gbWF5YmUoY29tYmluYXRvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcIm1heWJlXCIsXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UoY29tYmluYXRvciwgaW5wdXQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2lucHV0LCBudWxsXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1heWJlID0gbWF5YmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxubGV0IHRhYmxlID0gW107XHJcbmZ1bmN0aW9uIHJvdyh7IHJlc3VsdCwgYXJyb3csIGNvbWJpbmF0b3IsIGNvbnRleHQgfSwgYSwgYikge1xyXG4gICAgbGV0IG5hbWUgPSBjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpO1xyXG4gICAgaWYgKGNvbnRleHQpIHtcclxuICAgICAgICBuYW1lID0gYCR7Y29udGV4dH06ICR7bmFtZX1gO1xyXG4gICAgfVxyXG4gICAgdGFibGUucHVzaCh7XHJcbiAgICAgICAgc3R5bGU6IHsgcmVzdWx0LCBraW5kOiBjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JUeXBlKGNvbWJpbmF0b3IpIH0sXHJcbiAgICAgICAgZGF0YTogW2Fycm93LCBuYW1lLCBhLCBiXVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yb3cgPSByb3c7XHJcbmZ1bmN0aW9uIHNuaXBwZXRTdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZS5yZXN1bHQpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICMzMzNcIjtcclxuICAgICAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogZ3JlZW5cIjtcclxuICAgICAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IHJlZFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc25pcHBldFN0eWxlID0gc25pcHBldFN0eWxlO1xyXG5mdW5jdGlvbiBhcm1TdHlsZShzdHlsZSkge1xyXG4gICAgc3dpdGNoIChzdHlsZS5yZXN1bHQpIHtcclxuICAgICAgICBjYXNlIFwic3RhcnRcIjpcclxuICAgICAgICAgICAgc3dpdGNoIChzdHlsZS5raW5kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXJtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICNiYmJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJub3JtYWxcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogIzMzM1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInN1Y2Nlc3NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6IGdyZWVuXCI7XHJcbiAgICAgICAgY2FzZSBcImVycm9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiByZWRcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmFybVN0eWxlID0gYXJtU3R5bGU7XHJcbmZ1bmN0aW9uIHByaW50RGVidWcoKSB7XHJcbiAgICBmb3IgKGxldCB7IHN0eWxlLCBkYXRhOiBbYXJyb3csIG5hbWUsIGEsIGJdIH0gb2YgdGFibGUpIHtcclxuICAgICAgICBsZXQgZmlyc3QgPSBgJHthcnJvd30gJWMke25hbWV9JWNgLnBhZEVuZCg2MCk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtmaXJzdH0gfCAlYyR7Yn0lYyB8YCwgYXJtU3R5bGUoc3R5bGUpLCBcImNvbG9yOiAjMzMzXCIsIHNuaXBwZXRTdHlsZShzdHlsZSksIFwiY29sb3I6ICMzMzNcIiwgYSk7XHJcbiAgICB9XHJcbiAgICB0YWJsZSA9IFtdO1xyXG59XHJcbmV4cG9ydHMucHJpbnREZWJ1ZyA9IHByaW50RGVidWc7XHJcbmxldCBUQUIgPSAwO1xyXG5mdW5jdGlvbiBpbmRlbnQoKSB7XHJcbiAgICBUQUIgKz0gMTtcclxufVxyXG5leHBvcnRzLmluZGVudCA9IGluZGVudDtcclxuZnVuY3Rpb24gb3V0ZGVudCgpIHtcclxuICAgIFRBQiAtPSAxO1xyXG59XHJcbmV4cG9ydHMub3V0ZGVudCA9IG91dGRlbnQ7XHJcbmZ1bmN0aW9uIGluZGVudFdTKCkge1xyXG4gICAgcmV0dXJuIFwiIFwiLnJlcGVhdChUQUIpO1xyXG59XHJcbmV4cG9ydHMuaW5kZW50V1MgPSBpbmRlbnRXUztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5jb25zdCBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vY29tYmluYXRvcnNcIik7XHJcbmNvbnN0IHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmV4cG9ydHMuU0lOR0xFX1FVT1RFRCA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiU0lOR0xFX1FVT1RFRFwiLCBjb21iaW5hdG9yc18xLnRhZyhgJ2ApLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL14oXFxcXCd8W14nXSkqL3UsIFwic2luZ2xlIHF1b3RlIGJvZHlcIiksIGNvbWJpbmF0b3JzXzEudGFnKGAnYCkpLCAoW29wZW4sIGJvZHksIGNsb3NlXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLnN0cmluZ1Rva2VuKHsgZGF0YTogYm9keS5zcGFuLCBxdW90ZTogMCAvKiBTaW5nbGUgKi8gfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpKTtcclxuZXhwb3J0cy5ET1VCTEVfUVVPVEVEID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJET1VCTEVfUVVPVEVEXCIsIGNvbWJpbmF0b3JzXzEudGFnKGBcImApLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL14oXFxcXFwifFteXCJdKSovdSwgXCJkb3VibGUgcXVvdGUgYm9keVwiKSwgY29tYmluYXRvcnNfMS50YWcoYFwiYCkpLCAoW29wZW4sIGJvZHksIGNsb3NlXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLnN0cmluZ1Rva2VuKHsgZGF0YTogYm9keS5zcGFuLCBxdW90ZTogMSAvKiBEb3VibGUgKi8gfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpKTtcclxuZXhwb3J0cy5OVU1CRVIgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIk5VTUJFUlwiLCBjb21iaW5hdG9yc18xLm1heWJlKGNvbWJpbmF0b3JzXzEudGFnKFwiLVwiKSksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlswLTldKy8sIFwiZGlnaXRzXCIpLCBjb21iaW5hdG9yc18xLm1heWJlKHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiZGVjaW1hbFwiLCBjb21iaW5hdG9yc18xLnRhZyhcIi5cIiksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlswLTldKy8sIFwiZGlnaXRzXCIpKSwgKFssIHRhaWxdKSA9PiBzbmlwcGV0XzEub2sodGFpbCkpKSksIChbbmVnYXRpdmUsIGhlYWQsIHRhaWxdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEubnVtYmVyVG9rZW4oe1xyXG4gICAgaGVhZDogaGVhZC5zcGFuLFxyXG4gICAgdGFpbDogdGFpbCA/IHRhaWwuc3BhbiA6IG51bGwsXHJcbiAgICBuZWdhdGl2ZTogbmVnYXRpdmUgPyBuZWdhdGl2ZS5zcGFuIDogbnVsbFxyXG59LCBzcGFuXzEucmFuZ2UobmVnYXRpdmUsIGhlYWQsIHRhaWwgPyB0YWlsIDogbnVsbCkpKSk7XHJcbmV4cG9ydHMuU1BBQ0VEX1RPS0VOUyA9IHtcclxuICAgIG5hbWU6IFwiU1BBQ0VEX1RPS0VOU1wiLFxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IG91dCA9IFtdO1xyXG4gICAgICAgIGxldCB0ayA9IGNvbWJpbmF0b3JzXzEuYW55KFwidG9rZW5cIiwgd3JhcChleHBvcnRzLlNFWFApLCB3cmFwKGV4cG9ydHMuRE9VQkxFX1FVT1RFRCksIHdyYXAoZXhwb3J0cy5TSU5HTEVfUVVPVEVEKSwgd3JhcChleHBvcnRzLk5VTUJFUiksIGV4cG9ydHMuTkFNRUQsIGV4cG9ydHMuU0lNUExFX1BBVEgsIHdyYXAoZXhwb3J0cy5XUykpO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGlucHV0Lmludm9rZSh0aywgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IFtuZXh0LCB0b2tlbnNdID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0b2sgb2YgdG9rZW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2spKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2goLi4udG9rKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKHRvayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBraW5kOiBcImVyclwiLFxyXG4gICAgICAgICAgICAgICAgcmVhc29uOiBcInByZXNlbnRcIixcclxuICAgICAgICAgICAgICAgIHNuaXBwZXQ6IGlucHV0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLklOVEVSUE9MQVRFID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJJTlRFUlBPTEFURVwiLCBjb21iaW5hdG9yc18xLnRhZyhcInt7XCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwifX1cIikpLCAoW29wZW4sIHBhdGgsIGNsb3NlXSkgPT4ge1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5pbnRlcnBvbGF0ZShwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbn0pO1xyXG5leHBvcnRzLlNFWFAgPSB7XHJcbiAgICBuYW1lOiBcIlNFWFBcIixcclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UodXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJTRVhQXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiKFwiKSwgZXhwb3J0cy5TUEFDRURfVE9LRU5TLCBjb21iaW5hdG9yc18xLnRhZyhcIilcIikpLCAoW29wZW4sIHBhdGgsIGNsb3NlXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnNleHAocGF0aCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpO1xyXG4gICAgICAgIH0pLCBpbnB1dCk7XHJcbiAgICB9XHJcbn07XHJcbmNvbnN0IElEX1NOSVBQRVQgPSBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15cXHB7SURfU3RhcnR9W1xccHtJRF9Db250aW51ZX0tXSovdSwgXCJJRF9TTklQUEVUXCIpO1xyXG5leHBvcnRzLklEID0gdG9rZW4oSURfU05JUFBFVCwgXCJJZGVudGlmaWVyXCIgLyogSWRlbnRpZmllciAqLyk7XHJcbmV4cG9ydHMuRE9UID0gdG9rZW4oY29tYmluYXRvcnNfMS50YWcoXCIuXCIpLCBcIkRvdFwiIC8qIERvdCAqLyk7XHJcbmV4cG9ydHMuV1MgPSB0b2tlbihjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMF0rL3UsIFwiV1NcIiksIFwiV1NcIiAvKiBXUyAqLyk7XHJcbmV4cG9ydHMuRVEgPSB0b2tlbihjb21iaW5hdG9yc18xLnRhZyhcIj1cIiksIFwiRXFcIiAvKiBFcSAqLyk7XHJcbmNvbnN0IEFSRyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQGlkXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiQFwiKSwgSURfU05JUFBFVCksIChbYXQsIGlkXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmFyZyhzcGFuXzEucmFuZ2UoYXQsIGlkKSkpKTtcclxuZnVuY3Rpb24gd3JhcChjb21iaW5hdG9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwid3JhcFwiLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbcmVzdWx0LnZhbHVlWzBdLCBbcmVzdWx0LnZhbHVlWzFdXV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLndyYXAgPSB3cmFwO1xyXG5mdW5jdGlvbiB0b2tlbihjb21iaW5hdG9yLCB0eXBlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGB0b2tlbiAoJHtjb21iaW5hdG9yc18xLmNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpfSlgLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZVswXSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW46IHJlc3VsdC52YWx1ZVsxXS5zcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudG9rZW4gPSB0b2tlbjtcclxuZXhwb3J0cy5TSU1QTEVfUEFUSCA9IHtcclxuICAgIG5hbWU6IFwiUEFUSFwiLFxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGlucHV0Lmludm9rZShleHBvcnRzLlNJTVBMRV9IRUFELCBpbnB1dCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBbY3VycmVudCwgaGVhZF0gPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgbGV0IG91dCA9IFtoZWFkXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0RG90ID0gaW5wdXQuaW52b2tlKGV4cG9ydHMuRE9ULCBjdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdERvdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0RG90LnZhbHVlWzBdO1xyXG4gICAgICAgICAgICBsZXQgbmV4dERvdCA9IHJlc3VsdERvdC52YWx1ZVsxXTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdE1lbWJlciA9IGlucHV0Lmludm9rZShleHBvcnRzLk1FTUJFUiwgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRNZW1iZXIua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE1lbWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0TWVtYmVyLnZhbHVlWzBdO1xyXG4gICAgICAgICAgICBsZXQgbmV4dE1lbWJlciA9IHJlc3VsdE1lbWJlci52YWx1ZVsxXTtcclxuICAgICAgICAgICAgb3V0LnB1c2gobmV4dERvdCwgbmV4dE1lbWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnRzLkVYUFJFU1NJT04gPSBjb21iaW5hdG9yc18xLmFueShcIkVYUFJFU1NJT05cIiwgZXhwb3J0cy5TRVhQLCBleHBvcnRzLlNJTVBMRV9QQVRILCBleHBvcnRzLkRPVUJMRV9RVU9URUQsIGV4cG9ydHMuU0lOR0xFX1FVT1RFRCwgZXhwb3J0cy5OVU1CRVIpO1xyXG5leHBvcnRzLk5BTUVEID0gY29tYmluYXRvcnNfMS5zZXEoXCJOQU1FRFwiLCBleHBvcnRzLklELCBleHBvcnRzLkVRLCBleHBvcnRzLkVYUFJFU1NJT04pO1xyXG5leHBvcnRzLlNJTVBMRV9IRUFEID0gY29tYmluYXRvcnNfMS5hbnkoXCJIRUFEXCIsIEFSRywgZXhwb3J0cy5JRCk7XHJcbi8vIFRPRE86IEFsbG93IGBbXWAgb3Igc3RyaW5nIG1lbWJlcnNcclxuZXhwb3J0cy5NRU1CRVIgPSBleHBvcnRzLklEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5jb25zdCBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbmNvbnN0IG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxuZXhwb3J0cy5URVhUID0ge1xyXG4gICAgbmFtZTogXCJURVhUXCIsXHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEudGFrZVVudGlsKFwie3tcIiksIGlucHV0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFtuZXh0LCB2YWx1ZV0gPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgdG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKV0pO1xyXG4gICAgfVxyXG59O1xyXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy90b2tlbml6YXRpb24uaHRtbCN0YWctbmFtZS1zdGF0ZVxyXG5leHBvcnRzLlRBR19OQU1FID0gY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW0EtWmEtel1bXi8+XFwwXFxzXSsvdSwgXCJUQUdfTkFNRVwiKTtcclxuZXhwb3J0cy5UQUdfTkFNRV9UT0tFTiA9IHV0aWxzXzEubWFwKGV4cG9ydHMuVEFHX05BTUUsIHNuaXBwZXQgPT4gc25pcHBldF8xLm9rKFt0b2tlbnNfMS5pZChzbmlwcGV0LnNwYW4pXSkpO1xyXG5leHBvcnRzLlRBR19PUl9DT01QT05FTlRfTkFNRSA9IGNvbWJpbmF0b3JzXzEuYW55KFwidGFnIG9yIGNvbXBvbmVudCBuYW1lXCIsIGhic18xLlNJTVBMRV9QQVRILCBleHBvcnRzLlRBR19OQU1FX1RPS0VOKTtcclxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvdG9rZW5pemF0aW9uLmh0bWwjYmVmb3JlLWF0dHJpYnV0ZS1uYW1lLXN0YXRlXHJcbmV4cG9ydHMuQVRUUklCVVRFX05BTUUgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlxcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjAvPlxcdTAwMDBcIic8PV0uKj8oPz1bXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMC89PlxcdTAwMDBcIic8XSkvdSwgXCJBVFRSSUJVVEVfTkFNRVwiKSwgbmFtZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0ck5hbWUobmFtZS5zcGFuKSkpO1xyXG5leHBvcnRzLkFSR19OQU1FID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJBUkdfTkFNRVwiLCBjb21iaW5hdG9yc18xLnRhZyhcIkBcIiksIGV4cG9ydHMuQVRUUklCVVRFX05BTUUpLCAoW2F0LCBhdHRyXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmFyZ05hbWUoYXR0ci5zcGFuLCBzcGFuXzEucmFuZ2UoYXQuc3BhbiwgYXR0ci5zcGFuKSkpKTtcclxuZXhwb3J0cy5BTllfQVRUUl9OQU1FID0gY29tYmluYXRvcnNfMS5hbnkoXCJBTllfQVRUUl9OQU1FXCIsIGV4cG9ydHMuQVJHX05BTUUsIGV4cG9ydHMuQVRUUklCVVRFX05BTUUpO1xyXG5leHBvcnRzLkRRX1NUUklOR19JTlRFUlBPTEFURSA9IGNvbWJpbmF0b3JzXzEuYW55KFwiRFFfU1RSSU5HX0lOVEVSUE9MQVRFXCIsIGhic18xLklOVEVSUE9MQVRFLCB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlwiXSsvLCBgZHEgdGV4dGApLCB2YWx1ZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKSkpKTtcclxuZXhwb3J0cy5TUV9TVFJJTkdfSU5URVJQT0xBVEUgPSBjb21iaW5hdG9yc18xLmFueShcIlNRX1NUUklOR19JTlRFUlBPTEFURVwiLCBoYnNfMS5JTlRFUlBPTEFURSwgdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW14nXSsvLCBgc3EgdGV4dGApLCB2YWx1ZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKSkpKTtcclxuZnVuY3Rpb24gU1RSSU5HX0lOVEVSUE9MQVRJT04oY29tYmluYXRvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcIlNUUklOR19JTlRFUlBPTEFUSU9OXCIsXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UodXRpbHNfMS5tYXAobXVsdGlfMS5tYW55KGNvbWJpbmF0b3IpLCB2YWx1ZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuc3RyaW5nSW50ZXJwb2xhdGlvbih2YWx1ZSwgc3Bhbl8xLnJhbmdlKC4uLnZhbHVlKSkpKSwgaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5TVFJJTkdfSU5URVJQT0xBVElPTiA9IFNUUklOR19JTlRFUlBPTEFUSU9OO1xyXG5leHBvcnRzLkFUVFJJQlVURV9WQUxVRSA9IGNvbWJpbmF0b3JzXzEucGljayh7XHJcbiAgICBpbnRlcnBvbGF0ZTogaGJzXzEuSU5URVJQT0xBVEUsXHJcbiAgICBkcTogY29tYmluYXRvcnNfMS5zZXEoXCJkcVwiLCBjb21iaW5hdG9yc18xLnRhZyhgXCJgKSwgU1RSSU5HX0lOVEVSUE9MQVRJT04oZXhwb3J0cy5EUV9TVFJJTkdfSU5URVJQT0xBVEUpLCBjb21iaW5hdG9yc18xLnRhZyhgXCJgKSksXHJcbiAgICBzcTogY29tYmluYXRvcnNfMS5zZXEoXCJzcVwiLCBjb21iaW5hdG9yc18xLnRhZyhgJ2ApLCBTVFJJTkdfSU5URVJQT0xBVElPTihleHBvcnRzLlNRX1NUUklOR19JTlRFUlBPTEFURSksIGNvbWJpbmF0b3JzXzEudGFnKGAnYCkpLFxyXG4gICAgdW5xdW90ZWQ6IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMD5cXDBcIic8PWBdKy91LCBgdW5xdW90ZWQgY29udGVudHNgKVxyXG59LCB7XHJcbiAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7IHR5cGU6IFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLywgdmFsdWU6IGludGVycG9sYXRlIH0sIGludGVycG9sYXRlLnNwYW4pKSxcclxuICAgIGRxOiAoW29wZW4sIHZhbHVlLCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoe1xyXG4gICAgICAgIHR5cGU6IFwiRG91YmxlUXVvdGVkXCIgLyogRG91YmxlUXVvdGVkICovLFxyXG4gICAgICAgIHZhbHVlXHJcbiAgICB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSksXHJcbiAgICBzcTogKFtvcGVuLCB2YWx1ZSwgY2xvc2VdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHtcclxuICAgICAgICB0eXBlOiBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLyxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpLFxyXG4gICAgdW5xdW90ZWQ6IHZhbHVlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoe1xyXG4gICAgICAgIHR5cGU6IFwiVW5xdW90ZWRcIiAvKiBVbnF1b3RlZCAqLyxcclxuICAgICAgICB2YWx1ZTogdG9rZW5zXzEuc3RyaW5nSW50ZXJwb2xhdGlvbihbdG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKV0sIHZhbHVlLnNwYW4pXHJcbiAgICB9LCB2YWx1ZS5zcGFuKSlcclxufSk7XHJcbmV4cG9ydHMuQVRUUklCVVRFID0gY29tYmluYXRvcnNfMS5waWNrKHtcclxuICAgIHZhbHVlZDogY29tYmluYXRvcnNfMS5zZXEoXCJ2YWx1ZWQgYXR0cmlidXRlXCIsIGV4cG9ydHMuQU5ZX0FUVFJfTkFNRSwgaGJzXzEuRVEsIGV4cG9ydHMuQVRUUklCVVRFX1ZBTFVFKSxcclxuICAgIGJhcmU6IGV4cG9ydHMuQVRUUklCVVRFX05BTUVcclxufSwge1xyXG4gICAgdmFsdWVkOiAoW25hbWUsICwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS52YWx1ZWRBdHRyKHsgbmFtZSwgdmFsdWUgfSwgc3Bhbl8xLnJhbmdlKG5hbWUsIHZhbHVlKSkpO1xyXG4gICAgfSxcclxuICAgIGJhcmU6IHZhbHVlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyTmFtZSh2YWx1ZS5zcGFuKSlcclxufSk7XHJcbmV4cG9ydHMuQVRUUklCVVRFUyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQVRUUklCVVRFU1wiLCBoYnNfMS5XUywgbXVsdGlfMS5tYW55KGNvbWJpbmF0b3JzXzEuYW55KFwic3BhY2VkIGF0dHJpYnV0ZVwiLCBoYnNfMS5XUywgaGJzXzEuSU5URVJQT0xBVEUsIGV4cG9ydHMuQVRUUklCVVRFKSkpLCAoW3dzLCBhdHRyc10pID0+IHtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2soW3dzLCAuLi5hdHRyc10pO1xyXG59KTtcclxuZXhwb3J0cy5TVEFSVF9UQUcgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIlNUQVJUX1RBR1wiLCBjb21iaW5hdG9yc18xLnRhZyhcIjxcIiksIGV4cG9ydHMuVEFHX09SX0NPTVBPTkVOVF9OQU1FLCBjb21iaW5hdG9yc18xLm1heWJlKGV4cG9ydHMuQVRUUklCVVRFUyksIGNvbWJpbmF0b3JzXzEubWF5YmUoY29tYmluYXRvcnNfMS50YWcoXCIvXCIpKSwgY29tYmluYXRvcnNfMS50YWcoXCI+XCIpKSwgKFtzdGFydCwgbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nLCBlbmRdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGF0dHJzOiBhdHRycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2VsZkNsb3Npbmc6IHNlbGZDbG9zaW5nID8gdHJ1ZSA6IHVuZGVmaW5lZFxyXG4gICAgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKSk7XHJcbn0pO1xyXG5leHBvcnRzLkVORF9UQUcgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIkVORF9UQUdcIiwgY29tYmluYXRvcnNfMS50YWcoXCI8L1wiKSwgZXhwb3J0cy5UQUdfT1JfQ09NUE9ORU5UX05BTUUsIGNvbWJpbmF0b3JzXzEubWF5YmUoaGJzXzEuV1MpLCBjb21iaW5hdG9yc18xLnRhZyhcIj5cIikpLCAoW3N0YXJ0LCBuYW1lLCB0cmFpbGluZywgZW5kXSkgPT4ge1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5lbmRUYWcoeyBuYW1lLCB0cmFpbGluZyB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpKTtcclxufSk7XHJcbmV4cG9ydHMuQ09NTUVOVCA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQ09NTUVOVFwiLCBjb21iaW5hdG9yc18xLnRhZyhcIjwhLS1cIiksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXi4qKD89Wy1dWy1dWz5dKS91LCBcImNvbW1lbnQgYm9keVwiKSwgY29tYmluYXRvcnNfMS50YWcoXCItLT5cIikpLCAoW3N0YXJ0LCBkYXRhLCBlbmRdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmNvbW1lbnQoZGF0YS5zcGFuLCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gbWFueShzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogYG1hbnkg4oCiICR7Y29tYmluYXRvcnNfMS5jb21iaW5hdG9yTmFtZShzb3VyY2UpfWAsXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCsrID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJsaWtlbHkgaW5maW5pdGUgbG9vcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZXJhdGUgPSBpbnB1dC5pbnZva2UodXRpbHNfMS5wcmVzZW50KHNvdXJjZSksIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdGUua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgW25leHQsIG1hdGNoXSA9IGl0ZXJhdGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1hbnkgPSBtYW55O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgbXVsdGlfMSA9IHJlcXVpcmUoXCIuL211bHRpXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5jb25zdCBodG1sXzEgPSByZXF1aXJlKFwiLi9odG1sXCIpO1xyXG5jb25zdCBoYnNfMSA9IHJlcXVpcmUoXCIuL2hic1wiKTtcclxuY29uc3QgZGVidWdfMSA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xyXG5mdW5jdGlvbiByZWFkKHNvdXJjZSwgeyBsb2dnaW5nIH0pIHtcclxuICAgIGxldCBpbnB1dCA9IHNuaXBwZXRfMS5TbmlwcGV0LmlucHV0KHNvdXJjZSwgbmV3IGNvbWJpbmF0b3JzXzEuTG9nZ2VyKGxvZ2dpbmcgfHwgZmFsc2UpKTtcclxuICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodXRpbHNfMS5jb21wbGV0ZSh1dGlsc18xLm1hcChtdWx0aV8xLm1hbnkoY29tYmluYXRvcnNfMS5hbnkoXCJ0b3AgbGV2ZWxcIiwgaGJzXzEuSU5URVJQT0xBVEUsIGV4cG9ydHMuQ09OVEVOVCkpLCB0b2tlbnMgPT4ge1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEucm9vdCh0b2tlbnMsIHNwYW5fMS5yYW5nZSguLi50b2tlbnMpKSk7XHJcbiAgICB9KSksIGlucHV0KTtcclxuICAgIGlmIChsb2dnaW5nKSB7XHJcbiAgICAgICAgZGVidWdfMS5wcmludERlYnVnKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXRpbHNfMS5tYXBSZXN1bHQocmVzdWx0LCAoWywgdG9rZW5dKSA9PiBzbmlwcGV0XzEub2sodG9rZW4pKTtcclxufVxyXG5leHBvcnRzLnJlYWQgPSByZWFkO1xyXG5leHBvcnRzLkNPTlRFTlQgPSBjb21iaW5hdG9yc18xLmFueShcIkNPTlRFTlRcIiwgaHRtbF8xLkNPTU1FTlQsIGh0bWxfMS5FTkRfVEFHLCBodG1sXzEuU1RBUlRfVEFHLCBodG1sXzEuVEVYVCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRva2Vuc18xID0gcmVxdWlyZShcIi4vdG9rZW5zXCIpO1xyXG5jb25zdCBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVSb290KHJvb3QsIHNvdXJjZSkge1xyXG4gICAgbGV0IG91dCA9IFtdO1xyXG4gICAgZm9yIChsZXQgdG9rZW4gb2Ygcm9vdC5jaGlsZHJlbikge1xyXG4gICAgICAgIG91dC5wdXNoKC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4sIHNvdXJjZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dC5qb2luKFwiXCIpO1xyXG59XHJcbmV4cG9ydHMuc2VyaWFsaXplUm9vdCA9IHNlcmlhbGl6ZVJvb3Q7XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGUodG9rZW4sIHNvdXJjZSkge1xyXG4gICAgaWYgKHRva2VuID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcIlwiXTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xyXG4gICAgICAgIC8vIGxlYWYgdG9rZW5zXHJcbiAgICAgICAgY2FzZSBcIkRvdFwiIC8qIERvdCAqLzpcclxuICAgICAgICBjYXNlIFwiRXFcIiAvKiBFcSAqLzpcclxuICAgICAgICBjYXNlIFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi86XHJcbiAgICAgICAgY2FzZSBcIldTXCIgLyogV1MgKi86XHJcbiAgICAgICAgY2FzZSBcIlRleHRcIiAvKiBUZXh0ICovOlxyXG4gICAgICAgIGNhc2UgXCJBdHRyaWJ1dGVOYW1lXCIgLyogQXR0cmlidXRlTmFtZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtzcGFuXzEuc2xpY2UodG9rZW4uc3Bhbiwgc291cmNlKV07XHJcbiAgICAgICAgY2FzZSBcIlN0cmluZ1wiIC8qIFN0cmluZyAqLzoge1xyXG4gICAgICAgICAgICBsZXQgcXVvdGUgPSB0b2tlbi5xdW90ZSA9PT0gMCAvKiBTaW5nbGUgKi8gPyBgJ2AgOiBgXCJgO1xyXG4gICAgICAgICAgICByZXR1cm4gW3F1b3RlLCBzcGFuXzEuc2xpY2UodG9rZW4uZGF0YSwgc291cmNlKSwgcXVvdGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiTnVtYmVyXCIgLyogTnVtYmVyICovOiB7XHJcbiAgICAgICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICAgICAgaWYgKHRva2VuLm5lZ2F0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaChzcGFuXzEuc2xpY2UodG9rZW4ubmVnYXRpdmUsIHNvdXJjZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dC5wdXNoKHNwYW5fMS5zbGljZSh0b2tlbi5oZWFkLCBzb3VyY2UpKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuLnRhaWwpIHtcclxuICAgICAgICAgICAgICAgIG91dC5wdXNoKFwiLlwiLCBzcGFuXzEuc2xpY2UodG9rZW4udGFpbCwgc291cmNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIkFyZ05hbWVcIiAvKiBBcmdOYW1lICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiQFwiLCBzcGFuXzEuc2xpY2UodG9rZW4ubmFtZSwgc291cmNlKV07XHJcbiAgICAgICAgY2FzZSBcIkF0dHJpYnV0ZVZhbHVlXCIgLyogQXR0cmlidXRlVmFsdWUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZSh0b2tlbiwgc291cmNlKTtcclxuICAgICAgICBjYXNlIFwiQXJndW1lbnRcIiAvKiBBcmd1bWVudCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIkBcIiwgc3Bhbl8xLnNsaWNlKHRva2VuLm5hbWUsIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJTZXhwXCIgLyogU2V4cCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIihcIiwgLi4uc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgXCIpXCJdO1xyXG4gICAgICAgIGNhc2UgXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wie3tcIiwgLi4uc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgXCJ9fVwiXTtcclxuICAgICAgICBjYXNlIFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wie3t7XCIsIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFwifX19XCJdO1xyXG4gICAgICAgIGNhc2UgXCJDb21tZW50XCIgLyogQ29tbWVudCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIjwhLS1cIiwgc3Bhbl8xLnNsaWNlKHRva2VuLmRhdGEsIHNvdXJjZSksIFwiLS0+XCJdO1xyXG4gICAgICAgIGNhc2UgXCJTdGFydFRhZ1wiIC8qIFN0YXJ0VGFnICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgXCI8XCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLmF0dHJpYnV0ZXMsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICBcIj5cIlxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgXCJFbmRUYWdcIiAvKiBFbmRUYWcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBcIjwvXCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLnRyYWlsaW5nLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgXCI+XCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBjYXNlIFwiVmFsdWVkQXR0cmlidXRlXCIgLyogVmFsdWVkQXR0cmlidXRlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uc2VyaWFsaXplTm9kZSh0b2tlbi5uYW1lLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgXCI9XCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLnZhbHVlLCBzb3VyY2UpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSBcIlN0cmluZ0ludGVycG9sYXRpb25cIiAvKiBTdHJpbmdJbnRlcnBvbGF0aW9uICovOlxyXG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplTGlzdCh0b2tlbi5wYXJ0cywgc291cmNlKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS51bnJlYWNoYWJsZSh0b2tlbik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zZXJpYWxpemVOb2RlID0gc2VyaWFsaXplTm9kZTtcclxuZnVuY3Rpb24gc2VyaWFsaXplQXR0cmlidXRlVmFsdWUodG9rZW4sIHNvdXJjZSkge1xyXG4gICAgaWYgKHRva2Vuc18xLmlzSW50ZXJwb2xhdGVBdHRyaWJ1dGUodG9rZW4pKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZU5vZGUodG9rZW4udmFsdWUsIHNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHNlcmlhbGl6ZVF1b3RlKHRva2VuKSxcclxuICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLnZhbHVlLCBzb3VyY2UpLFxyXG4gICAgICAgIHNlcmlhbGl6ZVF1b3RlKHRva2VuKVxyXG4gICAgXTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVRdW90ZSh0b2tlbikge1xyXG4gICAgc3dpdGNoICh0b2tlbi52YWx1ZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU2luZ2xlUXVvdGVkXCIgLyogU2luZ2xlUXVvdGVkICovOlxyXG4gICAgICAgICAgICByZXR1cm4gYCdgO1xyXG4gICAgICAgIGNhc2UgXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBgXCJgO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUxpc3QodG9rZW5zLCBzb3VyY2UpIHtcclxuICAgIHJldHVybiBbLi4udG9rZW5zLmZsYXRNYXAoY2hpbGQgPT4gc2VyaWFsaXplTm9kZShjaGlsZCwgc291cmNlKSldO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdG9rZW5zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3Rva2Vuc1wiKSk7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5mdW5jdGlvbiBidWlsZFByZXNlbnRUb2tlbnModG9rLCBidWlsZGVyKSB7XHJcbiAgICByZXR1cm4gdG9rLm1hcCgodG9rZW4pID0+IHRva2VuKGJ1aWxkZXIpKTtcclxufVxyXG5leHBvcnRzLmJ1aWxkUHJlc2VudFRva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucztcclxuZnVuY3Rpb24gc3RyKG5hbWUpIHtcclxuICAgIHJldHVybiAoYnVpbGRlcikgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydCA9IGJ1aWxkZXIuY29uc3VtZShuYW1lWzBdKTtcclxuICAgICAgICBsZXQgZGF0YSA9IGJ1aWxkZXIuY29uc3VtZShuYW1lLnNsaWNlKDEsIC0xKSk7XHJcbiAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIuY29uc3VtZShuYW1lLnNsaWNlKC0xKSk7XHJcbiAgICAgICAgbGV0IHF1b3RlID0gbmFtZVswXSA9PT0gYCdgID8gMCAvKiBTaW5nbGUgKi8gOiAxIC8qIERvdWJsZSAqLztcclxuICAgICAgICByZXR1cm4gdG9rZW5zLnN0cmluZ1Rva2VuKHsgZGF0YSwgcXVvdGUgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdHIgPSBzdHI7XHJcbmZ1bmN0aW9uIGludChudW0pIHtcclxuICAgIGlmIChudW1bMF0gPT09IFwiLVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZWdhdGl2ZSA9IGJ1aWxkZXIuY29uc3VtZShcIi1cIik7XHJcbiAgICAgICAgICAgIGxldCBoZWFkID0gYnVpbGRlci5jb25zdW1lKG51bS5zbGljZSgxKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMubnVtYmVyVG9rZW4oeyBoZWFkLCB0YWlsOiBudWxsLCBuZWdhdGl2ZSB9LCBzcGFuXzEucmFuZ2UobmVnYXRpdmUsIGhlYWQpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBoZWFkID0gYnVpbGRlci5jb25zdW1lKG51bSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMubnVtYmVyVG9rZW4oeyBoZWFkLCB0YWlsOiBudWxsLCBuZWdhdGl2ZTogbnVsbCB9LCBoZWFkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaW50ID0gaW50O1xyXG5mdW5jdGlvbiBkZWNpbWFsKG51bSkge1xyXG4gICAgbGV0IFssIG5lZ2F0aXZlLCBoZWFkLCB0YWlsXSA9IG51bS5tYXRjaCgvXigtPykoWzAtOV0rKVxcLihbMC05XSspJC8pO1xyXG4gICAgcmV0dXJuIChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IG5lZ2F0aXZlU3BhbiA9IG5lZ2F0aXZlID8gYnVpbGRlci5jb25zdW1lKFwiLVwiKSA6IG51bGw7XHJcbiAgICAgICAgbGV0IGhlYWRTcGFuID0gYnVpbGRlci5jb25zdW1lKGhlYWQpO1xyXG4gICAgICAgIGxldCB0YWlsU3BhbiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRhaWwpIHtcclxuICAgICAgICAgICAgYnVpbGRlci5jb25zdW1lKFwiLlwiKTtcclxuICAgICAgICAgICAgdGFpbFNwYW4gPSBidWlsZGVyLmNvbnN1bWUodGFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2tlbnMubnVtYmVyVG9rZW4oe1xyXG4gICAgICAgICAgICBoZWFkOiBoZWFkU3BhbixcclxuICAgICAgICAgICAgdGFpbDogdGFpbFNwYW4sXHJcbiAgICAgICAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZVNwYW4sXHJcbiAgICAgICAgfSwgc3Bhbl8xLnJhbmdlKG5lZ2F0aXZlU3BhbiwgaGVhZFNwYW4sIHRhaWxTcGFuKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZGVjaW1hbCA9IGRlY2ltYWw7XHJcbmZ1bmN0aW9uIGlkKG5hbWUpIHtcclxuICAgIHJldHVybiAoYnVpbGRlcikgPT4gdG9rZW5zLmlkKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7XHJcbn1cclxuZXhwb3J0cy5pZCA9IGlkO1xyXG5mdW5jdGlvbiBhcmcobmFtZSkge1xyXG4gICAgcmV0dXJuIChidWlsZGVyKSA9PiB0b2tlbnMuYXJnKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmV4cG9ydHMuZG90ID0gKGJ1aWxkZXIpID0+IHRva2Vucy5kb3QoYnVpbGRlci5jb25zdW1lKFwiLlwiKSk7XHJcbmV4cG9ydHMuZXEgPSAoYnVpbGRlcikgPT4gdG9rZW5zLmVxKGJ1aWxkZXIuY29uc3VtZShcIj1cIikpO1xyXG5leHBvcnRzLnNwID0gKGJ1aWxkZXIpID0+IHRva2Vucy53cyhidWlsZGVyLmNvbnN1bWUoXCIgXCIpKTtcclxuZnVuY3Rpb24gd3Moc3BhY2UpIHtcclxuICAgIHJldHVybiAoYnVpbGRlcikgPT4gdG9rZW5zLndzKGJ1aWxkZXIuY29uc3VtZShzcGFjZSkpO1xyXG59XHJcbmV4cG9ydHMud3MgPSB3cztcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiAoYnVpbGRlcikgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwie3tcIik7XHJcbiAgICAgICAgbGV0IG91dCA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCJ9fVwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmludGVycG9sYXRlKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gc3RyaW5nSW50ZXJwb2xhdGUoY2hpbGRyZW4sIHF1b3RlKSB7XHJcbiAgICByZXR1cm4gKGJ1aWxkZXIpID0+IHtcclxuICAgICAgICBsZXQgb3BlbiA9IGJ1aWxkZXIuY29uc3VtZShxdW90ZSk7XHJcbiAgICAgICAgbGV0IG91dCA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUocXVvdGUpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgdHlwZTogcXVvdGVUeXBlKHF1b3RlKSxcclxuICAgICAgICAgICAgdmFsdWU6IHRva2Vucy5zdHJpbmdJbnRlcnBvbGF0aW9uKG91dCwgc3Bhbl8xLnJhbmdlKC4uLm91dCkpLFxyXG4gICAgICAgIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0cmluZ0ludGVycG9sYXRlID0gc3RyaW5nSW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIGF0dHJJbnRlcnBvbGF0ZSguLi50b2tlbkxpc3QpIHtcclxuICAgIHJldHVybiAoYnVpbGRlcikgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGludGVycG9sYXRlKHRva2VuTGlzdCkoYnVpbGRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5hdHRyVmFsdWUoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi8sXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgIH0sIHZhbHVlLnNwYW4pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmF0dHJJbnRlcnBvbGF0ZSA9IGF0dHJJbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gc2V4cChjaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBidWlsZGVyLmNvbnN1bWUoXCIoXCIpO1xyXG4gICAgICAgIGxldCBvdXQgPSBjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZChidWlsZGVyKSk7XHJcbiAgICAgICAgbGV0IGNsb3NlID0gYnVpbGRlci5jb25zdW1lKFwiKVwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLnNleHAob3V0LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXhwID0gc2V4cDtcclxuZnVuY3Rpb24gdGV4dChjaGFycykge1xyXG4gICAgcmV0dXJuIChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IG91dCA9IGJ1aWxkZXIuY29uc3VtZShjaGFycyk7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy50ZXh0KG91dCk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudGV4dCA9IHRleHQ7XHJcbmZ1bmN0aW9uIGNvbW1lbnQoY2hhcnMpIHtcclxuICAgIHJldHVybiAoYnVpbGRlcikgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydCA9IGJ1aWxkZXIuY29uc3VtZShcIjwhLS1cIik7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBidWlsZGVyLmNvbnN1bWUoY2hhcnMpO1xyXG4gICAgICAgIGxldCBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCItLT5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5jb21tZW50KGRhdGEsIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tbWVudCA9IGNvbW1lbnQ7XHJcbmZ1bmN0aW9uIGlzVGFnTmFtZShpbnB1dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICBBcnJheS5pc0FycmF5KGlucHV0KSB8fFxyXG4gICAgICAgIHR5cGVvZiBpbnB1dCA9PT0gXCJmdW5jdGlvblwiKTtcclxufVxyXG5mdW5jdGlvbiBidWlsZFRhZ05hbWUobmFtZSkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcclxuICAgICAgICBsZXQgdG9rcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHBhcnQgb2YgbmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdG9rcy5wdXNoKHBhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJ0WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rcy5wdXNoKGFyZyhwYXJ0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rcy5wdXNoKGlkKHBhcnQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9rcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG5hbWVbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJAXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFthcmcobmFtZSldO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2lkKG5hbWUpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdGFydFRhZyhvcHRpb25zKSB7XHJcbiAgICBpZiAoaXNUYWdOYW1lKG9wdGlvbnMpKSB7XHJcbiAgICAgICAgcmV0dXJuIChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGJ1aWxkZXIuY29uc3VtZShcIjxcIik7XHJcbiAgICAgICAgICAgIGxldCBuYW1lVG9rZW5zID0gYnVpbGRQcmVzZW50VG9rZW5zKGJ1aWxkVGFnTmFtZShvcHRpb25zKSwgYnVpbGRlcik7XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCI+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnN0YXJ0VGFnKHsgbmFtZTogbmFtZVRva2VucyB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKGJ1aWxkZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHsgbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nIH0gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8XCIpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZVRva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucyhidWlsZFRhZ05hbWUobmFtZSksIGJ1aWxkZXIpO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBhdHRycy5tYXAoKGEpID0+IGEoYnVpbGRlcikpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZkNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuY29uc3VtZShcIi9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMuc3RhcnRUYWcoeyBuYW1lOiBuYW1lVG9rZW5zLCBhdHRyczogY2hpbGRyZW4sIHNlbGZDbG9zaW5nIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnN0YXJ0VGFnID0gc3RhcnRUYWc7XHJcbmZ1bmN0aW9uIGVuZFRhZyhvcHRpb25zKSB7XHJcbiAgICBsZXQgdGFnTmFtZSA9IGlzVGFnTmFtZShvcHRpb25zKSA/IG9wdGlvbnMgOiBvcHRpb25zLm5hbWU7XHJcbiAgICBsZXQgdHJhaWxpbmcgPSBpc1RhZ05hbWUob3B0aW9ucykgPyB1bmRlZmluZWQgOiBvcHRpb25zLnRyYWlsaW5nO1xyXG4gICAgcmV0dXJuIChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPC9cIik7XHJcbiAgICAgICAgbGV0IHRhZ1Rva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucyhidWlsZFRhZ05hbWUodGFnTmFtZSksIGJ1aWxkZXIpO1xyXG4gICAgICAgIGxldCB0cmFpbGluZ1Rva2VuID0gdHJhaWxpbmcgPyB3cyh0cmFpbGluZykoYnVpbGRlcikgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5lbmRUYWcoeyBuYW1lOiB0YWdUb2tlbnMsIHRyYWlsaW5nOiB0cmFpbGluZ1Rva2VuIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBhcmdOYW1lKG5hbWUpIHtcclxuICAgIHJldHVybiAoYnVpbGRlcikgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydFNwYW4gPSBidWlsZGVyLmNvbnN1bWUobmFtZVswXSk7XHJcbiAgICAgICAgbGV0IG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG5hbWUuc2xpY2UoMSkpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYXJnTmFtZShuYW1lU3Bhbiwgc3Bhbl8xLnJhbmdlKHN0YXJ0U3BhbiwgbmFtZVNwYW4pKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hcmdOYW1lID0gYXJnTmFtZTtcclxuZnVuY3Rpb24gYXR0cihvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gKGJ1aWxkZXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLmF0dHJOYW1lKG5hbWVTcGFuKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7IG5hbWUsIHZhbHVlOiByYXdWYWx1ZSB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5wb3M7XHJcbiAgICAgICAgICAgIGxldCBuYW1lVG9rZW4gPSB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgPyB0b2tlbnMuYXR0ck5hbWUoYnVpbGRlci5jb25zdW1lKG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgOiBuYW1lKGJ1aWxkZXIpO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUoXCI9XCIpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVTdGFydCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVUb2tlbjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByYXdWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyYXdWYWx1ZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYFwiYDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVTdGFydCA9IGJ1aWxkZXIuY29uc3VtZShgXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShyYXdWYWx1ZS5zbGljZSgxLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVFbmQgPSBidWlsZGVyLmNvbnN1bWUoYFwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRvdWJsZVF1b3RlZFwiIC8qIERvdWJsZVF1b3RlZCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzcGFuXzEucmFuZ2UocXVvdGVTdGFydCwgcXVvdGVFbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYCdgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZVN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKGAnYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUocmF3VmFsdWUuc2xpY2UoMSwgLTEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlRW5kID0gYnVpbGRlci5jb25zdW1lKGAnYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzcGFuXzEucmFuZ2UocXVvdGVTdGFydCwgcXVvdGVFbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShyYXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlVucXVvdGVkXCIgLyogVW5xdW90ZWQgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTcGFuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gcmF3VmFsdWUoYnVpbGRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnZhbHVlZEF0dHIoeyBuYW1lOiBuYW1lVG9rZW4sIHZhbHVlOiB2YWx1ZVRva2VuIH0sIHsgc3RhcnQsIGVuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuYXR0ciA9IGF0dHI7XHJcbmZ1bmN0aW9uIHF1b3RlVHlwZShxdW90ZSkge1xyXG4gICAgc3dpdGNoIChxdW90ZSkge1xyXG4gICAgICAgIGNhc2UgYFwiYDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiRG91YmxlUXVvdGVkXCIgLyogRG91YmxlUXVvdGVkICovO1xyXG4gICAgICAgIGNhc2UgYCdgOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTaW5nbGVRdW90ZWRcIiAvKiBTaW5nbGVRdW90ZWQgKi87XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVW5xdW90ZWRcIiAvKiBVbnF1b3RlZCAqLztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuKSB7XHJcbiAgICBsZXQgYnVpbGRlciA9IG5ldyBUb2tlbkJ1aWxkZXIoKTtcclxuICAgIGxldCBzdGFydCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgbGV0IG91dCA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkKGJ1aWxkZXIpKTtcclxuICAgIGxldCBlbmQgPSBidWlsZGVyLnBvcztcclxuICAgIHJldHVybiB7IHJvb3Q6IHRva2Vucy5yb290KG91dCwgc3Bhbl8xLnNwYW4oc3RhcnQsIGVuZCkpLCBzb3VyY2U6IGJ1aWxkZXIuc291cmNlIH07XHJcbn1cclxuZXhwb3J0cy5yb290ID0gcm9vdDtcclxuY2xhc3MgVG9rZW5CdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcyA9IDApIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICB0aGlzLm91dHB1dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBjb25zdW1lKGNoYXJzKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgKz0gY2hhcnM7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5wb3M7XHJcbiAgICAgICAgdGhpcy5wb3MgKz0gY2hhcnMubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQ6IHRoaXMucG9zIH07XHJcbiAgICB9XHJcbiAgICBnZXQgc291cmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm91dHB1dDtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBsZWFmKHR5cGUpIHtcclxuICAgIHJldHVybiBzcGFuID0+ICh7IHR5cGUsIHNwYW4gfSk7XHJcbn1cclxuZXhwb3J0cy5sZWFmID0gbGVhZjtcclxuZXhwb3J0cy5pZCA9IGxlYWYoXCJJZGVudGlmaWVyXCIgLyogSWRlbnRpZmllciAqLyk7XHJcbmV4cG9ydHMuZG90ID0gbGVhZihcIkRvdFwiIC8qIERvdCAqLyk7XHJcbmV4cG9ydHMuZXEgPSBsZWFmKFwiRXFcIiAvKiBFcSAqLyk7XHJcbmV4cG9ydHMud3MgPSBsZWFmKFwiV1NcIiAvKiBXUyAqLyk7XHJcbmV4cG9ydHMudGV4dCA9IGxlYWYoXCJUZXh0XCIgLyogVGV4dCAqLyk7XHJcbmV4cG9ydHMuYXR0ck5hbWUgPSBsZWFmKFwiQXR0cmlidXRlTmFtZVwiIC8qIEF0dHJpYnV0ZU5hbWUgKi8pO1xyXG5mdW5jdGlvbiBzdHJpbmdUb2tlbih7IGRhdGEsIHF1b3RlIH0sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTdHJpbmdcIiAvKiBTdHJpbmcgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHF1b3RlXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc3RyaW5nVG9rZW4gPSBzdHJpbmdUb2tlbjtcclxuZnVuY3Rpb24gbnVtYmVyVG9rZW4oeyBoZWFkLCB0YWlsLCBuZWdhdGl2ZSB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiTnVtYmVyXCIgLyogTnVtYmVyICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgbmVnYXRpdmUsXHJcbiAgICAgICAgaGVhZCxcclxuICAgICAgICB0YWlsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubnVtYmVyVG9rZW4gPSBudW1iZXJUb2tlbjtcclxuZnVuY3Rpb24gY29tbWVudChkYXRhLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiQ29tbWVudFwiIC8qIENvbW1lbnQgKi8sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tbWVudCA9IGNvbW1lbnQ7XHJcbmZ1bmN0aW9uIGFyZyhzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiQXJndW1lbnRcIiAvKiBBcmd1bWVudCAqLyxcclxuICAgICAgICBuYW1lOiB7IHN0YXJ0OiBzcGFuLnN0YXJ0ICsgMSwgZW5kOiBzcGFuLmVuZCB9LFxyXG4gICAgICAgIHNwYW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmZ1bmN0aW9uIGFyZ05hbWUobmFtZSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkFyZ05hbWVcIiAvKiBBcmdOYW1lICovLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFyZ05hbWUgPSBhcmdOYW1lO1xyXG5mdW5jdGlvbiBzdHJpbmdJbnRlcnBvbGF0aW9uKHBhcnRzLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU3RyaW5nSW50ZXJwb2xhdGlvblwiIC8qIFN0cmluZ0ludGVycG9sYXRpb24gKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBwYXJ0c1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0cmluZ0ludGVycG9sYXRpb24gPSBzdHJpbmdJbnRlcnBvbGF0aW9uO1xyXG5mdW5jdGlvbiBpc0ludGVycG9sYXRlQXR0cmlidXRlKGlucHV0KSB7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWVUeXBlID09PSBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi87XHJcbn1cclxuZXhwb3J0cy5pc0ludGVycG9sYXRlQXR0cmlidXRlID0gaXNJbnRlcnBvbGF0ZUF0dHJpYnV0ZTtcclxuZnVuY3Rpb24gYXR0clZhbHVlKHsgdHlwZSwgdmFsdWUgfSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkF0dHJpYnV0ZVZhbHVlXCIgLyogQXR0cmlidXRlVmFsdWUgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICB2YWx1ZVR5cGU6IHR5cGUsXHJcbiAgICAgICAgdmFsdWVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hdHRyVmFsdWUgPSBhdHRyVmFsdWU7XHJcbmZ1bmN0aW9uIHZhbHVlZEF0dHIoeyBuYW1lLCB2YWx1ZSB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiVmFsdWVkQXR0cmlidXRlXCIgLyogVmFsdWVkQXR0cmlidXRlICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnZhbHVlZEF0dHIgPSB2YWx1ZWRBdHRyO1xyXG5mdW5jdGlvbiBzdGFydFRhZyh7IG5hbWUsIGF0dHJzLCBzZWxmQ2xvc2luZyB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU3RhcnRUYWdcIiAvKiBTdGFydFRhZyAqLyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYXR0cmlidXRlczogYXR0cnMgfHwgW10sXHJcbiAgICAgICAgc2VsZkNsb3NpbmdcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdGFydFRhZyA9IHN0YXJ0VGFnO1xyXG5mdW5jdGlvbiBlbmRUYWcoeyBuYW1lLCB0cmFpbGluZyB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiRW5kVGFnXCIgLyogRW5kVGFnICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgdHJhaWxpbmc6IHRyYWlsaW5nID8gdHJhaWxpbmcgOiBudWxsLFxyXG4gICAgICAgIG5hbWVcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lbmRUYWcgPSBlbmRUYWc7XHJcbmZ1bmN0aW9uIHNleHAoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTZXhwXCIgLyogU2V4cCAqLyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2V4cCA9IHNleHA7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gdHJ1c3RlZEludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50cnVzdGVkSW50ZXJwb2xhdGUgPSB0cnVzdGVkSW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHJvb3QoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJSb290XCIgLyogUm9vdCAqLyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbmZ1bmN0aW9uIGRlYnVnRm9ybWF0VG9rZW4odG9rZW4pIHtcclxuICAgIHJldHVybiBgPHRva2VuOiR7dG9rZW4udHlwZX0+YDtcclxufVxyXG5leHBvcnRzLmRlYnVnRm9ybWF0VG9rZW4gPSBkZWJ1Z0Zvcm1hdFRva2VuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vY29tYmluYXRvcnNcIik7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiBtYXBSZXN1bHQocmVzdWx0LCBjYWxsYmFjaykge1xyXG4gICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xyXG59XHJcbmV4cG9ydHMubWFwUmVzdWx0ID0gbWFwUmVzdWx0O1xyXG5mdW5jdGlvbiBtYXAoY29tYmluYXRvciwgbWFwcGVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGNvbWJpbmF0b3JzXzEuY29tYmluYXRvck5hbWUoY29tYmluYXRvciksXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IGlucHV0Lmludm9rZShjb21iaW5hdG9yLCBpbnB1dCwgeyBmb3JjZVRyYW5zcGFyZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3Qua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBbbmV4dCwgdmFsdWVdID0gZmlyc3QudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBtYXBwZXIodmFsdWUsIG5leHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1hcCA9IG1hcDtcclxuZnVuY3Rpb24gY29tcGxldGUoc291cmNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwiY29tcGxldGVcIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShtYXAoc291cmNlLCAodmFsdWUsIG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0LnJlc3RMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJpbmNvbXBsZXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLCBpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbmZ1bmN0aW9uIHByZXNlbnQoc291cmNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwicHJlc2VudFwiLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKHNvdXJjZSwgaW5wdXQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtuZXh0LCBtYXRjaF0gPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZXEobmV4dCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnByZXNlbnQgPSBwcmVzZW50O1xyXG5mdW5jdGlvbiB1bnJlYWNoYWJsZSh2YWx1ZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bnJlYWNoYWJsZSBjb2RlIHJlYWNoZWRgKTtcclxufVxyXG5leHBvcnRzLnVucmVhY2hhYmxlID0gdW5yZWFjaGFibGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFNuaXBwZXQge1xyXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBvZmZzZXQsIGxlbmd0aCwgbG9nZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5wdXQoc291cmNlLCBsb2dnZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQoc291cmNlLCAwLCAwLCBsb2dnZXIpO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGNvbWJpbmF0b3IsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQsIGNvbnRleHQgfSA9IHt9KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyLmludm9rZShjb21iaW5hdG9yLCBpbnB1dCk7XHJcbiAgICB9XHJcbiAgICBlcShvdGhlcikge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zb3VyY2UgPT09IG90aGVyLnNvdXJjZSAmJlxyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9PT0gb3RoZXIub2Zmc2V0ICYmXHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID09PSBvdGhlci5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZm10KCkge1xyXG4gICAgICAgIHJldHVybiBgPG9mZnNldDoke3RoaXMub2Zmc2V0fSBsZW5ndGg6JHt0aGlzLmxlbmd0aH0+YDtcclxuICAgIH1cclxuICAgIGRlYnVnUmVzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgKGVvZilgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2xpY2UoY2hhcnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIGNoYXJzLCB0aGlzLmxvZ2dlcik7XHJcbiAgICB9XHJcbiAgICBnZXQgc2xpY2VSZXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGdldCByZXN0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgMCwgdGhpcy5sb2dnZXIpO1xyXG4gICAgfVxyXG4gICAgaXNFT0YoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGggPT09IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGlzTWF0Y2goY2hhcnMpIHtcclxuICAgICAgICBsZXQgc2xpY2UgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoICsgY2hhcnMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gc2xpY2UgPT09IGNoYXJzO1xyXG4gICAgfVxyXG4gICAgZXh0ZW5kKGNvdW50ID0gMSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQsIHRoaXMubGVuZ3RoICsgY291bnQsIHRoaXMubG9nZ2VyKTtcclxuICAgIH1cclxuICAgIGdldCBzcGFuKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLm9mZnNldCxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBmcmFnbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc3RMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmxlbmd0aCAtIHRoaXMub2Zmc2V0IC0gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TbmlwcGV0ID0gU25pcHBldDtcclxuZnVuY3Rpb24gb2sodmFsdWUpIHtcclxuICAgIHJldHVybiB7IGtpbmQ6IFwib2tcIiwgdmFsdWUgfTtcclxufVxyXG5leHBvcnRzLm9rID0gb2s7XHJcbmZ1bmN0aW9uIGVycihzbmlwcGV0LCByZWFzb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICBzbmlwcGV0LFxyXG4gICAgICAgIHJlYXNvblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmVyciA9IGVycjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gc3BhbihzdGFydCwgZW5kKSB7XHJcbiAgICByZXR1cm4geyBzdGFydCwgZW5kIH07XHJcbn1cclxuZXhwb3J0cy5zcGFuID0gc3BhbjtcclxuZnVuY3Rpb24gcmFuZ2UoLi4ucmF3U3BhbnMpIHtcclxuICAgIGxldCBzcGFucyA9IHJhd1NwYW5zLmZpbHRlcihzID0+IHMgIT09IG51bGwgJiYgcyAhPT0gdW5kZWZpbmVkKTtcclxuICAgIGlmIChzcGFucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gc3BhbigwLCAwKTtcclxuICAgIH1cclxuICAgIGxldCBmaXJzdCA9IHNwYW5zWzBdO1xyXG4gICAgbGV0IGxhc3QgPSBmaXJzdDtcclxuICAgIGZvciAobGV0IHMgb2Ygc3BhbnMpIHtcclxuICAgICAgICBsYXN0ID0gcztcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN0YXJ0OiBnZXRTcGFuKGZpcnN0KS5zdGFydCwgZW5kOiBnZXRTcGFuKGxhc3QpLmVuZCB9O1xyXG59XHJcbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcclxuZnVuY3Rpb24gaXNTcGFuKGl0ZW0pIHtcclxuICAgIHJldHVybiB0eXBlb2YgaXRlbS5zdGFydCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgaXRlbS5lbmQgPT09IFwibnVtYmVyXCI7XHJcbn1cclxuZXhwb3J0cy5pc1NwYW4gPSBpc1NwYW47XHJcbmZ1bmN0aW9uIGdldFNwYW4oaXRlbSkge1xyXG4gICAgaWYgKGlzU3BhbihpdGVtKSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3BhbjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmdldFNwYW4gPSBnZXRTcGFuO1xyXG5mdW5jdGlvbiBzbGljZShzLCBzb3VyY2UpIHtcclxuICAgIHJldHVybiBzb3VyY2Uuc2xpY2Uocy5zdGFydCwgcy5lbmQpO1xyXG59XHJcbmV4cG9ydHMuc2xpY2UgPSBzbGljZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==