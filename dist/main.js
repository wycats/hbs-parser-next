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
        span,
    };
}
exports.interpolation = interpolation;
function id(name, span) {
    return {
        type: 2 /* Identifier */,
        name,
        span,
    };
}
exports.id = id;
function path(head, tail = []) {
    if (tail.length > 0) {
        return {
            type: 1 /* Path */,
            head,
            tail,
            span: { start: head.span.start, end: tail[tail.length - 1].span.end },
        };
    }
    else {
        return {
            type: 1 /* Path */,
            head,
            span: head.span,
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
var logger_1 = __webpack_require__(/*! ./read/logger */ "./src/read/logger.ts");
exports.Logger = logger_1.Logger;
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
function parse(_input) {
    return {};
}
exports.parse = parse;


/***/ }),

/***/ "./src/read/combinator.ts":
/*!********************************!*\
  !*** ./src/read/combinator.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function combinator(func) {
    return {
        name: "wrapper",
        kind: "transparent",
        invoke(input) {
            return input.invoke(func());
        },
    };
}
exports.combinator = combinator;


/***/ }),

/***/ "./src/read/combinators.ts":
/*!*********************************!*\
  !*** ./src/read/combinators.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const any_1 = __importDefault(__webpack_require__(/*! ./combinators/any */ "./src/read/combinators/any.ts"));
const pattern_1 = __importDefault(__webpack_require__(/*! ./combinators/pattern */ "./src/read/combinators/pattern.ts"));
const seq_1 = __importDefault(__webpack_require__(/*! ./combinators/seq */ "./src/read/combinators/seq.ts"));
const tag_1 = __importDefault(__webpack_require__(/*! ./combinators/tag */ "./src/read/combinators/tag.ts"));
const take_until_1 = __importDefault(__webpack_require__(/*! ./combinators/take-until */ "./src/read/combinators/take-until.ts"));
const take_while_1 = __importDefault(__webpack_require__(/*! ./combinators/take-while */ "./src/read/combinators/take-while.ts"));
const pick_1 = __importDefault(__webpack_require__(/*! ./combinators/pick */ "./src/read/combinators/pick.ts"));
const maybe_1 = __importDefault(__webpack_require__(/*! ./combinators/maybe */ "./src/read/combinators/maybe.ts"));
exports.tag = (source) => new tag_1.default(source);
exports.pattern = (pat, name) => new pattern_1.default(name, pat);
exports.takeUntil = (pat) => new take_until_1.default(pat);
exports.takeWhile = (pat) => new take_while_1.default(pat);
exports.seq = (desc, ...combinators) => new seq_1.default(desc, combinators);
// tslint:disable-next-line:variable-name
exports.any = (desc, ...combinators) => new any_1.default(desc, combinators);
exports.pick = (combinators, callbacks) => new pick_1.default(combinators, callbacks);
exports.maybe = (c) => new maybe_1.default(c);


/***/ }),

/***/ "./src/read/combinators/any.ts":
/*!*************************************!*\
  !*** ./src/read/combinators/any.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
class Any extends base_1.AbstractCombinator {
    constructor(desc, combinators) {
        super();
        this.desc = desc;
        this.combinators = combinators;
    }
    get name() {
        return `any • ${this.desc}`;
    }
    invoke(input) {
        let current = input;
        for (let item of this.combinators) {
            let result = current.invoke(item);
            if (result.kind === "ok") {
                return result;
            }
        }
        return snippet_1.err(input, "any");
    }
}
exports.default = Any;


/***/ }),

/***/ "./src/read/combinators/base.ts":
/*!**************************************!*\
  !*** ./src/read/combinators/base.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(/*! ../utils */ "./src/read/utils.ts");
class AbstractCombinator {
    map(mapper) {
        return utils_1.map(this, mapper);
    }
}
exports.AbstractCombinator = AbstractCombinator;


/***/ }),

/***/ "./src/read/combinators/hbs/token.ts":
/*!*******************************************!*\
  !*** ./src/read/combinators/hbs/token.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/read/utils.ts");
class SomeToken extends base_1.AbstractCombinator {
    constructor(combinator, type) {
        super();
        this.combinator = combinator;
        this.type = type;
    }
    get name() {
        return `token (${utils_1.combinatorName(this.combinator)})`;
    }
    invoke(input) {
        let result = input.invoke(this.combinator, {
            forceTransparent: true,
        });
        if (result.kind === "err") {
            return result;
        }
        else {
            return snippet_1.ok([
                result.value[0],
                {
                    type: this.type,
                    span: result.value[1].span,
                },
            ]);
        }
    }
}
exports.default = SomeToken;


/***/ }),

/***/ "./src/read/combinators/maybe.ts":
/*!***************************************!*\
  !*** ./src/read/combinators/maybe.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
class Maybe extends base_1.AbstractCombinator {
    constructor(combinator) {
        super();
        this.combinator = combinator;
    }
    get name() {
        return `maybe ${this.combinator.name}`;
    }
    invoke(input) {
        let result = input.invoke(this.combinator);
        if (result.kind === "err") {
            return snippet_1.ok([input, null]);
        }
        else {
            return result;
        }
    }
}
exports.default = Maybe;


/***/ }),

/***/ "./src/read/combinators/pattern.ts":
/*!*****************************************!*\
  !*** ./src/read/combinators/pattern.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
class Pattern extends base_1.AbstractCombinator {
    constructor(desc, pattern) {
        super();
        this.desc = desc;
        this.pattern = pattern;
    }
    get name() {
        return `pattern[${this.desc}]`;
    }
    invoke(input) {
        let rest = input.sliceRest;
        let match = rest.match(this.pattern);
        if (match) {
            let matched = match[0];
            let next = input.slice(matched.length);
            return snippet_1.ok([next.rest, next]);
        }
        else {
            return snippet_1.err(input, "pattern");
        }
    }
}
exports.default = Pattern;


/***/ }),

/***/ "./src/read/combinators/pick.ts":
/*!**************************************!*\
  !*** ./src/read/combinators/pick.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
class Pick extends base_1.AbstractCombinator {
    constructor(combinators, callbacks) {
        super();
        this.combinators = combinators;
        this.callbacks = callbacks;
        this.name = "pick";
    }
    invoke(input) {
        let current = input;
        for (let [name, item] of Object.entries(this.combinators)) {
            let firstResult = current.invoke(item, { context: name });
            if (firstResult.kind === "ok") {
                let [next, value] = firstResult.value;
                let result = this.callbacks[name](value);
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
}
exports.default = Pick;


/***/ }),

/***/ "./src/read/combinators/seq.ts":
/*!*************************************!*\
  !*** ./src/read/combinators/seq.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
class Seq extends base_1.AbstractCombinator {
    constructor(desc, combinators) {
        super();
        this.desc = desc;
        this.combinators = combinators;
    }
    get name() {
        return `seq • ${this.desc}`;
    }
    invoke(input) {
        let out = [];
        let current = input;
        for (let item of this.combinators) {
            let result = current.invoke(item);
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
}
exports.default = Seq;


/***/ }),

/***/ "./src/read/combinators/tag.ts":
/*!*************************************!*\
  !*** ./src/read/combinators/tag.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
class Tag extends base_1.AbstractCombinator {
    constructor(source) {
        super();
        this.source = source;
        this.name = "tag";
    }
    invoke(input) {
        let next = input.slice(this.source.length);
        if (next.fragment === this.source) {
            return snippet_1.ok([next.rest, next]);
        }
        else {
            return { kind: "err", snippet: input, reason: "tag" };
        }
    }
}
exports.default = Tag;


/***/ }),

/***/ "./src/read/combinators/take-until.ts":
/*!********************************************!*\
  !*** ./src/read/combinators/take-until.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
class TakeUntil extends base_1.AbstractCombinator {
    constructor(pattern) {
        super();
        this.pattern = pattern;
        this.name = "takeUntil";
    }
    invoke(input) {
        let next = input;
        while (true) {
            if (next.isEOF() || next.isMatch(this.pattern)) {
                return snippet_1.ok([next.rest, next]);
            }
            else {
                next = next.extend(1);
            }
        }
    }
}
exports.default = TakeUntil;


/***/ }),

/***/ "./src/read/combinators/take-while.ts":
/*!********************************************!*\
  !*** ./src/read/combinators/take-while.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
class TakeWhile extends base_1.AbstractCombinator {
    constructor(pattern) {
        super();
        this.pattern = pattern;
        this.name = "takeWhile";
    }
    invoke(input) {
        let next = input;
        while (true) {
            if (next.isEOF()) {
                return snippet_1.ok([next.rest, next]);
            }
            else if (next.isMatch(this.pattern)) {
                next = next.extend(this.pattern.length);
            }
            else if (next.length === 0) {
                return snippet_1.err(input, "takeWhile");
            }
            else {
                return snippet_1.ok([next.rest, next]);
            }
        }
    }
}
exports.default = TakeWhile;


/***/ }),

/***/ "./src/read/combinators/wrap.ts":
/*!**************************************!*\
  !*** ./src/read/combinators/wrap.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __webpack_require__(/*! ./base */ "./src/read/combinators/base.ts");
const snippet_1 = __webpack_require__(/*! ../../snippet */ "./src/snippet.ts");
class Wrap extends base_1.AbstractCombinator {
    constructor(combinator) {
        super();
        this.combinator = combinator;
    }
    get name() {
        return `wrap • ${this.combinator.name}`;
    }
    invoke(input) {
        let result = input.invoke(this.combinator);
        if (result.kind === "err") {
            return result;
        }
        else {
            return snippet_1.ok([result.value[0], [result.value[1]]]);
        }
    }
}
exports.default = Wrap;


/***/ }),

/***/ "./src/read/debug.ts":
/*!***************************!*\
  !*** ./src/read/debug.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __webpack_require__(/*! ./logger */ "./src/read/logger.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
