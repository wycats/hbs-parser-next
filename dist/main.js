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
__export(__webpack_require__(/*! ./read/hbs */ "./src/read/hbs.ts"));
const tokens = __importStar(__webpack_require__(/*! ./read/tokens */ "./src/read/tokens.ts"));
exports.tokens = tokens;
const ast = __importStar(__webpack_require__(/*! ./parser/nodes */ "./src/parser/nodes.ts"));
exports.ast = ast;
__export(__webpack_require__(/*! ./span */ "./src/span.ts"));
const b = __importStar(__webpack_require__(/*! ./read/token-builder */ "./src/read/token-builder.ts"));
exports.b = b;
const utils = __importStar(__webpack_require__(/*! ./read/utils */ "./src/read/utils.ts"));
exports.utils = utils;
__export(__webpack_require__(/*! ./read/serialize */ "./src/read/serialize.ts"));
__export(__webpack_require__(/*! ./read/read */ "./src/read/read.ts"));
var parse_1 = __webpack_require__(/*! ./parser/parse */ "./src/parser/parse.ts");
exports.parse = parse_1.default;


/***/ }),

/***/ "./src/parser/nodes.ts":
/*!*****************************!*\
  !*** ./src/parser/nodes.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
var NodeType;
(function (NodeType) {
    NodeType["Root"] = "Root";
    NodeType["Text"] = "Text";
})(NodeType = exports.NodeType || (exports.NodeType = {}));
function root(children) {
    return {
        type: NodeType.Root,
        span: span_1.range(...children),
        children,
    };
}
exports.root = root;
function text(span) {
    return {
        type: NodeType.Text,
        span,
    };
}
exports.text = text;


/***/ }),

/***/ "./src/parser/parse.ts":
/*!*****************************!*\
  !*** ./src/parser/parse.ts ***!
  \*****************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast = __importStar(__webpack_require__(/*! ./nodes */ "./src/parser/nodes.ts"));
const block_body_1 = __importDefault(__webpack_require__(/*! ./shapes/block-body */ "./src/parser/shapes/block-body.ts"));
const tokens_iterator_1 = __importDefault(__webpack_require__(/*! ./tokens-iterator */ "./src/parser/tokens-iterator.ts"));
function parse(input, source) {
    let iterator = new tokens_iterator_1.default(input.children, { source });
    let topLevel = new block_body_1.default();
    return ast.root(topLevel.expandInfallible(iterator));
}
exports.default = parse;


/***/ }),

/***/ "./src/parser/shape.ts":
/*!*****************************!*\
  !*** ./src/parser/shape.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ok(value) {
    return { kind: "ok", value };
}
exports.ok = ok;
function err(token, reason) {
    return {
        kind: "err",
        token,
        reason,
    };
}
exports.err = err;
function fatalError(token, reason) {
    return {
        kind: "err",
        token,
        reason,
        fatal: true,
    };
}
exports.fatalError = fatalError;


/***/ }),

/***/ "./src/parser/shapes/abstract.ts":
/*!***************************************!*\
  !*** ./src/parser/shapes/abstract.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AbstractShape {
}
exports.AbstractShape = AbstractShape;
// tslint:disable-next-line:max-classes-per-file
class AbstractInfallibleShape {
}
exports.AbstractInfallibleShape = AbstractInfallibleShape;


/***/ }),

/***/ "./src/parser/shapes/block-body.ts":
/*!*****************************************!*\
  !*** ./src/parser/shapes/block-body.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = __webpack_require__(/*! ./abstract */ "./src/parser/shapes/abstract.ts");
const top_level_1 = __webpack_require__(/*! ./top-level */ "./src/parser/shapes/top-level.ts");
class BlockBodyShape extends abstract_1.AbstractInfallibleShape {
    expandInfallible(iterator) {
        let out = [];
        while (true) {
            let next = new top_level_1.TopLevelShape().expandFallible(iterator);
            if (next.kind === "err") {
                break;
            }
            out.push(next.value);
        }
        return out;
    }
}
exports.default = BlockBodyShape;


/***/ }),

/***/ "./src/parser/shapes/text.ts":
/*!***********************************!*\
  !*** ./src/parser/shapes/text.ts ***!
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
const abstract_1 = __webpack_require__(/*! ./abstract */ "./src/parser/shapes/abstract.ts");
const tokens_1 = __webpack_require__(/*! ../../read/tokens */ "./src/read/tokens.ts");
const ast = __importStar(__webpack_require__(/*! ../nodes */ "./src/parser/nodes.ts"));
const shape_1 = __webpack_require__(/*! ../shape */ "./src/parser/shape.ts");
class TextShape extends abstract_1.AbstractShape {
    expandFallible(iterator) {
        let next = iterator.peek();
        if (next.isEOF) {
            return shape_1.err(next, "eof");
        }
        let token = next.token;
        if (token.type === tokens_1.TokenType.Text) {
            next.commit();
            return shape_1.ok(ast.text(token.span));
        }
        else {
            return shape_1.err(next, "mismatch");
        }
    }
}
exports.TextShape = TextShape;


/***/ }),

/***/ "./src/parser/shapes/top-level.ts":
/*!****************************************!*\
  !*** ./src/parser/shapes/top-level.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = __webpack_require__(/*! ./abstract */ "./src/parser/shapes/abstract.ts");
const text_1 = __webpack_require__(/*! ./text */ "./src/parser/shapes/text.ts");
class TopLevelShape extends abstract_1.AbstractShape {
    expandFallible(iterator) {
        return new text_1.TextShape().expandFallible(iterator);
    }
}
exports.TopLevelShape = TopLevelShape;


/***/ }),

/***/ "./src/parser/tokens-iterator.ts":
/*!***************************************!*\
  !*** ./src/parser/tokens-iterator.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PeekedToken {
    constructor(iterator, pos) {
        this.iterator = iterator;
        this.pos = pos;
        this.committed = false;
    }
    get isEOF() {
        return this.iterator[TOKENS].length === this.pos;
    }
    commit() {
        if (this.committed) {
            throw new Error(`assert: cannot commit already committed peeked token`);
        }
        this.iterator.commit(this.pos);
    }
    get token() {
        return this.iterator[TOKENS][this.pos];
    }
}
exports.PeekedToken = PeekedToken;
const TOKENS = Symbol("TOKENS");
class TokensIterator {
    constructor(tokens, context, pos = 0) {
        this.context = context;
        this.pos = pos;
        this[TOKENS] = tokens;
    }
    peek() {
        return new PeekedToken(this, this.pos);
    }
    commit(pos) {
        if (this.pos !== pos) {
            throw new Error(`assert: can't commit a peeked token after the iterator advanced`);
        }
        this.pos++;
    }
}
exports.default = TokensIterator;


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
            // if there was a fatal error, don't try other variants
            if (result.kind === "err" && result.fatal) {
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

/***/ "./src/read/combinators/hbs/block.ts":
/*!*******************************************!*\
  !*** ./src/read/combinators/hbs/block.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../../../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
const multi_1 = __webpack_require__(/*! ../../multi */ "./src/read/multi.ts");
const read_1 = __webpack_require__(/*! ../../read */ "./src/read/read.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
const spaced_tokens_1 = __importDefault(__webpack_require__(/*! ./spaced-tokens */ "./src/read/combinators/hbs/spaced-tokens.ts"));
class Block extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "BLOCK";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("BLOCK", OPEN_BLOCK, multi_1.many(read_1.TOP_LEVEL), CLOSE_BLOCK).map(([open, body, close]) => {
            if (!tokens_1.equalPath(open.name, close.name, input.source)) {
                return snippet_1.fatalError(input.forSpan(span_1.range(...close.name)), "mismatch");
            }
            return snippet_1.ok(tokens_1.block({ open, body, close }));
        }));
    }
}
exports.default = Block;
const BLOCK_SPACED_TOKENS = new spaced_tokens_1.default(["as"]);
// tslint:disable-next-line:max-classes-per-file
class OpenBlock extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "OPEN_BLOCK";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("OPEN_BLOCK", combinators_1.tag("{{#"), hbs_1.SIMPLE_PATH, BLOCK_SPACED_TOKENS, combinators_1.maybe(BLOCK_PARAMS), combinators_1.maybe(hbs_1.WS), combinators_1.tag("}}")).map(([open, path, head, params, ws, close]) => snippet_1.ok(tokens_1.openBlock({
            name: path,
            head: [...head, ...(params ? [params] : []), ...(ws ? [ws] : [])],
        }, span_1.range(open, close)))));
    }
}
exports.OpenBlock = OpenBlock;
const OPEN_BLOCK = new OpenBlock();
// tslint:disable-next-line:max-classes-per-file
class BlockParams extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "BLOCK_PARAMS";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("BLOCK_PARAMS", combinators_1.tag("as |"), multi_1.many(combinators_1.any("block param", hbs_1.ID, hbs_1.WS)), combinators_1.tag("|")).map(([open, params, close]) => snippet_1.ok(tokens_1.blockParams(params, span_1.range(open, close)))));
    }
}
const BLOCK_PARAMS = new BlockParams();
// tslint:disable-next-line:max-classes-per-file
class CloseBlock extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "CLOSE_BLOCK";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("CLOSE_BLOCK", combinators_1.tag("{{/"), hbs_1.SIMPLE_PATH, combinators_1.tag("}}")).map(([open, path, close]) => snippet_1.ok(tokens_1.closeBlock(path, span_1.range(open, close)))));
    }
}
exports.CloseBlock = CloseBlock;
const CLOSE_BLOCK = new CloseBlock();


/***/ }),

/***/ "./src/read/combinators/hbs/head.ts":
/*!******************************************!*\
  !*** ./src/read/combinators/hbs/head.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
const id_1 = __importDefault(__webpack_require__(/*! ./id */ "./src/read/combinators/hbs/id.ts"));
const token_1 = __importDefault(__webpack_require__(/*! ./token */ "./src/read/combinators/hbs/token.ts"));
class Head extends base_1.AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
        this.id = new token_1.default(new id_1.default(disallowedKeywords), tokens_1.TokenType.Identifier);
    }
    get name() {
        if (this.disallowedKeywords) {
            return `HEAD • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return "HEAD";
        }
    }
    invoke(input) {
        return input.invoke(combinators_1.any("HEAD", hbs_1.ARG, this.id));
    }
}
exports.default = Head;


/***/ }),

/***/ "./src/read/combinators/hbs/id.ts":
/*!****************************************!*\
  !*** ./src/read/combinators/hbs/id.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
class Id extends base_1.AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
    }
    get name() {
        if (this.disallowedKeywords) {
            return `ID • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return "ID";
        }
    }
    invoke(input) {
        const disallowedKeywords = this.disallowedKeywords;
        if (disallowedKeywords) {
            return input.invoke(combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET").map(snippet => {
                let frag = snippet.fragment;
                if (disallowedKeywords.some(k => frag === k)) {
                    return snippet_1.err(snippet, "disallowed keyword");
                }
                else {
                    return snippet_1.ok(snippet);
                }
            }));
        }
        else {
            return input.invoke(combinators_1.pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u, "ID_SNIPPET"));
        }
    }
}
exports.default = Id;


/***/ }),

/***/ "./src/read/combinators/hbs/interpolate.ts":
/*!*************************************************!*\
  !*** ./src/read/combinators/hbs/interpolate.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../../../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
class Interpolate extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "INTERPOLATE";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("INTERPOLATE", combinators_1.tag("{{"), hbs_1.SPACED_TOKENS, combinators_1.tag("}}")).map(([open, path, close]) => {
            return snippet_1.ok(tokens_1.interpolate(path, span_1.range(open, close)));
        }));
    }
}
exports.default = Interpolate;


/***/ }),

/***/ "./src/read/combinators/hbs/number.ts":
/*!********************************************!*\
  !*** ./src/read/combinators/hbs/number.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../../../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
class SomeNumber extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "NUMBER";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("NUMBER", combinators_1.maybe(combinators_1.tag("-")), combinators_1.pattern(/^[0-9]+/, "digits"), combinators_1.maybe(combinators_1.seq("decimal", combinators_1.tag("."), combinators_1.pattern(/^[0-9]+/, "digits")).map(([, tail]) => snippet_1.ok(tail)))).map(([negative, head, tail]) => snippet_1.ok(tokens_1.numberToken({
            head: head.span,
            tail: tail ? tail.span : null,
            negative: negative ? negative.span : null,
        }, span_1.range(negative, head, tail ? tail : null)))));
    }
}
exports.default = SomeNumber;


/***/ }),

/***/ "./src/read/combinators/hbs/sexp.ts":
/*!******************************************!*\
  !*** ./src/read/combinators/hbs/sexp.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../../../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
class Sexp extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "SEXP";
    }
    invoke(input) {
        return input.invoke(combinators_1.seq("SEXP", combinators_1.tag("("), hbs_1.SPACED_TOKENS, combinators_1.tag(")")).map(([open, path, close]) => snippet_1.ok(tokens_1.sexp(path, span_1.range(open, close)))));
    }
}
exports.default = Sexp;


/***/ }),

/***/ "./src/read/combinators/hbs/simple-path.ts":
/*!*************************************************!*\
  !*** ./src/read/combinators/hbs/simple-path.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const combinator_1 = __webpack_require__(/*! ../../combinator */ "./src/read/combinator.ts");
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
const head_1 = __importDefault(__webpack_require__(/*! ./head */ "./src/read/combinators/hbs/head.ts"));
class SimplePath extends base_1.AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
        this.head = new head_1.default(disallowedKeywords);
    }
    get name() {
        if (this.disallowedKeywords) {
            return `SIMPLE_PATH • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return `SIMPLE_PATH`;
        }
    }
    invoke(input) {
        let result = input.invoke(this.head);
        if (result.kind === "err") {
            return result;
        }
        let [current, head] = result.value;
        let out = [head];
        while (true) {
            if (current.isEOF()) {
                return snippet_1.ok([current, out]);
            }
            let resultDot = current.invoke(hbs_1.DOT, { optional: true });
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
    }
}
exports.default = SimplePath;
// export const SIMPLE_HEAD = combinator(() => any("HEAD", ARG, ID));
// TODO: Allow `[]` or string members
exports.MEMBER = combinator_1.combinator(() => hbs_1.ID);


/***/ }),

/***/ "./src/read/combinators/hbs/spaced-tokens.ts":
/*!***************************************************!*\
  !*** ./src/read/combinators/hbs/spaced-tokens.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const simple_path_1 = __importDefault(__webpack_require__(/*! ./simple-path */ "./src/read/combinators/hbs/simple-path.ts"));
class SpacedTokens extends base_1.AbstractCombinator {
    constructor(disallowedKeywords) {
        super();
        this.disallowedKeywords = disallowedKeywords;
        this.path = new simple_path_1.default(disallowedKeywords);
    }
    get name() {
        if (this.disallowedKeywords) {
            return `SPACED_TOKENS • not ${JSON.stringify(this.disallowedKeywords)}`;
        }
        else {
            return "SPACED_TOKENS";
        }
    }
    invoke(input) {
        let out = [];
        let tk = combinators_1.any("token", hbs_1.wrap(hbs_1.SEXP), hbs_1.wrap(hbs_1.STRING), hbs_1.wrap(hbs_1.NUMBER), hbs_1.NAMED, this.path, hbs_1.wrap(hbs_1.WS));
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
    }
}
exports.default = SpacedTokens;


/***/ }),

/***/ "./src/read/combinators/hbs/string.ts":
/*!********************************************!*\
  !*** ./src/read/combinators/hbs/string.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../../../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
class SomeString extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "STRING";
    }
    invoke(input) {
        return input.invoke(combinators_1.any("QUOTED_STRING", exports.SINGLE_QUOTED, exports.DOUBLE_QUOTED));
    }
}
exports.default = SomeString;
exports.SINGLE_QUOTED = combinators_1.seq("SINGLE_QUOTED", combinators_1.tag(`'`), combinators_1.pattern(/^(\\'|[^'])*/u, "single quote body"), combinators_1.tag(`'`)).map(([open, body, close]) => snippet_1.ok(tokens_1.stringToken({ data: body.span, quote: tokens_1.QuoteType.Single }, span_1.range(open, close))));
exports.DOUBLE_QUOTED = combinators_1.seq("DOUBLE_QUOTED", combinators_1.tag(`"`), combinators_1.pattern(/^(\\"|[^"])*/u, "double quote body"), combinators_1.tag(`"`)).map(([open, body, close]) => snippet_1.ok(tokens_1.stringToken({ data: body.span, quote: tokens_1.QuoteType.Double }, span_1.range(open, close))));


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
        return `token • ${utils_1.combinatorName(this.combinator)}`;
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

/***/ "./src/read/combinators/html/attribute.ts":
/*!************************************************!*\
  !*** ./src/read/combinators/html/attribute.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../../../span */ "./src/span.ts");
const combinator_1 = __webpack_require__(/*! ../../combinator */ "./src/read/combinator.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
const multi_1 = __webpack_require__(/*! ../../multi */ "./src/read/multi.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/read/utils.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
class HTMLAttribute extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "TEXT";
    }
    invoke(input) {
        return input.invoke(combinators_1.pick({
            valued: combinators_1.seq("valued attribute", exports.ANY_ATTR_NAME, hbs_1.EQ, exports.ATTRIBUTE_VALUE),
            bare: exports.ATTRIBUTE_NAME,
        }, {
            valued: ([name, , value]) => {
                return snippet_1.ok(tokens_1.valuedAttr({ name, value }, span_1.range(name, value)));
            },
            bare: value => snippet_1.ok(tokens_1.attrName(value.span)),
        }));
    }
}
exports.default = HTMLAttribute;
exports.ATTRIBUTE = new HTMLAttribute();
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
exports.ATTRIBUTE_NAME = combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u, "ATTRIBUTE_NAME").map(name => snippet_1.ok(tokens_1.attrName(name.span)));
exports.ARG_NAME = combinators_1.seq("ARG_NAME", combinators_1.tag("@"), exports.ATTRIBUTE_NAME).map(([at, attr]) => snippet_1.ok(tokens_1.argName(attr.span, span_1.range(at.span, attr.span))));
exports.ANY_ATTR_NAME = combinators_1.any("ANY_ATTR_NAME", exports.ARG_NAME, exports.ATTRIBUTE_NAME);
exports.DQ_STRING_INTERPOLATE = combinator_1.combinator(() => combinators_1.any("DQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, combinators_1.pattern(/^[^"]+/, `dq text`).map(value => snippet_1.ok(tokens_1.text(value.span)))));
exports.SQ_STRING_INTERPOLATE = combinator_1.combinator(() => combinators_1.any("SQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, combinators_1.pattern(/^[^']+/, `sq text`).map(value => snippet_1.ok(tokens_1.text(value.span)))));
// tslint:disable-next-line:max-classes-per-file
class StringInterpolation extends base_1.AbstractCombinator {
    constructor(combinator) {
        super();
        this.combinator = combinator;
        this.name = "STRING_INTERPOLATION";
    }
    invoke(input) {
        return input.invoke(utils_1.map(multi_1.many(this.combinator), value => snippet_1.ok(tokens_1.stringInterpolation(value, span_1.range(...value)))));
    }
}
exports.StringInterpolation = StringInterpolation;
exports.ATTRIBUTE_VALUE = combinator_1.combinator(() => combinators_1.pick({
    interpolate: hbs_1.INTERPOLATE,
    dq: combinators_1.seq("dq", combinators_1.tag(`"`), new StringInterpolation(exports.DQ_STRING_INTERPOLATE), combinators_1.tag(`"`)),
    sq: combinators_1.seq("sq", combinators_1.tag(`'`), new StringInterpolation(exports.SQ_STRING_INTERPOLATE), combinators_1.tag(`'`)),
    unquoted: combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020>\0"'<=`]+/u, `unquoted contents`),
}, {
    interpolate: interpolate => snippet_1.ok(tokens_1.attrValue({ type: tokens_1.AttributeValueType.Interpolate, value: interpolate }, interpolate.span)),
    dq: ([open, value, close]) => snippet_1.ok(tokens_1.attrValue({
        type: tokens_1.AttributeValueType.DoubleQuoted,
        value,
    }, span_1.range(open, close))),
    sq: ([open, value, close]) => snippet_1.ok(tokens_1.attrValue({
        type: tokens_1.AttributeValueType.SingleQuoted,
        value,
    }, span_1.range(open, close))),
    unquoted: value => snippet_1.ok(tokens_1.attrValue({
        type: tokens_1.AttributeValueType.Unquoted,
        value: tokens_1.stringInterpolation([tokens_1.text(value.span)], value.span),
    }, value.span)),
}));
exports.ATTRIBUTES = combinator_1.combinator(() => utils_1.map(combinators_1.seq("ATTRIBUTES", hbs_1.WS, multi_1.many(combinators_1.any("spaced attribute", hbs_1.WS, hbs_1.INTERPOLATE, exports.ATTRIBUTE))), ([ws, attrs]) => {
    return snippet_1.ok([ws, ...attrs]);
}));


/***/ }),

