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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./node_modules/qunit/qunit/qunit.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./node_modules/qunit/qunit/qunit.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "qunit.css");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./tests/index.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./tests/index.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "index.html");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qunit/qunit/qunit.js":
/*!*******************************************!*\
  !*** ./node_modules/qunit/qunit/qunit.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * QUnit 2.9.3
 * https://qunitjs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-10-08T15:49Z
 */
(function (global$1) {
  'use strict';

  global$1 = global$1 && global$1.hasOwnProperty('default') ? global$1['default'] : global$1;

  var window$1 = global$1.window;
  var self$1 = global$1.self;
  var console = global$1.console;
  var setTimeout$1 = global$1.setTimeout;
  var clearTimeout = global$1.clearTimeout;

  var document$1 = window$1 && window$1.document;
  var navigator = window$1 && window$1.navigator;

  var localSessionStorage = function () {
  	var x = "qunit-test-string";
  	try {
  		global$1.sessionStorage.setItem(x, x);
  		global$1.sessionStorage.removeItem(x);
  		return global$1.sessionStorage;
  	} catch (e) {
  		return undefined;
  	}
  }();

  /**
   * Returns a function that proxies to the given method name on the globals
   * console object. The proxy will also detect if the console doesn't exist and
   * will appropriately no-op. This allows support for IE9, which doesn't have a
   * console if the developer tools are not open.
   */
  function consoleProxy(method) {
  	return function () {
  		if (console) {
  			console[method].apply(console, arguments);
  		}
  	};
  }

  var Logger = {
  	warn: consoleProxy("warn")
  };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };











  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();









































  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var toString = Object.prototype.toString;
  var hasOwn = Object.prototype.hasOwnProperty;
  var now = Date.now || function () {
  	return new Date().getTime();
  };

  var hasPerformanceApi = detectPerformanceApi();
  var performance = hasPerformanceApi ? window$1.performance : undefined;
  var performanceNow = hasPerformanceApi ? performance.now.bind(performance) : now;

  function detectPerformanceApi() {
  	return window$1 && typeof window$1.performance !== "undefined" && typeof window$1.performance.mark === "function" && typeof window$1.performance.measure === "function";
  }

  function measure(comment, startMark, endMark) {

  	// `performance.measure` may fail if the mark could not be found.
  	// reasons a specific mark could not be found include: outside code invoking `performance.clearMarks()`
  	try {
  		performance.measure(comment, startMark, endMark);
  	} catch (ex) {
  		Logger.warn("performance.measure could not be executed because of ", ex.message);
  	}
  }

  var defined = {
  	document: window$1 && window$1.document !== undefined,
  	setTimeout: setTimeout$1 !== undefined
  };

  // Returns a new Array with the elements that are in a but not in b
  function diff(a, b) {
  	var i,
  	    j,
  	    result = a.slice();

  	for (i = 0; i < result.length; i++) {
  		for (j = 0; j < b.length; j++) {
  			if (result[i] === b[j]) {
  				result.splice(i, 1);
  				i--;
  				break;
  			}
  		}
  	}
  	return result;
  }

  /**
   * Determines whether an element exists in a given array or not.
   *
   * @method inArray
   * @param {Any} elem
   * @param {Array} array
   * @return {Boolean}
   */
  function inArray(elem, array) {
  	return array.indexOf(elem) !== -1;
  }

  /**
   * Makes a clone of an object using only Array or Object as base,
   * and copies over the own enumerable properties.
   *
   * @param {Object} obj
   * @return {Object} New object with only the own properties (recursively).
   */
  function objectValues(obj) {
  	var key,
  	    val,
  	    vals = is("array", obj) ? [] : {};
  	for (key in obj) {
  		if (hasOwn.call(obj, key)) {
  			val = obj[key];
  			vals[key] = val === Object(val) ? objectValues(val) : val;
  		}
  	}
  	return vals;
  }

  function extend(a, b, undefOnly) {
  	for (var prop in b) {
  		if (hasOwn.call(b, prop)) {
  			if (b[prop] === undefined) {
  				delete a[prop];
  			} else if (!(undefOnly && typeof a[prop] !== "undefined")) {
  				a[prop] = b[prop];
  			}
  		}
  	}

  	return a;
  }

  function objectType(obj) {
  	if (typeof obj === "undefined") {
  		return "undefined";
  	}

  	// Consider: typeof null === object
  	if (obj === null) {
  		return "null";
  	}

  	var match = toString.call(obj).match(/^\[object\s(.*)\]$/),
  	    type = match && match[1];

  	switch (type) {
  		case "Number":
  			if (isNaN(obj)) {
  				return "nan";
  			}
  			return "number";
  		case "String":
  		case "Boolean":
  		case "Array":
  		case "Set":
  		case "Map":
  		case "Date":
  		case "RegExp":
  		case "Function":
  		case "Symbol":
  			return type.toLowerCase();
  		default:
  			return typeof obj === "undefined" ? "undefined" : _typeof(obj);
  	}
  }

  // Safe object type checking
  function is(type, obj) {
  	return objectType(obj) === type;
  }

  // Based on Java's String.hashCode, a simple but not
  // rigorously collision resistant hashing function
  function generateHash(module, testName) {
  	var str = module + "\x1C" + testName;
  	var hash = 0;

  	for (var i = 0; i < str.length; i++) {
  		hash = (hash << 5) - hash + str.charCodeAt(i);
  		hash |= 0;
  	}

  	// Convert the possibly negative integer hash code into an 8 character hex string, which isn't
  	// strictly necessary but increases user understanding that the id is a SHA-like hash
  	var hex = (0x100000000 + hash).toString(16);
  	if (hex.length < 8) {
  		hex = "0000000" + hex;
  	}

  	return hex.slice(-8);
  }

  // Test for equality any JavaScript type.
  // Authors: Philippe Rathé <prathe@gmail.com>, David Chan <david@troi.org>
  var equiv = (function () {

  	// Value pairs queued for comparison. Used for breadth-first processing order, recursion
  	// detection and avoiding repeated comparison (see below for details).
  	// Elements are { a: val, b: val }.
  	var pairs = [];

  	var getProto = Object.getPrototypeOf || function (obj) {
  		return obj.__proto__;
  	};

  	function useStrictEquality(a, b) {

  		// This only gets called if a and b are not strict equal, and is used to compare on
  		// the primitive values inside object wrappers. For example:
  		// `var i = 1;`
  		// `var j = new Number(1);`
  		// Neither a nor b can be null, as a !== b and they have the same type.
  		if ((typeof a === "undefined" ? "undefined" : _typeof(a)) === "object") {
  			a = a.valueOf();
  		}
  		if ((typeof b === "undefined" ? "undefined" : _typeof(b)) === "object") {
  			b = b.valueOf();
  		}

  		return a === b;
  	}

  	function compareConstructors(a, b) {
  		var protoA = getProto(a);
  		var protoB = getProto(b);

  		// Comparing constructors is more strict than using `instanceof`
  		if (a.constructor === b.constructor) {
  			return true;
  		}

  		// Ref #851
  		// If the obj prototype descends from a null constructor, treat it
  		// as a null prototype.
  		if (protoA && protoA.constructor === null) {
  			protoA = null;
  		}
  		if (protoB && protoB.constructor === null) {
  			protoB = null;
  		}

  		// Allow objects with no prototype to be equivalent to
  		// objects with Object as their constructor.
  		if (protoA === null && protoB === Object.prototype || protoB === null && protoA === Object.prototype) {
  			return true;
  		}

  		return false;
  	}

  	function getRegExpFlags(regexp) {
  		return "flags" in regexp ? regexp.flags : regexp.toString().match(/[gimuy]*$/)[0];
  	}

  	function isContainer(val) {
  		return ["object", "array", "map", "set"].indexOf(objectType(val)) !== -1;
  	}

  	function breadthFirstCompareChild(a, b) {

  		// If a is a container not reference-equal to b, postpone the comparison to the
  		// end of the pairs queue -- unless (a, b) has been seen before, in which case skip
  		// over the pair.
  		if (a === b) {
  			return true;
  		}
  		if (!isContainer(a)) {
  			return typeEquiv(a, b);
  		}
  		if (pairs.every(function (pair) {
  			return pair.a !== a || pair.b !== b;
  		})) {

  			// Not yet started comparing this pair
  			pairs.push({ a: a, b: b });
  		}
  		return true;
  	}

  	var callbacks = {
  		"string": useStrictEquality,
  		"boolean": useStrictEquality,
  		"number": useStrictEquality,
  		"null": useStrictEquality,
  		"undefined": useStrictEquality,
  		"symbol": useStrictEquality,
  		"date": useStrictEquality,

  		"nan": function nan() {
  			return true;
  		},

  		"regexp": function regexp(a, b) {
  			return a.source === b.source &&

  			// Include flags in the comparison
  			getRegExpFlags(a) === getRegExpFlags(b);
  		},

  		// abort (identical references / instance methods were skipped earlier)
  		"function": function _function() {
  			return false;
  		},

  		"array": function array(a, b) {
  			var i, len;

  			len = a.length;
  			if (len !== b.length) {

  				// Safe and faster
  				return false;
  			}

  			for (i = 0; i < len; i++) {

  				// Compare non-containers; queue non-reference-equal containers
  				if (!breadthFirstCompareChild(a[i], b[i])) {
  					return false;
  				}
  			}
  			return true;
  		},

  		// Define sets a and b to be equivalent if for each element aVal in a, there
  		// is some element bVal in b such that aVal and bVal are equivalent. Element
  		// repetitions are not counted, so these are equivalent:
  		// a = new Set( [ {}, [], [] ] );
  		// b = new Set( [ {}, {}, [] ] );
  		"set": function set$$1(a, b) {
  			var innerEq,
  			    outerEq = true;

  			if (a.size !== b.size) {

  				// This optimization has certain quirks because of the lack of
  				// repetition counting. For instance, adding the same
  				// (reference-identical) element to two equivalent sets can
  				// make them non-equivalent.
  				return false;
  			}

  			a.forEach(function (aVal) {

  				// Short-circuit if the result is already known. (Using for...of
  				// with a break clause would be cleaner here, but it would cause
  				// a syntax error on older Javascript implementations even if
  				// Set is unused)
  				if (!outerEq) {
  					return;
  				}

  				innerEq = false;

  				b.forEach(function (bVal) {
  					var parentPairs;

  					// Likewise, short-circuit if the result is already known
  					if (innerEq) {
  						return;
  					}

  					// Swap out the global pairs list, as the nested call to
  					// innerEquiv will clobber its contents
  					parentPairs = pairs;
  					if (innerEquiv(bVal, aVal)) {
  						innerEq = true;
  					}

  					// Replace the global pairs list
  					pairs = parentPairs;
  				});

  				if (!innerEq) {
  					outerEq = false;
  				}
  			});

  			return outerEq;
  		},

  		// Define maps a and b to be equivalent if for each key-value pair (aKey, aVal)
  		// in a, there is some key-value pair (bKey, bVal) in b such that
  		// [ aKey, aVal ] and [ bKey, bVal ] are equivalent. Key repetitions are not
  		// counted, so these are equivalent:
  		// a = new Map( [ [ {}, 1 ], [ {}, 1 ], [ [], 1 ] ] );
  		// b = new Map( [ [ {}, 1 ], [ [], 1 ], [ [], 1 ] ] );
  		"map": function map(a, b) {
  			var innerEq,
  			    outerEq = true;

  			if (a.size !== b.size) {

  				// This optimization has certain quirks because of the lack of
  				// repetition counting. For instance, adding the same
  				// (reference-identical) key-value pair to two equivalent maps
  				// can make them non-equivalent.
  				return false;
  			}

  			a.forEach(function (aVal, aKey) {

  				// Short-circuit if the result is already known. (Using for...of
  				// with a break clause would be cleaner here, but it would cause
  				// a syntax error on older Javascript implementations even if
  				// Map is unused)
  				if (!outerEq) {
  					return;
  				}

  				innerEq = false;

  				b.forEach(function (bVal, bKey) {
  					var parentPairs;

  					// Likewise, short-circuit if the result is already known
  					if (innerEq) {
  						return;
  					}

  					// Swap out the global pairs list, as the nested call to
  					// innerEquiv will clobber its contents
  					parentPairs = pairs;
  					if (innerEquiv([bVal, bKey], [aVal, aKey])) {
  						innerEq = true;
  					}

  					// Replace the global pairs list
  					pairs = parentPairs;
  				});

  				if (!innerEq) {
  					outerEq = false;
  				}
  			});

  			return outerEq;
  		},

  		"object": function object(a, b) {
  			var i,
  			    aProperties = [],
  			    bProperties = [];

  			if (compareConstructors(a, b) === false) {
  				return false;
  			}

  			// Be strict: don't ensure hasOwnProperty and go deep
  			for (i in a) {

  				// Collect a's properties
  				aProperties.push(i);

  				// Skip OOP methods that look the same
  				if (a.constructor !== Object && typeof a.constructor !== "undefined" && typeof a[i] === "function" && typeof b[i] === "function" && a[i].toString() === b[i].toString()) {
  					continue;
  				}

  				// Compare non-containers; queue non-reference-equal containers
  				if (!breadthFirstCompareChild(a[i], b[i])) {
  					return false;
  				}
  			}

  			for (i in b) {

  				// Collect b's properties
  				bProperties.push(i);
  			}

  			// Ensures identical properties name
  			return typeEquiv(aProperties.sort(), bProperties.sort());
  		}
  	};

  	function typeEquiv(a, b) {
  		var type = objectType(a);

  		// Callbacks for containers will append to the pairs queue to achieve breadth-first
  		// search order. The pairs queue is also used to avoid reprocessing any pair of
  		// containers that are reference-equal to a previously visited pair (a special case
  		// this being recursion detection).
  		//
  		// Because of this approach, once typeEquiv returns a false value, it should not be
  		// called again without clearing the pair queue else it may wrongly report a visited
  		// pair as being equivalent.
  		return objectType(b) === type && callbacks[type](a, b);
  	}

  	function innerEquiv(a, b) {
  		var i, pair;

  		// We're done when there's nothing more to compare
  		if (arguments.length < 2) {
  			return true;
  		}

  		// Clear the global pair queue and add the top-level values being compared
  		pairs = [{ a: a, b: b }];

  		for (i = 0; i < pairs.length; i++) {
  			pair = pairs[i];

  			// Perform type-specific comparison on any pairs that are not strictly
  			// equal. For container types, that comparison will postpone comparison
  			// of any sub-container pair to the end of the pair queue. This gives
  			// breadth-first search order. It also avoids the reprocessing of
  			// reference-equal siblings, cousins etc, which can have a significant speed
  			// impact when comparing a container of small objects each of which has a
  			// reference to the same (singleton) large object.
  			if (pair.a !== pair.b && !typeEquiv(pair.a, pair.b)) {
  				return false;
  			}
  		}

  		// ...across all consecutive argument pairs
  		return arguments.length === 2 || innerEquiv.apply(this, [].slice.call(arguments, 1));
  	}

  	return function () {
  		var result = innerEquiv.apply(undefined, arguments);

  		// Release any retained objects
  		pairs.length = 0;
  		return result;
  	};
  })();

  /**
   * Config object: Maintain internal state
   * Later exposed as QUnit.config
   * `config` initialized at top of scope
   */
  var config = {

  	// The queue of tests to run
  	queue: [],

  	// Block until document ready
  	blocking: true,

  	// By default, run previously failed tests first
  	// very useful in combination with "Hide passed tests" checked
  	reorder: true,

  	// By default, modify document.title when suite is done
  	altertitle: true,

  	// HTML Reporter: collapse every test except the first failing test
  	// If false, all failing tests will be expanded
  	collapse: true,

  	// By default, scroll to top of the page when suite is done
  	scrolltop: true,

  	// Depth up-to which object will be dumped
  	maxDepth: 5,

  	// When enabled, all tests must call expect()
  	requireExpects: false,

  	// Placeholder for user-configurable form-exposed URL parameters
  	urlConfig: [],

  	// Set of all modules.
  	modules: [],

  	// The first unnamed module
  	currentModule: {
  		name: "",
  		tests: [],
  		childModules: [],
  		testsRun: 0,
  		unskippedTestsRun: 0,
  		hooks: {
  			before: [],
  			beforeEach: [],
  			afterEach: [],
  			after: []
  		}
  	},

  	callbacks: {},

  	// The storage module to use for reordering tests
  	storage: localSessionStorage
  };

  // take a predefined QUnit.config and extend the defaults
  var globalConfig = window$1 && window$1.QUnit && window$1.QUnit.config;

  // only extend the global config if there is no QUnit overload
  if (window$1 && window$1.QUnit && !window$1.QUnit.version) {
  	extend(config, globalConfig);
  }

  // Push a loose unnamed module to the modules collection
  config.modules.push(config.currentModule);

  // Based on jsDump by Ariel Flesler
  // http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html
  var dump = (function () {
  	function quote(str) {
  		return "\"" + str.toString().replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
  	}
  	function literal(o) {
  		return o + "";
  	}
  	function join(pre, arr, post) {
  		var s = dump.separator(),
  		    base = dump.indent(),
  		    inner = dump.indent(1);
  		if (arr.join) {
  			arr = arr.join("," + s + inner);
  		}
  		if (!arr) {
  			return pre + post;
  		}
  		return [pre, inner + arr, base + post].join(s);
  	}
  	function array(arr, stack) {
  		var i = arr.length,
  		    ret = new Array(i);

  		if (dump.maxDepth && dump.depth > dump.maxDepth) {
  			return "[object Array]";
  		}

  		this.up();
  		while (i--) {
  			ret[i] = this.parse(arr[i], undefined, stack);
  		}
  		this.down();
  		return join("[", ret, "]");
  	}

  	function isArray(obj) {
  		return (

  			//Native Arrays
  			toString.call(obj) === "[object Array]" ||

  			// NodeList objects
  			typeof obj.length === "number" && obj.item !== undefined && (obj.length ? obj.item(0) === obj[0] : obj.item(0) === null && obj[0] === undefined)
  		);
  	}

  	var reName = /^function (\w+)/,
  	    dump = {

  		// The objType is used mostly internally, you can fix a (custom) type in advance
  		parse: function parse(obj, objType, stack) {
  			stack = stack || [];
  			var res,
  			    parser,
  			    parserType,
  			    objIndex = stack.indexOf(obj);

  			if (objIndex !== -1) {
  				return "recursion(" + (objIndex - stack.length) + ")";
  			}

  			objType = objType || this.typeOf(obj);
  			parser = this.parsers[objType];
  			parserType = typeof parser === "undefined" ? "undefined" : _typeof(parser);

  			if (parserType === "function") {
  				stack.push(obj);
  				res = parser.call(this, obj, stack);
  				stack.pop();
  				return res;
  			}
  			return parserType === "string" ? parser : this.parsers.error;
  		},
  		typeOf: function typeOf(obj) {
  			var type;

  			if (obj === null) {
  				type = "null";
  			} else if (typeof obj === "undefined") {
  				type = "undefined";
  			} else if (is("regexp", obj)) {
  				type = "regexp";
  			} else if (is("date", obj)) {
  				type = "date";
  			} else if (is("function", obj)) {
  				type = "function";
  			} else if (obj.setInterval !== undefined && obj.document !== undefined && obj.nodeType === undefined) {
  				type = "window";
  			} else if (obj.nodeType === 9) {
  				type = "document";
  			} else if (obj.nodeType) {
  				type = "node";
  			} else if (isArray(obj)) {
  				type = "array";
  			} else if (obj.constructor === Error.prototype.constructor) {
  				type = "error";
  			} else {
  				type = typeof obj === "undefined" ? "undefined" : _typeof(obj);
  			}
  			return type;
  		},

  		separator: function separator() {
  			if (this.multiline) {
  				return this.HTML ? "<br />" : "\n";
  			} else {
  				return this.HTML ? "&#160;" : " ";
  			}
  		},

  		// Extra can be a number, shortcut for increasing-calling-decreasing
  		indent: function indent(extra) {
  			if (!this.multiline) {
  				return "";
  			}
  			var chr = this.indentChar;
  			if (this.HTML) {
  				chr = chr.replace(/\t/g, "   ").replace(/ /g, "&#160;");
  			}
  			return new Array(this.depth + (extra || 0)).join(chr);
  		},
  		up: function up(a) {
  			this.depth += a || 1;
  		},
  		down: function down(a) {
  			this.depth -= a || 1;
  		},
  		setParser: function setParser(name, parser) {
  			this.parsers[name] = parser;
  		},

  		// The next 3 are exposed so you can use them
  		quote: quote,
  		literal: literal,
  		join: join,
  		depth: 1,
  		maxDepth: config.maxDepth,

  		// This is the list of parsers, to modify them, use dump.setParser
  		parsers: {
  			window: "[Window]",
  			document: "[Document]",
  			error: function error(_error) {
  				return "Error(\"" + _error.message + "\")";
  			},
  			unknown: "[Unknown]",
  			"null": "null",
  			"undefined": "undefined",
  			"function": function _function(fn) {
  				var ret = "function",


  				// Functions never have name in IE
  				name = "name" in fn ? fn.name : (reName.exec(fn) || [])[1];

  				if (name) {
  					ret += " " + name;
  				}
  				ret += "(";

  				ret = [ret, dump.parse(fn, "functionArgs"), "){"].join("");
  				return join(ret, dump.parse(fn, "functionCode"), "}");
  			},
  			array: array,
  			nodelist: array,
  			"arguments": array,
  			object: function object(map, stack) {
  				var keys,
  				    key,
  				    val,
  				    i,
  				    nonEnumerableProperties,
  				    ret = [];

  				if (dump.maxDepth && dump.depth > dump.maxDepth) {
  					return "[object Object]";
  				}

  				dump.up();
  				keys = [];
  				for (key in map) {
  					keys.push(key);
  				}

  				// Some properties are not always enumerable on Error objects.
  				nonEnumerableProperties = ["message", "name"];
  				for (i in nonEnumerableProperties) {
  					key = nonEnumerableProperties[i];
  					if (key in map && !inArray(key, keys)) {
  						keys.push(key);
  					}
  				}
  				keys.sort();
  				for (i = 0; i < keys.length; i++) {
  					key = keys[i];
  					val = map[key];
  					ret.push(dump.parse(key, "key") + ": " + dump.parse(val, undefined, stack));
  				}
  				dump.down();
  				return join("{", ret, "}");
  			},
  			node: function node(_node) {
  				var len,
  				    i,
  				    val,
  				    open = dump.HTML ? "&lt;" : "<",
  				    close = dump.HTML ? "&gt;" : ">",
  				    tag = _node.nodeName.toLowerCase(),
  				    ret = open + tag,
  				    attrs = _node.attributes;

  				if (attrs) {
  					for (i = 0, len = attrs.length; i < len; i++) {
  						val = attrs[i].nodeValue;

  						// IE6 includes all attributes in .attributes, even ones not explicitly
  						// set. Those have values like undefined, null, 0, false, "" or
  						// "inherit".
  						if (val && val !== "inherit") {
  							ret += " " + attrs[i].nodeName + "=" + dump.parse(val, "attribute");
  						}
  					}
  				}
  				ret += close;

  				// Show content of TextNode or CDATASection
  				if (_node.nodeType === 3 || _node.nodeType === 4) {
  					ret += _node.nodeValue;
  				}

  				return ret + open + "/" + tag + close;
  			},

  			// Function calls it internally, it's the arguments part of the function
  			functionArgs: function functionArgs(fn) {
  				var args,
  				    l = fn.length;

  				if (!l) {
  					return "";
  				}

  				args = new Array(l);
  				while (l--) {

  					// 97 is 'a'
  					args[l] = String.fromCharCode(97 + l);
  				}
  				return " " + args.join(", ") + " ";
  			},

  			// Object calls it internally, the key part of an item in a map
  			key: quote,

  			// Function calls it internally, it's the content of the function
  			functionCode: "[code]",

  			// Node calls it internally, it's a html attribute value
  			attribute: quote,
  			string: quote,
  			date: quote,
  			regexp: literal,
  			number: literal,
  			"boolean": literal,
  			symbol: function symbol(sym) {
  				return sym.toString();
  			}
  		},

  		// If true, entities are escaped ( <, >, \t, space and \n )
  		HTML: false,

  		// Indentation unit
  		indentChar: "  ",

  		// If true, items in a collection, are separated by a \n, else just a space.
  		multiline: true
  	};

  	return dump;
  })();

  var SuiteReport = function () {
  	function SuiteReport(name, parentSuite) {
  		classCallCheck(this, SuiteReport);

  		this.name = name;
  		this.fullName = parentSuite ? parentSuite.fullName.concat(name) : [];

  		this.tests = [];
  		this.childSuites = [];

  		if (parentSuite) {
  			parentSuite.pushChildSuite(this);
  		}
  	}

  	createClass(SuiteReport, [{
  		key: "start",
  		value: function start(recordTime) {
  			if (recordTime) {
  				this._startTime = performanceNow();

  				if (performance) {
  					var suiteLevel = this.fullName.length;
  					performance.mark("qunit_suite_" + suiteLevel + "_start");
  				}
  			}

  			return {
  				name: this.name,
  				fullName: this.fullName.slice(),
  				tests: this.tests.map(function (test) {
  					return test.start();
  				}),
  				childSuites: this.childSuites.map(function (suite) {
  					return suite.start();
  				}),
  				testCounts: {
  					total: this.getTestCounts().total
  				}
  			};
  		}
  	}, {
  		key: "end",
  		value: function end(recordTime) {
  			if (recordTime) {
  				this._endTime = performanceNow();

  				if (performance) {
  					var suiteLevel = this.fullName.length;
  					performance.mark("qunit_suite_" + suiteLevel + "_end");

  					var suiteName = this.fullName.join(" – ");

  					measure(suiteLevel === 0 ? "QUnit Test Run" : "QUnit Test Suite: " + suiteName, "qunit_suite_" + suiteLevel + "_start", "qunit_suite_" + suiteLevel + "_end");
  				}
  			}

  			return {
  				name: this.name,
  				fullName: this.fullName.slice(),
  				tests: this.tests.map(function (test) {
  					return test.end();
  				}),
  				childSuites: this.childSuites.map(function (suite) {
  					return suite.end();
  				}),
  				testCounts: this.getTestCounts(),
  				runtime: this.getRuntime(),
  				status: this.getStatus()
  			};
  		}
  	}, {
  		key: "pushChildSuite",
  		value: function pushChildSuite(suite) {
  			this.childSuites.push(suite);
  		}
  	}, {
  		key: "pushTest",
  		value: function pushTest(test) {
  			this.tests.push(test);
  		}
  	}, {
  		key: "getRuntime",
  		value: function getRuntime() {
  			return this._endTime - this._startTime;
  		}
  	}, {
  		key: "getTestCounts",
  		value: function getTestCounts() {
  			var counts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { passed: 0, failed: 0, skipped: 0, todo: 0, total: 0 };

  			counts = this.tests.reduce(function (counts, test) {
  				if (test.valid) {
  					counts[test.getStatus()]++;
  					counts.total++;
  				}

  				return counts;
  			}, counts);

  			return this.childSuites.reduce(function (counts, suite) {
  				return suite.getTestCounts(counts);
  			}, counts);
  		}
  	}, {
  		key: "getStatus",
  		value: function getStatus() {
  			var _getTestCounts = this.getTestCounts(),
  			    total = _getTestCounts.total,
  			    failed = _getTestCounts.failed,
  			    skipped = _getTestCounts.skipped,
  			    todo = _getTestCounts.todo;

  			if (failed) {
  				return "failed";
  			} else {
  				if (skipped === total) {
  					return "skipped";
  				} else if (todo === total) {
  					return "todo";
  				} else {
  					return "passed";
  				}
  			}
  		}
  	}]);
  	return SuiteReport;
  }();

  var focused = false;

  var moduleStack = [];

  function createModule(name, testEnvironment, modifiers) {
  	var parentModule = moduleStack.length ? moduleStack.slice(-1)[0] : null;
  	var moduleName = parentModule !== null ? [parentModule.name, name].join(" > ") : name;
  	var parentSuite = parentModule ? parentModule.suiteReport : globalSuite;

  	var skip = parentModule !== null && parentModule.skip || modifiers.skip;
  	var todo = parentModule !== null && parentModule.todo || modifiers.todo;

  	var module = {
  		name: moduleName,
  		parentModule: parentModule,
  		tests: [],
  		moduleId: generateHash(moduleName),
  		testsRun: 0,
  		unskippedTestsRun: 0,
  		childModules: [],
  		suiteReport: new SuiteReport(name, parentSuite),

  		// Pass along `skip` and `todo` properties from parent module, in case
  		// there is one, to childs. And use own otherwise.
  		// This property will be used to mark own tests and tests of child suites
  		// as either `skipped` or `todo`.
  		skip: skip,
  		todo: skip ? false : todo
  	};

  	var env = {};
  	if (parentModule) {
  		parentModule.childModules.push(module);
  		extend(env, parentModule.testEnvironment);
  	}
  	extend(env, testEnvironment);
  	module.testEnvironment = env;

  	config.modules.push(module);
  	return module;
  }

  function processModule(name, options, executeNow) {
  	var modifiers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  	if (objectType(options) === "function") {
  		executeNow = options;
  		options = undefined;
  	}

  	var module = createModule(name, options, modifiers);

  	// Move any hooks to a 'hooks' object
  	var testEnvironment = module.testEnvironment;
  	var hooks = module.hooks = {};

  	setHookFromEnvironment(hooks, testEnvironment, "before");
  	setHookFromEnvironment(hooks, testEnvironment, "beforeEach");
  	setHookFromEnvironment(hooks, testEnvironment, "afterEach");
  	setHookFromEnvironment(hooks, testEnvironment, "after");

  	var moduleFns = {
  		before: setHookFunction(module, "before"),
  		beforeEach: setHookFunction(module, "beforeEach"),
  		afterEach: setHookFunction(module, "afterEach"),
  		after: setHookFunction(module, "after")
  	};

  	var currentModule = config.currentModule;
  	if (objectType(executeNow) === "function") {
  		moduleStack.push(module);
  		config.currentModule = module;
  		executeNow.call(module.testEnvironment, moduleFns);
  		moduleStack.pop();
  		module = module.parentModule || currentModule;
  	}

  	config.currentModule = module;

  	function setHookFromEnvironment(hooks, environment, name) {
  		var potentialHook = environment[name];
  		hooks[name] = typeof potentialHook === "function" ? [potentialHook] : [];
  		delete environment[name];
  	}

  	function setHookFunction(module, hookName) {
  		return function setHook(callback) {
  			module.hooks[hookName].push(callback);
  		};
  	}
  }

  function module$1(name, options, executeNow) {
  	if (focused) {
  		return;
  	}

  	processModule(name, options, executeNow);
  }

  module$1.only = function () {
  	if (focused) {
  		return;
  	}

  	config.modules.length = 0;
  	config.queue.length = 0;

  	module$1.apply(undefined, arguments);

  	focused = true;
  };

  module$1.skip = function (name, options, executeNow) {
  	if (focused) {
  		return;
  	}

  	processModule(name, options, executeNow, { skip: true });
  };

  module$1.todo = function (name, options, executeNow) {
  	if (focused) {
  		return;
  	}

  	processModule(name, options, executeNow, { todo: true });
  };

  var LISTENERS = Object.create(null);
  var SUPPORTED_EVENTS = ["runStart", "suiteStart", "testStart", "assertion", "testEnd", "suiteEnd", "runEnd"];

  /**
   * Emits an event with the specified data to all currently registered listeners.
   * Callbacks will fire in the order in which they are registered (FIFO). This
   * function is not exposed publicly; it is used by QUnit internals to emit
   * logging events.
   *
   * @private
   * @method emit
   * @param {String} eventName
   * @param {Object} data
   * @return {Void}
   */
  function emit(eventName, data) {
  	if (objectType(eventName) !== "string") {
  		throw new TypeError("eventName must be a string when emitting an event");
  	}

  	// Clone the callbacks in case one of them registers a new callback
  	var originalCallbacks = LISTENERS[eventName];
  	var callbacks = originalCallbacks ? [].concat(toConsumableArray(originalCallbacks)) : [];

  	for (var i = 0; i < callbacks.length; i++) {
  		callbacks[i](data);
  	}
  }

  /**
   * Registers a callback as a listener to the specified event.
   *
   * @public
   * @method on
   * @param {String} eventName
   * @param {Function} callback
   * @return {Void}
   */
  function on(eventName, callback) {
  	if (objectType(eventName) !== "string") {
  		throw new TypeError("eventName must be a string when registering a listener");
  	} else if (!inArray(eventName, SUPPORTED_EVENTS)) {
  		var events = SUPPORTED_EVENTS.join(", ");
  		throw new Error("\"" + eventName + "\" is not a valid event; must be one of: " + events + ".");
  	} else if (objectType(callback) !== "function") {
  		throw new TypeError("callback must be a function when registering a listener");
  	}

  	if (!LISTENERS[eventName]) {
  		LISTENERS[eventName] = [];
  	}

  	// Don't register the same callback more than once
  	if (!inArray(callback, LISTENERS[eventName])) {
  		LISTENERS[eventName].push(callback);
  	}
  }

  function objectOrFunction(x) {
    var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
  }

  function isFunction(x) {
    return typeof x === 'function';
  }



  var _isArray = void 0;
  if (Array.isArray) {
    _isArray = Array.isArray;
  } else {
    _isArray = function _isArray(x) {
      return Object.prototype.toString.call(x) === '[object Array]';
    };
  }

  var isArray = _isArray;

  var len = 0;
  var vertxNext = void 0;
  var customSchedulerFn = void 0;

  var asap = function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      // If len is 2, that means that we need to schedule an async flush.
      // If additional callbacks are queued before the queue is flushed, they
      // will be processed by this flush that we are scheduling.
      if (customSchedulerFn) {
        customSchedulerFn(flush);
      } else {
        scheduleFlush();
      }
    }
  };

  function setScheduler(scheduleFn) {
    customSchedulerFn = scheduleFn;
  }

  function setAsap(asapFn) {
    asap = asapFn;
  }

  var browserWindow = typeof window !== 'undefined' ? window : undefined;
  var browserGlobal = browserWindow || {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

  // test for web worker but not in IE10
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

  // node
  function useNextTick() {
    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
    // see https://github.com/cujojs/when/issues/410 for details
    return function () {
      return process.nextTick(flush);
    };
  }

  // vertx
  function useVertxTimer() {
    if (typeof vertxNext !== 'undefined') {
      return function () {
        vertxNext(flush);
      };
    }

    return useSetTimeout();
  }

  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, { characterData: true });

    return function () {
      node.data = iterations = ++iterations % 2;
    };
  }

  // web worker
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function () {
      return channel.port2.postMessage(0);
    };
  }

  function useSetTimeout() {
    // Store setTimeout reference so es6-promise will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var globalSetTimeout = setTimeout;
    return function () {
      return globalSetTimeout(flush, 1);
    };
  }

  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];

      callback(arg);

      queue[i] = undefined;
      queue[i + 1] = undefined;
    }

    len = 0;
  }

  function attemptVertx() {
    try {
      var vertx = Function('return this')().require('vertx');
      vertxNext = vertx.runOnLoop || vertx.runOnContext;
      return useVertxTimer();
    } catch (e) {
      return useSetTimeout();
    }
  }

  var scheduleFlush = void 0;
  // Decide what async method to use to triggering processing of queued callbacks:
  if (isNode) {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else if (browserWindow === undefined && "function" === 'function') {
    scheduleFlush = attemptVertx();
  } else {
    scheduleFlush = useSetTimeout();
  }

  function then(onFulfillment, onRejection) {
    var parent = this;

    var child = new this.constructor(noop);

    if (child[PROMISE_ID] === undefined) {
      makePromise(child);
    }

    var _state = parent._state;


    if (_state) {
      var callback = arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    } else {
      subscribe(parent, child, onFulfillment, onRejection);
    }

    return child;
  }

  /**
    `Promise.resolve` returns a promise that will become resolved with the
    passed `value`. It is shorthand for the following:

    ```javascript
    let promise = new Promise(function(resolve, reject){
      resolve(1);
    });

    promise.then(function(value){
      // value === 1
    });
    ```

    Instead of writing the above, your code now simply becomes the following:

    ```javascript
    let promise = Promise.resolve(1);

    promise.then(function(value){
      // value === 1
    });
    ```

    @method resolve
    @static
    @param {Any} value value that the returned promise will be resolved with
    Useful for tooling.
    @return {Promise} a promise that will become fulfilled with the given
    `value`
  */
  function resolve$1(object) {
    /*jshint validthis:true */
    var Constructor = this;

    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
      return object;
    }

    var promise = new Constructor(noop);
    resolve(promise, object);
    return promise;
  }

  var PROMISE_ID = Math.random().toString(36).substring(2);

  function noop() {}

  var PENDING = void 0;
  var FULFILLED = 1;
  var REJECTED = 2;

  function selfFulfillment() {
    return new TypeError("You cannot resolve a promise with itself");
  }

  function cannotReturnOwn() {
    return new TypeError('A promises callback cannot return that same promise.');
  }

  function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
    try {
      then$$1.call(value, fulfillmentHandler, rejectionHandler);
    } catch (e) {
      return e;
    }
  }

  function handleForeignThenable(promise, thenable, then$$1) {
    asap(function (promise) {
      var sealed = false;
      var error = tryThen(then$$1, thenable, function (value) {
        if (sealed) {
          return;
        }
        sealed = true;
        if (thenable !== value) {
          resolve(promise, value);
        } else {
          fulfill(promise, value);
        }
      }, function (reason) {
        if (sealed) {
          return;
        }
        sealed = true;

        reject(promise, reason);
      }, 'Settle: ' + (promise._label || ' unknown promise'));

      if (!sealed && error) {
        sealed = true;
        reject(promise, error);
      }
    }, promise);
  }

  function handleOwnThenable(promise, thenable) {
    if (thenable._state === FULFILLED) {
      fulfill(promise, thenable._result);
    } else if (thenable._state === REJECTED) {
      reject(promise, thenable._result);
    } else {
      subscribe(thenable, undefined, function (value) {
        return resolve(promise, value);
      }, function (reason) {
        return reject(promise, reason);
      });
    }
  }

  function handleMaybeThenable(promise, maybeThenable, then$$1) {
    if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
      handleOwnThenable(promise, maybeThenable);
    } else {
      if (then$$1 === undefined) {
        fulfill(promise, maybeThenable);
      } else if (isFunction(then$$1)) {
        handleForeignThenable(promise, maybeThenable, then$$1);
      } else {
        fulfill(promise, maybeThenable);
      }
    }
  }

  function resolve(promise, value) {
    if (promise === value) {
      reject(promise, selfFulfillment());
    } else if (objectOrFunction(value)) {
      var then$$1 = void 0;
      try {
        then$$1 = value.then;
      } catch (error) {
        reject(promise, error);
        return;
      }
      handleMaybeThenable(promise, value, then$$1);
    } else {
      fulfill(promise, value);
    }
  }

  function publishRejection(promise) {
    if (promise._onerror) {
      promise._onerror(promise._result);
    }

    publish(promise);
  }

  function fulfill(promise, value) {
    if (promise._state !== PENDING) {
      return;
    }

    promise._result = value;
    promise._state = FULFILLED;

    if (promise._subscribers.length !== 0) {
      asap(publish, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state !== PENDING) {
      return;
    }
    promise._state = REJECTED;
    promise._result = reason;

    asap(publishRejection, promise);
  }

  function subscribe(parent, child, onFulfillment, onRejection) {
    var _subscribers = parent._subscribers;
    var length = _subscribers.length;


    parent._onerror = null;

    _subscribers[length] = child;
    _subscribers[length + FULFILLED] = onFulfillment;
    _subscribers[length + REJECTED] = onRejection;

    if (length === 0 && parent._state) {
      asap(publish, parent);
    }
  }

  function publish(promise) {
    var subscribers = promise._subscribers;
    var settled = promise._state;

    if (subscribers.length === 0) {
      return;
    }

    var child = void 0,
        callback = void 0,
        detail = promise._result;

    for (var i = 0; i < subscribers.length; i += 3) {
      child = subscribers[i];
      callback = subscribers[i + settled];

      if (child) {
        invokeCallback(settled, child, callback, detail);
      } else {
        callback(detail);
      }
    }

    promise._subscribers.length = 0;
  }

  function invokeCallback(settled, promise, callback, detail) {
    var hasCallback = isFunction(callback),
        value = void 0,
        error = void 0,
        succeeded = true;

    if (hasCallback) {
      try {
        value = callback(detail);
      } catch (e) {
        succeeded = false;
        error = e;
      }

      if (promise === value) {
        reject(promise, cannotReturnOwn());
        return;
      }
    } else {
      value = detail;
    }

    if (promise._state !== PENDING) {
      // noop
    } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (succeeded === false) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
  }

  function initializePromise(promise, resolver) {
    try {
      resolver(function resolvePromise(value) {
        resolve(promise, value);
      }, function rejectPromise(reason) {
        reject(promise, reason);
      });
    } catch (e) {
      reject(promise, e);
    }
  }

  var id = 0;
  function nextId() {
    return id++;
  }

  function makePromise(promise) {
    promise[PROMISE_ID] = id++;
    promise._state = undefined;
    promise._result = undefined;
    promise._subscribers = [];
  }

  function validationError() {
    return new Error('Array Methods must be provided an Array');
  }

  var Enumerator = function () {
    function Enumerator(Constructor, input) {
      classCallCheck(this, Enumerator);

      this._instanceConstructor = Constructor;
      this.promise = new Constructor(noop);

      if (!this.promise[PROMISE_ID]) {
        makePromise(this.promise);
      }

      if (isArray(input)) {
        this.length = input.length;
        this._remaining = input.length;

        this._result = new Array(this.length);

        if (this.length === 0) {
          fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate(input);
          if (this._remaining === 0) {
            fulfill(this.promise, this._result);
          }
        }
      } else {
        reject(this.promise, validationError());
      }
    }

    createClass(Enumerator, [{
      key: '_enumerate',
      value: function _enumerate(input) {
        for (var i = 0; this._state === PENDING && i < input.length; i++) {
          this._eachEntry(input[i], i);
        }
      }
    }, {
      key: '_eachEntry',
      value: function _eachEntry(entry, i) {
        var c = this._instanceConstructor;
        var resolve$$1 = c.resolve;


        if (resolve$$1 === resolve$1) {
          var _then = void 0;
          var error = void 0;
          var didError = false;
          try {
            _then = entry.then;
          } catch (e) {
            didError = true;
            error = e;
          }

          if (_then === then && entry._state !== PENDING) {
            this._settledAt(entry._state, i, entry._result);
          } else if (typeof _then !== 'function') {
            this._remaining--;
            this._result[i] = entry;
          } else if (c === Promise$2) {
            var promise = new c(noop);
            if (didError) {
              reject(promise, error);
            } else {
              handleMaybeThenable(promise, entry, _then);
            }
            this._willSettleAt(promise, i);
          } else {
            this._willSettleAt(new c(function (resolve$$1) {
              return resolve$$1(entry);
            }), i);
          }
        } else {
          this._willSettleAt(resolve$$1(entry), i);
        }
      }
    }, {
      key: '_settledAt',
      value: function _settledAt(state, i, value) {
        var promise = this.promise;


        if (promise._state === PENDING) {
          this._remaining--;

          if (state === REJECTED) {
            reject(promise, value);
          } else {
            this._result[i] = value;
          }
        }

        if (this._remaining === 0) {
          fulfill(promise, this._result);
        }
      }
    }, {
      key: '_willSettleAt',
      value: function _willSettleAt(promise, i) {
        var enumerator = this;

        subscribe(promise, undefined, function (value) {
          return enumerator._settledAt(FULFILLED, i, value);
        }, function (reason) {
          return enumerator._settledAt(REJECTED, i, reason);
        });
      }
    }]);
    return Enumerator;
  }();

  /**
    `Promise.all` accepts an array of promises, and returns a new promise which
    is fulfilled with an array of fulfillment values for the passed promises, or
    rejected with the reason of the first passed promise to be rejected. It casts all
    elements of the passed iterable to promises as it runs this algorithm.

    Example:

    ```javascript
    let promise1 = resolve(1);
    let promise2 = resolve(2);
    let promise3 = resolve(3);
    let promises = [ promise1, promise2, promise3 ];

    Promise.all(promises).then(function(array){
      // The array here would be [ 1, 2, 3 ];
    });
    ```

    If any of the `promises` given to `all` are rejected, the first promise
    that is rejected will be given as an argument to the returned promises's
    rejection handler. For example:

    Example:

    ```javascript
    let promise1 = resolve(1);
    let promise2 = reject(new Error("2"));
    let promise3 = reject(new Error("3"));
    let promises = [ promise1, promise2, promise3 ];

    Promise.all(promises).then(function(array){
      // Code here never runs because there are rejected promises!
    }, function(error) {
      // error.message === "2"
    });
    ```

    @method all
    @static
    @param {Array} entries array of promises
    @param {String} label optional string for labeling the promise.
    Useful for tooling.
    @return {Promise} promise that is fulfilled when all `promises` have been
    fulfilled, or rejected if any of them become rejected.
    @static
  */
  function all(entries) {
    return new Enumerator(this, entries).promise;
  }

  /**
    `Promise.race` returns a new promise which is settled in the same way as the
    first passed promise to settle.

    Example:

    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });

    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 2');
      }, 100);
    });

    Promise.race([promise1, promise2]).then(function(result){
      // result === 'promise 2' because it was resolved before promise1
      // was resolved.
    });
    ```

    `Promise.race` is deterministic in that only the state of the first
    settled promise matters. For example, even if other promises given to the
    `promises` array argument are resolved, but the first settled promise has
    become rejected before the other promises became fulfilled, the returned
    promise will become rejected:

    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });

    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        reject(new Error('promise 2'));
      }, 100);
    });

    Promise.race([promise1, promise2]).then(function(result){
      // Code here never runs
    }, function(reason){
      // reason.message === 'promise 2' because promise 2 became rejected before
      // promise 1 became fulfilled
    });
    ```

    An example real-world use case is implementing timeouts:

    ```javascript
    Promise.race([ajax('foo.json'), timeout(5000)])
    ```

    @method race
    @static
    @param {Array} promises array of promises to observe
    Useful for tooling.
    @return {Promise} a promise which settles in the same way as the first passed
    promise to settle.
  */
  function race(entries) {
    /*jshint validthis:true */
    var Constructor = this;

    if (!isArray(entries)) {
      return new Constructor(function (_, reject) {
        return reject(new TypeError('You must pass an array to race.'));
      });
    } else {
      return new Constructor(function (resolve, reject) {
        var length = entries.length;
        for (var i = 0; i < length; i++) {
          Constructor.resolve(entries[i]).then(resolve, reject);
        }
      });
    }
  }

  /**
    `Promise.reject` returns a promise rejected with the passed `reason`.
    It is shorthand for the following:

    ```javascript
    let promise = new Promise(function(resolve, reject){
      reject(new Error('WHOOPS'));
    });

    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```

    Instead of writing the above, your code now simply becomes the following:

    ```javascript
    let promise = Promise.reject(new Error('WHOOPS'));

    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```

    @method reject
    @static
    @param {Any} reason value that the returned promise will be rejected with.
    Useful for tooling.
    @return {Promise} a promise rejected with the given `reason`.
  */
  function reject$1(reason) {
    /*jshint validthis:true */
    var Constructor = this;
    var promise = new Constructor(noop);
    reject(promise, reason);
    return promise;
  }

  function needsResolver() {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  function needsNew() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  /**
    Promise objects represent the eventual result of an asynchronous operation. The
    primary way of interacting with a promise is through its `then` method, which
    registers callbacks to receive either a promise's eventual value or the reason
    why the promise cannot be fulfilled.

    Terminology
    -----------

    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
    - `thenable` is an object or function that defines a `then` method.
    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
    - `exception` is a value that is thrown using the throw statement.
    - `reason` is a value that indicates why a promise was rejected.
    - `settled` the final resting state of a promise, fulfilled or rejected.

    A promise can be in one of three states: pending, fulfilled, or rejected.

    Promises that are fulfilled have a fulfillment value and are in the fulfilled
    state.  Promises that are rejected have a rejection reason and are in the
    rejected state.  A fulfillment value is never a thenable.

    Promises can also be said to *resolve* a value.  If this value is also a
    promise, then the original promise's settled state will match the value's
    settled state.  So a promise that *resolves* a promise that rejects will
    itself reject, and a promise that *resolves* a promise that fulfills will
    itself fulfill.


    Basic Usage:
    ------------

    ```js
    let promise = new Promise(function(resolve, reject) {
      // on success
      resolve(value);

      // on failure
      reject(reason);
    });

    promise.then(function(value) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```

    Advanced Usage:
    ---------------

    Promises shine when abstracting away asynchronous interactions such as
    `XMLHttpRequest`s.

    ```js
    function getJSON(url) {
      return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

        function handler() {
          if (this.readyState === this.DONE) {
            if (this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
            }
          }
        };
      });
    }

    getJSON('/posts.json').then(function(json) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```

    Unlike callbacks, promises are great composable primitives.

    ```js
    Promise.all([
      getJSON('/posts'),
      getJSON('/comments')
    ]).then(function(values){
      values[0] // => postsJSON
      values[1] // => commentsJSON

      return values;
    });
    ```

    @class Promise
    @param {Function} resolver
    Useful for tooling.
    @constructor
  */

  var Promise$2 = function () {
    function Promise(resolver) {
      classCallCheck(this, Promise);

      this[PROMISE_ID] = nextId();
      this._result = this._state = undefined;
      this._subscribers = [];

      if (noop !== resolver) {
        typeof resolver !== 'function' && needsResolver();
        this instanceof Promise ? initializePromise(this, resolver) : needsNew();
      }
    }

    /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
     ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
     Chaining
    --------
     The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
     ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
     findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
     ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
     Assimilation
    ------------
     Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
     If the assimliated promise rejects, then the downstream promise will also reject.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
     Simple Example
    --------------
     Synchronous Example
     ```javascript
    let result;
     try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
     Advanced Example
    --------------
     Synchronous Example
     ```javascript
    let author, books;
     try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
     function foundBooks(books) {
     }
     function failure(reason) {
     }
     findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
     @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
    */

    /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
    ```js
    function findAuthor(){
    throw new Error('couldn't find that author');
    }
    // synchronous
    try {
    findAuthor();
    } catch(reason) {
    // something went wrong
    }
    // async with promises
    findAuthor().catch(function(reason){
    // something went wrong
    });
    ```
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
    */


    createClass(Promise, [{
      key: 'catch',
      value: function _catch(onRejection) {
        return this.then(null, onRejection);
      }

      /**
        `finally` will be invoked regardless of the promise's fate just as native
        try/catch/finally behaves
      
        Synchronous example:
      
        ```js
        findAuthor() {
          if (Math.random() > 0.5) {
            throw new Error();
          }
          return new Author();
        }
      
        try {
          return findAuthor(); // succeed or fail
        } catch(error) {
          return findOtherAuther();
        } finally {
          // always runs
          // doesn't affect the return value
        }
        ```
      
        Asynchronous example:
      
        ```js
        findAuthor().catch(function(reason){
          return findOtherAuther();
        }).finally(function(){
          // author was either found, or not
        });
        ```
      
        @method finally
        @param {Function} callback
        @return {Promise}
      */

    }, {
      key: 'finally',
      value: function _finally(callback) {
        var promise = this;
        var constructor = promise.constructor;

        if (isFunction(callback)) {
          return promise.then(function (value) {
            return constructor.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return constructor.resolve(callback()).then(function () {
              throw reason;
            });
          });
        }

        return promise.then(callback, callback);
      }
    }]);
    return Promise;
  }();

  Promise$2.prototype.then = then;
  Promise$2.all = all;
  Promise$2.race = race;
  Promise$2.resolve = resolve$1;
  Promise$2.reject = reject$1;
  Promise$2._setScheduler = setScheduler;
  Promise$2._setAsap = setAsap;
  Promise$2._asap = asap;

  /*global self*/
  function polyfill() {
    var local = void 0;

    if (typeof global !== 'undefined') {
      local = global;
    } else if (typeof self !== 'undefined') {
      local = self;
    } else {
      try {
        local = Function('return this')();
      } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
      }
    }

    var P = local.Promise;

    if (P) {
      var promiseToString = null;
      try {
        promiseToString = Object.prototype.toString.call(P.resolve());
      } catch (e) {
        // silently ignored
      }

      if (promiseToString === '[object Promise]' && !P.cast) {
        return;
      }
    }

    local.Promise = Promise$2;
  }

  // Strange compat..
  Promise$2.polyfill = polyfill;
  Promise$2.Promise = Promise$2;

  var Promise$1 = typeof Promise !== "undefined" ? Promise : Promise$2;

  // Register logging callbacks
  function registerLoggingCallbacks(obj) {
  	var i,
  	    l,
  	    key,
  	    callbackNames = ["begin", "done", "log", "testStart", "testDone", "moduleStart", "moduleDone"];

  	function registerLoggingCallback(key) {
  		var loggingCallback = function loggingCallback(callback) {
  			if (objectType(callback) !== "function") {
  				throw new Error("QUnit logging methods require a callback function as their first parameters.");
  			}

  			config.callbacks[key].push(callback);
  		};

  		return loggingCallback;
  	}

  	for (i = 0, l = callbackNames.length; i < l; i++) {
  		key = callbackNames[i];

  		// Initialize key collection of logging callback
  		if (objectType(config.callbacks[key]) === "undefined") {
  			config.callbacks[key] = [];
  		}

  		obj[key] = registerLoggingCallback(key);
  	}
  }

  function runLoggingCallbacks(key, args) {
  	var callbacks = config.callbacks[key];

  	// Handling 'log' callbacks separately. Unlike the other callbacks,
  	// the log callback is not controlled by the processing queue,
  	// but rather used by asserts. Hence to promisfy the 'log' callback
  	// would mean promisfying each step of a test
  	if (key === "log") {
  		callbacks.map(function (callback) {
  			return callback(args);
  		});
  		return;
  	}

  	// ensure that each callback is executed serially
  	return callbacks.reduce(function (promiseChain, callback) {
  		return promiseChain.then(function () {
  			return Promise$1.resolve(callback(args));
  		});
  	}, Promise$1.resolve([]));
  }

  // Doesn't support IE9, it will return undefined on these browsers
  // See also https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
  var fileName = (sourceFromStacktrace(0) || "").replace(/(:\d+)+\)?/, "").replace(/.+\//, "");

  function extractStacktrace(e, offset) {
  	offset = offset === undefined ? 4 : offset;

  	var stack, include, i;

  	if (e && e.stack) {
  		stack = e.stack.split("\n");
  		if (/^error$/i.test(stack[0])) {
  			stack.shift();
  		}
  		if (fileName) {
  			include = [];
  			for (i = offset; i < stack.length; i++) {
  				if (stack[i].indexOf(fileName) !== -1) {
  					break;
  				}
  				include.push(stack[i]);
  			}
  			if (include.length) {
  				return include.join("\n");
  			}
  		}
  		return stack[offset];
  	}
  }

  function sourceFromStacktrace(offset) {
  	var error = new Error();

  	// Support: Safari <=7 only, IE <=10 - 11 only
  	// Not all browsers generate the `stack` property for `new Error()`, see also #636
  	if (!error.stack) {
  		try {
  			throw error;
  		} catch (err) {
  			error = err;
  		}
  	}

  	return extractStacktrace(error, offset);
  }

  var priorityCount = 0;
  var unitSampler = void 0;

  // This is a queue of functions that are tasks within a single test.
  // After tests are dequeued from config.queue they are expanded into
  // a set of tasks in this queue.
  var taskQueue = [];

  /**
   * Advances the taskQueue to the next task. If the taskQueue is empty,
   * process the testQueue
   */
  function advance() {
  	advanceTaskQueue();

  	if (!taskQueue.length && !config.blocking && !config.current) {
  		advanceTestQueue();
  	}
  }

  /**
   * Advances the taskQueue with an increased depth
   */
  function advanceTaskQueue() {
  	var start = now();
  	config.depth = (config.depth || 0) + 1;

  	processTaskQueue(start);

  	config.depth--;
  }

  /**
   * Process the first task on the taskQueue as a promise.
   * Each task is a function returned by https://github.com/qunitjs/qunit/blob/master/src/test.js#L381
   */
  function processTaskQueue(start) {
  	if (taskQueue.length && !config.blocking) {
  		var elapsedTime = now() - start;

  		if (!defined.setTimeout || config.updateRate <= 0 || elapsedTime < config.updateRate) {
  			var task = taskQueue.shift();
  			Promise$1.resolve(task()).then(function () {
  				if (!taskQueue.length) {
  					advance();
  				} else {
  					processTaskQueue(start);
  				}
  			});
  		} else {
  			setTimeout$1(advance);
  		}
  	}
  }

  /**
   * Advance the testQueue to the next test to process. Call done() if testQueue completes.
   */
  function advanceTestQueue() {
  	if (!config.blocking && !config.queue.length && config.depth === 0) {
  		done();
  		return;
  	}

  	var testTasks = config.queue.shift();
  	addToTaskQueue(testTasks());

  	if (priorityCount > 0) {
  		priorityCount--;
  	}

  	advance();
  }

  /**
   * Enqueue the tasks for a test into the task queue.
   * @param {Array} tasksArray
   */
  function addToTaskQueue(tasksArray) {
  	taskQueue.push.apply(taskQueue, toConsumableArray(tasksArray));
  }

  /**
   * Return the number of tasks remaining in the task queue to be processed.
   * @return {Number}
   */
  function taskQueueLength() {
  	return taskQueue.length;
  }

  /**
   * Adds a test to the TestQueue for execution.
   * @param {Function} testTasksFunc
   * @param {Boolean} prioritize
   * @param {String} seed
   */
  function addToTestQueue(testTasksFunc, prioritize, seed) {
  	if (prioritize) {
  		config.queue.splice(priorityCount++, 0, testTasksFunc);
  	} else if (seed) {
  		if (!unitSampler) {
  			unitSampler = unitSamplerGenerator(seed);
  		}

  		// Insert into a random position after all prioritized items
  		var index = Math.floor(unitSampler() * (config.queue.length - priorityCount + 1));
  		config.queue.splice(priorityCount + index, 0, testTasksFunc);
  	} else {
  		config.queue.push(testTasksFunc);
  	}
  }

  /**
   * Creates a seeded "sample" generator which is used for randomizing tests.
   */
  function unitSamplerGenerator(seed) {

  	// 32-bit xorshift, requires only a nonzero seed
  	// http://excamera.com/sphinx/article-xorshift.html
  	var sample = parseInt(generateHash(seed), 16) || -1;
  	return function () {
  		sample ^= sample << 13;
  		sample ^= sample >>> 17;
  		sample ^= sample << 5;

  		// ECMAScript has no unsigned number type
  		if (sample < 0) {
  			sample += 0x100000000;
  		}

  		return sample / 0x100000000;
  	};
  }

  /**
   * This function is called when the ProcessingQueue is done processing all
   * items. It handles emitting the final run events.
   */
  function done() {
  	var storage = config.storage;

  	ProcessingQueue.finished = true;

  	var runtime = now() - config.started;
  	var passed = config.stats.all - config.stats.bad;

  	if (config.stats.all === 0) {

  		if (config.filter && config.filter.length) {
  			throw new Error("No tests matched the filter \"" + config.filter + "\".");
  		}

  		if (config.module && config.module.length) {
  			throw new Error("No tests matched the module \"" + config.module + "\".");
  		}

  		if (config.moduleId && config.moduleId.length) {
  			throw new Error("No tests matched the moduleId \"" + config.moduleId + "\".");
  		}

  		if (config.testId && config.testId.length) {
  			throw new Error("No tests matched the testId \"" + config.testId + "\".");
  		}

  		throw new Error("No tests were run.");
  	}

  	emit("runEnd", globalSuite.end(true));
  	runLoggingCallbacks("done", {
  		passed: passed,
  		failed: config.stats.bad,
  		total: config.stats.all,
  		runtime: runtime
  	}).then(function () {

  		// Clear own storage items if all tests passed
  		if (storage && config.stats.bad === 0) {
  			for (var i = storage.length - 1; i >= 0; i--) {
  				var key = storage.key(i);

  				if (key.indexOf("qunit-test-") === 0) {
  					storage.removeItem(key);
  				}
  			}
  		}
  	});
  }

  var ProcessingQueue = {
  	finished: false,
  	add: addToTestQueue,
  	advance: advance,
  	taskCount: taskQueueLength
  };

  var TestReport = function () {
  	function TestReport(name, suite, options) {
  		classCallCheck(this, TestReport);

  		this.name = name;
  		this.suiteName = suite.name;
  		this.fullName = suite.fullName.concat(name);
  		this.runtime = 0;
  		this.assertions = [];

  		this.skipped = !!options.skip;
  		this.todo = !!options.todo;

  		this.valid = options.valid;

  		this._startTime = 0;
  		this._endTime = 0;

  		suite.pushTest(this);
  	}

  	createClass(TestReport, [{
  		key: "start",
  		value: function start(recordTime) {
  			if (recordTime) {
  				this._startTime = performanceNow();
  				if (performance) {
  					performance.mark("qunit_test_start");
  				}
  			}

  			return {
  				name: this.name,
  				suiteName: this.suiteName,
  				fullName: this.fullName.slice()
  			};
  		}
  	}, {
  		key: "end",
  		value: function end(recordTime) {
  			if (recordTime) {
  				this._endTime = performanceNow();
  				if (performance) {
  					performance.mark("qunit_test_end");

  					var testName = this.fullName.join(" – ");

  					measure("QUnit Test: " + testName, "qunit_test_start", "qunit_test_end");
  				}
  			}

  			return extend(this.start(), {
  				runtime: this.getRuntime(),
  				status: this.getStatus(),
  				errors: this.getFailedAssertions(),
  				assertions: this.getAssertions()
  			});
  		}
  	}, {
  		key: "pushAssertion",
  		value: function pushAssertion(assertion) {
  			this.assertions.push(assertion);
  		}
  	}, {
  		key: "getRuntime",
  		value: function getRuntime() {
  			return this._endTime - this._startTime;
  		}
  	}, {
  		key: "getStatus",
  		value: function getStatus() {
  			if (this.skipped) {
  				return "skipped";
  			}

  			var testPassed = this.getFailedAssertions().length > 0 ? this.todo : !this.todo;

  			if (!testPassed) {
  				return "failed";
  			} else if (this.todo) {
  				return "todo";
  			} else {
  				return "passed";
  			}
  		}
  	}, {
  		key: "getFailedAssertions",
  		value: function getFailedAssertions() {
  			return this.assertions.filter(function (assertion) {
  				return !assertion.passed;
  			});
  		}
  	}, {
  		key: "getAssertions",
  		value: function getAssertions() {
  			return this.assertions.slice();
  		}

  		// Remove actual and expected values from assertions. This is to prevent
  		// leaking memory throughout a test suite.

  	}, {
  		key: "slimAssertions",
  		value: function slimAssertions() {
  			this.assertions = this.assertions.map(function (assertion) {
  				delete assertion.actual;
  				delete assertion.expected;
  				return assertion;
  			});
  		}
  	}]);
  	return TestReport;
  }();

  var focused$1 = false;

  function Test(settings) {
  	var i, l;

  	++Test.count;

  	this.expected = null;
  	this.assertions = [];
  	this.semaphore = 0;
  	this.module = config.currentModule;
  	this.steps = [];
  	this.timeout = undefined;
  	this.errorForStack = new Error();

  	// If a module is skipped, all its tests and the tests of the child suites
  	// should be treated as skipped even if they are defined as `only` or `todo`.
  	// As for `todo` module, all its tests will be treated as `todo` except for
  	// tests defined as `skip` which will be left intact.
  	//
  	// So, if a test is defined as `todo` and is inside a skipped module, we should
  	// then treat that test as if was defined as `skip`.
  	if (this.module.skip) {
  		settings.skip = true;
  		settings.todo = false;

  		// Skipped tests should be left intact
  	} else if (this.module.todo && !settings.skip) {
  		settings.todo = true;
  	}

  	extend(this, settings);

  	this.testReport = new TestReport(settings.testName, this.module.suiteReport, {
  		todo: settings.todo,
  		skip: settings.skip,
  		valid: this.valid()
  	});

  	// Register unique strings
  	for (i = 0, l = this.module.tests; i < l.length; i++) {
  		if (this.module.tests[i].name === this.testName) {
  			this.testName += " ";
  		}
  	}

  	this.testId = generateHash(this.module.name, this.testName);

  	this.module.tests.push({
  		name: this.testName,
  		testId: this.testId,
  		skip: !!settings.skip
  	});

  	if (settings.skip) {

  		// Skipped tests will fully ignore any sent callback
  		this.callback = function () {};
  		this.async = false;
  		this.expected = 0;
  	} else {
  		if (typeof this.callback !== "function") {
  			var method = this.todo ? "todo" : "test";

  			// eslint-disable-next-line max-len
  			throw new TypeError("You must provide a function as a test callback to QUnit." + method + "(\"" + settings.testName + "\")");
  		}

  		this.assert = new Assert(this);
  	}
  }

  Test.count = 0;

  function getNotStartedModules(startModule) {
  	var module = startModule,
  	    modules = [];

  	while (module && module.testsRun === 0) {
  		modules.push(module);
  		module = module.parentModule;
  	}

  	// The above push modules from the child to the parent
  	// return a reversed order with the top being the top most parent module
  	return modules.reverse();
  }

  Test.prototype = {

  	// generating a stack trace can be expensive, so using a getter defers this until we need it
  	get stack() {
  		return extractStacktrace(this.errorForStack, 2);
  	},

  	before: function before() {
  		var _this = this;

  		var module = this.module,
  		    notStartedModules = getNotStartedModules(module);

  		// ensure the callbacks are executed serially for each module
  		var callbackPromises = notStartedModules.reduce(function (promiseChain, startModule) {
  			return promiseChain.then(function () {
  				startModule.stats = { all: 0, bad: 0, started: now() };
  				emit("suiteStart", startModule.suiteReport.start(true));
  				return runLoggingCallbacks("moduleStart", {
  					name: startModule.name,
  					tests: startModule.tests
  				});
  			});
  		}, Promise$1.resolve([]));

  		return callbackPromises.then(function () {
  			config.current = _this;

  			_this.testEnvironment = extend({}, module.testEnvironment);

  			_this.started = now();
  			emit("testStart", _this.testReport.start(true));
  			return runLoggingCallbacks("testStart", {
  				name: _this.testName,
  				module: module.name,
  				testId: _this.testId,
  				previousFailure: _this.previousFailure
  			}).then(function () {
  				if (!config.pollution) {
  					saveGlobal();
  				}
  			});
  		});
  	},

  	run: function run() {
  		var promise;

  		config.current = this;

  		this.callbackStarted = now();

  		if (config.notrycatch) {
  			runTest(this);
  			return;
  		}

  		try {
  			runTest(this);
  		} catch (e) {
  			this.pushFailure("Died on test #" + (this.assertions.length + 1) + " " + this.stack + ": " + (e.message || e), extractStacktrace(e, 0));

  			// Else next test will carry the responsibility
  			saveGlobal();

  			// Restart the tests if they're blocking
  			if (config.blocking) {
  				internalRecover(this);
  			}
  		}

  		function runTest(test) {
  			promise = test.callback.call(test.testEnvironment, test.assert);
  			test.resolvePromise(promise);

  			// If the test has a "lock" on it, but the timeout is 0, then we push a
  			// failure as the test should be synchronous.
  			if (test.timeout === 0 && test.semaphore !== 0) {
  				pushFailure("Test did not finish synchronously even though assert.timeout( 0 ) was used.", sourceFromStacktrace(2));
  			}
  		}
  	},

  	after: function after() {
  		checkPollution();
  	},

  	queueHook: function queueHook(hook, hookName, hookOwner) {
  		var _this2 = this;

  		var callHook = function callHook() {
  			var promise = hook.call(_this2.testEnvironment, _this2.assert);
  			_this2.resolvePromise(promise, hookName);
  		};

  		var runHook = function runHook() {
  			if (hookName === "before") {
  				if (hookOwner.unskippedTestsRun !== 0) {
  					return;
  				}

  				_this2.preserveEnvironment = true;
  			}

  			// The 'after' hook should only execute when there are not tests left and
  			// when the 'after' and 'finish' tasks are the only tasks left to process
  			if (hookName === "after" && hookOwner.unskippedTestsRun !== numberOfUnskippedTests(hookOwner) - 1 && (config.queue.length > 0 || ProcessingQueue.taskCount() > 2)) {
  				return;
  			}

  			config.current = _this2;
  			if (config.notrycatch) {
  				callHook();
  				return;
  			}
  			try {
  				callHook();
  			} catch (error) {
  				_this2.pushFailure(hookName + " failed on " + _this2.testName + ": " + (error.message || error), extractStacktrace(error, 0));
  			}
  		};

  		return runHook;
  	},


  	// Currently only used for module level hooks, can be used to add global level ones
  	hooks: function hooks(handler) {
  		var hooks = [];

  		function processHooks(test, module) {
  			if (module.parentModule) {
  				processHooks(test, module.parentModule);
  			}

  			if (module.hooks[handler].length) {
  				for (var i = 0; i < module.hooks[handler].length; i++) {
  					hooks.push(test.queueHook(module.hooks[handler][i], handler, module));
  				}
  			}
  		}

  		// Hooks are ignored on skipped tests
  		if (!this.skip) {
  			processHooks(this, this.module);
  		}

  		return hooks;
  	},


  	finish: function finish() {
  		config.current = this;

  		// Release the test callback to ensure that anything referenced has been
  		// released to be garbage collected.
  		this.callback = undefined;

  		if (this.steps.length) {
  			var stepsList = this.steps.join(", ");
  			this.pushFailure("Expected assert.verifySteps() to be called before end of test " + ("after using assert.step(). Unverified steps: " + stepsList), this.stack);
  		}

  		if (config.requireExpects && this.expected === null) {
  			this.pushFailure("Expected number of assertions to be defined, but expect() was " + "not called.", this.stack);
  		} else if (this.expected !== null && this.expected !== this.assertions.length) {
  			this.pushFailure("Expected " + this.expected + " assertions, but " + this.assertions.length + " were run", this.stack);
  		} else if (this.expected === null && !this.assertions.length) {
  			this.pushFailure("Expected at least one assertion, but none were run - call " + "expect(0) to accept zero assertions.", this.stack);
  		}

  		var i,
  		    module = this.module,
  		    moduleName = module.name,
  		    testName = this.testName,
  		    skipped = !!this.skip,
  		    todo = !!this.todo,
  		    bad = 0,
  		    storage = config.storage;

  		this.runtime = now() - this.started;

  		config.stats.all += this.assertions.length;
  		module.stats.all += this.assertions.length;

  		for (i = 0; i < this.assertions.length; i++) {
  			if (!this.assertions[i].result) {
  				bad++;
  				config.stats.bad++;
  				module.stats.bad++;
  			}
  		}

  		notifyTestsRan(module, skipped);

  		// Store result when possible
  		if (storage) {
  			if (bad) {
  				storage.setItem("qunit-test-" + moduleName + "-" + testName, bad);
  			} else {
  				storage.removeItem("qunit-test-" + moduleName + "-" + testName);
  			}
  		}

  		// After emitting the js-reporters event we cleanup the assertion data to
  		// avoid leaking it. It is not used by the legacy testDone callbacks.
  		emit("testEnd", this.testReport.end(true));
  		this.testReport.slimAssertions();
  		var test = this;

  		return runLoggingCallbacks("testDone", {
  			name: testName,
  			module: moduleName,
  			skipped: skipped,
  			todo: todo,
  			failed: bad,
  			passed: this.assertions.length - bad,
  			total: this.assertions.length,
  			runtime: skipped ? 0 : this.runtime,

  			// HTML Reporter use
  			assertions: this.assertions,
  			testId: this.testId,

  			// Source of Test
  			// generating stack trace is expensive, so using a getter will help defer this until we need it
  			get source() {
  				return test.stack;
  			}
  		}).then(function () {
  			if (module.testsRun === numberOfTests(module)) {
  				var completedModules = [module];

  				// Check if the parent modules, iteratively, are done. If that the case,
  				// we emit the `suiteEnd` event and trigger `moduleDone` callback.
  				var parent = module.parentModule;
  				while (parent && parent.testsRun === numberOfTests(parent)) {
  					completedModules.push(parent);
  					parent = parent.parentModule;
  				}

  				return completedModules.reduce(function (promiseChain, completedModule) {
  					return promiseChain.then(function () {
  						return logSuiteEnd(completedModule);
  					});
  				}, Promise$1.resolve([]));
  			}
  		}).then(function () {
  			config.current = undefined;
  		});

  		function logSuiteEnd(module) {

  			// Reset `module.hooks` to ensure that anything referenced in these hooks
  			// has been released to be garbage collected.
  			module.hooks = {};

  			emit("suiteEnd", module.suiteReport.end(true));
  			return runLoggingCallbacks("moduleDone", {
  				name: module.name,
  				tests: module.tests,
  				failed: module.stats.bad,
  				passed: module.stats.all - module.stats.bad,
  				total: module.stats.all,
  				runtime: now() - module.stats.started
  			});
  		}
  	},

  	preserveTestEnvironment: function preserveTestEnvironment() {
  		if (this.preserveEnvironment) {
  			this.module.testEnvironment = this.testEnvironment;
  			this.testEnvironment = extend({}, this.module.testEnvironment);
  		}
  	},

  	queue: function queue() {
  		var test = this;

  		if (!this.valid()) {
  			return;
  		}

  		function runTest() {
  			return [function () {
  				return test.before();
  			}].concat(toConsumableArray(test.hooks("before")), [function () {
  				test.preserveTestEnvironment();
  			}], toConsumableArray(test.hooks("beforeEach")), [function () {
  				test.run();
  			}], toConsumableArray(test.hooks("afterEach").reverse()), toConsumableArray(test.hooks("after").reverse()), [function () {
  				test.after();
  			}, function () {
  				return test.finish();
  			}]);
  		}

  		var previousFailCount = config.storage && +config.storage.getItem("qunit-test-" + this.module.name + "-" + this.testName);

  		// Prioritize previously failed tests, detected from storage
  		var prioritize = config.reorder && !!previousFailCount;

  		this.previousFailure = !!previousFailCount;

  		ProcessingQueue.add(runTest, prioritize, config.seed);

  		// If the queue has already finished, we manually process the new test
  		if (ProcessingQueue.finished) {
  			ProcessingQueue.advance();
  		}
  	},


  	pushResult: function pushResult(resultInfo) {
  		if (this !== config.current) {
  			throw new Error("Assertion occurred after test had finished.");
  		}

  		// Destructure of resultInfo = { result, actual, expected, message, negative }
  		var source,
  		    details = {
  			module: this.module.name,
  			name: this.testName,
  			result: resultInfo.result,
  			message: resultInfo.message,
  			actual: resultInfo.actual,
  			testId: this.testId,
  			negative: resultInfo.negative || false,
  			runtime: now() - this.started,
  			todo: !!this.todo
  		};

  		if (hasOwn.call(resultInfo, "expected")) {
  			details.expected = resultInfo.expected;
  		}

  		if (!resultInfo.result) {
  			source = resultInfo.source || sourceFromStacktrace();

  			if (source) {
  				details.source = source;
  			}
  		}

  		this.logAssertion(details);

  		this.assertions.push({
  			result: !!resultInfo.result,
  			message: resultInfo.message
  		});
  	},

  	pushFailure: function pushFailure(message, source, actual) {
  		if (!(this instanceof Test)) {
  			throw new Error("pushFailure() assertion outside test context, was " + sourceFromStacktrace(2));
  		}

  		this.pushResult({
  			result: false,
  			message: message || "error",
  			actual: actual || null,
  			source: source
  		});
  	},

  	/**
    * Log assertion details using both the old QUnit.log interface and
    * QUnit.on( "assertion" ) interface.
    *
    * @private
    */
  	logAssertion: function logAssertion(details) {
  		runLoggingCallbacks("log", details);

  		var assertion = {
  			passed: details.result,
  			actual: details.actual,
  			expected: details.expected,
  			message: details.message,
  			stack: details.source,
  			todo: details.todo
  		};
  		this.testReport.pushAssertion(assertion);
  		emit("assertion", assertion);
  	},


  	resolvePromise: function resolvePromise(promise, phase) {
  		var then,
  		    resume,
  		    message,
  		    test = this;
  		if (promise != null) {
  			then = promise.then;
  			if (objectType(then) === "function") {
  				resume = internalStop(test);
  				if (config.notrycatch) {
  					then.call(promise, function () {
  						resume();
  					});
  				} else {
  					then.call(promise, function () {
  						resume();
  					}, function (error) {
  						message = "Promise rejected " + (!phase ? "during" : phase.replace(/Each$/, "")) + " \"" + test.testName + "\": " + (error && error.message || error);
  						test.pushFailure(message, extractStacktrace(error, 0));

  						// Else next test will carry the responsibility
  						saveGlobal();

  						// Unblock
  						internalRecover(test);
  					});
  				}
  			}
  		}
  	},

  	valid: function valid() {
  		var filter = config.filter,
  		    regexFilter = /^(!?)\/([\w\W]*)\/(i?$)/.exec(filter),
  		    module = config.module && config.module.toLowerCase(),
  		    fullName = this.module.name + ": " + this.testName;

  		function moduleChainNameMatch(testModule) {
  			var testModuleName = testModule.name ? testModule.name.toLowerCase() : null;
  			if (testModuleName === module) {
  				return true;
  			} else if (testModule.parentModule) {
  				return moduleChainNameMatch(testModule.parentModule);
  			} else {
  				return false;
  			}
  		}

  		function moduleChainIdMatch(testModule) {
  			return inArray(testModule.moduleId, config.moduleId) || testModule.parentModule && moduleChainIdMatch(testModule.parentModule);
  		}

  		// Internally-generated tests are always valid
  		if (this.callback && this.callback.validTest) {
  			return true;
  		}

  		if (config.moduleId && config.moduleId.length > 0 && !moduleChainIdMatch(this.module)) {

  			return false;
  		}

  		if (config.testId && config.testId.length > 0 && !inArray(this.testId, config.testId)) {

  			return false;
  		}

  		if (module && !moduleChainNameMatch(this.module)) {
  			return false;
  		}

  		if (!filter) {
  			return true;
  		}

  		return regexFilter ? this.regexFilter(!!regexFilter[1], regexFilter[2], regexFilter[3], fullName) : this.stringFilter(filter, fullName);
  	},

  	regexFilter: function regexFilter(exclude, pattern, flags, fullName) {
  		var regex = new RegExp(pattern, flags);
  		var match = regex.test(fullName);

  		return match !== exclude;
  	},

  	stringFilter: function stringFilter(filter, fullName) {
  		filter = filter.toLowerCase();
  		fullName = fullName.toLowerCase();

  		var include = filter.charAt(0) !== "!";
  		if (!include) {
  			filter = filter.slice(1);
  		}

  		// If the filter matches, we need to honour include
  		if (fullName.indexOf(filter) !== -1) {
  			return include;
  		}

  		// Otherwise, do the opposite
  		return !include;
  	}
  };

  function pushFailure() {
  	if (!config.current) {
  		throw new Error("pushFailure() assertion outside test context, in " + sourceFromStacktrace(2));
  	}

  	// Gets current test obj
  	var currentTest = config.current;

  	return currentTest.pushFailure.apply(currentTest, arguments);
  }

  function saveGlobal() {
  	config.pollution = [];

  	if (config.noglobals) {
  		for (var key in global$1) {
  			if (hasOwn.call(global$1, key)) {

  				// In Opera sometimes DOM element ids show up here, ignore them
  				if (/^qunit-test-output/.test(key)) {
  					continue;
  				}
  				config.pollution.push(key);
  			}
  		}
  	}
  }

  function checkPollution() {
  	var newGlobals,
  	    deletedGlobals,
  	    old = config.pollution;

  	saveGlobal();

  	newGlobals = diff(config.pollution, old);
  	if (newGlobals.length > 0) {
  		pushFailure("Introduced global variable(s): " + newGlobals.join(", "));
  	}

  	deletedGlobals = diff(old, config.pollution);
  	if (deletedGlobals.length > 0) {
  		pushFailure("Deleted global variable(s): " + deletedGlobals.join(", "));
  	}
  }

  // Will be exposed as QUnit.test
  function test(testName, callback) {
  	if (focused$1) {
  		return;
  	}

  	var newTest = new Test({
  		testName: testName,
  		callback: callback
  	});

  	newTest.queue();
  }

  function todo(testName, callback) {
  	if (focused$1) {
  		return;
  	}

  	var newTest = new Test({
  		testName: testName,
  		callback: callback,
  		todo: true
  	});

  	newTest.queue();
  }

  // Will be exposed as QUnit.skip
  function skip(testName) {
  	if (focused$1) {
  		return;
  	}

  	var test = new Test({
  		testName: testName,
  		skip: true
  	});

  	test.queue();
  }

  // Will be exposed as QUnit.only
  function only(testName, callback) {
  	if (focused$1) {
  		return;
  	}

  	config.queue.length = 0;
  	focused$1 = true;

  	var newTest = new Test({
  		testName: testName,
  		callback: callback
  	});

  	newTest.queue();
  }

  // Resets config.timeout with a new timeout duration.
  function resetTestTimeout(timeoutDuration) {
  	clearTimeout(config.timeout);
  	config.timeout = setTimeout$1(config.timeoutHandler(timeoutDuration), timeoutDuration);
  }

  // Put a hold on processing and return a function that will release it.
  function internalStop(test) {
  	var released = false;
  	test.semaphore += 1;
  	config.blocking = true;

  	// Set a recovery timeout, if so configured.
  	if (defined.setTimeout) {
  		var timeoutDuration = void 0;

  		if (typeof test.timeout === "number") {
  			timeoutDuration = test.timeout;
  		} else if (typeof config.testTimeout === "number") {
  			timeoutDuration = config.testTimeout;
  		}

  		if (typeof timeoutDuration === "number" && timeoutDuration > 0) {
  			clearTimeout(config.timeout);
  			config.timeoutHandler = function (timeout) {
  				return function () {
  					pushFailure("Test took longer than " + timeout + "ms; test timed out.", sourceFromStacktrace(2));
  					released = true;
  					internalRecover(test);
  				};
  			};
  			config.timeout = setTimeout$1(config.timeoutHandler(timeoutDuration), timeoutDuration);
  		}
  	}

  	return function resume() {
  		if (released) {
  			return;
  		}

  		released = true;
  		test.semaphore -= 1;
  		internalStart(test);
  	};
  }

  // Forcefully release all processing holds.
  function internalRecover(test) {
  	test.semaphore = 0;
  	internalStart(test);
  }

  // Release a processing hold, scheduling a resumption attempt if no holds remain.
  function internalStart(test) {

  	// If semaphore is non-numeric, throw error
  	if (isNaN(test.semaphore)) {
  		test.semaphore = 0;

  		pushFailure("Invalid value on test.semaphore", sourceFromStacktrace(2));
  		return;
  	}

  	// Don't start until equal number of stop-calls
  	if (test.semaphore > 0) {
  		return;
  	}

  	// Throw an Error if start is called more often than stop
  	if (test.semaphore < 0) {
  		test.semaphore = 0;

  		pushFailure("Tried to restart test while already started (test's semaphore was 0 already)", sourceFromStacktrace(2));
  		return;
  	}

  	// Add a slight delay to allow more assertions etc.
  	if (defined.setTimeout) {
  		if (config.timeout) {
  			clearTimeout(config.timeout);
  		}
  		config.timeout = setTimeout$1(function () {
  			if (test.semaphore > 0) {
  				return;
  			}

  			if (config.timeout) {
  				clearTimeout(config.timeout);
  			}

  			begin();
  		});
  	} else {
  		begin();
  	}
  }

  function collectTests(module) {
  	var tests = [].concat(module.tests);
  	var modules = [].concat(toConsumableArray(module.childModules));

  	// Do a breadth-first traversal of the child modules
  	while (modules.length) {
  		var nextModule = modules.shift();
  		tests.push.apply(tests, nextModule.tests);
  		modules.push.apply(modules, toConsumableArray(nextModule.childModules));
  	}

  	return tests;
  }

  function numberOfTests(module) {
  	return collectTests(module).length;
  }

  function numberOfUnskippedTests(module) {
  	return collectTests(module).filter(function (test) {
  		return !test.skip;
  	}).length;
  }

  function notifyTestsRan(module, skipped) {
  	module.testsRun++;
  	if (!skipped) {
  		module.unskippedTestsRun++;
  	}
  	while (module = module.parentModule) {
  		module.testsRun++;
  		if (!skipped) {
  			module.unskippedTestsRun++;
  		}
  	}
  }

  var Assert = function () {
  	function Assert(testContext) {
  		classCallCheck(this, Assert);

  		this.test = testContext;
  	}

  	// Assert helpers

  	createClass(Assert, [{
  		key: "timeout",
  		value: function timeout(duration) {
  			if (typeof duration !== "number") {
  				throw new Error("You must pass a number as the duration to assert.timeout");
  			}

  			this.test.timeout = duration;

  			// If a timeout has been set, clear it and reset with the new duration
  			if (config.timeout) {
  				clearTimeout(config.timeout);

  				if (config.timeoutHandler && this.test.timeout > 0) {
  					resetTestTimeout(this.test.timeout);
  				}
  			}
  		}

  		// Documents a "step", which is a string value, in a test as a passing assertion

  	}, {
  		key: "step",
  		value: function step(message) {
  			var assertionMessage = message;
  			var result = !!message;

  			this.test.steps.push(message);

  			if (objectType(message) === "undefined" || message === "") {
  				assertionMessage = "You must provide a message to assert.step";
  			} else if (objectType(message) !== "string") {
  				assertionMessage = "You must provide a string value to assert.step";
  				result = false;
  			}

  			this.pushResult({
  				result: result,
  				message: assertionMessage
  			});
  		}

  		// Verifies the steps in a test match a given array of string values

  	}, {
  		key: "verifySteps",
  		value: function verifySteps(steps, message) {

  			// Since the steps array is just string values, we can clone with slice
  			var actualStepsClone = this.test.steps.slice();
  			this.deepEqual(actualStepsClone, steps, message);
  			this.test.steps.length = 0;
  		}

  		// Specify the number of expected assertions to guarantee that failed test
  		// (no assertions are run at all) don't slip through.

  	}, {
  		key: "expect",
  		value: function expect(asserts) {
  			if (arguments.length === 1) {
  				this.test.expected = asserts;
  			} else {
  				return this.test.expected;
  			}
  		}

  		// Put a hold on processing and return a function that will release it a maximum of once.

  	}, {
  		key: "async",
  		value: function async(count) {
  			var test$$1 = this.test;

  			var popped = false,
  			    acceptCallCount = count;

  			if (typeof acceptCallCount === "undefined") {
  				acceptCallCount = 1;
  			}

  			var resume = internalStop(test$$1);

  			return function done() {
  				if (config.current !== test$$1) {
  					throw Error("assert.async callback called after test finished.");
  				}

  				if (popped) {
  					test$$1.pushFailure("Too many calls to the `assert.async` callback", sourceFromStacktrace(2));
  					return;
  				}

  				acceptCallCount -= 1;
  				if (acceptCallCount > 0) {
  					return;
  				}

  				popped = true;
  				resume();
  			};
  		}

  		// Exports test.push() to the user API
  		// Alias of pushResult.

  	}, {
  		key: "push",
  		value: function push(result, actual, expected, message, negative) {
  			Logger.warn("assert.push is deprecated and will be removed in QUnit 3.0." + " Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult).");

  			var currentAssert = this instanceof Assert ? this : config.current.assert;
  			return currentAssert.pushResult({
  				result: result,
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: negative
  			});
  		}
  	}, {
  		key: "pushResult",
  		value: function pushResult(resultInfo) {

  			// Destructure of resultInfo = { result, actual, expected, message, negative }
  			var assert = this;
  			var currentTest = assert instanceof Assert && assert.test || config.current;

  			// Backwards compatibility fix.
  			// Allows the direct use of global exported assertions and QUnit.assert.*
  			// Although, it's use is not recommended as it can leak assertions
  			// to other tests from async tests, because we only get a reference to the current test,
  			// not exactly the test where assertion were intended to be called.
  			if (!currentTest) {
  				throw new Error("assertion outside test context, in " + sourceFromStacktrace(2));
  			}

  			if (!(assert instanceof Assert)) {
  				assert = currentTest.assert;
  			}

  			return assert.test.pushResult(resultInfo);
  		}
  	}, {
  		key: "ok",
  		value: function ok(result, message) {
  			if (!message) {
  				message = result ? "okay" : "failed, expected argument to be truthy, was: " + dump.parse(result);
  			}

  			this.pushResult({
  				result: !!result,
  				actual: result,
  				expected: true,
  				message: message
  			});
  		}
  	}, {
  		key: "notOk",
  		value: function notOk(result, message) {
  			if (!message) {
  				message = !result ? "okay" : "failed, expected argument to be falsy, was: " + dump.parse(result);
  			}

  			this.pushResult({
  				result: !result,
  				actual: result,
  				expected: false,
  				message: message
  			});
  		}
  	}, {
  		key: "equal",
  		value: function equal(actual, expected, message) {

  			// eslint-disable-next-line eqeqeq
  			var result = expected == actual;

  			this.pushResult({
  				result: result,
  				actual: actual,
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "notEqual",
  		value: function notEqual(actual, expected, message) {

  			// eslint-disable-next-line eqeqeq
  			var result = expected != actual;

  			this.pushResult({
  				result: result,
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: true
  			});
  		}
  	}, {
  		key: "propEqual",
  		value: function propEqual(actual, expected, message) {
  			actual = objectValues(actual);
  			expected = objectValues(expected);

  			this.pushResult({
  				result: equiv(actual, expected),
  				actual: actual,
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "notPropEqual",
  		value: function notPropEqual(actual, expected, message) {
  			actual = objectValues(actual);
  			expected = objectValues(expected);

  			this.pushResult({
  				result: !equiv(actual, expected),
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: true
  			});
  		}
  	}, {
  		key: "deepEqual",
  		value: function deepEqual(actual, expected, message) {
  			this.pushResult({
  				result: equiv(actual, expected),
  				actual: actual,
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "notDeepEqual",
  		value: function notDeepEqual(actual, expected, message) {
  			this.pushResult({
  				result: !equiv(actual, expected),
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: true
  			});
  		}
  	}, {
  		key: "strictEqual",
  		value: function strictEqual(actual, expected, message) {
  			this.pushResult({
  				result: expected === actual,
  				actual: actual,
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "notStrictEqual",
  		value: function notStrictEqual(actual, expected, message) {
  			this.pushResult({
  				result: expected !== actual,
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: true
  			});
  		}
  	}, {
  		key: "throws",
  		value: function throws(block, expected, message) {
  			var actual = void 0,
  			    result = false;

  			var currentTest = this instanceof Assert && this.test || config.current;

  			// 'expected' is optional unless doing string comparison
  			if (objectType(expected) === "string") {
  				if (message == null) {
  					message = expected;
  					expected = null;
  				} else {
  					throw new Error("throws/raises does not accept a string value for the expected argument.\n" + "Use a non-string object value (e.g. regExp) instead if it's necessary.");
  				}
  			}

  			currentTest.ignoreGlobalErrors = true;
  			try {
  				block.call(currentTest.testEnvironment);
  			} catch (e) {
  				actual = e;
  			}
  			currentTest.ignoreGlobalErrors = false;

  			if (actual) {
  				var expectedType = objectType(expected);

  				// We don't want to validate thrown error
  				if (!expected) {
  					result = true;

  					// Expected is a regexp
  				} else if (expectedType === "regexp") {
  					result = expected.test(errorString(actual));

  					// Log the string form of the regexp
  					expected = String(expected);

  					// Expected is a constructor, maybe an Error constructor
  				} else if (expectedType === "function" && actual instanceof expected) {
  					result = true;

  					// Expected is an Error object
  				} else if (expectedType === "object") {
  					result = actual instanceof expected.constructor && actual.name === expected.name && actual.message === expected.message;

  					// Log the string form of the Error object
  					expected = errorString(expected);

  					// Expected is a validation function which returns true if validation passed
  				} else if (expectedType === "function" && expected.call({}, actual) === true) {
  					expected = null;
  					result = true;
  				}
  			}

  			currentTest.assert.pushResult({
  				result: result,

  				// undefined if it didn't throw
  				actual: actual && errorString(actual),
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "rejects",
  		value: function rejects(promise, expected, message) {
  			var result = false;

  			var currentTest = this instanceof Assert && this.test || config.current;

  			// 'expected' is optional unless doing string comparison
  			if (objectType(expected) === "string") {
  				if (message === undefined) {
  					message = expected;
  					expected = undefined;
  				} else {
  					message = "assert.rejects does not accept a string value for the expected " + "argument.\nUse a non-string object value (e.g. validator function) instead " + "if necessary.";

  					currentTest.assert.pushResult({
  						result: false,
  						message: message
  					});

  					return;
  				}
  			}

  			var then = promise && promise.then;
  			if (objectType(then) !== "function") {
  				var _message = "The value provided to `assert.rejects` in " + "\"" + currentTest.testName + "\" was not a promise.";

  				currentTest.assert.pushResult({
  					result: false,
  					message: _message,
  					actual: promise
  				});

  				return;
  			}

  			var done = this.async();

  			return then.call(promise, function handleFulfillment() {
  				var message = "The promise returned by the `assert.rejects` callback in " + "\"" + currentTest.testName + "\" did not reject.";

  				currentTest.assert.pushResult({
  					result: false,
  					message: message,
  					actual: promise
  				});

  				done();
  			}, function handleRejection(actual) {
  				var expectedType = objectType(expected);

  				// We don't want to validate
  				if (expected === undefined) {
  					result = true;

  					// Expected is a regexp
  				} else if (expectedType === "regexp") {
  					result = expected.test(errorString(actual));

  					// Log the string form of the regexp
  					expected = String(expected);

  					// Expected is a constructor, maybe an Error constructor
  				} else if (expectedType === "function" && actual instanceof expected) {
  					result = true;

  					// Expected is an Error object
  				} else if (expectedType === "object") {
  					result = actual instanceof expected.constructor && actual.name === expected.name && actual.message === expected.message;

  					// Log the string form of the Error object
  					expected = errorString(expected);

  					// Expected is a validation function which returns true if validation passed
  				} else {
  					if (expectedType === "function") {
  						result = expected.call({}, actual) === true;
  						expected = null;

  						// Expected is some other invalid type
  					} else {
  						result = false;
  						message = "invalid expected value provided to `assert.rejects` " + "callback in \"" + currentTest.testName + "\": " + expectedType + ".";
  					}
  				}

  				currentTest.assert.pushResult({
  					result: result,

  					// leave rejection value of undefined as-is
  					actual: actual && errorString(actual),
  					expected: expected,
  					message: message
  				});

  				done();
  			});
  		}
  	}]);
  	return Assert;
  }();

  // Provide an alternative to assert.throws(), for environments that consider throws a reserved word
  // Known to us are: Closure Compiler, Narwhal
  // eslint-disable-next-line dot-notation


  Assert.prototype.raises = Assert.prototype["throws"];

  /**
   * Converts an error into a simple string for comparisons.
   *
   * @param {Error|Object} error
   * @return {String}
   */
  function errorString(error) {
  	var resultErrorString = error.toString();

  	// If the error wasn't a subclass of Error but something like
  	// an object literal with name and message properties...
  	if (resultErrorString.substring(0, 7) === "[object") {
  		var name = error.name ? error.name.toString() : "Error";
  		var message = error.message ? error.message.toString() : "";

  		if (name && message) {
  			return name + ": " + message;
  		} else if (name) {
  			return name;
  		} else if (message) {
  			return message;
  		} else {
  			return "Error";
  		}
  	} else {
  		return resultErrorString;
  	}
  }

  /* global module, exports, define */
  function exportQUnit(QUnit) {

  	if (defined.document) {

  		// QUnit may be defined when it is preconfigured but then only QUnit and QUnit.config may be defined.
  		if (window$1.QUnit && window$1.QUnit.version) {
  			throw new Error("QUnit has already been defined.");
  		}

  		window$1.QUnit = QUnit;
  	}

  	// For nodejs
  	if ( true && module && module.exports) {
  		module.exports = QUnit;

  		// For consistency with CommonJS environments' exports
  		module.exports.QUnit = QUnit;
  	}

  	// For CommonJS with exports, but without module.exports, like Rhino
  	if ( true && exports) {
  		exports.QUnit = QUnit;
  	}

  	if (true) {
  		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  			return QUnit;
  		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  		QUnit.config.autostart = false;
  	}

  	// For Web/Service Workers
  	if (self$1 && self$1.WorkerGlobalScope && self$1 instanceof self$1.WorkerGlobalScope) {
  		self$1.QUnit = QUnit;
  	}
  }

  // Handle an unhandled exception. By convention, returns true if further
  // error handling should be suppressed and false otherwise.
  // In this case, we will only suppress further error handling if the
  // "ignoreGlobalErrors" configuration option is enabled.
  function onError(error) {
  	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
  		args[_key - 1] = arguments[_key];
  	}

  	if (config.current) {
  		if (config.current.ignoreGlobalErrors) {
  			return true;
  		}
  		pushFailure.apply(undefined, [error.message, error.stacktrace || error.fileName + ":" + error.lineNumber].concat(args));
  	} else {
  		test("global failure", extend(function () {
  			pushFailure.apply(undefined, [error.message, error.stacktrace || error.fileName + ":" + error.lineNumber].concat(args));
  		}, { validTest: true }));
  	}

  	return false;
  }

  // Handle an unhandled rejection
  function onUnhandledRejection(reason) {
  	var resultInfo = {
  		result: false,
  		message: reason.message || "error",
  		actual: reason,
  		source: reason.stack || sourceFromStacktrace(3)
  	};

  	var currentTest = config.current;
  	if (currentTest) {
  		currentTest.assert.pushResult(resultInfo);
  	} else {
  		test("global failure", extend(function (assert) {
  			assert.pushResult(resultInfo);
  		}, { validTest: true }));
  	}
  }

  var QUnit = {};
  var globalSuite = new SuiteReport();

  // The initial "currentModule" represents the global (or top-level) module that
  // is not explicitly defined by the user, therefore we add the "globalSuite" to
  // it since each module has a suiteReport associated with it.
  config.currentModule.suiteReport = globalSuite;

  var globalStartCalled = false;
  var runStarted = false;

  // Figure out if we're running the tests from a server or not
  QUnit.isLocal = !(defined.document && window$1.location.protocol !== "file:");

  // Expose the current QUnit version
  QUnit.version = "2.9.3";

  extend(QUnit, {
  	on: on,

  	module: module$1,

  	test: test,

  	todo: todo,

  	skip: skip,

  	only: only,

  	start: function start(count) {
  		var globalStartAlreadyCalled = globalStartCalled;

  		if (!config.current) {
  			globalStartCalled = true;

  			if (runStarted) {
  				throw new Error("Called start() while test already started running");
  			} else if (globalStartAlreadyCalled || count > 1) {
  				throw new Error("Called start() outside of a test context too many times");
  			} else if (config.autostart) {
  				throw new Error("Called start() outside of a test context when " + "QUnit.config.autostart was true");
  			} else if (!config.pageLoaded) {

  				// The page isn't completely loaded yet, so we set autostart and then
  				// load if we're in Node or wait for the browser's load event.
  				config.autostart = true;

  				// Starts from Node even if .load was not previously called. We still return
  				// early otherwise we'll wind up "beginning" twice.
  				if (!defined.document) {
  					QUnit.load();
  				}

  				return;
  			}
  		} else {
  			throw new Error("QUnit.start cannot be called inside a test context.");
  		}

  		scheduleBegin();
  	},

  	config: config,

  	is: is,

  	objectType: objectType,

  	extend: extend,

  	load: function load() {
  		config.pageLoaded = true;

  		// Initialize the configuration options
  		extend(config, {
  			stats: { all: 0, bad: 0 },
  			started: 0,
  			updateRate: 1000,
  			autostart: true,
  			filter: ""
  		}, true);

  		if (!runStarted) {
  			config.blocking = false;

  			if (config.autostart) {
  				scheduleBegin();
  			}
  		}
  	},

  	stack: function stack(offset) {
  		offset = (offset || 0) + 2;
  		return sourceFromStacktrace(offset);
  	},

  	onError: onError,

  	onUnhandledRejection: onUnhandledRejection
  });

  QUnit.pushFailure = pushFailure;
  QUnit.assert = Assert.prototype;
  QUnit.equiv = equiv;
  QUnit.dump = dump;

  registerLoggingCallbacks(QUnit);

  function scheduleBegin() {

  	runStarted = true;

  	// Add a slight delay to allow definition of more modules and tests.
  	if (defined.setTimeout) {
  		setTimeout$1(function () {
  			begin();
  		});
  	} else {
  		begin();
  	}
  }

  function unblockAndAdvanceQueue() {
  	config.blocking = false;
  	ProcessingQueue.advance();
  }

  function begin() {
  	var i,
  	    l,
  	    modulesLog = [];

  	// If the test run hasn't officially begun yet
  	if (!config.started) {

  		// Record the time of the test run's beginning
  		config.started = now();

  		// Delete the loose unnamed module if unused.
  		if (config.modules[0].name === "" && config.modules[0].tests.length === 0) {
  			config.modules.shift();
  		}

  		// Avoid unnecessary information by not logging modules' test environments
  		for (i = 0, l = config.modules.length; i < l; i++) {
  			modulesLog.push({
  				name: config.modules[i].name,
  				tests: config.modules[i].tests
  			});
  		}

  		// The test run is officially beginning now
  		emit("runStart", globalSuite.start(true));
  		runLoggingCallbacks("begin", {
  			totalTests: Test.count,
  			modules: modulesLog
  		}).then(unblockAndAdvanceQueue);
  	} else {
  		unblockAndAdvanceQueue();
  	}
  }

  exportQUnit(QUnit);

  (function () {

  	if (typeof window$1 === "undefined" || typeof document$1 === "undefined") {
  		return;
  	}

  	var config = QUnit.config,
  	    hasOwn = Object.prototype.hasOwnProperty;

  	// Stores fixture HTML for resetting later
  	function storeFixture() {

  		// Avoid overwriting user-defined values
  		if (hasOwn.call(config, "fixture")) {
  			return;
  		}

  		var fixture = document$1.getElementById("qunit-fixture");
  		if (fixture) {
  			config.fixture = fixture.cloneNode(true);
  		}
  	}

  	QUnit.begin(storeFixture);

  	// Resets the fixture DOM element if available.
  	function resetFixture() {
  		if (config.fixture == null) {
  			return;
  		}

  		var fixture = document$1.getElementById("qunit-fixture");
  		var resetFixtureType = _typeof(config.fixture);
  		if (resetFixtureType === "string") {

  			// support user defined values for `config.fixture`
  			var newFixture = document$1.createElement("div");
  			newFixture.setAttribute("id", "qunit-fixture");
  			newFixture.innerHTML = config.fixture;
  			fixture.parentNode.replaceChild(newFixture, fixture);
  		} else {
  			var clonedFixture = config.fixture.cloneNode(true);
  			fixture.parentNode.replaceChild(clonedFixture, fixture);
  		}
  	}

  	QUnit.testStart(resetFixture);
  })();

  (function () {

  	// Only interact with URLs via window.location
  	var location = typeof window$1 !== "undefined" && window$1.location;
  	if (!location) {
  		return;
  	}

  	var urlParams = getUrlParams();

  	QUnit.urlParams = urlParams;

  	// Match module/test by inclusion in an array
  	QUnit.config.moduleId = [].concat(urlParams.moduleId || []);
  	QUnit.config.testId = [].concat(urlParams.testId || []);

  	// Exact case-insensitive match of the module name
  	QUnit.config.module = urlParams.module;

  	// Regular expression or case-insenstive substring match against "moduleName: testName"
  	QUnit.config.filter = urlParams.filter;

  	// Test order randomization
  	if (urlParams.seed === true) {

  		// Generate a random seed if the option is specified without a value
  		QUnit.config.seed = Math.random().toString(36).slice(2);
  	} else if (urlParams.seed) {
  		QUnit.config.seed = urlParams.seed;
  	}

  	// Add URL-parameter-mapped config values with UI form rendering data
  	QUnit.config.urlConfig.push({
  		id: "hidepassed",
  		label: "Hide passed tests",
  		tooltip: "Only show tests and assertions that fail. Stored as query-strings."
  	}, {
  		id: "noglobals",
  		label: "Check for Globals",
  		tooltip: "Enabling this will test if any test introduces new properties on the " + "global object (`window` in Browsers). Stored as query-strings."
  	}, {
  		id: "notrycatch",
  		label: "No try-catch",
  		tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging " + "exceptions in IE reasonable. Stored as query-strings."
  	});

  	QUnit.begin(function () {
  		var i,
  		    option,
  		    urlConfig = QUnit.config.urlConfig;

  		for (i = 0; i < urlConfig.length; i++) {

  			// Options can be either strings or objects with nonempty "id" properties
  			option = QUnit.config.urlConfig[i];
  			if (typeof option !== "string") {
  				option = option.id;
  			}

  			if (QUnit.config[option] === undefined) {
  				QUnit.config[option] = urlParams[option];
  			}
  		}
  	});

  	function getUrlParams() {
  		var i, param, name, value;
  		var urlParams = Object.create(null);
  		var params = location.search.slice(1).split("&");
  		var length = params.length;

  		for (i = 0; i < length; i++) {
  			if (params[i]) {
  				param = params[i].split("=");
  				name = decodeQueryParam(param[0]);

  				// Allow just a key to turn on a flag, e.g., test.html?noglobals
  				value = param.length === 1 || decodeQueryParam(param.slice(1).join("="));
  				if (name in urlParams) {
  					urlParams[name] = [].concat(urlParams[name], value);
  				} else {
  					urlParams[name] = value;
  				}
  			}
  		}

  		return urlParams;
  	}

  	function decodeQueryParam(param) {
  		return decodeURIComponent(param.replace(/\+/g, "%20"));
  	}
  })();

  var stats = {
  	passedTests: 0,
  	failedTests: 0,
  	skippedTests: 0,
  	todoTests: 0
  };

  // Escape text for attribute or text content.
  function escapeText(s) {
  	if (!s) {
  		return "";
  	}
  	s = s + "";

  	// Both single quotes and double quotes (for attributes)
  	return s.replace(/['"<>&]/g, function (s) {
  		switch (s) {
  			case "'":
  				return "&#039;";
  			case "\"":
  				return "&quot;";
  			case "<":
  				return "&lt;";
  			case ">":
  				return "&gt;";
  			case "&":
  				return "&amp;";
  		}
  	});
  }

  (function () {

  	// Don't load the HTML Reporter on non-browser environments
  	if (typeof window$1 === "undefined" || !window$1.document) {
  		return;
  	}

  	var config = QUnit.config,
  	    hiddenTests = [],
  	    document = window$1.document,
  	    collapseNext = false,
  	    hasOwn$$1 = Object.prototype.hasOwnProperty,
  	    unfilteredUrl = setUrl({ filter: undefined, module: undefined,
  		moduleId: undefined, testId: undefined }),
  	    modulesList = [];

  	function addEvent(elem, type, fn) {
  		elem.addEventListener(type, fn, false);
  	}

  	function removeEvent(elem, type, fn) {
  		elem.removeEventListener(type, fn, false);
  	}

  	function addEvents(elems, type, fn) {
  		var i = elems.length;
  		while (i--) {
  			addEvent(elems[i], type, fn);
  		}
  	}

  	function hasClass(elem, name) {
  		return (" " + elem.className + " ").indexOf(" " + name + " ") >= 0;
  	}

  	function addClass(elem, name) {
  		if (!hasClass(elem, name)) {
  			elem.className += (elem.className ? " " : "") + name;
  		}
  	}

  	function toggleClass(elem, name, force) {
  		if (force || typeof force === "undefined" && !hasClass(elem, name)) {
  			addClass(elem, name);
  		} else {
  			removeClass(elem, name);
  		}
  	}

  	function removeClass(elem, name) {
  		var set = " " + elem.className + " ";

  		// Class name may appear multiple times
  		while (set.indexOf(" " + name + " ") >= 0) {
  			set = set.replace(" " + name + " ", " ");
  		}

  		// Trim for prettiness
  		elem.className = typeof set.trim === "function" ? set.trim() : set.replace(/^\s+|\s+$/g, "");
  	}

  	function id(name) {
  		return document.getElementById && document.getElementById(name);
  	}

  	function abortTests() {
  		var abortButton = id("qunit-abort-tests-button");
  		if (abortButton) {
  			abortButton.disabled = true;
  			abortButton.innerHTML = "Aborting...";
  		}
  		QUnit.config.queue.length = 0;
  		return false;
  	}

  	function interceptNavigation(ev) {
  		applyUrlParams();

  		if (ev && ev.preventDefault) {
  			ev.preventDefault();
  		}

  		return false;
  	}

  	function getUrlConfigHtml() {
  		var i,
  		    j,
  		    val,
  		    escaped,
  		    escapedTooltip,
  		    selection = false,
  		    urlConfig = config.urlConfig,
  		    urlConfigHtml = "";

  		for (i = 0; i < urlConfig.length; i++) {

  			// Options can be either strings or objects with nonempty "id" properties
  			val = config.urlConfig[i];
  			if (typeof val === "string") {
  				val = {
  					id: val,
  					label: val
  				};
  			}

  			escaped = escapeText(val.id);
  			escapedTooltip = escapeText(val.tooltip);

  			if (!val.value || typeof val.value === "string") {
  				urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'><input id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' type='checkbox'" + (val.value ? " value='" + escapeText(val.value) + "'" : "") + (config[val.id] ? " checked='checked'" : "") + " title='" + escapedTooltip + "' />" + escapeText(val.label) + "</label>";
  			} else {
  				urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'>" + val.label + ": </label><select id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' title='" + escapedTooltip + "'><option></option>";

  				if (QUnit.is("array", val.value)) {
  					for (j = 0; j < val.value.length; j++) {
  						escaped = escapeText(val.value[j]);
  						urlConfigHtml += "<option value='" + escaped + "'" + (config[val.id] === val.value[j] ? (selection = true) && " selected='selected'" : "") + ">" + escaped + "</option>";
  					}
  				} else {
  					for (j in val.value) {
  						if (hasOwn$$1.call(val.value, j)) {
  							urlConfigHtml += "<option value='" + escapeText(j) + "'" + (config[val.id] === j ? (selection = true) && " selected='selected'" : "") + ">" + escapeText(val.value[j]) + "</option>";
  						}
  					}
  				}
  				if (config[val.id] && !selection) {
  					escaped = escapeText(config[val.id]);
  					urlConfigHtml += "<option value='" + escaped + "' selected='selected' disabled='disabled'>" + escaped + "</option>";
  				}
  				urlConfigHtml += "</select>";
  			}
  		}

  		return urlConfigHtml;
  	}

  	// Handle "click" events on toolbar checkboxes and "change" for select menus.
  	// Updates the URL with the new state of `config.urlConfig` values.
  	function toolbarChanged() {
  		var updatedUrl,
  		    value,
  		    tests,
  		    field = this,
  		    params = {};

  		// Detect if field is a select menu or a checkbox
  		if ("selectedIndex" in field) {
  			value = field.options[field.selectedIndex].value || undefined;
  		} else {
  			value = field.checked ? field.defaultValue || true : undefined;
  		}

  		params[field.name] = value;
  		updatedUrl = setUrl(params);

  		// Check if we can apply the change without a page refresh
  		if ("hidepassed" === field.name && "replaceState" in window$1.history) {
  			QUnit.urlParams[field.name] = value;
  			config[field.name] = value || false;
  			tests = id("qunit-tests");
  			if (tests) {
  				var length = tests.children.length;
  				var children = tests.children;

  				if (field.checked) {
  					for (var i = 0; i < length; i++) {
  						var test$$1 = children[i];

  						if (test$$1 && test$$1.className.indexOf("pass") > -1) {
  							hiddenTests.push(test$$1);
  						}
  					}

  					var _iteratorNormalCompletion = true;
  					var _didIteratorError = false;
  					var _iteratorError = undefined;

  					try {
  						for (var _iterator = hiddenTests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  							var hiddenTest = _step.value;

  							tests.removeChild(hiddenTest);
  						}
  					} catch (err) {
  						_didIteratorError = true;
  						_iteratorError = err;
  					} finally {
  						try {
  							if (!_iteratorNormalCompletion && _iterator.return) {
  								_iterator.return();
  							}
  						} finally {
  							if (_didIteratorError) {
  								throw _iteratorError;
  							}
  						}
  					}
  				} else {
  					while ((test$$1 = hiddenTests.pop()) != null) {
  						tests.appendChild(test$$1);
  					}
  				}
  			}
  			window$1.history.replaceState(null, "", updatedUrl);
  		} else {
  			window$1.location = updatedUrl;
  		}
  	}

  	function setUrl(params) {
  		var key,
  		    arrValue,
  		    i,
  		    querystring = "?",
  		    location = window$1.location;

  		params = QUnit.extend(QUnit.extend({}, QUnit.urlParams), params);

  		for (key in params) {

  			// Skip inherited or undefined properties
  			if (hasOwn$$1.call(params, key) && params[key] !== undefined) {

  				// Output a parameter for each value of this key
  				// (but usually just one)
  				arrValue = [].concat(params[key]);
  				for (i = 0; i < arrValue.length; i++) {
  					querystring += encodeURIComponent(key);
  					if (arrValue[i] !== true) {
  						querystring += "=" + encodeURIComponent(arrValue[i]);
  					}
  					querystring += "&";
  				}
  			}
  		}
  		return location.protocol + "//" + location.host + location.pathname + querystring.slice(0, -1);
  	}

  	function applyUrlParams() {
  		var i,
  		    selectedModules = [],
  		    modulesList = id("qunit-modulefilter-dropdown-list").getElementsByTagName("input"),
  		    filter = id("qunit-filter-input").value;

  		for (i = 0; i < modulesList.length; i++) {
  			if (modulesList[i].checked) {
  				selectedModules.push(modulesList[i].value);
  			}
  		}

  		window$1.location = setUrl({
  			filter: filter === "" ? undefined : filter,
  			moduleId: selectedModules.length === 0 ? undefined : selectedModules,

  			// Remove module and testId filter
  			module: undefined,
  			testId: undefined
  		});
  	}

  	function toolbarUrlConfigContainer() {
  		var urlConfigContainer = document.createElement("span");

  		urlConfigContainer.innerHTML = getUrlConfigHtml();
  		addClass(urlConfigContainer, "qunit-url-config");

  		addEvents(urlConfigContainer.getElementsByTagName("input"), "change", toolbarChanged);
  		addEvents(urlConfigContainer.getElementsByTagName("select"), "change", toolbarChanged);

  		return urlConfigContainer;
  	}

  	function abortTestsButton() {
  		var button = document.createElement("button");
  		button.id = "qunit-abort-tests-button";
  		button.innerHTML = "Abort";
  		addEvent(button, "click", abortTests);
  		return button;
  	}

  	function toolbarLooseFilter() {
  		var filter = document.createElement("form"),
  		    label = document.createElement("label"),
  		    input = document.createElement("input"),
  		    button = document.createElement("button");

  		addClass(filter, "qunit-filter");

  		label.innerHTML = "Filter: ";

  		input.type = "text";
  		input.value = config.filter || "";
  		input.name = "filter";
  		input.id = "qunit-filter-input";

  		button.innerHTML = "Go";

  		label.appendChild(input);

  		filter.appendChild(label);
  		filter.appendChild(document.createTextNode(" "));
  		filter.appendChild(button);
  		addEvent(filter, "submit", interceptNavigation);

  		return filter;
  	}

  	function moduleListHtml() {
  		var i,
  		    checked,
  		    html = "";

  		for (i = 0; i < config.modules.length; i++) {
  			if (config.modules[i].name !== "") {
  				checked = config.moduleId.indexOf(config.modules[i].moduleId) > -1;
  				html += "<li><label class='clickable" + (checked ? " checked" : "") + "'><input type='checkbox' " + "value='" + config.modules[i].moduleId + "'" + (checked ? " checked='checked'" : "") + " />" + escapeText(config.modules[i].name) + "</label></li>";
  			}
  		}

  		return html;
  	}

  	function toolbarModuleFilter() {
  		var commit,
  		    reset,
  		    moduleFilter = document.createElement("form"),
  		    label = document.createElement("label"),
  		    moduleSearch = document.createElement("input"),
  		    dropDown = document.createElement("div"),
  		    actions = document.createElement("span"),
  		    applyButton = document.createElement("button"),
  		    resetButton = document.createElement("button"),
  		    allModulesLabel = document.createElement("label"),
  		    allCheckbox = document.createElement("input"),
  		    dropDownList = document.createElement("ul"),
  		    dirty = false;

  		moduleSearch.id = "qunit-modulefilter-search";
  		moduleSearch.autocomplete = "off";
  		addEvent(moduleSearch, "input", searchInput);
  		addEvent(moduleSearch, "input", searchFocus);
  		addEvent(moduleSearch, "focus", searchFocus);
  		addEvent(moduleSearch, "click", searchFocus);

  		label.id = "qunit-modulefilter-search-container";
  		label.innerHTML = "Module: ";
  		label.appendChild(moduleSearch);

  		applyButton.textContent = "Apply";
  		applyButton.style.display = "none";

  		resetButton.textContent = "Reset";
  		resetButton.type = "reset";
  		resetButton.style.display = "none";

  		allCheckbox.type = "checkbox";
  		allCheckbox.checked = config.moduleId.length === 0;

  		allModulesLabel.className = "clickable";
  		if (config.moduleId.length) {
  			allModulesLabel.className = "checked";
  		}
  		allModulesLabel.appendChild(allCheckbox);
  		allModulesLabel.appendChild(document.createTextNode("All modules"));

  		actions.id = "qunit-modulefilter-actions";
  		actions.appendChild(applyButton);
  		actions.appendChild(resetButton);
  		actions.appendChild(allModulesLabel);
  		commit = actions.firstChild;
  		reset = commit.nextSibling;
  		addEvent(commit, "click", applyUrlParams);

  		dropDownList.id = "qunit-modulefilter-dropdown-list";
  		dropDownList.innerHTML = moduleListHtml();

  		dropDown.id = "qunit-modulefilter-dropdown";
  		dropDown.style.display = "none";
  		dropDown.appendChild(actions);
  		dropDown.appendChild(dropDownList);
  		addEvent(dropDown, "change", selectionChange);
  		selectionChange();

  		moduleFilter.id = "qunit-modulefilter";
  		moduleFilter.appendChild(label);
  		moduleFilter.appendChild(dropDown);
  		addEvent(moduleFilter, "submit", interceptNavigation);
  		addEvent(moduleFilter, "reset", function () {

  			// Let the reset happen, then update styles
  			window$1.setTimeout(selectionChange);
  		});

  		// Enables show/hide for the dropdown
  		function searchFocus() {
  			if (dropDown.style.display !== "none") {
  				return;
  			}

  			dropDown.style.display = "block";
  			addEvent(document, "click", hideHandler);
  			addEvent(document, "keydown", hideHandler);

  			// Hide on Escape keydown or outside-container click
  			function hideHandler(e) {
  				var inContainer = moduleFilter.contains(e.target);

  				if (e.keyCode === 27 || !inContainer) {
  					if (e.keyCode === 27 && inContainer) {
  						moduleSearch.focus();
  					}
  					dropDown.style.display = "none";
  					removeEvent(document, "click", hideHandler);
  					removeEvent(document, "keydown", hideHandler);
  					moduleSearch.value = "";
  					searchInput();
  				}
  			}
  		}

  		// Processes module search box input
  		function searchInput() {
  			var i,
  			    item,
  			    searchText = moduleSearch.value.toLowerCase(),
  			    listItems = dropDownList.children;

  			for (i = 0; i < listItems.length; i++) {
  				item = listItems[i];
  				if (!searchText || item.textContent.toLowerCase().indexOf(searchText) > -1) {
  					item.style.display = "";
  				} else {
  					item.style.display = "none";
  				}
  			}
  		}

  		// Processes selection changes
  		function selectionChange(evt) {
  			var i,
  			    item,
  			    checkbox = evt && evt.target || allCheckbox,
  			    modulesList = dropDownList.getElementsByTagName("input"),
  			    selectedNames = [];

  			toggleClass(checkbox.parentNode, "checked", checkbox.checked);

  			dirty = false;
  			if (checkbox.checked && checkbox !== allCheckbox) {
  				allCheckbox.checked = false;
  				removeClass(allCheckbox.parentNode, "checked");
  			}
  			for (i = 0; i < modulesList.length; i++) {
  				item = modulesList[i];
  				if (!evt) {
  					toggleClass(item.parentNode, "checked", item.checked);
  				} else if (checkbox === allCheckbox && checkbox.checked) {
  					item.checked = false;
  					removeClass(item.parentNode, "checked");
  				}
  				dirty = dirty || item.checked !== item.defaultChecked;
  				if (item.checked) {
  					selectedNames.push(item.parentNode.textContent);
  				}
  			}

  			commit.style.display = reset.style.display = dirty ? "" : "none";
  			moduleSearch.placeholder = selectedNames.join(", ") || allCheckbox.parentNode.textContent;
  			moduleSearch.title = "Type to filter list. Current selection:\n" + (selectedNames.join("\n") || allCheckbox.parentNode.textContent);
  		}

  		return moduleFilter;
  	}

  	function appendToolbar() {
  		var toolbar = id("qunit-testrunner-toolbar");

  		if (toolbar) {
  			toolbar.appendChild(toolbarUrlConfigContainer());
  			toolbar.appendChild(toolbarModuleFilter());
  			toolbar.appendChild(toolbarLooseFilter());
  			toolbar.appendChild(document.createElement("div")).className = "clearfix";
  		}
  	}

  	function appendHeader() {
  		var header = id("qunit-header");

  		if (header) {
  			header.innerHTML = "<a href='" + escapeText(unfilteredUrl) + "'>" + header.innerHTML + "</a> ";
  		}
  	}

  	function appendBanner() {
  		var banner = id("qunit-banner");

  		if (banner) {
  			banner.className = "";
  		}
  	}

  	function appendTestResults() {
  		var tests = id("qunit-tests"),
  		    result = id("qunit-testresult"),
  		    controls;

  		if (result) {
  			result.parentNode.removeChild(result);
  		}

  		if (tests) {
  			tests.innerHTML = "";
  			result = document.createElement("p");
  			result.id = "qunit-testresult";
  			result.className = "result";
  			tests.parentNode.insertBefore(result, tests);
  			result.innerHTML = "<div id=\"qunit-testresult-display\">Running...<br />&#160;</div>" + "<div id=\"qunit-testresult-controls\"></div>" + "<div class=\"clearfix\"></div>";
  			controls = id("qunit-testresult-controls");
  		}

  		if (controls) {
  			controls.appendChild(abortTestsButton());
  		}
  	}

  	function appendFilteredTest() {
  		var testId = QUnit.config.testId;
  		if (!testId || testId.length <= 0) {
  			return "";
  		}
  		return "<div id='qunit-filteredTest'>Rerunning selected tests: " + escapeText(testId.join(", ")) + " <a id='qunit-clearFilter' href='" + escapeText(unfilteredUrl) + "'>Run all tests</a></div>";
  	}

  	function appendUserAgent() {
  		var userAgent = id("qunit-userAgent");

  		if (userAgent) {
  			userAgent.innerHTML = "";
  			userAgent.appendChild(document.createTextNode("QUnit " + QUnit.version + "; " + navigator.userAgent));
  		}
  	}

  	function appendInterface() {
  		var qunit = id("qunit");

  		if (qunit) {
  			qunit.innerHTML = "<h1 id='qunit-header'>" + escapeText(document.title) + "</h1>" + "<h2 id='qunit-banner'></h2>" + "<div id='qunit-testrunner-toolbar'></div>" + appendFilteredTest() + "<h2 id='qunit-userAgent'></h2>" + "<ol id='qunit-tests'></ol>";
  		}

  		appendHeader();
  		appendBanner();
  		appendTestResults();
  		appendUserAgent();
  		appendToolbar();
  	}

  	function appendTest(name, testId, moduleName) {
  		var title,
  		    rerunTrigger,
  		    testBlock,
  		    assertList,
  		    tests = id("qunit-tests");

  		if (!tests) {
  			return;
  		}

  		title = document.createElement("strong");
  		title.innerHTML = getNameHtml(name, moduleName);

  		rerunTrigger = document.createElement("a");
  		rerunTrigger.innerHTML = "Rerun";
  		rerunTrigger.href = setUrl({ testId: testId });

  		testBlock = document.createElement("li");
  		testBlock.appendChild(title);
  		testBlock.appendChild(rerunTrigger);
  		testBlock.id = "qunit-test-output-" + testId;

  		assertList = document.createElement("ol");
  		assertList.className = "qunit-assert-list";

  		testBlock.appendChild(assertList);

  		tests.appendChild(testBlock);
  	}

  	// HTML Reporter initialization and load
  	QUnit.begin(function (details) {
  		var i, moduleObj;

  		// Sort modules by name for the picker
  		for (i = 0; i < details.modules.length; i++) {
  			moduleObj = details.modules[i];
  			if (moduleObj.name) {
  				modulesList.push(moduleObj.name);
  			}
  		}
  		modulesList.sort(function (a, b) {
  			return a.localeCompare(b);
  		});

  		// Initialize QUnit elements
  		appendInterface();
  	});

  	QUnit.done(function (details) {
  		var banner = id("qunit-banner"),
  		    tests = id("qunit-tests"),
  		    abortButton = id("qunit-abort-tests-button"),
  		    totalTests = stats.passedTests + stats.skippedTests + stats.todoTests + stats.failedTests,
  		    html = [totalTests, " tests completed in ", details.runtime, " milliseconds, with ", stats.failedTests, " failed, ", stats.skippedTests, " skipped, and ", stats.todoTests, " todo.<br />", "<span class='passed'>", details.passed, "</span> assertions of <span class='total'>", details.total, "</span> passed, <span class='failed'>", details.failed, "</span> failed."].join(""),
  		    test$$1,
  		    assertLi,
  		    assertList;

  		// Update remaining tests to aborted
  		if (abortButton && abortButton.disabled) {
  			html = "Tests aborted after " + details.runtime + " milliseconds.";

  			for (var i = 0; i < tests.children.length; i++) {
  				test$$1 = tests.children[i];
  				if (test$$1.className === "" || test$$1.className === "running") {
  					test$$1.className = "aborted";
  					assertList = test$$1.getElementsByTagName("ol")[0];
  					assertLi = document.createElement("li");
  					assertLi.className = "fail";
  					assertLi.innerHTML = "Test aborted.";
  					assertList.appendChild(assertLi);
  				}
  			}
  		}

  		if (banner && (!abortButton || abortButton.disabled === false)) {
  			banner.className = stats.failedTests ? "qunit-fail" : "qunit-pass";
  		}

  		if (abortButton) {
  			abortButton.parentNode.removeChild(abortButton);
  		}

  		if (tests) {
  			id("qunit-testresult-display").innerHTML = html;
  		}

  		if (config.altertitle && document.title) {

  			// Show ✖ for good, ✔ for bad suite result in title
  			// use escape sequences in case file gets loaded with non-utf-8
  			// charset
  			document.title = [stats.failedTests ? "\u2716" : "\u2714", document.title.replace(/^[\u2714\u2716] /i, "")].join(" ");
  		}

  		// Scroll back to top to show results
  		if (config.scrolltop && window$1.scrollTo) {
  			window$1.scrollTo(0, 0);
  		}
  	});

  	function getNameHtml(name, module) {
  		var nameHtml = "";

  		if (module) {
  			nameHtml = "<span class='module-name'>" + escapeText(module) + "</span>: ";
  		}

  		nameHtml += "<span class='test-name'>" + escapeText(name) + "</span>";

  		return nameHtml;
  	}

  	function getProgressHtml(runtime, stats, total) {
  		var completed = stats.passedTests + stats.skippedTests + stats.todoTests + stats.failedTests;

  		return ["<br />", completed, " / ", total, " tests completed in ", runtime, " milliseconds, with ", stats.failedTests, " failed, ", stats.skippedTests, " skipped, and ", stats.todoTests, " todo."].join("");
  	}

  	QUnit.testStart(function (details) {
  		var running, bad;

  		appendTest(details.name, details.testId, details.module);

  		running = id("qunit-testresult-display");

  		if (running) {
  			addClass(running, "running");

  			bad = QUnit.config.reorder && details.previousFailure;

  			running.innerHTML = [bad ? "Rerunning previously failed test: <br />" : "Running: <br />", getNameHtml(details.name, details.module), getProgressHtml(now() - config.started, stats, Test.count)].join("");
  		}
  	});

  	function stripHtml(string) {

  		// Strip tags, html entity and whitespaces
  		return string.replace(/<\/?[^>]+(>|$)/g, "").replace(/&quot;/g, "").replace(/\s+/g, "");
  	}

  	QUnit.log(function (details) {
  		var assertList,
  		    assertLi,
  		    message,
  		    expected,
  		    actual,
  		    diff$$1,
  		    showDiff = false,
  		    testItem = id("qunit-test-output-" + details.testId);

  		if (!testItem) {
  			return;
  		}

  		message = escapeText(details.message) || (details.result ? "okay" : "failed");
  		message = "<span class='test-message'>" + message + "</span>";
  		message += "<span class='runtime'>@ " + details.runtime + " ms</span>";

  		// The pushFailure doesn't provide details.expected
  		// when it calls, it's implicit to also not show expected and diff stuff
  		// Also, we need to check details.expected existence, as it can exist and be undefined
  		if (!details.result && hasOwn$$1.call(details, "expected")) {
  			if (details.negative) {
  				expected = "NOT " + QUnit.dump.parse(details.expected);
  			} else {
  				expected = QUnit.dump.parse(details.expected);
  			}

  			actual = QUnit.dump.parse(details.actual);
  			message += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" + escapeText(expected) + "</pre></td></tr>";

  			if (actual !== expected) {

  				message += "<tr class='test-actual'><th>Result: </th><td><pre>" + escapeText(actual) + "</pre></td></tr>";

  				if (typeof details.actual === "number" && typeof details.expected === "number") {
  					if (!isNaN(details.actual) && !isNaN(details.expected)) {
  						showDiff = true;
  						diff$$1 = details.actual - details.expected;
  						diff$$1 = (diff$$1 > 0 ? "+" : "") + diff$$1;
  					}
  				} else if (typeof details.actual !== "boolean" && typeof details.expected !== "boolean") {
  					diff$$1 = QUnit.diff(expected, actual);

  					// don't show diff if there is zero overlap
  					showDiff = stripHtml(diff$$1).length !== stripHtml(expected).length + stripHtml(actual).length;
  				}

  				if (showDiff) {
  					message += "<tr class='test-diff'><th>Diff: </th><td><pre>" + diff$$1 + "</pre></td></tr>";
  				}
  			} else if (expected.indexOf("[object Array]") !== -1 || expected.indexOf("[object Object]") !== -1) {
  				message += "<tr class='test-message'><th>Message: </th><td>" + "Diff suppressed as the depth of object is more than current max depth (" + QUnit.config.maxDepth + ").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to " + " run with a higher max depth or <a href='" + escapeText(setUrl({ maxDepth: -1 })) + "'>" + "Rerun</a> without max depth.</p></td></tr>";
  			} else {
  				message += "<tr class='test-message'><th>Message: </th><td>" + "Diff suppressed as the expected and actual results have an equivalent" + " serialization</td></tr>";
  			}

  			if (details.source) {
  				message += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>";
  			}

  			message += "</table>";

  			// This occurs when pushFailure is set and we have an extracted stack trace
  		} else if (!details.result && details.source) {
  			message += "<table>" + "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>" + "</table>";
  		}

  		assertList = testItem.getElementsByTagName("ol")[0];

  		assertLi = document.createElement("li");
  		assertLi.className = details.result ? "pass" : "fail";
  		assertLi.innerHTML = message;
  		assertList.appendChild(assertLi);
  	});

  	QUnit.testDone(function (details) {
  		var testTitle,
  		    time,
  		    testItem,
  		    assertList,
  		    status,
  		    good,
  		    bad,
  		    testCounts,
  		    skipped,
  		    sourceName,
  		    tests = id("qunit-tests");

  		if (!tests) {
  			return;
  		}

  		testItem = id("qunit-test-output-" + details.testId);

  		removeClass(testItem, "running");

  		if (details.failed > 0) {
  			status = "failed";
  		} else if (details.todo) {
  			status = "todo";
  		} else {
  			status = details.skipped ? "skipped" : "passed";
  		}

  		assertList = testItem.getElementsByTagName("ol")[0];

  		good = details.passed;
  		bad = details.failed;

  		// This test passed if it has no unexpected failed assertions
  		var testPassed = details.failed > 0 ? details.todo : !details.todo;

  		if (testPassed) {

  			// Collapse the passing tests
  			addClass(assertList, "qunit-collapsed");
  		} else if (config.collapse) {
  			if (!collapseNext) {

  				// Skip collapsing the first failing test
  				collapseNext = true;
  			} else {

  				// Collapse remaining tests
  				addClass(assertList, "qunit-collapsed");
  			}
  		}

  		// The testItem.firstChild is the test name
  		testTitle = testItem.firstChild;

  		testCounts = bad ? "<b class='failed'>" + bad + "</b>, " + "<b class='passed'>" + good + "</b>, " : "";

  		testTitle.innerHTML += " <b class='counts'>(" + testCounts + details.assertions.length + ")</b>";

  		if (details.skipped) {
  			stats.skippedTests++;

  			testItem.className = "skipped";
  			skipped = document.createElement("em");
  			skipped.className = "qunit-skipped-label";
  			skipped.innerHTML = "skipped";
  			testItem.insertBefore(skipped, testTitle);
  		} else {
  			addEvent(testTitle, "click", function () {
  				toggleClass(assertList, "qunit-collapsed");
  			});

  			testItem.className = testPassed ? "pass" : "fail";

  			if (details.todo) {
  				var todoLabel = document.createElement("em");
  				todoLabel.className = "qunit-todo-label";
  				todoLabel.innerHTML = "todo";
  				testItem.className += " todo";
  				testItem.insertBefore(todoLabel, testTitle);
  			}

  			time = document.createElement("span");
  			time.className = "runtime";
  			time.innerHTML = details.runtime + " ms";
  			testItem.insertBefore(time, assertList);

  			if (!testPassed) {
  				stats.failedTests++;
  			} else if (details.todo) {
  				stats.todoTests++;
  			} else {
  				stats.passedTests++;
  			}
  		}

  		// Show the source of the test when showing assertions
  		if (details.source) {
  			sourceName = document.createElement("p");
  			sourceName.innerHTML = "<strong>Source: </strong>" + escapeText(details.source);
  			addClass(sourceName, "qunit-source");
  			if (testPassed) {
  				addClass(sourceName, "qunit-collapsed");
  			}
  			addEvent(testTitle, "click", function () {
  				toggleClass(sourceName, "qunit-collapsed");
  			});
  			testItem.appendChild(sourceName);
  		}

  		if (config.hidepassed && status === "passed") {

  			// use removeChild instead of remove because of support
  			hiddenTests.push(testItem);

  			tests.removeChild(testItem);
  		}
  	});

  	// Avoid readyState issue with phantomjs
  	// Ref: #818
  	var notPhantom = function (p) {
  		return !(p && p.version && p.version.major > 0);
  	}(window$1.phantom);

  	if (notPhantom && document.readyState === "complete") {
  		QUnit.load();
  	} else {
  		addEvent(window$1, "load", QUnit.load);
  	}

  	// Wrap window.onerror. We will call the original window.onerror to see if
  	// the existing handler fully handles the error; if not, we will call the
  	// QUnit.onError function.
  	var originalWindowOnError = window$1.onerror;

  	// Cover uncaught exceptions
  	// Returning true will suppress the default browser handler,
  	// returning false will let it run.
  	window$1.onerror = function (message, fileName, lineNumber, columnNumber, errorObj) {
  		var ret = false;
  		if (originalWindowOnError) {
  			for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
  				args[_key - 5] = arguments[_key];
  			}

  			ret = originalWindowOnError.call.apply(originalWindowOnError, [this, message, fileName, lineNumber, columnNumber, errorObj].concat(args));
  		}

  		// Treat return value as window.onerror itself does,
  		// Only do our handling if not suppressed.
  		if (ret !== true) {
  			var error = {
  				message: message,
  				fileName: fileName,
  				lineNumber: lineNumber
  			};

  			// According to
  			// https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror,
  			// most modern browsers support an errorObj argument; use that to
  			// get a full stack trace if it's available.
  			if (errorObj && errorObj.stack) {
  				error.stacktrace = extractStacktrace(errorObj, 0);
  			}

  			ret = QUnit.onError(error);
  		}

  		return ret;
  	};

  	// Listen for unhandled rejections, and call QUnit.onUnhandledRejection
  	window$1.addEventListener("unhandledrejection", function (event) {
  		QUnit.onUnhandledRejection(event.reason);
  	});
  })();

  /*
   * This file is a modified version of google-diff-match-patch's JavaScript implementation
   * (https://code.google.com/p/google-diff-match-patch/source/browse/trunk/javascript/diff_match_patch_uncompressed.js),
   * modifications are licensed as more fully set forth in LICENSE.txt.
   *
   * The original source of google-diff-match-patch is attributable and licensed as follows:
   *
   * Copyright 2006 Google Inc.
   * https://code.google.com/p/google-diff-match-patch/
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * More Info:
   *  https://code.google.com/p/google-diff-match-patch/
   *
   * Usage: QUnit.diff(expected, actual)
   *
   */
  QUnit.diff = function () {
  	function DiffMatchPatch() {}

  	//  DIFF FUNCTIONS

  	/**
    * The data structure representing a diff is an array of tuples:
    * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
    * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
    */
  	var DIFF_DELETE = -1,
  	    DIFF_INSERT = 1,
  	    DIFF_EQUAL = 0;

  	/**
    * Find the differences between two texts.  Simplifies the problem by stripping
    * any common prefix or suffix off the texts before diffing.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {boolean=} optChecklines Optional speedup flag. If present and false,
    *     then don't run a line-level diff first to identify the changed areas.
    *     Defaults to true, which does a faster, slightly less optimal diff.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    */
  	DiffMatchPatch.prototype.DiffMain = function (text1, text2, optChecklines) {
  		var deadline, checklines, commonlength, commonprefix, commonsuffix, diffs;

  		// The diff must be complete in up to 1 second.
  		deadline = new Date().getTime() + 1000;

  		// Check for null inputs.
  		if (text1 === null || text2 === null) {
  			throw new Error("Null input. (DiffMain)");
  		}

  		// Check for equality (speedup).
  		if (text1 === text2) {
  			if (text1) {
  				return [[DIFF_EQUAL, text1]];
  			}
  			return [];
  		}

  		if (typeof optChecklines === "undefined") {
  			optChecklines = true;
  		}

  		checklines = optChecklines;

  		// Trim off common prefix (speedup).
  		commonlength = this.diffCommonPrefix(text1, text2);
  		commonprefix = text1.substring(0, commonlength);
  		text1 = text1.substring(commonlength);
  		text2 = text2.substring(commonlength);

  		// Trim off common suffix (speedup).
  		commonlength = this.diffCommonSuffix(text1, text2);
  		commonsuffix = text1.substring(text1.length - commonlength);
  		text1 = text1.substring(0, text1.length - commonlength);
  		text2 = text2.substring(0, text2.length - commonlength);

  		// Compute the diff on the middle block.
  		diffs = this.diffCompute(text1, text2, checklines, deadline);

  		// Restore the prefix and suffix.
  		if (commonprefix) {
  			diffs.unshift([DIFF_EQUAL, commonprefix]);
  		}
  		if (commonsuffix) {
  			diffs.push([DIFF_EQUAL, commonsuffix]);
  		}
  		this.diffCleanupMerge(diffs);
  		return diffs;
  	};

  	/**
    * Reduce the number of edits by eliminating operationally trivial equalities.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    */
  	DiffMatchPatch.prototype.diffCleanupEfficiency = function (diffs) {
  		var changes, equalities, equalitiesLength, lastequality, pointer, preIns, preDel, postIns, postDel;
  		changes = false;
  		equalities = []; // Stack of indices where equalities are found.
  		equalitiesLength = 0; // Keeping our own length var is faster in JS.
  		/** @type {?string} */
  		lastequality = null;

  		// Always equal to diffs[equalities[equalitiesLength - 1]][1]
  		pointer = 0; // Index of current position.

  		// Is there an insertion operation before the last equality.
  		preIns = false;

  		// Is there a deletion operation before the last equality.
  		preDel = false;

  		// Is there an insertion operation after the last equality.
  		postIns = false;

  		// Is there a deletion operation after the last equality.
  		postDel = false;
  		while (pointer < diffs.length) {

  			// Equality found.
  			if (diffs[pointer][0] === DIFF_EQUAL) {
  				if (diffs[pointer][1].length < 4 && (postIns || postDel)) {

  					// Candidate found.
  					equalities[equalitiesLength++] = pointer;
  					preIns = postIns;
  					preDel = postDel;
  					lastequality = diffs[pointer][1];
  				} else {

  					// Not a candidate, and can never become one.
  					equalitiesLength = 0;
  					lastequality = null;
  				}
  				postIns = postDel = false;

  				// An insertion or deletion.
  			} else {

  				if (diffs[pointer][0] === DIFF_DELETE) {
  					postDel = true;
  				} else {
  					postIns = true;
  				}

  				/*
       * Five types to be split:
       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
       * <ins>A</ins>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<ins>C</ins>
       * <ins>A</del>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<del>C</del>
       */
  				if (lastequality && (preIns && preDel && postIns && postDel || lastequality.length < 2 && preIns + preDel + postIns + postDel === 3)) {

  					// Duplicate record.
  					diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);

  					// Change second copy to insert.
  					diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
  					equalitiesLength--; // Throw away the equality we just deleted;
  					lastequality = null;
  					if (preIns && preDel) {

  						// No changes made which could affect previous entry, keep going.
  						postIns = postDel = true;
  						equalitiesLength = 0;
  					} else {
  						equalitiesLength--; // Throw away the previous equality.
  						pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
  						postIns = postDel = false;
  					}
  					changes = true;
  				}
  			}
  			pointer++;
  		}

  		if (changes) {
  			this.diffCleanupMerge(diffs);
  		}
  	};

  	/**
    * Convert a diff array into a pretty HTML report.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    * @param {integer} string to be beautified.
    * @return {string} HTML representation.
    */
  	DiffMatchPatch.prototype.diffPrettyHtml = function (diffs) {
  		var op,
  		    data,
  		    x,
  		    html = [];
  		for (x = 0; x < diffs.length; x++) {
  			op = diffs[x][0]; // Operation (insert, delete, equal)
  			data = diffs[x][1]; // Text of change.
  			switch (op) {
  				case DIFF_INSERT:
  					html[x] = "<ins>" + escapeText(data) + "</ins>";
  					break;
  				case DIFF_DELETE:
  					html[x] = "<del>" + escapeText(data) + "</del>";
  					break;
  				case DIFF_EQUAL:
  					html[x] = "<span>" + escapeText(data) + "</span>";
  					break;
  			}
  		}
  		return html.join("");
  	};

  	/**
    * Determine the common prefix of two strings.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {number} The number of characters common to the start of each
    *     string.
    */
  	DiffMatchPatch.prototype.diffCommonPrefix = function (text1, text2) {
  		var pointermid, pointermax, pointermin, pointerstart;

  		// Quick check for common null cases.
  		if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
  			return 0;
  		}

  		// Binary search.
  		// Performance analysis: https://neil.fraser.name/news/2007/10/09/
  		pointermin = 0;
  		pointermax = Math.min(text1.length, text2.length);
  		pointermid = pointermax;
  		pointerstart = 0;
  		while (pointermin < pointermid) {
  			if (text1.substring(pointerstart, pointermid) === text2.substring(pointerstart, pointermid)) {
  				pointermin = pointermid;
  				pointerstart = pointermin;
  			} else {
  				pointermax = pointermid;
  			}
  			pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  		}
  		return pointermid;
  	};

  	/**
    * Determine the common suffix of two strings.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {number} The number of characters common to the end of each string.
    */
  	DiffMatchPatch.prototype.diffCommonSuffix = function (text1, text2) {
  		var pointermid, pointermax, pointermin, pointerend;

  		// Quick check for common null cases.
  		if (!text1 || !text2 || text1.charAt(text1.length - 1) !== text2.charAt(text2.length - 1)) {
  			return 0;
  		}

  		// Binary search.
  		// Performance analysis: https://neil.fraser.name/news/2007/10/09/
  		pointermin = 0;
  		pointermax = Math.min(text1.length, text2.length);
  		pointermid = pointermax;
  		pointerend = 0;
  		while (pointermin < pointermid) {
  			if (text1.substring(text1.length - pointermid, text1.length - pointerend) === text2.substring(text2.length - pointermid, text2.length - pointerend)) {
  				pointermin = pointermid;
  				pointerend = pointermin;
  			} else {
  				pointermax = pointermid;
  			}
  			pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  		}
  		return pointermid;
  	};

  	/**
    * Find the differences between two texts.  Assumes that the texts do not
    * have any common prefix or suffix.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {boolean} checklines Speedup flag.  If false, then don't run a
    *     line-level diff first to identify the changed areas.
    *     If true, then run a faster, slightly less optimal diff.
    * @param {number} deadline Time when the diff should be complete by.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    * @private
    */
  	DiffMatchPatch.prototype.diffCompute = function (text1, text2, checklines, deadline) {
  		var diffs, longtext, shorttext, i, hm, text1A, text2A, text1B, text2B, midCommon, diffsA, diffsB;

  		if (!text1) {

  			// Just add some text (speedup).
  			return [[DIFF_INSERT, text2]];
  		}

  		if (!text2) {

  			// Just delete some text (speedup).
  			return [[DIFF_DELETE, text1]];
  		}

  		longtext = text1.length > text2.length ? text1 : text2;
  		shorttext = text1.length > text2.length ? text2 : text1;
  		i = longtext.indexOf(shorttext);
  		if (i !== -1) {

  			// Shorter text is inside the longer text (speedup).
  			diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];

  			// Swap insertions for deletions if diff is reversed.
  			if (text1.length > text2.length) {
  				diffs[0][0] = diffs[2][0] = DIFF_DELETE;
  			}
  			return diffs;
  		}

  		if (shorttext.length === 1) {

  			// Single character string.
  			// After the previous speedup, the character can't be an equality.
  			return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  		}

  		// Check to see if the problem can be split in two.
  		hm = this.diffHalfMatch(text1, text2);
  		if (hm) {

  			// A half-match was found, sort out the return data.
  			text1A = hm[0];
  			text1B = hm[1];
  			text2A = hm[2];
  			text2B = hm[3];
  			midCommon = hm[4];

  			// Send both pairs off for separate processing.
  			diffsA = this.DiffMain(text1A, text2A, checklines, deadline);
  			diffsB = this.DiffMain(text1B, text2B, checklines, deadline);

  			// Merge the results.
  			return diffsA.concat([[DIFF_EQUAL, midCommon]], diffsB);
  		}

  		if (checklines && text1.length > 100 && text2.length > 100) {
  			return this.diffLineMode(text1, text2, deadline);
  		}

  		return this.diffBisect(text1, text2, deadline);
  	};

  	/**
    * Do the two texts share a substring which is at least half the length of the
    * longer text?
    * This speedup can produce non-minimal diffs.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {Array.<string>} Five element Array, containing the prefix of
    *     text1, the suffix of text1, the prefix of text2, the suffix of
    *     text2 and the common middle.  Or null if there was no match.
    * @private
    */
  	DiffMatchPatch.prototype.diffHalfMatch = function (text1, text2) {
  		var longtext, shorttext, dmp, text1A, text2B, text2A, text1B, midCommon, hm1, hm2, hm;

  		longtext = text1.length > text2.length ? text1 : text2;
  		shorttext = text1.length > text2.length ? text2 : text1;
  		if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
  			return null; // Pointless.
  		}
  		dmp = this; // 'this' becomes 'window' in a closure.

  		/**
     * Does a substring of shorttext exist within longtext such that the substring
     * is at least half the length of longtext?
     * Closure, but does not reference any external variables.
     * @param {string} longtext Longer string.
     * @param {string} shorttext Shorter string.
     * @param {number} i Start index of quarter length substring within longtext.
     * @return {Array.<string>} Five element Array, containing the prefix of
     *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
     *     of shorttext and the common middle.  Or null if there was no match.
     * @private
     */
  		function diffHalfMatchI(longtext, shorttext, i) {
  			var seed, j, bestCommon, prefixLength, suffixLength, bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB;

  			// Start with a 1/4 length substring at position i as a seed.
  			seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
  			j = -1;
  			bestCommon = "";
  			while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
  				prefixLength = dmp.diffCommonPrefix(longtext.substring(i), shorttext.substring(j));
  				suffixLength = dmp.diffCommonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
  				if (bestCommon.length < suffixLength + prefixLength) {
  					bestCommon = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
  					bestLongtextA = longtext.substring(0, i - suffixLength);
  					bestLongtextB = longtext.substring(i + prefixLength);
  					bestShorttextA = shorttext.substring(0, j - suffixLength);
  					bestShorttextB = shorttext.substring(j + prefixLength);
  				}
  			}
  			if (bestCommon.length * 2 >= longtext.length) {
  				return [bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB, bestCommon];
  			} else {
  				return null;
  			}
  		}

  		// First check if the second quarter is the seed for a half-match.
  		hm1 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 4));

  		// Check again based on the third quarter.
  		hm2 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 2));
  		if (!hm1 && !hm2) {
  			return null;
  		} else if (!hm2) {
  			hm = hm1;
  		} else if (!hm1) {
  			hm = hm2;
  		} else {

  			// Both matched.  Select the longest.
  			hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  		}

  		// A half-match was found, sort out the return data.
  		if (text1.length > text2.length) {
  			text1A = hm[0];
  			text1B = hm[1];
  			text2A = hm[2];
  			text2B = hm[3];
  		} else {
  			text2A = hm[0];
  			text2B = hm[1];
  			text1A = hm[2];
  			text1B = hm[3];
  		}
  		midCommon = hm[4];
  		return [text1A, text1B, text2A, text2B, midCommon];
  	};

  	/**
    * Do a quick line-level diff on both strings, then rediff the parts for
    * greater accuracy.
    * This speedup can produce non-minimal diffs.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {number} deadline Time when the diff should be complete by.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    * @private
    */
  	DiffMatchPatch.prototype.diffLineMode = function (text1, text2, deadline) {
  		var a, diffs, linearray, pointer, countInsert, countDelete, textInsert, textDelete, j;

  		// Scan the text on a line-by-line basis first.
  		a = this.diffLinesToChars(text1, text2);
  		text1 = a.chars1;
  		text2 = a.chars2;
  		linearray = a.lineArray;

  		diffs = this.DiffMain(text1, text2, false, deadline);

  		// Convert the diff back to original text.
  		this.diffCharsToLines(diffs, linearray);

  		// Eliminate freak matches (e.g. blank lines)
  		this.diffCleanupSemantic(diffs);

  		// Rediff any replacement blocks, this time character-by-character.
  		// Add a dummy entry at the end.
  		diffs.push([DIFF_EQUAL, ""]);
  		pointer = 0;
  		countDelete = 0;
  		countInsert = 0;
  		textDelete = "";
  		textInsert = "";
  		while (pointer < diffs.length) {
  			switch (diffs[pointer][0]) {
  				case DIFF_INSERT:
  					countInsert++;
  					textInsert += diffs[pointer][1];
  					break;
  				case DIFF_DELETE:
  					countDelete++;
  					textDelete += diffs[pointer][1];
  					break;
  				case DIFF_EQUAL:

  					// Upon reaching an equality, check for prior redundancies.
  					if (countDelete >= 1 && countInsert >= 1) {

  						// Delete the offending records and add the merged ones.
  						diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert);
  						pointer = pointer - countDelete - countInsert;
  						a = this.DiffMain(textDelete, textInsert, false, deadline);
  						for (j = a.length - 1; j >= 0; j--) {
  							diffs.splice(pointer, 0, a[j]);
  						}
  						pointer = pointer + a.length;
  					}
  					countInsert = 0;
  					countDelete = 0;
  					textDelete = "";
  					textInsert = "";
  					break;
  			}
  			pointer++;
  		}
  		diffs.pop(); // Remove the dummy entry at the end.

  		return diffs;
  	};

  	/**
    * Find the 'middle snake' of a diff, split the problem in two
    * and return the recursively constructed diff.
    * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {number} deadline Time at which to bail if not yet complete.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    * @private
    */
  	DiffMatchPatch.prototype.diffBisect = function (text1, text2, deadline) {
  		var text1Length, text2Length, maxD, vOffset, vLength, v1, v2, x, delta, front, k1start, k1end, k2start, k2end, k2Offset, k1Offset, x1, x2, y1, y2, d, k1, k2;

  		// Cache the text lengths to prevent multiple calls.
  		text1Length = text1.length;
  		text2Length = text2.length;
  		maxD = Math.ceil((text1Length + text2Length) / 2);
  		vOffset = maxD;
  		vLength = 2 * maxD;
  		v1 = new Array(vLength);
  		v2 = new Array(vLength);

  		// Setting all elements to -1 is faster in Chrome & Firefox than mixing
  		// integers and undefined.
  		for (x = 0; x < vLength; x++) {
  			v1[x] = -1;
  			v2[x] = -1;
  		}
  		v1[vOffset + 1] = 0;
  		v2[vOffset + 1] = 0;
  		delta = text1Length - text2Length;

  		// If the total number of characters is odd, then the front path will collide
  		// with the reverse path.
  		front = delta % 2 !== 0;

  		// Offsets for start and end of k loop.
  		// Prevents mapping of space beyond the grid.
  		k1start = 0;
  		k1end = 0;
  		k2start = 0;
  		k2end = 0;
  		for (d = 0; d < maxD; d++) {

  			// Bail out if deadline is reached.
  			if (new Date().getTime() > deadline) {
  				break;
  			}

  			// Walk the front path one step.
  			for (k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
  				k1Offset = vOffset + k1;
  				if (k1 === -d || k1 !== d && v1[k1Offset - 1] < v1[k1Offset + 1]) {
  					x1 = v1[k1Offset + 1];
  				} else {
  					x1 = v1[k1Offset - 1] + 1;
  				}
  				y1 = x1 - k1;
  				while (x1 < text1Length && y1 < text2Length && text1.charAt(x1) === text2.charAt(y1)) {
  					x1++;
  					y1++;
  				}
  				v1[k1Offset] = x1;
  				if (x1 > text1Length) {

  					// Ran off the right of the graph.
  					k1end += 2;
  				} else if (y1 > text2Length) {

  					// Ran off the bottom of the graph.
  					k1start += 2;
  				} else if (front) {
  					k2Offset = vOffset + delta - k1;
  					if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {

  						// Mirror x2 onto top-left coordinate system.
  						x2 = text1Length - v2[k2Offset];
  						if (x1 >= x2) {

  							// Overlap detected.
  							return this.diffBisectSplit(text1, text2, x1, y1, deadline);
  						}
  					}
  				}
  			}

  			// Walk the reverse path one step.
  			for (k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
  				k2Offset = vOffset + k2;
  				if (k2 === -d || k2 !== d && v2[k2Offset - 1] < v2[k2Offset + 1]) {
  					x2 = v2[k2Offset + 1];
  				} else {
  					x2 = v2[k2Offset - 1] + 1;
  				}
  				y2 = x2 - k2;
  				while (x2 < text1Length && y2 < text2Length && text1.charAt(text1Length - x2 - 1) === text2.charAt(text2Length - y2 - 1)) {
  					x2++;
  					y2++;
  				}
  				v2[k2Offset] = x2;
  				if (x2 > text1Length) {

  					// Ran off the left of the graph.
  					k2end += 2;
  				} else if (y2 > text2Length) {

  					// Ran off the top of the graph.
  					k2start += 2;
  				} else if (!front) {
  					k1Offset = vOffset + delta - k2;
  					if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
  						x1 = v1[k1Offset];
  						y1 = vOffset + x1 - k1Offset;

  						// Mirror x2 onto top-left coordinate system.
  						x2 = text1Length - x2;
  						if (x1 >= x2) {

  							// Overlap detected.
  							return this.diffBisectSplit(text1, text2, x1, y1, deadline);
  						}
  					}
  				}
  			}
  		}

  		// Diff took too long and hit the deadline or
  		// number of diffs equals number of characters, no commonality at all.
  		return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  	};

  	/**
    * Given the location of the 'middle snake', split the diff in two parts
    * and recurse.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {number} x Index of split point in text1.
    * @param {number} y Index of split point in text2.
    * @param {number} deadline Time at which to bail if not yet complete.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    * @private
    */
  	DiffMatchPatch.prototype.diffBisectSplit = function (text1, text2, x, y, deadline) {
  		var text1a, text1b, text2a, text2b, diffs, diffsb;
  		text1a = text1.substring(0, x);
  		text2a = text2.substring(0, y);
  		text1b = text1.substring(x);
  		text2b = text2.substring(y);

  		// Compute both diffs serially.
  		diffs = this.DiffMain(text1a, text2a, false, deadline);
  		diffsb = this.DiffMain(text1b, text2b, false, deadline);

  		return diffs.concat(diffsb);
  	};

  	/**
    * Reduce the number of edits by eliminating semantically trivial equalities.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    */
  	DiffMatchPatch.prototype.diffCleanupSemantic = function (diffs) {
  		var changes, equalities, equalitiesLength, lastequality, pointer, lengthInsertions2, lengthDeletions2, lengthInsertions1, lengthDeletions1, deletion, insertion, overlapLength1, overlapLength2;
  		changes = false;
  		equalities = []; // Stack of indices where equalities are found.
  		equalitiesLength = 0; // Keeping our own length var is faster in JS.
  		/** @type {?string} */
  		lastequality = null;

  		// Always equal to diffs[equalities[equalitiesLength - 1]][1]
  		pointer = 0; // Index of current position.

  		// Number of characters that changed prior to the equality.
  		lengthInsertions1 = 0;
  		lengthDeletions1 = 0;

  		// Number of characters that changed after the equality.
  		lengthInsertions2 = 0;
  		lengthDeletions2 = 0;
  		while (pointer < diffs.length) {
  			if (diffs[pointer][0] === DIFF_EQUAL) {
  				// Equality found.
  				equalities[equalitiesLength++] = pointer;
  				lengthInsertions1 = lengthInsertions2;
  				lengthDeletions1 = lengthDeletions2;
  				lengthInsertions2 = 0;
  				lengthDeletions2 = 0;
  				lastequality = diffs[pointer][1];
  			} else {
  				// An insertion or deletion.
  				if (diffs[pointer][0] === DIFF_INSERT) {
  					lengthInsertions2 += diffs[pointer][1].length;
  				} else {
  					lengthDeletions2 += diffs[pointer][1].length;
  				}

  				// Eliminate an equality that is smaller or equal to the edits on both
  				// sides of it.
  				if (lastequality && lastequality.length <= Math.max(lengthInsertions1, lengthDeletions1) && lastequality.length <= Math.max(lengthInsertions2, lengthDeletions2)) {

  					// Duplicate record.
  					diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);

  					// Change second copy to insert.
  					diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;

  					// Throw away the equality we just deleted.
  					equalitiesLength--;

  					// Throw away the previous equality (it needs to be reevaluated).
  					equalitiesLength--;
  					pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;

  					// Reset the counters.
  					lengthInsertions1 = 0;
  					lengthDeletions1 = 0;
  					lengthInsertions2 = 0;
  					lengthDeletions2 = 0;
  					lastequality = null;
  					changes = true;
  				}
  			}
  			pointer++;
  		}

  		// Normalize the diff.
  		if (changes) {
  			this.diffCleanupMerge(diffs);
  		}

  		// Find any overlaps between deletions and insertions.
  		// e.g: <del>abcxxx</del><ins>xxxdef</ins>
  		//   -> <del>abc</del>xxx<ins>def</ins>
  		// e.g: <del>xxxabc</del><ins>defxxx</ins>
  		//   -> <ins>def</ins>xxx<del>abc</del>
  		// Only extract an overlap if it is as big as the edit ahead or behind it.
  		pointer = 1;
  		while (pointer < diffs.length) {
  			if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
  				deletion = diffs[pointer - 1][1];
  				insertion = diffs[pointer][1];
  				overlapLength1 = this.diffCommonOverlap(deletion, insertion);
  				overlapLength2 = this.diffCommonOverlap(insertion, deletion);
  				if (overlapLength1 >= overlapLength2) {
  					if (overlapLength1 >= deletion.length / 2 || overlapLength1 >= insertion.length / 2) {

  						// Overlap found.  Insert an equality and trim the surrounding edits.
  						diffs.splice(pointer, 0, [DIFF_EQUAL, insertion.substring(0, overlapLength1)]);
  						diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlapLength1);
  						diffs[pointer + 1][1] = insertion.substring(overlapLength1);
  						pointer++;
  					}
  				} else {
  					if (overlapLength2 >= deletion.length / 2 || overlapLength2 >= insertion.length / 2) {

  						// Reverse overlap found.
  						// Insert an equality and swap and trim the surrounding edits.
  						diffs.splice(pointer, 0, [DIFF_EQUAL, deletion.substring(0, overlapLength2)]);

  						diffs[pointer - 1][0] = DIFF_INSERT;
  						diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlapLength2);
  						diffs[pointer + 1][0] = DIFF_DELETE;
  						diffs[pointer + 1][1] = deletion.substring(overlapLength2);
  						pointer++;
  					}
  				}
  				pointer++;
  			}
  			pointer++;
  		}
  	};

  	/**
    * Determine if the suffix of one string is the prefix of another.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {number} The number of characters common to the end of the first
    *     string and the start of the second string.
    * @private
    */
  	DiffMatchPatch.prototype.diffCommonOverlap = function (text1, text2) {
  		var text1Length, text2Length, textLength, best, length, pattern, found;

  		// Cache the text lengths to prevent multiple calls.
  		text1Length = text1.length;
  		text2Length = text2.length;

  		// Eliminate the null case.
  		if (text1Length === 0 || text2Length === 0) {
  			return 0;
  		}

  		// Truncate the longer string.
  		if (text1Length > text2Length) {
  			text1 = text1.substring(text1Length - text2Length);
  		} else if (text1Length < text2Length) {
  			text2 = text2.substring(0, text1Length);
  		}
  		textLength = Math.min(text1Length, text2Length);

  		// Quick check for the worst case.
  		if (text1 === text2) {
  			return textLength;
  		}

  		// Start by looking for a single character match
  		// and increase length until no match is found.
  		// Performance analysis: https://neil.fraser.name/news/2010/11/04/
  		best = 0;
  		length = 1;
  		while (true) {
  			pattern = text1.substring(textLength - length);
  			found = text2.indexOf(pattern);
  			if (found === -1) {
  				return best;
  			}
  			length += found;
  			if (found === 0 || text1.substring(textLength - length) === text2.substring(0, length)) {
  				best = length;
  				length++;
  			}
  		}
  	};

  	/**
    * Split two texts into an array of strings.  Reduce the texts to a string of
    * hashes where each Unicode character represents one line.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
    *     An object containing the encoded text1, the encoded text2 and
    *     the array of unique strings.
    *     The zeroth element of the array of unique strings is intentionally blank.
    * @private
    */
  	DiffMatchPatch.prototype.diffLinesToChars = function (text1, text2) {
  		var lineArray, lineHash, chars1, chars2;
  		lineArray = []; // E.g. lineArray[4] === 'Hello\n'
  		lineHash = {}; // E.g. lineHash['Hello\n'] === 4

  		// '\x00' is a valid character, but various debuggers don't like it.
  		// So we'll insert a junk entry to avoid generating a null character.
  		lineArray[0] = "";

  		/**
     * Split a text into an array of strings.  Reduce the texts to a string of
     * hashes where each Unicode character represents one line.
     * Modifies linearray and linehash through being a closure.
     * @param {string} text String to encode.
     * @return {string} Encoded string.
     * @private
     */
  		function diffLinesToCharsMunge(text) {
  			var chars, lineStart, lineEnd, lineArrayLength, line;
  			chars = "";

  			// Walk the text, pulling out a substring for each line.
  			// text.split('\n') would would temporarily double our memory footprint.
  			// Modifying text would create many large strings to garbage collect.
  			lineStart = 0;
  			lineEnd = -1;

  			// Keeping our own length variable is faster than looking it up.
  			lineArrayLength = lineArray.length;
  			while (lineEnd < text.length - 1) {
  				lineEnd = text.indexOf("\n", lineStart);
  				if (lineEnd === -1) {
  					lineEnd = text.length - 1;
  				}
  				line = text.substring(lineStart, lineEnd + 1);
  				lineStart = lineEnd + 1;

  				var lineHashExists = lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== undefined;

  				if (lineHashExists) {
  					chars += String.fromCharCode(lineHash[line]);
  				} else {
  					chars += String.fromCharCode(lineArrayLength);
  					lineHash[line] = lineArrayLength;
  					lineArray[lineArrayLength++] = line;
  				}
  			}
  			return chars;
  		}

  		chars1 = diffLinesToCharsMunge(text1);
  		chars2 = diffLinesToCharsMunge(text2);
  		return {
  			chars1: chars1,
  			chars2: chars2,
  			lineArray: lineArray
  		};
  	};

  	/**
    * Rehydrate the text in a diff from a string of line hashes to real lines of
    * text.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    * @param {!Array.<string>} lineArray Array of unique strings.
    * @private
    */
  	DiffMatchPatch.prototype.diffCharsToLines = function (diffs, lineArray) {
  		var x, chars, text, y;
  		for (x = 0; x < diffs.length; x++) {
  			chars = diffs[x][1];
  			text = [];
  			for (y = 0; y < chars.length; y++) {
  				text[y] = lineArray[chars.charCodeAt(y)];
  			}
  			diffs[x][1] = text.join("");
  		}
  	};

  	/**
    * Reorder and merge like edit sections.  Merge equalities.
    * Any edit section can move as long as it doesn't cross an equality.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    */
  	DiffMatchPatch.prototype.diffCleanupMerge = function (diffs) {
  		var pointer, countDelete, countInsert, textInsert, textDelete, commonlength, changes, diffPointer, position;
  		diffs.push([DIFF_EQUAL, ""]); // Add a dummy entry at the end.
  		pointer = 0;
  		countDelete = 0;
  		countInsert = 0;
  		textDelete = "";
  		textInsert = "";

  		while (pointer < diffs.length) {
  			switch (diffs[pointer][0]) {
  				case DIFF_INSERT:
  					countInsert++;
  					textInsert += diffs[pointer][1];
  					pointer++;
  					break;
  				case DIFF_DELETE:
  					countDelete++;
  					textDelete += diffs[pointer][1];
  					pointer++;
  					break;
  				case DIFF_EQUAL:

  					// Upon reaching an equality, check for prior redundancies.
  					if (countDelete + countInsert > 1) {
  						if (countDelete !== 0 && countInsert !== 0) {

  							// Factor out any common prefixes.
  							commonlength = this.diffCommonPrefix(textInsert, textDelete);
  							if (commonlength !== 0) {
  								if (pointer - countDelete - countInsert > 0 && diffs[pointer - countDelete - countInsert - 1][0] === DIFF_EQUAL) {
  									diffs[pointer - countDelete - countInsert - 1][1] += textInsert.substring(0, commonlength);
  								} else {
  									diffs.splice(0, 0, [DIFF_EQUAL, textInsert.substring(0, commonlength)]);
  									pointer++;
  								}
  								textInsert = textInsert.substring(commonlength);
  								textDelete = textDelete.substring(commonlength);
  							}

  							// Factor out any common suffixies.
  							commonlength = this.diffCommonSuffix(textInsert, textDelete);
  							if (commonlength !== 0) {
  								diffs[pointer][1] = textInsert.substring(textInsert.length - commonlength) + diffs[pointer][1];
  								textInsert = textInsert.substring(0, textInsert.length - commonlength);
  								textDelete = textDelete.substring(0, textDelete.length - commonlength);
  							}
  						}

  						// Delete the offending records and add the merged ones.
  						if (countDelete === 0) {
  							diffs.splice(pointer - countInsert, countDelete + countInsert, [DIFF_INSERT, textInsert]);
  						} else if (countInsert === 0) {
  							diffs.splice(pointer - countDelete, countDelete + countInsert, [DIFF_DELETE, textDelete]);
  						} else {
  							diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert, [DIFF_DELETE, textDelete], [DIFF_INSERT, textInsert]);
  						}
  						pointer = pointer - countDelete - countInsert + (countDelete ? 1 : 0) + (countInsert ? 1 : 0) + 1;
  					} else if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {

  						// Merge this equality with the previous one.
  						diffs[pointer - 1][1] += diffs[pointer][1];
  						diffs.splice(pointer, 1);
  					} else {
  						pointer++;
  					}
  					countInsert = 0;
  					countDelete = 0;
  					textDelete = "";
  					textInsert = "";
  					break;
  			}
  		}
  		if (diffs[diffs.length - 1][1] === "") {
  			diffs.pop(); // Remove the dummy entry at the end.
  		}

  		// Second pass: look for single edits surrounded on both sides by equalities
  		// which can be shifted sideways to eliminate an equality.
  		// e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  		changes = false;
  		pointer = 1;

  		// Intentionally ignore the first and last element (don't need checking).
  		while (pointer < diffs.length - 1) {
  			if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {

  				diffPointer = diffs[pointer][1];
  				position = diffPointer.substring(diffPointer.length - diffs[pointer - 1][1].length);

  				// This is a single edit surrounded by equalities.
  				if (position === diffs[pointer - 1][1]) {

  					// Shift the edit over the previous equality.
  					diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
  					diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
  					diffs.splice(pointer - 1, 1);
  					changes = true;
  				} else if (diffPointer.substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1]) {

  					// Shift the edit over the next equality.
  					diffs[pointer - 1][1] += diffs[pointer + 1][1];
  					diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
  					diffs.splice(pointer + 1, 1);
  					changes = true;
  				}
  			}
  			pointer++;
  		}

  		// If shifts were made, the diff needs reordering and another shift sweep.
  		if (changes) {
  			this.diffCleanupMerge(diffs);
  		}
  	};

  	return function (o, n) {
  		var diff, output, text;
  		diff = new DiffMatchPatch();
  		output = diff.DiffMain(o, n);
  		diff.diffCleanupEfficiency(output);
  		text = diff.diffPrettyHtml(output);

  		return text;
  	};
  }();

}((function() { return this; }())));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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


/***/ }),

/***/ "./tests/combinators-test.ts":
/*!***********************************!*\
  !*** ./tests/combinators-test.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
const qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
const helpers_1 = __webpack_require__(/*! ./helpers */ "./tests/helpers.ts");
const LOGGER = new hbs_parser_next_1.Logger(qunit_1.config.logging || false);
qunit_1.module("[combinators] tag");
qunit_1.test("match: one character tag", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, fragment] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.tag("h")));
    helpers_1.eqSnippet(next, input.slice(1).rest);
    helpers_1.eqSnippet(fragment, input.slice(1));
});
qunit_1.test("match: multi-character tag", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, fragment] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.tag("hello")));
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippet(fragment, input.slice(5));
});
qunit_1.test("mismatch: multi-character tag", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let next = input.invoke(hbs_parser_next_1.combinators.tag("holla"));
    helpers_1.eqError(next, hbs_parser_next_1.err(input, "tag"));
});
qunit_1.test("mismatch: not at 0 offset", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.tag("hello ")));
    let mismatch = next.invoke(hbs_parser_next_1.combinators.tag("woold"), next);
    helpers_1.eqError(mismatch, hbs_parser_next_1.err(next, "tag"));
});
qunit_1.module("[combinators] takeUntil");
qunit_1.test("match: skipping a chunk of characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("world")));
    helpers_1.eqSnippet(next, input.slice(6).rest);
    helpers_1.eqSnippet(match, input.slice(6));
});
qunit_1.test("match: skipping zero characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("hello")));
    helpers_1.eqSnippet(next, input.rest);
    helpers_1.eqSnippet(match, input.rest);
});
qunit_1.test("match: skipping until the last character", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("d")));
    helpers_1.eqSnippet(next, input.slice(10).rest);
    helpers_1.eqSnippet(match, input.slice(10));
});
qunit_1.test("match: skipping until the last characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("world")));
    helpers_1.eqSnippet(next, input.slice(6).rest);
    helpers_1.eqSnippet(match, input.slice(6));
});
qunit_1.test("mismatch: no match before the end", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeUntil("cruel")));
    helpers_1.eqSnippet(next, input.slice(11).rest);
    helpers_1.eqSnippet(match, input.slice(11));
});
qunit_1.module("[combinators] takeWhile");
qunit_1.test("match: at non-zero offset", () => {
    let input = hbs_parser_next_1.Snippet.input("hello!!!!", LOGGER);
    let [next1] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.tag("hello")));
    let [next, match] = helpers_1.unwrap(next1.invoke(hbs_parser_next_1.combinators.takeWhile("!"), next1));
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippet(match, input.slice(5).slice(4));
});
qunit_1.test("match: skipping zero characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeWhile("hello")));
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippet(match, input.slice(5));
});
qunit_1.test("match: skipping until the last characters", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeWhile("hello world")));
    helpers_1.eqSnippet(next, input.slice(11).rest);
    helpers_1.eqSnippet(match, input.slice(11));
});
qunit_1.test("mismatch: no match before the end", () => {
    let input = hbs_parser_next_1.Snippet.input("hellohello", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.combinators.takeWhile("hellohello")));
    helpers_1.eqSnippet(next, input.slice(10).rest);
    helpers_1.eqSnippet(match, input.slice(10));
});


/***/ }),

/***/ "./tests/helpers.ts":
/*!**************************!*\
  !*** ./tests/helpers.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
function unwrap(input) {
    if (input.kind === "ok") {
        return input.value;
    }
    else {
        throw new Error(`Expected Ok result, got Err (reason=${input.reason})`);
    }
}
exports.unwrap = unwrap;
function eqResult(left, right) {
    qunit_1.assert.strictEqual(left.kind, right.kind);
    if (left.kind === "ok" && right.kind === "ok") {
        qunit_1.assert.ok(left.value.eq(right.value));
    }
    else if (left.kind === "err" && right.kind === "err") {
        qunit_1.assert.ok(left.snippet.eq(right.snippet), `left=${left.snippet.fmt()} right=${right.snippet.fmt()}`);
        qunit_1.assert.strictEqual(left.reason, right.reason);
    }
}
exports.eqResult = eqResult;
function eqSnippet(left, right) {
    qunit_1.assert.ok(left.eq(right), `left=${left.fmt()} right=${right.fmt()}`);
}
exports.eqSnippet = eqSnippet;
function eqSnippets(left, right) {
    if (left.length !== right.length) {
        qunit_1.assert.ok(false, `left=${JSON.stringify(left.map(s => s.fmt()))}\nright=${JSON.stringify(right.map(s => s.fmt()))}`);
    }
    else {
        for (let i = 0; i < left.length; i++) {
            let leftItem = left[i];
            let rightItem = right[i];
            eqSnippet(leftItem, rightItem);
        }
    }
}
exports.eqSnippets = eqSnippets;
function eqError(left, right) {
    if (left.kind === "err") {
        qunit_1.assert.ok(left.snippet.eq(right.snippet), `left=${left.snippet.fmt()} right=${right.snippet.fmt()}`);
        qunit_1.assert.strictEqual(left.reason, right.reason);
    }
    else {
        qunit_1.assert.strictEqual(left.kind, "err", `expected an error`);
    }
}
exports.eqError = eqError;


/***/ }),

/***/ "./tests/index.ts":
/*!************************!*\
  !*** ./tests/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! file-loader?name=[name].[ext]!../node_modules/qunit/qunit/qunit.css */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./node_modules/qunit/qunit/qunit.css");
__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./tests/index.html");
const qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
__webpack_require__(/*! ./combinators-test */ "./tests/combinators-test.ts");
__webpack_require__(/*! ./multi-test */ "./tests/multi-test.ts");
__webpack_require__(/*! ./reader/index */ "./tests/reader/index.ts");
qunit_1.config.autostart = true;
qunit_1.config.urlConfig.push({
    id: "logging",
    label: "Enable logging",
});
qunit_1.dump.maxDepth = 25;


/***/ }),

/***/ "./tests/multi-test.ts":
/*!*****************************!*\
  !*** ./tests/multi-test.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
const qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
const helpers_1 = __webpack_require__(/*! ./helpers */ "./tests/helpers.ts");
const LOGGER = new hbs_parser_next_1.Logger(qunit_1.config.logging || false);
qunit_1.module("[combinators] many");
qunit_1.test("zero times", () => {
    let input = hbs_parser_next_1.Snippet.input("abcabcabc", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("def"))));
    helpers_1.eqSnippet(next, input);
    helpers_1.eqSnippets(match, []);
});
qunit_1.test("one time", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("hello"))));
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippets(match, [input.slice(5)]);
});
qunit_1.test("several times", () => {
    let input = hbs_parser_next_1.Snippet.input("abcabcabc", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("abc"))));
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippets(match, [
        input.slice(3),
        input.slice(3).slice(3),
        input.slice(6).slice(3),
    ]);
});
qunit_1.module("[combinators] present(many) (at least one match)");
qunit_1.test("zero times", () => {
    let input = hbs_parser_next_1.Snippet.input("abcabcabc", LOGGER);
    let mismatch = input.invoke(hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("def"))));
    helpers_1.eqError(mismatch, hbs_parser_next_1.err(input, "empty"));
});
qunit_1.test("one time", () => {
    let input = hbs_parser_next_1.Snippet.input("hello world", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("hello")))));
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippets(match, [input.slice(5)]);
});
qunit_1.test("several times", () => {
    let input = hbs_parser_next_1.Snippet.input("abcabcabc", LOGGER);
    let [next, match] = helpers_1.unwrap(input.invoke(hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("abc")))));
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippets(match, [
        input.slice(3),
        input.slice(3).slice(3),
        input.slice(6).slice(3),
    ]);
});


/***/ }),

/***/ "./tests/reader/hbs.ts":
/*!*****************************!*\
  !*** ./tests/reader/hbs.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
const qunit = __importStar(__webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js"));
const qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
qunit_1.module("[READER] interpolation");
qunit.assert.tree = function (source, ...expected) {
    let step = source || "(empty)";
    this.step(step);
    let tree = hbs_parser_next_1.read(source, { logging: qunit_1.config.logging });
    let { root: expectedRoot, source: expectedSource } = hbs_parser_next_1.b.root(expected);
    let expectedString = hbs_parser_next_1.serializeRoot(expectedRoot, expectedSource);
    if (tree.kind === "err") {
        this.ok(false, `expected tokens (${expectedString}), got error (${tree.reason})`);
    }
    else {
        let actualString = hbs_parser_next_1.serializeRoot(tree.value, source);
        this.strictEqual(actualString, expectedString, "serialization of expected and actual match");
        this.deepEqual(tree.value, expectedRoot, "token trees match");
    }
    this.verifySteps([step], "verified steps");
};
qunit_1.test("empty", assert => {
    assert.tree("" /* no body */);
});
qunit_1.test("{{id}} interpolating an id", assert => {
    assert.tree("{{identifier}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("identifier")]));
    assert.tree("{{id}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id")]));
    assert.tree("{{id-with-dash}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id-with-dash")]));
});
qunit_1.test("{{id}} interpolating a string", assert => {
    assert.tree(`{{"hello"}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`"hello"`)]));
    assert.tree(`{{"hello world"}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`"hello world"`)]));
    assert.tree(`{{"hello\\"world"}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`"hello\\"world"`)]));
    assert.tree(`{{'hello'}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`'hello'`)]));
    assert.tree(`{{'hello world'}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`'hello world'`)]));
    assert.tree(`{{'hello\\'world'}}`, hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.str(`'hello\\'world'`)]));
});
qunit_1.test("{{id}} interpolating a number", assert => {
    assert.tree("{{10}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.int("10")]));
    assert.tree("{{-10}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.int("-10")]));
    assert.tree("{{100.5123}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.decimal("100.5123")]));
    assert.tree("{{-100.5123}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.decimal("-100.5123")]));
});
qunit_1.test("{{(id)}} interpolating an expression", assert => {
    assert.tree("{{(id)}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.id("id")])]));
    assert.tree("{{ (id) }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.id("id")]), hbs_parser_next_1.b.sp]));
    assert.tree("{{( id )}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp])]));
    assert.tree("{{ ( id ) }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp]), hbs_parser_next_1.b.sp]));
});
qunit_1.test("{{@id}} interpolating an argument", assert => {
    assert.tree("{{@identifier}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@identifier")]));
    assert.tree("{{@id}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id")]));
    assert.tree("{{@id-with-dash}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id-with-dash")]));
});
qunit_1.test("whitespace around interpolation", assert => {
    assert.tree("{{ identifier }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("identifier"), hbs_parser_next_1.b.sp]));
    assert.tree("{{ id }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp]));
    assert.tree("{{ id-with-dash }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id-with-dash"), hbs_parser_next_1.b.sp]));
});
qunit_1.test("paths", assert => {
    assert.tree("{{id.with.path}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("with"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("path")]));
    assert.tree("{{ id.with.path }}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
    ]));
    assert.tree("{{  id.with.path  }}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.ws("  "),
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.ws("  "),
    ]));
    assert.tree("{{@id.with.path}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("with"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("path")]));
    assert.tree("{{@dash-id.with-dashed.path}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.arg("@dash-id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with-dashed"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
    ]));
});
qunit_1.test("{{id.with.path some other.stuff}}", assert => {
    assert.tree("{{id.with.path some other.stuff}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("some"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("stuff"),
    ]));
});
qunit_1.test("named arguments", assert => {
    assert.tree("{{id.with.path some named=args other=named.args}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("some"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("args"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("args"),
    ]));
    assert.tree("{{id.with.path some @arg named=args other=@named.args}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("some"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.arg("@arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("args"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.arg("@named"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("args"),
    ]));
});
qunit_1.test("using all the features", assert => {
    assert.tree("{{  (id.with.path some @arg named=args other=@named.args) @some.arg another.arg named=@arg other=named.arg yet-another=-12.5  }}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.ws("  "),
        hbs_parser_next_1.b.sexp([
            hbs_parser_next_1.b.id("id"),
            hbs_parser_next_1.b.dot,
            hbs_parser_next_1.b.id("with"),
            hbs_parser_next_1.b.dot,
            hbs_parser_next_1.b.id("path"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.id("some"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.arg("@arg"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.id("named"),
            hbs_parser_next_1.b.eq,
            hbs_parser_next_1.b.id("args"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.id("other"),
            hbs_parser_next_1.b.eq,
            hbs_parser_next_1.b.arg("@named"),
            hbs_parser_next_1.b.dot,
            hbs_parser_next_1.b.id("args"),
        ]),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.arg("@some"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("another"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.arg("@arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("arg"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("yet-another"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.decimal("-12.5"),
        hbs_parser_next_1.b.ws("  "),
    ]));
});
qunit_1.test("two interpolations next to each other", assert => {
    assert.tree("{{id.with.path some named=args other=named.args}}{{some.stuff}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("some"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("args"),
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("other"),
        hbs_parser_next_1.b.eq,
        hbs_parser_next_1.b.id("named"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("args"),
    ]), hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("some"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("stuff")]));
});
qunit_1.test("blocks", assert => {
    assert.tree("{{#if @x}}{{/if}}", hbs_parser_next_1.b.block({
        open: {
            name: "if",
            head: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.arg("@x")],
        },
    }));
});


/***/ }),

/***/ "./tests/reader/html.ts":
/*!******************************!*\
  !*** ./tests/reader/html.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
const qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
qunit_1.module("[READER] HTML");
qunit_1.test("simple content", assert => {
    assert.tree("hello", hbs_parser_next_1.b.text("hello"));
});
qunit_1.test("a simple tag", assert => {
    assert.tree("<div>", hbs_parser_next_1.b.startTag("div"));
});
qunit_1.test("A simple tag with trailing spaces", assert => {
    assert.tree("<div   \t\n>", hbs_parser_next_1.b.startTag({ name: "div", attrs: [hbs_parser_next_1.b.ws("   \t\n")] }));
});
qunit_1.test("A simple closing tag", assert => {
    assert.tree("</div>", hbs_parser_next_1.b.endTag("div"));
});
qunit_1.test("A simple closing tag with trailing spaces", assert => {
    assert.tree("</div   \t\n>", hbs_parser_next_1.b.endTag({ name: "div", trailing: "   \t\n" }));
});
qunit_1.test("A pair of hyphenated tags", assert => {
    assert.tree("<x-foo></x-foo>", hbs_parser_next_1.b.startTag("x-foo"), hbs_parser_next_1.b.endTag("x-foo"));
});
qunit_1.test("A tag with a single-quoted attribute", assert => {
    assert.tree(`<div id='foo'>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr({ name: "id", value: `'foo'` })]
    }));
});
qunit_1.test("A tag with a double-quoted attribute", assert => {
    assert.tree(`<div id="foo">`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr({ name: "id", value: `"foo"` })]
    }));
});
qunit_1.test("A tag with a double-quoted empty", assert => {
    assert.tree(`<div id="">`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr({ name: "id", value: hbs_parser_next_1.b.stringInterpolate([], `"`) })]
    }));
});
qunit_1.test("A tag with unquoted attribute", assert => {
    assert.tree(`<div id=foo>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr({ name: "id", value: `foo` })]
    }));
});
qunit_1.test("A tag with valueless attributes", assert => {
    assert.tree(`<div foo bar>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr("foo"), hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr("bar")]
    }));
});
qunit_1.test("A tag with multiple attributes", assert => {
    assert.tree(`<div id=foo class="bar baz" href='bat'>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({ name: "id", value: `foo` }),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({ name: "class", value: `"bar baz"` }),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({ name: "href", value: `'bat'` })
        ]
    }));
});
qunit_1.test("A self-closing tag", assert => {
    assert.tree(`<img />`, hbs_parser_next_1.b.startTag({
        name: "img",
        attrs: [hbs_parser_next_1.b.sp],
        selfClosing: true
    }));
});
qunit_1.test("A self-closing tag with valueless attributes", assert => {
    assert.tree(`<input disabled />`, hbs_parser_next_1.b.startTag({
        name: "input",
        attrs: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr("disabled"), hbs_parser_next_1.b.sp],
        selfClosing: true
    }));
    assert.tree(`<input disabled/>`, hbs_parser_next_1.b.startTag({
        name: "input",
        attrs: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr("disabled")],
        selfClosing: true
    }));
    assert.tree(`<input data-foo=bar/>`, hbs_parser_next_1.b.startTag({
        name: "input",
        attrs: [hbs_parser_next_1.b.sp, hbs_parser_next_1.b.attr({ name: "data-foo", value: "bar/" })]
    }));
});
qunit_1.test("A comment", assert => {
    assert.tree("<!-- hello -->", hbs_parser_next_1.b.comment(" hello "));
    assert.tree("<!---->", hbs_parser_next_1.b.comment(""));
    assert.tree("<!-- A perfectly legal - appears -->", hbs_parser_next_1.b.comment(" A perfectly legal - appears "));
});


/***/ }),

/***/ "./tests/reader/hybrid.ts":
/*!********************************!*\
  !*** ./tests/reader/hybrid.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
const qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
qunit_1.module("[READER] Hybrid");
qunit_1.test("content plus interpolation", assert => {
    assert.tree("hello {{world}} goodbye", hbs_parser_next_1.b.text("hello "), hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("world")]), hbs_parser_next_1.b.text(" goodbye"));
});
qunit_1.test("A named arg invocation", assert => {
    assert.tree("<@foo></@foo>", hbs_parser_next_1.b.startTag(hbs_parser_next_1.b.arg("@foo")), hbs_parser_next_1.b.endTag("@foo"));
});
qunit_1.test("A path invocation", assert => {
    assert.tree("<f.input></f.input>", hbs_parser_next_1.b.startTag([hbs_parser_next_1.b.id("f"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("input")]), hbs_parser_next_1.b.endTag([hbs_parser_next_1.b.id("f"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("input")]));
    assert.tree("<@f.input></@f.input>", hbs_parser_next_1.b.startTag([hbs_parser_next_1.b.arg("@f"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("input")]), hbs_parser_next_1.b.endTag([hbs_parser_next_1.b.arg("@f"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("input")]));
});
qunit_1.test("Curly attributes", assert => {
    assert.tree("<div disabled={{disabled}}></div>", hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: "disabled",
                value: hbs_parser_next_1.b.attrInterpolate(hbs_parser_next_1.b.id("disabled"))
            })
        ]
    }), hbs_parser_next_1.b.endTag("div"));
});
qunit_1.test("Curlies inside quoted attributes", assert => {
    assert.tree(`<div disabled="{{disabled}}"></div>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: "disabled",
                value: hbs_parser_next_1.b.stringInterpolate([hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("disabled")])], `"`)
            })
        ]
    }), hbs_parser_next_1.b.endTag("div"));
    assert.tree(`<a href="{{url}}.html"></a>`, hbs_parser_next_1.b.startTag({
        name: "a",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: "href",
                value: hbs_parser_next_1.b.stringInterpolate([hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("url")]), hbs_parser_next_1.b.text(".html")], `"`)
            })
        ]
    }), hbs_parser_next_1.b.endTag("a"));
});
qunit_1.test("Arguments", assert => {
    assert.tree(`<div @disabled="{{disabled}}"></div>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: hbs_parser_next_1.b.argName("@disabled"),
                value: hbs_parser_next_1.b.stringInterpolate([hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("disabled")])], `"`)
            })
        ]
    }), hbs_parser_next_1.b.endTag("div"));
    assert.tree(`<a @href="{{url}}.html"></a>`, hbs_parser_next_1.b.startTag({
        name: "a",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr({
                name: hbs_parser_next_1.b.argName("@href"),
                value: hbs_parser_next_1.b.stringInterpolate([hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("url")]), hbs_parser_next_1.b.text(".html")], `"`)
            })
        ]
    }), hbs_parser_next_1.b.endTag("a"));
});
qunit_1.test("Modifiers", assert => {
    assert.tree(`<div disabled {{on "click" (fn this.handleClick @arg)}}></div>`, hbs_parser_next_1.b.startTag({
        name: "div",
        attrs: [
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.attr("disabled"),
            hbs_parser_next_1.b.sp,
            hbs_parser_next_1.b.interpolate([
                hbs_parser_next_1.b.id("on"),
                hbs_parser_next_1.b.sp,
                hbs_parser_next_1.b.str(`"click"`),
                hbs_parser_next_1.b.sp,
                hbs_parser_next_1.b.sexp([
                    hbs_parser_next_1.b.id("fn"),
                    hbs_parser_next_1.b.sp,
                    hbs_parser_next_1.b.id("this"),
                    hbs_parser_next_1.b.dot,
                    hbs_parser_next_1.b.id("handleClick"),
                    hbs_parser_next_1.b.sp,
                    hbs_parser_next_1.b.arg("@arg")
                ])
            ])
        ]
    }), hbs_parser_next_1.b.endTag("div"));
});


/***/ }),

/***/ "./tests/reader/index.ts":
/*!*******************************!*\
  !*** ./tests/reader/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./hbs */ "./tests/reader/hbs.ts");
__webpack_require__(/*! ./html */ "./tests/reader/html.ts");
__webpack_require__(/*! ./hybrid */ "./tests/reader/hybrid.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1bml0L3F1bml0L3F1bml0LmNzcyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1bml0L3F1bml0L3F1bml0LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL2FueS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9iYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL2hicy90b2tlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9tYXliZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy9wYXR0ZXJuLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL3BpY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvc2VxLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL3RhZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy90YWtlLXVudGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL2NvbWJpbmF0b3JzL3Rha2Utd2hpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvY29tYmluYXRvcnMvd3JhcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9kZWJ1Zy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9oYnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvaHRtbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvbXVsdGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvcmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9zZXJpYWxpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdG9rZW4tYnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWQvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NuaXBwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwYW4udHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvY29tYmluYXRvcnMtdGVzdC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3Rlc3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3Rlc3RzL211bHRpLXRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvcmVhZGVyL2hicy50cyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9yZWFkZXIvaHRtbC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9yZWFkZXIvaHlicmlkLnRzIiwid2VicGFjazovLy8uL3Rlc3RzL3JlYWRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsb0ZBQXVCLGNBQWMsRTs7Ozs7Ozs7Ozs7O0FDQXBEO0FBQWUsb0ZBQXVCLGVBQWUsRTs7Ozs7Ozs7Ozs7QUNBckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7Ozs7Ozs7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QUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFdBQVc7QUFDckMsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsYUFBYTs7QUFFM0IsZUFBZSxrQkFBa0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSixnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQseURBQXlEO0FBQ3pELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsdUZBQXVGOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7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QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCLFlBQVksU0FBUztBQUNyQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QixpQkFBaUI7QUFDakI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxPQUFPO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTixLQUFLOztBQUVMO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrQ0FBa0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyx5REFBeUQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxLQUE2QjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLEtBQThCO0FBQ3JDO0FBQ0E7O0FBRUEsT0FBTyxJQUEwQztBQUNqRCxJQUFJLG1DQUFPO0FBQ1g7QUFDQSxLQUFLO0FBQUEsb0dBQUM7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixhQUFhO0FBQ2xHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSyxHQUFHLGtCQUFrQjtBQUMxQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLLEdBQUcsa0JBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSx3QkFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDJCQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0ZBQWdGO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsNEJBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwyQkFBMkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQSxnRUFBZ0U7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixrU0FBa1MsZUFBZTtBQUNqVCxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsYUFBYTtBQUNwRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FB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Q0FBOEMsY0FBYztBQUM1RCwwQkFBMEIsbUJBQU8sQ0FBQyx1Q0FBaUI7QUFDbkQsZ0JBQWdCLG1CQUFPLENBQUMsa0RBQU87QUFDL0I7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxrQ0FBa0MsVUFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsNEJBQTRCLEtBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLG1DQUFtQyxVQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCw2QkFBNkIsS0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsaUNBQWlDLHVDQUF1QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9GWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFPLENBQUMsb0NBQU87QUFDZixtQkFBTyxDQUFDLHNDQUFRO0FBQ2hCLG1CQUFPLENBQUMsMENBQVUiLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3RzL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInF1bml0LmNzc1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qIVxuICogUVVuaXQgMi45LjNcbiAqIGh0dHBzOi8vcXVuaXRqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE5LTEwLTA4VDE1OjQ5WlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCQxKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBnbG9iYWwkMSA9IGdsb2JhbCQxICYmIGdsb2JhbCQxLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgPyBnbG9iYWwkMVsnZGVmYXVsdCddIDogZ2xvYmFsJDE7XG5cbiAgdmFyIHdpbmRvdyQxID0gZ2xvYmFsJDEud2luZG93O1xuICB2YXIgc2VsZiQxID0gZ2xvYmFsJDEuc2VsZjtcbiAgdmFyIGNvbnNvbGUgPSBnbG9iYWwkMS5jb25zb2xlO1xuICB2YXIgc2V0VGltZW91dCQxID0gZ2xvYmFsJDEuc2V0VGltZW91dDtcbiAgdmFyIGNsZWFyVGltZW91dCA9IGdsb2JhbCQxLmNsZWFyVGltZW91dDtcblxuICB2YXIgZG9jdW1lbnQkMSA9IHdpbmRvdyQxICYmIHdpbmRvdyQxLmRvY3VtZW50O1xuICB2YXIgbmF2aWdhdG9yID0gd2luZG93JDEgJiYgd2luZG93JDEubmF2aWdhdG9yO1xuXG4gIHZhciBsb2NhbFNlc3Npb25TdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICBcdHZhciB4ID0gXCJxdW5pdC10ZXN0LXN0cmluZ1wiO1xuICBcdHRyeSB7XG4gIFx0XHRnbG9iYWwkMS5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICBcdFx0Z2xvYmFsJDEuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgXHRcdHJldHVybiBnbG9iYWwkMS5zZXNzaW9uU3RvcmFnZTtcbiAgXHR9IGNhdGNoIChlKSB7XG4gIFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuICBcdH1cbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBwcm94aWVzIHRvIHRoZSBnaXZlbiBtZXRob2QgbmFtZSBvbiB0aGUgZ2xvYmFsc1xuICAgKiBjb25zb2xlIG9iamVjdC4gVGhlIHByb3h5IHdpbGwgYWxzbyBkZXRlY3QgaWYgdGhlIGNvbnNvbGUgZG9lc24ndCBleGlzdCBhbmRcbiAgICogd2lsbCBhcHByb3ByaWF0ZWx5IG5vLW9wLiBUaGlzIGFsbG93cyBzdXBwb3J0IGZvciBJRTksIHdoaWNoIGRvZXNuJ3QgaGF2ZSBhXG4gICAqIGNvbnNvbGUgaWYgdGhlIGRldmVsb3BlciB0b29scyBhcmUgbm90IG9wZW4uXG4gICAqL1xuICBmdW5jdGlvbiBjb25zb2xlUHJveHkobWV0aG9kKSB7XG4gIFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgXHRcdGlmIChjb25zb2xlKSB7XG4gIFx0XHRcdGNvbnNvbGVbbWV0aG9kXS5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICBcdFx0fVxuICBcdH07XG4gIH1cblxuICB2YXIgTG9nZ2VyID0ge1xuICBcdHdhcm46IGNvbnNvbGVQcm94eShcIndhcm5cIilcbiAgfTtcblxuICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgdmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICB9O1xuICB9KCk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICB2YXIgdG9Db25zdW1hYmxlQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgICAgcmV0dXJuIGFycjI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gICAgfVxuICB9O1xuXG4gIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgbm93ID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24gKCkge1xuICBcdHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfTtcblxuICB2YXIgaGFzUGVyZm9ybWFuY2VBcGkgPSBkZXRlY3RQZXJmb3JtYW5jZUFwaSgpO1xuICB2YXIgcGVyZm9ybWFuY2UgPSBoYXNQZXJmb3JtYW5jZUFwaSA/IHdpbmRvdyQxLnBlcmZvcm1hbmNlIDogdW5kZWZpbmVkO1xuICB2YXIgcGVyZm9ybWFuY2VOb3cgPSBoYXNQZXJmb3JtYW5jZUFwaSA/IHBlcmZvcm1hbmNlLm5vdy5iaW5kKHBlcmZvcm1hbmNlKSA6IG5vdztcblxuICBmdW5jdGlvbiBkZXRlY3RQZXJmb3JtYW5jZUFwaSgpIHtcbiAgXHRyZXR1cm4gd2luZG93JDEgJiYgdHlwZW9mIHdpbmRvdyQxLnBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3ckMS5wZXJmb3JtYW5jZS5tYXJrID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHdpbmRvdyQxLnBlcmZvcm1hbmNlLm1lYXN1cmUgPT09IFwiZnVuY3Rpb25cIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lYXN1cmUoY29tbWVudCwgc3RhcnRNYXJrLCBlbmRNYXJrKSB7XG5cbiAgXHQvLyBgcGVyZm9ybWFuY2UubWVhc3VyZWAgbWF5IGZhaWwgaWYgdGhlIG1hcmsgY291bGQgbm90IGJlIGZvdW5kLlxuICBcdC8vIHJlYXNvbnMgYSBzcGVjaWZpYyBtYXJrIGNvdWxkIG5vdCBiZSBmb3VuZCBpbmNsdWRlOiBvdXRzaWRlIGNvZGUgaW52b2tpbmcgYHBlcmZvcm1hbmNlLmNsZWFyTWFya3MoKWBcbiAgXHR0cnkge1xuICBcdFx0cGVyZm9ybWFuY2UubWVhc3VyZShjb21tZW50LCBzdGFydE1hcmssIGVuZE1hcmspO1xuICBcdH0gY2F0Y2ggKGV4KSB7XG4gIFx0XHRMb2dnZXIud2FybihcInBlcmZvcm1hbmNlLm1lYXN1cmUgY291bGQgbm90IGJlIGV4ZWN1dGVkIGJlY2F1c2Ugb2YgXCIsIGV4Lm1lc3NhZ2UpO1xuICBcdH1cbiAgfVxuXG4gIHZhciBkZWZpbmVkID0ge1xuICBcdGRvY3VtZW50OiB3aW5kb3ckMSAmJiB3aW5kb3ckMS5kb2N1bWVudCAhPT0gdW5kZWZpbmVkLFxuICBcdHNldFRpbWVvdXQ6IHNldFRpbWVvdXQkMSAhPT0gdW5kZWZpbmVkXG4gIH07XG5cbiAgLy8gUmV0dXJucyBhIG5ldyBBcnJheSB3aXRoIHRoZSBlbGVtZW50cyB0aGF0IGFyZSBpbiBhIGJ1dCBub3QgaW4gYlxuICBmdW5jdGlvbiBkaWZmKGEsIGIpIHtcbiAgXHR2YXIgaSxcbiAgXHQgICAgaixcbiAgXHQgICAgcmVzdWx0ID0gYS5zbGljZSgpO1xuXG4gIFx0Zm9yIChpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICBcdFx0Zm9yIChqID0gMDsgaiA8IGIubGVuZ3RoOyBqKyspIHtcbiAgXHRcdFx0aWYgKHJlc3VsdFtpXSA9PT0gYltqXSkge1xuICBcdFx0XHRcdHJlc3VsdC5zcGxpY2UoaSwgMSk7XG4gIFx0XHRcdFx0aS0tO1xuICBcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICBcdHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGVsZW1lbnQgZXhpc3RzIGluIGEgZ2l2ZW4gYXJyYXkgb3Igbm90LlxuICAgKlxuICAgKiBAbWV0aG9kIGluQXJyYXlcbiAgICogQHBhcmFtIHtBbnl9IGVsZW1cbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXlcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGZ1bmN0aW9uIGluQXJyYXkoZWxlbSwgYXJyYXkpIHtcbiAgXHRyZXR1cm4gYXJyYXkuaW5kZXhPZihlbGVtKSAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYSBjbG9uZSBvZiBhbiBvYmplY3QgdXNpbmcgb25seSBBcnJheSBvciBPYmplY3QgYXMgYmFzZSxcbiAgICogYW5kIGNvcGllcyBvdmVyIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAqIEByZXR1cm4ge09iamVjdH0gTmV3IG9iamVjdCB3aXRoIG9ubHkgdGhlIG93biBwcm9wZXJ0aWVzIChyZWN1cnNpdmVseSkuXG4gICAqL1xuICBmdW5jdGlvbiBvYmplY3RWYWx1ZXMob2JqKSB7XG4gIFx0dmFyIGtleSxcbiAgXHQgICAgdmFsLFxuICBcdCAgICB2YWxzID0gaXMoXCJhcnJheVwiLCBvYmopID8gW10gOiB7fTtcbiAgXHRmb3IgKGtleSBpbiBvYmopIHtcbiAgXHRcdGlmIChoYXNPd24uY2FsbChvYmosIGtleSkpIHtcbiAgXHRcdFx0dmFsID0gb2JqW2tleV07XG4gIFx0XHRcdHZhbHNba2V5XSA9IHZhbCA9PT0gT2JqZWN0KHZhbCkgPyBvYmplY3RWYWx1ZXModmFsKSA6IHZhbDtcbiAgXHRcdH1cbiAgXHR9XG4gIFx0cmV0dXJuIHZhbHM7XG4gIH1cblxuICBmdW5jdGlvbiBleHRlbmQoYSwgYiwgdW5kZWZPbmx5KSB7XG4gIFx0Zm9yICh2YXIgcHJvcCBpbiBiKSB7XG4gIFx0XHRpZiAoaGFzT3duLmNhbGwoYiwgcHJvcCkpIHtcbiAgXHRcdFx0aWYgKGJbcHJvcF0gPT09IHVuZGVmaW5lZCkge1xuICBcdFx0XHRcdGRlbGV0ZSBhW3Byb3BdO1xuICBcdFx0XHR9IGVsc2UgaWYgKCEodW5kZWZPbmx5ICYmIHR5cGVvZiBhW3Byb3BdICE9PSBcInVuZGVmaW5lZFwiKSkge1xuICBcdFx0XHRcdGFbcHJvcF0gPSBiW3Byb3BdO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0cmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBvYmplY3RUeXBlKG9iaikge1xuICBcdGlmICh0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIFx0XHRyZXR1cm4gXCJ1bmRlZmluZWRcIjtcbiAgXHR9XG5cbiAgXHQvLyBDb25zaWRlcjogdHlwZW9mIG51bGwgPT09IG9iamVjdFxuICBcdGlmIChvYmogPT09IG51bGwpIHtcbiAgXHRcdHJldHVybiBcIm51bGxcIjtcbiAgXHR9XG5cbiAgXHR2YXIgbWF0Y2ggPSB0b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL15cXFtvYmplY3RcXHMoLiopXFxdJC8pLFxuICBcdCAgICB0eXBlID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG5cbiAgXHRzd2l0Y2ggKHR5cGUpIHtcbiAgXHRcdGNhc2UgXCJOdW1iZXJcIjpcbiAgXHRcdFx0aWYgKGlzTmFOKG9iaikpIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJuYW5cIjtcbiAgXHRcdFx0fVxuICBcdFx0XHRyZXR1cm4gXCJudW1iZXJcIjtcbiAgXHRcdGNhc2UgXCJTdHJpbmdcIjpcbiAgXHRcdGNhc2UgXCJCb29sZWFuXCI6XG4gIFx0XHRjYXNlIFwiQXJyYXlcIjpcbiAgXHRcdGNhc2UgXCJTZXRcIjpcbiAgXHRcdGNhc2UgXCJNYXBcIjpcbiAgXHRcdGNhc2UgXCJEYXRlXCI6XG4gIFx0XHRjYXNlIFwiUmVnRXhwXCI6XG4gIFx0XHRjYXNlIFwiRnVuY3Rpb25cIjpcbiAgXHRcdGNhc2UgXCJTeW1ib2xcIjpcbiAgXHRcdFx0cmV0dXJuIHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgXHRcdGRlZmF1bHQ6XG4gIFx0XHRcdHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbiAgXHR9XG4gIH1cblxuICAvLyBTYWZlIG9iamVjdCB0eXBlIGNoZWNraW5nXG4gIGZ1bmN0aW9uIGlzKHR5cGUsIG9iaikge1xuICBcdHJldHVybiBvYmplY3RUeXBlKG9iaikgPT09IHR5cGU7XG4gIH1cblxuICAvLyBCYXNlZCBvbiBKYXZhJ3MgU3RyaW5nLmhhc2hDb2RlLCBhIHNpbXBsZSBidXQgbm90XG4gIC8vIHJpZ29yb3VzbHkgY29sbGlzaW9uIHJlc2lzdGFudCBoYXNoaW5nIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSGFzaChtb2R1bGUsIHRlc3ROYW1lKSB7XG4gIFx0dmFyIHN0ciA9IG1vZHVsZSArIFwiXFx4MUNcIiArIHRlc3ROYW1lO1xuICBcdHZhciBoYXNoID0gMDtcblxuICBcdGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSk7XG4gIFx0XHRoYXNoIHw9IDA7XG4gIFx0fVxuXG4gIFx0Ly8gQ29udmVydCB0aGUgcG9zc2libHkgbmVnYXRpdmUgaW50ZWdlciBoYXNoIGNvZGUgaW50byBhbiA4IGNoYXJhY3RlciBoZXggc3RyaW5nLCB3aGljaCBpc24ndFxuICBcdC8vIHN0cmljdGx5IG5lY2Vzc2FyeSBidXQgaW5jcmVhc2VzIHVzZXIgdW5kZXJzdGFuZGluZyB0aGF0IHRoZSBpZCBpcyBhIFNIQS1saWtlIGhhc2hcbiAgXHR2YXIgaGV4ID0gKDB4MTAwMDAwMDAwICsgaGFzaCkudG9TdHJpbmcoMTYpO1xuICBcdGlmIChoZXgubGVuZ3RoIDwgOCkge1xuICBcdFx0aGV4ID0gXCIwMDAwMDAwXCIgKyBoZXg7XG4gIFx0fVxuXG4gIFx0cmV0dXJuIGhleC5zbGljZSgtOCk7XG4gIH1cblxuICAvLyBUZXN0IGZvciBlcXVhbGl0eSBhbnkgSmF2YVNjcmlwdCB0eXBlLlxuICAvLyBBdXRob3JzOiBQaGlsaXBwZSBSYXRow6kgPHByYXRoZUBnbWFpbC5jb20+LCBEYXZpZCBDaGFuIDxkYXZpZEB0cm9pLm9yZz5cbiAgdmFyIGVxdWl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICBcdC8vIFZhbHVlIHBhaXJzIHF1ZXVlZCBmb3IgY29tcGFyaXNvbi4gVXNlZCBmb3IgYnJlYWR0aC1maXJzdCBwcm9jZXNzaW5nIG9yZGVyLCByZWN1cnNpb25cbiAgXHQvLyBkZXRlY3Rpb24gYW5kIGF2b2lkaW5nIHJlcGVhdGVkIGNvbXBhcmlzb24gKHNlZSBiZWxvdyBmb3IgZGV0YWlscykuXG4gIFx0Ly8gRWxlbWVudHMgYXJlIHsgYTogdmFsLCBiOiB2YWwgfS5cbiAgXHR2YXIgcGFpcnMgPSBbXTtcblxuICBcdHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIFx0XHRyZXR1cm4gb2JqLl9fcHJvdG9fXztcbiAgXHR9O1xuXG4gIFx0ZnVuY3Rpb24gdXNlU3RyaWN0RXF1YWxpdHkoYSwgYikge1xuXG4gIFx0XHQvLyBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgaWYgYSBhbmQgYiBhcmUgbm90IHN0cmljdCBlcXVhbCwgYW5kIGlzIHVzZWQgdG8gY29tcGFyZSBvblxuICBcdFx0Ly8gdGhlIHByaW1pdGl2ZSB2YWx1ZXMgaW5zaWRlIG9iamVjdCB3cmFwcGVycy4gRm9yIGV4YW1wbGU6XG4gIFx0XHQvLyBgdmFyIGkgPSAxO2BcbiAgXHRcdC8vIGB2YXIgaiA9IG5ldyBOdW1iZXIoMSk7YFxuICBcdFx0Ly8gTmVpdGhlciBhIG5vciBiIGNhbiBiZSBudWxsLCBhcyBhICE9PSBiIGFuZCB0aGV5IGhhdmUgdGhlIHNhbWUgdHlwZS5cbiAgXHRcdGlmICgodHlwZW9mIGEgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihhKSkgPT09IFwib2JqZWN0XCIpIHtcbiAgXHRcdFx0YSA9IGEudmFsdWVPZigpO1xuICBcdFx0fVxuICBcdFx0aWYgKCh0eXBlb2YgYiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGIpKSA9PT0gXCJvYmplY3RcIikge1xuICBcdFx0XHRiID0gYi52YWx1ZU9mKCk7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiBhID09PSBiO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGNvbXBhcmVDb25zdHJ1Y3RvcnMoYSwgYikge1xuICBcdFx0dmFyIHByb3RvQSA9IGdldFByb3RvKGEpO1xuICBcdFx0dmFyIHByb3RvQiA9IGdldFByb3RvKGIpO1xuXG4gIFx0XHQvLyBDb21wYXJpbmcgY29uc3RydWN0b3JzIGlzIG1vcmUgc3RyaWN0IHRoYW4gdXNpbmcgYGluc3RhbmNlb2ZgXG4gIFx0XHRpZiAoYS5jb25zdHJ1Y3RvciA9PT0gYi5jb25zdHJ1Y3Rvcikge1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gUmVmICM4NTFcbiAgXHRcdC8vIElmIHRoZSBvYmogcHJvdG90eXBlIGRlc2NlbmRzIGZyb20gYSBudWxsIGNvbnN0cnVjdG9yLCB0cmVhdCBpdFxuICBcdFx0Ly8gYXMgYSBudWxsIHByb3RvdHlwZS5cbiAgXHRcdGlmIChwcm90b0EgJiYgcHJvdG9BLmNvbnN0cnVjdG9yID09PSBudWxsKSB7XG4gIFx0XHRcdHByb3RvQSA9IG51bGw7XG4gIFx0XHR9XG4gIFx0XHRpZiAocHJvdG9CICYmIHByb3RvQi5jb25zdHJ1Y3RvciA9PT0gbnVsbCkge1xuICBcdFx0XHRwcm90b0IgPSBudWxsO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBBbGxvdyBvYmplY3RzIHdpdGggbm8gcHJvdG90eXBlIHRvIGJlIGVxdWl2YWxlbnQgdG9cbiAgXHRcdC8vIG9iamVjdHMgd2l0aCBPYmplY3QgYXMgdGhlaXIgY29uc3RydWN0b3IuXG4gIFx0XHRpZiAocHJvdG9BID09PSBudWxsICYmIHByb3RvQiA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBwcm90b0IgPT09IG51bGwgJiYgcHJvdG9BID09PSBPYmplY3QucHJvdG90eXBlKSB7XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gZ2V0UmVnRXhwRmxhZ3MocmVnZXhwKSB7XG4gIFx0XHRyZXR1cm4gXCJmbGFnc1wiIGluIHJlZ2V4cCA/IHJlZ2V4cC5mbGFncyA6IHJlZ2V4cC50b1N0cmluZygpLm1hdGNoKC9bZ2ltdXldKiQvKVswXTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBpc0NvbnRhaW5lcih2YWwpIHtcbiAgXHRcdHJldHVybiBbXCJvYmplY3RcIiwgXCJhcnJheVwiLCBcIm1hcFwiLCBcInNldFwiXS5pbmRleE9mKG9iamVjdFR5cGUodmFsKSkgIT09IC0xO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGJyZWFkdGhGaXJzdENvbXBhcmVDaGlsZChhLCBiKSB7XG5cbiAgXHRcdC8vIElmIGEgaXMgYSBjb250YWluZXIgbm90IHJlZmVyZW5jZS1lcXVhbCB0byBiLCBwb3N0cG9uZSB0aGUgY29tcGFyaXNvbiB0byB0aGVcbiAgXHRcdC8vIGVuZCBvZiB0aGUgcGFpcnMgcXVldWUgLS0gdW5sZXNzIChhLCBiKSBoYXMgYmVlbiBzZWVuIGJlZm9yZSwgaW4gd2hpY2ggY2FzZSBza2lwXG4gIFx0XHQvLyBvdmVyIHRoZSBwYWlyLlxuICBcdFx0aWYgKGEgPT09IGIpIHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9XG4gIFx0XHRpZiAoIWlzQ29udGFpbmVyKGEpKSB7XG4gIFx0XHRcdHJldHVybiB0eXBlRXF1aXYoYSwgYik7XG4gIFx0XHR9XG4gIFx0XHRpZiAocGFpcnMuZXZlcnkoZnVuY3Rpb24gKHBhaXIpIHtcbiAgXHRcdFx0cmV0dXJuIHBhaXIuYSAhPT0gYSB8fCBwYWlyLmIgIT09IGI7XG4gIFx0XHR9KSkge1xuXG4gIFx0XHRcdC8vIE5vdCB5ZXQgc3RhcnRlZCBjb21wYXJpbmcgdGhpcyBwYWlyXG4gIFx0XHRcdHBhaXJzLnB1c2goeyBhOiBhLCBiOiBiIH0pO1xuICBcdFx0fVxuICBcdFx0cmV0dXJuIHRydWU7XG4gIFx0fVxuXG4gIFx0dmFyIGNhbGxiYWNrcyA9IHtcbiAgXHRcdFwic3RyaW5nXCI6IHVzZVN0cmljdEVxdWFsaXR5LFxuICBcdFx0XCJib29sZWFuXCI6IHVzZVN0cmljdEVxdWFsaXR5LFxuICBcdFx0XCJudW1iZXJcIjogdXNlU3RyaWN0RXF1YWxpdHksXG4gIFx0XHRcIm51bGxcIjogdXNlU3RyaWN0RXF1YWxpdHksXG4gIFx0XHRcInVuZGVmaW5lZFwiOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgXHRcdFwic3ltYm9sXCI6IHVzZVN0cmljdEVxdWFsaXR5LFxuICBcdFx0XCJkYXRlXCI6IHVzZVN0cmljdEVxdWFsaXR5LFxuXG4gIFx0XHRcIm5hblwiOiBmdW5jdGlvbiBuYW4oKSB7XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fSxcblxuICBcdFx0XCJyZWdleHBcIjogZnVuY3Rpb24gcmVnZXhwKGEsIGIpIHtcbiAgXHRcdFx0cmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJlxuXG4gIFx0XHRcdC8vIEluY2x1ZGUgZmxhZ3MgaW4gdGhlIGNvbXBhcmlzb25cbiAgXHRcdFx0Z2V0UmVnRXhwRmxhZ3MoYSkgPT09IGdldFJlZ0V4cEZsYWdzKGIpO1xuICBcdFx0fSxcblxuICBcdFx0Ly8gYWJvcnQgKGlkZW50aWNhbCByZWZlcmVuY2VzIC8gaW5zdGFuY2UgbWV0aG9kcyB3ZXJlIHNraXBwZWQgZWFybGllcilcbiAgXHRcdFwiZnVuY3Rpb25cIjogZnVuY3Rpb24gX2Z1bmN0aW9uKCkge1xuICBcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHR9LFxuXG4gIFx0XHRcImFycmF5XCI6IGZ1bmN0aW9uIGFycmF5KGEsIGIpIHtcbiAgXHRcdFx0dmFyIGksIGxlbjtcblxuICBcdFx0XHRsZW4gPSBhLmxlbmd0aDtcbiAgXHRcdFx0aWYgKGxlbiAhPT0gYi5sZW5ndGgpIHtcblxuICBcdFx0XHRcdC8vIFNhZmUgYW5kIGZhc3RlclxuICBcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXG4gIFx0XHRcdFx0Ly8gQ29tcGFyZSBub24tY29udGFpbmVyczsgcXVldWUgbm9uLXJlZmVyZW5jZS1lcXVhbCBjb250YWluZXJzXG4gIFx0XHRcdFx0aWYgKCFicmVhZHRoRmlyc3RDb21wYXJlQ2hpbGQoYVtpXSwgYltpXSkpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9LFxuXG4gIFx0XHQvLyBEZWZpbmUgc2V0cyBhIGFuZCBiIHRvIGJlIGVxdWl2YWxlbnQgaWYgZm9yIGVhY2ggZWxlbWVudCBhVmFsIGluIGEsIHRoZXJlXG4gIFx0XHQvLyBpcyBzb21lIGVsZW1lbnQgYlZhbCBpbiBiIHN1Y2ggdGhhdCBhVmFsIGFuZCBiVmFsIGFyZSBlcXVpdmFsZW50LiBFbGVtZW50XG4gIFx0XHQvLyByZXBldGl0aW9ucyBhcmUgbm90IGNvdW50ZWQsIHNvIHRoZXNlIGFyZSBlcXVpdmFsZW50OlxuICBcdFx0Ly8gYSA9IG5ldyBTZXQoIFsge30sIFtdLCBbXSBdICk7XG4gIFx0XHQvLyBiID0gbmV3IFNldCggWyB7fSwge30sIFtdIF0gKTtcbiAgXHRcdFwic2V0XCI6IGZ1bmN0aW9uIHNldCQkMShhLCBiKSB7XG4gIFx0XHRcdHZhciBpbm5lckVxLFxuICBcdFx0XHQgICAgb3V0ZXJFcSA9IHRydWU7XG5cbiAgXHRcdFx0aWYgKGEuc2l6ZSAhPT0gYi5zaXplKSB7XG5cbiAgXHRcdFx0XHQvLyBUaGlzIG9wdGltaXphdGlvbiBoYXMgY2VydGFpbiBxdWlya3MgYmVjYXVzZSBvZiB0aGUgbGFjayBvZlxuICBcdFx0XHRcdC8vIHJlcGV0aXRpb24gY291bnRpbmcuIEZvciBpbnN0YW5jZSwgYWRkaW5nIHRoZSBzYW1lXG4gIFx0XHRcdFx0Ly8gKHJlZmVyZW5jZS1pZGVudGljYWwpIGVsZW1lbnQgdG8gdHdvIGVxdWl2YWxlbnQgc2V0cyBjYW5cbiAgXHRcdFx0XHQvLyBtYWtlIHRoZW0gbm9uLWVxdWl2YWxlbnQuXG4gIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0YS5mb3JFYWNoKGZ1bmN0aW9uIChhVmFsKSB7XG5cbiAgXHRcdFx0XHQvLyBTaG9ydC1jaXJjdWl0IGlmIHRoZSByZXN1bHQgaXMgYWxyZWFkeSBrbm93bi4gKFVzaW5nIGZvci4uLm9mXG4gIFx0XHRcdFx0Ly8gd2l0aCBhIGJyZWFrIGNsYXVzZSB3b3VsZCBiZSBjbGVhbmVyIGhlcmUsIGJ1dCBpdCB3b3VsZCBjYXVzZVxuICBcdFx0XHRcdC8vIGEgc3ludGF4IGVycm9yIG9uIG9sZGVyIEphdmFzY3JpcHQgaW1wbGVtZW50YXRpb25zIGV2ZW4gaWZcbiAgXHRcdFx0XHQvLyBTZXQgaXMgdW51c2VkKVxuICBcdFx0XHRcdGlmICghb3V0ZXJFcSkge1xuICBcdFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdGlubmVyRXEgPSBmYWxzZTtcblxuICBcdFx0XHRcdGIuZm9yRWFjaChmdW5jdGlvbiAoYlZhbCkge1xuICBcdFx0XHRcdFx0dmFyIHBhcmVudFBhaXJzO1xuXG4gIFx0XHRcdFx0XHQvLyBMaWtld2lzZSwgc2hvcnQtY2lyY3VpdCBpZiB0aGUgcmVzdWx0IGlzIGFscmVhZHkga25vd25cbiAgXHRcdFx0XHRcdGlmIChpbm5lckVxKSB7XG4gIFx0XHRcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0XHRcdH1cblxuICBcdFx0XHRcdFx0Ly8gU3dhcCBvdXQgdGhlIGdsb2JhbCBwYWlycyBsaXN0LCBhcyB0aGUgbmVzdGVkIGNhbGwgdG9cbiAgXHRcdFx0XHRcdC8vIGlubmVyRXF1aXYgd2lsbCBjbG9iYmVyIGl0cyBjb250ZW50c1xuICBcdFx0XHRcdFx0cGFyZW50UGFpcnMgPSBwYWlycztcbiAgXHRcdFx0XHRcdGlmIChpbm5lckVxdWl2KGJWYWwsIGFWYWwpKSB7XG4gIFx0XHRcdFx0XHRcdGlubmVyRXEgPSB0cnVlO1xuICBcdFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0XHQvLyBSZXBsYWNlIHRoZSBnbG9iYWwgcGFpcnMgbGlzdFxuICBcdFx0XHRcdFx0cGFpcnMgPSBwYXJlbnRQYWlycztcbiAgXHRcdFx0XHR9KTtcblxuICBcdFx0XHRcdGlmICghaW5uZXJFcSkge1xuICBcdFx0XHRcdFx0b3V0ZXJFcSA9IGZhbHNlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fSk7XG5cbiAgXHRcdFx0cmV0dXJuIG91dGVyRXE7XG4gIFx0XHR9LFxuXG4gIFx0XHQvLyBEZWZpbmUgbWFwcyBhIGFuZCBiIHRvIGJlIGVxdWl2YWxlbnQgaWYgZm9yIGVhY2gga2V5LXZhbHVlIHBhaXIgKGFLZXksIGFWYWwpXG4gIFx0XHQvLyBpbiBhLCB0aGVyZSBpcyBzb21lIGtleS12YWx1ZSBwYWlyIChiS2V5LCBiVmFsKSBpbiBiIHN1Y2ggdGhhdFxuICBcdFx0Ly8gWyBhS2V5LCBhVmFsIF0gYW5kIFsgYktleSwgYlZhbCBdIGFyZSBlcXVpdmFsZW50LiBLZXkgcmVwZXRpdGlvbnMgYXJlIG5vdFxuICBcdFx0Ly8gY291bnRlZCwgc28gdGhlc2UgYXJlIGVxdWl2YWxlbnQ6XG4gIFx0XHQvLyBhID0gbmV3IE1hcCggWyBbIHt9LCAxIF0sIFsge30sIDEgXSwgWyBbXSwgMSBdIF0gKTtcbiAgXHRcdC8vIGIgPSBuZXcgTWFwKCBbIFsge30sIDEgXSwgWyBbXSwgMSBdLCBbIFtdLCAxIF0gXSApO1xuICBcdFx0XCJtYXBcIjogZnVuY3Rpb24gbWFwKGEsIGIpIHtcbiAgXHRcdFx0dmFyIGlubmVyRXEsXG4gIFx0XHRcdCAgICBvdXRlckVxID0gdHJ1ZTtcblxuICBcdFx0XHRpZiAoYS5zaXplICE9PSBiLnNpemUpIHtcblxuICBcdFx0XHRcdC8vIFRoaXMgb3B0aW1pemF0aW9uIGhhcyBjZXJ0YWluIHF1aXJrcyBiZWNhdXNlIG9mIHRoZSBsYWNrIG9mXG4gIFx0XHRcdFx0Ly8gcmVwZXRpdGlvbiBjb3VudGluZy4gRm9yIGluc3RhbmNlLCBhZGRpbmcgdGhlIHNhbWVcbiAgXHRcdFx0XHQvLyAocmVmZXJlbmNlLWlkZW50aWNhbCkga2V5LXZhbHVlIHBhaXIgdG8gdHdvIGVxdWl2YWxlbnQgbWFwc1xuICBcdFx0XHRcdC8vIGNhbiBtYWtlIHRoZW0gbm9uLWVxdWl2YWxlbnQuXG4gIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0YS5mb3JFYWNoKGZ1bmN0aW9uIChhVmFsLCBhS2V5KSB7XG5cbiAgXHRcdFx0XHQvLyBTaG9ydC1jaXJjdWl0IGlmIHRoZSByZXN1bHQgaXMgYWxyZWFkeSBrbm93bi4gKFVzaW5nIGZvci4uLm9mXG4gIFx0XHRcdFx0Ly8gd2l0aCBhIGJyZWFrIGNsYXVzZSB3b3VsZCBiZSBjbGVhbmVyIGhlcmUsIGJ1dCBpdCB3b3VsZCBjYXVzZVxuICBcdFx0XHRcdC8vIGEgc3ludGF4IGVycm9yIG9uIG9sZGVyIEphdmFzY3JpcHQgaW1wbGVtZW50YXRpb25zIGV2ZW4gaWZcbiAgXHRcdFx0XHQvLyBNYXAgaXMgdW51c2VkKVxuICBcdFx0XHRcdGlmICghb3V0ZXJFcSkge1xuICBcdFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdGlubmVyRXEgPSBmYWxzZTtcblxuICBcdFx0XHRcdGIuZm9yRWFjaChmdW5jdGlvbiAoYlZhbCwgYktleSkge1xuICBcdFx0XHRcdFx0dmFyIHBhcmVudFBhaXJzO1xuXG4gIFx0XHRcdFx0XHQvLyBMaWtld2lzZSwgc2hvcnQtY2lyY3VpdCBpZiB0aGUgcmVzdWx0IGlzIGFscmVhZHkga25vd25cbiAgXHRcdFx0XHRcdGlmIChpbm5lckVxKSB7XG4gIFx0XHRcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0XHRcdH1cblxuICBcdFx0XHRcdFx0Ly8gU3dhcCBvdXQgdGhlIGdsb2JhbCBwYWlycyBsaXN0LCBhcyB0aGUgbmVzdGVkIGNhbGwgdG9cbiAgXHRcdFx0XHRcdC8vIGlubmVyRXF1aXYgd2lsbCBjbG9iYmVyIGl0cyBjb250ZW50c1xuICBcdFx0XHRcdFx0cGFyZW50UGFpcnMgPSBwYWlycztcbiAgXHRcdFx0XHRcdGlmIChpbm5lckVxdWl2KFtiVmFsLCBiS2V5XSwgW2FWYWwsIGFLZXldKSkge1xuICBcdFx0XHRcdFx0XHRpbm5lckVxID0gdHJ1ZTtcbiAgXHRcdFx0XHRcdH1cblxuICBcdFx0XHRcdFx0Ly8gUmVwbGFjZSB0aGUgZ2xvYmFsIHBhaXJzIGxpc3RcbiAgXHRcdFx0XHRcdHBhaXJzID0gcGFyZW50UGFpcnM7XG4gIFx0XHRcdFx0fSk7XG5cbiAgXHRcdFx0XHRpZiAoIWlubmVyRXEpIHtcbiAgXHRcdFx0XHRcdG91dGVyRXEgPSBmYWxzZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH0pO1xuXG4gIFx0XHRcdHJldHVybiBvdXRlckVxO1xuICBcdFx0fSxcblxuICBcdFx0XCJvYmplY3RcIjogZnVuY3Rpb24gb2JqZWN0KGEsIGIpIHtcbiAgXHRcdFx0dmFyIGksXG4gIFx0XHRcdCAgICBhUHJvcGVydGllcyA9IFtdLFxuICBcdFx0XHQgICAgYlByb3BlcnRpZXMgPSBbXTtcblxuICBcdFx0XHRpZiAoY29tcGFyZUNvbnN0cnVjdG9ycyhhLCBiKSA9PT0gZmFsc2UpIHtcbiAgXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHRcdH1cblxuICBcdFx0XHQvLyBCZSBzdHJpY3Q6IGRvbid0IGVuc3VyZSBoYXNPd25Qcm9wZXJ0eSBhbmQgZ28gZGVlcFxuICBcdFx0XHRmb3IgKGkgaW4gYSkge1xuXG4gIFx0XHRcdFx0Ly8gQ29sbGVjdCBhJ3MgcHJvcGVydGllc1xuICBcdFx0XHRcdGFQcm9wZXJ0aWVzLnB1c2goaSk7XG5cbiAgXHRcdFx0XHQvLyBTa2lwIE9PUCBtZXRob2RzIHRoYXQgbG9vayB0aGUgc2FtZVxuICBcdFx0XHRcdGlmIChhLmNvbnN0cnVjdG9yICE9PSBPYmplY3QgJiYgdHlwZW9mIGEuY29uc3RydWN0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGFbaV0gPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYltpXSA9PT0gXCJmdW5jdGlvblwiICYmIGFbaV0udG9TdHJpbmcoKSA9PT0gYltpXS50b1N0cmluZygpKSB7XG4gIFx0XHRcdFx0XHRjb250aW51ZTtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHQvLyBDb21wYXJlIG5vbi1jb250YWluZXJzOyBxdWV1ZSBub24tcmVmZXJlbmNlLWVxdWFsIGNvbnRhaW5lcnNcbiAgXHRcdFx0XHRpZiAoIWJyZWFkdGhGaXJzdENvbXBhcmVDaGlsZChhW2ldLCBiW2ldKSkge1xuICBcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGZvciAoaSBpbiBiKSB7XG5cbiAgXHRcdFx0XHQvLyBDb2xsZWN0IGIncyBwcm9wZXJ0aWVzXG4gIFx0XHRcdFx0YlByb3BlcnRpZXMucHVzaChpKTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdC8vIEVuc3VyZXMgaWRlbnRpY2FsIHByb3BlcnRpZXMgbmFtZVxuICBcdFx0XHRyZXR1cm4gdHlwZUVxdWl2KGFQcm9wZXJ0aWVzLnNvcnQoKSwgYlByb3BlcnRpZXMuc29ydCgpKTtcbiAgXHRcdH1cbiAgXHR9O1xuXG4gIFx0ZnVuY3Rpb24gdHlwZUVxdWl2KGEsIGIpIHtcbiAgXHRcdHZhciB0eXBlID0gb2JqZWN0VHlwZShhKTtcblxuICBcdFx0Ly8gQ2FsbGJhY2tzIGZvciBjb250YWluZXJzIHdpbGwgYXBwZW5kIHRvIHRoZSBwYWlycyBxdWV1ZSB0byBhY2hpZXZlIGJyZWFkdGgtZmlyc3RcbiAgXHRcdC8vIHNlYXJjaCBvcmRlci4gVGhlIHBhaXJzIHF1ZXVlIGlzIGFsc28gdXNlZCB0byBhdm9pZCByZXByb2Nlc3NpbmcgYW55IHBhaXIgb2ZcbiAgXHRcdC8vIGNvbnRhaW5lcnMgdGhhdCBhcmUgcmVmZXJlbmNlLWVxdWFsIHRvIGEgcHJldmlvdXNseSB2aXNpdGVkIHBhaXIgKGEgc3BlY2lhbCBjYXNlXG4gIFx0XHQvLyB0aGlzIGJlaW5nIHJlY3Vyc2lvbiBkZXRlY3Rpb24pLlxuICBcdFx0Ly9cbiAgXHRcdC8vIEJlY2F1c2Ugb2YgdGhpcyBhcHByb2FjaCwgb25jZSB0eXBlRXF1aXYgcmV0dXJucyBhIGZhbHNlIHZhbHVlLCBpdCBzaG91bGQgbm90IGJlXG4gIFx0XHQvLyBjYWxsZWQgYWdhaW4gd2l0aG91dCBjbGVhcmluZyB0aGUgcGFpciBxdWV1ZSBlbHNlIGl0IG1heSB3cm9uZ2x5IHJlcG9ydCBhIHZpc2l0ZWRcbiAgXHRcdC8vIHBhaXIgYXMgYmVpbmcgZXF1aXZhbGVudC5cbiAgXHRcdHJldHVybiBvYmplY3RUeXBlKGIpID09PSB0eXBlICYmIGNhbGxiYWNrc1t0eXBlXShhLCBiKTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBpbm5lckVxdWl2KGEsIGIpIHtcbiAgXHRcdHZhciBpLCBwYWlyO1xuXG4gIFx0XHQvLyBXZSdyZSBkb25lIHdoZW4gdGhlcmUncyBub3RoaW5nIG1vcmUgdG8gY29tcGFyZVxuICBcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBDbGVhciB0aGUgZ2xvYmFsIHBhaXIgcXVldWUgYW5kIGFkZCB0aGUgdG9wLWxldmVsIHZhbHVlcyBiZWluZyBjb21wYXJlZFxuICBcdFx0cGFpcnMgPSBbeyBhOiBhLCBiOiBiIH1dO1xuXG4gIFx0XHRmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0cGFpciA9IHBhaXJzW2ldO1xuXG4gIFx0XHRcdC8vIFBlcmZvcm0gdHlwZS1zcGVjaWZpYyBjb21wYXJpc29uIG9uIGFueSBwYWlycyB0aGF0IGFyZSBub3Qgc3RyaWN0bHlcbiAgXHRcdFx0Ly8gZXF1YWwuIEZvciBjb250YWluZXIgdHlwZXMsIHRoYXQgY29tcGFyaXNvbiB3aWxsIHBvc3Rwb25lIGNvbXBhcmlzb25cbiAgXHRcdFx0Ly8gb2YgYW55IHN1Yi1jb250YWluZXIgcGFpciB0byB0aGUgZW5kIG9mIHRoZSBwYWlyIHF1ZXVlLiBUaGlzIGdpdmVzXG4gIFx0XHRcdC8vIGJyZWFkdGgtZmlyc3Qgc2VhcmNoIG9yZGVyLiBJdCBhbHNvIGF2b2lkcyB0aGUgcmVwcm9jZXNzaW5nIG9mXG4gIFx0XHRcdC8vIHJlZmVyZW5jZS1lcXVhbCBzaWJsaW5ncywgY291c2lucyBldGMsIHdoaWNoIGNhbiBoYXZlIGEgc2lnbmlmaWNhbnQgc3BlZWRcbiAgXHRcdFx0Ly8gaW1wYWN0IHdoZW4gY29tcGFyaW5nIGEgY29udGFpbmVyIG9mIHNtYWxsIG9iamVjdHMgZWFjaCBvZiB3aGljaCBoYXMgYVxuICBcdFx0XHQvLyByZWZlcmVuY2UgdG8gdGhlIHNhbWUgKHNpbmdsZXRvbikgbGFyZ2Ugb2JqZWN0LlxuICBcdFx0XHRpZiAocGFpci5hICE9PSBwYWlyLmIgJiYgIXR5cGVFcXVpdihwYWlyLmEsIHBhaXIuYikpIHtcbiAgXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gLi4uYWNyb3NzIGFsbCBjb25zZWN1dGl2ZSBhcmd1bWVudCBwYWlyc1xuICBcdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDIgfHwgaW5uZXJFcXVpdi5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICBcdH1cblxuICBcdHJldHVybiBmdW5jdGlvbiAoKSB7XG4gIFx0XHR2YXIgcmVzdWx0ID0gaW5uZXJFcXVpdi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG5cbiAgXHRcdC8vIFJlbGVhc2UgYW55IHJldGFpbmVkIG9iamVjdHNcbiAgXHRcdHBhaXJzLmxlbmd0aCA9IDA7XG4gIFx0XHRyZXR1cm4gcmVzdWx0O1xuICBcdH07XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIENvbmZpZyBvYmplY3Q6IE1haW50YWluIGludGVybmFsIHN0YXRlXG4gICAqIExhdGVyIGV4cG9zZWQgYXMgUVVuaXQuY29uZmlnXG4gICAqIGBjb25maWdgIGluaXRpYWxpemVkIGF0IHRvcCBvZiBzY29wZVxuICAgKi9cbiAgdmFyIGNvbmZpZyA9IHtcblxuICBcdC8vIFRoZSBxdWV1ZSBvZiB0ZXN0cyB0byBydW5cbiAgXHRxdWV1ZTogW10sXG5cbiAgXHQvLyBCbG9jayB1bnRpbCBkb2N1bWVudCByZWFkeVxuICBcdGJsb2NraW5nOiB0cnVlLFxuXG4gIFx0Ly8gQnkgZGVmYXVsdCwgcnVuIHByZXZpb3VzbHkgZmFpbGVkIHRlc3RzIGZpcnN0XG4gIFx0Ly8gdmVyeSB1c2VmdWwgaW4gY29tYmluYXRpb24gd2l0aCBcIkhpZGUgcGFzc2VkIHRlc3RzXCIgY2hlY2tlZFxuICBcdHJlb3JkZXI6IHRydWUsXG5cbiAgXHQvLyBCeSBkZWZhdWx0LCBtb2RpZnkgZG9jdW1lbnQudGl0bGUgd2hlbiBzdWl0ZSBpcyBkb25lXG4gIFx0YWx0ZXJ0aXRsZTogdHJ1ZSxcblxuICBcdC8vIEhUTUwgUmVwb3J0ZXI6IGNvbGxhcHNlIGV2ZXJ5IHRlc3QgZXhjZXB0IHRoZSBmaXJzdCBmYWlsaW5nIHRlc3RcbiAgXHQvLyBJZiBmYWxzZSwgYWxsIGZhaWxpbmcgdGVzdHMgd2lsbCBiZSBleHBhbmRlZFxuICBcdGNvbGxhcHNlOiB0cnVlLFxuXG4gIFx0Ly8gQnkgZGVmYXVsdCwgc2Nyb2xsIHRvIHRvcCBvZiB0aGUgcGFnZSB3aGVuIHN1aXRlIGlzIGRvbmVcbiAgXHRzY3JvbGx0b3A6IHRydWUsXG5cbiAgXHQvLyBEZXB0aCB1cC10byB3aGljaCBvYmplY3Qgd2lsbCBiZSBkdW1wZWRcbiAgXHRtYXhEZXB0aDogNSxcblxuICBcdC8vIFdoZW4gZW5hYmxlZCwgYWxsIHRlc3RzIG11c3QgY2FsbCBleHBlY3QoKVxuICBcdHJlcXVpcmVFeHBlY3RzOiBmYWxzZSxcblxuICBcdC8vIFBsYWNlaG9sZGVyIGZvciB1c2VyLWNvbmZpZ3VyYWJsZSBmb3JtLWV4cG9zZWQgVVJMIHBhcmFtZXRlcnNcbiAgXHR1cmxDb25maWc6IFtdLFxuXG4gIFx0Ly8gU2V0IG9mIGFsbCBtb2R1bGVzLlxuICBcdG1vZHVsZXM6IFtdLFxuXG4gIFx0Ly8gVGhlIGZpcnN0IHVubmFtZWQgbW9kdWxlXG4gIFx0Y3VycmVudE1vZHVsZToge1xuICBcdFx0bmFtZTogXCJcIixcbiAgXHRcdHRlc3RzOiBbXSxcbiAgXHRcdGNoaWxkTW9kdWxlczogW10sXG4gIFx0XHR0ZXN0c1J1bjogMCxcbiAgXHRcdHVuc2tpcHBlZFRlc3RzUnVuOiAwLFxuICBcdFx0aG9va3M6IHtcbiAgXHRcdFx0YmVmb3JlOiBbXSxcbiAgXHRcdFx0YmVmb3JlRWFjaDogW10sXG4gIFx0XHRcdGFmdGVyRWFjaDogW10sXG4gIFx0XHRcdGFmdGVyOiBbXVxuICBcdFx0fVxuICBcdH0sXG5cbiAgXHRjYWxsYmFja3M6IHt9LFxuXG4gIFx0Ly8gVGhlIHN0b3JhZ2UgbW9kdWxlIHRvIHVzZSBmb3IgcmVvcmRlcmluZyB0ZXN0c1xuICBcdHN0b3JhZ2U6IGxvY2FsU2Vzc2lvblN0b3JhZ2VcbiAgfTtcblxuICAvLyB0YWtlIGEgcHJlZGVmaW5lZCBRVW5pdC5jb25maWcgYW5kIGV4dGVuZCB0aGUgZGVmYXVsdHNcbiAgdmFyIGdsb2JhbENvbmZpZyA9IHdpbmRvdyQxICYmIHdpbmRvdyQxLlFVbml0ICYmIHdpbmRvdyQxLlFVbml0LmNvbmZpZztcblxuICAvLyBvbmx5IGV4dGVuZCB0aGUgZ2xvYmFsIGNvbmZpZyBpZiB0aGVyZSBpcyBubyBRVW5pdCBvdmVybG9hZFxuICBpZiAod2luZG93JDEgJiYgd2luZG93JDEuUVVuaXQgJiYgIXdpbmRvdyQxLlFVbml0LnZlcnNpb24pIHtcbiAgXHRleHRlbmQoY29uZmlnLCBnbG9iYWxDb25maWcpO1xuICB9XG5cbiAgLy8gUHVzaCBhIGxvb3NlIHVubmFtZWQgbW9kdWxlIHRvIHRoZSBtb2R1bGVzIGNvbGxlY3Rpb25cbiAgY29uZmlnLm1vZHVsZXMucHVzaChjb25maWcuY3VycmVudE1vZHVsZSk7XG5cbiAgLy8gQmFzZWQgb24ganNEdW1wIGJ5IEFyaWVsIEZsZXNsZXJcbiAgLy8gaHR0cDovL2ZsZXNsZXIuYmxvZ3Nwb3QuY29tLzIwMDgvMDUvanNkdW1wLXByZXR0eS1kdW1wLW9mLWFueS1qYXZhc2NyaXB0Lmh0bWxcbiAgdmFyIGR1bXAgPSAoZnVuY3Rpb24gKCkge1xuICBcdGZ1bmN0aW9uIHF1b3RlKHN0cikge1xuICBcdFx0cmV0dXJuIFwiXFxcIlwiICsgc3RyLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxcXC9nLCBcIlxcXFxcXFxcXCIpLnJlcGxhY2UoL1wiL2csIFwiXFxcXFxcXCJcIikgKyBcIlxcXCJcIjtcbiAgXHR9XG4gIFx0ZnVuY3Rpb24gbGl0ZXJhbChvKSB7XG4gIFx0XHRyZXR1cm4gbyArIFwiXCI7XG4gIFx0fVxuICBcdGZ1bmN0aW9uIGpvaW4ocHJlLCBhcnIsIHBvc3QpIHtcbiAgXHRcdHZhciBzID0gZHVtcC5zZXBhcmF0b3IoKSxcbiAgXHRcdCAgICBiYXNlID0gZHVtcC5pbmRlbnQoKSxcbiAgXHRcdCAgICBpbm5lciA9IGR1bXAuaW5kZW50KDEpO1xuICBcdFx0aWYgKGFyci5qb2luKSB7XG4gIFx0XHRcdGFyciA9IGFyci5qb2luKFwiLFwiICsgcyArIGlubmVyKTtcbiAgXHRcdH1cbiAgXHRcdGlmICghYXJyKSB7XG4gIFx0XHRcdHJldHVybiBwcmUgKyBwb3N0O1xuICBcdFx0fVxuICBcdFx0cmV0dXJuIFtwcmUsIGlubmVyICsgYXJyLCBiYXNlICsgcG9zdF0uam9pbihzKTtcbiAgXHR9XG4gIFx0ZnVuY3Rpb24gYXJyYXkoYXJyLCBzdGFjaykge1xuICBcdFx0dmFyIGkgPSBhcnIubGVuZ3RoLFxuICBcdFx0ICAgIHJldCA9IG5ldyBBcnJheShpKTtcblxuICBcdFx0aWYgKGR1bXAubWF4RGVwdGggJiYgZHVtcC5kZXB0aCA+IGR1bXAubWF4RGVwdGgpIHtcbiAgXHRcdFx0cmV0dXJuIFwiW29iamVjdCBBcnJheV1cIjtcbiAgXHRcdH1cblxuICBcdFx0dGhpcy51cCgpO1xuICBcdFx0d2hpbGUgKGktLSkge1xuICBcdFx0XHRyZXRbaV0gPSB0aGlzLnBhcnNlKGFycltpXSwgdW5kZWZpbmVkLCBzdGFjayk7XG4gIFx0XHR9XG4gIFx0XHR0aGlzLmRvd24oKTtcbiAgXHRcdHJldHVybiBqb2luKFwiW1wiLCByZXQsIFwiXVwiKTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICBcdFx0cmV0dXJuIChcblxuICBcdFx0XHQvL05hdGl2ZSBBcnJheXNcbiAgXHRcdFx0dG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCIgfHxcblxuICBcdFx0XHQvLyBOb2RlTGlzdCBvYmplY3RzXG4gIFx0XHRcdHR5cGVvZiBvYmoubGVuZ3RoID09PSBcIm51bWJlclwiICYmIG9iai5pdGVtICE9PSB1bmRlZmluZWQgJiYgKG9iai5sZW5ndGggPyBvYmouaXRlbSgwKSA9PT0gb2JqWzBdIDogb2JqLml0ZW0oMCkgPT09IG51bGwgJiYgb2JqWzBdID09PSB1bmRlZmluZWQpXG4gIFx0XHQpO1xuICBcdH1cblxuICBcdHZhciByZU5hbWUgPSAvXmZ1bmN0aW9uIChcXHcrKS8sXG4gIFx0ICAgIGR1bXAgPSB7XG5cbiAgXHRcdC8vIFRoZSBvYmpUeXBlIGlzIHVzZWQgbW9zdGx5IGludGVybmFsbHksIHlvdSBjYW4gZml4IGEgKGN1c3RvbSkgdHlwZSBpbiBhZHZhbmNlXG4gIFx0XHRwYXJzZTogZnVuY3Rpb24gcGFyc2Uob2JqLCBvYmpUeXBlLCBzdGFjaykge1xuICBcdFx0XHRzdGFjayA9IHN0YWNrIHx8IFtdO1xuICBcdFx0XHR2YXIgcmVzLFxuICBcdFx0XHQgICAgcGFyc2VyLFxuICBcdFx0XHQgICAgcGFyc2VyVHlwZSxcbiAgXHRcdFx0ICAgIG9iakluZGV4ID0gc3RhY2suaW5kZXhPZihvYmopO1xuXG4gIFx0XHRcdGlmIChvYmpJbmRleCAhPT0gLTEpIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJyZWN1cnNpb24oXCIgKyAob2JqSW5kZXggLSBzdGFjay5sZW5ndGgpICsgXCIpXCI7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRvYmpUeXBlID0gb2JqVHlwZSB8fCB0aGlzLnR5cGVPZihvYmopO1xuICBcdFx0XHRwYXJzZXIgPSB0aGlzLnBhcnNlcnNbb2JqVHlwZV07XG4gIFx0XHRcdHBhcnNlclR5cGUgPSB0eXBlb2YgcGFyc2VyID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocGFyc2VyKTtcblxuICBcdFx0XHRpZiAocGFyc2VyVHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHRcdFx0c3RhY2sucHVzaChvYmopO1xuICBcdFx0XHRcdHJlcyA9IHBhcnNlci5jYWxsKHRoaXMsIG9iaiwgc3RhY2spO1xuICBcdFx0XHRcdHN0YWNrLnBvcCgpO1xuICBcdFx0XHRcdHJldHVybiByZXM7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cmV0dXJuIHBhcnNlclR5cGUgPT09IFwic3RyaW5nXCIgPyBwYXJzZXIgOiB0aGlzLnBhcnNlcnMuZXJyb3I7XG4gIFx0XHR9LFxuICBcdFx0dHlwZU9mOiBmdW5jdGlvbiB0eXBlT2Yob2JqKSB7XG4gIFx0XHRcdHZhciB0eXBlO1xuXG4gIFx0XHRcdGlmIChvYmogPT09IG51bGwpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJudWxsXCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBcdFx0XHRcdHR5cGUgPSBcInVuZGVmaW5lZFwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKGlzKFwicmVnZXhwXCIsIG9iaikpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJyZWdleHBcIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChpcyhcImRhdGVcIiwgb2JqKSkge1xuICBcdFx0XHRcdHR5cGUgPSBcImRhdGVcIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChpcyhcImZ1bmN0aW9uXCIsIG9iaikpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJmdW5jdGlvblwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKG9iai5zZXRJbnRlcnZhbCAhPT0gdW5kZWZpbmVkICYmIG9iai5kb2N1bWVudCAhPT0gdW5kZWZpbmVkICYmIG9iai5ub2RlVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwid2luZG93XCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAob2JqLm5vZGVUeXBlID09PSA5KSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwiZG9jdW1lbnRcIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChvYmoubm9kZVR5cGUpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJub2RlXCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwiYXJyYXlcIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChvYmouY29uc3RydWN0b3IgPT09IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcikge1xuICBcdFx0XHRcdHR5cGUgPSBcImVycm9yXCI7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0dHlwZSA9IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xuICBcdFx0XHR9XG4gIFx0XHRcdHJldHVybiB0eXBlO1xuICBcdFx0fSxcblxuICBcdFx0c2VwYXJhdG9yOiBmdW5jdGlvbiBzZXBhcmF0b3IoKSB7XG4gIFx0XHRcdGlmICh0aGlzLm11bHRpbGluZSkge1xuICBcdFx0XHRcdHJldHVybiB0aGlzLkhUTUwgPyBcIjxiciAvPlwiIDogXCJcXG5cIjtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRyZXR1cm4gdGhpcy5IVE1MID8gXCImIzE2MDtcIiA6IFwiIFwiO1xuICBcdFx0XHR9XG4gIFx0XHR9LFxuXG4gIFx0XHQvLyBFeHRyYSBjYW4gYmUgYSBudW1iZXIsIHNob3J0Y3V0IGZvciBpbmNyZWFzaW5nLWNhbGxpbmctZGVjcmVhc2luZ1xuICBcdFx0aW5kZW50OiBmdW5jdGlvbiBpbmRlbnQoZXh0cmEpIHtcbiAgXHRcdFx0aWYgKCF0aGlzLm11bHRpbGluZSkge1xuICBcdFx0XHRcdHJldHVybiBcIlwiO1xuICBcdFx0XHR9XG4gIFx0XHRcdHZhciBjaHIgPSB0aGlzLmluZGVudENoYXI7XG4gIFx0XHRcdGlmICh0aGlzLkhUTUwpIHtcbiAgXHRcdFx0XHRjaHIgPSBjaHIucmVwbGFjZSgvXFx0L2csIFwiICAgXCIpLnJlcGxhY2UoLyAvZywgXCImIzE2MDtcIik7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cmV0dXJuIG5ldyBBcnJheSh0aGlzLmRlcHRoICsgKGV4dHJhIHx8IDApKS5qb2luKGNocik7XG4gIFx0XHR9LFxuICBcdFx0dXA6IGZ1bmN0aW9uIHVwKGEpIHtcbiAgXHRcdFx0dGhpcy5kZXB0aCArPSBhIHx8IDE7XG4gIFx0XHR9LFxuICBcdFx0ZG93bjogZnVuY3Rpb24gZG93bihhKSB7XG4gIFx0XHRcdHRoaXMuZGVwdGggLT0gYSB8fCAxO1xuICBcdFx0fSxcbiAgXHRcdHNldFBhcnNlcjogZnVuY3Rpb24gc2V0UGFyc2VyKG5hbWUsIHBhcnNlcikge1xuICBcdFx0XHR0aGlzLnBhcnNlcnNbbmFtZV0gPSBwYXJzZXI7XG4gIFx0XHR9LFxuXG4gIFx0XHQvLyBUaGUgbmV4dCAzIGFyZSBleHBvc2VkIHNvIHlvdSBjYW4gdXNlIHRoZW1cbiAgXHRcdHF1b3RlOiBxdW90ZSxcbiAgXHRcdGxpdGVyYWw6IGxpdGVyYWwsXG4gIFx0XHRqb2luOiBqb2luLFxuICBcdFx0ZGVwdGg6IDEsXG4gIFx0XHRtYXhEZXB0aDogY29uZmlnLm1heERlcHRoLFxuXG4gIFx0XHQvLyBUaGlzIGlzIHRoZSBsaXN0IG9mIHBhcnNlcnMsIHRvIG1vZGlmeSB0aGVtLCB1c2UgZHVtcC5zZXRQYXJzZXJcbiAgXHRcdHBhcnNlcnM6IHtcbiAgXHRcdFx0d2luZG93OiBcIltXaW5kb3ddXCIsXG4gIFx0XHRcdGRvY3VtZW50OiBcIltEb2N1bWVudF1cIixcbiAgXHRcdFx0ZXJyb3I6IGZ1bmN0aW9uIGVycm9yKF9lcnJvcikge1xuICBcdFx0XHRcdHJldHVybiBcIkVycm9yKFxcXCJcIiArIF9lcnJvci5tZXNzYWdlICsgXCJcXFwiKVwiO1xuICBcdFx0XHR9LFxuICBcdFx0XHR1bmtub3duOiBcIltVbmtub3duXVwiLFxuICBcdFx0XHRcIm51bGxcIjogXCJudWxsXCIsXG4gIFx0XHRcdFwidW5kZWZpbmVkXCI6IFwidW5kZWZpbmVkXCIsXG4gIFx0XHRcdFwiZnVuY3Rpb25cIjogZnVuY3Rpb24gX2Z1bmN0aW9uKGZuKSB7XG4gIFx0XHRcdFx0dmFyIHJldCA9IFwiZnVuY3Rpb25cIixcblxuXG4gIFx0XHRcdFx0Ly8gRnVuY3Rpb25zIG5ldmVyIGhhdmUgbmFtZSBpbiBJRVxuICBcdFx0XHRcdG5hbWUgPSBcIm5hbWVcIiBpbiBmbiA/IGZuLm5hbWUgOiAocmVOYW1lLmV4ZWMoZm4pIHx8IFtdKVsxXTtcblxuICBcdFx0XHRcdGlmIChuYW1lKSB7XG4gIFx0XHRcdFx0XHRyZXQgKz0gXCIgXCIgKyBuYW1lO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRyZXQgKz0gXCIoXCI7XG5cbiAgXHRcdFx0XHRyZXQgPSBbcmV0LCBkdW1wLnBhcnNlKGZuLCBcImZ1bmN0aW9uQXJnc1wiKSwgXCIpe1wiXS5qb2luKFwiXCIpO1xuICBcdFx0XHRcdHJldHVybiBqb2luKHJldCwgZHVtcC5wYXJzZShmbiwgXCJmdW5jdGlvbkNvZGVcIiksIFwifVwiKTtcbiAgXHRcdFx0fSxcbiAgXHRcdFx0YXJyYXk6IGFycmF5LFxuICBcdFx0XHRub2RlbGlzdDogYXJyYXksXG4gIFx0XHRcdFwiYXJndW1lbnRzXCI6IGFycmF5LFxuICBcdFx0XHRvYmplY3Q6IGZ1bmN0aW9uIG9iamVjdChtYXAsIHN0YWNrKSB7XG4gIFx0XHRcdFx0dmFyIGtleXMsXG4gIFx0XHRcdFx0ICAgIGtleSxcbiAgXHRcdFx0XHQgICAgdmFsLFxuICBcdFx0XHRcdCAgICBpLFxuICBcdFx0XHRcdCAgICBub25FbnVtZXJhYmxlUHJvcGVydGllcyxcbiAgXHRcdFx0XHQgICAgcmV0ID0gW107XG5cbiAgXHRcdFx0XHRpZiAoZHVtcC5tYXhEZXB0aCAmJiBkdW1wLmRlcHRoID4gZHVtcC5tYXhEZXB0aCkge1xuICBcdFx0XHRcdFx0cmV0dXJuIFwiW29iamVjdCBPYmplY3RdXCI7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0ZHVtcC51cCgpO1xuICBcdFx0XHRcdGtleXMgPSBbXTtcbiAgXHRcdFx0XHRmb3IgKGtleSBpbiBtYXApIHtcbiAgXHRcdFx0XHRcdGtleXMucHVzaChrZXkpO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdC8vIFNvbWUgcHJvcGVydGllcyBhcmUgbm90IGFsd2F5cyBlbnVtZXJhYmxlIG9uIEVycm9yIG9iamVjdHMuXG4gIFx0XHRcdFx0bm9uRW51bWVyYWJsZVByb3BlcnRpZXMgPSBbXCJtZXNzYWdlXCIsIFwibmFtZVwiXTtcbiAgXHRcdFx0XHRmb3IgKGkgaW4gbm9uRW51bWVyYWJsZVByb3BlcnRpZXMpIHtcbiAgXHRcdFx0XHRcdGtleSA9IG5vbkVudW1lcmFibGVQcm9wZXJ0aWVzW2ldO1xuICBcdFx0XHRcdFx0aWYgKGtleSBpbiBtYXAgJiYgIWluQXJyYXkoa2V5LCBrZXlzKSkge1xuICBcdFx0XHRcdFx0XHRrZXlzLnB1c2goa2V5KTtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0a2V5cy5zb3J0KCk7XG4gIFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0XHRcdGtleSA9IGtleXNbaV07XG4gIFx0XHRcdFx0XHR2YWwgPSBtYXBba2V5XTtcbiAgXHRcdFx0XHRcdHJldC5wdXNoKGR1bXAucGFyc2Uoa2V5LCBcImtleVwiKSArIFwiOiBcIiArIGR1bXAucGFyc2UodmFsLCB1bmRlZmluZWQsIHN0YWNrKSk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdGR1bXAuZG93bigpO1xuICBcdFx0XHRcdHJldHVybiBqb2luKFwie1wiLCByZXQsIFwifVwiKTtcbiAgXHRcdFx0fSxcbiAgXHRcdFx0bm9kZTogZnVuY3Rpb24gbm9kZShfbm9kZSkge1xuICBcdFx0XHRcdHZhciBsZW4sXG4gIFx0XHRcdFx0ICAgIGksXG4gIFx0XHRcdFx0ICAgIHZhbCxcbiAgXHRcdFx0XHQgICAgb3BlbiA9IGR1bXAuSFRNTCA/IFwiJmx0O1wiIDogXCI8XCIsXG4gIFx0XHRcdFx0ICAgIGNsb3NlID0gZHVtcC5IVE1MID8gXCImZ3Q7XCIgOiBcIj5cIixcbiAgXHRcdFx0XHQgICAgdGFnID0gX25vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcbiAgXHRcdFx0XHQgICAgcmV0ID0gb3BlbiArIHRhZyxcbiAgXHRcdFx0XHQgICAgYXR0cnMgPSBfbm9kZS5hdHRyaWJ1dGVzO1xuXG4gIFx0XHRcdFx0aWYgKGF0dHJzKSB7XG4gIFx0XHRcdFx0XHRmb3IgKGkgPSAwLCBsZW4gPSBhdHRycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICBcdFx0XHRcdFx0XHR2YWwgPSBhdHRyc1tpXS5ub2RlVmFsdWU7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gSUU2IGluY2x1ZGVzIGFsbCBhdHRyaWJ1dGVzIGluIC5hdHRyaWJ1dGVzLCBldmVuIG9uZXMgbm90IGV4cGxpY2l0bHlcbiAgXHRcdFx0XHRcdFx0Ly8gc2V0LiBUaG9zZSBoYXZlIHZhbHVlcyBsaWtlIHVuZGVmaW5lZCwgbnVsbCwgMCwgZmFsc2UsIFwiXCIgb3JcbiAgXHRcdFx0XHRcdFx0Ly8gXCJpbmhlcml0XCIuXG4gIFx0XHRcdFx0XHRcdGlmICh2YWwgJiYgdmFsICE9PSBcImluaGVyaXRcIikge1xuICBcdFx0XHRcdFx0XHRcdHJldCArPSBcIiBcIiArIGF0dHJzW2ldLm5vZGVOYW1lICsgXCI9XCIgKyBkdW1wLnBhcnNlKHZhbCwgXCJhdHRyaWJ1dGVcIik7XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0cmV0ICs9IGNsb3NlO1xuXG4gIFx0XHRcdFx0Ly8gU2hvdyBjb250ZW50IG9mIFRleHROb2RlIG9yIENEQVRBU2VjdGlvblxuICBcdFx0XHRcdGlmIChfbm9kZS5ub2RlVHlwZSA9PT0gMyB8fCBfbm9kZS5ub2RlVHlwZSA9PT0gNCkge1xuICBcdFx0XHRcdFx0cmV0ICs9IF9ub2RlLm5vZGVWYWx1ZTtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRyZXR1cm4gcmV0ICsgb3BlbiArIFwiL1wiICsgdGFnICsgY2xvc2U7XG4gIFx0XHRcdH0sXG5cbiAgXHRcdFx0Ly8gRnVuY3Rpb24gY2FsbHMgaXQgaW50ZXJuYWxseSwgaXQncyB0aGUgYXJndW1lbnRzIHBhcnQgb2YgdGhlIGZ1bmN0aW9uXG4gIFx0XHRcdGZ1bmN0aW9uQXJnczogZnVuY3Rpb24gZnVuY3Rpb25BcmdzKGZuKSB7XG4gIFx0XHRcdFx0dmFyIGFyZ3MsXG4gIFx0XHRcdFx0ICAgIGwgPSBmbi5sZW5ndGg7XG5cbiAgXHRcdFx0XHRpZiAoIWwpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBcIlwiO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdGFyZ3MgPSBuZXcgQXJyYXkobCk7XG4gIFx0XHRcdFx0d2hpbGUgKGwtLSkge1xuXG4gIFx0XHRcdFx0XHQvLyA5NyBpcyAnYSdcbiAgXHRcdFx0XHRcdGFyZ3NbbF0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgbCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHJldHVybiBcIiBcIiArIGFyZ3Muam9pbihcIiwgXCIpICsgXCIgXCI7XG4gIFx0XHRcdH0sXG5cbiAgXHRcdFx0Ly8gT2JqZWN0IGNhbGxzIGl0IGludGVybmFsbHksIHRoZSBrZXkgcGFydCBvZiBhbiBpdGVtIGluIGEgbWFwXG4gIFx0XHRcdGtleTogcXVvdGUsXG5cbiAgXHRcdFx0Ly8gRnVuY3Rpb24gY2FsbHMgaXQgaW50ZXJuYWxseSwgaXQncyB0aGUgY29udGVudCBvZiB0aGUgZnVuY3Rpb25cbiAgXHRcdFx0ZnVuY3Rpb25Db2RlOiBcIltjb2RlXVwiLFxuXG4gIFx0XHRcdC8vIE5vZGUgY2FsbHMgaXQgaW50ZXJuYWxseSwgaXQncyBhIGh0bWwgYXR0cmlidXRlIHZhbHVlXG4gIFx0XHRcdGF0dHJpYnV0ZTogcXVvdGUsXG4gIFx0XHRcdHN0cmluZzogcXVvdGUsXG4gIFx0XHRcdGRhdGU6IHF1b3RlLFxuICBcdFx0XHRyZWdleHA6IGxpdGVyYWwsXG4gIFx0XHRcdG51bWJlcjogbGl0ZXJhbCxcbiAgXHRcdFx0XCJib29sZWFuXCI6IGxpdGVyYWwsXG4gIFx0XHRcdHN5bWJvbDogZnVuY3Rpb24gc3ltYm9sKHN5bSkge1xuICBcdFx0XHRcdHJldHVybiBzeW0udG9TdHJpbmcoKTtcbiAgXHRcdFx0fVxuICBcdFx0fSxcblxuICBcdFx0Ly8gSWYgdHJ1ZSwgZW50aXRpZXMgYXJlIGVzY2FwZWQgKCA8LCA+LCBcXHQsIHNwYWNlIGFuZCBcXG4gKVxuICBcdFx0SFRNTDogZmFsc2UsXG5cbiAgXHRcdC8vIEluZGVudGF0aW9uIHVuaXRcbiAgXHRcdGluZGVudENoYXI6IFwiICBcIixcblxuICBcdFx0Ly8gSWYgdHJ1ZSwgaXRlbXMgaW4gYSBjb2xsZWN0aW9uLCBhcmUgc2VwYXJhdGVkIGJ5IGEgXFxuLCBlbHNlIGp1c3QgYSBzcGFjZS5cbiAgXHRcdG11bHRpbGluZTogdHJ1ZVxuICBcdH07XG5cbiAgXHRyZXR1cm4gZHVtcDtcbiAgfSkoKTtcblxuICB2YXIgU3VpdGVSZXBvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIFx0ZnVuY3Rpb24gU3VpdGVSZXBvcnQobmFtZSwgcGFyZW50U3VpdGUpIHtcbiAgXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN1aXRlUmVwb3J0KTtcblxuICBcdFx0dGhpcy5uYW1lID0gbmFtZTtcbiAgXHRcdHRoaXMuZnVsbE5hbWUgPSBwYXJlbnRTdWl0ZSA/IHBhcmVudFN1aXRlLmZ1bGxOYW1lLmNvbmNhdChuYW1lKSA6IFtdO1xuXG4gIFx0XHR0aGlzLnRlc3RzID0gW107XG4gIFx0XHR0aGlzLmNoaWxkU3VpdGVzID0gW107XG5cbiAgXHRcdGlmIChwYXJlbnRTdWl0ZSkge1xuICBcdFx0XHRwYXJlbnRTdWl0ZS5wdXNoQ2hpbGRTdWl0ZSh0aGlzKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRjcmVhdGVDbGFzcyhTdWl0ZVJlcG9ydCwgW3tcbiAgXHRcdGtleTogXCJzdGFydFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KHJlY29yZFRpbWUpIHtcbiAgXHRcdFx0aWYgKHJlY29yZFRpbWUpIHtcbiAgXHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSBwZXJmb3JtYW5jZU5vdygpO1xuXG4gIFx0XHRcdFx0aWYgKHBlcmZvcm1hbmNlKSB7XG4gIFx0XHRcdFx0XHR2YXIgc3VpdGVMZXZlbCA9IHRoaXMuZnVsbE5hbWUubGVuZ3RoO1xuICBcdFx0XHRcdFx0cGVyZm9ybWFuY2UubWFyayhcInF1bml0X3N1aXRlX1wiICsgc3VpdGVMZXZlbCArIFwiX3N0YXJ0XCIpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHJldHVybiB7XG4gIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxuICBcdFx0XHRcdGZ1bGxOYW1lOiB0aGlzLmZ1bGxOYW1lLnNsaWNlKCksXG4gIFx0XHRcdFx0dGVzdHM6IHRoaXMudGVzdHMubWFwKGZ1bmN0aW9uICh0ZXN0KSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gdGVzdC5zdGFydCgpO1xuICBcdFx0XHRcdH0pLFxuICBcdFx0XHRcdGNoaWxkU3VpdGVzOiB0aGlzLmNoaWxkU3VpdGVzLm1hcChmdW5jdGlvbiAoc3VpdGUpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBzdWl0ZS5zdGFydCgpO1xuICBcdFx0XHRcdH0pLFxuICBcdFx0XHRcdHRlc3RDb3VudHM6IHtcbiAgXHRcdFx0XHRcdHRvdGFsOiB0aGlzLmdldFRlc3RDb3VudHMoKS50b3RhbFxuICBcdFx0XHRcdH1cbiAgXHRcdFx0fTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZW5kXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZW5kKHJlY29yZFRpbWUpIHtcbiAgXHRcdFx0aWYgKHJlY29yZFRpbWUpIHtcbiAgXHRcdFx0XHR0aGlzLl9lbmRUaW1lID0gcGVyZm9ybWFuY2VOb3coKTtcblxuICBcdFx0XHRcdGlmIChwZXJmb3JtYW5jZSkge1xuICBcdFx0XHRcdFx0dmFyIHN1aXRlTGV2ZWwgPSB0aGlzLmZ1bGxOYW1lLmxlbmd0aDtcbiAgXHRcdFx0XHRcdHBlcmZvcm1hbmNlLm1hcmsoXCJxdW5pdF9zdWl0ZV9cIiArIHN1aXRlTGV2ZWwgKyBcIl9lbmRcIik7XG5cbiAgXHRcdFx0XHRcdHZhciBzdWl0ZU5hbWUgPSB0aGlzLmZ1bGxOYW1lLmpvaW4oXCIg4oCTIFwiKTtcblxuICBcdFx0XHRcdFx0bWVhc3VyZShzdWl0ZUxldmVsID09PSAwID8gXCJRVW5pdCBUZXN0IFJ1blwiIDogXCJRVW5pdCBUZXN0IFN1aXRlOiBcIiArIHN1aXRlTmFtZSwgXCJxdW5pdF9zdWl0ZV9cIiArIHN1aXRlTGV2ZWwgKyBcIl9zdGFydFwiLCBcInF1bml0X3N1aXRlX1wiICsgc3VpdGVMZXZlbCArIFwiX2VuZFwiKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHRyZXR1cm4ge1xuICBcdFx0XHRcdG5hbWU6IHRoaXMubmFtZSxcbiAgXHRcdFx0XHRmdWxsTmFtZTogdGhpcy5mdWxsTmFtZS5zbGljZSgpLFxuICBcdFx0XHRcdHRlc3RzOiB0aGlzLnRlc3RzLm1hcChmdW5jdGlvbiAodGVzdCkge1xuICBcdFx0XHRcdFx0cmV0dXJuIHRlc3QuZW5kKCk7XG4gIFx0XHRcdFx0fSksXG4gIFx0XHRcdFx0Y2hpbGRTdWl0ZXM6IHRoaXMuY2hpbGRTdWl0ZXMubWFwKGZ1bmN0aW9uIChzdWl0ZSkge1xuICBcdFx0XHRcdFx0cmV0dXJuIHN1aXRlLmVuZCgpO1xuICBcdFx0XHRcdH0pLFxuICBcdFx0XHRcdHRlc3RDb3VudHM6IHRoaXMuZ2V0VGVzdENvdW50cygpLFxuICBcdFx0XHRcdHJ1bnRpbWU6IHRoaXMuZ2V0UnVudGltZSgpLFxuICBcdFx0XHRcdHN0YXR1czogdGhpcy5nZXRTdGF0dXMoKVxuICBcdFx0XHR9O1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJwdXNoQ2hpbGRTdWl0ZVwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHB1c2hDaGlsZFN1aXRlKHN1aXRlKSB7XG4gIFx0XHRcdHRoaXMuY2hpbGRTdWl0ZXMucHVzaChzdWl0ZSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInB1c2hUZXN0XCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gcHVzaFRlc3QodGVzdCkge1xuICBcdFx0XHR0aGlzLnRlc3RzLnB1c2godGVzdCk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImdldFJ1bnRpbWVcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRSdW50aW1lKCkge1xuICBcdFx0XHRyZXR1cm4gdGhpcy5fZW5kVGltZSAtIHRoaXMuX3N0YXJ0VGltZTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZ2V0VGVzdENvdW50c1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFRlc3RDb3VudHMoKSB7XG4gIFx0XHRcdHZhciBjb3VudHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHsgcGFzc2VkOiAwLCBmYWlsZWQ6IDAsIHNraXBwZWQ6IDAsIHRvZG86IDAsIHRvdGFsOiAwIH07XG5cbiAgXHRcdFx0Y291bnRzID0gdGhpcy50ZXN0cy5yZWR1Y2UoZnVuY3Rpb24gKGNvdW50cywgdGVzdCkge1xuICBcdFx0XHRcdGlmICh0ZXN0LnZhbGlkKSB7XG4gIFx0XHRcdFx0XHRjb3VudHNbdGVzdC5nZXRTdGF0dXMoKV0rKztcbiAgXHRcdFx0XHRcdGNvdW50cy50b3RhbCsrO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdHJldHVybiBjb3VudHM7XG4gIFx0XHRcdH0sIGNvdW50cyk7XG5cbiAgXHRcdFx0cmV0dXJuIHRoaXMuY2hpbGRTdWl0ZXMucmVkdWNlKGZ1bmN0aW9uIChjb3VudHMsIHN1aXRlKSB7XG4gIFx0XHRcdFx0cmV0dXJuIHN1aXRlLmdldFRlc3RDb3VudHMoY291bnRzKTtcbiAgXHRcdFx0fSwgY291bnRzKTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZ2V0U3RhdHVzXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xuICBcdFx0XHR2YXIgX2dldFRlc3RDb3VudHMgPSB0aGlzLmdldFRlc3RDb3VudHMoKSxcbiAgXHRcdFx0ICAgIHRvdGFsID0gX2dldFRlc3RDb3VudHMudG90YWwsXG4gIFx0XHRcdCAgICBmYWlsZWQgPSBfZ2V0VGVzdENvdW50cy5mYWlsZWQsXG4gIFx0XHRcdCAgICBza2lwcGVkID0gX2dldFRlc3RDb3VudHMuc2tpcHBlZCxcbiAgXHRcdFx0ICAgIHRvZG8gPSBfZ2V0VGVzdENvdW50cy50b2RvO1xuXG4gIFx0XHRcdGlmIChmYWlsZWQpIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJmYWlsZWRcIjtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRpZiAoc2tpcHBlZCA9PT0gdG90YWwpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBcInNraXBwZWRcIjtcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKHRvZG8gPT09IHRvdGFsKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gXCJ0b2RvXCI7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHJldHVybiBcInBhc3NlZFwiO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH1dKTtcbiAgXHRyZXR1cm4gU3VpdGVSZXBvcnQ7XG4gIH0oKTtcblxuICB2YXIgZm9jdXNlZCA9IGZhbHNlO1xuXG4gIHZhciBtb2R1bGVTdGFjayA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1vZHVsZShuYW1lLCB0ZXN0RW52aXJvbm1lbnQsIG1vZGlmaWVycykge1xuICBcdHZhciBwYXJlbnRNb2R1bGUgPSBtb2R1bGVTdGFjay5sZW5ndGggPyBtb2R1bGVTdGFjay5zbGljZSgtMSlbMF0gOiBudWxsO1xuICBcdHZhciBtb2R1bGVOYW1lID0gcGFyZW50TW9kdWxlICE9PSBudWxsID8gW3BhcmVudE1vZHVsZS5uYW1lLCBuYW1lXS5qb2luKFwiID4gXCIpIDogbmFtZTtcbiAgXHR2YXIgcGFyZW50U3VpdGUgPSBwYXJlbnRNb2R1bGUgPyBwYXJlbnRNb2R1bGUuc3VpdGVSZXBvcnQgOiBnbG9iYWxTdWl0ZTtcblxuICBcdHZhciBza2lwID0gcGFyZW50TW9kdWxlICE9PSBudWxsICYmIHBhcmVudE1vZHVsZS5za2lwIHx8IG1vZGlmaWVycy5za2lwO1xuICBcdHZhciB0b2RvID0gcGFyZW50TW9kdWxlICE9PSBudWxsICYmIHBhcmVudE1vZHVsZS50b2RvIHx8IG1vZGlmaWVycy50b2RvO1xuXG4gIFx0dmFyIG1vZHVsZSA9IHtcbiAgXHRcdG5hbWU6IG1vZHVsZU5hbWUsXG4gIFx0XHRwYXJlbnRNb2R1bGU6IHBhcmVudE1vZHVsZSxcbiAgXHRcdHRlc3RzOiBbXSxcbiAgXHRcdG1vZHVsZUlkOiBnZW5lcmF0ZUhhc2gobW9kdWxlTmFtZSksXG4gIFx0XHR0ZXN0c1J1bjogMCxcbiAgXHRcdHVuc2tpcHBlZFRlc3RzUnVuOiAwLFxuICBcdFx0Y2hpbGRNb2R1bGVzOiBbXSxcbiAgXHRcdHN1aXRlUmVwb3J0OiBuZXcgU3VpdGVSZXBvcnQobmFtZSwgcGFyZW50U3VpdGUpLFxuXG4gIFx0XHQvLyBQYXNzIGFsb25nIGBza2lwYCBhbmQgYHRvZG9gIHByb3BlcnRpZXMgZnJvbSBwYXJlbnQgbW9kdWxlLCBpbiBjYXNlXG4gIFx0XHQvLyB0aGVyZSBpcyBvbmUsIHRvIGNoaWxkcy4gQW5kIHVzZSBvd24gb3RoZXJ3aXNlLlxuICBcdFx0Ly8gVGhpcyBwcm9wZXJ0eSB3aWxsIGJlIHVzZWQgdG8gbWFyayBvd24gdGVzdHMgYW5kIHRlc3RzIG9mIGNoaWxkIHN1aXRlc1xuICBcdFx0Ly8gYXMgZWl0aGVyIGBza2lwcGVkYCBvciBgdG9kb2AuXG4gIFx0XHRza2lwOiBza2lwLFxuICBcdFx0dG9kbzogc2tpcCA/IGZhbHNlIDogdG9kb1xuICBcdH07XG5cbiAgXHR2YXIgZW52ID0ge307XG4gIFx0aWYgKHBhcmVudE1vZHVsZSkge1xuICBcdFx0cGFyZW50TW9kdWxlLmNoaWxkTW9kdWxlcy5wdXNoKG1vZHVsZSk7XG4gIFx0XHRleHRlbmQoZW52LCBwYXJlbnRNb2R1bGUudGVzdEVudmlyb25tZW50KTtcbiAgXHR9XG4gIFx0ZXh0ZW5kKGVudiwgdGVzdEVudmlyb25tZW50KTtcbiAgXHRtb2R1bGUudGVzdEVudmlyb25tZW50ID0gZW52O1xuXG4gIFx0Y29uZmlnLm1vZHVsZXMucHVzaChtb2R1bGUpO1xuICBcdHJldHVybiBtb2R1bGU7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzTW9kdWxlKG5hbWUsIG9wdGlvbnMsIGV4ZWN1dGVOb3cpIHtcbiAgXHR2YXIgbW9kaWZpZXJzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICBcdGlmIChvYmplY3RUeXBlKG9wdGlvbnMpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdGV4ZWN1dGVOb3cgPSBvcHRpb25zO1xuICBcdFx0b3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgXHR9XG5cbiAgXHR2YXIgbW9kdWxlID0gY3JlYXRlTW9kdWxlKG5hbWUsIG9wdGlvbnMsIG1vZGlmaWVycyk7XG5cbiAgXHQvLyBNb3ZlIGFueSBob29rcyB0byBhICdob29rcycgb2JqZWN0XG4gIFx0dmFyIHRlc3RFbnZpcm9ubWVudCA9IG1vZHVsZS50ZXN0RW52aXJvbm1lbnQ7XG4gIFx0dmFyIGhvb2tzID0gbW9kdWxlLmhvb2tzID0ge307XG5cbiAgXHRzZXRIb29rRnJvbUVudmlyb25tZW50KGhvb2tzLCB0ZXN0RW52aXJvbm1lbnQsIFwiYmVmb3JlXCIpO1xuICBcdHNldEhvb2tGcm9tRW52aXJvbm1lbnQoaG9va3MsIHRlc3RFbnZpcm9ubWVudCwgXCJiZWZvcmVFYWNoXCIpO1xuICBcdHNldEhvb2tGcm9tRW52aXJvbm1lbnQoaG9va3MsIHRlc3RFbnZpcm9ubWVudCwgXCJhZnRlckVhY2hcIik7XG4gIFx0c2V0SG9va0Zyb21FbnZpcm9ubWVudChob29rcywgdGVzdEVudmlyb25tZW50LCBcImFmdGVyXCIpO1xuXG4gIFx0dmFyIG1vZHVsZUZucyA9IHtcbiAgXHRcdGJlZm9yZTogc2V0SG9va0Z1bmN0aW9uKG1vZHVsZSwgXCJiZWZvcmVcIiksXG4gIFx0XHRiZWZvcmVFYWNoOiBzZXRIb29rRnVuY3Rpb24obW9kdWxlLCBcImJlZm9yZUVhY2hcIiksXG4gIFx0XHRhZnRlckVhY2g6IHNldEhvb2tGdW5jdGlvbihtb2R1bGUsIFwiYWZ0ZXJFYWNoXCIpLFxuICBcdFx0YWZ0ZXI6IHNldEhvb2tGdW5jdGlvbihtb2R1bGUsIFwiYWZ0ZXJcIilcbiAgXHR9O1xuXG4gIFx0dmFyIGN1cnJlbnRNb2R1bGUgPSBjb25maWcuY3VycmVudE1vZHVsZTtcbiAgXHRpZiAob2JqZWN0VHlwZShleGVjdXRlTm93KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHRtb2R1bGVTdGFjay5wdXNoKG1vZHVsZSk7XG4gIFx0XHRjb25maWcuY3VycmVudE1vZHVsZSA9IG1vZHVsZTtcbiAgXHRcdGV4ZWN1dGVOb3cuY2FsbChtb2R1bGUudGVzdEVudmlyb25tZW50LCBtb2R1bGVGbnMpO1xuICBcdFx0bW9kdWxlU3RhY2sucG9wKCk7XG4gIFx0XHRtb2R1bGUgPSBtb2R1bGUucGFyZW50TW9kdWxlIHx8IGN1cnJlbnRNb2R1bGU7XG4gIFx0fVxuXG4gIFx0Y29uZmlnLmN1cnJlbnRNb2R1bGUgPSBtb2R1bGU7XG5cbiAgXHRmdW5jdGlvbiBzZXRIb29rRnJvbUVudmlyb25tZW50KGhvb2tzLCBlbnZpcm9ubWVudCwgbmFtZSkge1xuICBcdFx0dmFyIHBvdGVudGlhbEhvb2sgPSBlbnZpcm9ubWVudFtuYW1lXTtcbiAgXHRcdGhvb2tzW25hbWVdID0gdHlwZW9mIHBvdGVudGlhbEhvb2sgPT09IFwiZnVuY3Rpb25cIiA/IFtwb3RlbnRpYWxIb29rXSA6IFtdO1xuICBcdFx0ZGVsZXRlIGVudmlyb25tZW50W25hbWVdO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIHNldEhvb2tGdW5jdGlvbihtb2R1bGUsIGhvb2tOYW1lKSB7XG4gIFx0XHRyZXR1cm4gZnVuY3Rpb24gc2V0SG9vayhjYWxsYmFjaykge1xuICBcdFx0XHRtb2R1bGUuaG9va3NbaG9va05hbWVdLnB1c2goY2FsbGJhY2spO1xuICBcdFx0fTtcbiAgXHR9XG4gIH1cblxuICBmdW5jdGlvbiBtb2R1bGUkMShuYW1lLCBvcHRpb25zLCBleGVjdXRlTm93KSB7XG4gIFx0aWYgKGZvY3VzZWQpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHRwcm9jZXNzTW9kdWxlKG5hbWUsIG9wdGlvbnMsIGV4ZWN1dGVOb3cpO1xuICB9XG5cbiAgbW9kdWxlJDEub25seSA9IGZ1bmN0aW9uICgpIHtcbiAgXHRpZiAoZm9jdXNlZCkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdGNvbmZpZy5tb2R1bGVzLmxlbmd0aCA9IDA7XG4gIFx0Y29uZmlnLnF1ZXVlLmxlbmd0aCA9IDA7XG5cbiAgXHRtb2R1bGUkMS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG5cbiAgXHRmb2N1c2VkID0gdHJ1ZTtcbiAgfTtcblxuICBtb2R1bGUkMS5za2lwID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMsIGV4ZWN1dGVOb3cpIHtcbiAgXHRpZiAoZm9jdXNlZCkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHByb2Nlc3NNb2R1bGUobmFtZSwgb3B0aW9ucywgZXhlY3V0ZU5vdywgeyBza2lwOiB0cnVlIH0pO1xuICB9O1xuXG4gIG1vZHVsZSQxLnRvZG8gPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucywgZXhlY3V0ZU5vdykge1xuICBcdGlmIChmb2N1c2VkKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0cHJvY2Vzc01vZHVsZShuYW1lLCBvcHRpb25zLCBleGVjdXRlTm93LCB7IHRvZG86IHRydWUgfSk7XG4gIH07XG5cbiAgdmFyIExJU1RFTkVSUyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBTVVBQT1JURURfRVZFTlRTID0gW1wicnVuU3RhcnRcIiwgXCJzdWl0ZVN0YXJ0XCIsIFwidGVzdFN0YXJ0XCIsIFwiYXNzZXJ0aW9uXCIsIFwidGVzdEVuZFwiLCBcInN1aXRlRW5kXCIsIFwicnVuRW5kXCJdO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aXRoIHRoZSBzcGVjaWZpZWQgZGF0YSB0byBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICAgKiBDYWxsYmFja3Mgd2lsbCBmaXJlIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IGFyZSByZWdpc3RlcmVkIChGSUZPKS4gVGhpc1xuICAgKiBmdW5jdGlvbiBpcyBub3QgZXhwb3NlZCBwdWJsaWNseTsgaXQgaXMgdXNlZCBieSBRVW5pdCBpbnRlcm5hbHMgdG8gZW1pdFxuICAgKiBsb2dnaW5nIGV2ZW50cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG1ldGhvZCBlbWl0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gIFx0aWYgKG9iamVjdFR5cGUoZXZlbnROYW1lKSAhPT0gXCJzdHJpbmdcIikge1xuICBcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcImV2ZW50TmFtZSBtdXN0IGJlIGEgc3RyaW5nIHdoZW4gZW1pdHRpbmcgYW4gZXZlbnRcIik7XG4gIFx0fVxuXG4gIFx0Ly8gQ2xvbmUgdGhlIGNhbGxiYWNrcyBpbiBjYXNlIG9uZSBvZiB0aGVtIHJlZ2lzdGVycyBhIG5ldyBjYWxsYmFja1xuICBcdHZhciBvcmlnaW5hbENhbGxiYWNrcyA9IExJU1RFTkVSU1tldmVudE5hbWVdO1xuICBcdHZhciBjYWxsYmFja3MgPSBvcmlnaW5hbENhbGxiYWNrcyA/IFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShvcmlnaW5hbENhbGxiYWNrcykpIDogW107XG5cbiAgXHRmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICBcdFx0Y2FsbGJhY2tzW2ldKGRhdGEpO1xuICBcdH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjYWxsYmFjayBhcyBhIGxpc3RlbmVyIHRvIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICogQG1ldGhvZCBvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge1ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gIFx0aWYgKG9iamVjdFR5cGUoZXZlbnROYW1lKSAhPT0gXCJzdHJpbmdcIikge1xuICBcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcImV2ZW50TmFtZSBtdXN0IGJlIGEgc3RyaW5nIHdoZW4gcmVnaXN0ZXJpbmcgYSBsaXN0ZW5lclwiKTtcbiAgXHR9IGVsc2UgaWYgKCFpbkFycmF5KGV2ZW50TmFtZSwgU1VQUE9SVEVEX0VWRU5UUykpIHtcbiAgXHRcdHZhciBldmVudHMgPSBTVVBQT1JURURfRVZFTlRTLmpvaW4oXCIsIFwiKTtcbiAgXHRcdHRocm93IG5ldyBFcnJvcihcIlxcXCJcIiArIGV2ZW50TmFtZSArIFwiXFxcIiBpcyBub3QgYSB2YWxpZCBldmVudDsgbXVzdCBiZSBvbmUgb2Y6IFwiICsgZXZlbnRzICsgXCIuXCIpO1xuICBcdH0gZWxzZSBpZiAob2JqZWN0VHlwZShjYWxsYmFjaykgIT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbiB3aGVuIHJlZ2lzdGVyaW5nIGEgbGlzdGVuZXJcIik7XG4gIFx0fVxuXG4gIFx0aWYgKCFMSVNURU5FUlNbZXZlbnROYW1lXSkge1xuICBcdFx0TElTVEVORVJTW2V2ZW50TmFtZV0gPSBbXTtcbiAgXHR9XG5cbiAgXHQvLyBEb24ndCByZWdpc3RlciB0aGUgc2FtZSBjYWxsYmFjayBtb3JlIHRoYW4gb25jZVxuICBcdGlmICghaW5BcnJheShjYWxsYmFjaywgTElTVEVORVJTW2V2ZW50TmFtZV0pKSB7XG4gIFx0XHRMSVNURU5FUlNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgXHR9XG4gIH1cblxuICBmdW5jdGlvbiBvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih4KTtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG4gIH1cblxuXG5cbiAgdmFyIF9pc0FycmF5ID0gdm9pZCAwO1xuICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbiAgfSBlbHNlIHtcbiAgICBfaXNBcnJheSA9IGZ1bmN0aW9uIF9pc0FycmF5KHgpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXk7XG5cbiAgdmFyIGxlbiA9IDA7XG4gIHZhciB2ZXJ0eE5leHQgPSB2b2lkIDA7XG4gIHZhciBjdXN0b21TY2hlZHVsZXJGbiA9IHZvaWQgMDtcblxuICB2YXIgYXNhcCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICAgIHF1ZXVlW2xlbl0gPSBjYWxsYmFjaztcbiAgICBxdWV1ZVtsZW4gKyAxXSA9IGFyZztcbiAgICBsZW4gKz0gMjtcbiAgICBpZiAobGVuID09PSAyKSB7XG4gICAgICAvLyBJZiBsZW4gaXMgMiwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuICAgICAgaWYgKGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICAgIGN1c3RvbVNjaGVkdWxlckZuKGZsdXNoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlRmx1c2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0U2NoZWR1bGVyKHNjaGVkdWxlRm4pIHtcbiAgICBjdXN0b21TY2hlZHVsZXJGbiA9IHNjaGVkdWxlRm47XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBc2FwKGFzYXBGbikge1xuICAgIGFzYXAgPSBhc2FwRm47XG4gIH1cblxuICB2YXIgYnJvd3NlcldpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuICB2YXIgYnJvd3Nlckdsb2JhbCA9IGJyb3dzZXJXaW5kb3cgfHwge307XG4gIHZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHZhciBpc05vZGUgPSB0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcblxuICAvLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxuICB2YXIgaXNXb3JrZXIgPSB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnO1xuXG4gIC8vIG5vZGVcbiAgZnVuY3Rpb24gdXNlTmV4dFRpY2soKSB7XG4gICAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gdmVydHhcbiAgZnVuY3Rpb24gdXNlVmVydHhUaW1lcigpIHtcbiAgICBpZiAodHlwZW9mIHZlcnR4TmV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZlcnR4TmV4dChmbHVzaCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB1c2VTZXRUaW1lb3V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyO1xuICAgIH07XG4gIH1cblxuICAvLyB3ZWIgd29ya2VyXG4gIGZ1bmN0aW9uIHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmbHVzaDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZVNldFRpbWVvdXQoKSB7XG4gICAgLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gZXM2LXByb21pc2Ugd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4gICAgLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXG4gICAgdmFyIGdsb2JhbFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsU2V0VGltZW91dChmbHVzaCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG4gICAgICB2YXIgYXJnID0gcXVldWVbaSArIDFdO1xuXG4gICAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgICBxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICAgIHF1ZXVlW2kgKyAxXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZW4gPSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gYXR0ZW1wdFZlcnR4KCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdmVydHggPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpLnJlcXVpcmUoJ3ZlcnR4Jyk7XG4gICAgICB2ZXJ0eE5leHQgPSB2ZXJ0eC5ydW5Pbkxvb3AgfHwgdmVydHgucnVuT25Db250ZXh0O1xuICAgICAgcmV0dXJuIHVzZVZlcnR4VGltZXIoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzY2hlZHVsZUZsdXNoID0gdm9pZCAwO1xuICAvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuICBpZiAoaXNOb2RlKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZU5leHRUaWNrKCk7XG4gIH0gZWxzZSBpZiAoQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuICB9IGVsc2UgaWYgKGlzV29ya2VyKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZU1lc3NhZ2VDaGFubmVsKCk7XG4gIH0gZWxzZSBpZiAoYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IGF0dGVtcHRWZXJ0eCgpO1xuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlRmx1c2ggPSB1c2VTZXRUaW1lb3V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXM7XG5cbiAgICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICAgIGlmIChjaGlsZFtQUk9NSVNFX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtYWtlUHJvbWlzZShjaGlsZCk7XG4gICAgfVxuXG4gICAgdmFyIF9zdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cblxuICAgIGlmIChfc3RhdGUpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tfc3RhdGUgLSAxXTtcbiAgICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaW52b2tlQ2FsbGJhY2soX3N0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHBhcmVudC5fcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIC8qKlxuICAgIGBQcm9taXNlLnJlc29sdmVgIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgcmVzb2x2ZWQgd2l0aCB0aGVcbiAgICBwYXNzZWQgYHZhbHVlYC4gSXQgaXMgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIHJlc29sdmUoMSk7XG4gICAgfSk7XG5cbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgLy8gdmFsdWUgPT09IDFcbiAgICB9KTtcbiAgICBgYGBcblxuICAgIEluc3RlYWQgb2Ygd3JpdGluZyB0aGUgYWJvdmUsIHlvdXIgY29kZSBub3cgc2ltcGx5IGJlY29tZXMgdGhlIGZvbGxvd2luZzpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgxKTtcblxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAvLyB2YWx1ZSA9PT0gMVxuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgQG1ldGhvZCByZXNvbHZlXG4gICAgQHN0YXRpY1xuICAgIEBwYXJhbSB7QW55fSB2YWx1ZSB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aFxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgdGhhdCB3aWxsIGJlY29tZSBmdWxmaWxsZWQgd2l0aCB0aGUgZ2l2ZW5cbiAgICBgdmFsdWVgXG4gICovXG4gIGZ1bmN0aW9uIHJlc29sdmUkMShvYmplY3QpIHtcbiAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICBpZiAob2JqZWN0ICYmICh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmplY3QpKSA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcbiAgICByZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICB2YXIgUFJPTUlTRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKTtcblxuICBmdW5jdGlvbiBub29wKCkge31cblxuICB2YXIgUEVORElORyA9IHZvaWQgMDtcbiAgdmFyIEZVTEZJTExFRCA9IDE7XG4gIHZhciBSRUpFQ1RFRCA9IDI7XG5cbiAgZnVuY3Rpb24gc2VsZkZ1bGZpbGxtZW50KCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbm5vdFJldHVybk93bigpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VGhlbih0aGVuJCQxLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoZW4kJDEuY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4kJDEpIHtcbiAgICBhc2FwKGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgICB2YXIgZXJyb3IgPSB0cnlUaGVuKHRoZW4kJDEsIHRoZW5hYmxlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWFsZWQgPSB0cnVlO1xuXG4gICAgICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcbiAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9LCBwcm9taXNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gICAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gRlVMRklMTEVEKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJzY3JpYmUodGhlbmFibGUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuJCQxKSB7XG4gICAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IgJiYgdGhlbiQkMSA9PT0gdGhlbiAmJiBtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yLnJlc29sdmUgPT09IHJlc29sdmUkMSkge1xuICAgICAgaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGVuJCQxID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGVuJCQxKSkge1xuICAgICAgICBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbiQkMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBzZWxmRnVsZmlsbG1lbnQoKSk7XG4gICAgfSBlbHNlIGlmIChvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIHRoZW4kJDEgPSB2b2lkIDA7XG4gICAgICB0cnkge1xuICAgICAgICB0aGVuJCQxID0gdmFsdWUudGhlbjtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgdmFsdWUsIHRoZW4kJDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuICAgICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICAgIH1cblxuICAgIHB1Ymxpc2gocHJvbWlzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBGVUxGSUxMRUQ7XG5cbiAgICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBhc2FwKHB1Ymxpc2gsIHByb21pc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlamVjdChwcm9taXNlLCByZWFzb24pIHtcbiAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgICBhc2FwKHB1Ymxpc2hSZWplY3Rpb24sIHByb21pc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgdmFyIF9zdWJzY3JpYmVycyA9IHBhcmVudC5fc3Vic2NyaWJlcnM7XG4gICAgdmFyIGxlbmd0aCA9IF9zdWJzY3JpYmVycy5sZW5ndGg7XG5cblxuICAgIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgICBfc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuICAgIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgUkVKRUNURURdID0gb25SZWplY3Rpb247XG5cbiAgICBpZiAobGVuZ3RoID09PSAwICYmIHBhcmVudC5fc3RhdGUpIHtcbiAgICAgIGFzYXAocHVibGlzaCwgcGFyZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgICB2YXIgc2V0dGxlZCA9IHByb21pc2UuX3N0YXRlO1xuXG4gICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHZvaWQgMCxcbiAgICAgICAgY2FsbGJhY2sgPSB2b2lkIDAsXG4gICAgICAgIGRldGFpbCA9IHByb21pc2UuX3Jlc3VsdDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICBjYWxsYmFjayA9IHN1YnNjcmliZXJzW2kgKyBzZXR0bGVkXTtcblxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgICB2YXIgaGFzQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgICAgdmFsdWUgPSB2b2lkIDAsXG4gICAgICAgIGVycm9yID0gdm9pZCAwLFxuICAgICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuXG4gICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKGRldGFpbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgICBlcnJvciA9IGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgICByZWplY3QocHJvbWlzZSwgY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZGV0YWlsO1xuICAgIH1cblxuICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgLy8gbm9vcFxuICAgIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHN1Y2NlZWRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgICB0cnkge1xuICAgICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaWQgPSAwO1xuICBmdW5jdGlvbiBuZXh0SWQoKSB7XG4gICAgcmV0dXJuIGlkKys7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcHJvbWlzZVtQUk9NSVNFX0lEXSA9IGlkKys7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgcHJvbWlzZS5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG4gIH1cblxuICB2YXIgRW51bWVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbnVtZXJhdG9yKENvbnN0cnVjdG9yLCBpbnB1dCkge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRW51bWVyYXRvcik7XG5cbiAgICAgIHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcblxuICAgICAgaWYgKCF0aGlzLnByb21pc2VbUFJPTUlTRV9JRF0pIHtcbiAgICAgICAgbWFrZVByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxlbmd0aCA9IHRoaXMubGVuZ3RoIHx8IDA7XG4gICAgICAgICAgdGhpcy5fZW51bWVyYXRlKGlucHV0KTtcbiAgICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCh0aGlzLnByb21pc2UsIHZhbGlkYXRpb25FcnJvcigpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhFbnVtZXJhdG9yLCBbe1xuICAgICAga2V5OiAnX2VudW1lcmF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2VudW1lcmF0ZShpbnB1dCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgdGhpcy5fc3RhdGUgPT09IFBFTkRJTkcgJiYgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19lYWNoRW50cnknLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9lYWNoRW50cnkoZW50cnksIGkpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgcmVzb2x2ZSQkMSA9IGMucmVzb2x2ZTtcblxuXG4gICAgICAgIGlmIChyZXNvbHZlJCQxID09PSByZXNvbHZlJDEpIHtcbiAgICAgICAgICB2YXIgX3RoZW4gPSB2b2lkIDA7XG4gICAgICAgICAgdmFyIGVycm9yID0gdm9pZCAwO1xuICAgICAgICAgIHZhciBkaWRFcnJvciA9IGZhbHNlO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfdGhlbiA9IGVudHJ5LnRoZW47XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfdGhlbiA9PT0gdGhlbiAmJiBlbnRyeS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIF90aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gUHJvbWlzZSQyKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBjKG5vb3ApO1xuICAgICAgICAgICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIGVudHJ5LCBfdGhlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgYyhmdW5jdGlvbiAocmVzb2x2ZSQkMSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSQkMShlbnRyeSk7XG4gICAgICAgICAgICB9KSwgaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChyZXNvbHZlJCQxKGVudHJ5KSwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfc2V0dGxlZEF0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dGxlZEF0KHN0YXRlLCBpLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuXG4gICAgICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ193aWxsU2V0dGxlQXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSkge1xuICAgICAgICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cbiAgICAgICAgc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gRW51bWVyYXRvcjtcbiAgfSgpO1xuXG4gIC8qKlxuICAgIGBQcm9taXNlLmFsbGAgYWNjZXB0cyBhbiBhcnJheSBvZiBwcm9taXNlcywgYW5kIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaFxuICAgIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGFycmF5IG9mIGZ1bGZpbGxtZW50IHZhbHVlcyBmb3IgdGhlIHBhc3NlZCBwcm9taXNlcywgb3JcbiAgICByZWplY3RlZCB3aXRoIHRoZSByZWFzb24gb2YgdGhlIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIGJlIHJlamVjdGVkLiBJdCBjYXN0cyBhbGxcbiAgICBlbGVtZW50cyBvZiB0aGUgcGFzc2VkIGl0ZXJhYmxlIHRvIHByb21pc2VzIGFzIGl0IHJ1bnMgdGhpcyBhbGdvcml0aG0uXG5cbiAgICBFeGFtcGxlOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gICAgbGV0IHByb21pc2UyID0gcmVzb2x2ZSgyKTtcbiAgICBsZXQgcHJvbWlzZTMgPSByZXNvbHZlKDMpO1xuICAgIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oYXJyYXkpe1xuICAgICAgLy8gVGhlIGFycmF5IGhlcmUgd291bGQgYmUgWyAxLCAyLCAzIF07XG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBJZiBhbnkgb2YgdGhlIGBwcm9taXNlc2AgZ2l2ZW4gdG8gYGFsbGAgYXJlIHJlamVjdGVkLCB0aGUgZmlyc3QgcHJvbWlzZVxuICAgIHRoYXQgaXMgcmVqZWN0ZWQgd2lsbCBiZSBnaXZlbiBhcyBhbiBhcmd1bWVudCB0byB0aGUgcmV0dXJuZWQgcHJvbWlzZXMnc1xuICAgIHJlamVjdGlvbiBoYW5kbGVyLiBGb3IgZXhhbXBsZTpcblxuICAgIEV4YW1wbGU6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHByb21pc2UxID0gcmVzb2x2ZSgxKTtcbiAgICBsZXQgcHJvbWlzZTIgPSByZWplY3QobmV3IEVycm9yKFwiMlwiKSk7XG4gICAgbGV0IHByb21pc2UzID0gcmVqZWN0KG5ldyBFcnJvcihcIjNcIikpO1xuICAgIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oYXJyYXkpe1xuICAgICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnMgYmVjYXVzZSB0aGVyZSBhcmUgcmVqZWN0ZWQgcHJvbWlzZXMhXG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIC8vIGVycm9yLm1lc3NhZ2UgPT09IFwiMlwiXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBAbWV0aG9kIGFsbFxuICAgIEBzdGF0aWNcbiAgICBAcGFyYW0ge0FycmF5fSBlbnRyaWVzIGFycmF5IG9mIHByb21pc2VzXG4gICAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9IHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiBhbGwgYHByb21pc2VzYCBoYXZlIGJlZW5cbiAgICBmdWxmaWxsZWQsIG9yIHJlamVjdGVkIGlmIGFueSBvZiB0aGVtIGJlY29tZSByZWplY3RlZC5cbiAgICBAc3RhdGljXG4gICovXG4gIGZ1bmN0aW9uIGFsbChlbnRyaWVzKSB7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdG9yKHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG4gIH1cblxuICAvKipcbiAgICBgUHJvbWlzZS5yYWNlYCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2ggaXMgc2V0dGxlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlXG4gICAgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gc2V0dGxlLlxuXG4gICAgRXhhbXBsZTpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIDInKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG5cbiAgICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgIC8vIHJlc3VsdCA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBpdCB3YXMgcmVzb2x2ZWQgYmVmb3JlIHByb21pc2UxXG4gICAgICAvLyB3YXMgcmVzb2x2ZWQuXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBgUHJvbWlzZS5yYWNlYCBpcyBkZXRlcm1pbmlzdGljIGluIHRoYXQgb25seSB0aGUgc3RhdGUgb2YgdGhlIGZpcnN0XG4gICAgc2V0dGxlZCBwcm9taXNlIG1hdHRlcnMuIEZvciBleGFtcGxlLCBldmVuIGlmIG90aGVyIHByb21pc2VzIGdpdmVuIHRvIHRoZVxuICAgIGBwcm9taXNlc2AgYXJyYXkgYXJndW1lbnQgYXJlIHJlc29sdmVkLCBidXQgdGhlIGZpcnN0IHNldHRsZWQgcHJvbWlzZSBoYXNcbiAgICBiZWNvbWUgcmVqZWN0ZWQgYmVmb3JlIHRoZSBvdGhlciBwcm9taXNlcyBiZWNhbWUgZnVsZmlsbGVkLCB0aGUgcmV0dXJuZWRcbiAgICBwcm9taXNlIHdpbGwgYmVjb21lIHJlamVjdGVkOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ3Byb21pc2UgMicpKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG5cbiAgICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIHByb21pc2UgMiBiZWNhbWUgcmVqZWN0ZWQgYmVmb3JlXG4gICAgICAvLyBwcm9taXNlIDEgYmVjYW1lIGZ1bGZpbGxlZFxuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgQW4gZXhhbXBsZSByZWFsLXdvcmxkIHVzZSBjYXNlIGlzIGltcGxlbWVudGluZyB0aW1lb3V0czpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBQcm9taXNlLnJhY2UoW2FqYXgoJ2Zvby5qc29uJyksIHRpbWVvdXQoNTAwMCldKVxuICAgIGBgYFxuXG4gICAgQG1ldGhvZCByYWNlXG4gICAgQHN0YXRpY1xuICAgIEBwYXJhbSB7QXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIHRvIG9ic2VydmVcbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHdoaWNoIHNldHRsZXMgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZSBmaXJzdCBwYXNzZWRcbiAgICBwcm9taXNlIHRvIHNldHRsZS5cbiAgKi9cbiAgZnVuY3Rpb24gcmFjZShlbnRyaWVzKSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgaWYgKCFpc0FycmF5KGVudHJpZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChfLCByZWplY3QpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAgYFByb21pc2UucmVqZWN0YCByZXR1cm5zIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBwYXNzZWQgYHJlYXNvbmAuXG4gICAgSXQgaXMgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcbiAgICB9KTtcblxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAvLyBDb2RlIGhlcmUgZG9lc24ndCBydW4gYmVjYXVzZSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCFcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdXSE9PUFMnXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcblxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAvLyBDb2RlIGhlcmUgZG9lc24ndCBydW4gYmVjYXVzZSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCFcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdXSE9PUFMnXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBAbWV0aG9kIHJlamVjdFxuICAgIEBzdGF0aWNcbiAgICBAcGFyYW0ge0FueX0gcmVhc29uIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCB3aXRoLlxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgZ2l2ZW4gYHJlYXNvbmAuXG4gICovXG4gIGZ1bmN0aW9uIHJlamVjdCQxKHJlYXNvbikge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcbiAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5lZWRzUmVzb2x2ZXIoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhIHJlc29sdmVyIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmVlZHNOZXcoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTtcbiAgfVxuXG4gIC8qKlxuICAgIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcbiAgICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICAgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICAgIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXG4gICAgVGVybWlub2xvZ3lcbiAgICAtLS0tLS0tLS0tLVxuXG4gICAgLSBgcHJvbWlzZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHdpdGggYSBgdGhlbmAgbWV0aG9kIHdob3NlIGJlaGF2aW9yIGNvbmZvcm1zIHRvIHRoaXMgc3BlY2lmaWNhdGlvbi5cbiAgICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gICAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAgIC0gYGV4Y2VwdGlvbmAgaXMgYSB2YWx1ZSB0aGF0IGlzIHRocm93biB1c2luZyB0aGUgdGhyb3cgc3RhdGVtZW50LlxuICAgIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICAgIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblxuICAgIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gICAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICAgIHJlamVjdGVkIHN0YXRlLiAgQSBmdWxmaWxsbWVudCB2YWx1ZSBpcyBuZXZlciBhIHRoZW5hYmxlLlxuXG4gICAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gICAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICAgIHNldHRsZWQgc3RhdGUuICBTbyBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IHJlamVjdHMgd2lsbFxuICAgIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gICAgQmFzaWMgVXNhZ2U6XG4gICAgLS0tLS0tLS0tLS0tXG5cbiAgICBgYGBqc1xuICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBvbiBzdWNjZXNzXG4gICAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgICAgLy8gb24gZmFpbHVyZVxuICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG5cbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAvLyBvbiByZWplY3Rpb25cbiAgICB9KTtcbiAgICBgYGBcblxuICAgIEFkdmFuY2VkIFVzYWdlOlxuICAgIC0tLS0tLS0tLS0tLS0tLVxuXG4gICAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICAgIGBYTUxIdHRwUmVxdWVzdGBzLlxuXG4gICAgYGBganNcbiAgICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGhhbmRsZXI7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRKU09OKCcvcG9zdHMuanNvbicpLnRoZW4oZnVuY3Rpb24oanNvbikge1xuICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgVW5saWtlIGNhbGxiYWNrcywgcHJvbWlzZXMgYXJlIGdyZWF0IGNvbXBvc2FibGUgcHJpbWl0aXZlcy5cblxuICAgIGBgYGpzXG4gICAgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0SlNPTignL3Bvc3RzJyksXG4gICAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICAgIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cbiAgICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9KTtcbiAgICBgYGBcblxuICAgIEBjbGFzcyBQcm9taXNlXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZXJcbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQGNvbnN0cnVjdG9yXG4gICovXG5cbiAgdmFyIFByb21pc2UkMiA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG4gICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9taXNlKTtcblxuICAgICAgdGhpc1tQUk9NSVNFX0lEXSA9IG5leHRJZCgpO1xuICAgICAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgICBpZiAobm9vcCAhPT0gcmVzb2x2ZXIpIHtcbiAgICAgICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgICAgdGhpcyBpbnN0YW5jZW9mIFByb21pc2UgPyBpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcikgOiBuZWVkc05ldygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgIFRoZSBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLFxuICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gICAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuICAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gICAgfSk7XG4gICAgYGBgXG4gICAgIENoYWluaW5nXG4gICAgLS0tLS0tLS1cbiAgICAgVGhlIHJldHVybiB2YWx1ZSBvZiBgdGhlbmAgaXMgaXRzZWxmIGEgcHJvbWlzZS4gIFRoaXMgc2Vjb25kLCAnZG93bnN0cmVhbSdcbiAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gICAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG4gICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gdXNlci5uYW1lO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuICAgICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gICAgfSk7XG4gICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICAgIH0pO1xuICAgIGBgYFxuICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuICAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICAgIH0pO1xuICAgIGBgYFxuICAgICBBc3NpbWlsYXRpb25cbiAgICAtLS0tLS0tLS0tLS1cbiAgICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gICAgZnVsZmlsbG1lbnQgb3IgcmVqZWN0aW9uIGhhbmRsZXIuIFRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCB0aGVuIGJlIHBlbmRpbmdcbiAgICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cbiAgICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgLy8gVGhlIHVzZXIncyBjb21tZW50cyBhcmUgbm93IGF2YWlsYWJsZVxuICAgIH0pO1xuICAgIGBgYFxuICAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cbiAgICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgICB9KTtcbiAgICBgYGBcbiAgICAgU2ltcGxlIEV4YW1wbGVcbiAgICAtLS0tLS0tLS0tLS0tLVxuICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG4gICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcmVzdWx0O1xuICAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfVxuICAgIGBgYFxuICAgICBFcnJiYWNrIEV4YW1wbGVcbiAgICAgYGBganNcbiAgICBmaW5kUmVzdWx0KGZ1bmN0aW9uKHJlc3VsdCwgZXJyKXtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGBgYFxuICAgICBQcm9taXNlIEV4YW1wbGU7XG4gICAgIGBgYGphdmFzY3JpcHRcbiAgICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfSk7XG4gICAgYGBgXG4gICAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgICAtLS0tLS0tLS0tLS0tLVxuICAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG4gICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgYXV0aG9yLCBib29rcztcbiAgICAgdHJ5IHtcbiAgICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9XG4gICAgYGBgXG4gICAgIEVycmJhY2sgRXhhbXBsZVxuICAgICBgYGBqc1xuICAgICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG4gICAgIH1cbiAgICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcbiAgICAgfVxuICAgICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICBmYWlsdXJlKHJlYXNvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9XG4gICAgfSk7XG4gICAgYGBgXG4gICAgIFByb21pc2UgRXhhbXBsZTtcbiAgICAgYGBgamF2YXNjcmlwdFxuICAgIGZpbmRBdXRob3IoKS5cbiAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgICAgdGhlbihmdW5jdGlvbihib29rcyl7XG4gICAgICAgIC8vIGZvdW5kIGJvb2tzXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfSk7XG4gICAgYGBgXG4gICAgIEBtZXRob2QgdGhlblxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG5cbiAgICAvKipcbiAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cbiAgICBgYGBqc1xuICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICB9XG4gICAgLy8gc3luY2hyb25vdXNcbiAgICB0cnkge1xuICAgIGZpbmRBdXRob3IoKTtcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfVxuICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH0pO1xuICAgIGBgYFxuICAgIEBtZXRob2QgY2F0Y2hcbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG5cblxuICAgIGNyZWF0ZUNsYXNzKFByb21pc2UsIFt7XG4gICAgICBrZXk6ICdjYXRjaCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgYGZpbmFsbHlgIHdpbGwgYmUgaW52b2tlZCByZWdhcmRsZXNzIG9mIHRoZSBwcm9taXNlJ3MgZmF0ZSBqdXN0IGFzIG5hdGl2ZVxuICAgICAgICB0cnkvY2F0Y2gvZmluYWxseSBiZWhhdmVzXG4gICAgICBcbiAgICAgICAgU3luY2hyb25vdXMgZXhhbXBsZTpcbiAgICAgIFxuICAgICAgICBgYGBqc1xuICAgICAgICBmaW5kQXV0aG9yKCkge1xuICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBBdXRob3IoKTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGZpbmRBdXRob3IoKTsgLy8gc3VjY2VlZCBvciBmYWlsXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZmluZE90aGVyQXV0aGVyKCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgLy8gYWx3YXlzIHJ1bnNcbiAgICAgICAgICAvLyBkb2Vzbid0IGFmZmVjdCB0aGUgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgYGBgXG4gICAgICBcbiAgICAgICAgQXN5bmNocm9ub3VzIGV4YW1wbGU6XG4gICAgICBcbiAgICAgICAgYGBganNcbiAgICAgICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAgICAgcmV0dXJuIGZpbmRPdGhlckF1dGhlcigpO1xuICAgICAgICB9KS5maW5hbGx5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgLy8gYXV0aG9yIHdhcyBlaXRoZXIgZm91bmQsIG9yIG5vdFxuICAgICAgICB9KTtcbiAgICAgICAgYGBgXG4gICAgICBcbiAgICAgICAgQG1ldGhvZCBmaW5hbGx5XG4gICAgICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnZmluYWxseScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmFsbHkoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwcm9taXNlLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHJvbWlzZTtcbiAgfSgpO1xuXG4gIFByb21pc2UkMi5wcm90b3R5cGUudGhlbiA9IHRoZW47XG4gIFByb21pc2UkMi5hbGwgPSBhbGw7XG4gIFByb21pc2UkMi5yYWNlID0gcmFjZTtcbiAgUHJvbWlzZSQyLnJlc29sdmUgPSByZXNvbHZlJDE7XG4gIFByb21pc2UkMi5yZWplY3QgPSByZWplY3QkMTtcbiAgUHJvbWlzZSQyLl9zZXRTY2hlZHVsZXIgPSBzZXRTY2hlZHVsZXI7XG4gIFByb21pc2UkMi5fc2V0QXNhcCA9IHNldEFzYXA7XG4gIFByb21pc2UkMi5fYXNhcCA9IGFzYXA7XG5cbiAgLypnbG9iYWwgc2VsZiovXG4gIGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIHZhciBsb2NhbCA9IHZvaWQgMDtcblxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbG9jYWwgPSBnbG9iYWw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxvY2FsID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBQID0gbG9jYWwuUHJvbWlzZTtcblxuICAgIGlmIChQKSB7XG4gICAgICB2YXIgcHJvbWlzZVRvU3RyaW5nID0gbnVsbDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByb21pc2VUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChQLnJlc29sdmUoKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIHNpbGVudGx5IGlnbm9yZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2VUb1N0cmluZyA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsLlByb21pc2UgPSBQcm9taXNlJDI7XG4gIH1cblxuICAvLyBTdHJhbmdlIGNvbXBhdC4uXG4gIFByb21pc2UkMi5wb2x5ZmlsbCA9IHBvbHlmaWxsO1xuICBQcm9taXNlJDIuUHJvbWlzZSA9IFByb21pc2UkMjtcblxuICB2YXIgUHJvbWlzZSQxID0gdHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgPyBQcm9taXNlIDogUHJvbWlzZSQyO1xuXG4gIC8vIFJlZ2lzdGVyIGxvZ2dpbmcgY2FsbGJhY2tzXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2luZ0NhbGxiYWNrcyhvYmopIHtcbiAgXHR2YXIgaSxcbiAgXHQgICAgbCxcbiAgXHQgICAga2V5LFxuICBcdCAgICBjYWxsYmFja05hbWVzID0gW1wiYmVnaW5cIiwgXCJkb25lXCIsIFwibG9nXCIsIFwidGVzdFN0YXJ0XCIsIFwidGVzdERvbmVcIiwgXCJtb2R1bGVTdGFydFwiLCBcIm1vZHVsZURvbmVcIl07XG5cbiAgXHRmdW5jdGlvbiByZWdpc3RlckxvZ2dpbmdDYWxsYmFjayhrZXkpIHtcbiAgXHRcdHZhciBsb2dnaW5nQ2FsbGJhY2sgPSBmdW5jdGlvbiBsb2dnaW5nQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgXHRcdFx0aWYgKG9iamVjdFR5cGUoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJRVW5pdCBsb2dnaW5nIG1ldGhvZHMgcmVxdWlyZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIGFzIHRoZWlyIGZpcnN0IHBhcmFtZXRlcnMuXCIpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0Y29uZmlnLmNhbGxiYWNrc1trZXldLnB1c2goY2FsbGJhY2spO1xuICBcdFx0fTtcblxuICBcdFx0cmV0dXJuIGxvZ2dpbmdDYWxsYmFjaztcbiAgXHR9XG5cbiAgXHRmb3IgKGkgPSAwLCBsID0gY2FsbGJhY2tOYW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgXHRcdGtleSA9IGNhbGxiYWNrTmFtZXNbaV07XG5cbiAgXHRcdC8vIEluaXRpYWxpemUga2V5IGNvbGxlY3Rpb24gb2YgbG9nZ2luZyBjYWxsYmFja1xuICBcdFx0aWYgKG9iamVjdFR5cGUoY29uZmlnLmNhbGxiYWNrc1trZXldKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBcdFx0XHRjb25maWcuY2FsbGJhY2tzW2tleV0gPSBbXTtcbiAgXHRcdH1cblxuICBcdFx0b2JqW2tleV0gPSByZWdpc3RlckxvZ2dpbmdDYWxsYmFjayhrZXkpO1xuICBcdH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bkxvZ2dpbmdDYWxsYmFja3Moa2V5LCBhcmdzKSB7XG4gIFx0dmFyIGNhbGxiYWNrcyA9IGNvbmZpZy5jYWxsYmFja3Nba2V5XTtcblxuICBcdC8vIEhhbmRsaW5nICdsb2cnIGNhbGxiYWNrcyBzZXBhcmF0ZWx5LiBVbmxpa2UgdGhlIG90aGVyIGNhbGxiYWNrcyxcbiAgXHQvLyB0aGUgbG9nIGNhbGxiYWNrIGlzIG5vdCBjb250cm9sbGVkIGJ5IHRoZSBwcm9jZXNzaW5nIHF1ZXVlLFxuICBcdC8vIGJ1dCByYXRoZXIgdXNlZCBieSBhc3NlcnRzLiBIZW5jZSB0byBwcm9taXNmeSB0aGUgJ2xvZycgY2FsbGJhY2tcbiAgXHQvLyB3b3VsZCBtZWFuIHByb21pc2Z5aW5nIGVhY2ggc3RlcCBvZiBhIHRlc3RcbiAgXHRpZiAoa2V5ID09PSBcImxvZ1wiKSB7XG4gIFx0XHRjYWxsYmFja3MubWFwKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBcdFx0XHRyZXR1cm4gY2FsbGJhY2soYXJncyk7XG4gIFx0XHR9KTtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHQvLyBlbnN1cmUgdGhhdCBlYWNoIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIHNlcmlhbGx5XG4gIFx0cmV0dXJuIGNhbGxiYWNrcy5yZWR1Y2UoZnVuY3Rpb24gKHByb21pc2VDaGFpbiwgY2FsbGJhY2spIHtcbiAgXHRcdHJldHVybiBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHJldHVybiBQcm9taXNlJDEucmVzb2x2ZShjYWxsYmFjayhhcmdzKSk7XG4gIFx0XHR9KTtcbiAgXHR9LCBQcm9taXNlJDEucmVzb2x2ZShbXSkpO1xuICB9XG5cbiAgLy8gRG9lc24ndCBzdXBwb3J0IElFOSwgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkIG9uIHRoZXNlIGJyb3dzZXJzXG4gIC8vIFNlZSBhbHNvIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yL1N0YWNrXG4gIHZhciBmaWxlTmFtZSA9IChzb3VyY2VGcm9tU3RhY2t0cmFjZSgwKSB8fCBcIlwiKS5yZXBsYWNlKC8oOlxcZCspK1xcKT8vLCBcIlwiKS5yZXBsYWNlKC8uK1xcLy8sIFwiXCIpO1xuXG4gIGZ1bmN0aW9uIGV4dHJhY3RTdGFja3RyYWNlKGUsIG9mZnNldCkge1xuICBcdG9mZnNldCA9IG9mZnNldCA9PT0gdW5kZWZpbmVkID8gNCA6IG9mZnNldDtcblxuICBcdHZhciBzdGFjaywgaW5jbHVkZSwgaTtcblxuICBcdGlmIChlICYmIGUuc3RhY2spIHtcbiAgXHRcdHN0YWNrID0gZS5zdGFjay5zcGxpdChcIlxcblwiKTtcbiAgXHRcdGlmICgvXmVycm9yJC9pLnRlc3Qoc3RhY2tbMF0pKSB7XG4gIFx0XHRcdHN0YWNrLnNoaWZ0KCk7XG4gIFx0XHR9XG4gIFx0XHRpZiAoZmlsZU5hbWUpIHtcbiAgXHRcdFx0aW5jbHVkZSA9IFtdO1xuICBcdFx0XHRmb3IgKGkgPSBvZmZzZXQ7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdGlmIChzdGFja1tpXS5pbmRleE9mKGZpbGVOYW1lKSAhPT0gLTEpIHtcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRpbmNsdWRlLnB1c2goc3RhY2tbaV0pO1xuICBcdFx0XHR9XG4gIFx0XHRcdGlmIChpbmNsdWRlLmxlbmd0aCkge1xuICBcdFx0XHRcdHJldHVybiBpbmNsdWRlLmpvaW4oXCJcXG5cIik7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHRcdHJldHVybiBzdGFja1tvZmZzZXRdO1xuICBcdH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNvdXJjZUZyb21TdGFja3RyYWNlKG9mZnNldCkge1xuICBcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXG4gIFx0Ly8gU3VwcG9ydDogU2FmYXJpIDw9NyBvbmx5LCBJRSA8PTEwIC0gMTEgb25seVxuICBcdC8vIE5vdCBhbGwgYnJvd3NlcnMgZ2VuZXJhdGUgdGhlIGBzdGFja2AgcHJvcGVydHkgZm9yIGBuZXcgRXJyb3IoKWAsIHNlZSBhbHNvICM2MzZcbiAgXHRpZiAoIWVycm9yLnN0YWNrKSB7XG4gIFx0XHR0cnkge1xuICBcdFx0XHR0aHJvdyBlcnJvcjtcbiAgXHRcdH0gY2F0Y2ggKGVycikge1xuICBcdFx0XHRlcnJvciA9IGVycjtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRyZXR1cm4gZXh0cmFjdFN0YWNrdHJhY2UoZXJyb3IsIG9mZnNldCk7XG4gIH1cblxuICB2YXIgcHJpb3JpdHlDb3VudCA9IDA7XG4gIHZhciB1bml0U2FtcGxlciA9IHZvaWQgMDtcblxuICAvLyBUaGlzIGlzIGEgcXVldWUgb2YgZnVuY3Rpb25zIHRoYXQgYXJlIHRhc2tzIHdpdGhpbiBhIHNpbmdsZSB0ZXN0LlxuICAvLyBBZnRlciB0ZXN0cyBhcmUgZGVxdWV1ZWQgZnJvbSBjb25maWcucXVldWUgdGhleSBhcmUgZXhwYW5kZWQgaW50b1xuICAvLyBhIHNldCBvZiB0YXNrcyBpbiB0aGlzIHF1ZXVlLlxuICB2YXIgdGFza1F1ZXVlID0gW107XG5cbiAgLyoqXG4gICAqIEFkdmFuY2VzIHRoZSB0YXNrUXVldWUgdG8gdGhlIG5leHQgdGFzay4gSWYgdGhlIHRhc2tRdWV1ZSBpcyBlbXB0eSxcbiAgICogcHJvY2VzcyB0aGUgdGVzdFF1ZXVlXG4gICAqL1xuICBmdW5jdGlvbiBhZHZhbmNlKCkge1xuICBcdGFkdmFuY2VUYXNrUXVldWUoKTtcblxuICBcdGlmICghdGFza1F1ZXVlLmxlbmd0aCAmJiAhY29uZmlnLmJsb2NraW5nICYmICFjb25maWcuY3VycmVudCkge1xuICBcdFx0YWR2YW5jZVRlc3RRdWV1ZSgpO1xuICBcdH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgdGFza1F1ZXVlIHdpdGggYW4gaW5jcmVhc2VkIGRlcHRoXG4gICAqL1xuICBmdW5jdGlvbiBhZHZhbmNlVGFza1F1ZXVlKCkge1xuICBcdHZhciBzdGFydCA9IG5vdygpO1xuICBcdGNvbmZpZy5kZXB0aCA9IChjb25maWcuZGVwdGggfHwgMCkgKyAxO1xuXG4gIFx0cHJvY2Vzc1Rhc2tRdWV1ZShzdGFydCk7XG5cbiAgXHRjb25maWcuZGVwdGgtLTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHRoZSBmaXJzdCB0YXNrIG9uIHRoZSB0YXNrUXVldWUgYXMgYSBwcm9taXNlLlxuICAgKiBFYWNoIHRhc2sgaXMgYSBmdW5jdGlvbiByZXR1cm5lZCBieSBodHRwczovL2dpdGh1Yi5jb20vcXVuaXRqcy9xdW5pdC9ibG9iL21hc3Rlci9zcmMvdGVzdC5qcyNMMzgxXG4gICAqL1xuICBmdW5jdGlvbiBwcm9jZXNzVGFza1F1ZXVlKHN0YXJ0KSB7XG4gIFx0aWYgKHRhc2tRdWV1ZS5sZW5ndGggJiYgIWNvbmZpZy5ibG9ja2luZykge1xuICBcdFx0dmFyIGVsYXBzZWRUaW1lID0gbm93KCkgLSBzdGFydDtcblxuICBcdFx0aWYgKCFkZWZpbmVkLnNldFRpbWVvdXQgfHwgY29uZmlnLnVwZGF0ZVJhdGUgPD0gMCB8fCBlbGFwc2VkVGltZSA8IGNvbmZpZy51cGRhdGVSYXRlKSB7XG4gIFx0XHRcdHZhciB0YXNrID0gdGFza1F1ZXVlLnNoaWZ0KCk7XG4gIFx0XHRcdFByb21pc2UkMS5yZXNvbHZlKHRhc2soKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0aWYgKCF0YXNrUXVldWUubGVuZ3RoKSB7XG4gIFx0XHRcdFx0XHRhZHZhbmNlKCk7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHByb2Nlc3NUYXNrUXVldWUoc3RhcnQpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fSk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRzZXRUaW1lb3V0JDEoYWR2YW5jZSk7XG4gIFx0XHR9XG4gIFx0fVxuICB9XG5cbiAgLyoqXG4gICAqIEFkdmFuY2UgdGhlIHRlc3RRdWV1ZSB0byB0aGUgbmV4dCB0ZXN0IHRvIHByb2Nlc3MuIENhbGwgZG9uZSgpIGlmIHRlc3RRdWV1ZSBjb21wbGV0ZXMuXG4gICAqL1xuICBmdW5jdGlvbiBhZHZhbmNlVGVzdFF1ZXVlKCkge1xuICBcdGlmICghY29uZmlnLmJsb2NraW5nICYmICFjb25maWcucXVldWUubGVuZ3RoICYmIGNvbmZpZy5kZXB0aCA9PT0gMCkge1xuICBcdFx0ZG9uZSgpO1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHZhciB0ZXN0VGFza3MgPSBjb25maWcucXVldWUuc2hpZnQoKTtcbiAgXHRhZGRUb1Rhc2tRdWV1ZSh0ZXN0VGFza3MoKSk7XG5cbiAgXHRpZiAocHJpb3JpdHlDb3VudCA+IDApIHtcbiAgXHRcdHByaW9yaXR5Q291bnQtLTtcbiAgXHR9XG5cbiAgXHRhZHZhbmNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRW5xdWV1ZSB0aGUgdGFza3MgZm9yIGEgdGVzdCBpbnRvIHRoZSB0YXNrIHF1ZXVlLlxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrc0FycmF5XG4gICAqL1xuICBmdW5jdGlvbiBhZGRUb1Rhc2tRdWV1ZSh0YXNrc0FycmF5KSB7XG4gIFx0dGFza1F1ZXVlLnB1c2guYXBwbHkodGFza1F1ZXVlLCB0b0NvbnN1bWFibGVBcnJheSh0YXNrc0FycmF5KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBudW1iZXIgb2YgdGFza3MgcmVtYWluaW5nIGluIHRoZSB0YXNrIHF1ZXVlIHRvIGJlIHByb2Nlc3NlZC5cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gdGFza1F1ZXVlTGVuZ3RoKCkge1xuICBcdHJldHVybiB0YXNrUXVldWUubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0ZXN0IHRvIHRoZSBUZXN0UXVldWUgZm9yIGV4ZWN1dGlvbi5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gdGVzdFRhc2tzRnVuY1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByaW9yaXRpemVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHNlZWRcbiAgICovXG4gIGZ1bmN0aW9uIGFkZFRvVGVzdFF1ZXVlKHRlc3RUYXNrc0Z1bmMsIHByaW9yaXRpemUsIHNlZWQpIHtcbiAgXHRpZiAocHJpb3JpdGl6ZSkge1xuICBcdFx0Y29uZmlnLnF1ZXVlLnNwbGljZShwcmlvcml0eUNvdW50KyssIDAsIHRlc3RUYXNrc0Z1bmMpO1xuICBcdH0gZWxzZSBpZiAoc2VlZCkge1xuICBcdFx0aWYgKCF1bml0U2FtcGxlcikge1xuICBcdFx0XHR1bml0U2FtcGxlciA9IHVuaXRTYW1wbGVyR2VuZXJhdG9yKHNlZWQpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBJbnNlcnQgaW50byBhIHJhbmRvbSBwb3NpdGlvbiBhZnRlciBhbGwgcHJpb3JpdGl6ZWQgaXRlbXNcbiAgXHRcdHZhciBpbmRleCA9IE1hdGguZmxvb3IodW5pdFNhbXBsZXIoKSAqIChjb25maWcucXVldWUubGVuZ3RoIC0gcHJpb3JpdHlDb3VudCArIDEpKTtcbiAgXHRcdGNvbmZpZy5xdWV1ZS5zcGxpY2UocHJpb3JpdHlDb3VudCArIGluZGV4LCAwLCB0ZXN0VGFza3NGdW5jKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0Y29uZmlnLnF1ZXVlLnB1c2godGVzdFRhc2tzRnVuYyk7XG4gIFx0fVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzZWVkZWQgXCJzYW1wbGVcIiBnZW5lcmF0b3Igd2hpY2ggaXMgdXNlZCBmb3IgcmFuZG9taXppbmcgdGVzdHMuXG4gICAqL1xuICBmdW5jdGlvbiB1bml0U2FtcGxlckdlbmVyYXRvcihzZWVkKSB7XG5cbiAgXHQvLyAzMi1iaXQgeG9yc2hpZnQsIHJlcXVpcmVzIG9ubHkgYSBub256ZXJvIHNlZWRcbiAgXHQvLyBodHRwOi8vZXhjYW1lcmEuY29tL3NwaGlueC9hcnRpY2xlLXhvcnNoaWZ0Lmh0bWxcbiAgXHR2YXIgc2FtcGxlID0gcGFyc2VJbnQoZ2VuZXJhdGVIYXNoKHNlZWQpLCAxNikgfHwgLTE7XG4gIFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgXHRcdHNhbXBsZSBePSBzYW1wbGUgPDwgMTM7XG4gIFx0XHRzYW1wbGUgXj0gc2FtcGxlID4+PiAxNztcbiAgXHRcdHNhbXBsZSBePSBzYW1wbGUgPDwgNTtcblxuICBcdFx0Ly8gRUNNQVNjcmlwdCBoYXMgbm8gdW5zaWduZWQgbnVtYmVyIHR5cGVcbiAgXHRcdGlmIChzYW1wbGUgPCAwKSB7XG4gIFx0XHRcdHNhbXBsZSArPSAweDEwMDAwMDAwMDtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIHNhbXBsZSAvIDB4MTAwMDAwMDAwO1xuICBcdH07XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgUHJvY2Vzc2luZ1F1ZXVlIGlzIGRvbmUgcHJvY2Vzc2luZyBhbGxcbiAgICogaXRlbXMuIEl0IGhhbmRsZXMgZW1pdHRpbmcgdGhlIGZpbmFsIHJ1biBldmVudHMuXG4gICAqL1xuICBmdW5jdGlvbiBkb25lKCkge1xuICBcdHZhciBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XG5cbiAgXHRQcm9jZXNzaW5nUXVldWUuZmluaXNoZWQgPSB0cnVlO1xuXG4gIFx0dmFyIHJ1bnRpbWUgPSBub3coKSAtIGNvbmZpZy5zdGFydGVkO1xuICBcdHZhciBwYXNzZWQgPSBjb25maWcuc3RhdHMuYWxsIC0gY29uZmlnLnN0YXRzLmJhZDtcblxuICBcdGlmIChjb25maWcuc3RhdHMuYWxsID09PSAwKSB7XG5cbiAgXHRcdGlmIChjb25maWcuZmlsdGVyICYmIGNvbmZpZy5maWx0ZXIubGVuZ3RoKSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHRlc3RzIG1hdGNoZWQgdGhlIGZpbHRlciBcXFwiXCIgKyBjb25maWcuZmlsdGVyICsgXCJcXFwiLlwiKTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbmZpZy5tb2R1bGUgJiYgY29uZmlnLm1vZHVsZS5sZW5ndGgpIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdGVzdHMgbWF0Y2hlZCB0aGUgbW9kdWxlIFxcXCJcIiArIGNvbmZpZy5tb2R1bGUgKyBcIlxcXCIuXCIpO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29uZmlnLm1vZHVsZUlkICYmIGNvbmZpZy5tb2R1bGVJZC5sZW5ndGgpIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdGVzdHMgbWF0Y2hlZCB0aGUgbW9kdWxlSWQgXFxcIlwiICsgY29uZmlnLm1vZHVsZUlkICsgXCJcXFwiLlwiKTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbmZpZy50ZXN0SWQgJiYgY29uZmlnLnRlc3RJZC5sZW5ndGgpIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdGVzdHMgbWF0Y2hlZCB0aGUgdGVzdElkIFxcXCJcIiArIGNvbmZpZy50ZXN0SWQgKyBcIlxcXCIuXCIpO1xuICBcdFx0fVxuXG4gIFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyB0ZXN0cyB3ZXJlIHJ1bi5cIik7XG4gIFx0fVxuXG4gIFx0ZW1pdChcInJ1bkVuZFwiLCBnbG9iYWxTdWl0ZS5lbmQodHJ1ZSkpO1xuICBcdHJ1bkxvZ2dpbmdDYWxsYmFja3MoXCJkb25lXCIsIHtcbiAgXHRcdHBhc3NlZDogcGFzc2VkLFxuICBcdFx0ZmFpbGVkOiBjb25maWcuc3RhdHMuYmFkLFxuICBcdFx0dG90YWw6IGNvbmZpZy5zdGF0cy5hbGwsXG4gIFx0XHRydW50aW1lOiBydW50aW1lXG4gIFx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG5cbiAgXHRcdC8vIENsZWFyIG93biBzdG9yYWdlIGl0ZW1zIGlmIGFsbCB0ZXN0cyBwYXNzZWRcbiAgXHRcdGlmIChzdG9yYWdlICYmIGNvbmZpZy5zdGF0cy5iYWQgPT09IDApIHtcbiAgXHRcdFx0Zm9yICh2YXIgaSA9IHN0b3JhZ2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgXHRcdFx0XHR2YXIga2V5ID0gc3RvcmFnZS5rZXkoaSk7XG5cbiAgXHRcdFx0XHRpZiAoa2V5LmluZGV4T2YoXCJxdW5pdC10ZXN0LVwiKSA9PT0gMCkge1xuICBcdFx0XHRcdFx0c3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fSk7XG4gIH1cblxuICB2YXIgUHJvY2Vzc2luZ1F1ZXVlID0ge1xuICBcdGZpbmlzaGVkOiBmYWxzZSxcbiAgXHRhZGQ6IGFkZFRvVGVzdFF1ZXVlLFxuICBcdGFkdmFuY2U6IGFkdmFuY2UsXG4gIFx0dGFza0NvdW50OiB0YXNrUXVldWVMZW5ndGhcbiAgfTtcblxuICB2YXIgVGVzdFJlcG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgXHRmdW5jdGlvbiBUZXN0UmVwb3J0KG5hbWUsIHN1aXRlLCBvcHRpb25zKSB7XG4gIFx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBUZXN0UmVwb3J0KTtcblxuICBcdFx0dGhpcy5uYW1lID0gbmFtZTtcbiAgXHRcdHRoaXMuc3VpdGVOYW1lID0gc3VpdGUubmFtZTtcbiAgXHRcdHRoaXMuZnVsbE5hbWUgPSBzdWl0ZS5mdWxsTmFtZS5jb25jYXQobmFtZSk7XG4gIFx0XHR0aGlzLnJ1bnRpbWUgPSAwO1xuICBcdFx0dGhpcy5hc3NlcnRpb25zID0gW107XG5cbiAgXHRcdHRoaXMuc2tpcHBlZCA9ICEhb3B0aW9ucy5za2lwO1xuICBcdFx0dGhpcy50b2RvID0gISFvcHRpb25zLnRvZG87XG5cbiAgXHRcdHRoaXMudmFsaWQgPSBvcHRpb25zLnZhbGlkO1xuXG4gIFx0XHR0aGlzLl9zdGFydFRpbWUgPSAwO1xuICBcdFx0dGhpcy5fZW5kVGltZSA9IDA7XG5cbiAgXHRcdHN1aXRlLnB1c2hUZXN0KHRoaXMpO1xuICBcdH1cblxuICBcdGNyZWF0ZUNsYXNzKFRlc3RSZXBvcnQsIFt7XG4gIFx0XHRrZXk6IFwic3RhcnRcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBzdGFydChyZWNvcmRUaW1lKSB7XG4gIFx0XHRcdGlmIChyZWNvcmRUaW1lKSB7XG4gIFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gcGVyZm9ybWFuY2VOb3coKTtcbiAgXHRcdFx0XHRpZiAocGVyZm9ybWFuY2UpIHtcbiAgXHRcdFx0XHRcdHBlcmZvcm1hbmNlLm1hcmsoXCJxdW5pdF90ZXN0X3N0YXJ0XCIpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHJldHVybiB7XG4gIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxuICBcdFx0XHRcdHN1aXRlTmFtZTogdGhpcy5zdWl0ZU5hbWUsXG4gIFx0XHRcdFx0ZnVsbE5hbWU6IHRoaXMuZnVsbE5hbWUuc2xpY2UoKVxuICBcdFx0XHR9O1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJlbmRcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmQocmVjb3JkVGltZSkge1xuICBcdFx0XHRpZiAocmVjb3JkVGltZSkge1xuICBcdFx0XHRcdHRoaXMuX2VuZFRpbWUgPSBwZXJmb3JtYW5jZU5vdygpO1xuICBcdFx0XHRcdGlmIChwZXJmb3JtYW5jZSkge1xuICBcdFx0XHRcdFx0cGVyZm9ybWFuY2UubWFyayhcInF1bml0X3Rlc3RfZW5kXCIpO1xuXG4gIFx0XHRcdFx0XHR2YXIgdGVzdE5hbWUgPSB0aGlzLmZ1bGxOYW1lLmpvaW4oXCIg4oCTIFwiKTtcblxuICBcdFx0XHRcdFx0bWVhc3VyZShcIlFVbml0IFRlc3Q6IFwiICsgdGVzdE5hbWUsIFwicXVuaXRfdGVzdF9zdGFydFwiLCBcInF1bml0X3Rlc3RfZW5kXCIpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHJldHVybiBleHRlbmQodGhpcy5zdGFydCgpLCB7XG4gIFx0XHRcdFx0cnVudGltZTogdGhpcy5nZXRSdW50aW1lKCksXG4gIFx0XHRcdFx0c3RhdHVzOiB0aGlzLmdldFN0YXR1cygpLFxuICBcdFx0XHRcdGVycm9yczogdGhpcy5nZXRGYWlsZWRBc3NlcnRpb25zKCksXG4gIFx0XHRcdFx0YXNzZXJ0aW9uczogdGhpcy5nZXRBc3NlcnRpb25zKClcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInB1c2hBc3NlcnRpb25cIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBwdXNoQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICBcdFx0XHR0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJnZXRSdW50aW1lXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0UnVudGltZSgpIHtcbiAgXHRcdFx0cmV0dXJuIHRoaXMuX2VuZFRpbWUgLSB0aGlzLl9zdGFydFRpbWU7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImdldFN0YXR1c1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcbiAgXHRcdFx0aWYgKHRoaXMuc2tpcHBlZCkge1xuICBcdFx0XHRcdHJldHVybiBcInNraXBwZWRcIjtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHZhciB0ZXN0UGFzc2VkID0gdGhpcy5nZXRGYWlsZWRBc3NlcnRpb25zKCkubGVuZ3RoID4gMCA/IHRoaXMudG9kbyA6ICF0aGlzLnRvZG87XG5cbiAgXHRcdFx0aWYgKCF0ZXN0UGFzc2VkKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwiZmFpbGVkXCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAodGhpcy50b2RvKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwidG9kb1wiO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHJldHVybiBcInBhc3NlZFwiO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImdldEZhaWxlZEFzc2VydGlvbnNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRGYWlsZWRBc3NlcnRpb25zKCkge1xuICBcdFx0XHRyZXR1cm4gdGhpcy5hc3NlcnRpb25zLmZpbHRlcihmdW5jdGlvbiAoYXNzZXJ0aW9uKSB7XG4gIFx0XHRcdFx0cmV0dXJuICFhc3NlcnRpb24ucGFzc2VkO1xuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZ2V0QXNzZXJ0aW9uc1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEFzc2VydGlvbnMoKSB7XG4gIFx0XHRcdHJldHVybiB0aGlzLmFzc2VydGlvbnMuc2xpY2UoKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gUmVtb3ZlIGFjdHVhbCBhbmQgZXhwZWN0ZWQgdmFsdWVzIGZyb20gYXNzZXJ0aW9ucy4gVGhpcyBpcyB0byBwcmV2ZW50XG4gIFx0XHQvLyBsZWFraW5nIG1lbW9yeSB0aHJvdWdob3V0IGEgdGVzdCBzdWl0ZS5cblxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJzbGltQXNzZXJ0aW9uc1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHNsaW1Bc3NlcnRpb25zKCkge1xuICBcdFx0XHR0aGlzLmFzc2VydGlvbnMgPSB0aGlzLmFzc2VydGlvbnMubWFwKGZ1bmN0aW9uIChhc3NlcnRpb24pIHtcbiAgXHRcdFx0XHRkZWxldGUgYXNzZXJ0aW9uLmFjdHVhbDtcbiAgXHRcdFx0XHRkZWxldGUgYXNzZXJ0aW9uLmV4cGVjdGVkO1xuICBcdFx0XHRcdHJldHVybiBhc3NlcnRpb247XG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH1dKTtcbiAgXHRyZXR1cm4gVGVzdFJlcG9ydDtcbiAgfSgpO1xuXG4gIHZhciBmb2N1c2VkJDEgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBUZXN0KHNldHRpbmdzKSB7XG4gIFx0dmFyIGksIGw7XG5cbiAgXHQrK1Rlc3QuY291bnQ7XG5cbiAgXHR0aGlzLmV4cGVjdGVkID0gbnVsbDtcbiAgXHR0aGlzLmFzc2VydGlvbnMgPSBbXTtcbiAgXHR0aGlzLnNlbWFwaG9yZSA9IDA7XG4gIFx0dGhpcy5tb2R1bGUgPSBjb25maWcuY3VycmVudE1vZHVsZTtcbiAgXHR0aGlzLnN0ZXBzID0gW107XG4gIFx0dGhpcy50aW1lb3V0ID0gdW5kZWZpbmVkO1xuICBcdHRoaXMuZXJyb3JGb3JTdGFjayA9IG5ldyBFcnJvcigpO1xuXG4gIFx0Ly8gSWYgYSBtb2R1bGUgaXMgc2tpcHBlZCwgYWxsIGl0cyB0ZXN0cyBhbmQgdGhlIHRlc3RzIG9mIHRoZSBjaGlsZCBzdWl0ZXNcbiAgXHQvLyBzaG91bGQgYmUgdHJlYXRlZCBhcyBza2lwcGVkIGV2ZW4gaWYgdGhleSBhcmUgZGVmaW5lZCBhcyBgb25seWAgb3IgYHRvZG9gLlxuICBcdC8vIEFzIGZvciBgdG9kb2AgbW9kdWxlLCBhbGwgaXRzIHRlc3RzIHdpbGwgYmUgdHJlYXRlZCBhcyBgdG9kb2AgZXhjZXB0IGZvclxuICBcdC8vIHRlc3RzIGRlZmluZWQgYXMgYHNraXBgIHdoaWNoIHdpbGwgYmUgbGVmdCBpbnRhY3QuXG4gIFx0Ly9cbiAgXHQvLyBTbywgaWYgYSB0ZXN0IGlzIGRlZmluZWQgYXMgYHRvZG9gIGFuZCBpcyBpbnNpZGUgYSBza2lwcGVkIG1vZHVsZSwgd2Ugc2hvdWxkXG4gIFx0Ly8gdGhlbiB0cmVhdCB0aGF0IHRlc3QgYXMgaWYgd2FzIGRlZmluZWQgYXMgYHNraXBgLlxuICBcdGlmICh0aGlzLm1vZHVsZS5za2lwKSB7XG4gIFx0XHRzZXR0aW5ncy5za2lwID0gdHJ1ZTtcbiAgXHRcdHNldHRpbmdzLnRvZG8gPSBmYWxzZTtcblxuICBcdFx0Ly8gU2tpcHBlZCB0ZXN0cyBzaG91bGQgYmUgbGVmdCBpbnRhY3RcbiAgXHR9IGVsc2UgaWYgKHRoaXMubW9kdWxlLnRvZG8gJiYgIXNldHRpbmdzLnNraXApIHtcbiAgXHRcdHNldHRpbmdzLnRvZG8gPSB0cnVlO1xuICBcdH1cblxuICBcdGV4dGVuZCh0aGlzLCBzZXR0aW5ncyk7XG5cbiAgXHR0aGlzLnRlc3RSZXBvcnQgPSBuZXcgVGVzdFJlcG9ydChzZXR0aW5ncy50ZXN0TmFtZSwgdGhpcy5tb2R1bGUuc3VpdGVSZXBvcnQsIHtcbiAgXHRcdHRvZG86IHNldHRpbmdzLnRvZG8sXG4gIFx0XHRza2lwOiBzZXR0aW5ncy5za2lwLFxuICBcdFx0dmFsaWQ6IHRoaXMudmFsaWQoKVxuICBcdH0pO1xuXG4gIFx0Ly8gUmVnaXN0ZXIgdW5pcXVlIHN0cmluZ3NcbiAgXHRmb3IgKGkgPSAwLCBsID0gdGhpcy5tb2R1bGUudGVzdHM7IGkgPCBsLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRpZiAodGhpcy5tb2R1bGUudGVzdHNbaV0ubmFtZSA9PT0gdGhpcy50ZXN0TmFtZSkge1xuICBcdFx0XHR0aGlzLnRlc3ROYW1lICs9IFwiIFwiO1xuICBcdFx0fVxuICBcdH1cblxuICBcdHRoaXMudGVzdElkID0gZ2VuZXJhdGVIYXNoKHRoaXMubW9kdWxlLm5hbWUsIHRoaXMudGVzdE5hbWUpO1xuXG4gIFx0dGhpcy5tb2R1bGUudGVzdHMucHVzaCh7XG4gIFx0XHRuYW1lOiB0aGlzLnRlc3ROYW1lLFxuICBcdFx0dGVzdElkOiB0aGlzLnRlc3RJZCxcbiAgXHRcdHNraXA6ICEhc2V0dGluZ3Muc2tpcFxuICBcdH0pO1xuXG4gIFx0aWYgKHNldHRpbmdzLnNraXApIHtcblxuICBcdFx0Ly8gU2tpcHBlZCB0ZXN0cyB3aWxsIGZ1bGx5IGlnbm9yZSBhbnkgc2VudCBjYWxsYmFja1xuICBcdFx0dGhpcy5jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICBcdFx0dGhpcy5hc3luYyA9IGZhbHNlO1xuICBcdFx0dGhpcy5leHBlY3RlZCA9IDA7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdGlmICh0eXBlb2YgdGhpcy5jYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHRcdHZhciBtZXRob2QgPSB0aGlzLnRvZG8gPyBcInRvZG9cIiA6IFwidGVzdFwiO1xuXG4gIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gIFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwcm92aWRlIGEgZnVuY3Rpb24gYXMgYSB0ZXN0IGNhbGxiYWNrIHRvIFFVbml0LlwiICsgbWV0aG9kICsgXCIoXFxcIlwiICsgc2V0dGluZ3MudGVzdE5hbWUgKyBcIlxcXCIpXCIpO1xuICBcdFx0fVxuXG4gIFx0XHR0aGlzLmFzc2VydCA9IG5ldyBBc3NlcnQodGhpcyk7XG4gIFx0fVxuICB9XG5cbiAgVGVzdC5jb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gZ2V0Tm90U3RhcnRlZE1vZHVsZXMoc3RhcnRNb2R1bGUpIHtcbiAgXHR2YXIgbW9kdWxlID0gc3RhcnRNb2R1bGUsXG4gIFx0ICAgIG1vZHVsZXMgPSBbXTtcblxuICBcdHdoaWxlIChtb2R1bGUgJiYgbW9kdWxlLnRlc3RzUnVuID09PSAwKSB7XG4gIFx0XHRtb2R1bGVzLnB1c2gobW9kdWxlKTtcbiAgXHRcdG1vZHVsZSA9IG1vZHVsZS5wYXJlbnRNb2R1bGU7XG4gIFx0fVxuXG4gIFx0Ly8gVGhlIGFib3ZlIHB1c2ggbW9kdWxlcyBmcm9tIHRoZSBjaGlsZCB0byB0aGUgcGFyZW50XG4gIFx0Ly8gcmV0dXJuIGEgcmV2ZXJzZWQgb3JkZXIgd2l0aCB0aGUgdG9wIGJlaW5nIHRoZSB0b3AgbW9zdCBwYXJlbnQgbW9kdWxlXG4gIFx0cmV0dXJuIG1vZHVsZXMucmV2ZXJzZSgpO1xuICB9XG5cbiAgVGVzdC5wcm90b3R5cGUgPSB7XG5cbiAgXHQvLyBnZW5lcmF0aW5nIGEgc3RhY2sgdHJhY2UgY2FuIGJlIGV4cGVuc2l2ZSwgc28gdXNpbmcgYSBnZXR0ZXIgZGVmZXJzIHRoaXMgdW50aWwgd2UgbmVlZCBpdFxuICBcdGdldCBzdGFjaygpIHtcbiAgXHRcdHJldHVybiBleHRyYWN0U3RhY2t0cmFjZSh0aGlzLmVycm9yRm9yU3RhY2ssIDIpO1xuICBcdH0sXG5cbiAgXHRiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSgpIHtcbiAgXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgXHRcdHZhciBtb2R1bGUgPSB0aGlzLm1vZHVsZSxcbiAgXHRcdCAgICBub3RTdGFydGVkTW9kdWxlcyA9IGdldE5vdFN0YXJ0ZWRNb2R1bGVzKG1vZHVsZSk7XG5cbiAgXHRcdC8vIGVuc3VyZSB0aGUgY2FsbGJhY2tzIGFyZSBleGVjdXRlZCBzZXJpYWxseSBmb3IgZWFjaCBtb2R1bGVcbiAgXHRcdHZhciBjYWxsYmFja1Byb21pc2VzID0gbm90U3RhcnRlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChwcm9taXNlQ2hhaW4sIHN0YXJ0TW9kdWxlKSB7XG4gIFx0XHRcdHJldHVybiBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0c3RhcnRNb2R1bGUuc3RhdHMgPSB7IGFsbDogMCwgYmFkOiAwLCBzdGFydGVkOiBub3coKSB9O1xuICBcdFx0XHRcdGVtaXQoXCJzdWl0ZVN0YXJ0XCIsIHN0YXJ0TW9kdWxlLnN1aXRlUmVwb3J0LnN0YXJ0KHRydWUpKTtcbiAgXHRcdFx0XHRyZXR1cm4gcnVuTG9nZ2luZ0NhbGxiYWNrcyhcIm1vZHVsZVN0YXJ0XCIsIHtcbiAgXHRcdFx0XHRcdG5hbWU6IHN0YXJ0TW9kdWxlLm5hbWUsXG4gIFx0XHRcdFx0XHR0ZXN0czogc3RhcnRNb2R1bGUudGVzdHNcbiAgXHRcdFx0XHR9KTtcbiAgXHRcdFx0fSk7XG4gIFx0XHR9LCBQcm9taXNlJDEucmVzb2x2ZShbXSkpO1xuXG4gIFx0XHRyZXR1cm4gY2FsbGJhY2tQcm9taXNlcy50aGVuKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0Y29uZmlnLmN1cnJlbnQgPSBfdGhpcztcblxuICBcdFx0XHRfdGhpcy50ZXN0RW52aXJvbm1lbnQgPSBleHRlbmQoe30sIG1vZHVsZS50ZXN0RW52aXJvbm1lbnQpO1xuXG4gIFx0XHRcdF90aGlzLnN0YXJ0ZWQgPSBub3coKTtcbiAgXHRcdFx0ZW1pdChcInRlc3RTdGFydFwiLCBfdGhpcy50ZXN0UmVwb3J0LnN0YXJ0KHRydWUpKTtcbiAgXHRcdFx0cmV0dXJuIHJ1bkxvZ2dpbmdDYWxsYmFja3MoXCJ0ZXN0U3RhcnRcIiwge1xuICBcdFx0XHRcdG5hbWU6IF90aGlzLnRlc3ROYW1lLFxuICBcdFx0XHRcdG1vZHVsZTogbW9kdWxlLm5hbWUsXG4gIFx0XHRcdFx0dGVzdElkOiBfdGhpcy50ZXN0SWQsXG4gIFx0XHRcdFx0cHJldmlvdXNGYWlsdXJlOiBfdGhpcy5wcmV2aW91c0ZhaWx1cmVcbiAgXHRcdFx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0aWYgKCFjb25maWcucG9sbHV0aW9uKSB7XG4gIFx0XHRcdFx0XHRzYXZlR2xvYmFsKCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9KTtcbiAgXHRcdH0pO1xuICBcdH0sXG5cbiAgXHRydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgXHRcdHZhciBwcm9taXNlO1xuXG4gIFx0XHRjb25maWcuY3VycmVudCA9IHRoaXM7XG5cbiAgXHRcdHRoaXMuY2FsbGJhY2tTdGFydGVkID0gbm93KCk7XG5cbiAgXHRcdGlmIChjb25maWcubm90cnljYXRjaCkge1xuICBcdFx0XHRydW5UZXN0KHRoaXMpO1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdHRyeSB7XG4gIFx0XHRcdHJ1blRlc3QodGhpcyk7XG4gIFx0XHR9IGNhdGNoIChlKSB7XG4gIFx0XHRcdHRoaXMucHVzaEZhaWx1cmUoXCJEaWVkIG9uIHRlc3QgI1wiICsgKHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGggKyAxKSArIFwiIFwiICsgdGhpcy5zdGFjayArIFwiOiBcIiArIChlLm1lc3NhZ2UgfHwgZSksIGV4dHJhY3RTdGFja3RyYWNlKGUsIDApKTtcblxuICBcdFx0XHQvLyBFbHNlIG5leHQgdGVzdCB3aWxsIGNhcnJ5IHRoZSByZXNwb25zaWJpbGl0eVxuICBcdFx0XHRzYXZlR2xvYmFsKCk7XG5cbiAgXHRcdFx0Ly8gUmVzdGFydCB0aGUgdGVzdHMgaWYgdGhleSdyZSBibG9ja2luZ1xuICBcdFx0XHRpZiAoY29uZmlnLmJsb2NraW5nKSB7XG4gIFx0XHRcdFx0aW50ZXJuYWxSZWNvdmVyKHRoaXMpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdGZ1bmN0aW9uIHJ1blRlc3QodGVzdCkge1xuICBcdFx0XHRwcm9taXNlID0gdGVzdC5jYWxsYmFjay5jYWxsKHRlc3QudGVzdEVudmlyb25tZW50LCB0ZXN0LmFzc2VydCk7XG4gIFx0XHRcdHRlc3QucmVzb2x2ZVByb21pc2UocHJvbWlzZSk7XG5cbiAgXHRcdFx0Ly8gSWYgdGhlIHRlc3QgaGFzIGEgXCJsb2NrXCIgb24gaXQsIGJ1dCB0aGUgdGltZW91dCBpcyAwLCB0aGVuIHdlIHB1c2ggYVxuICBcdFx0XHQvLyBmYWlsdXJlIGFzIHRoZSB0ZXN0IHNob3VsZCBiZSBzeW5jaHJvbm91cy5cbiAgXHRcdFx0aWYgKHRlc3QudGltZW91dCA9PT0gMCAmJiB0ZXN0LnNlbWFwaG9yZSAhPT0gMCkge1xuICBcdFx0XHRcdHB1c2hGYWlsdXJlKFwiVGVzdCBkaWQgbm90IGZpbmlzaCBzeW5jaHJvbm91c2x5IGV2ZW4gdGhvdWdoIGFzc2VydC50aW1lb3V0KCAwICkgd2FzIHVzZWQuXCIsIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH0sXG5cbiAgXHRhZnRlcjogZnVuY3Rpb24gYWZ0ZXIoKSB7XG4gIFx0XHRjaGVja1BvbGx1dGlvbigpO1xuICBcdH0sXG5cbiAgXHRxdWV1ZUhvb2s6IGZ1bmN0aW9uIHF1ZXVlSG9vayhob29rLCBob29rTmFtZSwgaG9va093bmVyKSB7XG4gIFx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuICBcdFx0dmFyIGNhbGxIb29rID0gZnVuY3Rpb24gY2FsbEhvb2soKSB7XG4gIFx0XHRcdHZhciBwcm9taXNlID0gaG9vay5jYWxsKF90aGlzMi50ZXN0RW52aXJvbm1lbnQsIF90aGlzMi5hc3NlcnQpO1xuICBcdFx0XHRfdGhpczIucmVzb2x2ZVByb21pc2UocHJvbWlzZSwgaG9va05hbWUpO1xuICBcdFx0fTtcblxuICBcdFx0dmFyIHJ1bkhvb2sgPSBmdW5jdGlvbiBydW5Ib29rKCkge1xuICBcdFx0XHRpZiAoaG9va05hbWUgPT09IFwiYmVmb3JlXCIpIHtcbiAgXHRcdFx0XHRpZiAoaG9va093bmVyLnVuc2tpcHBlZFRlc3RzUnVuICE9PSAwKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0X3RoaXMyLnByZXNlcnZlRW52aXJvbm1lbnQgPSB0cnVlO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0Ly8gVGhlICdhZnRlcicgaG9vayBzaG91bGQgb25seSBleGVjdXRlIHdoZW4gdGhlcmUgYXJlIG5vdCB0ZXN0cyBsZWZ0IGFuZFxuICBcdFx0XHQvLyB3aGVuIHRoZSAnYWZ0ZXInIGFuZCAnZmluaXNoJyB0YXNrcyBhcmUgdGhlIG9ubHkgdGFza3MgbGVmdCB0byBwcm9jZXNzXG4gIFx0XHRcdGlmIChob29rTmFtZSA9PT0gXCJhZnRlclwiICYmIGhvb2tPd25lci51bnNraXBwZWRUZXN0c1J1biAhPT0gbnVtYmVyT2ZVbnNraXBwZWRUZXN0cyhob29rT3duZXIpIC0gMSAmJiAoY29uZmlnLnF1ZXVlLmxlbmd0aCA+IDAgfHwgUHJvY2Vzc2luZ1F1ZXVlLnRhc2tDb3VudCgpID4gMikpIHtcbiAgXHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdH1cblxuICBcdFx0XHRjb25maWcuY3VycmVudCA9IF90aGlzMjtcbiAgXHRcdFx0aWYgKGNvbmZpZy5ub3RyeWNhdGNoKSB7XG4gIFx0XHRcdFx0Y2FsbEhvb2soKTtcbiAgXHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdH1cbiAgXHRcdFx0dHJ5IHtcbiAgXHRcdFx0XHRjYWxsSG9vaygpO1xuICBcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuICBcdFx0XHRcdF90aGlzMi5wdXNoRmFpbHVyZShob29rTmFtZSArIFwiIGZhaWxlZCBvbiBcIiArIF90aGlzMi50ZXN0TmFtZSArIFwiOiBcIiArIChlcnJvci5tZXNzYWdlIHx8IGVycm9yKSwgZXh0cmFjdFN0YWNrdHJhY2UoZXJyb3IsIDApKTtcbiAgXHRcdFx0fVxuICBcdFx0fTtcblxuICBcdFx0cmV0dXJuIHJ1bkhvb2s7XG4gIFx0fSxcblxuXG4gIFx0Ly8gQ3VycmVudGx5IG9ubHkgdXNlZCBmb3IgbW9kdWxlIGxldmVsIGhvb2tzLCBjYW4gYmUgdXNlZCB0byBhZGQgZ2xvYmFsIGxldmVsIG9uZXNcbiAgXHRob29rczogZnVuY3Rpb24gaG9va3MoaGFuZGxlcikge1xuICBcdFx0dmFyIGhvb2tzID0gW107XG5cbiAgXHRcdGZ1bmN0aW9uIHByb2Nlc3NIb29rcyh0ZXN0LCBtb2R1bGUpIHtcbiAgXHRcdFx0aWYgKG1vZHVsZS5wYXJlbnRNb2R1bGUpIHtcbiAgXHRcdFx0XHRwcm9jZXNzSG9va3ModGVzdCwgbW9kdWxlLnBhcmVudE1vZHVsZSk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRpZiAobW9kdWxlLmhvb2tzW2hhbmRsZXJdLmxlbmd0aCkge1xuICBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLmhvb2tzW2hhbmRsZXJdLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdFx0XHRob29rcy5wdXNoKHRlc3QucXVldWVIb29rKG1vZHVsZS5ob29rc1toYW5kbGVyXVtpXSwgaGFuZGxlciwgbW9kdWxlKSk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEhvb2tzIGFyZSBpZ25vcmVkIG9uIHNraXBwZWQgdGVzdHNcbiAgXHRcdGlmICghdGhpcy5za2lwKSB7XG4gIFx0XHRcdHByb2Nlc3NIb29rcyh0aGlzLCB0aGlzLm1vZHVsZSk7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiBob29rcztcbiAgXHR9LFxuXG5cbiAgXHRmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgXHRcdGNvbmZpZy5jdXJyZW50ID0gdGhpcztcblxuICBcdFx0Ly8gUmVsZWFzZSB0aGUgdGVzdCBjYWxsYmFjayB0byBlbnN1cmUgdGhhdCBhbnl0aGluZyByZWZlcmVuY2VkIGhhcyBiZWVuXG4gIFx0XHQvLyByZWxlYXNlZCB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgXHRcdHRoaXMuY2FsbGJhY2sgPSB1bmRlZmluZWQ7XG5cbiAgXHRcdGlmICh0aGlzLnN0ZXBzLmxlbmd0aCkge1xuICBcdFx0XHR2YXIgc3RlcHNMaXN0ID0gdGhpcy5zdGVwcy5qb2luKFwiLCBcIik7XG4gIFx0XHRcdHRoaXMucHVzaEZhaWx1cmUoXCJFeHBlY3RlZCBhc3NlcnQudmVyaWZ5U3RlcHMoKSB0byBiZSBjYWxsZWQgYmVmb3JlIGVuZCBvZiB0ZXN0IFwiICsgKFwiYWZ0ZXIgdXNpbmcgYXNzZXJ0LnN0ZXAoKS4gVW52ZXJpZmllZCBzdGVwczogXCIgKyBzdGVwc0xpc3QpLCB0aGlzLnN0YWNrKTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbmZpZy5yZXF1aXJlRXhwZWN0cyAmJiB0aGlzLmV4cGVjdGVkID09PSBudWxsKSB7XG4gIFx0XHRcdHRoaXMucHVzaEZhaWx1cmUoXCJFeHBlY3RlZCBudW1iZXIgb2YgYXNzZXJ0aW9ucyB0byBiZSBkZWZpbmVkLCBidXQgZXhwZWN0KCkgd2FzIFwiICsgXCJub3QgY2FsbGVkLlwiLCB0aGlzLnN0YWNrKTtcbiAgXHRcdH0gZWxzZSBpZiAodGhpcy5leHBlY3RlZCAhPT0gbnVsbCAmJiB0aGlzLmV4cGVjdGVkICE9PSB0aGlzLmFzc2VydGlvbnMubGVuZ3RoKSB7XG4gIFx0XHRcdHRoaXMucHVzaEZhaWx1cmUoXCJFeHBlY3RlZCBcIiArIHRoaXMuZXhwZWN0ZWQgKyBcIiBhc3NlcnRpb25zLCBidXQgXCIgKyB0aGlzLmFzc2VydGlvbnMubGVuZ3RoICsgXCIgd2VyZSBydW5cIiwgdGhpcy5zdGFjayk7XG4gIFx0XHR9IGVsc2UgaWYgKHRoaXMuZXhwZWN0ZWQgPT09IG51bGwgJiYgIXRoaXMuYXNzZXJ0aW9ucy5sZW5ndGgpIHtcbiAgXHRcdFx0dGhpcy5wdXNoRmFpbHVyZShcIkV4cGVjdGVkIGF0IGxlYXN0IG9uZSBhc3NlcnRpb24sIGJ1dCBub25lIHdlcmUgcnVuIC0gY2FsbCBcIiArIFwiZXhwZWN0KDApIHRvIGFjY2VwdCB6ZXJvIGFzc2VydGlvbnMuXCIsIHRoaXMuc3RhY2spO1xuICBcdFx0fVxuXG4gIFx0XHR2YXIgaSxcbiAgXHRcdCAgICBtb2R1bGUgPSB0aGlzLm1vZHVsZSxcbiAgXHRcdCAgICBtb2R1bGVOYW1lID0gbW9kdWxlLm5hbWUsXG4gIFx0XHQgICAgdGVzdE5hbWUgPSB0aGlzLnRlc3ROYW1lLFxuICBcdFx0ICAgIHNraXBwZWQgPSAhIXRoaXMuc2tpcCxcbiAgXHRcdCAgICB0b2RvID0gISF0aGlzLnRvZG8sXG4gIFx0XHQgICAgYmFkID0gMCxcbiAgXHRcdCAgICBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XG5cbiAgXHRcdHRoaXMucnVudGltZSA9IG5vdygpIC0gdGhpcy5zdGFydGVkO1xuXG4gIFx0XHRjb25maWcuc3RhdHMuYWxsICs9IHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGg7XG4gIFx0XHRtb2R1bGUuc3RhdHMuYWxsICs9IHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGg7XG5cbiAgXHRcdGZvciAoaSA9IDA7IGkgPCB0aGlzLmFzc2VydGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0aWYgKCF0aGlzLmFzc2VydGlvbnNbaV0ucmVzdWx0KSB7XG4gIFx0XHRcdFx0YmFkKys7XG4gIFx0XHRcdFx0Y29uZmlnLnN0YXRzLmJhZCsrO1xuICBcdFx0XHRcdG1vZHVsZS5zdGF0cy5iYWQrKztcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHRub3RpZnlUZXN0c1Jhbihtb2R1bGUsIHNraXBwZWQpO1xuXG4gIFx0XHQvLyBTdG9yZSByZXN1bHQgd2hlbiBwb3NzaWJsZVxuICBcdFx0aWYgKHN0b3JhZ2UpIHtcbiAgXHRcdFx0aWYgKGJhZCkge1xuICBcdFx0XHRcdHN0b3JhZ2Uuc2V0SXRlbShcInF1bml0LXRlc3QtXCIgKyBtb2R1bGVOYW1lICsgXCItXCIgKyB0ZXN0TmFtZSwgYmFkKTtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oXCJxdW5pdC10ZXN0LVwiICsgbW9kdWxlTmFtZSArIFwiLVwiICsgdGVzdE5hbWUpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEFmdGVyIGVtaXR0aW5nIHRoZSBqcy1yZXBvcnRlcnMgZXZlbnQgd2UgY2xlYW51cCB0aGUgYXNzZXJ0aW9uIGRhdGEgdG9cbiAgXHRcdC8vIGF2b2lkIGxlYWtpbmcgaXQuIEl0IGlzIG5vdCB1c2VkIGJ5IHRoZSBsZWdhY3kgdGVzdERvbmUgY2FsbGJhY2tzLlxuICBcdFx0ZW1pdChcInRlc3RFbmRcIiwgdGhpcy50ZXN0UmVwb3J0LmVuZCh0cnVlKSk7XG4gIFx0XHR0aGlzLnRlc3RSZXBvcnQuc2xpbUFzc2VydGlvbnMoKTtcbiAgXHRcdHZhciB0ZXN0ID0gdGhpcztcblxuICBcdFx0cmV0dXJuIHJ1bkxvZ2dpbmdDYWxsYmFja3MoXCJ0ZXN0RG9uZVwiLCB7XG4gIFx0XHRcdG5hbWU6IHRlc3ROYW1lLFxuICBcdFx0XHRtb2R1bGU6IG1vZHVsZU5hbWUsXG4gIFx0XHRcdHNraXBwZWQ6IHNraXBwZWQsXG4gIFx0XHRcdHRvZG86IHRvZG8sXG4gIFx0XHRcdGZhaWxlZDogYmFkLFxuICBcdFx0XHRwYXNzZWQ6IHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGggLSBiYWQsXG4gIFx0XHRcdHRvdGFsOiB0aGlzLmFzc2VydGlvbnMubGVuZ3RoLFxuICBcdFx0XHRydW50aW1lOiBza2lwcGVkID8gMCA6IHRoaXMucnVudGltZSxcblxuICBcdFx0XHQvLyBIVE1MIFJlcG9ydGVyIHVzZVxuICBcdFx0XHRhc3NlcnRpb25zOiB0aGlzLmFzc2VydGlvbnMsXG4gIFx0XHRcdHRlc3RJZDogdGhpcy50ZXN0SWQsXG5cbiAgXHRcdFx0Ly8gU291cmNlIG9mIFRlc3RcbiAgXHRcdFx0Ly8gZ2VuZXJhdGluZyBzdGFjayB0cmFjZSBpcyBleHBlbnNpdmUsIHNvIHVzaW5nIGEgZ2V0dGVyIHdpbGwgaGVscCBkZWZlciB0aGlzIHVudGlsIHdlIG5lZWQgaXRcbiAgXHRcdFx0Z2V0IHNvdXJjZSgpIHtcbiAgXHRcdFx0XHRyZXR1cm4gdGVzdC5zdGFjaztcbiAgXHRcdFx0fVxuICBcdFx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdGlmIChtb2R1bGUudGVzdHNSdW4gPT09IG51bWJlck9mVGVzdHMobW9kdWxlKSkge1xuICBcdFx0XHRcdHZhciBjb21wbGV0ZWRNb2R1bGVzID0gW21vZHVsZV07XG5cbiAgXHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgcGFyZW50IG1vZHVsZXMsIGl0ZXJhdGl2ZWx5LCBhcmUgZG9uZS4gSWYgdGhhdCB0aGUgY2FzZSxcbiAgXHRcdFx0XHQvLyB3ZSBlbWl0IHRoZSBgc3VpdGVFbmRgIGV2ZW50IGFuZCB0cmlnZ2VyIGBtb2R1bGVEb25lYCBjYWxsYmFjay5cbiAgXHRcdFx0XHR2YXIgcGFyZW50ID0gbW9kdWxlLnBhcmVudE1vZHVsZTtcbiAgXHRcdFx0XHR3aGlsZSAocGFyZW50ICYmIHBhcmVudC50ZXN0c1J1biA9PT0gbnVtYmVyT2ZUZXN0cyhwYXJlbnQpKSB7XG4gIFx0XHRcdFx0XHRjb21wbGV0ZWRNb2R1bGVzLnB1c2gocGFyZW50KTtcbiAgXHRcdFx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnRNb2R1bGU7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChwcm9taXNlQ2hhaW4sIGNvbXBsZXRlZE1vZHVsZSkge1xuICBcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VDaGFpbi50aGVuKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRcdFx0cmV0dXJuIGxvZ1N1aXRlRW5kKGNvbXBsZXRlZE1vZHVsZSk7XG4gIFx0XHRcdFx0XHR9KTtcbiAgXHRcdFx0XHR9LCBQcm9taXNlJDEucmVzb2x2ZShbXSkpO1xuICBcdFx0XHR9XG4gIFx0XHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0Y29uZmlnLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIFx0XHR9KTtcblxuICBcdFx0ZnVuY3Rpb24gbG9nU3VpdGVFbmQobW9kdWxlKSB7XG5cbiAgXHRcdFx0Ly8gUmVzZXQgYG1vZHVsZS5ob29rc2AgdG8gZW5zdXJlIHRoYXQgYW55dGhpbmcgcmVmZXJlbmNlZCBpbiB0aGVzZSBob29rc1xuICBcdFx0XHQvLyBoYXMgYmVlbiByZWxlYXNlZCB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgXHRcdFx0bW9kdWxlLmhvb2tzID0ge307XG5cbiAgXHRcdFx0ZW1pdChcInN1aXRlRW5kXCIsIG1vZHVsZS5zdWl0ZVJlcG9ydC5lbmQodHJ1ZSkpO1xuICBcdFx0XHRyZXR1cm4gcnVuTG9nZ2luZ0NhbGxiYWNrcyhcIm1vZHVsZURvbmVcIiwge1xuICBcdFx0XHRcdG5hbWU6IG1vZHVsZS5uYW1lLFxuICBcdFx0XHRcdHRlc3RzOiBtb2R1bGUudGVzdHMsXG4gIFx0XHRcdFx0ZmFpbGVkOiBtb2R1bGUuc3RhdHMuYmFkLFxuICBcdFx0XHRcdHBhc3NlZDogbW9kdWxlLnN0YXRzLmFsbCAtIG1vZHVsZS5zdGF0cy5iYWQsXG4gIFx0XHRcdFx0dG90YWw6IG1vZHVsZS5zdGF0cy5hbGwsXG4gIFx0XHRcdFx0cnVudGltZTogbm93KCkgLSBtb2R1bGUuc3RhdHMuc3RhcnRlZFxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LFxuXG4gIFx0cHJlc2VydmVUZXN0RW52aXJvbm1lbnQ6IGZ1bmN0aW9uIHByZXNlcnZlVGVzdEVudmlyb25tZW50KCkge1xuICBcdFx0aWYgKHRoaXMucHJlc2VydmVFbnZpcm9ubWVudCkge1xuICBcdFx0XHR0aGlzLm1vZHVsZS50ZXN0RW52aXJvbm1lbnQgPSB0aGlzLnRlc3RFbnZpcm9ubWVudDtcbiAgXHRcdFx0dGhpcy50ZXN0RW52aXJvbm1lbnQgPSBleHRlbmQoe30sIHRoaXMubW9kdWxlLnRlc3RFbnZpcm9ubWVudCk7XG4gIFx0XHR9XG4gIFx0fSxcblxuICBcdHF1ZXVlOiBmdW5jdGlvbiBxdWV1ZSgpIHtcbiAgXHRcdHZhciB0ZXN0ID0gdGhpcztcblxuICBcdFx0aWYgKCF0aGlzLnZhbGlkKCkpIHtcbiAgXHRcdFx0cmV0dXJuO1xuICBcdFx0fVxuXG4gIFx0XHRmdW5jdGlvbiBydW5UZXN0KCkge1xuICBcdFx0XHRyZXR1cm4gW2Z1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRyZXR1cm4gdGVzdC5iZWZvcmUoKTtcbiAgXHRcdFx0fV0uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KHRlc3QuaG9va3MoXCJiZWZvcmVcIikpLCBbZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdHRlc3QucHJlc2VydmVUZXN0RW52aXJvbm1lbnQoKTtcbiAgXHRcdFx0fV0sIHRvQ29uc3VtYWJsZUFycmF5KHRlc3QuaG9va3MoXCJiZWZvcmVFYWNoXCIpKSwgW2Z1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHR0ZXN0LnJ1bigpO1xuICBcdFx0XHR9XSwgdG9Db25zdW1hYmxlQXJyYXkodGVzdC5ob29rcyhcImFmdGVyRWFjaFwiKS5yZXZlcnNlKCkpLCB0b0NvbnN1bWFibGVBcnJheSh0ZXN0Lmhvb2tzKFwiYWZ0ZXJcIikucmV2ZXJzZSgpKSwgW2Z1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHR0ZXN0LmFmdGVyKCk7XG4gIFx0XHRcdH0sIGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRyZXR1cm4gdGVzdC5maW5pc2goKTtcbiAgXHRcdFx0fV0pO1xuICBcdFx0fVxuXG4gIFx0XHR2YXIgcHJldmlvdXNGYWlsQ291bnQgPSBjb25maWcuc3RvcmFnZSAmJiArY29uZmlnLnN0b3JhZ2UuZ2V0SXRlbShcInF1bml0LXRlc3QtXCIgKyB0aGlzLm1vZHVsZS5uYW1lICsgXCItXCIgKyB0aGlzLnRlc3ROYW1lKTtcblxuICBcdFx0Ly8gUHJpb3JpdGl6ZSBwcmV2aW91c2x5IGZhaWxlZCB0ZXN0cywgZGV0ZWN0ZWQgZnJvbSBzdG9yYWdlXG4gIFx0XHR2YXIgcHJpb3JpdGl6ZSA9IGNvbmZpZy5yZW9yZGVyICYmICEhcHJldmlvdXNGYWlsQ291bnQ7XG5cbiAgXHRcdHRoaXMucHJldmlvdXNGYWlsdXJlID0gISFwcmV2aW91c0ZhaWxDb3VudDtcblxuICBcdFx0UHJvY2Vzc2luZ1F1ZXVlLmFkZChydW5UZXN0LCBwcmlvcml0aXplLCBjb25maWcuc2VlZCk7XG5cbiAgXHRcdC8vIElmIHRoZSBxdWV1ZSBoYXMgYWxyZWFkeSBmaW5pc2hlZCwgd2UgbWFudWFsbHkgcHJvY2VzcyB0aGUgbmV3IHRlc3RcbiAgXHRcdGlmIChQcm9jZXNzaW5nUXVldWUuZmluaXNoZWQpIHtcbiAgXHRcdFx0UHJvY2Vzc2luZ1F1ZXVlLmFkdmFuY2UoKTtcbiAgXHRcdH1cbiAgXHR9LFxuXG5cbiAgXHRwdXNoUmVzdWx0OiBmdW5jdGlvbiBwdXNoUmVzdWx0KHJlc3VsdEluZm8pIHtcbiAgXHRcdGlmICh0aGlzICE9PSBjb25maWcuY3VycmVudCkge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBc3NlcnRpb24gb2NjdXJyZWQgYWZ0ZXIgdGVzdCBoYWQgZmluaXNoZWQuXCIpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBEZXN0cnVjdHVyZSBvZiByZXN1bHRJbmZvID0geyByZXN1bHQsIGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG5lZ2F0aXZlIH1cbiAgXHRcdHZhciBzb3VyY2UsXG4gIFx0XHQgICAgZGV0YWlscyA9IHtcbiAgXHRcdFx0bW9kdWxlOiB0aGlzLm1vZHVsZS5uYW1lLFxuICBcdFx0XHRuYW1lOiB0aGlzLnRlc3ROYW1lLFxuICBcdFx0XHRyZXN1bHQ6IHJlc3VsdEluZm8ucmVzdWx0LFxuICBcdFx0XHRtZXNzYWdlOiByZXN1bHRJbmZvLm1lc3NhZ2UsXG4gIFx0XHRcdGFjdHVhbDogcmVzdWx0SW5mby5hY3R1YWwsXG4gIFx0XHRcdHRlc3RJZDogdGhpcy50ZXN0SWQsXG4gIFx0XHRcdG5lZ2F0aXZlOiByZXN1bHRJbmZvLm5lZ2F0aXZlIHx8IGZhbHNlLFxuICBcdFx0XHRydW50aW1lOiBub3coKSAtIHRoaXMuc3RhcnRlZCxcbiAgXHRcdFx0dG9kbzogISF0aGlzLnRvZG9cbiAgXHRcdH07XG5cbiAgXHRcdGlmIChoYXNPd24uY2FsbChyZXN1bHRJbmZvLCBcImV4cGVjdGVkXCIpKSB7XG4gIFx0XHRcdGRldGFpbHMuZXhwZWN0ZWQgPSByZXN1bHRJbmZvLmV4cGVjdGVkO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoIXJlc3VsdEluZm8ucmVzdWx0KSB7XG4gIFx0XHRcdHNvdXJjZSA9IHJlc3VsdEluZm8uc291cmNlIHx8IHNvdXJjZUZyb21TdGFja3RyYWNlKCk7XG5cbiAgXHRcdFx0aWYgKHNvdXJjZSkge1xuICBcdFx0XHRcdGRldGFpbHMuc291cmNlID0gc291cmNlO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdHRoaXMubG9nQXNzZXJ0aW9uKGRldGFpbHMpO1xuXG4gIFx0XHR0aGlzLmFzc2VydGlvbnMucHVzaCh7XG4gIFx0XHRcdHJlc3VsdDogISFyZXN1bHRJbmZvLnJlc3VsdCxcbiAgXHRcdFx0bWVzc2FnZTogcmVzdWx0SW5mby5tZXNzYWdlXG4gIFx0XHR9KTtcbiAgXHR9LFxuXG4gIFx0cHVzaEZhaWx1cmU6IGZ1bmN0aW9uIHB1c2hGYWlsdXJlKG1lc3NhZ2UsIHNvdXJjZSwgYWN0dWFsKSB7XG4gIFx0XHRpZiAoISh0aGlzIGluc3RhbmNlb2YgVGVzdCkpIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwicHVzaEZhaWx1cmUoKSBhc3NlcnRpb24gb3V0c2lkZSB0ZXN0IGNvbnRleHQsIHdhcyBcIiArIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgXHRcdH1cblxuICBcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0cmVzdWx0OiBmYWxzZSxcbiAgXHRcdFx0bWVzc2FnZTogbWVzc2FnZSB8fCBcImVycm9yXCIsXG4gIFx0XHRcdGFjdHVhbDogYWN0dWFsIHx8IG51bGwsXG4gIFx0XHRcdHNvdXJjZTogc291cmNlXG4gIFx0XHR9KTtcbiAgXHR9LFxuXG4gIFx0LyoqXG4gICAgKiBMb2cgYXNzZXJ0aW9uIGRldGFpbHMgdXNpbmcgYm90aCB0aGUgb2xkIFFVbml0LmxvZyBpbnRlcmZhY2UgYW5kXG4gICAgKiBRVW5pdC5vbiggXCJhc3NlcnRpb25cIiApIGludGVyZmFjZS5cbiAgICAqXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0bG9nQXNzZXJ0aW9uOiBmdW5jdGlvbiBsb2dBc3NlcnRpb24oZGV0YWlscykge1xuICBcdFx0cnVuTG9nZ2luZ0NhbGxiYWNrcyhcImxvZ1wiLCBkZXRhaWxzKTtcblxuICBcdFx0dmFyIGFzc2VydGlvbiA9IHtcbiAgXHRcdFx0cGFzc2VkOiBkZXRhaWxzLnJlc3VsdCxcbiAgXHRcdFx0YWN0dWFsOiBkZXRhaWxzLmFjdHVhbCxcbiAgXHRcdFx0ZXhwZWN0ZWQ6IGRldGFpbHMuZXhwZWN0ZWQsXG4gIFx0XHRcdG1lc3NhZ2U6IGRldGFpbHMubWVzc2FnZSxcbiAgXHRcdFx0c3RhY2s6IGRldGFpbHMuc291cmNlLFxuICBcdFx0XHR0b2RvOiBkZXRhaWxzLnRvZG9cbiAgXHRcdH07XG4gIFx0XHR0aGlzLnRlc3RSZXBvcnQucHVzaEFzc2VydGlvbihhc3NlcnRpb24pO1xuICBcdFx0ZW1pdChcImFzc2VydGlvblwiLCBhc3NlcnRpb24pO1xuICBcdH0sXG5cblxuICBcdHJlc29sdmVQcm9taXNlOiBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBwaGFzZSkge1xuICBcdFx0dmFyIHRoZW4sXG4gIFx0XHQgICAgcmVzdW1lLFxuICBcdFx0ICAgIG1lc3NhZ2UsXG4gIFx0XHQgICAgdGVzdCA9IHRoaXM7XG4gIFx0XHRpZiAocHJvbWlzZSAhPSBudWxsKSB7XG4gIFx0XHRcdHRoZW4gPSBwcm9taXNlLnRoZW47XG4gIFx0XHRcdGlmIChvYmplY3RUeXBlKHRoZW4pID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdFx0XHRyZXN1bWUgPSBpbnRlcm5hbFN0b3AodGVzdCk7XG4gIFx0XHRcdFx0aWYgKGNvbmZpZy5ub3RyeWNhdGNoKSB7XG4gIFx0XHRcdFx0XHR0aGVuLmNhbGwocHJvbWlzZSwgZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdFx0XHRyZXN1bWUoKTtcbiAgXHRcdFx0XHRcdH0pO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHR0aGVuLmNhbGwocHJvbWlzZSwgZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdFx0XHRyZXN1bWUoKTtcbiAgXHRcdFx0XHRcdH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICBcdFx0XHRcdFx0XHRtZXNzYWdlID0gXCJQcm9taXNlIHJlamVjdGVkIFwiICsgKCFwaGFzZSA/IFwiZHVyaW5nXCIgOiBwaGFzZS5yZXBsYWNlKC9FYWNoJC8sIFwiXCIpKSArIFwiIFxcXCJcIiArIHRlc3QudGVzdE5hbWUgKyBcIlxcXCI6IFwiICsgKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICBcdFx0XHRcdFx0XHR0ZXN0LnB1c2hGYWlsdXJlKG1lc3NhZ2UsIGV4dHJhY3RTdGFja3RyYWNlKGVycm9yLCAwKSk7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gRWxzZSBuZXh0IHRlc3Qgd2lsbCBjYXJyeSB0aGUgcmVzcG9uc2liaWxpdHlcbiAgXHRcdFx0XHRcdFx0c2F2ZUdsb2JhbCgpO1xuXG4gIFx0XHRcdFx0XHRcdC8vIFVuYmxvY2tcbiAgXHRcdFx0XHRcdFx0aW50ZXJuYWxSZWNvdmVyKHRlc3QpO1xuICBcdFx0XHRcdFx0fSk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fSxcblxuICBcdHZhbGlkOiBmdW5jdGlvbiB2YWxpZCgpIHtcbiAgXHRcdHZhciBmaWx0ZXIgPSBjb25maWcuZmlsdGVyLFxuICBcdFx0ICAgIHJlZ2V4RmlsdGVyID0gL14oIT8pXFwvKFtcXHdcXFddKilcXC8oaT8kKS8uZXhlYyhmaWx0ZXIpLFxuICBcdFx0ICAgIG1vZHVsZSA9IGNvbmZpZy5tb2R1bGUgJiYgY29uZmlnLm1vZHVsZS50b0xvd2VyQ2FzZSgpLFxuICBcdFx0ICAgIGZ1bGxOYW1lID0gdGhpcy5tb2R1bGUubmFtZSArIFwiOiBcIiArIHRoaXMudGVzdE5hbWU7XG5cbiAgXHRcdGZ1bmN0aW9uIG1vZHVsZUNoYWluTmFtZU1hdGNoKHRlc3RNb2R1bGUpIHtcbiAgXHRcdFx0dmFyIHRlc3RNb2R1bGVOYW1lID0gdGVzdE1vZHVsZS5uYW1lID8gdGVzdE1vZHVsZS5uYW1lLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICBcdFx0XHRpZiAodGVzdE1vZHVsZU5hbWUgPT09IG1vZHVsZSkge1xuICBcdFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0XHR9IGVsc2UgaWYgKHRlc3RNb2R1bGUucGFyZW50TW9kdWxlKSB7XG4gIFx0XHRcdFx0cmV0dXJuIG1vZHVsZUNoYWluTmFtZU1hdGNoKHRlc3RNb2R1bGUucGFyZW50TW9kdWxlKTtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0ZnVuY3Rpb24gbW9kdWxlQ2hhaW5JZE1hdGNoKHRlc3RNb2R1bGUpIHtcbiAgXHRcdFx0cmV0dXJuIGluQXJyYXkodGVzdE1vZHVsZS5tb2R1bGVJZCwgY29uZmlnLm1vZHVsZUlkKSB8fCB0ZXN0TW9kdWxlLnBhcmVudE1vZHVsZSAmJiBtb2R1bGVDaGFpbklkTWF0Y2godGVzdE1vZHVsZS5wYXJlbnRNb2R1bGUpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBJbnRlcm5hbGx5LWdlbmVyYXRlZCB0ZXN0cyBhcmUgYWx3YXlzIHZhbGlkXG4gIFx0XHRpZiAodGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrLnZhbGlkVGVzdCkge1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbmZpZy5tb2R1bGVJZCAmJiBjb25maWcubW9kdWxlSWQubGVuZ3RoID4gMCAmJiAhbW9kdWxlQ2hhaW5JZE1hdGNoKHRoaXMubW9kdWxlKSkge1xuXG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbmZpZy50ZXN0SWQgJiYgY29uZmlnLnRlc3RJZC5sZW5ndGggPiAwICYmICFpbkFycmF5KHRoaXMudGVzdElkLCBjb25maWcudGVzdElkKSkge1xuXG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKG1vZHVsZSAmJiAhbW9kdWxlQ2hhaW5OYW1lTWF0Y2godGhpcy5tb2R1bGUpKSB7XG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKCFmaWx0ZXIpIHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiByZWdleEZpbHRlciA/IHRoaXMucmVnZXhGaWx0ZXIoISFyZWdleEZpbHRlclsxXSwgcmVnZXhGaWx0ZXJbMl0sIHJlZ2V4RmlsdGVyWzNdLCBmdWxsTmFtZSkgOiB0aGlzLnN0cmluZ0ZpbHRlcihmaWx0ZXIsIGZ1bGxOYW1lKTtcbiAgXHR9LFxuXG4gIFx0cmVnZXhGaWx0ZXI6IGZ1bmN0aW9uIHJlZ2V4RmlsdGVyKGV4Y2x1ZGUsIHBhdHRlcm4sIGZsYWdzLCBmdWxsTmFtZSkge1xuICBcdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncyk7XG4gIFx0XHR2YXIgbWF0Y2ggPSByZWdleC50ZXN0KGZ1bGxOYW1lKTtcblxuICBcdFx0cmV0dXJuIG1hdGNoICE9PSBleGNsdWRlO1xuICBcdH0sXG5cbiAgXHRzdHJpbmdGaWx0ZXI6IGZ1bmN0aW9uIHN0cmluZ0ZpbHRlcihmaWx0ZXIsIGZ1bGxOYW1lKSB7XG4gIFx0XHRmaWx0ZXIgPSBmaWx0ZXIudG9Mb3dlckNhc2UoKTtcbiAgXHRcdGZ1bGxOYW1lID0gZnVsbE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBcdFx0dmFyIGluY2x1ZGUgPSBmaWx0ZXIuY2hhckF0KDApICE9PSBcIiFcIjtcbiAgXHRcdGlmICghaW5jbHVkZSkge1xuICBcdFx0XHRmaWx0ZXIgPSBmaWx0ZXIuc2xpY2UoMSk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIElmIHRoZSBmaWx0ZXIgbWF0Y2hlcywgd2UgbmVlZCB0byBob25vdXIgaW5jbHVkZVxuICBcdFx0aWYgKGZ1bGxOYW1lLmluZGV4T2YoZmlsdGVyKSAhPT0gLTEpIHtcbiAgXHRcdFx0cmV0dXJuIGluY2x1ZGU7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIE90aGVyd2lzZSwgZG8gdGhlIG9wcG9zaXRlXG4gIFx0XHRyZXR1cm4gIWluY2x1ZGU7XG4gIFx0fVxuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hGYWlsdXJlKCkge1xuICBcdGlmICghY29uZmlnLmN1cnJlbnQpIHtcbiAgXHRcdHRocm93IG5ldyBFcnJvcihcInB1c2hGYWlsdXJlKCkgYXNzZXJ0aW9uIG91dHNpZGUgdGVzdCBjb250ZXh0LCBpbiBcIiArIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgXHR9XG5cbiAgXHQvLyBHZXRzIGN1cnJlbnQgdGVzdCBvYmpcbiAgXHR2YXIgY3VycmVudFRlc3QgPSBjb25maWcuY3VycmVudDtcblxuICBcdHJldHVybiBjdXJyZW50VGVzdC5wdXNoRmFpbHVyZS5hcHBseShjdXJyZW50VGVzdCwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVHbG9iYWwoKSB7XG4gIFx0Y29uZmlnLnBvbGx1dGlvbiA9IFtdO1xuXG4gIFx0aWYgKGNvbmZpZy5ub2dsb2JhbHMpIHtcbiAgXHRcdGZvciAodmFyIGtleSBpbiBnbG9iYWwkMSkge1xuICBcdFx0XHRpZiAoaGFzT3duLmNhbGwoZ2xvYmFsJDEsIGtleSkpIHtcblxuICBcdFx0XHRcdC8vIEluIE9wZXJhIHNvbWV0aW1lcyBET00gZWxlbWVudCBpZHMgc2hvdyB1cCBoZXJlLCBpZ25vcmUgdGhlbVxuICBcdFx0XHRcdGlmICgvXnF1bml0LXRlc3Qtb3V0cHV0Ly50ZXN0KGtleSkpIHtcbiAgXHRcdFx0XHRcdGNvbnRpbnVlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRjb25maWcucG9sbHV0aW9uLnB1c2goa2V5KTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrUG9sbHV0aW9uKCkge1xuICBcdHZhciBuZXdHbG9iYWxzLFxuICBcdCAgICBkZWxldGVkR2xvYmFscyxcbiAgXHQgICAgb2xkID0gY29uZmlnLnBvbGx1dGlvbjtcblxuICBcdHNhdmVHbG9iYWwoKTtcblxuICBcdG5ld0dsb2JhbHMgPSBkaWZmKGNvbmZpZy5wb2xsdXRpb24sIG9sZCk7XG4gIFx0aWYgKG5ld0dsb2JhbHMubGVuZ3RoID4gMCkge1xuICBcdFx0cHVzaEZhaWx1cmUoXCJJbnRyb2R1Y2VkIGdsb2JhbCB2YXJpYWJsZShzKTogXCIgKyBuZXdHbG9iYWxzLmpvaW4oXCIsIFwiKSk7XG4gIFx0fVxuXG4gIFx0ZGVsZXRlZEdsb2JhbHMgPSBkaWZmKG9sZCwgY29uZmlnLnBvbGx1dGlvbik7XG4gIFx0aWYgKGRlbGV0ZWRHbG9iYWxzLmxlbmd0aCA+IDApIHtcbiAgXHRcdHB1c2hGYWlsdXJlKFwiRGVsZXRlZCBnbG9iYWwgdmFyaWFibGUocyk6IFwiICsgZGVsZXRlZEdsb2JhbHMuam9pbihcIiwgXCIpKTtcbiAgXHR9XG4gIH1cblxuICAvLyBXaWxsIGJlIGV4cG9zZWQgYXMgUVVuaXQudGVzdFxuICBmdW5jdGlvbiB0ZXN0KHRlc3ROYW1lLCBjYWxsYmFjaykge1xuICBcdGlmIChmb2N1c2VkJDEpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHR2YXIgbmV3VGVzdCA9IG5ldyBUZXN0KHtcbiAgXHRcdHRlc3ROYW1lOiB0ZXN0TmFtZSxcbiAgXHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuICBcdH0pO1xuXG4gIFx0bmV3VGVzdC5xdWV1ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9kbyh0ZXN0TmFtZSwgY2FsbGJhY2spIHtcbiAgXHRpZiAoZm9jdXNlZCQxKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0dmFyIG5ld1Rlc3QgPSBuZXcgVGVzdCh7XG4gIFx0XHR0ZXN0TmFtZTogdGVzdE5hbWUsXG4gIFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG4gIFx0XHR0b2RvOiB0cnVlXG4gIFx0fSk7XG5cbiAgXHRuZXdUZXN0LnF1ZXVlKCk7XG4gIH1cblxuICAvLyBXaWxsIGJlIGV4cG9zZWQgYXMgUVVuaXQuc2tpcFxuICBmdW5jdGlvbiBza2lwKHRlc3ROYW1lKSB7XG4gIFx0aWYgKGZvY3VzZWQkMSkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHZhciB0ZXN0ID0gbmV3IFRlc3Qoe1xuICBcdFx0dGVzdE5hbWU6IHRlc3ROYW1lLFxuICBcdFx0c2tpcDogdHJ1ZVxuICBcdH0pO1xuXG4gIFx0dGVzdC5xdWV1ZSgpO1xuICB9XG5cbiAgLy8gV2lsbCBiZSBleHBvc2VkIGFzIFFVbml0Lm9ubHlcbiAgZnVuY3Rpb24gb25seSh0ZXN0TmFtZSwgY2FsbGJhY2spIHtcbiAgXHRpZiAoZm9jdXNlZCQxKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0Y29uZmlnLnF1ZXVlLmxlbmd0aCA9IDA7XG4gIFx0Zm9jdXNlZCQxID0gdHJ1ZTtcblxuICBcdHZhciBuZXdUZXN0ID0gbmV3IFRlc3Qoe1xuICBcdFx0dGVzdE5hbWU6IHRlc3ROYW1lLFxuICBcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG4gIFx0fSk7XG5cbiAgXHRuZXdUZXN0LnF1ZXVlKCk7XG4gIH1cblxuICAvLyBSZXNldHMgY29uZmlnLnRpbWVvdXQgd2l0aCBhIG5ldyB0aW1lb3V0IGR1cmF0aW9uLlxuICBmdW5jdGlvbiByZXNldFRlc3RUaW1lb3V0KHRpbWVvdXREdXJhdGlvbikge1xuICBcdGNsZWFyVGltZW91dChjb25maWcudGltZW91dCk7XG4gIFx0Y29uZmlnLnRpbWVvdXQgPSBzZXRUaW1lb3V0JDEoY29uZmlnLnRpbWVvdXRIYW5kbGVyKHRpbWVvdXREdXJhdGlvbiksIHRpbWVvdXREdXJhdGlvbik7XG4gIH1cblxuICAvLyBQdXQgYSBob2xkIG9uIHByb2Nlc3NpbmcgYW5kIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWxlYXNlIGl0LlxuICBmdW5jdGlvbiBpbnRlcm5hbFN0b3AodGVzdCkge1xuICBcdHZhciByZWxlYXNlZCA9IGZhbHNlO1xuICBcdHRlc3Quc2VtYXBob3JlICs9IDE7XG4gIFx0Y29uZmlnLmJsb2NraW5nID0gdHJ1ZTtcblxuICBcdC8vIFNldCBhIHJlY292ZXJ5IHRpbWVvdXQsIGlmIHNvIGNvbmZpZ3VyZWQuXG4gIFx0aWYgKGRlZmluZWQuc2V0VGltZW91dCkge1xuICBcdFx0dmFyIHRpbWVvdXREdXJhdGlvbiA9IHZvaWQgMDtcblxuICBcdFx0aWYgKHR5cGVvZiB0ZXN0LnRpbWVvdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgXHRcdFx0dGltZW91dER1cmF0aW9uID0gdGVzdC50aW1lb3V0O1xuICBcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29uZmlnLnRlc3RUaW1lb3V0ID09PSBcIm51bWJlclwiKSB7XG4gIFx0XHRcdHRpbWVvdXREdXJhdGlvbiA9IGNvbmZpZy50ZXN0VGltZW91dDtcbiAgXHRcdH1cblxuICBcdFx0aWYgKHR5cGVvZiB0aW1lb3V0RHVyYXRpb24gPT09IFwibnVtYmVyXCIgJiYgdGltZW91dER1cmF0aW9uID4gMCkge1xuICBcdFx0XHRjbGVhclRpbWVvdXQoY29uZmlnLnRpbWVvdXQpO1xuICBcdFx0XHRjb25maWcudGltZW91dEhhbmRsZXIgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICBcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0XHRwdXNoRmFpbHVyZShcIlRlc3QgdG9vayBsb25nZXIgdGhhbiBcIiArIHRpbWVvdXQgKyBcIm1zOyB0ZXN0IHRpbWVkIG91dC5cIiwgc291cmNlRnJvbVN0YWNrdHJhY2UoMikpO1xuICBcdFx0XHRcdFx0cmVsZWFzZWQgPSB0cnVlO1xuICBcdFx0XHRcdFx0aW50ZXJuYWxSZWNvdmVyKHRlc3QpO1xuICBcdFx0XHRcdH07XG4gIFx0XHRcdH07XG4gIFx0XHRcdGNvbmZpZy50aW1lb3V0ID0gc2V0VGltZW91dCQxKGNvbmZpZy50aW1lb3V0SGFuZGxlcih0aW1lb3V0RHVyYXRpb24pLCB0aW1lb3V0RHVyYXRpb24pO1xuICBcdFx0fVxuICBcdH1cblxuICBcdHJldHVybiBmdW5jdGlvbiByZXN1bWUoKSB7XG4gIFx0XHRpZiAocmVsZWFzZWQpIHtcbiAgXHRcdFx0cmV0dXJuO1xuICBcdFx0fVxuXG4gIFx0XHRyZWxlYXNlZCA9IHRydWU7XG4gIFx0XHR0ZXN0LnNlbWFwaG9yZSAtPSAxO1xuICBcdFx0aW50ZXJuYWxTdGFydCh0ZXN0KTtcbiAgXHR9O1xuICB9XG5cbiAgLy8gRm9yY2VmdWxseSByZWxlYXNlIGFsbCBwcm9jZXNzaW5nIGhvbGRzLlxuICBmdW5jdGlvbiBpbnRlcm5hbFJlY292ZXIodGVzdCkge1xuICBcdHRlc3Quc2VtYXBob3JlID0gMDtcbiAgXHRpbnRlcm5hbFN0YXJ0KHRlc3QpO1xuICB9XG5cbiAgLy8gUmVsZWFzZSBhIHByb2Nlc3NpbmcgaG9sZCwgc2NoZWR1bGluZyBhIHJlc3VtcHRpb24gYXR0ZW1wdCBpZiBubyBob2xkcyByZW1haW4uXG4gIGZ1bmN0aW9uIGludGVybmFsU3RhcnQodGVzdCkge1xuXG4gIFx0Ly8gSWYgc2VtYXBob3JlIGlzIG5vbi1udW1lcmljLCB0aHJvdyBlcnJvclxuICBcdGlmIChpc05hTih0ZXN0LnNlbWFwaG9yZSkpIHtcbiAgXHRcdHRlc3Quc2VtYXBob3JlID0gMDtcblxuICBcdFx0cHVzaEZhaWx1cmUoXCJJbnZhbGlkIHZhbHVlIG9uIHRlc3Quc2VtYXBob3JlXCIsIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHQvLyBEb24ndCBzdGFydCB1bnRpbCBlcXVhbCBudW1iZXIgb2Ygc3RvcC1jYWxsc1xuICBcdGlmICh0ZXN0LnNlbWFwaG9yZSA+IDApIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHQvLyBUaHJvdyBhbiBFcnJvciBpZiBzdGFydCBpcyBjYWxsZWQgbW9yZSBvZnRlbiB0aGFuIHN0b3BcbiAgXHRpZiAodGVzdC5zZW1hcGhvcmUgPCAwKSB7XG4gIFx0XHR0ZXN0LnNlbWFwaG9yZSA9IDA7XG5cbiAgXHRcdHB1c2hGYWlsdXJlKFwiVHJpZWQgdG8gcmVzdGFydCB0ZXN0IHdoaWxlIGFscmVhZHkgc3RhcnRlZCAodGVzdCdzIHNlbWFwaG9yZSB3YXMgMCBhbHJlYWR5KVwiLCBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0Ly8gQWRkIGEgc2xpZ2h0IGRlbGF5IHRvIGFsbG93IG1vcmUgYXNzZXJ0aW9ucyBldGMuXG4gIFx0aWYgKGRlZmluZWQuc2V0VGltZW91dCkge1xuICBcdFx0aWYgKGNvbmZpZy50aW1lb3V0KSB7XG4gIFx0XHRcdGNsZWFyVGltZW91dChjb25maWcudGltZW91dCk7XG4gIFx0XHR9XG4gIFx0XHRjb25maWcudGltZW91dCA9IHNldFRpbWVvdXQkMShmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdGlmICh0ZXN0LnNlbWFwaG9yZSA+IDApIHtcbiAgXHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdH1cblxuICBcdFx0XHRpZiAoY29uZmlnLnRpbWVvdXQpIHtcbiAgXHRcdFx0XHRjbGVhclRpbWVvdXQoY29uZmlnLnRpbWVvdXQpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0YmVnaW4oKTtcbiAgXHRcdH0pO1xuICBcdH0gZWxzZSB7XG4gIFx0XHRiZWdpbigpO1xuICBcdH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbGxlY3RUZXN0cyhtb2R1bGUpIHtcbiAgXHR2YXIgdGVzdHMgPSBbXS5jb25jYXQobW9kdWxlLnRlc3RzKTtcbiAgXHR2YXIgbW9kdWxlcyA9IFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShtb2R1bGUuY2hpbGRNb2R1bGVzKSk7XG5cbiAgXHQvLyBEbyBhIGJyZWFkdGgtZmlyc3QgdHJhdmVyc2FsIG9mIHRoZSBjaGlsZCBtb2R1bGVzXG4gIFx0d2hpbGUgKG1vZHVsZXMubGVuZ3RoKSB7XG4gIFx0XHR2YXIgbmV4dE1vZHVsZSA9IG1vZHVsZXMuc2hpZnQoKTtcbiAgXHRcdHRlc3RzLnB1c2guYXBwbHkodGVzdHMsIG5leHRNb2R1bGUudGVzdHMpO1xuICBcdFx0bW9kdWxlcy5wdXNoLmFwcGx5KG1vZHVsZXMsIHRvQ29uc3VtYWJsZUFycmF5KG5leHRNb2R1bGUuY2hpbGRNb2R1bGVzKSk7XG4gIFx0fVxuXG4gIFx0cmV0dXJuIHRlc3RzO1xuICB9XG5cbiAgZnVuY3Rpb24gbnVtYmVyT2ZUZXN0cyhtb2R1bGUpIHtcbiAgXHRyZXR1cm4gY29sbGVjdFRlc3RzKG1vZHVsZSkubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gbnVtYmVyT2ZVbnNraXBwZWRUZXN0cyhtb2R1bGUpIHtcbiAgXHRyZXR1cm4gY29sbGVjdFRlc3RzKG1vZHVsZSkuZmlsdGVyKGZ1bmN0aW9uICh0ZXN0KSB7XG4gIFx0XHRyZXR1cm4gIXRlc3Quc2tpcDtcbiAgXHR9KS5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlUZXN0c1Jhbihtb2R1bGUsIHNraXBwZWQpIHtcbiAgXHRtb2R1bGUudGVzdHNSdW4rKztcbiAgXHRpZiAoIXNraXBwZWQpIHtcbiAgXHRcdG1vZHVsZS51bnNraXBwZWRUZXN0c1J1bisrO1xuICBcdH1cbiAgXHR3aGlsZSAobW9kdWxlID0gbW9kdWxlLnBhcmVudE1vZHVsZSkge1xuICBcdFx0bW9kdWxlLnRlc3RzUnVuKys7XG4gIFx0XHRpZiAoIXNraXBwZWQpIHtcbiAgXHRcdFx0bW9kdWxlLnVuc2tpcHBlZFRlc3RzUnVuKys7XG4gIFx0XHR9XG4gIFx0fVxuICB9XG5cbiAgdmFyIEFzc2VydCA9IGZ1bmN0aW9uICgpIHtcbiAgXHRmdW5jdGlvbiBBc3NlcnQodGVzdENvbnRleHQpIHtcbiAgXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIEFzc2VydCk7XG5cbiAgXHRcdHRoaXMudGVzdCA9IHRlc3RDb250ZXh0O1xuICBcdH1cblxuICBcdC8vIEFzc2VydCBoZWxwZXJzXG5cbiAgXHRjcmVhdGVDbGFzcyhBc3NlcnQsIFt7XG4gIFx0XHRrZXk6IFwidGltZW91dFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHRpbWVvdXQoZHVyYXRpb24pIHtcbiAgXHRcdFx0aWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gXCJudW1iZXJcIikge1xuICBcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYSBudW1iZXIgYXMgdGhlIGR1cmF0aW9uIHRvIGFzc2VydC50aW1lb3V0XCIpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0dGhpcy50ZXN0LnRpbWVvdXQgPSBkdXJhdGlvbjtcblxuICBcdFx0XHQvLyBJZiBhIHRpbWVvdXQgaGFzIGJlZW4gc2V0LCBjbGVhciBpdCBhbmQgcmVzZXQgd2l0aCB0aGUgbmV3IGR1cmF0aW9uXG4gIFx0XHRcdGlmIChjb25maWcudGltZW91dCkge1xuICBcdFx0XHRcdGNsZWFyVGltZW91dChjb25maWcudGltZW91dCk7XG5cbiAgXHRcdFx0XHRpZiAoY29uZmlnLnRpbWVvdXRIYW5kbGVyICYmIHRoaXMudGVzdC50aW1lb3V0ID4gMCkge1xuICBcdFx0XHRcdFx0cmVzZXRUZXN0VGltZW91dCh0aGlzLnRlc3QudGltZW91dCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIERvY3VtZW50cyBhIFwic3RlcFwiLCB3aGljaCBpcyBhIHN0cmluZyB2YWx1ZSwgaW4gYSB0ZXN0IGFzIGEgcGFzc2luZyBhc3NlcnRpb25cblxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJzdGVwXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gc3RlcChtZXNzYWdlKSB7XG4gIFx0XHRcdHZhciBhc3NlcnRpb25NZXNzYWdlID0gbWVzc2FnZTtcbiAgXHRcdFx0dmFyIHJlc3VsdCA9ICEhbWVzc2FnZTtcblxuICBcdFx0XHR0aGlzLnRlc3Quc3RlcHMucHVzaChtZXNzYWdlKTtcblxuICBcdFx0XHRpZiAob2JqZWN0VHlwZShtZXNzYWdlKSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtZXNzYWdlID09PSBcIlwiKSB7XG4gIFx0XHRcdFx0YXNzZXJ0aW9uTWVzc2FnZSA9IFwiWW91IG11c3QgcHJvdmlkZSBhIG1lc3NhZ2UgdG8gYXNzZXJ0LnN0ZXBcIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChvYmplY3RUeXBlKG1lc3NhZ2UpICE9PSBcInN0cmluZ1wiKSB7XG4gIFx0XHRcdFx0YXNzZXJ0aW9uTWVzc2FnZSA9IFwiWW91IG11c3QgcHJvdmlkZSBhIHN0cmluZyB2YWx1ZSB0byBhc3NlcnQuc3RlcFwiO1xuICBcdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IHJlc3VsdCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBhc3NlcnRpb25NZXNzYWdlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBWZXJpZmllcyB0aGUgc3RlcHMgaW4gYSB0ZXN0IG1hdGNoIGEgZ2l2ZW4gYXJyYXkgb2Ygc3RyaW5nIHZhbHVlc1xuXG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInZlcmlmeVN0ZXBzXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gdmVyaWZ5U3RlcHMoc3RlcHMsIG1lc3NhZ2UpIHtcblxuICBcdFx0XHQvLyBTaW5jZSB0aGUgc3RlcHMgYXJyYXkgaXMganVzdCBzdHJpbmcgdmFsdWVzLCB3ZSBjYW4gY2xvbmUgd2l0aCBzbGljZVxuICBcdFx0XHR2YXIgYWN0dWFsU3RlcHNDbG9uZSA9IHRoaXMudGVzdC5zdGVwcy5zbGljZSgpO1xuICBcdFx0XHR0aGlzLmRlZXBFcXVhbChhY3R1YWxTdGVwc0Nsb25lLCBzdGVwcywgbWVzc2FnZSk7XG4gIFx0XHRcdHRoaXMudGVzdC5zdGVwcy5sZW5ndGggPSAwO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBTcGVjaWZ5IHRoZSBudW1iZXIgb2YgZXhwZWN0ZWQgYXNzZXJ0aW9ucyB0byBndWFyYW50ZWUgdGhhdCBmYWlsZWQgdGVzdFxuICBcdFx0Ly8gKG5vIGFzc2VydGlvbnMgYXJlIHJ1biBhdCBhbGwpIGRvbid0IHNsaXAgdGhyb3VnaC5cblxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJleHBlY3RcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBleHBlY3QoYXNzZXJ0cykge1xuICBcdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICBcdFx0XHRcdHRoaXMudGVzdC5leHBlY3RlZCA9IGFzc2VydHM7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0cmV0dXJuIHRoaXMudGVzdC5leHBlY3RlZDtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBQdXQgYSBob2xkIG9uIHByb2Nlc3NpbmcgYW5kIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWxlYXNlIGl0IGEgbWF4aW11bSBvZiBvbmNlLlxuXG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImFzeW5jXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gYXN5bmMoY291bnQpIHtcbiAgXHRcdFx0dmFyIHRlc3QkJDEgPSB0aGlzLnRlc3Q7XG5cbiAgXHRcdFx0dmFyIHBvcHBlZCA9IGZhbHNlLFxuICBcdFx0XHQgICAgYWNjZXB0Q2FsbENvdW50ID0gY291bnQ7XG5cbiAgXHRcdFx0aWYgKHR5cGVvZiBhY2NlcHRDYWxsQ291bnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgXHRcdFx0XHRhY2NlcHRDYWxsQ291bnQgPSAxO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0dmFyIHJlc3VtZSA9IGludGVybmFsU3RvcCh0ZXN0JCQxKTtcblxuICBcdFx0XHRyZXR1cm4gZnVuY3Rpb24gZG9uZSgpIHtcbiAgXHRcdFx0XHRpZiAoY29uZmlnLmN1cnJlbnQgIT09IHRlc3QkJDEpIHtcbiAgXHRcdFx0XHRcdHRocm93IEVycm9yKFwiYXNzZXJ0LmFzeW5jIGNhbGxiYWNrIGNhbGxlZCBhZnRlciB0ZXN0IGZpbmlzaGVkLlwiKTtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRpZiAocG9wcGVkKSB7XG4gIFx0XHRcdFx0XHR0ZXN0JCQxLnB1c2hGYWlsdXJlKFwiVG9vIG1hbnkgY2FsbHMgdG8gdGhlIGBhc3NlcnQuYXN5bmNgIGNhbGxiYWNrXCIsIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgXHRcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRhY2NlcHRDYWxsQ291bnQgLT0gMTtcbiAgXHRcdFx0XHRpZiAoYWNjZXB0Q2FsbENvdW50ID4gMCkge1xuICBcdFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdHBvcHBlZCA9IHRydWU7XG4gIFx0XHRcdFx0cmVzdW1lKCk7XG4gIFx0XHRcdH07XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEV4cG9ydHMgdGVzdC5wdXNoKCkgdG8gdGhlIHVzZXIgQVBJXG4gIFx0XHQvLyBBbGlhcyBvZiBwdXNoUmVzdWx0LlxuXG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInB1c2hcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBwdXNoKHJlc3VsdCwgYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgbmVnYXRpdmUpIHtcbiAgXHRcdFx0TG9nZ2VyLndhcm4oXCJhc3NlcnQucHVzaCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUVVuaXQgMy4wLlwiICsgXCIgUGxlYXNlIHVzZSBhc3NlcnQucHVzaFJlc3VsdCBpbnN0ZWFkIChodHRwczovL2FwaS5xdW5pdGpzLmNvbS9hc3NlcnQvcHVzaFJlc3VsdCkuXCIpO1xuXG4gIFx0XHRcdHZhciBjdXJyZW50QXNzZXJ0ID0gdGhpcyBpbnN0YW5jZW9mIEFzc2VydCA/IHRoaXMgOiBjb25maWcuY3VycmVudC5hc3NlcnQ7XG4gIFx0XHRcdHJldHVybiBjdXJyZW50QXNzZXJ0LnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogcmVzdWx0LFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuICBcdFx0XHRcdG5lZ2F0aXZlOiBuZWdhdGl2ZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwicHVzaFJlc3VsdFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHB1c2hSZXN1bHQocmVzdWx0SW5mbykge1xuXG4gIFx0XHRcdC8vIERlc3RydWN0dXJlIG9mIHJlc3VsdEluZm8gPSB7IHJlc3VsdCwgYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgbmVnYXRpdmUgfVxuICBcdFx0XHR2YXIgYXNzZXJ0ID0gdGhpcztcbiAgXHRcdFx0dmFyIGN1cnJlbnRUZXN0ID0gYXNzZXJ0IGluc3RhbmNlb2YgQXNzZXJ0ICYmIGFzc2VydC50ZXN0IHx8IGNvbmZpZy5jdXJyZW50O1xuXG4gIFx0XHRcdC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZpeC5cbiAgXHRcdFx0Ly8gQWxsb3dzIHRoZSBkaXJlY3QgdXNlIG9mIGdsb2JhbCBleHBvcnRlZCBhc3NlcnRpb25zIGFuZCBRVW5pdC5hc3NlcnQuKlxuICBcdFx0XHQvLyBBbHRob3VnaCwgaXQncyB1c2UgaXMgbm90IHJlY29tbWVuZGVkIGFzIGl0IGNhbiBsZWFrIGFzc2VydGlvbnNcbiAgXHRcdFx0Ly8gdG8gb3RoZXIgdGVzdHMgZnJvbSBhc3luYyB0ZXN0cywgYmVjYXVzZSB3ZSBvbmx5IGdldCBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCB0ZXN0LFxuICBcdFx0XHQvLyBub3QgZXhhY3RseSB0aGUgdGVzdCB3aGVyZSBhc3NlcnRpb24gd2VyZSBpbnRlbmRlZCB0byBiZSBjYWxsZWQuXG4gIFx0XHRcdGlmICghY3VycmVudFRlc3QpIHtcbiAgXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnRpb24gb3V0c2lkZSB0ZXN0IGNvbnRleHQsIGluIFwiICsgc291cmNlRnJvbVN0YWNrdHJhY2UoMikpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0aWYgKCEoYXNzZXJ0IGluc3RhbmNlb2YgQXNzZXJ0KSkge1xuICBcdFx0XHRcdGFzc2VydCA9IGN1cnJlbnRUZXN0LmFzc2VydDtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHJldHVybiBhc3NlcnQudGVzdC5wdXNoUmVzdWx0KHJlc3VsdEluZm8pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJva1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIG9rKHJlc3VsdCwgbWVzc2FnZSkge1xuICBcdFx0XHRpZiAoIW1lc3NhZ2UpIHtcbiAgXHRcdFx0XHRtZXNzYWdlID0gcmVzdWx0ID8gXCJva2F5XCIgOiBcImZhaWxlZCwgZXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgdHJ1dGh5LCB3YXM6IFwiICsgZHVtcC5wYXJzZShyZXN1bHQpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6ICEhcmVzdWx0LFxuICBcdFx0XHRcdGFjdHVhbDogcmVzdWx0LFxuICBcdFx0XHRcdGV4cGVjdGVkOiB0cnVlLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcIm5vdE9rXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gbm90T2socmVzdWx0LCBtZXNzYWdlKSB7XG4gIFx0XHRcdGlmICghbWVzc2FnZSkge1xuICBcdFx0XHRcdG1lc3NhZ2UgPSAhcmVzdWx0ID8gXCJva2F5XCIgOiBcImZhaWxlZCwgZXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgZmFsc3ksIHdhczogXCIgKyBkdW1wLnBhcnNlKHJlc3VsdCk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogIXJlc3VsdCxcbiAgXHRcdFx0XHRhY3R1YWw6IHJlc3VsdCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZmFsc2UsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZXF1YWxcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBlcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG5cbiAgXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICBcdFx0XHR2YXIgcmVzdWx0ID0gZXhwZWN0ZWQgPT0gYWN0dWFsO1xuXG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiByZXN1bHQsXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcIm5vdEVxdWFsXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gbm90RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuXG4gIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgXHRcdFx0dmFyIHJlc3VsdCA9IGV4cGVjdGVkICE9IGFjdHVhbDtcblxuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogcmVzdWx0LFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuICBcdFx0XHRcdG5lZ2F0aXZlOiB0cnVlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJwcm9wRXF1YWxcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBwcm9wRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBcdFx0XHRhY3R1YWwgPSBvYmplY3RWYWx1ZXMoYWN0dWFsKTtcbiAgXHRcdFx0ZXhwZWN0ZWQgPSBvYmplY3RWYWx1ZXMoZXhwZWN0ZWQpO1xuXG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiBlcXVpdihhY3R1YWwsIGV4cGVjdGVkKSxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwibm90UHJvcEVxdWFsXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gbm90UHJvcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0YWN0dWFsID0gb2JqZWN0VmFsdWVzKGFjdHVhbCk7XG4gIFx0XHRcdGV4cGVjdGVkID0gb2JqZWN0VmFsdWVzKGV4cGVjdGVkKTtcblxuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogIWVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQpLFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuICBcdFx0XHRcdG5lZ2F0aXZlOiB0cnVlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJkZWVwRXF1YWxcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBkZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogZXF1aXYoYWN0dWFsLCBleHBlY3RlZCksXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcIm5vdERlZXBFcXVhbFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIG5vdERlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiAhZXF1aXYoYWN0dWFsLCBleHBlY3RlZCksXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIFx0XHRcdFx0bmVnYXRpdmU6IHRydWVcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInN0cmljdEVxdWFsXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gc3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogZXhwZWN0ZWQgPT09IGFjdHVhbCxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwibm90U3RyaWN0RXF1YWxcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBub3RTdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiBleHBlY3RlZCAhPT0gYWN0dWFsLFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuICBcdFx0XHRcdG5lZ2F0aXZlOiB0cnVlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJ0aHJvd3NcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiB0aHJvd3MoYmxvY2ssIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIFx0XHRcdHZhciBhY3R1YWwgPSB2b2lkIDAsXG4gIFx0XHRcdCAgICByZXN1bHQgPSBmYWxzZTtcblxuICBcdFx0XHR2YXIgY3VycmVudFRlc3QgPSB0aGlzIGluc3RhbmNlb2YgQXNzZXJ0ICYmIHRoaXMudGVzdCB8fCBjb25maWcuY3VycmVudDtcblxuICBcdFx0XHQvLyAnZXhwZWN0ZWQnIGlzIG9wdGlvbmFsIHVubGVzcyBkb2luZyBzdHJpbmcgY29tcGFyaXNvblxuICBcdFx0XHRpZiAob2JqZWN0VHlwZShleHBlY3RlZCkgPT09IFwic3RyaW5nXCIpIHtcbiAgXHRcdFx0XHRpZiAobWVzc2FnZSA9PSBudWxsKSB7XG4gIFx0XHRcdFx0XHRtZXNzYWdlID0gZXhwZWN0ZWQ7XG4gIFx0XHRcdFx0XHRleHBlY3RlZCA9IG51bGw7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcInRocm93cy9yYWlzZXMgZG9lcyBub3QgYWNjZXB0IGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgZXhwZWN0ZWQgYXJndW1lbnQuXFxuXCIgKyBcIlVzZSBhIG5vbi1zdHJpbmcgb2JqZWN0IHZhbHVlIChlLmcuIHJlZ0V4cCkgaW5zdGVhZCBpZiBpdCdzIG5lY2Vzc2FyeS5cIik7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0Y3VycmVudFRlc3QuaWdub3JlR2xvYmFsRXJyb3JzID0gdHJ1ZTtcbiAgXHRcdFx0dHJ5IHtcbiAgXHRcdFx0XHRibG9jay5jYWxsKGN1cnJlbnRUZXN0LnRlc3RFbnZpcm9ubWVudCk7XG4gIFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiAgXHRcdFx0XHRhY3R1YWwgPSBlO1xuICBcdFx0XHR9XG4gIFx0XHRcdGN1cnJlbnRUZXN0Lmlnbm9yZUdsb2JhbEVycm9ycyA9IGZhbHNlO1xuXG4gIFx0XHRcdGlmIChhY3R1YWwpIHtcbiAgXHRcdFx0XHR2YXIgZXhwZWN0ZWRUeXBlID0gb2JqZWN0VHlwZShleHBlY3RlZCk7XG5cbiAgXHRcdFx0XHQvLyBXZSBkb24ndCB3YW50IHRvIHZhbGlkYXRlIHRocm93biBlcnJvclxuICBcdFx0XHRcdGlmICghZXhwZWN0ZWQpIHtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cbiAgXHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIGEgcmVnZXhwXG4gIFx0XHRcdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IFwicmVnZXhwXCIpIHtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IGV4cGVjdGVkLnRlc3QoZXJyb3JTdHJpbmcoYWN0dWFsKSk7XG5cbiAgXHRcdFx0XHRcdC8vIExvZyB0aGUgc3RyaW5nIGZvcm0gb2YgdGhlIHJlZ2V4cFxuICBcdFx0XHRcdFx0ZXhwZWN0ZWQgPSBTdHJpbmcoZXhwZWN0ZWQpO1xuXG4gIFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBhIGNvbnN0cnVjdG9yLCBtYXliZSBhbiBFcnJvciBjb25zdHJ1Y3RvclxuICBcdFx0XHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcImZ1bmN0aW9uXCIgJiYgYWN0dWFsIGluc3RhbmNlb2YgZXhwZWN0ZWQpIHtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cbiAgXHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIGFuIEVycm9yIG9iamVjdFxuICBcdFx0XHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcIm9iamVjdFwiKSB7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSBhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZC5jb25zdHJ1Y3RvciAmJiBhY3R1YWwubmFtZSA9PT0gZXhwZWN0ZWQubmFtZSAmJiBhY3R1YWwubWVzc2FnZSA9PT0gZXhwZWN0ZWQubWVzc2FnZTtcblxuICBcdFx0XHRcdFx0Ly8gTG9nIHRoZSBzdHJpbmcgZm9ybSBvZiB0aGUgRXJyb3Igb2JqZWN0XG4gIFx0XHRcdFx0XHRleHBlY3RlZCA9IGVycm9yU3RyaW5nKGV4cGVjdGVkKTtcblxuICBcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgYSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgdHJ1ZSBpZiB2YWxpZGF0aW9uIHBhc3NlZFxuICBcdFx0XHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcImZ1bmN0aW9uXCIgJiYgZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZSkge1xuICBcdFx0XHRcdFx0ZXhwZWN0ZWQgPSBudWxsO1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHRjdXJyZW50VGVzdC5hc3NlcnQucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiByZXN1bHQsXG5cbiAgXHRcdFx0XHQvLyB1bmRlZmluZWQgaWYgaXQgZGlkbid0IHRocm93XG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwgJiYgZXJyb3JTdHJpbmcoYWN0dWFsKSxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwicmVqZWN0c1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHJlamVjdHMocHJvbWlzZSwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0dmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gIFx0XHRcdHZhciBjdXJyZW50VGVzdCA9IHRoaXMgaW5zdGFuY2VvZiBBc3NlcnQgJiYgdGhpcy50ZXN0IHx8IGNvbmZpZy5jdXJyZW50O1xuXG4gIFx0XHRcdC8vICdleHBlY3RlZCcgaXMgb3B0aW9uYWwgdW5sZXNzIGRvaW5nIHN0cmluZyBjb21wYXJpc29uXG4gIFx0XHRcdGlmIChvYmplY3RUeXBlKGV4cGVjdGVkKSA9PT0gXCJzdHJpbmdcIikge1xuICBcdFx0XHRcdGlmIChtZXNzYWdlID09PSB1bmRlZmluZWQpIHtcbiAgXHRcdFx0XHRcdG1lc3NhZ2UgPSBleHBlY3RlZDtcbiAgXHRcdFx0XHRcdGV4cGVjdGVkID0gdW5kZWZpbmVkO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRtZXNzYWdlID0gXCJhc3NlcnQucmVqZWN0cyBkb2VzIG5vdCBhY2NlcHQgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBleHBlY3RlZCBcIiArIFwiYXJndW1lbnQuXFxuVXNlIGEgbm9uLXN0cmluZyBvYmplY3QgdmFsdWUgKGUuZy4gdmFsaWRhdG9yIGZ1bmN0aW9uKSBpbnN0ZWFkIFwiICsgXCJpZiBuZWNlc3NhcnkuXCI7XG5cbiAgXHRcdFx0XHRcdGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRcdFx0cmVzdWx0OiBmYWxzZSxcbiAgXHRcdFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHRcdFx0fSk7XG5cbiAgXHRcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHR2YXIgdGhlbiA9IHByb21pc2UgJiYgcHJvbWlzZS50aGVuO1xuICBcdFx0XHRpZiAob2JqZWN0VHlwZSh0aGVuKSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHRcdFx0dmFyIF9tZXNzYWdlID0gXCJUaGUgdmFsdWUgcHJvdmlkZWQgdG8gYGFzc2VydC5yZWplY3RzYCBpbiBcIiArIFwiXFxcIlwiICsgY3VycmVudFRlc3QudGVzdE5hbWUgKyBcIlxcXCIgd2FzIG5vdCBhIHByb21pc2UuXCI7XG5cbiAgXHRcdFx0XHRjdXJyZW50VGVzdC5hc3NlcnQucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0XHRyZXN1bHQ6IGZhbHNlLFxuICBcdFx0XHRcdFx0bWVzc2FnZTogX21lc3NhZ2UsXG4gIFx0XHRcdFx0XHRhY3R1YWw6IHByb21pc2VcbiAgXHRcdFx0XHR9KTtcblxuICBcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHZhciBkb25lID0gdGhpcy5hc3luYygpO1xuXG4gIFx0XHRcdHJldHVybiB0aGVuLmNhbGwocHJvbWlzZSwgZnVuY3Rpb24gaGFuZGxlRnVsZmlsbG1lbnQoKSB7XG4gIFx0XHRcdFx0dmFyIG1lc3NhZ2UgPSBcIlRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBgYXNzZXJ0LnJlamVjdHNgIGNhbGxiYWNrIGluIFwiICsgXCJcXFwiXCIgKyBjdXJyZW50VGVzdC50ZXN0TmFtZSArIFwiXFxcIiBkaWQgbm90IHJlamVjdC5cIjtcblxuICBcdFx0XHRcdGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRcdHJlc3VsdDogZmFsc2UsXG4gIFx0XHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuICBcdFx0XHRcdFx0YWN0dWFsOiBwcm9taXNlXG4gIFx0XHRcdFx0fSk7XG5cbiAgXHRcdFx0XHRkb25lKCk7XG4gIFx0XHRcdH0sIGZ1bmN0aW9uIGhhbmRsZVJlamVjdGlvbihhY3R1YWwpIHtcbiAgXHRcdFx0XHR2YXIgZXhwZWN0ZWRUeXBlID0gb2JqZWN0VHlwZShleHBlY3RlZCk7XG5cbiAgXHRcdFx0XHQvLyBXZSBkb24ndCB3YW50IHRvIHZhbGlkYXRlXG4gIFx0XHRcdFx0aWYgKGV4cGVjdGVkID09PSB1bmRlZmluZWQpIHtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cbiAgXHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIGEgcmVnZXhwXG4gIFx0XHRcdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IFwicmVnZXhwXCIpIHtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IGV4cGVjdGVkLnRlc3QoZXJyb3JTdHJpbmcoYWN0dWFsKSk7XG5cbiAgXHRcdFx0XHRcdC8vIExvZyB0aGUgc3RyaW5nIGZvcm0gb2YgdGhlIHJlZ2V4cFxuICBcdFx0XHRcdFx0ZXhwZWN0ZWQgPSBTdHJpbmcoZXhwZWN0ZWQpO1xuXG4gIFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBhIGNvbnN0cnVjdG9yLCBtYXliZSBhbiBFcnJvciBjb25zdHJ1Y3RvclxuICBcdFx0XHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcImZ1bmN0aW9uXCIgJiYgYWN0dWFsIGluc3RhbmNlb2YgZXhwZWN0ZWQpIHtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cbiAgXHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIGFuIEVycm9yIG9iamVjdFxuICBcdFx0XHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcIm9iamVjdFwiKSB7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSBhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZC5jb25zdHJ1Y3RvciAmJiBhY3R1YWwubmFtZSA9PT0gZXhwZWN0ZWQubmFtZSAmJiBhY3R1YWwubWVzc2FnZSA9PT0gZXhwZWN0ZWQubWVzc2FnZTtcblxuICBcdFx0XHRcdFx0Ly8gTG9nIHRoZSBzdHJpbmcgZm9ybSBvZiB0aGUgRXJyb3Igb2JqZWN0XG4gIFx0XHRcdFx0XHRleHBlY3RlZCA9IGVycm9yU3RyaW5nKGV4cGVjdGVkKTtcblxuICBcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgYSB2YWxpZGF0aW9uIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgdHJ1ZSBpZiB2YWxpZGF0aW9uIHBhc3NlZFxuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRpZiAoZXhwZWN0ZWRUeXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdFx0XHRcdFx0cmVzdWx0ID0gZXhwZWN0ZWQuY2FsbCh7fSwgYWN0dWFsKSA9PT0gdHJ1ZTtcbiAgXHRcdFx0XHRcdFx0ZXhwZWN0ZWQgPSBudWxsO1xuXG4gIFx0XHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIHNvbWUgb3RoZXIgaW52YWxpZCB0eXBlXG4gIFx0XHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcbiAgXHRcdFx0XHRcdFx0bWVzc2FnZSA9IFwiaW52YWxpZCBleHBlY3RlZCB2YWx1ZSBwcm92aWRlZCB0byBgYXNzZXJ0LnJlamVjdHNgIFwiICsgXCJjYWxsYmFjayBpbiBcXFwiXCIgKyBjdXJyZW50VGVzdC50ZXN0TmFtZSArIFwiXFxcIjogXCIgKyBleHBlY3RlZFR5cGUgKyBcIi5cIjtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRjdXJyZW50VGVzdC5hc3NlcnQucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0XHRyZXN1bHQ6IHJlc3VsdCxcblxuICBcdFx0XHRcdFx0Ly8gbGVhdmUgcmVqZWN0aW9uIHZhbHVlIG9mIHVuZGVmaW5lZCBhcy1pc1xuICBcdFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwgJiYgZXJyb3JTdHJpbmcoYWN0dWFsKSxcbiAgXHRcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0XHR9KTtcblxuICBcdFx0XHRcdGRvbmUoKTtcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fV0pO1xuICBcdHJldHVybiBBc3NlcnQ7XG4gIH0oKTtcblxuICAvLyBQcm92aWRlIGFuIGFsdGVybmF0aXZlIHRvIGFzc2VydC50aHJvd3MoKSwgZm9yIGVudmlyb25tZW50cyB0aGF0IGNvbnNpZGVyIHRocm93cyBhIHJlc2VydmVkIHdvcmRcbiAgLy8gS25vd24gdG8gdXMgYXJlOiBDbG9zdXJlIENvbXBpbGVyLCBOYXJ3aGFsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkb3Qtbm90YXRpb25cblxuXG4gIEFzc2VydC5wcm90b3R5cGUucmFpc2VzID0gQXNzZXJ0LnByb3RvdHlwZVtcInRocm93c1wiXTtcblxuICAvKipcbiAgICogQ29udmVydHMgYW4gZXJyb3IgaW50byBhIHNpbXBsZSBzdHJpbmcgZm9yIGNvbXBhcmlzb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge0Vycm9yfE9iamVjdH0gZXJyb3JcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZXJyb3JTdHJpbmcoZXJyb3IpIHtcbiAgXHR2YXIgcmVzdWx0RXJyb3JTdHJpbmcgPSBlcnJvci50b1N0cmluZygpO1xuXG4gIFx0Ly8gSWYgdGhlIGVycm9yIHdhc24ndCBhIHN1YmNsYXNzIG9mIEVycm9yIGJ1dCBzb21ldGhpbmcgbGlrZVxuICBcdC8vIGFuIG9iamVjdCBsaXRlcmFsIHdpdGggbmFtZSBhbmQgbWVzc2FnZSBwcm9wZXJ0aWVzLi4uXG4gIFx0aWYgKHJlc3VsdEVycm9yU3RyaW5nLnN1YnN0cmluZygwLCA3KSA9PT0gXCJbb2JqZWN0XCIpIHtcbiAgXHRcdHZhciBuYW1lID0gZXJyb3IubmFtZSA/IGVycm9yLm5hbWUudG9TdHJpbmcoKSA6IFwiRXJyb3JcIjtcbiAgXHRcdHZhciBtZXNzYWdlID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UudG9TdHJpbmcoKSA6IFwiXCI7XG5cbiAgXHRcdGlmIChuYW1lICYmIG1lc3NhZ2UpIHtcbiAgXHRcdFx0cmV0dXJuIG5hbWUgKyBcIjogXCIgKyBtZXNzYWdlO1xuICBcdFx0fSBlbHNlIGlmIChuYW1lKSB7XG4gIFx0XHRcdHJldHVybiBuYW1lO1xuICBcdFx0fSBlbHNlIGlmIChtZXNzYWdlKSB7XG4gIFx0XHRcdHJldHVybiBtZXNzYWdlO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0cmV0dXJuIFwiRXJyb3JcIjtcbiAgXHRcdH1cbiAgXHR9IGVsc2Uge1xuICBcdFx0cmV0dXJuIHJlc3VsdEVycm9yU3RyaW5nO1xuICBcdH1cbiAgfVxuXG4gIC8qIGdsb2JhbCBtb2R1bGUsIGV4cG9ydHMsIGRlZmluZSAqL1xuICBmdW5jdGlvbiBleHBvcnRRVW5pdChRVW5pdCkge1xuXG4gIFx0aWYgKGRlZmluZWQuZG9jdW1lbnQpIHtcblxuICBcdFx0Ly8gUVVuaXQgbWF5IGJlIGRlZmluZWQgd2hlbiBpdCBpcyBwcmVjb25maWd1cmVkIGJ1dCB0aGVuIG9ubHkgUVVuaXQgYW5kIFFVbml0LmNvbmZpZyBtYXkgYmUgZGVmaW5lZC5cbiAgXHRcdGlmICh3aW5kb3ckMS5RVW5pdCAmJiB3aW5kb3ckMS5RVW5pdC52ZXJzaW9uKSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlFVbml0IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5cIik7XG4gIFx0XHR9XG5cbiAgXHRcdHdpbmRvdyQxLlFVbml0ID0gUVVuaXQ7XG4gIFx0fVxuXG4gIFx0Ly8gRm9yIG5vZGVqc1xuICBcdGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBcdFx0bW9kdWxlLmV4cG9ydHMgPSBRVW5pdDtcblxuICBcdFx0Ly8gRm9yIGNvbnNpc3RlbmN5IHdpdGggQ29tbW9uSlMgZW52aXJvbm1lbnRzJyBleHBvcnRzXG4gIFx0XHRtb2R1bGUuZXhwb3J0cy5RVW5pdCA9IFFVbml0O1xuICBcdH1cblxuICBcdC8vIEZvciBDb21tb25KUyB3aXRoIGV4cG9ydHMsIGJ1dCB3aXRob3V0IG1vZHVsZS5leHBvcnRzLCBsaWtlIFJoaW5vXG4gIFx0aWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMpIHtcbiAgXHRcdGV4cG9ydHMuUVVuaXQgPSBRVW5pdDtcbiAgXHR9XG5cbiAgXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHJldHVybiBRVW5pdDtcbiAgXHRcdH0pO1xuICBcdFx0UVVuaXQuY29uZmlnLmF1dG9zdGFydCA9IGZhbHNlO1xuICBcdH1cblxuICBcdC8vIEZvciBXZWIvU2VydmljZSBXb3JrZXJzXG4gIFx0aWYgKHNlbGYkMSAmJiBzZWxmJDEuV29ya2VyR2xvYmFsU2NvcGUgJiYgc2VsZiQxIGluc3RhbmNlb2Ygc2VsZiQxLldvcmtlckdsb2JhbFNjb3BlKSB7XG4gIFx0XHRzZWxmJDEuUVVuaXQgPSBRVW5pdDtcbiAgXHR9XG4gIH1cblxuICAvLyBIYW5kbGUgYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi4gQnkgY29udmVudGlvbiwgcmV0dXJucyB0cnVlIGlmIGZ1cnRoZXJcbiAgLy8gZXJyb3IgaGFuZGxpbmcgc2hvdWxkIGJlIHN1cHByZXNzZWQgYW5kIGZhbHNlIG90aGVyd2lzZS5cbiAgLy8gSW4gdGhpcyBjYXNlLCB3ZSB3aWxsIG9ubHkgc3VwcHJlc3MgZnVydGhlciBlcnJvciBoYW5kbGluZyBpZiB0aGVcbiAgLy8gXCJpZ25vcmVHbG9iYWxFcnJvcnNcIiBjb25maWd1cmF0aW9uIG9wdGlvbiBpcyBlbmFibGVkLlxuICBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gIFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gIFx0XHRhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgXHR9XG5cbiAgXHRpZiAoY29uZmlnLmN1cnJlbnQpIHtcbiAgXHRcdGlmIChjb25maWcuY3VycmVudC5pZ25vcmVHbG9iYWxFcnJvcnMpIHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9XG4gIFx0XHRwdXNoRmFpbHVyZS5hcHBseSh1bmRlZmluZWQsIFtlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFja3RyYWNlIHx8IGVycm9yLmZpbGVOYW1lICsgXCI6XCIgKyBlcnJvci5saW5lTnVtYmVyXS5jb25jYXQoYXJncykpO1xuICBcdH0gZWxzZSB7XG4gIFx0XHR0ZXN0KFwiZ2xvYmFsIGZhaWx1cmVcIiwgZXh0ZW5kKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0cHVzaEZhaWx1cmUuYXBwbHkodW5kZWZpbmVkLCBbZXJyb3IubWVzc2FnZSwgZXJyb3Iuc3RhY2t0cmFjZSB8fCBlcnJvci5maWxlTmFtZSArIFwiOlwiICsgZXJyb3IubGluZU51bWJlcl0uY29uY2F0KGFyZ3MpKTtcbiAgXHRcdH0sIHsgdmFsaWRUZXN0OiB0cnVlIH0pKTtcbiAgXHR9XG5cbiAgXHRyZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBIYW5kbGUgYW4gdW5oYW5kbGVkIHJlamVjdGlvblxuICBmdW5jdGlvbiBvblVuaGFuZGxlZFJlamVjdGlvbihyZWFzb24pIHtcbiAgXHR2YXIgcmVzdWx0SW5mbyA9IHtcbiAgXHRcdHJlc3VsdDogZmFsc2UsXG4gIFx0XHRtZXNzYWdlOiByZWFzb24ubWVzc2FnZSB8fCBcImVycm9yXCIsXG4gIFx0XHRhY3R1YWw6IHJlYXNvbixcbiAgXHRcdHNvdXJjZTogcmVhc29uLnN0YWNrIHx8IHNvdXJjZUZyb21TdGFja3RyYWNlKDMpXG4gIFx0fTtcblxuICBcdHZhciBjdXJyZW50VGVzdCA9IGNvbmZpZy5jdXJyZW50O1xuICBcdGlmIChjdXJyZW50VGVzdCkge1xuICBcdFx0Y3VycmVudFRlc3QuYXNzZXJ0LnB1c2hSZXN1bHQocmVzdWx0SW5mbyk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdHRlc3QoXCJnbG9iYWwgZmFpbHVyZVwiLCBleHRlbmQoZnVuY3Rpb24gKGFzc2VydCkge1xuICBcdFx0XHRhc3NlcnQucHVzaFJlc3VsdChyZXN1bHRJbmZvKTtcbiAgXHRcdH0sIHsgdmFsaWRUZXN0OiB0cnVlIH0pKTtcbiAgXHR9XG4gIH1cblxuICB2YXIgUVVuaXQgPSB7fTtcbiAgdmFyIGdsb2JhbFN1aXRlID0gbmV3IFN1aXRlUmVwb3J0KCk7XG5cbiAgLy8gVGhlIGluaXRpYWwgXCJjdXJyZW50TW9kdWxlXCIgcmVwcmVzZW50cyB0aGUgZ2xvYmFsIChvciB0b3AtbGV2ZWwpIG1vZHVsZSB0aGF0XG4gIC8vIGlzIG5vdCBleHBsaWNpdGx5IGRlZmluZWQgYnkgdGhlIHVzZXIsIHRoZXJlZm9yZSB3ZSBhZGQgdGhlIFwiZ2xvYmFsU3VpdGVcIiB0b1xuICAvLyBpdCBzaW5jZSBlYWNoIG1vZHVsZSBoYXMgYSBzdWl0ZVJlcG9ydCBhc3NvY2lhdGVkIHdpdGggaXQuXG4gIGNvbmZpZy5jdXJyZW50TW9kdWxlLnN1aXRlUmVwb3J0ID0gZ2xvYmFsU3VpdGU7XG5cbiAgdmFyIGdsb2JhbFN0YXJ0Q2FsbGVkID0gZmFsc2U7XG4gIHZhciBydW5TdGFydGVkID0gZmFsc2U7XG5cbiAgLy8gRmlndXJlIG91dCBpZiB3ZSdyZSBydW5uaW5nIHRoZSB0ZXN0cyBmcm9tIGEgc2VydmVyIG9yIG5vdFxuICBRVW5pdC5pc0xvY2FsID0gIShkZWZpbmVkLmRvY3VtZW50ICYmIHdpbmRvdyQxLmxvY2F0aW9uLnByb3RvY29sICE9PSBcImZpbGU6XCIpO1xuXG4gIC8vIEV4cG9zZSB0aGUgY3VycmVudCBRVW5pdCB2ZXJzaW9uXG4gIFFVbml0LnZlcnNpb24gPSBcIjIuOS4zXCI7XG5cbiAgZXh0ZW5kKFFVbml0LCB7XG4gIFx0b246IG9uLFxuXG4gIFx0bW9kdWxlOiBtb2R1bGUkMSxcblxuICBcdHRlc3Q6IHRlc3QsXG5cbiAgXHR0b2RvOiB0b2RvLFxuXG4gIFx0c2tpcDogc2tpcCxcblxuICBcdG9ubHk6IG9ubHksXG5cbiAgXHRzdGFydDogZnVuY3Rpb24gc3RhcnQoY291bnQpIHtcbiAgXHRcdHZhciBnbG9iYWxTdGFydEFscmVhZHlDYWxsZWQgPSBnbG9iYWxTdGFydENhbGxlZDtcblxuICBcdFx0aWYgKCFjb25maWcuY3VycmVudCkge1xuICBcdFx0XHRnbG9iYWxTdGFydENhbGxlZCA9IHRydWU7XG5cbiAgXHRcdFx0aWYgKHJ1blN0YXJ0ZWQpIHtcbiAgXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYWxsZWQgc3RhcnQoKSB3aGlsZSB0ZXN0IGFscmVhZHkgc3RhcnRlZCBydW5uaW5nXCIpO1xuICBcdFx0XHR9IGVsc2UgaWYgKGdsb2JhbFN0YXJ0QWxyZWFkeUNhbGxlZCB8fCBjb3VudCA+IDEpIHtcbiAgXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYWxsZWQgc3RhcnQoKSBvdXRzaWRlIG9mIGEgdGVzdCBjb250ZXh0IHRvbyBtYW55IHRpbWVzXCIpO1xuICBcdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5hdXRvc3RhcnQpIHtcbiAgXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYWxsZWQgc3RhcnQoKSBvdXRzaWRlIG9mIGEgdGVzdCBjb250ZXh0IHdoZW4gXCIgKyBcIlFVbml0LmNvbmZpZy5hdXRvc3RhcnQgd2FzIHRydWVcIik7XG4gIFx0XHRcdH0gZWxzZSBpZiAoIWNvbmZpZy5wYWdlTG9hZGVkKSB7XG5cbiAgXHRcdFx0XHQvLyBUaGUgcGFnZSBpc24ndCBjb21wbGV0ZWx5IGxvYWRlZCB5ZXQsIHNvIHdlIHNldCBhdXRvc3RhcnQgYW5kIHRoZW5cbiAgXHRcdFx0XHQvLyBsb2FkIGlmIHdlJ3JlIGluIE5vZGUgb3Igd2FpdCBmb3IgdGhlIGJyb3dzZXIncyBsb2FkIGV2ZW50LlxuICBcdFx0XHRcdGNvbmZpZy5hdXRvc3RhcnQgPSB0cnVlO1xuXG4gIFx0XHRcdFx0Ly8gU3RhcnRzIGZyb20gTm9kZSBldmVuIGlmIC5sb2FkIHdhcyBub3QgcHJldmlvdXNseSBjYWxsZWQuIFdlIHN0aWxsIHJldHVyblxuICBcdFx0XHRcdC8vIGVhcmx5IG90aGVyd2lzZSB3ZSdsbCB3aW5kIHVwIFwiYmVnaW5uaW5nXCIgdHdpY2UuXG4gIFx0XHRcdFx0aWYgKCFkZWZpbmVkLmRvY3VtZW50KSB7XG4gIFx0XHRcdFx0XHRRVW5pdC5sb2FkKCk7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHR9XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJRVW5pdC5zdGFydCBjYW5ub3QgYmUgY2FsbGVkIGluc2lkZSBhIHRlc3QgY29udGV4dC5cIik7XG4gIFx0XHR9XG5cbiAgXHRcdHNjaGVkdWxlQmVnaW4oKTtcbiAgXHR9LFxuXG4gIFx0Y29uZmlnOiBjb25maWcsXG5cbiAgXHRpczogaXMsXG5cbiAgXHRvYmplY3RUeXBlOiBvYmplY3RUeXBlLFxuXG4gIFx0ZXh0ZW5kOiBleHRlbmQsXG5cbiAgXHRsb2FkOiBmdW5jdGlvbiBsb2FkKCkge1xuICBcdFx0Y29uZmlnLnBhZ2VMb2FkZWQgPSB0cnVlO1xuXG4gIFx0XHQvLyBJbml0aWFsaXplIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgXHRcdGV4dGVuZChjb25maWcsIHtcbiAgXHRcdFx0c3RhdHM6IHsgYWxsOiAwLCBiYWQ6IDAgfSxcbiAgXHRcdFx0c3RhcnRlZDogMCxcbiAgXHRcdFx0dXBkYXRlUmF0ZTogMTAwMCxcbiAgXHRcdFx0YXV0b3N0YXJ0OiB0cnVlLFxuICBcdFx0XHRmaWx0ZXI6IFwiXCJcbiAgXHRcdH0sIHRydWUpO1xuXG4gIFx0XHRpZiAoIXJ1blN0YXJ0ZWQpIHtcbiAgXHRcdFx0Y29uZmlnLmJsb2NraW5nID0gZmFsc2U7XG5cbiAgXHRcdFx0aWYgKGNvbmZpZy5hdXRvc3RhcnQpIHtcbiAgXHRcdFx0XHRzY2hlZHVsZUJlZ2luKCk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9LFxuXG4gIFx0c3RhY2s6IGZ1bmN0aW9uIHN0YWNrKG9mZnNldCkge1xuICBcdFx0b2Zmc2V0ID0gKG9mZnNldCB8fCAwKSArIDI7XG4gIFx0XHRyZXR1cm4gc291cmNlRnJvbVN0YWNrdHJhY2Uob2Zmc2V0KTtcbiAgXHR9LFxuXG4gIFx0b25FcnJvcjogb25FcnJvcixcblxuICBcdG9uVW5oYW5kbGVkUmVqZWN0aW9uOiBvblVuaGFuZGxlZFJlamVjdGlvblxuICB9KTtcblxuICBRVW5pdC5wdXNoRmFpbHVyZSA9IHB1c2hGYWlsdXJlO1xuICBRVW5pdC5hc3NlcnQgPSBBc3NlcnQucHJvdG90eXBlO1xuICBRVW5pdC5lcXVpdiA9IGVxdWl2O1xuICBRVW5pdC5kdW1wID0gZHVtcDtcblxuICByZWdpc3RlckxvZ2dpbmdDYWxsYmFja3MoUVVuaXQpO1xuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlQmVnaW4oKSB7XG5cbiAgXHRydW5TdGFydGVkID0gdHJ1ZTtcblxuICBcdC8vIEFkZCBhIHNsaWdodCBkZWxheSB0byBhbGxvdyBkZWZpbml0aW9uIG9mIG1vcmUgbW9kdWxlcyBhbmQgdGVzdHMuXG4gIFx0aWYgKGRlZmluZWQuc2V0VGltZW91dCkge1xuICBcdFx0c2V0VGltZW91dCQxKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0YmVnaW4oKTtcbiAgXHRcdH0pO1xuICBcdH0gZWxzZSB7XG4gIFx0XHRiZWdpbigpO1xuICBcdH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmxvY2tBbmRBZHZhbmNlUXVldWUoKSB7XG4gIFx0Y29uZmlnLmJsb2NraW5nID0gZmFsc2U7XG4gIFx0UHJvY2Vzc2luZ1F1ZXVlLmFkdmFuY2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZ2luKCkge1xuICBcdHZhciBpLFxuICBcdCAgICBsLFxuICBcdCAgICBtb2R1bGVzTG9nID0gW107XG5cbiAgXHQvLyBJZiB0aGUgdGVzdCBydW4gaGFzbid0IG9mZmljaWFsbHkgYmVndW4geWV0XG4gIFx0aWYgKCFjb25maWcuc3RhcnRlZCkge1xuXG4gIFx0XHQvLyBSZWNvcmQgdGhlIHRpbWUgb2YgdGhlIHRlc3QgcnVuJ3MgYmVnaW5uaW5nXG4gIFx0XHRjb25maWcuc3RhcnRlZCA9IG5vdygpO1xuXG4gIFx0XHQvLyBEZWxldGUgdGhlIGxvb3NlIHVubmFtZWQgbW9kdWxlIGlmIHVudXNlZC5cbiAgXHRcdGlmIChjb25maWcubW9kdWxlc1swXS5uYW1lID09PSBcIlwiICYmIGNvbmZpZy5tb2R1bGVzWzBdLnRlc3RzLmxlbmd0aCA9PT0gMCkge1xuICBcdFx0XHRjb25maWcubW9kdWxlcy5zaGlmdCgpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBBdm9pZCB1bm5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBieSBub3QgbG9nZ2luZyBtb2R1bGVzJyB0ZXN0IGVudmlyb25tZW50c1xuICBcdFx0Zm9yIChpID0gMCwgbCA9IGNvbmZpZy5tb2R1bGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICBcdFx0XHRtb2R1bGVzTG9nLnB1c2goe1xuICBcdFx0XHRcdG5hbWU6IGNvbmZpZy5tb2R1bGVzW2ldLm5hbWUsXG4gIFx0XHRcdFx0dGVzdHM6IGNvbmZpZy5tb2R1bGVzW2ldLnRlc3RzXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBUaGUgdGVzdCBydW4gaXMgb2ZmaWNpYWxseSBiZWdpbm5pbmcgbm93XG4gIFx0XHRlbWl0KFwicnVuU3RhcnRcIiwgZ2xvYmFsU3VpdGUuc3RhcnQodHJ1ZSkpO1xuICBcdFx0cnVuTG9nZ2luZ0NhbGxiYWNrcyhcImJlZ2luXCIsIHtcbiAgXHRcdFx0dG90YWxUZXN0czogVGVzdC5jb3VudCxcbiAgXHRcdFx0bW9kdWxlczogbW9kdWxlc0xvZ1xuICBcdFx0fSkudGhlbih1bmJsb2NrQW5kQWR2YW5jZVF1ZXVlKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0dW5ibG9ja0FuZEFkdmFuY2VRdWV1ZSgpO1xuICBcdH1cbiAgfVxuXG4gIGV4cG9ydFFVbml0KFFVbml0KTtcblxuICAoZnVuY3Rpb24gKCkge1xuXG4gIFx0aWYgKHR5cGVvZiB3aW5kb3ckMSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgZG9jdW1lbnQkMSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHZhciBjb25maWcgPSBRVW5pdC5jb25maWcsXG4gIFx0ICAgIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgXHQvLyBTdG9yZXMgZml4dHVyZSBIVE1MIGZvciByZXNldHRpbmcgbGF0ZXJcbiAgXHRmdW5jdGlvbiBzdG9yZUZpeHR1cmUoKSB7XG5cbiAgXHRcdC8vIEF2b2lkIG92ZXJ3cml0aW5nIHVzZXItZGVmaW5lZCB2YWx1ZXNcbiAgXHRcdGlmIChoYXNPd24uY2FsbChjb25maWcsIFwiZml4dHVyZVwiKSkge1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdHZhciBmaXh0dXJlID0gZG9jdW1lbnQkMS5nZXRFbGVtZW50QnlJZChcInF1bml0LWZpeHR1cmVcIik7XG4gIFx0XHRpZiAoZml4dHVyZSkge1xuICBcdFx0XHRjb25maWcuZml4dHVyZSA9IGZpeHR1cmUuY2xvbmVOb2RlKHRydWUpO1xuICBcdFx0fVxuICBcdH1cblxuICBcdFFVbml0LmJlZ2luKHN0b3JlRml4dHVyZSk7XG5cbiAgXHQvLyBSZXNldHMgdGhlIGZpeHR1cmUgRE9NIGVsZW1lbnQgaWYgYXZhaWxhYmxlLlxuICBcdGZ1bmN0aW9uIHJlc2V0Rml4dHVyZSgpIHtcbiAgXHRcdGlmIChjb25maWcuZml4dHVyZSA9PSBudWxsKSB7XG4gIFx0XHRcdHJldHVybjtcbiAgXHRcdH1cblxuICBcdFx0dmFyIGZpeHR1cmUgPSBkb2N1bWVudCQxLmdldEVsZW1lbnRCeUlkKFwicXVuaXQtZml4dHVyZVwiKTtcbiAgXHRcdHZhciByZXNldEZpeHR1cmVUeXBlID0gX3R5cGVvZihjb25maWcuZml4dHVyZSk7XG4gIFx0XHRpZiAocmVzZXRGaXh0dXJlVHlwZSA9PT0gXCJzdHJpbmdcIikge1xuXG4gIFx0XHRcdC8vIHN1cHBvcnQgdXNlciBkZWZpbmVkIHZhbHVlcyBmb3IgYGNvbmZpZy5maXh0dXJlYFxuICBcdFx0XHR2YXIgbmV3Rml4dHVyZSA9IGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXHRcdFx0bmV3Rml4dHVyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInF1bml0LWZpeHR1cmVcIik7XG4gIFx0XHRcdG5ld0ZpeHR1cmUuaW5uZXJIVE1MID0gY29uZmlnLmZpeHR1cmU7XG4gIFx0XHRcdGZpeHR1cmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Rml4dHVyZSwgZml4dHVyZSk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHR2YXIgY2xvbmVkRml4dHVyZSA9IGNvbmZpZy5maXh0dXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgXHRcdFx0Zml4dHVyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZWRGaXh0dXJlLCBmaXh0dXJlKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRRVW5pdC50ZXN0U3RhcnQocmVzZXRGaXh0dXJlKTtcbiAgfSkoKTtcblxuICAoZnVuY3Rpb24gKCkge1xuXG4gIFx0Ly8gT25seSBpbnRlcmFjdCB3aXRoIFVSTHMgdmlhIHdpbmRvdy5sb2NhdGlvblxuICBcdHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3ckMSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3ckMS5sb2NhdGlvbjtcbiAgXHRpZiAoIWxvY2F0aW9uKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0dmFyIHVybFBhcmFtcyA9IGdldFVybFBhcmFtcygpO1xuXG4gIFx0UVVuaXQudXJsUGFyYW1zID0gdXJsUGFyYW1zO1xuXG4gIFx0Ly8gTWF0Y2ggbW9kdWxlL3Rlc3QgYnkgaW5jbHVzaW9uIGluIGFuIGFycmF5XG4gIFx0UVVuaXQuY29uZmlnLm1vZHVsZUlkID0gW10uY29uY2F0KHVybFBhcmFtcy5tb2R1bGVJZCB8fCBbXSk7XG4gIFx0UVVuaXQuY29uZmlnLnRlc3RJZCA9IFtdLmNvbmNhdCh1cmxQYXJhbXMudGVzdElkIHx8IFtdKTtcblxuICBcdC8vIEV4YWN0IGNhc2UtaW5zZW5zaXRpdmUgbWF0Y2ggb2YgdGhlIG1vZHVsZSBuYW1lXG4gIFx0UVVuaXQuY29uZmlnLm1vZHVsZSA9IHVybFBhcmFtcy5tb2R1bGU7XG5cbiAgXHQvLyBSZWd1bGFyIGV4cHJlc3Npb24gb3IgY2FzZS1pbnNlbnN0aXZlIHN1YnN0cmluZyBtYXRjaCBhZ2FpbnN0IFwibW9kdWxlTmFtZTogdGVzdE5hbWVcIlxuICBcdFFVbml0LmNvbmZpZy5maWx0ZXIgPSB1cmxQYXJhbXMuZmlsdGVyO1xuXG4gIFx0Ly8gVGVzdCBvcmRlciByYW5kb21pemF0aW9uXG4gIFx0aWYgKHVybFBhcmFtcy5zZWVkID09PSB0cnVlKSB7XG5cbiAgXHRcdC8vIEdlbmVyYXRlIGEgcmFuZG9tIHNlZWQgaWYgdGhlIG9wdGlvbiBpcyBzcGVjaWZpZWQgd2l0aG91dCBhIHZhbHVlXG4gIFx0XHRRVW5pdC5jb25maWcuc2VlZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xuICBcdH0gZWxzZSBpZiAodXJsUGFyYW1zLnNlZWQpIHtcbiAgXHRcdFFVbml0LmNvbmZpZy5zZWVkID0gdXJsUGFyYW1zLnNlZWQ7XG4gIFx0fVxuXG4gIFx0Ly8gQWRkIFVSTC1wYXJhbWV0ZXItbWFwcGVkIGNvbmZpZyB2YWx1ZXMgd2l0aCBVSSBmb3JtIHJlbmRlcmluZyBkYXRhXG4gIFx0UVVuaXQuY29uZmlnLnVybENvbmZpZy5wdXNoKHtcbiAgXHRcdGlkOiBcImhpZGVwYXNzZWRcIixcbiAgXHRcdGxhYmVsOiBcIkhpZGUgcGFzc2VkIHRlc3RzXCIsXG4gIFx0XHR0b29sdGlwOiBcIk9ubHkgc2hvdyB0ZXN0cyBhbmQgYXNzZXJ0aW9ucyB0aGF0IGZhaWwuIFN0b3JlZCBhcyBxdWVyeS1zdHJpbmdzLlwiXG4gIFx0fSwge1xuICBcdFx0aWQ6IFwibm9nbG9iYWxzXCIsXG4gIFx0XHRsYWJlbDogXCJDaGVjayBmb3IgR2xvYmFsc1wiLFxuICBcdFx0dG9vbHRpcDogXCJFbmFibGluZyB0aGlzIHdpbGwgdGVzdCBpZiBhbnkgdGVzdCBpbnRyb2R1Y2VzIG5ldyBwcm9wZXJ0aWVzIG9uIHRoZSBcIiArIFwiZ2xvYmFsIG9iamVjdCAoYHdpbmRvd2AgaW4gQnJvd3NlcnMpLiBTdG9yZWQgYXMgcXVlcnktc3RyaW5ncy5cIlxuICBcdH0sIHtcbiAgXHRcdGlkOiBcIm5vdHJ5Y2F0Y2hcIixcbiAgXHRcdGxhYmVsOiBcIk5vIHRyeS1jYXRjaFwiLFxuICBcdFx0dG9vbHRpcDogXCJFbmFibGluZyB0aGlzIHdpbGwgcnVuIHRlc3RzIG91dHNpZGUgb2YgYSB0cnktY2F0Y2ggYmxvY2suIE1ha2VzIGRlYnVnZ2luZyBcIiArIFwiZXhjZXB0aW9ucyBpbiBJRSByZWFzb25hYmxlLiBTdG9yZWQgYXMgcXVlcnktc3RyaW5ncy5cIlxuICBcdH0pO1xuXG4gIFx0UVVuaXQuYmVnaW4oZnVuY3Rpb24gKCkge1xuICBcdFx0dmFyIGksXG4gIFx0XHQgICAgb3B0aW9uLFxuICBcdFx0ICAgIHVybENvbmZpZyA9IFFVbml0LmNvbmZpZy51cmxDb25maWc7XG5cbiAgXHRcdGZvciAoaSA9IDA7IGkgPCB1cmxDb25maWcubGVuZ3RoOyBpKyspIHtcblxuICBcdFx0XHQvLyBPcHRpb25zIGNhbiBiZSBlaXRoZXIgc3RyaW5ncyBvciBvYmplY3RzIHdpdGggbm9uZW1wdHkgXCJpZFwiIHByb3BlcnRpZXNcbiAgXHRcdFx0b3B0aW9uID0gUVVuaXQuY29uZmlnLnVybENvbmZpZ1tpXTtcbiAgXHRcdFx0aWYgKHR5cGVvZiBvcHRpb24gIT09IFwic3RyaW5nXCIpIHtcbiAgXHRcdFx0XHRvcHRpb24gPSBvcHRpb24uaWQ7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRpZiAoUVVuaXQuY29uZmlnW29wdGlvbl0gPT09IHVuZGVmaW5lZCkge1xuICBcdFx0XHRcdFFVbml0LmNvbmZpZ1tvcHRpb25dID0gdXJsUGFyYW1zW29wdGlvbl07XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9KTtcblxuICBcdGZ1bmN0aW9uIGdldFVybFBhcmFtcygpIHtcbiAgXHRcdHZhciBpLCBwYXJhbSwgbmFtZSwgdmFsdWU7XG4gIFx0XHR2YXIgdXJsUGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgXHRcdHZhciBwYXJhbXMgPSBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkuc3BsaXQoXCImXCIpO1xuICBcdFx0dmFyIGxlbmd0aCA9IHBhcmFtcy5sZW5ndGg7XG5cbiAgXHRcdGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICBcdFx0XHRpZiAocGFyYW1zW2ldKSB7XG4gIFx0XHRcdFx0cGFyYW0gPSBwYXJhbXNbaV0uc3BsaXQoXCI9XCIpO1xuICBcdFx0XHRcdG5hbWUgPSBkZWNvZGVRdWVyeVBhcmFtKHBhcmFtWzBdKTtcblxuICBcdFx0XHRcdC8vIEFsbG93IGp1c3QgYSBrZXkgdG8gdHVybiBvbiBhIGZsYWcsIGUuZy4sIHRlc3QuaHRtbD9ub2dsb2JhbHNcbiAgXHRcdFx0XHR2YWx1ZSA9IHBhcmFtLmxlbmd0aCA9PT0gMSB8fCBkZWNvZGVRdWVyeVBhcmFtKHBhcmFtLnNsaWNlKDEpLmpvaW4oXCI9XCIpKTtcbiAgXHRcdFx0XHRpZiAobmFtZSBpbiB1cmxQYXJhbXMpIHtcbiAgXHRcdFx0XHRcdHVybFBhcmFtc1tuYW1lXSA9IFtdLmNvbmNhdCh1cmxQYXJhbXNbbmFtZV0sIHZhbHVlKTtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0dXJsUGFyYW1zW25hbWVdID0gdmFsdWU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiB1cmxQYXJhbXM7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gZGVjb2RlUXVlcnlQYXJhbShwYXJhbSkge1xuICBcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbS5yZXBsYWNlKC9cXCsvZywgXCIlMjBcIikpO1xuICBcdH1cbiAgfSkoKTtcblxuICB2YXIgc3RhdHMgPSB7XG4gIFx0cGFzc2VkVGVzdHM6IDAsXG4gIFx0ZmFpbGVkVGVzdHM6IDAsXG4gIFx0c2tpcHBlZFRlc3RzOiAwLFxuICBcdHRvZG9UZXN0czogMFxuICB9O1xuXG4gIC8vIEVzY2FwZSB0ZXh0IGZvciBhdHRyaWJ1dGUgb3IgdGV4dCBjb250ZW50LlxuICBmdW5jdGlvbiBlc2NhcGVUZXh0KHMpIHtcbiAgXHRpZiAoIXMpIHtcbiAgXHRcdHJldHVybiBcIlwiO1xuICBcdH1cbiAgXHRzID0gcyArIFwiXCI7XG5cbiAgXHQvLyBCb3RoIHNpbmdsZSBxdW90ZXMgYW5kIGRvdWJsZSBxdW90ZXMgKGZvciBhdHRyaWJ1dGVzKVxuICBcdHJldHVybiBzLnJlcGxhY2UoL1snXCI8PiZdL2csIGZ1bmN0aW9uIChzKSB7XG4gIFx0XHRzd2l0Y2ggKHMpIHtcbiAgXHRcdFx0Y2FzZSBcIidcIjpcbiAgXHRcdFx0XHRyZXR1cm4gXCImIzAzOTtcIjtcbiAgXHRcdFx0Y2FzZSBcIlxcXCJcIjpcbiAgXHRcdFx0XHRyZXR1cm4gXCImcXVvdDtcIjtcbiAgXHRcdFx0Y2FzZSBcIjxcIjpcbiAgXHRcdFx0XHRyZXR1cm4gXCImbHQ7XCI7XG4gIFx0XHRcdGNhc2UgXCI+XCI6XG4gIFx0XHRcdFx0cmV0dXJuIFwiJmd0O1wiO1xuICBcdFx0XHRjYXNlIFwiJlwiOlxuICBcdFx0XHRcdHJldHVybiBcIiZhbXA7XCI7XG4gIFx0XHR9XG4gIFx0fSk7XG4gIH1cblxuICAoZnVuY3Rpb24gKCkge1xuXG4gIFx0Ly8gRG9uJ3QgbG9hZCB0aGUgSFRNTCBSZXBvcnRlciBvbiBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgXHRpZiAodHlwZW9mIHdpbmRvdyQxID09PSBcInVuZGVmaW5lZFwiIHx8ICF3aW5kb3ckMS5kb2N1bWVudCkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHZhciBjb25maWcgPSBRVW5pdC5jb25maWcsXG4gIFx0ICAgIGhpZGRlblRlc3RzID0gW10sXG4gIFx0ICAgIGRvY3VtZW50ID0gd2luZG93JDEuZG9jdW1lbnQsXG4gIFx0ICAgIGNvbGxhcHNlTmV4dCA9IGZhbHNlLFxuICBcdCAgICBoYXNPd24kJDEgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICBcdCAgICB1bmZpbHRlcmVkVXJsID0gc2V0VXJsKHsgZmlsdGVyOiB1bmRlZmluZWQsIG1vZHVsZTogdW5kZWZpbmVkLFxuICBcdFx0bW9kdWxlSWQ6IHVuZGVmaW5lZCwgdGVzdElkOiB1bmRlZmluZWQgfSksXG4gIFx0ICAgIG1vZHVsZXNMaXN0ID0gW107XG5cbiAgXHRmdW5jdGlvbiBhZGRFdmVudChlbGVtLCB0eXBlLCBmbikge1xuICBcdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBmYWxzZSk7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWxlbSwgdHlwZSwgZm4pIHtcbiAgXHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgZmFsc2UpO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFkZEV2ZW50cyhlbGVtcywgdHlwZSwgZm4pIHtcbiAgXHRcdHZhciBpID0gZWxlbXMubGVuZ3RoO1xuICBcdFx0d2hpbGUgKGktLSkge1xuICBcdFx0XHRhZGRFdmVudChlbGVtc1tpXSwgdHlwZSwgZm4pO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIG5hbWUpIHtcbiAgXHRcdHJldHVybiAoXCIgXCIgKyBlbGVtLmNsYXNzTmFtZSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgbmFtZSArIFwiIFwiKSA+PSAwO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFkZENsYXNzKGVsZW0sIG5hbWUpIHtcbiAgXHRcdGlmICghaGFzQ2xhc3MoZWxlbSwgbmFtZSkpIHtcbiAgXHRcdFx0ZWxlbS5jbGFzc05hbWUgKz0gKGVsZW0uY2xhc3NOYW1lID8gXCIgXCIgOiBcIlwiKSArIG5hbWU7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbSwgbmFtZSwgZm9yY2UpIHtcbiAgXHRcdGlmIChmb3JjZSB8fCB0eXBlb2YgZm9yY2UgPT09IFwidW5kZWZpbmVkXCIgJiYgIWhhc0NsYXNzKGVsZW0sIG5hbWUpKSB7XG4gIFx0XHRcdGFkZENsYXNzKGVsZW0sIG5hbWUpO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0cmVtb3ZlQ2xhc3MoZWxlbSwgbmFtZSk7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbSwgbmFtZSkge1xuICBcdFx0dmFyIHNldCA9IFwiIFwiICsgZWxlbS5jbGFzc05hbWUgKyBcIiBcIjtcblxuICBcdFx0Ly8gQ2xhc3MgbmFtZSBtYXkgYXBwZWFyIG11bHRpcGxlIHRpbWVzXG4gIFx0XHR3aGlsZSAoc2V0LmluZGV4T2YoXCIgXCIgKyBuYW1lICsgXCIgXCIpID49IDApIHtcbiAgXHRcdFx0c2V0ID0gc2V0LnJlcGxhY2UoXCIgXCIgKyBuYW1lICsgXCIgXCIsIFwiIFwiKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gVHJpbSBmb3IgcHJldHRpbmVzc1xuICBcdFx0ZWxlbS5jbGFzc05hbWUgPSB0eXBlb2Ygc2V0LnRyaW0gPT09IFwiZnVuY3Rpb25cIiA/IHNldC50cmltKCkgOiBzZXQucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gaWQobmFtZSkge1xuICBcdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5hbWUpO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFib3J0VGVzdHMoKSB7XG4gIFx0XHR2YXIgYWJvcnRCdXR0b24gPSBpZChcInF1bml0LWFib3J0LXRlc3RzLWJ1dHRvblwiKTtcbiAgXHRcdGlmIChhYm9ydEJ1dHRvbikge1xuICBcdFx0XHRhYm9ydEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIFx0XHRcdGFib3J0QnV0dG9uLmlubmVySFRNTCA9IFwiQWJvcnRpbmcuLi5cIjtcbiAgXHRcdH1cbiAgXHRcdFFVbml0LmNvbmZpZy5xdWV1ZS5sZW5ndGggPSAwO1xuICBcdFx0cmV0dXJuIGZhbHNlO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGludGVyY2VwdE5hdmlnYXRpb24oZXYpIHtcbiAgXHRcdGFwcGx5VXJsUGFyYW1zKCk7XG5cbiAgXHRcdGlmIChldiAmJiBldi5wcmV2ZW50RGVmYXVsdCkge1xuICBcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gZ2V0VXJsQ29uZmlnSHRtbCgpIHtcbiAgXHRcdHZhciBpLFxuICBcdFx0ICAgIGosXG4gIFx0XHQgICAgdmFsLFxuICBcdFx0ICAgIGVzY2FwZWQsXG4gIFx0XHQgICAgZXNjYXBlZFRvb2x0aXAsXG4gIFx0XHQgICAgc2VsZWN0aW9uID0gZmFsc2UsXG4gIFx0XHQgICAgdXJsQ29uZmlnID0gY29uZmlnLnVybENvbmZpZyxcbiAgXHRcdCAgICB1cmxDb25maWdIdG1sID0gXCJcIjtcblxuICBcdFx0Zm9yIChpID0gMDsgaSA8IHVybENvbmZpZy5sZW5ndGg7IGkrKykge1xuXG4gIFx0XHRcdC8vIE9wdGlvbnMgY2FuIGJlIGVpdGhlciBzdHJpbmdzIG9yIG9iamVjdHMgd2l0aCBub25lbXB0eSBcImlkXCIgcHJvcGVydGllc1xuICBcdFx0XHR2YWwgPSBjb25maWcudXJsQ29uZmlnW2ldO1xuICBcdFx0XHRpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIikge1xuICBcdFx0XHRcdHZhbCA9IHtcbiAgXHRcdFx0XHRcdGlkOiB2YWwsXG4gIFx0XHRcdFx0XHRsYWJlbDogdmFsXG4gIFx0XHRcdFx0fTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGVzY2FwZWQgPSBlc2NhcGVUZXh0KHZhbC5pZCk7XG4gIFx0XHRcdGVzY2FwZWRUb29sdGlwID0gZXNjYXBlVGV4dCh2YWwudG9vbHRpcCk7XG5cbiAgXHRcdFx0aWYgKCF2YWwudmFsdWUgfHwgdHlwZW9mIHZhbC52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICBcdFx0XHRcdHVybENvbmZpZ0h0bWwgKz0gXCI8bGFiZWwgZm9yPSdxdW5pdC11cmxjb25maWctXCIgKyBlc2NhcGVkICsgXCInIHRpdGxlPSdcIiArIGVzY2FwZWRUb29sdGlwICsgXCInPjxpbnB1dCBpZD0ncXVuaXQtdXJsY29uZmlnLVwiICsgZXNjYXBlZCArIFwiJyBuYW1lPSdcIiArIGVzY2FwZWQgKyBcIicgdHlwZT0nY2hlY2tib3gnXCIgKyAodmFsLnZhbHVlID8gXCIgdmFsdWU9J1wiICsgZXNjYXBlVGV4dCh2YWwudmFsdWUpICsgXCInXCIgOiBcIlwiKSArIChjb25maWdbdmFsLmlkXSA/IFwiIGNoZWNrZWQ9J2NoZWNrZWQnXCIgOiBcIlwiKSArIFwiIHRpdGxlPSdcIiArIGVzY2FwZWRUb29sdGlwICsgXCInIC8+XCIgKyBlc2NhcGVUZXh0KHZhbC5sYWJlbCkgKyBcIjwvbGFiZWw+XCI7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0dXJsQ29uZmlnSHRtbCArPSBcIjxsYWJlbCBmb3I9J3F1bml0LXVybGNvbmZpZy1cIiArIGVzY2FwZWQgKyBcIicgdGl0bGU9J1wiICsgZXNjYXBlZFRvb2x0aXAgKyBcIic+XCIgKyB2YWwubGFiZWwgKyBcIjogPC9sYWJlbD48c2VsZWN0IGlkPSdxdW5pdC11cmxjb25maWctXCIgKyBlc2NhcGVkICsgXCInIG5hbWU9J1wiICsgZXNjYXBlZCArIFwiJyB0aXRsZT0nXCIgKyBlc2NhcGVkVG9vbHRpcCArIFwiJz48b3B0aW9uPjwvb3B0aW9uPlwiO1xuXG4gIFx0XHRcdFx0aWYgKFFVbml0LmlzKFwiYXJyYXlcIiwgdmFsLnZhbHVlKSkge1xuICBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IHZhbC52YWx1ZS5sZW5ndGg7IGorKykge1xuICBcdFx0XHRcdFx0XHRlc2NhcGVkID0gZXNjYXBlVGV4dCh2YWwudmFsdWVbal0pO1xuICBcdFx0XHRcdFx0XHR1cmxDb25maWdIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBlc2NhcGVkICsgXCInXCIgKyAoY29uZmlnW3ZhbC5pZF0gPT09IHZhbC52YWx1ZVtqXSA/IChzZWxlY3Rpb24gPSB0cnVlKSAmJiBcIiBzZWxlY3RlZD0nc2VsZWN0ZWQnXCIgOiBcIlwiKSArIFwiPlwiICsgZXNjYXBlZCArIFwiPC9vcHRpb24+XCI7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdGZvciAoaiBpbiB2YWwudmFsdWUpIHtcbiAgXHRcdFx0XHRcdFx0aWYgKGhhc093biQkMS5jYWxsKHZhbC52YWx1ZSwgaikpIHtcbiAgXHRcdFx0XHRcdFx0XHR1cmxDb25maWdIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBlc2NhcGVUZXh0KGopICsgXCInXCIgKyAoY29uZmlnW3ZhbC5pZF0gPT09IGogPyAoc2VsZWN0aW9uID0gdHJ1ZSkgJiYgXCIgc2VsZWN0ZWQ9J3NlbGVjdGVkJ1wiIDogXCJcIikgKyBcIj5cIiArIGVzY2FwZVRleHQodmFsLnZhbHVlW2pdKSArIFwiPC9vcHRpb24+XCI7XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0aWYgKGNvbmZpZ1t2YWwuaWRdICYmICFzZWxlY3Rpb24pIHtcbiAgXHRcdFx0XHRcdGVzY2FwZWQgPSBlc2NhcGVUZXh0KGNvbmZpZ1t2YWwuaWRdKTtcbiAgXHRcdFx0XHRcdHVybENvbmZpZ0h0bWwgKz0gXCI8b3B0aW9uIHZhbHVlPSdcIiArIGVzY2FwZWQgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJyBkaXNhYmxlZD0nZGlzYWJsZWQnPlwiICsgZXNjYXBlZCArIFwiPC9vcHRpb24+XCI7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHVybENvbmZpZ0h0bWwgKz0gXCI8L3NlbGVjdD5cIjtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gdXJsQ29uZmlnSHRtbDtcbiAgXHR9XG5cbiAgXHQvLyBIYW5kbGUgXCJjbGlja1wiIGV2ZW50cyBvbiB0b29sYmFyIGNoZWNrYm94ZXMgYW5kIFwiY2hhbmdlXCIgZm9yIHNlbGVjdCBtZW51cy5cbiAgXHQvLyBVcGRhdGVzIHRoZSBVUkwgd2l0aCB0aGUgbmV3IHN0YXRlIG9mIGBjb25maWcudXJsQ29uZmlnYCB2YWx1ZXMuXG4gIFx0ZnVuY3Rpb24gdG9vbGJhckNoYW5nZWQoKSB7XG4gIFx0XHR2YXIgdXBkYXRlZFVybCxcbiAgXHRcdCAgICB2YWx1ZSxcbiAgXHRcdCAgICB0ZXN0cyxcbiAgXHRcdCAgICBmaWVsZCA9IHRoaXMsXG4gIFx0XHQgICAgcGFyYW1zID0ge307XG5cbiAgXHRcdC8vIERldGVjdCBpZiBmaWVsZCBpcyBhIHNlbGVjdCBtZW51IG9yIGEgY2hlY2tib3hcbiAgXHRcdGlmIChcInNlbGVjdGVkSW5kZXhcIiBpbiBmaWVsZCkge1xuICBcdFx0XHR2YWx1ZSA9IGZpZWxkLm9wdGlvbnNbZmllbGQuc2VsZWN0ZWRJbmRleF0udmFsdWUgfHwgdW5kZWZpbmVkO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0dmFsdWUgPSBmaWVsZC5jaGVja2VkID8gZmllbGQuZGVmYXVsdFZhbHVlIHx8IHRydWUgOiB1bmRlZmluZWQ7XG4gIFx0XHR9XG5cbiAgXHRcdHBhcmFtc1tmaWVsZC5uYW1lXSA9IHZhbHVlO1xuICBcdFx0dXBkYXRlZFVybCA9IHNldFVybChwYXJhbXMpO1xuXG4gIFx0XHQvLyBDaGVjayBpZiB3ZSBjYW4gYXBwbHkgdGhlIGNoYW5nZSB3aXRob3V0IGEgcGFnZSByZWZyZXNoXG4gIFx0XHRpZiAoXCJoaWRlcGFzc2VkXCIgPT09IGZpZWxkLm5hbWUgJiYgXCJyZXBsYWNlU3RhdGVcIiBpbiB3aW5kb3ckMS5oaXN0b3J5KSB7XG4gIFx0XHRcdFFVbml0LnVybFBhcmFtc1tmaWVsZC5uYW1lXSA9IHZhbHVlO1xuICBcdFx0XHRjb25maWdbZmllbGQubmFtZV0gPSB2YWx1ZSB8fCBmYWxzZTtcbiAgXHRcdFx0dGVzdHMgPSBpZChcInF1bml0LXRlc3RzXCIpO1xuICBcdFx0XHRpZiAodGVzdHMpIHtcbiAgXHRcdFx0XHR2YXIgbGVuZ3RoID0gdGVzdHMuY2hpbGRyZW4ubGVuZ3RoO1xuICBcdFx0XHRcdHZhciBjaGlsZHJlbiA9IHRlc3RzLmNoaWxkcmVuO1xuXG4gIFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcbiAgXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0XHRcdFx0dmFyIHRlc3QkJDEgPSBjaGlsZHJlbltpXTtcblxuICBcdFx0XHRcdFx0XHRpZiAodGVzdCQkMSAmJiB0ZXN0JCQxLmNsYXNzTmFtZS5pbmRleE9mKFwicGFzc1wiKSA+IC0xKSB7XG4gIFx0XHRcdFx0XHRcdFx0aGlkZGVuVGVzdHMucHVzaCh0ZXN0JCQxKTtcbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0XHR2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIFx0XHRcdFx0XHR2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgXHRcdFx0XHRcdHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICBcdFx0XHRcdFx0dHJ5IHtcbiAgXHRcdFx0XHRcdFx0Zm9yICh2YXIgX2l0ZXJhdG9yID0gaGlkZGVuVGVzdHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gIFx0XHRcdFx0XHRcdFx0dmFyIGhpZGRlblRlc3QgPSBfc3RlcC52YWx1ZTtcblxuICBcdFx0XHRcdFx0XHRcdHRlc3RzLnJlbW92ZUNoaWxkKGhpZGRlblRlc3QpO1xuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiAgXHRcdFx0XHRcdFx0X2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICBcdFx0XHRcdFx0XHRfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgXHRcdFx0XHRcdH0gZmluYWxseSB7XG4gIFx0XHRcdFx0XHRcdHRyeSB7XG4gIFx0XHRcdFx0XHRcdFx0aWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgXHRcdFx0XHRcdFx0XHRcdF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgXHRcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRcdH0gZmluYWxseSB7XG4gIFx0XHRcdFx0XHRcdFx0aWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gIFx0XHRcdFx0XHRcdFx0XHR0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgXHRcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0d2hpbGUgKCh0ZXN0JCQxID0gaGlkZGVuVGVzdHMucG9wKCkpICE9IG51bGwpIHtcbiAgXHRcdFx0XHRcdFx0dGVzdHMuYXBwZW5kQ2hpbGQodGVzdCQkMSk7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdHdpbmRvdyQxLmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHVwZGF0ZWRVcmwpO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0d2luZG93JDEubG9jYXRpb24gPSB1cGRhdGVkVXJsO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIHNldFVybChwYXJhbXMpIHtcbiAgXHRcdHZhciBrZXksXG4gIFx0XHQgICAgYXJyVmFsdWUsXG4gIFx0XHQgICAgaSxcbiAgXHRcdCAgICBxdWVyeXN0cmluZyA9IFwiP1wiLFxuICBcdFx0ICAgIGxvY2F0aW9uID0gd2luZG93JDEubG9jYXRpb247XG5cbiAgXHRcdHBhcmFtcyA9IFFVbml0LmV4dGVuZChRVW5pdC5leHRlbmQoe30sIFFVbml0LnVybFBhcmFtcyksIHBhcmFtcyk7XG5cbiAgXHRcdGZvciAoa2V5IGluIHBhcmFtcykge1xuXG4gIFx0XHRcdC8vIFNraXAgaW5oZXJpdGVkIG9yIHVuZGVmaW5lZCBwcm9wZXJ0aWVzXG4gIFx0XHRcdGlmIChoYXNPd24kJDEuY2FsbChwYXJhbXMsIGtleSkgJiYgcGFyYW1zW2tleV0gIT09IHVuZGVmaW5lZCkge1xuXG4gIFx0XHRcdFx0Ly8gT3V0cHV0IGEgcGFyYW1ldGVyIGZvciBlYWNoIHZhbHVlIG9mIHRoaXMga2V5XG4gIFx0XHRcdFx0Ly8gKGJ1dCB1c3VhbGx5IGp1c3Qgb25lKVxuICBcdFx0XHRcdGFyclZhbHVlID0gW10uY29uY2F0KHBhcmFtc1trZXldKTtcbiAgXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYXJyVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0XHRcdHF1ZXJ5c3RyaW5nICs9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICBcdFx0XHRcdFx0aWYgKGFyclZhbHVlW2ldICE9PSB0cnVlKSB7XG4gIFx0XHRcdFx0XHRcdHF1ZXJ5c3RyaW5nICs9IFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGFyclZhbHVlW2ldKTtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdHF1ZXJ5c3RyaW5nICs9IFwiJlwiO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0cmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCArIGxvY2F0aW9uLnBhdGhuYW1lICsgcXVlcnlzdHJpbmcuc2xpY2UoMCwgLTEpO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGx5VXJsUGFyYW1zKCkge1xuICBcdFx0dmFyIGksXG4gIFx0XHQgICAgc2VsZWN0ZWRNb2R1bGVzID0gW10sXG4gIFx0XHQgICAgbW9kdWxlc0xpc3QgPSBpZChcInF1bml0LW1vZHVsZWZpbHRlci1kcm9wZG93bi1saXN0XCIpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIiksXG4gIFx0XHQgICAgZmlsdGVyID0gaWQoXCJxdW5pdC1maWx0ZXItaW5wdXRcIikudmFsdWU7XG5cbiAgXHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzTGlzdC5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRpZiAobW9kdWxlc0xpc3RbaV0uY2hlY2tlZCkge1xuICBcdFx0XHRcdHNlbGVjdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNMaXN0W2ldLnZhbHVlKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHR3aW5kb3ckMS5sb2NhdGlvbiA9IHNldFVybCh7XG4gIFx0XHRcdGZpbHRlcjogZmlsdGVyID09PSBcIlwiID8gdW5kZWZpbmVkIDogZmlsdGVyLFxuICBcdFx0XHRtb2R1bGVJZDogc2VsZWN0ZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHNlbGVjdGVkTW9kdWxlcyxcblxuICBcdFx0XHQvLyBSZW1vdmUgbW9kdWxlIGFuZCB0ZXN0SWQgZmlsdGVyXG4gIFx0XHRcdG1vZHVsZTogdW5kZWZpbmVkLFxuICBcdFx0XHR0ZXN0SWQ6IHVuZGVmaW5lZFxuICBcdFx0fSk7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gdG9vbGJhclVybENvbmZpZ0NvbnRhaW5lcigpIHtcbiAgXHRcdHZhciB1cmxDb25maWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBcdFx0dXJsQ29uZmlnQ29udGFpbmVyLmlubmVySFRNTCA9IGdldFVybENvbmZpZ0h0bWwoKTtcbiAgXHRcdGFkZENsYXNzKHVybENvbmZpZ0NvbnRhaW5lciwgXCJxdW5pdC11cmwtY29uZmlnXCIpO1xuXG4gIFx0XHRhZGRFdmVudHModXJsQ29uZmlnQ29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIiksIFwiY2hhbmdlXCIsIHRvb2xiYXJDaGFuZ2VkKTtcbiAgXHRcdGFkZEV2ZW50cyh1cmxDb25maWdDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIiksIFwiY2hhbmdlXCIsIHRvb2xiYXJDaGFuZ2VkKTtcblxuICBcdFx0cmV0dXJuIHVybENvbmZpZ0NvbnRhaW5lcjtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhYm9ydFRlc3RzQnV0dG9uKCkge1xuICBcdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIFx0XHRidXR0b24uaWQgPSBcInF1bml0LWFib3J0LXRlc3RzLWJ1dHRvblwiO1xuICBcdFx0YnV0dG9uLmlubmVySFRNTCA9IFwiQWJvcnRcIjtcbiAgXHRcdGFkZEV2ZW50KGJ1dHRvbiwgXCJjbGlja1wiLCBhYm9ydFRlc3RzKTtcbiAgXHRcdHJldHVybiBidXR0b247XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gdG9vbGJhckxvb3NlRmlsdGVyKCkge1xuICBcdFx0dmFyIGZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLFxuICBcdFx0ICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuICBcdFx0ICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICBcdFx0ICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgXHRcdGFkZENsYXNzKGZpbHRlciwgXCJxdW5pdC1maWx0ZXJcIik7XG5cbiAgXHRcdGxhYmVsLmlubmVySFRNTCA9IFwiRmlsdGVyOiBcIjtcblxuICBcdFx0aW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBcdFx0aW5wdXQudmFsdWUgPSBjb25maWcuZmlsdGVyIHx8IFwiXCI7XG4gIFx0XHRpbnB1dC5uYW1lID0gXCJmaWx0ZXJcIjtcbiAgXHRcdGlucHV0LmlkID0gXCJxdW5pdC1maWx0ZXItaW5wdXRcIjtcblxuICBcdFx0YnV0dG9uLmlubmVySFRNTCA9IFwiR29cIjtcblxuICBcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIFx0XHRmaWx0ZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBcdFx0ZmlsdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiKSk7XG4gIFx0XHRmaWx0ZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgXHRcdGFkZEV2ZW50KGZpbHRlciwgXCJzdWJtaXRcIiwgaW50ZXJjZXB0TmF2aWdhdGlvbik7XG5cbiAgXHRcdHJldHVybiBmaWx0ZXI7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gbW9kdWxlTGlzdEh0bWwoKSB7XG4gIFx0XHR2YXIgaSxcbiAgXHRcdCAgICBjaGVja2VkLFxuICBcdFx0ICAgIGh0bWwgPSBcIlwiO1xuXG4gIFx0XHRmb3IgKGkgPSAwOyBpIDwgY29uZmlnLm1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0aWYgKGNvbmZpZy5tb2R1bGVzW2ldLm5hbWUgIT09IFwiXCIpIHtcbiAgXHRcdFx0XHRjaGVja2VkID0gY29uZmlnLm1vZHVsZUlkLmluZGV4T2YoY29uZmlnLm1vZHVsZXNbaV0ubW9kdWxlSWQpID4gLTE7XG4gIFx0XHRcdFx0aHRtbCArPSBcIjxsaT48bGFiZWwgY2xhc3M9J2NsaWNrYWJsZVwiICsgKGNoZWNrZWQgPyBcIiBjaGVja2VkXCIgOiBcIlwiKSArIFwiJz48aW5wdXQgdHlwZT0nY2hlY2tib3gnIFwiICsgXCJ2YWx1ZT0nXCIgKyBjb25maWcubW9kdWxlc1tpXS5tb2R1bGVJZCArIFwiJ1wiICsgKGNoZWNrZWQgPyBcIiBjaGVja2VkPSdjaGVja2VkJ1wiIDogXCJcIikgKyBcIiAvPlwiICsgZXNjYXBlVGV4dChjb25maWcubW9kdWxlc1tpXS5uYW1lKSArIFwiPC9sYWJlbD48L2xpPlwiO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiBodG1sO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIHRvb2xiYXJNb2R1bGVGaWx0ZXIoKSB7XG4gIFx0XHR2YXIgY29tbWl0LFxuICBcdFx0ICAgIHJlc2V0LFxuICBcdFx0ICAgIG1vZHVsZUZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLFxuICBcdFx0ICAgIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuICBcdFx0ICAgIG1vZHVsZVNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgXHRcdCAgICBkcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gIFx0XHQgICAgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLFxuICBcdFx0ICAgIGFwcGx5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxcbiAgXHRcdCAgICByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksXG4gIFx0XHQgICAgYWxsTW9kdWxlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpLFxuICBcdFx0ICAgIGFsbENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICBcdFx0ICAgIGRyb3BEb3duTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKSxcbiAgXHRcdCAgICBkaXJ0eSA9IGZhbHNlO1xuXG4gIFx0XHRtb2R1bGVTZWFyY2guaWQgPSBcInF1bml0LW1vZHVsZWZpbHRlci1zZWFyY2hcIjtcbiAgXHRcdG1vZHVsZVNlYXJjaC5hdXRvY29tcGxldGUgPSBcIm9mZlwiO1xuICBcdFx0YWRkRXZlbnQobW9kdWxlU2VhcmNoLCBcImlucHV0XCIsIHNlYXJjaElucHV0KTtcbiAgXHRcdGFkZEV2ZW50KG1vZHVsZVNlYXJjaCwgXCJpbnB1dFwiLCBzZWFyY2hGb2N1cyk7XG4gIFx0XHRhZGRFdmVudChtb2R1bGVTZWFyY2gsIFwiZm9jdXNcIiwgc2VhcmNoRm9jdXMpO1xuICBcdFx0YWRkRXZlbnQobW9kdWxlU2VhcmNoLCBcImNsaWNrXCIsIHNlYXJjaEZvY3VzKTtcblxuICBcdFx0bGFiZWwuaWQgPSBcInF1bml0LW1vZHVsZWZpbHRlci1zZWFyY2gtY29udGFpbmVyXCI7XG4gIFx0XHRsYWJlbC5pbm5lckhUTUwgPSBcIk1vZHVsZTogXCI7XG4gIFx0XHRsYWJlbC5hcHBlbmRDaGlsZChtb2R1bGVTZWFyY2gpO1xuXG4gIFx0XHRhcHBseUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQXBwbHlcIjtcbiAgXHRcdGFwcGx5QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBcdFx0cmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XG4gIFx0XHRyZXNldEJ1dHRvbi50eXBlID0gXCJyZXNldFwiO1xuICBcdFx0cmVzZXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIFx0XHRhbGxDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBcdFx0YWxsQ2hlY2tib3guY2hlY2tlZCA9IGNvbmZpZy5tb2R1bGVJZC5sZW5ndGggPT09IDA7XG5cbiAgXHRcdGFsbE1vZHVsZXNMYWJlbC5jbGFzc05hbWUgPSBcImNsaWNrYWJsZVwiO1xuICBcdFx0aWYgKGNvbmZpZy5tb2R1bGVJZC5sZW5ndGgpIHtcbiAgXHRcdFx0YWxsTW9kdWxlc0xhYmVsLmNsYXNzTmFtZSA9IFwiY2hlY2tlZFwiO1xuICBcdFx0fVxuICBcdFx0YWxsTW9kdWxlc0xhYmVsLmFwcGVuZENoaWxkKGFsbENoZWNrYm94KTtcbiAgXHRcdGFsbE1vZHVsZXNMYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFsbCBtb2R1bGVzXCIpKTtcblxuICBcdFx0YWN0aW9ucy5pZCA9IFwicXVuaXQtbW9kdWxlZmlsdGVyLWFjdGlvbnNcIjtcbiAgXHRcdGFjdGlvbnMuYXBwZW5kQ2hpbGQoYXBwbHlCdXR0b24pO1xuICBcdFx0YWN0aW9ucy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gIFx0XHRhY3Rpb25zLmFwcGVuZENoaWxkKGFsbE1vZHVsZXNMYWJlbCk7XG4gIFx0XHRjb21taXQgPSBhY3Rpb25zLmZpcnN0Q2hpbGQ7XG4gIFx0XHRyZXNldCA9IGNvbW1pdC5uZXh0U2libGluZztcbiAgXHRcdGFkZEV2ZW50KGNvbW1pdCwgXCJjbGlja1wiLCBhcHBseVVybFBhcmFtcyk7XG5cbiAgXHRcdGRyb3BEb3duTGlzdC5pZCA9IFwicXVuaXQtbW9kdWxlZmlsdGVyLWRyb3Bkb3duLWxpc3RcIjtcbiAgXHRcdGRyb3BEb3duTGlzdC5pbm5lckhUTUwgPSBtb2R1bGVMaXN0SHRtbCgpO1xuXG4gIFx0XHRkcm9wRG93bi5pZCA9IFwicXVuaXQtbW9kdWxlZmlsdGVyLWRyb3Bkb3duXCI7XG4gIFx0XHRkcm9wRG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFx0XHRkcm9wRG93bi5hcHBlbmRDaGlsZChhY3Rpb25zKTtcbiAgXHRcdGRyb3BEb3duLmFwcGVuZENoaWxkKGRyb3BEb3duTGlzdCk7XG4gIFx0XHRhZGRFdmVudChkcm9wRG93biwgXCJjaGFuZ2VcIiwgc2VsZWN0aW9uQ2hhbmdlKTtcbiAgXHRcdHNlbGVjdGlvbkNoYW5nZSgpO1xuXG4gIFx0XHRtb2R1bGVGaWx0ZXIuaWQgPSBcInF1bml0LW1vZHVsZWZpbHRlclwiO1xuICBcdFx0bW9kdWxlRmlsdGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgXHRcdG1vZHVsZUZpbHRlci5hcHBlbmRDaGlsZChkcm9wRG93bik7XG4gIFx0XHRhZGRFdmVudChtb2R1bGVGaWx0ZXIsIFwic3VibWl0XCIsIGludGVyY2VwdE5hdmlnYXRpb24pO1xuICBcdFx0YWRkRXZlbnQobW9kdWxlRmlsdGVyLCBcInJlc2V0XCIsIGZ1bmN0aW9uICgpIHtcblxuICBcdFx0XHQvLyBMZXQgdGhlIHJlc2V0IGhhcHBlbiwgdGhlbiB1cGRhdGUgc3R5bGVzXG4gIFx0XHRcdHdpbmRvdyQxLnNldFRpbWVvdXQoc2VsZWN0aW9uQ2hhbmdlKTtcbiAgXHRcdH0pO1xuXG4gIFx0XHQvLyBFbmFibGVzIHNob3cvaGlkZSBmb3IgdGhlIGRyb3Bkb3duXG4gIFx0XHRmdW5jdGlvbiBzZWFyY2hGb2N1cygpIHtcbiAgXHRcdFx0aWYgKGRyb3BEb3duLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gIFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0ZHJvcERvd24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgXHRcdFx0YWRkRXZlbnQoZG9jdW1lbnQsIFwiY2xpY2tcIiwgaGlkZUhhbmRsZXIpO1xuICBcdFx0XHRhZGRFdmVudChkb2N1bWVudCwgXCJrZXlkb3duXCIsIGhpZGVIYW5kbGVyKTtcblxuICBcdFx0XHQvLyBIaWRlIG9uIEVzY2FwZSBrZXlkb3duIG9yIG91dHNpZGUtY29udGFpbmVyIGNsaWNrXG4gIFx0XHRcdGZ1bmN0aW9uIGhpZGVIYW5kbGVyKGUpIHtcbiAgXHRcdFx0XHR2YXIgaW5Db250YWluZXIgPSBtb2R1bGVGaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpO1xuXG4gIFx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcgfHwgIWluQ29udGFpbmVyKSB7XG4gIFx0XHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAyNyAmJiBpbkNvbnRhaW5lcikge1xuICBcdFx0XHRcdFx0XHRtb2R1bGVTZWFyY2guZm9jdXMoKTtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdGRyb3BEb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXHRcdFx0XHRcdHJlbW92ZUV2ZW50KGRvY3VtZW50LCBcImNsaWNrXCIsIGhpZGVIYW5kbGVyKTtcbiAgXHRcdFx0XHRcdHJlbW92ZUV2ZW50KGRvY3VtZW50LCBcImtleWRvd25cIiwgaGlkZUhhbmRsZXIpO1xuICBcdFx0XHRcdFx0bW9kdWxlU2VhcmNoLnZhbHVlID0gXCJcIjtcbiAgXHRcdFx0XHRcdHNlYXJjaElucHV0KCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFByb2Nlc3NlcyBtb2R1bGUgc2VhcmNoIGJveCBpbnB1dFxuICBcdFx0ZnVuY3Rpb24gc2VhcmNoSW5wdXQoKSB7XG4gIFx0XHRcdHZhciBpLFxuICBcdFx0XHQgICAgaXRlbSxcbiAgXHRcdFx0ICAgIHNlYXJjaFRleHQgPSBtb2R1bGVTZWFyY2gudmFsdWUudG9Mb3dlckNhc2UoKSxcbiAgXHRcdFx0ICAgIGxpc3RJdGVtcyA9IGRyb3BEb3duTGlzdC5jaGlsZHJlbjtcblxuICBcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdFx0aXRlbSA9IGxpc3RJdGVtc1tpXTtcbiAgXHRcdFx0XHRpZiAoIXNlYXJjaFRleHQgfHwgaXRlbS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dCkgPiAtMSkge1xuICBcdFx0XHRcdFx0aXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0aXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFByb2Nlc3NlcyBzZWxlY3Rpb24gY2hhbmdlc1xuICBcdFx0ZnVuY3Rpb24gc2VsZWN0aW9uQ2hhbmdlKGV2dCkge1xuICBcdFx0XHR2YXIgaSxcbiAgXHRcdFx0ICAgIGl0ZW0sXG4gIFx0XHRcdCAgICBjaGVja2JveCA9IGV2dCAmJiBldnQudGFyZ2V0IHx8IGFsbENoZWNrYm94LFxuICBcdFx0XHQgICAgbW9kdWxlc0xpc3QgPSBkcm9wRG93bkxpc3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSxcbiAgXHRcdFx0ICAgIHNlbGVjdGVkTmFtZXMgPSBbXTtcblxuICBcdFx0XHR0b2dnbGVDbGFzcyhjaGVja2JveC5wYXJlbnROb2RlLCBcImNoZWNrZWRcIiwgY2hlY2tib3guY2hlY2tlZCk7XG5cbiAgXHRcdFx0ZGlydHkgPSBmYWxzZTtcbiAgXHRcdFx0aWYgKGNoZWNrYm94LmNoZWNrZWQgJiYgY2hlY2tib3ggIT09IGFsbENoZWNrYm94KSB7XG4gIFx0XHRcdFx0YWxsQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICBcdFx0XHRcdHJlbW92ZUNsYXNzKGFsbENoZWNrYm94LnBhcmVudE5vZGUsIFwiY2hlY2tlZFwiKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0XHRpdGVtID0gbW9kdWxlc0xpc3RbaV07XG4gIFx0XHRcdFx0aWYgKCFldnQpIHtcbiAgXHRcdFx0XHRcdHRvZ2dsZUNsYXNzKGl0ZW0ucGFyZW50Tm9kZSwgXCJjaGVja2VkXCIsIGl0ZW0uY2hlY2tlZCk7XG4gIFx0XHRcdFx0fSBlbHNlIGlmIChjaGVja2JveCA9PT0gYWxsQ2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCkge1xuICBcdFx0XHRcdFx0aXRlbS5jaGVja2VkID0gZmFsc2U7XG4gIFx0XHRcdFx0XHRyZW1vdmVDbGFzcyhpdGVtLnBhcmVudE5vZGUsIFwiY2hlY2tlZFwiKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0ZGlydHkgPSBkaXJ0eSB8fCBpdGVtLmNoZWNrZWQgIT09IGl0ZW0uZGVmYXVsdENoZWNrZWQ7XG4gIFx0XHRcdFx0aWYgKGl0ZW0uY2hlY2tlZCkge1xuICBcdFx0XHRcdFx0c2VsZWN0ZWROYW1lcy5wdXNoKGl0ZW0ucGFyZW50Tm9kZS50ZXh0Q29udGVudCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0Y29tbWl0LnN0eWxlLmRpc3BsYXkgPSByZXNldC5zdHlsZS5kaXNwbGF5ID0gZGlydHkgPyBcIlwiIDogXCJub25lXCI7XG4gIFx0XHRcdG1vZHVsZVNlYXJjaC5wbGFjZWhvbGRlciA9IHNlbGVjdGVkTmFtZXMuam9pbihcIiwgXCIpIHx8IGFsbENoZWNrYm94LnBhcmVudE5vZGUudGV4dENvbnRlbnQ7XG4gIFx0XHRcdG1vZHVsZVNlYXJjaC50aXRsZSA9IFwiVHlwZSB0byBmaWx0ZXIgbGlzdC4gQ3VycmVudCBzZWxlY3Rpb246XFxuXCIgKyAoc2VsZWN0ZWROYW1lcy5qb2luKFwiXFxuXCIpIHx8IGFsbENoZWNrYm94LnBhcmVudE5vZGUudGV4dENvbnRlbnQpO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gbW9kdWxlRmlsdGVyO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGVuZFRvb2xiYXIoKSB7XG4gIFx0XHR2YXIgdG9vbGJhciA9IGlkKFwicXVuaXQtdGVzdHJ1bm5lci10b29sYmFyXCIpO1xuXG4gIFx0XHRpZiAodG9vbGJhcikge1xuICBcdFx0XHR0b29sYmFyLmFwcGVuZENoaWxkKHRvb2xiYXJVcmxDb25maWdDb250YWluZXIoKSk7XG4gIFx0XHRcdHRvb2xiYXIuYXBwZW5kQ2hpbGQodG9vbGJhck1vZHVsZUZpbHRlcigpKTtcbiAgXHRcdFx0dG9vbGJhci5hcHBlbmRDaGlsZCh0b29sYmFyTG9vc2VGaWx0ZXIoKSk7XG4gIFx0XHRcdHRvb2xiYXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuY2xhc3NOYW1lID0gXCJjbGVhcmZpeFwiO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGVuZEhlYWRlcigpIHtcbiAgXHRcdHZhciBoZWFkZXIgPSBpZChcInF1bml0LWhlYWRlclwiKTtcblxuICBcdFx0aWYgKGhlYWRlcikge1xuICBcdFx0XHRoZWFkZXIuaW5uZXJIVE1MID0gXCI8YSBocmVmPSdcIiArIGVzY2FwZVRleHQodW5maWx0ZXJlZFVybCkgKyBcIic+XCIgKyBoZWFkZXIuaW5uZXJIVE1MICsgXCI8L2E+IFwiO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGVuZEJhbm5lcigpIHtcbiAgXHRcdHZhciBiYW5uZXIgPSBpZChcInF1bml0LWJhbm5lclwiKTtcblxuICBcdFx0aWYgKGJhbm5lcikge1xuICBcdFx0XHRiYW5uZXIuY2xhc3NOYW1lID0gXCJcIjtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBlbmRUZXN0UmVzdWx0cygpIHtcbiAgXHRcdHZhciB0ZXN0cyA9IGlkKFwicXVuaXQtdGVzdHNcIiksXG4gIFx0XHQgICAgcmVzdWx0ID0gaWQoXCJxdW5pdC10ZXN0cmVzdWx0XCIpLFxuICBcdFx0ICAgIGNvbnRyb2xzO1xuXG4gIFx0XHRpZiAocmVzdWx0KSB7XG4gIFx0XHRcdHJlc3VsdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlc3VsdCk7XG4gIFx0XHR9XG5cbiAgXHRcdGlmICh0ZXN0cykge1xuICBcdFx0XHR0ZXN0cy5pbm5lckhUTUwgPSBcIlwiO1xuICBcdFx0XHRyZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgXHRcdFx0cmVzdWx0LmlkID0gXCJxdW5pdC10ZXN0cmVzdWx0XCI7XG4gIFx0XHRcdHJlc3VsdC5jbGFzc05hbWUgPSBcInJlc3VsdFwiO1xuICBcdFx0XHR0ZXN0cy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyZXN1bHQsIHRlc3RzKTtcbiAgXHRcdFx0cmVzdWx0LmlubmVySFRNTCA9IFwiPGRpdiBpZD1cXFwicXVuaXQtdGVzdHJlc3VsdC1kaXNwbGF5XFxcIj5SdW5uaW5nLi4uPGJyIC8+JiMxNjA7PC9kaXY+XCIgKyBcIjxkaXYgaWQ9XFxcInF1bml0LXRlc3RyZXN1bHQtY29udHJvbHNcXFwiPjwvZGl2PlwiICsgXCI8ZGl2IGNsYXNzPVxcXCJjbGVhcmZpeFxcXCI+PC9kaXY+XCI7XG4gIFx0XHRcdGNvbnRyb2xzID0gaWQoXCJxdW5pdC10ZXN0cmVzdWx0LWNvbnRyb2xzXCIpO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29udHJvbHMpIHtcbiAgXHRcdFx0Y29udHJvbHMuYXBwZW5kQ2hpbGQoYWJvcnRUZXN0c0J1dHRvbigpKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBlbmRGaWx0ZXJlZFRlc3QoKSB7XG4gIFx0XHR2YXIgdGVzdElkID0gUVVuaXQuY29uZmlnLnRlc3RJZDtcbiAgXHRcdGlmICghdGVzdElkIHx8IHRlc3RJZC5sZW5ndGggPD0gMCkge1xuICBcdFx0XHRyZXR1cm4gXCJcIjtcbiAgXHRcdH1cbiAgXHRcdHJldHVybiBcIjxkaXYgaWQ9J3F1bml0LWZpbHRlcmVkVGVzdCc+UmVydW5uaW5nIHNlbGVjdGVkIHRlc3RzOiBcIiArIGVzY2FwZVRleHQodGVzdElkLmpvaW4oXCIsIFwiKSkgKyBcIiA8YSBpZD0ncXVuaXQtY2xlYXJGaWx0ZXInIGhyZWY9J1wiICsgZXNjYXBlVGV4dCh1bmZpbHRlcmVkVXJsKSArIFwiJz5SdW4gYWxsIHRlc3RzPC9hPjwvZGl2PlwiO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGVuZFVzZXJBZ2VudCgpIHtcbiAgXHRcdHZhciB1c2VyQWdlbnQgPSBpZChcInF1bml0LXVzZXJBZ2VudFwiKTtcblxuICBcdFx0aWYgKHVzZXJBZ2VudCkge1xuICBcdFx0XHR1c2VyQWdlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgXHRcdFx0dXNlckFnZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUVVuaXQgXCIgKyBRVW5pdC52ZXJzaW9uICsgXCI7IFwiICsgbmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGVuZEludGVyZmFjZSgpIHtcbiAgXHRcdHZhciBxdW5pdCA9IGlkKFwicXVuaXRcIik7XG5cbiAgXHRcdGlmIChxdW5pdCkge1xuICBcdFx0XHRxdW5pdC5pbm5lckhUTUwgPSBcIjxoMSBpZD0ncXVuaXQtaGVhZGVyJz5cIiArIGVzY2FwZVRleHQoZG9jdW1lbnQudGl0bGUpICsgXCI8L2gxPlwiICsgXCI8aDIgaWQ9J3F1bml0LWJhbm5lcic+PC9oMj5cIiArIFwiPGRpdiBpZD0ncXVuaXQtdGVzdHJ1bm5lci10b29sYmFyJz48L2Rpdj5cIiArIGFwcGVuZEZpbHRlcmVkVGVzdCgpICsgXCI8aDIgaWQ9J3F1bml0LXVzZXJBZ2VudCc+PC9oMj5cIiArIFwiPG9sIGlkPSdxdW5pdC10ZXN0cyc+PC9vbD5cIjtcbiAgXHRcdH1cblxuICBcdFx0YXBwZW5kSGVhZGVyKCk7XG4gIFx0XHRhcHBlbmRCYW5uZXIoKTtcbiAgXHRcdGFwcGVuZFRlc3RSZXN1bHRzKCk7XG4gIFx0XHRhcHBlbmRVc2VyQWdlbnQoKTtcbiAgXHRcdGFwcGVuZFRvb2xiYXIoKTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBlbmRUZXN0KG5hbWUsIHRlc3RJZCwgbW9kdWxlTmFtZSkge1xuICBcdFx0dmFyIHRpdGxlLFxuICBcdFx0ICAgIHJlcnVuVHJpZ2dlcixcbiAgXHRcdCAgICB0ZXN0QmxvY2ssXG4gIFx0XHQgICAgYXNzZXJ0TGlzdCxcbiAgXHRcdCAgICB0ZXN0cyA9IGlkKFwicXVuaXQtdGVzdHNcIik7XG5cbiAgXHRcdGlmICghdGVzdHMpIHtcbiAgXHRcdFx0cmV0dXJuO1xuICBcdFx0fVxuXG4gIFx0XHR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XG4gIFx0XHR0aXRsZS5pbm5lckhUTUwgPSBnZXROYW1lSHRtbChuYW1lLCBtb2R1bGVOYW1lKTtcblxuICBcdFx0cmVydW5UcmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIFx0XHRyZXJ1blRyaWdnZXIuaW5uZXJIVE1MID0gXCJSZXJ1blwiO1xuICBcdFx0cmVydW5UcmlnZ2VyLmhyZWYgPSBzZXRVcmwoeyB0ZXN0SWQ6IHRlc3RJZCB9KTtcblxuICBcdFx0dGVzdEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBcdFx0dGVzdEJsb2NrLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgXHRcdHRlc3RCbG9jay5hcHBlbmRDaGlsZChyZXJ1blRyaWdnZXIpO1xuICBcdFx0dGVzdEJsb2NrLmlkID0gXCJxdW5pdC10ZXN0LW91dHB1dC1cIiArIHRlc3RJZDtcblxuICBcdFx0YXNzZXJ0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbiAgXHRcdGFzc2VydExpc3QuY2xhc3NOYW1lID0gXCJxdW5pdC1hc3NlcnQtbGlzdFwiO1xuXG4gIFx0XHR0ZXN0QmxvY2suYXBwZW5kQ2hpbGQoYXNzZXJ0TGlzdCk7XG5cbiAgXHRcdHRlc3RzLmFwcGVuZENoaWxkKHRlc3RCbG9jayk7XG4gIFx0fVxuXG4gIFx0Ly8gSFRNTCBSZXBvcnRlciBpbml0aWFsaXphdGlvbiBhbmQgbG9hZFxuICBcdFFVbml0LmJlZ2luKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gIFx0XHR2YXIgaSwgbW9kdWxlT2JqO1xuXG4gIFx0XHQvLyBTb3J0IG1vZHVsZXMgYnkgbmFtZSBmb3IgdGhlIHBpY2tlclxuICBcdFx0Zm9yIChpID0gMDsgaSA8IGRldGFpbHMubW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRtb2R1bGVPYmogPSBkZXRhaWxzLm1vZHVsZXNbaV07XG4gIFx0XHRcdGlmIChtb2R1bGVPYmoubmFtZSkge1xuICBcdFx0XHRcdG1vZHVsZXNMaXN0LnB1c2gobW9kdWxlT2JqLm5hbWUpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0XHRtb2R1bGVzTGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gIFx0XHRcdHJldHVybiBhLmxvY2FsZUNvbXBhcmUoYik7XG4gIFx0XHR9KTtcblxuICBcdFx0Ly8gSW5pdGlhbGl6ZSBRVW5pdCBlbGVtZW50c1xuICBcdFx0YXBwZW5kSW50ZXJmYWNlKCk7XG4gIFx0fSk7XG5cbiAgXHRRVW5pdC5kb25lKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gIFx0XHR2YXIgYmFubmVyID0gaWQoXCJxdW5pdC1iYW5uZXJcIiksXG4gIFx0XHQgICAgdGVzdHMgPSBpZChcInF1bml0LXRlc3RzXCIpLFxuICBcdFx0ICAgIGFib3J0QnV0dG9uID0gaWQoXCJxdW5pdC1hYm9ydC10ZXN0cy1idXR0b25cIiksXG4gIFx0XHQgICAgdG90YWxUZXN0cyA9IHN0YXRzLnBhc3NlZFRlc3RzICsgc3RhdHMuc2tpcHBlZFRlc3RzICsgc3RhdHMudG9kb1Rlc3RzICsgc3RhdHMuZmFpbGVkVGVzdHMsXG4gIFx0XHQgICAgaHRtbCA9IFt0b3RhbFRlc3RzLCBcIiB0ZXN0cyBjb21wbGV0ZWQgaW4gXCIsIGRldGFpbHMucnVudGltZSwgXCIgbWlsbGlzZWNvbmRzLCB3aXRoIFwiLCBzdGF0cy5mYWlsZWRUZXN0cywgXCIgZmFpbGVkLCBcIiwgc3RhdHMuc2tpcHBlZFRlc3RzLCBcIiBza2lwcGVkLCBhbmQgXCIsIHN0YXRzLnRvZG9UZXN0cywgXCIgdG9kby48YnIgLz5cIiwgXCI8c3BhbiBjbGFzcz0ncGFzc2VkJz5cIiwgZGV0YWlscy5wYXNzZWQsIFwiPC9zcGFuPiBhc3NlcnRpb25zIG9mIDxzcGFuIGNsYXNzPSd0b3RhbCc+XCIsIGRldGFpbHMudG90YWwsIFwiPC9zcGFuPiBwYXNzZWQsIDxzcGFuIGNsYXNzPSdmYWlsZWQnPlwiLCBkZXRhaWxzLmZhaWxlZCwgXCI8L3NwYW4+IGZhaWxlZC5cIl0uam9pbihcIlwiKSxcbiAgXHRcdCAgICB0ZXN0JCQxLFxuICBcdFx0ICAgIGFzc2VydExpLFxuICBcdFx0ICAgIGFzc2VydExpc3Q7XG5cbiAgXHRcdC8vIFVwZGF0ZSByZW1haW5pbmcgdGVzdHMgdG8gYWJvcnRlZFxuICBcdFx0aWYgKGFib3J0QnV0dG9uICYmIGFib3J0QnV0dG9uLmRpc2FibGVkKSB7XG4gIFx0XHRcdGh0bWwgPSBcIlRlc3RzIGFib3J0ZWQgYWZ0ZXIgXCIgKyBkZXRhaWxzLnJ1bnRpbWUgKyBcIiBtaWxsaXNlY29uZHMuXCI7XG5cbiAgXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0ZXN0cy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdHRlc3QkJDEgPSB0ZXN0cy5jaGlsZHJlbltpXTtcbiAgXHRcdFx0XHRpZiAodGVzdCQkMS5jbGFzc05hbWUgPT09IFwiXCIgfHwgdGVzdCQkMS5jbGFzc05hbWUgPT09IFwicnVubmluZ1wiKSB7XG4gIFx0XHRcdFx0XHR0ZXN0JCQxLmNsYXNzTmFtZSA9IFwiYWJvcnRlZFwiO1xuICBcdFx0XHRcdFx0YXNzZXJ0TGlzdCA9IHRlc3QkJDEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvbFwiKVswXTtcbiAgXHRcdFx0XHRcdGFzc2VydExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBcdFx0XHRcdFx0YXNzZXJ0TGkuY2xhc3NOYW1lID0gXCJmYWlsXCI7XG4gIFx0XHRcdFx0XHRhc3NlcnRMaS5pbm5lckhUTUwgPSBcIlRlc3QgYWJvcnRlZC5cIjtcbiAgXHRcdFx0XHRcdGFzc2VydExpc3QuYXBwZW5kQ2hpbGQoYXNzZXJ0TGkpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHRpZiAoYmFubmVyICYmICghYWJvcnRCdXR0b24gfHwgYWJvcnRCdXR0b24uZGlzYWJsZWQgPT09IGZhbHNlKSkge1xuICBcdFx0XHRiYW5uZXIuY2xhc3NOYW1lID0gc3RhdHMuZmFpbGVkVGVzdHMgPyBcInF1bml0LWZhaWxcIiA6IFwicXVuaXQtcGFzc1wiO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoYWJvcnRCdXR0b24pIHtcbiAgXHRcdFx0YWJvcnRCdXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhYm9ydEJ1dHRvbik7XG4gIFx0XHR9XG5cbiAgXHRcdGlmICh0ZXN0cykge1xuICBcdFx0XHRpZChcInF1bml0LXRlc3RyZXN1bHQtZGlzcGxheVwiKS5pbm5lckhUTUwgPSBodG1sO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29uZmlnLmFsdGVydGl0bGUgJiYgZG9jdW1lbnQudGl0bGUpIHtcblxuICBcdFx0XHQvLyBTaG93IOKcliBmb3IgZ29vZCwg4pyUIGZvciBiYWQgc3VpdGUgcmVzdWx0IGluIHRpdGxlXG4gIFx0XHRcdC8vIHVzZSBlc2NhcGUgc2VxdWVuY2VzIGluIGNhc2UgZmlsZSBnZXRzIGxvYWRlZCB3aXRoIG5vbi11dGYtOFxuICBcdFx0XHQvLyBjaGFyc2V0XG4gIFx0XHRcdGRvY3VtZW50LnRpdGxlID0gW3N0YXRzLmZhaWxlZFRlc3RzID8gXCJcXHUyNzE2XCIgOiBcIlxcdTI3MTRcIiwgZG9jdW1lbnQudGl0bGUucmVwbGFjZSgvXltcXHUyNzE0XFx1MjcxNl0gL2ksIFwiXCIpXS5qb2luKFwiIFwiKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gU2Nyb2xsIGJhY2sgdG8gdG9wIHRvIHNob3cgcmVzdWx0c1xuICBcdFx0aWYgKGNvbmZpZy5zY3JvbGx0b3AgJiYgd2luZG93JDEuc2Nyb2xsVG8pIHtcbiAgXHRcdFx0d2luZG93JDEuc2Nyb2xsVG8oMCwgMCk7XG4gIFx0XHR9XG4gIFx0fSk7XG5cbiAgXHRmdW5jdGlvbiBnZXROYW1lSHRtbChuYW1lLCBtb2R1bGUpIHtcbiAgXHRcdHZhciBuYW1lSHRtbCA9IFwiXCI7XG5cbiAgXHRcdGlmIChtb2R1bGUpIHtcbiAgXHRcdFx0bmFtZUh0bWwgPSBcIjxzcGFuIGNsYXNzPSdtb2R1bGUtbmFtZSc+XCIgKyBlc2NhcGVUZXh0KG1vZHVsZSkgKyBcIjwvc3Bhbj46IFwiO1xuICBcdFx0fVxuXG4gIFx0XHRuYW1lSHRtbCArPSBcIjxzcGFuIGNsYXNzPSd0ZXN0LW5hbWUnPlwiICsgZXNjYXBlVGV4dChuYW1lKSArIFwiPC9zcGFuPlwiO1xuXG4gIFx0XHRyZXR1cm4gbmFtZUh0bWw7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NIdG1sKHJ1bnRpbWUsIHN0YXRzLCB0b3RhbCkge1xuICBcdFx0dmFyIGNvbXBsZXRlZCA9IHN0YXRzLnBhc3NlZFRlc3RzICsgc3RhdHMuc2tpcHBlZFRlc3RzICsgc3RhdHMudG9kb1Rlc3RzICsgc3RhdHMuZmFpbGVkVGVzdHM7XG5cbiAgXHRcdHJldHVybiBbXCI8YnIgLz5cIiwgY29tcGxldGVkLCBcIiAvIFwiLCB0b3RhbCwgXCIgdGVzdHMgY29tcGxldGVkIGluIFwiLCBydW50aW1lLCBcIiBtaWxsaXNlY29uZHMsIHdpdGggXCIsIHN0YXRzLmZhaWxlZFRlc3RzLCBcIiBmYWlsZWQsIFwiLCBzdGF0cy5za2lwcGVkVGVzdHMsIFwiIHNraXBwZWQsIGFuZCBcIiwgc3RhdHMudG9kb1Rlc3RzLCBcIiB0b2RvLlwiXS5qb2luKFwiXCIpO1xuICBcdH1cblxuICBcdFFVbml0LnRlc3RTdGFydChmdW5jdGlvbiAoZGV0YWlscykge1xuICBcdFx0dmFyIHJ1bm5pbmcsIGJhZDtcblxuICBcdFx0YXBwZW5kVGVzdChkZXRhaWxzLm5hbWUsIGRldGFpbHMudGVzdElkLCBkZXRhaWxzLm1vZHVsZSk7XG5cbiAgXHRcdHJ1bm5pbmcgPSBpZChcInF1bml0LXRlc3RyZXN1bHQtZGlzcGxheVwiKTtcblxuICBcdFx0aWYgKHJ1bm5pbmcpIHtcbiAgXHRcdFx0YWRkQ2xhc3MocnVubmluZywgXCJydW5uaW5nXCIpO1xuXG4gIFx0XHRcdGJhZCA9IFFVbml0LmNvbmZpZy5yZW9yZGVyICYmIGRldGFpbHMucHJldmlvdXNGYWlsdXJlO1xuXG4gIFx0XHRcdHJ1bm5pbmcuaW5uZXJIVE1MID0gW2JhZCA/IFwiUmVydW5uaW5nIHByZXZpb3VzbHkgZmFpbGVkIHRlc3Q6IDxiciAvPlwiIDogXCJSdW5uaW5nOiA8YnIgLz5cIiwgZ2V0TmFtZUh0bWwoZGV0YWlscy5uYW1lLCBkZXRhaWxzLm1vZHVsZSksIGdldFByb2dyZXNzSHRtbChub3coKSAtIGNvbmZpZy5zdGFydGVkLCBzdGF0cywgVGVzdC5jb3VudCldLmpvaW4oXCJcIik7XG4gIFx0XHR9XG4gIFx0fSk7XG5cbiAgXHRmdW5jdGlvbiBzdHJpcEh0bWwoc3RyaW5nKSB7XG5cbiAgXHRcdC8vIFN0cmlwIHRhZ3MsIGh0bWwgZW50aXR5IGFuZCB3aGl0ZXNwYWNlc1xuICBcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC88XFwvP1tePl0rKD58JCkvZywgXCJcIikucmVwbGFjZSgvJnF1b3Q7L2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCJcIik7XG4gIFx0fVxuXG4gIFx0UVVuaXQubG9nKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gIFx0XHR2YXIgYXNzZXJ0TGlzdCxcbiAgXHRcdCAgICBhc3NlcnRMaSxcbiAgXHRcdCAgICBtZXNzYWdlLFxuICBcdFx0ICAgIGV4cGVjdGVkLFxuICBcdFx0ICAgIGFjdHVhbCxcbiAgXHRcdCAgICBkaWZmJCQxLFxuICBcdFx0ICAgIHNob3dEaWZmID0gZmFsc2UsXG4gIFx0XHQgICAgdGVzdEl0ZW0gPSBpZChcInF1bml0LXRlc3Qtb3V0cHV0LVwiICsgZGV0YWlscy50ZXN0SWQpO1xuXG4gIFx0XHRpZiAoIXRlc3RJdGVtKSB7XG4gIFx0XHRcdHJldHVybjtcbiAgXHRcdH1cblxuICBcdFx0bWVzc2FnZSA9IGVzY2FwZVRleHQoZGV0YWlscy5tZXNzYWdlKSB8fCAoZGV0YWlscy5yZXN1bHQgPyBcIm9rYXlcIiA6IFwiZmFpbGVkXCIpO1xuICBcdFx0bWVzc2FnZSA9IFwiPHNwYW4gY2xhc3M9J3Rlc3QtbWVzc2FnZSc+XCIgKyBtZXNzYWdlICsgXCI8L3NwYW4+XCI7XG4gIFx0XHRtZXNzYWdlICs9IFwiPHNwYW4gY2xhc3M9J3J1bnRpbWUnPkAgXCIgKyBkZXRhaWxzLnJ1bnRpbWUgKyBcIiBtczwvc3Bhbj5cIjtcblxuICBcdFx0Ly8gVGhlIHB1c2hGYWlsdXJlIGRvZXNuJ3QgcHJvdmlkZSBkZXRhaWxzLmV4cGVjdGVkXG4gIFx0XHQvLyB3aGVuIGl0IGNhbGxzLCBpdCdzIGltcGxpY2l0IHRvIGFsc28gbm90IHNob3cgZXhwZWN0ZWQgYW5kIGRpZmYgc3R1ZmZcbiAgXHRcdC8vIEFsc28sIHdlIG5lZWQgdG8gY2hlY2sgZGV0YWlscy5leHBlY3RlZCBleGlzdGVuY2UsIGFzIGl0IGNhbiBleGlzdCBhbmQgYmUgdW5kZWZpbmVkXG4gIFx0XHRpZiAoIWRldGFpbHMucmVzdWx0ICYmIGhhc093biQkMS5jYWxsKGRldGFpbHMsIFwiZXhwZWN0ZWRcIikpIHtcbiAgXHRcdFx0aWYgKGRldGFpbHMubmVnYXRpdmUpIHtcbiAgXHRcdFx0XHRleHBlY3RlZCA9IFwiTk9UIFwiICsgUVVuaXQuZHVtcC5wYXJzZShkZXRhaWxzLmV4cGVjdGVkKTtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRleHBlY3RlZCA9IFFVbml0LmR1bXAucGFyc2UoZGV0YWlscy5leHBlY3RlZCk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRhY3R1YWwgPSBRVW5pdC5kdW1wLnBhcnNlKGRldGFpbHMuYWN0dWFsKTtcbiAgXHRcdFx0bWVzc2FnZSArPSBcIjx0YWJsZT48dHIgY2xhc3M9J3Rlc3QtZXhwZWN0ZWQnPjx0aD5FeHBlY3RlZDogPC90aD48dGQ+PHByZT5cIiArIGVzY2FwZVRleHQoZXhwZWN0ZWQpICsgXCI8L3ByZT48L3RkPjwvdHI+XCI7XG5cbiAgXHRcdFx0aWYgKGFjdHVhbCAhPT0gZXhwZWN0ZWQpIHtcblxuICBcdFx0XHRcdG1lc3NhZ2UgKz0gXCI8dHIgY2xhc3M9J3Rlc3QtYWN0dWFsJz48dGg+UmVzdWx0OiA8L3RoPjx0ZD48cHJlPlwiICsgZXNjYXBlVGV4dChhY3R1YWwpICsgXCI8L3ByZT48L3RkPjwvdHI+XCI7XG5cbiAgXHRcdFx0XHRpZiAodHlwZW9mIGRldGFpbHMuYWN0dWFsID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBkZXRhaWxzLmV4cGVjdGVkID09PSBcIm51bWJlclwiKSB7XG4gIFx0XHRcdFx0XHRpZiAoIWlzTmFOKGRldGFpbHMuYWN0dWFsKSAmJiAhaXNOYU4oZGV0YWlscy5leHBlY3RlZCkpIHtcbiAgXHRcdFx0XHRcdFx0c2hvd0RpZmYgPSB0cnVlO1xuICBcdFx0XHRcdFx0XHRkaWZmJCQxID0gZGV0YWlscy5hY3R1YWwgLSBkZXRhaWxzLmV4cGVjdGVkO1xuICBcdFx0XHRcdFx0XHRkaWZmJCQxID0gKGRpZmYkJDEgPiAwID8gXCIrXCIgOiBcIlwiKSArIGRpZmYkJDE7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgZGV0YWlscy5hY3R1YWwgIT09IFwiYm9vbGVhblwiICYmIHR5cGVvZiBkZXRhaWxzLmV4cGVjdGVkICE9PSBcImJvb2xlYW5cIikge1xuICBcdFx0XHRcdFx0ZGlmZiQkMSA9IFFVbml0LmRpZmYoZXhwZWN0ZWQsIGFjdHVhbCk7XG5cbiAgXHRcdFx0XHRcdC8vIGRvbid0IHNob3cgZGlmZiBpZiB0aGVyZSBpcyB6ZXJvIG92ZXJsYXBcbiAgXHRcdFx0XHRcdHNob3dEaWZmID0gc3RyaXBIdG1sKGRpZmYkJDEpLmxlbmd0aCAhPT0gc3RyaXBIdG1sKGV4cGVjdGVkKS5sZW5ndGggKyBzdHJpcEh0bWwoYWN0dWFsKS5sZW5ndGg7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0aWYgKHNob3dEaWZmKSB7XG4gIFx0XHRcdFx0XHRtZXNzYWdlICs9IFwiPHRyIGNsYXNzPSd0ZXN0LWRpZmYnPjx0aD5EaWZmOiA8L3RoPjx0ZD48cHJlPlwiICsgZGlmZiQkMSArIFwiPC9wcmU+PC90ZD48L3RyPlwiO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fSBlbHNlIGlmIChleHBlY3RlZC5pbmRleE9mKFwiW29iamVjdCBBcnJheV1cIikgIT09IC0xIHx8IGV4cGVjdGVkLmluZGV4T2YoXCJbb2JqZWN0IE9iamVjdF1cIikgIT09IC0xKSB7XG4gIFx0XHRcdFx0bWVzc2FnZSArPSBcIjx0ciBjbGFzcz0ndGVzdC1tZXNzYWdlJz48dGg+TWVzc2FnZTogPC90aD48dGQ+XCIgKyBcIkRpZmYgc3VwcHJlc3NlZCBhcyB0aGUgZGVwdGggb2Ygb2JqZWN0IGlzIG1vcmUgdGhhbiBjdXJyZW50IG1heCBkZXB0aCAoXCIgKyBRVW5pdC5jb25maWcubWF4RGVwdGggKyBcIikuPHA+SGludDogVXNlIDxjb2RlPlFVbml0LmR1bXAubWF4RGVwdGg8L2NvZGU+IHRvIFwiICsgXCIgcnVuIHdpdGggYSBoaWdoZXIgbWF4IGRlcHRoIG9yIDxhIGhyZWY9J1wiICsgZXNjYXBlVGV4dChzZXRVcmwoeyBtYXhEZXB0aDogLTEgfSkpICsgXCInPlwiICsgXCJSZXJ1bjwvYT4gd2l0aG91dCBtYXggZGVwdGguPC9wPjwvdGQ+PC90cj5cIjtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRtZXNzYWdlICs9IFwiPHRyIGNsYXNzPSd0ZXN0LW1lc3NhZ2UnPjx0aD5NZXNzYWdlOiA8L3RoPjx0ZD5cIiArIFwiRGlmZiBzdXBwcmVzc2VkIGFzIHRoZSBleHBlY3RlZCBhbmQgYWN0dWFsIHJlc3VsdHMgaGF2ZSBhbiBlcXVpdmFsZW50XCIgKyBcIiBzZXJpYWxpemF0aW9uPC90ZD48L3RyPlwiO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0aWYgKGRldGFpbHMuc291cmNlKSB7XG4gIFx0XHRcdFx0bWVzc2FnZSArPSBcIjx0ciBjbGFzcz0ndGVzdC1zb3VyY2UnPjx0aD5Tb3VyY2U6IDwvdGg+PHRkPjxwcmU+XCIgKyBlc2NhcGVUZXh0KGRldGFpbHMuc291cmNlKSArIFwiPC9wcmU+PC90ZD48L3RyPlwiO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0bWVzc2FnZSArPSBcIjwvdGFibGU+XCI7XG5cbiAgXHRcdFx0Ly8gVGhpcyBvY2N1cnMgd2hlbiBwdXNoRmFpbHVyZSBpcyBzZXQgYW5kIHdlIGhhdmUgYW4gZXh0cmFjdGVkIHN0YWNrIHRyYWNlXG4gIFx0XHR9IGVsc2UgaWYgKCFkZXRhaWxzLnJlc3VsdCAmJiBkZXRhaWxzLnNvdXJjZSkge1xuICBcdFx0XHRtZXNzYWdlICs9IFwiPHRhYmxlPlwiICsgXCI8dHIgY2xhc3M9J3Rlc3Qtc291cmNlJz48dGg+U291cmNlOiA8L3RoPjx0ZD48cHJlPlwiICsgZXNjYXBlVGV4dChkZXRhaWxzLnNvdXJjZSkgKyBcIjwvcHJlPjwvdGQ+PC90cj5cIiArIFwiPC90YWJsZT5cIjtcbiAgXHRcdH1cblxuICBcdFx0YXNzZXJ0TGlzdCA9IHRlc3RJdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib2xcIilbMF07XG5cbiAgXHRcdGFzc2VydExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBcdFx0YXNzZXJ0TGkuY2xhc3NOYW1lID0gZGV0YWlscy5yZXN1bHQgPyBcInBhc3NcIiA6IFwiZmFpbFwiO1xuICBcdFx0YXNzZXJ0TGkuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgXHRcdGFzc2VydExpc3QuYXBwZW5kQ2hpbGQoYXNzZXJ0TGkpO1xuICBcdH0pO1xuXG4gIFx0UVVuaXQudGVzdERvbmUoZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgXHRcdHZhciB0ZXN0VGl0bGUsXG4gIFx0XHQgICAgdGltZSxcbiAgXHRcdCAgICB0ZXN0SXRlbSxcbiAgXHRcdCAgICBhc3NlcnRMaXN0LFxuICBcdFx0ICAgIHN0YXR1cyxcbiAgXHRcdCAgICBnb29kLFxuICBcdFx0ICAgIGJhZCxcbiAgXHRcdCAgICB0ZXN0Q291bnRzLFxuICBcdFx0ICAgIHNraXBwZWQsXG4gIFx0XHQgICAgc291cmNlTmFtZSxcbiAgXHRcdCAgICB0ZXN0cyA9IGlkKFwicXVuaXQtdGVzdHNcIik7XG5cbiAgXHRcdGlmICghdGVzdHMpIHtcbiAgXHRcdFx0cmV0dXJuO1xuICBcdFx0fVxuXG4gIFx0XHR0ZXN0SXRlbSA9IGlkKFwicXVuaXQtdGVzdC1vdXRwdXQtXCIgKyBkZXRhaWxzLnRlc3RJZCk7XG5cbiAgXHRcdHJlbW92ZUNsYXNzKHRlc3RJdGVtLCBcInJ1bm5pbmdcIik7XG5cbiAgXHRcdGlmIChkZXRhaWxzLmZhaWxlZCA+IDApIHtcbiAgXHRcdFx0c3RhdHVzID0gXCJmYWlsZWRcIjtcbiAgXHRcdH0gZWxzZSBpZiAoZGV0YWlscy50b2RvKSB7XG4gIFx0XHRcdHN0YXR1cyA9IFwidG9kb1wiO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0c3RhdHVzID0gZGV0YWlscy5za2lwcGVkID8gXCJza2lwcGVkXCIgOiBcInBhc3NlZFwiO1xuICBcdFx0fVxuXG4gIFx0XHRhc3NlcnRMaXN0ID0gdGVzdEl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvbFwiKVswXTtcblxuICBcdFx0Z29vZCA9IGRldGFpbHMucGFzc2VkO1xuICBcdFx0YmFkID0gZGV0YWlscy5mYWlsZWQ7XG5cbiAgXHRcdC8vIFRoaXMgdGVzdCBwYXNzZWQgaWYgaXQgaGFzIG5vIHVuZXhwZWN0ZWQgZmFpbGVkIGFzc2VydGlvbnNcbiAgXHRcdHZhciB0ZXN0UGFzc2VkID0gZGV0YWlscy5mYWlsZWQgPiAwID8gZGV0YWlscy50b2RvIDogIWRldGFpbHMudG9kbztcblxuICBcdFx0aWYgKHRlc3RQYXNzZWQpIHtcblxuICBcdFx0XHQvLyBDb2xsYXBzZSB0aGUgcGFzc2luZyB0ZXN0c1xuICBcdFx0XHRhZGRDbGFzcyhhc3NlcnRMaXN0LCBcInF1bml0LWNvbGxhcHNlZFwiKTtcbiAgXHRcdH0gZWxzZSBpZiAoY29uZmlnLmNvbGxhcHNlKSB7XG4gIFx0XHRcdGlmICghY29sbGFwc2VOZXh0KSB7XG5cbiAgXHRcdFx0XHQvLyBTa2lwIGNvbGxhcHNpbmcgdGhlIGZpcnN0IGZhaWxpbmcgdGVzdFxuICBcdFx0XHRcdGNvbGxhcHNlTmV4dCA9IHRydWU7XG4gIFx0XHRcdH0gZWxzZSB7XG5cbiAgXHRcdFx0XHQvLyBDb2xsYXBzZSByZW1haW5pbmcgdGVzdHNcbiAgXHRcdFx0XHRhZGRDbGFzcyhhc3NlcnRMaXN0LCBcInF1bml0LWNvbGxhcHNlZFwiKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBUaGUgdGVzdEl0ZW0uZmlyc3RDaGlsZCBpcyB0aGUgdGVzdCBuYW1lXG4gIFx0XHR0ZXN0VGl0bGUgPSB0ZXN0SXRlbS5maXJzdENoaWxkO1xuXG4gIFx0XHR0ZXN0Q291bnRzID0gYmFkID8gXCI8YiBjbGFzcz0nZmFpbGVkJz5cIiArIGJhZCArIFwiPC9iPiwgXCIgKyBcIjxiIGNsYXNzPSdwYXNzZWQnPlwiICsgZ29vZCArIFwiPC9iPiwgXCIgOiBcIlwiO1xuXG4gIFx0XHR0ZXN0VGl0bGUuaW5uZXJIVE1MICs9IFwiIDxiIGNsYXNzPSdjb3VudHMnPihcIiArIHRlc3RDb3VudHMgKyBkZXRhaWxzLmFzc2VydGlvbnMubGVuZ3RoICsgXCIpPC9iPlwiO1xuXG4gIFx0XHRpZiAoZGV0YWlscy5za2lwcGVkKSB7XG4gIFx0XHRcdHN0YXRzLnNraXBwZWRUZXN0cysrO1xuXG4gIFx0XHRcdHRlc3RJdGVtLmNsYXNzTmFtZSA9IFwic2tpcHBlZFwiO1xuICBcdFx0XHRza2lwcGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImVtXCIpO1xuICBcdFx0XHRza2lwcGVkLmNsYXNzTmFtZSA9IFwicXVuaXQtc2tpcHBlZC1sYWJlbFwiO1xuICBcdFx0XHRza2lwcGVkLmlubmVySFRNTCA9IFwic2tpcHBlZFwiO1xuICBcdFx0XHR0ZXN0SXRlbS5pbnNlcnRCZWZvcmUoc2tpcHBlZCwgdGVzdFRpdGxlKTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdGFkZEV2ZW50KHRlc3RUaXRsZSwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0dG9nZ2xlQ2xhc3MoYXNzZXJ0TGlzdCwgXCJxdW5pdC1jb2xsYXBzZWRcIik7XG4gIFx0XHRcdH0pO1xuXG4gIFx0XHRcdHRlc3RJdGVtLmNsYXNzTmFtZSA9IHRlc3RQYXNzZWQgPyBcInBhc3NcIiA6IFwiZmFpbFwiO1xuXG4gIFx0XHRcdGlmIChkZXRhaWxzLnRvZG8pIHtcbiAgXHRcdFx0XHR2YXIgdG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImVtXCIpO1xuICBcdFx0XHRcdHRvZG9MYWJlbC5jbGFzc05hbWUgPSBcInF1bml0LXRvZG8tbGFiZWxcIjtcbiAgXHRcdFx0XHR0b2RvTGFiZWwuaW5uZXJIVE1MID0gXCJ0b2RvXCI7XG4gIFx0XHRcdFx0dGVzdEl0ZW0uY2xhc3NOYW1lICs9IFwiIHRvZG9cIjtcbiAgXHRcdFx0XHR0ZXN0SXRlbS5pbnNlcnRCZWZvcmUodG9kb0xhYmVsLCB0ZXN0VGl0bGUpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0dGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBcdFx0XHR0aW1lLmNsYXNzTmFtZSA9IFwicnVudGltZVwiO1xuICBcdFx0XHR0aW1lLmlubmVySFRNTCA9IGRldGFpbHMucnVudGltZSArIFwiIG1zXCI7XG4gIFx0XHRcdHRlc3RJdGVtLmluc2VydEJlZm9yZSh0aW1lLCBhc3NlcnRMaXN0KTtcblxuICBcdFx0XHRpZiAoIXRlc3RQYXNzZWQpIHtcbiAgXHRcdFx0XHRzdGF0cy5mYWlsZWRUZXN0cysrO1xuICBcdFx0XHR9IGVsc2UgaWYgKGRldGFpbHMudG9kbykge1xuICBcdFx0XHRcdHN0YXRzLnRvZG9UZXN0cysrO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHN0YXRzLnBhc3NlZFRlc3RzKys7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gU2hvdyB0aGUgc291cmNlIG9mIHRoZSB0ZXN0IHdoZW4gc2hvd2luZyBhc3NlcnRpb25zXG4gIFx0XHRpZiAoZGV0YWlscy5zb3VyY2UpIHtcbiAgXHRcdFx0c291cmNlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBcdFx0XHRzb3VyY2VOYW1lLmlubmVySFRNTCA9IFwiPHN0cm9uZz5Tb3VyY2U6IDwvc3Ryb25nPlwiICsgZXNjYXBlVGV4dChkZXRhaWxzLnNvdXJjZSk7XG4gIFx0XHRcdGFkZENsYXNzKHNvdXJjZU5hbWUsIFwicXVuaXQtc291cmNlXCIpO1xuICBcdFx0XHRpZiAodGVzdFBhc3NlZCkge1xuICBcdFx0XHRcdGFkZENsYXNzKHNvdXJjZU5hbWUsIFwicXVuaXQtY29sbGFwc2VkXCIpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGFkZEV2ZW50KHRlc3RUaXRsZSwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0dG9nZ2xlQ2xhc3Moc291cmNlTmFtZSwgXCJxdW5pdC1jb2xsYXBzZWRcIik7XG4gIFx0XHRcdH0pO1xuICBcdFx0XHR0ZXN0SXRlbS5hcHBlbmRDaGlsZChzb3VyY2VOYW1lKTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbmZpZy5oaWRlcGFzc2VkICYmIHN0YXR1cyA9PT0gXCJwYXNzZWRcIikge1xuXG4gIFx0XHRcdC8vIHVzZSByZW1vdmVDaGlsZCBpbnN0ZWFkIG9mIHJlbW92ZSBiZWNhdXNlIG9mIHN1cHBvcnRcbiAgXHRcdFx0aGlkZGVuVGVzdHMucHVzaCh0ZXN0SXRlbSk7XG5cbiAgXHRcdFx0dGVzdHMucmVtb3ZlQ2hpbGQodGVzdEl0ZW0pO1xuICBcdFx0fVxuICBcdH0pO1xuXG4gIFx0Ly8gQXZvaWQgcmVhZHlTdGF0ZSBpc3N1ZSB3aXRoIHBoYW50b21qc1xuICBcdC8vIFJlZjogIzgxOFxuICBcdHZhciBub3RQaGFudG9tID0gZnVuY3Rpb24gKHApIHtcbiAgXHRcdHJldHVybiAhKHAgJiYgcC52ZXJzaW9uICYmIHAudmVyc2lvbi5tYWpvciA+IDApO1xuICBcdH0od2luZG93JDEucGhhbnRvbSk7XG5cbiAgXHRpZiAobm90UGhhbnRvbSAmJiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgXHRcdFFVbml0LmxvYWQoKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0YWRkRXZlbnQod2luZG93JDEsIFwibG9hZFwiLCBRVW5pdC5sb2FkKTtcbiAgXHR9XG5cbiAgXHQvLyBXcmFwIHdpbmRvdy5vbmVycm9yLiBXZSB3aWxsIGNhbGwgdGhlIG9yaWdpbmFsIHdpbmRvdy5vbmVycm9yIHRvIHNlZSBpZlxuICBcdC8vIHRoZSBleGlzdGluZyBoYW5kbGVyIGZ1bGx5IGhhbmRsZXMgdGhlIGVycm9yOyBpZiBub3QsIHdlIHdpbGwgY2FsbCB0aGVcbiAgXHQvLyBRVW5pdC5vbkVycm9yIGZ1bmN0aW9uLlxuICBcdHZhciBvcmlnaW5hbFdpbmRvd09uRXJyb3IgPSB3aW5kb3ckMS5vbmVycm9yO1xuXG4gIFx0Ly8gQ292ZXIgdW5jYXVnaHQgZXhjZXB0aW9uc1xuICBcdC8vIFJldHVybmluZyB0cnVlIHdpbGwgc3VwcHJlc3MgdGhlIGRlZmF1bHQgYnJvd3NlciBoYW5kbGVyLFxuICBcdC8vIHJldHVybmluZyBmYWxzZSB3aWxsIGxldCBpdCBydW4uXG4gIFx0d2luZG93JDEub25lcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlLCBmaWxlTmFtZSwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvck9iaikge1xuICBcdFx0dmFyIHJldCA9IGZhbHNlO1xuICBcdFx0aWYgKG9yaWdpbmFsV2luZG93T25FcnJvcikge1xuICBcdFx0XHRmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiA1ID8gX2xlbiAtIDUgOiAwKSwgX2tleSA9IDU7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgXHRcdFx0XHRhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHJldCA9IG9yaWdpbmFsV2luZG93T25FcnJvci5jYWxsLmFwcGx5KG9yaWdpbmFsV2luZG93T25FcnJvciwgW3RoaXMsIG1lc3NhZ2UsIGZpbGVOYW1lLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yT2JqXS5jb25jYXQoYXJncykpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBUcmVhdCByZXR1cm4gdmFsdWUgYXMgd2luZG93Lm9uZXJyb3IgaXRzZWxmIGRvZXMsXG4gIFx0XHQvLyBPbmx5IGRvIG91ciBoYW5kbGluZyBpZiBub3Qgc3VwcHJlc3NlZC5cbiAgXHRcdGlmIChyZXQgIT09IHRydWUpIHtcbiAgXHRcdFx0dmFyIGVycm9yID0ge1xuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIFx0XHRcdFx0ZmlsZU5hbWU6IGZpbGVOYW1lLFxuICBcdFx0XHRcdGxpbmVOdW1iZXI6IGxpbmVOdW1iZXJcbiAgXHRcdFx0fTtcblxuICBcdFx0XHQvLyBBY2NvcmRpbmcgdG9cbiAgXHRcdFx0Ly8gaHR0cHM6Ly9ibG9nLnNlbnRyeS5pby8yMDE2LzAxLzA0L2NsaWVudC1qYXZhc2NyaXB0LXJlcG9ydGluZy13aW5kb3ctb25lcnJvcixcbiAgXHRcdFx0Ly8gbW9zdCBtb2Rlcm4gYnJvd3NlcnMgc3VwcG9ydCBhbiBlcnJvck9iaiBhcmd1bWVudDsgdXNlIHRoYXQgdG9cbiAgXHRcdFx0Ly8gZ2V0IGEgZnVsbCBzdGFjayB0cmFjZSBpZiBpdCdzIGF2YWlsYWJsZS5cbiAgXHRcdFx0aWYgKGVycm9yT2JqICYmIGVycm9yT2JqLnN0YWNrKSB7XG4gIFx0XHRcdFx0ZXJyb3Iuc3RhY2t0cmFjZSA9IGV4dHJhY3RTdGFja3RyYWNlKGVycm9yT2JqLCAwKTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHJldCA9IFFVbml0Lm9uRXJyb3IoZXJyb3IpO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gcmV0O1xuICBcdH07XG5cbiAgXHQvLyBMaXN0ZW4gZm9yIHVuaGFuZGxlZCByZWplY3Rpb25zLCBhbmQgY2FsbCBRVW5pdC5vblVuaGFuZGxlZFJlamVjdGlvblxuICBcdHdpbmRvdyQxLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmhhbmRsZWRyZWplY3Rpb25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIFx0XHRRVW5pdC5vblVuaGFuZGxlZFJlamVjdGlvbihldmVudC5yZWFzb24pO1xuICBcdH0pO1xuICB9KSgpO1xuXG4gIC8qXG4gICAqIFRoaXMgZmlsZSBpcyBhIG1vZGlmaWVkIHZlcnNpb24gb2YgZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gncyBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uXG4gICAqIChodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3NvdXJjZS9icm93c2UvdHJ1bmsvamF2YXNjcmlwdC9kaWZmX21hdGNoX3BhdGNoX3VuY29tcHJlc3NlZC5qcyksXG4gICAqIG1vZGlmaWNhdGlvbnMgYXJlIGxpY2Vuc2VkIGFzIG1vcmUgZnVsbHkgc2V0IGZvcnRoIGluIExJQ0VOU0UudHh0LlxuICAgKlxuICAgKiBUaGUgb3JpZ2luYWwgc291cmNlIG9mIGdvb2dsZS1kaWZmLW1hdGNoLXBhdGNoIGlzIGF0dHJpYnV0YWJsZSBhbmQgbGljZW5zZWQgYXMgZm9sbG93czpcbiAgICpcbiAgICogQ29weXJpZ2h0IDIwMDYgR29vZ2xlIEluYy5cbiAgICogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC9cbiAgICpcbiAgICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICpcbiAgICogaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAgKlxuICAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICAqXG4gICAqIE1vcmUgSW5mbzpcbiAgICogIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gvXG4gICAqXG4gICAqIFVzYWdlOiBRVW5pdC5kaWZmKGV4cGVjdGVkLCBhY3R1YWwpXG4gICAqXG4gICAqL1xuICBRVW5pdC5kaWZmID0gZnVuY3Rpb24gKCkge1xuICBcdGZ1bmN0aW9uIERpZmZNYXRjaFBhdGNoKCkge31cblxuICBcdC8vICBESUZGIEZVTkNUSU9OU1xuXG4gIFx0LyoqXG4gICAgKiBUaGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgZGlmZiBpcyBhbiBhcnJheSBvZiB0dXBsZXM6XG4gICAgKiBbW0RJRkZfREVMRVRFLCAnSGVsbG8nXSwgW0RJRkZfSU5TRVJULCAnR29vZGJ5ZSddLCBbRElGRl9FUVVBTCwgJyB3b3JsZC4nXV1cbiAgICAqIHdoaWNoIG1lYW5zOiBkZWxldGUgJ0hlbGxvJywgYWRkICdHb29kYnllJyBhbmQga2VlcCAnIHdvcmxkLidcbiAgICAqL1xuICBcdHZhciBESUZGX0RFTEVURSA9IC0xLFxuICBcdCAgICBESUZGX0lOU0VSVCA9IDEsXG4gIFx0ICAgIERJRkZfRVFVQUwgPSAwO1xuXG4gIFx0LyoqXG4gICAgKiBGaW5kIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHR3byB0ZXh0cy4gIFNpbXBsaWZpZXMgdGhlIHByb2JsZW0gYnkgc3RyaXBwaW5nXG4gICAgKiBhbnkgY29tbW9uIHByZWZpeCBvciBzdWZmaXggb2ZmIHRoZSB0ZXh0cyBiZWZvcmUgZGlmZmluZy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBPbGQgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBOZXcgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdENoZWNrbGluZXMgT3B0aW9uYWwgc3BlZWR1cCBmbGFnLiBJZiBwcmVzZW50IGFuZCBmYWxzZSxcbiAgICAqICAgICB0aGVuIGRvbid0IHJ1biBhIGxpbmUtbGV2ZWwgZGlmZiBmaXJzdCB0byBpZGVudGlmeSB0aGUgY2hhbmdlZCBhcmVhcy5cbiAgICAqICAgICBEZWZhdWx0cyB0byB0cnVlLCB3aGljaCBkb2VzIGEgZmFzdGVyLCBzbGlnaHRseSBsZXNzIG9wdGltYWwgZGlmZi5cbiAgICAqIEByZXR1cm4geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5EaWZmTWFpbiA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIsIG9wdENoZWNrbGluZXMpIHtcbiAgXHRcdHZhciBkZWFkbGluZSwgY2hlY2tsaW5lcywgY29tbW9ubGVuZ3RoLCBjb21tb25wcmVmaXgsIGNvbW1vbnN1ZmZpeCwgZGlmZnM7XG5cbiAgXHRcdC8vIFRoZSBkaWZmIG11c3QgYmUgY29tcGxldGUgaW4gdXAgdG8gMSBzZWNvbmQuXG4gIFx0XHRkZWFkbGluZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMTAwMDtcblxuICBcdFx0Ly8gQ2hlY2sgZm9yIG51bGwgaW5wdXRzLlxuICBcdFx0aWYgKHRleHQxID09PSBudWxsIHx8IHRleHQyID09PSBudWxsKSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk51bGwgaW5wdXQuIChEaWZmTWFpbilcIik7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIENoZWNrIGZvciBlcXVhbGl0eSAoc3BlZWR1cCkuXG4gIFx0XHRpZiAodGV4dDEgPT09IHRleHQyKSB7XG4gIFx0XHRcdGlmICh0ZXh0MSkge1xuICBcdFx0XHRcdHJldHVybiBbW0RJRkZfRVFVQUwsIHRleHQxXV07XG4gIFx0XHRcdH1cbiAgXHRcdFx0cmV0dXJuIFtdO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAodHlwZW9mIG9wdENoZWNrbGluZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgXHRcdFx0b3B0Q2hlY2tsaW5lcyA9IHRydWU7XG4gIFx0XHR9XG5cbiAgXHRcdGNoZWNrbGluZXMgPSBvcHRDaGVja2xpbmVzO1xuXG4gIFx0XHQvLyBUcmltIG9mZiBjb21tb24gcHJlZml4IChzcGVlZHVwKS5cbiAgXHRcdGNvbW1vbmxlbmd0aCA9IHRoaXMuZGlmZkNvbW1vblByZWZpeCh0ZXh0MSwgdGV4dDIpO1xuICBcdFx0Y29tbW9ucHJlZml4ID0gdGV4dDEuc3Vic3RyaW5nKDAsIGNvbW1vbmxlbmd0aCk7XG4gIFx0XHR0ZXh0MSA9IHRleHQxLnN1YnN0cmluZyhjb21tb25sZW5ndGgpO1xuICBcdFx0dGV4dDIgPSB0ZXh0Mi5zdWJzdHJpbmcoY29tbW9ubGVuZ3RoKTtcblxuICBcdFx0Ly8gVHJpbSBvZmYgY29tbW9uIHN1ZmZpeCAoc3BlZWR1cCkuXG4gIFx0XHRjb21tb25sZW5ndGggPSB0aGlzLmRpZmZDb21tb25TdWZmaXgodGV4dDEsIHRleHQyKTtcbiAgXHRcdGNvbW1vbnN1ZmZpeCA9IHRleHQxLnN1YnN0cmluZyh0ZXh0MS5sZW5ndGggLSBjb21tb25sZW5ndGgpO1xuICBcdFx0dGV4dDEgPSB0ZXh0MS5zdWJzdHJpbmcoMCwgdGV4dDEubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKTtcbiAgXHRcdHRleHQyID0gdGV4dDIuc3Vic3RyaW5nKDAsIHRleHQyLmxlbmd0aCAtIGNvbW1vbmxlbmd0aCk7XG5cbiAgXHRcdC8vIENvbXB1dGUgdGhlIGRpZmYgb24gdGhlIG1pZGRsZSBibG9jay5cbiAgXHRcdGRpZmZzID0gdGhpcy5kaWZmQ29tcHV0ZSh0ZXh0MSwgdGV4dDIsIGNoZWNrbGluZXMsIGRlYWRsaW5lKTtcblxuICBcdFx0Ly8gUmVzdG9yZSB0aGUgcHJlZml4IGFuZCBzdWZmaXguXG4gIFx0XHRpZiAoY29tbW9ucHJlZml4KSB7XG4gIFx0XHRcdGRpZmZzLnVuc2hpZnQoW0RJRkZfRVFVQUwsIGNvbW1vbnByZWZpeF0pO1xuICBcdFx0fVxuICBcdFx0aWYgKGNvbW1vbnN1ZmZpeCkge1xuICBcdFx0XHRkaWZmcy5wdXNoKFtESUZGX0VRVUFMLCBjb21tb25zdWZmaXhdKTtcbiAgXHRcdH1cbiAgXHRcdHRoaXMuZGlmZkNsZWFudXBNZXJnZShkaWZmcyk7XG4gIFx0XHRyZXR1cm4gZGlmZnM7XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogUmVkdWNlIHRoZSBudW1iZXIgb2YgZWRpdHMgYnkgZWxpbWluYXRpbmcgb3BlcmF0aW9uYWxseSB0cml2aWFsIGVxdWFsaXRpZXMuXG4gICAgKiBAcGFyYW0geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBkaWZmcyBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ2xlYW51cEVmZmljaWVuY3kgPSBmdW5jdGlvbiAoZGlmZnMpIHtcbiAgXHRcdHZhciBjaGFuZ2VzLCBlcXVhbGl0aWVzLCBlcXVhbGl0aWVzTGVuZ3RoLCBsYXN0ZXF1YWxpdHksIHBvaW50ZXIsIHByZUlucywgcHJlRGVsLCBwb3N0SW5zLCBwb3N0RGVsO1xuICBcdFx0Y2hhbmdlcyA9IGZhbHNlO1xuICBcdFx0ZXF1YWxpdGllcyA9IFtdOyAvLyBTdGFjayBvZiBpbmRpY2VzIHdoZXJlIGVxdWFsaXRpZXMgYXJlIGZvdW5kLlxuICBcdFx0ZXF1YWxpdGllc0xlbmd0aCA9IDA7IC8vIEtlZXBpbmcgb3VyIG93biBsZW5ndGggdmFyIGlzIGZhc3RlciBpbiBKUy5cbiAgXHRcdC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgXHRcdGxhc3RlcXVhbGl0eSA9IG51bGw7XG5cbiAgXHRcdC8vIEFsd2F5cyBlcXVhbCB0byBkaWZmc1tlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXV1bMV1cbiAgXHRcdHBvaW50ZXIgPSAwOyAvLyBJbmRleCBvZiBjdXJyZW50IHBvc2l0aW9uLlxuXG4gIFx0XHQvLyBJcyB0aGVyZSBhbiBpbnNlcnRpb24gb3BlcmF0aW9uIGJlZm9yZSB0aGUgbGFzdCBlcXVhbGl0eS5cbiAgXHRcdHByZUlucyA9IGZhbHNlO1xuXG4gIFx0XHQvLyBJcyB0aGVyZSBhIGRlbGV0aW9uIG9wZXJhdGlvbiBiZWZvcmUgdGhlIGxhc3QgZXF1YWxpdHkuXG4gIFx0XHRwcmVEZWwgPSBmYWxzZTtcblxuICBcdFx0Ly8gSXMgdGhlcmUgYW4gaW5zZXJ0aW9uIG9wZXJhdGlvbiBhZnRlciB0aGUgbGFzdCBlcXVhbGl0eS5cbiAgXHRcdHBvc3RJbnMgPSBmYWxzZTtcblxuICBcdFx0Ly8gSXMgdGhlcmUgYSBkZWxldGlvbiBvcGVyYXRpb24gYWZ0ZXIgdGhlIGxhc3QgZXF1YWxpdHkuXG4gIFx0XHRwb3N0RGVsID0gZmFsc2U7XG4gIFx0XHR3aGlsZSAocG9pbnRlciA8IGRpZmZzLmxlbmd0aCkge1xuXG4gIFx0XHRcdC8vIEVxdWFsaXR5IGZvdW5kLlxuICBcdFx0XHRpZiAoZGlmZnNbcG9pbnRlcl1bMF0gPT09IERJRkZfRVFVQUwpIHtcbiAgXHRcdFx0XHRpZiAoZGlmZnNbcG9pbnRlcl1bMV0ubGVuZ3RoIDwgNCAmJiAocG9zdElucyB8fCBwb3N0RGVsKSkge1xuXG4gIFx0XHRcdFx0XHQvLyBDYW5kaWRhdGUgZm91bmQuXG4gIFx0XHRcdFx0XHRlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGgrK10gPSBwb2ludGVyO1xuICBcdFx0XHRcdFx0cHJlSW5zID0gcG9zdElucztcbiAgXHRcdFx0XHRcdHByZURlbCA9IHBvc3REZWw7XG4gIFx0XHRcdFx0XHRsYXN0ZXF1YWxpdHkgPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuXG4gIFx0XHRcdFx0XHQvLyBOb3QgYSBjYW5kaWRhdGUsIGFuZCBjYW4gbmV2ZXIgYmVjb21lIG9uZS5cbiAgXHRcdFx0XHRcdGVxdWFsaXRpZXNMZW5ndGggPSAwO1xuICBcdFx0XHRcdFx0bGFzdGVxdWFsaXR5ID0gbnVsbDtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0cG9zdElucyA9IHBvc3REZWwgPSBmYWxzZTtcblxuICBcdFx0XHRcdC8vIEFuIGluc2VydGlvbiBvciBkZWxldGlvbi5cbiAgXHRcdFx0fSBlbHNlIHtcblxuICBcdFx0XHRcdGlmIChkaWZmc1twb2ludGVyXVswXSA9PT0gRElGRl9ERUxFVEUpIHtcbiAgXHRcdFx0XHRcdHBvc3REZWwgPSB0cnVlO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRwb3N0SW5zID0gdHJ1ZTtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHQvKlxuICAgICAgICogRml2ZSB0eXBlcyB0byBiZSBzcGxpdDpcbiAgICAgICAqIDxpbnM+QTwvaW5zPjxkZWw+QjwvZGVsPlhZPGlucz5DPC9pbnM+PGRlbD5EPC9kZWw+XG4gICAgICAgKiA8aW5zPkE8L2lucz5YPGlucz5DPC9pbnM+PGRlbD5EPC9kZWw+XG4gICAgICAgKiA8aW5zPkE8L2lucz48ZGVsPkI8L2RlbD5YPGlucz5DPC9pbnM+XG4gICAgICAgKiA8aW5zPkE8L2RlbD5YPGlucz5DPC9pbnM+PGRlbD5EPC9kZWw+XG4gICAgICAgKiA8aW5zPkE8L2lucz48ZGVsPkI8L2RlbD5YPGRlbD5DPC9kZWw+XG4gICAgICAgKi9cbiAgXHRcdFx0XHRpZiAobGFzdGVxdWFsaXR5ICYmIChwcmVJbnMgJiYgcHJlRGVsICYmIHBvc3RJbnMgJiYgcG9zdERlbCB8fCBsYXN0ZXF1YWxpdHkubGVuZ3RoIDwgMiAmJiBwcmVJbnMgKyBwcmVEZWwgKyBwb3N0SW5zICsgcG9zdERlbCA9PT0gMykpIHtcblxuICBcdFx0XHRcdFx0Ly8gRHVwbGljYXRlIHJlY29yZC5cbiAgXHRcdFx0XHRcdGRpZmZzLnNwbGljZShlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXSwgMCwgW0RJRkZfREVMRVRFLCBsYXN0ZXF1YWxpdHldKTtcblxuICBcdFx0XHRcdFx0Ly8gQ2hhbmdlIHNlY29uZCBjb3B5IHRvIGluc2VydC5cbiAgXHRcdFx0XHRcdGRpZmZzW2VxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdICsgMV1bMF0gPSBESUZGX0lOU0VSVDtcbiAgXHRcdFx0XHRcdGVxdWFsaXRpZXNMZW5ndGgtLTsgLy8gVGhyb3cgYXdheSB0aGUgZXF1YWxpdHkgd2UganVzdCBkZWxldGVkO1xuICBcdFx0XHRcdFx0bGFzdGVxdWFsaXR5ID0gbnVsbDtcbiAgXHRcdFx0XHRcdGlmIChwcmVJbnMgJiYgcHJlRGVsKSB7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gTm8gY2hhbmdlcyBtYWRlIHdoaWNoIGNvdWxkIGFmZmVjdCBwcmV2aW91cyBlbnRyeSwga2VlcCBnb2luZy5cbiAgXHRcdFx0XHRcdFx0cG9zdElucyA9IHBvc3REZWwgPSB0cnVlO1xuICBcdFx0XHRcdFx0XHRlcXVhbGl0aWVzTGVuZ3RoID0gMDtcbiAgXHRcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRcdGVxdWFsaXRpZXNMZW5ndGgtLTsgLy8gVGhyb3cgYXdheSB0aGUgcHJldmlvdXMgZXF1YWxpdHkuXG4gIFx0XHRcdFx0XHRcdHBvaW50ZXIgPSBlcXVhbGl0aWVzTGVuZ3RoID4gMCA/IGVxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdIDogLTE7XG4gIFx0XHRcdFx0XHRcdHBvc3RJbnMgPSBwb3N0RGVsID0gZmFsc2U7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRjaGFuZ2VzID0gdHJ1ZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0cG9pbnRlcisrO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY2hhbmdlcykge1xuICBcdFx0XHR0aGlzLmRpZmZDbGVhbnVwTWVyZ2UoZGlmZnMpO1xuICBcdFx0fVxuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIENvbnZlcnQgYSBkaWZmIGFycmF5IGludG8gYSBwcmV0dHkgSFRNTCByZXBvcnQuXG4gICAgKiBAcGFyYW0geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBkaWZmcyBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqIEBwYXJhbSB7aW50ZWdlcn0gc3RyaW5nIHRvIGJlIGJlYXV0aWZpZWQuXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IEhUTUwgcmVwcmVzZW50YXRpb24uXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZlByZXR0eUh0bWwgPSBmdW5jdGlvbiAoZGlmZnMpIHtcbiAgXHRcdHZhciBvcCxcbiAgXHRcdCAgICBkYXRhLFxuICBcdFx0ICAgIHgsXG4gIFx0XHQgICAgaHRtbCA9IFtdO1xuICBcdFx0Zm9yICh4ID0gMDsgeCA8IGRpZmZzLmxlbmd0aDsgeCsrKSB7XG4gIFx0XHRcdG9wID0gZGlmZnNbeF1bMF07IC8vIE9wZXJhdGlvbiAoaW5zZXJ0LCBkZWxldGUsIGVxdWFsKVxuICBcdFx0XHRkYXRhID0gZGlmZnNbeF1bMV07IC8vIFRleHQgb2YgY2hhbmdlLlxuICBcdFx0XHRzd2l0Y2ggKG9wKSB7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0lOU0VSVDpcbiAgXHRcdFx0XHRcdGh0bWxbeF0gPSBcIjxpbnM+XCIgKyBlc2NhcGVUZXh0KGRhdGEpICsgXCI8L2lucz5cIjtcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGNhc2UgRElGRl9ERUxFVEU6XG4gIFx0XHRcdFx0XHRodG1sW3hdID0gXCI8ZGVsPlwiICsgZXNjYXBlVGV4dChkYXRhKSArIFwiPC9kZWw+XCI7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRjYXNlIERJRkZfRVFVQUw6XG4gIFx0XHRcdFx0XHRodG1sW3hdID0gXCI8c3Bhbj5cIiArIGVzY2FwZVRleHQoZGF0YSkgKyBcIjwvc3Bhbj5cIjtcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gaHRtbC5qb2luKFwiXCIpO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIERldGVybWluZSB0aGUgY29tbW9uIHByZWZpeCBvZiB0d28gc3RyaW5ncy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBGaXJzdCBzdHJpbmcuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgU2Vjb25kIHN0cmluZy5cbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbW1vbiB0byB0aGUgc3RhcnQgb2YgZWFjaFxuICAgICogICAgIHN0cmluZy5cbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ29tbW9uUHJlZml4ID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0Mikge1xuICBcdFx0dmFyIHBvaW50ZXJtaWQsIHBvaW50ZXJtYXgsIHBvaW50ZXJtaW4sIHBvaW50ZXJzdGFydDtcblxuICBcdFx0Ly8gUXVpY2sgY2hlY2sgZm9yIGNvbW1vbiBudWxsIGNhc2VzLlxuICBcdFx0aWYgKCF0ZXh0MSB8fCAhdGV4dDIgfHwgdGV4dDEuY2hhckF0KDApICE9PSB0ZXh0Mi5jaGFyQXQoMCkpIHtcbiAgXHRcdFx0cmV0dXJuIDA7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEJpbmFyeSBzZWFyY2guXG4gIFx0XHQvLyBQZXJmb3JtYW5jZSBhbmFseXNpczogaHR0cHM6Ly9uZWlsLmZyYXNlci5uYW1lL25ld3MvMjAwNy8xMC8wOS9cbiAgXHRcdHBvaW50ZXJtaW4gPSAwO1xuICBcdFx0cG9pbnRlcm1heCA9IE1hdGgubWluKHRleHQxLmxlbmd0aCwgdGV4dDIubGVuZ3RoKTtcbiAgXHRcdHBvaW50ZXJtaWQgPSBwb2ludGVybWF4O1xuICBcdFx0cG9pbnRlcnN0YXJ0ID0gMDtcbiAgXHRcdHdoaWxlIChwb2ludGVybWluIDwgcG9pbnRlcm1pZCkge1xuICBcdFx0XHRpZiAodGV4dDEuc3Vic3RyaW5nKHBvaW50ZXJzdGFydCwgcG9pbnRlcm1pZCkgPT09IHRleHQyLnN1YnN0cmluZyhwb2ludGVyc3RhcnQsIHBvaW50ZXJtaWQpKSB7XG4gIFx0XHRcdFx0cG9pbnRlcm1pbiA9IHBvaW50ZXJtaWQ7XG4gIFx0XHRcdFx0cG9pbnRlcnN0YXJ0ID0gcG9pbnRlcm1pbjtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRwb2ludGVybWF4ID0gcG9pbnRlcm1pZDtcbiAgXHRcdFx0fVxuICBcdFx0XHRwb2ludGVybWlkID0gTWF0aC5mbG9vcigocG9pbnRlcm1heCAtIHBvaW50ZXJtaW4pIC8gMiArIHBvaW50ZXJtaW4pO1xuICBcdFx0fVxuICBcdFx0cmV0dXJuIHBvaW50ZXJtaWQ7XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogRGV0ZXJtaW5lIHRoZSBjb21tb24gc3VmZml4IG9mIHR3byBzdHJpbmdzLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIEZpcnN0IHN0cmluZy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBTZWNvbmQgc3RyaW5nLlxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgY29tbW9uIHRvIHRoZSBlbmQgb2YgZWFjaCBzdHJpbmcuXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNvbW1vblN1ZmZpeCA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIpIHtcbiAgXHRcdHZhciBwb2ludGVybWlkLCBwb2ludGVybWF4LCBwb2ludGVybWluLCBwb2ludGVyZW5kO1xuXG4gIFx0XHQvLyBRdWljayBjaGVjayBmb3IgY29tbW9uIG51bGwgY2FzZXMuXG4gIFx0XHRpZiAoIXRleHQxIHx8ICF0ZXh0MiB8fCB0ZXh0MS5jaGFyQXQodGV4dDEubGVuZ3RoIC0gMSkgIT09IHRleHQyLmNoYXJBdCh0ZXh0Mi5sZW5ndGggLSAxKSkge1xuICBcdFx0XHRyZXR1cm4gMDtcbiAgXHRcdH1cblxuICBcdFx0Ly8gQmluYXJ5IHNlYXJjaC5cbiAgXHRcdC8vIFBlcmZvcm1hbmNlIGFuYWx5c2lzOiBodHRwczovL25laWwuZnJhc2VyLm5hbWUvbmV3cy8yMDA3LzEwLzA5L1xuICBcdFx0cG9pbnRlcm1pbiA9IDA7XG4gIFx0XHRwb2ludGVybWF4ID0gTWF0aC5taW4odGV4dDEubGVuZ3RoLCB0ZXh0Mi5sZW5ndGgpO1xuICBcdFx0cG9pbnRlcm1pZCA9IHBvaW50ZXJtYXg7XG4gIFx0XHRwb2ludGVyZW5kID0gMDtcbiAgXHRcdHdoaWxlIChwb2ludGVybWluIDwgcG9pbnRlcm1pZCkge1xuICBcdFx0XHRpZiAodGV4dDEuc3Vic3RyaW5nKHRleHQxLmxlbmd0aCAtIHBvaW50ZXJtaWQsIHRleHQxLmxlbmd0aCAtIHBvaW50ZXJlbmQpID09PSB0ZXh0Mi5zdWJzdHJpbmcodGV4dDIubGVuZ3RoIC0gcG9pbnRlcm1pZCwgdGV4dDIubGVuZ3RoIC0gcG9pbnRlcmVuZCkpIHtcbiAgXHRcdFx0XHRwb2ludGVybWluID0gcG9pbnRlcm1pZDtcbiAgXHRcdFx0XHRwb2ludGVyZW5kID0gcG9pbnRlcm1pbjtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRwb2ludGVybWF4ID0gcG9pbnRlcm1pZDtcbiAgXHRcdFx0fVxuICBcdFx0XHRwb2ludGVybWlkID0gTWF0aC5mbG9vcigocG9pbnRlcm1heCAtIHBvaW50ZXJtaW4pIC8gMiArIHBvaW50ZXJtaW4pO1xuICBcdFx0fVxuICBcdFx0cmV0dXJuIHBvaW50ZXJtaWQ7XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogRmluZCB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0d28gdGV4dHMuICBBc3N1bWVzIHRoYXQgdGhlIHRleHRzIGRvIG5vdFxuICAgICogaGF2ZSBhbnkgY29tbW9uIHByZWZpeCBvciBzdWZmaXguXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgT2xkIHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgTmV3IHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrbGluZXMgU3BlZWR1cCBmbGFnLiAgSWYgZmFsc2UsIHRoZW4gZG9uJ3QgcnVuIGFcbiAgICAqICAgICBsaW5lLWxldmVsIGRpZmYgZmlyc3QgdG8gaWRlbnRpZnkgdGhlIGNoYW5nZWQgYXJlYXMuXG4gICAgKiAgICAgSWYgdHJ1ZSwgdGhlbiBydW4gYSBmYXN0ZXIsIHNsaWdodGx5IGxlc3Mgb3B0aW1hbCBkaWZmLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGRlYWRsaW5lIFRpbWUgd2hlbiB0aGUgZGlmZiBzaG91bGQgYmUgY29tcGxldGUgYnkuXG4gICAgKiBAcmV0dXJuIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDb21wdXRlID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0MiwgY2hlY2tsaW5lcywgZGVhZGxpbmUpIHtcbiAgXHRcdHZhciBkaWZmcywgbG9uZ3RleHQsIHNob3J0dGV4dCwgaSwgaG0sIHRleHQxQSwgdGV4dDJBLCB0ZXh0MUIsIHRleHQyQiwgbWlkQ29tbW9uLCBkaWZmc0EsIGRpZmZzQjtcblxuICBcdFx0aWYgKCF0ZXh0MSkge1xuXG4gIFx0XHRcdC8vIEp1c3QgYWRkIHNvbWUgdGV4dCAoc3BlZWR1cCkuXG4gIFx0XHRcdHJldHVybiBbW0RJRkZfSU5TRVJULCB0ZXh0Ml1dO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoIXRleHQyKSB7XG5cbiAgXHRcdFx0Ly8gSnVzdCBkZWxldGUgc29tZSB0ZXh0IChzcGVlZHVwKS5cbiAgXHRcdFx0cmV0dXJuIFtbRElGRl9ERUxFVEUsIHRleHQxXV07XG4gIFx0XHR9XG5cbiAgXHRcdGxvbmd0ZXh0ID0gdGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoID8gdGV4dDEgOiB0ZXh0MjtcbiAgXHRcdHNob3J0dGV4dCA9IHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCA/IHRleHQyIDogdGV4dDE7XG4gIFx0XHRpID0gbG9uZ3RleHQuaW5kZXhPZihzaG9ydHRleHQpO1xuICBcdFx0aWYgKGkgIT09IC0xKSB7XG5cbiAgXHRcdFx0Ly8gU2hvcnRlciB0ZXh0IGlzIGluc2lkZSB0aGUgbG9uZ2VyIHRleHQgKHNwZWVkdXApLlxuICBcdFx0XHRkaWZmcyA9IFtbRElGRl9JTlNFUlQsIGxvbmd0ZXh0LnN1YnN0cmluZygwLCBpKV0sIFtESUZGX0VRVUFMLCBzaG9ydHRleHRdLCBbRElGRl9JTlNFUlQsIGxvbmd0ZXh0LnN1YnN0cmluZyhpICsgc2hvcnR0ZXh0Lmxlbmd0aCldXTtcblxuICBcdFx0XHQvLyBTd2FwIGluc2VydGlvbnMgZm9yIGRlbGV0aW9ucyBpZiBkaWZmIGlzIHJldmVyc2VkLlxuICBcdFx0XHRpZiAodGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoKSB7XG4gIFx0XHRcdFx0ZGlmZnNbMF1bMF0gPSBkaWZmc1syXVswXSA9IERJRkZfREVMRVRFO1xuICBcdFx0XHR9XG4gIFx0XHRcdHJldHVybiBkaWZmcztcbiAgXHRcdH1cblxuICBcdFx0aWYgKHNob3J0dGV4dC5sZW5ndGggPT09IDEpIHtcblxuICBcdFx0XHQvLyBTaW5nbGUgY2hhcmFjdGVyIHN0cmluZy5cbiAgXHRcdFx0Ly8gQWZ0ZXIgdGhlIHByZXZpb3VzIHNwZWVkdXAsIHRoZSBjaGFyYWN0ZXIgY2FuJ3QgYmUgYW4gZXF1YWxpdHkuXG4gIFx0XHRcdHJldHVybiBbW0RJRkZfREVMRVRFLCB0ZXh0MV0sIFtESUZGX0lOU0VSVCwgdGV4dDJdXTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBwcm9ibGVtIGNhbiBiZSBzcGxpdCBpbiB0d28uXG4gIFx0XHRobSA9IHRoaXMuZGlmZkhhbGZNYXRjaCh0ZXh0MSwgdGV4dDIpO1xuICBcdFx0aWYgKGhtKSB7XG5cbiAgXHRcdFx0Ly8gQSBoYWxmLW1hdGNoIHdhcyBmb3VuZCwgc29ydCBvdXQgdGhlIHJldHVybiBkYXRhLlxuICBcdFx0XHR0ZXh0MUEgPSBobVswXTtcbiAgXHRcdFx0dGV4dDFCID0gaG1bMV07XG4gIFx0XHRcdHRleHQyQSA9IGhtWzJdO1xuICBcdFx0XHR0ZXh0MkIgPSBobVszXTtcbiAgXHRcdFx0bWlkQ29tbW9uID0gaG1bNF07XG5cbiAgXHRcdFx0Ly8gU2VuZCBib3RoIHBhaXJzIG9mZiBmb3Igc2VwYXJhdGUgcHJvY2Vzc2luZy5cbiAgXHRcdFx0ZGlmZnNBID0gdGhpcy5EaWZmTWFpbih0ZXh0MUEsIHRleHQyQSwgY2hlY2tsaW5lcywgZGVhZGxpbmUpO1xuICBcdFx0XHRkaWZmc0IgPSB0aGlzLkRpZmZNYWluKHRleHQxQiwgdGV4dDJCLCBjaGVja2xpbmVzLCBkZWFkbGluZSk7XG5cbiAgXHRcdFx0Ly8gTWVyZ2UgdGhlIHJlc3VsdHMuXG4gIFx0XHRcdHJldHVybiBkaWZmc0EuY29uY2F0KFtbRElGRl9FUVVBTCwgbWlkQ29tbW9uXV0sIGRpZmZzQik7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjaGVja2xpbmVzICYmIHRleHQxLmxlbmd0aCA+IDEwMCAmJiB0ZXh0Mi5sZW5ndGggPiAxMDApIHtcbiAgXHRcdFx0cmV0dXJuIHRoaXMuZGlmZkxpbmVNb2RlKHRleHQxLCB0ZXh0MiwgZGVhZGxpbmUpO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gdGhpcy5kaWZmQmlzZWN0KHRleHQxLCB0ZXh0MiwgZGVhZGxpbmUpO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIERvIHRoZSB0d28gdGV4dHMgc2hhcmUgYSBzdWJzdHJpbmcgd2hpY2ggaXMgYXQgbGVhc3QgaGFsZiB0aGUgbGVuZ3RoIG9mIHRoZVxuICAgICogbG9uZ2VyIHRleHQ/XG4gICAgKiBUaGlzIHNwZWVkdXAgY2FuIHByb2R1Y2Ugbm9uLW1pbmltYWwgZGlmZnMuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgRmlyc3Qgc3RyaW5nLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIFNlY29uZCBzdHJpbmcuXG4gICAgKiBAcmV0dXJuIHtBcnJheS48c3RyaW5nPn0gRml2ZSBlbGVtZW50IEFycmF5LCBjb250YWluaW5nIHRoZSBwcmVmaXggb2ZcbiAgICAqICAgICB0ZXh0MSwgdGhlIHN1ZmZpeCBvZiB0ZXh0MSwgdGhlIHByZWZpeCBvZiB0ZXh0MiwgdGhlIHN1ZmZpeCBvZlxuICAgICogICAgIHRleHQyIGFuZCB0aGUgY29tbW9uIG1pZGRsZS4gIE9yIG51bGwgaWYgdGhlcmUgd2FzIG5vIG1hdGNoLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmSGFsZk1hdGNoID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0Mikge1xuICBcdFx0dmFyIGxvbmd0ZXh0LCBzaG9ydHRleHQsIGRtcCwgdGV4dDFBLCB0ZXh0MkIsIHRleHQyQSwgdGV4dDFCLCBtaWRDb21tb24sIGhtMSwgaG0yLCBobTtcblxuICBcdFx0bG9uZ3RleHQgPSB0ZXh0MS5sZW5ndGggPiB0ZXh0Mi5sZW5ndGggPyB0ZXh0MSA6IHRleHQyO1xuICBcdFx0c2hvcnR0ZXh0ID0gdGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoID8gdGV4dDIgOiB0ZXh0MTtcbiAgXHRcdGlmIChsb25ndGV4dC5sZW5ndGggPCA0IHx8IHNob3J0dGV4dC5sZW5ndGggKiAyIDwgbG9uZ3RleHQubGVuZ3RoKSB7XG4gIFx0XHRcdHJldHVybiBudWxsOyAvLyBQb2ludGxlc3MuXG4gIFx0XHR9XG4gIFx0XHRkbXAgPSB0aGlzOyAvLyAndGhpcycgYmVjb21lcyAnd2luZG93JyBpbiBhIGNsb3N1cmUuXG5cbiAgXHRcdC8qKlxuICAgICAqIERvZXMgYSBzdWJzdHJpbmcgb2Ygc2hvcnR0ZXh0IGV4aXN0IHdpdGhpbiBsb25ndGV4dCBzdWNoIHRoYXQgdGhlIHN1YnN0cmluZ1xuICAgICAqIGlzIGF0IGxlYXN0IGhhbGYgdGhlIGxlbmd0aCBvZiBsb25ndGV4dD9cbiAgICAgKiBDbG9zdXJlLCBidXQgZG9lcyBub3QgcmVmZXJlbmNlIGFueSBleHRlcm5hbCB2YXJpYWJsZXMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvbmd0ZXh0IExvbmdlciBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNob3J0dGV4dCBTaG9ydGVyIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaSBTdGFydCBpbmRleCBvZiBxdWFydGVyIGxlbmd0aCBzdWJzdHJpbmcgd2l0aGluIGxvbmd0ZXh0LlxuICAgICAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fSBGaXZlIGVsZW1lbnQgQXJyYXksIGNvbnRhaW5pbmcgdGhlIHByZWZpeCBvZlxuICAgICAqICAgICBsb25ndGV4dCwgdGhlIHN1ZmZpeCBvZiBsb25ndGV4dCwgdGhlIHByZWZpeCBvZiBzaG9ydHRleHQsIHRoZSBzdWZmaXhcbiAgICAgKiAgICAgb2Ygc2hvcnR0ZXh0IGFuZCB0aGUgY29tbW9uIG1pZGRsZS4gIE9yIG51bGwgaWYgdGhlcmUgd2FzIG5vIG1hdGNoLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gIFx0XHRmdW5jdGlvbiBkaWZmSGFsZk1hdGNoSShsb25ndGV4dCwgc2hvcnR0ZXh0LCBpKSB7XG4gIFx0XHRcdHZhciBzZWVkLCBqLCBiZXN0Q29tbW9uLCBwcmVmaXhMZW5ndGgsIHN1ZmZpeExlbmd0aCwgYmVzdExvbmd0ZXh0QSwgYmVzdExvbmd0ZXh0QiwgYmVzdFNob3J0dGV4dEEsIGJlc3RTaG9ydHRleHRCO1xuXG4gIFx0XHRcdC8vIFN0YXJ0IHdpdGggYSAxLzQgbGVuZ3RoIHN1YnN0cmluZyBhdCBwb3NpdGlvbiBpIGFzIGEgc2VlZC5cbiAgXHRcdFx0c2VlZCA9IGxvbmd0ZXh0LnN1YnN0cmluZyhpLCBpICsgTWF0aC5mbG9vcihsb25ndGV4dC5sZW5ndGggLyA0KSk7XG4gIFx0XHRcdGogPSAtMTtcbiAgXHRcdFx0YmVzdENvbW1vbiA9IFwiXCI7XG4gIFx0XHRcdHdoaWxlICgoaiA9IHNob3J0dGV4dC5pbmRleE9mKHNlZWQsIGogKyAxKSkgIT09IC0xKSB7XG4gIFx0XHRcdFx0cHJlZml4TGVuZ3RoID0gZG1wLmRpZmZDb21tb25QcmVmaXgobG9uZ3RleHQuc3Vic3RyaW5nKGkpLCBzaG9ydHRleHQuc3Vic3RyaW5nKGopKTtcbiAgXHRcdFx0XHRzdWZmaXhMZW5ndGggPSBkbXAuZGlmZkNvbW1vblN1ZmZpeChsb25ndGV4dC5zdWJzdHJpbmcoMCwgaSksIHNob3J0dGV4dC5zdWJzdHJpbmcoMCwgaikpO1xuICBcdFx0XHRcdGlmIChiZXN0Q29tbW9uLmxlbmd0aCA8IHN1ZmZpeExlbmd0aCArIHByZWZpeExlbmd0aCkge1xuICBcdFx0XHRcdFx0YmVzdENvbW1vbiA9IHNob3J0dGV4dC5zdWJzdHJpbmcoaiAtIHN1ZmZpeExlbmd0aCwgaikgKyBzaG9ydHRleHQuc3Vic3RyaW5nKGosIGogKyBwcmVmaXhMZW5ndGgpO1xuICBcdFx0XHRcdFx0YmVzdExvbmd0ZXh0QSA9IGxvbmd0ZXh0LnN1YnN0cmluZygwLCBpIC0gc3VmZml4TGVuZ3RoKTtcbiAgXHRcdFx0XHRcdGJlc3RMb25ndGV4dEIgPSBsb25ndGV4dC5zdWJzdHJpbmcoaSArIHByZWZpeExlbmd0aCk7XG4gIFx0XHRcdFx0XHRiZXN0U2hvcnR0ZXh0QSA9IHNob3J0dGV4dC5zdWJzdHJpbmcoMCwgaiAtIHN1ZmZpeExlbmd0aCk7XG4gIFx0XHRcdFx0XHRiZXN0U2hvcnR0ZXh0QiA9IHNob3J0dGV4dC5zdWJzdHJpbmcoaiArIHByZWZpeExlbmd0aCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdGlmIChiZXN0Q29tbW9uLmxlbmd0aCAqIDIgPj0gbG9uZ3RleHQubGVuZ3RoKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFtiZXN0TG9uZ3RleHRBLCBiZXN0TG9uZ3RleHRCLCBiZXN0U2hvcnR0ZXh0QSwgYmVzdFNob3J0dGV4dEIsIGJlc3RDb21tb25dO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHJldHVybiBudWxsO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEZpcnN0IGNoZWNrIGlmIHRoZSBzZWNvbmQgcXVhcnRlciBpcyB0aGUgc2VlZCBmb3IgYSBoYWxmLW1hdGNoLlxuICBcdFx0aG0xID0gZGlmZkhhbGZNYXRjaEkobG9uZ3RleHQsIHNob3J0dGV4dCwgTWF0aC5jZWlsKGxvbmd0ZXh0Lmxlbmd0aCAvIDQpKTtcblxuICBcdFx0Ly8gQ2hlY2sgYWdhaW4gYmFzZWQgb24gdGhlIHRoaXJkIHF1YXJ0ZXIuXG4gIFx0XHRobTIgPSBkaWZmSGFsZk1hdGNoSShsb25ndGV4dCwgc2hvcnR0ZXh0LCBNYXRoLmNlaWwobG9uZ3RleHQubGVuZ3RoIC8gMikpO1xuICBcdFx0aWYgKCFobTEgJiYgIWhtMikge1xuICBcdFx0XHRyZXR1cm4gbnVsbDtcbiAgXHRcdH0gZWxzZSBpZiAoIWhtMikge1xuICBcdFx0XHRobSA9IGhtMTtcbiAgXHRcdH0gZWxzZSBpZiAoIWhtMSkge1xuICBcdFx0XHRobSA9IGhtMjtcbiAgXHRcdH0gZWxzZSB7XG5cbiAgXHRcdFx0Ly8gQm90aCBtYXRjaGVkLiAgU2VsZWN0IHRoZSBsb25nZXN0LlxuICBcdFx0XHRobSA9IGhtMVs0XS5sZW5ndGggPiBobTJbNF0ubGVuZ3RoID8gaG0xIDogaG0yO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBBIGhhbGYtbWF0Y2ggd2FzIGZvdW5kLCBzb3J0IG91dCB0aGUgcmV0dXJuIGRhdGEuXG4gIFx0XHRpZiAodGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoKSB7XG4gIFx0XHRcdHRleHQxQSA9IGhtWzBdO1xuICBcdFx0XHR0ZXh0MUIgPSBobVsxXTtcbiAgXHRcdFx0dGV4dDJBID0gaG1bMl07XG4gIFx0XHRcdHRleHQyQiA9IGhtWzNdO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0dGV4dDJBID0gaG1bMF07XG4gIFx0XHRcdHRleHQyQiA9IGhtWzFdO1xuICBcdFx0XHR0ZXh0MUEgPSBobVsyXTtcbiAgXHRcdFx0dGV4dDFCID0gaG1bM107XG4gIFx0XHR9XG4gIFx0XHRtaWRDb21tb24gPSBobVs0XTtcbiAgXHRcdHJldHVybiBbdGV4dDFBLCB0ZXh0MUIsIHRleHQyQSwgdGV4dDJCLCBtaWRDb21tb25dO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIERvIGEgcXVpY2sgbGluZS1sZXZlbCBkaWZmIG9uIGJvdGggc3RyaW5ncywgdGhlbiByZWRpZmYgdGhlIHBhcnRzIGZvclxuICAgICogZ3JlYXRlciBhY2N1cmFjeS5cbiAgICAqIFRoaXMgc3BlZWR1cCBjYW4gcHJvZHVjZSBub24tbWluaW1hbCBkaWZmcy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBPbGQgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBOZXcgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWFkbGluZSBUaW1lIHdoZW4gdGhlIGRpZmYgc2hvdWxkIGJlIGNvbXBsZXRlIGJ5LlxuICAgICogQHJldHVybiB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmTGluZU1vZGUgPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyLCBkZWFkbGluZSkge1xuICBcdFx0dmFyIGEsIGRpZmZzLCBsaW5lYXJyYXksIHBvaW50ZXIsIGNvdW50SW5zZXJ0LCBjb3VudERlbGV0ZSwgdGV4dEluc2VydCwgdGV4dERlbGV0ZSwgajtcblxuICBcdFx0Ly8gU2NhbiB0aGUgdGV4dCBvbiBhIGxpbmUtYnktbGluZSBiYXNpcyBmaXJzdC5cbiAgXHRcdGEgPSB0aGlzLmRpZmZMaW5lc1RvQ2hhcnModGV4dDEsIHRleHQyKTtcbiAgXHRcdHRleHQxID0gYS5jaGFyczE7XG4gIFx0XHR0ZXh0MiA9IGEuY2hhcnMyO1xuICBcdFx0bGluZWFycmF5ID0gYS5saW5lQXJyYXk7XG5cbiAgXHRcdGRpZmZzID0gdGhpcy5EaWZmTWFpbih0ZXh0MSwgdGV4dDIsIGZhbHNlLCBkZWFkbGluZSk7XG5cbiAgXHRcdC8vIENvbnZlcnQgdGhlIGRpZmYgYmFjayB0byBvcmlnaW5hbCB0ZXh0LlxuICBcdFx0dGhpcy5kaWZmQ2hhcnNUb0xpbmVzKGRpZmZzLCBsaW5lYXJyYXkpO1xuXG4gIFx0XHQvLyBFbGltaW5hdGUgZnJlYWsgbWF0Y2hlcyAoZS5nLiBibGFuayBsaW5lcylcbiAgXHRcdHRoaXMuZGlmZkNsZWFudXBTZW1hbnRpYyhkaWZmcyk7XG5cbiAgXHRcdC8vIFJlZGlmZiBhbnkgcmVwbGFjZW1lbnQgYmxvY2tzLCB0aGlzIHRpbWUgY2hhcmFjdGVyLWJ5LWNoYXJhY3Rlci5cbiAgXHRcdC8vIEFkZCBhIGR1bW15IGVudHJ5IGF0IHRoZSBlbmQuXG4gIFx0XHRkaWZmcy5wdXNoKFtESUZGX0VRVUFMLCBcIlwiXSk7XG4gIFx0XHRwb2ludGVyID0gMDtcbiAgXHRcdGNvdW50RGVsZXRlID0gMDtcbiAgXHRcdGNvdW50SW5zZXJ0ID0gMDtcbiAgXHRcdHRleHREZWxldGUgPSBcIlwiO1xuICBcdFx0dGV4dEluc2VydCA9IFwiXCI7XG4gIFx0XHR3aGlsZSAocG9pbnRlciA8IGRpZmZzLmxlbmd0aCkge1xuICBcdFx0XHRzd2l0Y2ggKGRpZmZzW3BvaW50ZXJdWzBdKSB7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0lOU0VSVDpcbiAgXHRcdFx0XHRcdGNvdW50SW5zZXJ0Kys7XG4gIFx0XHRcdFx0XHR0ZXh0SW5zZXJ0ICs9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0RFTEVURTpcbiAgXHRcdFx0XHRcdGNvdW50RGVsZXRlKys7XG4gIFx0XHRcdFx0XHR0ZXh0RGVsZXRlICs9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0VRVUFMOlxuXG4gIFx0XHRcdFx0XHQvLyBVcG9uIHJlYWNoaW5nIGFuIGVxdWFsaXR5LCBjaGVjayBmb3IgcHJpb3IgcmVkdW5kYW5jaWVzLlxuICBcdFx0XHRcdFx0aWYgKGNvdW50RGVsZXRlID49IDEgJiYgY291bnRJbnNlcnQgPj0gMSkge1xuXG4gIFx0XHRcdFx0XHRcdC8vIERlbGV0ZSB0aGUgb2ZmZW5kaW5nIHJlY29yZHMgYW5kIGFkZCB0aGUgbWVyZ2VkIG9uZXMuXG4gIFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydCwgY291bnREZWxldGUgKyBjb3VudEluc2VydCk7XG4gIFx0XHRcdFx0XHRcdHBvaW50ZXIgPSBwb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydDtcbiAgXHRcdFx0XHRcdFx0YSA9IHRoaXMuRGlmZk1haW4odGV4dERlbGV0ZSwgdGV4dEluc2VydCwgZmFsc2UsIGRlYWRsaW5lKTtcbiAgXHRcdFx0XHRcdFx0Zm9yIChqID0gYS5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICBcdFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyLCAwLCBhW2pdKTtcbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0XHRwb2ludGVyID0gcG9pbnRlciArIGEubGVuZ3RoO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0Y291bnRJbnNlcnQgPSAwO1xuICBcdFx0XHRcdFx0Y291bnREZWxldGUgPSAwO1xuICBcdFx0XHRcdFx0dGV4dERlbGV0ZSA9IFwiXCI7XG4gIFx0XHRcdFx0XHR0ZXh0SW5zZXJ0ID0gXCJcIjtcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHR9XG4gIFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdH1cbiAgXHRcdGRpZmZzLnBvcCgpOyAvLyBSZW1vdmUgdGhlIGR1bW15IGVudHJ5IGF0IHRoZSBlbmQuXG5cbiAgXHRcdHJldHVybiBkaWZmcztcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBGaW5kIHRoZSAnbWlkZGxlIHNuYWtlJyBvZiBhIGRpZmYsIHNwbGl0IHRoZSBwcm9ibGVtIGluIHR3b1xuICAgICogYW5kIHJldHVybiB0aGUgcmVjdXJzaXZlbHkgY29uc3RydWN0ZWQgZGlmZi5cbiAgICAqIFNlZSBNeWVycyAxOTg2IHBhcGVyOiBBbiBPKE5EKSBEaWZmZXJlbmNlIEFsZ29yaXRobSBhbmQgSXRzIFZhcmlhdGlvbnMuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgT2xkIHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgTmV3IHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZGVhZGxpbmUgVGltZSBhdCB3aGljaCB0byBiYWlsIGlmIG5vdCB5ZXQgY29tcGxldGUuXG4gICAgKiBAcmV0dXJuIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZCaXNlY3QgPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyLCBkZWFkbGluZSkge1xuICBcdFx0dmFyIHRleHQxTGVuZ3RoLCB0ZXh0Mkxlbmd0aCwgbWF4RCwgdk9mZnNldCwgdkxlbmd0aCwgdjEsIHYyLCB4LCBkZWx0YSwgZnJvbnQsIGsxc3RhcnQsIGsxZW5kLCBrMnN0YXJ0LCBrMmVuZCwgazJPZmZzZXQsIGsxT2Zmc2V0LCB4MSwgeDIsIHkxLCB5MiwgZCwgazEsIGsyO1xuXG4gIFx0XHQvLyBDYWNoZSB0aGUgdGV4dCBsZW5ndGhzIHRvIHByZXZlbnQgbXVsdGlwbGUgY2FsbHMuXG4gIFx0XHR0ZXh0MUxlbmd0aCA9IHRleHQxLmxlbmd0aDtcbiAgXHRcdHRleHQyTGVuZ3RoID0gdGV4dDIubGVuZ3RoO1xuICBcdFx0bWF4RCA9IE1hdGguY2VpbCgodGV4dDFMZW5ndGggKyB0ZXh0Mkxlbmd0aCkgLyAyKTtcbiAgXHRcdHZPZmZzZXQgPSBtYXhEO1xuICBcdFx0dkxlbmd0aCA9IDIgKiBtYXhEO1xuICBcdFx0djEgPSBuZXcgQXJyYXkodkxlbmd0aCk7XG4gIFx0XHR2MiA9IG5ldyBBcnJheSh2TGVuZ3RoKTtcblxuICBcdFx0Ly8gU2V0dGluZyBhbGwgZWxlbWVudHMgdG8gLTEgaXMgZmFzdGVyIGluIENocm9tZSAmIEZpcmVmb3ggdGhhbiBtaXhpbmdcbiAgXHRcdC8vIGludGVnZXJzIGFuZCB1bmRlZmluZWQuXG4gIFx0XHRmb3IgKHggPSAwOyB4IDwgdkxlbmd0aDsgeCsrKSB7XG4gIFx0XHRcdHYxW3hdID0gLTE7XG4gIFx0XHRcdHYyW3hdID0gLTE7XG4gIFx0XHR9XG4gIFx0XHR2MVt2T2Zmc2V0ICsgMV0gPSAwO1xuICBcdFx0djJbdk9mZnNldCArIDFdID0gMDtcbiAgXHRcdGRlbHRhID0gdGV4dDFMZW5ndGggLSB0ZXh0Mkxlbmd0aDtcblxuICBcdFx0Ly8gSWYgdGhlIHRvdGFsIG51bWJlciBvZiBjaGFyYWN0ZXJzIGlzIG9kZCwgdGhlbiB0aGUgZnJvbnQgcGF0aCB3aWxsIGNvbGxpZGVcbiAgXHRcdC8vIHdpdGggdGhlIHJldmVyc2UgcGF0aC5cbiAgXHRcdGZyb250ID0gZGVsdGEgJSAyICE9PSAwO1xuXG4gIFx0XHQvLyBPZmZzZXRzIGZvciBzdGFydCBhbmQgZW5kIG9mIGsgbG9vcC5cbiAgXHRcdC8vIFByZXZlbnRzIG1hcHBpbmcgb2Ygc3BhY2UgYmV5b25kIHRoZSBncmlkLlxuICBcdFx0azFzdGFydCA9IDA7XG4gIFx0XHRrMWVuZCA9IDA7XG4gIFx0XHRrMnN0YXJ0ID0gMDtcbiAgXHRcdGsyZW5kID0gMDtcbiAgXHRcdGZvciAoZCA9IDA7IGQgPCBtYXhEOyBkKyspIHtcblxuICBcdFx0XHQvLyBCYWlsIG91dCBpZiBkZWFkbGluZSBpcyByZWFjaGVkLlxuICBcdFx0XHRpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgPiBkZWFkbGluZSkge1xuICBcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0Ly8gV2FsayB0aGUgZnJvbnQgcGF0aCBvbmUgc3RlcC5cbiAgXHRcdFx0Zm9yIChrMSA9IC1kICsgazFzdGFydDsgazEgPD0gZCAtIGsxZW5kOyBrMSArPSAyKSB7XG4gIFx0XHRcdFx0azFPZmZzZXQgPSB2T2Zmc2V0ICsgazE7XG4gIFx0XHRcdFx0aWYgKGsxID09PSAtZCB8fCBrMSAhPT0gZCAmJiB2MVtrMU9mZnNldCAtIDFdIDwgdjFbazFPZmZzZXQgKyAxXSkge1xuICBcdFx0XHRcdFx0eDEgPSB2MVtrMU9mZnNldCArIDFdO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHR4MSA9IHYxW2sxT2Zmc2V0IC0gMV0gKyAxO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHR5MSA9IHgxIC0gazE7XG4gIFx0XHRcdFx0d2hpbGUgKHgxIDwgdGV4dDFMZW5ndGggJiYgeTEgPCB0ZXh0Mkxlbmd0aCAmJiB0ZXh0MS5jaGFyQXQoeDEpID09PSB0ZXh0Mi5jaGFyQXQoeTEpKSB7XG4gIFx0XHRcdFx0XHR4MSsrO1xuICBcdFx0XHRcdFx0eTErKztcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0djFbazFPZmZzZXRdID0geDE7XG4gIFx0XHRcdFx0aWYgKHgxID4gdGV4dDFMZW5ndGgpIHtcblxuICBcdFx0XHRcdFx0Ly8gUmFuIG9mZiB0aGUgcmlnaHQgb2YgdGhlIGdyYXBoLlxuICBcdFx0XHRcdFx0azFlbmQgKz0gMjtcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKHkxID4gdGV4dDJMZW5ndGgpIHtcblxuICBcdFx0XHRcdFx0Ly8gUmFuIG9mZiB0aGUgYm90dG9tIG9mIHRoZSBncmFwaC5cbiAgXHRcdFx0XHRcdGsxc3RhcnQgKz0gMjtcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGZyb250KSB7XG4gIFx0XHRcdFx0XHRrMk9mZnNldCA9IHZPZmZzZXQgKyBkZWx0YSAtIGsxO1xuICBcdFx0XHRcdFx0aWYgKGsyT2Zmc2V0ID49IDAgJiYgazJPZmZzZXQgPCB2TGVuZ3RoICYmIHYyW2syT2Zmc2V0XSAhPT0gLTEpIHtcblxuICBcdFx0XHRcdFx0XHQvLyBNaXJyb3IgeDIgb250byB0b3AtbGVmdCBjb29yZGluYXRlIHN5c3RlbS5cbiAgXHRcdFx0XHRcdFx0eDIgPSB0ZXh0MUxlbmd0aCAtIHYyW2syT2Zmc2V0XTtcbiAgXHRcdFx0XHRcdFx0aWYgKHgxID49IHgyKSB7XG5cbiAgXHRcdFx0XHRcdFx0XHQvLyBPdmVybGFwIGRldGVjdGVkLlxuICBcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRpZmZCaXNlY3RTcGxpdCh0ZXh0MSwgdGV4dDIsIHgxLCB5MSwgZGVhZGxpbmUpO1xuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0Ly8gV2FsayB0aGUgcmV2ZXJzZSBwYXRoIG9uZSBzdGVwLlxuICBcdFx0XHRmb3IgKGsyID0gLWQgKyBrMnN0YXJ0OyBrMiA8PSBkIC0gazJlbmQ7IGsyICs9IDIpIHtcbiAgXHRcdFx0XHRrMk9mZnNldCA9IHZPZmZzZXQgKyBrMjtcbiAgXHRcdFx0XHRpZiAoazIgPT09IC1kIHx8IGsyICE9PSBkICYmIHYyW2syT2Zmc2V0IC0gMV0gPCB2MltrMk9mZnNldCArIDFdKSB7XG4gIFx0XHRcdFx0XHR4MiA9IHYyW2syT2Zmc2V0ICsgMV07XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHgyID0gdjJbazJPZmZzZXQgLSAxXSArIDE7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHkyID0geDIgLSBrMjtcbiAgXHRcdFx0XHR3aGlsZSAoeDIgPCB0ZXh0MUxlbmd0aCAmJiB5MiA8IHRleHQyTGVuZ3RoICYmIHRleHQxLmNoYXJBdCh0ZXh0MUxlbmd0aCAtIHgyIC0gMSkgPT09IHRleHQyLmNoYXJBdCh0ZXh0Mkxlbmd0aCAtIHkyIC0gMSkpIHtcbiAgXHRcdFx0XHRcdHgyKys7XG4gIFx0XHRcdFx0XHR5MisrO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHR2MltrMk9mZnNldF0gPSB4MjtcbiAgXHRcdFx0XHRpZiAoeDIgPiB0ZXh0MUxlbmd0aCkge1xuXG4gIFx0XHRcdFx0XHQvLyBSYW4gb2ZmIHRoZSBsZWZ0IG9mIHRoZSBncmFwaC5cbiAgXHRcdFx0XHRcdGsyZW5kICs9IDI7XG4gIFx0XHRcdFx0fSBlbHNlIGlmICh5MiA+IHRleHQyTGVuZ3RoKSB7XG5cbiAgXHRcdFx0XHRcdC8vIFJhbiBvZmYgdGhlIHRvcCBvZiB0aGUgZ3JhcGguXG4gIFx0XHRcdFx0XHRrMnN0YXJ0ICs9IDI7XG4gIFx0XHRcdFx0fSBlbHNlIGlmICghZnJvbnQpIHtcbiAgXHRcdFx0XHRcdGsxT2Zmc2V0ID0gdk9mZnNldCArIGRlbHRhIC0gazI7XG4gIFx0XHRcdFx0XHRpZiAoazFPZmZzZXQgPj0gMCAmJiBrMU9mZnNldCA8IHZMZW5ndGggJiYgdjFbazFPZmZzZXRdICE9PSAtMSkge1xuICBcdFx0XHRcdFx0XHR4MSA9IHYxW2sxT2Zmc2V0XTtcbiAgXHRcdFx0XHRcdFx0eTEgPSB2T2Zmc2V0ICsgeDEgLSBrMU9mZnNldDtcblxuICBcdFx0XHRcdFx0XHQvLyBNaXJyb3IgeDIgb250byB0b3AtbGVmdCBjb29yZGluYXRlIHN5c3RlbS5cbiAgXHRcdFx0XHRcdFx0eDIgPSB0ZXh0MUxlbmd0aCAtIHgyO1xuICBcdFx0XHRcdFx0XHRpZiAoeDEgPj0geDIpIHtcblxuICBcdFx0XHRcdFx0XHRcdC8vIE92ZXJsYXAgZGV0ZWN0ZWQuXG4gIFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGlmZkJpc2VjdFNwbGl0KHRleHQxLCB0ZXh0MiwgeDEsIHkxLCBkZWFkbGluZSk7XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gRGlmZiB0b29rIHRvbyBsb25nIGFuZCBoaXQgdGhlIGRlYWRsaW5lIG9yXG4gIFx0XHQvLyBudW1iZXIgb2YgZGlmZnMgZXF1YWxzIG51bWJlciBvZiBjaGFyYWN0ZXJzLCBubyBjb21tb25hbGl0eSBhdCBhbGwuXG4gIFx0XHRyZXR1cm4gW1tESUZGX0RFTEVURSwgdGV4dDFdLCBbRElGRl9JTlNFUlQsIHRleHQyXV07XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogR2l2ZW4gdGhlIGxvY2F0aW9uIG9mIHRoZSAnbWlkZGxlIHNuYWtlJywgc3BsaXQgdGhlIGRpZmYgaW4gdHdvIHBhcnRzXG4gICAgKiBhbmQgcmVjdXJzZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBPbGQgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBOZXcgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IEluZGV4IG9mIHNwbGl0IHBvaW50IGluIHRleHQxLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IHkgSW5kZXggb2Ygc3BsaXQgcG9pbnQgaW4gdGV4dDIuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZGVhZGxpbmUgVGltZSBhdCB3aGljaCB0byBiYWlsIGlmIG5vdCB5ZXQgY29tcGxldGUuXG4gICAgKiBAcmV0dXJuIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZCaXNlY3RTcGxpdCA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIsIHgsIHksIGRlYWRsaW5lKSB7XG4gIFx0XHR2YXIgdGV4dDFhLCB0ZXh0MWIsIHRleHQyYSwgdGV4dDJiLCBkaWZmcywgZGlmZnNiO1xuICBcdFx0dGV4dDFhID0gdGV4dDEuc3Vic3RyaW5nKDAsIHgpO1xuICBcdFx0dGV4dDJhID0gdGV4dDIuc3Vic3RyaW5nKDAsIHkpO1xuICBcdFx0dGV4dDFiID0gdGV4dDEuc3Vic3RyaW5nKHgpO1xuICBcdFx0dGV4dDJiID0gdGV4dDIuc3Vic3RyaW5nKHkpO1xuXG4gIFx0XHQvLyBDb21wdXRlIGJvdGggZGlmZnMgc2VyaWFsbHkuXG4gIFx0XHRkaWZmcyA9IHRoaXMuRGlmZk1haW4odGV4dDFhLCB0ZXh0MmEsIGZhbHNlLCBkZWFkbGluZSk7XG4gIFx0XHRkaWZmc2IgPSB0aGlzLkRpZmZNYWluKHRleHQxYiwgdGV4dDJiLCBmYWxzZSwgZGVhZGxpbmUpO1xuXG4gIFx0XHRyZXR1cm4gZGlmZnMuY29uY2F0KGRpZmZzYik7XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogUmVkdWNlIHRoZSBudW1iZXIgb2YgZWRpdHMgYnkgZWxpbWluYXRpbmcgc2VtYW50aWNhbGx5IHRyaXZpYWwgZXF1YWxpdGllcy5cbiAgICAqIEBwYXJhbSB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IGRpZmZzIEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDbGVhbnVwU2VtYW50aWMgPSBmdW5jdGlvbiAoZGlmZnMpIHtcbiAgXHRcdHZhciBjaGFuZ2VzLCBlcXVhbGl0aWVzLCBlcXVhbGl0aWVzTGVuZ3RoLCBsYXN0ZXF1YWxpdHksIHBvaW50ZXIsIGxlbmd0aEluc2VydGlvbnMyLCBsZW5ndGhEZWxldGlvbnMyLCBsZW5ndGhJbnNlcnRpb25zMSwgbGVuZ3RoRGVsZXRpb25zMSwgZGVsZXRpb24sIGluc2VydGlvbiwgb3ZlcmxhcExlbmd0aDEsIG92ZXJsYXBMZW5ndGgyO1xuICBcdFx0Y2hhbmdlcyA9IGZhbHNlO1xuICBcdFx0ZXF1YWxpdGllcyA9IFtdOyAvLyBTdGFjayBvZiBpbmRpY2VzIHdoZXJlIGVxdWFsaXRpZXMgYXJlIGZvdW5kLlxuICBcdFx0ZXF1YWxpdGllc0xlbmd0aCA9IDA7IC8vIEtlZXBpbmcgb3VyIG93biBsZW5ndGggdmFyIGlzIGZhc3RlciBpbiBKUy5cbiAgXHRcdC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgXHRcdGxhc3RlcXVhbGl0eSA9IG51bGw7XG5cbiAgXHRcdC8vIEFsd2F5cyBlcXVhbCB0byBkaWZmc1tlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXV1bMV1cbiAgXHRcdHBvaW50ZXIgPSAwOyAvLyBJbmRleCBvZiBjdXJyZW50IHBvc2l0aW9uLlxuXG4gIFx0XHQvLyBOdW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGNoYW5nZWQgcHJpb3IgdG8gdGhlIGVxdWFsaXR5LlxuICBcdFx0bGVuZ3RoSW5zZXJ0aW9uczEgPSAwO1xuICBcdFx0bGVuZ3RoRGVsZXRpb25zMSA9IDA7XG5cbiAgXHRcdC8vIE51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgY2hhbmdlZCBhZnRlciB0aGUgZXF1YWxpdHkuXG4gIFx0XHRsZW5ndGhJbnNlcnRpb25zMiA9IDA7XG4gIFx0XHRsZW5ndGhEZWxldGlvbnMyID0gMDtcbiAgXHRcdHdoaWxlIChwb2ludGVyIDwgZGlmZnMubGVuZ3RoKSB7XG4gIFx0XHRcdGlmIChkaWZmc1twb2ludGVyXVswXSA9PT0gRElGRl9FUVVBTCkge1xuICBcdFx0XHRcdC8vIEVxdWFsaXR5IGZvdW5kLlxuICBcdFx0XHRcdGVxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCsrXSA9IHBvaW50ZXI7XG4gIFx0XHRcdFx0bGVuZ3RoSW5zZXJ0aW9uczEgPSBsZW5ndGhJbnNlcnRpb25zMjtcbiAgXHRcdFx0XHRsZW5ndGhEZWxldGlvbnMxID0gbGVuZ3RoRGVsZXRpb25zMjtcbiAgXHRcdFx0XHRsZW5ndGhJbnNlcnRpb25zMiA9IDA7XG4gIFx0XHRcdFx0bGVuZ3RoRGVsZXRpb25zMiA9IDA7XG4gIFx0XHRcdFx0bGFzdGVxdWFsaXR5ID0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0Ly8gQW4gaW5zZXJ0aW9uIG9yIGRlbGV0aW9uLlxuICBcdFx0XHRcdGlmIChkaWZmc1twb2ludGVyXVswXSA9PT0gRElGRl9JTlNFUlQpIHtcbiAgXHRcdFx0XHRcdGxlbmd0aEluc2VydGlvbnMyICs9IGRpZmZzW3BvaW50ZXJdWzFdLmxlbmd0aDtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0bGVuZ3RoRGVsZXRpb25zMiArPSBkaWZmc1twb2ludGVyXVsxXS5sZW5ndGg7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0Ly8gRWxpbWluYXRlIGFuIGVxdWFsaXR5IHRoYXQgaXMgc21hbGxlciBvciBlcXVhbCB0byB0aGUgZWRpdHMgb24gYm90aFxuICBcdFx0XHRcdC8vIHNpZGVzIG9mIGl0LlxuICBcdFx0XHRcdGlmIChsYXN0ZXF1YWxpdHkgJiYgbGFzdGVxdWFsaXR5Lmxlbmd0aCA8PSBNYXRoLm1heChsZW5ndGhJbnNlcnRpb25zMSwgbGVuZ3RoRGVsZXRpb25zMSkgJiYgbGFzdGVxdWFsaXR5Lmxlbmd0aCA8PSBNYXRoLm1heChsZW5ndGhJbnNlcnRpb25zMiwgbGVuZ3RoRGVsZXRpb25zMikpIHtcblxuICBcdFx0XHRcdFx0Ly8gRHVwbGljYXRlIHJlY29yZC5cbiAgXHRcdFx0XHRcdGRpZmZzLnNwbGljZShlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXSwgMCwgW0RJRkZfREVMRVRFLCBsYXN0ZXF1YWxpdHldKTtcblxuICBcdFx0XHRcdFx0Ly8gQ2hhbmdlIHNlY29uZCBjb3B5IHRvIGluc2VydC5cbiAgXHRcdFx0XHRcdGRpZmZzW2VxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdICsgMV1bMF0gPSBESUZGX0lOU0VSVDtcblxuICBcdFx0XHRcdFx0Ly8gVGhyb3cgYXdheSB0aGUgZXF1YWxpdHkgd2UganVzdCBkZWxldGVkLlxuICBcdFx0XHRcdFx0ZXF1YWxpdGllc0xlbmd0aC0tO1xuXG4gIFx0XHRcdFx0XHQvLyBUaHJvdyBhd2F5IHRoZSBwcmV2aW91cyBlcXVhbGl0eSAoaXQgbmVlZHMgdG8gYmUgcmVldmFsdWF0ZWQpLlxuICBcdFx0XHRcdFx0ZXF1YWxpdGllc0xlbmd0aC0tO1xuICBcdFx0XHRcdFx0cG9pbnRlciA9IGVxdWFsaXRpZXNMZW5ndGggPiAwID8gZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV0gOiAtMTtcblxuICBcdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIGNvdW50ZXJzLlxuICBcdFx0XHRcdFx0bGVuZ3RoSW5zZXJ0aW9uczEgPSAwO1xuICBcdFx0XHRcdFx0bGVuZ3RoRGVsZXRpb25zMSA9IDA7XG4gIFx0XHRcdFx0XHRsZW5ndGhJbnNlcnRpb25zMiA9IDA7XG4gIFx0XHRcdFx0XHRsZW5ndGhEZWxldGlvbnMyID0gMDtcbiAgXHRcdFx0XHRcdGxhc3RlcXVhbGl0eSA9IG51bGw7XG4gIFx0XHRcdFx0XHRjaGFuZ2VzID0gdHJ1ZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0cG9pbnRlcisrO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBOb3JtYWxpemUgdGhlIGRpZmYuXG4gIFx0XHRpZiAoY2hhbmdlcykge1xuICBcdFx0XHR0aGlzLmRpZmZDbGVhbnVwTWVyZ2UoZGlmZnMpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBGaW5kIGFueSBvdmVybGFwcyBiZXR3ZWVuIGRlbGV0aW9ucyBhbmQgaW5zZXJ0aW9ucy5cbiAgXHRcdC8vIGUuZzogPGRlbD5hYmN4eHg8L2RlbD48aW5zPnh4eGRlZjwvaW5zPlxuICBcdFx0Ly8gICAtPiA8ZGVsPmFiYzwvZGVsPnh4eDxpbnM+ZGVmPC9pbnM+XG4gIFx0XHQvLyBlLmc6IDxkZWw+eHh4YWJjPC9kZWw+PGlucz5kZWZ4eHg8L2lucz5cbiAgXHRcdC8vICAgLT4gPGlucz5kZWY8L2lucz54eHg8ZGVsPmFiYzwvZGVsPlxuICBcdFx0Ly8gT25seSBleHRyYWN0IGFuIG92ZXJsYXAgaWYgaXQgaXMgYXMgYmlnIGFzIHRoZSBlZGl0IGFoZWFkIG9yIGJlaGluZCBpdC5cbiAgXHRcdHBvaW50ZXIgPSAxO1xuICBcdFx0d2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcbiAgXHRcdFx0aWYgKGRpZmZzW3BvaW50ZXIgLSAxXVswXSA9PT0gRElGRl9ERUxFVEUgJiYgZGlmZnNbcG9pbnRlcl1bMF0gPT09IERJRkZfSU5TRVJUKSB7XG4gIFx0XHRcdFx0ZGVsZXRpb24gPSBkaWZmc1twb2ludGVyIC0gMV1bMV07XG4gIFx0XHRcdFx0aW5zZXJ0aW9uID0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0b3ZlcmxhcExlbmd0aDEgPSB0aGlzLmRpZmZDb21tb25PdmVybGFwKGRlbGV0aW9uLCBpbnNlcnRpb24pO1xuICBcdFx0XHRcdG92ZXJsYXBMZW5ndGgyID0gdGhpcy5kaWZmQ29tbW9uT3ZlcmxhcChpbnNlcnRpb24sIGRlbGV0aW9uKTtcbiAgXHRcdFx0XHRpZiAob3ZlcmxhcExlbmd0aDEgPj0gb3ZlcmxhcExlbmd0aDIpIHtcbiAgXHRcdFx0XHRcdGlmIChvdmVybGFwTGVuZ3RoMSA+PSBkZWxldGlvbi5sZW5ndGggLyAyIHx8IG92ZXJsYXBMZW5ndGgxID49IGluc2VydGlvbi5sZW5ndGggLyAyKSB7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gT3ZlcmxhcCBmb3VuZC4gIEluc2VydCBhbiBlcXVhbGl0eSBhbmQgdHJpbSB0aGUgc3Vycm91bmRpbmcgZWRpdHMuXG4gIFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyLCAwLCBbRElGRl9FUVVBTCwgaW5zZXJ0aW9uLnN1YnN0cmluZygwLCBvdmVybGFwTGVuZ3RoMSldKTtcbiAgXHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciAtIDFdWzFdID0gZGVsZXRpb24uc3Vic3RyaW5nKDAsIGRlbGV0aW9uLmxlbmd0aCAtIG92ZXJsYXBMZW5ndGgxKTtcbiAgXHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciArIDFdWzFdID0gaW5zZXJ0aW9uLnN1YnN0cmluZyhvdmVybGFwTGVuZ3RoMSk7XG4gIFx0XHRcdFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0aWYgKG92ZXJsYXBMZW5ndGgyID49IGRlbGV0aW9uLmxlbmd0aCAvIDIgfHwgb3ZlcmxhcExlbmd0aDIgPj0gaW5zZXJ0aW9uLmxlbmd0aCAvIDIpIHtcblxuICBcdFx0XHRcdFx0XHQvLyBSZXZlcnNlIG92ZXJsYXAgZm91bmQuXG4gIFx0XHRcdFx0XHRcdC8vIEluc2VydCBhbiBlcXVhbGl0eSBhbmQgc3dhcCBhbmQgdHJpbSB0aGUgc3Vycm91bmRpbmcgZWRpdHMuXG4gIFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyLCAwLCBbRElGRl9FUVVBTCwgZGVsZXRpb24uc3Vic3RyaW5nKDAsIG92ZXJsYXBMZW5ndGgyKV0pO1xuXG4gIFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgLSAxXVswXSA9IERJRkZfSU5TRVJUO1xuICBcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyIC0gMV1bMV0gPSBpbnNlcnRpb24uc3Vic3RyaW5nKDAsIGluc2VydGlvbi5sZW5ndGggLSBvdmVybGFwTGVuZ3RoMik7XG4gIFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgKyAxXVswXSA9IERJRkZfREVMRVRFO1xuICBcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyICsgMV1bMV0gPSBkZWxldGlvbi5zdWJzdHJpbmcob3ZlcmxhcExlbmd0aDIpO1xuICBcdFx0XHRcdFx0XHRwb2ludGVyKys7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdFx0fVxuICBcdFx0XHRwb2ludGVyKys7XG4gIFx0XHR9XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIHRoZSBzdWZmaXggb2Ygb25lIHN0cmluZyBpcyB0aGUgcHJlZml4IG9mIGFub3RoZXIuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgRmlyc3Qgc3RyaW5nLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIFNlY29uZCBzdHJpbmcuXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBjb21tb24gdG8gdGhlIGVuZCBvZiB0aGUgZmlyc3RcbiAgICAqICAgICBzdHJpbmcgYW5kIHRoZSBzdGFydCBvZiB0aGUgc2Vjb25kIHN0cmluZy5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNvbW1vbk92ZXJsYXAgPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyKSB7XG4gIFx0XHR2YXIgdGV4dDFMZW5ndGgsIHRleHQyTGVuZ3RoLCB0ZXh0TGVuZ3RoLCBiZXN0LCBsZW5ndGgsIHBhdHRlcm4sIGZvdW5kO1xuXG4gIFx0XHQvLyBDYWNoZSB0aGUgdGV4dCBsZW5ndGhzIHRvIHByZXZlbnQgbXVsdGlwbGUgY2FsbHMuXG4gIFx0XHR0ZXh0MUxlbmd0aCA9IHRleHQxLmxlbmd0aDtcbiAgXHRcdHRleHQyTGVuZ3RoID0gdGV4dDIubGVuZ3RoO1xuXG4gIFx0XHQvLyBFbGltaW5hdGUgdGhlIG51bGwgY2FzZS5cbiAgXHRcdGlmICh0ZXh0MUxlbmd0aCA9PT0gMCB8fCB0ZXh0Mkxlbmd0aCA9PT0gMCkge1xuICBcdFx0XHRyZXR1cm4gMDtcbiAgXHRcdH1cblxuICBcdFx0Ly8gVHJ1bmNhdGUgdGhlIGxvbmdlciBzdHJpbmcuXG4gIFx0XHRpZiAodGV4dDFMZW5ndGggPiB0ZXh0Mkxlbmd0aCkge1xuICBcdFx0XHR0ZXh0MSA9IHRleHQxLnN1YnN0cmluZyh0ZXh0MUxlbmd0aCAtIHRleHQyTGVuZ3RoKTtcbiAgXHRcdH0gZWxzZSBpZiAodGV4dDFMZW5ndGggPCB0ZXh0Mkxlbmd0aCkge1xuICBcdFx0XHR0ZXh0MiA9IHRleHQyLnN1YnN0cmluZygwLCB0ZXh0MUxlbmd0aCk7XG4gIFx0XHR9XG4gIFx0XHR0ZXh0TGVuZ3RoID0gTWF0aC5taW4odGV4dDFMZW5ndGgsIHRleHQyTGVuZ3RoKTtcblxuICBcdFx0Ly8gUXVpY2sgY2hlY2sgZm9yIHRoZSB3b3JzdCBjYXNlLlxuICBcdFx0aWYgKHRleHQxID09PSB0ZXh0Mikge1xuICBcdFx0XHRyZXR1cm4gdGV4dExlbmd0aDtcbiAgXHRcdH1cblxuICBcdFx0Ly8gU3RhcnQgYnkgbG9va2luZyBmb3IgYSBzaW5nbGUgY2hhcmFjdGVyIG1hdGNoXG4gIFx0XHQvLyBhbmQgaW5jcmVhc2UgbGVuZ3RoIHVudGlsIG5vIG1hdGNoIGlzIGZvdW5kLlxuICBcdFx0Ly8gUGVyZm9ybWFuY2UgYW5hbHlzaXM6IGh0dHBzOi8vbmVpbC5mcmFzZXIubmFtZS9uZXdzLzIwMTAvMTEvMDQvXG4gIFx0XHRiZXN0ID0gMDtcbiAgXHRcdGxlbmd0aCA9IDE7XG4gIFx0XHR3aGlsZSAodHJ1ZSkge1xuICBcdFx0XHRwYXR0ZXJuID0gdGV4dDEuc3Vic3RyaW5nKHRleHRMZW5ndGggLSBsZW5ndGgpO1xuICBcdFx0XHRmb3VuZCA9IHRleHQyLmluZGV4T2YocGF0dGVybik7XG4gIFx0XHRcdGlmIChmb3VuZCA9PT0gLTEpIHtcbiAgXHRcdFx0XHRyZXR1cm4gYmVzdDtcbiAgXHRcdFx0fVxuICBcdFx0XHRsZW5ndGggKz0gZm91bmQ7XG4gIFx0XHRcdGlmIChmb3VuZCA9PT0gMCB8fCB0ZXh0MS5zdWJzdHJpbmcodGV4dExlbmd0aCAtIGxlbmd0aCkgPT09IHRleHQyLnN1YnN0cmluZygwLCBsZW5ndGgpKSB7XG4gIFx0XHRcdFx0YmVzdCA9IGxlbmd0aDtcbiAgXHRcdFx0XHRsZW5ndGgrKztcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIFNwbGl0IHR3byB0ZXh0cyBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3MuICBSZWR1Y2UgdGhlIHRleHRzIHRvIGEgc3RyaW5nIG9mXG4gICAgKiBoYXNoZXMgd2hlcmUgZWFjaCBVbmljb2RlIGNoYXJhY3RlciByZXByZXNlbnRzIG9uZSBsaW5lLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIEZpcnN0IHN0cmluZy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBTZWNvbmQgc3RyaW5nLlxuICAgICogQHJldHVybiB7e2NoYXJzMTogc3RyaW5nLCBjaGFyczI6IHN0cmluZywgbGluZUFycmF5OiAhQXJyYXkuPHN0cmluZz59fVxuICAgICogICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBlbmNvZGVkIHRleHQxLCB0aGUgZW5jb2RlZCB0ZXh0MiBhbmRcbiAgICAqICAgICB0aGUgYXJyYXkgb2YgdW5pcXVlIHN0cmluZ3MuXG4gICAgKiAgICAgVGhlIHplcm90aCBlbGVtZW50IG9mIHRoZSBhcnJheSBvZiB1bmlxdWUgc3RyaW5ncyBpcyBpbnRlbnRpb25hbGx5IGJsYW5rLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmTGluZXNUb0NoYXJzID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0Mikge1xuICBcdFx0dmFyIGxpbmVBcnJheSwgbGluZUhhc2gsIGNoYXJzMSwgY2hhcnMyO1xuICBcdFx0bGluZUFycmF5ID0gW107IC8vIEUuZy4gbGluZUFycmF5WzRdID09PSAnSGVsbG9cXG4nXG4gIFx0XHRsaW5lSGFzaCA9IHt9OyAvLyBFLmcuIGxpbmVIYXNoWydIZWxsb1xcbiddID09PSA0XG5cbiAgXHRcdC8vICdcXHgwMCcgaXMgYSB2YWxpZCBjaGFyYWN0ZXIsIGJ1dCB2YXJpb3VzIGRlYnVnZ2VycyBkb24ndCBsaWtlIGl0LlxuICBcdFx0Ly8gU28gd2UnbGwgaW5zZXJ0IGEganVuayBlbnRyeSB0byBhdm9pZCBnZW5lcmF0aW5nIGEgbnVsbCBjaGFyYWN0ZXIuXG4gIFx0XHRsaW5lQXJyYXlbMF0gPSBcIlwiO1xuXG4gIFx0XHQvKipcbiAgICAgKiBTcGxpdCBhIHRleHQgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzLiAgUmVkdWNlIHRoZSB0ZXh0cyB0byBhIHN0cmluZyBvZlxuICAgICAqIGhhc2hlcyB3aGVyZSBlYWNoIFVuaWNvZGUgY2hhcmFjdGVyIHJlcHJlc2VudHMgb25lIGxpbmUuXG4gICAgICogTW9kaWZpZXMgbGluZWFycmF5IGFuZCBsaW5laGFzaCB0aHJvdWdoIGJlaW5nIGEgY2xvc3VyZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBTdHJpbmcgdG8gZW5jb2RlLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gRW5jb2RlZCBzdHJpbmcuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgXHRcdGZ1bmN0aW9uIGRpZmZMaW5lc1RvQ2hhcnNNdW5nZSh0ZXh0KSB7XG4gIFx0XHRcdHZhciBjaGFycywgbGluZVN0YXJ0LCBsaW5lRW5kLCBsaW5lQXJyYXlMZW5ndGgsIGxpbmU7XG4gIFx0XHRcdGNoYXJzID0gXCJcIjtcblxuICBcdFx0XHQvLyBXYWxrIHRoZSB0ZXh0LCBwdWxsaW5nIG91dCBhIHN1YnN0cmluZyBmb3IgZWFjaCBsaW5lLlxuICBcdFx0XHQvLyB0ZXh0LnNwbGl0KCdcXG4nKSB3b3VsZCB3b3VsZCB0ZW1wb3JhcmlseSBkb3VibGUgb3VyIG1lbW9yeSBmb290cHJpbnQuXG4gIFx0XHRcdC8vIE1vZGlmeWluZyB0ZXh0IHdvdWxkIGNyZWF0ZSBtYW55IGxhcmdlIHN0cmluZ3MgdG8gZ2FyYmFnZSBjb2xsZWN0LlxuICBcdFx0XHRsaW5lU3RhcnQgPSAwO1xuICBcdFx0XHRsaW5lRW5kID0gLTE7XG5cbiAgXHRcdFx0Ly8gS2VlcGluZyBvdXIgb3duIGxlbmd0aCB2YXJpYWJsZSBpcyBmYXN0ZXIgdGhhbiBsb29raW5nIGl0IHVwLlxuICBcdFx0XHRsaW5lQXJyYXlMZW5ndGggPSBsaW5lQXJyYXkubGVuZ3RoO1xuICBcdFx0XHR3aGlsZSAobGluZUVuZCA8IHRleHQubGVuZ3RoIC0gMSkge1xuICBcdFx0XHRcdGxpbmVFbmQgPSB0ZXh0LmluZGV4T2YoXCJcXG5cIiwgbGluZVN0YXJ0KTtcbiAgXHRcdFx0XHRpZiAobGluZUVuZCA9PT0gLTEpIHtcbiAgXHRcdFx0XHRcdGxpbmVFbmQgPSB0ZXh0Lmxlbmd0aCAtIDE7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdGxpbmUgPSB0ZXh0LnN1YnN0cmluZyhsaW5lU3RhcnQsIGxpbmVFbmQgKyAxKTtcbiAgXHRcdFx0XHRsaW5lU3RhcnQgPSBsaW5lRW5kICsgMTtcblxuICBcdFx0XHRcdHZhciBsaW5lSGFzaEV4aXN0cyA9IGxpbmVIYXNoLmhhc093blByb3BlcnR5ID8gbGluZUhhc2guaGFzT3duUHJvcGVydHkobGluZSkgOiBsaW5lSGFzaFtsaW5lXSAhPT0gdW5kZWZpbmVkO1xuXG4gIFx0XHRcdFx0aWYgKGxpbmVIYXNoRXhpc3RzKSB7XG4gIFx0XHRcdFx0XHRjaGFycyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxpbmVIYXNoW2xpbmVdKTtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0Y2hhcnMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShsaW5lQXJyYXlMZW5ndGgpO1xuICBcdFx0XHRcdFx0bGluZUhhc2hbbGluZV0gPSBsaW5lQXJyYXlMZW5ndGg7XG4gIFx0XHRcdFx0XHRsaW5lQXJyYXlbbGluZUFycmF5TGVuZ3RoKytdID0gbGluZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0cmV0dXJuIGNoYXJzO1xuICBcdFx0fVxuXG4gIFx0XHRjaGFyczEgPSBkaWZmTGluZXNUb0NoYXJzTXVuZ2UodGV4dDEpO1xuICBcdFx0Y2hhcnMyID0gZGlmZkxpbmVzVG9DaGFyc011bmdlKHRleHQyKTtcbiAgXHRcdHJldHVybiB7XG4gIFx0XHRcdGNoYXJzMTogY2hhcnMxLFxuICBcdFx0XHRjaGFyczI6IGNoYXJzMixcbiAgXHRcdFx0bGluZUFycmF5OiBsaW5lQXJyYXlcbiAgXHRcdH07XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogUmVoeWRyYXRlIHRoZSB0ZXh0IGluIGEgZGlmZiBmcm9tIGEgc3RyaW5nIG9mIGxpbmUgaGFzaGVzIHRvIHJlYWwgbGluZXMgb2ZcbiAgICAqIHRleHQuXG4gICAgKiBAcGFyYW0geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBkaWZmcyBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqIEBwYXJhbSB7IUFycmF5LjxzdHJpbmc+fSBsaW5lQXJyYXkgQXJyYXkgb2YgdW5pcXVlIHN0cmluZ3MuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDaGFyc1RvTGluZXMgPSBmdW5jdGlvbiAoZGlmZnMsIGxpbmVBcnJheSkge1xuICBcdFx0dmFyIHgsIGNoYXJzLCB0ZXh0LCB5O1xuICBcdFx0Zm9yICh4ID0gMDsgeCA8IGRpZmZzLmxlbmd0aDsgeCsrKSB7XG4gIFx0XHRcdGNoYXJzID0gZGlmZnNbeF1bMV07XG4gIFx0XHRcdHRleHQgPSBbXTtcbiAgXHRcdFx0Zm9yICh5ID0gMDsgeSA8IGNoYXJzLmxlbmd0aDsgeSsrKSB7XG4gIFx0XHRcdFx0dGV4dFt5XSA9IGxpbmVBcnJheVtjaGFycy5jaGFyQ29kZUF0KHkpXTtcbiAgXHRcdFx0fVxuICBcdFx0XHRkaWZmc1t4XVsxXSA9IHRleHQuam9pbihcIlwiKTtcbiAgXHRcdH1cbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBSZW9yZGVyIGFuZCBtZXJnZSBsaWtlIGVkaXQgc2VjdGlvbnMuICBNZXJnZSBlcXVhbGl0aWVzLlxuICAgICogQW55IGVkaXQgc2VjdGlvbiBjYW4gbW92ZSBhcyBsb25nIGFzIGl0IGRvZXNuJ3QgY3Jvc3MgYW4gZXF1YWxpdHkuXG4gICAgKiBAcGFyYW0geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBkaWZmcyBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ2xlYW51cE1lcmdlID0gZnVuY3Rpb24gKGRpZmZzKSB7XG4gIFx0XHR2YXIgcG9pbnRlciwgY291bnREZWxldGUsIGNvdW50SW5zZXJ0LCB0ZXh0SW5zZXJ0LCB0ZXh0RGVsZXRlLCBjb21tb25sZW5ndGgsIGNoYW5nZXMsIGRpZmZQb2ludGVyLCBwb3NpdGlvbjtcbiAgXHRcdGRpZmZzLnB1c2goW0RJRkZfRVFVQUwsIFwiXCJdKTsgLy8gQWRkIGEgZHVtbXkgZW50cnkgYXQgdGhlIGVuZC5cbiAgXHRcdHBvaW50ZXIgPSAwO1xuICBcdFx0Y291bnREZWxldGUgPSAwO1xuICBcdFx0Y291bnRJbnNlcnQgPSAwO1xuICBcdFx0dGV4dERlbGV0ZSA9IFwiXCI7XG4gIFx0XHR0ZXh0SW5zZXJ0ID0gXCJcIjtcblxuICBcdFx0d2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcbiAgXHRcdFx0c3dpdGNoIChkaWZmc1twb2ludGVyXVswXSkge1xuICBcdFx0XHRcdGNhc2UgRElGRl9JTlNFUlQ6XG4gIFx0XHRcdFx0XHRjb3VudEluc2VydCsrO1xuICBcdFx0XHRcdFx0dGV4dEluc2VydCArPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGNhc2UgRElGRl9ERUxFVEU6XG4gIFx0XHRcdFx0XHRjb3VudERlbGV0ZSsrO1xuICBcdFx0XHRcdFx0dGV4dERlbGV0ZSArPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGNhc2UgRElGRl9FUVVBTDpcblxuICBcdFx0XHRcdFx0Ly8gVXBvbiByZWFjaGluZyBhbiBlcXVhbGl0eSwgY2hlY2sgZm9yIHByaW9yIHJlZHVuZGFuY2llcy5cbiAgXHRcdFx0XHRcdGlmIChjb3VudERlbGV0ZSArIGNvdW50SW5zZXJ0ID4gMSkge1xuICBcdFx0XHRcdFx0XHRpZiAoY291bnREZWxldGUgIT09IDAgJiYgY291bnRJbnNlcnQgIT09IDApIHtcblxuICBcdFx0XHRcdFx0XHRcdC8vIEZhY3RvciBvdXQgYW55IGNvbW1vbiBwcmVmaXhlcy5cbiAgXHRcdFx0XHRcdFx0XHRjb21tb25sZW5ndGggPSB0aGlzLmRpZmZDb21tb25QcmVmaXgodGV4dEluc2VydCwgdGV4dERlbGV0ZSk7XG4gIFx0XHRcdFx0XHRcdFx0aWYgKGNvbW1vbmxlbmd0aCAhPT0gMCkge1xuICBcdFx0XHRcdFx0XHRcdFx0aWYgKHBvaW50ZXIgLSBjb3VudERlbGV0ZSAtIGNvdW50SW5zZXJ0ID4gMCAmJiBkaWZmc1twb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydCAtIDFdWzBdID09PSBESUZGX0VRVUFMKSB7XG4gIFx0XHRcdFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgLSBjb3VudERlbGV0ZSAtIGNvdW50SW5zZXJ0IC0gMV1bMV0gKz0gdGV4dEluc2VydC5zdWJzdHJpbmcoMCwgY29tbW9ubGVuZ3RoKTtcbiAgXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZSgwLCAwLCBbRElGRl9FUVVBTCwgdGV4dEluc2VydC5zdWJzdHJpbmcoMCwgY29tbW9ubGVuZ3RoKV0pO1xuICBcdFx0XHRcdFx0XHRcdFx0XHRwb2ludGVyKys7XG4gIFx0XHRcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRcdFx0XHR0ZXh0SW5zZXJ0ID0gdGV4dEluc2VydC5zdWJzdHJpbmcoY29tbW9ubGVuZ3RoKTtcbiAgXHRcdFx0XHRcdFx0XHRcdHRleHREZWxldGUgPSB0ZXh0RGVsZXRlLnN1YnN0cmluZyhjb21tb25sZW5ndGgpO1xuICBcdFx0XHRcdFx0XHRcdH1cblxuICBcdFx0XHRcdFx0XHRcdC8vIEZhY3RvciBvdXQgYW55IGNvbW1vbiBzdWZmaXhpZXMuXG4gIFx0XHRcdFx0XHRcdFx0Y29tbW9ubGVuZ3RoID0gdGhpcy5kaWZmQ29tbW9uU3VmZml4KHRleHRJbnNlcnQsIHRleHREZWxldGUpO1xuICBcdFx0XHRcdFx0XHRcdGlmIChjb21tb25sZW5ndGggIT09IDApIHtcbiAgXHRcdFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXJdWzFdID0gdGV4dEluc2VydC5zdWJzdHJpbmcodGV4dEluc2VydC5sZW5ndGggLSBjb21tb25sZW5ndGgpICsgZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0XHRcdFx0XHR0ZXh0SW5zZXJ0ID0gdGV4dEluc2VydC5zdWJzdHJpbmcoMCwgdGV4dEluc2VydC5sZW5ndGggLSBjb21tb25sZW5ndGgpO1xuICBcdFx0XHRcdFx0XHRcdFx0dGV4dERlbGV0ZSA9IHRleHREZWxldGUuc3Vic3RyaW5nKDAsIHRleHREZWxldGUubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKTtcbiAgXHRcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRcdH1cblxuICBcdFx0XHRcdFx0XHQvLyBEZWxldGUgdGhlIG9mZmVuZGluZyByZWNvcmRzIGFuZCBhZGQgdGhlIG1lcmdlZCBvbmVzLlxuICBcdFx0XHRcdFx0XHRpZiAoY291bnREZWxldGUgPT09IDApIHtcbiAgXHRcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciAtIGNvdW50SW5zZXJ0LCBjb3VudERlbGV0ZSArIGNvdW50SW5zZXJ0LCBbRElGRl9JTlNFUlQsIHRleHRJbnNlcnRdKTtcbiAgXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjb3VudEluc2VydCA9PT0gMCkge1xuICBcdFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyIC0gY291bnREZWxldGUsIGNvdW50RGVsZXRlICsgY291bnRJbnNlcnQsIFtESUZGX0RFTEVURSwgdGV4dERlbGV0ZV0pO1xuICBcdFx0XHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydCwgY291bnREZWxldGUgKyBjb3VudEluc2VydCwgW0RJRkZfREVMRVRFLCB0ZXh0RGVsZXRlXSwgW0RJRkZfSU5TRVJULCB0ZXh0SW5zZXJ0XSk7XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdFx0cG9pbnRlciA9IHBvaW50ZXIgLSBjb3VudERlbGV0ZSAtIGNvdW50SW5zZXJ0ICsgKGNvdW50RGVsZXRlID8gMSA6IDApICsgKGNvdW50SW5zZXJ0ID8gMSA6IDApICsgMTtcbiAgXHRcdFx0XHRcdH0gZWxzZSBpZiAocG9pbnRlciAhPT0gMCAmJiBkaWZmc1twb2ludGVyIC0gMV1bMF0gPT09IERJRkZfRVFVQUwpIHtcblxuICBcdFx0XHRcdFx0XHQvLyBNZXJnZSB0aGlzIGVxdWFsaXR5IHdpdGggdGhlIHByZXZpb3VzIG9uZS5cbiAgXHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciAtIDFdWzFdICs9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciwgMSk7XG4gIFx0XHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0XHRwb2ludGVyKys7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRjb3VudEluc2VydCA9IDA7XG4gIFx0XHRcdFx0XHRjb3VudERlbGV0ZSA9IDA7XG4gIFx0XHRcdFx0XHR0ZXh0RGVsZXRlID0gXCJcIjtcbiAgXHRcdFx0XHRcdHRleHRJbnNlcnQgPSBcIlwiO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHRcdGlmIChkaWZmc1tkaWZmcy5sZW5ndGggLSAxXVsxXSA9PT0gXCJcIikge1xuICBcdFx0XHRkaWZmcy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBkdW1teSBlbnRyeSBhdCB0aGUgZW5kLlxuICBcdFx0fVxuXG4gIFx0XHQvLyBTZWNvbmQgcGFzczogbG9vayBmb3Igc2luZ2xlIGVkaXRzIHN1cnJvdW5kZWQgb24gYm90aCBzaWRlcyBieSBlcXVhbGl0aWVzXG4gIFx0XHQvLyB3aGljaCBjYW4gYmUgc2hpZnRlZCBzaWRld2F5cyB0byBlbGltaW5hdGUgYW4gZXF1YWxpdHkuXG4gIFx0XHQvLyBlLmc6IEE8aW5zPkJBPC9pbnM+QyAtPiA8aW5zPkFCPC9pbnM+QUNcbiAgXHRcdGNoYW5nZXMgPSBmYWxzZTtcbiAgXHRcdHBvaW50ZXIgPSAxO1xuXG4gIFx0XHQvLyBJbnRlbnRpb25hbGx5IGlnbm9yZSB0aGUgZmlyc3QgYW5kIGxhc3QgZWxlbWVudCAoZG9uJ3QgbmVlZCBjaGVja2luZykuXG4gIFx0XHR3aGlsZSAocG9pbnRlciA8IGRpZmZzLmxlbmd0aCAtIDEpIHtcbiAgXHRcdFx0aWYgKGRpZmZzW3BvaW50ZXIgLSAxXVswXSA9PT0gRElGRl9FUVVBTCAmJiBkaWZmc1twb2ludGVyICsgMV1bMF0gPT09IERJRkZfRVFVQUwpIHtcblxuICBcdFx0XHRcdGRpZmZQb2ludGVyID0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0cG9zaXRpb24gPSBkaWZmUG9pbnRlci5zdWJzdHJpbmcoZGlmZlBvaW50ZXIubGVuZ3RoIC0gZGlmZnNbcG9pbnRlciAtIDFdWzFdLmxlbmd0aCk7XG5cbiAgXHRcdFx0XHQvLyBUaGlzIGlzIGEgc2luZ2xlIGVkaXQgc3Vycm91bmRlZCBieSBlcXVhbGl0aWVzLlxuICBcdFx0XHRcdGlmIChwb3NpdGlvbiA9PT0gZGlmZnNbcG9pbnRlciAtIDFdWzFdKSB7XG5cbiAgXHRcdFx0XHRcdC8vIFNoaWZ0IHRoZSBlZGl0IG92ZXIgdGhlIHByZXZpb3VzIGVxdWFsaXR5LlxuICBcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlcl1bMV0gPSBkaWZmc1twb2ludGVyIC0gMV1bMV0gKyBkaWZmc1twb2ludGVyXVsxXS5zdWJzdHJpbmcoMCwgZGlmZnNbcG9pbnRlcl1bMV0ubGVuZ3RoIC0gZGlmZnNbcG9pbnRlciAtIDFdWzFdLmxlbmd0aCk7XG4gIFx0XHRcdFx0XHRkaWZmc1twb2ludGVyICsgMV1bMV0gPSBkaWZmc1twb2ludGVyIC0gMV1bMV0gKyBkaWZmc1twb2ludGVyICsgMV1bMV07XG4gIFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciAtIDEsIDEpO1xuICBcdFx0XHRcdFx0Y2hhbmdlcyA9IHRydWU7XG4gIFx0XHRcdFx0fSBlbHNlIGlmIChkaWZmUG9pbnRlci5zdWJzdHJpbmcoMCwgZGlmZnNbcG9pbnRlciArIDFdWzFdLmxlbmd0aCkgPT09IGRpZmZzW3BvaW50ZXIgKyAxXVsxXSkge1xuXG4gIFx0XHRcdFx0XHQvLyBTaGlmdCB0aGUgZWRpdCBvdmVyIHRoZSBuZXh0IGVxdWFsaXR5LlxuICBcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciAtIDFdWzFdICs9IGRpZmZzW3BvaW50ZXIgKyAxXVsxXTtcbiAgXHRcdFx0XHRcdGRpZmZzW3BvaW50ZXJdWzFdID0gZGlmZnNbcG9pbnRlcl1bMV0uc3Vic3RyaW5nKGRpZmZzW3BvaW50ZXIgKyAxXVsxXS5sZW5ndGgpICsgZGlmZnNbcG9pbnRlciArIDFdWzFdO1xuICBcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIgKyAxLCAxKTtcbiAgXHRcdFx0XHRcdGNoYW5nZXMgPSB0cnVlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRwb2ludGVyKys7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIElmIHNoaWZ0cyB3ZXJlIG1hZGUsIHRoZSBkaWZmIG5lZWRzIHJlb3JkZXJpbmcgYW5kIGFub3RoZXIgc2hpZnQgc3dlZXAuXG4gIFx0XHRpZiAoY2hhbmdlcykge1xuICBcdFx0XHR0aGlzLmRpZmZDbGVhbnVwTWVyZ2UoZGlmZnMpO1xuICBcdFx0fVxuICBcdH07XG5cbiAgXHRyZXR1cm4gZnVuY3Rpb24gKG8sIG4pIHtcbiAgXHRcdHZhciBkaWZmLCBvdXRwdXQsIHRleHQ7XG4gIFx0XHRkaWZmID0gbmV3IERpZmZNYXRjaFBhdGNoKCk7XG4gIFx0XHRvdXRwdXQgPSBkaWZmLkRpZmZNYWluKG8sIG4pO1xuICBcdFx0ZGlmZi5kaWZmQ2xlYW51cEVmZmljaWVuY3kob3V0cHV0KTtcbiAgXHRcdHRleHQgPSBkaWZmLmRpZmZQcmV0dHlIdG1sKG91dHB1dCk7XG5cbiAgXHRcdHJldHVybiB0ZXh0O1xuICBcdH07XG4gIH0oKTtcblxufSgoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpbnRlcnBvbGF0aW9uKGV4cHIsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogMCAvKiBJbnRlcnBvbGF0aW9uICovLFxyXG4gICAgICAgIGV4cHIsXHJcbiAgICAgICAgc3BhbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbjtcclxuZnVuY3Rpb24gaWQobmFtZSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAyIC8qIElkZW50aWZpZXIgKi8sXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBzcGFuLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmlkID0gaWQ7XHJcbmZ1bmN0aW9uIHBhdGgoaGVhZCwgdGFpbCA9IFtdKSB7XHJcbiAgICBpZiAodGFpbC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogMSAvKiBQYXRoICovLFxyXG4gICAgICAgICAgICBoZWFkLFxyXG4gICAgICAgICAgICB0YWlsLFxyXG4gICAgICAgICAgICBzcGFuOiB7IHN0YXJ0OiBoZWFkLnNwYW4uc3RhcnQsIGVuZDogdGFpbFt0YWlsLmxlbmd0aCAtIDFdLnNwYW4uZW5kIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEgLyogUGF0aCAqLyxcclxuICAgICAgICAgICAgaGVhZCxcclxuICAgICAgICAgICAgc3BhbjogaGVhZC5zcGFuLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5wYXRoID0gcGF0aDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29tYmluYXRvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC9jb21iaW5hdG9yc1wiKSk7XHJcbmV4cG9ydHMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcclxudmFyIGxvZ2dlcl8xID0gcmVxdWlyZShcIi4vcmVhZC9sb2dnZXJcIik7XHJcbmV4cG9ydHMuTG9nZ2VyID0gbG9nZ2VyXzEuTG9nZ2VyO1xyXG5jb25zdCBtdWx0aSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL211bHRpXCIpKTtcclxuZXhwb3J0cy5tdWx0aSA9IG11bHRpO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zbmlwcGV0XCIpKTtcclxuY29uc3QgYXN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzdFwiKSk7XHJcbmV4cG9ydHMuYXN0ID0gYXN0O1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL2hic1wiKSk7XHJcbmNvbnN0IHRva2VucyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2Vuc1wiKSk7XHJcbmV4cG9ydHMudG9rZW5zID0gdG9rZW5zO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9zcGFuXCIpKTtcclxuY29uc3QgYiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2VuLWJ1aWxkZXJcIikpO1xyXG5leHBvcnRzLmIgPSBiO1xyXG5jb25zdCB1dGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3V0aWxzXCIpKTtcclxuZXhwb3J0cy51dGlscyA9IHV0aWxzO1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3NlcmlhbGl6ZVwiKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3JlYWQvcmVhZFwiKSk7XHJcbmZ1bmN0aW9uIHBhcnNlKF9pbnB1dCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gY29tYmluYXRvcihmdW5jKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwid3JhcHBlclwiLFxyXG4gICAgICAgIGtpbmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZShmdW5jKCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGFueV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL2FueVwiKSk7XHJcbmNvbnN0IHBhdHRlcm5fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9wYXR0ZXJuXCIpKTtcclxuY29uc3Qgc2VxXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvc2VxXCIpKTtcclxuY29uc3QgdGFnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvdGFnXCIpKTtcclxuY29uc3QgdGFrZV91bnRpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzL3Rha2UtdW50aWxcIikpO1xyXG5jb25zdCB0YWtlX3doaWxlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvdGFrZS13aGlsZVwiKSk7XHJcbmNvbnN0IHBpY2tfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9waWNrXCIpKTtcclxuY29uc3QgbWF5YmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21iaW5hdG9ycy9tYXliZVwiKSk7XHJcbmV4cG9ydHMudGFnID0gKHNvdXJjZSkgPT4gbmV3IHRhZ18xLmRlZmF1bHQoc291cmNlKTtcclxuZXhwb3J0cy5wYXR0ZXJuID0gKHBhdCwgbmFtZSkgPT4gbmV3IHBhdHRlcm5fMS5kZWZhdWx0KG5hbWUsIHBhdCk7XHJcbmV4cG9ydHMudGFrZVVudGlsID0gKHBhdCkgPT4gbmV3IHRha2VfdW50aWxfMS5kZWZhdWx0KHBhdCk7XHJcbmV4cG9ydHMudGFrZVdoaWxlID0gKHBhdCkgPT4gbmV3IHRha2Vfd2hpbGVfMS5kZWZhdWx0KHBhdCk7XHJcbmV4cG9ydHMuc2VxID0gKGRlc2MsIC4uLmNvbWJpbmF0b3JzKSA9PiBuZXcgc2VxXzEuZGVmYXVsdChkZXNjLCBjb21iaW5hdG9ycyk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXHJcbmV4cG9ydHMuYW55ID0gKGRlc2MsIC4uLmNvbWJpbmF0b3JzKSA9PiBuZXcgYW55XzEuZGVmYXVsdChkZXNjLCBjb21iaW5hdG9ycyk7XHJcbmV4cG9ydHMucGljayA9IChjb21iaW5hdG9ycywgY2FsbGJhY2tzKSA9PiBuZXcgcGlja18xLmRlZmF1bHQoY29tYmluYXRvcnMsIGNhbGxiYWNrcyk7XHJcbmV4cG9ydHMubWF5YmUgPSAoYykgPT4gbmV3IG1heWJlXzEuZGVmYXVsdChjKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNsYXNzIEFueSBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZGVzYywgY29tYmluYXRvcnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBhbnkg4oCiICR7dGhpcy5kZXNjfWA7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5jb21iaW5hdG9ycykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY3VycmVudC5pbnZva2UoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImFueVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBbnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbmNsYXNzIEFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBtYXAobWFwcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubWFwKHRoaXMsIG1hcHBlcik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BYnN0cmFjdENvbWJpbmF0b3IgPSBBYnN0cmFjdENvbWJpbmF0b3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zbmlwcGV0XCIpO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi4vYmFzZVwiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcclxuY2xhc3MgU29tZVRva2VuIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb21iaW5hdG9yLCB0eXBlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYHRva2VuICgke3V0aWxzXzEuY29tYmluYXRvck5hbWUodGhpcy5jb21iaW5hdG9yKX0pYDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodGhpcy5jb21iaW5hdG9yLCB7XHJcbiAgICAgICAgICAgIGZvcmNlVHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZVswXSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbjogcmVzdWx0LnZhbHVlWzFdLnNwYW4sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU29tZVRva2VuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgTWF5YmUgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbWJpbmF0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYG1heWJlICR7dGhpcy5jb21iaW5hdG9yLm5hbWV9YDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodGhpcy5jb21iaW5hdG9yKTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbaW5wdXQsIG51bGxdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1heWJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgUGF0dGVybiBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZGVzYywgcGF0dGVybikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBwYXR0ZXJuWyR7dGhpcy5kZXNjfV1gO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IHJlc3QgPSBpbnB1dC5zbGljZVJlc3Q7XHJcbiAgICAgICAgbGV0IG1hdGNoID0gcmVzdC5tYXRjaCh0aGlzLnBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlZCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IGlucHV0LnNsaWNlKG1hdGNoZWQubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJwYXR0ZXJuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQYXR0ZXJuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY2xhc3MgUGljayBleHRlbmRzIGJhc2VfMS5BYnN0cmFjdENvbWJpbmF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoY29tYmluYXRvcnMsIGNhbGxiYWNrcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwicGlja1wiO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICBmb3IgKGxldCBbbmFtZSwgaXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5jb21iaW5hdG9ycykpIHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0UmVzdWx0ID0gY3VycmVudC5pbnZva2UoaXRlbSwgeyBjb250ZXh0OiBuYW1lIH0pO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RSZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IGZpcnN0UmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuY2FsbGJhY2tzW25hbWVdKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImFueVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQaWNrO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY2xhc3MgU2VxIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZXNjLCBjb21iaW5hdG9ycykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYHNlcSDigKIgJHt0aGlzLmRlc2N9YDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICBsZXQgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5jb21iaW5hdG9ycykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY3VycmVudC5pbnZva2UoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIG91dC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBuZXh0LnJlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQucmVzdCwgb3V0XSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU2VxO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgVGFnIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwidGFnXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgbmV4dCA9IGlucHV0LnNsaWNlKHRoaXMuc291cmNlLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKG5leHQuZnJhZ21lbnQgPT09IHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2luZDogXCJlcnJcIiwgc25pcHBldDogaW5wdXQsIHJlYXNvbjogXCJ0YWdcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBUYWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGJhc2VfMSA9IHJlcXVpcmUoXCIuL2Jhc2VcIik7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi8uLi9zbmlwcGV0XCIpO1xyXG5jbGFzcyBUYWtlVW50aWwgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJ0YWtlVW50aWxcIjtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCBuZXh0ID0gaW5wdXQ7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKG5leHQuaXNFT0YoKSB8fCBuZXh0LmlzTWF0Y2godGhpcy5wYXR0ZXJuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGFrZVVudGlsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBiYXNlXzEgPSByZXF1aXJlKFwiLi9iYXNlXCIpO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vLi4vc25pcHBldFwiKTtcclxuY2xhc3MgVGFrZVdoaWxlIGV4dGVuZHMgYmFzZV8xLkFic3RyYWN0Q29tYmluYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwidGFrZVdoaWxlXCI7XHJcbiAgICB9XHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgbmV4dCA9IGlucHV0O1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5leHQuaXNNYXRjaCh0aGlzLnBhdHRlcm4pKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQodGhpcy5wYXR0ZXJuLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcInRha2VXaGlsZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRha2VXaGlsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgYmFzZV8xID0gcmVxdWlyZShcIi4vYmFzZVwiKTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uLy4uL3NuaXBwZXRcIik7XHJcbmNsYXNzIFdyYXAgZXh0ZW5kcyBiYXNlXzEuQWJzdHJhY3RDb21iaW5hdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbWJpbmF0b3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYHdyYXAg4oCiICR7dGhpcy5jb21iaW5hdG9yLm5hbWV9YDtcclxuICAgIH1cclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBpbnB1dC5pbnZva2UodGhpcy5jb21iaW5hdG9yKTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW3Jlc3VsdC52YWx1ZVswXSwgW3Jlc3VsdC52YWx1ZVsxXV1dKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gV3JhcDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbG9nZ2VyXzEgPSByZXF1aXJlKFwiLi9sb2dnZXJcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxubGV0IHRhYmxlID0gW107XHJcbmZ1bmN0aW9uIHJvdyh7IHJlc3VsdCwgYXJyb3csIGNvbWJpbmF0b3IsIGNvbnRleHQsIH0sIGEsIGIpIHtcclxuICAgIGxldCBuYW1lID0gdXRpbHNfMS5jb21iaW5hdG9yTmFtZShjb21iaW5hdG9yKTtcclxuICAgIGlmIChjb250ZXh0KSB7XHJcbiAgICAgICAgbmFtZSA9IGAke2NvbnRleHR9OiAke25hbWV9YDtcclxuICAgIH1cclxuICAgIHRhYmxlLnB1c2goe1xyXG4gICAgICAgIHN0eWxlOiB7IHJlc3VsdCwga2luZDogbG9nZ2VyXzEuY29tYmluYXRvckRlYnVnVHlwZShjb21iaW5hdG9yKSB9LFxyXG4gICAgICAgIGRhdGE6IFthcnJvdywgbmFtZSwgYSwgYl0sXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLnJvdyA9IHJvdztcclxuZnVuY3Rpb24gc25pcHBldFN0eWxlKHN0eWxlKSB7XHJcbiAgICBzd2l0Y2ggKHN0eWxlLnJlc3VsdCkge1xyXG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogIzMzM1wiO1xyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiBncmVlblwiO1xyXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogcmVkXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zbmlwcGV0U3R5bGUgPSBzbmlwcGV0U3R5bGU7XHJcbmZ1bmN0aW9uIGFybVN0eWxlKHN0eWxlKSB7XHJcbiAgICBzd2l0Y2ggKHN0eWxlLnJlc3VsdCkge1xyXG4gICAgICAgIGNhc2UgXCJzdGFydFwiOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0eWxlLmtpbmQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0cmFuc3BhcmVudFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFybVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiAjYmJiXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibm9ybWFsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29sb3I6ICMzMzNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcImNvbG9yOiBncmVlblwiO1xyXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJjb2xvcjogcmVkXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5hcm1TdHlsZSA9IGFybVN0eWxlO1xyXG5mdW5jdGlvbiBwcmludERlYnVnKCkge1xyXG4gICAgZm9yIChsZXQgeyBzdHlsZSwgZGF0YTogW2Fycm93LCBuYW1lLCBhLCBiXSwgfSBvZiB0YWJsZSkge1xyXG4gICAgICAgIGxldCBmaXJzdCA9IGAke2Fycm93fSAlYyR7bmFtZX0lY2AucGFkRW5kKDYwKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2ZpcnN0fSB8ICVjJHtifSVjIHxgLCBhcm1TdHlsZShzdHlsZSksIFwiY29sb3I6ICMzMzNcIiwgc25pcHBldFN0eWxlKHN0eWxlKSwgXCJjb2xvcjogIzMzM1wiLCBhKTtcclxuICAgIH1cclxuICAgIHRhYmxlID0gW107XHJcbn1cclxuZXhwb3J0cy5wcmludERlYnVnID0gcHJpbnREZWJ1ZztcclxubGV0IFRBQiA9IDA7XHJcbmZ1bmN0aW9uIGluZGVudCgpIHtcclxuICAgIFRBQiArPSAxO1xyXG59XHJcbmV4cG9ydHMuaW5kZW50ID0gaW5kZW50O1xyXG5mdW5jdGlvbiBvdXRkZW50KCkge1xyXG4gICAgVEFCIC09IDE7XHJcbn1cclxuZXhwb3J0cy5vdXRkZW50ID0gb3V0ZGVudDtcclxuZnVuY3Rpb24gaW5kZW50V1MoKSB7XHJcbiAgICByZXR1cm4gXCIgXCIucmVwZWF0KFRBQik7XHJcbn1cclxuZXhwb3J0cy5pbmRlbnRXUyA9IGluZGVudFdTO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgbXVsdGlfMSA9IHJlcXVpcmUoXCIuL211bHRpXCIpO1xyXG5jb25zdCByZWFkXzEgPSByZXF1aXJlKFwiLi9yZWFkXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5jb25zdCB3cmFwXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvd3JhcFwiKSk7XHJcbmNvbnN0IHRva2VuXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29tYmluYXRvcnMvaGJzL3Rva2VuXCIpKTtcclxuZXhwb3J0cy50b2tlbiA9IChjb21iaW5hdG9yLCB0eXBlKSA9PiBuZXcgdG9rZW5fMS5kZWZhdWx0KGNvbWJpbmF0b3IsIHR5cGUpO1xyXG5leHBvcnRzLlNJTkdMRV9RVU9URUQgPSBjb21iaW5hdG9yc18xLnNlcShcIlNJTkdMRV9RVU9URURcIiwgY29tYmluYXRvcnNfMS50YWcoYCdgKSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eKFxcXFwnfFteJ10pKi91LCBcInNpbmdsZSBxdW90ZSBib2R5XCIpLCBjb21iaW5hdG9yc18xLnRhZyhgJ2ApKS5tYXAoKFtvcGVuLCBib2R5LCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdHJpbmdUb2tlbih7IGRhdGE6IGJvZHkuc3BhbiwgcXVvdGU6IDAgLyogU2luZ2xlICovIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKSk7XHJcbmV4cG9ydHMuRE9VQkxFX1FVT1RFRCA9IGNvbWJpbmF0b3JzXzEuc2VxKFwiRE9VQkxFX1FVT1RFRFwiLCBjb21iaW5hdG9yc18xLnRhZyhgXCJgKSwgY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eKFxcXFxcInxbXlwiXSkqL3UsIFwiZG91YmxlIHF1b3RlIGJvZHlcIiksIGNvbWJpbmF0b3JzXzEudGFnKGBcImApKS5tYXAoKFtvcGVuLCBib2R5LCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdHJpbmdUb2tlbih7IGRhdGE6IGJvZHkuc3BhbiwgcXVvdGU6IDEgLyogRG91YmxlICovIH0sIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpKSk7XHJcbmV4cG9ydHMuTlVNQkVSID0gY29tYmluYXRvcnNfMS5zZXEoXCJOVU1CRVJcIiwgY29tYmluYXRvcnNfMS5tYXliZShjb21iaW5hdG9yc18xLnRhZyhcIi1cIikpLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bMC05XSsvLCBcImRpZ2l0c1wiKSwgY29tYmluYXRvcnNfMS5tYXliZSh1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcImRlY2ltYWxcIiwgY29tYmluYXRvcnNfMS50YWcoXCIuXCIpLCBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bMC05XSsvLCBcImRpZ2l0c1wiKSksIChbLCB0YWlsXSkgPT4gc25pcHBldF8xLm9rKHRhaWwpKSkpLm1hcCgoW25lZ2F0aXZlLCBoZWFkLCB0YWlsXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLm51bWJlclRva2VuKHtcclxuICAgIGhlYWQ6IGhlYWQuc3BhbixcclxuICAgIHRhaWw6IHRhaWwgPyB0YWlsLnNwYW4gOiBudWxsLFxyXG4gICAgbmVnYXRpdmU6IG5lZ2F0aXZlID8gbmVnYXRpdmUuc3BhbiA6IG51bGwsXHJcbn0sIHNwYW5fMS5yYW5nZShuZWdhdGl2ZSwgaGVhZCwgdGFpbCA/IHRhaWwgOiBudWxsKSkpKTtcclxuZXhwb3J0cy5TUEFDRURfVE9LRU5TID0ge1xyXG4gICAgbmFtZTogXCJTUEFDRURfVE9LRU5TXCIsXHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgb3V0ID0gW107XHJcbiAgICAgICAgbGV0IHRrID0gY29tYmluYXRvcnNfMS5hbnkoXCJ0b2tlblwiLCBleHBvcnRzLndyYXAoZXhwb3J0cy5TRVhQKSwgZXhwb3J0cy53cmFwKGV4cG9ydHMuRE9VQkxFX1FVT1RFRCksIGV4cG9ydHMud3JhcChleHBvcnRzLlNJTkdMRV9RVU9URUQpLCBleHBvcnRzLndyYXAoZXhwb3J0cy5OVU1CRVIpLCBleHBvcnRzLk5BTUVELCBleHBvcnRzLlNJTVBMRV9QQVRILCBleHBvcnRzLndyYXAoZXhwb3J0cy5XUykpO1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGN1cnJlbnQuaW52b2tlKHRrKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgW25leHQsIHRva2Vuc10gPSByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRvayBvZiB0b2tlbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRvaykpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaCguLi50b2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0LnB1c2godG9rKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gbmV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG91dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgICAgICAgICByZWFzb246IFwicHJlc2VudFwiLFxyXG4gICAgICAgICAgICAgICAgc25pcHBldDogaW5wdXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgfSxcclxufTtcclxuZXhwb3J0cy5TSU1QTEVfUEFUSCA9IHtcclxuICAgIG5hbWU6IFwiUEFUSFwiLFxyXG4gICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGlucHV0Lmludm9rZShleHBvcnRzLlNJTVBMRV9IRUFEKTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IFtjdXJyZW50LCBoZWFkXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICBsZXQgb3V0ID0gW2hlYWRdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXN1bHREb3QgPSBjdXJyZW50Lmludm9rZShleHBvcnRzLkRPVCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHREb3Qua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudCwgb3V0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudCA9IHJlc3VsdERvdC52YWx1ZVswXTtcclxuICAgICAgICAgICAgbGV0IG5leHREb3QgPSByZXN1bHREb3QudmFsdWVbMV07XHJcbiAgICAgICAgICAgIGxldCByZXN1bHRNZW1iZXIgPSBjdXJyZW50Lmludm9rZShleHBvcnRzLk1FTUJFUik7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRNZW1iZXIua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE1lbWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50ID0gcmVzdWx0TWVtYmVyLnZhbHVlWzBdO1xyXG4gICAgICAgICAgICBsZXQgbmV4dE1lbWJlciA9IHJlc3VsdE1lbWJlci52YWx1ZVsxXTtcclxuICAgICAgICAgICAgb3V0LnB1c2gobmV4dERvdCwgbmV4dE1lbWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuZXhwb3J0cy5CTE9DSyA9IHtcclxuICAgIG5hbWU6IFwiQkxPQ0tcIixcclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UodXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJCTE9DS1wiLCBleHBvcnRzLk9QRU5fQkxPQ0ssIG11bHRpXzEubWFueShyZWFkXzEuVE9QX0xFVkVMKSwgZXhwb3J0cy5DTE9TRV9CTE9DSyksIChbb3BlbiwgYm9keSwgY2xvc2VdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYmxvY2soeyBvcGVuLCBib2R5LCBjbG9zZSB9KSkpKTtcclxuICAgIH0sXHJcbn07XHJcbmV4cG9ydHMuT1BFTl9CTE9DSyA9IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiT1BFTl9CTE9DS1wiLCBjb21iaW5hdG9yc18xLnRhZyhcInt7I1wiKSwgZXhwb3J0cy5TSU1QTEVfUEFUSCwgZXhwb3J0cy5TUEFDRURfVE9LRU5TLCBjb21iaW5hdG9yc18xLnRhZyhcIn19XCIpKSwgKFtvcGVuLCBwYXRoLCBoZWFkLCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5vcGVuQmxvY2soeyBuYW1lOiBwYXRoLCBoZWFkLCBibG9ja1BhcmFtczogbnVsbCB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSkpO1xyXG5leHBvcnRzLkNMT1NFX0JMT0NLID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJDTE9TRV9CTE9DS1wiLCBjb21iaW5hdG9yc18xLnRhZyhcInt7L1wiKSwgZXhwb3J0cy5TSU1QTEVfUEFUSCwgY29tYmluYXRvcnNfMS50YWcoXCJ9fVwiKSksIChbb3BlbiwgcGF0aCwgY2xvc2VdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuY2xvc2VCbG9jayhwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSkpO1xyXG5leHBvcnRzLklOVEVSUE9MQVRFID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJJTlRFUlBPTEFURVwiLCBjb21iaW5hdG9yc18xLnRhZyhcInt7XCIpLCBleHBvcnRzLlNQQUNFRF9UT0tFTlMsIGNvbWJpbmF0b3JzXzEudGFnKFwifX1cIikpLCAoW29wZW4sIHBhdGgsIGNsb3NlXSkgPT4ge1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS5pbnRlcnBvbGF0ZShwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbn0pO1xyXG5leHBvcnRzLlNFWFAgPSB7XHJcbiAgICBuYW1lOiBcIlNFWFBcIixcclxuICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UodXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJTRVhQXCIsIGNvbWJpbmF0b3JzXzEudGFnKFwiKFwiKSwgZXhwb3J0cy5TUEFDRURfVE9LRU5TLCBjb21iaW5hdG9yc18xLnRhZyhcIilcIikpLCAoW29wZW4sIHBhdGgsIGNsb3NlXSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnNleHAocGF0aCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0sXHJcbn07XHJcbmNvbnN0IElEX1NOSVBQRVQgPSBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15cXHB7SURfU3RhcnR9W1xccHtJRF9Db250aW51ZX0tXSovdSwgXCJJRF9TTklQUEVUXCIpO1xyXG5leHBvcnRzLklEID0gZXhwb3J0cy50b2tlbihJRF9TTklQUEVULCBcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovKTtcclxuZXhwb3J0cy5ET1QgPSBleHBvcnRzLnRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiLlwiKSwgXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLldTID0gZXhwb3J0cy50b2tlbihjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMF0rL3UsIFwiV1NcIiksIFwiV1NcIiAvKiBXUyAqLyk7XHJcbmV4cG9ydHMuRVEgPSBleHBvcnRzLnRva2VuKGNvbWJpbmF0b3JzXzEudGFnKFwiPVwiKSwgXCJFcVwiIC8qIEVxICovKTtcclxuY29uc3QgQVJHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJAaWRcIiwgY29tYmluYXRvcnNfMS50YWcoXCJAXCIpLCBJRF9TTklQUEVUKSwgKFthdCwgaWRdKSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXJnKHNwYW5fMS5yYW5nZShhdCwgaWQpKSkpO1xyXG5leHBvcnRzLndyYXAgPSAoY29tYmluYXRvcikgPT4gbmV3IHdyYXBfMS5kZWZhdWx0KGNvbWJpbmF0b3IpO1xyXG5leHBvcnRzLkVYUFJFU1NJT04gPSBjb21iaW5hdG9yc18xLmFueShcIkVYUFJFU1NJT05cIiwgZXhwb3J0cy5TRVhQLCBleHBvcnRzLlNJTVBMRV9QQVRILCBleHBvcnRzLkRPVUJMRV9RVU9URUQsIGV4cG9ydHMuU0lOR0xFX1FVT1RFRCwgZXhwb3J0cy5OVU1CRVIpO1xyXG5leHBvcnRzLk5BTUVEID0gY29tYmluYXRvcnNfMS5zZXEoXCJOQU1FRFwiLCBleHBvcnRzLklELCBleHBvcnRzLkVRLCBleHBvcnRzLkVYUFJFU1NJT04pO1xyXG5leHBvcnRzLlNJTVBMRV9IRUFEID0gY29tYmluYXRvcnNfMS5hbnkoXCJIRUFEXCIsIEFSRywgZXhwb3J0cy5JRCk7XHJcbi8vIFRPRE86IEFsbG93IGBbXWAgb3Igc3RyaW5nIG1lbWJlcnNcclxuZXhwb3J0cy5NRU1CRVIgPSBleHBvcnRzLklEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JcIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbmNvbnN0IG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZXhwb3J0cy5URVhUID0ge1xyXG4gICAgbmFtZTogXCJURVhUXCIsXHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEudGFrZVVudGlsKFwie3tcIikpO1xyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgW25leHQsIHZhbHVlXSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LCB0b2tlbnNfMS50ZXh0KHZhbHVlLnNwYW4pXSk7XHJcbiAgICB9LFxyXG59O1xyXG4vLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy90b2tlbml6YXRpb24uaHRtbCN0YWctbmFtZS1zdGF0ZVxyXG5leHBvcnRzLlRBR19OQU1FID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW0EtWmEtel1bXi8+XFwwXFxzXSsvdSwgXCJUQUdfTkFNRVwiKSk7XHJcbmV4cG9ydHMuVEFHX05BTUVfVE9LRU4gPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiB1dGlsc18xLm1hcChleHBvcnRzLlRBR19OQU1FLCBzbmlwcGV0ID0+IHNuaXBwZXRfMS5vayhbdG9rZW5zXzEuaWQoc25pcHBldC5zcGFuKV0pKSk7XHJcbmV4cG9ydHMuVEFHX09SX0NPTVBPTkVOVF9OQU1FID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5hbnkoXCJ0YWcgb3IgY29tcG9uZW50IG5hbWVcIiwgaGJzXzEuU0lNUExFX1BBVEgsIGV4cG9ydHMuVEFHX05BTUVfVE9LRU4pKTtcclxuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMTEvV0QtaHRtbDUtMjAxMTAxMTMvdG9rZW5pemF0aW9uLmh0bWwjYmVmb3JlLWF0dHJpYnV0ZS1uYW1lLXN0YXRlXHJcbmV4cG9ydHMuQVRUUklCVVRFX05BTUUgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlxcdTAwMDlcXHUwMDBBXFx1MDAwQ1xcdTAwMjAvPlxcdTAwMDBcIic8PV0uKj8oPz1bXFx1MDAwOVxcdTAwMEFcXHUwMDBDXFx1MDAyMC89PlxcdTAwMDBcIic8XSkvdSwgXCJBVFRSSUJVVEVfTkFNRVwiKSwgbmFtZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEuYXR0ck5hbWUobmFtZS5zcGFuKSkpKTtcclxuZXhwb3J0cy5BUkdfTkFNRSA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQVJHX05BTUVcIiwgY29tYmluYXRvcnNfMS50YWcoXCJAXCIpLCBleHBvcnRzLkFUVFJJQlVURV9OQU1FKSwgKFthdCwgYXR0cl0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hcmdOYW1lKGF0dHIuc3Bhbiwgc3Bhbl8xLnJhbmdlKGF0LnNwYW4sIGF0dHIuc3BhbikpKSkpO1xyXG5leHBvcnRzLkFOWV9BVFRSX05BTUUgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiBjb21iaW5hdG9yc18xLmFueShcIkFOWV9BVFRSX05BTUVcIiwgZXhwb3J0cy5BUkdfTkFNRSwgZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSkpO1xyXG5leHBvcnRzLkRRX1NUUklOR19JTlRFUlBPTEFURSA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IGNvbWJpbmF0b3JzXzEuYW55KFwiRFFfU1RSSU5HX0lOVEVSUE9MQVRFXCIsIGhic18xLklOVEVSUE9MQVRFLCB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnBhdHRlcm4oL15bXlwiXSsvLCBgZHEgdGV4dGApLCB2YWx1ZSA9PiBzbmlwcGV0XzEub2sodG9rZW5zXzEudGV4dCh2YWx1ZS5zcGFuKSkpKSk7XHJcbmV4cG9ydHMuU1FfU1RSSU5HX0lOVEVSUE9MQVRFID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5hbnkoXCJTUV9TVFJJTkdfSU5URVJQT0xBVEVcIiwgaGJzXzEuSU5URVJQT0xBVEUsIHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlteJ10rLywgYHNxIHRleHRgKSwgdmFsdWUgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLnRleHQodmFsdWUuc3BhbikpKSkpO1xyXG5mdW5jdGlvbiBTVFJJTkdfSU5URVJQT0xBVElPTihjKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwiU1RSSU5HX0lOVEVSUE9MQVRJT05cIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0Lmludm9rZSh1dGlsc18xLm1hcChtdWx0aV8xLm1hbnkoYyksIHZhbHVlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5zdHJpbmdJbnRlcnBvbGF0aW9uKHZhbHVlLCBzcGFuXzEucmFuZ2UoLi4udmFsdWUpKSkpKTtcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLlNUUklOR19JTlRFUlBPTEFUSU9OID0gU1RSSU5HX0lOVEVSUE9MQVRJT047XHJcbmV4cG9ydHMuQVRUUklCVVRFX1ZBTFVFID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gY29tYmluYXRvcnNfMS5waWNrKHtcclxuICAgIGludGVycG9sYXRlOiBoYnNfMS5JTlRFUlBPTEFURSxcclxuICAgIGRxOiBjb21iaW5hdG9yc18xLnNlcShcImRxXCIsIGNvbWJpbmF0b3JzXzEudGFnKGBcImApLCBTVFJJTkdfSU5URVJQT0xBVElPTihleHBvcnRzLkRRX1NUUklOR19JTlRFUlBPTEFURSksIGNvbWJpbmF0b3JzXzEudGFnKGBcImApKSxcclxuICAgIHNxOiBjb21iaW5hdG9yc18xLnNlcShcInNxXCIsIGNvbWJpbmF0b3JzXzEudGFnKGAnYCksIFNUUklOR19JTlRFUlBPTEFUSU9OKGV4cG9ydHMuU1FfU1RSSU5HX0lOVEVSUE9MQVRFKSwgY29tYmluYXRvcnNfMS50YWcoYCdgKSksXHJcbiAgICB1bnF1b3RlZDogY29tYmluYXRvcnNfMS5wYXR0ZXJuKC9eW15cXHUwMDA5XFx1MDAwQVxcdTAwMENcXHUwMDIwPlxcMFwiJzw9YF0rL3UsIGB1bnF1b3RlZCBjb250ZW50c2ApLFxyXG59LCB7XHJcbiAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7IHR5cGU6IFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLywgdmFsdWU6IGludGVycG9sYXRlIH0sIGludGVycG9sYXRlLnNwYW4pKSxcclxuICAgIGRxOiAoW29wZW4sIHZhbHVlLCBjbG9zZV0pID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyVmFsdWUoe1xyXG4gICAgICAgIHR5cGU6IFwiRG91YmxlUXVvdGVkXCIgLyogRG91YmxlUXVvdGVkICovLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpLFxyXG4gICAgc3E6IChbb3BlbiwgdmFsdWUsIGNsb3NlXSkgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgdHlwZTogXCJTaW5nbGVRdW90ZWRcIiAvKiBTaW5nbGVRdW90ZWQgKi8sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICB9LCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSksXHJcbiAgICB1bnF1b3RlZDogdmFsdWUgPT4gc25pcHBldF8xLm9rKHRva2Vuc18xLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgdHlwZTogXCJVbnF1b3RlZFwiIC8qIFVucXVvdGVkICovLFxyXG4gICAgICAgIHZhbHVlOiB0b2tlbnNfMS5zdHJpbmdJbnRlcnBvbGF0aW9uKFt0b2tlbnNfMS50ZXh0KHZhbHVlLnNwYW4pXSwgdmFsdWUuc3BhbiksXHJcbiAgICB9LCB2YWx1ZS5zcGFuKSksXHJcbn0pKTtcclxuZXhwb3J0cy5BVFRSSUJVVEUgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiBjb21iaW5hdG9yc18xLnBpY2soe1xyXG4gICAgdmFsdWVkOiBjb21iaW5hdG9yc18xLnNlcShcInZhbHVlZCBhdHRyaWJ1dGVcIiwgZXhwb3J0cy5BTllfQVRUUl9OQU1FLCBoYnNfMS5FUSwgZXhwb3J0cy5BVFRSSUJVVEVfVkFMVUUpLFxyXG4gICAgYmFyZTogZXhwb3J0cy5BVFRSSUJVVEVfTkFNRSxcclxufSwge1xyXG4gICAgdmFsdWVkOiAoW25hbWUsICwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh0b2tlbnNfMS52YWx1ZWRBdHRyKHsgbmFtZSwgdmFsdWUgfSwgc3Bhbl8xLnJhbmdlKG5hbWUsIHZhbHVlKSkpO1xyXG4gICAgfSxcclxuICAgIGJhcmU6IHZhbHVlID0+IHNuaXBwZXRfMS5vayh0b2tlbnNfMS5hdHRyTmFtZSh2YWx1ZS5zcGFuKSksXHJcbn0pKTtcclxuZXhwb3J0cy5BVFRSSUJVVEVTID0gY29tYmluYXRvcl8xLmNvbWJpbmF0b3IoKCkgPT4gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoXCJBVFRSSUJVVEVTXCIsIGhic18xLldTLCBtdWx0aV8xLm1hbnkoY29tYmluYXRvcnNfMS5hbnkoXCJzcGFjZWQgYXR0cmlidXRlXCIsIGhic18xLldTLCBoYnNfMS5JTlRFUlBPTEFURSwgZXhwb3J0cy5BVFRSSUJVVEUpKSksIChbd3MsIGF0dHJzXSkgPT4ge1xyXG4gICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbd3MsIC4uLmF0dHJzXSk7XHJcbn0pKTtcclxuZXhwb3J0cy5TVEFSVF9UQUcgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShcIlNUQVJUX1RBR1wiLCBjb21iaW5hdG9yc18xLnRhZyhcIjxcIiksIGV4cG9ydHMuVEFHX09SX0NPTVBPTkVOVF9OQU1FLCBjb21iaW5hdG9yc18xLm1heWJlKGV4cG9ydHMuQVRUUklCVVRFUyksIGNvbWJpbmF0b3JzXzEubWF5YmUoY29tYmluYXRvcnNfMS50YWcoXCIvXCIpKSwgY29tYmluYXRvcnNfMS50YWcoXCI+XCIpKSwgKFtzdGFydCwgbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nLCBlbmRdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGF0dHJzOiBhdHRycyB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgc2VsZkNsb3Npbmc6IHNlbGZDbG9zaW5nID8gdHJ1ZSA6IHVuZGVmaW5lZCxcclxuICAgIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSkpO1xyXG59KSk7XHJcbmV4cG9ydHMuRU5EX1RBRyA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiRU5EX1RBR1wiLCBjb21iaW5hdG9yc18xLnRhZyhcIjwvXCIpLCBleHBvcnRzLlRBR19PUl9DT01QT05FTlRfTkFNRSwgY29tYmluYXRvcnNfMS5tYXliZShoYnNfMS5XUyksIGNvbWJpbmF0b3JzXzEudGFnKFwiPlwiKSksIChbc3RhcnQsIG5hbWUsIHRyYWlsaW5nLCBlbmRdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmVuZFRhZyh7IG5hbWUsIHRyYWlsaW5nIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSkpO1xyXG59KSk7XHJcbmV4cG9ydHMuQ09NTUVOVCA9IGNvbWJpbmF0b3JfMS5jb21iaW5hdG9yKCgpID0+IHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKFwiQ09NTUVOVFwiLCBjb21iaW5hdG9yc18xLnRhZyhcIjwhLS1cIiksIGNvbWJpbmF0b3JzXzEucGF0dGVybigvXi4qKD89Wy1dWy1dWz5dKS91LCBcImNvbW1lbnQgYm9keVwiKSwgY29tYmluYXRvcnNfMS50YWcoXCItLT5cIikpLCAoW3N0YXJ0LCBkYXRhLCBlbmRdKSA9PiB7XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKHRva2Vuc18xLmNvbW1lbnQoZGF0YS5zcGFuLCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpKTtcclxufSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3QgZGVidWdfMSA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVuYWJsZUxvZ2dpbmcpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUxvZ2dpbmcgPSBlbmFibGVMb2dnaW5nO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGMsIGlucHV0LCB7IGZvcmNlVHJhbnNwYXJlbnQsIGNvbnRleHQsIH0gPSB7fSkge1xyXG4gICAgICAgIGxldCBsb2dnZWQgPSB0aGlzLmVuYWJsZUxvZ2dpbmcgJiYgIWlzVHJhbnNwYXJlbnQoYykgJiYgIWZvcmNlVHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBkZWJ1Z18xLnJvdyh7IHJlc3VsdDogXCJzdGFydFwiLCBhcnJvdzogYCR7ZGVidWdfMS5pbmRlbnRXUygpfS0+YCwgY29tYmluYXRvcjogYywgY29udGV4dCB9LCBcIlwiLCBpbnB1dC5kZWJ1Z1Jlc3QoKSk7XHJcbiAgICAgICAgICAgIGRlYnVnXzEuaW5kZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBjLmludm9rZShpbnB1dCk7XHJcbiAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICBkZWJ1Z18xLm91dGRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgaWYgKGxvZ2dlZCkge1xyXG4gICAgICAgICAgICAgICAgZGVidWdfMS5yb3coe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3c6IGAke2RlYnVnXzEuaW5kZW50V1MoKX08LWAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcjogYyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSwgZm9ybWF0RGVidWdnYWJsZShyZXN1bHQudmFsdWVbMV0pLCByZXN1bHQudmFsdWVbMF0uZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z18xLnJvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3c6IGAke2RlYnVnXzEuaW5kZW50V1MoKX08LWAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tYmluYXRvcjogYyxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0LnJlYXNvbiwgcmVzdWx0LnNuaXBwZXQuZGVidWdSZXN0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Mb2dnZXIgPSBMb2dnZXI7XHJcbmZ1bmN0aW9uIGNvbWJpbmF0b3JEZWJ1Z1R5cGUoYykge1xyXG4gICAgaWYgKHR5cGVvZiBjID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gXCJub3JtYWxcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBjLmtpbmQgfHwgXCJub3JtYWxcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmNvbWJpbmF0b3JEZWJ1Z1R5cGUgPSBjb21iaW5hdG9yRGVidWdUeXBlO1xyXG5mdW5jdGlvbiBpc1RyYW5zcGFyZW50KGMpIHtcclxuICAgIGlmICh0eXBlb2YgYyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGMua2luZCA9PT0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaXNUcmFuc3BhcmVudCA9IGlzVHJhbnNwYXJlbnQ7XHJcbmZ1bmN0aW9uIGZvcm1hdERlYnVnZ2FibGUoZGVidWdnYWJsZSkge1xyXG4gICAgaWYgKHR5cGVvZiBkZWJ1Z2dhYmxlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlYnVnZ2FibGU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWJ1Z2dhYmxlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkZWJ1Z2dhYmxlKSkge1xyXG4gICAgICAgIGlmIChkZWJ1Z2dhYmxlLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgWyR7ZGVidWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgLm1hcChmb3JtYXREZWJ1Z2dhYmxlKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1dYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgWyR7Zm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzBdKX0sICR7Zm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzFdKX0sICR7Zm9ybWF0RGVidWdnYWJsZShkZWJ1Z2dhYmxlWzJdKX0sIC4uLl1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlYnVnZ2FibGUgaW5zdGFuY2VvZiBzbmlwcGV0XzEuU25pcHBldCkge1xyXG4gICAgICAgIHJldHVybiBkZWJ1Z2dhYmxlLmZtdCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vuc18xLmRlYnVnRm9ybWF0VG9rZW4oZGVidWdnYWJsZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5mb3JtYXREZWJ1Z2dhYmxlID0gZm9ybWF0RGVidWdnYWJsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc25pcHBldF8xID0gcmVxdWlyZShcIi4uL3NuaXBwZXRcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gbWFueShzb3VyY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogYG1hbnkg4oCiICR7dXRpbHNfMS5jb21iaW5hdG9yTmFtZShzb3VyY2UpfWAsXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIGxldCBvdXQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCsrID4gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJsaWtlbHkgaW5maW5pdGUgbG9vcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZXJhdGUgPSBjdXJyZW50Lmludm9rZSh1dGlsc18xLnByZXNlbnQoc291cmNlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0ZS5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbY3VycmVudC5yZXN0LCBvdXRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBbbmV4dCwgbWF0Y2hdID0gaXRlcmF0ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXQucHVzaChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1hbnkgPSBtYW55O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JcIik7XHJcbmNvbnN0IGNvbWJpbmF0b3JzXzEgPSByZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKTtcclxuY29uc3QgbG9nZ2VyXzEgPSByZXF1aXJlKFwiLi9sb2dnZXJcIik7XHJcbmNvbnN0IGRlYnVnXzEgPSByZXF1aXJlKFwiLi9kZWJ1Z1wiKTtcclxuY29uc3QgaGJzXzEgPSByZXF1aXJlKFwiLi9oYnNcIik7XHJcbmNvbnN0IGh0bWxfMSA9IHJlcXVpcmUoXCIuL2h0bWxcIik7XHJcbmNvbnN0IG11bHRpXzEgPSByZXF1aXJlKFwiLi9tdWx0aVwiKTtcclxuY29uc3QgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gcmVhZChzb3VyY2UsIHsgbG9nZ2luZyB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHNuaXBwZXRfMS5TbmlwcGV0LmlucHV0KHNvdXJjZSwgbmV3IGxvZ2dlcl8xLkxvZ2dlcihsb2dnaW5nIHx8IGZhbHNlKSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGlucHV0Lmludm9rZSh1dGlsc18xLmNvbXBsZXRlKHV0aWxzXzEubWFwKG11bHRpXzEubWFueShleHBvcnRzLlRPUF9MRVZFTCksIHRva2VucyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEucm9vdCh0b2tlbnMsIHNwYW5fMS5yYW5nZSguLi50b2tlbnMpKSk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICByZXR1cm4gdXRpbHNfMS5tYXBSZXN1bHQocmVzdWx0LCAoWywgdG9rZW5dKSA9PiBzbmlwcGV0XzEub2sodG9rZW4pKTtcclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIGlmIChsb2dnaW5nKSB7XHJcbiAgICAgICAgICAgIGRlYnVnXzEucHJpbnREZWJ1ZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLnJlYWQgPSByZWFkO1xyXG5leHBvcnRzLlRPUF9MRVZFTCA9IHtcclxuICAgIG5hbWU6IFwiVE9QX0xFVkVMXCIsXHJcbiAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQuaW52b2tlKGNvbWJpbmF0b3JzXzEuYW55KFwidG9wIGxldmVsXCIsIGhic18xLkJMT0NLLCBoYnNfMS5JTlRFUlBPTEFURSwgZXhwb3J0cy5DT05URU5UKSk7XHJcbiAgICB9LFxyXG59O1xyXG5leHBvcnRzLkNPTlRFTlQgPSBjb21iaW5hdG9yXzEuY29tYmluYXRvcigoKSA9PiBjb21iaW5hdG9yc18xLmFueShcIkNPTlRFTlRcIiwgaHRtbF8xLkNPTU1FTlQsIGh0bWxfMS5FTkRfVEFHLCBodG1sXzEuU1RBUlRfVEFHLCBodG1sXzEuVEVYVCkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0b2tlbnNfMSA9IHJlcXVpcmUoXCIuL3Rva2Vuc1wiKTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gc2VyaWFsaXplUm9vdChyb290LCBzb3VyY2UpIHtcclxuICAgIGxldCBvdXQgPSBbXTtcclxuICAgIGZvciAobGV0IHRva2VuIG9mIHJvb3QuY2hpbGRyZW4pIHtcclxuICAgICAgICBvdXQucHVzaCguLi5zZXJpYWxpemVOb2RlKHRva2VuLCBzb3VyY2UpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXQuam9pbihcIlwiKTtcclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZVJvb3QgPSBzZXJpYWxpemVSb290O1xyXG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlKHRva2VuLCBzb3VyY2UpIHtcclxuICAgIGlmICh0b2tlbiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBbXCJcIl07XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuICAgICAgICAvLyBsZWFmIHRva2Vuc1xyXG4gICAgICAgIGNhc2UgXCJEb3RcIiAvKiBEb3QgKi86XHJcbiAgICAgICAgY2FzZSBcIkVxXCIgLyogRXEgKi86XHJcbiAgICAgICAgY2FzZSBcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovOlxyXG4gICAgICAgIGNhc2UgXCJXU1wiIC8qIFdTICovOlxyXG4gICAgICAgIGNhc2UgXCJUZXh0XCIgLyogVGV4dCAqLzpcclxuICAgICAgICBjYXNlIFwiQXR0cmlidXRlTmFtZVwiIC8qIEF0dHJpYnV0ZU5hbWUgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbc3Bhbl8xLnNsaWNlKHRva2VuLnNwYW4sIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJTdHJpbmdcIiAvKiBTdHJpbmcgKi86IHtcclxuICAgICAgICAgICAgbGV0IHF1b3RlID0gdG9rZW4ucXVvdGUgPT09IDAgLyogU2luZ2xlICovID8gYCdgIDogYFwiYDtcclxuICAgICAgICAgICAgcmV0dXJuIFtxdW90ZSwgc3Bhbl8xLnNsaWNlKHRva2VuLmRhdGEsIHNvdXJjZSksIHF1b3RlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIk51bWJlclwiIC8qIE51bWJlciAqLzoge1xyXG4gICAgICAgICAgICBsZXQgb3V0ID0gW107XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5uZWdhdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2goc3Bhbl8xLnNsaWNlKHRva2VuLm5lZ2F0aXZlLCBzb3VyY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXQucHVzaChzcGFuXzEuc2xpY2UodG9rZW4uaGVhZCwgc291cmNlKSk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi50YWlsKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaChcIi5cIiwgc3Bhbl8xLnNsaWNlKHRva2VuLnRhaWwsIHNvdXJjZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJBcmdOYW1lXCIgLyogQXJnTmFtZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIkBcIiwgc3Bhbl8xLnNsaWNlKHRva2VuLm5hbWUsIHNvdXJjZSldO1xyXG4gICAgICAgIGNhc2UgXCJBdHRyaWJ1dGVWYWx1ZVwiIC8qIEF0dHJpYnV0ZVZhbHVlICovOlxyXG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplQXR0cmlidXRlVmFsdWUodG9rZW4sIHNvdXJjZSk7XHJcbiAgICAgICAgY2FzZSBcIkFyZ3VtZW50XCIgLyogQXJndW1lbnQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXCJAXCIsIHNwYW5fMS5zbGljZSh0b2tlbi5uYW1lLCBzb3VyY2UpXTtcclxuICAgICAgICBjYXNlIFwiU2V4cFwiIC8qIFNleHAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXCIoXCIsIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFwiKVwiXTtcclxuICAgICAgICBjYXNlIFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcInt7XCIsIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uY2hpbGRyZW4sIHNvdXJjZSksIFwifX1cIl07XHJcbiAgICAgICAgY2FzZSBcIlRydXN0ZWRJbnRlcnBvbGF0ZVwiIC8qIFRydXN0ZWRJbnRlcnBvbGF0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcInt7e1wiLCAuLi5zZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBcIn19fVwiXTtcclxuICAgICAgICBjYXNlIFwiQmxvY2tcIiAvKiBCbG9jayAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4ub3Blbiwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uYm9keSwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4uY2xvc2UsIHNvdXJjZSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSBcIk9wZW5CbG9ja1wiIC8qIE9wZW5CbG9jayAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFwie3sjXCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLmhlYWQsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLmJsb2NrUGFyYW1zLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgXCJ9fVwiLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgXCJCbG9ja1BhcmFtc1wiIC8qIEJsb2NrUGFyYW1zICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiYXMgfFwiLCAuLi5zZXJpYWxpemVMaXN0KHRva2VuLnBhcmFtcywgc291cmNlKSwgXCJ8XCJdO1xyXG4gICAgICAgIGNhc2UgXCJDbG9zZUJsb2NrXCIgLyogQ2xvc2VCbG9jayAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcInt7L1wiLCAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksIFwifX1cIl07XHJcbiAgICAgICAgY2FzZSBcIkNvbW1lbnRcIiAvKiBDb21tZW50ICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiPCEtLVwiLCBzcGFuXzEuc2xpY2UodG9rZW4uZGF0YSwgc291cmNlKSwgXCItLT5cIl07XHJcbiAgICAgICAgY2FzZSBcIlN0YXJ0VGFnXCIgLyogU3RhcnRUYWcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBcIjxcIixcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4ubmFtZSwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZUxpc3QodG9rZW4uYXR0cmlidXRlcywgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIFwiPlwiLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGNhc2UgXCJFbmRUYWdcIiAvKiBFbmRUYWcgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBcIjwvXCIsXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVMaXN0KHRva2VuLm5hbWUsIHNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAuLi5zZXJpYWxpemVOb2RlKHRva2VuLnRyYWlsaW5nLCBzb3VyY2UpLFxyXG4gICAgICAgICAgICAgICAgXCI+XCIsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgY2FzZSBcIlZhbHVlZEF0dHJpYnV0ZVwiIC8qIFZhbHVlZEF0dHJpYnV0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4ubmFtZSwgc291cmNlKSxcclxuICAgICAgICAgICAgICAgIFwiPVwiLFxyXG4gICAgICAgICAgICAgICAgLi4uc2VyaWFsaXplTm9kZSh0b2tlbi52YWx1ZSwgc291cmNlKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBjYXNlIFwiU3RyaW5nSW50ZXJwb2xhdGlvblwiIC8qIFN0cmluZ0ludGVycG9sYXRpb24gKi86XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVMaXN0KHRva2VuLnBhcnRzLCBzb3VyY2UpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLnVucmVhY2hhYmxlKHRva2VuKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnNlcmlhbGl6ZU5vZGUgPSBzZXJpYWxpemVOb2RlO1xyXG5mdW5jdGlvbiBzZXJpYWxpemVBdHRyaWJ1dGVWYWx1ZSh0b2tlbiwgc291cmNlKSB7XHJcbiAgICBpZiAodG9rZW5zXzEuaXNJbnRlcnBvbGF0ZUF0dHJpYnV0ZSh0b2tlbikpIHtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplTm9kZSh0b2tlbi52YWx1ZSwgc291cmNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pLFxyXG4gICAgICAgIC4uLnNlcmlhbGl6ZU5vZGUodG9rZW4udmFsdWUsIHNvdXJjZSksXHJcbiAgICAgICAgc2VyaWFsaXplUXVvdGUodG9rZW4pLFxyXG4gICAgXTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVRdW90ZSh0b2tlbikge1xyXG4gICAgc3dpdGNoICh0b2tlbi52YWx1ZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU2luZ2xlUXVvdGVkXCIgLyogU2luZ2xlUXVvdGVkICovOlxyXG4gICAgICAgICAgICByZXR1cm4gYCdgO1xyXG4gICAgICAgIGNhc2UgXCJEb3VibGVRdW90ZWRcIiAvKiBEb3VibGVRdW90ZWQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBgXCJgO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZUxpc3QodG9rZW5zLCBzb3VyY2UpIHtcclxuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gWy4uLnRva2Vucy5mbGF0TWFwKChjaGlsZCkgPT4gc2VyaWFsaXplTm9kZShjaGlsZCwgc291cmNlKSldO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdG9rZW5zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3Rva2Vuc1wiKSk7XHJcbmNvbnN0IHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5mdW5jdGlvbiBidWlsZFByZXNlbnRUb2tlbnModG9rLCBidWlsZGVyKSB7XHJcbiAgICByZXR1cm4gdG9rLm1hcCh0b2tlbiA9PiB0b2tlbihidWlsZGVyKSk7XHJcbn1cclxuZXhwb3J0cy5idWlsZFByZXNlbnRUb2tlbnMgPSBidWlsZFByZXNlbnRUb2tlbnM7XHJcbmZ1bmN0aW9uIHN0cihuYW1lKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKG5hbWVbMF0pO1xyXG4gICAgICAgIGxldCBkYXRhID0gYnVpbGRlci5jb25zdW1lKG5hbWUuc2xpY2UoMSwgLTEpKTtcclxuICAgICAgICBsZXQgZW5kID0gYnVpbGRlci5jb25zdW1lKG5hbWUuc2xpY2UoLTEpKTtcclxuICAgICAgICBsZXQgcXVvdGUgPSBuYW1lWzBdID09PSBgJ2AgPyAwIC8qIFNpbmdsZSAqLyA6IDEgLyogRG91YmxlICovO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuc3RyaW5nVG9rZW4oeyBkYXRhLCBxdW90ZSB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0ciA9IHN0cjtcclxuZnVuY3Rpb24gaW50KG51bSkge1xyXG4gICAgaWYgKG51bVswXSA9PT0gXCItXCIpIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZWdhdGl2ZSA9IGJ1aWxkZXIuY29uc3VtZShcIi1cIik7XHJcbiAgICAgICAgICAgIGxldCBoZWFkID0gYnVpbGRlci5jb25zdW1lKG51bS5zbGljZSgxKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMubnVtYmVyVG9rZW4oeyBoZWFkLCB0YWlsOiBudWxsLCBuZWdhdGl2ZSB9LCBzcGFuXzEucmFuZ2UobmVnYXRpdmUsIGhlYWQpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaGVhZCA9IGJ1aWxkZXIuY29uc3VtZShudW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLm51bWJlclRva2VuKHsgaGVhZCwgdGFpbDogbnVsbCwgbmVnYXRpdmU6IG51bGwgfSwgaGVhZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmludCA9IGludDtcclxuZnVuY3Rpb24gZGVjaW1hbChudW0pIHtcclxuICAgIGxldCBbLCBuZWdhdGl2ZSwgaGVhZCwgdGFpbF0gPSBudW0ubWF0Y2goL14oLT8pKFswLTldKylcXC4oWzAtOV0rKSQvKTtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgbmVnYXRpdmVTcGFuID0gbmVnYXRpdmUgPyBidWlsZGVyLmNvbnN1bWUoXCItXCIpIDogbnVsbDtcclxuICAgICAgICBsZXQgaGVhZFNwYW4gPSBidWlsZGVyLmNvbnN1bWUoaGVhZCk7XHJcbiAgICAgICAgbGV0IHRhaWxTcGFuID0gbnVsbDtcclxuICAgICAgICBpZiAodGFpbCkge1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUoXCIuXCIpO1xyXG4gICAgICAgICAgICB0YWlsU3BhbiA9IGJ1aWxkZXIuY29uc3VtZSh0YWlsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5udW1iZXJUb2tlbih7XHJcbiAgICAgICAgICAgIGhlYWQ6IGhlYWRTcGFuLFxyXG4gICAgICAgICAgICB0YWlsOiB0YWlsU3BhbixcclxuICAgICAgICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlU3BhbixcclxuICAgICAgICB9LCBzcGFuXzEucmFuZ2UobmVnYXRpdmVTcGFuLCBoZWFkU3BhbiwgdGFpbFNwYW4pKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWNpbWFsID0gZGVjaW1hbDtcclxuZnVuY3Rpb24gaWQobmFtZSkge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4gdG9rZW5zLmlkKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7XHJcbn1cclxuZXhwb3J0cy5pZCA9IGlkO1xyXG5mdW5jdGlvbiBhcmcobmFtZSkge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4gdG9rZW5zLmFyZyhidWlsZGVyLmNvbnN1bWUobmFtZSkpO1xyXG59XHJcbmV4cG9ydHMuYXJnID0gYXJnO1xyXG5leHBvcnRzLmRvdCA9IGJ1aWxkZXIgPT4gdG9rZW5zLmRvdChidWlsZGVyLmNvbnN1bWUoXCIuXCIpKTtcclxuZXhwb3J0cy5lcSA9IGJ1aWxkZXIgPT4gdG9rZW5zLmVxKGJ1aWxkZXIuY29uc3VtZShcIj1cIikpO1xyXG5leHBvcnRzLnNwID0gYnVpbGRlciA9PiB0b2tlbnMud3MoYnVpbGRlci5jb25zdW1lKFwiIFwiKSk7XHJcbmZ1bmN0aW9uIHdzKHNwYWNlKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB0b2tlbnMud3MoYnVpbGRlci5jb25zdW1lKHNwYWNlKSk7XHJcbn1cclxuZXhwb3J0cy53cyA9IHdzO1xyXG5mdW5jdGlvbiBibG9jayh7IG9wZW4gfSwgLi4uYm9keSkge1xyXG4gICAgbGV0IGN1cnJpZWROYW1lID0gdHlwZW9mIG9wZW4ubmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgID8gW2lkKG9wZW4ubmFtZSldXHJcbiAgICAgICAgOiBvcGVuLm5hbWU7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW5Ub2tlbiA9IGJ1aWxkZXIuY29uc3VtZShcInt7I1wiKTtcclxuICAgICAgICBsZXQgbmFtZVRva2VucyA9IGJ1aWxkVG9rZW5zKGN1cnJpZWROYW1lLCBidWlsZGVyKTtcclxuICAgICAgICBsZXQgaGVhZFRva2VucyA9IGJ1aWxkVG9rZW5zKG9wZW4uaGVhZCwgYnVpbGRlcik7XHJcbiAgICAgICAgbGV0IGVuZE9wZW4gPSBidWlsZGVyLmNvbnN1bWUoXCJ9fVwiKTtcclxuICAgICAgICBsZXQgYm9keVRva2VucyA9IGJvZHkubWFwKHRvayA9PiB0b2soYnVpbGRlcikpO1xyXG4gICAgICAgIGxldCBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcInt7L1wiKTtcclxuICAgICAgICBsZXQgY2xvc2VOYW1lID0gYnVpbGRUb2tlbnMoY3VycmllZE5hbWUsIGJ1aWxkZXIpO1xyXG4gICAgICAgIGxldCBlbmRDbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcIn19XCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuYmxvY2soe1xyXG4gICAgICAgICAgICBvcGVuOiB0b2tlbnMub3BlbkJsb2NrKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVUb2tlbnMsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiBoZWFkVG9rZW5zLFxyXG4gICAgICAgICAgICAgICAgYmxvY2tQYXJhbXM6IG51bGwsXHJcbiAgICAgICAgICAgIH0sIHNwYW5fMS5yYW5nZShvcGVuVG9rZW4sIGVuZE9wZW4pKSxcclxuICAgICAgICAgICAgYm9keTogYm9keVRva2VucyxcclxuICAgICAgICAgICAgY2xvc2U6IHRva2Vucy5jbG9zZUJsb2NrKGNsb3NlTmFtZSwgc3Bhbl8xLnJhbmdlKGNsb3NlLCBlbmRDbG9zZSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmJsb2NrID0gYmxvY2s7XHJcbmZ1bmN0aW9uIGJ1aWxkVG9rZW5zKGlucHV0LCBidWlsZGVyKSB7XHJcbiAgICByZXR1cm4gaW5wdXQubWFwKHRvayA9PiB0b2soYnVpbGRlcikpO1xyXG59XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBidWlsZGVyLmNvbnN1bWUoXCJ7e1wiKTtcclxuICAgICAgICBsZXQgb3V0ID0gY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCJ9fVwiKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmludGVycG9sYXRlKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gc3RyaW5nSW50ZXJwb2xhdGUoY2hpbGRyZW4sIHF1b3RlKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBidWlsZGVyLmNvbnN1bWUocXVvdGUpO1xyXG4gICAgICAgIGxldCBvdXQgPSBjaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQoYnVpbGRlcikpO1xyXG4gICAgICAgIGxldCBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShxdW90ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5hdHRyVmFsdWUoe1xyXG4gICAgICAgICAgICB0eXBlOiBxdW90ZVR5cGUocXVvdGUpLFxyXG4gICAgICAgICAgICB2YWx1ZTogdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24ob3V0LCBzcGFuXzEucmFuZ2UoLi4ub3V0KSksXHJcbiAgICAgICAgfSwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc3RyaW5nSW50ZXJwb2xhdGUgPSBzdHJpbmdJbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gYXR0ckludGVycG9sYXRlKC4uLnRva2VuTGlzdCkge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGludGVycG9sYXRlKHRva2VuTGlzdCkoYnVpbGRlcik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5hdHRyVmFsdWUoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi8sXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgIH0sIHZhbHVlLnNwYW4pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmF0dHJJbnRlcnBvbGF0ZSA9IGF0dHJJbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gc2V4cChjaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgIGxldCBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwiKFwiKTtcclxuICAgICAgICBsZXQgb3V0ID0gY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkKGJ1aWxkZXIpKTtcclxuICAgICAgICBsZXQgY2xvc2UgPSBidWlsZGVyLmNvbnN1bWUoXCIpXCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuc2V4cChvdXQsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNleHAgPSBzZXhwO1xyXG5mdW5jdGlvbiB0ZXh0KGNoYXJzKSB7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IG91dCA9IGJ1aWxkZXIuY29uc3VtZShjaGFycyk7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy50ZXh0KG91dCk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudGV4dCA9IHRleHQ7XHJcbmZ1bmN0aW9uIGNvbW1lbnQoY2hhcnMpIHtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSBidWlsZGVyLmNvbnN1bWUoXCI8IS0tXCIpO1xyXG4gICAgICAgIGxldCBkYXRhID0gYnVpbGRlci5jb25zdW1lKGNoYXJzKTtcclxuICAgICAgICBsZXQgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiLS0+XCIpO1xyXG4gICAgICAgIHJldHVybiB0b2tlbnMuY29tbWVudChkYXRhLCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNvbW1lbnQgPSBjb21tZW50O1xyXG5mdW5jdGlvbiBpc1RhZ05hbWUoaW5wdXQpIHtcclxuICAgIHJldHVybiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShpbnB1dCkgfHxcclxuICAgICAgICB0eXBlb2YgaW5wdXQgPT09IFwiZnVuY3Rpb25cIik7XHJcbn1cclxuZnVuY3Rpb24gYnVpbGRUYWdOYW1lKG5hbWUpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XHJcbiAgICAgICAgbGV0IHRva3MgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBwYXJ0IG9mIG5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJ0ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRva3MucHVzaChwYXJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFydFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJAXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva3MucHVzaChhcmcocGFydCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tzLnB1c2goaWQocGFydCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2tzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobmFtZVswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkBcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2FyZyhuYW1lKV07XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbaWQobmFtZSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0VGFnKG9wdGlvbnMpIHtcclxuICAgIGlmIChpc1RhZ05hbWUob3B0aW9ucykpIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IGJ1aWxkZXIuY29uc3VtZShcIjxcIik7XHJcbiAgICAgICAgICAgIGxldCBuYW1lVG9rZW5zID0gYnVpbGRQcmVzZW50VG9rZW5zKGJ1aWxkVGFnTmFtZShvcHRpb25zKSwgYnVpbGRlcik7XHJcbiAgICAgICAgICAgIGxldCBlbmQgPSBidWlsZGVyLmNvbnN1bWUoXCI+XCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnN0YXJ0VGFnKHsgbmFtZTogbmFtZVRva2VucyB9LCBzcGFuXzEucmFuZ2Uoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7IG5hbWUsIGF0dHJzLCBzZWxmQ2xvc2luZyB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPFwiKTtcclxuICAgICAgICAgICAgbGV0IG5hbWVUb2tlbnMgPSBidWlsZFByZXNlbnRUb2tlbnMoYnVpbGRUYWdOYW1lKG5hbWUpLCBidWlsZGVyKTtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gYXR0cnMubWFwKGEgPT4gYShidWlsZGVyKSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5jb25zdW1lKFwiL1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZW5kID0gYnVpbGRlci5jb25zdW1lKFwiPlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vucy5zdGFydFRhZyh7IG5hbWU6IG5hbWVUb2tlbnMsIGF0dHJzOiBjaGlsZHJlbiwgc2VsZkNsb3NpbmcgfSwgc3Bhbl8xLnJhbmdlKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuc3RhcnRUYWcgPSBzdGFydFRhZztcclxuZnVuY3Rpb24gZW5kVGFnKG9wdGlvbnMpIHtcclxuICAgIGxldCB0YWdOYW1lID0gaXNUYWdOYW1lKG9wdGlvbnMpID8gb3B0aW9ucyA6IG9wdGlvbnMubmFtZTtcclxuICAgIGxldCB0cmFpbGluZyA9IGlzVGFnTmFtZShvcHRpb25zKSA/IHVuZGVmaW5lZCA6IG9wdGlvbnMudHJhaWxpbmc7XHJcbiAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKFwiPC9cIik7XHJcbiAgICAgICAgbGV0IHRhZ1Rva2VucyA9IGJ1aWxkUHJlc2VudFRva2VucyhidWlsZFRhZ05hbWUodGFnTmFtZSksIGJ1aWxkZXIpO1xyXG4gICAgICAgIGxldCB0cmFpbGluZ1Rva2VuID0gdHJhaWxpbmcgPyB3cyh0cmFpbGluZykoYnVpbGRlcikgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIuY29uc3VtZShcIj5cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5lbmRUYWcoeyBuYW1lOiB0YWdUb2tlbnMsIHRyYWlsaW5nOiB0cmFpbGluZ1Rva2VuIH0sIHNwYW5fMS5yYW5nZShzdGFydCwgZW5kKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBhcmdOYW1lKG5hbWUpIHtcclxuICAgIHJldHVybiBidWlsZGVyID0+IHtcclxuICAgICAgICBsZXQgc3RhcnRTcGFuID0gYnVpbGRlci5jb25zdW1lKG5hbWVbMF0pO1xyXG4gICAgICAgIGxldCBuYW1lU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShuYW1lLnNsaWNlKDEpKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5zLmFyZ05hbWUobmFtZVNwYW4sIHNwYW5fMS5yYW5nZShzdGFydFNwYW4sIG5hbWVTcGFuKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXJnTmFtZSA9IGFyZ05hbWU7XHJcbmZ1bmN0aW9uIGF0dHIob3B0aW9ucykge1xyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmFtZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnMuYXR0ck5hbWUobmFtZVNwYW4pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYnVpbGRlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCB7IG5hbWUsIHZhbHVlOiByYXdWYWx1ZSB9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gYnVpbGRlci5wb3M7XHJcbiAgICAgICAgICAgIGxldCBuYW1lVG9rZW4gPSB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgPyB0b2tlbnMuYXR0ck5hbWUoYnVpbGRlci5jb25zdW1lKG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgOiBuYW1lKGJ1aWxkZXIpO1xyXG4gICAgICAgICAgICBidWlsZGVyLmNvbnN1bWUoXCI9XCIpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVUb2tlbjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByYXdWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyYXdWYWx1ZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYFwiYDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVTdGFydCA9IGJ1aWxkZXIuY29uc3VtZShgXCJgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShyYXdWYWx1ZS5zbGljZSgxLCAtMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXVvdGVFbmQgPSBidWlsZGVyLmNvbnN1bWUoYFwiYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkRvdWJsZVF1b3RlZFwiIC8qIERvdWJsZVF1b3RlZCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzcGFuXzEucmFuZ2UocXVvdGVTdGFydCwgcXVvdGVFbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgYCdgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxdW90ZVN0YXJ0ID0gYnVpbGRlci5jb25zdW1lKGAnYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZVNwYW4gPSBidWlsZGVyLmNvbnN1bWUocmF3VmFsdWUuc2xpY2UoMSwgLTEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHF1b3RlRW5kID0gYnVpbGRlci5jb25zdW1lKGAnYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNpbmdsZVF1b3RlZFwiIC8qIFNpbmdsZVF1b3RlZCAqLyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcnBvbGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzcGFuXzEucmFuZ2UocXVvdGVTdGFydCwgcXVvdGVFbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlU3BhbiA9IGJ1aWxkZXIuY29uc3VtZShyYXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0aW9uID0gdG9rZW5zLnN0cmluZ0ludGVycG9sYXRpb24oW3Rva2Vucy50ZXh0KHZhbHVlU3BhbildLCB2YWx1ZVNwYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gdG9rZW5zLmF0dHJWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlVucXVvdGVkXCIgLyogVW5xdW90ZWQgKi8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW50ZXJwb2xhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTcGFuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVRva2VuID0gcmF3VmFsdWUoYnVpbGRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zLnZhbHVlZEF0dHIoeyBuYW1lOiBuYW1lVG9rZW4sIHZhbHVlOiB2YWx1ZVRva2VuIH0sIHsgc3RhcnQsIGVuZCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuYXR0ciA9IGF0dHI7XHJcbmZ1bmN0aW9uIHF1b3RlVHlwZShxdW90ZSkge1xyXG4gICAgc3dpdGNoIChxdW90ZSkge1xyXG4gICAgICAgIGNhc2UgYFwiYDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiRG91YmxlUXVvdGVkXCIgLyogRG91YmxlUXVvdGVkICovO1xyXG4gICAgICAgIGNhc2UgYCdgOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJTaW5nbGVRdW90ZWRcIiAvKiBTaW5nbGVRdW90ZWQgKi87XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiVW5xdW90ZWRcIiAvKiBVbnF1b3RlZCAqLztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuKSB7XHJcbiAgICBsZXQgYnVpbGRlciA9IG5ldyBUb2tlbkJ1aWxkZXIoKTtcclxuICAgIGxldCBzdGFydCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgbGV0IG91dCA9IGNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZChidWlsZGVyKSk7XHJcbiAgICBsZXQgZW5kID0gYnVpbGRlci5wb3M7XHJcbiAgICByZXR1cm4geyByb290OiB0b2tlbnMucm9vdChvdXQsIHNwYW5fMS5zcGFuKHN0YXJ0LCBlbmQpKSwgc291cmNlOiBidWlsZGVyLnNvdXJjZSB9O1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbmNsYXNzIFRva2VuQnVpbGRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgY29uc3VtZShjaGFycykge1xyXG4gICAgICAgIHRoaXMub3V0cHV0ICs9IGNoYXJzO1xyXG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMucG9zICs9IGNoYXJzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kOiB0aGlzLnBvcyB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvdXJjZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRwdXQ7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3Qgc3Bhbl8xID0gcmVxdWlyZShcIi4uL3NwYW5cIik7XHJcbmZ1bmN0aW9uIGxlYWYodHlwZSkge1xyXG4gICAgcmV0dXJuIChzcGFuKSA9PiAoeyB0eXBlLCBzcGFuIH0pO1xyXG59XHJcbmV4cG9ydHMubGVhZiA9IGxlYWY7XHJcbmV4cG9ydHMuaWQgPSBsZWFmKFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi8pO1xyXG5leHBvcnRzLmRvdCA9IGxlYWYoXCJEb3RcIiAvKiBEb3QgKi8pO1xyXG5leHBvcnRzLmVxID0gbGVhZihcIkVxXCIgLyogRXEgKi8pO1xyXG5leHBvcnRzLndzID0gbGVhZihcIldTXCIgLyogV1MgKi8pO1xyXG5leHBvcnRzLnRleHQgPSBsZWFmKFwiVGV4dFwiIC8qIFRleHQgKi8pO1xyXG5leHBvcnRzLmF0dHJOYW1lID0gbGVhZihcIkF0dHJpYnV0ZU5hbWVcIiAvKiBBdHRyaWJ1dGVOYW1lICovKTtcclxuZnVuY3Rpb24gc3RyaW5nVG9rZW4oeyBkYXRhLCBxdW90ZSB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU3RyaW5nXCIgLyogU3RyaW5nICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBxdW90ZSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdHJpbmdUb2tlbiA9IHN0cmluZ1Rva2VuO1xyXG5mdW5jdGlvbiBudW1iZXJUb2tlbih7IGhlYWQsIHRhaWwsIG5lZ2F0aXZlLCB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiTnVtYmVyXCIgLyogTnVtYmVyICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgbmVnYXRpdmUsXHJcbiAgICAgICAgaGVhZCxcclxuICAgICAgICB0YWlsLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm51bWJlclRva2VuID0gbnVtYmVyVG9rZW47XHJcbmZ1bmN0aW9uIGNvbW1lbnQoZGF0YSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkNvbW1lbnRcIiAvKiBDb21tZW50ICovLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgc3BhbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21tZW50ID0gY29tbWVudDtcclxuZnVuY3Rpb24gYXJnKHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBcmd1bWVudFwiIC8qIEFyZ3VtZW50ICovLFxyXG4gICAgICAgIG5hbWU6IHsgc3RhcnQ6IHNwYW4uc3RhcnQgKyAxLCBlbmQ6IHNwYW4uZW5kIH0sXHJcbiAgICAgICAgc3BhbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmZ1bmN0aW9uIGJsb2NrKHsgb3BlbiwgYm9keSwgY2xvc2UgfSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkJsb2NrXCIgLyogQmxvY2sgKi8sXHJcbiAgICAgICAgc3Bhbjogc3Bhbl8xLnJhbmdlKG9wZW4uc3BhbiwgY2xvc2Uuc3BhbiksXHJcbiAgICAgICAgb3BlbixcclxuICAgICAgICBib2R5LFxyXG4gICAgICAgIGNsb3NlLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmJsb2NrID0gYmxvY2s7XHJcbmZ1bmN0aW9uIG9wZW5CbG9jayh7IG5hbWUsIGhlYWQsIGJsb2NrUGFyYW1zIH0sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJPcGVuQmxvY2tcIiAvKiBPcGVuQmxvY2sgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGhlYWQsXHJcbiAgICAgICAgYmxvY2tQYXJhbXM6IGJsb2NrUGFyYW1zXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJCbG9ja1BhcmFtc1wiIC8qIEJsb2NrUGFyYW1zICovLFxyXG4gICAgICAgICAgICAgICAgc3Bhbjogc3Bhbl8xLnJhbmdlKC4uLmJsb2NrUGFyYW1zKSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYmxvY2tQYXJhbXMsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBudWxsLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm9wZW5CbG9jayA9IG9wZW5CbG9jaztcclxuZnVuY3Rpb24gY2xvc2VCbG9jayhuYW1lLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiQ2xvc2VCbG9ja1wiIC8qIENsb3NlQmxvY2sgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBuYW1lLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmNsb3NlQmxvY2sgPSBjbG9zZUJsb2NrO1xyXG5mdW5jdGlvbiBhcmdOYW1lKG5hbWUsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBcmdOYW1lXCIgLyogQXJnTmFtZSAqLyxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXJnTmFtZSA9IGFyZ05hbWU7XHJcbmZ1bmN0aW9uIHN0cmluZ0ludGVycG9sYXRpb24ocGFydHMsIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTdHJpbmdJbnRlcnBvbGF0aW9uXCIgLyogU3RyaW5nSW50ZXJwb2xhdGlvbiAqLyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIHBhcnRzLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnN0cmluZ0ludGVycG9sYXRpb24gPSBzdHJpbmdJbnRlcnBvbGF0aW9uO1xyXG5mdW5jdGlvbiBpc0ludGVycG9sYXRlQXR0cmlidXRlKGlucHV0KSB7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWVUeXBlID09PSBcIkludGVycG9sYXRlXCIgLyogSW50ZXJwb2xhdGUgKi87XHJcbn1cclxuZXhwb3J0cy5pc0ludGVycG9sYXRlQXR0cmlidXRlID0gaXNJbnRlcnBvbGF0ZUF0dHJpYnV0ZTtcclxuZnVuY3Rpb24gYXR0clZhbHVlKHsgdHlwZSwgdmFsdWUgfSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkF0dHJpYnV0ZVZhbHVlXCIgLyogQXR0cmlidXRlVmFsdWUgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICB2YWx1ZVR5cGU6IHR5cGUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuYXR0clZhbHVlID0gYXR0clZhbHVlO1xyXG5mdW5jdGlvbiB2YWx1ZWRBdHRyKHsgbmFtZSwgdmFsdWUgfSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIlZhbHVlZEF0dHJpYnV0ZVwiIC8qIFZhbHVlZEF0dHJpYnV0ZSAqLyxcclxuICAgICAgICBzcGFuLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudmFsdWVkQXR0ciA9IHZhbHVlZEF0dHI7XHJcbmZ1bmN0aW9uIHN0YXJ0VGFnKHsgbmFtZSwgYXR0cnMsIHNlbGZDbG9zaW5nIH0sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJTdGFydFRhZ1wiIC8qIFN0YXJ0VGFnICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBhdHRyaWJ1dGVzOiBhdHRycyB8fCBbXSxcclxuICAgICAgICBzZWxmQ2xvc2luZyxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zdGFydFRhZyA9IHN0YXJ0VGFnO1xyXG5mdW5jdGlvbiBlbmRUYWcoeyBuYW1lLCB0cmFpbGluZyB9LCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiRW5kVGFnXCIgLyogRW5kVGFnICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgdHJhaWxpbmc6IHRyYWlsaW5nID8gdHJhaWxpbmcgOiBudWxsLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZW5kVGFnID0gZW5kVGFnO1xyXG5mdW5jdGlvbiBzZXhwKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU2V4cFwiIC8qIFNleHAgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXhwID0gc2V4cDtcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gdHJ1c3RlZEludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudHJ1c3RlZEludGVycG9sYXRlID0gdHJ1c3RlZEludGVycG9sYXRlO1xyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiUm9vdFwiIC8qIFJvb3QgKi8sXHJcbiAgICAgICAgc3BhbixcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5yb290ID0gcm9vdDtcclxuZnVuY3Rpb24gZGVidWdGb3JtYXRUb2tlbih0b2tlbikge1xyXG4gICAgcmV0dXJuIGA8dG9rZW46JHt0b2tlbi50eXBlfT5gO1xyXG59XHJcbmV4cG9ydHMuZGVidWdGb3JtYXRUb2tlbiA9IGRlYnVnRm9ybWF0VG9rZW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiBtYXBSZXN1bHQocmVzdWx0LCBjYWxsYmFjaykge1xyXG4gICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xyXG59XHJcbmV4cG9ydHMubWFwUmVzdWx0ID0gbWFwUmVzdWx0O1xyXG5mdW5jdGlvbiBtYXAoY29tYmluYXRvciwgbWFwcGVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IGNvbWJpbmF0b3JOYW1lKGNvbWJpbmF0b3IpLFxyXG4gICAgICAgIGludm9rZShpbnB1dCkge1xyXG4gICAgICAgICAgICBsZXQgZmlyc3QgPSBpbnB1dC5pbnZva2UoY29tYmluYXRvciwgeyBmb3JjZVRyYW5zcGFyZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBpZiAoZmlyc3Qua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBbbmV4dCwgdmFsdWVdID0gZmlyc3QudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBtYXBwZXIodmFsdWUsIG5leHQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dCwgcmVzdWx0LnZhbHVlXSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYXAgPSBtYXA7XHJcbmZ1bmN0aW9uIGNvbXBsZXRlKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcImNvbXBsZXRlXCIsXHJcbiAgICAgICAgaW52b2tlKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dC5pbnZva2UobWFwKHNvdXJjZSwgKHZhbHVlLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dC5yZXN0TGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiaW5jb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG5mdW5jdGlvbiBwcmVzZW50KHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBcInByZXNlbnRcIixcclxuICAgICAgICBpbnZva2UoaW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGlucHV0Lmludm9rZShzb3VyY2UpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtuZXh0XSA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5lcShuZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEuZXJyKGlucHV0LCBcImVtcHR5XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnByZXNlbnQgPSBwcmVzZW50O1xyXG5mdW5jdGlvbiBjb21iaW5hdG9yTmFtZShjKSB7XHJcbiAgICBpZiAoYy5uYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGMubmFtZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYyk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhc3NlcnQ6IGV4cGVjdGVkIGNvbWJpbmF0b3IgbmFtZWApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuY29tYmluYXRvck5hbWUgPSBjb21iaW5hdG9yTmFtZTtcclxuZnVuY3Rpb24gdW5yZWFjaGFibGUodmFsdWUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVucmVhY2hhYmxlIHZhbHVlYCwgdmFsdWUpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bnJlYWNoYWJsZSBjb2RlIHJlYWNoZWRgKTtcclxufVxyXG5leHBvcnRzLnVucmVhY2hhYmxlID0gdW5yZWFjaGFibGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFNuaXBwZXQge1xyXG4gICAgY29uc3RydWN0b3Ioc291cmNlLCBvZmZzZXQsIGxlbmd0aCwgbG9nZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5wdXQoc291cmNlLCBsb2dnZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQoc291cmNlLCAwLCAwLCBsb2dnZXIpO1xyXG4gICAgfVxyXG4gICAgaW52b2tlKGNvbWJpbmF0b3IsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlci5pbnZva2UoY29tYmluYXRvciwgdGhpcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlcShvdGhlcikge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zb3VyY2UgPT09IG90aGVyLnNvdXJjZSAmJlxyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9PT0gb3RoZXIub2Zmc2V0ICYmXHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID09PSBvdGhlci5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgZm10KCkge1xyXG4gICAgICAgIHJldHVybiBgPG9mZnNldDoke3RoaXMub2Zmc2V0fSBsZW5ndGg6JHt0aGlzLmxlbmd0aH0+YDtcclxuICAgIH1cclxuICAgIGRlYnVnUmVzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgKGVvZilgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2xpY2UoY2hhcnMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQodGhpcy5zb3VyY2UsIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGgsIGNoYXJzLCB0aGlzLmxvZ2dlcik7XHJcbiAgICB9XHJcbiAgICBnZXQgc2xpY2VSZXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGdldCByZXN0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgMCwgdGhpcy5sb2dnZXIpO1xyXG4gICAgfVxyXG4gICAgaXNFT0YoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0ICsgdGhpcy5sZW5ndGggPT09IHRoaXMuc291cmNlLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGlzTWF0Y2goY2hhcnMpIHtcclxuICAgICAgICBsZXQgc2xpY2UgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoICsgY2hhcnMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gc2xpY2UgPT09IGNoYXJzO1xyXG4gICAgfVxyXG4gICAgZXh0ZW5kKGNvdW50ID0gMSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQsIHRoaXMubGVuZ3RoICsgY291bnQsIHRoaXMubG9nZ2VyKTtcclxuICAgIH1cclxuICAgIGdldCBzcGFuKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLm9mZnNldCxcclxuICAgICAgICAgICAgZW5kOiB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZXQgZnJhZ21lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIGdldCByZXN0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5sZW5ndGggLSB0aGlzLm9mZnNldCAtIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuU25pcHBldCA9IFNuaXBwZXQ7XHJcbmZ1bmN0aW9uIG9rKHZhbHVlKSB7XHJcbiAgICByZXR1cm4geyBraW5kOiBcIm9rXCIsIHZhbHVlIH07XHJcbn1cclxuZXhwb3J0cy5vayA9IG9rO1xyXG5mdW5jdGlvbiBlcnIoc25pcHBldCwgcmVhc29uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgc25pcHBldCxcclxuICAgICAgICByZWFzb24sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZXJyID0gZXJyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBzcGFuKHN0YXJ0LCBlbmQpIHtcclxuICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxufVxyXG5leHBvcnRzLnNwYW4gPSBzcGFuO1xyXG5mdW5jdGlvbiByYW5nZSguLi5yYXdTcGFucykge1xyXG4gICAgbGV0IHNwYW5zID0gcmF3U3BhbnMuZmlsdGVyKHMgPT4gcyAhPT0gbnVsbCAmJiBzICE9PSB1bmRlZmluZWQpO1xyXG4gICAgaWYgKHNwYW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBzcGFuKDAsIDApO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpcnN0ID0gc3BhbnNbMF07XHJcbiAgICBsZXQgbGFzdCA9IGZpcnN0O1xyXG4gICAgZm9yIChsZXQgcyBvZiBzcGFucykge1xyXG4gICAgICAgIGxhc3QgPSBzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgc3RhcnQ6IGdldFNwYW4oZmlyc3QpLnN0YXJ0LCBlbmQ6IGdldFNwYW4obGFzdCkuZW5kIH07XHJcbn1cclxuZXhwb3J0cy5yYW5nZSA9IHJhbmdlO1xyXG5mdW5jdGlvbiBpc1NwYW4oaXRlbSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtLnN0YXJ0ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBpdGVtLmVuZCA9PT0gXCJudW1iZXJcIjtcclxufVxyXG5leHBvcnRzLmlzU3BhbiA9IGlzU3BhbjtcclxuZnVuY3Rpb24gZ2V0U3BhbihpdGVtKSB7XHJcbiAgICBpZiAoaXNTcGFuKGl0ZW0pKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5zcGFuO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZ2V0U3BhbiA9IGdldFNwYW47XHJcbmZ1bmN0aW9uIHNsaWNlKHMsIHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHNvdXJjZS5zbGljZShzLnN0YXJ0LCBzLmVuZCk7XHJcbn1cclxuZXhwb3J0cy5zbGljZSA9IHNsaWNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBoYnNfcGFyc2VyX25leHRfMSA9IHJlcXVpcmUoXCJoYnMtcGFyc2VyLW5leHRcIik7XHJcbmNvbnN0IHF1bml0XzEgPSByZXF1aXJlKFwicXVuaXRcIik7XHJcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XHJcbmNvbnN0IExPR0dFUiA9IG5ldyBoYnNfcGFyc2VyX25leHRfMS5Mb2dnZXIocXVuaXRfMS5jb25maWcubG9nZ2luZyB8fCBmYWxzZSk7XHJcbnF1bml0XzEubW9kdWxlKFwiW2NvbWJpbmF0b3JzXSB0YWdcIik7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBvbmUgY2hhcmFjdGVyIHRhZ1wiLCAoKSA9PiB7XHJcbiAgICBsZXQgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIiwgTE9HR0VSKTtcclxuICAgIGxldCBbbmV4dCwgZnJhZ21lbnRdID0gaGVscGVyc18xLnVud3JhcChpbnB1dC5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwiaFwiKSkpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSgxKS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQoZnJhZ21lbnQsIGlucHV0LnNsaWNlKDEpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBtdWx0aS1jaGFyYWN0ZXIgdGFnXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiLCBMT0dHRVIpO1xyXG4gICAgbGV0IFtuZXh0LCBmcmFnbWVudF0gPSBoZWxwZXJzXzEudW53cmFwKGlucHV0Lmludm9rZShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJoZWxsb1wiKSkpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSg1KS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQoZnJhZ21lbnQsIGlucHV0LnNsaWNlKDUpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1pc21hdGNoOiBtdWx0aS1jaGFyYWN0ZXIgdGFnXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiLCBMT0dHRVIpO1xyXG4gICAgbGV0IG5leHQgPSBpbnB1dC5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwiaG9sbGFcIikpO1xyXG4gICAgaGVscGVyc18xLmVxRXJyb3IobmV4dCwgaGJzX3BhcnNlcl9uZXh0XzEuZXJyKGlucHV0LCBcInRhZ1wiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJtaXNtYXRjaDogbm90IGF0IDAgb2Zmc2V0XCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiLCBMT0dHRVIpO1xyXG4gICAgbGV0IFtuZXh0XSA9IGhlbHBlcnNfMS51bndyYXAoaW5wdXQuaW52b2tlKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRhZyhcImhlbGxvIFwiKSkpO1xyXG4gICAgbGV0IG1pc21hdGNoID0gbmV4dC5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwid29vbGRcIiksIG5leHQpO1xyXG4gICAgaGVscGVyc18xLmVxRXJyb3IobWlzbWF0Y2gsIGhic19wYXJzZXJfbmV4dF8xLmVycihuZXh0LCBcInRhZ1wiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLm1vZHVsZShcIltjb21iaW5hdG9yc10gdGFrZVVudGlsXCIpO1xyXG5xdW5pdF8xLnRlc3QoXCJtYXRjaDogc2tpcHBpbmcgYSBjaHVuayBvZiBjaGFyYWN0ZXJzXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiLCBMT0dHRVIpO1xyXG4gICAgbGV0IFtuZXh0LCBtYXRjaF0gPSBoZWxwZXJzXzEudW53cmFwKGlucHV0Lmludm9rZShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlVW50aWwoXCJ3b3JsZFwiKSkpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSg2KS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobWF0Y2gsIGlucHV0LnNsaWNlKDYpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBza2lwcGluZyB6ZXJvIGNoYXJhY3RlcnNcIiwgKCkgPT4ge1xyXG4gICAgbGV0IGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIsIExPR0dFUik7XHJcbiAgICBsZXQgW25leHQsIG1hdGNoXSA9IGhlbHBlcnNfMS51bndyYXAoaW5wdXQuaW52b2tlKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRha2VVbnRpbChcImhlbGxvXCIpKSk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0LnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChtYXRjaCwgaW5wdXQucmVzdCk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJtYXRjaDogc2tpcHBpbmcgdW50aWwgdGhlIGxhc3QgY2hhcmFjdGVyXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiLCBMT0dHRVIpO1xyXG4gICAgbGV0IFtuZXh0LCBtYXRjaF0gPSBoZWxwZXJzXzEudW53cmFwKGlucHV0Lmludm9rZShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlVW50aWwoXCJkXCIpKSk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0LnNsaWNlKDEwKS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobWF0Y2gsIGlucHV0LnNsaWNlKDEwKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJtYXRjaDogc2tpcHBpbmcgdW50aWwgdGhlIGxhc3QgY2hhcmFjdGVyc1wiLCAoKSA9PiB7XHJcbiAgICBsZXQgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIiwgTE9HR0VSKTtcclxuICAgIGxldCBbbmV4dCwgbWF0Y2hdID0gaGVscGVyc18xLnVud3JhcChpbnB1dC5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFrZVVudGlsKFwid29ybGRcIikpKTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoNikucmVzdCk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG1hdGNoLCBpbnB1dC5zbGljZSg2KSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJtaXNtYXRjaDogbm8gbWF0Y2ggYmVmb3JlIHRoZSBlbmRcIiwgKCkgPT4ge1xyXG4gICAgbGV0IGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIsIExPR0dFUik7XHJcbiAgICBsZXQgW25leHQsIG1hdGNoXSA9IGhlbHBlcnNfMS51bndyYXAoaW5wdXQuaW52b2tlKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRha2VVbnRpbChcImNydWVsXCIpKSk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0LnNsaWNlKDExKS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobWF0Y2gsIGlucHV0LnNsaWNlKDExKSk7XHJcbn0pO1xyXG5xdW5pdF8xLm1vZHVsZShcIltjb21iaW5hdG9yc10gdGFrZVdoaWxlXCIpO1xyXG5xdW5pdF8xLnRlc3QoXCJtYXRjaDogYXQgbm9uLXplcm8gb2Zmc2V0XCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyEhISFcIiwgTE9HR0VSKTtcclxuICAgIGxldCBbbmV4dDFdID0gaGVscGVyc18xLnVud3JhcChpbnB1dC5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwiaGVsbG9cIikpKTtcclxuICAgIGxldCBbbmV4dCwgbWF0Y2hdID0gaGVscGVyc18xLnVud3JhcChuZXh0MS5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFrZVdoaWxlKFwiIVwiKSwgbmV4dDEpKTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoOSkucmVzdCk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG1hdGNoLCBpbnB1dC5zbGljZSg1KS5zbGljZSg0KSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJtYXRjaDogc2tpcHBpbmcgemVybyBjaGFyYWN0ZXJzXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiLCBMT0dHRVIpO1xyXG4gICAgbGV0IFtuZXh0LCBtYXRjaF0gPSBoZWxwZXJzXzEudW53cmFwKGlucHV0Lmludm9rZShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlV2hpbGUoXCJoZWxsb1wiKSkpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSg1KS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobWF0Y2gsIGlucHV0LnNsaWNlKDUpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBza2lwcGluZyB1bnRpbCB0aGUgbGFzdCBjaGFyYWN0ZXJzXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiLCBMT0dHRVIpO1xyXG4gICAgbGV0IFtuZXh0LCBtYXRjaF0gPSBoZWxwZXJzXzEudW53cmFwKGlucHV0Lmludm9rZShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlV2hpbGUoXCJoZWxsbyB3b3JsZFwiKSkpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSgxMSkucmVzdCk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG1hdGNoLCBpbnB1dC5zbGljZSgxMSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwibWlzbWF0Y2g6IG5vIG1hdGNoIGJlZm9yZSB0aGUgZW5kXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsb2hlbGxvXCIsIExPR0dFUik7XHJcbiAgICBsZXQgW25leHQsIG1hdGNoXSA9IGhlbHBlcnNfMS51bndyYXAoaW5wdXQuaW52b2tlKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRha2VXaGlsZShcImhlbGxvaGVsbG9cIikpKTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoMTApLnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChtYXRjaCwgaW5wdXQuc2xpY2UoMTApKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHF1bml0XzEgPSByZXF1aXJlKFwicXVuaXRcIik7XHJcbmZ1bmN0aW9uIHVud3JhcChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgT2sgcmVzdWx0LCBnb3QgRXJyIChyZWFzb249JHtpbnB1dC5yZWFzb259KWApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMudW53cmFwID0gdW53cmFwO1xyXG5mdW5jdGlvbiBlcVJlc3VsdChsZWZ0LCByaWdodCkge1xyXG4gICAgcXVuaXRfMS5hc3NlcnQuc3RyaWN0RXF1YWwobGVmdC5raW5kLCByaWdodC5raW5kKTtcclxuICAgIGlmIChsZWZ0LmtpbmQgPT09IFwib2tcIiAmJiByaWdodC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICBxdW5pdF8xLmFzc2VydC5vayhsZWZ0LnZhbHVlLmVxKHJpZ2h0LnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChsZWZ0LmtpbmQgPT09IFwiZXJyXCIgJiYgcmlnaHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgIHF1bml0XzEuYXNzZXJ0Lm9rKGxlZnQuc25pcHBldC5lcShyaWdodC5zbmlwcGV0KSwgYGxlZnQ9JHtsZWZ0LnNuaXBwZXQuZm10KCl9IHJpZ2h0PSR7cmlnaHQuc25pcHBldC5mbXQoKX1gKTtcclxuICAgICAgICBxdW5pdF8xLmFzc2VydC5zdHJpY3RFcXVhbChsZWZ0LnJlYXNvbiwgcmlnaHQucmVhc29uKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVxUmVzdWx0ID0gZXFSZXN1bHQ7XHJcbmZ1bmN0aW9uIGVxU25pcHBldChsZWZ0LCByaWdodCkge1xyXG4gICAgcXVuaXRfMS5hc3NlcnQub2sobGVmdC5lcShyaWdodCksIGBsZWZ0PSR7bGVmdC5mbXQoKX0gcmlnaHQ9JHtyaWdodC5mbXQoKX1gKTtcclxufVxyXG5leHBvcnRzLmVxU25pcHBldCA9IGVxU25pcHBldDtcclxuZnVuY3Rpb24gZXFTbmlwcGV0cyhsZWZ0LCByaWdodCkge1xyXG4gICAgaWYgKGxlZnQubGVuZ3RoICE9PSByaWdodC5sZW5ndGgpIHtcclxuICAgICAgICBxdW5pdF8xLmFzc2VydC5vayhmYWxzZSwgYGxlZnQ9JHtKU09OLnN0cmluZ2lmeShsZWZ0Lm1hcChzID0+IHMuZm10KCkpKX1cXG5yaWdodD0ke0pTT04uc3RyaW5naWZ5KHJpZ2h0Lm1hcChzID0+IHMuZm10KCkpKX1gKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVmdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGVmdEl0ZW0gPSBsZWZ0W2ldO1xyXG4gICAgICAgICAgICBsZXQgcmlnaHRJdGVtID0gcmlnaHRbaV07XHJcbiAgICAgICAgICAgIGVxU25pcHBldChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lcVNuaXBwZXRzID0gZXFTbmlwcGV0cztcclxuZnVuY3Rpb24gZXFFcnJvcihsZWZ0LCByaWdodCkge1xyXG4gICAgaWYgKGxlZnQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgIHF1bml0XzEuYXNzZXJ0Lm9rKGxlZnQuc25pcHBldC5lcShyaWdodC5zbmlwcGV0KSwgYGxlZnQ9JHtsZWZ0LnNuaXBwZXQuZm10KCl9IHJpZ2h0PSR7cmlnaHQuc25pcHBldC5mbXQoKX1gKTtcclxuICAgICAgICBxdW5pdF8xLmFzc2VydC5zdHJpY3RFcXVhbChsZWZ0LnJlYXNvbiwgcmlnaHQucmVhc29uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHF1bml0XzEuYXNzZXJ0LnN0cmljdEVxdWFsKGxlZnQua2luZCwgXCJlcnJcIiwgYGV4cGVjdGVkIGFuIGVycm9yYCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lcUVycm9yID0gZXFFcnJvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxucmVxdWlyZShcImZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4uL25vZGVfbW9kdWxlcy9xdW5pdC9xdW5pdC9xdW5pdC5jc3NcIik7XHJcbnJlcXVpcmUoXCJmaWxlLWxvYWRlcj9uYW1lPVtuYW1lXS5bZXh0XSEuL2luZGV4Lmh0bWxcIik7XHJcbmNvbnN0IHF1bml0XzEgPSByZXF1aXJlKFwicXVuaXRcIik7XHJcbnJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzLXRlc3RcIik7XHJcbnJlcXVpcmUoXCIuL211bHRpLXRlc3RcIik7XHJcbnJlcXVpcmUoXCIuL3JlYWRlci9pbmRleFwiKTtcclxucXVuaXRfMS5jb25maWcuYXV0b3N0YXJ0ID0gdHJ1ZTtcclxucXVuaXRfMS5jb25maWcudXJsQ29uZmlnLnB1c2goe1xyXG4gICAgaWQ6IFwibG9nZ2luZ1wiLFxyXG4gICAgbGFiZWw6IFwiRW5hYmxlIGxvZ2dpbmdcIixcclxufSk7XHJcbnF1bml0XzEuZHVtcC5tYXhEZXB0aCA9IDI1O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBoYnNfcGFyc2VyX25leHRfMSA9IHJlcXVpcmUoXCJoYnMtcGFyc2VyLW5leHRcIik7XHJcbmNvbnN0IHF1bml0XzEgPSByZXF1aXJlKFwicXVuaXRcIik7XHJcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XHJcbmNvbnN0IExPR0dFUiA9IG5ldyBoYnNfcGFyc2VyX25leHRfMS5Mb2dnZXIocXVuaXRfMS5jb25maWcubG9nZ2luZyB8fCBmYWxzZSk7XHJcbnF1bml0XzEubW9kdWxlKFwiW2NvbWJpbmF0b3JzXSBtYW55XCIpO1xyXG5xdW5pdF8xLnRlc3QoXCJ6ZXJvIHRpbWVzXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJhYmNhYmNhYmNcIiwgTE9HR0VSKTtcclxuICAgIGxldCBbbmV4dCwgbWF0Y2hdID0gaGVscGVyc18xLnVud3JhcChpbnB1dC5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJkZWZcIikpKSk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXRzKG1hdGNoLCBbXSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJvbmUgdGltZVwiLCAoKSA9PiB7XHJcbiAgICBsZXQgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIiwgTE9HR0VSKTtcclxuICAgIGxldCBbbmV4dCwgbWF0Y2hdID0gaGVscGVyc18xLnVud3JhcChpbnB1dC5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJoZWxsb1wiKSkpKTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoNSkucmVzdCk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0cyhtYXRjaCwgW2lucHV0LnNsaWNlKDUpXSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJzZXZlcmFsIHRpbWVzXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJhYmNhYmNhYmNcIiwgTE9HR0VSKTtcclxuICAgIGxldCBbbmV4dCwgbWF0Y2hdID0gaGVscGVyc18xLnVud3JhcChpbnB1dC5pbnZva2UoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJhYmNcIikpKSk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0LnNsaWNlKDkpLnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldHMobWF0Y2gsIFtcclxuICAgICAgICBpbnB1dC5zbGljZSgzKSxcclxuICAgICAgICBpbnB1dC5zbGljZSgzKS5zbGljZSgzKSxcclxuICAgICAgICBpbnB1dC5zbGljZSg2KS5zbGljZSgzKSxcclxuICAgIF0pO1xyXG59KTtcclxucXVuaXRfMS5tb2R1bGUoXCJbY29tYmluYXRvcnNdIHByZXNlbnQobWFueSkgKGF0IGxlYXN0IG9uZSBtYXRjaClcIik7XHJcbnF1bml0XzEudGVzdChcInplcm8gdGltZXNcIiwgKCkgPT4ge1xyXG4gICAgbGV0IGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImFiY2FiY2FiY1wiLCBMT0dHRVIpO1xyXG4gICAgbGV0IG1pc21hdGNoID0gaW5wdXQuaW52b2tlKGhic19wYXJzZXJfbmV4dF8xLnV0aWxzLnByZXNlbnQoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJkZWZcIikpKSk7XHJcbiAgICBoZWxwZXJzXzEuZXFFcnJvcihtaXNtYXRjaCwgaGJzX3BhcnNlcl9uZXh0XzEuZXJyKGlucHV0LCBcImVtcHR5XCIpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm9uZSB0aW1lXCIsICgpID0+IHtcclxuICAgIGxldCBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiLCBMT0dHRVIpO1xyXG4gICAgbGV0IFtuZXh0LCBtYXRjaF0gPSBoZWxwZXJzXzEudW53cmFwKGlucHV0Lmludm9rZShoYnNfcGFyc2VyX25leHRfMS51dGlscy5wcmVzZW50KGhic19wYXJzZXJfbmV4dF8xLm11bHRpLm1hbnkoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwiaGVsbG9cIikpKSkpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSg1KS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXRzKG1hdGNoLCBbaW5wdXQuc2xpY2UoNSldKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcInNldmVyYWwgdGltZXNcIiwgKCkgPT4ge1xyXG4gICAgbGV0IGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImFiY2FiY2FiY1wiLCBMT0dHRVIpO1xyXG4gICAgbGV0IFtuZXh0LCBtYXRjaF0gPSBoZWxwZXJzXzEudW53cmFwKGlucHV0Lmludm9rZShoYnNfcGFyc2VyX25leHRfMS51dGlscy5wcmVzZW50KGhic19wYXJzZXJfbmV4dF8xLm11bHRpLm1hbnkoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwiYWJjXCIpKSkpKTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoOSkucmVzdCk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0cyhtYXRjaCwgW1xyXG4gICAgICAgIGlucHV0LnNsaWNlKDMpLFxyXG4gICAgICAgIGlucHV0LnNsaWNlKDMpLnNsaWNlKDMpLFxyXG4gICAgICAgIGlucHV0LnNsaWNlKDYpLnNsaWNlKDMpLFxyXG4gICAgXSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGhic19wYXJzZXJfbmV4dF8xID0gcmVxdWlyZShcImhicy1wYXJzZXItbmV4dFwiKTtcclxuY29uc3QgcXVuaXQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInF1bml0XCIpKTtcclxuY29uc3QgcXVuaXRfMSA9IHJlcXVpcmUoXCJxdW5pdFwiKTtcclxucXVuaXRfMS5tb2R1bGUoXCJbUkVBREVSXSBpbnRlcnBvbGF0aW9uXCIpO1xyXG5xdW5pdC5hc3NlcnQudHJlZSA9IGZ1bmN0aW9uIChzb3VyY2UsIC4uLmV4cGVjdGVkKSB7XHJcbiAgICBsZXQgc3RlcCA9IHNvdXJjZSB8fCBcIihlbXB0eSlcIjtcclxuICAgIHRoaXMuc3RlcChzdGVwKTtcclxuICAgIGxldCB0cmVlID0gaGJzX3BhcnNlcl9uZXh0XzEucmVhZChzb3VyY2UsIHsgbG9nZ2luZzogcXVuaXRfMS5jb25maWcubG9nZ2luZyB9KTtcclxuICAgIGxldCB7IHJvb3Q6IGV4cGVjdGVkUm9vdCwgc291cmNlOiBleHBlY3RlZFNvdXJjZSB9ID0gaGJzX3BhcnNlcl9uZXh0XzEuYi5yb290KGV4cGVjdGVkKTtcclxuICAgIGxldCBleHBlY3RlZFN0cmluZyA9IGhic19wYXJzZXJfbmV4dF8xLnNlcmlhbGl6ZVJvb3QoZXhwZWN0ZWRSb290LCBleHBlY3RlZFNvdXJjZSk7XHJcbiAgICBpZiAodHJlZS5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgdGhpcy5vayhmYWxzZSwgYGV4cGVjdGVkIHRva2VucyAoJHtleHBlY3RlZFN0cmluZ30pLCBnb3QgZXJyb3IgKCR7dHJlZS5yZWFzb259KWApO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGFjdHVhbFN0cmluZyA9IGhic19wYXJzZXJfbmV4dF8xLnNlcmlhbGl6ZVJvb3QodHJlZS52YWx1ZSwgc291cmNlKTtcclxuICAgICAgICB0aGlzLnN0cmljdEVxdWFsKGFjdHVhbFN0cmluZywgZXhwZWN0ZWRTdHJpbmcsIFwic2VyaWFsaXphdGlvbiBvZiBleHBlY3RlZCBhbmQgYWN0dWFsIG1hdGNoXCIpO1xyXG4gICAgICAgIHRoaXMuZGVlcEVxdWFsKHRyZWUudmFsdWUsIGV4cGVjdGVkUm9vdCwgXCJ0b2tlbiB0cmVlcyBtYXRjaFwiKTtcclxuICAgIH1cclxuICAgIHRoaXMudmVyaWZ5U3RlcHMoW3N0ZXBdLCBcInZlcmlmaWVkIHN0ZXBzXCIpO1xyXG59O1xyXG5xdW5pdF8xLnRlc3QoXCJlbXB0eVwiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJcIiAvKiBubyBib2R5ICovKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcInt7aWR9fSBpbnRlcnBvbGF0aW5nIGFuIGlkXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7aWRlbnRpZmllcn19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZGVudGlmaWVyXCIpXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e2lkfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e2lkLXdpdGgtZGFzaH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZC13aXRoLWRhc2hcIildKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ7e2lkfX0gaW50ZXJwb2xhdGluZyBhIHN0cmluZ1wiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoYHt7XCJoZWxsb1wifX1gLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLnN0cihgXCJoZWxsb1wiYCldKSk7XHJcbiAgICBhc3NlcnQudHJlZShge3tcImhlbGxvIHdvcmxkXCJ9fWAsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3RyKGBcImhlbGxvIHdvcmxkXCJgKV0pKTtcclxuICAgIGFzc2VydC50cmVlKGB7e1wiaGVsbG9cXFxcXCJ3b3JsZFwifX1gLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLnN0cihgXCJoZWxsb1xcXFxcIndvcmxkXCJgKV0pKTtcclxuICAgIGFzc2VydC50cmVlKGB7eydoZWxsbyd9fWAsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3RyKGAnaGVsbG8nYCldKSk7XHJcbiAgICBhc3NlcnQudHJlZShge3snaGVsbG8gd29ybGQnfX1gLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLnN0cihgJ2hlbGxvIHdvcmxkJ2ApXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoYHt7J2hlbGxvXFxcXCd3b3JsZCd9fWAsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3RyKGAnaGVsbG9cXFxcJ3dvcmxkJ2ApXSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwie3tpZH19IGludGVycG9sYXRpbmcgYSBudW1iZXJcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKFwie3sxMH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuaW50KFwiMTBcIildKSk7XHJcbiAgICBhc3NlcnQudHJlZShcInt7LTEwfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnQoXCItMTBcIildKSk7XHJcbiAgICBhc3NlcnQudHJlZShcInt7MTAwLjUxMjN9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLmRlY2ltYWwoXCIxMDAuNTEyM1wiKV0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3stMTAwLjUxMjN9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLmRlY2ltYWwoXCItMTAwLjUxMjNcIildKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ7eyhpZCl9fSBpbnRlcnBvbGF0aW5nIGFuIGV4cHJlc3Npb25cIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKFwie3soaWQpfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5zZXhwKFtoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaWRcIildKV0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3sgKGlkKSB9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLnNwLCBoYnNfcGFyc2VyX25leHRfMS5iLnNleHAoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKV0pLCBoYnNfcGFyc2VyX25leHRfMS5iLnNwXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7eyggaWQgKX19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc2V4cChbaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpLCBoYnNfcGFyc2VyX25leHRfMS5iLnNwXSldKSk7XHJcbiAgICBhc3NlcnQudHJlZShcInt7ICggaWQgKSB9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLnNwLCBoYnNfcGFyc2VyX25leHRfMS5iLnNleHAoW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcF0pLCBoYnNfcGFyc2VyX25leHRfMS5iLnNwXSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwie3tAaWR9fSBpbnRlcnBvbGF0aW5nIGFuIGFyZ3VtZW50XCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7QGlkZW50aWZpZXJ9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLmFyZyhcIkBpZGVudGlmaWVyXCIpXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e0BpZH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuYXJnKFwiQGlkXCIpXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e0BpZC13aXRoLWRhc2h9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLmFyZyhcIkBpZC13aXRoLWRhc2hcIildKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ3aGl0ZXNwYWNlIGFyb3VuZCBpbnRlcnBvbGF0aW9uXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7IGlkZW50aWZpZXIgfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkZW50aWZpZXJcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuc3BdKSk7XHJcbiAgICBhc3NlcnQudHJlZShcInt7IGlkIH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcF0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3sgaWQtd2l0aC1kYXNoIH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZC13aXRoLWRhc2hcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuc3BdKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJwYXRoc1wiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e2lkLndpdGgucGF0aH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoXCIpLCBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInBhdGhcIildKSk7XHJcbiAgICBhc3NlcnQudHJlZShcInt7IGlkLndpdGgucGF0aCB9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwid2l0aFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwicGF0aFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7eyAgaWQud2l0aC5wYXRoICB9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLndzKFwiICBcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJwYXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIud3MoXCIgIFwiKSxcclxuICAgIF0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3tAaWQud2l0aC5wYXRofX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAaWRcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LCBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwid2l0aFwiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJwYXRoXCIpXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e0BkYXNoLWlkLndpdGgtZGFzaGVkLnBhdGh9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmFyZyhcIkBkYXNoLWlkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoLWRhc2hlZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwicGF0aFwiKSxcclxuICAgIF0pKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcInt7aWQud2l0aC5wYXRoIHNvbWUgb3RoZXIuc3R1ZmZ9fVwiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e2lkLndpdGgucGF0aCBzb21lIG90aGVyLnN0dWZmfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJwYXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInNvbWVcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwib3RoZXJcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInN0dWZmXCIpLFxyXG4gICAgXSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwibmFtZWQgYXJndW1lbnRzXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7aWQud2l0aC5wYXRoIHNvbWUgbmFtZWQ9YXJncyBvdGhlcj1uYW1lZC5hcmdzfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJwYXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInNvbWVcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwibmFtZWRcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5lcSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiYXJnc1wiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJvdGhlclwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmVxLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJuYW1lZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiYXJnc1wiKSxcclxuICAgIF0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3tpZC53aXRoLnBhdGggc29tZSBAYXJnIG5hbWVkPWFyZ3Mgb3RoZXI9QG5hbWVkLmFyZ3N9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaWRcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIndpdGhcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInBhdGhcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwic29tZVwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuYXJnKFwiQGFyZ1wiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJuYW1lZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmVxLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm90aGVyXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZXEsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAbmFtZWRcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImFyZ3NcIiksXHJcbiAgICBdKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ1c2luZyBhbGwgdGhlIGZlYXR1cmVzXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7ICAoaWQud2l0aC5wYXRoIHNvbWUgQGFyZyBuYW1lZD1hcmdzIG90aGVyPUBuYW1lZC5hcmdzKSBAc29tZS5hcmcgYW5vdGhlci5hcmcgbmFtZWQ9QGFyZyBvdGhlcj1uYW1lZC5hcmcgeWV0LWFub3RoZXI9LTEyLjUgIH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW1xyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIud3MoXCIgIFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNleHAoW1xyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaWRcIiksXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwid2l0aFwiKSxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJwYXRoXCIpLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwic29tZVwiKSxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAYXJnXCIpLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwibmFtZWRcIiksXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZXEsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwib3RoZXJcIiksXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZXEsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuYXJnKFwiQG5hbWVkXCIpLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImFyZ3NcIiksXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmFyZyhcIkBzb21lXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiYW5vdGhlclwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiYXJnXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm5hbWVkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZXEsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAYXJnXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm90aGVyXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZXEsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm5hbWVkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwieWV0LWFub3RoZXJcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5lcSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRlY2ltYWwoXCItMTIuNVwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLndzKFwiICBcIiksXHJcbiAgICBdKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ0d28gaW50ZXJwb2xhdGlvbnMgbmV4dCB0byBlYWNoIG90aGVyXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7aWQud2l0aC5wYXRoIHNvbWUgbmFtZWQ9YXJncyBvdGhlcj1uYW1lZC5hcmdzfX17e3NvbWUuc3R1ZmZ9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaWRcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIndpdGhcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInBhdGhcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwic29tZVwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJuYW1lZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmVxLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm90aGVyXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZXEsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm5hbWVkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpLFxyXG4gICAgXSksIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJzb21lXCIpLCBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInN0dWZmXCIpXSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwiYmxvY2tzXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7I2lmIEB4fX17ey9pZn19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuYmxvY2soe1xyXG4gICAgICAgIG9wZW46IHtcclxuICAgICAgICAgICAgbmFtZTogXCJpZlwiLFxyXG4gICAgICAgICAgICBoZWFkOiBbaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAeFwiKV0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGhic19wYXJzZXJfbmV4dF8xID0gcmVxdWlyZShcImhicy1wYXJzZXItbmV4dFwiKTtcclxuY29uc3QgcXVuaXRfMSA9IHJlcXVpcmUoXCJxdW5pdFwiKTtcclxucXVuaXRfMS5tb2R1bGUoXCJbUkVBREVSXSBIVE1MXCIpO1xyXG5xdW5pdF8xLnRlc3QoXCJzaW1wbGUgY29udGVudFwiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJoZWxsb1wiLCBoYnNfcGFyc2VyX25leHRfMS5iLnRleHQoXCJoZWxsb1wiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJhIHNpbXBsZSB0YWdcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKFwiPGRpdj5cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zdGFydFRhZyhcImRpdlwiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBIHNpbXBsZSB0YWcgd2l0aCB0cmFpbGluZyBzcGFjZXNcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKFwiPGRpdiAgIFxcdFxcbj5cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zdGFydFRhZyh7IG5hbWU6IFwiZGl2XCIsIGF0dHJzOiBbaGJzX3BhcnNlcl9uZXh0XzEuYi53cyhcIiAgIFxcdFxcblwiKV0gfSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwiQSBzaW1wbGUgY2xvc2luZyB0YWdcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKFwiPC9kaXY+XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuZW5kVGFnKFwiZGl2XCIpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIkEgc2ltcGxlIGNsb3NpbmcgdGFnIHdpdGggdHJhaWxpbmcgc3BhY2VzXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcIjwvZGl2ICAgXFx0XFxuPlwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmVuZFRhZyh7IG5hbWU6IFwiZGl2XCIsIHRyYWlsaW5nOiBcIiAgIFxcdFxcblwiIH0pKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIkEgcGFpciBvZiBoeXBoZW5hdGVkIHRhZ3NcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKFwiPHgtZm9vPjwveC1mb28+XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuc3RhcnRUYWcoXCJ4LWZvb1wiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5lbmRUYWcoXCJ4LWZvb1wiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBIHRhZyB3aXRoIGEgc2luZ2xlLXF1b3RlZCBhdHRyaWJ1dGVcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKGA8ZGl2IGlkPSdmb28nPmAsIGhic19wYXJzZXJfbmV4dF8xLmIuc3RhcnRUYWcoe1xyXG4gICAgICAgIG5hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgYXR0cnM6IFtoYnNfcGFyc2VyX25leHRfMS5iLnNwLCBoYnNfcGFyc2VyX25leHRfMS5iLmF0dHIoeyBuYW1lOiBcImlkXCIsIHZhbHVlOiBgJ2ZvbydgIH0pXVxyXG4gICAgfSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwiQSB0YWcgd2l0aCBhIGRvdWJsZS1xdW90ZWQgYXR0cmlidXRlXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShgPGRpdiBpZD1cImZvb1wiPmAsIGhic19wYXJzZXJfbmV4dF8xLmIuc3RhcnRUYWcoe1xyXG4gICAgICAgIG5hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgYXR0cnM6IFtoYnNfcGFyc2VyX25leHRfMS5iLnNwLCBoYnNfcGFyc2VyX25leHRfMS5iLmF0dHIoeyBuYW1lOiBcImlkXCIsIHZhbHVlOiBgXCJmb29cImAgfSldXHJcbiAgICB9KSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBIHRhZyB3aXRoIGEgZG91YmxlLXF1b3RlZCBlbXB0eVwiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoYDxkaXYgaWQ9XCJcIj5gLCBoYnNfcGFyc2VyX25leHRfMS5iLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lOiBcImRpdlwiLFxyXG4gICAgICAgIGF0dHJzOiBbaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5hdHRyKHsgbmFtZTogXCJpZFwiLCB2YWx1ZTogaGJzX3BhcnNlcl9uZXh0XzEuYi5zdHJpbmdJbnRlcnBvbGF0ZShbXSwgYFwiYCkgfSldXHJcbiAgICB9KSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBIHRhZyB3aXRoIHVucXVvdGVkIGF0dHJpYnV0ZVwiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoYDxkaXYgaWQ9Zm9vPmAsIGhic19wYXJzZXJfbmV4dF8xLmIuc3RhcnRUYWcoe1xyXG4gICAgICAgIG5hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgYXR0cnM6IFtoYnNfcGFyc2VyX25leHRfMS5iLnNwLCBoYnNfcGFyc2VyX25leHRfMS5iLmF0dHIoeyBuYW1lOiBcImlkXCIsIHZhbHVlOiBgZm9vYCB9KV1cclxuICAgIH0pKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIkEgdGFnIHdpdGggdmFsdWVsZXNzIGF0dHJpYnV0ZXNcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKGA8ZGl2IGZvbyBiYXI+YCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zdGFydFRhZyh7XHJcbiAgICAgICAgbmFtZTogXCJkaXZcIixcclxuICAgICAgICBhdHRyczogW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuYXR0cihcImZvb1wiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5hdHRyKFwiYmFyXCIpXVxyXG4gICAgfSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwiQSB0YWcgd2l0aCBtdWx0aXBsZSBhdHRyaWJ1dGVzXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShgPGRpdiBpZD1mb28gY2xhc3M9XCJiYXIgYmF6XCIgaHJlZj0nYmF0Jz5gLCBoYnNfcGFyc2VyX25leHRfMS5iLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lOiBcImRpdlwiLFxyXG4gICAgICAgIGF0dHJzOiBbXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuYXR0cih7IG5hbWU6IFwiaWRcIiwgdmFsdWU6IGBmb29gIH0pLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmF0dHIoeyBuYW1lOiBcImNsYXNzXCIsIHZhbHVlOiBgXCJiYXIgYmF6XCJgIH0pLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmF0dHIoeyBuYW1lOiBcImhyZWZcIiwgdmFsdWU6IGAnYmF0J2AgfSlcclxuICAgICAgICBdXHJcbiAgICB9KSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBIHNlbGYtY2xvc2luZyB0YWdcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKGA8aW1nIC8+YCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zdGFydFRhZyh7XHJcbiAgICAgICAgbmFtZTogXCJpbWdcIixcclxuICAgICAgICBhdHRyczogW2hic19wYXJzZXJfbmV4dF8xLmIuc3BdLFxyXG4gICAgICAgIHNlbGZDbG9zaW5nOiB0cnVlXHJcbiAgICB9KSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBIHNlbGYtY2xvc2luZyB0YWcgd2l0aCB2YWx1ZWxlc3MgYXR0cmlidXRlc1wiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoYDxpbnB1dCBkaXNhYmxlZCAvPmAsIGhic19wYXJzZXJfbmV4dF8xLmIuc3RhcnRUYWcoe1xyXG4gICAgICAgIG5hbWU6IFwiaW5wdXRcIixcclxuICAgICAgICBhdHRyczogW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuYXR0cihcImRpc2FibGVkXCIpLCBoYnNfcGFyc2VyX25leHRfMS5iLnNwXSxcclxuICAgICAgICBzZWxmQ2xvc2luZzogdHJ1ZVxyXG4gICAgfSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoYDxpbnB1dCBkaXNhYmxlZC8+YCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zdGFydFRhZyh7XHJcbiAgICAgICAgbmFtZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGF0dHJzOiBbaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5hdHRyKFwiZGlzYWJsZWRcIildLFxyXG4gICAgICAgIHNlbGZDbG9zaW5nOiB0cnVlXHJcbiAgICB9KSk7XHJcbiAgICBhc3NlcnQudHJlZShgPGlucHV0IGRhdGEtZm9vPWJhci8+YCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zdGFydFRhZyh7XHJcbiAgICAgICAgbmFtZTogXCJpbnB1dFwiLFxyXG4gICAgICAgIGF0dHJzOiBbaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5hdHRyKHsgbmFtZTogXCJkYXRhLWZvb1wiLCB2YWx1ZTogXCJiYXIvXCIgfSldXHJcbiAgICB9KSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBIGNvbW1lbnRcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKFwiPCEtLSBoZWxsbyAtLT5cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5jb21tZW50KFwiIGhlbGxvIFwiKSk7XHJcbiAgICBhc3NlcnQudHJlZShcIjwhLS0tLT5cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5jb21tZW50KFwiXCIpKTtcclxuICAgIGFzc2VydC50cmVlKFwiPCEtLSBBIHBlcmZlY3RseSBsZWdhbCAtIGFwcGVhcnMgLS0+XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuY29tbWVudChcIiBBIHBlcmZlY3RseSBsZWdhbCAtIGFwcGVhcnMgXCIpKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGhic19wYXJzZXJfbmV4dF8xID0gcmVxdWlyZShcImhicy1wYXJzZXItbmV4dFwiKTtcclxuY29uc3QgcXVuaXRfMSA9IHJlcXVpcmUoXCJxdW5pdFwiKTtcclxucXVuaXRfMS5tb2R1bGUoXCJbUkVBREVSXSBIeWJyaWRcIik7XHJcbnF1bml0XzEudGVzdChcImNvbnRlbnQgcGx1cyBpbnRlcnBvbGF0aW9uXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcImhlbGxvIHt7d29ybGR9fSBnb29kYnllXCIsIGhic19wYXJzZXJfbmV4dF8xLmIudGV4dChcImhlbGxvIFwiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIndvcmxkXCIpXSksIGhic19wYXJzZXJfbmV4dF8xLmIudGV4dChcIiBnb29kYnllXCIpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIkEgbmFtZWQgYXJnIGludm9jYXRpb25cIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKFwiPEBmb28+PC9AZm9vPlwiLCBoYnNfcGFyc2VyX25leHRfMS5iLnN0YXJ0VGFnKGhic19wYXJzZXJfbmV4dF8xLmIuYXJnKFwiQGZvb1wiKSksIGhic19wYXJzZXJfbmV4dF8xLmIuZW5kVGFnKFwiQGZvb1wiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBIHBhdGggaW52b2NhdGlvblwiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoXCI8Zi5pbnB1dD48L2YuaW5wdXQ+XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuc3RhcnRUYWcoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJmXCIpLCBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlucHV0XCIpXSksIGhic19wYXJzZXJfbmV4dF8xLmIuZW5kVGFnKFtoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiZlwiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpbnB1dFwiKV0pKTtcclxuICAgIGFzc2VydC50cmVlKFwiPEBmLmlucHV0PjwvQGYuaW5wdXQ+XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuc3RhcnRUYWcoW2hic19wYXJzZXJfbmV4dF8xLmIuYXJnKFwiQGZcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LCBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaW5wdXRcIildKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5lbmRUYWcoW2hic19wYXJzZXJfbmV4dF8xLmIuYXJnKFwiQGZcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LCBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaW5wdXRcIildKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJDdXJseSBhdHRyaWJ1dGVzXCIsIGFzc2VydCA9PiB7XHJcbiAgICBhc3NlcnQudHJlZShcIjxkaXYgZGlzYWJsZWQ9e3tkaXNhYmxlZH19PjwvZGl2PlwiLCBoYnNfcGFyc2VyX25leHRfMS5iLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lOiBcImRpdlwiLFxyXG4gICAgICAgIGF0dHJzOiBbXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuYXR0cih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaGJzX3BhcnNlcl9uZXh0XzEuYi5hdHRySW50ZXJwb2xhdGUoaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImRpc2FibGVkXCIpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgIH0pLCBoYnNfcGFyc2VyX25leHRfMS5iLmVuZFRhZyhcImRpdlwiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJDdXJsaWVzIGluc2lkZSBxdW90ZWQgYXR0cmlidXRlc1wiLCBhc3NlcnQgPT4ge1xyXG4gICAgYXNzZXJ0LnRyZWUoYDxkaXYgZGlzYWJsZWQ9XCJ7e2Rpc2FibGVkfX1cIj48L2Rpdj5gLCBoYnNfcGFyc2VyX25leHRfMS5iLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lOiBcImRpdlwiLFxyXG4gICAgICAgIGF0dHJzOiBbXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuYXR0cih7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaGJzX3BhcnNlcl9uZXh0XzEuYi5zdHJpbmdJbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImRpc2FibGVkXCIpXSldLCBgXCJgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF1cclxuICAgIH0pLCBoYnNfcGFyc2VyX25leHRfMS5iLmVuZFRhZyhcImRpdlwiKSk7XHJcbiAgICBhc3NlcnQudHJlZShgPGEgaHJlZj1cInt7dXJsfX0uaHRtbFwiPjwvYT5gLCBoYnNfcGFyc2VyX25leHRfMS5iLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lOiBcImFcIixcclxuICAgICAgICBhdHRyczogW1xyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJocmVmXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaGJzX3BhcnNlcl9uZXh0XzEuYi5zdHJpbmdJbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInVybFwiKV0pLCBoYnNfcGFyc2VyX25leHRfMS5iLnRleHQoXCIuaHRtbFwiKV0sIGBcImApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXVxyXG4gICAgfSksIGhic19wYXJzZXJfbmV4dF8xLmIuZW5kVGFnKFwiYVwiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJBcmd1bWVudHNcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKGA8ZGl2IEBkaXNhYmxlZD1cInt7ZGlzYWJsZWR9fVwiPjwvZGl2PmAsIGhic19wYXJzZXJfbmV4dF8xLmIuc3RhcnRUYWcoe1xyXG4gICAgICAgIG5hbWU6IFwiZGl2XCIsXHJcbiAgICAgICAgYXR0cnM6IFtcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5hdHRyKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGhic19wYXJzZXJfbmV4dF8xLmIuYXJnTmFtZShcIkBkaXNhYmxlZFwiKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBoYnNfcGFyc2VyX25leHRfMS5iLnN0cmluZ0ludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiZGlzYWJsZWRcIildKV0sIGBcImApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXVxyXG4gICAgfSksIGhic19wYXJzZXJfbmV4dF8xLmIuZW5kVGFnKFwiZGl2XCIpKTtcclxuICAgIGFzc2VydC50cmVlKGA8YSBAaHJlZj1cInt7dXJsfX0uaHRtbFwiPjwvYT5gLCBoYnNfcGFyc2VyX25leHRfMS5iLnN0YXJ0VGFnKHtcclxuICAgICAgICBuYW1lOiBcImFcIixcclxuICAgICAgICBhdHRyczogW1xyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmdOYW1lKFwiQGhyZWZcIiksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogaGJzX3BhcnNlcl9uZXh0XzEuYi5zdHJpbmdJbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInVybFwiKV0pLCBoYnNfcGFyc2VyX25leHRfMS5iLnRleHQoXCIuaHRtbFwiKV0sIGBcImApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXVxyXG4gICAgfSksIGhic19wYXJzZXJfbmV4dF8xLmIuZW5kVGFnKFwiYVwiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJNb2RpZmllcnNcIiwgYXNzZXJ0ID0+IHtcclxuICAgIGFzc2VydC50cmVlKGA8ZGl2IGRpc2FibGVkIHt7b24gXCJjbGlja1wiIChmbiB0aGlzLmhhbmRsZUNsaWNrIEBhcmcpfX0+PC9kaXY+YCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zdGFydFRhZyh7XHJcbiAgICAgICAgbmFtZTogXCJkaXZcIixcclxuICAgICAgICBhdHRyczogW1xyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmF0dHIoXCJkaXNhYmxlZFwiKSxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbXHJcbiAgICAgICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwib25cIiksXHJcbiAgICAgICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zdHIoYFwiY2xpY2tcImApLFxyXG4gICAgICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc2V4cChbXHJcbiAgICAgICAgICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImZuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInRoaXNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImhhbmRsZUNsaWNrXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAYXJnXCIpXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF1cclxuICAgIH0pLCBoYnNfcGFyc2VyX25leHRfMS5iLmVuZFRhZyhcImRpdlwiKSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9oYnNcIik7XHJcbnJlcXVpcmUoXCIuL2h0bWxcIik7XHJcbnJlcXVpcmUoXCIuL2h5YnJpZFwiKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==