let table = [];
function row({ result, arrow, combinator, context, }, a, b) {
    let name = utils_1.combinatorName(combinator);
    if (context) {
        name = `${context}: ${name}`;
    }
    table.push({
        style: { result, kind: logger_1.combinatorDebugType(combinator) },
        data: [arrow, name, a, b],
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
                case "transparent":
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
    for (let { style, data: [arrow, name, a, b], } of table) {
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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
const read_1 = __webpack_require__(/*! ./read */ "./src/read/read.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
const wrap_1 = __importDefault(__webpack_require__(/*! ./combinators/wrap */ "./src/read/combinators/wrap.ts"));
const token_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/token */ "./src/read/combinators/hbs/token.ts"));
exports.token = (combinator, type) => new token_1.default(combinator, type);
exports.SINGLE_QUOTED = combinators_1.seq("SINGLE_QUOTED", combinators_1.tag(`'`), combinators_1.pattern(/^(\\'|[^'])*/u, "single quote body"), combinators_1.tag(`'`)).map(([open, body, close]) => snippet_1.ok(tokens_1.stringToken({ data: body.span, quote: 0 /* Single */ }, span_1.range(open, close))));
exports.DOUBLE_QUOTED = combinators_1.seq("DOUBLE_QUOTED", combinators_1.tag(`"`), combinators_1.pattern(/^(\\"|[^"])*/u, "double quote body"), combinators_1.tag(`"`)).map(([open, body, close]) => snippet_1.ok(tokens_1.stringToken({ data: body.span, quote: 1 /* Double */ }, span_1.range(open, close))));
exports.NUMBER = combinators_1.seq("NUMBER", combinators_1.maybe(combinators_1.tag("-")), combinators_1.pattern(/^[0-9]+/, "digits"), combinators_1.maybe(utils_1.map(combinators_1.seq("decimal", combinators_1.tag("."), combinators_1.pattern(/^[0-9]+/, "digits")), ([, tail]) => snippet_1.ok(tail)))).map(([negative, head, tail]) => snippet_1.ok(tokens_1.numberToken({
    head: head.span,
    tail: tail ? tail.span : null,
    negative: negative ? negative.span : null,
}, span_1.range(negative, head, tail ? tail : null))));
exports.SPACED_TOKENS = {
    name: "SPACED_TOKENS",
    invoke(input) {
        let out = [];
        let tk = combinators_1.any("token", exports.wrap(exports.SEXP), exports.wrap(exports.DOUBLE_QUOTED), exports.wrap(exports.SINGLE_QUOTED), exports.wrap(exports.NUMBER), exports.NAMED, exports.SIMPLE_PATH, exports.wrap(exports.WS));
        let current = input;
        while (true) {
            if (current.isEOF()) {
                break;
            }
            let result = current.invoke(tk);
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
                snippet: input,
            };
        }
        return snippet_1.ok([current, out]);
    },
};
exports.SIMPLE_PATH = {
    name: "PATH",
    invoke(input) {
        let result = input.invoke(exports.SIMPLE_HEAD);
        if (result.kind === "err") {
            return result;
        }
        let [current, head] = result.value;
        let out = [head];
        while (true) {
            if (current.isEOF()) {
                return snippet_1.ok([current, out]);
            }
            let resultDot = current.invoke(exports.DOT);
            if (resultDot.kind === "err") {
                return snippet_1.ok([current, out]);
            }
            current = resultDot.value[0];
            let nextDot = resultDot.value[1];
            let resultMember = current.invoke(exports.MEMBER);
            if (resultMember.kind === "err") {
                return resultMember;
            }
            current = resultMember.value[0];
            let nextMember = resultMember.value[1];
            out.push(nextDot, nextMember);
        }
    },
};
exports.BLOCK = {
    name: "BLOCK",
    invoke(input) {
        return input.invoke(utils_1.map(combinators_1.seq("BLOCK", exports.OPEN_BLOCK, multi_1.many(read_1.TOP_LEVEL), exports.CLOSE_BLOCK), ([open, body, close]) => snippet_1.ok(tokens_1.block({ open, body, close }))));
    },
};
exports.OPEN_BLOCK = utils_1.map(combinators_1.seq("OPEN_BLOCK", combinators_1.tag("{{#"), exports.SIMPLE_PATH, exports.SPACED_TOKENS, combinators_1.tag("}}")), ([open, path, head, close]) => snippet_1.ok(tokens_1.openBlock({ name: path, head, blockParams: null }, span_1.range(open, close))));
exports.CLOSE_BLOCK = utils_1.map(combinators_1.seq("CLOSE_BLOCK", combinators_1.tag("{{/"), exports.SIMPLE_PATH, combinators_1.tag("}}")), ([open, path, close]) => snippet_1.ok(tokens_1.closeBlock(path, span_1.range(open, close))));
exports.INTERPOLATE = utils_1.map(combinators_1.seq("INTERPOLATE", combinators_1.tag("{{"), exports.SPACED_TOKENS, combinators_1.tag("}}")), ([open, path, close]) => {
    return snippet_1.ok(tokens_1.interpolate(path, span_1.range(open, close)));
});
exports.SEXP = {
    name: "SEXP",
    invoke(input) {
        return input.invoke(utils_1.map(combinators_1.seq("SEXP", combinators_1.tag("("), exports.SPACED_TOKENS, combinators_1.tag(")")), ([open, path, close]) => {
            return snippet_1.ok(tokens_1.sexp(path, span_1.range(open, close)));
        }));
    },
};
const ID_SNIPPET = combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET");
exports.ID = exports.token(ID_SNIPPET, "Identifier" /* Identifier */);
exports.DOT = exports.token(combinators_1.tag("."), "Dot" /* Dot */);
exports.WS = exports.token(combinators_1.pattern(/^[\u0009\u000A\u000C\u0020]+/u, "WS"), "WS" /* WS */);
exports.EQ = exports.token(combinators_1.tag("="), "Eq" /* Eq */);
const ARG = utils_1.map(combinators_1.seq("@id", combinators_1.tag("@"), ID_SNIPPET), ([at, id]) => snippet_1.ok(tokens_1.arg(span_1.range(at, id))));
exports.wrap = (combinator) => new wrap_1.default(combinator);
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
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
const combinator_1 = __webpack_require__(/*! ./combinator */ "./src/read/combinator.ts");
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const hbs_1 = __webpack_require__(/*! ./hbs */ "./src/read/hbs.ts");
const multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
exports.TEXT = {
    name: "TEXT",
    invoke(input) {
        let result = input.invoke(combinators_1.takeUntil("{{"));
        if (result.kind === "err") {
            return result;
        }
        let [next, value] = result.value;
        return snippet_1.ok([next, tokens_1.text(value.span)]);
    },
};
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
exports.TAG_NAME = combinator_1.combinator(() => combinators_1.pattern(/^[A-Za-z][^/>\0\s]+/u, "TAG_NAME"));
exports.TAG_NAME_TOKEN = combinator_1.combinator(() => utils_1.map(exports.TAG_NAME, snippet => snippet_1.ok([tokens_1.id(snippet.span)])));
exports.TAG_OR_COMPONENT_NAME = combinator_1.combinator(() => combinators_1.any("tag or component name", hbs_1.SIMPLE_PATH, exports.TAG_NAME_TOKEN));
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
exports.ATTRIBUTE_NAME = combinator_1.combinator(() => utils_1.map(combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u, "ATTRIBUTE_NAME"), name => snippet_1.ok(tokens_1.attrName(name.span))));
exports.ARG_NAME = combinator_1.combinator(() => utils_1.map(combinators_1.seq("ARG_NAME", combinators_1.tag("@"), exports.ATTRIBUTE_NAME), ([at, attr]) => snippet_1.ok(tokens_1.argName(attr.span, span_1.range(at.span, attr.span)))));
exports.ANY_ATTR_NAME = combinator_1.combinator(() => combinators_1.any("ANY_ATTR_NAME", exports.ARG_NAME, exports.ATTRIBUTE_NAME));
exports.DQ_STRING_INTERPOLATE = combinator_1.combinator(() => combinators_1.any("DQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, utils_1.map(combinators_1.pattern(/^[^"]+/, `dq text`), value => snippet_1.ok(tokens_1.text(value.span)))));
exports.SQ_STRING_INTERPOLATE = combinator_1.combinator(() => combinators_1.any("SQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, utils_1.map(combinators_1.pattern(/^[^']+/, `sq text`), value => snippet_1.ok(tokens_1.text(value.span)))));
function STRING_INTERPOLATION(c) {
    return {
        name: "STRING_INTERPOLATION",
        invoke(input) {
            return input.invoke(utils_1.map(multi_1.many(c), value => snippet_1.ok(tokens_1.stringInterpolation(value, span_1.range(...value)))));
        },
    };
}
exports.STRING_INTERPOLATION = STRING_INTERPOLATION;
exports.ATTRIBUTE_VALUE = combinator_1.combinator(() => combinators_1.pick({
    interpolate: hbs_1.INTERPOLATE,
    dq: combinators_1.seq("dq", combinators_1.tag(`"`), STRING_INTERPOLATION(exports.DQ_STRING_INTERPOLATE), combinators_1.tag(`"`)),
    sq: combinators_1.seq("sq", combinators_1.tag(`'`), STRING_INTERPOLATION(exports.SQ_STRING_INTERPOLATE), combinators_1.tag(`'`)),
    unquoted: combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020>\0"'<=`]+/u, `unquoted contents`),
}, {
    interpolate: interpolate => snippet_1.ok(tokens_1.attrValue({ type: "Interpolate" /* Interpolate */, value: interpolate }, interpolate.span)),
    dq: ([open, value, close]) => snippet_1.ok(tokens_1.attrValue({
        type: "DoubleQuoted" /* DoubleQuoted */,
        value,
    }, span_1.range(open, close))),
    sq: ([open, value, close]) => snippet_1.ok(tokens_1.attrValue({
        type: "SingleQuoted" /* SingleQuoted */,
        value,
    }, span_1.range(open, close))),
    unquoted: value => snippet_1.ok(tokens_1.attrValue({
        type: "Unquoted" /* Unquoted */,
        value: tokens_1.stringInterpolation([tokens_1.text(value.span)], value.span),
    }, value.span)),
}));
exports.ATTRIBUTE = combinator_1.combinator(() => combinators_1.pick({
    valued: combinators_1.seq("valued attribute", exports.ANY_ATTR_NAME, hbs_1.EQ, exports.ATTRIBUTE_VALUE),
    bare: exports.ATTRIBUTE_NAME,
}, {
    valued: ([name, , value]) => {
        return snippet_1.ok(tokens_1.valuedAttr({ name, value }, span_1.range(name, value)));
    },
    bare: value => snippet_1.ok(tokens_1.attrName(value.span)),
}));
exports.ATTRIBUTES = combinator_1.combinator(() => utils_1.map(combinators_1.seq("ATTRIBUTES", hbs_1.WS, multi_1.many(combinators_1.any("spaced attribute", hbs_1.WS, hbs_1.INTERPOLATE, exports.ATTRIBUTE))), ([ws, attrs]) => {
    return snippet_1.ok([ws, ...attrs]);
}));
exports.START_TAG = combinator_1.combinator(() => utils_1.map(combinators_1.seq("START_TAG", combinators_1.tag("<"), exports.TAG_OR_COMPONENT_NAME, combinators_1.maybe(exports.ATTRIBUTES), combinators_1.maybe(combinators_1.tag("/")), combinators_1.tag(">")), ([start, name, attrs, selfClosing, end]) => {
    return snippet_1.ok(tokens_1.startTag({
        name,
        attrs: attrs || undefined,
        selfClosing: selfClosing ? true : undefined,
    }, span_1.range(start, end)));
}));
exports.END_TAG = combinator_1.combinator(() => utils_1.map(combinators_1.seq("END_TAG", combinators_1.tag("</"), exports.TAG_OR_COMPONENT_NAME, combinators_1.maybe(hbs_1.WS), combinators_1.tag(">")), ([start, name, trailing, end]) => {
    return snippet_1.ok(tokens_1.endTag({ name, trailing }, span_1.range(start, end)));
}));
exports.COMMENT = combinator_1.combinator(() => utils_1.map(combinators_1.seq("COMMENT", combinators_1.tag("<!--"), combinators_1.pattern(/^.*(?=[-][-][>])/u, "comment body"), combinators_1.tag("-->")), ([start, data, end]) => {
    return snippet_1.ok(tokens_1.comment(data.span, span_1.range(start, end)));
}));


/***/ }),

/***/ "./src/read/logger.ts":
/*!****************************!*\
  !*** ./src/read/logger.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const debug_1 = __webpack_require__(/*! ./debug */ "./src/read/debug.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
class Logger {
    constructor(enableLogging) {
        this.enableLogging = enableLogging;
    }
    invoke(c, input, { forceTransparent, context, } = {}) {
        let logged = this.enableLogging && !isTransparent(c) && !forceTransparent;
        if (logged) {
            debug_1.row({ result: "start", arrow: `${debug_1.indentWS()}->`, combinator: c, context }, "", input.debugRest());
            debug_1.indent();
        }
        let result = c.invoke(input);
        if (logged) {
            debug_1.outdent();
        }
        if (result.kind === "ok") {
            if (logged) {
                debug_1.row({
                    result: "success",
                    arrow: `${debug_1.indentWS()}<-`,
                    combinator: c,
                    context,
                }, formatDebuggable(result.value[1]), result.value[0].debugRest());
            }
        }
        else {
            if (logged) {
                debug_1.row({
                    result: "error",
                    arrow: `${debug_1.indentWS()}<-`,
                    combinator: c,
                    context,
                }, result.reason, result.snippet.debugRest());
            }
        }
        return result;
    }
}
exports.Logger = Logger;
function combinatorDebugType(c) {
    if (typeof c === "function") {
        return "normal";
    }
    else {
        return c.kind || "normal";
    }
}
exports.combinatorDebugType = combinatorDebugType;
function isTransparent(c) {
    if (typeof c === "function") {
        return false;
    }
    else {
        return c.kind === "transparent";
    }
}
exports.isTransparent = isTransparent;
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
exports.formatDebuggable = formatDebuggable;


/***/ }),