/***/ "./src/read/combinators/html/end-tag.ts":
/*!**********************************************!*\
  !*** ./src/read/combinators/html/end-tag.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../../../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/read/utils.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
const tag_1 = __webpack_require__(/*! ./tag */ "./src/read/combinators/html/tag.ts");
class HTMLEndTag extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "END_TAG";
    }
    invoke(input) {
        return input.invoke(utils_1.map(combinators_1.seq("END_TAG", combinators_1.tag("</"), tag_1.TAG_OR_COMPONENT_NAME, combinators_1.maybe(hbs_1.WS), combinators_1.tag(">")), ([start, name, trailing, end]) => {
            return snippet_1.ok(tokens_1.endTag({ name, trailing }, span_1.range(start, end)));
        }));
    }
}
exports.default = HTMLEndTag;


/***/ }),

/***/ "./src/read/combinators/html/start-tag.ts":
/*!************************************************!*\
  !*** ./src/read/combinators/html/start-tag.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../../../span */ "./src/span.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/read/utils.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
const attribute_1 = __webpack_require__(/*! ./attribute */ "./src/read/combinators/html/attribute.ts");
const tag_1 = __webpack_require__(/*! ./tag */ "./src/read/combinators/html/tag.ts");
class HTMLStartTag extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "START_TAG";
    }
    invoke(input) {
        return input.invoke(utils_1.map(combinators_1.seq("START_TAG", combinators_1.tag("<"), tag_1.TAG_OR_COMPONENT_NAME, combinators_1.maybe(attribute_1.ATTRIBUTES), combinators_1.maybe(combinators_1.tag("/")), combinators_1.tag(">")), ([start, name, attrs, selfClosing, end]) => {
            return snippet_1.ok(tokens_1.startTag({
                name,
                attrs: attrs || undefined,
                selfClosing: selfClosing ? true : undefined,
            }, span_1.range(start, end)));
        }));
    }
}
exports.default = HTMLStartTag;


/***/ }),

/***/ "./src/read/combinators/html/tag.ts":
/*!******************************************!*\
  !*** ./src/read/combinators/html/tag.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const combinator_1 = __webpack_require__(/*! ../../combinator */ "./src/read/combinator.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./src/read/utils.ts");
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const hbs_1 = __webpack_require__(/*! ../../hbs */ "./src/read/hbs.ts");
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
exports.TAG_NAME = combinator_1.combinator(() => combinators_1.pattern(/^[A-Za-z][^/>\0\s]+/u, "TAG_NAME"));
exports.TAG_NAME_TOKEN = combinator_1.combinator(() => utils_1.map(exports.TAG_NAME, snippet => snippet_1.ok([tokens_1.id(snippet.span)])));
exports.TAG_OR_COMPONENT_NAME = combinator_1.combinator(() => combinators_1.any("tag or component name", hbs_1.SIMPLE_PATH, exports.TAG_NAME_TOKEN));


/***/ }),

/***/ "./src/read/combinators/html/text.ts":
/*!*******************************************!*\
  !*** ./src/read/combinators/html/text.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../../../snippet */ "./src/snippet.ts");
const combinators_1 = __webpack_require__(/*! ../../combinators */ "./src/read/combinators.ts");
const tokens_1 = __webpack_require__(/*! ../../tokens */ "./src/read/tokens.ts");
const base_1 = __webpack_require__(/*! ../base */ "./src/read/combinators/base.ts");
class HTMLText extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "TEXT";
    }
    invoke(input) {
        let result = input.invoke(combinators_1.takeUntil("{{"));
        if (result.kind === "err") {
            return result;
        }
        let [next, value] = result.value;
        return snippet_1.ok([next, tokens_1.text(value.span)]);
    }
}
exports.default = HTMLText;


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
    constructor(name, combinators) {
        super();
        this.name = name;
        this.combinators = combinators;
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
    }
    get name() {
        return JSON.stringify(this.source);
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
let childStack = [];
let root;
function preInvoke({ combinator, snippet, optional, }) {
    let child = {
        combinator,
        preSnippet: snippet,
        optional,
        children: [],
    };
    if (childStack.length !== 0) {
        let last = childStack[childStack.length - 1];
        last.children.push(child);
    }
    childStack.push(child);
}
exports.preInvoke = preInvoke;
function postInvoke(result) {
    let last = childStack[childStack.length - 1];
    last.output = result;
    let row = childStack.pop();
    if (childStack.length === 0) {
        root = row;
    }
}
exports.postInvoke = postInvoke;
// export function row(
//   {
//     result,
//     arrow,
//     combinator,
//     context,
//   }: {
//     result: RowResult;
//     arrow: string;
//     combinator: CombinatorType;
//     context?: string;
//   },
//   a: any,
//   b: string
// ) {
//   let name = combinatorName(combinator);
//   if (context) {
//     name = `${context}: ${name}`;
//   }
//   table.push({
//     style: { result, kind: combinatorDebugType(combinator) },
//     data: [arrow, name, a, b],
//   });
// }
// export function snippetStyle(style: RowStyle) {
//   switch (style.result) {
//     case "start":
//       return "color: #333";
//     case "success":
//       return "color: green";
//     case "error":
//       return "color: red";
//   }
// }
// export function armStyle(style: RowStyle) {
//   switch (style.result) {
//     case "start":
//       switch (style.kind) {
//         case "transparent":
//         case "arm":
//           return "color: #bbb";
//         case "normal":
//           return "color: #333";
//       }
//     case "success":
//       return "color: green";
//     case "error":
//       return "color: red";
//   }
// }
function outputStyle({ output, optional }, weight) {
    if (output === undefined) {
        throw new Error(`assert: unexpected undefined output (should be a result)`);
    }
    switch (output.kind) {
        case "ok":
            return `${SUCCESS};${weight}`;
        case "err": {
            if (optional) {
                return OPTIONAL;
            }
            else {
                return `${ERROR};${weight}`;
            }
        }
    }
}
exports.outputStyle = outputStyle;
function outputString(output) {
    if (output === undefined) {
        throw new Error(`assert: unexpected undefined output (should be a result)`);
    }
    switch (output.kind) {
        case "ok":
            return `${logger_1.formatDebuggable(output.value[1])}%c`;
        case "err":
            return `${output.fatal ? "fatal " : ""}error: ${output.reason} %c@ ${output.snippet.fmt()}`;
    }
}
exports.outputString = outputString;
function afterSnippet(output) {
    if (output === undefined) {
        throw new Error(`assert: unexpected undefined output (should be a result)`);
    }
    switch (output.kind) {
        case "ok":
            return output.value[0];
        case "err":
            return output.snippet;
    }
}
exports.afterSnippet = afterSnippet;
function trunc(snippet) {
    let rest = snippet.sliceRest;
    if (rest.length > 13) {
        return `${rest.slice(0, 10)}...`;
    }
    else {
        return rest.padEnd(13);
    }
}
exports.trunc = trunc;
const ERROR = "color: red";
const SUCCESS = "color: green";
const NORMAL = "color: #333";
const OPTIONAL = "color: #999";
function printDebug(indent = 0, nestedError = 0, parentStatus, row = root) {
    if (row === undefined) {
        // tslint:disable-next-line:no-console
        console.log(`%cassert: unexpected undefined row`, ERROR);
        return;
    }
    let context = row.combinator.name;
    let afterPad = Math.max(60 - indent - context.length - nestedError, 0);
    let inErrorHere = row.output &&
        row.output.kind === "err" &&
        row.children.length > 0 &&
        indent !== 0;
    let currentStatus;
    if (row.output && row.output.kind === "err") {
        if (row.optional) {
            currentStatus = "optional";
        }
        else {
            currentStatus = "error";
        }
    }
    else {
        currentStatus = "success";
    }
    let weight = parentStatus === currentStatus
        ? "font-weight: normal"
        : "font-weight: bold";
    if (inErrorHere) {
        // tslint:disable-next-line:no-console
        console.groupCollapsed(`${String(indent).padEnd(3)}%c${" ".repeat(indent)}%c${context}%c${" ".repeat(afterPad)}| ${trunc(row.preSnippet)} | ${trunc(afterSnippet(row.output))} | %c${outputString(row.output)}`, NORMAL, outputStyle(row, weight), NORMAL, outputStyle(row, weight), NORMAL);
        nestedError += 2;
    }
    else {
        // tslint:disable-next-line:no-console
        console.log(`${String(indent).padEnd(3)}%c${" ".repeat(indent)}%c${context}%c${" ".repeat(afterPad)}| ${trunc(row.preSnippet)} | ${trunc(afterSnippet(row.output))} | %c${outputString(row.output)}`, NORMAL, outputStyle(row, weight), NORMAL, outputStyle(row, weight), NORMAL);
    }
    for (let child of row.children) {
        printDebug(indent + 1, nestedError, currentStatus, child);
    }
    if (inErrorHere) {
        console.groupEnd();
    }
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
const combinator_1 = __webpack_require__(/*! ./combinator */ "./src/read/combinator.ts");
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const block_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/block */ "./src/read/combinators/hbs/block.ts"));
const interpolate_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/interpolate */ "./src/read/combinators/hbs/interpolate.ts"));
const number_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/number */ "./src/read/combinators/hbs/number.ts"));
const sexp_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/sexp */ "./src/read/combinators/hbs/sexp.ts"));
const simple_path_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/simple-path */ "./src/read/combinators/hbs/simple-path.ts"));
const spaced_tokens_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/spaced-tokens */ "./src/read/combinators/hbs/spaced-tokens.ts"));
const string_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/string */ "./src/read/combinators/hbs/string.ts"));
const token_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/token */ "./src/read/combinators/hbs/token.ts"));
const wrap_1 = __importDefault(__webpack_require__(/*! ./combinators/wrap */ "./src/read/combinators/wrap.ts"));
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
const id_1 = __importDefault(__webpack_require__(/*! ./combinators/hbs/id */ "./src/read/combinators/hbs/id.ts"));
exports.token = (c, type) => new token_1.default(c, type);
exports.wrap = (c) => new wrap_1.default(c);
exports.WS = exports.token(combinators_1.pattern(/^[\u0009\u000A\u000C\u0020]+/u, "WS"), tokens_1.TokenType.WS);
exports.STRING = new string_1.default();
exports.NUMBER = new number_1.default();
exports.SEXP = new sexp_1.default();
exports.NAMED = combinator_1.combinator(() => combinators_1.seq("NAMED", exports.ID, exports.EQ, exports.EXPRESSION));
exports.SIMPLE_PATH = new simple_path_1.default();
exports.SPACED_TOKENS = new spaced_tokens_1.default();
exports.BLOCK = new block_1.default();
exports.INTERPOLATE = new interpolate_1.default();
const ID_SNIPPET = new id_1.default();
exports.ID = exports.token(ID_SNIPPET, tokens_1.TokenType.Identifier);
exports.DOT = exports.token(combinators_1.tag("."), tokens_1.TokenType.Dot);
exports.EQ = exports.token(combinators_1.tag("="), tokens_1.TokenType.Eq);
exports.ARG = utils_1.map(combinators_1.seq("@id", combinators_1.tag("@"), ID_SNIPPET), ([at, id]) => snippet_1.ok(tokens_1.arg(span_1.range(at, id))));
exports.EXPRESSION = combinator_1.combinator(() => combinators_1.any("EXPRESSION", exports.SEXP, exports.SIMPLE_PATH, exports.STRING, exports.NUMBER));


/***/ }),

/***/ "./src/read/html.ts":
/*!**************************!*\
  !*** ./src/read/html.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
const span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
const combinator_1 = __webpack_require__(/*! ./combinator */ "./src/read/combinator.ts");
const combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
const start_tag_1 = __importDefault(__webpack_require__(/*! ./combinators/html/start-tag */ "./src/read/combinators/html/start-tag.ts"));
const text_1 = __importDefault(__webpack_require__(/*! ./combinators/html/text */ "./src/read/combinators/html/text.ts"));
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
const end_tag_1 = __importDefault(__webpack_require__(/*! ./combinators/html/end-tag */ "./src/read/combinators/html/end-tag.ts"));
exports.TEXT = new text_1.default();
exports.START_TAG = new start_tag_1.default();
exports.END_TAG = new end_tag_1.default();
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
    invoke(c, input, { forceTransparent, optional, } = {}) {
        let logged = this.enableLogging && !isTransparent(c) && !forceTransparent;
        if (logged) {
            debug_1.preInvoke({ combinator: c, snippet: input, optional: !!optional });
            debug_1.indent();
        }
        let result = c.invoke(input);
        if (logged) {
            debug_1.outdent();
            debug_1.postInvoke(result);
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
                if (count++ > 1000) {
                    return snippet_1.err(input, "likely infinite loop");
                }
                if (current.isEOF()) {
                    return snippet_1.ok([current.rest, out]);
                }
                let iterate = current.invoke(utils_1.present(source));
                if (iterate.kind === "err") {
                    // if we encountered a fatal error, the entire `many`
                    // is an error
                    if (iterate.fatal) {
                        return iterate;
                    }
                    else {
                        return snippet_1.ok([current.rest, out]);
                    }
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
const html_1 = __webpack_require__(/*! ./html */ "./src/read/html.ts");
const multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
const tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
const hbs_1 = __webpack_require__(/*! ./hbs */ "./src/read/hbs.ts");
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
        case tokens_1.TokenType.Dot:
        case tokens_1.TokenType.Eq:
        case tokens_1.TokenType.Identifier:
        case tokens_1.TokenType.WS:
        case tokens_1.TokenType.Text:
        case tokens_1.TokenType.AttributeName:
            return [span_1.slice(token.span, source)];
        case tokens_1.TokenType.String: {
            let quote = token.quote === tokens_1.QuoteType.Single ? `'` : `"`;
            return [quote, span_1.slice(token.data, source), quote];
        }
        case tokens_1.TokenType.Number: {
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
        case tokens_1.TokenType.ArgName:
            return ["@", span_1.slice(token.name, source)];
        case tokens_1.TokenType.AttributeValue:
            return serializeAttributeValue(token, source);
        case tokens_1.TokenType.Argument:
            return ["@", span_1.slice(token.name, source)];
        case tokens_1.TokenType.Sexp:
            return ["(", ...serializeList(token.children, source), ")"];
        case tokens_1.TokenType.Interpolate:
            return ["{{", ...serializeList(token.children, source), "}}"];
        case tokens_1.TokenType.TrustedInterpolate:
            return ["{{{", ...serializeList(token.children, source), "}}}"];
        case tokens_1.TokenType.Block:
            return [
                ...serializeNode(token.open, source),
                ...serializeList(token.body, source),
                ...serializeNode(token.close, source),
            ];
        case tokens_1.TokenType.OpenBlock:
            return [
                "{{#",
                ...serializeList(token.name, source),
                ...serializeList(token.head, source),
                "}}",
            ];
        case tokens_1.TokenType.BlockParams:
            return ["as |", ...serializeList(token.params, source), "|"];
        case tokens_1.TokenType.CloseBlock:
            return ["{{/", ...serializeList(token.name, source), "}}"];
        case tokens_1.TokenType.Comment:
            return ["<!--", span_1.slice(token.data, source), "-->"];
        case tokens_1.TokenType.StartTag:
            return [
                "<",
                ...serializeList(token.name, source),
                ...serializeList(token.attributes, source),
                ">",
            ];
        case tokens_1.TokenType.EndTag:
            return [
                "</",
                ...serializeList(token.name, source),
                ...serializeNode(token.trailing, source),
                ">",
            ];
        case tokens_1.TokenType.ValuedAttribute:
            return [
                ...serializeNode(token.name, source),
                "=",
                ...serializeNode(token.value, source),
            ];
        case tokens_1.TokenType.StringInterpolation:
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
        case tokens_1.AttributeValueType.SingleQuoted:
            return `'`;
        case tokens_1.AttributeValueType.DoubleQuoted:
            return `"`;
        default:
            return "";
    }
}
function serializeList(tokens, source) {
    if (tokens === null) {
        return [];
    }
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
    return tok.map(token => token(builder));
}
exports.buildPresentTokens = buildPresentTokens;
function str(name) {
    return builder => {
        let start = builder.consume(name[0]);
        let data = builder.consume(name.slice(1, -1));
        let end = builder.consume(name.slice(-1));
        let quote = name[0] === `'` ? tokens.QuoteType.Single : tokens.QuoteType.Double;
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
function block(name, head, ...body) {
    let curriedName = typeof name === "string" ? [id(name)] : name;
    return builder => {
        let openToken = builder.consume("{{#");
        let nameTokens = buildTokens(curriedName, builder);
        let headTokens = buildTokens(head, builder);
        let endOpen = builder.consume("}}");
        let bodyTokens = body.map(tok => tok(builder));
        let close = builder.consume("{{/");
        let closeName = buildTokens(curriedName, builder);
        let endClose = builder.consume("}}");
        return tokens.block({
            open: tokens.openBlock({
                name: nameTokens,
                head: headTokens,
            }, span_1.range(openToken, endOpen)),
            body: bodyTokens,
            close: tokens.closeBlock(closeName, span_1.range(close, endClose)),
        });
    };
}
exports.block = block;
function as(...params) {
    return builder => {
        let start = builder.consume("as |");
        let head = params.slice(0, -1);
        let tail = params.slice(-1)[0];
        let tokenList = head.flatMap(param => typeof param === "function"
            ? [param(builder)]
            : [id(param)(builder), exports.sp(builder)]);
        tokenList.push(id(tail)(builder));
        let end = builder.consume("|");
        return tokens.blockParams(tokenList, span_1.range(start, end));
    };
}
exports.as = as;
function buildTokens(input, builder) {
    return input.map(tok => tok(builder));
}
function interpolate(...children) {
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
        let value = interpolate(...tokenList)(builder);
        return tokens.attrValue({
            type: tokens.AttributeValueType.Interpolate,
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
                            type: tokens.AttributeValueType.DoubleQuoted,
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
                            type: tokens.AttributeValueType.SingleQuoted,
                            value: interpolation,
                        }, span_1.range(quoteStart, quoteEnd));
                        break;
                    }
                    default: {
                        let valueSpan = builder.consume(rawValue);
                        let interpolation = tokens.stringInterpolation([tokens.text(valueSpan)], valueSpan);
                        valueToken = tokens.attrValue({
                            type: tokens.AttributeValueType.Unquoted,
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
            return tokens.AttributeValueType.DoubleQuoted;
        case `'`:
            return tokens.AttributeValueType.SingleQuoted;
        default:
            return tokens.AttributeValueType.Unquoted;
    }
}
function root(...children) {
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
/**
 * Steps for creating a new token type:
 *
 * 1. add a variant to TokenType
 * 2. create an interface {Name}Token
 * 3. add the new token to LeafTokenMap or TokenMap
 * 4. update serializeNode to serialize the new token
 * 5. add a function to construct the new token (unless it's always nested
 *    inside another token like `BlockParams`)
 * 6. update token-builder.ts to support building the new token
 */
var TokenType;
(function (TokenType) {
    TokenType["Root"] = "Root";
    TokenType["Interpolate"] = "Interpolate";
    TokenType["TrustedInterpolate"] = "TrustedInterpolate";
    // TODO: Either we should have Block and Element or StartBlock/EndBlock and StartElement/EndElement
    TokenType["Block"] = "Block";
    TokenType["BlockParams"] = "BlockParams";
    TokenType["OpenBlock"] = "OpenBlock";
    TokenType["CloseBlock"] = "CloseBlock";
    TokenType["Sexp"] = "Sexp";
    TokenType["Identifier"] = "Identifier";
    TokenType["Argument"] = "Argument";
    TokenType["Dot"] = "Dot";
    TokenType["Eq"] = "Eq";
    TokenType["WS"] = "WS";
    TokenType["String"] = "String";
    TokenType["Number"] = "Number";
    // HTML
    TokenType["Text"] = "Text";
    TokenType["Comment"] = "Comment";
    TokenType["StartTag"] = "StartTag";
    TokenType["EndTag"] = "EndTag";
    TokenType["ArgName"] = "ArgName";
    TokenType["AttributeName"] = "AttributeName";
    TokenType["AttributeValue"] = "AttributeValue";
    TokenType["ValuedAttribute"] = "ValuedAttribute";
    TokenType["StringInterpolation"] = "StringInterpolation";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
function leaf(type) {
    return span => ({ type, span });
}
exports.leaf = leaf;
exports.id = leaf(TokenType.Identifier);
exports.dot = leaf(TokenType.Dot);
exports.eq = leaf(TokenType.Eq);
exports.ws = leaf(TokenType.WS);
exports.text = leaf(TokenType.Text);
exports.attrName = leaf(TokenType.AttributeName);
var QuoteType;
(function (QuoteType) {
    QuoteType[QuoteType["Single"] = 0] = "Single";
    QuoteType[QuoteType["Double"] = 1] = "Double";
})(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
function stringToken({ data, quote }, span) {
    return {
        type: TokenType.String,
        span,
        data,
        quote,
    };
}
exports.stringToken = stringToken;
function numberToken({ head, tail, negative, }, span) {
    return {
        type: TokenType.Number,
        span,
        negative,
        head,
        tail,
    };
}
exports.numberToken = numberToken;
function comment(data, span) {
    return {
        type: TokenType.Comment,
        data,
        span,
    };
}
exports.comment = comment;
function arg(span) {
    return {
        type: TokenType.Argument,
        name: { start: span.start + 1, end: span.end },
        span,
    };
}
exports.arg = arg;
function equalPath(leftTokens, rightTokens, source) {
    if (leftTokens.length !== rightTokens.length) {
        return false;
    }
    return leftTokens.every((left, index) => {
        let right = rightTokens[index];
        if (left.type !== right.type) {
            return false;
        }
        switch (left.type) {
            case TokenType.ArgName:
                return (span_1.slice(left.name, source) ===
                    span_1.slice(right.name, source));
            case TokenType.Identifier:
                return (span_1.slice(left.span, source) ===
                    span_1.slice(right.span, source));
            case TokenType.Dot:
                return true;
            default:
                throw new Error(`assert: unexpected token type ${left.type}`);
        }
    });
}
exports.equalPath = equalPath;
function blockParams(params, span) {
    return {
        type: TokenType.BlockParams,
        span,
        params,
    };
}
exports.blockParams = blockParams;
function block({ open, body, close }) {
    return {
        type: TokenType.Block,
        span: span_1.range(open.span, close.span),
        open,
        body,
        close,
    };
}
exports.block = block;
function openBlock({ name, head }, span) {
    return {
        type: TokenType.OpenBlock,
        span,
        name,
        head,
    };
}
exports.openBlock = openBlock;
function closeBlock(name, span) {
    return {
        type: TokenType.CloseBlock,
        span,
        name,
    };
}
exports.closeBlock = closeBlock;
var AttributeValueType;
(function (AttributeValueType) {
    AttributeValueType["Interpolate"] = "Interpolate";
    AttributeValueType["Unquoted"] = "Unquoted";
    AttributeValueType["SingleQuoted"] = "SingleQuoted";
    AttributeValueType["DoubleQuoted"] = "DoubleQuoted";
})(AttributeValueType = exports.AttributeValueType || (exports.AttributeValueType = {}));
function argName(name, span) {
    return {
        type: TokenType.ArgName,
        name,
        span,
    };
}
exports.argName = argName;
function stringInterpolation(parts, span) {
    return {
        type: TokenType.StringInterpolation,
        span,
        parts,
    };
}
exports.stringInterpolation = stringInterpolation;
function isInterpolateAttribute(input) {
    return input.valueType === AttributeValueType.Interpolate;
}
exports.isInterpolateAttribute = isInterpolateAttribute;
function attrValue({ type, value }, span) {
    return {
        type: TokenType.AttributeValue,
        span,
        valueType: type,
        value,
    };
}
exports.attrValue = attrValue;
function valuedAttr({ name, value }, span) {
    return {
        type: TokenType.ValuedAttribute,
        span,
        name,
        value,
    };
}
exports.valuedAttr = valuedAttr;
function startTag({ name, attrs, selfClosing }, span) {
    return {
        type: TokenType.StartTag,
        span,
        name,
        attributes: attrs || [],
        selfClosing,
    };
}
exports.startTag = startTag;
function endTag({ name, trailing }, span) {
    return {
        type: TokenType.EndTag,
        span,
        trailing: trailing ? trailing : null,
        name,
    };
}
exports.endTag = endTag;
function sexp(children, span) {
    return {
        type: TokenType.Sexp,
        span,
        children,
    };
}
exports.sexp = sexp;
function interpolate(children, span) {
    return {
        type: TokenType.Interpolate,
        span,
        children,
    };
}
exports.interpolate = interpolate;
function trustedInterpolate(children, span) {
    return {
        type: TokenType.TrustedInterpolate,
        span,
        children,
    };
}
exports.trustedInterpolate = trustedInterpolate;
function root(children, span) {
    return {
        type: TokenType.Root,
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
        kind: "transparent",
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
function join(...items) {
    return items.filter(i => i === null || i === undefined);
}
exports.join = join;


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
    forSpan(span) {
        return new Snippet(this.source, span.start, span.end - span.start, this.logger);
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
function fatalError(snippet, reason) {
    return {
        kind: "err",
        snippet,
        reason,
        fatal: true,
    };
}
exports.fatalError = fatalError;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIvbm9kZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnNlci9wYXJzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VyL3NoYXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIvc2hhcGVzL2Fic3RyYWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXJzZXIvc2hhcGVzL2Jsb2NrLWJvZHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnNlci9zaGFwZXMvdGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFyc2VyL3NoYXBlcy90b3AtbGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhcnNlci90b2tlbnMtaXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9hbnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9oYnMvYmxvY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvaGJzL2hlYWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvaGJzL2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL2hicy9pbnRlcnBvbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9oYnMvbnVtYmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL2hicy9zZXhwLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL2hicy9zaW1wbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9oYnMvc3BhY2VkLXRva2Vucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9oYnMvc3RyaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL2hicy90b2tlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9odG1sL2F0dHJpYnV0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9odG1sL2VuZC10YWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvaHRtbC9zdGFydC10YWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvaHRtbC90YWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvaHRtbC90ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL21heWJlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL3BhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvcGljay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9zZXEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvdGFnLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL3Rha2UtdW50aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvdGFrZS13aGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy93cmFwLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2RlYnVnLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2hicy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9odG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9tdWx0aS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9yZWFkLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL3NlcmlhbGl6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbi1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL3Rva2Vucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc25pcHBldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3Bhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQ0FB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QThDLGNBQWM7QUFDNUQ7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNvbWJpbmF0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvY29tYmluYXRvcnNcIikpO1xyXG5leHBvcnRzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XHJcbnZhciBsb2dnZXJfMSA9IHJlcXVpcmUoXCIuL3JlYWQvbG9nZ2VyXCIpO1xyXG5leHBvcnRzLkxvZ2dlciA9IGxvZ2dlcl8xLkxvZ2dlcjtcclxuY29uc3QgbXVsdGkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC9tdWx0aVwiKSk7XHJcbmV4cG9ydHMubXVsdGkgPSBtdWx0aTtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc25pcHBldFwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvaGJzXCIpKTtcclxuY29uc3QgdG9rZW5zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvdG9rZW5zXCIpKTtcclxuZXhwb3J0cy50b2tlbnMgPSB0b2tlbnM7XHJcbmNvbnN0IGFzdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9wYXJzZXIvbm9kZXNcIikpO1xyXG5leHBvcnRzLmFzdCA9IGFzdDtcclxuX19leHBvcnQocmVxdWlyZShcIi4vc3BhblwiKSk7XHJcbmNvbnN0IGIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC90b2tlbi1idWlsZGVyXCIpKTtcclxuZXhwb3J0cy5iID0gYjtcclxuY29uc3QgdXRpbHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC91dGlsc1wiKSk7XHJcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVhZC9zZXJpYWxpemVcIikpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3JlYWRcIikpO1xyXG52YXIgcGFyc2VfMSA9IHJlcXVpcmUoXCIuL3BhcnNlci9wYXJzZVwiKTtcclxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXzEuZGVmYXVsdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbnZhciBOb2RlVHlwZTtcclxuKGZ1bmN0aW9uIChOb2RlVHlwZSkge1xyXG4gICAgTm9kZVR5cGVbXCJSb290XCJdID0gXCJSb290XCI7XHJcbiAgICBOb2RlVHlwZVtcIlRleHRcIl0gPSBcIlRleHRcIjtcclxufSkoTm9kZVR5cGUgPSBleHBvcnRzLk5vZGVUeXBlIHx8IChleHBvcnRzLk5vZGVUeXBlID0ge30pKTtcclxuZnVuY3Rpb24gcm9vdChjaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBOb2RlVHlwZS5Sb290LFxyXG4gICAgICAgIHNwYW46IHNwYW5fMS5yYW5nZSguLi5jaGlsZHJlbiksXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbmZ1bmN0aW9uIHRleHQoc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBOb2RlVHlwZS5UZXh0LFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudGV4dCA9IHRleHQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYXN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL25vZGVzXCIpKTtcclxuY29uc3QgYmxvY2tfYm9keV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NoYXBlcy9ibG9jay1ib2R5XCIpKTtcclxuY29uc3QgdG9rZW5zX2l0ZXJhdG9yXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdG9rZW5zLWl0ZXJhdG9yXCIpKTtcclxuZnVuY3Rpb24gcGFyc2UoaW5wdXQsIHNvdXJjZSkge1xyXG4gICAgbGV0IGl0ZXJhdG9yID0gbmV3IHRva2Vuc19pdGVyYXRvcl8xLmRlZmF1bHQoaW5wdXQuY2hpbGRyZW4sIHsgc291cmNlIH0pO1xyXG4gICAgbGV0IHRvcExldmVsID0gbmV3IGJsb2NrX2JvZHlfMS5kZWZhdWx0KCk7XHJcbiAgICByZXR1cm4gYXN0LnJvb3QodG9wTGV2ZWwuZXhwYW5kSW5mYWxsaWJsZShpdGVyYXRvcikpO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBvayh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHsga2luZDogXCJva1wiLCB2YWx1ZSB9O1xyXG59XHJcbmV4cG9ydHMub2sgPSBvaztcclxuZnVuY3Rpb24gZXJyKHRva2VuLCByZWFzb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICByZWFzb24sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZXJyID0gZXJyO1xyXG5mdW5jdGlvbiBmYXRhbEVycm9yKHRva2VuLCByZWFzb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICByZWFzb24sXHJcbiAgICAgICAgZmF0YWw6IHRydWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZmF0YWxFcnJvciA9IGZhdGFsRXJyb3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEFic3RyYWN0U2hhcGUge1xyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RTaGFwZSA9IEFic3RyYWN0U2hhcGU7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxyXG5jbGFzcyBBYnN0cmFjdEluZmFsbGlibGVTaGFwZSB7XHJcbn1cclxuZXhwb3J0cy5BYnN0cmFjdEluZmFsbGlibGVTaGFwZSA9IEFic3RyYWN0SW5mYWxsaWJsZVNoYXBlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhYnN0cmFjdF8xID0gcmVxdWlyZShcIi4vYWJzdHJhY3RcIik7XHJcbmNvbnN0IHRvcF9sZXZlbF8xID0gcmVxdWlyZShcIi4vdG9wLWxldmVsXCIpO1xyXG5jbGFzcyBCbG9ja0JvZHlTaGFwZSBleHRlbmRzIGFic3RyYWN0XzEuQWJzdHJhY3RJbmZhbGxpYmxlU2hhcGUge1xyXG4gICAgZXhwYW5kSW5mYWxsaWJsZShpdGVyYXRvcikge1xyXG4gICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IG5ldyB0b3BfbGV2ZWxfMS5Ub3BMZXZlbFNoYXBlKCkuZXhwYW5kRmFsbGlibGUoaXRlcmF0b3IpO1xyXG4gICAgICAgICAgICBpZiAobmV4dC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXQucHVzaChuZXh0LnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBCbG9ja0JvZHlTaGFwZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhYnN0cmFjdF8xID0gcmVxdWlyZShcIi4vYWJzdHJhY3RcIik7XHJcbmNvbnN0IHRva2Vuc18xID0gcmVxdWlyZShcIi4uLy4uL3JlYWQvdG9rZW5zXCIpO1xyXG5jb25zdCBhc3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL25vZGVzXCIpKTtcclxuY29uc3Qgc2hhcGVfMSA9IHJlcXVpcmUoXCIuLi9zaGFwZVwiKTtcclxuY2xhc3MgVGV4dFNoYXBlIGV4dGVuZHMgYWJzdHJhY3RfMS5BYnN0cmFjdFNoYXBlIHtcclxuICAgIGV4cGFuZEZhbGxpYmxlKGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgbGV0IG5leHQgPSBpdGVyYXRvci5wZWVrKCk7XHJcbiAgICAgICAgaWYgKG5leHQuaXNFT0YpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNoYXBlXzEuZXJyKG5leHQsIFwiZW9mXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdG9rZW4gPSBuZXh0LnRva2VuO1xyXG4gICAgICAgIGlmICh0b2tlbi50eXBlID09PSB0b2tlbnNfMS5Ub2tlblR5cGUuVGV4dCkge1xyXG4gICAgICAgICAgICBuZXh0LmNvbW1pdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2hhcGVfMS5vayhhc3QudGV4dCh0b2tlbi5zcGFuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc2hhcGVfMS5lcnIobmV4dCwgXCJtaXNtYXRjaFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5UZXh0U2hhcGUgPSBUZXh0U2hhcGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFic3RyYWN0XzEgPSByZXF1aXJlKFwiLi9hYnN0cmFjdFwiKTtcclxuY29uc3QgdGV4dF8xID0gcmVxdWlyZShcIi4vdGV4dFwiKTtcclxuY2xhc3MgVG9wTGV2ZWxTaGFwZSBleHRlbmRzIGFic3RyYWN0XzEuQWJzdHJhY3RTaGFwZSB7XHJcbiAgICBleHBhbmRGYWxsaWJsZShpdGVyYXRvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgdGV4dF8xLlRleHRTaGFwZSgpLmV4cGFuZEZhbGxpYmxlKGl0ZXJhdG9yKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlRvcExldmVsU2hhcGUgPSBUb3BMZXZlbFNoYXBlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQZWVrZWRUb2tlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpdGVyYXRvciwgcG9zKSB7XHJcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGl0ZXJhdG9yO1xyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMuY29tbWl0dGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNFT0YoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3JbVE9LRU5TXS5sZW5ndGggPT09IHRoaXMucG9zO1xyXG4gICAgfVxyXG4gICAgY29tbWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1pdHRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFzc2VydDogY2Fubm90IGNvbW1pdCBhbHJlYWR5IGNvbW1pdHRlZCBwZWVrZWQgdG9rZW5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVyYXRvci5jb21taXQodGhpcy5wb3MpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHRva2VuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yW1RPS0VOU11bdGhpcy5wb3NdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUGVla2VkVG9rZW4gPSBQZWVrZWRUb2tlbjtcclxuY29uc3QgVE9LRU5TID0gU3ltYm9sKFwiVE9LRU5TXCIpO1xyXG5jbGFzcyBUb2tlbnNJdGVyYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0b2tlbnMsIGNvbnRleHQsIHBvcyA9IDApIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXNbVE9LRU5TXSA9IHRva2VucztcclxuICAgIH1cclxuICAgIHBlZWsoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQZWVrZWRUb2tlbih0aGlzLCB0aGlzLnBvcyk7XHJcbiAgICB9XHJcbiAgICBjb21taXQocG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9zICE9PSBwb3MpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhc3NlcnQ6IGNhbid0IGNvbW1pdCBhIHBlZWtlZCB0b2tlbiBhZnRlciB0aGUgaXRlcmF0b3IgYWR2YW5jZWRgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3MrKztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBUb2tlbnNJdGVyYXRvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gY29tYmluYXRvcihmdW5jKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwid3JhcHBlclwiLFxyXG4gICAgICAgIGtpbmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShmdW5jKCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFueV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2FueVwiKSk7XHJcbmNvbnN0IHBhdHRlcm5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9wYXR0ZXJuXCIpKTtcclxuY29uc3Qgc2VxXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvc2VxXCIpKTtcclxuY29uc3QgdGFnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvdGFnXCIpKTtcclxuY29uc3QgdGFrZV91bnRpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL3Rha2UtdW50aWxcIikpO1xyXG5jb25zdCB0YWtlX3doaWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvdGFrZS13aGlsZVwiKSk7XHJcbmNvbnN0IHBpY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9waWNrXCIpKTtcclxuY29uc3QgbWF5YmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9tYXliZVwiKSk7XHJcbmV4cG9ydHMudGFnID0gKHNvdXJjZSkgPT4gbmV3IHRhZ18xLmRlZmF1bHQoc291cmNlKTtcclxuZXhwb3J0cy5wYXR0ZXJuID0gKHBhdCwgbmFtZSkgPT4gbmV3IHBhdHRlcm5fMS5kZWZhdWx0KG5hbWUsIHBhdCk7XHJcbmV4cG9ydHMudGFrZVVudGlsID0gKHBhdCkgPT4gbmV3IHRha2VfdW50aWxfMS5kZWZhdWx0KHBhdCk7XHJcbmV4cG9ydHMudGFrZVdoaWxlID0gKHBhdCkgPT4gbmV3IHRha2Vfd2hpbGVfMS5kZWZhdWx0KHBhdCk7XHJcbmV4cG9ydHMuc2VxID0gKGRlc2MsIC4uLmNvbWJpbmF0b3JzKSA9PiBuZXcgc2VxXzEuZGVmYXVsdChkZXNjLCBjb21iaW5hdG9ycyk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbmV4cG9ydHMuYW55ID0gKGRlc2MsIC4uLmNvbWJpbmF0b3JzKSA9PiBuZXcgYW55XzEuZGVmYXVsdChkZXNjLCBjb21iaW5hdG9ycyk7XHJcbmV4cG9ydHMucGljayA9IChjb21iaW5hdG9ycywgY2FsbGJhY2tzKSA9PiBuZXcgcGlja18xLmRlZmF1bHQoY29tYmluYXRvcnMsIGNhbGxiYWNrcyk7XHJcbmV4cG9ydHMubWF5YmUgPSAoYykgPT4gbmV3IG1heWJlXzEuZGVmYXVsdChjKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNsYXNzIEFueSBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZGVzYywgY29tYmluYXRvcnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbnkg4oCiICR7dGhpcy5kZXNjfWA7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5jb21iaW5hdG9ycykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY3VycmVudC5pbnZva2UoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdhcyBhIGZhdGFsIGVycm9yLCBkb24ndCB0cnkgb3RoZXIgdmFyaWFudHNcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiICYmIHJlc3VsdC5mYXRhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJhbnlcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQW55O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xyXG5jbGFzcyBBYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgbWFwKG1hcHBlcikge1xyXG4gICAgICAgIHJldHVybiB1dGlsc18xLm1hcCh0aGlzLCBtYXBwZXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWJzdHJhY3RDb21iaW5hdG9yID0gQWJzdHJhY3RDb21iaW5hdG9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tYmluYXRvcnNcIik7XHJcbmNvbnN0IGhic18xID0gcmVxdWlyZShcIi4uLy4uL2hic1wiKTtcclxuY29uc3QgbXVsdGlfMSA9IHJlcXVpcmUoXCIuLi8uLi9tdWx0aVwiKTtcclxuY29uc3QgcmVhZF8xID0gcmVxdWlyZShcIi4uLy4uL3JlYWRcIik7XHJcbmNvbnN0IHRva2Vuc18xID0gcmVxdWlyZShcIi4uLy4uL3Rva2Vuc1wiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4uL2Jhc2VcIik7XHJcbmNvbnN0IHNwYWNlZF90b2tlbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zcGFjZWQtdG9rZW5zXCIpKTtcclxuY2xhc3MgQmxvY2sgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJCTE9DS1wiO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShjb21iaW5hdG9yc18xLnNlcShcIkJMT0NLXCIsIE9QRU5fQkxPQ0ssIG11bHRpXzEubWFueShyZWFkXzEuVE9QX0xFVkVMKSwgQ0xPU0VfQkxPQ0spLm1hcCgoW29wZW4sIGJvZHksIGNsb3NlXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRva2Vuc18xLmVxdWFsUGF0aChvcGVuLm5hbWUsIGNsb3NlLm5hbWUsIGlucHV0LnNvdXJjZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZmF0YWxFcnJvcihpbnB1dC5mb3JTcGFuKHNwYW5fMS5yYW5nZSguLi5jbG9zZS5uYW1lKSksIFwibWlzbWF0Y2hcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5ibG9jayh7IG9wZW4sIGJvZHksIGNsb3NlIH0pKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQmxvY2s7XHJcbmNvbnN0IEJMT0NLX1NQQUNFRF9UT0tFTlMgPSBuZXcgc3BhY2VkX3Rva2Vuc18xLmRlZmF1bHQoW1wiYXNcIl0pO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcclxuY2xhc3MgT3BlbkJsb2NrIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiT1BFTl9CTE9DS1wiO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShjb21iaW5hdG9yc18xLnNlcShcIk9QRU5fQkxPQ0tcIiwgY29tYmluYXRvcnNfMS50YWcoXCJ7eyNcIiksIGhic18xLlNJTVBMRV9QQVRILCBCTE9DS19TUEFDRURfVE9LRU5TLCBjb21iaW5hdG9yc18xLm1heWJlKEJMT0NLX1BBUkFNUyksIGNvbWJpbmF0b3JzXzEubWF5YmUoaGJzXzEuV1MpLCBjb21iaW5hdG9yc18xLnRhZyhcIn19XCIpKS5tYXAoKFtvcGVuLCBwYXRoLCBoZWFkLCBwYXJhbXMsIHdzLCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5vcGVuQmxvY2soe1xyXG4gICAgICAgICAgICBuYW1lOiBwYXRoLFxyXG4gICAgICAgICAgICBoZWFkOiBbLi4uaGVhZCwgLi4uKHBhcmFtcyA/IFtwYXJhbXNdIDogW10pLCAuLi4od3MgPyBbd3NdIDogW10pXSxcclxuICAgICAgICB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk9wZW5CbG9jayA9IE9wZW5CbG9jaztcclxuY29uc3QgT1BFTl9CTE9DSyA9IG5ldyBPcGVuQmxvY2soKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXHJcbmNsYXNzIEJsb2NrUGFyYW1zIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQkxPQ0tfUEFSQU1TXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEuc2VxKFwiQkxPQ0tfUEFSQU1TXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiYXMgfFwiKSwgbXVsdGlfMS5tYW55KGNvbWJpbmF0b3JzXzEuYW55KFwiYmxvY2sgcGFyYW1cIiwgaGJzXzEuSUQsIGhic18xLldTKSksIGNvbWJpbmF0b3JzXzEudGFnKFwifFwiKSkubWFwKChbb3BlbiwgcGFyYW1zLCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5ibG9ja1BhcmFtcyhwYXJhbXMsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKSkpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IEJMT0NLX1BBUkFNUyA9IG5ldyBCbG9ja1BhcmFtcygpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcclxuY2xhc3MgQ2xvc2VCbG9jayBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNMT1NFX0JMT0NLXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEuc2VxKFwiQ0xPU0VfQkxPQ0tcIiwgY29tYmluYXRvcnNfMS50YWcoXCJ7ey9cIiksIGhic18xLlNJTVBMRV9QQVRILCBjb21iaW5hdG9yc18xLnRhZyhcIn19XCIpKS5tYXAoKFtvcGVuLCBwYXRoLCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5jbG9zZUJsb2NrKHBhdGgsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQ2xvc2VCbG9jayA9IENsb3NlQmxvY2s7XHJcbmNvbnN0IENMT1NFX0JMT0NLID0gbmV3IENsb3NlQmxvY2soKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi4vLi4vaGJzXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b2tlbnNcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuLi9iYXNlXCIpO1xyXG5jb25zdCBpZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2lkXCIpKTtcclxuY29uc3QgdG9rZW5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi90b2tlblwiKSk7XHJcbmNsYXNzIEhlYWQgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpc2FsbG93ZWRLZXl3b3Jkcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kaXNhbGxvd2VkS2V5d29yZHMgPSBkaXNhbGxvd2VkS2V5d29yZHM7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyB0b2tlbl8xLmRlZmF1bHQobmV3IGlkXzEuZGVmYXVsdChkaXNhbGxvd2VkS2V5d29yZHMpLCB0b2tlbnNfMS5Ub2tlblR5cGUuSWRlbnRpZmllcik7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhbGxvd2VkS2V5d29yZHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBIRUFEIOKAoiBub3QgJHtKU09OLnN0cmluZ2lmeSh0aGlzLmRpc2FsbG93ZWRLZXl3b3Jkcyl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkhFQURcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEuYW55KFwiSEVBRFwiLCBoYnNfMS5BUkcsIHRoaXMuaWQpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBIZWFkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3QgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4uL2Jhc2VcIik7XHJcbmNsYXNzIElkIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXNhbGxvd2VkS2V5d29yZHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGlzYWxsb3dlZEtleXdvcmRzID0gZGlzYWxsb3dlZEtleXdvcmRzO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWxsb3dlZEtleXdvcmRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgSUQg4oCiIG5vdCAke0pTT04uc3RyaW5naWZ5KHRoaXMuZGlzYWxsb3dlZEtleXdvcmRzKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSURcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBjb25zdCBkaXNhbGxvd2VkS2V5d29yZHMgPSB0aGlzLmRpc2FsbG93ZWRLZXl3b3JkcztcclxuICAgICAgICBpZiAoZGlzYWxsb3dlZEtleXdvcmRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UoY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eXFxwe0lEX1N0YXJ0fVtcXHB7SURfQ29udGludWV9LV0qL3UsIFwiSURfU05JUFBFVFwiKS5tYXAoc25pcHBldCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJhZyA9IHNuaXBwZXQuZnJhZ21lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWxsb3dlZEtleXdvcmRzLnNvbWUoayA9PiBmcmFnID09PSBrKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKHNuaXBwZXQsIFwiZGlzYWxsb3dlZCBrZXl3b3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhzbmlwcGV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShjb21iaW5hdG9yc18xLnBhdHRlcm4oL15cXHB7SURfU3RhcnR9W1xccHtJRF9Db250aW51ZX0tXSovdSwgXCJJRF9TTklQUEVUXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gSWQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zbmlwcGV0XCIpO1xyXG5jb25zdCBzcGFuXzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc3BhblwiKTtcclxuY29uc3QgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi4vLi4vaGJzXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b2tlbnNcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuLi9iYXNlXCIpO1xyXG5jbGFzcyBJbnRlcnBvbGF0ZSBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIklOVEVSUE9MQVRFXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEuc2VxKFwiSU5URVJQT0xBVEVcIiwgY29tYmluYXRvcnNfMS50YWcoXCJ7e1wiKSwgaGJzXzEuU1BBQ0VEX1RPS0VOUywgY29tYmluYXRvcnNfMS50YWcoXCJ9fVwiKSkubWFwKChbb3BlbiwgcGF0aCwgY2xvc2VdKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuaW50ZXJwb2xhdGUocGF0aCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBJbnRlcnBvbGF0ZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zcGFuXCIpO1xyXG5jb25zdCBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4uLy4uL2NvbWJpbmF0b3JzXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b2tlbnNcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuLi9iYXNlXCIpO1xyXG5jbGFzcyBTb21lTnVtYmVyIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiTlVNQkVSXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEuc2VxKFwiTlVNQkVSXCIsIGNvbWJpbmF0b3JzXzEubWF5YmUoY29tYmluYXRvcnNfMS50YWcoXCItXCIpKSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eWzAtOV0rLywgXCJkaWdpdHNcIiksIGNvbWJpbmF0b3JzXzEubWF5YmUoY29tYmluYXRvcnNfMS5zZXEoXCJkZWNpbWFsXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiLlwiKSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eWzAtOV0rLywgXCJkaWdpdHNcIikpLm1hcCgoWywgdGFpbF0pID0+IHNuaXBwZXRfMS5vayh0YWlsKSkpKS5tYXAoKFtuZWdhdGl2ZSwgaGVhZCwgdGFpbF0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5udW1iZXJUb2tlbih7XHJcbiAgICAgICAgICAgIGhlYWQ6IGhlYWQuc3BhbixcclxuICAgICAgICAgICAgdGFpbDogdGFpbCA/IHRhaWwuc3BhbiA6IG51bGwsXHJcbiAgICAgICAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSA/IG5lZ2F0aXZlLnNwYW4gOiBudWxsLFxyXG4gICAgICAgIH0sIHNwYW5fMS5yYW5nZShuZWdhdGl2ZSwgaGVhZCwgdGFpbCA/IHRhaWwgOiBudWxsKSkpKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU29tZU51bWJlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zcGFuXCIpO1xyXG5jb25zdCBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4uLy4uL2NvbWJpbmF0b3JzXCIpO1xyXG5jb25zdCBoYnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9oYnNcIik7XHJcbmNvbnN0IHRva2Vuc18xID0gcmVxdWlyZShcIi4uLy4uL3Rva2Vuc1wiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4uL2Jhc2VcIik7XHJcbmNsYXNzIFNleHAgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTRVhQXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEuc2VxKFwiU0VYUFwiLCBjb21iaW5hdG9yc18xLnRhZyhcIihcIiksIGhic18xLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwiKVwiKSkubWFwKChbb3BlbiwgcGF0aCwgY2xvc2VdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuc2V4cChwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTZXhwO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3QgY29tYmluYXRvcl8xID0gcmVxdWlyZShcIi4uLy4uL2NvbWJpbmF0b3JcIik7XHJcbmNvbnN0IGhic18xID0gcmVxdWlyZShcIi4uLy4uL2hic1wiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4uL2Jhc2VcIik7XHJcbmNvbnN0IGhlYWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9oZWFkXCIpKTtcclxuY2xhc3MgU2ltcGxlUGF0aCBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZGlzYWxsb3dlZEtleXdvcmRzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmRpc2FsbG93ZWRLZXl3b3JkcyA9IGRpc2FsbG93ZWRLZXl3b3JkcztcclxuICAgICAgICB0aGlzLmhlYWQgPSBuZXcgaGVhZF8xLmRlZmF1bHQoZGlzYWxsb3dlZEtleXdvcmRzKTtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FsbG93ZWRLZXl3b3Jkcykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFNJTVBMRV9QQVRIIOKAoiBub3QgJHtKU09OLnN0cmluZ2lmeSh0aGlzLmRpc2FsbG93ZWRLZXl3b3Jkcyl9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgU0lNUExFX1BBVEhgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodGhpcy5oZWFkKTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFtjdXJyZW50LCBoZWFkXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICBsZXQgb3V0ID0gW2hlYWRdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXN1bHREb3QgPSBjdXJyZW50Lmludm9rZShoYnNfMS5ET1QsIHsgb3B0aW9uYWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHREb3Qua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudCwgb3V0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudCA9IHJlc3VsdERvdC52YWx1ZVswXTtcclxuICAgICAgICAgICAgbGV0IG5leHREb3QgPSByZXN1bHREb3QudmFsdWVbMV07XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRNZW1iZXIgPSBjdXJyZW50Lmludm9rZShleHBvcnRzLk1FTUJFUik7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRNZW1iZXIua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE1lbWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0TWVtYmVyLnZhbHVlWzBdO1xyXG4gICAgICAgICAgICBsZXQgbmV4dE1lbWJlciA9IHJlc3VsdE1lbWJlci52YWx1ZVsxXTtcclxuICAgICAgICAgICAgb3V0LnB1c2gobmV4dERvdCwgbmV4dE1lbWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNpbXBsZVBhdGg7XHJcbi8vIGV4cG9ydCBjb25zdCBTSU1QTEVfSEVBRCA9IGNvbWJpbmF0b3IoKCkgPT4gYW55KFwiSEVBRFwiLCBBUkcsIElEKSk7XHJcbi8vIFRPRE86IEFsbG93IGBbXWAgb3Igc3RyaW5nIG1lbWJlcnNcclxuZXhwb3J0cy5NRU1CRVIgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiBoYnNfMS5JRCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGhic18xID0gcmVxdWlyZShcIi4uLy4uL2hic1wiKTtcclxuY29uc3QgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4uL2Jhc2VcIik7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zbmlwcGV0XCIpO1xyXG5jb25zdCBzaW1wbGVfcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NpbXBsZS1wYXRoXCIpKTtcclxuY2xhc3MgU3BhY2VkVG9rZW5zIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXNhbGxvd2VkS2V5d29yZHMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGlzYWxsb3dlZEtleXdvcmRzID0gZGlzYWxsb3dlZEtleXdvcmRzO1xyXG4gICAgICAgIHRoaXMucGF0aCA9IG5ldyBzaW1wbGVfcGF0aF8xLmRlZmF1bHQoZGlzYWxsb3dlZEtleXdvcmRzKTtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FsbG93ZWRLZXl3b3Jkcykge1xyXG4gICAgICAgICAgICByZXR1cm4gYFNQQUNFRF9UT0tFTlMg4oCiIG5vdCAke0pTT04uc3RyaW5naWZ5KHRoaXMuZGlzYWxsb3dlZEtleXdvcmRzKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiU1BBQ0VEX1RPS0VOU1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICBsZXQgdGsgPSBjb21iaW5hdG9yc18xLmFueShcInRva2VuXCIsIGhic18xLndyYXAoaGJzXzEuU0VYUCksIGhic18xLndyYXAoaGJzXzEuU1RSSU5HKSwgaGJzXzEud3JhcChoYnNfMS5OVU1CRVIpLCBoYnNfMS5OQU1FRCwgdGhpcy5wYXRoLCBoYnNfMS53cmFwKGhic18xLldTKSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY3VycmVudC5pbnZva2UodGspO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBbbmV4dCwgdG9rZW5zXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgdG9rIG9mIHRva2Vucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodG9rKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dC5wdXNoKC4uLnRvayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCh0b2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3V0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICAgICAgICAgIHJlYXNvbjogXCJwcmVzZW50XCIsXHJcbiAgICAgICAgICAgICAgICBzbmlwcGV0OiBpbnB1dCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudCwgb3V0XSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU3BhY2VkVG9rZW5zO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tYmluYXRvcnNcIik7XHJcbmNvbnN0IHRva2Vuc18xID0gcmVxdWlyZShcIi4uLy4uL3Rva2Vuc1wiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4uL2Jhc2VcIik7XHJcbmNsYXNzIFNvbWVTdHJpbmcgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTVFJJTkdcIjtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UoY29tYmluYXRvcnNfMS5hbnkoXCJRVU9URURfU1RSSU5HXCIsIGV4cG9ydHMuU0lOR0xFX1FVT1RFRCwgZXhwb3J0cy5ET1VCTEVfUVVPVEVEKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU29tZVN0cmluZztcclxuZXhwb3J0cy5TSU5HTEVfUVVPVEVEID0gY29tYmluYXRvcnNfMS5zZXEoXCJTSU5HTEVfUVVPVEVEXCIsIGNvbWJpbmF0b3JzXzEudGFnKGAnYCksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXihcXFxcJ3xbXiddKSovdSwgXCJzaW5nbGUgcXVvdGUgYm9keVwiKSwgY29tYmluYXRvcnNfMS50YWcoYCdgKSkubWFwKChbb3BlbiwgYm9keSwgY2xvc2VdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuc3RyaW5nVG9rZW4oeyBkYXRhOiBib2R5LnNwYW4sIHF1b3RlOiB0b2tlbnNfMS5RdW90ZVR5cGUuU2luZ2xlIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKSk7XHJcbmV4cG9ydHMuRE9VQkxFX1FVT1RFRCA9IGNvbWJpbmF0b3JzXzEuc2VxKFwiRE9VQkxFX1FVT1RFRFwiLCBjb21iaW5hdG9yc18xLnRhZyhgXCJgKSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eKFxcXFxcInxbXlwiXSkqL3UsIFwiZG91YmxlIHF1b3RlIGJvZHlcIiksIGNvbWJpbmF0b3JzXzEudGFnKGBcImApKS5tYXAoKFtvcGVuLCBib2R5LCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdHJpbmdUb2tlbih7IGRhdGE6IGJvZHkuc3BhbiwgcXVvdGU6IHRva2Vuc18xLlF1b3RlVHlwZS5Eb3VibGUgfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuLi9iYXNlXCIpO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xyXG5jbGFzcyBTb21lVG9rZW4gZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbWJpbmF0b3IsIHR5cGUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBgdG9rZW4g4oCiICR7dXRpbHNfMS5jb21iaW5hdG9yTmFtZSh0aGlzLmNvbWJpbmF0b3IpfWA7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKHRoaXMuY29tYmluYXRvciwge1xyXG4gICAgICAgICAgICBmb3JjZVRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbXHJcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwYW46IHJlc3VsdC52YWx1ZVsxXS5zcGFuLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFNvbWVUb2tlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zcGFuXCIpO1xyXG5jb25zdCBjb21iaW5hdG9yXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tYmluYXRvclwiKTtcclxuY29uc3QgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi4vLi4vaGJzXCIpO1xyXG5jb25zdCBtdWx0aV8xID0gcmVxdWlyZShcIi4uLy4uL211bHRpXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b2tlbnNcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuLi9iYXNlXCIpO1xyXG5jbGFzcyBIVE1MQXR0cmlidXRlIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiVEVYVFwiO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShjb21iaW5hdG9yc18xLnBpY2soe1xyXG4gICAgICAgICAgICB2YWx1ZWQ6IGNvbWJpbmF0b3JzXzEuc2VxKFwidmFsdWVkIGF0dHJpYnV0ZVwiLCBleHBvcnRzLkFOWV9BVFRSX05BTUUsIGhic18xLkVRLCBleHBvcnRzLkFUVFJJQlVURV9WQUxVRSksXHJcbiAgICAgICAgICAgIGJhcmU6IGV4cG9ydHMuQVRUUklCVVRFX05BTUUsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB2YWx1ZWQ6IChbbmFtZSwgLCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEudmFsdWVkQXR0cih7IG5hbWUsIHZhbHVlIH0sIHNwYW5fMS5yYW5nZShuYW1lLCB2YWx1ZSkpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFyZTogdmFsdWUgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJOYW1lKHZhbHVlLnNwYW4pKSxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gSFRNTEF0dHJpYnV0ZTtcclxuZXhwb3J0cy5BVFRSSUJVVEUgPSBuZXcgSFRNTEF0dHJpYnV0ZSgpO1xyXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy90b2tlbml6YXRpb24uaHRtbCNiZWZvcmUtYXR0cmlidXRlLW5hbWUtc3RhdGVcclxuZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSA9IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMC8+XFx1MDAwMFwiJzw9XS4qPyg/PVtcXHUwMDA5XFx1MDAwQVxcdTAwMENcXHUwMDIwLz0+XFx1MDAwMFwiJzxdKS91LCBcIkFUVFJJQlVURV9OQU1FXCIpLm1hcChuYW1lID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyTmFtZShuYW1lLnNwYW4pKSk7XHJcbmV4cG9ydHMuQVJHX05BTUUgPSBjb21iaW5hdG9yc18xLnNlcShcIkFSR19OQU1FXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiQFwiKSwgZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSkubWFwKChbYXQsIGF0dHJdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXJnTmFtZShhdHRyLnNwYW4sIHNwYW5fMS5yYW5nZShhdC5zcGFuLCBhdHRyLnNwYW4pKSkpO1xyXG5leHBvcnRzLkFOWV9BVFRSX05BTUUgPSBjb21iaW5hdG9yc18xLmFueShcIkFOWV9BVFRSX05BTUVcIiwgZXhwb3J0cy5BUkdfTkFNRSwgZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSk7XHJcbmV4cG9ydHMuRFFfU1RSSU5HX0lOVEVSUE9MQVRFID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5hbnkoXCJEUV9TVFJJTkdfSU5URVJQT0xBVEVcIiwgaGJzXzEuSU5URVJQT0xBVEUsIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteXCJdKy8sIGBkcSB0ZXh0YCkubWFwKHZhbHVlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS50ZXh0KHZhbHVlLnNwYW4pKSkpKTtcclxuZXhwb3J0cy5TUV9TVFJJTkdfSU5URVJQT0xBVEUgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiBjb21iaW5hdG9yc18xLmFueShcIlNRX1NUUklOR19JTlRFUlBPTEFURVwiLCBoYnNfMS5JTlRFUlBPTEFURSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW14nXSsvLCBgc3EgdGV4dGApLm1hcCh2YWx1ZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKSkpKSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxyXG5jbGFzcyBTdHJpbmdJbnRlcnBvbGF0aW9uIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21iaW5hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU1RSSU5HX0lOVEVSUE9MQVRJT05cIjtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UodXRpbHNfMS5tYXAobXVsdGlfMS5tYW55KHRoaXMuY29tYmluYXRvciksIHZhbHVlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdHJpbmdJbnRlcnBvbGF0aW9uKHZhbHVlLCBzcGFuXzEucmFuZ2UoLi4udmFsdWUpKSkpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0cmluZ0ludGVycG9sYXRpb24gPSBTdHJpbmdJbnRlcnBvbGF0aW9uO1xyXG5leHBvcnRzLkFUVFJJQlVURV9WQUxVRSA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IGNvbWJpbmF0b3JzXzEucGljayh7XHJcbiAgICBpbnRlcnBvbGF0ZTogaGJzXzEuSU5URVJQT0xBVEUsXHJcbiAgICBkcTogY29tYmluYXRvcnNfMS5zZXEoXCJkcVwiLCBjb21iaW5hdG9yc18xLnRhZyhgXCJgKSwgbmV3IFN0cmluZ0ludGVycG9sYXRpb24oZXhwb3J0cy5EUV9TVFJJTkdfSU5URVJQT0xBVEUpLCBjb21iaW5hdG9yc18xLnRhZyhgXCJgKSksXHJcbiAgICBzcTogY29tYmluYXRvcnNfMS5zZXEoXCJzcVwiLCBjb21iaW5hdG9yc18xLnRhZyhgJ2ApLCBuZXcgU3RyaW5nSW50ZXJwb2xhdGlvbihleHBvcnRzLlNRX1NUUklOR19JTlRFUlBPTEFURSksIGNvbWJpbmF0b3JzXzEudGFnKGAnYCkpLFxyXG4gICAgdW5xdW90ZWQ6IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMD5cXDBcIic8PWBdKy91LCBgdW5xdW90ZWQgY29udGVudHNgKSxcclxufSwge1xyXG4gICAgaW50ZXJwb2xhdGU6IGludGVycG9sYXRlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoeyB0eXBlOiB0b2tlbnNfMS5BdHRyaWJ1dGVWYWx1ZVR5cGUuSW50ZXJwb2xhdGUsIHZhbHVlOiBpbnRlcnBvbGF0ZSB9LCBpbnRlcnBvbGF0ZS5zcGFuKSksXHJcbiAgICBkcTogKFtvcGVuLCB2YWx1ZSwgY2xvc2VdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHtcclxuICAgICAgICB0eXBlOiB0b2tlbnNfMS5BdHRyaWJ1dGVWYWx1ZVR5cGUuRG91YmxlUXVvdGVkLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpLFxyXG4gICAgc3E6IChbb3BlbiwgdmFsdWUsIGNsb3NlXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgdHlwZTogdG9rZW5zXzEuQXR0cmlidXRlVmFsdWVUeXBlLlNpbmdsZVF1b3RlZCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKSxcclxuICAgIHVucXVvdGVkOiB2YWx1ZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0clZhbHVlKHtcclxuICAgICAgICB0eXBlOiB0b2tlbnNfMS5BdHRyaWJ1dGVWYWx1ZVR5cGUuVW5xdW90ZWQsXHJcbiAgICAgICAgdmFsdWU6IHRva2Vuc18xLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vuc18xLnRleHQodmFsdWUuc3BhbildLCB2YWx1ZS5zcGFuKSxcclxuICAgIH0sIHZhbHVlLnNwYW4pKSxcclxufSkpO1xyXG5leHBvcnRzLkFUVFJJQlVURVMgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIkFUVFJJQlVURVNcIiwgaGJzXzEuV1MsIG11bHRpXzEubWFueShjb21iaW5hdG9yc18xLmFueShcInNwYWNlZCBhdHRyaWJ1dGVcIiwgaGJzXzEuV1MsIGhic18xLklOVEVSUE9MQVRFLCBleHBvcnRzLkFUVFJJQlVURSkpKSwgKFt3cywgYXR0cnNdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKFt3cywgLi4uYXR0cnNdKTtcclxufSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tYmluYXRvcnNcIik7XHJcbmNvbnN0IGhic18xID0gcmVxdWlyZShcIi4uLy4uL2hic1wiKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi4vLi4vdG9rZW5zXCIpO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi4vYmFzZVwiKTtcclxuY29uc3QgdGFnXzEgPSByZXF1aXJlKFwiLi90YWdcIik7XHJcbmNsYXNzIEhUTUxFbmRUYWcgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJFTkRfVEFHXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiRU5EX1RBR1wiLCBjb21iaW5hdG9yc18xLnRhZyhcIjwvXCIpLCB0YWdfMS5UQUdfT1JfQ09NUE9ORU5UX05BTUUsIGNvbWJpbmF0b3JzXzEubWF5YmUoaGJzXzEuV1MpLCBjb21iaW5hdG9yc18xLnRhZyhcIj5cIikpLCAoW3N0YXJ0LCBuYW1lLCB0cmFpbGluZywgZW5kXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmVuZFRhZyh7IG5hbWUsIHRyYWlsaW5nIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBIVE1MRW5kVGFnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tYmluYXRvcnNcIik7XHJcbmNvbnN0IHRva2Vuc18xID0gcmVxdWlyZShcIi4uLy4uL3Rva2Vuc1wiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4uL2Jhc2VcIik7XHJcbmNvbnN0IGF0dHJpYnV0ZV8xID0gcmVxdWlyZShcIi4vYXR0cmlidXRlXCIpO1xyXG5jb25zdCB0YWdfMSA9IHJlcXVpcmUoXCIuL3RhZ1wiKTtcclxuY2xhc3MgSFRNTFN0YXJ0VGFnIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiU1RBUlRfVEFHXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiU1RBUlRfVEFHXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiPFwiKSwgdGFnXzEuVEFHX09SX0NPTVBPTkVOVF9OQU1FLCBjb21iaW5hdG9yc18xLm1heWJlKGF0dHJpYnV0ZV8xLkFUVFJJQlVURVMpLCBjb21iaW5hdG9yc18xLm1heWJlKGNvbWJpbmF0b3JzXzEudGFnKFwiL1wiKSksIGNvbWJpbmF0b3JzXzEudGFnKFwiPlwiKSksIChbc3RhcnQsIG5hbWUsIGF0dHJzLCBzZWxmQ2xvc2luZywgZW5kXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnN0YXJ0VGFnKHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBhdHRyczogYXR0cnMgfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgc2VsZkNsb3Npbmc6IHNlbGZDbG9zaW5nID8gdHJ1ZSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEhUTUxTdGFydFRhZztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29tYmluYXRvcl8xID0gcmVxdWlyZShcIi4uLy4uL2NvbWJpbmF0b3JcIik7XHJcbmNvbnN0IHRva2Vuc18xID0gcmVxdWlyZShcIi4uLy4uL3Rva2Vuc1wiKTtcclxuY29uc3QgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IGhic18xID0gcmVxdWlyZShcIi4uLy4uL2hic1wiKTtcclxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvdG9rZW5pemF0aW9uLmh0bWwjdGFnLW5hbWUtc3RhdGVcclxuZXhwb3J0cy5UQUdfTkFNRSA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IGNvbWJpbmF0b3JzXzEucGF0dGVybigvXltBLVphLXpdW14vPlxcMFxcc10rL3UsIFwiVEFHX05BTUVcIikpO1xyXG5leHBvcnRzLlRBR19OQU1FX1RPS0VOID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gdXRpbHNfMS5tYXAoZXhwb3J0cy5UQUdfTkFNRSwgc25pcHBldCA9PiBzbmlwcGV0XzEub2soW3Rva2Vuc18xLmlkKHNuaXBwZXQuc3BhbildKSkpO1xyXG5leHBvcnRzLlRBR19PUl9DT01QT05FTlRfTkFNRSA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IGNvbWJpbmF0b3JzXzEuYW55KFwidGFnIG9yIGNvbXBvbmVudCBuYW1lXCIsIGhic18xLlNJTVBMRV9QQVRILCBleHBvcnRzLlRBR19OQU1FX1RPS0VOKSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zbmlwcGV0XCIpO1xyXG5jb25zdCBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4uLy4uL2NvbWJpbmF0b3JzXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b2tlbnNcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuLi9iYXNlXCIpO1xyXG5jbGFzcyBIVE1MVGV4dCBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlRFWFRcIjtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UoY29tYmluYXRvcnNfMS50YWtlVW50aWwoXCJ7e1wiKSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBbbmV4dCwgdmFsdWVdID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQsIHRva2Vuc18xLnRleHQodmFsdWUuc3BhbildKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBIVE1MVGV4dDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNsYXNzIE1heWJlIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21iaW5hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBtYXliZSAke3RoaXMuY29tYmluYXRvci5uYW1lfWA7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKHRoaXMuY29tYmluYXRvcik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2lucHV0LCBudWxsXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBNYXliZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNsYXNzIFBhdHRlcm4gZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGRlc2MsIHBhdHRlcm4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBgcGF0dGVyblske3RoaXMuZGVzY31dYDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN0ID0gaW5wdXQuc2xpY2VSZXN0O1xyXG4gICAgICAgIGxldCBtYXRjaCA9IHJlc3QubWF0Y2godGhpcy5wYXR0ZXJuKTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgbGV0IG1hdGNoZWQgPSBtYXRjaFswXTtcclxuICAgICAgICAgICAgbGV0IG5leHQgPSBpbnB1dC5zbGljZShtYXRjaGVkLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwicGF0dGVyblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGF0dGVybjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNsYXNzIFBpY2sgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbWJpbmF0b3JzLCBjYWxsYmFja3MpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrcztcclxuICAgICAgICB0aGlzLm5hbWUgPSBcInBpY2tcIjtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgZm9yIChsZXQgW25hbWUsIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuY29tYmluYXRvcnMpKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdFJlc3VsdCA9IGN1cnJlbnQuaW52b2tlKGl0ZW0sIHsgY29udGV4dDogbmFtZSB9KTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0UmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtuZXh0LCB2YWx1ZV0gPSBmaXJzdFJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmNhbGxiYWNrc1tuYW1lXSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQsIHJlc3VsdC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJhbnlcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGljaztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNsYXNzIFNlcSBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgY29tYmluYXRvcnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IG91dCA9IFtdO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmNvbWJpbmF0b3JzKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjdXJyZW50Lmludm9rZShpdGVtKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBbbmV4dCwgdmFsdWVdID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQucmVzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTZXE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi9zbmlwcGV0XCIpO1xyXG5jbGFzcyBUYWcgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IG5leHQgPSBpbnB1dC5zbGljZSh0aGlzLnNvdXJjZS5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChuZXh0LmZyYWdtZW50ID09PSB0aGlzLnNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtpbmQ6IFwiZXJyXCIsIHNuaXBwZXQ6IGlucHV0LCByZWFzb246IFwidGFnXCIgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGFnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgVGFrZVVudGlsIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwidGFrZVVudGlsXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0LmlzRU9GKCkgfHwgbmV4dC5pc01hdGNoKHRoaXMucGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuZXh0ZW5kKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRha2VVbnRpbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNsYXNzIFRha2VXaGlsZSBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocGF0dGVybikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcInRha2VXaGlsZVwiO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IG5leHQgPSBpbnB1dDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuZXh0LmlzTWF0Y2godGhpcy5wYXR0ZXJuKSkge1xyXG4gICAgICAgICAgICAgICAgbmV4dCA9IG5leHQuZXh0ZW5kKHRoaXMucGF0dGVybi5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5leHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJ0YWtlV2hpbGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBUYWtlV2hpbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi9zbmlwcGV0XCIpO1xyXG5jbGFzcyBXcmFwIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21iaW5hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGB3cmFwIOKAoiAke3RoaXMuY29tYmluYXRvci5uYW1lfWA7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKHRoaXMuY29tYmluYXRvcik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtyZXN1bHQudmFsdWVbMF0sIFtyZXN1bHQudmFsdWVbMV1dXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFdyYXA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGxvZ2dlcl8xID0gcmVxdWlyZShcIi4vbG9nZ2VyXCIpO1xyXG5sZXQgY2hpbGRTdGFjayA9IFtdO1xyXG5sZXQgcm9vdDtcclxuZnVuY3Rpb24gcHJlSW52b2tlKHsgY29tYmluYXRvciwgc25pcHBldCwgb3B0aW9uYWwsIH0pIHtcclxuICAgIGxldCBjaGlsZCA9IHtcclxuICAgICAgICBjb21iaW5hdG9yLFxyXG4gICAgICAgIHByZVNuaXBwZXQ6IHNuaXBwZXQsXHJcbiAgICAgICAgb3B0aW9uYWwsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfTtcclxuICAgIGlmIChjaGlsZFN0YWNrLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGxldCBsYXN0ID0gY2hpbGRTdGFja1tjaGlsZFN0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxhc3QuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjaGlsZFN0YWNrLnB1c2goY2hpbGQpO1xyXG59XHJcbmV4cG9ydHMucHJlSW52b2tlID0gcHJlSW52b2tlO1xyXG5mdW5jdGlvbiBwb3N0SW52b2tlKHJlc3VsdCkge1xyXG4gICAgbGV0IGxhc3QgPSBjaGlsZFN0YWNrW2NoaWxkU3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICBsYXN0Lm91dHB1dCA9IHJlc3VsdDtcclxuICAgIGxldCByb3cgPSBjaGlsZFN0YWNrLnBvcCgpO1xyXG4gICAgaWYgKGNoaWxkU3RhY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcm9vdCA9IHJvdztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBvc3RJbnZva2UgPSBwb3N0SW52b2tlO1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gcm93KFxyXG4vLyAgIHtcclxuLy8gICAgIHJlc3VsdCxcclxuLy8gICAgIGFycm93LFxyXG4vLyAgICAgY29tYmluYXRvcixcclxuLy8gICAgIGNvbnRleHQsXHJcbi8vICAgfToge1xyXG4vLyAgICAgcmVzdWx0OiBSb3dSZXN1bHQ7XHJcbi8vICAgICBhcnJvdzogc3RyaW5nO1xyXG4vLyAgICAgY29tYmluYXRvcjogQ29tYmluYXRvclR5cGU7XHJcbi8vICAgICBjb250ZXh0Pzogc3RyaW5nO1xyXG4vLyAgIH0sXHJcbi8vICAgYTogYW55LFxyXG4vLyAgIGI6IHN0cmluZ1xyXG4vLyApIHtcclxuLy8gICBsZXQgbmFtZSA9IGNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpO1xyXG4vLyAgIGlmIChjb250ZXh0KSB7XHJcbi8vICAgICBuYW1lID0gYCR7Y29udGV4dH06ICR7bmFtZX1gO1xyXG4vLyAgIH1cclxuLy8gICB0YWJsZS5wdXNoKHtcclxuLy8gICAgIHN0eWxlOiB7IHJlc3VsdCwga2luZDogY29tYmluYXRvckRlYnVnVHlwZShjb21iaW5hdG9yKSB9LFxyXG4vLyAgICAgZGF0YTogW2Fycm93LCBuYW1lLCBhLCBiXSxcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc25pcHBldFN0eWxlKHN0eWxlOiBSb3dTdHlsZSkge1xyXG4vLyAgIHN3aXRjaCAoc3R5bGUucmVzdWx0KSB7XHJcbi8vICAgICBjYXNlIFwic3RhcnRcIjpcclxuLy8gICAgICAgcmV0dXJuIFwiY29sb3I6ICMzMzNcIjtcclxuLy8gICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbi8vICAgICAgIHJldHVybiBcImNvbG9yOiBncmVlblwiO1xyXG4vLyAgICAgY2FzZSBcImVycm9yXCI6XHJcbi8vICAgICAgIHJldHVybiBcImNvbG9yOiByZWRcIjtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFybVN0eWxlKHN0eWxlOiBSb3dTdHlsZSkge1xyXG4vLyAgIHN3aXRjaCAoc3R5bGUucmVzdWx0KSB7XHJcbi8vICAgICBjYXNlIFwic3RhcnRcIjpcclxuLy8gICAgICAgc3dpdGNoIChzdHlsZS5raW5kKSB7XHJcbi8vICAgICAgICAgY2FzZSBcInRyYW5zcGFyZW50XCI6XHJcbi8vICAgICAgICAgY2FzZSBcImFybVwiOlxyXG4vLyAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICNiYmJcIjtcclxuLy8gICAgICAgICBjYXNlIFwibm9ybWFsXCI6XHJcbi8vICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogIzMzM1wiO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4vLyAgICAgICByZXR1cm4gXCJjb2xvcjogZ3JlZW5cIjtcclxuLy8gICAgIGNhc2UgXCJlcnJvclwiOlxyXG4vLyAgICAgICByZXR1cm4gXCJjb2xvcjogcmVkXCI7XHJcbi8vICAgfVxyXG4vLyB9XHJcbmZ1bmN0aW9uIG91dHB1dFN0eWxlKHsgb3V0cHV0LCBvcHRpb25hbCB9LCB3ZWlnaHQpIHtcclxuICAgIGlmIChvdXRwdXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgYXNzZXJ0OiB1bmV4cGVjdGVkIHVuZGVmaW5lZCBvdXRwdXQgKHNob3VsZCBiZSBhIHJlc3VsdClgKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAob3V0cHV0LmtpbmQpIHtcclxuICAgICAgICBjYXNlIFwib2tcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGAke1NVQ0NFU1N9OyR7d2VpZ2h0fWA7XHJcbiAgICAgICAgY2FzZSBcImVyclwiOiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9QVElPTkFMO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke0VSUk9SfTske3dlaWdodH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMub3V0cHV0U3R5bGUgPSBvdXRwdXRTdHlsZTtcclxuZnVuY3Rpb24gb3V0cHV0U3RyaW5nKG91dHB1dCkge1xyXG4gICAgaWYgKG91dHB1dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhc3NlcnQ6IHVuZXhwZWN0ZWQgdW5kZWZpbmVkIG91dHB1dCAoc2hvdWxkIGJlIGEgcmVzdWx0KWApO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChvdXRwdXQua2luZCkge1xyXG4gICAgICAgIGNhc2UgXCJva1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gYCR7bG9nZ2VyXzEuZm9ybWF0RGVidWdnYWJsZShvdXRwdXQudmFsdWVbMV0pfSVjYDtcclxuICAgICAgICBjYXNlIFwiZXJyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtvdXRwdXQuZmF0YWwgPyBcImZhdGFsIFwiIDogXCJcIn1lcnJvcjogJHtvdXRwdXQucmVhc29ufSAlY0AgJHtvdXRwdXQuc25pcHBldC5mbXQoKX1gO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMub3V0cHV0U3RyaW5nID0gb3V0cHV0U3RyaW5nO1xyXG5mdW5jdGlvbiBhZnRlclNuaXBwZXQob3V0cHV0KSB7XHJcbiAgICBpZiAob3V0cHV0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFzc2VydDogdW5leHBlY3RlZCB1bmRlZmluZWQgb3V0cHV0IChzaG91bGQgYmUgYSByZXN1bHQpYCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKG91dHB1dC5raW5kKSB7XHJcbiAgICAgICAgY2FzZSBcIm9rXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQudmFsdWVbMF07XHJcbiAgICAgICAgY2FzZSBcImVyclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0LnNuaXBwZXQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5hZnRlclNuaXBwZXQgPSBhZnRlclNuaXBwZXQ7XHJcbmZ1bmN0aW9uIHRydW5jKHNuaXBwZXQpIHtcclxuICAgIGxldCByZXN0ID0gc25pcHBldC5zbGljZVJlc3Q7XHJcbiAgICBpZiAocmVzdC5sZW5ndGggPiAxMykge1xyXG4gICAgICAgIHJldHVybiBgJHtyZXN0LnNsaWNlKDAsIDEwKX0uLi5gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3QucGFkRW5kKDEzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnRydW5jID0gdHJ1bmM7XHJcbmNvbnN0IEVSUk9SID0gXCJjb2xvcjogcmVkXCI7XHJcbmNvbnN0IFNVQ0NFU1MgPSBcImNvbG9yOiBncmVlblwiO1xyXG5jb25zdCBOT1JNQUwgPSBcImNvbG9yOiAjMzMzXCI7XHJcbmNvbnN0IE9QVElPTkFMID0gXCJjb2xvcjogIzk5OVwiO1xyXG5mdW5jdGlvbiBwcmludERlYnVnKGluZGVudCA9IDAsIG5lc3RlZEVycm9yID0gMCwgcGFyZW50U3RhdHVzLCByb3cgPSByb290KSB7XHJcbiAgICBpZiAocm93ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAlY2Fzc2VydDogdW5leHBlY3RlZCB1bmRlZmluZWQgcm93YCwgRVJST1IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBjb250ZXh0ID0gcm93LmNvbWJpbmF0b3IubmFtZTtcclxuICAgIGxldCBhZnRlclBhZCA9IE1hdGgubWF4KDYwIC0gaW5kZW50IC0gY29udGV4dC5sZW5ndGggLSBuZXN0ZWRFcnJvciwgMCk7XHJcbiAgICBsZXQgaW5FcnJvckhlcmUgPSByb3cub3V0cHV0ICYmXHJcbiAgICAgICAgcm93Lm91dHB1dC5raW5kID09PSBcImVyclwiICYmXHJcbiAgICAgICAgcm93LmNoaWxkcmVuLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICBpbmRlbnQgIT09IDA7XHJcbiAgICBsZXQgY3VycmVudFN0YXR1cztcclxuICAgIGlmIChyb3cub3V0cHV0ICYmIHJvdy5vdXRwdXQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgIGlmIChyb3cub3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXR1cyA9IFwib3B0aW9uYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0dXMgPSBcImVycm9yXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY3VycmVudFN0YXR1cyA9IFwic3VjY2Vzc1wiO1xyXG4gICAgfVxyXG4gICAgbGV0IHdlaWdodCA9IHBhcmVudFN0YXR1cyA9PT0gY3VycmVudFN0YXR1c1xyXG4gICAgICAgID8gXCJmb250LXdlaWdodDogbm9ybWFsXCJcclxuICAgICAgICA6IFwiZm9udC13ZWlnaHQ6IGJvbGRcIjtcclxuICAgIGlmIChpbkVycm9ySGVyZSkge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgJHtTdHJpbmcoaW5kZW50KS5wYWRFbmQoMyl9JWMke1wiIFwiLnJlcGVhdChpbmRlbnQpfSVjJHtjb250ZXh0fSVjJHtcIiBcIi5yZXBlYXQoYWZ0ZXJQYWQpfXwgJHt0cnVuYyhyb3cucHJlU25pcHBldCl9IHwgJHt0cnVuYyhhZnRlclNuaXBwZXQocm93Lm91dHB1dCkpfSB8ICVjJHtvdXRwdXRTdHJpbmcocm93Lm91dHB1dCl9YCwgTk9STUFMLCBvdXRwdXRTdHlsZShyb3csIHdlaWdodCksIE5PUk1BTCwgb3V0cHV0U3R5bGUocm93LCB3ZWlnaHQpLCBOT1JNQUwpO1xyXG4gICAgICAgIG5lc3RlZEVycm9yICs9IDI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke1N0cmluZyhpbmRlbnQpLnBhZEVuZCgzKX0lYyR7XCIgXCIucmVwZWF0KGluZGVudCl9JWMke2NvbnRleHR9JWMke1wiIFwiLnJlcGVhdChhZnRlclBhZCl9fCAke3RydW5jKHJvdy5wcmVTbmlwcGV0KX0gfCAke3RydW5jKGFmdGVyU25pcHBldChyb3cub3V0cHV0KSl9IHwgJWMke291dHB1dFN0cmluZyhyb3cub3V0cHV0KX1gLCBOT1JNQUwsIG91dHB1dFN0eWxlKHJvdywgd2VpZ2h0KSwgTk9STUFMLCBvdXRwdXRTdHlsZShyb3csIHdlaWdodCksIE5PUk1BTCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiByb3cuY2hpbGRyZW4pIHtcclxuICAgICAgICBwcmludERlYnVnKGluZGVudCArIDEsIG5lc3RlZEVycm9yLCBjdXJyZW50U3RhdHVzLCBjaGlsZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5FcnJvckhlcmUpIHtcclxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wcmludERlYnVnID0gcHJpbnREZWJ1ZztcclxubGV0IFRBQiA9IDA7XHJcbmZ1bmN0aW9uIGluZGVudCgpIHtcclxuICAgIFRBQiArPSAxO1xyXG59XHJcbmV4cG9ydHMuaW5kZW50ID0gaW5kZW50O1xyXG5mdW5jdGlvbiBvdXRkZW50KCkge1xyXG4gICAgVEFCIC09IDE7XHJcbn1cclxuZXhwb3J0cy5vdXRkZW50ID0gb3V0ZGVudDtcclxuZnVuY3Rpb24gaW5kZW50V1MoKSB7XHJcbiAgICByZXR1cm4gXCIgXCIucmVwZWF0KFRBQik7XHJcbn1cclxuZXhwb3J0cy5pbmRlbnRXUyA9IGluZGVudFdTO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JcIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgYmxvY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9oYnMvYmxvY2tcIikpO1xyXG5jb25zdCBpbnRlcnBvbGF0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2hicy9pbnRlcnBvbGF0ZVwiKSk7XHJcbmNvbnN0IG51bWJlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2hicy9udW1iZXJcIikpO1xyXG5jb25zdCBzZXhwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvaGJzL3NleHBcIikpO1xyXG5jb25zdCBzaW1wbGVfcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2hicy9zaW1wbGUtcGF0aFwiKSk7XHJcbmNvbnN0IHNwYWNlZF90b2tlbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9oYnMvc3BhY2VkLXRva2Vuc1wiKSk7XHJcbmNvbnN0IHN0cmluZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2hicy9zdHJpbmdcIikpO1xyXG5jb25zdCB0b2tlbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2hicy90b2tlblwiKSk7XHJcbmNvbnN0IHdyYXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy93cmFwXCIpKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuY29uc3QgaWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9oYnMvaWRcIikpO1xyXG5leHBvcnRzLnRva2VuID0gKGMsIHR5cGUpID0+IG5ldyB0b2tlbl8xLmRlZmF1bHQoYywgdHlwZSk7XHJcbmV4cG9ydHMud3JhcCA9IChjKSA9PiBuZXcgd3JhcF8xLmRlZmF1bHQoYyk7XHJcbmV4cG9ydHMuV1MgPSBleHBvcnRzLnRva2VuKGNvbWJpbmF0b3JzXzEucGF0dGVybigvXltcXHUwMDA5XFx1MDAwQVxcdTAwMENcXHUwMDIwXSsvdSwgXCJXU1wiKSwgdG9rZW5zXzEuVG9rZW5UeXBlLldTKTtcclxuZXhwb3J0cy5TVFJJTkcgPSBuZXcgc3RyaW5nXzEuZGVmYXVsdCgpO1xyXG5leHBvcnRzLk5VTUJFUiA9IG5ldyBudW1iZXJfMS5kZWZhdWx0KCk7XHJcbmV4cG9ydHMuU0VYUCA9IG5ldyBzZXhwXzEuZGVmYXVsdCgpO1xyXG5leHBvcnRzLk5BTUVEID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5zZXEoXCJOQU1FRFwiLCBleHBvcnRzLklELCBleHBvcnRzLkVRLCBleHBvcnRzLkVYUFJFU1NJT04pKTtcclxuZXhwb3J0cy5TSU1QTEVfUEFUSCA9IG5ldyBzaW1wbGVfcGF0aF8xLmRlZmF1bHQoKTtcclxuZXhwb3J0cy5TUEFDRURfVE9LRU5TID0gbmV3IHNwYWNlZF90b2tlbnNfMS5kZWZhdWx0KCk7XHJcbmV4cG9ydHMuQkxPQ0sgPSBuZXcgYmxvY2tfMS5kZWZhdWx0KCk7XHJcbmV4cG9ydHMuSU5URVJQT0xBVEUgPSBuZXcgaW50ZXJwb2xhdGVfMS5kZWZhdWx0KCk7XHJcbmNvbnN0IElEX1NOSVBQRVQgPSBuZXcgaWRfMS5kZWZhdWx0KCk7XHJcbmV4cG9ydHMuSUQgPSBleHBvcnRzLnRva2VuKElEX1NOSVBQRVQsIHRva2Vuc18xLlRva2VuVHlwZS5JZGVudGlmaWVyKTtcclxuZXhwb3J0cy5ET1QgPSBleHBvcnRzLnRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiLlwiKSwgdG9rZW5zXzEuVG9rZW5UeXBlLkRvdCk7XHJcbmV4cG9ydHMuRVEgPSBleHBvcnRzLnRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiPVwiKSwgdG9rZW5zXzEuVG9rZW5UeXBlLkVxKTtcclxuZXhwb3J0cy5BUkcgPSB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIkBpZFwiLCBjb21iaW5hdG9yc18xLnRhZyhcIkBcIiksIElEX1NOSVBQRVQpLCAoW2F0LCBpZF0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hcmcoc3Bhbl8xLnJhbmdlKGF0LCBpZCkpKSk7XHJcbmV4cG9ydHMuRVhQUkVTU0lPTiA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IGNvbWJpbmF0b3JzXzEuYW55KFwiRVhQUkVTU0lPTlwiLCBleHBvcnRzLlNFWFAsIGV4cG9ydHMuU0lNUExFX1BBVEgsIGV4cG9ydHMuU1RSSU5HLCBleHBvcnRzLk5VTUJFUikpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JcIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3Qgc3RhcnRfdGFnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvaHRtbC9zdGFydC10YWdcIikpO1xyXG5jb25zdCB0ZXh0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvaHRtbC90ZXh0XCIpKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuY29uc3QgZW5kX3RhZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2h0bWwvZW5kLXRhZ1wiKSk7XHJcbmV4cG9ydHMuVEVYVCA9IG5ldyB0ZXh0XzEuZGVmYXVsdCgpO1xyXG5leHBvcnRzLlNUQVJUX1RBRyA9IG5ldyBzdGFydF90YWdfMS5kZWZhdWx0KCk7XHJcbmV4cG9ydHMuRU5EX1RBRyA9IG5ldyBlbmRfdGFnXzEuZGVmYXVsdCgpO1xyXG5leHBvcnRzLkNPTU1FTlQgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIkNPTU1FTlRcIiwgY29tYmluYXRvcnNfMS50YWcoXCI8IS0tXCIpLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL14uKig/PVstXVstXVs+XSkvdSwgXCJjb21tZW50IGJvZHlcIiksIGNvbWJpbmF0b3JzXzEudGFnKFwiLS0+XCIpKSwgKFtzdGFydCwgZGF0YSwgZW5kXSkgPT4ge1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5jb21tZW50KGRhdGEuc3Bhbiwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKSk7XHJcbn0pKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IGRlYnVnXzEgPSByZXF1aXJlKFwiLi9kZWJ1Z1wiKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbmFibGVMb2dnaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVMb2dnaW5nID0gZW5hYmxlTG9nZ2luZztcclxuICAgIH1cclxuICAgIGludm9rZShjLCBpbnB1dCwgeyBmb3JjZVRyYW5zcGFyZW50LCBvcHRpb25hbCwgfSA9IHt9KSB7XHJcbiAgICAgICAgbGV0IGxvZ2dlZCA9IHRoaXMuZW5hYmxlTG9nZ2luZyAmJiAhaXNUcmFuc3BhcmVudChjKSAmJiAhZm9yY2VUcmFuc3BhcmVudDtcclxuICAgICAgICBpZiAobG9nZ2VkKSB7XHJcbiAgICAgICAgICAgIGRlYnVnXzEucHJlSW52b2tlKHsgY29tYmluYXRvcjogYywgc25pcHBldDogaW5wdXQsIG9wdGlvbmFsOiAhIW9wdGlvbmFsIH0pO1xyXG4gICAgICAgICAgICBkZWJ1Z18xLmluZGVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0ID0gYy5pbnZva2UoaW5wdXQpO1xyXG4gICAgICAgIGlmIChsb2dnZWQpIHtcclxuICAgICAgICAgICAgZGVidWdfMS5vdXRkZW50KCk7XHJcbiAgICAgICAgICAgIGRlYnVnXzEucG9zdEludm9rZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuTG9nZ2VyID0gTG9nZ2VyO1xyXG5mdW5jdGlvbiBjb21iaW5hdG9yRGVidWdUeXBlKGMpIHtcclxuICAgIGlmICh0eXBlb2YgYyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYy5raW5kIHx8IFwibm9ybWFsXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5jb21iaW5hdG9yRGVidWdUeXBlID0gY29tYmluYXRvckRlYnVnVHlwZTtcclxuZnVuY3Rpb24gaXNUcmFuc3BhcmVudChjKSB7XHJcbiAgICBpZiAodHlwZW9mIGMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjLmtpbmQgPT09IFwidHJhbnNwYXJlbnRcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmlzVHJhbnNwYXJlbnQgPSBpc1RyYW5zcGFyZW50O1xyXG5mdW5jdGlvbiBmb3JtYXREZWJ1Z2dhYmxlKGRlYnVnZ2FibGUpIHtcclxuICAgIGlmICh0eXBlb2YgZGVidWdnYWJsZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBkZWJ1Z2dhYmxlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVidWdnYWJsZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBcIm51bGxcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGVidWdnYWJsZSkpIHtcclxuICAgICAgICBpZiAoZGVidWdnYWJsZS5sZW5ndGggPD0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gYFske2RlYnVnZ2FibGVcclxuICAgICAgICAgICAgICAgIC5tYXAoZm9ybWF0RGVidWdnYWJsZSlcclxuICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIil9XWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYFske2Zvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZVswXSl9LCAke2Zvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZVsxXSl9LCAke2Zvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZVsyXSl9LCAuLi5dYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z2dhYmxlIGluc3RhbmNlb2Ygc25pcHBldF8xLlNuaXBwZXQpIHtcclxuICAgICAgICByZXR1cm4gZGVidWdnYWJsZS5mbXQoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0b2tlbnNfMS5kZWJ1Z0Zvcm1hdFRva2VuKGRlYnVnZ2FibGUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZm9ybWF0RGVidWdnYWJsZSA9IGZvcm1hdERlYnVnZ2FibGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIG1hbnkoc291cmNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGBtYW55IOKAoiAke3V0aWxzXzEuY29tYmluYXRvck5hbWUoc291cmNlKX1gLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgICAgICBsZXQgb3V0ID0gW107XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQrKyA+IDEwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJsaWtlbHkgaW5maW5pdGUgbG9vcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZXJhdGUgPSBjdXJyZW50Lmludm9rZSh1dGlsc18xLnByZXNlbnQoc291cmNlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0ZS5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgZW5jb3VudGVyZWQgYSBmYXRhbCBlcnJvciwgdGhlIGVudGlyZSBgbWFueWBcclxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBhbiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVyYXRlLmZhdGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgW25leHQsIG1hdGNoXSA9IGl0ZXJhdGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYW55ID0gbWFueTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5jb25zdCBjb21iaW5hdG9yXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yXCIpO1xyXG5jb25zdCBjb21iaW5hdG9yc18xID0gcmVxdWlyZShcIi4vY29tYmluYXRvcnNcIik7XHJcbmNvbnN0IGxvZ2dlcl8xID0gcmVxdWlyZShcIi4vbG9nZ2VyXCIpO1xyXG5jb25zdCBkZWJ1Z18xID0gcmVxdWlyZShcIi4vZGVidWdcIik7XHJcbmNvbnN0IGh0bWxfMSA9IHJlcXVpcmUoXCIuL2h0bWxcIik7XHJcbmNvbnN0IG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbmZ1bmN0aW9uIHJlYWQoc291cmNlLCB7IGxvZ2dpbmcgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBzbmlwcGV0XzEuU25pcHBldC5pbnB1dChzb3VyY2UsIG5ldyBsb2dnZXJfMS5Mb2dnZXIobG9nZ2luZyB8fCBmYWxzZSkpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodXRpbHNfMS5jb21wbGV0ZSh1dGlsc18xLm1hcChtdWx0aV8xLm1hbnkoZXhwb3J0cy5UT1BfTEVWRUwpLCB0b2tlbnMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnJvb3QodG9rZW5zLCBzcGFuXzEucmFuZ2UoLi4udG9rZW5zKSkpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubWFwUmVzdWx0KHJlc3VsdCwgKFssIHRva2VuXSkgPT4gc25pcHBldF8xLm9rKHRva2VuKSk7XHJcbiAgICB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICBpZiAobG9nZ2luZykge1xyXG4gICAgICAgICAgICBkZWJ1Z18xLnByaW50RGVidWcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5yZWFkID0gcmVhZDtcclxuZXhwb3J0cy5UT1BfTEVWRUwgPSB7XHJcbiAgICBuYW1lOiBcIlRPUF9MRVZFTFwiLFxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShjb21iaW5hdG9yc18xLmFueShcInRvcCBsZXZlbFwiLCBoYnNfMS5CTE9DSywgaGJzXzEuSU5URVJQT0xBVEUsIGV4cG9ydHMuQ09OVEVOVCkpO1xyXG4gICAgfSxcclxufTtcclxuZXhwb3J0cy5DT05URU5UID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5hbnkoXCJDT05URU5UXCIsIGh0bWxfMS5DT01NRU5ULCBodG1sXzEuRU5EX1RBRywgaHRtbF8xLlNUQVJUX1RBRywgaHRtbF8xLlRFWFQpKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZVJvb3Qocm9vdCwgc291cmNlKSB7XHJcbiAgICBsZXQgb3V0ID0gW107XHJcbiAgICBmb3IgKGxldCB0b2tlbiBvZiByb290LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgb3V0LnB1c2goLi4uc2VyaWFsaXplTm9kZSh0b2tlbiwgc291cmNlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0LmpvaW4oXCJcIik7XHJcbn1cclxuZXhwb3J0cy5zZXJpYWxpemVSb290ID0gc2VyaWFsaXplUm9vdDtcclxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZSh0b2tlbiwgc291cmNlKSB7XHJcbiAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW1wiXCJdO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgLy8gbGVhZiB0b2tlbnNcclxuICAgICAgICBjYXNlIHRva2Vuc18xLlRva2VuVHlwZS5Eb3Q6XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5Ub2tlblR5cGUuRXE6XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5Ub2tlblR5cGUuSWRlbnRpZmllcjpcclxuICAgICAgICBjYXNlIHRva2Vuc18xLlRva2VuVHlwZS5XUzpcclxuICAgICAgICBjYXNlIHRva2Vuc18xLlRva2VuVHlwZS5UZXh0OlxyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLkF0dHJpYnV0ZU5hbWU6XHJcbiAgICAgICAgICAgIHJldHVybiBbc3Bhbl8xLnNsaWNlKHRva2VuLnNwYW4sIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLlN0cmluZzoge1xyXG4gICAgICAgICAgICBsZXQgcXVvdGUgPSB0b2tlbi5xdW90ZSA9PT0gdG9rZW5zXzEuUXVvdGVUeXBlLlNpbmdsZSA/IGAnYCA6IGBcImA7XHJcbiAgICAgICAgICAgIHJldHVybiBbcXVvdGUsIHNwYW5fMS5zbGljZSh0b2tlbi5kYXRhLCBzb3VyY2UpLCBxdW90ZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLk51bWJlcjoge1xyXG4gICAgICAgICAgICBsZXQgb3V0ID0gW107XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5uZWdhdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2goc3Bhbl8xLnNsaWNlKHRva2VuLm5lZ2F0aXZlLCBzb3VyY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXQucHVzaChzcGFuXzEuc2xpY2UodG9rZW4uaGVhZCwgc291cmNlKSk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi50YWlsKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaChcIi5cIiwgc3Bhbl8xLnNsaWNlKHRva2VuLnRhaWwsIHNvdXJjZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLkFyZ05hbWU6XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJAXCIsIHNwYW5fMS5zbGljZSh0b2tlbi5uYW1lLCBzb3VyY2UpXTtcclxuICAgICAgICBjYXNlIHRva2Vuc18xLlRva2VuVHlwZS5BdHRyaWJ1dGVWYWx1ZTpcclxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZUF0dHJpYnV0ZVZhbHVlKHRva2VuLCBzb3VyY2UpO1xyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLkFyZ3VtZW50OlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiQFwiLCBzcGFuXzEuc2xpY2UodG9rZW4ubmFtZSwgc291cmNlKV07XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5Ub2tlblR5cGUuU2V4cDpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIihcIiwgLi4uc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgXCIpXCJdO1xyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLkludGVycG9sYXRlOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wie3tcIiwgLi4uc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgXCJ9fVwiXTtcclxuICAgICAgICBjYXNlIHRva2Vuc18xLlRva2VuVHlwZS5UcnVzdGVkSW50ZXJwb2xhdGU6XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJ7e3tcIiwgLi4uc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgXCJ9fX1cIl07XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5Ub2tlblR5cGUuQmxvY2s6XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLm9wZW4sIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLmJvZHksIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLmNsb3NlLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLk9wZW5CbG9jazpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFwie3sjXCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLmhlYWQsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICBcIn19XCIsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5Ub2tlblR5cGUuQmxvY2tQYXJhbXM6XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJhcyB8XCIsIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4ucGFyYW1zLCBzb3VyY2UpLCBcInxcIl07XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5Ub2tlblR5cGUuQ2xvc2VCbG9jazpcclxuICAgICAgICAgICAgcmV0dXJuIFtcInt7L1wiLCAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksIFwifX1cIl07XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5Ub2tlblR5cGUuQ29tbWVudDpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIjwhLS1cIiwgc3Bhbl8xLnNsaWNlKHRva2VuLmRhdGEsIHNvdXJjZSksIFwiLS0+XCJdO1xyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLlN0YXJ0VGFnOlxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgXCI8XCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLmF0dHJpYnV0ZXMsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICBcIj5cIixcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBjYXNlIHRva2Vuc18xLlRva2VuVHlwZS5FbmRUYWc6XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBcIjwvXCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLnRyYWlsaW5nLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgXCI+XCIsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5Ub2tlblR5cGUuVmFsdWVkQXR0cmlidXRlOlxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uc2VyaWFsaXplTm9kZSh0b2tlbi5uYW1lLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgXCI9XCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLnZhbHVlLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgdG9rZW5zXzEuVG9rZW5UeXBlLlN0cmluZ0ludGVycG9sYXRpb246XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0KHRva2VuLnBhcnRzLCBzb3VyY2UpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLnVucmVhY2hhYmxlKHRva2VuKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZU5vZGUgPSBzZXJpYWxpemVOb2RlO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZSh0b2tlbiwgc291cmNlKSB7XHJcbiAgICBpZiAodG9rZW5zXzEuaXNJbnRlcnBvbGF0ZUF0dHJpYnV0ZSh0b2tlbikpIHtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplTm9kZSh0b2tlbi52YWx1ZSwgc291cmNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pLFxyXG4gICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4udmFsdWUsIHNvdXJjZSksXHJcbiAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pLFxyXG4gICAgXTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVRdW90ZSh0b2tlbikge1xyXG4gICAgc3dpdGNoICh0b2tlbi52YWx1ZVR5cGUpIHtcclxuICAgICAgICBjYXNlIHRva2Vuc18xLkF0dHJpYnV0ZVZhbHVlVHlwZS5TaW5nbGVRdW90ZWQ6XHJcbiAgICAgICAgICAgIHJldHVybiBgJ2A7XHJcbiAgICAgICAgY2FzZSB0b2tlbnNfMS5BdHRyaWJ1dGVWYWx1ZVR5cGUuRG91YmxlUXVvdGVkOlxyXG4gICAgICAgICAgICByZXR1cm4gYFwiYDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVMaXN0KHRva2Vucywgc291cmNlKSB7XHJcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsuLi50b2tlbnMuZmxhdE1hcChjaGlsZCA9PiBzZXJpYWxpemVOb2RlKGNoaWxkLCBzb3VyY2UpKV07XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0b2tlbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdG9rZW5zXCIpKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmZ1bmN0aW9uIGJ1aWxkUHJlc2VudFRva2Vucyh0b2ssIGJ1aWxkZXIpIHtcclxuICAgIHJldHVybiB0b2subWFwKHRva2VuID0+IHRva2VuKGJ1aWxkZXIpKTtcclxufVxyXG5leHBvcnRzLmJ1aWxkUHJlc2VudFRva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucztcclxuZnVuY3Rpb24gc3RyKG5hbWUpIHtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUobmFtZVswXSk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBidWlsZGVyLmNvbnN1bWUobmFtZS5zbGljZSgxLCAtMSkpO1xyXG4gICAgICAgIGxldCBlbmQgPSBidWlsZGVyLmNvbnN1bWUobmFtZS5zbGljZSgtMSkpO1xyXG4gICAgICAgIGxldCBxdW90ZSA9IG5hbWVbMF0gPT09IGAnYCA/IHRva2Vucy5RdW90ZVR5cGUuU2luZ2xlIDogdG9rZW5zLlF1b3RlVHlwZS5Eb3VibGU7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5zdHJpbmdUb2tlbih7IGRhdGEsIHF1b3RlIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc3RyID0gc3RyO1xyXG5mdW5jdGlvbiBpbnQobnVtKSB7XHJcbiAgICBpZiAobnVtWzBdID09PSBcIi1cIikge1xyXG4gICAgICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICAgICAgbGV0IG5lZ2F0aXZlID0gYnVpbGRlci5jb25zdW1lKFwiLVwiKTtcclxuICAgICAgICAgICAgbGV0IGhlYWQgPSBidWlsZGVyLmNvbnN1bWUobnVtLnNsaWNlKDEpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5udW1iZXJUb2tlbih7IGhlYWQsIHRhaWw6IG51bGwsIG5lZ2F0aXZlIH0sIHNwYW5fMS5yYW5nZShuZWdhdGl2ZSwgaGVhZCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBoZWFkID0gYnVpbGRlci5jb25zdW1lKG51bSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMubnVtYmVyVG9rZW4oeyBoZWFkLCB0YWlsOiBudWxsLCBuZWdhdGl2ZTogbnVsbCB9LCBoZWFkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaW50ID0gaW50O1xyXG5mdW5jdGlvbiBkZWNpbWFsKG51bSkge1xyXG4gICAgbGV0IFssIG5lZ2F0aXZlLCBoZWFkLCB0YWlsXSA9IG51bS5tYXRjaCgvXigtPykoWzAtOV0rKVxcLihbMC05XSspJC8pO1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCBuZWdhdGl2ZVNwYW4gPSBuZWdhdGl2ZSA/IGJ1aWxkZXIuY29uc3VtZShcIi1cIikgOiBudWxsO1xyXG4gICAgICAgIGxldCBoZWFkU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShoZWFkKTtcclxuICAgICAgICBsZXQgdGFpbFNwYW4gPSBudWxsO1xyXG4gICAgICAgIGlmICh0YWlsKSB7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29uc3VtZShcIi5cIik7XHJcbiAgICAgICAgICAgIHRhaWxTcGFuID0gYnVpbGRlci5jb25zdW1lKHRhaWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9rZW5zLm51bWJlclRva2VuKHtcclxuICAgICAgICAgICAgaGVhZDogaGVhZFNwYW4sXHJcbiAgICAgICAgICAgIHRhaWw6IHRhaWxTcGFuLFxyXG4gICAgICAgICAgICBuZWdhdGl2ZTogbmVnYXRpdmVTcGFuLFxyXG4gICAgICAgIH0sIHNwYW5fMS5yYW5nZShuZWdhdGl2ZVNwYW4sIGhlYWRTcGFuLCB0YWlsU3BhbikpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmRlY2ltYWwgPSBkZWNpbWFsO1xyXG5mdW5jdGlvbiBpZChuYW1lKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB0b2tlbnMuaWQoYnVpbGRlci5jb25zdW1lKG5hbWUpKTtcclxufVxyXG5leHBvcnRzLmlkID0gaWQ7XHJcbmZ1bmN0aW9uIGFyZyhuYW1lKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB0b2tlbnMuYXJnKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmV4cG9ydHMuZG90ID0gYnVpbGRlciA9PiB0b2tlbnMuZG90KGJ1aWxkZXIuY29uc3VtZShcIi5cIikpO1xyXG5leHBvcnRzLmVxID0gYnVpbGRlciA9PiB0b2tlbnMuZXEoYnVpbGRlci5jb25zdW1lKFwiPVwiKSk7XHJcbmV4cG9ydHMuc3AgPSBidWlsZGVyID0+IHRva2Vucy53cyhidWlsZGVyLmNvbnN1bWUoXCIgXCIpKTtcclxuZnVuY3Rpb24gd3Moc3BhY2UpIHtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHRva2Vucy53cyhidWlsZGVyLmNvbnN1bWUoc3BhY2UpKTtcclxufVxyXG5leHBvcnRzLndzID0gd3M7XHJcbmZ1bmN0aW9uIGJsb2NrKG5hbWUsIGhlYWQsIC4uLmJvZHkpIHtcclxuICAgIGxldCBjdXJyaWVkTmFtZSA9IHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiID8gW2lkKG5hbWUpXSA6IG5hbWU7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW5Ub2tlbiA9IGJ1aWxkZXIuY29uc3VtZShcInt7I1wiKTtcclxuICAgICAgICBsZXQgbmFtZVRva2VucyA9IGJ1aWxkVG9rZW5zKGN1cnJpZWROYW1lLCBidWlsZGVyKTtcclxuICAgICAgICBsZXQgaGVhZFRva2VucyA9IGJ1aWxkVG9rZW5zKGhlYWQsIGJ1aWxkZXIpO1xyXG4gICAgICAgIGxldCBlbmRPcGVuID0gYnVpbGRlci5jb25zdW1lKFwifX1cIik7XHJcbiAgICAgICAgbGV0IGJvZHlUb2tlbnMgPSBib2R5Lm1hcCh0b2sgPT4gdG9rKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCJ7ey9cIik7XHJcbiAgICAgICAgbGV0IGNsb3NlTmFtZSA9IGJ1aWxkVG9rZW5zKGN1cnJpZWROYW1lLCBidWlsZGVyKTtcclxuICAgICAgICBsZXQgZW5kQ2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCJ9fVwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmJsb2NrKHtcclxuICAgICAgICAgICAgb3BlbjogdG9rZW5zLm9wZW5CbG9jayh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lVG9rZW5zLFxyXG4gICAgICAgICAgICAgICAgaGVhZDogaGVhZFRva2VucyxcclxuICAgICAgICAgICAgfSwgc3Bhbl8xLnJhbmdlKG9wZW5Ub2tlbiwgZW5kT3BlbikpLFxyXG4gICAgICAgICAgICBib2R5OiBib2R5VG9rZW5zLFxyXG4gICAgICAgICAgICBjbG9zZTogdG9rZW5zLmNsb3NlQmxvY2soY2xvc2VOYW1lLCBzcGFuXzEucmFuZ2UoY2xvc2UsIGVuZENsb3NlKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYmxvY2sgPSBibG9jaztcclxuZnVuY3Rpb24gYXMoLi4ucGFyYW1zKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiYXMgfFwiKTtcclxuICAgICAgICBsZXQgaGVhZCA9IHBhcmFtcy5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgbGV0IHRhaWwgPSBwYXJhbXMuc2xpY2UoLTEpWzBdO1xyXG4gICAgICAgIGxldCB0b2tlbkxpc3QgPSBoZWFkLmZsYXRNYXAocGFyYW0gPT4gdHlwZW9mIHBhcmFtID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgPyBbcGFyYW0oYnVpbGRlcildXHJcbiAgICAgICAgICAgIDogW2lkKHBhcmFtKShidWlsZGVyKSwgZXhwb3J0cy5zcChidWlsZGVyKV0pO1xyXG4gICAgICAgIHRva2VuTGlzdC5wdXNoKGlkKHRhaWwpKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgZW5kID0gYnVpbGRlci5jb25zdW1lKFwifFwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmJsb2NrUGFyYW1zKHRva2VuTGlzdCwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hcyA9IGFzO1xyXG5mdW5jdGlvbiBidWlsZFRva2VucyhpbnB1dCwgYnVpbGRlcikge1xyXG4gICAgcmV0dXJuIGlucHV0Lm1hcCh0b2sgPT4gdG9rKGJ1aWxkZXIpKTtcclxufVxyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwie3tcIik7XHJcbiAgICAgICAgbGV0IG91dCA9IGNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZChidWlsZGVyKSk7XHJcbiAgICAgICAgbGV0IGNsb3NlID0gYnVpbGRlci5jb25zdW1lKFwifX1cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5pbnRlcnBvbGF0ZShvdXQsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHN0cmluZ0ludGVycG9sYXRlKGNoaWxkcmVuLCBxdW90ZSkge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuID0gYnVpbGRlci5jb25zdW1lKHF1b3RlKTtcclxuICAgICAgICBsZXQgb3V0ID0gY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUocXVvdGUpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgdHlwZTogcXVvdGVUeXBlKHF1b3RlKSxcclxuICAgICAgICAgICAgdmFsdWU6IHRva2Vucy5zdHJpbmdJbnRlcnBvbGF0aW9uKG91dCwgc3Bhbl8xLnJhbmdlKC4uLm91dCkpLFxyXG4gICAgICAgIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0cmluZ0ludGVycG9sYXRlID0gc3RyaW5nSW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIGF0dHJJbnRlcnBvbGF0ZSguLi50b2tlbkxpc3QpIHtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBpbnRlcnBvbGF0ZSguLi50b2tlbkxpc3QpKGJ1aWxkZXIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgdHlwZTogdG9rZW5zLkF0dHJpYnV0ZVZhbHVlVHlwZS5JbnRlcnBvbGF0ZSxcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgfSwgdmFsdWUuc3Bhbik7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXR0ckludGVycG9sYXRlID0gYXR0ckludGVycG9sYXRlO1xyXG5mdW5jdGlvbiBzZXhwKGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBidWlsZGVyLmNvbnN1bWUoXCIoXCIpO1xyXG4gICAgICAgIGxldCBvdXQgPSBjaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQoYnVpbGRlcikpO1xyXG4gICAgICAgIGxldCBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcIilcIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5zZXhwKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2V4cCA9IHNleHA7XHJcbmZ1bmN0aW9uIHRleHQoY2hhcnMpIHtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgb3V0ID0gYnVpbGRlci5jb25zdW1lKGNoYXJzKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLnRleHQob3V0KTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50ZXh0ID0gdGV4dDtcclxuZnVuY3Rpb24gY29tbWVudChjaGFycykge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydCA9IGJ1aWxkZXIuY29uc3VtZShcIjwhLS1cIik7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBidWlsZGVyLmNvbnN1bWUoY2hhcnMpO1xyXG4gICAgICAgIGxldCBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCItLT5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5jb21tZW50KGRhdGEsIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tbWVudCA9IGNvbW1lbnQ7XHJcbmZ1bmN0aW9uIGlzVGFnTmFtZShpbnB1dCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICBBcnJheS5pc0FycmF5KGlucHV0KSB8fFxyXG4gICAgICAgIHR5cGVvZiBpbnB1dCA9PT0gXCJmdW5jdGlvblwiKTtcclxufVxyXG5mdW5jdGlvbiBidWlsZFRhZ05hbWUobmFtZSkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZSkpIHtcclxuICAgICAgICBsZXQgdG9rcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHBhcnQgb2YgbmFtZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdG9rcy5wdXNoKHBhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJ0WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rcy5wdXNoKGFyZyhwYXJ0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva3MucHVzaChpZChwYXJ0KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRva3M7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gW25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoIChuYW1lWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbYXJnKG5hbWUpXTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtpZChuYW1lKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc3RhcnRUYWcob3B0aW9ucykge1xyXG4gICAgaWYgKGlzVGFnTmFtZShvcHRpb25zKSkge1xyXG4gICAgICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWVUb2tlbnMgPSBidWlsZFByZXNlbnRUb2tlbnMoYnVpbGRUYWdOYW1lKG9wdGlvbnMpLCBidWlsZGVyKTtcclxuICAgICAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMuc3RhcnRUYWcoeyBuYW1lOiBuYW1lVG9rZW5zIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICAgICAgbGV0IHsgbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nIH0gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8XCIpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZVRva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucyhidWlsZFRhZ05hbWUobmFtZSksIGJ1aWxkZXIpO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBhdHRycy5tYXAoYSA9PiBhKGJ1aWxkZXIpKTtcclxuICAgICAgICAgICAgaWYgKHNlbGZDbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUoXCIvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCI+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnN0YXJ0VGFnKHsgbmFtZTogbmFtZVRva2VucywgYXR0cnM6IGNoaWxkcmVuLCBzZWxmQ2xvc2luZyB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zdGFydFRhZyA9IHN0YXJ0VGFnO1xyXG5mdW5jdGlvbiBlbmRUYWcob3B0aW9ucykge1xyXG4gICAgbGV0IHRhZ05hbWUgPSBpc1RhZ05hbWUob3B0aW9ucykgPyBvcHRpb25zIDogb3B0aW9ucy5uYW1lO1xyXG4gICAgbGV0IHRyYWlsaW5nID0gaXNUYWdOYW1lKG9wdGlvbnMpID8gdW5kZWZpbmVkIDogb3B0aW9ucy50cmFpbGluZztcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8L1wiKTtcclxuICAgICAgICBsZXQgdGFnVG9rZW5zID0gYnVpbGRQcmVzZW50VG9rZW5zKGJ1aWxkVGFnTmFtZSh0YWdOYW1lKSwgYnVpbGRlcik7XHJcbiAgICAgICAgbGV0IHRyYWlsaW5nVG9rZW4gPSB0cmFpbGluZyA/IHdzKHRyYWlsaW5nKShidWlsZGVyKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiPlwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmVuZFRhZyh7IG5hbWU6IHRhZ1Rva2VucywgdHJhaWxpbmc6IHRyYWlsaW5nVG9rZW4gfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lbmRUYWcgPSBlbmRUYWc7XHJcbmZ1bmN0aW9uIGFyZ05hbWUobmFtZSkge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydFNwYW4gPSBidWlsZGVyLmNvbnN1bWUobmFtZVswXSk7XHJcbiAgICAgICAgbGV0IG5hbWVTcGFuID0gYnVpbGRlci5jb25zdW1lKG5hbWUuc2xpY2UoMSkpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYXJnTmFtZShuYW1lU3Bhbiwgc3Bhbl8xLnJhbmdlKHN0YXJ0U3BhbiwgbmFtZVNwYW4pKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hcmdOYW1lID0gYXJnTmFtZTtcclxuZnVuY3Rpb24gYXR0cihvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShvcHRpb25zKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5hdHRyTmFtZShuYW1lU3Bhbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICAgICAgbGV0IHsgbmFtZSwgdmFsdWU6IHJhd1ZhbHVlIH0gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgICAgICAgICAgbGV0IG5hbWVUb2tlbiA9IHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICA/IHRva2Vucy5hdHRyTmFtZShidWlsZGVyLmNvbnN1bWUobmFtZSkpXHJcbiAgICAgICAgICAgICAgICA6IG5hbWUoYnVpbGRlcik7XHJcbiAgICAgICAgICAgIGJ1aWxkZXIuY29uc3VtZShcIj1cIik7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVRva2VuO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJhd1ZhbHVlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBgXCJgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZVN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKGBcImApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVTcGFuID0gYnVpbGRlci5jb25zdW1lKHJhd1ZhbHVlLnNsaWNlKDEsIC0xKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZUVuZCA9IGJ1aWxkZXIuY29uc3VtZShgXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVycG9sYXRpb24gPSB0b2tlbnMuc3RyaW5nSW50ZXJwb2xhdGlvbihbdG9rZW5zLnRleHQodmFsdWVTcGFuKV0sIHZhbHVlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9rZW4gPSB0b2tlbnMuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHRva2Vucy5BdHRyaWJ1dGVWYWx1ZVR5cGUuRG91YmxlUXVvdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGludGVycG9sYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNwYW5fMS5yYW5nZShxdW90ZVN0YXJ0LCBxdW90ZUVuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBgJ2A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlU3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoYCdgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShyYXdWYWx1ZS5zbGljZSgxLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVFbmQgPSBidWlsZGVyLmNvbnN1bWUoYCdgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVycG9sYXRpb24gPSB0b2tlbnMuc3RyaW5nSW50ZXJwb2xhdGlvbihbdG9rZW5zLnRleHQodmFsdWVTcGFuKV0sIHZhbHVlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9rZW4gPSB0b2tlbnMuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHRva2Vucy5BdHRyaWJ1dGVWYWx1ZVR5cGUuU2luZ2xlUXVvdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGludGVycG9sYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNwYW5fMS5yYW5nZShxdW90ZVN0YXJ0LCBxdW90ZUVuZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVTcGFuID0gYnVpbGRlci5jb25zdW1lKHJhd1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVycG9sYXRpb24gPSB0b2tlbnMuc3RyaW5nSW50ZXJwb2xhdGlvbihbdG9rZW5zLnRleHQodmFsdWVTcGFuKV0sIHZhbHVlU3Bhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9rZW4gPSB0b2tlbnMuYXR0clZhbHVlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHRva2Vucy5BdHRyaWJ1dGVWYWx1ZVR5cGUuVW5xdW90ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTcGFuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gcmF3VmFsdWUoYnVpbGRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnZhbHVlZEF0dHIoeyBuYW1lOiBuYW1lVG9rZW4sIHZhbHVlOiB2YWx1ZVRva2VuIH0sIHsgc3RhcnQsIGVuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuYXR0ciA9IGF0dHI7XHJcbmZ1bmN0aW9uIHF1b3RlVHlwZShxdW90ZSkge1xyXG4gICAgc3dpdGNoIChxdW90ZSkge1xyXG4gICAgICAgIGNhc2UgYFwiYDpcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5BdHRyaWJ1dGVWYWx1ZVR5cGUuRG91YmxlUXVvdGVkO1xyXG4gICAgICAgIGNhc2UgYCdgOlxyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLkF0dHJpYnV0ZVZhbHVlVHlwZS5TaW5nbGVRdW90ZWQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5BdHRyaWJ1dGVWYWx1ZVR5cGUuVW5xdW90ZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcm9vdCguLi5jaGlsZHJlbikge1xyXG4gICAgbGV0IGJ1aWxkZXIgPSBuZXcgVG9rZW5CdWlsZGVyKCk7XHJcbiAgICBsZXQgc3RhcnQgPSBidWlsZGVyLnBvcztcclxuICAgIGxldCBvdXQgPSBjaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQoYnVpbGRlcikpO1xyXG4gICAgbGV0IGVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgcmV0dXJuIHsgcm9vdDogdG9rZW5zLnJvb3Qob3V0LCBzcGFuXzEuc3BhbihzdGFydCwgZW5kKSksIHNvdXJjZTogYnVpbGRlci5zb3VyY2UgfTtcclxufVxyXG5leHBvcnRzLnJvb3QgPSByb290O1xyXG5jbGFzcyBUb2tlbkJ1aWxkZXIge1xyXG4gICAgY29uc3RydWN0b3IocG9zID0gMCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMub3V0cHV0ID0gXCJcIjtcclxuICAgIH1cclxuICAgIGNvbnN1bWUoY2hhcnMpIHtcclxuICAgICAgICB0aGlzLm91dHB1dCArPSBjaGFycztcclxuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLnBvcztcclxuICAgICAgICB0aGlzLnBvcyArPSBjaGFycy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZDogdGhpcy5wb3MgfTtcclxuICAgIH1cclxuICAgIGdldCBzb3VyY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0cHV0O1xyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG4vKipcclxuICogU3RlcHMgZm9yIGNyZWF0aW5nIGEgbmV3IHRva2VuIHR5cGU6XHJcbiAqXHJcbiAqIDEuIGFkZCBhIHZhcmlhbnQgdG8gVG9rZW5UeXBlXHJcbiAqIDIuIGNyZWF0ZSBhbiBpbnRlcmZhY2Uge05hbWV9VG9rZW5cclxuICogMy4gYWRkIHRoZSBuZXcgdG9rZW4gdG8gTGVhZlRva2VuTWFwIG9yIFRva2VuTWFwXHJcbiAqIDQuIHVwZGF0ZSBzZXJpYWxpemVOb2RlIHRvIHNlcmlhbGl6ZSB0aGUgbmV3IHRva2VuXHJcbiAqIDUuIGFkZCBhIGZ1bmN0aW9uIHRvIGNvbnN0cnVjdCB0aGUgbmV3IHRva2VuICh1bmxlc3MgaXQncyBhbHdheXMgbmVzdGVkXHJcbiAqICAgIGluc2lkZSBhbm90aGVyIHRva2VuIGxpa2UgYEJsb2NrUGFyYW1zYClcclxuICogNi4gdXBkYXRlIHRva2VuLWJ1aWxkZXIudHMgdG8gc3VwcG9ydCBidWlsZGluZyB0aGUgbmV3IHRva2VuXHJcbiAqL1xyXG52YXIgVG9rZW5UeXBlO1xyXG4oZnVuY3Rpb24gKFRva2VuVHlwZSkge1xyXG4gICAgVG9rZW5UeXBlW1wiUm9vdFwiXSA9IFwiUm9vdFwiO1xyXG4gICAgVG9rZW5UeXBlW1wiSW50ZXJwb2xhdGVcIl0gPSBcIkludGVycG9sYXRlXCI7XHJcbiAgICBUb2tlblR5cGVbXCJUcnVzdGVkSW50ZXJwb2xhdGVcIl0gPSBcIlRydXN0ZWRJbnRlcnBvbGF0ZVwiO1xyXG4gICAgLy8gVE9ETzogRWl0aGVyIHdlIHNob3VsZCBoYXZlIEJsb2NrIGFuZCBFbGVtZW50IG9yIFN0YXJ0QmxvY2svRW5kQmxvY2sgYW5kIFN0YXJ0RWxlbWVudC9FbmRFbGVtZW50XHJcbiAgICBUb2tlblR5cGVbXCJCbG9ja1wiXSA9IFwiQmxvY2tcIjtcclxuICAgIFRva2VuVHlwZVtcIkJsb2NrUGFyYW1zXCJdID0gXCJCbG9ja1BhcmFtc1wiO1xyXG4gICAgVG9rZW5UeXBlW1wiT3BlbkJsb2NrXCJdID0gXCJPcGVuQmxvY2tcIjtcclxuICAgIFRva2VuVHlwZVtcIkNsb3NlQmxvY2tcIl0gPSBcIkNsb3NlQmxvY2tcIjtcclxuICAgIFRva2VuVHlwZVtcIlNleHBcIl0gPSBcIlNleHBcIjtcclxuICAgIFRva2VuVHlwZVtcIklkZW50aWZpZXJcIl0gPSBcIklkZW50aWZpZXJcIjtcclxuICAgIFRva2VuVHlwZVtcIkFyZ3VtZW50XCJdID0gXCJBcmd1bWVudFwiO1xyXG4gICAgVG9rZW5UeXBlW1wiRG90XCJdID0gXCJEb3RcIjtcclxuICAgIFRva2VuVHlwZVtcIkVxXCJdID0gXCJFcVwiO1xyXG4gICAgVG9rZW5UeXBlW1wiV1NcIl0gPSBcIldTXCI7XHJcbiAgICBUb2tlblR5cGVbXCJTdHJpbmdcIl0gPSBcIlN0cmluZ1wiO1xyXG4gICAgVG9rZW5UeXBlW1wiTnVtYmVyXCJdID0gXCJOdW1iZXJcIjtcclxuICAgIC8vIEhUTUxcclxuICAgIFRva2VuVHlwZVtcIlRleHRcIl0gPSBcIlRleHRcIjtcclxuICAgIFRva2VuVHlwZVtcIkNvbW1lbnRcIl0gPSBcIkNvbW1lbnRcIjtcclxuICAgIFRva2VuVHlwZVtcIlN0YXJ0VGFnXCJdID0gXCJTdGFydFRhZ1wiO1xyXG4gICAgVG9rZW5UeXBlW1wiRW5kVGFnXCJdID0gXCJFbmRUYWdcIjtcclxuICAgIFRva2VuVHlwZVtcIkFyZ05hbWVcIl0gPSBcIkFyZ05hbWVcIjtcclxuICAgIFRva2VuVHlwZVtcIkF0dHJpYnV0ZU5hbWVcIl0gPSBcIkF0dHJpYnV0ZU5hbWVcIjtcclxuICAgIFRva2VuVHlwZVtcIkF0dHJpYnV0ZVZhbHVlXCJdID0gXCJBdHRyaWJ1dGVWYWx1ZVwiO1xyXG4gICAgVG9rZW5UeXBlW1wiVmFsdWVkQXR0cmlidXRlXCJdID0gXCJWYWx1ZWRBdHRyaWJ1dGVcIjtcclxuICAgIFRva2VuVHlwZVtcIlN0cmluZ0ludGVycG9sYXRpb25cIl0gPSBcIlN0cmluZ0ludGVycG9sYXRpb25cIjtcclxufSkoVG9rZW5UeXBlID0gZXhwb3J0cy5Ub2tlblR5cGUgfHwgKGV4cG9ydHMuVG9rZW5UeXBlID0ge30pKTtcclxuZnVuY3Rpb24gbGVhZih0eXBlKSB7XHJcbiAgICByZXR1cm4gc3BhbiA9PiAoeyB0eXBlLCBzcGFuIH0pO1xyXG59XHJcbmV4cG9ydHMubGVhZiA9IGxlYWY7XHJcbmV4cG9ydHMuaWQgPSBsZWFmKFRva2VuVHlwZS5JZGVudGlmaWVyKTtcclxuZXhwb3J0cy5kb3QgPSBsZWFmKFRva2VuVHlwZS5Eb3QpO1xyXG5leHBvcnRzLmVxID0gbGVhZihUb2tlblR5cGUuRXEpO1xyXG5leHBvcnRzLndzID0gbGVhZihUb2tlblR5cGUuV1MpO1xyXG5leHBvcnRzLnRleHQgPSBsZWFmKFRva2VuVHlwZS5UZXh0KTtcclxuZXhwb3J0cy5hdHRyTmFtZSA9IGxlYWYoVG9rZW5UeXBlLkF0dHJpYnV0ZU5hbWUpO1xyXG52YXIgUXVvdGVUeXBlO1xyXG4oZnVuY3Rpb24gKFF1b3RlVHlwZSkge1xyXG4gICAgUXVvdGVUeXBlW1F1b3RlVHlwZVtcIlNpbmdsZVwiXSA9IDBdID0gXCJTaW5nbGVcIjtcclxuICAgIFF1b3RlVHlwZVtRdW90ZVR5cGVbXCJEb3VibGVcIl0gPSAxXSA9IFwiRG91YmxlXCI7XHJcbn0pKFF1b3RlVHlwZSA9IGV4cG9ydHMuUXVvdGVUeXBlIHx8IChleHBvcnRzLlF1b3RlVHlwZSA9IHt9KSk7XHJcbmZ1bmN0aW9uIHN0cmluZ1Rva2VuKHsgZGF0YSwgcXVvdGUgfSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBUb2tlblR5cGUuU3RyaW5nLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBxdW90ZSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdHJpbmdUb2tlbiA9IHN0cmluZ1Rva2VuO1xyXG5mdW5jdGlvbiBudW1iZXJUb2tlbih7IGhlYWQsIHRhaWwsIG5lZ2F0aXZlLCB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5OdW1iZXIsXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBuZWdhdGl2ZSxcclxuICAgICAgICBoZWFkLFxyXG4gICAgICAgIHRhaWwsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubnVtYmVyVG9rZW4gPSBudW1iZXJUb2tlbjtcclxuZnVuY3Rpb24gY29tbWVudChkYXRhLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5Db21tZW50LFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc3BhbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21tZW50ID0gY29tbWVudDtcclxuZnVuY3Rpb24gYXJnKHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVG9rZW5UeXBlLkFyZ3VtZW50LFxyXG4gICAgICAgIG5hbWU6IHsgc3RhcnQ6IHNwYW4uc3RhcnQgKyAxLCBlbmQ6IHNwYW4uZW5kIH0sXHJcbiAgICAgICAgc3BhbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmZ1bmN0aW9uIGVxdWFsUGF0aChsZWZ0VG9rZW5zLCByaWdodFRva2Vucywgc291cmNlKSB7XHJcbiAgICBpZiAobGVmdFRva2Vucy5sZW5ndGggIT09IHJpZ2h0VG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0VG9rZW5zLmV2ZXJ5KChsZWZ0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCByaWdodCA9IHJpZ2h0VG9rZW5zW2luZGV4XTtcclxuICAgICAgICBpZiAobGVmdC50eXBlICE9PSByaWdodC50eXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChsZWZ0LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBUb2tlblR5cGUuQXJnTmFtZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAoc3Bhbl8xLnNsaWNlKGxlZnQubmFtZSwgc291cmNlKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICBzcGFuXzEuc2xpY2UocmlnaHQubmFtZSwgc291cmNlKSk7XHJcbiAgICAgICAgICAgIGNhc2UgVG9rZW5UeXBlLklkZW50aWZpZXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNwYW5fMS5zbGljZShsZWZ0LnNwYW4sIHNvdXJjZSkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgc3Bhbl8xLnNsaWNlKHJpZ2h0LnNwYW4sIHNvdXJjZSkpO1xyXG4gICAgICAgICAgICBjYXNlIFRva2VuVHlwZS5Eb3Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgYXNzZXJ0OiB1bmV4cGVjdGVkIHRva2VuIHR5cGUgJHtsZWZ0LnR5cGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5lcXVhbFBhdGggPSBlcXVhbFBhdGg7XHJcbmZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBUb2tlblR5cGUuQmxvY2tQYXJhbXMsXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBwYXJhbXMsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYmxvY2tQYXJhbXMgPSBibG9ja1BhcmFtcztcclxuZnVuY3Rpb24gYmxvY2soeyBvcGVuLCBib2R5LCBjbG9zZSB9KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5CbG9jayxcclxuICAgICAgICBzcGFuOiBzcGFuXzEucmFuZ2Uob3Blbi5zcGFuLCBjbG9zZS5zcGFuKSxcclxuICAgICAgICBvcGVuLFxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgICAgY2xvc2UsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYmxvY2sgPSBibG9jaztcclxuZnVuY3Rpb24gb3BlbkJsb2NrKHsgbmFtZSwgaGVhZCB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5PcGVuQmxvY2ssXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGhlYWQsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMub3BlbkJsb2NrID0gb3BlbkJsb2NrO1xyXG5mdW5jdGlvbiBjbG9zZUJsb2NrKG5hbWUsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVG9rZW5UeXBlLkNsb3NlQmxvY2ssXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNsb3NlQmxvY2sgPSBjbG9zZUJsb2NrO1xyXG52YXIgQXR0cmlidXRlVmFsdWVUeXBlO1xyXG4oZnVuY3Rpb24gKEF0dHJpYnV0ZVZhbHVlVHlwZSkge1xyXG4gICAgQXR0cmlidXRlVmFsdWVUeXBlW1wiSW50ZXJwb2xhdGVcIl0gPSBcIkludGVycG9sYXRlXCI7XHJcbiAgICBBdHRyaWJ1dGVWYWx1ZVR5cGVbXCJVbnF1b3RlZFwiXSA9IFwiVW5xdW90ZWRcIjtcclxuICAgIEF0dHJpYnV0ZVZhbHVlVHlwZVtcIlNpbmdsZVF1b3RlZFwiXSA9IFwiU2luZ2xlUXVvdGVkXCI7XHJcbiAgICBBdHRyaWJ1dGVWYWx1ZVR5cGVbXCJEb3VibGVRdW90ZWRcIl0gPSBcIkRvdWJsZVF1b3RlZFwiO1xyXG59KShBdHRyaWJ1dGVWYWx1ZVR5cGUgPSBleHBvcnRzLkF0dHJpYnV0ZVZhbHVlVHlwZSB8fCAoZXhwb3J0cy5BdHRyaWJ1dGVWYWx1ZVR5cGUgPSB7fSkpO1xyXG5mdW5jdGlvbiBhcmdOYW1lKG5hbWUsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogVG9rZW5UeXBlLkFyZ05hbWUsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBzcGFuLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFyZ05hbWUgPSBhcmdOYW1lO1xyXG5mdW5jdGlvbiBzdHJpbmdJbnRlcnBvbGF0aW9uKHBhcnRzLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5TdHJpbmdJbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgcGFydHMsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc3RyaW5nSW50ZXJwb2xhdGlvbiA9IHN0cmluZ0ludGVycG9sYXRpb247XHJcbmZ1bmN0aW9uIGlzSW50ZXJwb2xhdGVBdHRyaWJ1dGUoaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZVR5cGUgPT09IEF0dHJpYnV0ZVZhbHVlVHlwZS5JbnRlcnBvbGF0ZTtcclxufVxyXG5leHBvcnRzLmlzSW50ZXJwb2xhdGVBdHRyaWJ1dGUgPSBpc0ludGVycG9sYXRlQXR0cmlidXRlO1xyXG5mdW5jdGlvbiBhdHRyVmFsdWUoeyB0eXBlLCB2YWx1ZSB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5BdHRyaWJ1dGVWYWx1ZSxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIHZhbHVlVHlwZTogdHlwZSxcclxuICAgICAgICB2YWx1ZSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hdHRyVmFsdWUgPSBhdHRyVmFsdWU7XHJcbmZ1bmN0aW9uIHZhbHVlZEF0dHIoeyBuYW1lLCB2YWx1ZSB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5WYWx1ZWRBdHRyaWJ1dGUsXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnZhbHVlZEF0dHIgPSB2YWx1ZWRBdHRyO1xyXG5mdW5jdGlvbiBzdGFydFRhZyh7IG5hbWUsIGF0dHJzLCBzZWxmQ2xvc2luZyB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5TdGFydFRhZyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgYXR0cmlidXRlczogYXR0cnMgfHwgW10sXHJcbiAgICAgICAgc2VsZkNsb3NpbmcsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc3RhcnRUYWcgPSBzdGFydFRhZztcclxuZnVuY3Rpb24gZW5kVGFnKHsgbmFtZSwgdHJhaWxpbmcgfSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBUb2tlblR5cGUuRW5kVGFnLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgdHJhaWxpbmc6IHRyYWlsaW5nID8gdHJhaWxpbmcgOiBudWxsLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBzZXhwKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5TZXhwLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2V4cCA9IHNleHA7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5JbnRlcnBvbGF0ZSxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHRydXN0ZWRJbnRlcnBvbGF0ZShjaGlsZHJlbiwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBUb2tlblR5cGUuVHJ1c3RlZEludGVycG9sYXRlLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudHJ1c3RlZEludGVycG9sYXRlID0gdHJ1c3RlZEludGVycG9sYXRlO1xyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFRva2VuVHlwZS5Sb290LFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbmZ1bmN0aW9uIGRlYnVnRm9ybWF0VG9rZW4odG9rZW4pIHtcclxuICAgIHJldHVybiBgPHRva2VuOiR7dG9rZW4udHlwZX0+YDtcclxufVxyXG5leHBvcnRzLmRlYnVnRm9ybWF0VG9rZW4gPSBkZWJ1Z0Zvcm1hdFRva2VuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuZnVuY3Rpb24gbWFwUmVzdWx0KHJlc3VsdCwgY2FsbGJhY2spIHtcclxuICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcclxufVxyXG5leHBvcnRzLm1hcFJlc3VsdCA9IG1hcFJlc3VsdDtcclxuZnVuY3Rpb24gbWFwKGNvbWJpbmF0b3IsIG1hcHBlcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBjb21iaW5hdG9yTmFtZShjb21iaW5hdG9yKSxcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3IsIHsgZm9yY2VUcmFuc3BhcmVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IGZpcnN0LnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gbWFwcGVyKHZhbHVlLCBuZXh0KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQsIHJlc3VsdC52YWx1ZV0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWFwID0gbWFwO1xyXG5mdW5jdGlvbiBjb21wbGV0ZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJjb21wbGV0ZVwiLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKG1hcChzb3VyY2UsICh2YWx1ZSwgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHQucmVzdExlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImluY29tcGxldGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuZnVuY3Rpb24gcHJlc2VudChzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogXCJwcmVzZW50XCIsXHJcbiAgICAgICAga2luZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKHNvdXJjZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW25leHRdID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmVxKG5leHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiZW1wdHlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMucHJlc2VudCA9IHByZXNlbnQ7XHJcbmZ1bmN0aW9uIGNvbWJpbmF0b3JOYW1lKGMpIHtcclxuICAgIGlmIChjLm5hbWUpIHtcclxuICAgICAgICByZXR1cm4gYy5uYW1lO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihjKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGFzc2VydDogZXhwZWN0ZWQgY29tYmluYXRvciBuYW1lYCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5jb21iaW5hdG9yTmFtZSA9IGNvbWJpbmF0b3JOYW1lO1xyXG5mdW5jdGlvbiB1bnJlYWNoYWJsZSh2YWx1ZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5yZWFjaGFibGUgdmFsdWVgLCB2YWx1ZSk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVucmVhY2hhYmxlIGNvZGUgcmVhY2hlZGApO1xyXG59XHJcbmV4cG9ydHMudW5yZWFjaGFibGUgPSB1bnJlYWNoYWJsZTtcclxuZnVuY3Rpb24gam9pbiguLi5pdGVtcykge1xyXG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpID0+IGkgPT09IG51bGwgfHwgaSA9PT0gdW5kZWZpbmVkKTtcclxufVxyXG5leHBvcnRzLmpvaW4gPSBqb2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTbmlwcGV0IHtcclxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZSwgb2Zmc2V0LCBsZW5ndGgsIGxvZ2dlcikge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGlucHV0KHNvdXJjZSwgbG9nZ2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHNvdXJjZSwgMCwgMCwgbG9nZ2VyKTtcclxuICAgIH1cclxuICAgIGludm9rZShjb21iaW5hdG9yLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXIuaW52b2tlKGNvbWJpbmF0b3IsIHRoaXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZXEob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc291cmNlID09PSBvdGhlci5zb3VyY2UgJiZcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPT09IG90aGVyLm9mZnNldCAmJlxyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9PT0gb3RoZXIubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGZvclNwYW4oc3Bhbikge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgc3Bhbi5zdGFydCwgc3Bhbi5lbmQgLSBzcGFuLnN0YXJ0LCB0aGlzLmxvZ2dlcik7XHJcbiAgICB9XHJcbiAgICBmbXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGA8b2Zmc2V0OiR7dGhpcy5vZmZzZXR9IGxlbmd0aDoke3RoaXMubGVuZ3RofT5gO1xyXG4gICAgfVxyXG4gICAgZGVidWdSZXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAoZW9mKWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzbGljZShjaGFycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgY2hhcnMsIHRoaXMubG9nZ2VyKTtcclxuICAgIH1cclxuICAgIGdldCBzbGljZVJlc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCAwLCB0aGlzLmxvZ2dlcik7XHJcbiAgICB9XHJcbiAgICBpc0VPRigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCA9PT0gdGhpcy5zb3VyY2UubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaXNNYXRjaChjaGFycykge1xyXG4gICAgICAgIGxldCBzbGljZSA9IHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGggKyBjaGFycy5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBzbGljZSA9PT0gY2hhcnM7XHJcbiAgICB9XHJcbiAgICBleHRlbmQoY291bnQgPSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHRoaXMuc291cmNlLCB0aGlzLm9mZnNldCwgdGhpcy5sZW5ndGggKyBjb3VudCwgdGhpcy5sb2dnZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNwYW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnQ6IHRoaXMub2Zmc2V0LFxyXG4gICAgICAgICAgICBlbmQ6IHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdldCBmcmFnbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJlc3RMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmxlbmd0aCAtIHRoaXMub2Zmc2V0IC0gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5TbmlwcGV0ID0gU25pcHBldDtcclxuZnVuY3Rpb24gb2sodmFsdWUpIHtcclxuICAgIHJldHVybiB7IGtpbmQ6IFwib2tcIiwgdmFsdWUgfTtcclxufVxyXG5leHBvcnRzLm9rID0gb2s7XHJcbmZ1bmN0aW9uIGVycihzbmlwcGV0LCByZWFzb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICBzbmlwcGV0LFxyXG4gICAgICAgIHJlYXNvbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5lcnIgPSBlcnI7XHJcbmZ1bmN0aW9uIGZhdGFsRXJyb3Ioc25pcHBldCwgcmVhc29uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgc25pcHBldCxcclxuICAgICAgICByZWFzb24sXHJcbiAgICAgICAgZmF0YWw6IHRydWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZmF0YWxFcnJvciA9IGZhdGFsRXJyb3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHNwYW4oc3RhcnQsIGVuZCkge1xyXG4gICAgcmV0dXJuIHsgc3RhcnQsIGVuZCB9O1xyXG59XHJcbmV4cG9ydHMuc3BhbiA9IHNwYW47XHJcbmZ1bmN0aW9uIHJhbmdlKC4uLnJhd1NwYW5zKSB7XHJcbiAgICBsZXQgc3BhbnMgPSByYXdTcGFucy5maWx0ZXIocyA9PiBzICE9PSBudWxsICYmIHMgIT09IHVuZGVmaW5lZCk7XHJcbiAgICBpZiAoc3BhbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHNwYW4oMCwgMCk7XHJcbiAgICB9XHJcbiAgICBsZXQgZmlyc3QgPSBzcGFuc1swXTtcclxuICAgIGxldCBsYXN0ID0gZmlyc3Q7XHJcbiAgICBmb3IgKGxldCBzIG9mIHNwYW5zKSB7XHJcbiAgICAgICAgbGFzdCA9IHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdGFydDogZ2V0U3BhbihmaXJzdCkuc3RhcnQsIGVuZDogZ2V0U3BhbihsYXN0KS5lbmQgfTtcclxufVxyXG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XHJcbmZ1bmN0aW9uIGlzU3BhbihpdGVtKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0uc3RhcnQgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGl0ZW0uZW5kID09PSBcIm51bWJlclwiO1xyXG59XHJcbmV4cG9ydHMuaXNTcGFuID0gaXNTcGFuO1xyXG5mdW5jdGlvbiBnZXRTcGFuKGl0ZW0pIHtcclxuICAgIGlmIChpc1NwYW4oaXRlbSkpIHtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnNwYW47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5nZXRTcGFuID0gZ2V0U3BhbjtcclxuZnVuY3Rpb24gc2xpY2Uocywgc291cmNlKSB7XHJcbiAgICByZXR1cm4gc291cmNlLnNsaWNlKHMuc3RhcnQsIHMuZW5kKTtcclxufVxyXG5leHBvcnRzLnNsaWNlID0gc2xpY2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=