/***/ "./src/read/multi.ts":
/*!***************************!*\
  !*** ./src/read/multi.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
function many(source) {
    return {
        name: `many • ${utils_1.combinatorName(source)}`,
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
                let iterate = current.invoke(utils_1.present(source));
                if (iterate.kind === "err") {
                    return snippet_1.ok([current.rest, out]);
                }
                else {
                    let [next, match] = iterate.value;
                    out.push(match);
                    current = next;
                }
            }
        },
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
const combinator_1 = __webpack_require__(/*! ./combinator */ "./src/read/combinator.ts");
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const logger_1 = __webpack_require__(/*! ./logger */ "./src/read/logger.ts");
const debug_1 = __webpack_require__(/*! ./debug */ "./src/read/debug.ts");
const hbs_1 = __webpack_require__(/*! ./hbs */ "./src/read/hbs.ts");
const html_1 = __webpack_require__(/*! ./html */ "./src/read/html.ts");
const multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
function read(source, { logging }) {
    try {
        let input = snippet_1.Snippet.input(source, new logger_1.Logger(logging || false));
        let result = input.invoke(utils_1.complete(utils_1.map(multi_1.many(exports.TOP_LEVEL), tokens => {
            return snippet_1.ok(tokens_1.root(tokens, span_1.range(...tokens)));
        })));
        return utils_1.mapResult(result, ([, token]) => snippet_1.ok(token));
    }
    finally {
        if (logging) {
            debug_1.printDebug();
        }
    }
}
exports.read = read;
exports.TOP_LEVEL = {
    name: "TOP_LEVEL",
    invoke(input) {
        return input.invoke(combinators_1.any("top level", hbs_1.BLOCK, hbs_1.INTERPOLATE, exports.CONTENT));
    },
};
exports.CONTENT = combinator_1.combinator(() => combinators_1.any("CONTENT", html_1.COMMENT, html_1.END_TAG, html_1.START_TAG, html_1.TEXT));


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
        case "Block" /* Block */:
            return [
                ...serializeNode(token.open, source),
                ...serializeList(token.body, source),
                ...serializeNode(token.close, source),
            ];
        case "OpenBlock" /* OpenBlock */:
            return [
                "{{#",
                ...serializeList(token.name, source),
                ...serializeList(token.head, source),
                ...serializeNode(token.blockParams, source),
                "}}",
            ];
        case "BlockParams" /* BlockParams */:
            return ["as |", ...serializeList(token.params, source), "|"];
        case "CloseBlock" /* CloseBlock */:
            return ["{{/", ...serializeList(token.name, source), "}}"];
        case "Comment" /* Comment */:
            return ["<!--", span_1.slice(token.data, source), "-->"];
        case "StartTag" /* StartTag */:
            return [
                "<",
                ...serializeList(token.name, source),
                ...serializeList(token.attributes, source),
                ">",
            ];
        case "EndTag" /* EndTag */:
            return [
                "</",
                ...serializeList(token.name, source),
                ...serializeNode(token.trailing, source),
                ">",
            ];
        case "ValuedAttribute" /* ValuedAttribute */:
            return [
                ...serializeNode(token.name, source),
                "=",
                ...serializeNode(token.value, source),
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
        serializeQuote(token),
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
    if (tokens === null) {
        return [];
    }
    return [...tokens.flatMap((child) => serializeNode(child, source))];
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
    return tok.map(token => token(builder));
}
exports.buildPresentTokens = buildPresentTokens;
function str(name) {
    return builder => {
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
        return builder => {
            let negative = builder.consume("-");
            let head = builder.consume(num.slice(1));
            return tokens.numberToken({ head, tail: null, negative }, span_1.range(negative, head));
        };
    }
    else {
        return builder => {
            let head = builder.consume(num);
            return tokens.numberToken({ head, tail: null, negative: null }, head);
        };
    }
}
exports.int = int;
function decimal(num) {
    let [, negative, head, tail] = num.match(/^(-?)([0-9]+)\.([0-9]+)$/);
    return builder => {
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
    return builder => tokens.id(builder.consume(name));
}
exports.id = id;
function arg(name) {
    return builder => tokens.arg(builder.consume(name));
}
exports.arg = arg;
exports.dot = builder => tokens.dot(builder.consume("."));
exports.eq = builder => tokens.eq(builder.consume("="));
exports.sp = builder => tokens.ws(builder.consume(" "));
function ws(space) {
    return builder => tokens.ws(builder.consume(space));
}
exports.ws = ws;
function block({ open }, ...body) {
    let curriedName = typeof open.name === "string"
        ? [id(open.name)]
        : open.name;
    return builder => {
        let openToken = builder.consume("{{#");
        let nameTokens = buildTokens(curriedName, builder);
        let headTokens = buildTokens(open.head, builder);
        let endOpen = builder.consume("}}");
        let bodyTokens = body.map(tok => tok(builder));
        let close = builder.consume("{{/");
        let closeName = buildTokens(curriedName, builder);
        let endClose = builder.consume("}}");
        return tokens.block({
            open: tokens.openBlock({
                name: nameTokens,
                head: headTokens,
                blockParams: null,
            }, span_1.range(openToken, endOpen)),
            body: bodyTokens,
            close: tokens.closeBlock(closeName, span_1.range(close, endClose)),
        });
    };
}
exports.block = block;
function buildTokens(input, builder) {
    return input.map(tok => tok(builder));
}
function interpolate(children) {
    return builder => {
        let open = builder.consume("{{");
        let out = children.map(child => child(builder));
        let close = builder.consume("}}");
        return tokens.interpolate(out, span_1.range(open, close));
    };
}
exports.interpolate = interpolate;
function stringInterpolate(children, quote) {
    return builder => {
        let open = builder.consume(quote);
        let out = children.map(child => child(builder));
        let close = builder.consume(quote);
        return tokens.attrValue({
            type: quoteType(quote),
            value: tokens.stringInterpolation(out, span_1.range(...out)),
        }, span_1.range(open, close));
    };
}
exports.stringInterpolate = stringInterpolate;
function attrInterpolate(...tokenList) {
    return builder => {
        let value = interpolate(tokenList)(builder);
        return tokens.attrValue({
            type: "Interpolate" /* Interpolate */,
            value,
        }, value.span);
    };
}
exports.attrInterpolate = attrInterpolate;
function sexp(children) {
    return builder => {
        let open = builder.consume("(");
        let out = children.map(child => child(builder));
        let close = builder.consume(")");
        return tokens.sexp(out, span_1.range(open, close));
    };
}
exports.sexp = sexp;
function text(chars) {
    return builder => {
        let out = builder.consume(chars);
        return tokens.text(out);
    };
}
exports.text = text;
function comment(chars) {
    return builder => {
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
                        break;
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
        return builder => {
            let start = builder.consume("<");
            let nameTokens = buildPresentTokens(buildTagName(options), builder);
            let end = builder.consume(">");
            return tokens.startTag({ name: nameTokens }, span_1.range(start, end));
        };
    }
    else {
        return builder => {
            let { name, attrs, selfClosing } = options;
            let start = builder.consume("<");
            let nameTokens = buildPresentTokens(buildTagName(name), builder);
            let children = attrs.map(a => a(builder));
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
    return builder => {
        let start = builder.consume("</");
        let tagTokens = buildPresentTokens(buildTagName(tagName), builder);
        let trailingToken = trailing ? ws(trailing)(builder) : undefined;
        let end = builder.consume(">");
        return tokens.endTag({ name: tagTokens, trailing: trailingToken }, span_1.range(start, end));
    };
}
exports.endTag = endTag;
function argName(name) {
    return builder => {
        let startSpan = builder.consume(name[0]);
        let nameSpan = builder.consume(name.slice(1));
        return tokens.argName(nameSpan, span_1.range(startSpan, nameSpan));
    };
}
exports.argName = argName;
function attr(options) {
    if (typeof options === "string") {
        return builder => {
            let nameSpan = builder.consume(options);
            return tokens.attrName(nameSpan);
        };
    }
    else if (typeof options === "function") {
        return options;
    }
    else {
        return builder => {
            let { name, value: rawValue } = options;
            let start = builder.pos;
            let nameToken = typeof name === "string"
                ? tokens.attrName(builder.consume(name))
                : name(builder);
            builder.consume("=");
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
    let out = children.map(child => child(builder));
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
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
function leaf(type) {
    return (span) => ({ type, span });
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
        quote,
    };
}
exports.stringToken = stringToken;
function numberToken({ head, tail, negative, }, span) {
    return {
        type: "Number" /* Number */,
        span,
        negative,
        head,
        tail,
    };
}
exports.numberToken = numberToken;
function comment(data, span) {
    return {
        type: "Comment" /* Comment */,
        data,
        span,
    };
}
exports.comment = comment;
function arg(span) {
    return {
        type: "Argument" /* Argument */,
        name: { start: span.start + 1, end: span.end },
        span,
    };
}
exports.arg = arg;
function block({ open, body, close }) {
    return {
        type: "Block" /* Block */,
        span: span_1.range(open.span, close.span),
        open,
        body,
        close,
    };
}
exports.block = block;
function openBlock({ name, head, blockParams }, span) {
    return {
        type: "OpenBlock" /* OpenBlock */,
        span,
        name,
        head,
        blockParams: blockParams
            ? {
                type: "BlockParams" /* BlockParams */,
                span: span_1.range(...blockParams),
                params: blockParams,
            }
            : null,
    };
}
exports.openBlock = openBlock;
function closeBlock(name, span) {
    return {
        type: "CloseBlock" /* CloseBlock */,
        span,
        name,
    };
}
exports.closeBlock = closeBlock;
function argName(name, span) {
    return {
        type: "ArgName" /* ArgName */,
        name,
        span,
    };
}
exports.argName = argName;
function stringInterpolation(parts, span) {
    return {
        type: "StringInterpolation" /* StringInterpolation */,
        span,
        parts,
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
        value,
    };
}
exports.attrValue = attrValue;
function valuedAttr({ name, value }, span) {
    return {
        type: "ValuedAttribute" /* ValuedAttribute */,
        span,
        name,
        value,
    };
}
exports.valuedAttr = valuedAttr;
function startTag({ name, attrs, selfClosing }, span) {
    return {
        type: "StartTag" /* StartTag */,
        span,
        name,
        attributes: attrs || [],
        selfClosing,
    };
}
exports.startTag = startTag;
function endTag({ name, trailing }, span) {
    return {
        type: "EndTag" /* EndTag */,
        span,
        trailing: trailing ? trailing : null,
        name,
    };
}
exports.endTag = endTag;
function sexp(children, span) {
    return {
        type: "Sexp" /* Sexp */,
        span,
        children,
    };
}
exports.sexp = sexp;
function interpolate(children, span) {
    return {
        type: "Interpolate" /* Interpolate */,
        span,
        children,
    };
}
exports.interpolate = interpolate;
function trustedInterpolate(children, span) {
    return {
        type: "TrustedInterpolate" /* TrustedInterpolate */,
        span,
        children,
    };
}
exports.trustedInterpolate = trustedInterpolate;
function root(children, span) {
    return {
        type: "Root" /* Root */,
        span,
        children,
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
        name: combinatorName(combinator),
        invoke(input) {
            let first = input.invoke(combinator, { forceTransparent: true });
            if (first.kind === "err") {
                return first;
            }
            let [next, value] = first.value;
            let result = mapper(value, next);
            if (result.kind === "err") {
                return result;
            }
            return snippet_1.ok([next, result.value]);
        },
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
            }));
        },
    };
}
exports.complete = complete;
function present(source) {
    return {
        name: "present",
        invoke(input) {
            let result = input.invoke(source);
            if (result.kind === "ok") {
                let [next] = result.value;
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
        },
    };
}
exports.present = present;
function combinatorName(c) {
    if (c.name) {
        return c.name;
    }
    else {
        console.error(c);
        throw new Error(`assert: expected combinator name`);
    }
}
exports.combinatorName = combinatorName;
function unreachable(value) {
    console.error(`unreachable value`, value);
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
    invoke(combinator, options = {}) {
        return this.logger.invoke(combinator, this, options);
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
            end: this.offset + this.length,
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
        reason,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9hbnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9oYnMvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvbWF5YmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvcGF0dGVybi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9waWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL3NlcS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy90YWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvdGFrZS11bnRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy90YWtlLXdoaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL3dyYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvZGVidWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvaGJzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2h0bWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL211bHRpLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL3JlYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvc2VyaWFsaXplLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL3Rva2VuLWJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdG9rZW5zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zbmlwcGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9zcGFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4REFBOEQ7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQW1CO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0aW9uKGV4cHIsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogMCAvKiBJbnRlcnBvbGF0aW9uICovLFxyXG4gICAgICAgIGV4cHIsXHJcbiAgICAgICAgc3BhbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbjtcclxuZnVuY3Rpb24gaWQobmFtZSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAyIC8qIElkZW50aWZpZXIgKi8sXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBzcGFuLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmlkID0gaWQ7XHJcbmZ1bmN0aW9uIHBhdGgoaGVhZCwgdGFpbCA9IFtdKSB7XHJcbiAgICBpZiAodGFpbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogMSAvKiBQYXRoICovLFxyXG4gICAgICAgICAgICBoZWFkLFxyXG4gICAgICAgICAgICB0YWlsLFxyXG4gICAgICAgICAgICBzcGFuOiB7IHN0YXJ0OiBoZWFkLnNwYW4uc3RhcnQsIGVuZDogdGFpbFt0YWlsLmxlbmd0aCAtIDFdLnNwYW4uZW5kIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEgLyogUGF0aCAqLyxcclxuICAgICAgICAgICAgaGVhZCxcclxuICAgICAgICAgICAgc3BhbjogaGVhZC5zcGFuLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wYXRoID0gcGF0aDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29tYmluYXRvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC9jb21iaW5hdG9yc1wiKSk7XHJcbmV4cG9ydHMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcclxudmFyIGxvZ2dlcl8xID0gcmVxdWlyZShcIi4vcmVhZC9sb2dnZXJcIik7XHJcbmV4cG9ydHMuTG9nZ2VyID0gbG9nZ2VyXzEuTG9nZ2VyO1xyXG5jb25zdCBtdWx0aSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL211bHRpXCIpKTtcclxuZXhwb3J0cy5tdWx0aSA9IG11bHRpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zbmlwcGV0XCIpKTtcclxuY29uc3QgYXN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzdFwiKSk7XHJcbmV4cG9ydHMuYXN0ID0gYXN0O1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL2hic1wiKSk7XHJcbmNvbnN0IHRva2VucyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2Vuc1wiKSk7XHJcbmV4cG9ydHMudG9rZW5zID0gdG9rZW5zO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcGFuXCIpKTtcclxuY29uc3QgYiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2VuLWJ1aWxkZXJcIikpO1xyXG5leHBvcnRzLmIgPSBiO1xyXG5jb25zdCB1dGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3V0aWxzXCIpKTtcclxuZXhwb3J0cy51dGlscyA9IHV0aWxzO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3NlcmlhbGl6ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvcmVhZFwiKSk7XHJcbmZ1bmN0aW9uIHBhcnNlKF9pbnB1dCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gY29tYmluYXRvcihmdW5jKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwid3JhcHBlclwiLFxyXG4gICAgICAgIGtpbmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShmdW5jKCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFueV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2FueVwiKSk7XHJcbmNvbnN0IHBhdHRlcm5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9wYXR0ZXJuXCIpKTtcclxuY29uc3Qgc2VxXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvc2VxXCIpKTtcclxuY29uc3QgdGFnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvdGFnXCIpKTtcclxuY29uc3QgdGFrZV91bnRpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL3Rha2UtdW50aWxcIikpO1xyXG5jb25zdCB0YWtlX3doaWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvdGFrZS13aGlsZVwiKSk7XHJcbmNvbnN0IHBpY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9waWNrXCIpKTtcclxuY29uc3QgbWF5YmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9tYXliZVwiKSk7XHJcbmV4cG9ydHMudGFnID0gKHNvdXJjZSkgPT4gbmV3IHRhZ18xLmRlZmF1bHQoc291cmNlKTtcclxuZXhwb3J0cy5wYXR0ZXJuID0gKHBhdCwgbmFtZSkgPT4gbmV3IHBhdHRlcm5fMS5kZWZhdWx0KG5hbWUsIHBhdCk7XHJcbmV4cG9ydHMudGFrZVVudGlsID0gKHBhdCkgPT4gbmV3IHRha2VfdW50aWxfMS5kZWZhdWx0KHBhdCk7XHJcbmV4cG9ydHMudGFrZVdoaWxlID0gKHBhdCkgPT4gbmV3IHRha2Vfd2hpbGVfMS5kZWZhdWx0KHBhdCk7XHJcbmV4cG9ydHMuc2VxID0gKGRlc2MsIC4uLmNvbWJpbmF0b3JzKSA9PiBuZXcgc2VxXzEuZGVmYXVsdChkZXNjLCBjb21iaW5hdG9ycyk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbmV4cG9ydHMuYW55ID0gKGRlc2MsIC4uLmNvbWJpbmF0b3JzKSA9PiBuZXcgYW55XzEuZGVmYXVsdChkZXNjLCBjb21iaW5hdG9ycyk7XHJcbmV4cG9ydHMucGljayA9IChjb21iaW5hdG9ycywgY2FsbGJhY2tzKSA9PiBuZXcgcGlja18xLmRlZmF1bHQoY29tYmluYXRvcnMsIGNhbGxiYWNrcyk7XHJcbmV4cG9ydHMubWF5YmUgPSAoYykgPT4gbmV3IG1heWJlXzEuZGVmYXVsdChjKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNsYXNzIEFueSBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZGVzYywgY29tYmluYXRvcnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbnkg4oCiICR7dGhpcy5kZXNjfWA7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5jb21iaW5hdG9ycykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY3VycmVudC5pbnZva2UoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImFueVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBbnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbmNsYXNzIEFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBtYXAobWFwcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubWFwKHRoaXMsIG1hcHBlcik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BYnN0cmFjdENvbWJpbmF0b3IgPSBBYnN0cmFjdENvbWJpbmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zbmlwcGV0XCIpO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi4vYmFzZVwiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxuY2xhc3MgU29tZVRva2VuIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21iaW5hdG9yLCB0eXBlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYHRva2VuICgke3V0aWxzXzEuY29tYmluYXRvck5hbWUodGhpcy5jb21iaW5hdG9yKX0pYDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodGhpcy5jb21iaW5hdG9yLCB7XHJcbiAgICAgICAgICAgIGZvcmNlVHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZVswXSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbjogcmVzdWx0LnZhbHVlWzFdLnNwYW4sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU29tZVRva2VuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgTWF5YmUgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbWJpbmF0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYG1heWJlICR7dGhpcy5jb21iaW5hdG9yLm5hbWV9YDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodGhpcy5jb21iaW5hdG9yKTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbaW5wdXQsIG51bGxdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1heWJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgUGF0dGVybiBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZGVzYywgcGF0dGVybikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBwYXR0ZXJuWyR7dGhpcy5kZXNjfV1gO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IHJlc3QgPSBpbnB1dC5zbGljZVJlc3Q7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gcmVzdC5tYXRjaCh0aGlzLnBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlZCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IGlucHV0LnNsaWNlKG1hdGNoZWQubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJwYXR0ZXJuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQYXR0ZXJuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY2xhc3MgUGljayBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoY29tYmluYXRvcnMsIGNhbGxiYWNrcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwicGlja1wiO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICBmb3IgKGxldCBbbmFtZSwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5jb21iaW5hdG9ycykpIHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0UmVzdWx0ID0gY3VycmVudC5pbnZva2UoaXRlbSwgeyBjb250ZXh0OiBuYW1lIH0pO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RSZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IGZpcnN0UmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuY2FsbGJhY2tzW25hbWVdKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImFueVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQaWNrO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY2xhc3MgU2VxIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZXNjLCBjb21iaW5hdG9ycykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYHNlcSDigKIgJHt0aGlzLmRlc2N9YDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICBsZXQgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5jb21iaW5hdG9ycykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY3VycmVudC5pbnZva2UoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIG91dC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0LnJlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU2VxO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgVGFnIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwidGFnXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgbmV4dCA9IGlucHV0LnNsaWNlKHRoaXMuc291cmNlLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKG5leHQuZnJhZ21lbnQgPT09IHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2luZDogXCJlcnJcIiwgc25pcHBldDogaW5wdXQsIHJlYXNvbjogXCJ0YWdcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBUYWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi9zbmlwcGV0XCIpO1xyXG5jbGFzcyBUYWtlVW50aWwgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJ0YWtlVW50aWxcIjtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCBuZXh0ID0gaW5wdXQ7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKG5leHQuaXNFT0YoKSB8fCBuZXh0LmlzTWF0Y2godGhpcy5wYXR0ZXJuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGFrZVVudGlsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgVGFrZVdoaWxlIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwidGFrZVdoaWxlXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5leHQuaXNNYXRjaCh0aGlzLnBhdHRlcm4pKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQodGhpcy5wYXR0ZXJuLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInRha2VXaGlsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRha2VXaGlsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNsYXNzIFdyYXAgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbWJpbmF0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYHdyYXAg4oCiICR7dGhpcy5jb21iaW5hdG9yLm5hbWV9YDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodGhpcy5jb21iaW5hdG9yKTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW3Jlc3VsdC52YWx1ZVswXSwgW3Jlc3VsdC52YWx1ZVsxXV1dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gV3JhcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbG9nZ2VyXzEgPSByZXF1aXJlKFwiLi9sb2dnZXJcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxubGV0IHRhYmxlID0gW107XHJcbmZ1bmN0aW9uIHJvdyh7IHJlc3VsdCwgYXJyb3csIGNvbWJpbmF0b3IsIGNvbnRleHQsIH0sIGEsIGIpIHtcclxuICAgIGxldCBuYW1lID0gdXRpbHNfMS5jb21iaW5hdG9yTmFtZShjb21iaW5hdG9yKTtcclxuICAgIGlmIChjb250ZXh0KSB7XHJcbiAgICAgICAgbmFtZSA9IGAke2NvbnRleHR9OiAke25hbWV9YDtcclxuICAgIH1cclxuICAgIHRhYmxlLnB1c2goe1xyXG4gICAgICAgIHN0eWxlOiB7IHJlc3VsdCwga2luZDogbG9nZ2VyXzEuY29tYmluYXRvckRlYnVnVHlwZShjb21iaW5hdG9yKSB9LFxyXG4gICAgICAgIGRhdGE6IFthcnJvdywgbmFtZSwgYSwgYl0sXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnJvdyA9IHJvdztcclxuZnVuY3Rpb24gc25pcHBldFN0eWxlKHN0eWxlKSB7XHJcbiAgICBzd2l0Y2ggKHN0eWxlLnJlc3VsdCkge1xyXG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogIzMzM1wiO1xyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiBncmVlblwiO1xyXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogcmVkXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zbmlwcGV0U3R5bGUgPSBzbmlwcGV0U3R5bGU7XHJcbmZ1bmN0aW9uIGFybVN0eWxlKHN0eWxlKSB7XHJcbiAgICBzd2l0Y2ggKHN0eWxlLnJlc3VsdCkge1xyXG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0eWxlLmtpbmQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFuc3BhcmVudFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFybVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiAjYmJiXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICMzMzNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiBncmVlblwiO1xyXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogcmVkXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5hcm1TdHlsZSA9IGFybVN0eWxlO1xyXG5mdW5jdGlvbiBwcmludERlYnVnKCkge1xyXG4gICAgZm9yIChsZXQgeyBzdHlsZSwgZGF0YTogW2Fycm93LCBuYW1lLCBhLCBiXSwgfSBvZiB0YWJsZSkge1xyXG4gICAgICAgIGxldCBmaXJzdCA9IGAke2Fycm93fSAlYyR7bmFtZX0lY2AucGFkRW5kKDYwKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2ZpcnN0fSB8ICVjJHtifSVjIHxgLCBhcm1TdHlsZShzdHlsZSksIFwiY29sb3I6ICMzMzNcIiwgc25pcHBldFN0eWxlKHN0eWxlKSwgXCJjb2xvcjogIzMzM1wiLCBhKTtcclxuICAgIH1cclxuICAgIHRhYmxlID0gW107XHJcbn1cclxuZXhwb3J0cy5wcmludERlYnVnID0gcHJpbnREZWJ1ZztcclxubGV0IFRBQiA9IDA7XHJcbmZ1bmN0aW9uIGluZGVudCgpIHtcclxuICAgIFRBQiArPSAxO1xyXG59XHJcbmV4cG9ydHMuaW5kZW50ID0gaW5kZW50O1xyXG5mdW5jdGlvbiBvdXRkZW50KCkge1xyXG4gICAgVEFCIC09IDE7XHJcbn1cclxuZXhwb3J0cy5vdXRkZW50ID0gb3V0ZGVudDtcclxuZnVuY3Rpb24gaW5kZW50V1MoKSB7XHJcbiAgICByZXR1cm4gXCIgXCIucmVwZWF0KFRBQik7XHJcbn1cclxuZXhwb3J0cy5pbmRlbnRXUyA9IGluZGVudFdTO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgbXVsdGlfMSA9IHJlcXVpcmUoXCIuL211bHRpXCIpO1xyXG5jb25zdCByZWFkXzEgPSByZXF1aXJlKFwiLi9yZWFkXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5jb25zdCB3cmFwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvd3JhcFwiKSk7XHJcbmNvbnN0IHRva2VuXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvaGJzL3Rva2VuXCIpKTtcclxuZXhwb3J0cy50b2tlbiA9IChjb21iaW5hdG9yLCB0eXBlKSA9PiBuZXcgdG9rZW5fMS5kZWZhdWx0KGNvbWJpbmF0b3IsIHR5cGUpO1xyXG5leHBvcnRzLlNJTkdMRV9RVU9URUQgPSBjb21iaW5hdG9yc18xLnNlcShcIlNJTkdMRV9RVU9URURcIiwgY29tYmluYXRvcnNfMS50YWcoYCdgKSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eKFxcXFwnfFteJ10pKi91LCBcInNpbmdsZSBxdW90ZSBib2R5XCIpLCBjb21iaW5hdG9yc18xLnRhZyhgJ2ApKS5tYXAoKFtvcGVuLCBib2R5LCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdHJpbmdUb2tlbih7IGRhdGE6IGJvZHkuc3BhbiwgcXVvdGU6IDAgLyogU2luZ2xlICovIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKSk7XHJcbmV4cG9ydHMuRE9VQkxFX1FVT1RFRCA9IGNvbWJpbmF0b3JzXzEuc2VxKFwiRE9VQkxFX1FVT1RFRFwiLCBjb21iaW5hdG9yc18xLnRhZyhgXCJgKSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eKFxcXFxcInxbXlwiXSkqL3UsIFwiZG91YmxlIHF1b3RlIGJvZHlcIiksIGNvbWJpbmF0b3JzXzEudGFnKGBcImApKS5tYXAoKFtvcGVuLCBib2R5LCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdHJpbmdUb2tlbih7IGRhdGE6IGJvZHkuc3BhbiwgcXVvdGU6IDEgLyogRG91YmxlICovIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKSk7XHJcbmV4cG9ydHMuTlVNQkVSID0gY29tYmluYXRvcnNfMS5zZXEoXCJOVU1CRVJcIiwgY29tYmluYXRvcnNfMS5tYXliZShjb21iaW5hdG9yc18xLnRhZyhcIi1cIikpLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bMC05XSsvLCBcImRpZ2l0c1wiKSwgY29tYmluYXRvcnNfMS5tYXliZSh1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcImRlY2ltYWxcIiwgY29tYmluYXRvcnNfMS50YWcoXCIuXCIpLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bMC05XSsvLCBcImRpZ2l0c1wiKSksIChbLCB0YWlsXSkgPT4gc25pcHBldF8xLm9rKHRhaWwpKSkpLm1hcCgoW25lZ2F0aXZlLCBoZWFkLCB0YWlsXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLm51bWJlclRva2VuKHtcclxuICAgIGhlYWQ6IGhlYWQuc3BhbixcclxuICAgIHRhaWw6IHRhaWwgPyB0YWlsLnNwYW4gOiBudWxsLFxyXG4gICAgbmVnYXRpdmU6IG5lZ2F0aXZlID8gbmVnYXRpdmUuc3BhbiA6IG51bGwsXHJcbn0sIHNwYW5fMS5yYW5nZShuZWdhdGl2ZSwgaGVhZCwgdGFpbCA/IHRhaWwgOiBudWxsKSkpKTtcclxuZXhwb3J0cy5TUEFDRURfVE9LRU5TID0ge1xyXG4gICAgbmFtZTogXCJTUEFDRURfVE9LRU5TXCIsXHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgb3V0ID0gW107XHJcbiAgICAgICAgbGV0IHRrID0gY29tYmluYXRvcnNfMS5hbnkoXCJ0b2tlblwiLCBleHBvcnRzLndyYXAoZXhwb3J0cy5TRVhQKSwgZXhwb3J0cy53cmFwKGV4cG9ydHMuRE9VQkxFX1FVT1RFRCksIGV4cG9ydHMud3JhcChleHBvcnRzLlNJTkdMRV9RVU9URUQpLCBleHBvcnRzLndyYXAoZXhwb3J0cy5OVU1CRVIpLCBleHBvcnRzLk5BTUVELCBleHBvcnRzLlNJTVBMRV9QQVRILCBleHBvcnRzLndyYXAoZXhwb3J0cy5XUykpO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGN1cnJlbnQuaW52b2tlKHRrKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgW25leHQsIHRva2Vuc10gPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRvayBvZiB0b2tlbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRvaykpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCguLi50b2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2godG9rKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG91dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IFwicHJlc2VudFwiLFxyXG4gICAgICAgICAgICAgICAgc25pcHBldDogaW5wdXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgfSxcclxufTtcclxuZXhwb3J0cy5TSU1QTEVfUEFUSCA9IHtcclxuICAgIG5hbWU6IFwiUEFUSFwiLFxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGlucHV0Lmludm9rZShleHBvcnRzLlNJTVBMRV9IRUFEKTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFtjdXJyZW50LCBoZWFkXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICBsZXQgb3V0ID0gW2hlYWRdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXN1bHREb3QgPSBjdXJyZW50Lmludm9rZShleHBvcnRzLkRPVCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHREb3Qua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudCwgb3V0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudCA9IHJlc3VsdERvdC52YWx1ZVswXTtcclxuICAgICAgICAgICAgbGV0IG5leHREb3QgPSByZXN1bHREb3QudmFsdWVbMV07XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRNZW1iZXIgPSBjdXJyZW50Lmludm9rZShleHBvcnRzLk1FTUJFUik7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRNZW1iZXIua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE1lbWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0TWVtYmVyLnZhbHVlWzBdO1xyXG4gICAgICAgICAgICBsZXQgbmV4dE1lbWJlciA9IHJlc3VsdE1lbWJlci52YWx1ZVsxXTtcclxuICAgICAgICAgICAgb3V0LnB1c2gobmV4dERvdCwgbmV4dE1lbWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuZXhwb3J0cy5CTE9DSyA9IHtcclxuICAgIG5hbWU6IFwiQkxPQ0tcIixcclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UodXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJCTE9DS1wiLCBleHBvcnRzLk9QRU5fQkxPQ0ssIG11bHRpXzEubWFueShyZWFkXzEuVE9QX0xFVkVMKSwgZXhwb3J0cy5DTE9TRV9CTE9DSyksIChbb3BlbiwgYm9keSwgY2xvc2VdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYmxvY2soeyBvcGVuLCBib2R5LCBjbG9zZSB9KSkpKTtcclxuICAgIH0sXHJcbn07XHJcbmV4cG9ydHMuT1BFTl9CTE9DSyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiT1BFTl9CTE9DS1wiLCBjb21iaW5hdG9yc18xLnRhZyhcInt7I1wiKSwgZXhwb3J0cy5TSU1QTEVfUEFUSCwgZXhwb3J0cy5TUEFDRURfVE9LRU5TLCBjb21iaW5hdG9yc18xLnRhZyhcIn19XCIpKSwgKFtvcGVuLCBwYXRoLCBoZWFkLCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5vcGVuQmxvY2soeyBuYW1lOiBwYXRoLCBoZWFkLCBibG9ja1BhcmFtczogbnVsbCB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSkpO1xyXG5leHBvcnRzLkNMT1NFX0JMT0NLID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJDTE9TRV9CTE9DS1wiLCBjb21iaW5hdG9yc18xLnRhZyhcInt7L1wiKSwgZXhwb3J0cy5TSU1QTEVfUEFUSCwgY29tYmluYXRvcnNfMS50YWcoXCJ9fVwiKSksIChbb3BlbiwgcGF0aCwgY2xvc2VdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuY2xvc2VCbG9jayhwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSkpO1xyXG5leHBvcnRzLklOVEVSUE9MQVRFID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJJTlRFUlBPTEFURVwiLCBjb21iaW5hdG9yc18xLnRhZyhcInt7XCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwifX1cIikpLCAoW29wZW4sIHBhdGgsIGNsb3NlXSkgPT4ge1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5pbnRlcnBvbGF0ZShwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbn0pO1xyXG5leHBvcnRzLlNFWFAgPSB7XHJcbiAgICBuYW1lOiBcIlNFWFBcIixcclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UodXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJTRVhQXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiKFwiKSwgZXhwb3J0cy5TUEFDRURfVE9LRU5TLCBjb21iaW5hdG9yc18xLnRhZyhcIilcIikpLCAoW29wZW4sIHBhdGgsIGNsb3NlXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnNleHAocGF0aCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0sXHJcbn07XHJcbmNvbnN0IElEX1NOSVBQRVQgPSBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15cXHB7SURfU3RhcnR9W1xccHtJRF9Db250aW51ZX0tXSovdSwgXCJJRF9TTklQUEVUXCIpO1xyXG5leHBvcnRzLklEID0gZXhwb3J0cy50b2tlbihJRF9TTklQUEVULCBcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovKTtcclxuZXhwb3J0cy5ET1QgPSBleHBvcnRzLnRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiLlwiKSwgXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLldTID0gZXhwb3J0cy50b2tlbihjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMF0rL3UsIFwiV1NcIiksIFwiV1NcIiAvKiBXUyAqLyk7XHJcbmV4cG9ydHMuRVEgPSBleHBvcnRzLnRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiPVwiKSwgXCJFcVwiIC8qIEVxICovKTtcclxuY29uc3QgQVJHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJAaWRcIiwgY29tYmluYXRvcnNfMS50YWcoXCJAXCIpLCBJRF9TTklQUEVUKSwgKFthdCwgaWRdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXJnKHNwYW5fMS5yYW5nZShhdCwgaWQpKSkpO1xyXG5leHBvcnRzLndyYXAgPSAoY29tYmluYXRvcikgPT4gbmV3IHdyYXBfMS5kZWZhdWx0KGNvbWJpbmF0b3IpO1xyXG5leHBvcnRzLkVYUFJFU1NJT04gPSBjb21iaW5hdG9yc18xLmFueShcIkVYUFJFU1NJT05cIiwgZXhwb3J0cy5TRVhQLCBleHBvcnRzLlNJTVBMRV9QQVRILCBleHBvcnRzLkRPVUJMRV9RVU9URUQsIGV4cG9ydHMuU0lOR0xFX1FVT1RFRCwgZXhwb3J0cy5OVU1CRVIpO1xyXG5leHBvcnRzLk5BTUVEID0gY29tYmluYXRvcnNfMS5zZXEoXCJOQU1FRFwiLCBleHBvcnRzLklELCBleHBvcnRzLkVRLCBleHBvcnRzLkVYUFJFU1NJT04pO1xyXG5leHBvcnRzLlNJTVBMRV9IRUFEID0gY29tYmluYXRvcnNfMS5hbnkoXCJIRUFEXCIsIEFSRywgZXhwb3J0cy5JRCk7XHJcbi8vIFRPRE86IEFsbG93IGBbXWAgb3Igc3RyaW5nIG1lbWJlcnNcclxuZXhwb3J0cy5NRU1CRVIgPSBleHBvcnRzLklEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JcIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbmNvbnN0IG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZXhwb3J0cy5URVhUID0ge1xyXG4gICAgbmFtZTogXCJURVhUXCIsXHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEudGFrZVVudGlsKFwie3tcIikpO1xyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LCB0b2tlbnNfMS50ZXh0KHZhbHVlLnNwYW4pXSk7XHJcbiAgICB9LFxyXG59O1xyXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy90b2tlbml6YXRpb24uaHRtbCN0YWctbmFtZS1zdGF0ZVxyXG5leHBvcnRzLlRBR19OQU1FID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW0EtWmEtel1bXi8+XFwwXFxzXSsvdSwgXCJUQUdfTkFNRVwiKSk7XHJcbmV4cG9ydHMuVEFHX05BTUVfVE9LRU4gPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiB1dGlsc18xLm1hcChleHBvcnRzLlRBR19OQU1FLCBzbmlwcGV0ID0+IHNuaXBwZXRfMS5vayhbdG9rZW5zXzEuaWQoc25pcHBldC5zcGFuKV0pKSk7XHJcbmV4cG9ydHMuVEFHX09SX0NPTVBPTkVOVF9OQU1FID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5hbnkoXCJ0YWcgb3IgY29tcG9uZW50IG5hbWVcIiwgaGJzXzEuU0lNUExFX1BBVEgsIGV4cG9ydHMuVEFHX05BTUVfVE9LRU4pKTtcclxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvdG9rZW5pemF0aW9uLmh0bWwjYmVmb3JlLWF0dHJpYnV0ZS1uYW1lLXN0YXRlXHJcbmV4cG9ydHMuQVRUUklCVVRFX05BTUUgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlxcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjAvPlxcdTAwMDBcIic8PV0uKj8oPz1bXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMC89PlxcdTAwMDBcIic8XSkvdSwgXCJBVFRSSUJVVEVfTkFNRVwiKSwgbmFtZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0ck5hbWUobmFtZS5zcGFuKSkpKTtcclxuZXhwb3J0cy5BUkdfTkFNRSA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQVJHX05BTUVcIiwgY29tYmluYXRvcnNfMS50YWcoXCJAXCIpLCBleHBvcnRzLkFUVFJJQlVURV9OQU1FKSwgKFthdCwgYXR0cl0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hcmdOYW1lKGF0dHIuc3Bhbiwgc3Bhbl8xLnJhbmdlKGF0LnNwYW4sIGF0dHIuc3BhbikpKSkpO1xyXG5leHBvcnRzLkFOWV9BVFRSX05BTUUgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiBjb21iaW5hdG9yc18xLmFueShcIkFOWV9BVFRSX05BTUVcIiwgZXhwb3J0cy5BUkdfTkFNRSwgZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSkpO1xyXG5leHBvcnRzLkRRX1NUUklOR19JTlRFUlBPTEFURSA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IGNvbWJpbmF0b3JzXzEuYW55KFwiRFFfU1RSSU5HX0lOVEVSUE9MQVRFXCIsIGhic18xLklOVEVSUE9MQVRFLCB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlwiXSsvLCBgZHEgdGV4dGApLCB2YWx1ZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKSkpKSk7XHJcbmV4cG9ydHMuU1FfU1RSSU5HX0lOVEVSUE9MQVRFID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5hbnkoXCJTUV9TVFJJTkdfSU5URVJQT0xBVEVcIiwgaGJzXzEuSU5URVJQT0xBVEUsIHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteJ10rLywgYHNxIHRleHRgKSwgdmFsdWUgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLnRleHQodmFsdWUuc3BhbikpKSkpO1xyXG5mdW5jdGlvbiBTVFJJTkdfSU5URVJQT0xBVElPTihjKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwiU1RSSU5HX0lOVEVSUE9MQVRJT05cIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZSh1dGlsc18xLm1hcChtdWx0aV8xLm1hbnkoYyksIHZhbHVlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdHJpbmdJbnRlcnBvbGF0aW9uKHZhbHVlLCBzcGFuXzEucmFuZ2UoLi4udmFsdWUpKSkpKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLlNUUklOR19JTlRFUlBPTEFUSU9OID0gU1RSSU5HX0lOVEVSUE9MQVRJT047XHJcbmV4cG9ydHMuQVRUUklCVVRFX1ZBTFVFID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5waWNrKHtcclxuICAgIGludGVycG9sYXRlOiBoYnNfMS5JTlRFUlBPTEFURSxcclxuICAgIGRxOiBjb21iaW5hdG9yc18xLnNlcShcImRxXCIsIGNvbWJpbmF0b3JzXzEudGFnKGBcImApLCBTVFJJTkdfSU5URVJQT0xBVElPTihleHBvcnRzLkRRX1NUUklOR19JTlRFUlBPTEFURSksIGNvbWJpbmF0b3JzXzEudGFnKGBcImApKSxcclxuICAgIHNxOiBjb21iaW5hdG9yc18xLnNlcShcInNxXCIsIGNvbWJpbmF0b3JzXzEudGFnKGAnYCksIFNUUklOR19JTlRFUlBPTEFUSU9OKGV4cG9ydHMuU1FfU1RSSU5HX0lOVEVSUE9MQVRFKSwgY29tYmluYXRvcnNfMS50YWcoYCdgKSksXHJcbiAgICB1bnF1b3RlZDogY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW15cXHUwMDA5XFx1MDAwQVxcdTAwMENcXHUwMDIwPlxcMFwiJzw9YF0rL3UsIGB1bnF1b3RlZCBjb250ZW50c2ApLFxyXG59LCB7XHJcbiAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7IHR5cGU6IFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLywgdmFsdWU6IGludGVycG9sYXRlIH0sIGludGVycG9sYXRlLnNwYW4pKSxcclxuICAgIGRxOiAoW29wZW4sIHZhbHVlLCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoe1xyXG4gICAgICAgIHR5cGU6IFwiRG91YmxlUXVvdGVkXCIgLyogRG91YmxlUXVvdGVkICovLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpLFxyXG4gICAgc3E6IChbb3BlbiwgdmFsdWUsIGNsb3NlXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgdHlwZTogXCJTaW5nbGVRdW90ZWRcIiAvKiBTaW5nbGVRdW90ZWQgKi8sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSksXHJcbiAgICB1bnF1b3RlZDogdmFsdWUgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgdHlwZTogXCJVbnF1b3RlZFwiIC8qIFVucXVvdGVkICovLFxyXG4gICAgICAgIHZhbHVlOiB0b2tlbnNfMS5zdHJpbmdJbnRlcnBvbGF0aW9uKFt0b2tlbnNfMS50ZXh0KHZhbHVlLnNwYW4pXSwgdmFsdWUuc3BhbiksXHJcbiAgICB9LCB2YWx1ZS5zcGFuKSksXHJcbn0pKTtcclxuZXhwb3J0cy5BVFRSSUJVVEUgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiBjb21iaW5hdG9yc18xLnBpY2soe1xyXG4gICAgdmFsdWVkOiBjb21iaW5hdG9yc18xLnNlcShcInZhbHVlZCBhdHRyaWJ1dGVcIiwgZXhwb3J0cy5BTllfQVRUUl9OQU1FLCBoYnNfMS5FUSwgZXhwb3J0cy5BVFRSSUJVVEVfVkFMVUUpLFxyXG4gICAgYmFyZTogZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSxcclxufSwge1xyXG4gICAgdmFsdWVkOiAoW25hbWUsICwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS52YWx1ZWRBdHRyKHsgbmFtZSwgdmFsdWUgfSwgc3Bhbl8xLnJhbmdlKG5hbWUsIHZhbHVlKSkpO1xyXG4gICAgfSxcclxuICAgIGJhcmU6IHZhbHVlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyTmFtZSh2YWx1ZS5zcGFuKSksXHJcbn0pKTtcclxuZXhwb3J0cy5BVFRSSUJVVEVTID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJBVFRSSUJVVEVTXCIsIGhic18xLldTLCBtdWx0aV8xLm1hbnkoY29tYmluYXRvcnNfMS5hbnkoXCJzcGFjZWQgYXR0cmlidXRlXCIsIGhic18xLldTLCBoYnNfMS5JTlRFUlBPTEFURSwgZXhwb3J0cy5BVFRSSUJVVEUpKSksIChbd3MsIGF0dHJzXSkgPT4ge1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbd3MsIC4uLmF0dHJzXSk7XHJcbn0pKTtcclxuZXhwb3J0cy5TVEFSVF9UQUcgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIlNUQVJUX1RBR1wiLCBjb21iaW5hdG9yc18xLnRhZyhcIjxcIiksIGV4cG9ydHMuVEFHX09SX0NPTVBPTkVOVF9OQU1FLCBjb21iaW5hdG9yc18xLm1heWJlKGV4cG9ydHMuQVRUUklCVVRFUyksIGNvbWJpbmF0b3JzXzEubWF5YmUoY29tYmluYXRvcnNfMS50YWcoXCIvXCIpKSwgY29tYmluYXRvcnNfMS50YWcoXCI+XCIpKSwgKFtzdGFydCwgbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nLCBlbmRdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGF0dHJzOiBhdHRycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2VsZkNsb3Npbmc6IHNlbGZDbG9zaW5nID8gdHJ1ZSA6IHVuZGVmaW5lZCxcclxuICAgIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSkpO1xyXG59KSk7XHJcbmV4cG9ydHMuRU5EX1RBRyA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiRU5EX1RBR1wiLCBjb21iaW5hdG9yc18xLnRhZyhcIjwvXCIpLCBleHBvcnRzLlRBR19PUl9DT01QT05FTlRfTkFNRSwgY29tYmluYXRvcnNfMS5tYXliZShoYnNfMS5XUyksIGNvbWJpbmF0b3JzXzEudGFnKFwiPlwiKSksIChbc3RhcnQsIG5hbWUsIHRyYWlsaW5nLCBlbmRdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmVuZFRhZyh7IG5hbWUsIHRyYWlsaW5nIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSkpO1xyXG59KSk7XHJcbmV4cG9ydHMuQ09NTUVOVCA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQ09NTUVOVFwiLCBjb21iaW5hdG9yc18xLnRhZyhcIjwhLS1cIiksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXi4qKD89Wy1dWy1dWz5dKS91LCBcImNvbW1lbnQgYm9keVwiKSwgY29tYmluYXRvcnNfMS50YWcoXCItLT5cIikpLCAoW3N0YXJ0LCBkYXRhLCBlbmRdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmNvbW1lbnQoZGF0YS5zcGFuLCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpKTtcclxufSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3QgZGVidWdfMSA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVuYWJsZUxvZ2dpbmcpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUxvZ2dpbmcgPSBlbmFibGVMb2dnaW5nO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGMsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQsIGNvbnRleHQsIH0gPSB7fSkge1xyXG4gICAgICAgIGxldCBsb2dnZWQgPSB0aGlzLmVuYWJsZUxvZ2dpbmcgJiYgIWlzVHJhbnNwYXJlbnQoYykgJiYgIWZvcmNlVHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBkZWJ1Z18xLnJvdyh7IHJlc3VsdDogXCJzdGFydFwiLCBhcnJvdzogYCR7ZGVidWdfMS5pbmRlbnRXUygpfS0+YCwgY29tYmluYXRvcjogYywgY29udGV4dCB9LCBcIlwiLCBpbnB1dC5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIGRlYnVnXzEuaW5kZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBjLmludm9rZShpbnB1dCk7XHJcbiAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBkZWJ1Z18xLm91dGRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdfMS5yb3coe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3c6IGAke2RlYnVnXzEuaW5kZW50V1MoKX08LWAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcjogYyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSwgZm9ybWF0RGVidWdnYWJsZShyZXN1bHQudmFsdWVbMV0pLCByZXN1bHQudmFsdWVbMF0uZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z18xLnJvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3c6IGAke2RlYnVnXzEuaW5kZW50V1MoKX08LWAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcjogYyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0LnJlYXNvbiwgcmVzdWx0LnNuaXBwZXQuZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XHJcbmZ1bmN0aW9uIGNvbWJpbmF0b3JEZWJ1Z1R5cGUoYykge1xyXG4gICAgaWYgKHR5cGVvZiBjID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gXCJub3JtYWxcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjLmtpbmQgfHwgXCJub3JtYWxcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNvbWJpbmF0b3JEZWJ1Z1R5cGUgPSBjb21iaW5hdG9yRGVidWdUeXBlO1xyXG5mdW5jdGlvbiBpc1RyYW5zcGFyZW50KGMpIHtcclxuICAgIGlmICh0eXBlb2YgYyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGMua2luZCA9PT0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaXNUcmFuc3BhcmVudCA9IGlzVHJhbnNwYXJlbnQ7XHJcbmZ1bmN0aW9uIGZvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWJ1Z2dhYmxlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlYnVnZ2FibGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z2dhYmxlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkZWJ1Z2dhYmxlKSkge1xyXG4gICAgICAgIGlmIChkZWJ1Z2dhYmxlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgWyR7ZGVidWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgLm1hcChmb3JtYXREZWJ1Z2dhYmxlKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1dYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgWyR7Zm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzBdKX0sICR7Zm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzFdKX0sICR7Zm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzJdKX0sIC4uLl1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnZ2FibGUgaW5zdGFuY2VvZiBzbmlwcGV0XzEuU25pcHBldCkge1xyXG4gICAgICAgIHJldHVybiBkZWJ1Z2dhYmxlLmZtdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vuc18xLmRlYnVnRm9ybWF0VG9rZW4oZGVidWdnYWJsZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5mb3JtYXREZWJ1Z2dhYmxlID0gZm9ybWF0RGVidWdnYWJsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gbWFueShzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogYG1hbnkg4oCiICR7dXRpbHNfMS5jb21iaW5hdG9yTmFtZShzb3VyY2UpfWAsXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCsrID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJsaWtlbHkgaW5maW5pdGUgbG9vcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZXJhdGUgPSBjdXJyZW50Lmludm9rZSh1dGlsc18xLnByZXNlbnQoc291cmNlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0ZS5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbbmV4dCwgbWF0Y2hdID0gaXRlcmF0ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1hbnkgPSBtYW55O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JcIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgbG9nZ2VyXzEgPSByZXF1aXJlKFwiLi9sb2dnZXJcIik7XHJcbmNvbnN0IGRlYnVnXzEgPSByZXF1aXJlKFwiLi9kZWJ1Z1wiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbmNvbnN0IGh0bWxfMSA9IHJlcXVpcmUoXCIuL2h0bWxcIik7XHJcbmNvbnN0IG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gcmVhZChzb3VyY2UsIHsgbG9nZ2luZyB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHNuaXBwZXRfMS5TbmlwcGV0LmlucHV0KHNvdXJjZSwgbmV3IGxvZ2dlcl8xLkxvZ2dlcihsb2dnaW5nIHx8IGZhbHNlKSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGlucHV0Lmludm9rZSh1dGlsc18xLmNvbXBsZXRlKHV0aWxzXzEubWFwKG11bHRpXzEubWFueShleHBvcnRzLlRPUF9MRVZFTCksIHRva2VucyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEucm9vdCh0b2tlbnMsIHNwYW5fMS5yYW5nZSguLi50b2tlbnMpKSk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICByZXR1cm4gdXRpbHNfMS5tYXBSZXN1bHQocmVzdWx0LCAoWywgdG9rZW5dKSA9PiBzbmlwcGV0XzEub2sodG9rZW4pKTtcclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIGlmIChsb2dnaW5nKSB7XHJcbiAgICAgICAgICAgIGRlYnVnXzEucHJpbnREZWJ1ZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLnJlYWQgPSByZWFkO1xyXG5leHBvcnRzLlRPUF9MRVZFTCA9IHtcclxuICAgIG5hbWU6IFwiVE9QX0xFVkVMXCIsXHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEuYW55KFwidG9wIGxldmVsXCIsIGhic18xLkJMT0NLLCBoYnNfMS5JTlRFUlBPTEFURSwgZXhwb3J0cy5DT05URU5UKSk7XHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnRzLkNPTlRFTlQgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiBjb21iaW5hdG9yc18xLmFueShcIkNPTlRFTlRcIiwgaHRtbF8xLkNPTU1FTlQsIGh0bWxfMS5FTkRfVEFHLCBodG1sXzEuU1RBUlRfVEFHLCBodG1sXzEuVEVYVCkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gc2VyaWFsaXplUm9vdChyb290LCBzb3VyY2UpIHtcclxuICAgIGxldCBvdXQgPSBbXTtcclxuICAgIGZvciAobGV0IHRva2VuIG9mIHJvb3QuY2hpbGRyZW4pIHtcclxuICAgICAgICBvdXQucHVzaCguLi5zZXJpYWxpemVOb2RlKHRva2VuLCBzb3VyY2UpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXQuam9pbihcIlwiKTtcclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZVJvb3QgPSBzZXJpYWxpemVSb290O1xyXG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlKHRva2VuLCBzb3VyY2UpIHtcclxuICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBbXCJcIl07XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuICAgICAgICAvLyBsZWFmIHRva2Vuc1xyXG4gICAgICAgIGNhc2UgXCJEb3RcIiAvKiBEb3QgKi86XHJcbiAgICAgICAgY2FzZSBcIkVxXCIgLyogRXEgKi86XHJcbiAgICAgICAgY2FzZSBcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovOlxyXG4gICAgICAgIGNhc2UgXCJXU1wiIC8qIFdTICovOlxyXG4gICAgICAgIGNhc2UgXCJUZXh0XCIgLyogVGV4dCAqLzpcclxuICAgICAgICBjYXNlIFwiQXR0cmlidXRlTmFtZVwiIC8qIEF0dHJpYnV0ZU5hbWUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbc3Bhbl8xLnNsaWNlKHRva2VuLnNwYW4sIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJTdHJpbmdcIiAvKiBTdHJpbmcgKi86IHtcclxuICAgICAgICAgICAgbGV0IHF1b3RlID0gdG9rZW4ucXVvdGUgPT09IDAgLyogU2luZ2xlICovID8gYCdgIDogYFwiYDtcclxuICAgICAgICAgICAgcmV0dXJuIFtxdW90ZSwgc3Bhbl8xLnNsaWNlKHRva2VuLmRhdGEsIHNvdXJjZSksIHF1b3RlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIk51bWJlclwiIC8qIE51bWJlciAqLzoge1xyXG4gICAgICAgICAgICBsZXQgb3V0ID0gW107XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5uZWdhdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2goc3Bhbl8xLnNsaWNlKHRva2VuLm5lZ2F0aXZlLCBzb3VyY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXQucHVzaChzcGFuXzEuc2xpY2UodG9rZW4uaGVhZCwgc291cmNlKSk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi50YWlsKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaChcIi5cIiwgc3Bhbl8xLnNsaWNlKHRva2VuLnRhaWwsIHNvdXJjZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJBcmdOYW1lXCIgLyogQXJnTmFtZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIkBcIiwgc3Bhbl8xLnNsaWNlKHRva2VuLm5hbWUsIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJBdHRyaWJ1dGVWYWx1ZVwiIC8qIEF0dHJpYnV0ZVZhbHVlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplQXR0cmlidXRlVmFsdWUodG9rZW4sIHNvdXJjZSk7XHJcbiAgICAgICAgY2FzZSBcIkFyZ3VtZW50XCIgLyogQXJndW1lbnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJAXCIsIHNwYW5fMS5zbGljZSh0b2tlbi5uYW1lLCBzb3VyY2UpXTtcclxuICAgICAgICBjYXNlIFwiU2V4cFwiIC8qIFNleHAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXCIoXCIsIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFwiKVwiXTtcclxuICAgICAgICBjYXNlIFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcInt7XCIsIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFwifX1cIl07XHJcbiAgICAgICAgY2FzZSBcIlRydXN0ZWRJbnRlcnBvbGF0ZVwiIC8qIFRydXN0ZWRJbnRlcnBvbGF0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcInt7e1wiLCAuLi5zZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBcIn19fVwiXTtcclxuICAgICAgICBjYXNlIFwiQmxvY2tcIiAvKiBCbG9jayAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4ub3Blbiwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uYm9keSwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4uY2xvc2UsIHNvdXJjZSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSBcIk9wZW5CbG9ja1wiIC8qIE9wZW5CbG9jayAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFwie3sjXCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLmhlYWQsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLmJsb2NrUGFyYW1zLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgXCJ9fVwiLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgXCJCbG9ja1BhcmFtc1wiIC8qIEJsb2NrUGFyYW1zICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiYXMgfFwiLCAuLi5zZXJpYWxpemVMaXN0KHRva2VuLnBhcmFtcywgc291cmNlKSwgXCJ8XCJdO1xyXG4gICAgICAgIGNhc2UgXCJDbG9zZUJsb2NrXCIgLyogQ2xvc2VCbG9jayAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcInt7L1wiLCAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksIFwifX1cIl07XHJcbiAgICAgICAgY2FzZSBcIkNvbW1lbnRcIiAvKiBDb21tZW50ICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiPCEtLVwiLCBzcGFuXzEuc2xpY2UodG9rZW4uZGF0YSwgc291cmNlKSwgXCItLT5cIl07XHJcbiAgICAgICAgY2FzZSBcIlN0YXJ0VGFnXCIgLyogU3RhcnRUYWcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBcIjxcIixcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4ubmFtZSwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uYXR0cmlidXRlcywgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIFwiPlwiLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgXCJFbmRUYWdcIiAvKiBFbmRUYWcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBcIjwvXCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLnRyYWlsaW5nLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgXCI+XCIsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSBcIlZhbHVlZEF0dHJpYnV0ZVwiIC8qIFZhbHVlZEF0dHJpYnV0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4ubmFtZSwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIFwiPVwiLFxyXG4gICAgICAgICAgICAgICAgLi4uc2VyaWFsaXplTm9kZSh0b2tlbi52YWx1ZSwgc291cmNlKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBjYXNlIFwiU3RyaW5nSW50ZXJwb2xhdGlvblwiIC8qIFN0cmluZ0ludGVycG9sYXRpb24gKi86XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0KHRva2VuLnBhcnRzLCBzb3VyY2UpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLnVucmVhY2hhYmxlKHRva2VuKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZU5vZGUgPSBzZXJpYWxpemVOb2RlO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZSh0b2tlbiwgc291cmNlKSB7XHJcbiAgICBpZiAodG9rZW5zXzEuaXNJbnRlcnBvbGF0ZUF0dHJpYnV0ZSh0b2tlbikpIHtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplTm9kZSh0b2tlbi52YWx1ZSwgc291cmNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pLFxyXG4gICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4udmFsdWUsIHNvdXJjZSksXHJcbiAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pLFxyXG4gICAgXTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVRdW90ZSh0b2tlbikge1xyXG4gICAgc3dpdGNoICh0b2tlbi52YWx1ZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU2luZ2xlUXVvdGVkXCIgLyogU2luZ2xlUXVvdGVkICovOlxyXG4gICAgICAgICAgICByZXR1cm4gYCdgO1xyXG4gICAgICAgIGNhc2UgXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBgXCJgO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUxpc3QodG9rZW5zLCBzb3VyY2UpIHtcclxuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gWy4uLnRva2Vucy5mbGF0TWFwKChjaGlsZCkgPT4gc2VyaWFsaXplTm9kZShjaGlsZCwgc291cmNlKSldO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdG9rZW5zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3Rva2Vuc1wiKSk7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5mdW5jdGlvbiBidWlsZFByZXNlbnRUb2tlbnModG9rLCBidWlsZGVyKSB7XHJcbiAgICByZXR1cm4gdG9rLm1hcCh0b2tlbiA9PiB0b2tlbihidWlsZGVyKSk7XHJcbn1cclxuZXhwb3J0cy5idWlsZFByZXNlbnRUb2tlbnMgPSBidWlsZFByZXNlbnRUb2tlbnM7XHJcbmZ1bmN0aW9uIHN0cihuYW1lKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKG5hbWVbMF0pO1xyXG4gICAgICAgIGxldCBkYXRhID0gYnVpbGRlci5jb25zdW1lKG5hbWUuc2xpY2UoMSwgLTEpKTtcclxuICAgICAgICBsZXQgZW5kID0gYnVpbGRlci5jb25zdW1lKG5hbWUuc2xpY2UoLTEpKTtcclxuICAgICAgICBsZXQgcXVvdGUgPSBuYW1lWzBdID09PSBgJ2AgPyAwIC8qIFNpbmdsZSAqLyA6IDEgLyogRG91YmxlICovO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuc3RyaW5nVG9rZW4oeyBkYXRhLCBxdW90ZSB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0ciA9IHN0cjtcclxuZnVuY3Rpb24gaW50KG51bSkge1xyXG4gICAgaWYgKG51bVswXSA9PT0gXCItXCIpIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZWdhdGl2ZSA9IGJ1aWxkZXIuY29uc3VtZShcIi1cIik7XHJcbiAgICAgICAgICAgIGxldCBoZWFkID0gYnVpbGRlci5jb25zdW1lKG51bS5zbGljZSgxKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMubnVtYmVyVG9rZW4oeyBoZWFkLCB0YWlsOiBudWxsLCBuZWdhdGl2ZSB9LCBzcGFuXzEucmFuZ2UobmVnYXRpdmUsIGhlYWQpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaGVhZCA9IGJ1aWxkZXIuY29uc3VtZShudW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLm51bWJlclRva2VuKHsgaGVhZCwgdGFpbDogbnVsbCwgbmVnYXRpdmU6IG51bGwgfSwgaGVhZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmludCA9IGludDtcclxuZnVuY3Rpb24gZGVjaW1hbChudW0pIHtcclxuICAgIGxldCBbLCBuZWdhdGl2ZSwgaGVhZCwgdGFpbF0gPSBudW0ubWF0Y2goL14oLT8pKFswLTldKylcXC4oWzAtOV0rKSQvKTtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgbmVnYXRpdmVTcGFuID0gbmVnYXRpdmUgPyBidWlsZGVyLmNvbnN1bWUoXCItXCIpIDogbnVsbDtcclxuICAgICAgICBsZXQgaGVhZFNwYW4gPSBidWlsZGVyLmNvbnN1bWUoaGVhZCk7XHJcbiAgICAgICAgbGV0IHRhaWxTcGFuID0gbnVsbDtcclxuICAgICAgICBpZiAodGFpbCkge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUoXCIuXCIpO1xyXG4gICAgICAgICAgICB0YWlsU3BhbiA9IGJ1aWxkZXIuY29uc3VtZSh0YWlsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5udW1iZXJUb2tlbih7XHJcbiAgICAgICAgICAgIGhlYWQ6IGhlYWRTcGFuLFxyXG4gICAgICAgICAgICB0YWlsOiB0YWlsU3BhbixcclxuICAgICAgICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlU3BhbixcclxuICAgICAgICB9LCBzcGFuXzEucmFuZ2UobmVnYXRpdmVTcGFuLCBoZWFkU3BhbiwgdGFpbFNwYW4pKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWNpbWFsID0gZGVjaW1hbDtcclxuZnVuY3Rpb24gaWQobmFtZSkge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4gdG9rZW5zLmlkKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7XHJcbn1cclxuZXhwb3J0cy5pZCA9IGlkO1xyXG5mdW5jdGlvbiBhcmcobmFtZSkge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4gdG9rZW5zLmFyZyhidWlsZGVyLmNvbnN1bWUobmFtZSkpO1xyXG59XHJcbmV4cG9ydHMuYXJnID0gYXJnO1xyXG5leHBvcnRzLmRvdCA9IGJ1aWxkZXIgPT4gdG9rZW5zLmRvdChidWlsZGVyLmNvbnN1bWUoXCIuXCIpKTtcclxuZXhwb3J0cy5lcSA9IGJ1aWxkZXIgPT4gdG9rZW5zLmVxKGJ1aWxkZXIuY29uc3VtZShcIj1cIikpO1xyXG5leHBvcnRzLnNwID0gYnVpbGRlciA9PiB0b2tlbnMud3MoYnVpbGRlci5jb25zdW1lKFwiIFwiKSk7XHJcbmZ1bmN0aW9uIHdzKHNwYWNlKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB0b2tlbnMud3MoYnVpbGRlci5jb25zdW1lKHNwYWNlKSk7XHJcbn1cclxuZXhwb3J0cy53cyA9IHdzO1xyXG5mdW5jdGlvbiBibG9jayh7IG9wZW4gfSwgLi4uYm9keSkge1xyXG4gICAgbGV0IGN1cnJpZWROYW1lID0gdHlwZW9mIG9wZW4ubmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8gW2lkKG9wZW4ubmFtZSldXHJcbiAgICAgICAgOiBvcGVuLm5hbWU7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW5Ub2tlbiA9IGJ1aWxkZXIuY29uc3VtZShcInt7I1wiKTtcclxuICAgICAgICBsZXQgbmFtZVRva2VucyA9IGJ1aWxkVG9rZW5zKGN1cnJpZWROYW1lLCBidWlsZGVyKTtcclxuICAgICAgICBsZXQgaGVhZFRva2VucyA9IGJ1aWxkVG9rZW5zKG9wZW4uaGVhZCwgYnVpbGRlcik7XHJcbiAgICAgICAgbGV0IGVuZE9wZW4gPSBidWlsZGVyLmNvbnN1bWUoXCJ9fVwiKTtcclxuICAgICAgICBsZXQgYm9keVRva2VucyA9IGJvZHkubWFwKHRvayA9PiB0b2soYnVpbGRlcikpO1xyXG4gICAgICAgIGxldCBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcInt7L1wiKTtcclxuICAgICAgICBsZXQgY2xvc2VOYW1lID0gYnVpbGRUb2tlbnMoY3VycmllZE5hbWUsIGJ1aWxkZXIpO1xyXG4gICAgICAgIGxldCBlbmRDbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcIn19XCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYmxvY2soe1xyXG4gICAgICAgICAgICBvcGVuOiB0b2tlbnMub3BlbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiBoZWFkVG9rZW5zLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tQYXJhbXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHNwYW5fMS5yYW5nZShvcGVuVG9rZW4sIGVuZE9wZW4pKSxcclxuICAgICAgICAgICAgYm9keTogYm9keVRva2VucyxcclxuICAgICAgICAgICAgY2xvc2U6IHRva2Vucy5jbG9zZUJsb2NrKGNsb3NlTmFtZSwgc3Bhbl8xLnJhbmdlKGNsb3NlLCBlbmRDbG9zZSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmJsb2NrID0gYmxvY2s7XHJcbmZ1bmN0aW9uIGJ1aWxkVG9rZW5zKGlucHV0LCBidWlsZGVyKSB7XHJcbiAgICByZXR1cm4gaW5wdXQubWFwKHRvayA9PiB0b2soYnVpbGRlcikpO1xyXG59XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBidWlsZGVyLmNvbnN1bWUoXCJ7e1wiKTtcclxuICAgICAgICBsZXQgb3V0ID0gY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCJ9fVwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmludGVycG9sYXRlKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gc3RyaW5nSW50ZXJwb2xhdGUoY2hpbGRyZW4sIHF1b3RlKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBidWlsZGVyLmNvbnN1bWUocXVvdGUpO1xyXG4gICAgICAgIGxldCBvdXQgPSBjaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQoYnVpbGRlcikpO1xyXG4gICAgICAgIGxldCBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShxdW90ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5hdHRyVmFsdWUoe1xyXG4gICAgICAgICAgICB0eXBlOiBxdW90ZVR5cGUocXVvdGUpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24ob3V0LCBzcGFuXzEucmFuZ2UoLi4ub3V0KSksXHJcbiAgICAgICAgfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc3RyaW5nSW50ZXJwb2xhdGUgPSBzdHJpbmdJbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlKC4uLnRva2VuTGlzdCkge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGludGVycG9sYXRlKHRva2VuTGlzdCkoYnVpbGRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5hdHRyVmFsdWUoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi8sXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgIH0sIHZhbHVlLnNwYW4pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmF0dHJJbnRlcnBvbGF0ZSA9IGF0dHJJbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gc2V4cChjaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwiKFwiKTtcclxuICAgICAgICBsZXQgb3V0ID0gY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCIpXCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuc2V4cChvdXQsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNleHAgPSBzZXhwO1xyXG5mdW5jdGlvbiB0ZXh0KGNoYXJzKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG91dCA9IGJ1aWxkZXIuY29uc3VtZShjaGFycyk7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy50ZXh0KG91dCk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudGV4dCA9IHRleHQ7XHJcbmZ1bmN0aW9uIGNvbW1lbnQoY2hhcnMpIHtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8IS0tXCIpO1xyXG4gICAgICAgIGxldCBkYXRhID0gYnVpbGRlci5jb25zdW1lKGNoYXJzKTtcclxuICAgICAgICBsZXQgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiLS0+XCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuY29tbWVudChkYXRhLCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNvbW1lbnQgPSBjb21tZW50O1xyXG5mdW5jdGlvbiBpc1RhZ05hbWUoaW5wdXQpIHtcclxuICAgIHJldHVybiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShpbnB1dCkgfHxcclxuICAgICAgICB0eXBlb2YgaW5wdXQgPT09IFwiZnVuY3Rpb25cIik7XHJcbn1cclxuZnVuY3Rpb24gYnVpbGRUYWdOYW1lKG5hbWUpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XHJcbiAgICAgICAgbGV0IHRva3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBwYXJ0IG9mIG5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJ0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRva3MucHVzaChwYXJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFydFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJAXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva3MucHVzaChhcmcocGFydCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tzLnB1c2goaWQocGFydCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2tzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobmFtZVswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkBcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2FyZyhuYW1lKV07XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbaWQobmFtZSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0VGFnKG9wdGlvbnMpIHtcclxuICAgIGlmIChpc1RhZ05hbWUob3B0aW9ucykpIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGJ1aWxkZXIuY29uc3VtZShcIjxcIik7XHJcbiAgICAgICAgICAgIGxldCBuYW1lVG9rZW5zID0gYnVpbGRQcmVzZW50VG9rZW5zKGJ1aWxkVGFnTmFtZShvcHRpb25zKSwgYnVpbGRlcik7XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCI+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnN0YXJ0VGFnKHsgbmFtZTogbmFtZVRva2VucyB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7IG5hbWUsIGF0dHJzLCBzZWxmQ2xvc2luZyB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWVUb2tlbnMgPSBidWlsZFByZXNlbnRUb2tlbnMoYnVpbGRUYWdOYW1lKG5hbWUpLCBidWlsZGVyKTtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gYXR0cnMubWFwKGEgPT4gYShidWlsZGVyKSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5jb25zdW1lKFwiL1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5zdGFydFRhZyh7IG5hbWU6IG5hbWVUb2tlbnMsIGF0dHJzOiBjaGlsZHJlbiwgc2VsZkNsb3NpbmcgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc3RhcnRUYWcgPSBzdGFydFRhZztcclxuZnVuY3Rpb24gZW5kVGFnKG9wdGlvbnMpIHtcclxuICAgIGxldCB0YWdOYW1lID0gaXNUYWdOYW1lKG9wdGlvbnMpID8gb3B0aW9ucyA6IG9wdGlvbnMubmFtZTtcclxuICAgIGxldCB0cmFpbGluZyA9IGlzVGFnTmFtZShvcHRpb25zKSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMudHJhaWxpbmc7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPC9cIik7XHJcbiAgICAgICAgbGV0IHRhZ1Rva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucyhidWlsZFRhZ05hbWUodGFnTmFtZSksIGJ1aWxkZXIpO1xyXG4gICAgICAgIGxldCB0cmFpbGluZ1Rva2VuID0gdHJhaWxpbmcgPyB3cyh0cmFpbGluZykoYnVpbGRlcikgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5lbmRUYWcoeyBuYW1lOiB0YWdUb2tlbnMsIHRyYWlsaW5nOiB0cmFpbGluZ1Rva2VuIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBhcmdOYW1lKG5hbWUpIHtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgc3RhcnRTcGFuID0gYnVpbGRlci5jb25zdW1lKG5hbWVbMF0pO1xyXG4gICAgICAgIGxldCBuYW1lU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShuYW1lLnNsaWNlKDEpKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmFyZ05hbWUobmFtZVNwYW4sIHNwYW5fMS5yYW5nZShzdGFydFNwYW4sIG5hbWVTcGFuKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXJnTmFtZSA9IGFyZ05hbWU7XHJcbmZ1bmN0aW9uIGF0dHIob3B0aW9ucykge1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmFtZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMuYXR0ck5hbWUobmFtZVNwYW4pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7IG5hbWUsIHZhbHVlOiByYXdWYWx1ZSB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5wb3M7XHJcbiAgICAgICAgICAgIGxldCBuYW1lVG9rZW4gPSB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgPyB0b2tlbnMuYXR0ck5hbWUoYnVpbGRlci5jb25zdW1lKG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgOiBuYW1lKGJ1aWxkZXIpO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUoXCI9XCIpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVUb2tlbjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByYXdWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyYXdWYWx1ZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYFwiYDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVTdGFydCA9IGJ1aWxkZXIuY29uc3VtZShgXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShyYXdWYWx1ZS5zbGljZSgxLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVFbmQgPSBidWlsZGVyLmNvbnN1bWUoYFwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRvdWJsZVF1b3RlZFwiIC8qIERvdWJsZVF1b3RlZCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzcGFuXzEucmFuZ2UocXVvdGVTdGFydCwgcXVvdGVFbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYCdgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZVN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKGAnYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUocmF3VmFsdWUuc2xpY2UoMSwgLTEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlRW5kID0gYnVpbGRlci5jb25zdW1lKGAnYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzcGFuXzEucmFuZ2UocXVvdGVTdGFydCwgcXVvdGVFbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShyYXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlVucXVvdGVkXCIgLyogVW5xdW90ZWQgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTcGFuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gcmF3VmFsdWUoYnVpbGRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnZhbHVlZEF0dHIoeyBuYW1lOiBuYW1lVG9rZW4sIHZhbHVlOiB2YWx1ZVRva2VuIH0sIHsgc3RhcnQsIGVuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuYXR0ciA9IGF0dHI7XHJcbmZ1bmN0aW9uIHF1b3RlVHlwZShxdW90ZSkge1xyXG4gICAgc3dpdGNoIChxdW90ZSkge1xyXG4gICAgICAgIGNhc2UgYFwiYDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiRG91YmxlUXVvdGVkXCIgLyogRG91YmxlUXVvdGVkICovO1xyXG4gICAgICAgIGNhc2UgYCdgOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTaW5nbGVRdW90ZWRcIiAvKiBTaW5nbGVRdW90ZWQgKi87XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVW5xdW90ZWRcIiAvKiBVbnF1b3RlZCAqLztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuKSB7XHJcbiAgICBsZXQgYnVpbGRlciA9IG5ldyBUb2tlbkJ1aWxkZXIoKTtcclxuICAgIGxldCBzdGFydCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgbGV0IG91dCA9IGNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZChidWlsZGVyKSk7XHJcbiAgICBsZXQgZW5kID0gYnVpbGRlci5wb3M7XHJcbiAgICByZXR1cm4geyByb290OiB0b2tlbnMucm9vdChvdXQsIHNwYW5fMS5zcGFuKHN0YXJ0LCBlbmQpKSwgc291cmNlOiBidWlsZGVyLnNvdXJjZSB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbmNsYXNzIFRva2VuQnVpbGRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgY29uc3VtZShjaGFycykge1xyXG4gICAgICAgIHRoaXMub3V0cHV0ICs9IGNoYXJzO1xyXG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMucG9zICs9IGNoYXJzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kOiB0aGlzLnBvcyB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvdXJjZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXQ7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmZ1bmN0aW9uIGxlYWYodHlwZSkge1xyXG4gICAgcmV0dXJuIChzcGFuKSA9PiAoeyB0eXBlLCBzcGFuIH0pO1xyXG59XHJcbmV4cG9ydHMubGVhZiA9IGxlYWY7XHJcbmV4cG9ydHMuaWQgPSBsZWFmKFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi8pO1xyXG5leHBvcnRzLmRvdCA9IGxlYWYoXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLmVxID0gbGVhZihcIkVxXCIgLyogRXEgKi8pO1xyXG5leHBvcnRzLndzID0gbGVhZihcIldTXCIgLyogV1MgKi8pO1xyXG5leHBvcnRzLnRleHQgPSBsZWFmKFwiVGV4dFwiIC8qIFRleHQgKi8pO1xyXG5leHBvcnRzLmF0dHJOYW1lID0gbGVhZihcIkF0dHJpYnV0ZU5hbWVcIiAvKiBBdHRyaWJ1dGVOYW1lICovKTtcclxuZnVuY3Rpb24gc3RyaW5nVG9rZW4oeyBkYXRhLCBxdW90ZSB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU3RyaW5nXCIgLyogU3RyaW5nICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBxdW90ZSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdHJpbmdUb2tlbiA9IHN0cmluZ1Rva2VuO1xyXG5mdW5jdGlvbiBudW1iZXJUb2tlbih7IGhlYWQsIHRhaWwsIG5lZ2F0aXZlLCB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiTnVtYmVyXCIgLyogTnVtYmVyICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgbmVnYXRpdmUsXHJcbiAgICAgICAgaGVhZCxcclxuICAgICAgICB0YWlsLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm51bWJlclRva2VuID0gbnVtYmVyVG9rZW47XHJcbmZ1bmN0aW9uIGNvbW1lbnQoZGF0YSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkNvbW1lbnRcIiAvKiBDb21tZW50ICovLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc3BhbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21tZW50ID0gY29tbWVudDtcclxuZnVuY3Rpb24gYXJnKHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBcmd1bWVudFwiIC8qIEFyZ3VtZW50ICovLFxyXG4gICAgICAgIG5hbWU6IHsgc3RhcnQ6IHNwYW4uc3RhcnQgKyAxLCBlbmQ6IHNwYW4uZW5kIH0sXHJcbiAgICAgICAgc3BhbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmZ1bmN0aW9uIGJsb2NrKHsgb3BlbiwgYm9keSwgY2xvc2UgfSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkJsb2NrXCIgLyogQmxvY2sgKi8sXHJcbiAgICAgICAgc3Bhbjogc3Bhbl8xLnJhbmdlKG9wZW4uc3BhbiwgY2xvc2Uuc3BhbiksXHJcbiAgICAgICAgb3BlbixcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIGNsb3NlLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmJsb2NrID0gYmxvY2s7XHJcbmZ1bmN0aW9uIG9wZW5CbG9jayh7IG5hbWUsIGhlYWQsIGJsb2NrUGFyYW1zIH0sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJPcGVuQmxvY2tcIiAvKiBPcGVuQmxvY2sgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGhlYWQsXHJcbiAgICAgICAgYmxvY2tQYXJhbXM6IGJsb2NrUGFyYW1zXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCbG9ja1BhcmFtc1wiIC8qIEJsb2NrUGFyYW1zICovLFxyXG4gICAgICAgICAgICAgICAgc3Bhbjogc3Bhbl8xLnJhbmdlKC4uLmJsb2NrUGFyYW1zKSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYmxvY2tQYXJhbXMsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm9wZW5CbG9jayA9IG9wZW5CbG9jaztcclxuZnVuY3Rpb24gY2xvc2VCbG9jayhuYW1lLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiQ2xvc2VCbG9ja1wiIC8qIENsb3NlQmxvY2sgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNsb3NlQmxvY2sgPSBjbG9zZUJsb2NrO1xyXG5mdW5jdGlvbiBhcmdOYW1lKG5hbWUsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBcmdOYW1lXCIgLyogQXJnTmFtZSAqLyxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXJnTmFtZSA9IGFyZ05hbWU7XHJcbmZ1bmN0aW9uIHN0cmluZ0ludGVycG9sYXRpb24ocGFydHMsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTdHJpbmdJbnRlcnBvbGF0aW9uXCIgLyogU3RyaW5nSW50ZXJwb2xhdGlvbiAqLyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIHBhcnRzLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0cmluZ0ludGVycG9sYXRpb24gPSBzdHJpbmdJbnRlcnBvbGF0aW9uO1xyXG5mdW5jdGlvbiBpc0ludGVycG9sYXRlQXR0cmlidXRlKGlucHV0KSB7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWVUeXBlID09PSBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi87XHJcbn1cclxuZXhwb3J0cy5pc0ludGVycG9sYXRlQXR0cmlidXRlID0gaXNJbnRlcnBvbGF0ZUF0dHJpYnV0ZTtcclxuZnVuY3Rpb24gYXR0clZhbHVlKHsgdHlwZSwgdmFsdWUgfSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkF0dHJpYnV0ZVZhbHVlXCIgLyogQXR0cmlidXRlVmFsdWUgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICB2YWx1ZVR5cGU6IHR5cGUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXR0clZhbHVlID0gYXR0clZhbHVlO1xyXG5mdW5jdGlvbiB2YWx1ZWRBdHRyKHsgbmFtZSwgdmFsdWUgfSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlZhbHVlZEF0dHJpYnV0ZVwiIC8qIFZhbHVlZEF0dHJpYnV0ZSAqLyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudmFsdWVkQXR0ciA9IHZhbHVlZEF0dHI7XHJcbmZ1bmN0aW9uIHN0YXJ0VGFnKHsgbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nIH0sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTdGFydFRhZ1wiIC8qIFN0YXJ0VGFnICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRycyB8fCBbXSxcclxuICAgICAgICBzZWxmQ2xvc2luZyxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdGFydFRhZyA9IHN0YXJ0VGFnO1xyXG5mdW5jdGlvbiBlbmRUYWcoeyBuYW1lLCB0cmFpbGluZyB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiRW5kVGFnXCIgLyogRW5kVGFnICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgdHJhaWxpbmc6IHRyYWlsaW5nID8gdHJhaWxpbmcgOiBudWxsLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBzZXhwKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU2V4cFwiIC8qIFNleHAgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXhwID0gc2V4cDtcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gdHJ1c3RlZEludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudHJ1c3RlZEludGVycG9sYXRlID0gdHJ1c3RlZEludGVycG9sYXRlO1xyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiUm9vdFwiIC8qIFJvb3QgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5yb290ID0gcm9vdDtcclxuZnVuY3Rpb24gZGVidWdGb3JtYXRUb2tlbih0b2tlbikge1xyXG4gICAgcmV0dXJuIGA8dG9rZW46JHt0b2tlbi50eXBlfT5gO1xyXG59XHJcbmV4cG9ydHMuZGVidWdGb3JtYXRUb2tlbiA9IGRlYnVnRm9ybWF0VG9rZW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiBtYXBSZXN1bHQocmVzdWx0LCBjYWxsYmFjaykge1xyXG4gICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xyXG59XHJcbmV4cG9ydHMubWFwUmVzdWx0ID0gbWFwUmVzdWx0O1xyXG5mdW5jdGlvbiBtYXAoY29tYmluYXRvciwgbWFwcGVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3QgPSBpbnB1dC5pbnZva2UoY29tYmluYXRvciwgeyBmb3JjZVRyYW5zcGFyZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3Qua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBbbmV4dCwgdmFsdWVdID0gZmlyc3QudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBtYXBwZXIodmFsdWUsIG5leHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYXAgPSBtYXA7XHJcbmZ1bmN0aW9uIGNvbXBsZXRlKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcImNvbXBsZXRlXCIsXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UobWFwKHNvdXJjZSwgKHZhbHVlLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dC5yZXN0TGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiaW5jb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG5mdW5jdGlvbiBwcmVzZW50KHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInByZXNlbnRcIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGlucHV0Lmludm9rZShzb3VyY2UpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtuZXh0XSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5lcShuZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnByZXNlbnQgPSBwcmVzZW50O1xyXG5mdW5jdGlvbiBjb21iaW5hdG9yTmFtZShjKSB7XHJcbiAgICBpZiAoYy5uYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGMubmFtZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhc3NlcnQ6IGV4cGVjdGVkIGNvbWJpbmF0b3IgbmFtZWApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvck5hbWUgPSBjb21iaW5hdG9yTmFtZTtcclxuZnVuY3Rpb24gdW5yZWFjaGFibGUodmFsdWUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVucmVhY2hhYmxlIHZhbHVlYCwgdmFsdWUpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bnJlYWNoYWJsZSBjb2RlIHJlYWNoZWRgKTtcclxufVxyXG5leHBvcnRzLnVucmVhY2hhYmxlID0gdW5yZWFjaGFibGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFNuaXBwZXQge1xyXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBvZmZzZXQsIGxlbmd0aCwgbG9nZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5wdXQoc291cmNlLCBsb2dnZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQoc291cmNlLCAwLCAwLCBsb2dnZXIpO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGNvbWJpbmF0b3IsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5pbnZva2UoY29tYmluYXRvciwgdGhpcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlcShvdGhlcikge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zb3VyY2UgPT09IG90aGVyLnNvdXJjZSAmJlxyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9PT0gb3RoZXIub2Zmc2V0ICYmXHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID09PSBvdGhlci5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZm10KCkge1xyXG4gICAgICAgIHJldHVybiBgPG9mZnNldDoke3RoaXMub2Zmc2V0fSBsZW5ndGg6JHt0aGlzLmxlbmd0aH0+YDtcclxuICAgIH1cclxuICAgIGRlYnVnUmVzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgKGVvZilgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2xpY2UoY2hhcnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIGNoYXJzLCB0aGlzLmxvZ2dlcik7XHJcbiAgICB9XHJcbiAgICBnZXQgc2xpY2VSZXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGdldCByZXN0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgMCwgdGhpcy5sb2dnZXIpO1xyXG4gICAgfVxyXG4gICAgaXNFT0YoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGggPT09IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGlzTWF0Y2goY2hhcnMpIHtcclxuICAgICAgICBsZXQgc2xpY2UgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoICsgY2hhcnMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gc2xpY2UgPT09IGNoYXJzO1xyXG4gICAgfVxyXG4gICAgZXh0ZW5kKGNvdW50ID0gMSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQsIHRoaXMubGVuZ3RoICsgY291bnQsIHRoaXMubG9nZ2VyKTtcclxuICAgIH1cclxuICAgIGdldCBzcGFuKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLm9mZnNldCxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZXQgZnJhZ21lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGdldCByZXN0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5sZW5ndGggLSB0aGlzLm9mZnNldCAtIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU25pcHBldCA9IFNuaXBwZXQ7XHJcbmZ1bmN0aW9uIG9rKHZhbHVlKSB7XHJcbiAgICByZXR1cm4geyBraW5kOiBcIm9rXCIsIHZhbHVlIH07XHJcbn1cclxuZXhwb3J0cy5vayA9IG9rO1xyXG5mdW5jdGlvbiBlcnIoc25pcHBldCwgcmVhc29uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgc25pcHBldCxcclxuICAgICAgICByZWFzb24sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZXJyID0gZXJyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBzcGFuKHN0YXJ0LCBlbmQpIHtcclxuICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxufVxyXG5leHBvcnRzLnNwYW4gPSBzcGFuO1xyXG5mdW5jdGlvbiByYW5nZSguLi5yYXdTcGFucykge1xyXG4gICAgbGV0IHNwYW5zID0gcmF3U3BhbnMuZmlsdGVyKHMgPT4gcyAhPT0gbnVsbCAmJiBzICE9PSB1bmRlZmluZWQpO1xyXG4gICAgaWYgKHNwYW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBzcGFuKDAsIDApO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpcnN0ID0gc3BhbnNbMF07XHJcbiAgICBsZXQgbGFzdCA9IGZpcnN0O1xyXG4gICAgZm9yIChsZXQgcyBvZiBzcGFucykge1xyXG4gICAgICAgIGxhc3QgPSBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3RhcnQ6IGdldFNwYW4oZmlyc3QpLnN0YXJ0LCBlbmQ6IGdldFNwYW4obGFzdCkuZW5kIH07XHJcbn1cclxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xyXG5mdW5jdGlvbiBpc1NwYW4oaXRlbSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtLnN0YXJ0ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBpdGVtLmVuZCA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5leHBvcnRzLmlzU3BhbiA9IGlzU3BhbjtcclxuZnVuY3Rpb24gZ2V0U3BhbihpdGVtKSB7XHJcbiAgICBpZiAoaXNTcGFuKGl0ZW0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5zcGFuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZ2V0U3BhbiA9IGdldFNwYW47XHJcbmZ1bmN0aW9uIHNsaWNlKHMsIHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHNvdXJjZS5zbGljZShzLnN0YXJ0LCBzLmVuZCk7XHJcbn1cclxuZXhwb3J0cy5zbGljZSA9IHNsaWNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9