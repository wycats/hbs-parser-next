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
var snippet_1 = __webpack_require__(/*! ../snippet */ "./src/snippet.ts");
var span_1 = __webpack_require__(/*! ../span */ "./src/span.ts");
var combinators_1 = __webpack_require__(/*! ./combinators */ "./src/read/combinators.ts");
var multi_1 = __webpack_require__(/*! ./multi */ "./src/read/multi.ts");
var tokens_1 = __webpack_require__(/*! ./tokens */ "./src/read/tokens.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/read/utils.ts");
function read(source) {
    var input = snippet_1.Snippet.input(source);
    var result = utils_1.complete(utils_1.map(multi_1.many(INTERPOLATE), function (tokens) {
        return snippet_1.ok(tokens_1.root(tokens, span_1.range.apply(void 0, tokens)));
    }))(input);
    debugger;
    return utils_1.mapResult(result, function (_a) {
        var token = _a[1];
        return snippet_1.ok(token);
    });
}
exports.read = read;
function INTERPOLATE(input) {
    return utils_1.map(combinators_1.seq(combinators_1.tag("{{"), SPACED_TOKENS, combinators_1.tag("}}")), function (_a) {
        var open = _a[0], path = _a[1], close = _a[2];
        return snippet_1.ok(tokens_1.interpolate(path, span_1.range(open, close)));
    })(input);
}
exports.INTERPOLATE = INTERPOLATE;
function SEXP(input) {
    return utils_1.map(combinators_1.seq(combinators_1.tag("("), SPACED_TOKENS, combinators_1.tag(")")), function (_a) {
        var open = _a[0], path = _a[1], close = _a[2];
        return snippet_1.ok(tokens_1.sexp(path, span_1.range(open, close)));
    })(input);
}
exports.SEXP = SEXP;
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
    var tk = combinators_1.any(wrap(SEXP), exports.NAMED, PATH, wrap(WS));
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
        case "Sexp" /* Sexp */:
            return __spreadArrays(["("], serializeList(token.children, source), [")"]);
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
function sexp(children) {
    return function (builder) {
        var open = builder.consume("(");
        var out = children.map(function (child) { return child(builder); });
        var close = builder.consume(")");
        return tokens.sexp(out, span_1.range(open, close));
    };
}
exports.sexp = sexp;
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
function complete(source) {
    return function (input) {
        return map(source, function (value, next) {
            if (next.length !== 0) {
                return snippet_1.err(input, "incomplete");
            }
            else {
                return snippet_1.ok(value);
            }
        })(input);
    };
}
exports.complete = complete;
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


/***/ }),

/***/ "./tests/combinators-test.ts":
/*!***********************************!*\
  !*** ./tests/combinators-test.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
var hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./tests/helpers.ts");
qunit_1.module("[combinators] tag");
qunit_1.test("match: one character tag", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.tag("h")(input)), next = _a[0], fragment = _a[1];
    helpers_1.eqSnippet(next, input.slice(1).rest);
    helpers_1.eqSnippet(fragment, input.slice(1));
});
qunit_1.test("match: multi-character tag", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.tag("hello")(input)), next = _a[0], fragment = _a[1];
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippet(fragment, input.slice(5));
});
qunit_1.test("mismatch: multi-character tag", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var next = hbs_parser_next_1.combinators.tag("holla")(input);
    helpers_1.eqError(next, hbs_parser_next_1.err(input, "tag"));
});
qunit_1.test("mismatch: not at 0 offset", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var next = helpers_1.unwrap(hbs_parser_next_1.combinators.tag("hello ")(input))[0];
    var mismatch = hbs_parser_next_1.combinators.tag("woold")(next);
    helpers_1.eqError(mismatch, hbs_parser_next_1.err(next, "tag"));
});
qunit_1.module("[combinators] takeUntil");
qunit_1.test("match: skipping a chunk of characters", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.takeUntil("world")(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(6).rest);
    helpers_1.eqSnippet(match, input.slice(6));
});
qunit_1.test("match: skipping zero characters", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.takeUntil("hello")(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.rest);
    helpers_1.eqSnippet(match, input.rest);
});
qunit_1.test("match: skipping until the last character", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.takeUntil("d")(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(10).rest);
    helpers_1.eqSnippet(match, input.slice(10));
});
qunit_1.test("match: skipping until the last characters", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.takeUntil("world")(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(6).rest);
    helpers_1.eqSnippet(match, input.slice(6));
});
qunit_1.test("mismatch: no match before the end", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var mismatch = hbs_parser_next_1.combinators.takeUntil("cruel")(input);
    helpers_1.eqError(mismatch, hbs_parser_next_1.err(input, "takeUntil"));
});
qunit_1.module("[combinators] takeWhile");
qunit_1.test("match: at non-zero offset", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello!!!!");
    var next1 = helpers_1.unwrap(hbs_parser_next_1.combinators.tag("hello")(input))[0];
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.takeWhile("!")(next1)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippet(match, input.slice(5).slice(4));
});
qunit_1.test("match: skipping zero characters", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.takeUntil("hello")(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input);
    helpers_1.eqSnippet(match, input);
});
qunit_1.test("match: skipping until the last character", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.takeUntil("d")(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(10).rest);
    helpers_1.eqSnippet(match, input.slice(10));
});
qunit_1.test("match: skipping until the last characters", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.combinators.takeUntil("world")(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(6).rest);
    helpers_1.eqSnippet(match, input.slice(6));
});
qunit_1.test("mismatch: no match before the end", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var mismatch = hbs_parser_next_1.combinators.takeUntil("cruel")(input);
    helpers_1.eqError(mismatch, hbs_parser_next_1.err(input, "takeUntil"));
});


/***/ }),

/***/ "./tests/hbs-reader-test.ts":
/*!**********************************!*\
  !*** ./tests/hbs-reader-test.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
var hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
qunit_1.module("[READER] simple interpolation");
qunit_1.assert.tree = function (source) {
    var expected = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expected[_i - 1] = arguments[_i];
    }
    var step = source || "(empty)";
    this.step(step);
    var tree = hbs_parser_next_1.read(source);
    var expectedString = hbs_parser_next_1.serializeRoot(hbs_parser_next_1.b.root(expected), source);
    if (tree.kind === "err") {
        this.ok(false, "expected tokens (" + expectedString + "), got error (" + tree.reason + ")");
    }
    else {
        var actualString = hbs_parser_next_1.serializeRoot(tree.value, source);
        this.strictEqual(actualString, expectedString, "serialization of expected and actual match");
        this.deepEqual(tree.value, hbs_parser_next_1.b.root(expected), "token trees match");
    }
    this.verifySteps([step], "verified steps");
};
qunit_1.test("empty", function (assert) {
    assert.tree("" /* no body */);
});
qunit_1.test("{{id}} interpolating an id", function (assert) {
    assert.tree("{{identifier}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("identifier")]));
    assert.tree("{{id}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id")]));
    assert.tree("{{id-with-dash}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id-with-dash")]));
});
qunit_1.test("{{(id)}} interpolating an expression", function (assert) {
    assert.tree("{{(id)}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.id("id")])]));
    assert.tree("{{ (id) }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.id("id")]), hbs_parser_next_1.b.sp]));
    assert.tree("{{( id )}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp])]));
    assert.tree("{{ ( id ) }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.sexp([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp]), hbs_parser_next_1.b.sp]));
});
qunit_1.test("{{@id}} interpolating an argument", function (assert) {
    assert.tree("{{@identifier}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@identifier")]));
    assert.tree("{{@id}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id")]));
    assert.tree("{{@id-with-dash}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id-with-dash")]));
});
qunit_1.test("whitespace around interpolation", function (assert) {
    assert.tree("{{ identifier }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("identifier"), hbs_parser_next_1.b.sp]));
    assert.tree("{{ id }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.sp]));
    assert.tree("{{ id-with-dash }}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.sp, hbs_parser_next_1.b.id("id-with-dash"), hbs_parser_next_1.b.sp]));
});
qunit_1.test("paths", function (assert) {
    assert.tree("{{id.with.path}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("id"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("with"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("path")]));
    assert.tree("{{ id.with.path }}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.sp,
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.sp
    ]));
    assert.tree("{{  id.with.path  }}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.ws("  "),
        hbs_parser_next_1.b.id("id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path"),
        hbs_parser_next_1.b.ws("  ")
    ]));
    assert.tree("{{@id.with.path}}", hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.arg("@id"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("with"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("path")]));
    assert.tree("{{@dash-id.with-dashed.path}}", hbs_parser_next_1.b.interpolate([
        hbs_parser_next_1.b.arg("@dash-id"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("with-dashed"),
        hbs_parser_next_1.b.dot,
        hbs_parser_next_1.b.id("path")
    ]));
});
qunit_1.test("{{id.with.path some other.stuff}}", function (assert) {
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
        hbs_parser_next_1.b.id("stuff")
    ]));
});
qunit_1.test("named arguments", function (assert) {
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
        hbs_parser_next_1.b.id("args")
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
        hbs_parser_next_1.b.id("args")
    ]));
});
qunit_1.test("using all the features", function (assert) {
    assert.tree("{{  (id.with.path some @arg named=args other=@named.args) @some.arg another.arg named=@arg other=named.arg  }}", hbs_parser_next_1.b.interpolate([
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
            hbs_parser_next_1.b.id("args")
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
        hbs_parser_next_1.b.ws("  ")
    ]));
});
qunit_1.test("two interpolations next to each other", function (assert) {
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
        hbs_parser_next_1.b.id("args")
    ]), hbs_parser_next_1.b.interpolate([hbs_parser_next_1.b.id("some"), hbs_parser_next_1.b.dot, hbs_parser_next_1.b.id("stuff")]));
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
var qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
function unwrap(input) {
    if (input.kind === "ok") {
        return input.value;
    }
    else {
        throw new Error("Expected Ok result, got Err (reason=" + input.reason + ")");
    }
}
exports.unwrap = unwrap;
function eqResult(left, right) {
    qunit_1.assert.strictEqual(left.kind, right.kind);
    if (left.kind === "ok" && right.kind === "ok") {
        qunit_1.assert.ok(left.value.eq(right.value));
    }
    else if (left.kind === "err" && right.kind === "err") {
        qunit_1.assert.ok(left.snippet.eq(right.snippet), "left=" + left.snippet.fmt() + " right=" + right.snippet.fmt());
        qunit_1.assert.strictEqual(left.reason, right.reason);
    }
}
exports.eqResult = eqResult;
function eqSnippet(left, right) {
    qunit_1.assert.ok(left.eq(right), "left=" + left.fmt() + " right=" + right.fmt());
}
exports.eqSnippet = eqSnippet;
function eqSnippets(left, right) {
    if (left.length !== right.length) {
        qunit_1.assert.ok(false, "left=" + JSON.stringify(left.map(function (s) { return s.fmt(); })) + "\nright=" + JSON.stringify(right.map(function (s) { return s.fmt(); })));
    }
    else {
        for (var i = 0; i < left.length; i++) {
            var leftItem = left[i];
            var rightItem = right[i];
            eqSnippet(leftItem, rightItem);
        }
    }
}
exports.eqSnippets = eqSnippets;
function eqError(left, right) {
    if (left.kind === "err") {
        qunit_1.assert.ok(left.snippet.eq(right.snippet), "left=" + left.snippet.fmt() + " right=" + right.snippet.fmt());
        qunit_1.assert.strictEqual(left.reason, right.reason);
    }
    else {
        qunit_1.assert.strictEqual(left.kind, "err", "expected an error");
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
__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./tests/index.html");
__webpack_require__(/*! file-loader?name=[name].[ext]!../node_modules/qunit/qunit/qunit.css */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./node_modules/qunit/qunit/qunit.css");
var qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
qunit_1.config.autostart = true;
qunit_1.dump.maxDepth = 25;
__webpack_require__(/*! ./combinators-test */ "./tests/combinators-test.ts");
__webpack_require__(/*! ./multi-test */ "./tests/multi-test.ts");
__webpack_require__(/*! ./hbs-reader-test */ "./tests/hbs-reader-test.ts");


/***/ }),

/***/ "./tests/multi-test.ts":
/*!*****************************!*\
  !*** ./tests/multi-test.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
var hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./tests/helpers.ts");
qunit_1.module("[combinators] many");
qunit_1.test("zero times", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("abcabcabc");
    var _a = helpers_1.unwrap(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("def"))(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input);
    helpers_1.eqSnippets(match, []);
});
qunit_1.test("one time", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("hello"))(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippets(match, [input.slice(5)]);
});
qunit_1.test("several times", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("abcabcabc");
    var _a = helpers_1.unwrap(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("abc"))(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippets(match, [
        input.slice(3),
        input.slice(3).slice(3),
        input.slice(6).slice(3)
    ]);
});
qunit_1.module("[combinators] present(many) (at least one match)");
qunit_1.test("zero times", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("abcabcabc");
    var mismatch = hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("def")))(input);
    helpers_1.eqError(mismatch, hbs_parser_next_1.err(input, "empty"));
});
qunit_1.test("one time", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var _a = helpers_1.unwrap(hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("hello")))(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(5).rest);
    helpers_1.eqSnippets(match, [input.slice(5)]);
});
qunit_1.test("several times", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("abcabcabc");
    var _a = helpers_1.unwrap(hbs_parser_next_1.utils.present(hbs_parser_next_1.multi.many(hbs_parser_next_1.combinators.tag("abc")))(input)), next = _a[0], match = _a[1];
    helpers_1.eqSnippet(next, input.slice(9).rest);
    helpers_1.eqSnippets(match, [
        input.slice(3),
        input.slice(3).slice(3),
        input.slice(6).slice(3)
    ]);
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1bml0L3F1bml0L3F1bml0LmNzcyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1bml0L3F1bml0L3F1bml0LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9jb21iaW5hdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9tdWx0aS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC9yZWFkLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL3NlcmlhbGl6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC90b2tlbi1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFkL3Rva2Vucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhZC91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc25pcHBldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3Bhbi50cyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9jb21iaW5hdG9ycy10ZXN0LnRzIiwid2VicGFjazovLy8uL3Rlc3RzL2hicy1yZWFkZXItdGVzdC50cyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3Rlc3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3Rlc3RzL211bHRpLXRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLG9GQUF1QixjQUFjLEU7Ozs7Ozs7Ozs7OztBQ0FwRDtBQUFlLG9GQUF1QixlQUFlLEU7Ozs7Ozs7Ozs7O0FDQXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JELHlEQUF5RDtBQUN6RCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUIsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHVGQUF1Rjs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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LE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBNkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFlBQVksSUFBSTtBQUNoQjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxZQUFZLFNBQVM7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sS0FBSzs7QUFFTDtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0NBQWtDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU8seURBQXlEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FB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O0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBRXpDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSwyQkFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLGFBQWE7QUFDcEc7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OEMsY0FBYztBQUM1RCxtQkFBTyxDQUFDLCtIQUE0QztBQUNwRCxtQkFBTyxDQUFDLDBLQUFxRTtBQUM3RSxjQUFjLG1CQUFPLENBQUMsa0RBQU87QUFDN0I7QUFDQTtBQUNBLG1CQUFPLENBQUMsdURBQW9CO0FBQzVCLG1CQUFPLENBQUMsMkNBQWM7QUFDdEIsbUJBQU8sQ0FBQyxxREFBbUI7Ozs7Ozs7Ozs7Ozs7QUNUZDtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyxrREFBTztBQUM3Qix3QkFBd0IsbUJBQU8sQ0FBQyx1Q0FBaUI7QUFDakQsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InRlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZXN0cy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJxdW5pdC5jc3NcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKiFcbiAqIFFVbml0IDIuOS4zXG4gKiBodHRwczovL3F1bml0anMuY29tL1xuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogRGF0ZTogMjAxOS0xMC0wOFQxNTo0OVpcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwkMSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZ2xvYmFsJDEgPSBnbG9iYWwkMSAmJiBnbG9iYWwkMS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gZ2xvYmFsJDFbJ2RlZmF1bHQnXSA6IGdsb2JhbCQxO1xuXG4gIHZhciB3aW5kb3ckMSA9IGdsb2JhbCQxLndpbmRvdztcbiAgdmFyIHNlbGYkMSA9IGdsb2JhbCQxLnNlbGY7XG4gIHZhciBjb25zb2xlID0gZ2xvYmFsJDEuY29uc29sZTtcbiAgdmFyIHNldFRpbWVvdXQkMSA9IGdsb2JhbCQxLnNldFRpbWVvdXQ7XG4gIHZhciBjbGVhclRpbWVvdXQgPSBnbG9iYWwkMS5jbGVhclRpbWVvdXQ7XG5cbiAgdmFyIGRvY3VtZW50JDEgPSB3aW5kb3ckMSAmJiB3aW5kb3ckMS5kb2N1bWVudDtcbiAgdmFyIG5hdmlnYXRvciA9IHdpbmRvdyQxICYmIHdpbmRvdyQxLm5hdmlnYXRvcjtcblxuICB2YXIgbG9jYWxTZXNzaW9uU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgXHR2YXIgeCA9IFwicXVuaXQtdGVzdC1zdHJpbmdcIjtcbiAgXHR0cnkge1xuICBcdFx0Z2xvYmFsJDEuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgXHRcdGdsb2JhbCQxLnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gIFx0XHRyZXR1cm4gZ2xvYmFsJDEuc2Vzc2lvblN0b3JhZ2U7XG4gIFx0fSBjYXRjaCAoZSkge1xuICBcdFx0cmV0dXJuIHVuZGVmaW5lZDtcbiAgXHR9XG4gIH0oKTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcHJveGllcyB0byB0aGUgZ2l2ZW4gbWV0aG9kIG5hbWUgb24gdGhlIGdsb2JhbHNcbiAgICogY29uc29sZSBvYmplY3QuIFRoZSBwcm94eSB3aWxsIGFsc28gZGV0ZWN0IGlmIHRoZSBjb25zb2xlIGRvZXNuJ3QgZXhpc3QgYW5kXG4gICAqIHdpbGwgYXBwcm9wcmlhdGVseSBuby1vcC4gVGhpcyBhbGxvd3Mgc3VwcG9ydCBmb3IgSUU5LCB3aGljaCBkb2Vzbid0IGhhdmUgYVxuICAgKiBjb25zb2xlIGlmIHRoZSBkZXZlbG9wZXIgdG9vbHMgYXJlIG5vdCBvcGVuLlxuICAgKi9cbiAgZnVuY3Rpb24gY29uc29sZVByb3h5KG1ldGhvZCkge1xuICBcdHJldHVybiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRpZiAoY29uc29sZSkge1xuICBcdFx0XHRjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgXHRcdH1cbiAgXHR9O1xuICB9XG5cbiAgdmFyIExvZ2dlciA9IHtcbiAgXHR3YXJuOiBjb25zb2xlUHJveHkoXCJ3YXJuXCIpXG4gIH07XG5cbiAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4gIHZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgdmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICAgIHJldHVybiBhcnIyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIG5vdyA9IERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHtcbiAgXHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG5cbiAgdmFyIGhhc1BlcmZvcm1hbmNlQXBpID0gZGV0ZWN0UGVyZm9ybWFuY2VBcGkoKTtcbiAgdmFyIHBlcmZvcm1hbmNlID0gaGFzUGVyZm9ybWFuY2VBcGkgPyB3aW5kb3ckMS5wZXJmb3JtYW5jZSA6IHVuZGVmaW5lZDtcbiAgdmFyIHBlcmZvcm1hbmNlTm93ID0gaGFzUGVyZm9ybWFuY2VBcGkgPyBwZXJmb3JtYW5jZS5ub3cuYmluZChwZXJmb3JtYW5jZSkgOiBub3c7XG5cbiAgZnVuY3Rpb24gZGV0ZWN0UGVyZm9ybWFuY2VBcGkoKSB7XG4gIFx0cmV0dXJuIHdpbmRvdyQxICYmIHR5cGVvZiB3aW5kb3ckMS5wZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93JDEucGVyZm9ybWFuY2UubWFyayA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB3aW5kb3ckMS5wZXJmb3JtYW5jZS5tZWFzdXJlID09PSBcImZ1bmN0aW9uXCI7XG4gIH1cblxuICBmdW5jdGlvbiBtZWFzdXJlKGNvbW1lbnQsIHN0YXJ0TWFyaywgZW5kTWFyaykge1xuXG4gIFx0Ly8gYHBlcmZvcm1hbmNlLm1lYXN1cmVgIG1heSBmYWlsIGlmIHRoZSBtYXJrIGNvdWxkIG5vdCBiZSBmb3VuZC5cbiAgXHQvLyByZWFzb25zIGEgc3BlY2lmaWMgbWFyayBjb3VsZCBub3QgYmUgZm91bmQgaW5jbHVkZTogb3V0c2lkZSBjb2RlIGludm9raW5nIGBwZXJmb3JtYW5jZS5jbGVhck1hcmtzKClgXG4gIFx0dHJ5IHtcbiAgXHRcdHBlcmZvcm1hbmNlLm1lYXN1cmUoY29tbWVudCwgc3RhcnRNYXJrLCBlbmRNYXJrKTtcbiAgXHR9IGNhdGNoIChleCkge1xuICBcdFx0TG9nZ2VyLndhcm4oXCJwZXJmb3JtYW5jZS5tZWFzdXJlIGNvdWxkIG5vdCBiZSBleGVjdXRlZCBiZWNhdXNlIG9mIFwiLCBleC5tZXNzYWdlKTtcbiAgXHR9XG4gIH1cblxuICB2YXIgZGVmaW5lZCA9IHtcbiAgXHRkb2N1bWVudDogd2luZG93JDEgJiYgd2luZG93JDEuZG9jdW1lbnQgIT09IHVuZGVmaW5lZCxcbiAgXHRzZXRUaW1lb3V0OiBzZXRUaW1lb3V0JDEgIT09IHVuZGVmaW5lZFxuICB9O1xuXG4gIC8vIFJldHVybnMgYSBuZXcgQXJyYXkgd2l0aCB0aGUgZWxlbWVudHMgdGhhdCBhcmUgaW4gYSBidXQgbm90IGluIGJcbiAgZnVuY3Rpb24gZGlmZihhLCBiKSB7XG4gIFx0dmFyIGksXG4gIFx0ICAgIGosXG4gIFx0ICAgIHJlc3VsdCA9IGEuc2xpY2UoKTtcblxuICBcdGZvciAoaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgXHRcdGZvciAoaiA9IDA7IGogPCBiLmxlbmd0aDsgaisrKSB7XG4gIFx0XHRcdGlmIChyZXN1bHRbaV0gPT09IGJbal0pIHtcbiAgXHRcdFx0XHRyZXN1bHQuc3BsaWNlKGksIDEpO1xuICBcdFx0XHRcdGktLTtcbiAgXHRcdFx0XHRicmVhaztcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH1cbiAgXHRyZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhbiBlbGVtZW50IGV4aXN0cyBpbiBhIGdpdmVuIGFycmF5IG9yIG5vdC5cbiAgICpcbiAgICogQG1ldGhvZCBpbkFycmF5XG4gICAqIEBwYXJhbSB7QW55fSBlbGVtXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBpbkFycmF5KGVsZW0sIGFycmF5KSB7XG4gIFx0cmV0dXJuIGFycmF5LmluZGV4T2YoZWxlbSkgIT09IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgY2xvbmUgb2YgYW4gb2JqZWN0IHVzaW5nIG9ubHkgQXJyYXkgb3IgT2JqZWN0IGFzIGJhc2UsXG4gICAqIGFuZCBjb3BpZXMgb3ZlciB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgKiBAcmV0dXJuIHtPYmplY3R9IE5ldyBvYmplY3Qgd2l0aCBvbmx5IHRoZSBvd24gcHJvcGVydGllcyAocmVjdXJzaXZlbHkpLlxuICAgKi9cbiAgZnVuY3Rpb24gb2JqZWN0VmFsdWVzKG9iaikge1xuICBcdHZhciBrZXksXG4gIFx0ICAgIHZhbCxcbiAgXHQgICAgdmFscyA9IGlzKFwiYXJyYXlcIiwgb2JqKSA/IFtdIDoge307XG4gIFx0Zm9yIChrZXkgaW4gb2JqKSB7XG4gIFx0XHRpZiAoaGFzT3duLmNhbGwob2JqLCBrZXkpKSB7XG4gIFx0XHRcdHZhbCA9IG9ialtrZXldO1xuICBcdFx0XHR2YWxzW2tleV0gPSB2YWwgPT09IE9iamVjdCh2YWwpID8gb2JqZWN0VmFsdWVzKHZhbCkgOiB2YWw7XG4gIFx0XHR9XG4gIFx0fVxuICBcdHJldHVybiB2YWxzO1xuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHVuZGVmT25seSkge1xuICBcdGZvciAodmFyIHByb3AgaW4gYikge1xuICBcdFx0aWYgKGhhc093bi5jYWxsKGIsIHByb3ApKSB7XG4gIFx0XHRcdGlmIChiW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgXHRcdFx0XHRkZWxldGUgYVtwcm9wXTtcbiAgXHRcdFx0fSBlbHNlIGlmICghKHVuZGVmT25seSAmJiB0eXBlb2YgYVtwcm9wXSAhPT0gXCJ1bmRlZmluZWRcIikpIHtcbiAgXHRcdFx0XHRhW3Byb3BdID0gYltwcm9wXTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH1cblxuICBcdHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JqZWN0VHlwZShvYmopIHtcbiAgXHRpZiAodHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBcdFx0cmV0dXJuIFwidW5kZWZpbmVkXCI7XG4gIFx0fVxuXG4gIFx0Ly8gQ29uc2lkZXI6IHR5cGVvZiBudWxsID09PSBvYmplY3RcbiAgXHRpZiAob2JqID09PSBudWxsKSB7XG4gIFx0XHRyZXR1cm4gXCJudWxsXCI7XG4gIFx0fVxuXG4gIFx0dmFyIG1hdGNoID0gdG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9eXFxbb2JqZWN0XFxzKC4qKVxcXSQvKSxcbiAgXHQgICAgdHlwZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuXG4gIFx0c3dpdGNoICh0eXBlKSB7XG4gIFx0XHRjYXNlIFwiTnVtYmVyXCI6XG4gIFx0XHRcdGlmIChpc05hTihvYmopKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwibmFuXCI7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cmV0dXJuIFwibnVtYmVyXCI7XG4gIFx0XHRjYXNlIFwiU3RyaW5nXCI6XG4gIFx0XHRjYXNlIFwiQm9vbGVhblwiOlxuICBcdFx0Y2FzZSBcIkFycmF5XCI6XG4gIFx0XHRjYXNlIFwiU2V0XCI6XG4gIFx0XHRjYXNlIFwiTWFwXCI6XG4gIFx0XHRjYXNlIFwiRGF0ZVwiOlxuICBcdFx0Y2FzZSBcIlJlZ0V4cFwiOlxuICBcdFx0Y2FzZSBcIkZ1bmN0aW9uXCI6XG4gIFx0XHRjYXNlIFwiU3ltYm9sXCI6XG4gIFx0XHRcdHJldHVybiB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gIFx0XHRkZWZhdWx0OlxuICBcdFx0XHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG4gIFx0fVxuICB9XG5cbiAgLy8gU2FmZSBvYmplY3QgdHlwZSBjaGVja2luZ1xuICBmdW5jdGlvbiBpcyh0eXBlLCBvYmopIHtcbiAgXHRyZXR1cm4gb2JqZWN0VHlwZShvYmopID09PSB0eXBlO1xuICB9XG5cbiAgLy8gQmFzZWQgb24gSmF2YSdzIFN0cmluZy5oYXNoQ29kZSwgYSBzaW1wbGUgYnV0IG5vdFxuICAvLyByaWdvcm91c2x5IGNvbGxpc2lvbiByZXNpc3RhbnQgaGFzaGluZyBmdW5jdGlvblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhhc2gobW9kdWxlLCB0ZXN0TmFtZSkge1xuICBcdHZhciBzdHIgPSBtb2R1bGUgKyBcIlxceDFDXCIgKyB0ZXN0TmFtZTtcbiAgXHR2YXIgaGFzaCA9IDA7XG5cbiAgXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICBcdFx0aGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpO1xuICBcdFx0aGFzaCB8PSAwO1xuICBcdH1cblxuICBcdC8vIENvbnZlcnQgdGhlIHBvc3NpYmx5IG5lZ2F0aXZlIGludGVnZXIgaGFzaCBjb2RlIGludG8gYW4gOCBjaGFyYWN0ZXIgaGV4IHN0cmluZywgd2hpY2ggaXNuJ3RcbiAgXHQvLyBzdHJpY3RseSBuZWNlc3NhcnkgYnV0IGluY3JlYXNlcyB1c2VyIHVuZGVyc3RhbmRpbmcgdGhhdCB0aGUgaWQgaXMgYSBTSEEtbGlrZSBoYXNoXG4gIFx0dmFyIGhleCA9ICgweDEwMDAwMDAwMCArIGhhc2gpLnRvU3RyaW5nKDE2KTtcbiAgXHRpZiAoaGV4Lmxlbmd0aCA8IDgpIHtcbiAgXHRcdGhleCA9IFwiMDAwMDAwMFwiICsgaGV4O1xuICBcdH1cblxuICBcdHJldHVybiBoZXguc2xpY2UoLTgpO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgZXF1YWxpdHkgYW55IEphdmFTY3JpcHQgdHlwZS5cbiAgLy8gQXV0aG9yczogUGhpbGlwcGUgUmF0aMOpIDxwcmF0aGVAZ21haWwuY29tPiwgRGF2aWQgQ2hhbiA8ZGF2aWRAdHJvaS5vcmc+XG4gIHZhciBlcXVpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgXHQvLyBWYWx1ZSBwYWlycyBxdWV1ZWQgZm9yIGNvbXBhcmlzb24uIFVzZWQgZm9yIGJyZWFkdGgtZmlyc3QgcHJvY2Vzc2luZyBvcmRlciwgcmVjdXJzaW9uXG4gIFx0Ly8gZGV0ZWN0aW9uIGFuZCBhdm9pZGluZyByZXBlYXRlZCBjb21wYXJpc29uIChzZWUgYmVsb3cgZm9yIGRldGFpbHMpLlxuICBcdC8vIEVsZW1lbnRzIGFyZSB7IGE6IHZhbCwgYjogdmFsIH0uXG4gIFx0dmFyIHBhaXJzID0gW107XG5cbiAgXHR2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKG9iaikge1xuICBcdFx0cmV0dXJuIG9iai5fX3Byb3RvX187XG4gIFx0fTtcblxuICBcdGZ1bmN0aW9uIHVzZVN0cmljdEVxdWFsaXR5KGEsIGIpIHtcblxuICBcdFx0Ly8gVGhpcyBvbmx5IGdldHMgY2FsbGVkIGlmIGEgYW5kIGIgYXJlIG5vdCBzdHJpY3QgZXF1YWwsIGFuZCBpcyB1c2VkIHRvIGNvbXBhcmUgb25cbiAgXHRcdC8vIHRoZSBwcmltaXRpdmUgdmFsdWVzIGluc2lkZSBvYmplY3Qgd3JhcHBlcnMuIEZvciBleGFtcGxlOlxuICBcdFx0Ly8gYHZhciBpID0gMTtgXG4gIFx0XHQvLyBgdmFyIGogPSBuZXcgTnVtYmVyKDEpO2BcbiAgXHRcdC8vIE5laXRoZXIgYSBub3IgYiBjYW4gYmUgbnVsbCwgYXMgYSAhPT0gYiBhbmQgdGhleSBoYXZlIHRoZSBzYW1lIHR5cGUuXG4gIFx0XHRpZiAoKHR5cGVvZiBhID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoYSkpID09PSBcIm9iamVjdFwiKSB7XG4gIFx0XHRcdGEgPSBhLnZhbHVlT2YoKTtcbiAgXHRcdH1cbiAgXHRcdGlmICgodHlwZW9mIGIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihiKSkgPT09IFwib2JqZWN0XCIpIHtcbiAgXHRcdFx0YiA9IGIudmFsdWVPZigpO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gYSA9PT0gYjtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBjb21wYXJlQ29uc3RydWN0b3JzKGEsIGIpIHtcbiAgXHRcdHZhciBwcm90b0EgPSBnZXRQcm90byhhKTtcbiAgXHRcdHZhciBwcm90b0IgPSBnZXRQcm90byhiKTtcblxuICBcdFx0Ly8gQ29tcGFyaW5nIGNvbnN0cnVjdG9ycyBpcyBtb3JlIHN0cmljdCB0aGFuIHVzaW5nIGBpbnN0YW5jZW9mYFxuICBcdFx0aWYgKGEuY29uc3RydWN0b3IgPT09IGIuY29uc3RydWN0b3IpIHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFJlZiAjODUxXG4gIFx0XHQvLyBJZiB0aGUgb2JqIHByb3RvdHlwZSBkZXNjZW5kcyBmcm9tIGEgbnVsbCBjb25zdHJ1Y3RvciwgdHJlYXQgaXRcbiAgXHRcdC8vIGFzIGEgbnVsbCBwcm90b3R5cGUuXG4gIFx0XHRpZiAocHJvdG9BICYmIHByb3RvQS5jb25zdHJ1Y3RvciA9PT0gbnVsbCkge1xuICBcdFx0XHRwcm90b0EgPSBudWxsO1xuICBcdFx0fVxuICBcdFx0aWYgKHByb3RvQiAmJiBwcm90b0IuY29uc3RydWN0b3IgPT09IG51bGwpIHtcbiAgXHRcdFx0cHJvdG9CID0gbnVsbDtcbiAgXHRcdH1cblxuICBcdFx0Ly8gQWxsb3cgb2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSB0byBiZSBlcXVpdmFsZW50IHRvXG4gIFx0XHQvLyBvYmplY3RzIHdpdGggT2JqZWN0IGFzIHRoZWlyIGNvbnN0cnVjdG9yLlxuICBcdFx0aWYgKHByb3RvQSA9PT0gbnVsbCAmJiBwcm90b0IgPT09IE9iamVjdC5wcm90b3R5cGUgfHwgcHJvdG9CID09PSBudWxsICYmIHByb3RvQSA9PT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIGZhbHNlO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGdldFJlZ0V4cEZsYWdzKHJlZ2V4cCkge1xuICBcdFx0cmV0dXJuIFwiZmxhZ3NcIiBpbiByZWdleHAgPyByZWdleHAuZmxhZ3MgOiByZWdleHAudG9TdHJpbmcoKS5tYXRjaCgvW2dpbXV5XSokLylbMF07XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gaXNDb250YWluZXIodmFsKSB7XG4gIFx0XHRyZXR1cm4gW1wib2JqZWN0XCIsIFwiYXJyYXlcIiwgXCJtYXBcIiwgXCJzZXRcIl0uaW5kZXhPZihvYmplY3RUeXBlKHZhbCkpICE9PSAtMTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBicmVhZHRoRmlyc3RDb21wYXJlQ2hpbGQoYSwgYikge1xuXG4gIFx0XHQvLyBJZiBhIGlzIGEgY29udGFpbmVyIG5vdCByZWZlcmVuY2UtZXF1YWwgdG8gYiwgcG9zdHBvbmUgdGhlIGNvbXBhcmlzb24gdG8gdGhlXG4gIFx0XHQvLyBlbmQgb2YgdGhlIHBhaXJzIHF1ZXVlIC0tIHVubGVzcyAoYSwgYikgaGFzIGJlZW4gc2VlbiBiZWZvcmUsIGluIHdoaWNoIGNhc2Ugc2tpcFxuICBcdFx0Ly8gb3ZlciB0aGUgcGFpci5cbiAgXHRcdGlmIChhID09PSBiKSB7XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fVxuICBcdFx0aWYgKCFpc0NvbnRhaW5lcihhKSkge1xuICBcdFx0XHRyZXR1cm4gdHlwZUVxdWl2KGEsIGIpO1xuICBcdFx0fVxuICBcdFx0aWYgKHBhaXJzLmV2ZXJ5KGZ1bmN0aW9uIChwYWlyKSB7XG4gIFx0XHRcdHJldHVybiBwYWlyLmEgIT09IGEgfHwgcGFpci5iICE9PSBiO1xuICBcdFx0fSkpIHtcblxuICBcdFx0XHQvLyBOb3QgeWV0IHN0YXJ0ZWQgY29tcGFyaW5nIHRoaXMgcGFpclxuICBcdFx0XHRwYWlycy5wdXNoKHsgYTogYSwgYjogYiB9KTtcbiAgXHRcdH1cbiAgXHRcdHJldHVybiB0cnVlO1xuICBcdH1cblxuICBcdHZhciBjYWxsYmFja3MgPSB7XG4gIFx0XHRcInN0cmluZ1wiOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgXHRcdFwiYm9vbGVhblwiOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgXHRcdFwibnVtYmVyXCI6IHVzZVN0cmljdEVxdWFsaXR5LFxuICBcdFx0XCJudWxsXCI6IHVzZVN0cmljdEVxdWFsaXR5LFxuICBcdFx0XCJ1bmRlZmluZWRcIjogdXNlU3RyaWN0RXF1YWxpdHksXG4gIFx0XHRcInN5bWJvbFwiOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgXHRcdFwiZGF0ZVwiOiB1c2VTdHJpY3RFcXVhbGl0eSxcblxuICBcdFx0XCJuYW5cIjogZnVuY3Rpb24gbmFuKCkge1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH0sXG5cbiAgXHRcdFwicmVnZXhwXCI6IGZ1bmN0aW9uIHJlZ2V4cChhLCBiKSB7XG4gIFx0XHRcdHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiZcblxuICBcdFx0XHQvLyBJbmNsdWRlIGZsYWdzIGluIHRoZSBjb21wYXJpc29uXG4gIFx0XHRcdGdldFJlZ0V4cEZsYWdzKGEpID09PSBnZXRSZWdFeHBGbGFncyhiKTtcbiAgXHRcdH0sXG5cbiAgXHRcdC8vIGFib3J0IChpZGVudGljYWwgcmVmZXJlbmNlcyAvIGluc3RhbmNlIG1ldGhvZHMgd2VyZSBza2lwcGVkIGVhcmxpZXIpXG4gIFx0XHRcImZ1bmN0aW9uXCI6IGZ1bmN0aW9uIF9mdW5jdGlvbigpIHtcbiAgXHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0fSxcblxuICBcdFx0XCJhcnJheVwiOiBmdW5jdGlvbiBhcnJheShhLCBiKSB7XG4gIFx0XHRcdHZhciBpLCBsZW47XG5cbiAgXHRcdFx0bGVuID0gYS5sZW5ndGg7XG4gIFx0XHRcdGlmIChsZW4gIT09IGIubGVuZ3RoKSB7XG5cbiAgXHRcdFx0XHQvLyBTYWZlIGFuZCBmYXN0ZXJcbiAgXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblxuICBcdFx0XHRcdC8vIENvbXBhcmUgbm9uLWNvbnRhaW5lcnM7IHF1ZXVlIG5vbi1yZWZlcmVuY2UtZXF1YWwgY29udGFpbmVyc1xuICBcdFx0XHRcdGlmICghYnJlYWR0aEZpcnN0Q29tcGFyZUNoaWxkKGFbaV0sIGJbaV0pKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fSxcblxuICBcdFx0Ly8gRGVmaW5lIHNldHMgYSBhbmQgYiB0byBiZSBlcXVpdmFsZW50IGlmIGZvciBlYWNoIGVsZW1lbnQgYVZhbCBpbiBhLCB0aGVyZVxuICBcdFx0Ly8gaXMgc29tZSBlbGVtZW50IGJWYWwgaW4gYiBzdWNoIHRoYXQgYVZhbCBhbmQgYlZhbCBhcmUgZXF1aXZhbGVudC4gRWxlbWVudFxuICBcdFx0Ly8gcmVwZXRpdGlvbnMgYXJlIG5vdCBjb3VudGVkLCBzbyB0aGVzZSBhcmUgZXF1aXZhbGVudDpcbiAgXHRcdC8vIGEgPSBuZXcgU2V0KCBbIHt9LCBbXSwgW10gXSApO1xuICBcdFx0Ly8gYiA9IG5ldyBTZXQoIFsge30sIHt9LCBbXSBdICk7XG4gIFx0XHRcInNldFwiOiBmdW5jdGlvbiBzZXQkJDEoYSwgYikge1xuICBcdFx0XHR2YXIgaW5uZXJFcSxcbiAgXHRcdFx0ICAgIG91dGVyRXEgPSB0cnVlO1xuXG4gIFx0XHRcdGlmIChhLnNpemUgIT09IGIuc2l6ZSkge1xuXG4gIFx0XHRcdFx0Ly8gVGhpcyBvcHRpbWl6YXRpb24gaGFzIGNlcnRhaW4gcXVpcmtzIGJlY2F1c2Ugb2YgdGhlIGxhY2sgb2ZcbiAgXHRcdFx0XHQvLyByZXBldGl0aW9uIGNvdW50aW5nLiBGb3IgaW5zdGFuY2UsIGFkZGluZyB0aGUgc2FtZVxuICBcdFx0XHRcdC8vIChyZWZlcmVuY2UtaWRlbnRpY2FsKSBlbGVtZW50IHRvIHR3byBlcXVpdmFsZW50IHNldHMgY2FuXG4gIFx0XHRcdFx0Ly8gbWFrZSB0aGVtIG5vbi1lcXVpdmFsZW50LlxuICBcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGEuZm9yRWFjaChmdW5jdGlvbiAoYVZhbCkge1xuXG4gIFx0XHRcdFx0Ly8gU2hvcnQtY2lyY3VpdCBpZiB0aGUgcmVzdWx0IGlzIGFscmVhZHkga25vd24uIChVc2luZyBmb3IuLi5vZlxuICBcdFx0XHRcdC8vIHdpdGggYSBicmVhayBjbGF1c2Ugd291bGQgYmUgY2xlYW5lciBoZXJlLCBidXQgaXQgd291bGQgY2F1c2VcbiAgXHRcdFx0XHQvLyBhIHN5bnRheCBlcnJvciBvbiBvbGRlciBKYXZhc2NyaXB0IGltcGxlbWVudGF0aW9ucyBldmVuIGlmXG4gIFx0XHRcdFx0Ly8gU2V0IGlzIHVudXNlZClcbiAgXHRcdFx0XHRpZiAoIW91dGVyRXEpIHtcbiAgXHRcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRpbm5lckVxID0gZmFsc2U7XG5cbiAgXHRcdFx0XHRiLmZvckVhY2goZnVuY3Rpb24gKGJWYWwpIHtcbiAgXHRcdFx0XHRcdHZhciBwYXJlbnRQYWlycztcblxuICBcdFx0XHRcdFx0Ly8gTGlrZXdpc2UsIHNob3J0LWNpcmN1aXQgaWYgdGhlIHJlc3VsdCBpcyBhbHJlYWR5IGtub3duXG4gIFx0XHRcdFx0XHRpZiAoaW5uZXJFcSkge1xuICBcdFx0XHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdC8vIFN3YXAgb3V0IHRoZSBnbG9iYWwgcGFpcnMgbGlzdCwgYXMgdGhlIG5lc3RlZCBjYWxsIHRvXG4gIFx0XHRcdFx0XHQvLyBpbm5lckVxdWl2IHdpbGwgY2xvYmJlciBpdHMgY29udGVudHNcbiAgXHRcdFx0XHRcdHBhcmVudFBhaXJzID0gcGFpcnM7XG4gIFx0XHRcdFx0XHRpZiAoaW5uZXJFcXVpdihiVmFsLCBhVmFsKSkge1xuICBcdFx0XHRcdFx0XHRpbm5lckVxID0gdHJ1ZTtcbiAgXHRcdFx0XHRcdH1cblxuICBcdFx0XHRcdFx0Ly8gUmVwbGFjZSB0aGUgZ2xvYmFsIHBhaXJzIGxpc3RcbiAgXHRcdFx0XHRcdHBhaXJzID0gcGFyZW50UGFpcnM7XG4gIFx0XHRcdFx0fSk7XG5cbiAgXHRcdFx0XHRpZiAoIWlubmVyRXEpIHtcbiAgXHRcdFx0XHRcdG91dGVyRXEgPSBmYWxzZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH0pO1xuXG4gIFx0XHRcdHJldHVybiBvdXRlckVxO1xuICBcdFx0fSxcblxuICBcdFx0Ly8gRGVmaW5lIG1hcHMgYSBhbmQgYiB0byBiZSBlcXVpdmFsZW50IGlmIGZvciBlYWNoIGtleS12YWx1ZSBwYWlyIChhS2V5LCBhVmFsKVxuICBcdFx0Ly8gaW4gYSwgdGhlcmUgaXMgc29tZSBrZXktdmFsdWUgcGFpciAoYktleSwgYlZhbCkgaW4gYiBzdWNoIHRoYXRcbiAgXHRcdC8vIFsgYUtleSwgYVZhbCBdIGFuZCBbIGJLZXksIGJWYWwgXSBhcmUgZXF1aXZhbGVudC4gS2V5IHJlcGV0aXRpb25zIGFyZSBub3RcbiAgXHRcdC8vIGNvdW50ZWQsIHNvIHRoZXNlIGFyZSBlcXVpdmFsZW50OlxuICBcdFx0Ly8gYSA9IG5ldyBNYXAoIFsgWyB7fSwgMSBdLCBbIHt9LCAxIF0sIFsgW10sIDEgXSBdICk7XG4gIFx0XHQvLyBiID0gbmV3IE1hcCggWyBbIHt9LCAxIF0sIFsgW10sIDEgXSwgWyBbXSwgMSBdIF0gKTtcbiAgXHRcdFwibWFwXCI6IGZ1bmN0aW9uIG1hcChhLCBiKSB7XG4gIFx0XHRcdHZhciBpbm5lckVxLFxuICBcdFx0XHQgICAgb3V0ZXJFcSA9IHRydWU7XG5cbiAgXHRcdFx0aWYgKGEuc2l6ZSAhPT0gYi5zaXplKSB7XG5cbiAgXHRcdFx0XHQvLyBUaGlzIG9wdGltaXphdGlvbiBoYXMgY2VydGFpbiBxdWlya3MgYmVjYXVzZSBvZiB0aGUgbGFjayBvZlxuICBcdFx0XHRcdC8vIHJlcGV0aXRpb24gY291bnRpbmcuIEZvciBpbnN0YW5jZSwgYWRkaW5nIHRoZSBzYW1lXG4gIFx0XHRcdFx0Ly8gKHJlZmVyZW5jZS1pZGVudGljYWwpIGtleS12YWx1ZSBwYWlyIHRvIHR3byBlcXVpdmFsZW50IG1hcHNcbiAgXHRcdFx0XHQvLyBjYW4gbWFrZSB0aGVtIG5vbi1lcXVpdmFsZW50LlxuICBcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGEuZm9yRWFjaChmdW5jdGlvbiAoYVZhbCwgYUtleSkge1xuXG4gIFx0XHRcdFx0Ly8gU2hvcnQtY2lyY3VpdCBpZiB0aGUgcmVzdWx0IGlzIGFscmVhZHkga25vd24uIChVc2luZyBmb3IuLi5vZlxuICBcdFx0XHRcdC8vIHdpdGggYSBicmVhayBjbGF1c2Ugd291bGQgYmUgY2xlYW5lciBoZXJlLCBidXQgaXQgd291bGQgY2F1c2VcbiAgXHRcdFx0XHQvLyBhIHN5bnRheCBlcnJvciBvbiBvbGRlciBKYXZhc2NyaXB0IGltcGxlbWVudGF0aW9ucyBldmVuIGlmXG4gIFx0XHRcdFx0Ly8gTWFwIGlzIHVudXNlZClcbiAgXHRcdFx0XHRpZiAoIW91dGVyRXEpIHtcbiAgXHRcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRpbm5lckVxID0gZmFsc2U7XG5cbiAgXHRcdFx0XHRiLmZvckVhY2goZnVuY3Rpb24gKGJWYWwsIGJLZXkpIHtcbiAgXHRcdFx0XHRcdHZhciBwYXJlbnRQYWlycztcblxuICBcdFx0XHRcdFx0Ly8gTGlrZXdpc2UsIHNob3J0LWNpcmN1aXQgaWYgdGhlIHJlc3VsdCBpcyBhbHJlYWR5IGtub3duXG4gIFx0XHRcdFx0XHRpZiAoaW5uZXJFcSkge1xuICBcdFx0XHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdC8vIFN3YXAgb3V0IHRoZSBnbG9iYWwgcGFpcnMgbGlzdCwgYXMgdGhlIG5lc3RlZCBjYWxsIHRvXG4gIFx0XHRcdFx0XHQvLyBpbm5lckVxdWl2IHdpbGwgY2xvYmJlciBpdHMgY29udGVudHNcbiAgXHRcdFx0XHRcdHBhcmVudFBhaXJzID0gcGFpcnM7XG4gIFx0XHRcdFx0XHRpZiAoaW5uZXJFcXVpdihbYlZhbCwgYktleV0sIFthVmFsLCBhS2V5XSkpIHtcbiAgXHRcdFx0XHRcdFx0aW5uZXJFcSA9IHRydWU7XG4gIFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdC8vIFJlcGxhY2UgdGhlIGdsb2JhbCBwYWlycyBsaXN0XG4gIFx0XHRcdFx0XHRwYWlycyA9IHBhcmVudFBhaXJzO1xuICBcdFx0XHRcdH0pO1xuXG4gIFx0XHRcdFx0aWYgKCFpbm5lckVxKSB7XG4gIFx0XHRcdFx0XHRvdXRlckVxID0gZmFsc2U7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9KTtcblxuICBcdFx0XHRyZXR1cm4gb3V0ZXJFcTtcbiAgXHRcdH0sXG5cbiAgXHRcdFwib2JqZWN0XCI6IGZ1bmN0aW9uIG9iamVjdChhLCBiKSB7XG4gIFx0XHRcdHZhciBpLFxuICBcdFx0XHQgICAgYVByb3BlcnRpZXMgPSBbXSxcbiAgXHRcdFx0ICAgIGJQcm9wZXJ0aWVzID0gW107XG5cbiAgXHRcdFx0aWYgKGNvbXBhcmVDb25zdHJ1Y3RvcnMoYSwgYikgPT09IGZhbHNlKSB7XG4gIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0Ly8gQmUgc3RyaWN0OiBkb24ndCBlbnN1cmUgaGFzT3duUHJvcGVydHkgYW5kIGdvIGRlZXBcbiAgXHRcdFx0Zm9yIChpIGluIGEpIHtcblxuICBcdFx0XHRcdC8vIENvbGxlY3QgYSdzIHByb3BlcnRpZXNcbiAgXHRcdFx0XHRhUHJvcGVydGllcy5wdXNoKGkpO1xuXG4gIFx0XHRcdFx0Ly8gU2tpcCBPT1AgbWV0aG9kcyB0aGF0IGxvb2sgdGhlIHNhbWVcbiAgXHRcdFx0XHRpZiAoYS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0ICYmIHR5cGVvZiBhLmNvbnN0cnVjdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBhW2ldID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGJbaV0gPT09IFwiZnVuY3Rpb25cIiAmJiBhW2ldLnRvU3RyaW5nKCkgPT09IGJbaV0udG9TdHJpbmcoKSkge1xuICBcdFx0XHRcdFx0Y29udGludWU7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0Ly8gQ29tcGFyZSBub24tY29udGFpbmVyczsgcXVldWUgbm9uLXJlZmVyZW5jZS1lcXVhbCBjb250YWluZXJzXG4gIFx0XHRcdFx0aWYgKCFicmVhZHRoRmlyc3RDb21wYXJlQ2hpbGQoYVtpXSwgYltpXSkpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHRmb3IgKGkgaW4gYikge1xuXG4gIFx0XHRcdFx0Ly8gQ29sbGVjdCBiJ3MgcHJvcGVydGllc1xuICBcdFx0XHRcdGJQcm9wZXJ0aWVzLnB1c2goaSk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHQvLyBFbnN1cmVzIGlkZW50aWNhbCBwcm9wZXJ0aWVzIG5hbWVcbiAgXHRcdFx0cmV0dXJuIHR5cGVFcXVpdihhUHJvcGVydGllcy5zb3J0KCksIGJQcm9wZXJ0aWVzLnNvcnQoKSk7XG4gIFx0XHR9XG4gIFx0fTtcblxuICBcdGZ1bmN0aW9uIHR5cGVFcXVpdihhLCBiKSB7XG4gIFx0XHR2YXIgdHlwZSA9IG9iamVjdFR5cGUoYSk7XG5cbiAgXHRcdC8vIENhbGxiYWNrcyBmb3IgY29udGFpbmVycyB3aWxsIGFwcGVuZCB0byB0aGUgcGFpcnMgcXVldWUgdG8gYWNoaWV2ZSBicmVhZHRoLWZpcnN0XG4gIFx0XHQvLyBzZWFyY2ggb3JkZXIuIFRoZSBwYWlycyBxdWV1ZSBpcyBhbHNvIHVzZWQgdG8gYXZvaWQgcmVwcm9jZXNzaW5nIGFueSBwYWlyIG9mXG4gIFx0XHQvLyBjb250YWluZXJzIHRoYXQgYXJlIHJlZmVyZW5jZS1lcXVhbCB0byBhIHByZXZpb3VzbHkgdmlzaXRlZCBwYWlyIChhIHNwZWNpYWwgY2FzZVxuICBcdFx0Ly8gdGhpcyBiZWluZyByZWN1cnNpb24gZGV0ZWN0aW9uKS5cbiAgXHRcdC8vXG4gIFx0XHQvLyBCZWNhdXNlIG9mIHRoaXMgYXBwcm9hY2gsIG9uY2UgdHlwZUVxdWl2IHJldHVybnMgYSBmYWxzZSB2YWx1ZSwgaXQgc2hvdWxkIG5vdCBiZVxuICBcdFx0Ly8gY2FsbGVkIGFnYWluIHdpdGhvdXQgY2xlYXJpbmcgdGhlIHBhaXIgcXVldWUgZWxzZSBpdCBtYXkgd3JvbmdseSByZXBvcnQgYSB2aXNpdGVkXG4gIFx0XHQvLyBwYWlyIGFzIGJlaW5nIGVxdWl2YWxlbnQuXG4gIFx0XHRyZXR1cm4gb2JqZWN0VHlwZShiKSA9PT0gdHlwZSAmJiBjYWxsYmFja3NbdHlwZV0oYSwgYik7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gaW5uZXJFcXVpdihhLCBiKSB7XG4gIFx0XHR2YXIgaSwgcGFpcjtcblxuICBcdFx0Ly8gV2UncmUgZG9uZSB3aGVuIHRoZXJlJ3Mgbm90aGluZyBtb3JlIHRvIGNvbXBhcmVcbiAgXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gQ2xlYXIgdGhlIGdsb2JhbCBwYWlyIHF1ZXVlIGFuZCBhZGQgdGhlIHRvcC1sZXZlbCB2YWx1ZXMgYmVpbmcgY29tcGFyZWRcbiAgXHRcdHBhaXJzID0gW3sgYTogYSwgYjogYiB9XTtcblxuICBcdFx0Zm9yIChpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdHBhaXIgPSBwYWlyc1tpXTtcblxuICBcdFx0XHQvLyBQZXJmb3JtIHR5cGUtc3BlY2lmaWMgY29tcGFyaXNvbiBvbiBhbnkgcGFpcnMgdGhhdCBhcmUgbm90IHN0cmljdGx5XG4gIFx0XHRcdC8vIGVxdWFsLiBGb3IgY29udGFpbmVyIHR5cGVzLCB0aGF0IGNvbXBhcmlzb24gd2lsbCBwb3N0cG9uZSBjb21wYXJpc29uXG4gIFx0XHRcdC8vIG9mIGFueSBzdWItY29udGFpbmVyIHBhaXIgdG8gdGhlIGVuZCBvZiB0aGUgcGFpciBxdWV1ZS4gVGhpcyBnaXZlc1xuICBcdFx0XHQvLyBicmVhZHRoLWZpcnN0IHNlYXJjaCBvcmRlci4gSXQgYWxzbyBhdm9pZHMgdGhlIHJlcHJvY2Vzc2luZyBvZlxuICBcdFx0XHQvLyByZWZlcmVuY2UtZXF1YWwgc2libGluZ3MsIGNvdXNpbnMgZXRjLCB3aGljaCBjYW4gaGF2ZSBhIHNpZ25pZmljYW50IHNwZWVkXG4gIFx0XHRcdC8vIGltcGFjdCB3aGVuIGNvbXBhcmluZyBhIGNvbnRhaW5lciBvZiBzbWFsbCBvYmplY3RzIGVhY2ggb2Ygd2hpY2ggaGFzIGFcbiAgXHRcdFx0Ly8gcmVmZXJlbmNlIHRvIHRoZSBzYW1lIChzaW5nbGV0b24pIGxhcmdlIG9iamVjdC5cbiAgXHRcdFx0aWYgKHBhaXIuYSAhPT0gcGFpci5iICYmICF0eXBlRXF1aXYocGFpci5hLCBwYWlyLmIpKSB7XG4gIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIC4uLmFjcm9zcyBhbGwgY29uc2VjdXRpdmUgYXJndW1lbnQgcGFpcnNcbiAgXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAyIHx8IGlubmVyRXF1aXYuYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgXHR9XG5cbiAgXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuICBcdFx0dmFyIHJlc3VsdCA9IGlubmVyRXF1aXYuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuXG4gIFx0XHQvLyBSZWxlYXNlIGFueSByZXRhaW5lZCBvYmplY3RzXG4gIFx0XHRwYWlycy5sZW5ndGggPSAwO1xuICBcdFx0cmV0dXJuIHJlc3VsdDtcbiAgXHR9O1xuICB9KSgpO1xuXG4gIC8qKlxuICAgKiBDb25maWcgb2JqZWN0OiBNYWludGFpbiBpbnRlcm5hbCBzdGF0ZVxuICAgKiBMYXRlciBleHBvc2VkIGFzIFFVbml0LmNvbmZpZ1xuICAgKiBgY29uZmlnYCBpbml0aWFsaXplZCBhdCB0b3Agb2Ygc2NvcGVcbiAgICovXG4gIHZhciBjb25maWcgPSB7XG5cbiAgXHQvLyBUaGUgcXVldWUgb2YgdGVzdHMgdG8gcnVuXG4gIFx0cXVldWU6IFtdLFxuXG4gIFx0Ly8gQmxvY2sgdW50aWwgZG9jdW1lbnQgcmVhZHlcbiAgXHRibG9ja2luZzogdHJ1ZSxcblxuICBcdC8vIEJ5IGRlZmF1bHQsIHJ1biBwcmV2aW91c2x5IGZhaWxlZCB0ZXN0cyBmaXJzdFxuICBcdC8vIHZlcnkgdXNlZnVsIGluIGNvbWJpbmF0aW9uIHdpdGggXCJIaWRlIHBhc3NlZCB0ZXN0c1wiIGNoZWNrZWRcbiAgXHRyZW9yZGVyOiB0cnVlLFxuXG4gIFx0Ly8gQnkgZGVmYXVsdCwgbW9kaWZ5IGRvY3VtZW50LnRpdGxlIHdoZW4gc3VpdGUgaXMgZG9uZVxuICBcdGFsdGVydGl0bGU6IHRydWUsXG5cbiAgXHQvLyBIVE1MIFJlcG9ydGVyOiBjb2xsYXBzZSBldmVyeSB0ZXN0IGV4Y2VwdCB0aGUgZmlyc3QgZmFpbGluZyB0ZXN0XG4gIFx0Ly8gSWYgZmFsc2UsIGFsbCBmYWlsaW5nIHRlc3RzIHdpbGwgYmUgZXhwYW5kZWRcbiAgXHRjb2xsYXBzZTogdHJ1ZSxcblxuICBcdC8vIEJ5IGRlZmF1bHQsIHNjcm9sbCB0byB0b3Agb2YgdGhlIHBhZ2Ugd2hlbiBzdWl0ZSBpcyBkb25lXG4gIFx0c2Nyb2xsdG9wOiB0cnVlLFxuXG4gIFx0Ly8gRGVwdGggdXAtdG8gd2hpY2ggb2JqZWN0IHdpbGwgYmUgZHVtcGVkXG4gIFx0bWF4RGVwdGg6IDUsXG5cbiAgXHQvLyBXaGVuIGVuYWJsZWQsIGFsbCB0ZXN0cyBtdXN0IGNhbGwgZXhwZWN0KClcbiAgXHRyZXF1aXJlRXhwZWN0czogZmFsc2UsXG5cbiAgXHQvLyBQbGFjZWhvbGRlciBmb3IgdXNlci1jb25maWd1cmFibGUgZm9ybS1leHBvc2VkIFVSTCBwYXJhbWV0ZXJzXG4gIFx0dXJsQ29uZmlnOiBbXSxcblxuICBcdC8vIFNldCBvZiBhbGwgbW9kdWxlcy5cbiAgXHRtb2R1bGVzOiBbXSxcblxuICBcdC8vIFRoZSBmaXJzdCB1bm5hbWVkIG1vZHVsZVxuICBcdGN1cnJlbnRNb2R1bGU6IHtcbiAgXHRcdG5hbWU6IFwiXCIsXG4gIFx0XHR0ZXN0czogW10sXG4gIFx0XHRjaGlsZE1vZHVsZXM6IFtdLFxuICBcdFx0dGVzdHNSdW46IDAsXG4gIFx0XHR1bnNraXBwZWRUZXN0c1J1bjogMCxcbiAgXHRcdGhvb2tzOiB7XG4gIFx0XHRcdGJlZm9yZTogW10sXG4gIFx0XHRcdGJlZm9yZUVhY2g6IFtdLFxuICBcdFx0XHRhZnRlckVhY2g6IFtdLFxuICBcdFx0XHRhZnRlcjogW11cbiAgXHRcdH1cbiAgXHR9LFxuXG4gIFx0Y2FsbGJhY2tzOiB7fSxcblxuICBcdC8vIFRoZSBzdG9yYWdlIG1vZHVsZSB0byB1c2UgZm9yIHJlb3JkZXJpbmcgdGVzdHNcbiAgXHRzdG9yYWdlOiBsb2NhbFNlc3Npb25TdG9yYWdlXG4gIH07XG5cbiAgLy8gdGFrZSBhIHByZWRlZmluZWQgUVVuaXQuY29uZmlnIGFuZCBleHRlbmQgdGhlIGRlZmF1bHRzXG4gIHZhciBnbG9iYWxDb25maWcgPSB3aW5kb3ckMSAmJiB3aW5kb3ckMS5RVW5pdCAmJiB3aW5kb3ckMS5RVW5pdC5jb25maWc7XG5cbiAgLy8gb25seSBleHRlbmQgdGhlIGdsb2JhbCBjb25maWcgaWYgdGhlcmUgaXMgbm8gUVVuaXQgb3ZlcmxvYWRcbiAgaWYgKHdpbmRvdyQxICYmIHdpbmRvdyQxLlFVbml0ICYmICF3aW5kb3ckMS5RVW5pdC52ZXJzaW9uKSB7XG4gIFx0ZXh0ZW5kKGNvbmZpZywgZ2xvYmFsQ29uZmlnKTtcbiAgfVxuXG4gIC8vIFB1c2ggYSBsb29zZSB1bm5hbWVkIG1vZHVsZSB0byB0aGUgbW9kdWxlcyBjb2xsZWN0aW9uXG4gIGNvbmZpZy5tb2R1bGVzLnB1c2goY29uZmlnLmN1cnJlbnRNb2R1bGUpO1xuXG4gIC8vIEJhc2VkIG9uIGpzRHVtcCBieSBBcmllbCBGbGVzbGVyXG4gIC8vIGh0dHA6Ly9mbGVzbGVyLmJsb2dzcG90LmNvbS8yMDA4LzA1L2pzZHVtcC1wcmV0dHktZHVtcC1vZi1hbnktamF2YXNjcmlwdC5odG1sXG4gIHZhciBkdW1wID0gKGZ1bmN0aW9uICgpIHtcbiAgXHRmdW5jdGlvbiBxdW90ZShzdHIpIHtcbiAgXHRcdHJldHVybiBcIlxcXCJcIiArIHN0ci50b1N0cmluZygpLnJlcGxhY2UoL1xcXFwvZywgXCJcXFxcXFxcXFwiKS5yZXBsYWNlKC9cIi9nLCBcIlxcXFxcXFwiXCIpICsgXCJcXFwiXCI7XG4gIFx0fVxuICBcdGZ1bmN0aW9uIGxpdGVyYWwobykge1xuICBcdFx0cmV0dXJuIG8gKyBcIlwiO1xuICBcdH1cbiAgXHRmdW5jdGlvbiBqb2luKHByZSwgYXJyLCBwb3N0KSB7XG4gIFx0XHR2YXIgcyA9IGR1bXAuc2VwYXJhdG9yKCksXG4gIFx0XHQgICAgYmFzZSA9IGR1bXAuaW5kZW50KCksXG4gIFx0XHQgICAgaW5uZXIgPSBkdW1wLmluZGVudCgxKTtcbiAgXHRcdGlmIChhcnIuam9pbikge1xuICBcdFx0XHRhcnIgPSBhcnIuam9pbihcIixcIiArIHMgKyBpbm5lcik7XG4gIFx0XHR9XG4gIFx0XHRpZiAoIWFycikge1xuICBcdFx0XHRyZXR1cm4gcHJlICsgcG9zdDtcbiAgXHRcdH1cbiAgXHRcdHJldHVybiBbcHJlLCBpbm5lciArIGFyciwgYmFzZSArIHBvc3RdLmpvaW4ocyk7XG4gIFx0fVxuICBcdGZ1bmN0aW9uIGFycmF5KGFyciwgc3RhY2spIHtcbiAgXHRcdHZhciBpID0gYXJyLmxlbmd0aCxcbiAgXHRcdCAgICByZXQgPSBuZXcgQXJyYXkoaSk7XG5cbiAgXHRcdGlmIChkdW1wLm1heERlcHRoICYmIGR1bXAuZGVwdGggPiBkdW1wLm1heERlcHRoKSB7XG4gIFx0XHRcdHJldHVybiBcIltvYmplY3QgQXJyYXldXCI7XG4gIFx0XHR9XG5cbiAgXHRcdHRoaXMudXAoKTtcbiAgXHRcdHdoaWxlIChpLS0pIHtcbiAgXHRcdFx0cmV0W2ldID0gdGhpcy5wYXJzZShhcnJbaV0sIHVuZGVmaW5lZCwgc3RhY2spO1xuICBcdFx0fVxuICBcdFx0dGhpcy5kb3duKCk7XG4gIFx0XHRyZXR1cm4gam9pbihcIltcIiwgcmV0LCBcIl1cIik7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgXHRcdHJldHVybiAoXG5cbiAgXHRcdFx0Ly9OYXRpdmUgQXJyYXlzXG4gIFx0XHRcdHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiIHx8XG5cbiAgXHRcdFx0Ly8gTm9kZUxpc3Qgb2JqZWN0c1xuICBcdFx0XHR0eXBlb2Ygb2JqLmxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJiBvYmouaXRlbSAhPT0gdW5kZWZpbmVkICYmIChvYmoubGVuZ3RoID8gb2JqLml0ZW0oMCkgPT09IG9ialswXSA6IG9iai5pdGVtKDApID09PSBudWxsICYmIG9ialswXSA9PT0gdW5kZWZpbmVkKVxuICBcdFx0KTtcbiAgXHR9XG5cbiAgXHR2YXIgcmVOYW1lID0gL15mdW5jdGlvbiAoXFx3KykvLFxuICBcdCAgICBkdW1wID0ge1xuXG4gIFx0XHQvLyBUaGUgb2JqVHlwZSBpcyB1c2VkIG1vc3RseSBpbnRlcm5hbGx5LCB5b3UgY2FuIGZpeCBhIChjdXN0b20pIHR5cGUgaW4gYWR2YW5jZVxuICBcdFx0cGFyc2U6IGZ1bmN0aW9uIHBhcnNlKG9iaiwgb2JqVHlwZSwgc3RhY2spIHtcbiAgXHRcdFx0c3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgXHRcdFx0dmFyIHJlcyxcbiAgXHRcdFx0ICAgIHBhcnNlcixcbiAgXHRcdFx0ICAgIHBhcnNlclR5cGUsXG4gIFx0XHRcdCAgICBvYmpJbmRleCA9IHN0YWNrLmluZGV4T2Yob2JqKTtcblxuICBcdFx0XHRpZiAob2JqSW5kZXggIT09IC0xKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwicmVjdXJzaW9uKFwiICsgKG9iakluZGV4IC0gc3RhY2subGVuZ3RoKSArIFwiKVwiO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0b2JqVHlwZSA9IG9ialR5cGUgfHwgdGhpcy50eXBlT2Yob2JqKTtcbiAgXHRcdFx0cGFyc2VyID0gdGhpcy5wYXJzZXJzW29ialR5cGVdO1xuICBcdFx0XHRwYXJzZXJUeXBlID0gdHlwZW9mIHBhcnNlciA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHBhcnNlcik7XG5cbiAgXHRcdFx0aWYgKHBhcnNlclR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0XHRcdHN0YWNrLnB1c2gob2JqKTtcbiAgXHRcdFx0XHRyZXMgPSBwYXJzZXIuY2FsbCh0aGlzLCBvYmosIHN0YWNrKTtcbiAgXHRcdFx0XHRzdGFjay5wb3AoKTtcbiAgXHRcdFx0XHRyZXR1cm4gcmVzO1xuICBcdFx0XHR9XG4gIFx0XHRcdHJldHVybiBwYXJzZXJUeXBlID09PSBcInN0cmluZ1wiID8gcGFyc2VyIDogdGhpcy5wYXJzZXJzLmVycm9yO1xuICBcdFx0fSxcbiAgXHRcdHR5cGVPZjogZnVuY3Rpb24gdHlwZU9mKG9iaikge1xuICBcdFx0XHR2YXIgdHlwZTtcblxuICBcdFx0XHRpZiAob2JqID09PSBudWxsKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwibnVsbFwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJ1bmRlZmluZWRcIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChpcyhcInJlZ2V4cFwiLCBvYmopKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwicmVnZXhwXCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAoaXMoXCJkYXRlXCIsIG9iaikpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJkYXRlXCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAoaXMoXCJmdW5jdGlvblwiLCBvYmopKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwiZnVuY3Rpb25cIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChvYmouc2V0SW50ZXJ2YWwgIT09IHVuZGVmaW5lZCAmJiBvYmouZG9jdW1lbnQgIT09IHVuZGVmaW5lZCAmJiBvYmoubm9kZVR5cGUgPT09IHVuZGVmaW5lZCkge1xuICBcdFx0XHRcdHR5cGUgPSBcIndpbmRvd1wiO1xuICBcdFx0XHR9IGVsc2UgaWYgKG9iai5ub2RlVHlwZSA9PT0gOSkge1xuICBcdFx0XHRcdHR5cGUgPSBcImRvY3VtZW50XCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAob2JqLm5vZGVUeXBlKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwibm9kZVwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkge1xuICBcdFx0XHRcdHR5cGUgPSBcImFycmF5XCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJlcnJvclwiO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHR5cGUgPSB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRyZXR1cm4gdHlwZTtcbiAgXHRcdH0sXG5cbiAgXHRcdHNlcGFyYXRvcjogZnVuY3Rpb24gc2VwYXJhdG9yKCkge1xuICBcdFx0XHRpZiAodGhpcy5tdWx0aWxpbmUpIHtcbiAgXHRcdFx0XHRyZXR1cm4gdGhpcy5IVE1MID8gXCI8YnIgLz5cIiA6IFwiXFxuXCI7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0cmV0dXJuIHRoaXMuSFRNTCA/IFwiJiMxNjA7XCIgOiBcIiBcIjtcbiAgXHRcdFx0fVxuICBcdFx0fSxcblxuICBcdFx0Ly8gRXh0cmEgY2FuIGJlIGEgbnVtYmVyLCBzaG9ydGN1dCBmb3IgaW5jcmVhc2luZy1jYWxsaW5nLWRlY3JlYXNpbmdcbiAgXHRcdGluZGVudDogZnVuY3Rpb24gaW5kZW50KGV4dHJhKSB7XG4gIFx0XHRcdGlmICghdGhpcy5tdWx0aWxpbmUpIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJcIjtcbiAgXHRcdFx0fVxuICBcdFx0XHR2YXIgY2hyID0gdGhpcy5pbmRlbnRDaGFyO1xuICBcdFx0XHRpZiAodGhpcy5IVE1MKSB7XG4gIFx0XHRcdFx0Y2hyID0gY2hyLnJlcGxhY2UoL1xcdC9nLCBcIiAgIFwiKS5yZXBsYWNlKC8gL2csIFwiJiMxNjA7XCIpO1xuICBcdFx0XHR9XG4gIFx0XHRcdHJldHVybiBuZXcgQXJyYXkodGhpcy5kZXB0aCArIChleHRyYSB8fCAwKSkuam9pbihjaHIpO1xuICBcdFx0fSxcbiAgXHRcdHVwOiBmdW5jdGlvbiB1cChhKSB7XG4gIFx0XHRcdHRoaXMuZGVwdGggKz0gYSB8fCAxO1xuICBcdFx0fSxcbiAgXHRcdGRvd246IGZ1bmN0aW9uIGRvd24oYSkge1xuICBcdFx0XHR0aGlzLmRlcHRoIC09IGEgfHwgMTtcbiAgXHRcdH0sXG4gIFx0XHRzZXRQYXJzZXI6IGZ1bmN0aW9uIHNldFBhcnNlcihuYW1lLCBwYXJzZXIpIHtcbiAgXHRcdFx0dGhpcy5wYXJzZXJzW25hbWVdID0gcGFyc2VyO1xuICBcdFx0fSxcblxuICBcdFx0Ly8gVGhlIG5leHQgMyBhcmUgZXhwb3NlZCBzbyB5b3UgY2FuIHVzZSB0aGVtXG4gIFx0XHRxdW90ZTogcXVvdGUsXG4gIFx0XHRsaXRlcmFsOiBsaXRlcmFsLFxuICBcdFx0am9pbjogam9pbixcbiAgXHRcdGRlcHRoOiAxLFxuICBcdFx0bWF4RGVwdGg6IGNvbmZpZy5tYXhEZXB0aCxcblxuICBcdFx0Ly8gVGhpcyBpcyB0aGUgbGlzdCBvZiBwYXJzZXJzLCB0byBtb2RpZnkgdGhlbSwgdXNlIGR1bXAuc2V0UGFyc2VyXG4gIFx0XHRwYXJzZXJzOiB7XG4gIFx0XHRcdHdpbmRvdzogXCJbV2luZG93XVwiLFxuICBcdFx0XHRkb2N1bWVudDogXCJbRG9jdW1lbnRdXCIsXG4gIFx0XHRcdGVycm9yOiBmdW5jdGlvbiBlcnJvcihfZXJyb3IpIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJFcnJvcihcXFwiXCIgKyBfZXJyb3IubWVzc2FnZSArIFwiXFxcIilcIjtcbiAgXHRcdFx0fSxcbiAgXHRcdFx0dW5rbm93bjogXCJbVW5rbm93bl1cIixcbiAgXHRcdFx0XCJudWxsXCI6IFwibnVsbFwiLFxuICBcdFx0XHRcInVuZGVmaW5lZFwiOiBcInVuZGVmaW5lZFwiLFxuICBcdFx0XHRcImZ1bmN0aW9uXCI6IGZ1bmN0aW9uIF9mdW5jdGlvbihmbikge1xuICBcdFx0XHRcdHZhciByZXQgPSBcImZ1bmN0aW9uXCIsXG5cblxuICBcdFx0XHRcdC8vIEZ1bmN0aW9ucyBuZXZlciBoYXZlIG5hbWUgaW4gSUVcbiAgXHRcdFx0XHRuYW1lID0gXCJuYW1lXCIgaW4gZm4gPyBmbi5uYW1lIDogKHJlTmFtZS5leGVjKGZuKSB8fCBbXSlbMV07XG5cbiAgXHRcdFx0XHRpZiAobmFtZSkge1xuICBcdFx0XHRcdFx0cmV0ICs9IFwiIFwiICsgbmFtZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0cmV0ICs9IFwiKFwiO1xuXG4gIFx0XHRcdFx0cmV0ID0gW3JldCwgZHVtcC5wYXJzZShmbiwgXCJmdW5jdGlvbkFyZ3NcIiksIFwiKXtcIl0uam9pbihcIlwiKTtcbiAgXHRcdFx0XHRyZXR1cm4gam9pbihyZXQsIGR1bXAucGFyc2UoZm4sIFwiZnVuY3Rpb25Db2RlXCIpLCBcIn1cIik7XG4gIFx0XHRcdH0sXG4gIFx0XHRcdGFycmF5OiBhcnJheSxcbiAgXHRcdFx0bm9kZWxpc3Q6IGFycmF5LFxuICBcdFx0XHRcImFyZ3VtZW50c1wiOiBhcnJheSxcbiAgXHRcdFx0b2JqZWN0OiBmdW5jdGlvbiBvYmplY3QobWFwLCBzdGFjaykge1xuICBcdFx0XHRcdHZhciBrZXlzLFxuICBcdFx0XHRcdCAgICBrZXksXG4gIFx0XHRcdFx0ICAgIHZhbCxcbiAgXHRcdFx0XHQgICAgaSxcbiAgXHRcdFx0XHQgICAgbm9uRW51bWVyYWJsZVByb3BlcnRpZXMsXG4gIFx0XHRcdFx0ICAgIHJldCA9IFtdO1xuXG4gIFx0XHRcdFx0aWYgKGR1bXAubWF4RGVwdGggJiYgZHVtcC5kZXB0aCA+IGR1bXAubWF4RGVwdGgpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBcIltvYmplY3QgT2JqZWN0XVwiO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdGR1bXAudXAoKTtcbiAgXHRcdFx0XHRrZXlzID0gW107XG4gIFx0XHRcdFx0Zm9yIChrZXkgaW4gbWFwKSB7XG4gIFx0XHRcdFx0XHRrZXlzLnB1c2goa2V5KTtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHQvLyBTb21lIHByb3BlcnRpZXMgYXJlIG5vdCBhbHdheXMgZW51bWVyYWJsZSBvbiBFcnJvciBvYmplY3RzLlxuICBcdFx0XHRcdG5vbkVudW1lcmFibGVQcm9wZXJ0aWVzID0gW1wibWVzc2FnZVwiLCBcIm5hbWVcIl07XG4gIFx0XHRcdFx0Zm9yIChpIGluIG5vbkVudW1lcmFibGVQcm9wZXJ0aWVzKSB7XG4gIFx0XHRcdFx0XHRrZXkgPSBub25FbnVtZXJhYmxlUHJvcGVydGllc1tpXTtcbiAgXHRcdFx0XHRcdGlmIChrZXkgaW4gbWFwICYmICFpbkFycmF5KGtleSwga2V5cykpIHtcbiAgXHRcdFx0XHRcdFx0a2V5cy5wdXNoKGtleSk7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdGtleXMuc29ydCgpO1xuICBcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdFx0XHRrZXkgPSBrZXlzW2ldO1xuICBcdFx0XHRcdFx0dmFsID0gbWFwW2tleV07XG4gIFx0XHRcdFx0XHRyZXQucHVzaChkdW1wLnBhcnNlKGtleSwgXCJrZXlcIikgKyBcIjogXCIgKyBkdW1wLnBhcnNlKHZhbCwgdW5kZWZpbmVkLCBzdGFjaykpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRkdW1wLmRvd24oKTtcbiAgXHRcdFx0XHRyZXR1cm4gam9pbihcIntcIiwgcmV0LCBcIn1cIik7XG4gIFx0XHRcdH0sXG4gIFx0XHRcdG5vZGU6IGZ1bmN0aW9uIG5vZGUoX25vZGUpIHtcbiAgXHRcdFx0XHR2YXIgbGVuLFxuICBcdFx0XHRcdCAgICBpLFxuICBcdFx0XHRcdCAgICB2YWwsXG4gIFx0XHRcdFx0ICAgIG9wZW4gPSBkdW1wLkhUTUwgPyBcIiZsdDtcIiA6IFwiPFwiLFxuICBcdFx0XHRcdCAgICBjbG9zZSA9IGR1bXAuSFRNTCA/IFwiJmd0O1wiIDogXCI+XCIsXG4gIFx0XHRcdFx0ICAgIHRhZyA9IF9ub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG4gIFx0XHRcdFx0ICAgIHJldCA9IG9wZW4gKyB0YWcsXG4gIFx0XHRcdFx0ICAgIGF0dHJzID0gX25vZGUuYXR0cmlidXRlcztcblxuICBcdFx0XHRcdGlmIChhdHRycykge1xuICBcdFx0XHRcdFx0Zm9yIChpID0gMCwgbGVuID0gYXR0cnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgXHRcdFx0XHRcdFx0dmFsID0gYXR0cnNbaV0ubm9kZVZhbHVlO1xuXG4gIFx0XHRcdFx0XHRcdC8vIElFNiBpbmNsdWRlcyBhbGwgYXR0cmlidXRlcyBpbiAuYXR0cmlidXRlcywgZXZlbiBvbmVzIG5vdCBleHBsaWNpdGx5XG4gIFx0XHRcdFx0XHRcdC8vIHNldC4gVGhvc2UgaGF2ZSB2YWx1ZXMgbGlrZSB1bmRlZmluZWQsIG51bGwsIDAsIGZhbHNlLCBcIlwiIG9yXG4gIFx0XHRcdFx0XHRcdC8vIFwiaW5oZXJpdFwiLlxuICBcdFx0XHRcdFx0XHRpZiAodmFsICYmIHZhbCAhPT0gXCJpbmhlcml0XCIpIHtcbiAgXHRcdFx0XHRcdFx0XHRyZXQgKz0gXCIgXCIgKyBhdHRyc1tpXS5ub2RlTmFtZSArIFwiPVwiICsgZHVtcC5wYXJzZSh2YWwsIFwiYXR0cmlidXRlXCIpO1xuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHJldCArPSBjbG9zZTtcblxuICBcdFx0XHRcdC8vIFNob3cgY29udGVudCBvZiBUZXh0Tm9kZSBvciBDREFUQVNlY3Rpb25cbiAgXHRcdFx0XHRpZiAoX25vZGUubm9kZVR5cGUgPT09IDMgfHwgX25vZGUubm9kZVR5cGUgPT09IDQpIHtcbiAgXHRcdFx0XHRcdHJldCArPSBfbm9kZS5ub2RlVmFsdWU7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0cmV0dXJuIHJldCArIG9wZW4gKyBcIi9cIiArIHRhZyArIGNsb3NlO1xuICBcdFx0XHR9LFxuXG4gIFx0XHRcdC8vIEZ1bmN0aW9uIGNhbGxzIGl0IGludGVybmFsbHksIGl0J3MgdGhlIGFyZ3VtZW50cyBwYXJ0IG9mIHRoZSBmdW5jdGlvblxuICBcdFx0XHRmdW5jdGlvbkFyZ3M6IGZ1bmN0aW9uIGZ1bmN0aW9uQXJncyhmbikge1xuICBcdFx0XHRcdHZhciBhcmdzLFxuICBcdFx0XHRcdCAgICBsID0gZm4ubGVuZ3RoO1xuXG4gIFx0XHRcdFx0aWYgKCFsKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gXCJcIjtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRhcmdzID0gbmV3IEFycmF5KGwpO1xuICBcdFx0XHRcdHdoaWxlIChsLS0pIHtcblxuICBcdFx0XHRcdFx0Ly8gOTcgaXMgJ2EnXG4gIFx0XHRcdFx0XHRhcmdzW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGwpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRyZXR1cm4gXCIgXCIgKyBhcmdzLmpvaW4oXCIsIFwiKSArIFwiIFwiO1xuICBcdFx0XHR9LFxuXG4gIFx0XHRcdC8vIE9iamVjdCBjYWxscyBpdCBpbnRlcm5hbGx5LCB0aGUga2V5IHBhcnQgb2YgYW4gaXRlbSBpbiBhIG1hcFxuICBcdFx0XHRrZXk6IHF1b3RlLFxuXG4gIFx0XHRcdC8vIEZ1bmN0aW9uIGNhbGxzIGl0IGludGVybmFsbHksIGl0J3MgdGhlIGNvbnRlbnQgb2YgdGhlIGZ1bmN0aW9uXG4gIFx0XHRcdGZ1bmN0aW9uQ29kZTogXCJbY29kZV1cIixcblxuICBcdFx0XHQvLyBOb2RlIGNhbGxzIGl0IGludGVybmFsbHksIGl0J3MgYSBodG1sIGF0dHJpYnV0ZSB2YWx1ZVxuICBcdFx0XHRhdHRyaWJ1dGU6IHF1b3RlLFxuICBcdFx0XHRzdHJpbmc6IHF1b3RlLFxuICBcdFx0XHRkYXRlOiBxdW90ZSxcbiAgXHRcdFx0cmVnZXhwOiBsaXRlcmFsLFxuICBcdFx0XHRudW1iZXI6IGxpdGVyYWwsXG4gIFx0XHRcdFwiYm9vbGVhblwiOiBsaXRlcmFsLFxuICBcdFx0XHRzeW1ib2w6IGZ1bmN0aW9uIHN5bWJvbChzeW0pIHtcbiAgXHRcdFx0XHRyZXR1cm4gc3ltLnRvU3RyaW5nKCk7XG4gIFx0XHRcdH1cbiAgXHRcdH0sXG5cbiAgXHRcdC8vIElmIHRydWUsIGVudGl0aWVzIGFyZSBlc2NhcGVkICggPCwgPiwgXFx0LCBzcGFjZSBhbmQgXFxuIClcbiAgXHRcdEhUTUw6IGZhbHNlLFxuXG4gIFx0XHQvLyBJbmRlbnRhdGlvbiB1bml0XG4gIFx0XHRpbmRlbnRDaGFyOiBcIiAgXCIsXG5cbiAgXHRcdC8vIElmIHRydWUsIGl0ZW1zIGluIGEgY29sbGVjdGlvbiwgYXJlIHNlcGFyYXRlZCBieSBhIFxcbiwgZWxzZSBqdXN0IGEgc3BhY2UuXG4gIFx0XHRtdWx0aWxpbmU6IHRydWVcbiAgXHR9O1xuXG4gIFx0cmV0dXJuIGR1bXA7XG4gIH0pKCk7XG5cbiAgdmFyIFN1aXRlUmVwb3J0ID0gZnVuY3Rpb24gKCkge1xuICBcdGZ1bmN0aW9uIFN1aXRlUmVwb3J0KG5hbWUsIHBhcmVudFN1aXRlKSB7XG4gIFx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBTdWl0ZVJlcG9ydCk7XG5cbiAgXHRcdHRoaXMubmFtZSA9IG5hbWU7XG4gIFx0XHR0aGlzLmZ1bGxOYW1lID0gcGFyZW50U3VpdGUgPyBwYXJlbnRTdWl0ZS5mdWxsTmFtZS5jb25jYXQobmFtZSkgOiBbXTtcblxuICBcdFx0dGhpcy50ZXN0cyA9IFtdO1xuICBcdFx0dGhpcy5jaGlsZFN1aXRlcyA9IFtdO1xuXG4gIFx0XHRpZiAocGFyZW50U3VpdGUpIHtcbiAgXHRcdFx0cGFyZW50U3VpdGUucHVzaENoaWxkU3VpdGUodGhpcyk7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0Y3JlYXRlQ2xhc3MoU3VpdGVSZXBvcnQsIFt7XG4gIFx0XHRrZXk6IFwic3RhcnRcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBzdGFydChyZWNvcmRUaW1lKSB7XG4gIFx0XHRcdGlmIChyZWNvcmRUaW1lKSB7XG4gIFx0XHRcdFx0dGhpcy5fc3RhcnRUaW1lID0gcGVyZm9ybWFuY2VOb3coKTtcblxuICBcdFx0XHRcdGlmIChwZXJmb3JtYW5jZSkge1xuICBcdFx0XHRcdFx0dmFyIHN1aXRlTGV2ZWwgPSB0aGlzLmZ1bGxOYW1lLmxlbmd0aDtcbiAgXHRcdFx0XHRcdHBlcmZvcm1hbmNlLm1hcmsoXCJxdW5pdF9zdWl0ZV9cIiArIHN1aXRlTGV2ZWwgKyBcIl9zdGFydFwiKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHRyZXR1cm4ge1xuICBcdFx0XHRcdG5hbWU6IHRoaXMubmFtZSxcbiAgXHRcdFx0XHRmdWxsTmFtZTogdGhpcy5mdWxsTmFtZS5zbGljZSgpLFxuICBcdFx0XHRcdHRlc3RzOiB0aGlzLnRlc3RzLm1hcChmdW5jdGlvbiAodGVzdCkge1xuICBcdFx0XHRcdFx0cmV0dXJuIHRlc3Quc3RhcnQoKTtcbiAgXHRcdFx0XHR9KSxcbiAgXHRcdFx0XHRjaGlsZFN1aXRlczogdGhpcy5jaGlsZFN1aXRlcy5tYXAoZnVuY3Rpb24gKHN1aXRlKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gc3VpdGUuc3RhcnQoKTtcbiAgXHRcdFx0XHR9KSxcbiAgXHRcdFx0XHR0ZXN0Q291bnRzOiB7XG4gIFx0XHRcdFx0XHR0b3RhbDogdGhpcy5nZXRUZXN0Q291bnRzKCkudG90YWxcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH07XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImVuZFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGVuZChyZWNvcmRUaW1lKSB7XG4gIFx0XHRcdGlmIChyZWNvcmRUaW1lKSB7XG4gIFx0XHRcdFx0dGhpcy5fZW5kVGltZSA9IHBlcmZvcm1hbmNlTm93KCk7XG5cbiAgXHRcdFx0XHRpZiAocGVyZm9ybWFuY2UpIHtcbiAgXHRcdFx0XHRcdHZhciBzdWl0ZUxldmVsID0gdGhpcy5mdWxsTmFtZS5sZW5ndGg7XG4gIFx0XHRcdFx0XHRwZXJmb3JtYW5jZS5tYXJrKFwicXVuaXRfc3VpdGVfXCIgKyBzdWl0ZUxldmVsICsgXCJfZW5kXCIpO1xuXG4gIFx0XHRcdFx0XHR2YXIgc3VpdGVOYW1lID0gdGhpcy5mdWxsTmFtZS5qb2luKFwiIOKAkyBcIik7XG5cbiAgXHRcdFx0XHRcdG1lYXN1cmUoc3VpdGVMZXZlbCA9PT0gMCA/IFwiUVVuaXQgVGVzdCBSdW5cIiA6IFwiUVVuaXQgVGVzdCBTdWl0ZTogXCIgKyBzdWl0ZU5hbWUsIFwicXVuaXRfc3VpdGVfXCIgKyBzdWl0ZUxldmVsICsgXCJfc3RhcnRcIiwgXCJxdW5pdF9zdWl0ZV9cIiArIHN1aXRlTGV2ZWwgKyBcIl9lbmRcIik7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0cmV0dXJuIHtcbiAgXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXG4gIFx0XHRcdFx0ZnVsbE5hbWU6IHRoaXMuZnVsbE5hbWUuc2xpY2UoKSxcbiAgXHRcdFx0XHR0ZXN0czogdGhpcy50ZXN0cy5tYXAoZnVuY3Rpb24gKHRlc3QpIHtcbiAgXHRcdFx0XHRcdHJldHVybiB0ZXN0LmVuZCgpO1xuICBcdFx0XHRcdH0pLFxuICBcdFx0XHRcdGNoaWxkU3VpdGVzOiB0aGlzLmNoaWxkU3VpdGVzLm1hcChmdW5jdGlvbiAoc3VpdGUpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBzdWl0ZS5lbmQoKTtcbiAgXHRcdFx0XHR9KSxcbiAgXHRcdFx0XHR0ZXN0Q291bnRzOiB0aGlzLmdldFRlc3RDb3VudHMoKSxcbiAgXHRcdFx0XHRydW50aW1lOiB0aGlzLmdldFJ1bnRpbWUoKSxcbiAgXHRcdFx0XHRzdGF0dXM6IHRoaXMuZ2V0U3RhdHVzKClcbiAgXHRcdFx0fTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwicHVzaENoaWxkU3VpdGVcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBwdXNoQ2hpbGRTdWl0ZShzdWl0ZSkge1xuICBcdFx0XHR0aGlzLmNoaWxkU3VpdGVzLnB1c2goc3VpdGUpO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJwdXNoVGVzdFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHB1c2hUZXN0KHRlc3QpIHtcbiAgXHRcdFx0dGhpcy50ZXN0cy5wdXNoKHRlc3QpO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJnZXRSdW50aW1lXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0UnVudGltZSgpIHtcbiAgXHRcdFx0cmV0dXJuIHRoaXMuX2VuZFRpbWUgLSB0aGlzLl9zdGFydFRpbWU7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImdldFRlc3RDb3VudHNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRUZXN0Q291bnRzKCkge1xuICBcdFx0XHR2YXIgY291bnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7IHBhc3NlZDogMCwgZmFpbGVkOiAwLCBza2lwcGVkOiAwLCB0b2RvOiAwLCB0b3RhbDogMCB9O1xuXG4gIFx0XHRcdGNvdW50cyA9IHRoaXMudGVzdHMucmVkdWNlKGZ1bmN0aW9uIChjb3VudHMsIHRlc3QpIHtcbiAgXHRcdFx0XHRpZiAodGVzdC52YWxpZCkge1xuICBcdFx0XHRcdFx0Y291bnRzW3Rlc3QuZ2V0U3RhdHVzKCldKys7XG4gIFx0XHRcdFx0XHRjb3VudHMudG90YWwrKztcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRyZXR1cm4gY291bnRzO1xuICBcdFx0XHR9LCBjb3VudHMpO1xuXG4gIFx0XHRcdHJldHVybiB0aGlzLmNoaWxkU3VpdGVzLnJlZHVjZShmdW5jdGlvbiAoY291bnRzLCBzdWl0ZSkge1xuICBcdFx0XHRcdHJldHVybiBzdWl0ZS5nZXRUZXN0Q291bnRzKGNvdW50cyk7XG4gIFx0XHRcdH0sIGNvdW50cyk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImdldFN0YXR1c1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcbiAgXHRcdFx0dmFyIF9nZXRUZXN0Q291bnRzID0gdGhpcy5nZXRUZXN0Q291bnRzKCksXG4gIFx0XHRcdCAgICB0b3RhbCA9IF9nZXRUZXN0Q291bnRzLnRvdGFsLFxuICBcdFx0XHQgICAgZmFpbGVkID0gX2dldFRlc3RDb3VudHMuZmFpbGVkLFxuICBcdFx0XHQgICAgc2tpcHBlZCA9IF9nZXRUZXN0Q291bnRzLnNraXBwZWQsXG4gIFx0XHRcdCAgICB0b2RvID0gX2dldFRlc3RDb3VudHMudG9kbztcblxuICBcdFx0XHRpZiAoZmFpbGVkKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwiZmFpbGVkXCI7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0aWYgKHNraXBwZWQgPT09IHRvdGFsKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gXCJza2lwcGVkXCI7XG4gIFx0XHRcdFx0fSBlbHNlIGlmICh0b2RvID09PSB0b3RhbCkge1xuICBcdFx0XHRcdFx0cmV0dXJuIFwidG9kb1wiO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gXCJwYXNzZWRcIjtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XSk7XG4gIFx0cmV0dXJuIFN1aXRlUmVwb3J0O1xuICB9KCk7XG5cbiAgdmFyIGZvY3VzZWQgPSBmYWxzZTtcblxuICB2YXIgbW9kdWxlU3RhY2sgPSBbXTtcblxuICBmdW5jdGlvbiBjcmVhdGVNb2R1bGUobmFtZSwgdGVzdEVudmlyb25tZW50LCBtb2RpZmllcnMpIHtcbiAgXHR2YXIgcGFyZW50TW9kdWxlID0gbW9kdWxlU3RhY2subGVuZ3RoID8gbW9kdWxlU3RhY2suc2xpY2UoLTEpWzBdIDogbnVsbDtcbiAgXHR2YXIgbW9kdWxlTmFtZSA9IHBhcmVudE1vZHVsZSAhPT0gbnVsbCA/IFtwYXJlbnRNb2R1bGUubmFtZSwgbmFtZV0uam9pbihcIiA+IFwiKSA6IG5hbWU7XG4gIFx0dmFyIHBhcmVudFN1aXRlID0gcGFyZW50TW9kdWxlID8gcGFyZW50TW9kdWxlLnN1aXRlUmVwb3J0IDogZ2xvYmFsU3VpdGU7XG5cbiAgXHR2YXIgc2tpcCA9IHBhcmVudE1vZHVsZSAhPT0gbnVsbCAmJiBwYXJlbnRNb2R1bGUuc2tpcCB8fCBtb2RpZmllcnMuc2tpcDtcbiAgXHR2YXIgdG9kbyA9IHBhcmVudE1vZHVsZSAhPT0gbnVsbCAmJiBwYXJlbnRNb2R1bGUudG9kbyB8fCBtb2RpZmllcnMudG9kbztcblxuICBcdHZhciBtb2R1bGUgPSB7XG4gIFx0XHRuYW1lOiBtb2R1bGVOYW1lLFxuICBcdFx0cGFyZW50TW9kdWxlOiBwYXJlbnRNb2R1bGUsXG4gIFx0XHR0ZXN0czogW10sXG4gIFx0XHRtb2R1bGVJZDogZ2VuZXJhdGVIYXNoKG1vZHVsZU5hbWUpLFxuICBcdFx0dGVzdHNSdW46IDAsXG4gIFx0XHR1bnNraXBwZWRUZXN0c1J1bjogMCxcbiAgXHRcdGNoaWxkTW9kdWxlczogW10sXG4gIFx0XHRzdWl0ZVJlcG9ydDogbmV3IFN1aXRlUmVwb3J0KG5hbWUsIHBhcmVudFN1aXRlKSxcblxuICBcdFx0Ly8gUGFzcyBhbG9uZyBgc2tpcGAgYW5kIGB0b2RvYCBwcm9wZXJ0aWVzIGZyb20gcGFyZW50IG1vZHVsZSwgaW4gY2FzZVxuICBcdFx0Ly8gdGhlcmUgaXMgb25lLCB0byBjaGlsZHMuIEFuZCB1c2Ugb3duIG90aGVyd2lzZS5cbiAgXHRcdC8vIFRoaXMgcHJvcGVydHkgd2lsbCBiZSB1c2VkIHRvIG1hcmsgb3duIHRlc3RzIGFuZCB0ZXN0cyBvZiBjaGlsZCBzdWl0ZXNcbiAgXHRcdC8vIGFzIGVpdGhlciBgc2tpcHBlZGAgb3IgYHRvZG9gLlxuICBcdFx0c2tpcDogc2tpcCxcbiAgXHRcdHRvZG86IHNraXAgPyBmYWxzZSA6IHRvZG9cbiAgXHR9O1xuXG4gIFx0dmFyIGVudiA9IHt9O1xuICBcdGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgXHRcdHBhcmVudE1vZHVsZS5jaGlsZE1vZHVsZXMucHVzaChtb2R1bGUpO1xuICBcdFx0ZXh0ZW5kKGVudiwgcGFyZW50TW9kdWxlLnRlc3RFbnZpcm9ubWVudCk7XG4gIFx0fVxuICBcdGV4dGVuZChlbnYsIHRlc3RFbnZpcm9ubWVudCk7XG4gIFx0bW9kdWxlLnRlc3RFbnZpcm9ubWVudCA9IGVudjtcblxuICBcdGNvbmZpZy5tb2R1bGVzLnB1c2gobW9kdWxlKTtcbiAgXHRyZXR1cm4gbW9kdWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc01vZHVsZShuYW1lLCBvcHRpb25zLCBleGVjdXRlTm93KSB7XG4gIFx0dmFyIG1vZGlmaWVycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG5cbiAgXHRpZiAob2JqZWN0VHlwZShvcHRpb25zKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHRleGVjdXRlTm93ID0gb3B0aW9ucztcbiAgXHRcdG9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIFx0fVxuXG4gIFx0dmFyIG1vZHVsZSA9IGNyZWF0ZU1vZHVsZShuYW1lLCBvcHRpb25zLCBtb2RpZmllcnMpO1xuXG4gIFx0Ly8gTW92ZSBhbnkgaG9va3MgdG8gYSAnaG9va3MnIG9iamVjdFxuICBcdHZhciB0ZXN0RW52aXJvbm1lbnQgPSBtb2R1bGUudGVzdEVudmlyb25tZW50O1xuICBcdHZhciBob29rcyA9IG1vZHVsZS5ob29rcyA9IHt9O1xuXG4gIFx0c2V0SG9va0Zyb21FbnZpcm9ubWVudChob29rcywgdGVzdEVudmlyb25tZW50LCBcImJlZm9yZVwiKTtcbiAgXHRzZXRIb29rRnJvbUVudmlyb25tZW50KGhvb2tzLCB0ZXN0RW52aXJvbm1lbnQsIFwiYmVmb3JlRWFjaFwiKTtcbiAgXHRzZXRIb29rRnJvbUVudmlyb25tZW50KGhvb2tzLCB0ZXN0RW52aXJvbm1lbnQsIFwiYWZ0ZXJFYWNoXCIpO1xuICBcdHNldEhvb2tGcm9tRW52aXJvbm1lbnQoaG9va3MsIHRlc3RFbnZpcm9ubWVudCwgXCJhZnRlclwiKTtcblxuICBcdHZhciBtb2R1bGVGbnMgPSB7XG4gIFx0XHRiZWZvcmU6IHNldEhvb2tGdW5jdGlvbihtb2R1bGUsIFwiYmVmb3JlXCIpLFxuICBcdFx0YmVmb3JlRWFjaDogc2V0SG9va0Z1bmN0aW9uKG1vZHVsZSwgXCJiZWZvcmVFYWNoXCIpLFxuICBcdFx0YWZ0ZXJFYWNoOiBzZXRIb29rRnVuY3Rpb24obW9kdWxlLCBcImFmdGVyRWFjaFwiKSxcbiAgXHRcdGFmdGVyOiBzZXRIb29rRnVuY3Rpb24obW9kdWxlLCBcImFmdGVyXCIpXG4gIFx0fTtcblxuICBcdHZhciBjdXJyZW50TW9kdWxlID0gY29uZmlnLmN1cnJlbnRNb2R1bGU7XG4gIFx0aWYgKG9iamVjdFR5cGUoZXhlY3V0ZU5vdykgPT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0bW9kdWxlU3RhY2sucHVzaChtb2R1bGUpO1xuICBcdFx0Y29uZmlnLmN1cnJlbnRNb2R1bGUgPSBtb2R1bGU7XG4gIFx0XHRleGVjdXRlTm93LmNhbGwobW9kdWxlLnRlc3RFbnZpcm9ubWVudCwgbW9kdWxlRm5zKTtcbiAgXHRcdG1vZHVsZVN0YWNrLnBvcCgpO1xuICBcdFx0bW9kdWxlID0gbW9kdWxlLnBhcmVudE1vZHVsZSB8fCBjdXJyZW50TW9kdWxlO1xuICBcdH1cblxuICBcdGNvbmZpZy5jdXJyZW50TW9kdWxlID0gbW9kdWxlO1xuXG4gIFx0ZnVuY3Rpb24gc2V0SG9va0Zyb21FbnZpcm9ubWVudChob29rcywgZW52aXJvbm1lbnQsIG5hbWUpIHtcbiAgXHRcdHZhciBwb3RlbnRpYWxIb29rID0gZW52aXJvbm1lbnRbbmFtZV07XG4gIFx0XHRob29rc1tuYW1lXSA9IHR5cGVvZiBwb3RlbnRpYWxIb29rID09PSBcImZ1bmN0aW9uXCIgPyBbcG90ZW50aWFsSG9va10gOiBbXTtcbiAgXHRcdGRlbGV0ZSBlbnZpcm9ubWVudFtuYW1lXTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBzZXRIb29rRnVuY3Rpb24obW9kdWxlLCBob29rTmFtZSkge1xuICBcdFx0cmV0dXJuIGZ1bmN0aW9uIHNldEhvb2soY2FsbGJhY2spIHtcbiAgXHRcdFx0bW9kdWxlLmhvb2tzW2hvb2tOYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgXHRcdH07XG4gIFx0fVxuICB9XG5cbiAgZnVuY3Rpb24gbW9kdWxlJDEobmFtZSwgb3B0aW9ucywgZXhlY3V0ZU5vdykge1xuICBcdGlmIChmb2N1c2VkKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0cHJvY2Vzc01vZHVsZShuYW1lLCBvcHRpb25zLCBleGVjdXRlTm93KTtcbiAgfVxuXG4gIG1vZHVsZSQxLm9ubHkgPSBmdW5jdGlvbiAoKSB7XG4gIFx0aWYgKGZvY3VzZWQpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHRjb25maWcubW9kdWxlcy5sZW5ndGggPSAwO1xuICBcdGNvbmZpZy5xdWV1ZS5sZW5ndGggPSAwO1xuXG4gIFx0bW9kdWxlJDEuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuXG4gIFx0Zm9jdXNlZCA9IHRydWU7XG4gIH07XG5cbiAgbW9kdWxlJDEuc2tpcCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBleGVjdXRlTm93KSB7XG4gIFx0aWYgKGZvY3VzZWQpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHRwcm9jZXNzTW9kdWxlKG5hbWUsIG9wdGlvbnMsIGV4ZWN1dGVOb3csIHsgc2tpcDogdHJ1ZSB9KTtcbiAgfTtcblxuICBtb2R1bGUkMS50b2RvID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMsIGV4ZWN1dGVOb3cpIHtcbiAgXHRpZiAoZm9jdXNlZCkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHByb2Nlc3NNb2R1bGUobmFtZSwgb3B0aW9ucywgZXhlY3V0ZU5vdywgeyB0b2RvOiB0cnVlIH0pO1xuICB9O1xuXG4gIHZhciBMSVNURU5FUlMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgU1VQUE9SVEVEX0VWRU5UUyA9IFtcInJ1blN0YXJ0XCIsIFwic3VpdGVTdGFydFwiLCBcInRlc3RTdGFydFwiLCBcImFzc2VydGlvblwiLCBcInRlc3RFbmRcIiwgXCJzdWl0ZUVuZFwiLCBcInJ1bkVuZFwiXTtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGRhdGEgdG8gYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAgICogQ2FsbGJhY2tzIHdpbGwgZmlyZSBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSBhcmUgcmVnaXN0ZXJlZCAoRklGTykuIFRoaXNcbiAgICogZnVuY3Rpb24gaXMgbm90IGV4cG9zZWQgcHVibGljbHk7IGl0IGlzIHVzZWQgYnkgUVVuaXQgaW50ZXJuYWxzIHRvIGVtaXRcbiAgICogbG9nZ2luZyBldmVudHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBtZXRob2QgZW1pdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm4ge1ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiBlbWl0KGV2ZW50TmFtZSwgZGF0YSkge1xuICBcdGlmIChvYmplY3RUeXBlKGV2ZW50TmFtZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJldmVudE5hbWUgbXVzdCBiZSBhIHN0cmluZyB3aGVuIGVtaXR0aW5nIGFuIGV2ZW50XCIpO1xuICBcdH1cblxuICBcdC8vIENsb25lIHRoZSBjYWxsYmFja3MgaW4gY2FzZSBvbmUgb2YgdGhlbSByZWdpc3RlcnMgYSBuZXcgY2FsbGJhY2tcbiAgXHR2YXIgb3JpZ2luYWxDYWxsYmFja3MgPSBMSVNURU5FUlNbZXZlbnROYW1lXTtcbiAgXHR2YXIgY2FsbGJhY2tzID0gb3JpZ2luYWxDYWxsYmFja3MgPyBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkob3JpZ2luYWxDYWxsYmFja3MpKSA6IFtdO1xuXG4gIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgXHRcdGNhbGxiYWNrc1tpXShkYXRhKTtcbiAgXHR9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2FsbGJhY2sgYXMgYSBsaXN0ZW5lciB0byB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqIEBtZXRob2Qgb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICBcdGlmIChvYmplY3RUeXBlKGV2ZW50TmFtZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJldmVudE5hbWUgbXVzdCBiZSBhIHN0cmluZyB3aGVuIHJlZ2lzdGVyaW5nIGEgbGlzdGVuZXJcIik7XG4gIFx0fSBlbHNlIGlmICghaW5BcnJheShldmVudE5hbWUsIFNVUFBPUlRFRF9FVkVOVFMpKSB7XG4gIFx0XHR2YXIgZXZlbnRzID0gU1VQUE9SVEVEX0VWRU5UUy5qb2luKFwiLCBcIik7XG4gIFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIgKyBldmVudE5hbWUgKyBcIlxcXCIgaXMgbm90IGEgdmFsaWQgZXZlbnQ7IG11c3QgYmUgb25lIG9mOiBcIiArIGV2ZW50cyArIFwiLlwiKTtcbiAgXHR9IGVsc2UgaWYgKG9iamVjdFR5cGUoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24gd2hlbiByZWdpc3RlcmluZyBhIGxpc3RlbmVyXCIpO1xuICBcdH1cblxuICBcdGlmICghTElTVEVORVJTW2V2ZW50TmFtZV0pIHtcbiAgXHRcdExJU1RFTkVSU1tldmVudE5hbWVdID0gW107XG4gIFx0fVxuXG4gIFx0Ly8gRG9uJ3QgcmVnaXN0ZXIgdGhlIHNhbWUgY2FsbGJhY2sgbW9yZSB0aGFuIG9uY2VcbiAgXHRpZiAoIWluQXJyYXkoY2FsbGJhY2ssIExJU1RFTkVSU1tldmVudE5hbWVdKSkge1xuICBcdFx0TElTVEVORVJTW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIFx0fVxuICB9XG5cbiAgZnVuY3Rpb24gb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoeCk7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cblxuXG4gIHZhciBfaXNBcnJheSA9IHZvaWQgMDtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG4gIH0gZWxzZSB7XG4gICAgX2lzQXJyYXkgPSBmdW5jdGlvbiBfaXNBcnJheSh4KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG4gIH1cblxuICB2YXIgaXNBcnJheSA9IF9pc0FycmF5O1xuXG4gIHZhciBsZW4gPSAwO1xuICB2YXIgdmVydHhOZXh0ID0gdm9pZCAwO1xuICB2YXIgY3VzdG9tU2NoZWR1bGVyRm4gPSB2b2lkIDA7XG5cbiAgdmFyIGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgICBxdWV1ZVtsZW5dID0gY2FsbGJhY2s7XG4gICAgcXVldWVbbGVuICsgMV0gPSBhcmc7XG4gICAgbGVuICs9IDI7XG4gICAgaWYgKGxlbiA9PT0gMikge1xuICAgICAgLy8gSWYgbGVuIGlzIDIsIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGFuIGFzeW5jIGZsdXNoLlxuICAgICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICAgIGlmIChjdXN0b21TY2hlZHVsZXJGbikge1xuICAgICAgICBjdXN0b21TY2hlZHVsZXJGbihmbHVzaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2hlZHVsZUZsdXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHNldFNjaGVkdWxlcihzY2hlZHVsZUZuKSB7XG4gICAgY3VzdG9tU2NoZWR1bGVyRm4gPSBzY2hlZHVsZUZuO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXNhcChhc2FwRm4pIHtcbiAgICBhc2FwID0gYXNhcEZuO1xuICB9XG5cbiAgdmFyIGJyb3dzZXJXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgdmFyIGJyb3dzZXJHbG9iYWwgPSBicm93c2VyV2luZG93IHx8IHt9O1xuICB2YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xuICB2YXIgaXNOb2RlID0gdHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiB7fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cbiAgLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbiAgdmFyIGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuICAvLyBub2RlXG4gIGZ1bmN0aW9uIHVzZU5leHRUaWNrKCkge1xuICAgIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY3Vqb2pzL3doZW4vaXNzdWVzLzQxMCBmb3IgZGV0YWlsc1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHZlcnR4XG4gIGZ1bmN0aW9uIHVzZVZlcnR4VGltZXIoKSB7XG4gICAgaWYgKHR5cGVvZiB2ZXJ0eE5leHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2ZXJ0eE5leHQoZmx1c2gpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlU2V0VGltZW91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSBpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMjtcbiAgICB9O1xuICB9XG5cbiAgLy8gd2ViIHdvcmtlclxuICBmdW5jdGlvbiB1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZmx1c2g7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB1c2VTZXRUaW1lb3V0KCkge1xuICAgIC8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIGVzNi1wcm9taXNlIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuICAgIC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuICAgIHZhciBnbG9iYWxTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdsb2JhbFNldFRpbWVvdXQoZmx1c2gsIDEpO1xuICAgIH07XG4gIH1cblxuICB2YXIgcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgICAgdmFyIGFyZyA9IHF1ZXVlW2kgKyAxXTtcblxuICAgICAgY2FsbGJhY2soYXJnKTtcblxuICAgICAgcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgICBxdWV1ZVtpICsgMV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGVuID0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGVtcHRWZXJ0eCgpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHZlcnR4ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKS5yZXF1aXJlKCd2ZXJ0eCcpO1xuICAgICAgdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICAgIHJldHVybiB1c2VWZXJ0eFRpbWVyKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHVzZVNldFRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICB2YXIgc2NoZWR1bGVGbHVzaCA9IHZvaWQgMDtcbiAgLy8gRGVjaWRlIHdoYXQgYXN5bmMgbWV0aG9kIHRvIHVzZSB0byB0cmlnZ2VyaW5nIHByb2Nlc3Npbmcgb2YgcXVldWVkIGNhbGxiYWNrczpcbiAgaWYgKGlzTm9kZSkge1xuICAgIHNjaGVkdWxlRmx1c2ggPSB1c2VOZXh0VGljaygpO1xuICB9IGVsc2UgaWYgKEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgfSBlbHNlIGlmIChpc1dvcmtlcikge1xuICAgIHNjaGVkdWxlRmx1c2ggPSB1c2VNZXNzYWdlQ2hhbm5lbCgpO1xuICB9IGVsc2UgaWYgKGJyb3dzZXJXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNjaGVkdWxlRmx1c2ggPSBhdHRlbXB0VmVydHgoKTtcbiAgfSBlbHNlIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlU2V0VGltZW91dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzO1xuXG4gICAgdmFyIGNoaWxkID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgICBpZiAoY2hpbGRbUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgbWFrZVByb21pc2UoY2hpbGQpO1xuICAgIH1cblxuICAgIHZhciBfc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG5cbiAgICBpZiAoX3N0YXRlKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHNbX3N0YXRlIC0gMV07XG4gICAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGludm9rZUNhbGxiYWNrKF9zdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCBwYXJlbnQuX3Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICAvKipcbiAgICBgUHJvbWlzZS5yZXNvbHZlYCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIHJlc29sdmVkIHdpdGggdGhlXG4gICAgcGFzc2VkIGB2YWx1ZWAuIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICByZXNvbHZlKDEpO1xuICAgIH0pO1xuXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIC8vIHZhbHVlID09PSAxXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoMSk7XG5cbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgLy8gdmFsdWUgPT09IDFcbiAgICB9KTtcbiAgICBgYGBcblxuICAgIEBtZXRob2QgcmVzb2x2ZVxuICAgIEBzdGF0aWNcbiAgICBAcGFyYW0ge0FueX0gdmFsdWUgdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGhcbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgZnVsZmlsbGVkIHdpdGggdGhlIGdpdmVuXG4gICAgYHZhbHVlYFxuICAqL1xuICBmdW5jdGlvbiByZXNvbHZlJDEob2JqZWN0KSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gICAgaWYgKG9iamVjdCAmJiAodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gQ29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gICAgcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgdmFyIFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG5cbiAgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbiAgdmFyIFBFTkRJTkcgPSB2b2lkIDA7XG4gIHZhciBGVUxGSUxMRUQgPSAxO1xuICB2YXIgUkVKRUNURUQgPSAyO1xuXG4gIGZ1bmN0aW9uIHNlbGZGdWxmaWxsbWVudCgpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5ub3RSZXR1cm5Pd24oKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVRoZW4odGhlbiQkMSwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICAgIHRyeSB7XG4gICAgICB0aGVuJCQxLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuJCQxKSB7XG4gICAgYXNhcChmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgICAgdmFyIGVycm9yID0gdHJ5VGhlbih0aGVuJCQxLCB0aGVuYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgICByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSwgcHJvbWlzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICAgIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IEZVTEZJTExFRCkge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbiQkMSkge1xuICAgIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yICYmIHRoZW4kJDEgPT09IHRoZW4gJiYgbWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3Rvci5yZXNvbHZlID09PSByZXNvbHZlJDEpIHtcbiAgICAgIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhlbiQkMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhlbiQkMSkpIHtcbiAgICAgICAgaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4kJDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgc2VsZkZ1bGZpbGxtZW50KCkpO1xuICAgIH0gZWxzZSBpZiAob2JqZWN0T3JGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciB0aGVuJCQxID0gdm9pZCAwO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhlbiQkMSA9IHZhbHVlLnRoZW47XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCB0aGVuJCQxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcbiAgICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgICB9XG5cbiAgICBwdWJsaXNoKHByb21pc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICAgIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuXG4gICAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYXNhcChwdWJsaXNoLCBwcm9taXNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByb21pc2UuX3N0YXRlID0gUkVKRUNURUQ7XG4gICAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gICAgYXNhcChwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICAgIHZhciBfc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICAgIHZhciBsZW5ndGggPSBfc3Vic2NyaWJlcnMubGVuZ3RoO1xuXG5cbiAgICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gICAgX3N1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgRlVMRklMTEVEXSA9IG9uRnVsZmlsbG1lbnQ7XG4gICAgX3N1YnNjcmliZXJzW2xlbmd0aCArIFJFSkVDVEVEXSA9IG9uUmVqZWN0aW9uO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgICBhc2FwKHB1Ymxpc2gsIHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHVibGlzaChwcm9taXNlKSB7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gICAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB2b2lkIDAsXG4gICAgICAgIGNhbGxiYWNrID0gdm9pZCAwLFxuICAgICAgICBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gICAgdmFyIGhhc0NhbGxiYWNrID0gaXNGdW5jdGlvbihjYWxsYmFjayksXG4gICAgICAgIHZhbHVlID0gdm9pZCAwLFxuICAgICAgICBlcnJvciA9IHZvaWQgMCxcbiAgICAgICAgc3VjY2VlZGVkID0gdHJ1ZTtcblxuICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhkZXRhaWwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmVqZWN0KHByb21pc2UsIGNhbm5vdFJldHVybk93bigpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGRldGFpbDtcbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAgIC8vIG5vb3BcbiAgICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChzdWNjZWVkZWQgPT09IGZhbHNlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IFJFSkVDVEVEKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKSB7XG4gICAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGlkID0gMDtcbiAgZnVuY3Rpb24gbmV4dElkKCkge1xuICAgIHJldHVybiBpZCsrO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVByb21pc2UocHJvbWlzZSkge1xuICAgIHByb21pc2VbUFJPTUlTRV9JRF0gPSBpZCsrO1xuICAgIHByb21pc2UuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICBwcm9taXNlLl9zdWJzY3JpYmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xuICB9XG5cbiAgdmFyIEVudW1lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQpIHtcbiAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEVudW1lcmF0b3IpO1xuXG4gICAgICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG5cbiAgICAgIGlmICghdGhpcy5wcm9taXNlW1BST01JU0VfSURdKSB7XG4gICAgICAgIG1ha2VQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nID0gaW5wdXQubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgICAgIHRoaXMuX2VudW1lcmF0ZShpbnB1dCk7XG4gICAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgICAgZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QodGhpcy5wcm9taXNlLCB2YWxpZGF0aW9uRXJyb3IoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoRW51bWVyYXRvciwgW3tcbiAgICAgIGtleTogJ19lbnVtZXJhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9lbnVtZXJhdGUoaW5wdXQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IHRoaXMuX3N0YXRlID09PSBQRU5ESU5HICYmIGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuX2VhY2hFbnRyeShpbnB1dFtpXSwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfZWFjaEVudHJ5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZWFjaEVudHJ5KGVudHJ5LCBpKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIHJlc29sdmUkJDEgPSBjLnJlc29sdmU7XG5cblxuICAgICAgICBpZiAocmVzb2x2ZSQkMSA9PT0gcmVzb2x2ZSQxKSB7XG4gICAgICAgICAgdmFyIF90aGVuID0gdm9pZCAwO1xuICAgICAgICAgIHZhciBlcnJvciA9IHZvaWQgMDtcbiAgICAgICAgICB2YXIgZGlkRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX3RoZW4gPSBlbnRyeS50aGVuO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoZW4gPT09IHRoZW4gJiYgZW50cnkuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSBlbnRyeTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGMgPT09IFByb21pc2UkMikge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhub29wKTtcbiAgICAgICAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBlbnRyeSwgX3RoZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHByb21pc2UsIGkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQobmV3IGMoZnVuY3Rpb24gKHJlc29sdmUkJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUkJDEoZW50cnkpO1xuICAgICAgICAgICAgfSksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocmVzb2x2ZSQkMShlbnRyeSksIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX3NldHRsZWRBdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHRsZWRBdChzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cblxuICAgICAgICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgICAgICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICBmdWxmaWxsKHByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfd2lsbFNldHRsZUF0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2lsbFNldHRsZUF0KHByb21pc2UsIGkpIHtcbiAgICAgICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgICAgIHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoRlVMRklMTEVELCBpLCB2YWx1ZSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KFJFSkVDVEVELCBpLCByZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEVudW1lcmF0b3I7XG4gIH0oKTtcblxuICAvKipcbiAgICBgUHJvbWlzZS5hbGxgIGFjY2VwdHMgYW4gYXJyYXkgb2YgcHJvbWlzZXMsIGFuZCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2hcbiAgICBpcyBmdWxmaWxsZWQgd2l0aCBhbiBhcnJheSBvZiBmdWxmaWxsbWVudCB2YWx1ZXMgZm9yIHRoZSBwYXNzZWQgcHJvbWlzZXMsIG9yXG4gICAgcmVqZWN0ZWQgd2l0aCB0aGUgcmVhc29uIG9mIHRoZSBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBiZSByZWplY3RlZC4gSXQgY2FzdHMgYWxsXG4gICAgZWxlbWVudHMgb2YgdGhlIHBhc3NlZCBpdGVyYWJsZSB0byBwcm9taXNlcyBhcyBpdCBydW5zIHRoaXMgYWxnb3JpdGhtLlxuXG4gICAgRXhhbXBsZTpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuICAgIGxldCBwcm9taXNlMiA9IHJlc29sdmUoMik7XG4gICAgbGV0IHByb21pc2UzID0gcmVzb2x2ZSgzKTtcbiAgICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAgIC8vIFRoZSBhcnJheSBoZXJlIHdvdWxkIGJlIFsgMSwgMiwgMyBdO1xuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgSWYgYW55IG9mIHRoZSBgcHJvbWlzZXNgIGdpdmVuIHRvIGBhbGxgIGFyZSByZWplY3RlZCwgdGhlIGZpcnN0IHByb21pc2VcbiAgICB0aGF0IGlzIHJlamVjdGVkIHdpbGwgYmUgZ2l2ZW4gYXMgYW4gYXJndW1lbnQgdG8gdGhlIHJldHVybmVkIHByb21pc2VzJ3NcbiAgICByZWplY3Rpb24gaGFuZGxlci4gRm9yIGV4YW1wbGU6XG5cbiAgICBFeGFtcGxlOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG4gICAgbGV0IHByb21pc2UyID0gcmVqZWN0KG5ldyBFcnJvcihcIjJcIikpO1xuICAgIGxldCBwcm9taXNlMyA9IHJlamVjdChuZXcgRXJyb3IoXCIzXCIpKTtcbiAgICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zIGJlY2F1c2UgdGhlcmUgYXJlIHJlamVjdGVkIHByb21pc2VzIVxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAvLyBlcnJvci5tZXNzYWdlID09PSBcIjJcIlxuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgQG1ldGhvZCBhbGxcbiAgICBAc3RhdGljXG4gICAgQHBhcmFtIHtBcnJheX0gZW50cmllcyBhcnJheSBvZiBwcm9taXNlc1xuICAgIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gYWxsIGBwcm9taXNlc2AgaGF2ZSBiZWVuXG4gICAgZnVsZmlsbGVkLCBvciByZWplY3RlZCBpZiBhbnkgb2YgdGhlbSBiZWNvbWUgcmVqZWN0ZWQuXG4gICAgQHN0YXRpY1xuICAqL1xuICBmdW5jdGlvbiBhbGwoZW50cmllcykge1xuICAgIHJldHVybiBuZXcgRW51bWVyYXRvcih0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAgYFByb21pc2UucmFjZWAgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoIGlzIHNldHRsZWQgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZVxuICAgIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIHNldHRsZS5cblxuICAgIEV4YW1wbGU6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG4gICAgICB9LCAyMDApO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb21pc2UyID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSAyJyk7XG4gICAgICB9LCAxMDApO1xuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAvLyByZXN1bHQgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgaXQgd2FzIHJlc29sdmVkIGJlZm9yZSBwcm9taXNlMVxuICAgICAgLy8gd2FzIHJlc29sdmVkLlxuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgYFByb21pc2UucmFjZWAgaXMgZGV0ZXJtaW5pc3RpYyBpbiB0aGF0IG9ubHkgdGhlIHN0YXRlIG9mIHRoZSBmaXJzdFxuICAgIHNldHRsZWQgcHJvbWlzZSBtYXR0ZXJzLiBGb3IgZXhhbXBsZSwgZXZlbiBpZiBvdGhlciBwcm9taXNlcyBnaXZlbiB0byB0aGVcbiAgICBgcHJvbWlzZXNgIGFycmF5IGFyZ3VtZW50IGFyZSByZXNvbHZlZCwgYnV0IHRoZSBmaXJzdCBzZXR0bGVkIHByb21pc2UgaGFzXG4gICAgYmVjb21lIHJlamVjdGVkIGJlZm9yZSB0aGUgb3RoZXIgcHJvbWlzZXMgYmVjYW1lIGZ1bGZpbGxlZCwgdGhlIHJldHVybmVkXG4gICAgcHJvbWlzZSB3aWxsIGJlY29tZSByZWplY3RlZDpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdwcm9taXNlIDInKSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAvLyBDb2RlIGhlcmUgbmV2ZXIgcnVuc1xuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBwcm9taXNlIDIgYmVjYW1lIHJlamVjdGVkIGJlZm9yZVxuICAgICAgLy8gcHJvbWlzZSAxIGJlY2FtZSBmdWxmaWxsZWRcbiAgICB9KTtcbiAgICBgYGBcblxuICAgIEFuIGV4YW1wbGUgcmVhbC13b3JsZCB1c2UgY2FzZSBpcyBpbXBsZW1lbnRpbmcgdGltZW91dHM6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgUHJvbWlzZS5yYWNlKFthamF4KCdmb28uanNvbicpLCB0aW1lb3V0KDUwMDApXSlcbiAgICBgYGBcblxuICAgIEBtZXRob2QgcmFjZVxuICAgIEBzdGF0aWNcbiAgICBAcGFyYW0ge0FycmF5fSBwcm9taXNlcyBhcnJheSBvZiBwcm9taXNlcyB0byBvYnNlcnZlXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB3aGljaCBzZXR0bGVzIGluIHRoZSBzYW1lIHdheSBhcyB0aGUgZmlyc3QgcGFzc2VkXG4gICAgcHJvbWlzZSB0byBzZXR0bGUuXG4gICovXG4gIGZ1bmN0aW9uIHJhY2UoZW50cmllcykge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgIGlmICghaXNBcnJheShlbnRyaWVzKSkge1xuICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAoXywgcmVqZWN0KSB7XG4gICAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgIGBQcm9taXNlLnJlamVjdGAgcmV0dXJucyBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgcGFzc2VkIGByZWFzb25gLlxuICAgIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdXSE9PUFMnKSk7XG4gICAgfSk7XG5cbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgLy8gQ29kZSBoZXJlIGRvZXNuJ3QgcnVuIGJlY2F1c2UgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQhXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdXSE9PUFMnKSk7XG5cbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgLy8gQ29kZSBoZXJlIGRvZXNuJ3QgcnVuIGJlY2F1c2UgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQhXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgQG1ldGhvZCByZWplY3RcbiAgICBAc3RhdGljXG4gICAgQHBhcmFtIHtBbnl9IHJlYXNvbiB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aC5cbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIGdpdmVuIGByZWFzb25gLlxuICAqL1xuICBmdW5jdGlvbiByZWplY3QkMShyZWFzb24pIHtcbiAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBmdW5jdGlvbiBuZWVkc1Jlc29sdmVyKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5lZWRzTmV3KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG4gIH1cblxuICAvKipcbiAgICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gICAgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCwgd2hpY2hcbiAgICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICAgIFRlcm1pbm9sb2d5XG4gICAgLS0tLS0tLS0tLS1cblxuICAgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gICAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuICAgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG4gICAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgICBQcm9taXNlcyB0aGF0IGFyZSBmdWxmaWxsZWQgaGF2ZSBhIGZ1bGZpbGxtZW50IHZhbHVlIGFuZCBhcmUgaW4gdGhlIGZ1bGZpbGxlZFxuICAgIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICAgIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuICAgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG4gICAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICAgIEJhc2ljIFVzYWdlOlxuICAgIC0tLS0tLS0tLS0tLVxuXG4gICAgYGBganNcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gb24gc3VjY2Vzc1xuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAgIC8vIG9uIGZhaWx1cmVcbiAgICAgIHJlamVjdChyZWFzb24pO1xuICAgIH0pO1xuXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBBZHZhbmNlZCBVc2FnZTpcbiAgICAtLS0tLS0tLS0tLS0tLS1cblxuICAgIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICAgIGBgYGpzXG4gICAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVyKCkge1xuICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAvLyBvbiByZWplY3Rpb25cbiAgICB9KTtcbiAgICBgYGBcblxuICAgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgICBgYGBqc1xuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgICAgZ2V0SlNPTignL2NvbW1lbnRzJylcbiAgICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgICB2YWx1ZXNbMV0gLy8gPT4gY29tbWVudHNKU09OXG5cbiAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBAY2xhc3MgUHJvbWlzZVxuICAgIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmVyXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEBjb25zdHJ1Y3RvclxuICAqL1xuXG4gIHZhciBQcm9taXNlJDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvbWlzZSk7XG5cbiAgICAgIHRoaXNbUFJPTUlTRV9JRF0gPSBuZXh0SWQoKTtcbiAgICAgIHRoaXMuX3Jlc3VsdCA9IHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgICAgaWYgKG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICAgIHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJyAmJiBuZWVkc1Jlc29sdmVyKCk7XG4gICAgICAgIHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlID8gaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbmVlZHNOZXcoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cbiAgICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgIH0pO1xuICAgIGBgYFxuICAgICBDaGFpbmluZ1xuICAgIC0tLS0tLS0tXG4gICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgIH0pO1xuICAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICB9KTtcbiAgICBgYGBcbiAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cbiAgICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICB9KTtcbiAgICBgYGBcbiAgICAgQXNzaW1pbGF0aW9uXG4gICAgLS0tLS0tLS0tLS0tXG4gICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG4gICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICB9KTtcbiAgICBgYGBcbiAgICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG4gICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgfSk7XG4gICAgYGBgXG4gICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgLS0tLS0tLS0tLS0tLS1cbiAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuICAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHJlc3VsdDtcbiAgICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH1cbiAgICBgYGBcbiAgICAgRXJyYmFjayBFeGFtcGxlXG4gICAgIGBgYGpzXG4gICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBgYGBcbiAgICAgUHJvbWlzZSBFeGFtcGxlO1xuICAgICBgYGBqYXZhc2NyaXB0XG4gICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH0pO1xuICAgIGBgYFxuICAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgLS0tLS0tLS0tLS0tLS1cbiAgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuICAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IGF1dGhvciwgYm9va3M7XG4gICAgIHRyeSB7XG4gICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfVxuICAgIGBgYFxuICAgICBFcnJiYWNrIEV4YW1wbGVcbiAgICAgYGBganNcbiAgICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuICAgICB9XG4gICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG4gICAgIH1cbiAgICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGBgYFxuICAgICBQcm9taXNlIEV4YW1wbGU7XG4gICAgIGBgYGphdmFzY3JpcHRcbiAgICBmaW5kQXV0aG9yKCkuXG4gICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH0pO1xuICAgIGBgYFxuICAgICBAbWV0aG9kIHRoZW5cbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuXG4gICAgLyoqXG4gICAgYGNhdGNoYCBpcyBzaW1wbHkgc3VnYXIgZm9yIGB0aGVuKHVuZGVmaW5lZCwgb25SZWplY3Rpb24pYCB3aGljaCBtYWtlcyBpdCB0aGUgc2FtZVxuICAgIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG4gICAgYGBganNcbiAgICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gICAgfVxuICAgIC8vIHN5bmNocm9ub3VzXG4gICAgdHJ5IHtcbiAgICBmaW5kQXV0aG9yKCk7XG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH1cbiAgICAvLyBhc3luYyB3aXRoIHByb21pc2VzXG4gICAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9KTtcbiAgICBgYGBcbiAgICBAbWV0aG9kIGNhdGNoXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3Rpb25cbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhQcm9taXNlLCBbe1xuICAgICAga2V5OiAnY2F0Y2gnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgIGBmaW5hbGx5YCB3aWxsIGJlIGludm9rZWQgcmVnYXJkbGVzcyBvZiB0aGUgcHJvbWlzZSdzIGZhdGUganVzdCBhcyBuYXRpdmVcbiAgICAgICAgdHJ5L2NhdGNoL2ZpbmFsbHkgYmVoYXZlc1xuICAgICAgXG4gICAgICAgIFN5bmNocm9ub3VzIGV4YW1wbGU6XG4gICAgICBcbiAgICAgICAgYGBganNcbiAgICAgICAgZmluZEF1dGhvcigpIHtcbiAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgQXV0aG9yKCk7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBmaW5kQXV0aG9yKCk7IC8vIHN1Y2NlZWQgb3IgZmFpbFxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbmRPdGhlckF1dGhlcigpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIC8vIGFsd2F5cyBydW5zXG4gICAgICAgICAgLy8gZG9lc24ndCBhZmZlY3QgdGhlIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG4gICAgICAgIGBgYFxuICAgICAgXG4gICAgICAgIEFzeW5jaHJvbm91cyBleGFtcGxlOlxuICAgICAgXG4gICAgICAgIGBgYGpzXG4gICAgICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgICAgIHJldHVybiBmaW5kT3RoZXJBdXRoZXIoKTtcbiAgICAgICAgfSkuZmluYWxseShmdW5jdGlvbigpe1xuICAgICAgICAgIC8vIGF1dGhvciB3YXMgZWl0aGVyIGZvdW5kLCBvciBub3RcbiAgICAgICAgfSk7XG4gICAgICAgIGBgYFxuICAgICAgXG4gICAgICAgIEBtZXRob2QgZmluYWxseVxuICAgICAgICBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2ZpbmFsbHknLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5hbGx5KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gcHJvbWlzZS5jb25zdHJ1Y3RvcjtcblxuICAgICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oY2FsbGJhY2ssIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFByb21pc2U7XG4gIH0oKTtcblxuICBQcm9taXNlJDIucHJvdG90eXBlLnRoZW4gPSB0aGVuO1xuICBQcm9taXNlJDIuYWxsID0gYWxsO1xuICBQcm9taXNlJDIucmFjZSA9IHJhY2U7XG4gIFByb21pc2UkMi5yZXNvbHZlID0gcmVzb2x2ZSQxO1xuICBQcm9taXNlJDIucmVqZWN0ID0gcmVqZWN0JDE7XG4gIFByb21pc2UkMi5fc2V0U2NoZWR1bGVyID0gc2V0U2NoZWR1bGVyO1xuICBQcm9taXNlJDIuX3NldEFzYXAgPSBzZXRBc2FwO1xuICBQcm9taXNlJDIuX2FzYXAgPSBhc2FwO1xuXG4gIC8qZ2xvYmFsIHNlbGYqL1xuICBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICB2YXIgbG9jYWwgPSB2b2lkIDA7XG5cbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxvY2FsID0gZ2xvYmFsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsb2NhbCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cbiAgICBpZiAoUCkge1xuICAgICAgdmFyIHByb21pc2VUb1N0cmluZyA9IG51bGw7XG4gICAgICB0cnkge1xuICAgICAgICBwcm9taXNlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBzaWxlbnRseSBpZ25vcmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9taXNlVG9TdHJpbmcgPT09ICdbb2JqZWN0IFByb21pc2VdJyAmJiAhUC5jYXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbC5Qcm9taXNlID0gUHJvbWlzZSQyO1xuICB9XG5cbiAgLy8gU3RyYW5nZSBjb21wYXQuLlxuICBQcm9taXNlJDIucG9seWZpbGwgPSBwb2x5ZmlsbDtcbiAgUHJvbWlzZSQyLlByb21pc2UgPSBQcm9taXNlJDI7XG5cbiAgdmFyIFByb21pc2UkMSA9IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiID8gUHJvbWlzZSA6IFByb21pc2UkMjtcblxuICAvLyBSZWdpc3RlciBsb2dnaW5nIGNhbGxiYWNrc1xuICBmdW5jdGlvbiByZWdpc3RlckxvZ2dpbmdDYWxsYmFja3Mob2JqKSB7XG4gIFx0dmFyIGksXG4gIFx0ICAgIGwsXG4gIFx0ICAgIGtleSxcbiAgXHQgICAgY2FsbGJhY2tOYW1lcyA9IFtcImJlZ2luXCIsIFwiZG9uZVwiLCBcImxvZ1wiLCBcInRlc3RTdGFydFwiLCBcInRlc3REb25lXCIsIFwibW9kdWxlU3RhcnRcIiwgXCJtb2R1bGVEb25lXCJdO1xuXG4gIFx0ZnVuY3Rpb24gcmVnaXN0ZXJMb2dnaW5nQ2FsbGJhY2soa2V5KSB7XG4gIFx0XHR2YXIgbG9nZ2luZ0NhbGxiYWNrID0gZnVuY3Rpb24gbG9nZ2luZ0NhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIFx0XHRcdGlmIChvYmplY3RUeXBlKGNhbGxiYWNrKSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUVVuaXQgbG9nZ2luZyBtZXRob2RzIHJlcXVpcmUgYSBjYWxsYmFjayBmdW5jdGlvbiBhcyB0aGVpciBmaXJzdCBwYXJhbWV0ZXJzLlwiKTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGNvbmZpZy5jYWxsYmFja3Nba2V5XS5wdXNoKGNhbGxiYWNrKTtcbiAgXHRcdH07XG5cbiAgXHRcdHJldHVybiBsb2dnaW5nQ2FsbGJhY2s7XG4gIFx0fVxuXG4gIFx0Zm9yIChpID0gMCwgbCA9IGNhbGxiYWNrTmFtZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gIFx0XHRrZXkgPSBjYWxsYmFja05hbWVzW2ldO1xuXG4gIFx0XHQvLyBJbml0aWFsaXplIGtleSBjb2xsZWN0aW9uIG9mIGxvZ2dpbmcgY2FsbGJhY2tcbiAgXHRcdGlmIChvYmplY3RUeXBlKGNvbmZpZy5jYWxsYmFja3Nba2V5XSkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgXHRcdFx0Y29uZmlnLmNhbGxiYWNrc1trZXldID0gW107XG4gIFx0XHR9XG5cbiAgXHRcdG9ialtrZXldID0gcmVnaXN0ZXJMb2dnaW5nQ2FsbGJhY2soa2V5KTtcbiAgXHR9XG4gIH1cblxuICBmdW5jdGlvbiBydW5Mb2dnaW5nQ2FsbGJhY2tzKGtleSwgYXJncykge1xuICBcdHZhciBjYWxsYmFja3MgPSBjb25maWcuY2FsbGJhY2tzW2tleV07XG5cbiAgXHQvLyBIYW5kbGluZyAnbG9nJyBjYWxsYmFja3Mgc2VwYXJhdGVseS4gVW5saWtlIHRoZSBvdGhlciBjYWxsYmFja3MsXG4gIFx0Ly8gdGhlIGxvZyBjYWxsYmFjayBpcyBub3QgY29udHJvbGxlZCBieSB0aGUgcHJvY2Vzc2luZyBxdWV1ZSxcbiAgXHQvLyBidXQgcmF0aGVyIHVzZWQgYnkgYXNzZXJ0cy4gSGVuY2UgdG8gcHJvbWlzZnkgdGhlICdsb2cnIGNhbGxiYWNrXG4gIFx0Ly8gd291bGQgbWVhbiBwcm9taXNmeWluZyBlYWNoIHN0ZXAgb2YgYSB0ZXN0XG4gIFx0aWYgKGtleSA9PT0gXCJsb2dcIikge1xuICBcdFx0Y2FsbGJhY2tzLm1hcChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgXHRcdFx0cmV0dXJuIGNhbGxiYWNrKGFyZ3MpO1xuICBcdFx0fSk7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0Ly8gZW5zdXJlIHRoYXQgZWFjaCBjYWxsYmFjayBpcyBleGVjdXRlZCBzZXJpYWxseVxuICBcdHJldHVybiBjYWxsYmFja3MucmVkdWNlKGZ1bmN0aW9uIChwcm9taXNlQ2hhaW4sIGNhbGxiYWNrKSB7XG4gIFx0XHRyZXR1cm4gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24gKCkge1xuICBcdFx0XHRyZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoY2FsbGJhY2soYXJncykpO1xuICBcdFx0fSk7XG4gIFx0fSwgUHJvbWlzZSQxLnJlc29sdmUoW10pKTtcbiAgfVxuXG4gIC8vIERvZXNuJ3Qgc3VwcG9ydCBJRTksIGl0IHdpbGwgcmV0dXJuIHVuZGVmaW5lZCBvbiB0aGVzZSBicm93c2Vyc1xuICAvLyBTZWUgYWxzbyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvci9TdGFja1xuICB2YXIgZmlsZU5hbWUgPSAoc291cmNlRnJvbVN0YWNrdHJhY2UoMCkgfHwgXCJcIikucmVwbGFjZSgvKDpcXGQrKStcXCk/LywgXCJcIikucmVwbGFjZSgvLitcXC8vLCBcIlwiKTtcblxuICBmdW5jdGlvbiBleHRyYWN0U3RhY2t0cmFjZShlLCBvZmZzZXQpIHtcbiAgXHRvZmZzZXQgPSBvZmZzZXQgPT09IHVuZGVmaW5lZCA/IDQgOiBvZmZzZXQ7XG5cbiAgXHR2YXIgc3RhY2ssIGluY2x1ZGUsIGk7XG5cbiAgXHRpZiAoZSAmJiBlLnN0YWNrKSB7XG4gIFx0XHRzdGFjayA9IGUuc3RhY2suc3BsaXQoXCJcXG5cIik7XG4gIFx0XHRpZiAoL15lcnJvciQvaS50ZXN0KHN0YWNrWzBdKSkge1xuICBcdFx0XHRzdGFjay5zaGlmdCgpO1xuICBcdFx0fVxuICBcdFx0aWYgKGZpbGVOYW1lKSB7XG4gIFx0XHRcdGluY2x1ZGUgPSBbXTtcbiAgXHRcdFx0Zm9yIChpID0gb2Zmc2V0OyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0XHRpZiAoc3RhY2tbaV0uaW5kZXhPZihmaWxlTmFtZSkgIT09IC0xKSB7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0aW5jbHVkZS5wdXNoKHN0YWNrW2ldKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRpZiAoaW5jbHVkZS5sZW5ndGgpIHtcbiAgXHRcdFx0XHRyZXR1cm4gaW5jbHVkZS5qb2luKFwiXFxuXCIpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gc3RhY2tbb2Zmc2V0XTtcbiAgXHR9XG4gIH1cblxuICBmdW5jdGlvbiBzb3VyY2VGcm9tU3RhY2t0cmFjZShvZmZzZXQpIHtcbiAgXHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblxuICBcdC8vIFN1cHBvcnQ6IFNhZmFyaSA8PTcgb25seSwgSUUgPD0xMCAtIDExIG9ubHlcbiAgXHQvLyBOb3QgYWxsIGJyb3dzZXJzIGdlbmVyYXRlIHRoZSBgc3RhY2tgIHByb3BlcnR5IGZvciBgbmV3IEVycm9yKClgLCBzZWUgYWxzbyAjNjM2XG4gIFx0aWYgKCFlcnJvci5zdGFjaykge1xuICBcdFx0dHJ5IHtcbiAgXHRcdFx0dGhyb3cgZXJyb3I7XG4gIFx0XHR9IGNhdGNoIChlcnIpIHtcbiAgXHRcdFx0ZXJyb3IgPSBlcnI7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0cmV0dXJuIGV4dHJhY3RTdGFja3RyYWNlKGVycm9yLCBvZmZzZXQpO1xuICB9XG5cbiAgdmFyIHByaW9yaXR5Q291bnQgPSAwO1xuICB2YXIgdW5pdFNhbXBsZXIgPSB2b2lkIDA7XG5cbiAgLy8gVGhpcyBpcyBhIHF1ZXVlIG9mIGZ1bmN0aW9ucyB0aGF0IGFyZSB0YXNrcyB3aXRoaW4gYSBzaW5nbGUgdGVzdC5cbiAgLy8gQWZ0ZXIgdGVzdHMgYXJlIGRlcXVldWVkIGZyb20gY29uZmlnLnF1ZXVlIHRoZXkgYXJlIGV4cGFuZGVkIGludG9cbiAgLy8gYSBzZXQgb2YgdGFza3MgaW4gdGhpcyBxdWV1ZS5cbiAgdmFyIHRhc2tRdWV1ZSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBZHZhbmNlcyB0aGUgdGFza1F1ZXVlIHRvIHRoZSBuZXh0IHRhc2suIElmIHRoZSB0YXNrUXVldWUgaXMgZW1wdHksXG4gICAqIHByb2Nlc3MgdGhlIHRlc3RRdWV1ZVxuICAgKi9cbiAgZnVuY3Rpb24gYWR2YW5jZSgpIHtcbiAgXHRhZHZhbmNlVGFza1F1ZXVlKCk7XG5cbiAgXHRpZiAoIXRhc2tRdWV1ZS5sZW5ndGggJiYgIWNvbmZpZy5ibG9ja2luZyAmJiAhY29uZmlnLmN1cnJlbnQpIHtcbiAgXHRcdGFkdmFuY2VUZXN0UXVldWUoKTtcbiAgXHR9XG4gIH1cblxuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIHRhc2tRdWV1ZSB3aXRoIGFuIGluY3JlYXNlZCBkZXB0aFxuICAgKi9cbiAgZnVuY3Rpb24gYWR2YW5jZVRhc2tRdWV1ZSgpIHtcbiAgXHR2YXIgc3RhcnQgPSBub3coKTtcbiAgXHRjb25maWcuZGVwdGggPSAoY29uZmlnLmRlcHRoIHx8IDApICsgMTtcblxuICBcdHByb2Nlc3NUYXNrUXVldWUoc3RhcnQpO1xuXG4gIFx0Y29uZmlnLmRlcHRoLS07XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyB0aGUgZmlyc3QgdGFzayBvbiB0aGUgdGFza1F1ZXVlIGFzIGEgcHJvbWlzZS5cbiAgICogRWFjaCB0YXNrIGlzIGEgZnVuY3Rpb24gcmV0dXJuZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL3F1bml0anMvcXVuaXQvYmxvYi9tYXN0ZXIvc3JjL3Rlc3QuanMjTDM4MVxuICAgKi9cbiAgZnVuY3Rpb24gcHJvY2Vzc1Rhc2tRdWV1ZShzdGFydCkge1xuICBcdGlmICh0YXNrUXVldWUubGVuZ3RoICYmICFjb25maWcuYmxvY2tpbmcpIHtcbiAgXHRcdHZhciBlbGFwc2VkVGltZSA9IG5vdygpIC0gc3RhcnQ7XG5cbiAgXHRcdGlmICghZGVmaW5lZC5zZXRUaW1lb3V0IHx8IGNvbmZpZy51cGRhdGVSYXRlIDw9IDAgfHwgZWxhcHNlZFRpbWUgPCBjb25maWcudXBkYXRlUmF0ZSkge1xuICBcdFx0XHR2YXIgdGFzayA9IHRhc2tRdWV1ZS5zaGlmdCgpO1xuICBcdFx0XHRQcm9taXNlJDEucmVzb2x2ZSh0YXNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdGlmICghdGFza1F1ZXVlLmxlbmd0aCkge1xuICBcdFx0XHRcdFx0YWR2YW5jZSgpO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRwcm9jZXNzVGFza1F1ZXVlKHN0YXJ0KTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH0pO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0c2V0VGltZW91dCQxKGFkdmFuY2UpO1xuICBcdFx0fVxuICBcdH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZHZhbmNlIHRoZSB0ZXN0UXVldWUgdG8gdGhlIG5leHQgdGVzdCB0byBwcm9jZXNzLiBDYWxsIGRvbmUoKSBpZiB0ZXN0UXVldWUgY29tcGxldGVzLlxuICAgKi9cbiAgZnVuY3Rpb24gYWR2YW5jZVRlc3RRdWV1ZSgpIHtcbiAgXHRpZiAoIWNvbmZpZy5ibG9ja2luZyAmJiAhY29uZmlnLnF1ZXVlLmxlbmd0aCAmJiBjb25maWcuZGVwdGggPT09IDApIHtcbiAgXHRcdGRvbmUoKTtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHR2YXIgdGVzdFRhc2tzID0gY29uZmlnLnF1ZXVlLnNoaWZ0KCk7XG4gIFx0YWRkVG9UYXNrUXVldWUodGVzdFRhc2tzKCkpO1xuXG4gIFx0aWYgKHByaW9yaXR5Q291bnQgPiAwKSB7XG4gIFx0XHRwcmlvcml0eUNvdW50LS07XG4gIFx0fVxuXG4gIFx0YWR2YW5jZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVucXVldWUgdGhlIHRhc2tzIGZvciBhIHRlc3QgaW50byB0aGUgdGFzayBxdWV1ZS5cbiAgICogQHBhcmFtIHtBcnJheX0gdGFza3NBcnJheVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkVG9UYXNrUXVldWUodGFza3NBcnJheSkge1xuICBcdHRhc2tRdWV1ZS5wdXNoLmFwcGx5KHRhc2tRdWV1ZSwgdG9Db25zdW1hYmxlQXJyYXkodGFza3NBcnJheSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbnVtYmVyIG9mIHRhc2tzIHJlbWFpbmluZyBpbiB0aGUgdGFzayBxdWV1ZSB0byBiZSBwcm9jZXNzZWQuXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICovXG4gIGZ1bmN0aW9uIHRhc2tRdWV1ZUxlbmd0aCgpIHtcbiAgXHRyZXR1cm4gdGFza1F1ZXVlLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGVzdCB0byB0aGUgVGVzdFF1ZXVlIGZvciBleGVjdXRpb24uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRlc3RUYXNrc0Z1bmNcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcmlvcml0aXplXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZWVkXG4gICAqL1xuICBmdW5jdGlvbiBhZGRUb1Rlc3RRdWV1ZSh0ZXN0VGFza3NGdW5jLCBwcmlvcml0aXplLCBzZWVkKSB7XG4gIFx0aWYgKHByaW9yaXRpemUpIHtcbiAgXHRcdGNvbmZpZy5xdWV1ZS5zcGxpY2UocHJpb3JpdHlDb3VudCsrLCAwLCB0ZXN0VGFza3NGdW5jKTtcbiAgXHR9IGVsc2UgaWYgKHNlZWQpIHtcbiAgXHRcdGlmICghdW5pdFNhbXBsZXIpIHtcbiAgXHRcdFx0dW5pdFNhbXBsZXIgPSB1bml0U2FtcGxlckdlbmVyYXRvcihzZWVkKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gSW5zZXJ0IGludG8gYSByYW5kb20gcG9zaXRpb24gYWZ0ZXIgYWxsIHByaW9yaXRpemVkIGl0ZW1zXG4gIFx0XHR2YXIgaW5kZXggPSBNYXRoLmZsb29yKHVuaXRTYW1wbGVyKCkgKiAoY29uZmlnLnF1ZXVlLmxlbmd0aCAtIHByaW9yaXR5Q291bnQgKyAxKSk7XG4gIFx0XHRjb25maWcucXVldWUuc3BsaWNlKHByaW9yaXR5Q291bnQgKyBpbmRleCwgMCwgdGVzdFRhc2tzRnVuYyk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdGNvbmZpZy5xdWV1ZS5wdXNoKHRlc3RUYXNrc0Z1bmMpO1xuICBcdH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2VlZGVkIFwic2FtcGxlXCIgZ2VuZXJhdG9yIHdoaWNoIGlzIHVzZWQgZm9yIHJhbmRvbWl6aW5nIHRlc3RzLlxuICAgKi9cbiAgZnVuY3Rpb24gdW5pdFNhbXBsZXJHZW5lcmF0b3Ioc2VlZCkge1xuXG4gIFx0Ly8gMzItYml0IHhvcnNoaWZ0LCByZXF1aXJlcyBvbmx5IGEgbm9uemVybyBzZWVkXG4gIFx0Ly8gaHR0cDovL2V4Y2FtZXJhLmNvbS9zcGhpbngvYXJ0aWNsZS14b3JzaGlmdC5odG1sXG4gIFx0dmFyIHNhbXBsZSA9IHBhcnNlSW50KGdlbmVyYXRlSGFzaChzZWVkKSwgMTYpIHx8IC0xO1xuICBcdHJldHVybiBmdW5jdGlvbiAoKSB7XG4gIFx0XHRzYW1wbGUgXj0gc2FtcGxlIDw8IDEzO1xuICBcdFx0c2FtcGxlIF49IHNhbXBsZSA+Pj4gMTc7XG4gIFx0XHRzYW1wbGUgXj0gc2FtcGxlIDw8IDU7XG5cbiAgXHRcdC8vIEVDTUFTY3JpcHQgaGFzIG5vIHVuc2lnbmVkIG51bWJlciB0eXBlXG4gIFx0XHRpZiAoc2FtcGxlIDwgMCkge1xuICBcdFx0XHRzYW1wbGUgKz0gMHgxMDAwMDAwMDA7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiBzYW1wbGUgLyAweDEwMDAwMDAwMDtcbiAgXHR9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIFByb2Nlc3NpbmdRdWV1ZSBpcyBkb25lIHByb2Nlc3NpbmcgYWxsXG4gICAqIGl0ZW1zLiBJdCBoYW5kbGVzIGVtaXR0aW5nIHRoZSBmaW5hbCBydW4gZXZlbnRzLlxuICAgKi9cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgXHR2YXIgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xuXG4gIFx0UHJvY2Vzc2luZ1F1ZXVlLmZpbmlzaGVkID0gdHJ1ZTtcblxuICBcdHZhciBydW50aW1lID0gbm93KCkgLSBjb25maWcuc3RhcnRlZDtcbiAgXHR2YXIgcGFzc2VkID0gY29uZmlnLnN0YXRzLmFsbCAtIGNvbmZpZy5zdGF0cy5iYWQ7XG5cbiAgXHRpZiAoY29uZmlnLnN0YXRzLmFsbCA9PT0gMCkge1xuXG4gIFx0XHRpZiAoY29uZmlnLmZpbHRlciAmJiBjb25maWcuZmlsdGVyLmxlbmd0aCkge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyB0ZXN0cyBtYXRjaGVkIHRoZSBmaWx0ZXIgXFxcIlwiICsgY29uZmlnLmZpbHRlciArIFwiXFxcIi5cIik7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb25maWcubW9kdWxlICYmIGNvbmZpZy5tb2R1bGUubGVuZ3RoKSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHRlc3RzIG1hdGNoZWQgdGhlIG1vZHVsZSBcXFwiXCIgKyBjb25maWcubW9kdWxlICsgXCJcXFwiLlwiKTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbmZpZy5tb2R1bGVJZCAmJiBjb25maWcubW9kdWxlSWQubGVuZ3RoKSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHRlc3RzIG1hdGNoZWQgdGhlIG1vZHVsZUlkIFxcXCJcIiArIGNvbmZpZy5tb2R1bGVJZCArIFwiXFxcIi5cIik7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb25maWcudGVzdElkICYmIGNvbmZpZy50ZXN0SWQubGVuZ3RoKSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHRlc3RzIG1hdGNoZWQgdGhlIHRlc3RJZCBcXFwiXCIgKyBjb25maWcudGVzdElkICsgXCJcXFwiLlwiKTtcbiAgXHRcdH1cblxuICBcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdGVzdHMgd2VyZSBydW4uXCIpO1xuICBcdH1cblxuICBcdGVtaXQoXCJydW5FbmRcIiwgZ2xvYmFsU3VpdGUuZW5kKHRydWUpKTtcbiAgXHRydW5Mb2dnaW5nQ2FsbGJhY2tzKFwiZG9uZVwiLCB7XG4gIFx0XHRwYXNzZWQ6IHBhc3NlZCxcbiAgXHRcdGZhaWxlZDogY29uZmlnLnN0YXRzLmJhZCxcbiAgXHRcdHRvdGFsOiBjb25maWcuc3RhdHMuYWxsLFxuICBcdFx0cnVudGltZTogcnVudGltZVxuICBcdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXG4gIFx0XHQvLyBDbGVhciBvd24gc3RvcmFnZSBpdGVtcyBpZiBhbGwgdGVzdHMgcGFzc2VkXG4gIFx0XHRpZiAoc3RvcmFnZSAmJiBjb25maWcuc3RhdHMuYmFkID09PSAwKSB7XG4gIFx0XHRcdGZvciAodmFyIGkgPSBzdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gIFx0XHRcdFx0dmFyIGtleSA9IHN0b3JhZ2Uua2V5KGkpO1xuXG4gIFx0XHRcdFx0aWYgKGtleS5pbmRleE9mKFwicXVuaXQtdGVzdC1cIikgPT09IDApIHtcbiAgXHRcdFx0XHRcdHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH0pO1xuICB9XG5cbiAgdmFyIFByb2Nlc3NpbmdRdWV1ZSA9IHtcbiAgXHRmaW5pc2hlZDogZmFsc2UsXG4gIFx0YWRkOiBhZGRUb1Rlc3RRdWV1ZSxcbiAgXHRhZHZhbmNlOiBhZHZhbmNlLFxuICBcdHRhc2tDb3VudDogdGFza1F1ZXVlTGVuZ3RoXG4gIH07XG5cbiAgdmFyIFRlc3RSZXBvcnQgPSBmdW5jdGlvbiAoKSB7XG4gIFx0ZnVuY3Rpb24gVGVzdFJlcG9ydChuYW1lLCBzdWl0ZSwgb3B0aW9ucykge1xuICBcdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgVGVzdFJlcG9ydCk7XG5cbiAgXHRcdHRoaXMubmFtZSA9IG5hbWU7XG4gIFx0XHR0aGlzLnN1aXRlTmFtZSA9IHN1aXRlLm5hbWU7XG4gIFx0XHR0aGlzLmZ1bGxOYW1lID0gc3VpdGUuZnVsbE5hbWUuY29uY2F0KG5hbWUpO1xuICBcdFx0dGhpcy5ydW50aW1lID0gMDtcbiAgXHRcdHRoaXMuYXNzZXJ0aW9ucyA9IFtdO1xuXG4gIFx0XHR0aGlzLnNraXBwZWQgPSAhIW9wdGlvbnMuc2tpcDtcbiAgXHRcdHRoaXMudG9kbyA9ICEhb3B0aW9ucy50b2RvO1xuXG4gIFx0XHR0aGlzLnZhbGlkID0gb3B0aW9ucy52YWxpZDtcblxuICBcdFx0dGhpcy5fc3RhcnRUaW1lID0gMDtcbiAgXHRcdHRoaXMuX2VuZFRpbWUgPSAwO1xuXG4gIFx0XHRzdWl0ZS5wdXNoVGVzdCh0aGlzKTtcbiAgXHR9XG5cbiAgXHRjcmVhdGVDbGFzcyhUZXN0UmVwb3J0LCBbe1xuICBcdFx0a2V5OiBcInN0YXJ0XCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gc3RhcnQocmVjb3JkVGltZSkge1xuICBcdFx0XHRpZiAocmVjb3JkVGltZSkge1xuICBcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHBlcmZvcm1hbmNlTm93KCk7XG4gIFx0XHRcdFx0aWYgKHBlcmZvcm1hbmNlKSB7XG4gIFx0XHRcdFx0XHRwZXJmb3JtYW5jZS5tYXJrKFwicXVuaXRfdGVzdF9zdGFydFwiKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHRyZXR1cm4ge1xuICBcdFx0XHRcdG5hbWU6IHRoaXMubmFtZSxcbiAgXHRcdFx0XHRzdWl0ZU5hbWU6IHRoaXMuc3VpdGVOYW1lLFxuICBcdFx0XHRcdGZ1bGxOYW1lOiB0aGlzLmZ1bGxOYW1lLnNsaWNlKClcbiAgXHRcdFx0fTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZW5kXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZW5kKHJlY29yZFRpbWUpIHtcbiAgXHRcdFx0aWYgKHJlY29yZFRpbWUpIHtcbiAgXHRcdFx0XHR0aGlzLl9lbmRUaW1lID0gcGVyZm9ybWFuY2VOb3coKTtcbiAgXHRcdFx0XHRpZiAocGVyZm9ybWFuY2UpIHtcbiAgXHRcdFx0XHRcdHBlcmZvcm1hbmNlLm1hcmsoXCJxdW5pdF90ZXN0X2VuZFwiKTtcblxuICBcdFx0XHRcdFx0dmFyIHRlc3ROYW1lID0gdGhpcy5mdWxsTmFtZS5qb2luKFwiIOKAkyBcIik7XG5cbiAgXHRcdFx0XHRcdG1lYXN1cmUoXCJRVW5pdCBUZXN0OiBcIiArIHRlc3ROYW1lLCBcInF1bml0X3Rlc3Rfc3RhcnRcIiwgXCJxdW5pdF90ZXN0X2VuZFwiKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHRyZXR1cm4gZXh0ZW5kKHRoaXMuc3RhcnQoKSwge1xuICBcdFx0XHRcdHJ1bnRpbWU6IHRoaXMuZ2V0UnVudGltZSgpLFxuICBcdFx0XHRcdHN0YXR1czogdGhpcy5nZXRTdGF0dXMoKSxcbiAgXHRcdFx0XHRlcnJvcnM6IHRoaXMuZ2V0RmFpbGVkQXNzZXJ0aW9ucygpLFxuICBcdFx0XHRcdGFzc2VydGlvbnM6IHRoaXMuZ2V0QXNzZXJ0aW9ucygpXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJwdXNoQXNzZXJ0aW9uXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gcHVzaEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgXHRcdFx0dGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZ2V0UnVudGltZVwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFJ1bnRpbWUoKSB7XG4gIFx0XHRcdHJldHVybiB0aGlzLl9lbmRUaW1lIC0gdGhpcy5fc3RhcnRUaW1lO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJnZXRTdGF0dXNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XG4gIFx0XHRcdGlmICh0aGlzLnNraXBwZWQpIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJza2lwcGVkXCI7XG4gIFx0XHRcdH1cblxuICBcdFx0XHR2YXIgdGVzdFBhc3NlZCA9IHRoaXMuZ2V0RmFpbGVkQXNzZXJ0aW9ucygpLmxlbmd0aCA+IDAgPyB0aGlzLnRvZG8gOiAhdGhpcy50b2RvO1xuXG4gIFx0XHRcdGlmICghdGVzdFBhc3NlZCkge1xuICBcdFx0XHRcdHJldHVybiBcImZhaWxlZFwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKHRoaXMudG9kbykge1xuICBcdFx0XHRcdHJldHVybiBcInRvZG9cIjtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJwYXNzZWRcIjtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJnZXRGYWlsZWRBc3NlcnRpb25zXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0RmFpbGVkQXNzZXJ0aW9ucygpIHtcbiAgXHRcdFx0cmV0dXJuIHRoaXMuYXNzZXJ0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKGFzc2VydGlvbikge1xuICBcdFx0XHRcdHJldHVybiAhYXNzZXJ0aW9uLnBhc3NlZDtcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImdldEFzc2VydGlvbnNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRBc3NlcnRpb25zKCkge1xuICBcdFx0XHRyZXR1cm4gdGhpcy5hc3NlcnRpb25zLnNsaWNlKCk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFJlbW92ZSBhY3R1YWwgYW5kIGV4cGVjdGVkIHZhbHVlcyBmcm9tIGFzc2VydGlvbnMuIFRoaXMgaXMgdG8gcHJldmVudFxuICBcdFx0Ly8gbGVha2luZyBtZW1vcnkgdGhyb3VnaG91dCBhIHRlc3Qgc3VpdGUuXG5cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwic2xpbUFzc2VydGlvbnNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBzbGltQXNzZXJ0aW9ucygpIHtcbiAgXHRcdFx0dGhpcy5hc3NlcnRpb25zID0gdGhpcy5hc3NlcnRpb25zLm1hcChmdW5jdGlvbiAoYXNzZXJ0aW9uKSB7XG4gIFx0XHRcdFx0ZGVsZXRlIGFzc2VydGlvbi5hY3R1YWw7XG4gIFx0XHRcdFx0ZGVsZXRlIGFzc2VydGlvbi5leHBlY3RlZDtcbiAgXHRcdFx0XHRyZXR1cm4gYXNzZXJ0aW9uO1xuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9XSk7XG4gIFx0cmV0dXJuIFRlc3RSZXBvcnQ7XG4gIH0oKTtcblxuICB2YXIgZm9jdXNlZCQxID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gVGVzdChzZXR0aW5ncykge1xuICBcdHZhciBpLCBsO1xuXG4gIFx0KytUZXN0LmNvdW50O1xuXG4gIFx0dGhpcy5leHBlY3RlZCA9IG51bGw7XG4gIFx0dGhpcy5hc3NlcnRpb25zID0gW107XG4gIFx0dGhpcy5zZW1hcGhvcmUgPSAwO1xuICBcdHRoaXMubW9kdWxlID0gY29uZmlnLmN1cnJlbnRNb2R1bGU7XG4gIFx0dGhpcy5zdGVwcyA9IFtdO1xuICBcdHRoaXMudGltZW91dCA9IHVuZGVmaW5lZDtcbiAgXHR0aGlzLmVycm9yRm9yU3RhY2sgPSBuZXcgRXJyb3IoKTtcblxuICBcdC8vIElmIGEgbW9kdWxlIGlzIHNraXBwZWQsIGFsbCBpdHMgdGVzdHMgYW5kIHRoZSB0ZXN0cyBvZiB0aGUgY2hpbGQgc3VpdGVzXG4gIFx0Ly8gc2hvdWxkIGJlIHRyZWF0ZWQgYXMgc2tpcHBlZCBldmVuIGlmIHRoZXkgYXJlIGRlZmluZWQgYXMgYG9ubHlgIG9yIGB0b2RvYC5cbiAgXHQvLyBBcyBmb3IgYHRvZG9gIG1vZHVsZSwgYWxsIGl0cyB0ZXN0cyB3aWxsIGJlIHRyZWF0ZWQgYXMgYHRvZG9gIGV4Y2VwdCBmb3JcbiAgXHQvLyB0ZXN0cyBkZWZpbmVkIGFzIGBza2lwYCB3aGljaCB3aWxsIGJlIGxlZnQgaW50YWN0LlxuICBcdC8vXG4gIFx0Ly8gU28sIGlmIGEgdGVzdCBpcyBkZWZpbmVkIGFzIGB0b2RvYCBhbmQgaXMgaW5zaWRlIGEgc2tpcHBlZCBtb2R1bGUsIHdlIHNob3VsZFxuICBcdC8vIHRoZW4gdHJlYXQgdGhhdCB0ZXN0IGFzIGlmIHdhcyBkZWZpbmVkIGFzIGBza2lwYC5cbiAgXHRpZiAodGhpcy5tb2R1bGUuc2tpcCkge1xuICBcdFx0c2V0dGluZ3Muc2tpcCA9IHRydWU7XG4gIFx0XHRzZXR0aW5ncy50b2RvID0gZmFsc2U7XG5cbiAgXHRcdC8vIFNraXBwZWQgdGVzdHMgc2hvdWxkIGJlIGxlZnQgaW50YWN0XG4gIFx0fSBlbHNlIGlmICh0aGlzLm1vZHVsZS50b2RvICYmICFzZXR0aW5ncy5za2lwKSB7XG4gIFx0XHRzZXR0aW5ncy50b2RvID0gdHJ1ZTtcbiAgXHR9XG5cbiAgXHRleHRlbmQodGhpcywgc2V0dGluZ3MpO1xuXG4gIFx0dGhpcy50ZXN0UmVwb3J0ID0gbmV3IFRlc3RSZXBvcnQoc2V0dGluZ3MudGVzdE5hbWUsIHRoaXMubW9kdWxlLnN1aXRlUmVwb3J0LCB7XG4gIFx0XHR0b2RvOiBzZXR0aW5ncy50b2RvLFxuICBcdFx0c2tpcDogc2V0dGluZ3Muc2tpcCxcbiAgXHRcdHZhbGlkOiB0aGlzLnZhbGlkKClcbiAgXHR9KTtcblxuICBcdC8vIFJlZ2lzdGVyIHVuaXF1ZSBzdHJpbmdzXG4gIFx0Zm9yIChpID0gMCwgbCA9IHRoaXMubW9kdWxlLnRlc3RzOyBpIDwgbC5sZW5ndGg7IGkrKykge1xuICBcdFx0aWYgKHRoaXMubW9kdWxlLnRlc3RzW2ldLm5hbWUgPT09IHRoaXMudGVzdE5hbWUpIHtcbiAgXHRcdFx0dGhpcy50ZXN0TmFtZSArPSBcIiBcIjtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHR0aGlzLnRlc3RJZCA9IGdlbmVyYXRlSGFzaCh0aGlzLm1vZHVsZS5uYW1lLCB0aGlzLnRlc3ROYW1lKTtcblxuICBcdHRoaXMubW9kdWxlLnRlc3RzLnB1c2goe1xuICBcdFx0bmFtZTogdGhpcy50ZXN0TmFtZSxcbiAgXHRcdHRlc3RJZDogdGhpcy50ZXN0SWQsXG4gIFx0XHRza2lwOiAhIXNldHRpbmdzLnNraXBcbiAgXHR9KTtcblxuICBcdGlmIChzZXR0aW5ncy5za2lwKSB7XG5cbiAgXHRcdC8vIFNraXBwZWQgdGVzdHMgd2lsbCBmdWxseSBpZ25vcmUgYW55IHNlbnQgY2FsbGJhY2tcbiAgXHRcdHRoaXMuY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgXHRcdHRoaXMuYXN5bmMgPSBmYWxzZTtcbiAgXHRcdHRoaXMuZXhwZWN0ZWQgPSAwO1xuICBcdH0gZWxzZSB7XG4gIFx0XHRpZiAodHlwZW9mIHRoaXMuY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0XHR2YXIgbWV0aG9kID0gdGhpcy50b2RvID8gXCJ0b2RvXCIgOiBcInRlc3RcIjtcblxuICBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcHJvdmlkZSBhIGZ1bmN0aW9uIGFzIGEgdGVzdCBjYWxsYmFjayB0byBRVW5pdC5cIiArIG1ldGhvZCArIFwiKFxcXCJcIiArIHNldHRpbmdzLnRlc3ROYW1lICsgXCJcXFwiKVwiKTtcbiAgXHRcdH1cblxuICBcdFx0dGhpcy5hc3NlcnQgPSBuZXcgQXNzZXJ0KHRoaXMpO1xuICBcdH1cbiAgfVxuXG4gIFRlc3QuY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGdldE5vdFN0YXJ0ZWRNb2R1bGVzKHN0YXJ0TW9kdWxlKSB7XG4gIFx0dmFyIG1vZHVsZSA9IHN0YXJ0TW9kdWxlLFxuICBcdCAgICBtb2R1bGVzID0gW107XG5cbiAgXHR3aGlsZSAobW9kdWxlICYmIG1vZHVsZS50ZXN0c1J1biA9PT0gMCkge1xuICBcdFx0bW9kdWxlcy5wdXNoKG1vZHVsZSk7XG4gIFx0XHRtb2R1bGUgPSBtb2R1bGUucGFyZW50TW9kdWxlO1xuICBcdH1cblxuICBcdC8vIFRoZSBhYm92ZSBwdXNoIG1vZHVsZXMgZnJvbSB0aGUgY2hpbGQgdG8gdGhlIHBhcmVudFxuICBcdC8vIHJldHVybiBhIHJldmVyc2VkIG9yZGVyIHdpdGggdGhlIHRvcCBiZWluZyB0aGUgdG9wIG1vc3QgcGFyZW50IG1vZHVsZVxuICBcdHJldHVybiBtb2R1bGVzLnJldmVyc2UoKTtcbiAgfVxuXG4gIFRlc3QucHJvdG90eXBlID0ge1xuXG4gIFx0Ly8gZ2VuZXJhdGluZyBhIHN0YWNrIHRyYWNlIGNhbiBiZSBleHBlbnNpdmUsIHNvIHVzaW5nIGEgZ2V0dGVyIGRlZmVycyB0aGlzIHVudGlsIHdlIG5lZWQgaXRcbiAgXHRnZXQgc3RhY2soKSB7XG4gIFx0XHRyZXR1cm4gZXh0cmFjdFN0YWNrdHJhY2UodGhpcy5lcnJvckZvclN0YWNrLCAyKTtcbiAgXHR9LFxuXG4gIFx0YmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUoKSB7XG4gIFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIFx0XHR2YXIgbW9kdWxlID0gdGhpcy5tb2R1bGUsXG4gIFx0XHQgICAgbm90U3RhcnRlZE1vZHVsZXMgPSBnZXROb3RTdGFydGVkTW9kdWxlcyhtb2R1bGUpO1xuXG4gIFx0XHQvLyBlbnN1cmUgdGhlIGNhbGxiYWNrcyBhcmUgZXhlY3V0ZWQgc2VyaWFsbHkgZm9yIGVhY2ggbW9kdWxlXG4gIFx0XHR2YXIgY2FsbGJhY2tQcm9taXNlcyA9IG5vdFN0YXJ0ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAocHJvbWlzZUNoYWluLCBzdGFydE1vZHVsZSkge1xuICBcdFx0XHRyZXR1cm4gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdHN0YXJ0TW9kdWxlLnN0YXRzID0geyBhbGw6IDAsIGJhZDogMCwgc3RhcnRlZDogbm93KCkgfTtcbiAgXHRcdFx0XHRlbWl0KFwic3VpdGVTdGFydFwiLCBzdGFydE1vZHVsZS5zdWl0ZVJlcG9ydC5zdGFydCh0cnVlKSk7XG4gIFx0XHRcdFx0cmV0dXJuIHJ1bkxvZ2dpbmdDYWxsYmFja3MoXCJtb2R1bGVTdGFydFwiLCB7XG4gIFx0XHRcdFx0XHRuYW1lOiBzdGFydE1vZHVsZS5uYW1lLFxuICBcdFx0XHRcdFx0dGVzdHM6IHN0YXJ0TW9kdWxlLnRlc3RzXG4gIFx0XHRcdFx0fSk7XG4gIFx0XHRcdH0pO1xuICBcdFx0fSwgUHJvbWlzZSQxLnJlc29sdmUoW10pKTtcblxuICBcdFx0cmV0dXJuIGNhbGxiYWNrUHJvbWlzZXMudGhlbihmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdGNvbmZpZy5jdXJyZW50ID0gX3RoaXM7XG5cbiAgXHRcdFx0X3RoaXMudGVzdEVudmlyb25tZW50ID0gZXh0ZW5kKHt9LCBtb2R1bGUudGVzdEVudmlyb25tZW50KTtcblxuICBcdFx0XHRfdGhpcy5zdGFydGVkID0gbm93KCk7XG4gIFx0XHRcdGVtaXQoXCJ0ZXN0U3RhcnRcIiwgX3RoaXMudGVzdFJlcG9ydC5zdGFydCh0cnVlKSk7XG4gIFx0XHRcdHJldHVybiBydW5Mb2dnaW5nQ2FsbGJhY2tzKFwidGVzdFN0YXJ0XCIsIHtcbiAgXHRcdFx0XHRuYW1lOiBfdGhpcy50ZXN0TmFtZSxcbiAgXHRcdFx0XHRtb2R1bGU6IG1vZHVsZS5uYW1lLFxuICBcdFx0XHRcdHRlc3RJZDogX3RoaXMudGVzdElkLFxuICBcdFx0XHRcdHByZXZpb3VzRmFpbHVyZTogX3RoaXMucHJldmlvdXNGYWlsdXJlXG4gIFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdGlmICghY29uZmlnLnBvbGx1dGlvbikge1xuICBcdFx0XHRcdFx0c2F2ZUdsb2JhbCgpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fSk7XG4gIFx0XHR9KTtcbiAgXHR9LFxuXG4gIFx0cnVuOiBmdW5jdGlvbiBydW4oKSB7XG4gIFx0XHR2YXIgcHJvbWlzZTtcblxuICBcdFx0Y29uZmlnLmN1cnJlbnQgPSB0aGlzO1xuXG4gIFx0XHR0aGlzLmNhbGxiYWNrU3RhcnRlZCA9IG5vdygpO1xuXG4gIFx0XHRpZiAoY29uZmlnLm5vdHJ5Y2F0Y2gpIHtcbiAgXHRcdFx0cnVuVGVzdCh0aGlzKTtcbiAgXHRcdFx0cmV0dXJuO1xuICBcdFx0fVxuXG4gIFx0XHR0cnkge1xuICBcdFx0XHRydW5UZXN0KHRoaXMpO1xuICBcdFx0fSBjYXRjaCAoZSkge1xuICBcdFx0XHR0aGlzLnB1c2hGYWlsdXJlKFwiRGllZCBvbiB0ZXN0ICNcIiArICh0aGlzLmFzc2VydGlvbnMubGVuZ3RoICsgMSkgKyBcIiBcIiArIHRoaXMuc3RhY2sgKyBcIjogXCIgKyAoZS5tZXNzYWdlIHx8IGUpLCBleHRyYWN0U3RhY2t0cmFjZShlLCAwKSk7XG5cbiAgXHRcdFx0Ly8gRWxzZSBuZXh0IHRlc3Qgd2lsbCBjYXJyeSB0aGUgcmVzcG9uc2liaWxpdHlcbiAgXHRcdFx0c2F2ZUdsb2JhbCgpO1xuXG4gIFx0XHRcdC8vIFJlc3RhcnQgdGhlIHRlc3RzIGlmIHRoZXkncmUgYmxvY2tpbmdcbiAgXHRcdFx0aWYgKGNvbmZpZy5ibG9ja2luZykge1xuICBcdFx0XHRcdGludGVybmFsUmVjb3Zlcih0aGlzKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHRmdW5jdGlvbiBydW5UZXN0KHRlc3QpIHtcbiAgXHRcdFx0cHJvbWlzZSA9IHRlc3QuY2FsbGJhY2suY2FsbCh0ZXN0LnRlc3RFbnZpcm9ubWVudCwgdGVzdC5hc3NlcnQpO1xuICBcdFx0XHR0ZXN0LnJlc29sdmVQcm9taXNlKHByb21pc2UpO1xuXG4gIFx0XHRcdC8vIElmIHRoZSB0ZXN0IGhhcyBhIFwibG9ja1wiIG9uIGl0LCBidXQgdGhlIHRpbWVvdXQgaXMgMCwgdGhlbiB3ZSBwdXNoIGFcbiAgXHRcdFx0Ly8gZmFpbHVyZSBhcyB0aGUgdGVzdCBzaG91bGQgYmUgc3luY2hyb25vdXMuXG4gIFx0XHRcdGlmICh0ZXN0LnRpbWVvdXQgPT09IDAgJiYgdGVzdC5zZW1hcGhvcmUgIT09IDApIHtcbiAgXHRcdFx0XHRwdXNoRmFpbHVyZShcIlRlc3QgZGlkIG5vdCBmaW5pc2ggc3luY2hyb25vdXNseSBldmVuIHRob3VnaCBhc3NlcnQudGltZW91dCggMCApIHdhcyB1c2VkLlwiLCBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9LFxuXG4gIFx0YWZ0ZXI6IGZ1bmN0aW9uIGFmdGVyKCkge1xuICBcdFx0Y2hlY2tQb2xsdXRpb24oKTtcbiAgXHR9LFxuXG4gIFx0cXVldWVIb29rOiBmdW5jdGlvbiBxdWV1ZUhvb2soaG9vaywgaG9va05hbWUsIGhvb2tPd25lcikge1xuICBcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgXHRcdHZhciBjYWxsSG9vayA9IGZ1bmN0aW9uIGNhbGxIb29rKCkge1xuICBcdFx0XHR2YXIgcHJvbWlzZSA9IGhvb2suY2FsbChfdGhpczIudGVzdEVudmlyb25tZW50LCBfdGhpczIuYXNzZXJ0KTtcbiAgXHRcdFx0X3RoaXMyLnJlc29sdmVQcm9taXNlKHByb21pc2UsIGhvb2tOYW1lKTtcbiAgXHRcdH07XG5cbiAgXHRcdHZhciBydW5Ib29rID0gZnVuY3Rpb24gcnVuSG9vaygpIHtcbiAgXHRcdFx0aWYgKGhvb2tOYW1lID09PSBcImJlZm9yZVwiKSB7XG4gIFx0XHRcdFx0aWYgKGhvb2tPd25lci51bnNraXBwZWRUZXN0c1J1biAhPT0gMCkge1xuICBcdFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdF90aGlzMi5wcmVzZXJ2ZUVudmlyb25tZW50ID0gdHJ1ZTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdC8vIFRoZSAnYWZ0ZXInIGhvb2sgc2hvdWxkIG9ubHkgZXhlY3V0ZSB3aGVuIHRoZXJlIGFyZSBub3QgdGVzdHMgbGVmdCBhbmRcbiAgXHRcdFx0Ly8gd2hlbiB0aGUgJ2FmdGVyJyBhbmQgJ2ZpbmlzaCcgdGFza3MgYXJlIHRoZSBvbmx5IHRhc2tzIGxlZnQgdG8gcHJvY2Vzc1xuICBcdFx0XHRpZiAoaG9va05hbWUgPT09IFwiYWZ0ZXJcIiAmJiBob29rT3duZXIudW5za2lwcGVkVGVzdHNSdW4gIT09IG51bWJlck9mVW5za2lwcGVkVGVzdHMoaG9va093bmVyKSAtIDEgJiYgKGNvbmZpZy5xdWV1ZS5sZW5ndGggPiAwIHx8IFByb2Nlc3NpbmdRdWV1ZS50YXNrQ291bnQoKSA+IDIpKSB7XG4gIFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0Y29uZmlnLmN1cnJlbnQgPSBfdGhpczI7XG4gIFx0XHRcdGlmIChjb25maWcubm90cnljYXRjaCkge1xuICBcdFx0XHRcdGNhbGxIb29rKCk7XG4gIFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHR9XG4gIFx0XHRcdHRyeSB7XG4gIFx0XHRcdFx0Y2FsbEhvb2soKTtcbiAgXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcbiAgXHRcdFx0XHRfdGhpczIucHVzaEZhaWx1cmUoaG9va05hbWUgKyBcIiBmYWlsZWQgb24gXCIgKyBfdGhpczIudGVzdE5hbWUgKyBcIjogXCIgKyAoZXJyb3IubWVzc2FnZSB8fCBlcnJvciksIGV4dHJhY3RTdGFja3RyYWNlKGVycm9yLCAwKSk7XG4gIFx0XHRcdH1cbiAgXHRcdH07XG5cbiAgXHRcdHJldHVybiBydW5Ib29rO1xuICBcdH0sXG5cblxuICBcdC8vIEN1cnJlbnRseSBvbmx5IHVzZWQgZm9yIG1vZHVsZSBsZXZlbCBob29rcywgY2FuIGJlIHVzZWQgdG8gYWRkIGdsb2JhbCBsZXZlbCBvbmVzXG4gIFx0aG9va3M6IGZ1bmN0aW9uIGhvb2tzKGhhbmRsZXIpIHtcbiAgXHRcdHZhciBob29rcyA9IFtdO1xuXG4gIFx0XHRmdW5jdGlvbiBwcm9jZXNzSG9va3ModGVzdCwgbW9kdWxlKSB7XG4gIFx0XHRcdGlmIChtb2R1bGUucGFyZW50TW9kdWxlKSB7XG4gIFx0XHRcdFx0cHJvY2Vzc0hvb2tzKHRlc3QsIG1vZHVsZS5wYXJlbnRNb2R1bGUpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0aWYgKG1vZHVsZS5ob29rc1toYW5kbGVyXS5sZW5ndGgpIHtcbiAgXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5ob29rc1toYW5kbGVyXS5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdFx0aG9va3MucHVzaCh0ZXN0LnF1ZXVlSG9vayhtb2R1bGUuaG9va3NbaGFuZGxlcl1baV0sIGhhbmRsZXIsIG1vZHVsZSkpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBIb29rcyBhcmUgaWdub3JlZCBvbiBza2lwcGVkIHRlc3RzXG4gIFx0XHRpZiAoIXRoaXMuc2tpcCkge1xuICBcdFx0XHRwcm9jZXNzSG9va3ModGhpcywgdGhpcy5tb2R1bGUpO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gaG9va3M7XG4gIFx0fSxcblxuXG4gIFx0ZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goKSB7XG4gIFx0XHRjb25maWcuY3VycmVudCA9IHRoaXM7XG5cbiAgXHRcdC8vIFJlbGVhc2UgdGhlIHRlc3QgY2FsbGJhY2sgdG8gZW5zdXJlIHRoYXQgYW55dGhpbmcgcmVmZXJlbmNlZCBoYXMgYmVlblxuICBcdFx0Ly8gcmVsZWFzZWQgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gIFx0XHR0aGlzLmNhbGxiYWNrID0gdW5kZWZpbmVkO1xuXG4gIFx0XHRpZiAodGhpcy5zdGVwcy5sZW5ndGgpIHtcbiAgXHRcdFx0dmFyIHN0ZXBzTGlzdCA9IHRoaXMuc3RlcHMuam9pbihcIiwgXCIpO1xuICBcdFx0XHR0aGlzLnB1c2hGYWlsdXJlKFwiRXhwZWN0ZWQgYXNzZXJ0LnZlcmlmeVN0ZXBzKCkgdG8gYmUgY2FsbGVkIGJlZm9yZSBlbmQgb2YgdGVzdCBcIiArIChcImFmdGVyIHVzaW5nIGFzc2VydC5zdGVwKCkuIFVudmVyaWZpZWQgc3RlcHM6IFwiICsgc3RlcHNMaXN0KSwgdGhpcy5zdGFjayk7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb25maWcucmVxdWlyZUV4cGVjdHMgJiYgdGhpcy5leHBlY3RlZCA9PT0gbnVsbCkge1xuICBcdFx0XHR0aGlzLnB1c2hGYWlsdXJlKFwiRXhwZWN0ZWQgbnVtYmVyIG9mIGFzc2VydGlvbnMgdG8gYmUgZGVmaW5lZCwgYnV0IGV4cGVjdCgpIHdhcyBcIiArIFwibm90IGNhbGxlZC5cIiwgdGhpcy5zdGFjayk7XG4gIFx0XHR9IGVsc2UgaWYgKHRoaXMuZXhwZWN0ZWQgIT09IG51bGwgJiYgdGhpcy5leHBlY3RlZCAhPT0gdGhpcy5hc3NlcnRpb25zLmxlbmd0aCkge1xuICBcdFx0XHR0aGlzLnB1c2hGYWlsdXJlKFwiRXhwZWN0ZWQgXCIgKyB0aGlzLmV4cGVjdGVkICsgXCIgYXNzZXJ0aW9ucywgYnV0IFwiICsgdGhpcy5hc3NlcnRpb25zLmxlbmd0aCArIFwiIHdlcmUgcnVuXCIsIHRoaXMuc3RhY2spO1xuICBcdFx0fSBlbHNlIGlmICh0aGlzLmV4cGVjdGVkID09PSBudWxsICYmICF0aGlzLmFzc2VydGlvbnMubGVuZ3RoKSB7XG4gIFx0XHRcdHRoaXMucHVzaEZhaWx1cmUoXCJFeHBlY3RlZCBhdCBsZWFzdCBvbmUgYXNzZXJ0aW9uLCBidXQgbm9uZSB3ZXJlIHJ1biAtIGNhbGwgXCIgKyBcImV4cGVjdCgwKSB0byBhY2NlcHQgemVybyBhc3NlcnRpb25zLlwiLCB0aGlzLnN0YWNrKTtcbiAgXHRcdH1cblxuICBcdFx0dmFyIGksXG4gIFx0XHQgICAgbW9kdWxlID0gdGhpcy5tb2R1bGUsXG4gIFx0XHQgICAgbW9kdWxlTmFtZSA9IG1vZHVsZS5uYW1lLFxuICBcdFx0ICAgIHRlc3ROYW1lID0gdGhpcy50ZXN0TmFtZSxcbiAgXHRcdCAgICBza2lwcGVkID0gISF0aGlzLnNraXAsXG4gIFx0XHQgICAgdG9kbyA9ICEhdGhpcy50b2RvLFxuICBcdFx0ICAgIGJhZCA9IDAsXG4gIFx0XHQgICAgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xuXG4gIFx0XHR0aGlzLnJ1bnRpbWUgPSBub3coKSAtIHRoaXMuc3RhcnRlZDtcblxuICBcdFx0Y29uZmlnLnN0YXRzLmFsbCArPSB0aGlzLmFzc2VydGlvbnMubGVuZ3RoO1xuICBcdFx0bW9kdWxlLnN0YXRzLmFsbCArPSB0aGlzLmFzc2VydGlvbnMubGVuZ3RoO1xuXG4gIFx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy5hc3NlcnRpb25zLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdGlmICghdGhpcy5hc3NlcnRpb25zW2ldLnJlc3VsdCkge1xuICBcdFx0XHRcdGJhZCsrO1xuICBcdFx0XHRcdGNvbmZpZy5zdGF0cy5iYWQrKztcbiAgXHRcdFx0XHRtb2R1bGUuc3RhdHMuYmFkKys7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0bm90aWZ5VGVzdHNSYW4obW9kdWxlLCBza2lwcGVkKTtcblxuICBcdFx0Ly8gU3RvcmUgcmVzdWx0IHdoZW4gcG9zc2libGVcbiAgXHRcdGlmIChzdG9yYWdlKSB7XG4gIFx0XHRcdGlmIChiYWQpIHtcbiAgXHRcdFx0XHRzdG9yYWdlLnNldEl0ZW0oXCJxdW5pdC10ZXN0LVwiICsgbW9kdWxlTmFtZSArIFwiLVwiICsgdGVzdE5hbWUsIGJhZCk7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0c3RvcmFnZS5yZW1vdmVJdGVtKFwicXVuaXQtdGVzdC1cIiArIG1vZHVsZU5hbWUgKyBcIi1cIiArIHRlc3ROYW1lKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBBZnRlciBlbWl0dGluZyB0aGUganMtcmVwb3J0ZXJzIGV2ZW50IHdlIGNsZWFudXAgdGhlIGFzc2VydGlvbiBkYXRhIHRvXG4gIFx0XHQvLyBhdm9pZCBsZWFraW5nIGl0LiBJdCBpcyBub3QgdXNlZCBieSB0aGUgbGVnYWN5IHRlc3REb25lIGNhbGxiYWNrcy5cbiAgXHRcdGVtaXQoXCJ0ZXN0RW5kXCIsIHRoaXMudGVzdFJlcG9ydC5lbmQodHJ1ZSkpO1xuICBcdFx0dGhpcy50ZXN0UmVwb3J0LnNsaW1Bc3NlcnRpb25zKCk7XG4gIFx0XHR2YXIgdGVzdCA9IHRoaXM7XG5cbiAgXHRcdHJldHVybiBydW5Mb2dnaW5nQ2FsbGJhY2tzKFwidGVzdERvbmVcIiwge1xuICBcdFx0XHRuYW1lOiB0ZXN0TmFtZSxcbiAgXHRcdFx0bW9kdWxlOiBtb2R1bGVOYW1lLFxuICBcdFx0XHRza2lwcGVkOiBza2lwcGVkLFxuICBcdFx0XHR0b2RvOiB0b2RvLFxuICBcdFx0XHRmYWlsZWQ6IGJhZCxcbiAgXHRcdFx0cGFzc2VkOiB0aGlzLmFzc2VydGlvbnMubGVuZ3RoIC0gYmFkLFxuICBcdFx0XHR0b3RhbDogdGhpcy5hc3NlcnRpb25zLmxlbmd0aCxcbiAgXHRcdFx0cnVudGltZTogc2tpcHBlZCA/IDAgOiB0aGlzLnJ1bnRpbWUsXG5cbiAgXHRcdFx0Ly8gSFRNTCBSZXBvcnRlciB1c2VcbiAgXHRcdFx0YXNzZXJ0aW9uczogdGhpcy5hc3NlcnRpb25zLFxuICBcdFx0XHR0ZXN0SWQ6IHRoaXMudGVzdElkLFxuXG4gIFx0XHRcdC8vIFNvdXJjZSBvZiBUZXN0XG4gIFx0XHRcdC8vIGdlbmVyYXRpbmcgc3RhY2sgdHJhY2UgaXMgZXhwZW5zaXZlLCBzbyB1c2luZyBhIGdldHRlciB3aWxsIGhlbHAgZGVmZXIgdGhpcyB1bnRpbCB3ZSBuZWVkIGl0XG4gIFx0XHRcdGdldCBzb3VyY2UoKSB7XG4gIFx0XHRcdFx0cmV0dXJuIHRlc3Quc3RhY2s7XG4gIFx0XHRcdH1cbiAgXHRcdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICBcdFx0XHRpZiAobW9kdWxlLnRlc3RzUnVuID09PSBudW1iZXJPZlRlc3RzKG1vZHVsZSkpIHtcbiAgXHRcdFx0XHR2YXIgY29tcGxldGVkTW9kdWxlcyA9IFttb2R1bGVdO1xuXG4gIFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHBhcmVudCBtb2R1bGVzLCBpdGVyYXRpdmVseSwgYXJlIGRvbmUuIElmIHRoYXQgdGhlIGNhc2UsXG4gIFx0XHRcdFx0Ly8gd2UgZW1pdCB0aGUgYHN1aXRlRW5kYCBldmVudCBhbmQgdHJpZ2dlciBgbW9kdWxlRG9uZWAgY2FsbGJhY2suXG4gIFx0XHRcdFx0dmFyIHBhcmVudCA9IG1vZHVsZS5wYXJlbnRNb2R1bGU7XG4gIFx0XHRcdFx0d2hpbGUgKHBhcmVudCAmJiBwYXJlbnQudGVzdHNSdW4gPT09IG51bWJlck9mVGVzdHMocGFyZW50KSkge1xuICBcdFx0XHRcdFx0Y29tcGxldGVkTW9kdWxlcy5wdXNoKHBhcmVudCk7XG4gIFx0XHRcdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50TW9kdWxlO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdHJldHVybiBjb21wbGV0ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAocHJvbWlzZUNoYWluLCBjb21wbGV0ZWRNb2R1bGUpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBwcm9taXNlQ2hhaW4udGhlbihmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0XHRcdHJldHVybiBsb2dTdWl0ZUVuZChjb21wbGV0ZWRNb2R1bGUpO1xuICBcdFx0XHRcdFx0fSk7XG4gIFx0XHRcdFx0fSwgUHJvbWlzZSQxLnJlc29sdmUoW10pKTtcbiAgXHRcdFx0fVxuICBcdFx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdGNvbmZpZy5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICBcdFx0fSk7XG5cbiAgXHRcdGZ1bmN0aW9uIGxvZ1N1aXRlRW5kKG1vZHVsZSkge1xuXG4gIFx0XHRcdC8vIFJlc2V0IGBtb2R1bGUuaG9va3NgIHRvIGVuc3VyZSB0aGF0IGFueXRoaW5nIHJlZmVyZW5jZWQgaW4gdGhlc2UgaG9va3NcbiAgXHRcdFx0Ly8gaGFzIGJlZW4gcmVsZWFzZWQgdG8gYmUgZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gIFx0XHRcdG1vZHVsZS5ob29rcyA9IHt9O1xuXG4gIFx0XHRcdGVtaXQoXCJzdWl0ZUVuZFwiLCBtb2R1bGUuc3VpdGVSZXBvcnQuZW5kKHRydWUpKTtcbiAgXHRcdFx0cmV0dXJuIHJ1bkxvZ2dpbmdDYWxsYmFja3MoXCJtb2R1bGVEb25lXCIsIHtcbiAgXHRcdFx0XHRuYW1lOiBtb2R1bGUubmFtZSxcbiAgXHRcdFx0XHR0ZXN0czogbW9kdWxlLnRlc3RzLFxuICBcdFx0XHRcdGZhaWxlZDogbW9kdWxlLnN0YXRzLmJhZCxcbiAgXHRcdFx0XHRwYXNzZWQ6IG1vZHVsZS5zdGF0cy5hbGwgLSBtb2R1bGUuc3RhdHMuYmFkLFxuICBcdFx0XHRcdHRvdGFsOiBtb2R1bGUuc3RhdHMuYWxsLFxuICBcdFx0XHRcdHJ1bnRpbWU6IG5vdygpIC0gbW9kdWxlLnN0YXRzLnN0YXJ0ZWRcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSxcblxuICBcdHByZXNlcnZlVGVzdEVudmlyb25tZW50OiBmdW5jdGlvbiBwcmVzZXJ2ZVRlc3RFbnZpcm9ubWVudCgpIHtcbiAgXHRcdGlmICh0aGlzLnByZXNlcnZlRW52aXJvbm1lbnQpIHtcbiAgXHRcdFx0dGhpcy5tb2R1bGUudGVzdEVudmlyb25tZW50ID0gdGhpcy50ZXN0RW52aXJvbm1lbnQ7XG4gIFx0XHRcdHRoaXMudGVzdEVudmlyb25tZW50ID0gZXh0ZW5kKHt9LCB0aGlzLm1vZHVsZS50ZXN0RW52aXJvbm1lbnQpO1xuICBcdFx0fVxuICBcdH0sXG5cbiAgXHRxdWV1ZTogZnVuY3Rpb24gcXVldWUoKSB7XG4gIFx0XHR2YXIgdGVzdCA9IHRoaXM7XG5cbiAgXHRcdGlmICghdGhpcy52YWxpZCgpKSB7XG4gIFx0XHRcdHJldHVybjtcbiAgXHRcdH1cblxuICBcdFx0ZnVuY3Rpb24gcnVuVGVzdCgpIHtcbiAgXHRcdFx0cmV0dXJuIFtmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0cmV0dXJuIHRlc3QuYmVmb3JlKCk7XG4gIFx0XHRcdH1dLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheSh0ZXN0Lmhvb2tzKFwiYmVmb3JlXCIpKSwgW2Z1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHR0ZXN0LnByZXNlcnZlVGVzdEVudmlyb25tZW50KCk7XG4gIFx0XHRcdH1dLCB0b0NvbnN1bWFibGVBcnJheSh0ZXN0Lmhvb2tzKFwiYmVmb3JlRWFjaFwiKSksIFtmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0dGVzdC5ydW4oKTtcbiAgXHRcdFx0fV0sIHRvQ29uc3VtYWJsZUFycmF5KHRlc3QuaG9va3MoXCJhZnRlckVhY2hcIikucmV2ZXJzZSgpKSwgdG9Db25zdW1hYmxlQXJyYXkodGVzdC5ob29rcyhcImFmdGVyXCIpLnJldmVyc2UoKSksIFtmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0dGVzdC5hZnRlcigpO1xuICBcdFx0XHR9LCBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0cmV0dXJuIHRlc3QuZmluaXNoKCk7XG4gIFx0XHRcdH1dKTtcbiAgXHRcdH1cblxuICBcdFx0dmFyIHByZXZpb3VzRmFpbENvdW50ID0gY29uZmlnLnN0b3JhZ2UgJiYgK2NvbmZpZy5zdG9yYWdlLmdldEl0ZW0oXCJxdW5pdC10ZXN0LVwiICsgdGhpcy5tb2R1bGUubmFtZSArIFwiLVwiICsgdGhpcy50ZXN0TmFtZSk7XG5cbiAgXHRcdC8vIFByaW9yaXRpemUgcHJldmlvdXNseSBmYWlsZWQgdGVzdHMsIGRldGVjdGVkIGZyb20gc3RvcmFnZVxuICBcdFx0dmFyIHByaW9yaXRpemUgPSBjb25maWcucmVvcmRlciAmJiAhIXByZXZpb3VzRmFpbENvdW50O1xuXG4gIFx0XHR0aGlzLnByZXZpb3VzRmFpbHVyZSA9ICEhcHJldmlvdXNGYWlsQ291bnQ7XG5cbiAgXHRcdFByb2Nlc3NpbmdRdWV1ZS5hZGQocnVuVGVzdCwgcHJpb3JpdGl6ZSwgY29uZmlnLnNlZWQpO1xuXG4gIFx0XHQvLyBJZiB0aGUgcXVldWUgaGFzIGFscmVhZHkgZmluaXNoZWQsIHdlIG1hbnVhbGx5IHByb2Nlc3MgdGhlIG5ldyB0ZXN0XG4gIFx0XHRpZiAoUHJvY2Vzc2luZ1F1ZXVlLmZpbmlzaGVkKSB7XG4gIFx0XHRcdFByb2Nlc3NpbmdRdWV1ZS5hZHZhbmNlKCk7XG4gIFx0XHR9XG4gIFx0fSxcblxuXG4gIFx0cHVzaFJlc3VsdDogZnVuY3Rpb24gcHVzaFJlc3VsdChyZXN1bHRJbmZvKSB7XG4gIFx0XHRpZiAodGhpcyAhPT0gY29uZmlnLmN1cnJlbnQpIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQXNzZXJ0aW9uIG9jY3VycmVkIGFmdGVyIHRlc3QgaGFkIGZpbmlzaGVkLlwiKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gRGVzdHJ1Y3R1cmUgb2YgcmVzdWx0SW5mbyA9IHsgcmVzdWx0LCBhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBuZWdhdGl2ZSB9XG4gIFx0XHR2YXIgc291cmNlLFxuICBcdFx0ICAgIGRldGFpbHMgPSB7XG4gIFx0XHRcdG1vZHVsZTogdGhpcy5tb2R1bGUubmFtZSxcbiAgXHRcdFx0bmFtZTogdGhpcy50ZXN0TmFtZSxcbiAgXHRcdFx0cmVzdWx0OiByZXN1bHRJbmZvLnJlc3VsdCxcbiAgXHRcdFx0bWVzc2FnZTogcmVzdWx0SW5mby5tZXNzYWdlLFxuICBcdFx0XHRhY3R1YWw6IHJlc3VsdEluZm8uYWN0dWFsLFxuICBcdFx0XHR0ZXN0SWQ6IHRoaXMudGVzdElkLFxuICBcdFx0XHRuZWdhdGl2ZTogcmVzdWx0SW5mby5uZWdhdGl2ZSB8fCBmYWxzZSxcbiAgXHRcdFx0cnVudGltZTogbm93KCkgLSB0aGlzLnN0YXJ0ZWQsXG4gIFx0XHRcdHRvZG86ICEhdGhpcy50b2RvXG4gIFx0XHR9O1xuXG4gIFx0XHRpZiAoaGFzT3duLmNhbGwocmVzdWx0SW5mbywgXCJleHBlY3RlZFwiKSkge1xuICBcdFx0XHRkZXRhaWxzLmV4cGVjdGVkID0gcmVzdWx0SW5mby5leHBlY3RlZDtcbiAgXHRcdH1cblxuICBcdFx0aWYgKCFyZXN1bHRJbmZvLnJlc3VsdCkge1xuICBcdFx0XHRzb3VyY2UgPSByZXN1bHRJbmZvLnNvdXJjZSB8fCBzb3VyY2VGcm9tU3RhY2t0cmFjZSgpO1xuXG4gIFx0XHRcdGlmIChzb3VyY2UpIHtcbiAgXHRcdFx0XHRkZXRhaWxzLnNvdXJjZSA9IHNvdXJjZTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHR0aGlzLmxvZ0Fzc2VydGlvbihkZXRhaWxzKTtcblxuICBcdFx0dGhpcy5hc3NlcnRpb25zLnB1c2goe1xuICBcdFx0XHRyZXN1bHQ6ICEhcmVzdWx0SW5mby5yZXN1bHQsXG4gIFx0XHRcdG1lc3NhZ2U6IHJlc3VsdEluZm8ubWVzc2FnZVxuICBcdFx0fSk7XG4gIFx0fSxcblxuICBcdHB1c2hGYWlsdXJlOiBmdW5jdGlvbiBwdXNoRmFpbHVyZShtZXNzYWdlLCBzb3VyY2UsIGFjdHVhbCkge1xuICBcdFx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIFRlc3QpKSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcInB1c2hGYWlsdXJlKCkgYXNzZXJ0aW9uIG91dHNpZGUgdGVzdCBjb250ZXh0LCB3YXMgXCIgKyBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gIFx0XHR9XG5cbiAgXHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdHJlc3VsdDogZmFsc2UsXG4gIFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UgfHwgXCJlcnJvclwiLFxuICBcdFx0XHRhY3R1YWw6IGFjdHVhbCB8fCBudWxsLFxuICBcdFx0XHRzb3VyY2U6IHNvdXJjZVxuICBcdFx0fSk7XG4gIFx0fSxcblxuICBcdC8qKlxuICAgICogTG9nIGFzc2VydGlvbiBkZXRhaWxzIHVzaW5nIGJvdGggdGhlIG9sZCBRVW5pdC5sb2cgaW50ZXJmYWNlIGFuZFxuICAgICogUVVuaXQub24oIFwiYXNzZXJ0aW9uXCIgKSBpbnRlcmZhY2UuXG4gICAgKlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdGxvZ0Fzc2VydGlvbjogZnVuY3Rpb24gbG9nQXNzZXJ0aW9uKGRldGFpbHMpIHtcbiAgXHRcdHJ1bkxvZ2dpbmdDYWxsYmFja3MoXCJsb2dcIiwgZGV0YWlscyk7XG5cbiAgXHRcdHZhciBhc3NlcnRpb24gPSB7XG4gIFx0XHRcdHBhc3NlZDogZGV0YWlscy5yZXN1bHQsXG4gIFx0XHRcdGFjdHVhbDogZGV0YWlscy5hY3R1YWwsXG4gIFx0XHRcdGV4cGVjdGVkOiBkZXRhaWxzLmV4cGVjdGVkLFxuICBcdFx0XHRtZXNzYWdlOiBkZXRhaWxzLm1lc3NhZ2UsXG4gIFx0XHRcdHN0YWNrOiBkZXRhaWxzLnNvdXJjZSxcbiAgXHRcdFx0dG9kbzogZGV0YWlscy50b2RvXG4gIFx0XHR9O1xuICBcdFx0dGhpcy50ZXN0UmVwb3J0LnB1c2hBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgXHRcdGVtaXQoXCJhc3NlcnRpb25cIiwgYXNzZXJ0aW9uKTtcbiAgXHR9LFxuXG5cbiAgXHRyZXNvbHZlUHJvbWlzZTogZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgcGhhc2UpIHtcbiAgXHRcdHZhciB0aGVuLFxuICBcdFx0ICAgIHJlc3VtZSxcbiAgXHRcdCAgICBtZXNzYWdlLFxuICBcdFx0ICAgIHRlc3QgPSB0aGlzO1xuICBcdFx0aWYgKHByb21pc2UgIT0gbnVsbCkge1xuICBcdFx0XHR0aGVuID0gcHJvbWlzZS50aGVuO1xuICBcdFx0XHRpZiAob2JqZWN0VHlwZSh0aGVuKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHRcdFx0cmVzdW1lID0gaW50ZXJuYWxTdG9wKHRlc3QpO1xuICBcdFx0XHRcdGlmIChjb25maWcubm90cnljYXRjaCkge1xuICBcdFx0XHRcdFx0dGhlbi5jYWxsKHByb21pc2UsIGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRcdFx0cmVzdW1lKCk7XG4gIFx0XHRcdFx0XHR9KTtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0dGhlbi5jYWxsKHByb21pc2UsIGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRcdFx0cmVzdW1lKCk7XG4gIFx0XHRcdFx0XHR9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgXHRcdFx0XHRcdFx0bWVzc2FnZSA9IFwiUHJvbWlzZSByZWplY3RlZCBcIiArICghcGhhc2UgPyBcImR1cmluZ1wiIDogcGhhc2UucmVwbGFjZSgvRWFjaCQvLCBcIlwiKSkgKyBcIiBcXFwiXCIgKyB0ZXN0LnRlc3ROYW1lICsgXCJcXFwiOiBcIiArIChlcnJvciAmJiBlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgXHRcdFx0XHRcdFx0dGVzdC5wdXNoRmFpbHVyZShtZXNzYWdlLCBleHRyYWN0U3RhY2t0cmFjZShlcnJvciwgMCkpO1xuXG4gIFx0XHRcdFx0XHRcdC8vIEVsc2UgbmV4dCB0ZXN0IHdpbGwgY2FycnkgdGhlIHJlc3BvbnNpYmlsaXR5XG4gIFx0XHRcdFx0XHRcdHNhdmVHbG9iYWwoKTtcblxuICBcdFx0XHRcdFx0XHQvLyBVbmJsb2NrXG4gIFx0XHRcdFx0XHRcdGludGVybmFsUmVjb3Zlcih0ZXN0KTtcbiAgXHRcdFx0XHRcdH0pO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH0sXG5cbiAgXHR2YWxpZDogZnVuY3Rpb24gdmFsaWQoKSB7XG4gIFx0XHR2YXIgZmlsdGVyID0gY29uZmlnLmZpbHRlcixcbiAgXHRcdCAgICByZWdleEZpbHRlciA9IC9eKCE/KVxcLyhbXFx3XFxXXSopXFwvKGk/JCkvLmV4ZWMoZmlsdGVyKSxcbiAgXHRcdCAgICBtb2R1bGUgPSBjb25maWcubW9kdWxlICYmIGNvbmZpZy5tb2R1bGUudG9Mb3dlckNhc2UoKSxcbiAgXHRcdCAgICBmdWxsTmFtZSA9IHRoaXMubW9kdWxlLm5hbWUgKyBcIjogXCIgKyB0aGlzLnRlc3ROYW1lO1xuXG4gIFx0XHRmdW5jdGlvbiBtb2R1bGVDaGFpbk5hbWVNYXRjaCh0ZXN0TW9kdWxlKSB7XG4gIFx0XHRcdHZhciB0ZXN0TW9kdWxlTmFtZSA9IHRlc3RNb2R1bGUubmFtZSA/IHRlc3RNb2R1bGUubmFtZS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgXHRcdFx0aWYgKHRlc3RNb2R1bGVOYW1lID09PSBtb2R1bGUpIHtcbiAgXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdFx0fSBlbHNlIGlmICh0ZXN0TW9kdWxlLnBhcmVudE1vZHVsZSkge1xuICBcdFx0XHRcdHJldHVybiBtb2R1bGVDaGFpbk5hbWVNYXRjaCh0ZXN0TW9kdWxlLnBhcmVudE1vZHVsZSk7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdGZ1bmN0aW9uIG1vZHVsZUNoYWluSWRNYXRjaCh0ZXN0TW9kdWxlKSB7XG4gIFx0XHRcdHJldHVybiBpbkFycmF5KHRlc3RNb2R1bGUubW9kdWxlSWQsIGNvbmZpZy5tb2R1bGVJZCkgfHwgdGVzdE1vZHVsZS5wYXJlbnRNb2R1bGUgJiYgbW9kdWxlQ2hhaW5JZE1hdGNoKHRlc3RNb2R1bGUucGFyZW50TW9kdWxlKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gSW50ZXJuYWxseS1nZW5lcmF0ZWQgdGVzdHMgYXJlIGFsd2F5cyB2YWxpZFxuICBcdFx0aWYgKHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjay52YWxpZFRlc3QpIHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb25maWcubW9kdWxlSWQgJiYgY29uZmlnLm1vZHVsZUlkLmxlbmd0aCA+IDAgJiYgIW1vZHVsZUNoYWluSWRNYXRjaCh0aGlzLm1vZHVsZSkpIHtcblxuICBcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb25maWcudGVzdElkICYmIGNvbmZpZy50ZXN0SWQubGVuZ3RoID4gMCAmJiAhaW5BcnJheSh0aGlzLnRlc3RJZCwgY29uZmlnLnRlc3RJZCkpIHtcblxuICBcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChtb2R1bGUgJiYgIW1vZHVsZUNoYWluTmFtZU1hdGNoKHRoaXMubW9kdWxlKSkge1xuICBcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHR9XG5cbiAgXHRcdGlmICghZmlsdGVyKSB7XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gcmVnZXhGaWx0ZXIgPyB0aGlzLnJlZ2V4RmlsdGVyKCEhcmVnZXhGaWx0ZXJbMV0sIHJlZ2V4RmlsdGVyWzJdLCByZWdleEZpbHRlclszXSwgZnVsbE5hbWUpIDogdGhpcy5zdHJpbmdGaWx0ZXIoZmlsdGVyLCBmdWxsTmFtZSk7XG4gIFx0fSxcblxuICBcdHJlZ2V4RmlsdGVyOiBmdW5jdGlvbiByZWdleEZpbHRlcihleGNsdWRlLCBwYXR0ZXJuLCBmbGFncywgZnVsbE5hbWUpIHtcbiAgXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZ3MpO1xuICBcdFx0dmFyIG1hdGNoID0gcmVnZXgudGVzdChmdWxsTmFtZSk7XG5cbiAgXHRcdHJldHVybiBtYXRjaCAhPT0gZXhjbHVkZTtcbiAgXHR9LFxuXG4gIFx0c3RyaW5nRmlsdGVyOiBmdW5jdGlvbiBzdHJpbmdGaWx0ZXIoZmlsdGVyLCBmdWxsTmFtZSkge1xuICBcdFx0ZmlsdGVyID0gZmlsdGVyLnRvTG93ZXJDYXNlKCk7XG4gIFx0XHRmdWxsTmFtZSA9IGZ1bGxOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgXHRcdHZhciBpbmNsdWRlID0gZmlsdGVyLmNoYXJBdCgwKSAhPT0gXCIhXCI7XG4gIFx0XHRpZiAoIWluY2x1ZGUpIHtcbiAgXHRcdFx0ZmlsdGVyID0gZmlsdGVyLnNsaWNlKDEpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBJZiB0aGUgZmlsdGVyIG1hdGNoZXMsIHdlIG5lZWQgdG8gaG9ub3VyIGluY2x1ZGVcbiAgXHRcdGlmIChmdWxsTmFtZS5pbmRleE9mKGZpbHRlcikgIT09IC0xKSB7XG4gIFx0XHRcdHJldHVybiBpbmNsdWRlO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBPdGhlcndpc2UsIGRvIHRoZSBvcHBvc2l0ZVxuICBcdFx0cmV0dXJuICFpbmNsdWRlO1xuICBcdH1cbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoRmFpbHVyZSgpIHtcbiAgXHRpZiAoIWNvbmZpZy5jdXJyZW50KSB7XG4gIFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJwdXNoRmFpbHVyZSgpIGFzc2VydGlvbiBvdXRzaWRlIHRlc3QgY29udGV4dCwgaW4gXCIgKyBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gIFx0fVxuXG4gIFx0Ly8gR2V0cyBjdXJyZW50IHRlc3Qgb2JqXG4gIFx0dmFyIGN1cnJlbnRUZXN0ID0gY29uZmlnLmN1cnJlbnQ7XG5cbiAgXHRyZXR1cm4gY3VycmVudFRlc3QucHVzaEZhaWx1cmUuYXBwbHkoY3VycmVudFRlc3QsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlR2xvYmFsKCkge1xuICBcdGNvbmZpZy5wb2xsdXRpb24gPSBbXTtcblxuICBcdGlmIChjb25maWcubm9nbG9iYWxzKSB7XG4gIFx0XHRmb3IgKHZhciBrZXkgaW4gZ2xvYmFsJDEpIHtcbiAgXHRcdFx0aWYgKGhhc093bi5jYWxsKGdsb2JhbCQxLCBrZXkpKSB7XG5cbiAgXHRcdFx0XHQvLyBJbiBPcGVyYSBzb21ldGltZXMgRE9NIGVsZW1lbnQgaWRzIHNob3cgdXAgaGVyZSwgaWdub3JlIHRoZW1cbiAgXHRcdFx0XHRpZiAoL15xdW5pdC10ZXN0LW91dHB1dC8udGVzdChrZXkpKSB7XG4gIFx0XHRcdFx0XHRjb250aW51ZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0Y29uZmlnLnBvbGx1dGlvbi5wdXNoKGtleSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1BvbGx1dGlvbigpIHtcbiAgXHR2YXIgbmV3R2xvYmFscyxcbiAgXHQgICAgZGVsZXRlZEdsb2JhbHMsXG4gIFx0ICAgIG9sZCA9IGNvbmZpZy5wb2xsdXRpb247XG5cbiAgXHRzYXZlR2xvYmFsKCk7XG5cbiAgXHRuZXdHbG9iYWxzID0gZGlmZihjb25maWcucG9sbHV0aW9uLCBvbGQpO1xuICBcdGlmIChuZXdHbG9iYWxzLmxlbmd0aCA+IDApIHtcbiAgXHRcdHB1c2hGYWlsdXJlKFwiSW50cm9kdWNlZCBnbG9iYWwgdmFyaWFibGUocyk6IFwiICsgbmV3R2xvYmFscy5qb2luKFwiLCBcIikpO1xuICBcdH1cblxuICBcdGRlbGV0ZWRHbG9iYWxzID0gZGlmZihvbGQsIGNvbmZpZy5wb2xsdXRpb24pO1xuICBcdGlmIChkZWxldGVkR2xvYmFscy5sZW5ndGggPiAwKSB7XG4gIFx0XHRwdXNoRmFpbHVyZShcIkRlbGV0ZWQgZ2xvYmFsIHZhcmlhYmxlKHMpOiBcIiArIGRlbGV0ZWRHbG9iYWxzLmpvaW4oXCIsIFwiKSk7XG4gIFx0fVxuICB9XG5cbiAgLy8gV2lsbCBiZSBleHBvc2VkIGFzIFFVbml0LnRlc3RcbiAgZnVuY3Rpb24gdGVzdCh0ZXN0TmFtZSwgY2FsbGJhY2spIHtcbiAgXHRpZiAoZm9jdXNlZCQxKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0dmFyIG5ld1Rlc3QgPSBuZXcgVGVzdCh7XG4gIFx0XHR0ZXN0TmFtZTogdGVzdE5hbWUsXG4gIFx0XHRjYWxsYmFjazogY2FsbGJhY2tcbiAgXHR9KTtcblxuICBcdG5ld1Rlc3QucXVldWUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZG8odGVzdE5hbWUsIGNhbGxiYWNrKSB7XG4gIFx0aWYgKGZvY3VzZWQkMSkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHZhciBuZXdUZXN0ID0gbmV3IFRlc3Qoe1xuICBcdFx0dGVzdE5hbWU6IHRlc3ROYW1lLFxuICBcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrLFxuICBcdFx0dG9kbzogdHJ1ZVxuICBcdH0pO1xuXG4gIFx0bmV3VGVzdC5xdWV1ZSgpO1xuICB9XG5cbiAgLy8gV2lsbCBiZSBleHBvc2VkIGFzIFFVbml0LnNraXBcbiAgZnVuY3Rpb24gc2tpcCh0ZXN0TmFtZSkge1xuICBcdGlmIChmb2N1c2VkJDEpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHR2YXIgdGVzdCA9IG5ldyBUZXN0KHtcbiAgXHRcdHRlc3ROYW1lOiB0ZXN0TmFtZSxcbiAgXHRcdHNraXA6IHRydWVcbiAgXHR9KTtcblxuICBcdHRlc3QucXVldWUoKTtcbiAgfVxuXG4gIC8vIFdpbGwgYmUgZXhwb3NlZCBhcyBRVW5pdC5vbmx5XG4gIGZ1bmN0aW9uIG9ubHkodGVzdE5hbWUsIGNhbGxiYWNrKSB7XG4gIFx0aWYgKGZvY3VzZWQkMSkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdGNvbmZpZy5xdWV1ZS5sZW5ndGggPSAwO1xuICBcdGZvY3VzZWQkMSA9IHRydWU7XG5cbiAgXHR2YXIgbmV3VGVzdCA9IG5ldyBUZXN0KHtcbiAgXHRcdHRlc3ROYW1lOiB0ZXN0TmFtZSxcbiAgXHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuICBcdH0pO1xuXG4gIFx0bmV3VGVzdC5xdWV1ZSgpO1xuICB9XG5cbiAgLy8gUmVzZXRzIGNvbmZpZy50aW1lb3V0IHdpdGggYSBuZXcgdGltZW91dCBkdXJhdGlvbi5cbiAgZnVuY3Rpb24gcmVzZXRUZXN0VGltZW91dCh0aW1lb3V0RHVyYXRpb24pIHtcbiAgXHRjbGVhclRpbWVvdXQoY29uZmlnLnRpbWVvdXQpO1xuICBcdGNvbmZpZy50aW1lb3V0ID0gc2V0VGltZW91dCQxKGNvbmZpZy50aW1lb3V0SGFuZGxlcih0aW1lb3V0RHVyYXRpb24pLCB0aW1lb3V0RHVyYXRpb24pO1xuICB9XG5cbiAgLy8gUHV0IGEgaG9sZCBvbiBwcm9jZXNzaW5nIGFuZCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVsZWFzZSBpdC5cbiAgZnVuY3Rpb24gaW50ZXJuYWxTdG9wKHRlc3QpIHtcbiAgXHR2YXIgcmVsZWFzZWQgPSBmYWxzZTtcbiAgXHR0ZXN0LnNlbWFwaG9yZSArPSAxO1xuICBcdGNvbmZpZy5ibG9ja2luZyA9IHRydWU7XG5cbiAgXHQvLyBTZXQgYSByZWNvdmVyeSB0aW1lb3V0LCBpZiBzbyBjb25maWd1cmVkLlxuICBcdGlmIChkZWZpbmVkLnNldFRpbWVvdXQpIHtcbiAgXHRcdHZhciB0aW1lb3V0RHVyYXRpb24gPSB2b2lkIDA7XG5cbiAgXHRcdGlmICh0eXBlb2YgdGVzdC50aW1lb3V0ID09PSBcIm51bWJlclwiKSB7XG4gIFx0XHRcdHRpbWVvdXREdXJhdGlvbiA9IHRlc3QudGltZW91dDtcbiAgXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZy50ZXN0VGltZW91dCA9PT0gXCJudW1iZXJcIikge1xuICBcdFx0XHR0aW1lb3V0RHVyYXRpb24gPSBjb25maWcudGVzdFRpbWVvdXQ7XG4gIFx0XHR9XG5cbiAgXHRcdGlmICh0eXBlb2YgdGltZW91dER1cmF0aW9uID09PSBcIm51bWJlclwiICYmIHRpbWVvdXREdXJhdGlvbiA+IDApIHtcbiAgXHRcdFx0Y2xlYXJUaW1lb3V0KGNvbmZpZy50aW1lb3V0KTtcbiAgXHRcdFx0Y29uZmlnLnRpbWVvdXRIYW5kbGVyID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdFx0cHVzaEZhaWx1cmUoXCJUZXN0IHRvb2sgbG9uZ2VyIHRoYW4gXCIgKyB0aW1lb3V0ICsgXCJtczsgdGVzdCB0aW1lZCBvdXQuXCIsIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgXHRcdFx0XHRcdHJlbGVhc2VkID0gdHJ1ZTtcbiAgXHRcdFx0XHRcdGludGVybmFsUmVjb3Zlcih0ZXN0KTtcbiAgXHRcdFx0XHR9O1xuICBcdFx0XHR9O1xuICBcdFx0XHRjb25maWcudGltZW91dCA9IHNldFRpbWVvdXQkMShjb25maWcudGltZW91dEhhbmRsZXIodGltZW91dER1cmF0aW9uKSwgdGltZW91dER1cmF0aW9uKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRyZXR1cm4gZnVuY3Rpb24gcmVzdW1lKCkge1xuICBcdFx0aWYgKHJlbGVhc2VkKSB7XG4gIFx0XHRcdHJldHVybjtcbiAgXHRcdH1cblxuICBcdFx0cmVsZWFzZWQgPSB0cnVlO1xuICBcdFx0dGVzdC5zZW1hcGhvcmUgLT0gMTtcbiAgXHRcdGludGVybmFsU3RhcnQodGVzdCk7XG4gIFx0fTtcbiAgfVxuXG4gIC8vIEZvcmNlZnVsbHkgcmVsZWFzZSBhbGwgcHJvY2Vzc2luZyBob2xkcy5cbiAgZnVuY3Rpb24gaW50ZXJuYWxSZWNvdmVyKHRlc3QpIHtcbiAgXHR0ZXN0LnNlbWFwaG9yZSA9IDA7XG4gIFx0aW50ZXJuYWxTdGFydCh0ZXN0KTtcbiAgfVxuXG4gIC8vIFJlbGVhc2UgYSBwcm9jZXNzaW5nIGhvbGQsIHNjaGVkdWxpbmcgYSByZXN1bXB0aW9uIGF0dGVtcHQgaWYgbm8gaG9sZHMgcmVtYWluLlxuICBmdW5jdGlvbiBpbnRlcm5hbFN0YXJ0KHRlc3QpIHtcblxuICBcdC8vIElmIHNlbWFwaG9yZSBpcyBub24tbnVtZXJpYywgdGhyb3cgZXJyb3JcbiAgXHRpZiAoaXNOYU4odGVzdC5zZW1hcGhvcmUpKSB7XG4gIFx0XHR0ZXN0LnNlbWFwaG9yZSA9IDA7XG5cbiAgXHRcdHB1c2hGYWlsdXJlKFwiSW52YWxpZCB2YWx1ZSBvbiB0ZXN0LnNlbWFwaG9yZVwiLCBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0Ly8gRG9uJ3Qgc3RhcnQgdW50aWwgZXF1YWwgbnVtYmVyIG9mIHN0b3AtY2FsbHNcbiAgXHRpZiAodGVzdC5zZW1hcGhvcmUgPiAwKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0Ly8gVGhyb3cgYW4gRXJyb3IgaWYgc3RhcnQgaXMgY2FsbGVkIG1vcmUgb2Z0ZW4gdGhhbiBzdG9wXG4gIFx0aWYgKHRlc3Quc2VtYXBob3JlIDwgMCkge1xuICBcdFx0dGVzdC5zZW1hcGhvcmUgPSAwO1xuXG4gIFx0XHRwdXNoRmFpbHVyZShcIlRyaWVkIHRvIHJlc3RhcnQgdGVzdCB3aGlsZSBhbHJlYWR5IHN0YXJ0ZWQgKHRlc3QncyBzZW1hcGhvcmUgd2FzIDAgYWxyZWFkeSlcIiwgc291cmNlRnJvbVN0YWNrdHJhY2UoMikpO1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdC8vIEFkZCBhIHNsaWdodCBkZWxheSB0byBhbGxvdyBtb3JlIGFzc2VydGlvbnMgZXRjLlxuICBcdGlmIChkZWZpbmVkLnNldFRpbWVvdXQpIHtcbiAgXHRcdGlmIChjb25maWcudGltZW91dCkge1xuICBcdFx0XHRjbGVhclRpbWVvdXQoY29uZmlnLnRpbWVvdXQpO1xuICBcdFx0fVxuICBcdFx0Y29uZmlnLnRpbWVvdXQgPSBzZXRUaW1lb3V0JDEoZnVuY3Rpb24gKCkge1xuICBcdFx0XHRpZiAodGVzdC5zZW1hcGhvcmUgPiAwKSB7XG4gIFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0aWYgKGNvbmZpZy50aW1lb3V0KSB7XG4gIFx0XHRcdFx0Y2xlYXJUaW1lb3V0KGNvbmZpZy50aW1lb3V0KTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGJlZ2luKCk7XG4gIFx0XHR9KTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0YmVnaW4oKTtcbiAgXHR9XG4gIH1cblxuICBmdW5jdGlvbiBjb2xsZWN0VGVzdHMobW9kdWxlKSB7XG4gIFx0dmFyIHRlc3RzID0gW10uY29uY2F0KG1vZHVsZS50ZXN0cyk7XG4gIFx0dmFyIG1vZHVsZXMgPSBbXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkobW9kdWxlLmNoaWxkTW9kdWxlcykpO1xuXG4gIFx0Ly8gRG8gYSBicmVhZHRoLWZpcnN0IHRyYXZlcnNhbCBvZiB0aGUgY2hpbGQgbW9kdWxlc1xuICBcdHdoaWxlIChtb2R1bGVzLmxlbmd0aCkge1xuICBcdFx0dmFyIG5leHRNb2R1bGUgPSBtb2R1bGVzLnNoaWZ0KCk7XG4gIFx0XHR0ZXN0cy5wdXNoLmFwcGx5KHRlc3RzLCBuZXh0TW9kdWxlLnRlc3RzKTtcbiAgXHRcdG1vZHVsZXMucHVzaC5hcHBseShtb2R1bGVzLCB0b0NvbnN1bWFibGVBcnJheShuZXh0TW9kdWxlLmNoaWxkTW9kdWxlcykpO1xuICBcdH1cblxuICBcdHJldHVybiB0ZXN0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIG51bWJlck9mVGVzdHMobW9kdWxlKSB7XG4gIFx0cmV0dXJuIGNvbGxlY3RUZXN0cyhtb2R1bGUpLmxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG51bWJlck9mVW5za2lwcGVkVGVzdHMobW9kdWxlKSB7XG4gIFx0cmV0dXJuIGNvbGxlY3RUZXN0cyhtb2R1bGUpLmZpbHRlcihmdW5jdGlvbiAodGVzdCkge1xuICBcdFx0cmV0dXJuICF0ZXN0LnNraXA7XG4gIFx0fSkubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5VGVzdHNSYW4obW9kdWxlLCBza2lwcGVkKSB7XG4gIFx0bW9kdWxlLnRlc3RzUnVuKys7XG4gIFx0aWYgKCFza2lwcGVkKSB7XG4gIFx0XHRtb2R1bGUudW5za2lwcGVkVGVzdHNSdW4rKztcbiAgXHR9XG4gIFx0d2hpbGUgKG1vZHVsZSA9IG1vZHVsZS5wYXJlbnRNb2R1bGUpIHtcbiAgXHRcdG1vZHVsZS50ZXN0c1J1bisrO1xuICBcdFx0aWYgKCFza2lwcGVkKSB7XG4gIFx0XHRcdG1vZHVsZS51bnNraXBwZWRUZXN0c1J1bisrO1xuICBcdFx0fVxuICBcdH1cbiAgfVxuXG4gIHZhciBBc3NlcnQgPSBmdW5jdGlvbiAoKSB7XG4gIFx0ZnVuY3Rpb24gQXNzZXJ0KHRlc3RDb250ZXh0KSB7XG4gIFx0XHRjbGFzc0NhbGxDaGVjayh0aGlzLCBBc3NlcnQpO1xuXG4gIFx0XHR0aGlzLnRlc3QgPSB0ZXN0Q29udGV4dDtcbiAgXHR9XG5cbiAgXHQvLyBBc3NlcnQgaGVscGVyc1xuXG4gIFx0Y3JlYXRlQ2xhc3MoQXNzZXJ0LCBbe1xuICBcdFx0a2V5OiBcInRpbWVvdXRcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiB0aW1lb3V0KGR1cmF0aW9uKSB7XG4gIFx0XHRcdGlmICh0eXBlb2YgZHVyYXRpb24gIT09IFwibnVtYmVyXCIpIHtcbiAgXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgbnVtYmVyIGFzIHRoZSBkdXJhdGlvbiB0byBhc3NlcnQudGltZW91dFwiKTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHRoaXMudGVzdC50aW1lb3V0ID0gZHVyYXRpb247XG5cbiAgXHRcdFx0Ly8gSWYgYSB0aW1lb3V0IGhhcyBiZWVuIHNldCwgY2xlYXIgaXQgYW5kIHJlc2V0IHdpdGggdGhlIG5ldyBkdXJhdGlvblxuICBcdFx0XHRpZiAoY29uZmlnLnRpbWVvdXQpIHtcbiAgXHRcdFx0XHRjbGVhclRpbWVvdXQoY29uZmlnLnRpbWVvdXQpO1xuXG4gIFx0XHRcdFx0aWYgKGNvbmZpZy50aW1lb3V0SGFuZGxlciAmJiB0aGlzLnRlc3QudGltZW91dCA+IDApIHtcbiAgXHRcdFx0XHRcdHJlc2V0VGVzdFRpbWVvdXQodGhpcy50ZXN0LnRpbWVvdXQpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBEb2N1bWVudHMgYSBcInN0ZXBcIiwgd2hpY2ggaXMgYSBzdHJpbmcgdmFsdWUsIGluIGEgdGVzdCBhcyBhIHBhc3NpbmcgYXNzZXJ0aW9uXG5cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwic3RlcFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHN0ZXAobWVzc2FnZSkge1xuICBcdFx0XHR2YXIgYXNzZXJ0aW9uTWVzc2FnZSA9IG1lc3NhZ2U7XG4gIFx0XHRcdHZhciByZXN1bHQgPSAhIW1lc3NhZ2U7XG5cbiAgXHRcdFx0dGhpcy50ZXN0LnN0ZXBzLnB1c2gobWVzc2FnZSk7XG5cbiAgXHRcdFx0aWYgKG9iamVjdFR5cGUobWVzc2FnZSkgPT09IFwidW5kZWZpbmVkXCIgfHwgbWVzc2FnZSA9PT0gXCJcIikge1xuICBcdFx0XHRcdGFzc2VydGlvbk1lc3NhZ2UgPSBcIllvdSBtdXN0IHByb3ZpZGUgYSBtZXNzYWdlIHRvIGFzc2VydC5zdGVwXCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAob2JqZWN0VHlwZShtZXNzYWdlKSAhPT0gXCJzdHJpbmdcIikge1xuICBcdFx0XHRcdGFzc2VydGlvbk1lc3NhZ2UgPSBcIllvdSBtdXN0IHByb3ZpZGUgYSBzdHJpbmcgdmFsdWUgdG8gYXNzZXJ0LnN0ZXBcIjtcbiAgXHRcdFx0XHRyZXN1bHQgPSBmYWxzZTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiByZXN1bHQsXG4gIFx0XHRcdFx0bWVzc2FnZTogYXNzZXJ0aW9uTWVzc2FnZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gVmVyaWZpZXMgdGhlIHN0ZXBzIGluIGEgdGVzdCBtYXRjaCBhIGdpdmVuIGFycmF5IG9mIHN0cmluZyB2YWx1ZXNcblxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJ2ZXJpZnlTdGVwc1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHZlcmlmeVN0ZXBzKHN0ZXBzLCBtZXNzYWdlKSB7XG5cbiAgXHRcdFx0Ly8gU2luY2UgdGhlIHN0ZXBzIGFycmF5IGlzIGp1c3Qgc3RyaW5nIHZhbHVlcywgd2UgY2FuIGNsb25lIHdpdGggc2xpY2VcbiAgXHRcdFx0dmFyIGFjdHVhbFN0ZXBzQ2xvbmUgPSB0aGlzLnRlc3Quc3RlcHMuc2xpY2UoKTtcbiAgXHRcdFx0dGhpcy5kZWVwRXF1YWwoYWN0dWFsU3RlcHNDbG9uZSwgc3RlcHMsIG1lc3NhZ2UpO1xuICBcdFx0XHR0aGlzLnRlc3Quc3RlcHMubGVuZ3RoID0gMDtcbiAgXHRcdH1cblxuICBcdFx0Ly8gU3BlY2lmeSB0aGUgbnVtYmVyIG9mIGV4cGVjdGVkIGFzc2VydGlvbnMgdG8gZ3VhcmFudGVlIHRoYXQgZmFpbGVkIHRlc3RcbiAgXHRcdC8vIChubyBhc3NlcnRpb25zIGFyZSBydW4gYXQgYWxsKSBkb24ndCBzbGlwIHRocm91Z2guXG5cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZXhwZWN0XCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZXhwZWN0KGFzc2VydHMpIHtcbiAgXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgXHRcdFx0XHR0aGlzLnRlc3QuZXhwZWN0ZWQgPSBhc3NlcnRzO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHJldHVybiB0aGlzLnRlc3QuZXhwZWN0ZWQ7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gUHV0IGEgaG9sZCBvbiBwcm9jZXNzaW5nIGFuZCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVsZWFzZSBpdCBhIG1heGltdW0gb2Ygb25jZS5cblxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJhc3luY1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGFzeW5jKGNvdW50KSB7XG4gIFx0XHRcdHZhciB0ZXN0JCQxID0gdGhpcy50ZXN0O1xuXG4gIFx0XHRcdHZhciBwb3BwZWQgPSBmYWxzZSxcbiAgXHRcdFx0ICAgIGFjY2VwdENhbGxDb3VudCA9IGNvdW50O1xuXG4gIFx0XHRcdGlmICh0eXBlb2YgYWNjZXB0Q2FsbENvdW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIFx0XHRcdFx0YWNjZXB0Q2FsbENvdW50ID0gMTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHZhciByZXN1bWUgPSBpbnRlcm5hbFN0b3AodGVzdCQkMSk7XG5cbiAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIGRvbmUoKSB7XG4gIFx0XHRcdFx0aWYgKGNvbmZpZy5jdXJyZW50ICE9PSB0ZXN0JCQxKSB7XG4gIFx0XHRcdFx0XHR0aHJvdyBFcnJvcihcImFzc2VydC5hc3luYyBjYWxsYmFjayBjYWxsZWQgYWZ0ZXIgdGVzdCBmaW5pc2hlZC5cIik7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0aWYgKHBvcHBlZCkge1xuICBcdFx0XHRcdFx0dGVzdCQkMS5wdXNoRmFpbHVyZShcIlRvbyBtYW55IGNhbGxzIHRvIHRoZSBgYXNzZXJ0LmFzeW5jYCBjYWxsYmFja1wiLCBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gIFx0XHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0YWNjZXB0Q2FsbENvdW50IC09IDE7XG4gIFx0XHRcdFx0aWYgKGFjY2VwdENhbGxDb3VudCA+IDApIHtcbiAgXHRcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRwb3BwZWQgPSB0cnVlO1xuICBcdFx0XHRcdHJlc3VtZSgpO1xuICBcdFx0XHR9O1xuICBcdFx0fVxuXG4gIFx0XHQvLyBFeHBvcnRzIHRlc3QucHVzaCgpIHRvIHRoZSB1c2VyIEFQSVxuICBcdFx0Ly8gQWxpYXMgb2YgcHVzaFJlc3VsdC5cblxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJwdXNoXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gcHVzaChyZXN1bHQsIGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG5lZ2F0aXZlKSB7XG4gIFx0XHRcdExvZ2dlci53YXJuKFwiYXNzZXJ0LnB1c2ggaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFFVbml0IDMuMC5cIiArIFwiIFBsZWFzZSB1c2UgYXNzZXJ0LnB1c2hSZXN1bHQgaW5zdGVhZCAoaHR0cHM6Ly9hcGkucXVuaXRqcy5jb20vYXNzZXJ0L3B1c2hSZXN1bHQpLlwiKTtcblxuICBcdFx0XHR2YXIgY3VycmVudEFzc2VydCA9IHRoaXMgaW5zdGFuY2VvZiBBc3NlcnQgPyB0aGlzIDogY29uZmlnLmN1cnJlbnQuYXNzZXJ0O1xuICBcdFx0XHRyZXR1cm4gY3VycmVudEFzc2VydC5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IHJlc3VsdCxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcbiAgXHRcdFx0XHRuZWdhdGl2ZTogbmVnYXRpdmVcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInB1c2hSZXN1bHRcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBwdXNoUmVzdWx0KHJlc3VsdEluZm8pIHtcblxuICBcdFx0XHQvLyBEZXN0cnVjdHVyZSBvZiByZXN1bHRJbmZvID0geyByZXN1bHQsIGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UsIG5lZ2F0aXZlIH1cbiAgXHRcdFx0dmFyIGFzc2VydCA9IHRoaXM7XG4gIFx0XHRcdHZhciBjdXJyZW50VGVzdCA9IGFzc2VydCBpbnN0YW5jZW9mIEFzc2VydCAmJiBhc3NlcnQudGVzdCB8fCBjb25maWcuY3VycmVudDtcblxuICBcdFx0XHQvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmaXguXG4gIFx0XHRcdC8vIEFsbG93cyB0aGUgZGlyZWN0IHVzZSBvZiBnbG9iYWwgZXhwb3J0ZWQgYXNzZXJ0aW9ucyBhbmQgUVVuaXQuYXNzZXJ0LipcbiAgXHRcdFx0Ly8gQWx0aG91Z2gsIGl0J3MgdXNlIGlzIG5vdCByZWNvbW1lbmRlZCBhcyBpdCBjYW4gbGVhayBhc3NlcnRpb25zXG4gIFx0XHRcdC8vIHRvIG90aGVyIHRlc3RzIGZyb20gYXN5bmMgdGVzdHMsIGJlY2F1c2Ugd2Ugb25seSBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgdGVzdCxcbiAgXHRcdFx0Ly8gbm90IGV4YWN0bHkgdGhlIHRlc3Qgd2hlcmUgYXNzZXJ0aW9uIHdlcmUgaW50ZW5kZWQgdG8gYmUgY2FsbGVkLlxuICBcdFx0XHRpZiAoIWN1cnJlbnRUZXN0KSB7XG4gIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXNzZXJ0aW9uIG91dHNpZGUgdGVzdCBjb250ZXh0LCBpbiBcIiArIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGlmICghKGFzc2VydCBpbnN0YW5jZW9mIEFzc2VydCkpIHtcbiAgXHRcdFx0XHRhc3NlcnQgPSBjdXJyZW50VGVzdC5hc3NlcnQ7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRyZXR1cm4gYXNzZXJ0LnRlc3QucHVzaFJlc3VsdChyZXN1bHRJbmZvKTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwib2tcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBvayhyZXN1bHQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0aWYgKCFtZXNzYWdlKSB7XG4gIFx0XHRcdFx0bWVzc2FnZSA9IHJlc3VsdCA/IFwib2theVwiIDogXCJmYWlsZWQsIGV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIHRydXRoeSwgd2FzOiBcIiArIGR1bXAucGFyc2UocmVzdWx0KTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiAhIXJlc3VsdCxcbiAgXHRcdFx0XHRhY3R1YWw6IHJlc3VsdCxcbiAgXHRcdFx0XHRleHBlY3RlZDogdHJ1ZSxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJub3RPa1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIG5vdE9rKHJlc3VsdCwgbWVzc2FnZSkge1xuICBcdFx0XHRpZiAoIW1lc3NhZ2UpIHtcbiAgXHRcdFx0XHRtZXNzYWdlID0gIXJlc3VsdCA/IFwib2theVwiIDogXCJmYWlsZWQsIGV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGZhbHN5LCB3YXM6IFwiICsgZHVtcC5wYXJzZShyZXN1bHQpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6ICFyZXN1bHQsXG4gIFx0XHRcdFx0YWN0dWFsOiByZXN1bHQsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGZhbHNlLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImVxdWFsXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuXG4gIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgXHRcdFx0dmFyIHJlc3VsdCA9IGV4cGVjdGVkID09IGFjdHVhbDtcblxuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogcmVzdWx0LFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJub3RFcXVhbFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIG5vdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcblxuICBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gIFx0XHRcdHZhciByZXN1bHQgPSBleHBlY3RlZCAhPSBhY3R1YWw7XG5cbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IHJlc3VsdCxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcbiAgXHRcdFx0XHRuZWdhdGl2ZTogdHJ1ZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwicHJvcEVxdWFsXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gcHJvcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0YWN0dWFsID0gb2JqZWN0VmFsdWVzKGFjdHVhbCk7XG4gIFx0XHRcdGV4cGVjdGVkID0gb2JqZWN0VmFsdWVzKGV4cGVjdGVkKTtcblxuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogZXF1aXYoYWN0dWFsLCBleHBlY3RlZCksXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcIm5vdFByb3BFcXVhbFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIG5vdFByb3BFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIFx0XHRcdGFjdHVhbCA9IG9iamVjdFZhbHVlcyhhY3R1YWwpO1xuICBcdFx0XHRleHBlY3RlZCA9IG9iamVjdFZhbHVlcyhleHBlY3RlZCk7XG5cbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6ICFlcXVpdihhY3R1YWwsIGV4cGVjdGVkKSxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcbiAgXHRcdFx0XHRuZWdhdGl2ZTogdHJ1ZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZGVlcEVxdWFsXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IGVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQpLFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJub3REZWVwRXF1YWxcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBub3REZWVwRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogIWVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQpLFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuICBcdFx0XHRcdG5lZ2F0aXZlOiB0cnVlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJzdHJpY3RFcXVhbFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IGV4cGVjdGVkID09PSBhY3R1YWwsXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcIm5vdFN0cmljdEVxdWFsXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gbm90U3RyaWN0RXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogZXhwZWN0ZWQgIT09IGFjdHVhbCxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcbiAgXHRcdFx0XHRuZWdhdGl2ZTogdHJ1ZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwidGhyb3dzXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gdGhyb3dzKGJsb2NrLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBcdFx0XHR2YXIgYWN0dWFsID0gdm9pZCAwLFxuICBcdFx0XHQgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgXHRcdFx0dmFyIGN1cnJlbnRUZXN0ID0gdGhpcyBpbnN0YW5jZW9mIEFzc2VydCAmJiB0aGlzLnRlc3QgfHwgY29uZmlnLmN1cnJlbnQ7XG5cbiAgXHRcdFx0Ly8gJ2V4cGVjdGVkJyBpcyBvcHRpb25hbCB1bmxlc3MgZG9pbmcgc3RyaW5nIGNvbXBhcmlzb25cbiAgXHRcdFx0aWYgKG9iamVjdFR5cGUoZXhwZWN0ZWQpID09PSBcInN0cmluZ1wiKSB7XG4gIFx0XHRcdFx0aWYgKG1lc3NhZ2UgPT0gbnVsbCkge1xuICBcdFx0XHRcdFx0bWVzc2FnZSA9IGV4cGVjdGVkO1xuICBcdFx0XHRcdFx0ZXhwZWN0ZWQgPSBudWxsO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJ0aHJvd3MvcmFpc2VzIGRvZXMgbm90IGFjY2VwdCBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGV4cGVjdGVkIGFyZ3VtZW50LlxcblwiICsgXCJVc2UgYSBub24tc3RyaW5nIG9iamVjdCB2YWx1ZSAoZS5nLiByZWdFeHApIGluc3RlYWQgaWYgaXQncyBuZWNlc3NhcnkuXCIpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGN1cnJlbnRUZXN0Lmlnbm9yZUdsb2JhbEVycm9ycyA9IHRydWU7XG4gIFx0XHRcdHRyeSB7XG4gIFx0XHRcdFx0YmxvY2suY2FsbChjdXJyZW50VGVzdC50ZXN0RW52aXJvbm1lbnQpO1xuICBcdFx0XHR9IGNhdGNoIChlKSB7XG4gIFx0XHRcdFx0YWN0dWFsID0gZTtcbiAgXHRcdFx0fVxuICBcdFx0XHRjdXJyZW50VGVzdC5pZ25vcmVHbG9iYWxFcnJvcnMgPSBmYWxzZTtcblxuICBcdFx0XHRpZiAoYWN0dWFsKSB7XG4gIFx0XHRcdFx0dmFyIGV4cGVjdGVkVHlwZSA9IG9iamVjdFR5cGUoZXhwZWN0ZWQpO1xuXG4gIFx0XHRcdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byB2YWxpZGF0ZSB0aHJvd24gZXJyb3JcbiAgXHRcdFx0XHRpZiAoIWV4cGVjdGVkKSB7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXG4gIFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBhIHJlZ2V4cFxuICBcdFx0XHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcInJlZ2V4cFwiKSB7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSBleHBlY3RlZC50ZXN0KGVycm9yU3RyaW5nKGFjdHVhbCkpO1xuXG4gIFx0XHRcdFx0XHQvLyBMb2cgdGhlIHN0cmluZyBmb3JtIG9mIHRoZSByZWdleHBcbiAgXHRcdFx0XHRcdGV4cGVjdGVkID0gU3RyaW5nKGV4cGVjdGVkKTtcblxuICBcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgYSBjb25zdHJ1Y3RvciwgbWF5YmUgYW4gRXJyb3IgY29uc3RydWN0b3JcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJmdW5jdGlvblwiICYmIGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXG4gIFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBhbiBFcnJvciBvYmplY3RcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJvYmplY3RcIikge1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gYWN0dWFsIGluc3RhbmNlb2YgZXhwZWN0ZWQuY29uc3RydWN0b3IgJiYgYWN0dWFsLm5hbWUgPT09IGV4cGVjdGVkLm5hbWUgJiYgYWN0dWFsLm1lc3NhZ2UgPT09IGV4cGVjdGVkLm1lc3NhZ2U7XG5cbiAgXHRcdFx0XHRcdC8vIExvZyB0aGUgc3RyaW5nIGZvcm0gb2YgdGhlIEVycm9yIG9iamVjdFxuICBcdFx0XHRcdFx0ZXhwZWN0ZWQgPSBlcnJvclN0cmluZyhleHBlY3RlZCk7XG5cbiAgXHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIGEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIHRydWUgaWYgdmFsaWRhdGlvbiBwYXNzZWRcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJmdW5jdGlvblwiICYmIGV4cGVjdGVkLmNhbGwoe30sIGFjdHVhbCkgPT09IHRydWUpIHtcbiAgXHRcdFx0XHRcdGV4cGVjdGVkID0gbnVsbDtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0Y3VycmVudFRlc3QuYXNzZXJ0LnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogcmVzdWx0LFxuXG4gIFx0XHRcdFx0Ly8gdW5kZWZpbmVkIGlmIGl0IGRpZG4ndCB0aHJvd1xuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsICYmIGVycm9yU3RyaW5nKGFjdHVhbCksXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInJlamVjdHNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiByZWplY3RzKHByb21pc2UsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIFx0XHRcdHZhciByZXN1bHQgPSBmYWxzZTtcblxuICBcdFx0XHR2YXIgY3VycmVudFRlc3QgPSB0aGlzIGluc3RhbmNlb2YgQXNzZXJ0ICYmIHRoaXMudGVzdCB8fCBjb25maWcuY3VycmVudDtcblxuICBcdFx0XHQvLyAnZXhwZWN0ZWQnIGlzIG9wdGlvbmFsIHVubGVzcyBkb2luZyBzdHJpbmcgY29tcGFyaXNvblxuICBcdFx0XHRpZiAob2JqZWN0VHlwZShleHBlY3RlZCkgPT09IFwic3RyaW5nXCIpIHtcbiAgXHRcdFx0XHRpZiAobWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XG4gIFx0XHRcdFx0XHRtZXNzYWdlID0gZXhwZWN0ZWQ7XG4gIFx0XHRcdFx0XHRleHBlY3RlZCA9IHVuZGVmaW5lZDtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0bWVzc2FnZSA9IFwiYXNzZXJ0LnJlamVjdHMgZG9lcyBub3QgYWNjZXB0IGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgZXhwZWN0ZWQgXCIgKyBcImFyZ3VtZW50LlxcblVzZSBhIG5vbi1zdHJpbmcgb2JqZWN0IHZhbHVlIChlLmcuIHZhbGlkYXRvciBmdW5jdGlvbikgaW5zdGVhZCBcIiArIFwiaWYgbmVjZXNzYXJ5LlwiO1xuXG4gIFx0XHRcdFx0XHRjdXJyZW50VGVzdC5hc3NlcnQucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0XHRcdHJlc3VsdDogZmFsc2UsXG4gIFx0XHRcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2VcbiAgXHRcdFx0XHRcdH0pO1xuXG4gIFx0XHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0dmFyIHRoZW4gPSBwcm9taXNlICYmIHByb21pc2UudGhlbjtcbiAgXHRcdFx0aWYgKG9iamVjdFR5cGUodGhlbikgIT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0XHRcdHZhciBfbWVzc2FnZSA9IFwiVGhlIHZhbHVlIHByb3ZpZGVkIHRvIGBhc3NlcnQucmVqZWN0c2AgaW4gXCIgKyBcIlxcXCJcIiArIGN1cnJlbnRUZXN0LnRlc3ROYW1lICsgXCJcXFwiIHdhcyBub3QgYSBwcm9taXNlLlwiO1xuXG4gIFx0XHRcdFx0Y3VycmVudFRlc3QuYXNzZXJ0LnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdFx0cmVzdWx0OiBmYWxzZSxcbiAgXHRcdFx0XHRcdG1lc3NhZ2U6IF9tZXNzYWdlLFxuICBcdFx0XHRcdFx0YWN0dWFsOiBwcm9taXNlXG4gIFx0XHRcdFx0fSk7XG5cbiAgXHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdH1cblxuICBcdFx0XHR2YXIgZG9uZSA9IHRoaXMuYXN5bmMoKTtcblxuICBcdFx0XHRyZXR1cm4gdGhlbi5jYWxsKHByb21pc2UsIGZ1bmN0aW9uIGhhbmRsZUZ1bGZpbGxtZW50KCkge1xuICBcdFx0XHRcdHZhciBtZXNzYWdlID0gXCJUaGUgcHJvbWlzZSByZXR1cm5lZCBieSB0aGUgYGFzc2VydC5yZWplY3RzYCBjYWxsYmFjayBpbiBcIiArIFwiXFxcIlwiICsgY3VycmVudFRlc3QudGVzdE5hbWUgKyBcIlxcXCIgZGlkIG5vdCByZWplY3QuXCI7XG5cbiAgXHRcdFx0XHRjdXJyZW50VGVzdC5hc3NlcnQucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0XHRyZXN1bHQ6IGZhbHNlLFxuICBcdFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcbiAgXHRcdFx0XHRcdGFjdHVhbDogcHJvbWlzZVxuICBcdFx0XHRcdH0pO1xuXG4gIFx0XHRcdFx0ZG9uZSgpO1xuICBcdFx0XHR9LCBmdW5jdGlvbiBoYW5kbGVSZWplY3Rpb24oYWN0dWFsKSB7XG4gIFx0XHRcdFx0dmFyIGV4cGVjdGVkVHlwZSA9IG9iamVjdFR5cGUoZXhwZWN0ZWQpO1xuXG4gIFx0XHRcdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byB2YWxpZGF0ZVxuICBcdFx0XHRcdGlmIChleHBlY3RlZCA9PT0gdW5kZWZpbmVkKSB7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXG4gIFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBhIHJlZ2V4cFxuICBcdFx0XHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSBcInJlZ2V4cFwiKSB7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSBleHBlY3RlZC50ZXN0KGVycm9yU3RyaW5nKGFjdHVhbCkpO1xuXG4gIFx0XHRcdFx0XHQvLyBMb2cgdGhlIHN0cmluZyBmb3JtIG9mIHRoZSByZWdleHBcbiAgXHRcdFx0XHRcdGV4cGVjdGVkID0gU3RyaW5nKGV4cGVjdGVkKTtcblxuICBcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgYSBjb25zdHJ1Y3RvciwgbWF5YmUgYW4gRXJyb3IgY29uc3RydWN0b3JcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJmdW5jdGlvblwiICYmIGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkKSB7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXG4gIFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBhbiBFcnJvciBvYmplY3RcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJvYmplY3RcIikge1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gYWN0dWFsIGluc3RhbmNlb2YgZXhwZWN0ZWQuY29uc3RydWN0b3IgJiYgYWN0dWFsLm5hbWUgPT09IGV4cGVjdGVkLm5hbWUgJiYgYWN0dWFsLm1lc3NhZ2UgPT09IGV4cGVjdGVkLm1lc3NhZ2U7XG5cbiAgXHRcdFx0XHRcdC8vIExvZyB0aGUgc3RyaW5nIGZvcm0gb2YgdGhlIEVycm9yIG9iamVjdFxuICBcdFx0XHRcdFx0ZXhwZWN0ZWQgPSBlcnJvclN0cmluZyhleHBlY3RlZCk7XG5cbiAgXHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIGEgdmFsaWRhdGlvbiBmdW5jdGlvbiB3aGljaCByZXR1cm5zIHRydWUgaWYgdmFsaWRhdGlvbiBwYXNzZWRcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0aWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHRcdFx0XHRcdHJlc3VsdCA9IGV4cGVjdGVkLmNhbGwoe30sIGFjdHVhbCkgPT09IHRydWU7XG4gIFx0XHRcdFx0XHRcdGV4cGVjdGVkID0gbnVsbDtcblxuICBcdFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBzb21lIG90aGVyIGludmFsaWQgdHlwZVxuICBcdFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XG4gIFx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBcImludmFsaWQgZXhwZWN0ZWQgdmFsdWUgcHJvdmlkZWQgdG8gYGFzc2VydC5yZWplY3RzYCBcIiArIFwiY2FsbGJhY2sgaW4gXFxcIlwiICsgY3VycmVudFRlc3QudGVzdE5hbWUgKyBcIlxcXCI6IFwiICsgZXhwZWN0ZWRUeXBlICsgXCIuXCI7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0Y3VycmVudFRlc3QuYXNzZXJ0LnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdFx0cmVzdWx0OiByZXN1bHQsXG5cbiAgXHRcdFx0XHRcdC8vIGxlYXZlIHJlamVjdGlvbiB2YWx1ZSBvZiB1bmRlZmluZWQgYXMtaXNcbiAgXHRcdFx0XHRcdGFjdHVhbDogYWN0dWFsICYmIGVycm9yU3RyaW5nKGFjdHVhbCksXG4gIFx0XHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdFx0fSk7XG5cbiAgXHRcdFx0XHRkb25lKCk7XG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH1dKTtcbiAgXHRyZXR1cm4gQXNzZXJ0O1xuICB9KCk7XG5cbiAgLy8gUHJvdmlkZSBhbiBhbHRlcm5hdGl2ZSB0byBhc3NlcnQudGhyb3dzKCksIGZvciBlbnZpcm9ubWVudHMgdGhhdCBjb25zaWRlciB0aHJvd3MgYSByZXNlcnZlZCB3b3JkXG4gIC8vIEtub3duIHRvIHVzIGFyZTogQ2xvc3VyZSBDb21waWxlciwgTmFyd2hhbFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZG90LW5vdGF0aW9uXG5cblxuICBBc3NlcnQucHJvdG90eXBlLnJhaXNlcyA9IEFzc2VydC5wcm90b3R5cGVbXCJ0aHJvd3NcIl07XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIGVycm9yIGludG8gYSBzaW1wbGUgc3RyaW5nIGZvciBjb21wYXJpc29ucy5cbiAgICpcbiAgICogQHBhcmFtIHtFcnJvcnxPYmplY3R9IGVycm9yXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGVycm9yU3RyaW5nKGVycm9yKSB7XG4gIFx0dmFyIHJlc3VsdEVycm9yU3RyaW5nID0gZXJyb3IudG9TdHJpbmcoKTtcblxuICBcdC8vIElmIHRoZSBlcnJvciB3YXNuJ3QgYSBzdWJjbGFzcyBvZiBFcnJvciBidXQgc29tZXRoaW5nIGxpa2VcbiAgXHQvLyBhbiBvYmplY3QgbGl0ZXJhbCB3aXRoIG5hbWUgYW5kIG1lc3NhZ2UgcHJvcGVydGllcy4uLlxuICBcdGlmIChyZXN1bHRFcnJvclN0cmluZy5zdWJzdHJpbmcoMCwgNykgPT09IFwiW29iamVjdFwiKSB7XG4gIFx0XHR2YXIgbmFtZSA9IGVycm9yLm5hbWUgPyBlcnJvci5uYW1lLnRvU3RyaW5nKCkgOiBcIkVycm9yXCI7XG4gIFx0XHR2YXIgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlLnRvU3RyaW5nKCkgOiBcIlwiO1xuXG4gIFx0XHRpZiAobmFtZSAmJiBtZXNzYWdlKSB7XG4gIFx0XHRcdHJldHVybiBuYW1lICsgXCI6IFwiICsgbWVzc2FnZTtcbiAgXHRcdH0gZWxzZSBpZiAobmFtZSkge1xuICBcdFx0XHRyZXR1cm4gbmFtZTtcbiAgXHRcdH0gZWxzZSBpZiAobWVzc2FnZSkge1xuICBcdFx0XHRyZXR1cm4gbWVzc2FnZTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHJldHVybiBcIkVycm9yXCI7XG4gIFx0XHR9XG4gIFx0fSBlbHNlIHtcbiAgXHRcdHJldHVybiByZXN1bHRFcnJvclN0cmluZztcbiAgXHR9XG4gIH1cblxuICAvKiBnbG9iYWwgbW9kdWxlLCBleHBvcnRzLCBkZWZpbmUgKi9cbiAgZnVuY3Rpb24gZXhwb3J0UVVuaXQoUVVuaXQpIHtcblxuICBcdGlmIChkZWZpbmVkLmRvY3VtZW50KSB7XG5cbiAgXHRcdC8vIFFVbml0IG1heSBiZSBkZWZpbmVkIHdoZW4gaXQgaXMgcHJlY29uZmlndXJlZCBidXQgdGhlbiBvbmx5IFFVbml0IGFuZCBRVW5pdC5jb25maWcgbWF5IGJlIGRlZmluZWQuXG4gIFx0XHRpZiAod2luZG93JDEuUVVuaXQgJiYgd2luZG93JDEuUVVuaXQudmVyc2lvbikge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJRVW5pdCBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO1xuICBcdFx0fVxuXG4gIFx0XHR3aW5kb3ckMS5RVW5pdCA9IFFVbml0O1xuICBcdH1cblxuICBcdC8vIEZvciBub2RlanNcbiAgXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgXHRcdG1vZHVsZS5leHBvcnRzID0gUVVuaXQ7XG5cbiAgXHRcdC8vIEZvciBjb25zaXN0ZW5jeSB3aXRoIENvbW1vbkpTIGVudmlyb25tZW50cycgZXhwb3J0c1xuICBcdFx0bW9kdWxlLmV4cG9ydHMuUVVuaXQgPSBRVW5pdDtcbiAgXHR9XG5cbiAgXHQvLyBGb3IgQ29tbW9uSlMgd2l0aCBleHBvcnRzLCBidXQgd2l0aG91dCBtb2R1bGUuZXhwb3J0cywgbGlrZSBSaGlub1xuICBcdGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzKSB7XG4gIFx0XHRleHBvcnRzLlFVbml0ID0gUVVuaXQ7XG4gIFx0fVxuXG4gIFx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gIFx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuICBcdFx0XHRyZXR1cm4gUVVuaXQ7XG4gIFx0XHR9KTtcbiAgXHRcdFFVbml0LmNvbmZpZy5hdXRvc3RhcnQgPSBmYWxzZTtcbiAgXHR9XG5cbiAgXHQvLyBGb3IgV2ViL1NlcnZpY2UgV29ya2Vyc1xuICBcdGlmIChzZWxmJDEgJiYgc2VsZiQxLldvcmtlckdsb2JhbFNjb3BlICYmIHNlbGYkMSBpbnN0YW5jZW9mIHNlbGYkMS5Xb3JrZXJHbG9iYWxTY29wZSkge1xuICBcdFx0c2VsZiQxLlFVbml0ID0gUVVuaXQ7XG4gIFx0fVxuICB9XG5cbiAgLy8gSGFuZGxlIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uIEJ5IGNvbnZlbnRpb24sIHJldHVybnMgdHJ1ZSBpZiBmdXJ0aGVyXG4gIC8vIGVycm9yIGhhbmRsaW5nIHNob3VsZCBiZSBzdXBwcmVzc2VkIGFuZCBmYWxzZSBvdGhlcndpc2UuXG4gIC8vIEluIHRoaXMgY2FzZSwgd2Ugd2lsbCBvbmx5IHN1cHByZXNzIGZ1cnRoZXIgZXJyb3IgaGFuZGxpbmcgaWYgdGhlXG4gIC8vIFwiaWdub3JlR2xvYmFsRXJyb3JzXCIgY29uZmlndXJhdGlvbiBvcHRpb24gaXMgZW5hYmxlZC5cbiAgZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICBcdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICBcdFx0YXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIFx0fVxuXG4gIFx0aWYgKGNvbmZpZy5jdXJyZW50KSB7XG4gIFx0XHRpZiAoY29uZmlnLmN1cnJlbnQuaWdub3JlR2xvYmFsRXJyb3JzKSB7XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fVxuICBcdFx0cHVzaEZhaWx1cmUuYXBwbHkodW5kZWZpbmVkLCBbZXJyb3IubWVzc2FnZSwgZXJyb3Iuc3RhY2t0cmFjZSB8fCBlcnJvci5maWxlTmFtZSArIFwiOlwiICsgZXJyb3IubGluZU51bWJlcl0uY29uY2F0KGFyZ3MpKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0dGVzdChcImdsb2JhbCBmYWlsdXJlXCIsIGV4dGVuZChmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdHB1c2hGYWlsdXJlLmFwcGx5KHVuZGVmaW5lZCwgW2Vycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrdHJhY2UgfHwgZXJyb3IuZmlsZU5hbWUgKyBcIjpcIiArIGVycm9yLmxpbmVOdW1iZXJdLmNvbmNhdChhcmdzKSk7XG4gIFx0XHR9LCB7IHZhbGlkVGVzdDogdHJ1ZSB9KSk7XG4gIFx0fVxuXG4gIFx0cmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gSGFuZGxlIGFuIHVuaGFuZGxlZCByZWplY3Rpb25cbiAgZnVuY3Rpb24gb25VbmhhbmRsZWRSZWplY3Rpb24ocmVhc29uKSB7XG4gIFx0dmFyIHJlc3VsdEluZm8gPSB7XG4gIFx0XHRyZXN1bHQ6IGZhbHNlLFxuICBcdFx0bWVzc2FnZTogcmVhc29uLm1lc3NhZ2UgfHwgXCJlcnJvclwiLFxuICBcdFx0YWN0dWFsOiByZWFzb24sXG4gIFx0XHRzb3VyY2U6IHJlYXNvbi5zdGFjayB8fCBzb3VyY2VGcm9tU3RhY2t0cmFjZSgzKVxuICBcdH07XG5cbiAgXHR2YXIgY3VycmVudFRlc3QgPSBjb25maWcuY3VycmVudDtcbiAgXHRpZiAoY3VycmVudFRlc3QpIHtcbiAgXHRcdGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHJlc3VsdEluZm8pO1xuICBcdH0gZWxzZSB7XG4gIFx0XHR0ZXN0KFwiZ2xvYmFsIGZhaWx1cmVcIiwgZXh0ZW5kKGZ1bmN0aW9uIChhc3NlcnQpIHtcbiAgXHRcdFx0YXNzZXJ0LnB1c2hSZXN1bHQocmVzdWx0SW5mbyk7XG4gIFx0XHR9LCB7IHZhbGlkVGVzdDogdHJ1ZSB9KSk7XG4gIFx0fVxuICB9XG5cbiAgdmFyIFFVbml0ID0ge307XG4gIHZhciBnbG9iYWxTdWl0ZSA9IG5ldyBTdWl0ZVJlcG9ydCgpO1xuXG4gIC8vIFRoZSBpbml0aWFsIFwiY3VycmVudE1vZHVsZVwiIHJlcHJlc2VudHMgdGhlIGdsb2JhbCAob3IgdG9wLWxldmVsKSBtb2R1bGUgdGhhdFxuICAvLyBpcyBub3QgZXhwbGljaXRseSBkZWZpbmVkIGJ5IHRoZSB1c2VyLCB0aGVyZWZvcmUgd2UgYWRkIHRoZSBcImdsb2JhbFN1aXRlXCIgdG9cbiAgLy8gaXQgc2luY2UgZWFjaCBtb2R1bGUgaGFzIGEgc3VpdGVSZXBvcnQgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICBjb25maWcuY3VycmVudE1vZHVsZS5zdWl0ZVJlcG9ydCA9IGdsb2JhbFN1aXRlO1xuXG4gIHZhciBnbG9iYWxTdGFydENhbGxlZCA9IGZhbHNlO1xuICB2YXIgcnVuU3RhcnRlZCA9IGZhbHNlO1xuXG4gIC8vIEZpZ3VyZSBvdXQgaWYgd2UncmUgcnVubmluZyB0aGUgdGVzdHMgZnJvbSBhIHNlcnZlciBvciBub3RcbiAgUVVuaXQuaXNMb2NhbCA9ICEoZGVmaW5lZC5kb2N1bWVudCAmJiB3aW5kb3ckMS5sb2NhdGlvbi5wcm90b2NvbCAhPT0gXCJmaWxlOlwiKTtcblxuICAvLyBFeHBvc2UgdGhlIGN1cnJlbnQgUVVuaXQgdmVyc2lvblxuICBRVW5pdC52ZXJzaW9uID0gXCIyLjkuM1wiO1xuXG4gIGV4dGVuZChRVW5pdCwge1xuICBcdG9uOiBvbixcblxuICBcdG1vZHVsZTogbW9kdWxlJDEsXG5cbiAgXHR0ZXN0OiB0ZXN0LFxuXG4gIFx0dG9kbzogdG9kbyxcblxuICBcdHNraXA6IHNraXAsXG5cbiAgXHRvbmx5OiBvbmx5LFxuXG4gIFx0c3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KGNvdW50KSB7XG4gIFx0XHR2YXIgZ2xvYmFsU3RhcnRBbHJlYWR5Q2FsbGVkID0gZ2xvYmFsU3RhcnRDYWxsZWQ7XG5cbiAgXHRcdGlmICghY29uZmlnLmN1cnJlbnQpIHtcbiAgXHRcdFx0Z2xvYmFsU3RhcnRDYWxsZWQgPSB0cnVlO1xuXG4gIFx0XHRcdGlmIChydW5TdGFydGVkKSB7XG4gIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FsbGVkIHN0YXJ0KCkgd2hpbGUgdGVzdCBhbHJlYWR5IHN0YXJ0ZWQgcnVubmluZ1wiKTtcbiAgXHRcdFx0fSBlbHNlIGlmIChnbG9iYWxTdGFydEFscmVhZHlDYWxsZWQgfHwgY291bnQgPiAxKSB7XG4gIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FsbGVkIHN0YXJ0KCkgb3V0c2lkZSBvZiBhIHRlc3QgY29udGV4dCB0b28gbWFueSB0aW1lc1wiKTtcbiAgXHRcdFx0fSBlbHNlIGlmIChjb25maWcuYXV0b3N0YXJ0KSB7XG4gIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2FsbGVkIHN0YXJ0KCkgb3V0c2lkZSBvZiBhIHRlc3QgY29udGV4dCB3aGVuIFwiICsgXCJRVW5pdC5jb25maWcuYXV0b3N0YXJ0IHdhcyB0cnVlXCIpO1xuICBcdFx0XHR9IGVsc2UgaWYgKCFjb25maWcucGFnZUxvYWRlZCkge1xuXG4gIFx0XHRcdFx0Ly8gVGhlIHBhZ2UgaXNuJ3QgY29tcGxldGVseSBsb2FkZWQgeWV0LCBzbyB3ZSBzZXQgYXV0b3N0YXJ0IGFuZCB0aGVuXG4gIFx0XHRcdFx0Ly8gbG9hZCBpZiB3ZSdyZSBpbiBOb2RlIG9yIHdhaXQgZm9yIHRoZSBicm93c2VyJ3MgbG9hZCBldmVudC5cbiAgXHRcdFx0XHRjb25maWcuYXV0b3N0YXJ0ID0gdHJ1ZTtcblxuICBcdFx0XHRcdC8vIFN0YXJ0cyBmcm9tIE5vZGUgZXZlbiBpZiAubG9hZCB3YXMgbm90IHByZXZpb3VzbHkgY2FsbGVkLiBXZSBzdGlsbCByZXR1cm5cbiAgXHRcdFx0XHQvLyBlYXJseSBvdGhlcndpc2Ugd2UnbGwgd2luZCB1cCBcImJlZ2lubmluZ1wiIHR3aWNlLlxuICBcdFx0XHRcdGlmICghZGVmaW5lZC5kb2N1bWVudCkge1xuICBcdFx0XHRcdFx0UVVuaXQubG9hZCgpO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0fVxuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUVVuaXQuc3RhcnQgY2Fubm90IGJlIGNhbGxlZCBpbnNpZGUgYSB0ZXN0IGNvbnRleHQuXCIpO1xuICBcdFx0fVxuXG4gIFx0XHRzY2hlZHVsZUJlZ2luKCk7XG4gIFx0fSxcblxuICBcdGNvbmZpZzogY29uZmlnLFxuXG4gIFx0aXM6IGlzLFxuXG4gIFx0b2JqZWN0VHlwZTogb2JqZWN0VHlwZSxcblxuICBcdGV4dGVuZDogZXh0ZW5kLFxuXG4gIFx0bG9hZDogZnVuY3Rpb24gbG9hZCgpIHtcbiAgXHRcdGNvbmZpZy5wYWdlTG9hZGVkID0gdHJ1ZTtcblxuICBcdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gIFx0XHRleHRlbmQoY29uZmlnLCB7XG4gIFx0XHRcdHN0YXRzOiB7IGFsbDogMCwgYmFkOiAwIH0sXG4gIFx0XHRcdHN0YXJ0ZWQ6IDAsXG4gIFx0XHRcdHVwZGF0ZVJhdGU6IDEwMDAsXG4gIFx0XHRcdGF1dG9zdGFydDogdHJ1ZSxcbiAgXHRcdFx0ZmlsdGVyOiBcIlwiXG4gIFx0XHR9LCB0cnVlKTtcblxuICBcdFx0aWYgKCFydW5TdGFydGVkKSB7XG4gIFx0XHRcdGNvbmZpZy5ibG9ja2luZyA9IGZhbHNlO1xuXG4gIFx0XHRcdGlmIChjb25maWcuYXV0b3N0YXJ0KSB7XG4gIFx0XHRcdFx0c2NoZWR1bGVCZWdpbigpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fSxcblxuICBcdHN0YWNrOiBmdW5jdGlvbiBzdGFjayhvZmZzZXQpIHtcbiAgXHRcdG9mZnNldCA9IChvZmZzZXQgfHwgMCkgKyAyO1xuICBcdFx0cmV0dXJuIHNvdXJjZUZyb21TdGFja3RyYWNlKG9mZnNldCk7XG4gIFx0fSxcblxuICBcdG9uRXJyb3I6IG9uRXJyb3IsXG5cbiAgXHRvblVuaGFuZGxlZFJlamVjdGlvbjogb25VbmhhbmRsZWRSZWplY3Rpb25cbiAgfSk7XG5cbiAgUVVuaXQucHVzaEZhaWx1cmUgPSBwdXNoRmFpbHVyZTtcbiAgUVVuaXQuYXNzZXJ0ID0gQXNzZXJ0LnByb3RvdHlwZTtcbiAgUVVuaXQuZXF1aXYgPSBlcXVpdjtcbiAgUVVuaXQuZHVtcCA9IGR1bXA7XG5cbiAgcmVnaXN0ZXJMb2dnaW5nQ2FsbGJhY2tzKFFVbml0KTtcblxuICBmdW5jdGlvbiBzY2hlZHVsZUJlZ2luKCkge1xuXG4gIFx0cnVuU3RhcnRlZCA9IHRydWU7XG5cbiAgXHQvLyBBZGQgYSBzbGlnaHQgZGVsYXkgdG8gYWxsb3cgZGVmaW5pdGlvbiBvZiBtb3JlIG1vZHVsZXMgYW5kIHRlc3RzLlxuICBcdGlmIChkZWZpbmVkLnNldFRpbWVvdXQpIHtcbiAgXHRcdHNldFRpbWVvdXQkMShmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdGJlZ2luKCk7XG4gIFx0XHR9KTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0YmVnaW4oKTtcbiAgXHR9XG4gIH1cblxuICBmdW5jdGlvbiB1bmJsb2NrQW5kQWR2YW5jZVF1ZXVlKCkge1xuICBcdGNvbmZpZy5ibG9ja2luZyA9IGZhbHNlO1xuICBcdFByb2Nlc3NpbmdRdWV1ZS5hZHZhbmNlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBiZWdpbigpIHtcbiAgXHR2YXIgaSxcbiAgXHQgICAgbCxcbiAgXHQgICAgbW9kdWxlc0xvZyA9IFtdO1xuXG4gIFx0Ly8gSWYgdGhlIHRlc3QgcnVuIGhhc24ndCBvZmZpY2lhbGx5IGJlZ3VuIHlldFxuICBcdGlmICghY29uZmlnLnN0YXJ0ZWQpIHtcblxuICBcdFx0Ly8gUmVjb3JkIHRoZSB0aW1lIG9mIHRoZSB0ZXN0IHJ1bidzIGJlZ2lubmluZ1xuICBcdFx0Y29uZmlnLnN0YXJ0ZWQgPSBub3coKTtcblxuICBcdFx0Ly8gRGVsZXRlIHRoZSBsb29zZSB1bm5hbWVkIG1vZHVsZSBpZiB1bnVzZWQuXG4gIFx0XHRpZiAoY29uZmlnLm1vZHVsZXNbMF0ubmFtZSA9PT0gXCJcIiAmJiBjb25maWcubW9kdWxlc1swXS50ZXN0cy5sZW5ndGggPT09IDApIHtcbiAgXHRcdFx0Y29uZmlnLm1vZHVsZXMuc2hpZnQoKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gQXZvaWQgdW5uZWNlc3NhcnkgaW5mb3JtYXRpb24gYnkgbm90IGxvZ2dpbmcgbW9kdWxlcycgdGVzdCBlbnZpcm9ubWVudHNcbiAgXHRcdGZvciAoaSA9IDAsIGwgPSBjb25maWcubW9kdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgXHRcdFx0bW9kdWxlc0xvZy5wdXNoKHtcbiAgXHRcdFx0XHRuYW1lOiBjb25maWcubW9kdWxlc1tpXS5uYW1lLFxuICBcdFx0XHRcdHRlc3RzOiBjb25maWcubW9kdWxlc1tpXS50ZXN0c1xuICBcdFx0XHR9KTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gVGhlIHRlc3QgcnVuIGlzIG9mZmljaWFsbHkgYmVnaW5uaW5nIG5vd1xuICBcdFx0ZW1pdChcInJ1blN0YXJ0XCIsIGdsb2JhbFN1aXRlLnN0YXJ0KHRydWUpKTtcbiAgXHRcdHJ1bkxvZ2dpbmdDYWxsYmFja3MoXCJiZWdpblwiLCB7XG4gIFx0XHRcdHRvdGFsVGVzdHM6IFRlc3QuY291bnQsXG4gIFx0XHRcdG1vZHVsZXM6IG1vZHVsZXNMb2dcbiAgXHRcdH0pLnRoZW4odW5ibG9ja0FuZEFkdmFuY2VRdWV1ZSk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdHVuYmxvY2tBbmRBZHZhbmNlUXVldWUoKTtcbiAgXHR9XG4gIH1cblxuICBleHBvcnRRVW5pdChRVW5pdCk7XG5cbiAgKGZ1bmN0aW9uICgpIHtcblxuICBcdGlmICh0eXBlb2Ygd2luZG93JDEgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIGRvY3VtZW50JDEgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHR2YXIgY29uZmlnID0gUVVuaXQuY29uZmlnLFxuICBcdCAgICBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIFx0Ly8gU3RvcmVzIGZpeHR1cmUgSFRNTCBmb3IgcmVzZXR0aW5nIGxhdGVyXG4gIFx0ZnVuY3Rpb24gc3RvcmVGaXh0dXJlKCkge1xuXG4gIFx0XHQvLyBBdm9pZCBvdmVyd3JpdGluZyB1c2VyLWRlZmluZWQgdmFsdWVzXG4gIFx0XHRpZiAoaGFzT3duLmNhbGwoY29uZmlnLCBcImZpeHR1cmVcIikpIHtcbiAgXHRcdFx0cmV0dXJuO1xuICBcdFx0fVxuXG4gIFx0XHR2YXIgZml4dHVyZSA9IGRvY3VtZW50JDEuZ2V0RWxlbWVudEJ5SWQoXCJxdW5pdC1maXh0dXJlXCIpO1xuICBcdFx0aWYgKGZpeHR1cmUpIHtcbiAgXHRcdFx0Y29uZmlnLmZpeHR1cmUgPSBmaXh0dXJlLmNsb25lTm9kZSh0cnVlKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRRVW5pdC5iZWdpbihzdG9yZUZpeHR1cmUpO1xuXG4gIFx0Ly8gUmVzZXRzIHRoZSBmaXh0dXJlIERPTSBlbGVtZW50IGlmIGF2YWlsYWJsZS5cbiAgXHRmdW5jdGlvbiByZXNldEZpeHR1cmUoKSB7XG4gIFx0XHRpZiAoY29uZmlnLmZpeHR1cmUgPT0gbnVsbCkge1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdHZhciBmaXh0dXJlID0gZG9jdW1lbnQkMS5nZXRFbGVtZW50QnlJZChcInF1bml0LWZpeHR1cmVcIik7XG4gIFx0XHR2YXIgcmVzZXRGaXh0dXJlVHlwZSA9IF90eXBlb2YoY29uZmlnLmZpeHR1cmUpO1xuICBcdFx0aWYgKHJlc2V0Rml4dHVyZVR5cGUgPT09IFwic3RyaW5nXCIpIHtcblxuICBcdFx0XHQvLyBzdXBwb3J0IHVzZXIgZGVmaW5lZCB2YWx1ZXMgZm9yIGBjb25maWcuZml4dHVyZWBcbiAgXHRcdFx0dmFyIG5ld0ZpeHR1cmUgPSBkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFx0XHRcdG5ld0ZpeHR1cmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJxdW5pdC1maXh0dXJlXCIpO1xuICBcdFx0XHRuZXdGaXh0dXJlLmlubmVySFRNTCA9IGNvbmZpZy5maXh0dXJlO1xuICBcdFx0XHRmaXh0dXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0ZpeHR1cmUsIGZpeHR1cmUpO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0dmFyIGNsb25lZEZpeHR1cmUgPSBjb25maWcuZml4dHVyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gIFx0XHRcdGZpeHR1cmUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVkRml4dHVyZSwgZml4dHVyZSk7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0UVVuaXQudGVzdFN0YXJ0KHJlc2V0Rml4dHVyZSk7XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uICgpIHtcblxuICBcdC8vIE9ubHkgaW50ZXJhY3Qgd2l0aCBVUkxzIHZpYSB3aW5kb3cubG9jYXRpb25cbiAgXHR2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93JDEgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93JDEubG9jYXRpb247XG4gIFx0aWYgKCFsb2NhdGlvbikge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHZhciB1cmxQYXJhbXMgPSBnZXRVcmxQYXJhbXMoKTtcblxuICBcdFFVbml0LnVybFBhcmFtcyA9IHVybFBhcmFtcztcblxuICBcdC8vIE1hdGNoIG1vZHVsZS90ZXN0IGJ5IGluY2x1c2lvbiBpbiBhbiBhcnJheVxuICBcdFFVbml0LmNvbmZpZy5tb2R1bGVJZCA9IFtdLmNvbmNhdCh1cmxQYXJhbXMubW9kdWxlSWQgfHwgW10pO1xuICBcdFFVbml0LmNvbmZpZy50ZXN0SWQgPSBbXS5jb25jYXQodXJsUGFyYW1zLnRlc3RJZCB8fCBbXSk7XG5cbiAgXHQvLyBFeGFjdCBjYXNlLWluc2Vuc2l0aXZlIG1hdGNoIG9mIHRoZSBtb2R1bGUgbmFtZVxuICBcdFFVbml0LmNvbmZpZy5tb2R1bGUgPSB1cmxQYXJhbXMubW9kdWxlO1xuXG4gIFx0Ly8gUmVndWxhciBleHByZXNzaW9uIG9yIGNhc2UtaW5zZW5zdGl2ZSBzdWJzdHJpbmcgbWF0Y2ggYWdhaW5zdCBcIm1vZHVsZU5hbWU6IHRlc3ROYW1lXCJcbiAgXHRRVW5pdC5jb25maWcuZmlsdGVyID0gdXJsUGFyYW1zLmZpbHRlcjtcblxuICBcdC8vIFRlc3Qgb3JkZXIgcmFuZG9taXphdGlvblxuICBcdGlmICh1cmxQYXJhbXMuc2VlZCA9PT0gdHJ1ZSkge1xuXG4gIFx0XHQvLyBHZW5lcmF0ZSBhIHJhbmRvbSBzZWVkIGlmIHRoZSBvcHRpb24gaXMgc3BlY2lmaWVkIHdpdGhvdXQgYSB2YWx1ZVxuICBcdFx0UVVuaXQuY29uZmlnLnNlZWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcbiAgXHR9IGVsc2UgaWYgKHVybFBhcmFtcy5zZWVkKSB7XG4gIFx0XHRRVW5pdC5jb25maWcuc2VlZCA9IHVybFBhcmFtcy5zZWVkO1xuICBcdH1cblxuICBcdC8vIEFkZCBVUkwtcGFyYW1ldGVyLW1hcHBlZCBjb25maWcgdmFsdWVzIHdpdGggVUkgZm9ybSByZW5kZXJpbmcgZGF0YVxuICBcdFFVbml0LmNvbmZpZy51cmxDb25maWcucHVzaCh7XG4gIFx0XHRpZDogXCJoaWRlcGFzc2VkXCIsXG4gIFx0XHRsYWJlbDogXCJIaWRlIHBhc3NlZCB0ZXN0c1wiLFxuICBcdFx0dG9vbHRpcDogXCJPbmx5IHNob3cgdGVzdHMgYW5kIGFzc2VydGlvbnMgdGhhdCBmYWlsLiBTdG9yZWQgYXMgcXVlcnktc3RyaW5ncy5cIlxuICBcdH0sIHtcbiAgXHRcdGlkOiBcIm5vZ2xvYmFsc1wiLFxuICBcdFx0bGFiZWw6IFwiQ2hlY2sgZm9yIEdsb2JhbHNcIixcbiAgXHRcdHRvb2x0aXA6IFwiRW5hYmxpbmcgdGhpcyB3aWxsIHRlc3QgaWYgYW55IHRlc3QgaW50cm9kdWNlcyBuZXcgcHJvcGVydGllcyBvbiB0aGUgXCIgKyBcImdsb2JhbCBvYmplY3QgKGB3aW5kb3dgIGluIEJyb3dzZXJzKS4gU3RvcmVkIGFzIHF1ZXJ5LXN0cmluZ3MuXCJcbiAgXHR9LCB7XG4gIFx0XHRpZDogXCJub3RyeWNhdGNoXCIsXG4gIFx0XHRsYWJlbDogXCJObyB0cnktY2F0Y2hcIixcbiAgXHRcdHRvb2x0aXA6IFwiRW5hYmxpbmcgdGhpcyB3aWxsIHJ1biB0ZXN0cyBvdXRzaWRlIG9mIGEgdHJ5LWNhdGNoIGJsb2NrLiBNYWtlcyBkZWJ1Z2dpbmcgXCIgKyBcImV4Y2VwdGlvbnMgaW4gSUUgcmVhc29uYWJsZS4gU3RvcmVkIGFzIHF1ZXJ5LXN0cmluZ3MuXCJcbiAgXHR9KTtcblxuICBcdFFVbml0LmJlZ2luKGZ1bmN0aW9uICgpIHtcbiAgXHRcdHZhciBpLFxuICBcdFx0ICAgIG9wdGlvbixcbiAgXHRcdCAgICB1cmxDb25maWcgPSBRVW5pdC5jb25maWcudXJsQ29uZmlnO1xuXG4gIFx0XHRmb3IgKGkgPSAwOyBpIDwgdXJsQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG5cbiAgXHRcdFx0Ly8gT3B0aW9ucyBjYW4gYmUgZWl0aGVyIHN0cmluZ3Mgb3Igb2JqZWN0cyB3aXRoIG5vbmVtcHR5IFwiaWRcIiBwcm9wZXJ0aWVzXG4gIFx0XHRcdG9wdGlvbiA9IFFVbml0LmNvbmZpZy51cmxDb25maWdbaV07XG4gIFx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uICE9PSBcInN0cmluZ1wiKSB7XG4gIFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uLmlkO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0aWYgKFFVbml0LmNvbmZpZ1tvcHRpb25dID09PSB1bmRlZmluZWQpIHtcbiAgXHRcdFx0XHRRVW5pdC5jb25maWdbb3B0aW9uXSA9IHVybFBhcmFtc1tvcHRpb25dO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fSk7XG5cbiAgXHRmdW5jdGlvbiBnZXRVcmxQYXJhbXMoKSB7XG4gIFx0XHR2YXIgaSwgcGFyYW0sIG5hbWUsIHZhbHVlO1xuICBcdFx0dmFyIHVybFBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIFx0XHR2YXIgcGFyYW1zID0gbG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KFwiJlwiKTtcbiAgXHRcdHZhciBsZW5ndGggPSBwYXJhbXMubGVuZ3RoO1xuXG4gIFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0aWYgKHBhcmFtc1tpXSkge1xuICBcdFx0XHRcdHBhcmFtID0gcGFyYW1zW2ldLnNwbGl0KFwiPVwiKTtcbiAgXHRcdFx0XHRuYW1lID0gZGVjb2RlUXVlcnlQYXJhbShwYXJhbVswXSk7XG5cbiAgXHRcdFx0XHQvLyBBbGxvdyBqdXN0IGEga2V5IHRvIHR1cm4gb24gYSBmbGFnLCBlLmcuLCB0ZXN0Lmh0bWw/bm9nbG9iYWxzXG4gIFx0XHRcdFx0dmFsdWUgPSBwYXJhbS5sZW5ndGggPT09IDEgfHwgZGVjb2RlUXVlcnlQYXJhbShwYXJhbS5zbGljZSgxKS5qb2luKFwiPVwiKSk7XG4gIFx0XHRcdFx0aWYgKG5hbWUgaW4gdXJsUGFyYW1zKSB7XG4gIFx0XHRcdFx0XHR1cmxQYXJhbXNbbmFtZV0gPSBbXS5jb25jYXQodXJsUGFyYW1zW25hbWVdLCB2YWx1ZSk7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHVybFBhcmFtc1tuYW1lXSA9IHZhbHVlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gdXJsUGFyYW1zO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGRlY29kZVF1ZXJ5UGFyYW0ocGFyYW0pIHtcbiAgXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0ucmVwbGFjZSgvXFwrL2csIFwiJTIwXCIpKTtcbiAgXHR9XG4gIH0pKCk7XG5cbiAgdmFyIHN0YXRzID0ge1xuICBcdHBhc3NlZFRlc3RzOiAwLFxuICBcdGZhaWxlZFRlc3RzOiAwLFxuICBcdHNraXBwZWRUZXN0czogMCxcbiAgXHR0b2RvVGVzdHM6IDBcbiAgfTtcblxuICAvLyBFc2NhcGUgdGV4dCBmb3IgYXR0cmlidXRlIG9yIHRleHQgY29udGVudC5cbiAgZnVuY3Rpb24gZXNjYXBlVGV4dChzKSB7XG4gIFx0aWYgKCFzKSB7XG4gIFx0XHRyZXR1cm4gXCJcIjtcbiAgXHR9XG4gIFx0cyA9IHMgKyBcIlwiO1xuXG4gIFx0Ly8gQm90aCBzaW5nbGUgcXVvdGVzIGFuZCBkb3VibGUgcXVvdGVzIChmb3IgYXR0cmlidXRlcylcbiAgXHRyZXR1cm4gcy5yZXBsYWNlKC9bJ1wiPD4mXS9nLCBmdW5jdGlvbiAocykge1xuICBcdFx0c3dpdGNoIChzKSB7XG4gIFx0XHRcdGNhc2UgXCInXCI6XG4gIFx0XHRcdFx0cmV0dXJuIFwiJiMwMzk7XCI7XG4gIFx0XHRcdGNhc2UgXCJcXFwiXCI6XG4gIFx0XHRcdFx0cmV0dXJuIFwiJnF1b3Q7XCI7XG4gIFx0XHRcdGNhc2UgXCI8XCI6XG4gIFx0XHRcdFx0cmV0dXJuIFwiJmx0O1wiO1xuICBcdFx0XHRjYXNlIFwiPlwiOlxuICBcdFx0XHRcdHJldHVybiBcIiZndDtcIjtcbiAgXHRcdFx0Y2FzZSBcIiZcIjpcbiAgXHRcdFx0XHRyZXR1cm4gXCImYW1wO1wiO1xuICBcdFx0fVxuICBcdH0pO1xuICB9XG5cbiAgKGZ1bmN0aW9uICgpIHtcblxuICBcdC8vIERvbid0IGxvYWQgdGhlIEhUTUwgUmVwb3J0ZXIgb24gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gIFx0aWYgKHR5cGVvZiB3aW5kb3ckMSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhd2luZG93JDEuZG9jdW1lbnQpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHR2YXIgY29uZmlnID0gUVVuaXQuY29uZmlnLFxuICBcdCAgICBoaWRkZW5UZXN0cyA9IFtdLFxuICBcdCAgICBkb2N1bWVudCA9IHdpbmRvdyQxLmRvY3VtZW50LFxuICBcdCAgICBjb2xsYXBzZU5leHQgPSBmYWxzZSxcbiAgXHQgICAgaGFzT3duJCQxID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgXHQgICAgdW5maWx0ZXJlZFVybCA9IHNldFVybCh7IGZpbHRlcjogdW5kZWZpbmVkLCBtb2R1bGU6IHVuZGVmaW5lZCxcbiAgXHRcdG1vZHVsZUlkOiB1bmRlZmluZWQsIHRlc3RJZDogdW5kZWZpbmVkIH0pLFxuICBcdCAgICBtb2R1bGVzTGlzdCA9IFtdO1xuXG4gIFx0ZnVuY3Rpb24gYWRkRXZlbnQoZWxlbSwgdHlwZSwgZm4pIHtcbiAgXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgZmFsc2UpO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsZW0sIHR5cGUsIGZuKSB7XG4gIFx0XHRlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGZhbHNlKTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhZGRFdmVudHMoZWxlbXMsIHR5cGUsIGZuKSB7XG4gIFx0XHR2YXIgaSA9IGVsZW1zLmxlbmd0aDtcbiAgXHRcdHdoaWxlIChpLS0pIHtcbiAgXHRcdFx0YWRkRXZlbnQoZWxlbXNbaV0sIHR5cGUsIGZuKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBuYW1lKSB7XG4gIFx0XHRyZXR1cm4gKFwiIFwiICsgZWxlbS5jbGFzc05hbWUgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIG5hbWUgKyBcIiBcIikgPj0gMDtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhZGRDbGFzcyhlbGVtLCBuYW1lKSB7XG4gIFx0XHRpZiAoIWhhc0NsYXNzKGVsZW0sIG5hbWUpKSB7XG4gIFx0XHRcdGVsZW0uY2xhc3NOYW1lICs9IChlbGVtLmNsYXNzTmFtZSA/IFwiIFwiIDogXCJcIikgKyBuYW1lO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIG5hbWUsIGZvcmNlKSB7XG4gIFx0XHRpZiAoZm9yY2UgfHwgdHlwZW9mIGZvcmNlID09PSBcInVuZGVmaW5lZFwiICYmICFoYXNDbGFzcyhlbGVtLCBuYW1lKSkge1xuICBcdFx0XHRhZGRDbGFzcyhlbGVtLCBuYW1lKTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIG5hbWUpO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW0sIG5hbWUpIHtcbiAgXHRcdHZhciBzZXQgPSBcIiBcIiArIGVsZW0uY2xhc3NOYW1lICsgXCIgXCI7XG5cbiAgXHRcdC8vIENsYXNzIG5hbWUgbWF5IGFwcGVhciBtdWx0aXBsZSB0aW1lc1xuICBcdFx0d2hpbGUgKHNldC5pbmRleE9mKFwiIFwiICsgbmFtZSArIFwiIFwiKSA+PSAwKSB7XG4gIFx0XHRcdHNldCA9IHNldC5yZXBsYWNlKFwiIFwiICsgbmFtZSArIFwiIFwiLCBcIiBcIik7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFRyaW0gZm9yIHByZXR0aW5lc3NcbiAgXHRcdGVsZW0uY2xhc3NOYW1lID0gdHlwZW9mIHNldC50cmltID09PSBcImZ1bmN0aW9uXCIgPyBzZXQudHJpbSgpIDogc2V0LnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGlkKG5hbWUpIHtcbiAgXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhYm9ydFRlc3RzKCkge1xuICBcdFx0dmFyIGFib3J0QnV0dG9uID0gaWQoXCJxdW5pdC1hYm9ydC10ZXN0cy1idXR0b25cIik7XG4gIFx0XHRpZiAoYWJvcnRCdXR0b24pIHtcbiAgXHRcdFx0YWJvcnRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBcdFx0XHRhYm9ydEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFib3J0aW5nLi4uXCI7XG4gIFx0XHR9XG4gIFx0XHRRVW5pdC5jb25maWcucXVldWUubGVuZ3RoID0gMDtcbiAgXHRcdHJldHVybiBmYWxzZTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBpbnRlcmNlcHROYXZpZ2F0aW9uKGV2KSB7XG4gIFx0XHRhcHBseVVybFBhcmFtcygpO1xuXG4gIFx0XHRpZiAoZXYgJiYgZXYucHJldmVudERlZmF1bHQpIHtcbiAgXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIGZhbHNlO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGdldFVybENvbmZpZ0h0bWwoKSB7XG4gIFx0XHR2YXIgaSxcbiAgXHRcdCAgICBqLFxuICBcdFx0ICAgIHZhbCxcbiAgXHRcdCAgICBlc2NhcGVkLFxuICBcdFx0ICAgIGVzY2FwZWRUb29sdGlwLFxuICBcdFx0ICAgIHNlbGVjdGlvbiA9IGZhbHNlLFxuICBcdFx0ICAgIHVybENvbmZpZyA9IGNvbmZpZy51cmxDb25maWcsXG4gIFx0XHQgICAgdXJsQ29uZmlnSHRtbCA9IFwiXCI7XG5cbiAgXHRcdGZvciAoaSA9IDA7IGkgPCB1cmxDb25maWcubGVuZ3RoOyBpKyspIHtcblxuICBcdFx0XHQvLyBPcHRpb25zIGNhbiBiZSBlaXRoZXIgc3RyaW5ncyBvciBvYmplY3RzIHdpdGggbm9uZW1wdHkgXCJpZFwiIHByb3BlcnRpZXNcbiAgXHRcdFx0dmFsID0gY29uZmlnLnVybENvbmZpZ1tpXTtcbiAgXHRcdFx0aWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpIHtcbiAgXHRcdFx0XHR2YWwgPSB7XG4gIFx0XHRcdFx0XHRpZDogdmFsLFxuICBcdFx0XHRcdFx0bGFiZWw6IHZhbFxuICBcdFx0XHRcdH07XG4gIFx0XHRcdH1cblxuICBcdFx0XHRlc2NhcGVkID0gZXNjYXBlVGV4dCh2YWwuaWQpO1xuICBcdFx0XHRlc2NhcGVkVG9vbHRpcCA9IGVzY2FwZVRleHQodmFsLnRvb2x0aXApO1xuXG4gIFx0XHRcdGlmICghdmFsLnZhbHVlIHx8IHR5cGVvZiB2YWwudmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgXHRcdFx0XHR1cmxDb25maWdIdG1sICs9IFwiPGxhYmVsIGZvcj0ncXVuaXQtdXJsY29uZmlnLVwiICsgZXNjYXBlZCArIFwiJyB0aXRsZT0nXCIgKyBlc2NhcGVkVG9vbHRpcCArIFwiJz48aW5wdXQgaWQ9J3F1bml0LXVybGNvbmZpZy1cIiArIGVzY2FwZWQgKyBcIicgbmFtZT0nXCIgKyBlc2NhcGVkICsgXCInIHR5cGU9J2NoZWNrYm94J1wiICsgKHZhbC52YWx1ZSA/IFwiIHZhbHVlPSdcIiArIGVzY2FwZVRleHQodmFsLnZhbHVlKSArIFwiJ1wiIDogXCJcIikgKyAoY29uZmlnW3ZhbC5pZF0gPyBcIiBjaGVja2VkPSdjaGVja2VkJ1wiIDogXCJcIikgKyBcIiB0aXRsZT0nXCIgKyBlc2NhcGVkVG9vbHRpcCArIFwiJyAvPlwiICsgZXNjYXBlVGV4dCh2YWwubGFiZWwpICsgXCI8L2xhYmVsPlwiO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHVybENvbmZpZ0h0bWwgKz0gXCI8bGFiZWwgZm9yPSdxdW5pdC11cmxjb25maWctXCIgKyBlc2NhcGVkICsgXCInIHRpdGxlPSdcIiArIGVzY2FwZWRUb29sdGlwICsgXCInPlwiICsgdmFsLmxhYmVsICsgXCI6IDwvbGFiZWw+PHNlbGVjdCBpZD0ncXVuaXQtdXJsY29uZmlnLVwiICsgZXNjYXBlZCArIFwiJyBuYW1lPSdcIiArIGVzY2FwZWQgKyBcIicgdGl0bGU9J1wiICsgZXNjYXBlZFRvb2x0aXAgKyBcIic+PG9wdGlvbj48L29wdGlvbj5cIjtcblxuICBcdFx0XHRcdGlmIChRVW5pdC5pcyhcImFycmF5XCIsIHZhbC52YWx1ZSkpIHtcbiAgXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCB2YWwudmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgXHRcdFx0XHRcdFx0ZXNjYXBlZCA9IGVzY2FwZVRleHQodmFsLnZhbHVlW2pdKTtcbiAgXHRcdFx0XHRcdFx0dXJsQ29uZmlnSHRtbCArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgZXNjYXBlZCArIFwiJ1wiICsgKGNvbmZpZ1t2YWwuaWRdID09PSB2YWwudmFsdWVbal0gPyAoc2VsZWN0aW9uID0gdHJ1ZSkgJiYgXCIgc2VsZWN0ZWQ9J3NlbGVjdGVkJ1wiIDogXCJcIikgKyBcIj5cIiArIGVzY2FwZWQgKyBcIjwvb3B0aW9uPlwiO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRmb3IgKGogaW4gdmFsLnZhbHVlKSB7XG4gIFx0XHRcdFx0XHRcdGlmIChoYXNPd24kJDEuY2FsbCh2YWwudmFsdWUsIGopKSB7XG4gIFx0XHRcdFx0XHRcdFx0dXJsQ29uZmlnSHRtbCArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgZXNjYXBlVGV4dChqKSArIFwiJ1wiICsgKGNvbmZpZ1t2YWwuaWRdID09PSBqID8gKHNlbGVjdGlvbiA9IHRydWUpICYmIFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIpICsgXCI+XCIgKyBlc2NhcGVUZXh0KHZhbC52YWx1ZVtqXSkgKyBcIjwvb3B0aW9uPlwiO1xuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdGlmIChjb25maWdbdmFsLmlkXSAmJiAhc2VsZWN0aW9uKSB7XG4gIFx0XHRcdFx0XHRlc2NhcGVkID0gZXNjYXBlVGV4dChjb25maWdbdmFsLmlkXSk7XG4gIFx0XHRcdFx0XHR1cmxDb25maWdIdG1sICs9IFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBlc2NhcGVkICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCcgZGlzYWJsZWQ9J2Rpc2FibGVkJz5cIiArIGVzY2FwZWQgKyBcIjwvb3B0aW9uPlwiO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHR1cmxDb25maWdIdG1sICs9IFwiPC9zZWxlY3Q+XCI7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIHVybENvbmZpZ0h0bWw7XG4gIFx0fVxuXG4gIFx0Ly8gSGFuZGxlIFwiY2xpY2tcIiBldmVudHMgb24gdG9vbGJhciBjaGVja2JveGVzIGFuZCBcImNoYW5nZVwiIGZvciBzZWxlY3QgbWVudXMuXG4gIFx0Ly8gVXBkYXRlcyB0aGUgVVJMIHdpdGggdGhlIG5ldyBzdGF0ZSBvZiBgY29uZmlnLnVybENvbmZpZ2AgdmFsdWVzLlxuICBcdGZ1bmN0aW9uIHRvb2xiYXJDaGFuZ2VkKCkge1xuICBcdFx0dmFyIHVwZGF0ZWRVcmwsXG4gIFx0XHQgICAgdmFsdWUsXG4gIFx0XHQgICAgdGVzdHMsXG4gIFx0XHQgICAgZmllbGQgPSB0aGlzLFxuICBcdFx0ICAgIHBhcmFtcyA9IHt9O1xuXG4gIFx0XHQvLyBEZXRlY3QgaWYgZmllbGQgaXMgYSBzZWxlY3QgbWVudSBvciBhIGNoZWNrYm94XG4gIFx0XHRpZiAoXCJzZWxlY3RlZEluZGV4XCIgaW4gZmllbGQpIHtcbiAgXHRcdFx0dmFsdWUgPSBmaWVsZC5vcHRpb25zW2ZpZWxkLnNlbGVjdGVkSW5kZXhdLnZhbHVlIHx8IHVuZGVmaW5lZDtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHZhbHVlID0gZmllbGQuY2hlY2tlZCA/IGZpZWxkLmRlZmF1bHRWYWx1ZSB8fCB0cnVlIDogdW5kZWZpbmVkO1xuICBcdFx0fVxuXG4gIFx0XHRwYXJhbXNbZmllbGQubmFtZV0gPSB2YWx1ZTtcbiAgXHRcdHVwZGF0ZWRVcmwgPSBzZXRVcmwocGFyYW1zKTtcblxuICBcdFx0Ly8gQ2hlY2sgaWYgd2UgY2FuIGFwcGx5IHRoZSBjaGFuZ2Ugd2l0aG91dCBhIHBhZ2UgcmVmcmVzaFxuICBcdFx0aWYgKFwiaGlkZXBhc3NlZFwiID09PSBmaWVsZC5uYW1lICYmIFwicmVwbGFjZVN0YXRlXCIgaW4gd2luZG93JDEuaGlzdG9yeSkge1xuICBcdFx0XHRRVW5pdC51cmxQYXJhbXNbZmllbGQubmFtZV0gPSB2YWx1ZTtcbiAgXHRcdFx0Y29uZmlnW2ZpZWxkLm5hbWVdID0gdmFsdWUgfHwgZmFsc2U7XG4gIFx0XHRcdHRlc3RzID0gaWQoXCJxdW5pdC10ZXN0c1wiKTtcbiAgXHRcdFx0aWYgKHRlc3RzKSB7XG4gIFx0XHRcdFx0dmFyIGxlbmd0aCA9IHRlc3RzLmNoaWxkcmVuLmxlbmd0aDtcbiAgXHRcdFx0XHR2YXIgY2hpbGRyZW4gPSB0ZXN0cy5jaGlsZHJlbjtcblxuICBcdFx0XHRcdGlmIChmaWVsZC5jaGVja2VkKSB7XG4gIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdFx0XHRcdHZhciB0ZXN0JCQxID0gY2hpbGRyZW5baV07XG5cbiAgXHRcdFx0XHRcdFx0aWYgKHRlc3QkJDEgJiYgdGVzdCQkMS5jbGFzc05hbWUuaW5kZXhPZihcInBhc3NcIikgPiAtMSkge1xuICBcdFx0XHRcdFx0XHRcdGhpZGRlblRlc3RzLnB1c2godGVzdCQkMSk7XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdH1cblxuICBcdFx0XHRcdFx0dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICBcdFx0XHRcdFx0dmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIFx0XHRcdFx0XHR2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgXHRcdFx0XHRcdHRyeSB7XG4gIFx0XHRcdFx0XHRcdGZvciAodmFyIF9pdGVyYXRvciA9IGhpZGRlblRlc3RzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICBcdFx0XHRcdFx0XHRcdHZhciBoaWRkZW5UZXN0ID0gX3N0ZXAudmFsdWU7XG5cbiAgXHRcdFx0XHRcdFx0XHR0ZXN0cy5yZW1vdmVDaGlsZChoaWRkZW5UZXN0KTtcbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gIFx0XHRcdFx0XHRcdF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgXHRcdFx0XHRcdFx0X2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIFx0XHRcdFx0XHR9IGZpbmFsbHkge1xuICBcdFx0XHRcdFx0XHR0cnkge1xuICBcdFx0XHRcdFx0XHRcdGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gIFx0XHRcdFx0XHRcdFx0XHRfaXRlcmF0b3IucmV0dXJuKCk7XG4gIFx0XHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0XHR9IGZpbmFsbHkge1xuICBcdFx0XHRcdFx0XHRcdGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICBcdFx0XHRcdFx0XHRcdFx0dGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gIFx0XHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHdoaWxlICgodGVzdCQkMSA9IGhpZGRlblRlc3RzLnBvcCgpKSAhPSBudWxsKSB7XG4gIFx0XHRcdFx0XHRcdHRlc3RzLmFwcGVuZENoaWxkKHRlc3QkJDEpO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHR3aW5kb3ckMS5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB1cGRhdGVkVXJsKTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHdpbmRvdyQxLmxvY2F0aW9uID0gdXBkYXRlZFVybDtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBzZXRVcmwocGFyYW1zKSB7XG4gIFx0XHR2YXIga2V5LFxuICBcdFx0ICAgIGFyclZhbHVlLFxuICBcdFx0ICAgIGksXG4gIFx0XHQgICAgcXVlcnlzdHJpbmcgPSBcIj9cIixcbiAgXHRcdCAgICBsb2NhdGlvbiA9IHdpbmRvdyQxLmxvY2F0aW9uO1xuXG4gIFx0XHRwYXJhbXMgPSBRVW5pdC5leHRlbmQoUVVuaXQuZXh0ZW5kKHt9LCBRVW5pdC51cmxQYXJhbXMpLCBwYXJhbXMpO1xuXG4gIFx0XHRmb3IgKGtleSBpbiBwYXJhbXMpIHtcblxuICBcdFx0XHQvLyBTa2lwIGluaGVyaXRlZCBvciB1bmRlZmluZWQgcHJvcGVydGllc1xuICBcdFx0XHRpZiAoaGFzT3duJCQxLmNhbGwocGFyYW1zLCBrZXkpICYmIHBhcmFtc1trZXldICE9PSB1bmRlZmluZWQpIHtcblxuICBcdFx0XHRcdC8vIE91dHB1dCBhIHBhcmFtZXRlciBmb3IgZWFjaCB2YWx1ZSBvZiB0aGlzIGtleVxuICBcdFx0XHRcdC8vIChidXQgdXN1YWxseSBqdXN0IG9uZSlcbiAgXHRcdFx0XHRhcnJWYWx1ZSA9IFtdLmNvbmNhdChwYXJhbXNba2V5XSk7XG4gIFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGFyclZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdFx0XHRxdWVyeXN0cmluZyArPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgXHRcdFx0XHRcdGlmIChhcnJWYWx1ZVtpXSAhPT0gdHJ1ZSkge1xuICBcdFx0XHRcdFx0XHRxdWVyeXN0cmluZyArPSBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChhcnJWYWx1ZVtpXSk7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRxdWVyeXN0cmluZyArPSBcIiZcIjtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHRcdHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QgKyBsb2NhdGlvbi5wYXRobmFtZSArIHF1ZXJ5c3RyaW5nLnNsaWNlKDAsIC0xKTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBseVVybFBhcmFtcygpIHtcbiAgXHRcdHZhciBpLFxuICBcdFx0ICAgIHNlbGVjdGVkTW9kdWxlcyA9IFtdLFxuICBcdFx0ICAgIG1vZHVsZXNMaXN0ID0gaWQoXCJxdW5pdC1tb2R1bGVmaWx0ZXItZHJvcGRvd24tbGlzdFwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpLFxuICBcdFx0ICAgIGZpbHRlciA9IGlkKFwicXVuaXQtZmlsdGVyLWlucHV0XCIpLnZhbHVlO1xuXG4gIFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0aWYgKG1vZHVsZXNMaXN0W2ldLmNoZWNrZWQpIHtcbiAgXHRcdFx0XHRzZWxlY3RlZE1vZHVsZXMucHVzaChtb2R1bGVzTGlzdFtpXS52YWx1ZSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0d2luZG93JDEubG9jYXRpb24gPSBzZXRVcmwoe1xuICBcdFx0XHRmaWx0ZXI6IGZpbHRlciA9PT0gXCJcIiA/IHVuZGVmaW5lZCA6IGZpbHRlcixcbiAgXHRcdFx0bW9kdWxlSWQ6IHNlbGVjdGVkTW9kdWxlcy5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiBzZWxlY3RlZE1vZHVsZXMsXG5cbiAgXHRcdFx0Ly8gUmVtb3ZlIG1vZHVsZSBhbmQgdGVzdElkIGZpbHRlclxuICBcdFx0XHRtb2R1bGU6IHVuZGVmaW5lZCxcbiAgXHRcdFx0dGVzdElkOiB1bmRlZmluZWRcbiAgXHRcdH0pO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIHRvb2xiYXJVcmxDb25maWdDb250YWluZXIoKSB7XG4gIFx0XHR2YXIgdXJsQ29uZmlnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgXHRcdHVybENvbmZpZ0NvbnRhaW5lci5pbm5lckhUTUwgPSBnZXRVcmxDb25maWdIdG1sKCk7XG4gIFx0XHRhZGRDbGFzcyh1cmxDb25maWdDb250YWluZXIsIFwicXVuaXQtdXJsLWNvbmZpZ1wiKTtcblxuICBcdFx0YWRkRXZlbnRzKHVybENvbmZpZ0NvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpLCBcImNoYW5nZVwiLCB0b29sYmFyQ2hhbmdlZCk7XG4gIFx0XHRhZGRFdmVudHModXJsQ29uZmlnQ29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VsZWN0XCIpLCBcImNoYW5nZVwiLCB0b29sYmFyQ2hhbmdlZCk7XG5cbiAgXHRcdHJldHVybiB1cmxDb25maWdDb250YWluZXI7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYWJvcnRUZXN0c0J1dHRvbigpIHtcbiAgXHRcdHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBcdFx0YnV0dG9uLmlkID0gXCJxdW5pdC1hYm9ydC10ZXN0cy1idXR0b25cIjtcbiAgXHRcdGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFib3J0XCI7XG4gIFx0XHRhZGRFdmVudChidXR0b24sIFwiY2xpY2tcIiwgYWJvcnRUZXN0cyk7XG4gIFx0XHRyZXR1cm4gYnV0dG9uO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIHRvb2xiYXJMb29zZUZpbHRlcigpIHtcbiAgXHRcdHZhciBmaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSxcbiAgXHRcdCAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgXHRcdCAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgXHRcdCAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIFx0XHRhZGRDbGFzcyhmaWx0ZXIsIFwicXVuaXQtZmlsdGVyXCIpO1xuXG4gIFx0XHRsYWJlbC5pbm5lckhUTUwgPSBcIkZpbHRlcjogXCI7XG5cbiAgXHRcdGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgXHRcdGlucHV0LnZhbHVlID0gY29uZmlnLmZpbHRlciB8fCBcIlwiO1xuICBcdFx0aW5wdXQubmFtZSA9IFwiZmlsdGVyXCI7XG4gIFx0XHRpbnB1dC5pZCA9IFwicXVuaXQtZmlsdGVyLWlucHV0XCI7XG5cbiAgXHRcdGJ1dHRvbi5pbm5lckhUTUwgPSBcIkdvXCI7XG5cbiAgXHRcdGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBcdFx0ZmlsdGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgXHRcdGZpbHRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBcIikpO1xuICBcdFx0ZmlsdGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIFx0XHRhZGRFdmVudChmaWx0ZXIsIFwic3VibWl0XCIsIGludGVyY2VwdE5hdmlnYXRpb24pO1xuXG4gIFx0XHRyZXR1cm4gZmlsdGVyO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIG1vZHVsZUxpc3RIdG1sKCkge1xuICBcdFx0dmFyIGksXG4gIFx0XHQgICAgY2hlY2tlZCxcbiAgXHRcdCAgICBodG1sID0gXCJcIjtcblxuICBcdFx0Zm9yIChpID0gMDsgaSA8IGNvbmZpZy5tb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdGlmIChjb25maWcubW9kdWxlc1tpXS5uYW1lICE9PSBcIlwiKSB7XG4gIFx0XHRcdFx0Y2hlY2tlZCA9IGNvbmZpZy5tb2R1bGVJZC5pbmRleE9mKGNvbmZpZy5tb2R1bGVzW2ldLm1vZHVsZUlkKSA+IC0xO1xuICBcdFx0XHRcdGh0bWwgKz0gXCI8bGk+PGxhYmVsIGNsYXNzPSdjbGlja2FibGVcIiArIChjaGVja2VkID8gXCIgY2hlY2tlZFwiIDogXCJcIikgKyBcIic+PGlucHV0IHR5cGU9J2NoZWNrYm94JyBcIiArIFwidmFsdWU9J1wiICsgY29uZmlnLm1vZHVsZXNbaV0ubW9kdWxlSWQgKyBcIidcIiArIChjaGVja2VkID8gXCIgY2hlY2tlZD0nY2hlY2tlZCdcIiA6IFwiXCIpICsgXCIgLz5cIiArIGVzY2FwZVRleHQoY29uZmlnLm1vZHVsZXNbaV0ubmFtZSkgKyBcIjwvbGFiZWw+PC9saT5cIjtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gaHRtbDtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiB0b29sYmFyTW9kdWxlRmlsdGVyKCkge1xuICBcdFx0dmFyIGNvbW1pdCxcbiAgXHRcdCAgICByZXNldCxcbiAgXHRcdCAgICBtb2R1bGVGaWx0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSxcbiAgXHRcdCAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgXHRcdCAgICBtb2R1bGVTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gIFx0XHQgICAgZHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICBcdFx0ICAgIGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxcbiAgXHRcdCAgICBhcHBseUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiksXG4gIFx0XHQgICAgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLFxuICBcdFx0ICAgIGFsbE1vZHVsZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKSxcbiAgXHRcdCAgICBhbGxDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxcbiAgXHRcdCAgICBkcm9wRG93bkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIiksXG4gIFx0XHQgICAgZGlydHkgPSBmYWxzZTtcblxuICBcdFx0bW9kdWxlU2VhcmNoLmlkID0gXCJxdW5pdC1tb2R1bGVmaWx0ZXItc2VhcmNoXCI7XG4gIFx0XHRtb2R1bGVTZWFyY2guYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgXHRcdGFkZEV2ZW50KG1vZHVsZVNlYXJjaCwgXCJpbnB1dFwiLCBzZWFyY2hJbnB1dCk7XG4gIFx0XHRhZGRFdmVudChtb2R1bGVTZWFyY2gsIFwiaW5wdXRcIiwgc2VhcmNoRm9jdXMpO1xuICBcdFx0YWRkRXZlbnQobW9kdWxlU2VhcmNoLCBcImZvY3VzXCIsIHNlYXJjaEZvY3VzKTtcbiAgXHRcdGFkZEV2ZW50KG1vZHVsZVNlYXJjaCwgXCJjbGlja1wiLCBzZWFyY2hGb2N1cyk7XG5cbiAgXHRcdGxhYmVsLmlkID0gXCJxdW5pdC1tb2R1bGVmaWx0ZXItc2VhcmNoLWNvbnRhaW5lclwiO1xuICBcdFx0bGFiZWwuaW5uZXJIVE1MID0gXCJNb2R1bGU6IFwiO1xuICBcdFx0bGFiZWwuYXBwZW5kQ2hpbGQobW9kdWxlU2VhcmNoKTtcblxuICBcdFx0YXBwbHlCdXR0b24udGV4dENvbnRlbnQgPSBcIkFwcGx5XCI7XG4gIFx0XHRhcHBseUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgXHRcdHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuICBcdFx0cmVzZXRCdXR0b24udHlwZSA9IFwicmVzZXRcIjtcbiAgXHRcdHJlc2V0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBcdFx0YWxsQ2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgXHRcdGFsbENoZWNrYm94LmNoZWNrZWQgPSBjb25maWcubW9kdWxlSWQubGVuZ3RoID09PSAwO1xuXG4gIFx0XHRhbGxNb2R1bGVzTGFiZWwuY2xhc3NOYW1lID0gXCJjbGlja2FibGVcIjtcbiAgXHRcdGlmIChjb25maWcubW9kdWxlSWQubGVuZ3RoKSB7XG4gIFx0XHRcdGFsbE1vZHVsZXNMYWJlbC5jbGFzc05hbWUgPSBcImNoZWNrZWRcIjtcbiAgXHRcdH1cbiAgXHRcdGFsbE1vZHVsZXNMYWJlbC5hcHBlbmRDaGlsZChhbGxDaGVja2JveCk7XG4gIFx0XHRhbGxNb2R1bGVzTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBbGwgbW9kdWxlc1wiKSk7XG5cbiAgXHRcdGFjdGlvbnMuaWQgPSBcInF1bml0LW1vZHVsZWZpbHRlci1hY3Rpb25zXCI7XG4gIFx0XHRhY3Rpb25zLmFwcGVuZENoaWxkKGFwcGx5QnV0dG9uKTtcbiAgXHRcdGFjdGlvbnMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICBcdFx0YWN0aW9ucy5hcHBlbmRDaGlsZChhbGxNb2R1bGVzTGFiZWwpO1xuICBcdFx0Y29tbWl0ID0gYWN0aW9ucy5maXJzdENoaWxkO1xuICBcdFx0cmVzZXQgPSBjb21taXQubmV4dFNpYmxpbmc7XG4gIFx0XHRhZGRFdmVudChjb21taXQsIFwiY2xpY2tcIiwgYXBwbHlVcmxQYXJhbXMpO1xuXG4gIFx0XHRkcm9wRG93bkxpc3QuaWQgPSBcInF1bml0LW1vZHVsZWZpbHRlci1kcm9wZG93bi1saXN0XCI7XG4gIFx0XHRkcm9wRG93bkxpc3QuaW5uZXJIVE1MID0gbW9kdWxlTGlzdEh0bWwoKTtcblxuICBcdFx0ZHJvcERvd24uaWQgPSBcInF1bml0LW1vZHVsZWZpbHRlci1kcm9wZG93blwiO1xuICBcdFx0ZHJvcERvd24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcdFx0ZHJvcERvd24uYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG4gIFx0XHRkcm9wRG93bi5hcHBlbmRDaGlsZChkcm9wRG93bkxpc3QpO1xuICBcdFx0YWRkRXZlbnQoZHJvcERvd24sIFwiY2hhbmdlXCIsIHNlbGVjdGlvbkNoYW5nZSk7XG4gIFx0XHRzZWxlY3Rpb25DaGFuZ2UoKTtcblxuICBcdFx0bW9kdWxlRmlsdGVyLmlkID0gXCJxdW5pdC1tb2R1bGVmaWx0ZXJcIjtcbiAgXHRcdG1vZHVsZUZpbHRlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIFx0XHRtb2R1bGVGaWx0ZXIuYXBwZW5kQ2hpbGQoZHJvcERvd24pO1xuICBcdFx0YWRkRXZlbnQobW9kdWxlRmlsdGVyLCBcInN1Ym1pdFwiLCBpbnRlcmNlcHROYXZpZ2F0aW9uKTtcbiAgXHRcdGFkZEV2ZW50KG1vZHVsZUZpbHRlciwgXCJyZXNldFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgXHRcdFx0Ly8gTGV0IHRoZSByZXNldCBoYXBwZW4sIHRoZW4gdXBkYXRlIHN0eWxlc1xuICBcdFx0XHR3aW5kb3ckMS5zZXRUaW1lb3V0KHNlbGVjdGlvbkNoYW5nZSk7XG4gIFx0XHR9KTtcblxuICBcdFx0Ly8gRW5hYmxlcyBzaG93L2hpZGUgZm9yIHRoZSBkcm9wZG93blxuICBcdFx0ZnVuY3Rpb24gc2VhcmNoRm9jdXMoKSB7XG4gIFx0XHRcdGlmIChkcm9wRG93bi5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICBcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGRyb3BEb3duLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIFx0XHRcdGFkZEV2ZW50KGRvY3VtZW50LCBcImNsaWNrXCIsIGhpZGVIYW5kbGVyKTtcbiAgXHRcdFx0YWRkRXZlbnQoZG9jdW1lbnQsIFwia2V5ZG93blwiLCBoaWRlSGFuZGxlcik7XG5cbiAgXHRcdFx0Ly8gSGlkZSBvbiBFc2NhcGUga2V5ZG93biBvciBvdXRzaWRlLWNvbnRhaW5lciBjbGlja1xuICBcdFx0XHRmdW5jdGlvbiBoaWRlSGFuZGxlcihlKSB7XG4gIFx0XHRcdFx0dmFyIGluQ29udGFpbmVyID0gbW9kdWxlRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KTtcblxuICBcdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDI3IHx8ICFpbkNvbnRhaW5lcikge1xuICBcdFx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgaW5Db250YWluZXIpIHtcbiAgXHRcdFx0XHRcdFx0bW9kdWxlU2VhcmNoLmZvY3VzKCk7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRkcm9wRG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIFx0XHRcdFx0XHRyZW1vdmVFdmVudChkb2N1bWVudCwgXCJjbGlja1wiLCBoaWRlSGFuZGxlcik7XG4gIFx0XHRcdFx0XHRyZW1vdmVFdmVudChkb2N1bWVudCwgXCJrZXlkb3duXCIsIGhpZGVIYW5kbGVyKTtcbiAgXHRcdFx0XHRcdG1vZHVsZVNlYXJjaC52YWx1ZSA9IFwiXCI7XG4gIFx0XHRcdFx0XHRzZWFyY2hJbnB1dCgpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBQcm9jZXNzZXMgbW9kdWxlIHNlYXJjaCBib3ggaW5wdXRcbiAgXHRcdGZ1bmN0aW9uIHNlYXJjaElucHV0KCkge1xuICBcdFx0XHR2YXIgaSxcbiAgXHRcdFx0ICAgIGl0ZW0sXG4gIFx0XHRcdCAgICBzZWFyY2hUZXh0ID0gbW9kdWxlU2VhcmNoLnZhbHVlLnRvTG93ZXJDYXNlKCksXG4gIFx0XHRcdCAgICBsaXN0SXRlbXMgPSBkcm9wRG93bkxpc3QuY2hpbGRyZW47XG5cbiAgXHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpc3RJdGVtcy5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdGl0ZW0gPSBsaXN0SXRlbXNbaV07XG4gIFx0XHRcdFx0aWYgKCFzZWFyY2hUZXh0IHx8IGl0ZW0udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHtcbiAgXHRcdFx0XHRcdGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBQcm9jZXNzZXMgc2VsZWN0aW9uIGNoYW5nZXNcbiAgXHRcdGZ1bmN0aW9uIHNlbGVjdGlvbkNoYW5nZShldnQpIHtcbiAgXHRcdFx0dmFyIGksXG4gIFx0XHRcdCAgICBpdGVtLFxuICBcdFx0XHQgICAgY2hlY2tib3ggPSBldnQgJiYgZXZ0LnRhcmdldCB8fCBhbGxDaGVja2JveCxcbiAgXHRcdFx0ICAgIG1vZHVsZXNMaXN0ID0gZHJvcERvd25MaXN0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIiksXG4gIFx0XHRcdCAgICBzZWxlY3RlZE5hbWVzID0gW107XG5cbiAgXHRcdFx0dG9nZ2xlQ2xhc3MoY2hlY2tib3gucGFyZW50Tm9kZSwgXCJjaGVja2VkXCIsIGNoZWNrYm94LmNoZWNrZWQpO1xuXG4gIFx0XHRcdGRpcnR5ID0gZmFsc2U7XG4gIFx0XHRcdGlmIChjaGVja2JveC5jaGVja2VkICYmIGNoZWNrYm94ICE9PSBhbGxDaGVja2JveCkge1xuICBcdFx0XHRcdGFsbENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgXHRcdFx0XHRyZW1vdmVDbGFzcyhhbGxDaGVja2JveC5wYXJlbnROb2RlLCBcImNoZWNrZWRcIik7XG4gIFx0XHRcdH1cbiAgXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdFx0aXRlbSA9IG1vZHVsZXNMaXN0W2ldO1xuICBcdFx0XHRcdGlmICghZXZ0KSB7XG4gIFx0XHRcdFx0XHR0b2dnbGVDbGFzcyhpdGVtLnBhcmVudE5vZGUsIFwiY2hlY2tlZFwiLCBpdGVtLmNoZWNrZWQpO1xuICBcdFx0XHRcdH0gZWxzZSBpZiAoY2hlY2tib3ggPT09IGFsbENoZWNrYm94ICYmIGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgXHRcdFx0XHRcdGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICBcdFx0XHRcdFx0cmVtb3ZlQ2xhc3MoaXRlbS5wYXJlbnROb2RlLCBcImNoZWNrZWRcIik7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdGRpcnR5ID0gZGlydHkgfHwgaXRlbS5jaGVja2VkICE9PSBpdGVtLmRlZmF1bHRDaGVja2VkO1xuICBcdFx0XHRcdGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgXHRcdFx0XHRcdHNlbGVjdGVkTmFtZXMucHVzaChpdGVtLnBhcmVudE5vZGUudGV4dENvbnRlbnQpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGNvbW1pdC5zdHlsZS5kaXNwbGF5ID0gcmVzZXQuc3R5bGUuZGlzcGxheSA9IGRpcnR5ID8gXCJcIiA6IFwibm9uZVwiO1xuICBcdFx0XHRtb2R1bGVTZWFyY2gucGxhY2Vob2xkZXIgPSBzZWxlY3RlZE5hbWVzLmpvaW4oXCIsIFwiKSB8fCBhbGxDaGVja2JveC5wYXJlbnROb2RlLnRleHRDb250ZW50O1xuICBcdFx0XHRtb2R1bGVTZWFyY2gudGl0bGUgPSBcIlR5cGUgdG8gZmlsdGVyIGxpc3QuIEN1cnJlbnQgc2VsZWN0aW9uOlxcblwiICsgKHNlbGVjdGVkTmFtZXMuam9pbihcIlxcblwiKSB8fCBhbGxDaGVja2JveC5wYXJlbnROb2RlLnRleHRDb250ZW50KTtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIG1vZHVsZUZpbHRlcjtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBlbmRUb29sYmFyKCkge1xuICBcdFx0dmFyIHRvb2xiYXIgPSBpZChcInF1bml0LXRlc3RydW5uZXItdG9vbGJhclwiKTtcblxuICBcdFx0aWYgKHRvb2xiYXIpIHtcbiAgXHRcdFx0dG9vbGJhci5hcHBlbmRDaGlsZCh0b29sYmFyVXJsQ29uZmlnQ29udGFpbmVyKCkpO1xuICBcdFx0XHR0b29sYmFyLmFwcGVuZENoaWxkKHRvb2xiYXJNb2R1bGVGaWx0ZXIoKSk7XG4gIFx0XHRcdHRvb2xiYXIuYXBwZW5kQ2hpbGQodG9vbGJhckxvb3NlRmlsdGVyKCkpO1xuICBcdFx0XHR0b29sYmFyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmNsYXNzTmFtZSA9IFwiY2xlYXJmaXhcIjtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBlbmRIZWFkZXIoKSB7XG4gIFx0XHR2YXIgaGVhZGVyID0gaWQoXCJxdW5pdC1oZWFkZXJcIik7XG5cbiAgXHRcdGlmIChoZWFkZXIpIHtcbiAgXHRcdFx0aGVhZGVyLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nXCIgKyBlc2NhcGVUZXh0KHVuZmlsdGVyZWRVcmwpICsgXCInPlwiICsgaGVhZGVyLmlubmVySFRNTCArIFwiPC9hPiBcIjtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBlbmRCYW5uZXIoKSB7XG4gIFx0XHR2YXIgYmFubmVyID0gaWQoXCJxdW5pdC1iYW5uZXJcIik7XG5cbiAgXHRcdGlmIChiYW5uZXIpIHtcbiAgXHRcdFx0YmFubmVyLmNsYXNzTmFtZSA9IFwiXCI7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwZW5kVGVzdFJlc3VsdHMoKSB7XG4gIFx0XHR2YXIgdGVzdHMgPSBpZChcInF1bml0LXRlc3RzXCIpLFxuICBcdFx0ICAgIHJlc3VsdCA9IGlkKFwicXVuaXQtdGVzdHJlc3VsdFwiKSxcbiAgXHRcdCAgICBjb250cm9scztcblxuICBcdFx0aWYgKHJlc3VsdCkge1xuICBcdFx0XHRyZXN1bHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZXN1bHQpO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAodGVzdHMpIHtcbiAgXHRcdFx0dGVzdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgXHRcdFx0cmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFx0XHRcdHJlc3VsdC5pZCA9IFwicXVuaXQtdGVzdHJlc3VsdFwiO1xuICBcdFx0XHRyZXN1bHQuY2xhc3NOYW1lID0gXCJyZXN1bHRcIjtcbiAgXHRcdFx0dGVzdHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVzdWx0LCB0ZXN0cyk7XG4gIFx0XHRcdHJlc3VsdC5pbm5lckhUTUwgPSBcIjxkaXYgaWQ9XFxcInF1bml0LXRlc3RyZXN1bHQtZGlzcGxheVxcXCI+UnVubmluZy4uLjxiciAvPiYjMTYwOzwvZGl2PlwiICsgXCI8ZGl2IGlkPVxcXCJxdW5pdC10ZXN0cmVzdWx0LWNvbnRyb2xzXFxcIj48L2Rpdj5cIiArIFwiPGRpdiBjbGFzcz1cXFwiY2xlYXJmaXhcXFwiPjwvZGl2PlwiO1xuICBcdFx0XHRjb250cm9scyA9IGlkKFwicXVuaXQtdGVzdHJlc3VsdC1jb250cm9sc1wiKTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbnRyb2xzKSB7XG4gIFx0XHRcdGNvbnRyb2xzLmFwcGVuZENoaWxkKGFib3J0VGVzdHNCdXR0b24oKSk7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwZW5kRmlsdGVyZWRUZXN0KCkge1xuICBcdFx0dmFyIHRlc3RJZCA9IFFVbml0LmNvbmZpZy50ZXN0SWQ7XG4gIFx0XHRpZiAoIXRlc3RJZCB8fCB0ZXN0SWQubGVuZ3RoIDw9IDApIHtcbiAgXHRcdFx0cmV0dXJuIFwiXCI7XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gXCI8ZGl2IGlkPSdxdW5pdC1maWx0ZXJlZFRlc3QnPlJlcnVubmluZyBzZWxlY3RlZCB0ZXN0czogXCIgKyBlc2NhcGVUZXh0KHRlc3RJZC5qb2luKFwiLCBcIikpICsgXCIgPGEgaWQ9J3F1bml0LWNsZWFyRmlsdGVyJyBocmVmPSdcIiArIGVzY2FwZVRleHQodW5maWx0ZXJlZFVybCkgKyBcIic+UnVuIGFsbCB0ZXN0czwvYT48L2Rpdj5cIjtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBlbmRVc2VyQWdlbnQoKSB7XG4gIFx0XHR2YXIgdXNlckFnZW50ID0gaWQoXCJxdW5pdC11c2VyQWdlbnRcIik7XG5cbiAgXHRcdGlmICh1c2VyQWdlbnQpIHtcbiAgXHRcdFx0dXNlckFnZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIFx0XHRcdHVzZXJBZ2VudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlFVbml0IFwiICsgUVVuaXQudmVyc2lvbiArIFwiOyBcIiArIG5hdmlnYXRvci51c2VyQWdlbnQpKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBhcHBlbmRJbnRlcmZhY2UoKSB7XG4gIFx0XHR2YXIgcXVuaXQgPSBpZChcInF1bml0XCIpO1xuXG4gIFx0XHRpZiAocXVuaXQpIHtcbiAgXHRcdFx0cXVuaXQuaW5uZXJIVE1MID0gXCI8aDEgaWQ9J3F1bml0LWhlYWRlcic+XCIgKyBlc2NhcGVUZXh0KGRvY3VtZW50LnRpdGxlKSArIFwiPC9oMT5cIiArIFwiPGgyIGlkPSdxdW5pdC1iYW5uZXInPjwvaDI+XCIgKyBcIjxkaXYgaWQ9J3F1bml0LXRlc3RydW5uZXItdG9vbGJhcic+PC9kaXY+XCIgKyBhcHBlbmRGaWx0ZXJlZFRlc3QoKSArIFwiPGgyIGlkPSdxdW5pdC11c2VyQWdlbnQnPjwvaDI+XCIgKyBcIjxvbCBpZD0ncXVuaXQtdGVzdHMnPjwvb2w+XCI7XG4gIFx0XHR9XG5cbiAgXHRcdGFwcGVuZEhlYWRlcigpO1xuICBcdFx0YXBwZW5kQmFubmVyKCk7XG4gIFx0XHRhcHBlbmRUZXN0UmVzdWx0cygpO1xuICBcdFx0YXBwZW5kVXNlckFnZW50KCk7XG4gIFx0XHRhcHBlbmRUb29sYmFyKCk7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwZW5kVGVzdChuYW1lLCB0ZXN0SWQsIG1vZHVsZU5hbWUpIHtcbiAgXHRcdHZhciB0aXRsZSxcbiAgXHRcdCAgICByZXJ1blRyaWdnZXIsXG4gIFx0XHQgICAgdGVzdEJsb2NrLFxuICBcdFx0ICAgIGFzc2VydExpc3QsXG4gIFx0XHQgICAgdGVzdHMgPSBpZChcInF1bml0LXRlc3RzXCIpO1xuXG4gIFx0XHRpZiAoIXRlc3RzKSB7XG4gIFx0XHRcdHJldHVybjtcbiAgXHRcdH1cblxuICBcdFx0dGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xuICBcdFx0dGl0bGUuaW5uZXJIVE1MID0gZ2V0TmFtZUh0bWwobmFtZSwgbW9kdWxlTmFtZSk7XG5cbiAgXHRcdHJlcnVuVHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBcdFx0cmVydW5UcmlnZ2VyLmlubmVySFRNTCA9IFwiUmVydW5cIjtcbiAgXHRcdHJlcnVuVHJpZ2dlci5ocmVmID0gc2V0VXJsKHsgdGVzdElkOiB0ZXN0SWQgfSk7XG5cbiAgXHRcdHRlc3RCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgXHRcdHRlc3RCbG9jay5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIFx0XHR0ZXN0QmxvY2suYXBwZW5kQ2hpbGQocmVydW5UcmlnZ2VyKTtcbiAgXHRcdHRlc3RCbG9jay5pZCA9IFwicXVuaXQtdGVzdC1vdXRwdXQtXCIgKyB0ZXN0SWQ7XG5cbiAgXHRcdGFzc2VydExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gIFx0XHRhc3NlcnRMaXN0LmNsYXNzTmFtZSA9IFwicXVuaXQtYXNzZXJ0LWxpc3RcIjtcblxuICBcdFx0dGVzdEJsb2NrLmFwcGVuZENoaWxkKGFzc2VydExpc3QpO1xuXG4gIFx0XHR0ZXN0cy5hcHBlbmRDaGlsZCh0ZXN0QmxvY2spO1xuICBcdH1cblxuICBcdC8vIEhUTUwgUmVwb3J0ZXIgaW5pdGlhbGl6YXRpb24gYW5kIGxvYWRcbiAgXHRRVW5pdC5iZWdpbihmdW5jdGlvbiAoZGV0YWlscykge1xuICBcdFx0dmFyIGksIG1vZHVsZU9iajtcblxuICBcdFx0Ly8gU29ydCBtb2R1bGVzIGJ5IG5hbWUgZm9yIHRoZSBwaWNrZXJcbiAgXHRcdGZvciAoaSA9IDA7IGkgPCBkZXRhaWxzLm1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0bW9kdWxlT2JqID0gZGV0YWlscy5tb2R1bGVzW2ldO1xuICBcdFx0XHRpZiAobW9kdWxlT2JqLm5hbWUpIHtcbiAgXHRcdFx0XHRtb2R1bGVzTGlzdC5wdXNoKG1vZHVsZU9iai5uYW1lKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0bW9kdWxlc0xpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICBcdFx0XHRyZXR1cm4gYS5sb2NhbGVDb21wYXJlKGIpO1xuICBcdFx0fSk7XG5cbiAgXHRcdC8vIEluaXRpYWxpemUgUVVuaXQgZWxlbWVudHNcbiAgXHRcdGFwcGVuZEludGVyZmFjZSgpO1xuICBcdH0pO1xuXG4gIFx0UVVuaXQuZG9uZShmdW5jdGlvbiAoZGV0YWlscykge1xuICBcdFx0dmFyIGJhbm5lciA9IGlkKFwicXVuaXQtYmFubmVyXCIpLFxuICBcdFx0ICAgIHRlc3RzID0gaWQoXCJxdW5pdC10ZXN0c1wiKSxcbiAgXHRcdCAgICBhYm9ydEJ1dHRvbiA9IGlkKFwicXVuaXQtYWJvcnQtdGVzdHMtYnV0dG9uXCIpLFxuICBcdFx0ICAgIHRvdGFsVGVzdHMgPSBzdGF0cy5wYXNzZWRUZXN0cyArIHN0YXRzLnNraXBwZWRUZXN0cyArIHN0YXRzLnRvZG9UZXN0cyArIHN0YXRzLmZhaWxlZFRlc3RzLFxuICBcdFx0ICAgIGh0bWwgPSBbdG90YWxUZXN0cywgXCIgdGVzdHMgY29tcGxldGVkIGluIFwiLCBkZXRhaWxzLnJ1bnRpbWUsIFwiIG1pbGxpc2Vjb25kcywgd2l0aCBcIiwgc3RhdHMuZmFpbGVkVGVzdHMsIFwiIGZhaWxlZCwgXCIsIHN0YXRzLnNraXBwZWRUZXN0cywgXCIgc2tpcHBlZCwgYW5kIFwiLCBzdGF0cy50b2RvVGVzdHMsIFwiIHRvZG8uPGJyIC8+XCIsIFwiPHNwYW4gY2xhc3M9J3Bhc3NlZCc+XCIsIGRldGFpbHMucGFzc2VkLCBcIjwvc3Bhbj4gYXNzZXJ0aW9ucyBvZiA8c3BhbiBjbGFzcz0ndG90YWwnPlwiLCBkZXRhaWxzLnRvdGFsLCBcIjwvc3Bhbj4gcGFzc2VkLCA8c3BhbiBjbGFzcz0nZmFpbGVkJz5cIiwgZGV0YWlscy5mYWlsZWQsIFwiPC9zcGFuPiBmYWlsZWQuXCJdLmpvaW4oXCJcIiksXG4gIFx0XHQgICAgdGVzdCQkMSxcbiAgXHRcdCAgICBhc3NlcnRMaSxcbiAgXHRcdCAgICBhc3NlcnRMaXN0O1xuXG4gIFx0XHQvLyBVcGRhdGUgcmVtYWluaW5nIHRlc3RzIHRvIGFib3J0ZWRcbiAgXHRcdGlmIChhYm9ydEJ1dHRvbiAmJiBhYm9ydEJ1dHRvbi5kaXNhYmxlZCkge1xuICBcdFx0XHRodG1sID0gXCJUZXN0cyBhYm9ydGVkIGFmdGVyIFwiICsgZGV0YWlscy5ydW50aW1lICsgXCIgbWlsbGlzZWNvbmRzLlwiO1xuXG4gIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGVzdHMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0XHR0ZXN0JCQxID0gdGVzdHMuY2hpbGRyZW5baV07XG4gIFx0XHRcdFx0aWYgKHRlc3QkJDEuY2xhc3NOYW1lID09PSBcIlwiIHx8IHRlc3QkJDEuY2xhc3NOYW1lID09PSBcInJ1bm5pbmdcIikge1xuICBcdFx0XHRcdFx0dGVzdCQkMS5jbGFzc05hbWUgPSBcImFib3J0ZWRcIjtcbiAgXHRcdFx0XHRcdGFzc2VydExpc3QgPSB0ZXN0JCQxLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib2xcIilbMF07XG4gIFx0XHRcdFx0XHRhc3NlcnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgXHRcdFx0XHRcdGFzc2VydExpLmNsYXNzTmFtZSA9IFwiZmFpbFwiO1xuICBcdFx0XHRcdFx0YXNzZXJ0TGkuaW5uZXJIVE1MID0gXCJUZXN0IGFib3J0ZWQuXCI7XG4gIFx0XHRcdFx0XHRhc3NlcnRMaXN0LmFwcGVuZENoaWxkKGFzc2VydExpKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0aWYgKGJhbm5lciAmJiAoIWFib3J0QnV0dG9uIHx8IGFib3J0QnV0dG9uLmRpc2FibGVkID09PSBmYWxzZSkpIHtcbiAgXHRcdFx0YmFubmVyLmNsYXNzTmFtZSA9IHN0YXRzLmZhaWxlZFRlc3RzID8gXCJxdW5pdC1mYWlsXCIgOiBcInF1bml0LXBhc3NcIjtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGFib3J0QnV0dG9uKSB7XG4gIFx0XHRcdGFib3J0QnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWJvcnRCdXR0b24pO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAodGVzdHMpIHtcbiAgXHRcdFx0aWQoXCJxdW5pdC10ZXN0cmVzdWx0LWRpc3BsYXlcIikuaW5uZXJIVE1MID0gaHRtbDtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNvbmZpZy5hbHRlcnRpdGxlICYmIGRvY3VtZW50LnRpdGxlKSB7XG5cbiAgXHRcdFx0Ly8gU2hvdyDinJYgZm9yIGdvb2QsIOKclCBmb3IgYmFkIHN1aXRlIHJlc3VsdCBpbiB0aXRsZVxuICBcdFx0XHQvLyB1c2UgZXNjYXBlIHNlcXVlbmNlcyBpbiBjYXNlIGZpbGUgZ2V0cyBsb2FkZWQgd2l0aCBub24tdXRmLThcbiAgXHRcdFx0Ly8gY2hhcnNldFxuICBcdFx0XHRkb2N1bWVudC50aXRsZSA9IFtzdGF0cy5mYWlsZWRUZXN0cyA/IFwiXFx1MjcxNlwiIDogXCJcXHUyNzE0XCIsIGRvY3VtZW50LnRpdGxlLnJlcGxhY2UoL15bXFx1MjcxNFxcdTI3MTZdIC9pLCBcIlwiKV0uam9pbihcIiBcIik7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFNjcm9sbCBiYWNrIHRvIHRvcCB0byBzaG93IHJlc3VsdHNcbiAgXHRcdGlmIChjb25maWcuc2Nyb2xsdG9wICYmIHdpbmRvdyQxLnNjcm9sbFRvKSB7XG4gIFx0XHRcdHdpbmRvdyQxLnNjcm9sbFRvKDAsIDApO1xuICBcdFx0fVxuICBcdH0pO1xuXG4gIFx0ZnVuY3Rpb24gZ2V0TmFtZUh0bWwobmFtZSwgbW9kdWxlKSB7XG4gIFx0XHR2YXIgbmFtZUh0bWwgPSBcIlwiO1xuXG4gIFx0XHRpZiAobW9kdWxlKSB7XG4gIFx0XHRcdG5hbWVIdG1sID0gXCI8c3BhbiBjbGFzcz0nbW9kdWxlLW5hbWUnPlwiICsgZXNjYXBlVGV4dChtb2R1bGUpICsgXCI8L3NwYW4+OiBcIjtcbiAgXHRcdH1cblxuICBcdFx0bmFtZUh0bWwgKz0gXCI8c3BhbiBjbGFzcz0ndGVzdC1uYW1lJz5cIiArIGVzY2FwZVRleHQobmFtZSkgKyBcIjwvc3Bhbj5cIjtcblxuICBcdFx0cmV0dXJuIG5hbWVIdG1sO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGdldFByb2dyZXNzSHRtbChydW50aW1lLCBzdGF0cywgdG90YWwpIHtcbiAgXHRcdHZhciBjb21wbGV0ZWQgPSBzdGF0cy5wYXNzZWRUZXN0cyArIHN0YXRzLnNraXBwZWRUZXN0cyArIHN0YXRzLnRvZG9UZXN0cyArIHN0YXRzLmZhaWxlZFRlc3RzO1xuXG4gIFx0XHRyZXR1cm4gW1wiPGJyIC8+XCIsIGNvbXBsZXRlZCwgXCIgLyBcIiwgdG90YWwsIFwiIHRlc3RzIGNvbXBsZXRlZCBpbiBcIiwgcnVudGltZSwgXCIgbWlsbGlzZWNvbmRzLCB3aXRoIFwiLCBzdGF0cy5mYWlsZWRUZXN0cywgXCIgZmFpbGVkLCBcIiwgc3RhdHMuc2tpcHBlZFRlc3RzLCBcIiBza2lwcGVkLCBhbmQgXCIsIHN0YXRzLnRvZG9UZXN0cywgXCIgdG9kby5cIl0uam9pbihcIlwiKTtcbiAgXHR9XG5cbiAgXHRRVW5pdC50ZXN0U3RhcnQoZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgXHRcdHZhciBydW5uaW5nLCBiYWQ7XG5cbiAgXHRcdGFwcGVuZFRlc3QoZGV0YWlscy5uYW1lLCBkZXRhaWxzLnRlc3RJZCwgZGV0YWlscy5tb2R1bGUpO1xuXG4gIFx0XHRydW5uaW5nID0gaWQoXCJxdW5pdC10ZXN0cmVzdWx0LWRpc3BsYXlcIik7XG5cbiAgXHRcdGlmIChydW5uaW5nKSB7XG4gIFx0XHRcdGFkZENsYXNzKHJ1bm5pbmcsIFwicnVubmluZ1wiKTtcblxuICBcdFx0XHRiYWQgPSBRVW5pdC5jb25maWcucmVvcmRlciAmJiBkZXRhaWxzLnByZXZpb3VzRmFpbHVyZTtcblxuICBcdFx0XHRydW5uaW5nLmlubmVySFRNTCA9IFtiYWQgPyBcIlJlcnVubmluZyBwcmV2aW91c2x5IGZhaWxlZCB0ZXN0OiA8YnIgLz5cIiA6IFwiUnVubmluZzogPGJyIC8+XCIsIGdldE5hbWVIdG1sKGRldGFpbHMubmFtZSwgZGV0YWlscy5tb2R1bGUpLCBnZXRQcm9ncmVzc0h0bWwobm93KCkgLSBjb25maWcuc3RhcnRlZCwgc3RhdHMsIFRlc3QuY291bnQpXS5qb2luKFwiXCIpO1xuICBcdFx0fVxuICBcdH0pO1xuXG4gIFx0ZnVuY3Rpb24gc3RyaXBIdG1sKHN0cmluZykge1xuXG4gIFx0XHQvLyBTdHJpcCB0YWdzLCBodG1sIGVudGl0eSBhbmQgd2hpdGVzcGFjZXNcbiAgXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgvPFxcLz9bXj5dKyg+fCQpL2csIFwiXCIpLnJlcGxhY2UoLyZxdW90Oy9nLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xuICBcdH1cblxuICBcdFFVbml0LmxvZyhmdW5jdGlvbiAoZGV0YWlscykge1xuICBcdFx0dmFyIGFzc2VydExpc3QsXG4gIFx0XHQgICAgYXNzZXJ0TGksXG4gIFx0XHQgICAgbWVzc2FnZSxcbiAgXHRcdCAgICBleHBlY3RlZCxcbiAgXHRcdCAgICBhY3R1YWwsXG4gIFx0XHQgICAgZGlmZiQkMSxcbiAgXHRcdCAgICBzaG93RGlmZiA9IGZhbHNlLFxuICBcdFx0ICAgIHRlc3RJdGVtID0gaWQoXCJxdW5pdC10ZXN0LW91dHB1dC1cIiArIGRldGFpbHMudGVzdElkKTtcblxuICBcdFx0aWYgKCF0ZXN0SXRlbSkge1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdG1lc3NhZ2UgPSBlc2NhcGVUZXh0KGRldGFpbHMubWVzc2FnZSkgfHwgKGRldGFpbHMucmVzdWx0ID8gXCJva2F5XCIgOiBcImZhaWxlZFwiKTtcbiAgXHRcdG1lc3NhZ2UgPSBcIjxzcGFuIGNsYXNzPSd0ZXN0LW1lc3NhZ2UnPlwiICsgbWVzc2FnZSArIFwiPC9zcGFuPlwiO1xuICBcdFx0bWVzc2FnZSArPSBcIjxzcGFuIGNsYXNzPSdydW50aW1lJz5AIFwiICsgZGV0YWlscy5ydW50aW1lICsgXCIgbXM8L3NwYW4+XCI7XG5cbiAgXHRcdC8vIFRoZSBwdXNoRmFpbHVyZSBkb2Vzbid0IHByb3ZpZGUgZGV0YWlscy5leHBlY3RlZFxuICBcdFx0Ly8gd2hlbiBpdCBjYWxscywgaXQncyBpbXBsaWNpdCB0byBhbHNvIG5vdCBzaG93IGV4cGVjdGVkIGFuZCBkaWZmIHN0dWZmXG4gIFx0XHQvLyBBbHNvLCB3ZSBuZWVkIHRvIGNoZWNrIGRldGFpbHMuZXhwZWN0ZWQgZXhpc3RlbmNlLCBhcyBpdCBjYW4gZXhpc3QgYW5kIGJlIHVuZGVmaW5lZFxuICBcdFx0aWYgKCFkZXRhaWxzLnJlc3VsdCAmJiBoYXNPd24kJDEuY2FsbChkZXRhaWxzLCBcImV4cGVjdGVkXCIpKSB7XG4gIFx0XHRcdGlmIChkZXRhaWxzLm5lZ2F0aXZlKSB7XG4gIFx0XHRcdFx0ZXhwZWN0ZWQgPSBcIk5PVCBcIiArIFFVbml0LmR1bXAucGFyc2UoZGV0YWlscy5leHBlY3RlZCk7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0ZXhwZWN0ZWQgPSBRVW5pdC5kdW1wLnBhcnNlKGRldGFpbHMuZXhwZWN0ZWQpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0YWN0dWFsID0gUVVuaXQuZHVtcC5wYXJzZShkZXRhaWxzLmFjdHVhbCk7XG4gIFx0XHRcdG1lc3NhZ2UgKz0gXCI8dGFibGU+PHRyIGNsYXNzPSd0ZXN0LWV4cGVjdGVkJz48dGg+RXhwZWN0ZWQ6IDwvdGg+PHRkPjxwcmU+XCIgKyBlc2NhcGVUZXh0KGV4cGVjdGVkKSArIFwiPC9wcmU+PC90ZD48L3RyPlwiO1xuXG4gIFx0XHRcdGlmIChhY3R1YWwgIT09IGV4cGVjdGVkKSB7XG5cbiAgXHRcdFx0XHRtZXNzYWdlICs9IFwiPHRyIGNsYXNzPSd0ZXN0LWFjdHVhbCc+PHRoPlJlc3VsdDogPC90aD48dGQ+PHByZT5cIiArIGVzY2FwZVRleHQoYWN0dWFsKSArIFwiPC9wcmU+PC90ZD48L3RyPlwiO1xuXG4gIFx0XHRcdFx0aWYgKHR5cGVvZiBkZXRhaWxzLmFjdHVhbCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgZGV0YWlscy5leHBlY3RlZCA9PT0gXCJudW1iZXJcIikge1xuICBcdFx0XHRcdFx0aWYgKCFpc05hTihkZXRhaWxzLmFjdHVhbCkgJiYgIWlzTmFOKGRldGFpbHMuZXhwZWN0ZWQpKSB7XG4gIFx0XHRcdFx0XHRcdHNob3dEaWZmID0gdHJ1ZTtcbiAgXHRcdFx0XHRcdFx0ZGlmZiQkMSA9IGRldGFpbHMuYWN0dWFsIC0gZGV0YWlscy5leHBlY3RlZDtcbiAgXHRcdFx0XHRcdFx0ZGlmZiQkMSA9IChkaWZmJCQxID4gMCA/IFwiK1wiIDogXCJcIikgKyBkaWZmJCQxO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGRldGFpbHMuYWN0dWFsICE9PSBcImJvb2xlYW5cIiAmJiB0eXBlb2YgZGV0YWlscy5leHBlY3RlZCAhPT0gXCJib29sZWFuXCIpIHtcbiAgXHRcdFx0XHRcdGRpZmYkJDEgPSBRVW5pdC5kaWZmKGV4cGVjdGVkLCBhY3R1YWwpO1xuXG4gIFx0XHRcdFx0XHQvLyBkb24ndCBzaG93IGRpZmYgaWYgdGhlcmUgaXMgemVybyBvdmVybGFwXG4gIFx0XHRcdFx0XHRzaG93RGlmZiA9IHN0cmlwSHRtbChkaWZmJCQxKS5sZW5ndGggIT09IHN0cmlwSHRtbChleHBlY3RlZCkubGVuZ3RoICsgc3RyaXBIdG1sKGFjdHVhbCkubGVuZ3RoO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdGlmIChzaG93RGlmZikge1xuICBcdFx0XHRcdFx0bWVzc2FnZSArPSBcIjx0ciBjbGFzcz0ndGVzdC1kaWZmJz48dGg+RGlmZjogPC90aD48dGQ+PHByZT5cIiArIGRpZmYkJDEgKyBcIjwvcHJlPjwvdGQ+PC90cj5cIjtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH0gZWxzZSBpZiAoZXhwZWN0ZWQuaW5kZXhPZihcIltvYmplY3QgQXJyYXldXCIpICE9PSAtMSB8fCBleHBlY3RlZC5pbmRleE9mKFwiW29iamVjdCBPYmplY3RdXCIpICE9PSAtMSkge1xuICBcdFx0XHRcdG1lc3NhZ2UgKz0gXCI8dHIgY2xhc3M9J3Rlc3QtbWVzc2FnZSc+PHRoPk1lc3NhZ2U6IDwvdGg+PHRkPlwiICsgXCJEaWZmIHN1cHByZXNzZWQgYXMgdGhlIGRlcHRoIG9mIG9iamVjdCBpcyBtb3JlIHRoYW4gY3VycmVudCBtYXggZGVwdGggKFwiICsgUVVuaXQuY29uZmlnLm1heERlcHRoICsgXCIpLjxwPkhpbnQ6IFVzZSA8Y29kZT5RVW5pdC5kdW1wLm1heERlcHRoPC9jb2RlPiB0byBcIiArIFwiIHJ1biB3aXRoIGEgaGlnaGVyIG1heCBkZXB0aCBvciA8YSBocmVmPSdcIiArIGVzY2FwZVRleHQoc2V0VXJsKHsgbWF4RGVwdGg6IC0xIH0pKSArIFwiJz5cIiArIFwiUmVydW48L2E+IHdpdGhvdXQgbWF4IGRlcHRoLjwvcD48L3RkPjwvdHI+XCI7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0bWVzc2FnZSArPSBcIjx0ciBjbGFzcz0ndGVzdC1tZXNzYWdlJz48dGg+TWVzc2FnZTogPC90aD48dGQ+XCIgKyBcIkRpZmYgc3VwcHJlc3NlZCBhcyB0aGUgZXhwZWN0ZWQgYW5kIGFjdHVhbCByZXN1bHRzIGhhdmUgYW4gZXF1aXZhbGVudFwiICsgXCIgc2VyaWFsaXphdGlvbjwvdGQ+PC90cj5cIjtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGlmIChkZXRhaWxzLnNvdXJjZSkge1xuICBcdFx0XHRcdG1lc3NhZ2UgKz0gXCI8dHIgY2xhc3M9J3Rlc3Qtc291cmNlJz48dGg+U291cmNlOiA8L3RoPjx0ZD48cHJlPlwiICsgZXNjYXBlVGV4dChkZXRhaWxzLnNvdXJjZSkgKyBcIjwvcHJlPjwvdGQ+PC90cj5cIjtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdG1lc3NhZ2UgKz0gXCI8L3RhYmxlPlwiO1xuXG4gIFx0XHRcdC8vIFRoaXMgb2NjdXJzIHdoZW4gcHVzaEZhaWx1cmUgaXMgc2V0IGFuZCB3ZSBoYXZlIGFuIGV4dHJhY3RlZCBzdGFjayB0cmFjZVxuICBcdFx0fSBlbHNlIGlmICghZGV0YWlscy5yZXN1bHQgJiYgZGV0YWlscy5zb3VyY2UpIHtcbiAgXHRcdFx0bWVzc2FnZSArPSBcIjx0YWJsZT5cIiArIFwiPHRyIGNsYXNzPSd0ZXN0LXNvdXJjZSc+PHRoPlNvdXJjZTogPC90aD48dGQ+PHByZT5cIiArIGVzY2FwZVRleHQoZGV0YWlscy5zb3VyY2UpICsgXCI8L3ByZT48L3RkPjwvdHI+XCIgKyBcIjwvdGFibGU+XCI7XG4gIFx0XHR9XG5cbiAgXHRcdGFzc2VydExpc3QgPSB0ZXN0SXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9sXCIpWzBdO1xuXG4gIFx0XHRhc3NlcnRMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgXHRcdGFzc2VydExpLmNsYXNzTmFtZSA9IGRldGFpbHMucmVzdWx0ID8gXCJwYXNzXCIgOiBcImZhaWxcIjtcbiAgXHRcdGFzc2VydExpLmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gIFx0XHRhc3NlcnRMaXN0LmFwcGVuZENoaWxkKGFzc2VydExpKTtcbiAgXHR9KTtcblxuICBcdFFVbml0LnRlc3REb25lKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gIFx0XHR2YXIgdGVzdFRpdGxlLFxuICBcdFx0ICAgIHRpbWUsXG4gIFx0XHQgICAgdGVzdEl0ZW0sXG4gIFx0XHQgICAgYXNzZXJ0TGlzdCxcbiAgXHRcdCAgICBzdGF0dXMsXG4gIFx0XHQgICAgZ29vZCxcbiAgXHRcdCAgICBiYWQsXG4gIFx0XHQgICAgdGVzdENvdW50cyxcbiAgXHRcdCAgICBza2lwcGVkLFxuICBcdFx0ICAgIHNvdXJjZU5hbWUsXG4gIFx0XHQgICAgdGVzdHMgPSBpZChcInF1bml0LXRlc3RzXCIpO1xuXG4gIFx0XHRpZiAoIXRlc3RzKSB7XG4gIFx0XHRcdHJldHVybjtcbiAgXHRcdH1cblxuICBcdFx0dGVzdEl0ZW0gPSBpZChcInF1bml0LXRlc3Qtb3V0cHV0LVwiICsgZGV0YWlscy50ZXN0SWQpO1xuXG4gIFx0XHRyZW1vdmVDbGFzcyh0ZXN0SXRlbSwgXCJydW5uaW5nXCIpO1xuXG4gIFx0XHRpZiAoZGV0YWlscy5mYWlsZWQgPiAwKSB7XG4gIFx0XHRcdHN0YXR1cyA9IFwiZmFpbGVkXCI7XG4gIFx0XHR9IGVsc2UgaWYgKGRldGFpbHMudG9kbykge1xuICBcdFx0XHRzdGF0dXMgPSBcInRvZG9cIjtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHN0YXR1cyA9IGRldGFpbHMuc2tpcHBlZCA/IFwic2tpcHBlZFwiIDogXCJwYXNzZWRcIjtcbiAgXHRcdH1cblxuICBcdFx0YXNzZXJ0TGlzdCA9IHRlc3RJdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib2xcIilbMF07XG5cbiAgXHRcdGdvb2QgPSBkZXRhaWxzLnBhc3NlZDtcbiAgXHRcdGJhZCA9IGRldGFpbHMuZmFpbGVkO1xuXG4gIFx0XHQvLyBUaGlzIHRlc3QgcGFzc2VkIGlmIGl0IGhhcyBubyB1bmV4cGVjdGVkIGZhaWxlZCBhc3NlcnRpb25zXG4gIFx0XHR2YXIgdGVzdFBhc3NlZCA9IGRldGFpbHMuZmFpbGVkID4gMCA/IGRldGFpbHMudG9kbyA6ICFkZXRhaWxzLnRvZG87XG5cbiAgXHRcdGlmICh0ZXN0UGFzc2VkKSB7XG5cbiAgXHRcdFx0Ly8gQ29sbGFwc2UgdGhlIHBhc3NpbmcgdGVzdHNcbiAgXHRcdFx0YWRkQ2xhc3MoYXNzZXJ0TGlzdCwgXCJxdW5pdC1jb2xsYXBzZWRcIik7XG4gIFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5jb2xsYXBzZSkge1xuICBcdFx0XHRpZiAoIWNvbGxhcHNlTmV4dCkge1xuXG4gIFx0XHRcdFx0Ly8gU2tpcCBjb2xsYXBzaW5nIHRoZSBmaXJzdCBmYWlsaW5nIHRlc3RcbiAgXHRcdFx0XHRjb2xsYXBzZU5leHQgPSB0cnVlO1xuICBcdFx0XHR9IGVsc2Uge1xuXG4gIFx0XHRcdFx0Ly8gQ29sbGFwc2UgcmVtYWluaW5nIHRlc3RzXG4gIFx0XHRcdFx0YWRkQ2xhc3MoYXNzZXJ0TGlzdCwgXCJxdW5pdC1jb2xsYXBzZWRcIik7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gVGhlIHRlc3RJdGVtLmZpcnN0Q2hpbGQgaXMgdGhlIHRlc3QgbmFtZVxuICBcdFx0dGVzdFRpdGxlID0gdGVzdEl0ZW0uZmlyc3RDaGlsZDtcblxuICBcdFx0dGVzdENvdW50cyA9IGJhZCA/IFwiPGIgY2xhc3M9J2ZhaWxlZCc+XCIgKyBiYWQgKyBcIjwvYj4sIFwiICsgXCI8YiBjbGFzcz0ncGFzc2VkJz5cIiArIGdvb2QgKyBcIjwvYj4sIFwiIDogXCJcIjtcblxuICBcdFx0dGVzdFRpdGxlLmlubmVySFRNTCArPSBcIiA8YiBjbGFzcz0nY291bnRzJz4oXCIgKyB0ZXN0Q291bnRzICsgZGV0YWlscy5hc3NlcnRpb25zLmxlbmd0aCArIFwiKTwvYj5cIjtcblxuICBcdFx0aWYgKGRldGFpbHMuc2tpcHBlZCkge1xuICBcdFx0XHRzdGF0cy5za2lwcGVkVGVzdHMrKztcblxuICBcdFx0XHR0ZXN0SXRlbS5jbGFzc05hbWUgPSBcInNraXBwZWRcIjtcbiAgXHRcdFx0c2tpcHBlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJlbVwiKTtcbiAgXHRcdFx0c2tpcHBlZC5jbGFzc05hbWUgPSBcInF1bml0LXNraXBwZWQtbGFiZWxcIjtcbiAgXHRcdFx0c2tpcHBlZC5pbm5lckhUTUwgPSBcInNraXBwZWRcIjtcbiAgXHRcdFx0dGVzdEl0ZW0uaW5zZXJ0QmVmb3JlKHNraXBwZWQsIHRlc3RUaXRsZSk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRhZGRFdmVudCh0ZXN0VGl0bGUsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdHRvZ2dsZUNsYXNzKGFzc2VydExpc3QsIFwicXVuaXQtY29sbGFwc2VkXCIpO1xuICBcdFx0XHR9KTtcblxuICBcdFx0XHR0ZXN0SXRlbS5jbGFzc05hbWUgPSB0ZXN0UGFzc2VkID8gXCJwYXNzXCIgOiBcImZhaWxcIjtcblxuICBcdFx0XHRpZiAoZGV0YWlscy50b2RvKSB7XG4gIFx0XHRcdFx0dmFyIHRvZG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJlbVwiKTtcbiAgXHRcdFx0XHR0b2RvTGFiZWwuY2xhc3NOYW1lID0gXCJxdW5pdC10b2RvLWxhYmVsXCI7XG4gIFx0XHRcdFx0dG9kb0xhYmVsLmlubmVySFRNTCA9IFwidG9kb1wiO1xuICBcdFx0XHRcdHRlc3RJdGVtLmNsYXNzTmFtZSArPSBcIiB0b2RvXCI7XG4gIFx0XHRcdFx0dGVzdEl0ZW0uaW5zZXJ0QmVmb3JlKHRvZG9MYWJlbCwgdGVzdFRpdGxlKTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgXHRcdFx0dGltZS5jbGFzc05hbWUgPSBcInJ1bnRpbWVcIjtcbiAgXHRcdFx0dGltZS5pbm5lckhUTUwgPSBkZXRhaWxzLnJ1bnRpbWUgKyBcIiBtc1wiO1xuICBcdFx0XHR0ZXN0SXRlbS5pbnNlcnRCZWZvcmUodGltZSwgYXNzZXJ0TGlzdCk7XG5cbiAgXHRcdFx0aWYgKCF0ZXN0UGFzc2VkKSB7XG4gIFx0XHRcdFx0c3RhdHMuZmFpbGVkVGVzdHMrKztcbiAgXHRcdFx0fSBlbHNlIGlmIChkZXRhaWxzLnRvZG8pIHtcbiAgXHRcdFx0XHRzdGF0cy50b2RvVGVzdHMrKztcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRzdGF0cy5wYXNzZWRUZXN0cysrO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFNob3cgdGhlIHNvdXJjZSBvZiB0aGUgdGVzdCB3aGVuIHNob3dpbmcgYXNzZXJ0aW9uc1xuICBcdFx0aWYgKGRldGFpbHMuc291cmNlKSB7XG4gIFx0XHRcdHNvdXJjZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgXHRcdFx0c291cmNlTmFtZS5pbm5lckhUTUwgPSBcIjxzdHJvbmc+U291cmNlOiA8L3N0cm9uZz5cIiArIGVzY2FwZVRleHQoZGV0YWlscy5zb3VyY2UpO1xuICBcdFx0XHRhZGRDbGFzcyhzb3VyY2VOYW1lLCBcInF1bml0LXNvdXJjZVwiKTtcbiAgXHRcdFx0aWYgKHRlc3RQYXNzZWQpIHtcbiAgXHRcdFx0XHRhZGRDbGFzcyhzb3VyY2VOYW1lLCBcInF1bml0LWNvbGxhcHNlZFwiKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRhZGRFdmVudCh0ZXN0VGl0bGUsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdHRvZ2dsZUNsYXNzKHNvdXJjZU5hbWUsIFwicXVuaXQtY29sbGFwc2VkXCIpO1xuICBcdFx0XHR9KTtcbiAgXHRcdFx0dGVzdEl0ZW0uYXBwZW5kQ2hpbGQoc291cmNlTmFtZSk7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb25maWcuaGlkZXBhc3NlZCAmJiBzdGF0dXMgPT09IFwicGFzc2VkXCIpIHtcblxuICBcdFx0XHQvLyB1c2UgcmVtb3ZlQ2hpbGQgaW5zdGVhZCBvZiByZW1vdmUgYmVjYXVzZSBvZiBzdXBwb3J0XG4gIFx0XHRcdGhpZGRlblRlc3RzLnB1c2godGVzdEl0ZW0pO1xuXG4gIFx0XHRcdHRlc3RzLnJlbW92ZUNoaWxkKHRlc3RJdGVtKTtcbiAgXHRcdH1cbiAgXHR9KTtcblxuICBcdC8vIEF2b2lkIHJlYWR5U3RhdGUgaXNzdWUgd2l0aCBwaGFudG9tanNcbiAgXHQvLyBSZWY6ICM4MThcbiAgXHR2YXIgbm90UGhhbnRvbSA9IGZ1bmN0aW9uIChwKSB7XG4gIFx0XHRyZXR1cm4gIShwICYmIHAudmVyc2lvbiAmJiBwLnZlcnNpb24ubWFqb3IgPiAwKTtcbiAgXHR9KHdpbmRvdyQxLnBoYW50b20pO1xuXG4gIFx0aWYgKG5vdFBoYW50b20gJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gIFx0XHRRVW5pdC5sb2FkKCk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdGFkZEV2ZW50KHdpbmRvdyQxLCBcImxvYWRcIiwgUVVuaXQubG9hZCk7XG4gIFx0fVxuXG4gIFx0Ly8gV3JhcCB3aW5kb3cub25lcnJvci4gV2Ugd2lsbCBjYWxsIHRoZSBvcmlnaW5hbCB3aW5kb3cub25lcnJvciB0byBzZWUgaWZcbiAgXHQvLyB0aGUgZXhpc3RpbmcgaGFuZGxlciBmdWxseSBoYW5kbGVzIHRoZSBlcnJvcjsgaWYgbm90LCB3ZSB3aWxsIGNhbGwgdGhlXG4gIFx0Ly8gUVVuaXQub25FcnJvciBmdW5jdGlvbi5cbiAgXHR2YXIgb3JpZ2luYWxXaW5kb3dPbkVycm9yID0gd2luZG93JDEub25lcnJvcjtcblxuICBcdC8vIENvdmVyIHVuY2F1Z2h0IGV4Y2VwdGlvbnNcbiAgXHQvLyBSZXR1cm5pbmcgdHJ1ZSB3aWxsIHN1cHByZXNzIHRoZSBkZWZhdWx0IGJyb3dzZXIgaGFuZGxlcixcbiAgXHQvLyByZXR1cm5pbmcgZmFsc2Ugd2lsbCBsZXQgaXQgcnVuLlxuICBcdHdpbmRvdyQxLm9uZXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSwgZmlsZU5hbWUsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3JPYmopIHtcbiAgXHRcdHZhciByZXQgPSBmYWxzZTtcbiAgXHRcdGlmIChvcmlnaW5hbFdpbmRvd09uRXJyb3IpIHtcbiAgXHRcdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gIFx0XHRcdFx0YXJnc1tfa2V5IC0gNV0gPSBhcmd1bWVudHNbX2tleV07XG4gIFx0XHRcdH1cblxuICBcdFx0XHRyZXQgPSBvcmlnaW5hbFdpbmRvd09uRXJyb3IuY2FsbC5hcHBseShvcmlnaW5hbFdpbmRvd09uRXJyb3IsIFt0aGlzLCBtZXNzYWdlLCBmaWxlTmFtZSwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvck9ial0uY29uY2F0KGFyZ3MpKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gVHJlYXQgcmV0dXJuIHZhbHVlIGFzIHdpbmRvdy5vbmVycm9yIGl0c2VsZiBkb2VzLFxuICBcdFx0Ly8gT25seSBkbyBvdXIgaGFuZGxpbmcgaWYgbm90IHN1cHByZXNzZWQuXG4gIFx0XHRpZiAocmV0ICE9PSB0cnVlKSB7XG4gIFx0XHRcdHZhciBlcnJvciA9IHtcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuICBcdFx0XHRcdGZpbGVOYW1lOiBmaWxlTmFtZSxcbiAgXHRcdFx0XHRsaW5lTnVtYmVyOiBsaW5lTnVtYmVyXG4gIFx0XHRcdH07XG5cbiAgXHRcdFx0Ly8gQWNjb3JkaW5nIHRvXG4gIFx0XHRcdC8vIGh0dHBzOi8vYmxvZy5zZW50cnkuaW8vMjAxNi8wMS8wNC9jbGllbnQtamF2YXNjcmlwdC1yZXBvcnRpbmctd2luZG93LW9uZXJyb3IsXG4gIFx0XHRcdC8vIG1vc3QgbW9kZXJuIGJyb3dzZXJzIHN1cHBvcnQgYW4gZXJyb3JPYmogYXJndW1lbnQ7IHVzZSB0aGF0IHRvXG4gIFx0XHRcdC8vIGdldCBhIGZ1bGwgc3RhY2sgdHJhY2UgaWYgaXQncyBhdmFpbGFibGUuXG4gIFx0XHRcdGlmIChlcnJvck9iaiAmJiBlcnJvck9iai5zdGFjaykge1xuICBcdFx0XHRcdGVycm9yLnN0YWNrdHJhY2UgPSBleHRyYWN0U3RhY2t0cmFjZShlcnJvck9iaiwgMCk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRyZXQgPSBRVW5pdC5vbkVycm9yKGVycm9yKTtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIHJldDtcbiAgXHR9O1xuXG4gIFx0Ly8gTGlzdGVuIGZvciB1bmhhbmRsZWQgcmVqZWN0aW9ucywgYW5kIGNhbGwgUVVuaXQub25VbmhhbmRsZWRSZWplY3Rpb25cbiAgXHR3aW5kb3ckMS5hZGRFdmVudExpc3RlbmVyKFwidW5oYW5kbGVkcmVqZWN0aW9uXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBcdFx0UVVuaXQub25VbmhhbmRsZWRSZWplY3Rpb24oZXZlbnQucmVhc29uKTtcbiAgXHR9KTtcbiAgfSkoKTtcblxuICAvKlxuICAgKiBUaGlzIGZpbGUgaXMgYSBtb2RpZmllZCB2ZXJzaW9uIG9mIGdvb2dsZS1kaWZmLW1hdGNoLXBhdGNoJ3MgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvblxuICAgKiAoaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC9zb3VyY2UvYnJvd3NlL3RydW5rL2phdmFzY3JpcHQvZGlmZl9tYXRjaF9wYXRjaF91bmNvbXByZXNzZWQuanMpLFxuICAgKiBtb2RpZmljYXRpb25zIGFyZSBsaWNlbnNlZCBhcyBtb3JlIGZ1bGx5IHNldCBmb3J0aCBpbiBMSUNFTlNFLnR4dC5cbiAgICpcbiAgICogVGhlIG9yaWdpbmFsIHNvdXJjZSBvZiBnb29nbGUtZGlmZi1tYXRjaC1wYXRjaCBpcyBhdHRyaWJ1dGFibGUgYW5kIGxpY2Vuc2VkIGFzIGZvbGxvd3M6XG4gICAqXG4gICAqIENvcHlyaWdodCAyMDA2IEdvb2dsZSBJbmMuXG4gICAqIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gvXG4gICAqXG4gICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAqXG4gICAqIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgICpcbiAgICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAgKlxuICAgKiBNb3JlIEluZm86XG4gICAqICBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL1xuICAgKlxuICAgKiBVc2FnZTogUVVuaXQuZGlmZihleHBlY3RlZCwgYWN0dWFsKVxuICAgKlxuICAgKi9cbiAgUVVuaXQuZGlmZiA9IGZ1bmN0aW9uICgpIHtcbiAgXHRmdW5jdGlvbiBEaWZmTWF0Y2hQYXRjaCgpIHt9XG5cbiAgXHQvLyAgRElGRiBGVU5DVElPTlNcblxuICBcdC8qKlxuICAgICogVGhlIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhIGRpZmYgaXMgYW4gYXJyYXkgb2YgdHVwbGVzOlxuICAgICogW1tESUZGX0RFTEVURSwgJ0hlbGxvJ10sIFtESUZGX0lOU0VSVCwgJ0dvb2RieWUnXSwgW0RJRkZfRVFVQUwsICcgd29ybGQuJ11dXG4gICAgKiB3aGljaCBtZWFuczogZGVsZXRlICdIZWxsbycsIGFkZCAnR29vZGJ5ZScgYW5kIGtlZXAgJyB3b3JsZC4nXG4gICAgKi9cbiAgXHR2YXIgRElGRl9ERUxFVEUgPSAtMSxcbiAgXHQgICAgRElGRl9JTlNFUlQgPSAxLFxuICBcdCAgICBESUZGX0VRVUFMID0gMDtcblxuICBcdC8qKlxuICAgICogRmluZCB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0d28gdGV4dHMuICBTaW1wbGlmaWVzIHRoZSBwcm9ibGVtIGJ5IHN0cmlwcGluZ1xuICAgICogYW55IGNvbW1vbiBwcmVmaXggb3Igc3VmZml4IG9mZiB0aGUgdGV4dHMgYmVmb3JlIGRpZmZpbmcuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgT2xkIHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgTmV3IHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRDaGVja2xpbmVzIE9wdGlvbmFsIHNwZWVkdXAgZmxhZy4gSWYgcHJlc2VudCBhbmQgZmFsc2UsXG4gICAgKiAgICAgdGhlbiBkb24ndCBydW4gYSBsaW5lLWxldmVsIGRpZmYgZmlyc3QgdG8gaWRlbnRpZnkgdGhlIGNoYW5nZWQgYXJlYXMuXG4gICAgKiAgICAgRGVmYXVsdHMgdG8gdHJ1ZSwgd2hpY2ggZG9lcyBhIGZhc3Rlciwgc2xpZ2h0bHkgbGVzcyBvcHRpbWFsIGRpZmYuXG4gICAgKiBAcmV0dXJuIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuRGlmZk1haW4gPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyLCBvcHRDaGVja2xpbmVzKSB7XG4gIFx0XHR2YXIgZGVhZGxpbmUsIGNoZWNrbGluZXMsIGNvbW1vbmxlbmd0aCwgY29tbW9ucHJlZml4LCBjb21tb25zdWZmaXgsIGRpZmZzO1xuXG4gIFx0XHQvLyBUaGUgZGlmZiBtdXN0IGJlIGNvbXBsZXRlIGluIHVwIHRvIDEgc2Vjb25kLlxuICBcdFx0ZGVhZGxpbmUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDEwMDA7XG5cbiAgXHRcdC8vIENoZWNrIGZvciBudWxsIGlucHV0cy5cbiAgXHRcdGlmICh0ZXh0MSA9PT0gbnVsbCB8fCB0ZXh0MiA9PT0gbnVsbCkge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOdWxsIGlucHV0LiAoRGlmZk1haW4pXCIpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBDaGVjayBmb3IgZXF1YWxpdHkgKHNwZWVkdXApLlxuICBcdFx0aWYgKHRleHQxID09PSB0ZXh0Mikge1xuICBcdFx0XHRpZiAodGV4dDEpIHtcbiAgXHRcdFx0XHRyZXR1cm4gW1tESUZGX0VRVUFMLCB0ZXh0MV1dO1xuICBcdFx0XHR9XG4gIFx0XHRcdHJldHVybiBbXTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKHR5cGVvZiBvcHRDaGVja2xpbmVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIFx0XHRcdG9wdENoZWNrbGluZXMgPSB0cnVlO1xuICBcdFx0fVxuXG4gIFx0XHRjaGVja2xpbmVzID0gb3B0Q2hlY2tsaW5lcztcblxuICBcdFx0Ly8gVHJpbSBvZmYgY29tbW9uIHByZWZpeCAoc3BlZWR1cCkuXG4gIFx0XHRjb21tb25sZW5ndGggPSB0aGlzLmRpZmZDb21tb25QcmVmaXgodGV4dDEsIHRleHQyKTtcbiAgXHRcdGNvbW1vbnByZWZpeCA9IHRleHQxLnN1YnN0cmluZygwLCBjb21tb25sZW5ndGgpO1xuICBcdFx0dGV4dDEgPSB0ZXh0MS5zdWJzdHJpbmcoY29tbW9ubGVuZ3RoKTtcbiAgXHRcdHRleHQyID0gdGV4dDIuc3Vic3RyaW5nKGNvbW1vbmxlbmd0aCk7XG5cbiAgXHRcdC8vIFRyaW0gb2ZmIGNvbW1vbiBzdWZmaXggKHNwZWVkdXApLlxuICBcdFx0Y29tbW9ubGVuZ3RoID0gdGhpcy5kaWZmQ29tbW9uU3VmZml4KHRleHQxLCB0ZXh0Mik7XG4gIFx0XHRjb21tb25zdWZmaXggPSB0ZXh0MS5zdWJzdHJpbmcodGV4dDEubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKTtcbiAgXHRcdHRleHQxID0gdGV4dDEuc3Vic3RyaW5nKDAsIHRleHQxLmxlbmd0aCAtIGNvbW1vbmxlbmd0aCk7XG4gIFx0XHR0ZXh0MiA9IHRleHQyLnN1YnN0cmluZygwLCB0ZXh0Mi5sZW5ndGggLSBjb21tb25sZW5ndGgpO1xuXG4gIFx0XHQvLyBDb21wdXRlIHRoZSBkaWZmIG9uIHRoZSBtaWRkbGUgYmxvY2suXG4gIFx0XHRkaWZmcyA9IHRoaXMuZGlmZkNvbXB1dGUodGV4dDEsIHRleHQyLCBjaGVja2xpbmVzLCBkZWFkbGluZSk7XG5cbiAgXHRcdC8vIFJlc3RvcmUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICBcdFx0aWYgKGNvbW1vbnByZWZpeCkge1xuICBcdFx0XHRkaWZmcy51bnNoaWZ0KFtESUZGX0VRVUFMLCBjb21tb25wcmVmaXhdKTtcbiAgXHRcdH1cbiAgXHRcdGlmIChjb21tb25zdWZmaXgpIHtcbiAgXHRcdFx0ZGlmZnMucHVzaChbRElGRl9FUVVBTCwgY29tbW9uc3VmZml4XSk7XG4gIFx0XHR9XG4gIFx0XHR0aGlzLmRpZmZDbGVhbnVwTWVyZ2UoZGlmZnMpO1xuICBcdFx0cmV0dXJuIGRpZmZzO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIFJlZHVjZSB0aGUgbnVtYmVyIG9mIGVkaXRzIGJ5IGVsaW1pbmF0aW5nIG9wZXJhdGlvbmFsbHkgdHJpdmlhbCBlcXVhbGl0aWVzLlxuICAgICogQHBhcmFtIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gZGlmZnMgQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNsZWFudXBFZmZpY2llbmN5ID0gZnVuY3Rpb24gKGRpZmZzKSB7XG4gIFx0XHR2YXIgY2hhbmdlcywgZXF1YWxpdGllcywgZXF1YWxpdGllc0xlbmd0aCwgbGFzdGVxdWFsaXR5LCBwb2ludGVyLCBwcmVJbnMsIHByZURlbCwgcG9zdElucywgcG9zdERlbDtcbiAgXHRcdGNoYW5nZXMgPSBmYWxzZTtcbiAgXHRcdGVxdWFsaXRpZXMgPSBbXTsgLy8gU3RhY2sgb2YgaW5kaWNlcyB3aGVyZSBlcXVhbGl0aWVzIGFyZSBmb3VuZC5cbiAgXHRcdGVxdWFsaXRpZXNMZW5ndGggPSAwOyAvLyBLZWVwaW5nIG91ciBvd24gbGVuZ3RoIHZhciBpcyBmYXN0ZXIgaW4gSlMuXG4gIFx0XHQvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gIFx0XHRsYXN0ZXF1YWxpdHkgPSBudWxsO1xuXG4gIFx0XHQvLyBBbHdheXMgZXF1YWwgdG8gZGlmZnNbZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV1dWzFdXG4gIFx0XHRwb2ludGVyID0gMDsgLy8gSW5kZXggb2YgY3VycmVudCBwb3NpdGlvbi5cblxuICBcdFx0Ly8gSXMgdGhlcmUgYW4gaW5zZXJ0aW9uIG9wZXJhdGlvbiBiZWZvcmUgdGhlIGxhc3QgZXF1YWxpdHkuXG4gIFx0XHRwcmVJbnMgPSBmYWxzZTtcblxuICBcdFx0Ly8gSXMgdGhlcmUgYSBkZWxldGlvbiBvcGVyYXRpb24gYmVmb3JlIHRoZSBsYXN0IGVxdWFsaXR5LlxuICBcdFx0cHJlRGVsID0gZmFsc2U7XG5cbiAgXHRcdC8vIElzIHRoZXJlIGFuIGluc2VydGlvbiBvcGVyYXRpb24gYWZ0ZXIgdGhlIGxhc3QgZXF1YWxpdHkuXG4gIFx0XHRwb3N0SW5zID0gZmFsc2U7XG5cbiAgXHRcdC8vIElzIHRoZXJlIGEgZGVsZXRpb24gb3BlcmF0aW9uIGFmdGVyIHRoZSBsYXN0IGVxdWFsaXR5LlxuICBcdFx0cG9zdERlbCA9IGZhbHNlO1xuICBcdFx0d2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcblxuICBcdFx0XHQvLyBFcXVhbGl0eSBmb3VuZC5cbiAgXHRcdFx0aWYgKGRpZmZzW3BvaW50ZXJdWzBdID09PSBESUZGX0VRVUFMKSB7XG4gIFx0XHRcdFx0aWYgKGRpZmZzW3BvaW50ZXJdWzFdLmxlbmd0aCA8IDQgJiYgKHBvc3RJbnMgfHwgcG9zdERlbCkpIHtcblxuICBcdFx0XHRcdFx0Ly8gQ2FuZGlkYXRlIGZvdW5kLlxuICBcdFx0XHRcdFx0ZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoKytdID0gcG9pbnRlcjtcbiAgXHRcdFx0XHRcdHByZUlucyA9IHBvc3RJbnM7XG4gIFx0XHRcdFx0XHRwcmVEZWwgPSBwb3N0RGVsO1xuICBcdFx0XHRcdFx0bGFzdGVxdWFsaXR5ID0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0fSBlbHNlIHtcblxuICBcdFx0XHRcdFx0Ly8gTm90IGEgY2FuZGlkYXRlLCBhbmQgY2FuIG5ldmVyIGJlY29tZSBvbmUuXG4gIFx0XHRcdFx0XHRlcXVhbGl0aWVzTGVuZ3RoID0gMDtcbiAgXHRcdFx0XHRcdGxhc3RlcXVhbGl0eSA9IG51bGw7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHBvc3RJbnMgPSBwb3N0RGVsID0gZmFsc2U7XG5cbiAgXHRcdFx0XHQvLyBBbiBpbnNlcnRpb24gb3IgZGVsZXRpb24uXG4gIFx0XHRcdH0gZWxzZSB7XG5cbiAgXHRcdFx0XHRpZiAoZGlmZnNbcG9pbnRlcl1bMF0gPT09IERJRkZfREVMRVRFKSB7XG4gIFx0XHRcdFx0XHRwb3N0RGVsID0gdHJ1ZTtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0cG9zdElucyA9IHRydWU7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0LypcbiAgICAgICAqIEZpdmUgdHlwZXMgdG8gYmUgc3BsaXQ6XG4gICAgICAgKiA8aW5zPkE8L2lucz48ZGVsPkI8L2RlbD5YWTxpbnM+QzwvaW5zPjxkZWw+RDwvZGVsPlxuICAgICAgICogPGlucz5BPC9pbnM+WDxpbnM+QzwvaW5zPjxkZWw+RDwvZGVsPlxuICAgICAgICogPGlucz5BPC9pbnM+PGRlbD5CPC9kZWw+WDxpbnM+QzwvaW5zPlxuICAgICAgICogPGlucz5BPC9kZWw+WDxpbnM+QzwvaW5zPjxkZWw+RDwvZGVsPlxuICAgICAgICogPGlucz5BPC9pbnM+PGRlbD5CPC9kZWw+WDxkZWw+QzwvZGVsPlxuICAgICAgICovXG4gIFx0XHRcdFx0aWYgKGxhc3RlcXVhbGl0eSAmJiAocHJlSW5zICYmIHByZURlbCAmJiBwb3N0SW5zICYmIHBvc3REZWwgfHwgbGFzdGVxdWFsaXR5Lmxlbmd0aCA8IDIgJiYgcHJlSW5zICsgcHJlRGVsICsgcG9zdElucyArIHBvc3REZWwgPT09IDMpKSB7XG5cbiAgXHRcdFx0XHRcdC8vIER1cGxpY2F0ZSByZWNvcmQuXG4gIFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UoZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV0sIDAsIFtESUZGX0RFTEVURSwgbGFzdGVxdWFsaXR5XSk7XG5cbiAgXHRcdFx0XHRcdC8vIENoYW5nZSBzZWNvbmQgY29weSB0byBpbnNlcnQuXG4gIFx0XHRcdFx0XHRkaWZmc1tlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXSArIDFdWzBdID0gRElGRl9JTlNFUlQ7XG4gIFx0XHRcdFx0XHRlcXVhbGl0aWVzTGVuZ3RoLS07IC8vIFRocm93IGF3YXkgdGhlIGVxdWFsaXR5IHdlIGp1c3QgZGVsZXRlZDtcbiAgXHRcdFx0XHRcdGxhc3RlcXVhbGl0eSA9IG51bGw7XG4gIFx0XHRcdFx0XHRpZiAocHJlSW5zICYmIHByZURlbCkge1xuXG4gIFx0XHRcdFx0XHRcdC8vIE5vIGNoYW5nZXMgbWFkZSB3aGljaCBjb3VsZCBhZmZlY3QgcHJldmlvdXMgZW50cnksIGtlZXAgZ29pbmcuXG4gIFx0XHRcdFx0XHRcdHBvc3RJbnMgPSBwb3N0RGVsID0gdHJ1ZTtcbiAgXHRcdFx0XHRcdFx0ZXF1YWxpdGllc0xlbmd0aCA9IDA7XG4gIFx0XHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0XHRlcXVhbGl0aWVzTGVuZ3RoLS07IC8vIFRocm93IGF3YXkgdGhlIHByZXZpb3VzIGVxdWFsaXR5LlxuICBcdFx0XHRcdFx0XHRwb2ludGVyID0gZXF1YWxpdGllc0xlbmd0aCA+IDAgPyBlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXSA6IC0xO1xuICBcdFx0XHRcdFx0XHRwb3N0SW5zID0gcG9zdERlbCA9IGZhbHNlO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0Y2hhbmdlcyA9IHRydWU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNoYW5nZXMpIHtcbiAgXHRcdFx0dGhpcy5kaWZmQ2xlYW51cE1lcmdlKGRpZmZzKTtcbiAgXHRcdH1cbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBDb252ZXJ0IGEgZGlmZiBhcnJheSBpbnRvIGEgcHJldHR5IEhUTUwgcmVwb3J0LlxuICAgICogQHBhcmFtIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gZGlmZnMgQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKiBAcGFyYW0ge2ludGVnZXJ9IHN0cmluZyB0byBiZSBiZWF1dGlmaWVkLlxuICAgICogQHJldHVybiB7c3RyaW5nfSBIVE1MIHJlcHJlc2VudGF0aW9uLlxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZQcmV0dHlIdG1sID0gZnVuY3Rpb24gKGRpZmZzKSB7XG4gIFx0XHR2YXIgb3AsXG4gIFx0XHQgICAgZGF0YSxcbiAgXHRcdCAgICB4LFxuICBcdFx0ICAgIGh0bWwgPSBbXTtcbiAgXHRcdGZvciAoeCA9IDA7IHggPCBkaWZmcy5sZW5ndGg7IHgrKykge1xuICBcdFx0XHRvcCA9IGRpZmZzW3hdWzBdOyAvLyBPcGVyYXRpb24gKGluc2VydCwgZGVsZXRlLCBlcXVhbClcbiAgXHRcdFx0ZGF0YSA9IGRpZmZzW3hdWzFdOyAvLyBUZXh0IG9mIGNoYW5nZS5cbiAgXHRcdFx0c3dpdGNoIChvcCkge1xuICBcdFx0XHRcdGNhc2UgRElGRl9JTlNFUlQ6XG4gIFx0XHRcdFx0XHRodG1sW3hdID0gXCI8aW5zPlwiICsgZXNjYXBlVGV4dChkYXRhKSArIFwiPC9pbnM+XCI7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRjYXNlIERJRkZfREVMRVRFOlxuICBcdFx0XHRcdFx0aHRtbFt4XSA9IFwiPGRlbD5cIiArIGVzY2FwZVRleHQoZGF0YSkgKyBcIjwvZGVsPlwiO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0VRVUFMOlxuICBcdFx0XHRcdFx0aHRtbFt4XSA9IFwiPHNwYW4+XCIgKyBlc2NhcGVUZXh0KGRhdGEpICsgXCI8L3NwYW4+XCI7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0cmV0dXJuIGh0bWwuam9pbihcIlwiKTtcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBEZXRlcm1pbmUgdGhlIGNvbW1vbiBwcmVmaXggb2YgdHdvIHN0cmluZ3MuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgRmlyc3Qgc3RyaW5nLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIFNlY29uZCBzdHJpbmcuXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBjb21tb24gdG8gdGhlIHN0YXJ0IG9mIGVhY2hcbiAgICAqICAgICBzdHJpbmcuXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNvbW1vblByZWZpeCA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIpIHtcbiAgXHRcdHZhciBwb2ludGVybWlkLCBwb2ludGVybWF4LCBwb2ludGVybWluLCBwb2ludGVyc3RhcnQ7XG5cbiAgXHRcdC8vIFF1aWNrIGNoZWNrIGZvciBjb21tb24gbnVsbCBjYXNlcy5cbiAgXHRcdGlmICghdGV4dDEgfHwgIXRleHQyIHx8IHRleHQxLmNoYXJBdCgwKSAhPT0gdGV4dDIuY2hhckF0KDApKSB7XG4gIFx0XHRcdHJldHVybiAwO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBCaW5hcnkgc2VhcmNoLlxuICBcdFx0Ly8gUGVyZm9ybWFuY2UgYW5hbHlzaXM6IGh0dHBzOi8vbmVpbC5mcmFzZXIubmFtZS9uZXdzLzIwMDcvMTAvMDkvXG4gIFx0XHRwb2ludGVybWluID0gMDtcbiAgXHRcdHBvaW50ZXJtYXggPSBNYXRoLm1pbih0ZXh0MS5sZW5ndGgsIHRleHQyLmxlbmd0aCk7XG4gIFx0XHRwb2ludGVybWlkID0gcG9pbnRlcm1heDtcbiAgXHRcdHBvaW50ZXJzdGFydCA9IDA7XG4gIFx0XHR3aGlsZSAocG9pbnRlcm1pbiA8IHBvaW50ZXJtaWQpIHtcbiAgXHRcdFx0aWYgKHRleHQxLnN1YnN0cmluZyhwb2ludGVyc3RhcnQsIHBvaW50ZXJtaWQpID09PSB0ZXh0Mi5zdWJzdHJpbmcocG9pbnRlcnN0YXJ0LCBwb2ludGVybWlkKSkge1xuICBcdFx0XHRcdHBvaW50ZXJtaW4gPSBwb2ludGVybWlkO1xuICBcdFx0XHRcdHBvaW50ZXJzdGFydCA9IHBvaW50ZXJtaW47XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0cG9pbnRlcm1heCA9IHBvaW50ZXJtaWQ7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cG9pbnRlcm1pZCA9IE1hdGguZmxvb3IoKHBvaW50ZXJtYXggLSBwb2ludGVybWluKSAvIDIgKyBwb2ludGVybWluKTtcbiAgXHRcdH1cbiAgXHRcdHJldHVybiBwb2ludGVybWlkO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIERldGVybWluZSB0aGUgY29tbW9uIHN1ZmZpeCBvZiB0d28gc3RyaW5ncy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBGaXJzdCBzdHJpbmcuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgU2Vjb25kIHN0cmluZy5cbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbW1vbiB0byB0aGUgZW5kIG9mIGVhY2ggc3RyaW5nLlxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDb21tb25TdWZmaXggPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyKSB7XG4gIFx0XHR2YXIgcG9pbnRlcm1pZCwgcG9pbnRlcm1heCwgcG9pbnRlcm1pbiwgcG9pbnRlcmVuZDtcblxuICBcdFx0Ly8gUXVpY2sgY2hlY2sgZm9yIGNvbW1vbiBudWxsIGNhc2VzLlxuICBcdFx0aWYgKCF0ZXh0MSB8fCAhdGV4dDIgfHwgdGV4dDEuY2hhckF0KHRleHQxLmxlbmd0aCAtIDEpICE9PSB0ZXh0Mi5jaGFyQXQodGV4dDIubGVuZ3RoIC0gMSkpIHtcbiAgXHRcdFx0cmV0dXJuIDA7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEJpbmFyeSBzZWFyY2guXG4gIFx0XHQvLyBQZXJmb3JtYW5jZSBhbmFseXNpczogaHR0cHM6Ly9uZWlsLmZyYXNlci5uYW1lL25ld3MvMjAwNy8xMC8wOS9cbiAgXHRcdHBvaW50ZXJtaW4gPSAwO1xuICBcdFx0cG9pbnRlcm1heCA9IE1hdGgubWluKHRleHQxLmxlbmd0aCwgdGV4dDIubGVuZ3RoKTtcbiAgXHRcdHBvaW50ZXJtaWQgPSBwb2ludGVybWF4O1xuICBcdFx0cG9pbnRlcmVuZCA9IDA7XG4gIFx0XHR3aGlsZSAocG9pbnRlcm1pbiA8IHBvaW50ZXJtaWQpIHtcbiAgXHRcdFx0aWYgKHRleHQxLnN1YnN0cmluZyh0ZXh0MS5sZW5ndGggLSBwb2ludGVybWlkLCB0ZXh0MS5sZW5ndGggLSBwb2ludGVyZW5kKSA9PT0gdGV4dDIuc3Vic3RyaW5nKHRleHQyLmxlbmd0aCAtIHBvaW50ZXJtaWQsIHRleHQyLmxlbmd0aCAtIHBvaW50ZXJlbmQpKSB7XG4gIFx0XHRcdFx0cG9pbnRlcm1pbiA9IHBvaW50ZXJtaWQ7XG4gIFx0XHRcdFx0cG9pbnRlcmVuZCA9IHBvaW50ZXJtaW47XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0cG9pbnRlcm1heCA9IHBvaW50ZXJtaWQ7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cG9pbnRlcm1pZCA9IE1hdGguZmxvb3IoKHBvaW50ZXJtYXggLSBwb2ludGVybWluKSAvIDIgKyBwb2ludGVybWluKTtcbiAgXHRcdH1cbiAgXHRcdHJldHVybiBwb2ludGVybWlkO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIEZpbmQgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdHdvIHRleHRzLiAgQXNzdW1lcyB0aGF0IHRoZSB0ZXh0cyBkbyBub3RcbiAgICAqIGhhdmUgYW55IGNvbW1vbiBwcmVmaXggb3Igc3VmZml4LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIE9sZCBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIE5ldyBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtib29sZWFufSBjaGVja2xpbmVzIFNwZWVkdXAgZmxhZy4gIElmIGZhbHNlLCB0aGVuIGRvbid0IHJ1biBhXG4gICAgKiAgICAgbGluZS1sZXZlbCBkaWZmIGZpcnN0IHRvIGlkZW50aWZ5IHRoZSBjaGFuZ2VkIGFyZWFzLlxuICAgICogICAgIElmIHRydWUsIHRoZW4gcnVuIGEgZmFzdGVyLCBzbGlnaHRseSBsZXNzIG9wdGltYWwgZGlmZi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWFkbGluZSBUaW1lIHdoZW4gdGhlIGRpZmYgc2hvdWxkIGJlIGNvbXBsZXRlIGJ5LlxuICAgICogQHJldHVybiB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ29tcHV0ZSA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIsIGNoZWNrbGluZXMsIGRlYWRsaW5lKSB7XG4gIFx0XHR2YXIgZGlmZnMsIGxvbmd0ZXh0LCBzaG9ydHRleHQsIGksIGhtLCB0ZXh0MUEsIHRleHQyQSwgdGV4dDFCLCB0ZXh0MkIsIG1pZENvbW1vbiwgZGlmZnNBLCBkaWZmc0I7XG5cbiAgXHRcdGlmICghdGV4dDEpIHtcblxuICBcdFx0XHQvLyBKdXN0IGFkZCBzb21lIHRleHQgKHNwZWVkdXApLlxuICBcdFx0XHRyZXR1cm4gW1tESUZGX0lOU0VSVCwgdGV4dDJdXTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKCF0ZXh0Mikge1xuXG4gIFx0XHRcdC8vIEp1c3QgZGVsZXRlIHNvbWUgdGV4dCAoc3BlZWR1cCkuXG4gIFx0XHRcdHJldHVybiBbW0RJRkZfREVMRVRFLCB0ZXh0MV1dO1xuICBcdFx0fVxuXG4gIFx0XHRsb25ndGV4dCA9IHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCA/IHRleHQxIDogdGV4dDI7XG4gIFx0XHRzaG9ydHRleHQgPSB0ZXh0MS5sZW5ndGggPiB0ZXh0Mi5sZW5ndGggPyB0ZXh0MiA6IHRleHQxO1xuICBcdFx0aSA9IGxvbmd0ZXh0LmluZGV4T2Yoc2hvcnR0ZXh0KTtcbiAgXHRcdGlmIChpICE9PSAtMSkge1xuXG4gIFx0XHRcdC8vIFNob3J0ZXIgdGV4dCBpcyBpbnNpZGUgdGhlIGxvbmdlciB0ZXh0IChzcGVlZHVwKS5cbiAgXHRcdFx0ZGlmZnMgPSBbW0RJRkZfSU5TRVJULCBsb25ndGV4dC5zdWJzdHJpbmcoMCwgaSldLCBbRElGRl9FUVVBTCwgc2hvcnR0ZXh0XSwgW0RJRkZfSU5TRVJULCBsb25ndGV4dC5zdWJzdHJpbmcoaSArIHNob3J0dGV4dC5sZW5ndGgpXV07XG5cbiAgXHRcdFx0Ly8gU3dhcCBpbnNlcnRpb25zIGZvciBkZWxldGlvbnMgaWYgZGlmZiBpcyByZXZlcnNlZC5cbiAgXHRcdFx0aWYgKHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCkge1xuICBcdFx0XHRcdGRpZmZzWzBdWzBdID0gZGlmZnNbMl1bMF0gPSBESUZGX0RFTEVURTtcbiAgXHRcdFx0fVxuICBcdFx0XHRyZXR1cm4gZGlmZnM7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChzaG9ydHRleHQubGVuZ3RoID09PSAxKSB7XG5cbiAgXHRcdFx0Ly8gU2luZ2xlIGNoYXJhY3RlciBzdHJpbmcuXG4gIFx0XHRcdC8vIEFmdGVyIHRoZSBwcmV2aW91cyBzcGVlZHVwLCB0aGUgY2hhcmFjdGVyIGNhbid0IGJlIGFuIGVxdWFsaXR5LlxuICBcdFx0XHRyZXR1cm4gW1tESUZGX0RFTEVURSwgdGV4dDFdLCBbRElGRl9JTlNFUlQsIHRleHQyXV07XG4gIFx0XHR9XG5cbiAgXHRcdC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgcHJvYmxlbSBjYW4gYmUgc3BsaXQgaW4gdHdvLlxuICBcdFx0aG0gPSB0aGlzLmRpZmZIYWxmTWF0Y2godGV4dDEsIHRleHQyKTtcbiAgXHRcdGlmIChobSkge1xuXG4gIFx0XHRcdC8vIEEgaGFsZi1tYXRjaCB3YXMgZm91bmQsIHNvcnQgb3V0IHRoZSByZXR1cm4gZGF0YS5cbiAgXHRcdFx0dGV4dDFBID0gaG1bMF07XG4gIFx0XHRcdHRleHQxQiA9IGhtWzFdO1xuICBcdFx0XHR0ZXh0MkEgPSBobVsyXTtcbiAgXHRcdFx0dGV4dDJCID0gaG1bM107XG4gIFx0XHRcdG1pZENvbW1vbiA9IGhtWzRdO1xuXG4gIFx0XHRcdC8vIFNlbmQgYm90aCBwYWlycyBvZmYgZm9yIHNlcGFyYXRlIHByb2Nlc3NpbmcuXG4gIFx0XHRcdGRpZmZzQSA9IHRoaXMuRGlmZk1haW4odGV4dDFBLCB0ZXh0MkEsIGNoZWNrbGluZXMsIGRlYWRsaW5lKTtcbiAgXHRcdFx0ZGlmZnNCID0gdGhpcy5EaWZmTWFpbih0ZXh0MUIsIHRleHQyQiwgY2hlY2tsaW5lcywgZGVhZGxpbmUpO1xuXG4gIFx0XHRcdC8vIE1lcmdlIHRoZSByZXN1bHRzLlxuICBcdFx0XHRyZXR1cm4gZGlmZnNBLmNvbmNhdChbW0RJRkZfRVFVQUwsIG1pZENvbW1vbl1dLCBkaWZmc0IpO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY2hlY2tsaW5lcyAmJiB0ZXh0MS5sZW5ndGggPiAxMDAgJiYgdGV4dDIubGVuZ3RoID4gMTAwKSB7XG4gIFx0XHRcdHJldHVybiB0aGlzLmRpZmZMaW5lTW9kZSh0ZXh0MSwgdGV4dDIsIGRlYWRsaW5lKTtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIHRoaXMuZGlmZkJpc2VjdCh0ZXh0MSwgdGV4dDIsIGRlYWRsaW5lKTtcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBEbyB0aGUgdHdvIHRleHRzIHNoYXJlIGEgc3Vic3RyaW5nIHdoaWNoIGlzIGF0IGxlYXN0IGhhbGYgdGhlIGxlbmd0aCBvZiB0aGVcbiAgICAqIGxvbmdlciB0ZXh0P1xuICAgICogVGhpcyBzcGVlZHVwIGNhbiBwcm9kdWNlIG5vbi1taW5pbWFsIGRpZmZzLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIEZpcnN0IHN0cmluZy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBTZWNvbmQgc3RyaW5nLlxuICAgICogQHJldHVybiB7QXJyYXkuPHN0cmluZz59IEZpdmUgZWxlbWVudCBBcnJheSwgY29udGFpbmluZyB0aGUgcHJlZml4IG9mXG4gICAgKiAgICAgdGV4dDEsIHRoZSBzdWZmaXggb2YgdGV4dDEsIHRoZSBwcmVmaXggb2YgdGV4dDIsIHRoZSBzdWZmaXggb2ZcbiAgICAqICAgICB0ZXh0MiBhbmQgdGhlIGNvbW1vbiBtaWRkbGUuICBPciBudWxsIGlmIHRoZXJlIHdhcyBubyBtYXRjaC5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkhhbGZNYXRjaCA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIpIHtcbiAgXHRcdHZhciBsb25ndGV4dCwgc2hvcnR0ZXh0LCBkbXAsIHRleHQxQSwgdGV4dDJCLCB0ZXh0MkEsIHRleHQxQiwgbWlkQ29tbW9uLCBobTEsIGhtMiwgaG07XG5cbiAgXHRcdGxvbmd0ZXh0ID0gdGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoID8gdGV4dDEgOiB0ZXh0MjtcbiAgXHRcdHNob3J0dGV4dCA9IHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCA/IHRleHQyIDogdGV4dDE7XG4gIFx0XHRpZiAobG9uZ3RleHQubGVuZ3RoIDwgNCB8fCBzaG9ydHRleHQubGVuZ3RoICogMiA8IGxvbmd0ZXh0Lmxlbmd0aCkge1xuICBcdFx0XHRyZXR1cm4gbnVsbDsgLy8gUG9pbnRsZXNzLlxuICBcdFx0fVxuICBcdFx0ZG1wID0gdGhpczsgLy8gJ3RoaXMnIGJlY29tZXMgJ3dpbmRvdycgaW4gYSBjbG9zdXJlLlxuXG4gIFx0XHQvKipcbiAgICAgKiBEb2VzIGEgc3Vic3RyaW5nIG9mIHNob3J0dGV4dCBleGlzdCB3aXRoaW4gbG9uZ3RleHQgc3VjaCB0aGF0IHRoZSBzdWJzdHJpbmdcbiAgICAgKiBpcyBhdCBsZWFzdCBoYWxmIHRoZSBsZW5ndGggb2YgbG9uZ3RleHQ/XG4gICAgICogQ2xvc3VyZSwgYnV0IGRvZXMgbm90IHJlZmVyZW5jZSBhbnkgZXh0ZXJuYWwgdmFyaWFibGVzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb25ndGV4dCBMb25nZXIgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaG9ydHRleHQgU2hvcnRlciBzdHJpbmcuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGkgU3RhcnQgaW5kZXggb2YgcXVhcnRlciBsZW5ndGggc3Vic3RyaW5nIHdpdGhpbiBsb25ndGV4dC5cbiAgICAgKiBAcmV0dXJuIHtBcnJheS48c3RyaW5nPn0gRml2ZSBlbGVtZW50IEFycmF5LCBjb250YWluaW5nIHRoZSBwcmVmaXggb2ZcbiAgICAgKiAgICAgbG9uZ3RleHQsIHRoZSBzdWZmaXggb2YgbG9uZ3RleHQsIHRoZSBwcmVmaXggb2Ygc2hvcnR0ZXh0LCB0aGUgc3VmZml4XG4gICAgICogICAgIG9mIHNob3J0dGV4dCBhbmQgdGhlIGNvbW1vbiBtaWRkbGUuICBPciBudWxsIGlmIHRoZXJlIHdhcyBubyBtYXRjaC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICBcdFx0ZnVuY3Rpb24gZGlmZkhhbGZNYXRjaEkobG9uZ3RleHQsIHNob3J0dGV4dCwgaSkge1xuICBcdFx0XHR2YXIgc2VlZCwgaiwgYmVzdENvbW1vbiwgcHJlZml4TGVuZ3RoLCBzdWZmaXhMZW5ndGgsIGJlc3RMb25ndGV4dEEsIGJlc3RMb25ndGV4dEIsIGJlc3RTaG9ydHRleHRBLCBiZXN0U2hvcnR0ZXh0QjtcblxuICBcdFx0XHQvLyBTdGFydCB3aXRoIGEgMS80IGxlbmd0aCBzdWJzdHJpbmcgYXQgcG9zaXRpb24gaSBhcyBhIHNlZWQuXG4gIFx0XHRcdHNlZWQgPSBsb25ndGV4dC5zdWJzdHJpbmcoaSwgaSArIE1hdGguZmxvb3IobG9uZ3RleHQubGVuZ3RoIC8gNCkpO1xuICBcdFx0XHRqID0gLTE7XG4gIFx0XHRcdGJlc3RDb21tb24gPSBcIlwiO1xuICBcdFx0XHR3aGlsZSAoKGogPSBzaG9ydHRleHQuaW5kZXhPZihzZWVkLCBqICsgMSkpICE9PSAtMSkge1xuICBcdFx0XHRcdHByZWZpeExlbmd0aCA9IGRtcC5kaWZmQ29tbW9uUHJlZml4KGxvbmd0ZXh0LnN1YnN0cmluZyhpKSwgc2hvcnR0ZXh0LnN1YnN0cmluZyhqKSk7XG4gIFx0XHRcdFx0c3VmZml4TGVuZ3RoID0gZG1wLmRpZmZDb21tb25TdWZmaXgobG9uZ3RleHQuc3Vic3RyaW5nKDAsIGkpLCBzaG9ydHRleHQuc3Vic3RyaW5nKDAsIGopKTtcbiAgXHRcdFx0XHRpZiAoYmVzdENvbW1vbi5sZW5ndGggPCBzdWZmaXhMZW5ndGggKyBwcmVmaXhMZW5ndGgpIHtcbiAgXHRcdFx0XHRcdGJlc3RDb21tb24gPSBzaG9ydHRleHQuc3Vic3RyaW5nKGogLSBzdWZmaXhMZW5ndGgsIGopICsgc2hvcnR0ZXh0LnN1YnN0cmluZyhqLCBqICsgcHJlZml4TGVuZ3RoKTtcbiAgXHRcdFx0XHRcdGJlc3RMb25ndGV4dEEgPSBsb25ndGV4dC5zdWJzdHJpbmcoMCwgaSAtIHN1ZmZpeExlbmd0aCk7XG4gIFx0XHRcdFx0XHRiZXN0TG9uZ3RleHRCID0gbG9uZ3RleHQuc3Vic3RyaW5nKGkgKyBwcmVmaXhMZW5ndGgpO1xuICBcdFx0XHRcdFx0YmVzdFNob3J0dGV4dEEgPSBzaG9ydHRleHQuc3Vic3RyaW5nKDAsIGogLSBzdWZmaXhMZW5ndGgpO1xuICBcdFx0XHRcdFx0YmVzdFNob3J0dGV4dEIgPSBzaG9ydHRleHQuc3Vic3RyaW5nKGogKyBwcmVmaXhMZW5ndGgpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRpZiAoYmVzdENvbW1vbi5sZW5ndGggKiAyID49IGxvbmd0ZXh0Lmxlbmd0aCkge1xuICBcdFx0XHRcdHJldHVybiBbYmVzdExvbmd0ZXh0QSwgYmVzdExvbmd0ZXh0QiwgYmVzdFNob3J0dGV4dEEsIGJlc3RTaG9ydHRleHRCLCBiZXN0Q29tbW9uXTtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBGaXJzdCBjaGVjayBpZiB0aGUgc2Vjb25kIHF1YXJ0ZXIgaXMgdGhlIHNlZWQgZm9yIGEgaGFsZi1tYXRjaC5cbiAgXHRcdGhtMSA9IGRpZmZIYWxmTWF0Y2hJKGxvbmd0ZXh0LCBzaG9ydHRleHQsIE1hdGguY2VpbChsb25ndGV4dC5sZW5ndGggLyA0KSk7XG5cbiAgXHRcdC8vIENoZWNrIGFnYWluIGJhc2VkIG9uIHRoZSB0aGlyZCBxdWFydGVyLlxuICBcdFx0aG0yID0gZGlmZkhhbGZNYXRjaEkobG9uZ3RleHQsIHNob3J0dGV4dCwgTWF0aC5jZWlsKGxvbmd0ZXh0Lmxlbmd0aCAvIDIpKTtcbiAgXHRcdGlmICghaG0xICYmICFobTIpIHtcbiAgXHRcdFx0cmV0dXJuIG51bGw7XG4gIFx0XHR9IGVsc2UgaWYgKCFobTIpIHtcbiAgXHRcdFx0aG0gPSBobTE7XG4gIFx0XHR9IGVsc2UgaWYgKCFobTEpIHtcbiAgXHRcdFx0aG0gPSBobTI7XG4gIFx0XHR9IGVsc2Uge1xuXG4gIFx0XHRcdC8vIEJvdGggbWF0Y2hlZC4gIFNlbGVjdCB0aGUgbG9uZ2VzdC5cbiAgXHRcdFx0aG0gPSBobTFbNF0ubGVuZ3RoID4gaG0yWzRdLmxlbmd0aCA/IGhtMSA6IGhtMjtcbiAgXHRcdH1cblxuICBcdFx0Ly8gQSBoYWxmLW1hdGNoIHdhcyBmb3VuZCwgc29ydCBvdXQgdGhlIHJldHVybiBkYXRhLlxuICBcdFx0aWYgKHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCkge1xuICBcdFx0XHR0ZXh0MUEgPSBobVswXTtcbiAgXHRcdFx0dGV4dDFCID0gaG1bMV07XG4gIFx0XHRcdHRleHQyQSA9IGhtWzJdO1xuICBcdFx0XHR0ZXh0MkIgPSBobVszXTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHRleHQyQSA9IGhtWzBdO1xuICBcdFx0XHR0ZXh0MkIgPSBobVsxXTtcbiAgXHRcdFx0dGV4dDFBID0gaG1bMl07XG4gIFx0XHRcdHRleHQxQiA9IGhtWzNdO1xuICBcdFx0fVxuICBcdFx0bWlkQ29tbW9uID0gaG1bNF07XG4gIFx0XHRyZXR1cm4gW3RleHQxQSwgdGV4dDFCLCB0ZXh0MkEsIHRleHQyQiwgbWlkQ29tbW9uXTtcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBEbyBhIHF1aWNrIGxpbmUtbGV2ZWwgZGlmZiBvbiBib3RoIHN0cmluZ3MsIHRoZW4gcmVkaWZmIHRoZSBwYXJ0cyBmb3JcbiAgICAqIGdyZWF0ZXIgYWNjdXJhY3kuXG4gICAgKiBUaGlzIHNwZWVkdXAgY2FuIHByb2R1Y2Ugbm9uLW1pbmltYWwgZGlmZnMuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgT2xkIHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgTmV3IHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZGVhZGxpbmUgVGltZSB3aGVuIHRoZSBkaWZmIHNob3VsZCBiZSBjb21wbGV0ZSBieS5cbiAgICAqIEByZXR1cm4geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkxpbmVNb2RlID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0MiwgZGVhZGxpbmUpIHtcbiAgXHRcdHZhciBhLCBkaWZmcywgbGluZWFycmF5LCBwb2ludGVyLCBjb3VudEluc2VydCwgY291bnREZWxldGUsIHRleHRJbnNlcnQsIHRleHREZWxldGUsIGo7XG5cbiAgXHRcdC8vIFNjYW4gdGhlIHRleHQgb24gYSBsaW5lLWJ5LWxpbmUgYmFzaXMgZmlyc3QuXG4gIFx0XHRhID0gdGhpcy5kaWZmTGluZXNUb0NoYXJzKHRleHQxLCB0ZXh0Mik7XG4gIFx0XHR0ZXh0MSA9IGEuY2hhcnMxO1xuICBcdFx0dGV4dDIgPSBhLmNoYXJzMjtcbiAgXHRcdGxpbmVhcnJheSA9IGEubGluZUFycmF5O1xuXG4gIFx0XHRkaWZmcyA9IHRoaXMuRGlmZk1haW4odGV4dDEsIHRleHQyLCBmYWxzZSwgZGVhZGxpbmUpO1xuXG4gIFx0XHQvLyBDb252ZXJ0IHRoZSBkaWZmIGJhY2sgdG8gb3JpZ2luYWwgdGV4dC5cbiAgXHRcdHRoaXMuZGlmZkNoYXJzVG9MaW5lcyhkaWZmcywgbGluZWFycmF5KTtcblxuICBcdFx0Ly8gRWxpbWluYXRlIGZyZWFrIG1hdGNoZXMgKGUuZy4gYmxhbmsgbGluZXMpXG4gIFx0XHR0aGlzLmRpZmZDbGVhbnVwU2VtYW50aWMoZGlmZnMpO1xuXG4gIFx0XHQvLyBSZWRpZmYgYW55IHJlcGxhY2VtZW50IGJsb2NrcywgdGhpcyB0aW1lIGNoYXJhY3Rlci1ieS1jaGFyYWN0ZXIuXG4gIFx0XHQvLyBBZGQgYSBkdW1teSBlbnRyeSBhdCB0aGUgZW5kLlxuICBcdFx0ZGlmZnMucHVzaChbRElGRl9FUVVBTCwgXCJcIl0pO1xuICBcdFx0cG9pbnRlciA9IDA7XG4gIFx0XHRjb3VudERlbGV0ZSA9IDA7XG4gIFx0XHRjb3VudEluc2VydCA9IDA7XG4gIFx0XHR0ZXh0RGVsZXRlID0gXCJcIjtcbiAgXHRcdHRleHRJbnNlcnQgPSBcIlwiO1xuICBcdFx0d2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcbiAgXHRcdFx0c3dpdGNoIChkaWZmc1twb2ludGVyXVswXSkge1xuICBcdFx0XHRcdGNhc2UgRElGRl9JTlNFUlQ6XG4gIFx0XHRcdFx0XHRjb3VudEluc2VydCsrO1xuICBcdFx0XHRcdFx0dGV4dEluc2VydCArPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGNhc2UgRElGRl9ERUxFVEU6XG4gIFx0XHRcdFx0XHRjb3VudERlbGV0ZSsrO1xuICBcdFx0XHRcdFx0dGV4dERlbGV0ZSArPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGNhc2UgRElGRl9FUVVBTDpcblxuICBcdFx0XHRcdFx0Ly8gVXBvbiByZWFjaGluZyBhbiBlcXVhbGl0eSwgY2hlY2sgZm9yIHByaW9yIHJlZHVuZGFuY2llcy5cbiAgXHRcdFx0XHRcdGlmIChjb3VudERlbGV0ZSA+PSAxICYmIGNvdW50SW5zZXJ0ID49IDEpIHtcblxuICBcdFx0XHRcdFx0XHQvLyBEZWxldGUgdGhlIG9mZmVuZGluZyByZWNvcmRzIGFuZCBhZGQgdGhlIG1lcmdlZCBvbmVzLlxuICBcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQsIGNvdW50RGVsZXRlICsgY291bnRJbnNlcnQpO1xuICBcdFx0XHRcdFx0XHRwb2ludGVyID0gcG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQ7XG4gIFx0XHRcdFx0XHRcdGEgPSB0aGlzLkRpZmZNYWluKHRleHREZWxldGUsIHRleHRJbnNlcnQsIGZhbHNlLCBkZWFkbGluZSk7XG4gIFx0XHRcdFx0XHRcdGZvciAoaiA9IGEubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgXHRcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciwgMCwgYVtqXSk7XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdFx0cG9pbnRlciA9IHBvaW50ZXIgKyBhLmxlbmd0aDtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdGNvdW50SW5zZXJ0ID0gMDtcbiAgXHRcdFx0XHRcdGNvdW50RGVsZXRlID0gMDtcbiAgXHRcdFx0XHRcdHRleHREZWxldGUgPSBcIlwiO1xuICBcdFx0XHRcdFx0dGV4dEluc2VydCA9IFwiXCI7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0fVxuICBcdFx0XHRwb2ludGVyKys7XG4gIFx0XHR9XG4gIFx0XHRkaWZmcy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBkdW1teSBlbnRyeSBhdCB0aGUgZW5kLlxuXG4gIFx0XHRyZXR1cm4gZGlmZnM7XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogRmluZCB0aGUgJ21pZGRsZSBzbmFrZScgb2YgYSBkaWZmLCBzcGxpdCB0aGUgcHJvYmxlbSBpbiB0d29cbiAgICAqIGFuZCByZXR1cm4gdGhlIHJlY3Vyc2l2ZWx5IGNvbnN0cnVjdGVkIGRpZmYuXG4gICAgKiBTZWUgTXllcnMgMTk4NiBwYXBlcjogQW4gTyhORCkgRGlmZmVyZW5jZSBBbGdvcml0aG0gYW5kIEl0cyBWYXJpYXRpb25zLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIE9sZCBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIE5ldyBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGRlYWRsaW5lIFRpbWUgYXQgd2hpY2ggdG8gYmFpbCBpZiBub3QgeWV0IGNvbXBsZXRlLlxuICAgICogQHJldHVybiB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQmlzZWN0ID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0MiwgZGVhZGxpbmUpIHtcbiAgXHRcdHZhciB0ZXh0MUxlbmd0aCwgdGV4dDJMZW5ndGgsIG1heEQsIHZPZmZzZXQsIHZMZW5ndGgsIHYxLCB2MiwgeCwgZGVsdGEsIGZyb250LCBrMXN0YXJ0LCBrMWVuZCwgazJzdGFydCwgazJlbmQsIGsyT2Zmc2V0LCBrMU9mZnNldCwgeDEsIHgyLCB5MSwgeTIsIGQsIGsxLCBrMjtcblxuICBcdFx0Ly8gQ2FjaGUgdGhlIHRleHQgbGVuZ3RocyB0byBwcmV2ZW50IG11bHRpcGxlIGNhbGxzLlxuICBcdFx0dGV4dDFMZW5ndGggPSB0ZXh0MS5sZW5ndGg7XG4gIFx0XHR0ZXh0Mkxlbmd0aCA9IHRleHQyLmxlbmd0aDtcbiAgXHRcdG1heEQgPSBNYXRoLmNlaWwoKHRleHQxTGVuZ3RoICsgdGV4dDJMZW5ndGgpIC8gMik7XG4gIFx0XHR2T2Zmc2V0ID0gbWF4RDtcbiAgXHRcdHZMZW5ndGggPSAyICogbWF4RDtcbiAgXHRcdHYxID0gbmV3IEFycmF5KHZMZW5ndGgpO1xuICBcdFx0djIgPSBuZXcgQXJyYXkodkxlbmd0aCk7XG5cbiAgXHRcdC8vIFNldHRpbmcgYWxsIGVsZW1lbnRzIHRvIC0xIGlzIGZhc3RlciBpbiBDaHJvbWUgJiBGaXJlZm94IHRoYW4gbWl4aW5nXG4gIFx0XHQvLyBpbnRlZ2VycyBhbmQgdW5kZWZpbmVkLlxuICBcdFx0Zm9yICh4ID0gMDsgeCA8IHZMZW5ndGg7IHgrKykge1xuICBcdFx0XHR2MVt4XSA9IC0xO1xuICBcdFx0XHR2Mlt4XSA9IC0xO1xuICBcdFx0fVxuICBcdFx0djFbdk9mZnNldCArIDFdID0gMDtcbiAgXHRcdHYyW3ZPZmZzZXQgKyAxXSA9IDA7XG4gIFx0XHRkZWx0YSA9IHRleHQxTGVuZ3RoIC0gdGV4dDJMZW5ndGg7XG5cbiAgXHRcdC8vIElmIHRoZSB0b3RhbCBudW1iZXIgb2YgY2hhcmFjdGVycyBpcyBvZGQsIHRoZW4gdGhlIGZyb250IHBhdGggd2lsbCBjb2xsaWRlXG4gIFx0XHQvLyB3aXRoIHRoZSByZXZlcnNlIHBhdGguXG4gIFx0XHRmcm9udCA9IGRlbHRhICUgMiAhPT0gMDtcblxuICBcdFx0Ly8gT2Zmc2V0cyBmb3Igc3RhcnQgYW5kIGVuZCBvZiBrIGxvb3AuXG4gIFx0XHQvLyBQcmV2ZW50cyBtYXBwaW5nIG9mIHNwYWNlIGJleW9uZCB0aGUgZ3JpZC5cbiAgXHRcdGsxc3RhcnQgPSAwO1xuICBcdFx0azFlbmQgPSAwO1xuICBcdFx0azJzdGFydCA9IDA7XG4gIFx0XHRrMmVuZCA9IDA7XG4gIFx0XHRmb3IgKGQgPSAwOyBkIDwgbWF4RDsgZCsrKSB7XG5cbiAgXHRcdFx0Ly8gQmFpbCBvdXQgaWYgZGVhZGxpbmUgaXMgcmVhY2hlZC5cbiAgXHRcdFx0aWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpID4gZGVhZGxpbmUpIHtcbiAgXHRcdFx0XHRicmVhaztcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdC8vIFdhbGsgdGhlIGZyb250IHBhdGggb25lIHN0ZXAuXG4gIFx0XHRcdGZvciAoazEgPSAtZCArIGsxc3RhcnQ7IGsxIDw9IGQgLSBrMWVuZDsgazEgKz0gMikge1xuICBcdFx0XHRcdGsxT2Zmc2V0ID0gdk9mZnNldCArIGsxO1xuICBcdFx0XHRcdGlmIChrMSA9PT0gLWQgfHwgazEgIT09IGQgJiYgdjFbazFPZmZzZXQgLSAxXSA8IHYxW2sxT2Zmc2V0ICsgMV0pIHtcbiAgXHRcdFx0XHRcdHgxID0gdjFbazFPZmZzZXQgKyAxXTtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0eDEgPSB2MVtrMU9mZnNldCAtIDFdICsgMTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0eTEgPSB4MSAtIGsxO1xuICBcdFx0XHRcdHdoaWxlICh4MSA8IHRleHQxTGVuZ3RoICYmIHkxIDwgdGV4dDJMZW5ndGggJiYgdGV4dDEuY2hhckF0KHgxKSA9PT0gdGV4dDIuY2hhckF0KHkxKSkge1xuICBcdFx0XHRcdFx0eDErKztcbiAgXHRcdFx0XHRcdHkxKys7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHYxW2sxT2Zmc2V0XSA9IHgxO1xuICBcdFx0XHRcdGlmICh4MSA+IHRleHQxTGVuZ3RoKSB7XG5cbiAgXHRcdFx0XHRcdC8vIFJhbiBvZmYgdGhlIHJpZ2h0IG9mIHRoZSBncmFwaC5cbiAgXHRcdFx0XHRcdGsxZW5kICs9IDI7XG4gIFx0XHRcdFx0fSBlbHNlIGlmICh5MSA+IHRleHQyTGVuZ3RoKSB7XG5cbiAgXHRcdFx0XHRcdC8vIFJhbiBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgZ3JhcGguXG4gIFx0XHRcdFx0XHRrMXN0YXJ0ICs9IDI7XG4gIFx0XHRcdFx0fSBlbHNlIGlmIChmcm9udCkge1xuICBcdFx0XHRcdFx0azJPZmZzZXQgPSB2T2Zmc2V0ICsgZGVsdGEgLSBrMTtcbiAgXHRcdFx0XHRcdGlmIChrMk9mZnNldCA+PSAwICYmIGsyT2Zmc2V0IDwgdkxlbmd0aCAmJiB2MltrMk9mZnNldF0gIT09IC0xKSB7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gTWlycm9yIHgyIG9udG8gdG9wLWxlZnQgY29vcmRpbmF0ZSBzeXN0ZW0uXG4gIFx0XHRcdFx0XHRcdHgyID0gdGV4dDFMZW5ndGggLSB2MltrMk9mZnNldF07XG4gIFx0XHRcdFx0XHRcdGlmICh4MSA+PSB4Mikge1xuXG4gIFx0XHRcdFx0XHRcdFx0Ly8gT3ZlcmxhcCBkZXRlY3RlZC5cbiAgXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kaWZmQmlzZWN0U3BsaXQodGV4dDEsIHRleHQyLCB4MSwgeTEsIGRlYWRsaW5lKTtcbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdC8vIFdhbGsgdGhlIHJldmVyc2UgcGF0aCBvbmUgc3RlcC5cbiAgXHRcdFx0Zm9yIChrMiA9IC1kICsgazJzdGFydDsgazIgPD0gZCAtIGsyZW5kOyBrMiArPSAyKSB7XG4gIFx0XHRcdFx0azJPZmZzZXQgPSB2T2Zmc2V0ICsgazI7XG4gIFx0XHRcdFx0aWYgKGsyID09PSAtZCB8fCBrMiAhPT0gZCAmJiB2MltrMk9mZnNldCAtIDFdIDwgdjJbazJPZmZzZXQgKyAxXSkge1xuICBcdFx0XHRcdFx0eDIgPSB2MltrMk9mZnNldCArIDFdO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHR4MiA9IHYyW2syT2Zmc2V0IC0gMV0gKyAxO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHR5MiA9IHgyIC0gazI7XG4gIFx0XHRcdFx0d2hpbGUgKHgyIDwgdGV4dDFMZW5ndGggJiYgeTIgPCB0ZXh0Mkxlbmd0aCAmJiB0ZXh0MS5jaGFyQXQodGV4dDFMZW5ndGggLSB4MiAtIDEpID09PSB0ZXh0Mi5jaGFyQXQodGV4dDJMZW5ndGggLSB5MiAtIDEpKSB7XG4gIFx0XHRcdFx0XHR4MisrO1xuICBcdFx0XHRcdFx0eTIrKztcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0djJbazJPZmZzZXRdID0geDI7XG4gIFx0XHRcdFx0aWYgKHgyID4gdGV4dDFMZW5ndGgpIHtcblxuICBcdFx0XHRcdFx0Ly8gUmFuIG9mZiB0aGUgbGVmdCBvZiB0aGUgZ3JhcGguXG4gIFx0XHRcdFx0XHRrMmVuZCArPSAyO1xuICBcdFx0XHRcdH0gZWxzZSBpZiAoeTIgPiB0ZXh0Mkxlbmd0aCkge1xuXG4gIFx0XHRcdFx0XHQvLyBSYW4gb2ZmIHRoZSB0b3Agb2YgdGhlIGdyYXBoLlxuICBcdFx0XHRcdFx0azJzdGFydCArPSAyO1xuICBcdFx0XHRcdH0gZWxzZSBpZiAoIWZyb250KSB7XG4gIFx0XHRcdFx0XHRrMU9mZnNldCA9IHZPZmZzZXQgKyBkZWx0YSAtIGsyO1xuICBcdFx0XHRcdFx0aWYgKGsxT2Zmc2V0ID49IDAgJiYgazFPZmZzZXQgPCB2TGVuZ3RoICYmIHYxW2sxT2Zmc2V0XSAhPT0gLTEpIHtcbiAgXHRcdFx0XHRcdFx0eDEgPSB2MVtrMU9mZnNldF07XG4gIFx0XHRcdFx0XHRcdHkxID0gdk9mZnNldCArIHgxIC0gazFPZmZzZXQ7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gTWlycm9yIHgyIG9udG8gdG9wLWxlZnQgY29vcmRpbmF0ZSBzeXN0ZW0uXG4gIFx0XHRcdFx0XHRcdHgyID0gdGV4dDFMZW5ndGggLSB4MjtcbiAgXHRcdFx0XHRcdFx0aWYgKHgxID49IHgyKSB7XG5cbiAgXHRcdFx0XHRcdFx0XHQvLyBPdmVybGFwIGRldGVjdGVkLlxuICBcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRpZmZCaXNlY3RTcGxpdCh0ZXh0MSwgdGV4dDIsIHgxLCB5MSwgZGVhZGxpbmUpO1xuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIERpZmYgdG9vayB0b28gbG9uZyBhbmQgaGl0IHRoZSBkZWFkbGluZSBvclxuICBcdFx0Ly8gbnVtYmVyIG9mIGRpZmZzIGVxdWFscyBudW1iZXIgb2YgY2hhcmFjdGVycywgbm8gY29tbW9uYWxpdHkgYXQgYWxsLlxuICBcdFx0cmV0dXJuIFtbRElGRl9ERUxFVEUsIHRleHQxXSwgW0RJRkZfSU5TRVJULCB0ZXh0Ml1dO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIEdpdmVuIHRoZSBsb2NhdGlvbiBvZiB0aGUgJ21pZGRsZSBzbmFrZScsIHNwbGl0IHRoZSBkaWZmIGluIHR3byBwYXJ0c1xuICAgICogYW5kIHJlY3Vyc2UuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgT2xkIHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgTmV3IHN0cmluZyB0byBiZSBkaWZmZWQuXG4gICAgKiBAcGFyYW0ge251bWJlcn0geCBJbmRleCBvZiBzcGxpdCBwb2ludCBpbiB0ZXh0MS5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IEluZGV4IG9mIHNwbGl0IHBvaW50IGluIHRleHQyLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGRlYWRsaW5lIFRpbWUgYXQgd2hpY2ggdG8gYmFpbCBpZiBub3QgeWV0IGNvbXBsZXRlLlxuICAgICogQHJldHVybiB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQmlzZWN0U3BsaXQgPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyLCB4LCB5LCBkZWFkbGluZSkge1xuICBcdFx0dmFyIHRleHQxYSwgdGV4dDFiLCB0ZXh0MmEsIHRleHQyYiwgZGlmZnMsIGRpZmZzYjtcbiAgXHRcdHRleHQxYSA9IHRleHQxLnN1YnN0cmluZygwLCB4KTtcbiAgXHRcdHRleHQyYSA9IHRleHQyLnN1YnN0cmluZygwLCB5KTtcbiAgXHRcdHRleHQxYiA9IHRleHQxLnN1YnN0cmluZyh4KTtcbiAgXHRcdHRleHQyYiA9IHRleHQyLnN1YnN0cmluZyh5KTtcblxuICBcdFx0Ly8gQ29tcHV0ZSBib3RoIGRpZmZzIHNlcmlhbGx5LlxuICBcdFx0ZGlmZnMgPSB0aGlzLkRpZmZNYWluKHRleHQxYSwgdGV4dDJhLCBmYWxzZSwgZGVhZGxpbmUpO1xuICBcdFx0ZGlmZnNiID0gdGhpcy5EaWZmTWFpbih0ZXh0MWIsIHRleHQyYiwgZmFsc2UsIGRlYWRsaW5lKTtcblxuICBcdFx0cmV0dXJuIGRpZmZzLmNvbmNhdChkaWZmc2IpO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIFJlZHVjZSB0aGUgbnVtYmVyIG9mIGVkaXRzIGJ5IGVsaW1pbmF0aW5nIHNlbWFudGljYWxseSB0cml2aWFsIGVxdWFsaXRpZXMuXG4gICAgKiBAcGFyYW0geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBkaWZmcyBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ2xlYW51cFNlbWFudGljID0gZnVuY3Rpb24gKGRpZmZzKSB7XG4gIFx0XHR2YXIgY2hhbmdlcywgZXF1YWxpdGllcywgZXF1YWxpdGllc0xlbmd0aCwgbGFzdGVxdWFsaXR5LCBwb2ludGVyLCBsZW5ndGhJbnNlcnRpb25zMiwgbGVuZ3RoRGVsZXRpb25zMiwgbGVuZ3RoSW5zZXJ0aW9uczEsIGxlbmd0aERlbGV0aW9uczEsIGRlbGV0aW9uLCBpbnNlcnRpb24sIG92ZXJsYXBMZW5ndGgxLCBvdmVybGFwTGVuZ3RoMjtcbiAgXHRcdGNoYW5nZXMgPSBmYWxzZTtcbiAgXHRcdGVxdWFsaXRpZXMgPSBbXTsgLy8gU3RhY2sgb2YgaW5kaWNlcyB3aGVyZSBlcXVhbGl0aWVzIGFyZSBmb3VuZC5cbiAgXHRcdGVxdWFsaXRpZXNMZW5ndGggPSAwOyAvLyBLZWVwaW5nIG91ciBvd24gbGVuZ3RoIHZhciBpcyBmYXN0ZXIgaW4gSlMuXG4gIFx0XHQvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gIFx0XHRsYXN0ZXF1YWxpdHkgPSBudWxsO1xuXG4gIFx0XHQvLyBBbHdheXMgZXF1YWwgdG8gZGlmZnNbZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV1dWzFdXG4gIFx0XHRwb2ludGVyID0gMDsgLy8gSW5kZXggb2YgY3VycmVudCBwb3NpdGlvbi5cblxuICBcdFx0Ly8gTnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBjaGFuZ2VkIHByaW9yIHRvIHRoZSBlcXVhbGl0eS5cbiAgXHRcdGxlbmd0aEluc2VydGlvbnMxID0gMDtcbiAgXHRcdGxlbmd0aERlbGV0aW9uczEgPSAwO1xuXG4gIFx0XHQvLyBOdW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IGNoYW5nZWQgYWZ0ZXIgdGhlIGVxdWFsaXR5LlxuICBcdFx0bGVuZ3RoSW5zZXJ0aW9uczIgPSAwO1xuICBcdFx0bGVuZ3RoRGVsZXRpb25zMiA9IDA7XG4gIFx0XHR3aGlsZSAocG9pbnRlciA8IGRpZmZzLmxlbmd0aCkge1xuICBcdFx0XHRpZiAoZGlmZnNbcG9pbnRlcl1bMF0gPT09IERJRkZfRVFVQUwpIHtcbiAgXHRcdFx0XHQvLyBFcXVhbGl0eSBmb3VuZC5cbiAgXHRcdFx0XHRlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGgrK10gPSBwb2ludGVyO1xuICBcdFx0XHRcdGxlbmd0aEluc2VydGlvbnMxID0gbGVuZ3RoSW5zZXJ0aW9uczI7XG4gIFx0XHRcdFx0bGVuZ3RoRGVsZXRpb25zMSA9IGxlbmd0aERlbGV0aW9uczI7XG4gIFx0XHRcdFx0bGVuZ3RoSW5zZXJ0aW9uczIgPSAwO1xuICBcdFx0XHRcdGxlbmd0aERlbGV0aW9uczIgPSAwO1xuICBcdFx0XHRcdGxhc3RlcXVhbGl0eSA9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdC8vIEFuIGluc2VydGlvbiBvciBkZWxldGlvbi5cbiAgXHRcdFx0XHRpZiAoZGlmZnNbcG9pbnRlcl1bMF0gPT09IERJRkZfSU5TRVJUKSB7XG4gIFx0XHRcdFx0XHRsZW5ndGhJbnNlcnRpb25zMiArPSBkaWZmc1twb2ludGVyXVsxXS5sZW5ndGg7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdGxlbmd0aERlbGV0aW9uczIgKz0gZGlmZnNbcG9pbnRlcl1bMV0ubGVuZ3RoO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdC8vIEVsaW1pbmF0ZSBhbiBlcXVhbGl0eSB0aGF0IGlzIHNtYWxsZXIgb3IgZXF1YWwgdG8gdGhlIGVkaXRzIG9uIGJvdGhcbiAgXHRcdFx0XHQvLyBzaWRlcyBvZiBpdC5cbiAgXHRcdFx0XHRpZiAobGFzdGVxdWFsaXR5ICYmIGxhc3RlcXVhbGl0eS5sZW5ndGggPD0gTWF0aC5tYXgobGVuZ3RoSW5zZXJ0aW9uczEsIGxlbmd0aERlbGV0aW9uczEpICYmIGxhc3RlcXVhbGl0eS5sZW5ndGggPD0gTWF0aC5tYXgobGVuZ3RoSW5zZXJ0aW9uczIsIGxlbmd0aERlbGV0aW9uczIpKSB7XG5cbiAgXHRcdFx0XHRcdC8vIER1cGxpY2F0ZSByZWNvcmQuXG4gIFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UoZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV0sIDAsIFtESUZGX0RFTEVURSwgbGFzdGVxdWFsaXR5XSk7XG5cbiAgXHRcdFx0XHRcdC8vIENoYW5nZSBzZWNvbmQgY29weSB0byBpbnNlcnQuXG4gIFx0XHRcdFx0XHRkaWZmc1tlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXSArIDFdWzBdID0gRElGRl9JTlNFUlQ7XG5cbiAgXHRcdFx0XHRcdC8vIFRocm93IGF3YXkgdGhlIGVxdWFsaXR5IHdlIGp1c3QgZGVsZXRlZC5cbiAgXHRcdFx0XHRcdGVxdWFsaXRpZXNMZW5ndGgtLTtcblxuICBcdFx0XHRcdFx0Ly8gVGhyb3cgYXdheSB0aGUgcHJldmlvdXMgZXF1YWxpdHkgKGl0IG5lZWRzIHRvIGJlIHJlZXZhbHVhdGVkKS5cbiAgXHRcdFx0XHRcdGVxdWFsaXRpZXNMZW5ndGgtLTtcbiAgXHRcdFx0XHRcdHBvaW50ZXIgPSBlcXVhbGl0aWVzTGVuZ3RoID4gMCA/IGVxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdIDogLTE7XG5cbiAgXHRcdFx0XHRcdC8vIFJlc2V0IHRoZSBjb3VudGVycy5cbiAgXHRcdFx0XHRcdGxlbmd0aEluc2VydGlvbnMxID0gMDtcbiAgXHRcdFx0XHRcdGxlbmd0aERlbGV0aW9uczEgPSAwO1xuICBcdFx0XHRcdFx0bGVuZ3RoSW5zZXJ0aW9uczIgPSAwO1xuICBcdFx0XHRcdFx0bGVuZ3RoRGVsZXRpb25zMiA9IDA7XG4gIFx0XHRcdFx0XHRsYXN0ZXF1YWxpdHkgPSBudWxsO1xuICBcdFx0XHRcdFx0Y2hhbmdlcyA9IHRydWU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdH1cblxuICBcdFx0Ly8gTm9ybWFsaXplIHRoZSBkaWZmLlxuICBcdFx0aWYgKGNoYW5nZXMpIHtcbiAgXHRcdFx0dGhpcy5kaWZmQ2xlYW51cE1lcmdlKGRpZmZzKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gRmluZCBhbnkgb3ZlcmxhcHMgYmV0d2VlbiBkZWxldGlvbnMgYW5kIGluc2VydGlvbnMuXG4gIFx0XHQvLyBlLmc6IDxkZWw+YWJjeHh4PC9kZWw+PGlucz54eHhkZWY8L2lucz5cbiAgXHRcdC8vICAgLT4gPGRlbD5hYmM8L2RlbD54eHg8aW5zPmRlZjwvaW5zPlxuICBcdFx0Ly8gZS5nOiA8ZGVsPnh4eGFiYzwvZGVsPjxpbnM+ZGVmeHh4PC9pbnM+XG4gIFx0XHQvLyAgIC0+IDxpbnM+ZGVmPC9pbnM+eHh4PGRlbD5hYmM8L2RlbD5cbiAgXHRcdC8vIE9ubHkgZXh0cmFjdCBhbiBvdmVybGFwIGlmIGl0IGlzIGFzIGJpZyBhcyB0aGUgZWRpdCBhaGVhZCBvciBiZWhpbmQgaXQuXG4gIFx0XHRwb2ludGVyID0gMTtcbiAgXHRcdHdoaWxlIChwb2ludGVyIDwgZGlmZnMubGVuZ3RoKSB7XG4gIFx0XHRcdGlmIChkaWZmc1twb2ludGVyIC0gMV1bMF0gPT09IERJRkZfREVMRVRFICYmIGRpZmZzW3BvaW50ZXJdWzBdID09PSBESUZGX0lOU0VSVCkge1xuICBcdFx0XHRcdGRlbGV0aW9uID0gZGlmZnNbcG9pbnRlciAtIDFdWzFdO1xuICBcdFx0XHRcdGluc2VydGlvbiA9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdG92ZXJsYXBMZW5ndGgxID0gdGhpcy5kaWZmQ29tbW9uT3ZlcmxhcChkZWxldGlvbiwgaW5zZXJ0aW9uKTtcbiAgXHRcdFx0XHRvdmVybGFwTGVuZ3RoMiA9IHRoaXMuZGlmZkNvbW1vbk92ZXJsYXAoaW5zZXJ0aW9uLCBkZWxldGlvbik7XG4gIFx0XHRcdFx0aWYgKG92ZXJsYXBMZW5ndGgxID49IG92ZXJsYXBMZW5ndGgyKSB7XG4gIFx0XHRcdFx0XHRpZiAob3ZlcmxhcExlbmd0aDEgPj0gZGVsZXRpb24ubGVuZ3RoIC8gMiB8fCBvdmVybGFwTGVuZ3RoMSA+PSBpbnNlcnRpb24ubGVuZ3RoIC8gMikge1xuXG4gIFx0XHRcdFx0XHRcdC8vIE92ZXJsYXAgZm91bmQuICBJbnNlcnQgYW4gZXF1YWxpdHkgYW5kIHRyaW0gdGhlIHN1cnJvdW5kaW5nIGVkaXRzLlxuICBcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciwgMCwgW0RJRkZfRVFVQUwsIGluc2VydGlvbi5zdWJzdHJpbmcoMCwgb3ZlcmxhcExlbmd0aDEpXSk7XG4gIFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgLSAxXVsxXSA9IGRlbGV0aW9uLnN1YnN0cmluZygwLCBkZWxldGlvbi5sZW5ndGggLSBvdmVybGFwTGVuZ3RoMSk7XG4gIFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgKyAxXVsxXSA9IGluc2VydGlvbi5zdWJzdHJpbmcob3ZlcmxhcExlbmd0aDEpO1xuICBcdFx0XHRcdFx0XHRwb2ludGVyKys7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdGlmIChvdmVybGFwTGVuZ3RoMiA+PSBkZWxldGlvbi5sZW5ndGggLyAyIHx8IG92ZXJsYXBMZW5ndGgyID49IGluc2VydGlvbi5sZW5ndGggLyAyKSB7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gUmV2ZXJzZSBvdmVybGFwIGZvdW5kLlxuICBcdFx0XHRcdFx0XHQvLyBJbnNlcnQgYW4gZXF1YWxpdHkgYW5kIHN3YXAgYW5kIHRyaW0gdGhlIHN1cnJvdW5kaW5nIGVkaXRzLlxuICBcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciwgMCwgW0RJRkZfRVFVQUwsIGRlbGV0aW9uLnN1YnN0cmluZygwLCBvdmVybGFwTGVuZ3RoMildKTtcblxuICBcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyIC0gMV1bMF0gPSBESUZGX0lOU0VSVDtcbiAgXHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciAtIDFdWzFdID0gaW5zZXJ0aW9uLnN1YnN0cmluZygwLCBpbnNlcnRpb24ubGVuZ3RoIC0gb3ZlcmxhcExlbmd0aDIpO1xuICBcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyICsgMV1bMF0gPSBESUZGX0RFTEVURTtcbiAgXHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciArIDFdWzFdID0gZGVsZXRpb24uc3Vic3RyaW5nKG92ZXJsYXBMZW5ndGgyKTtcbiAgXHRcdFx0XHRcdFx0cG9pbnRlcisrO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRwb2ludGVyKys7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cG9pbnRlcisrO1xuICBcdFx0fVxuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIERldGVybWluZSBpZiB0aGUgc3VmZml4IG9mIG9uZSBzdHJpbmcgaXMgdGhlIHByZWZpeCBvZiBhbm90aGVyLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIEZpcnN0IHN0cmluZy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBTZWNvbmQgc3RyaW5nLlxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgY29tbW9uIHRvIHRoZSBlbmQgb2YgdGhlIGZpcnN0XG4gICAgKiAgICAgc3RyaW5nIGFuZCB0aGUgc3RhcnQgb2YgdGhlIHNlY29uZCBzdHJpbmcuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDb21tb25PdmVybGFwID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0Mikge1xuICBcdFx0dmFyIHRleHQxTGVuZ3RoLCB0ZXh0Mkxlbmd0aCwgdGV4dExlbmd0aCwgYmVzdCwgbGVuZ3RoLCBwYXR0ZXJuLCBmb3VuZDtcblxuICBcdFx0Ly8gQ2FjaGUgdGhlIHRleHQgbGVuZ3RocyB0byBwcmV2ZW50IG11bHRpcGxlIGNhbGxzLlxuICBcdFx0dGV4dDFMZW5ndGggPSB0ZXh0MS5sZW5ndGg7XG4gIFx0XHR0ZXh0Mkxlbmd0aCA9IHRleHQyLmxlbmd0aDtcblxuICBcdFx0Ly8gRWxpbWluYXRlIHRoZSBudWxsIGNhc2UuXG4gIFx0XHRpZiAodGV4dDFMZW5ndGggPT09IDAgfHwgdGV4dDJMZW5ndGggPT09IDApIHtcbiAgXHRcdFx0cmV0dXJuIDA7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFRydW5jYXRlIHRoZSBsb25nZXIgc3RyaW5nLlxuICBcdFx0aWYgKHRleHQxTGVuZ3RoID4gdGV4dDJMZW5ndGgpIHtcbiAgXHRcdFx0dGV4dDEgPSB0ZXh0MS5zdWJzdHJpbmcodGV4dDFMZW5ndGggLSB0ZXh0Mkxlbmd0aCk7XG4gIFx0XHR9IGVsc2UgaWYgKHRleHQxTGVuZ3RoIDwgdGV4dDJMZW5ndGgpIHtcbiAgXHRcdFx0dGV4dDIgPSB0ZXh0Mi5zdWJzdHJpbmcoMCwgdGV4dDFMZW5ndGgpO1xuICBcdFx0fVxuICBcdFx0dGV4dExlbmd0aCA9IE1hdGgubWluKHRleHQxTGVuZ3RoLCB0ZXh0Mkxlbmd0aCk7XG5cbiAgXHRcdC8vIFF1aWNrIGNoZWNrIGZvciB0aGUgd29yc3QgY2FzZS5cbiAgXHRcdGlmICh0ZXh0MSA9PT0gdGV4dDIpIHtcbiAgXHRcdFx0cmV0dXJuIHRleHRMZW5ndGg7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFN0YXJ0IGJ5IGxvb2tpbmcgZm9yIGEgc2luZ2xlIGNoYXJhY3RlciBtYXRjaFxuICBcdFx0Ly8gYW5kIGluY3JlYXNlIGxlbmd0aCB1bnRpbCBubyBtYXRjaCBpcyBmb3VuZC5cbiAgXHRcdC8vIFBlcmZvcm1hbmNlIGFuYWx5c2lzOiBodHRwczovL25laWwuZnJhc2VyLm5hbWUvbmV3cy8yMDEwLzExLzA0L1xuICBcdFx0YmVzdCA9IDA7XG4gIFx0XHRsZW5ndGggPSAxO1xuICBcdFx0d2hpbGUgKHRydWUpIHtcbiAgXHRcdFx0cGF0dGVybiA9IHRleHQxLnN1YnN0cmluZyh0ZXh0TGVuZ3RoIC0gbGVuZ3RoKTtcbiAgXHRcdFx0Zm91bmQgPSB0ZXh0Mi5pbmRleE9mKHBhdHRlcm4pO1xuICBcdFx0XHRpZiAoZm91bmQgPT09IC0xKSB7XG4gIFx0XHRcdFx0cmV0dXJuIGJlc3Q7XG4gIFx0XHRcdH1cbiAgXHRcdFx0bGVuZ3RoICs9IGZvdW5kO1xuICBcdFx0XHRpZiAoZm91bmQgPT09IDAgfHwgdGV4dDEuc3Vic3RyaW5nKHRleHRMZW5ndGggLSBsZW5ndGgpID09PSB0ZXh0Mi5zdWJzdHJpbmcoMCwgbGVuZ3RoKSkge1xuICBcdFx0XHRcdGJlc3QgPSBsZW5ndGg7XG4gIFx0XHRcdFx0bGVuZ3RoKys7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBTcGxpdCB0d28gdGV4dHMgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzLiAgUmVkdWNlIHRoZSB0ZXh0cyB0byBhIHN0cmluZyBvZlxuICAgICogaGFzaGVzIHdoZXJlIGVhY2ggVW5pY29kZSBjaGFyYWN0ZXIgcmVwcmVzZW50cyBvbmUgbGluZS5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBGaXJzdCBzdHJpbmcuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgU2Vjb25kIHN0cmluZy5cbiAgICAqIEByZXR1cm4ge3tjaGFyczE6IHN0cmluZywgY2hhcnMyOiBzdHJpbmcsIGxpbmVBcnJheTogIUFycmF5LjxzdHJpbmc+fX1cbiAgICAqICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZW5jb2RlZCB0ZXh0MSwgdGhlIGVuY29kZWQgdGV4dDIgYW5kXG4gICAgKiAgICAgdGhlIGFycmF5IG9mIHVuaXF1ZSBzdHJpbmdzLlxuICAgICogICAgIFRoZSB6ZXJvdGggZWxlbWVudCBvZiB0aGUgYXJyYXkgb2YgdW5pcXVlIHN0cmluZ3MgaXMgaW50ZW50aW9uYWxseSBibGFuay5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkxpbmVzVG9DaGFycyA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIpIHtcbiAgXHRcdHZhciBsaW5lQXJyYXksIGxpbmVIYXNoLCBjaGFyczEsIGNoYXJzMjtcbiAgXHRcdGxpbmVBcnJheSA9IFtdOyAvLyBFLmcuIGxpbmVBcnJheVs0XSA9PT0gJ0hlbGxvXFxuJ1xuICBcdFx0bGluZUhhc2ggPSB7fTsgLy8gRS5nLiBsaW5lSGFzaFsnSGVsbG9cXG4nXSA9PT0gNFxuXG4gIFx0XHQvLyAnXFx4MDAnIGlzIGEgdmFsaWQgY2hhcmFjdGVyLCBidXQgdmFyaW91cyBkZWJ1Z2dlcnMgZG9uJ3QgbGlrZSBpdC5cbiAgXHRcdC8vIFNvIHdlJ2xsIGluc2VydCBhIGp1bmsgZW50cnkgdG8gYXZvaWQgZ2VuZXJhdGluZyBhIG51bGwgY2hhcmFjdGVyLlxuICBcdFx0bGluZUFycmF5WzBdID0gXCJcIjtcblxuICBcdFx0LyoqXG4gICAgICogU3BsaXQgYSB0ZXh0IGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncy4gIFJlZHVjZSB0aGUgdGV4dHMgdG8gYSBzdHJpbmcgb2ZcbiAgICAgKiBoYXNoZXMgd2hlcmUgZWFjaCBVbmljb2RlIGNoYXJhY3RlciByZXByZXNlbnRzIG9uZSBsaW5lLlxuICAgICAqIE1vZGlmaWVzIGxpbmVhcnJheSBhbmQgbGluZWhhc2ggdGhyb3VnaCBiZWluZyBhIGNsb3N1cmUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgU3RyaW5nIHRvIGVuY29kZS5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEVuY29kZWQgc3RyaW5nLlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gIFx0XHRmdW5jdGlvbiBkaWZmTGluZXNUb0NoYXJzTXVuZ2UodGV4dCkge1xuICBcdFx0XHR2YXIgY2hhcnMsIGxpbmVTdGFydCwgbGluZUVuZCwgbGluZUFycmF5TGVuZ3RoLCBsaW5lO1xuICBcdFx0XHRjaGFycyA9IFwiXCI7XG5cbiAgXHRcdFx0Ly8gV2FsayB0aGUgdGV4dCwgcHVsbGluZyBvdXQgYSBzdWJzdHJpbmcgZm9yIGVhY2ggbGluZS5cbiAgXHRcdFx0Ly8gdGV4dC5zcGxpdCgnXFxuJykgd291bGQgd291bGQgdGVtcG9yYXJpbHkgZG91YmxlIG91ciBtZW1vcnkgZm9vdHByaW50LlxuICBcdFx0XHQvLyBNb2RpZnlpbmcgdGV4dCB3b3VsZCBjcmVhdGUgbWFueSBsYXJnZSBzdHJpbmdzIHRvIGdhcmJhZ2UgY29sbGVjdC5cbiAgXHRcdFx0bGluZVN0YXJ0ID0gMDtcbiAgXHRcdFx0bGluZUVuZCA9IC0xO1xuXG4gIFx0XHRcdC8vIEtlZXBpbmcgb3VyIG93biBsZW5ndGggdmFyaWFibGUgaXMgZmFzdGVyIHRoYW4gbG9va2luZyBpdCB1cC5cbiAgXHRcdFx0bGluZUFycmF5TGVuZ3RoID0gbGluZUFycmF5Lmxlbmd0aDtcbiAgXHRcdFx0d2hpbGUgKGxpbmVFbmQgPCB0ZXh0Lmxlbmd0aCAtIDEpIHtcbiAgXHRcdFx0XHRsaW5lRW5kID0gdGV4dC5pbmRleE9mKFwiXFxuXCIsIGxpbmVTdGFydCk7XG4gIFx0XHRcdFx0aWYgKGxpbmVFbmQgPT09IC0xKSB7XG4gIFx0XHRcdFx0XHRsaW5lRW5kID0gdGV4dC5sZW5ndGggLSAxO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRsaW5lID0gdGV4dC5zdWJzdHJpbmcobGluZVN0YXJ0LCBsaW5lRW5kICsgMSk7XG4gIFx0XHRcdFx0bGluZVN0YXJ0ID0gbGluZUVuZCArIDE7XG5cbiAgXHRcdFx0XHR2YXIgbGluZUhhc2hFeGlzdHMgPSBsaW5lSGFzaC5oYXNPd25Qcm9wZXJ0eSA/IGxpbmVIYXNoLmhhc093blByb3BlcnR5KGxpbmUpIDogbGluZUhhc2hbbGluZV0gIT09IHVuZGVmaW5lZDtcblxuICBcdFx0XHRcdGlmIChsaW5lSGFzaEV4aXN0cykge1xuICBcdFx0XHRcdFx0Y2hhcnMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShsaW5lSGFzaFtsaW5lXSk7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdGNoYXJzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobGluZUFycmF5TGVuZ3RoKTtcbiAgXHRcdFx0XHRcdGxpbmVIYXNoW2xpbmVdID0gbGluZUFycmF5TGVuZ3RoO1xuICBcdFx0XHRcdFx0bGluZUFycmF5W2xpbmVBcnJheUxlbmd0aCsrXSA9IGxpbmU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdHJldHVybiBjaGFycztcbiAgXHRcdH1cblxuICBcdFx0Y2hhcnMxID0gZGlmZkxpbmVzVG9DaGFyc011bmdlKHRleHQxKTtcbiAgXHRcdGNoYXJzMiA9IGRpZmZMaW5lc1RvQ2hhcnNNdW5nZSh0ZXh0Mik7XG4gIFx0XHRyZXR1cm4ge1xuICBcdFx0XHRjaGFyczE6IGNoYXJzMSxcbiAgXHRcdFx0Y2hhcnMyOiBjaGFyczIsXG4gIFx0XHRcdGxpbmVBcnJheTogbGluZUFycmF5XG4gIFx0XHR9O1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIFJlaHlkcmF0ZSB0aGUgdGV4dCBpbiBhIGRpZmYgZnJvbSBhIHN0cmluZyBvZiBsaW5lIGhhc2hlcyB0byByZWFsIGxpbmVzIG9mXG4gICAgKiB0ZXh0LlxuICAgICogQHBhcmFtIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gZGlmZnMgQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKiBAcGFyYW0geyFBcnJheS48c3RyaW5nPn0gbGluZUFycmF5IEFycmF5IG9mIHVuaXF1ZSBzdHJpbmdzLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ2hhcnNUb0xpbmVzID0gZnVuY3Rpb24gKGRpZmZzLCBsaW5lQXJyYXkpIHtcbiAgXHRcdHZhciB4LCBjaGFycywgdGV4dCwgeTtcbiAgXHRcdGZvciAoeCA9IDA7IHggPCBkaWZmcy5sZW5ndGg7IHgrKykge1xuICBcdFx0XHRjaGFycyA9IGRpZmZzW3hdWzFdO1xuICBcdFx0XHR0ZXh0ID0gW107XG4gIFx0XHRcdGZvciAoeSA9IDA7IHkgPCBjaGFycy5sZW5ndGg7IHkrKykge1xuICBcdFx0XHRcdHRleHRbeV0gPSBsaW5lQXJyYXlbY2hhcnMuY2hhckNvZGVBdCh5KV07XG4gIFx0XHRcdH1cbiAgXHRcdFx0ZGlmZnNbeF1bMV0gPSB0ZXh0LmpvaW4oXCJcIik7XG4gIFx0XHR9XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogUmVvcmRlciBhbmQgbWVyZ2UgbGlrZSBlZGl0IHNlY3Rpb25zLiAgTWVyZ2UgZXF1YWxpdGllcy5cbiAgICAqIEFueSBlZGl0IHNlY3Rpb24gY2FuIG1vdmUgYXMgbG9uZyBhcyBpdCBkb2Vzbid0IGNyb3NzIGFuIGVxdWFsaXR5LlxuICAgICogQHBhcmFtIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gZGlmZnMgQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNsZWFudXBNZXJnZSA9IGZ1bmN0aW9uIChkaWZmcykge1xuICBcdFx0dmFyIHBvaW50ZXIsIGNvdW50RGVsZXRlLCBjb3VudEluc2VydCwgdGV4dEluc2VydCwgdGV4dERlbGV0ZSwgY29tbW9ubGVuZ3RoLCBjaGFuZ2VzLCBkaWZmUG9pbnRlciwgcG9zaXRpb247XG4gIFx0XHRkaWZmcy5wdXNoKFtESUZGX0VRVUFMLCBcIlwiXSk7IC8vIEFkZCBhIGR1bW15IGVudHJ5IGF0IHRoZSBlbmQuXG4gIFx0XHRwb2ludGVyID0gMDtcbiAgXHRcdGNvdW50RGVsZXRlID0gMDtcbiAgXHRcdGNvdW50SW5zZXJ0ID0gMDtcbiAgXHRcdHRleHREZWxldGUgPSBcIlwiO1xuICBcdFx0dGV4dEluc2VydCA9IFwiXCI7XG5cbiAgXHRcdHdoaWxlIChwb2ludGVyIDwgZGlmZnMubGVuZ3RoKSB7XG4gIFx0XHRcdHN3aXRjaCAoZGlmZnNbcG9pbnRlcl1bMF0pIHtcbiAgXHRcdFx0XHRjYXNlIERJRkZfSU5TRVJUOlxuICBcdFx0XHRcdFx0Y291bnRJbnNlcnQrKztcbiAgXHRcdFx0XHRcdHRleHRJbnNlcnQgKz0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0XHRwb2ludGVyKys7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRjYXNlIERJRkZfREVMRVRFOlxuICBcdFx0XHRcdFx0Y291bnREZWxldGUrKztcbiAgXHRcdFx0XHRcdHRleHREZWxldGUgKz0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0XHRwb2ludGVyKys7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRjYXNlIERJRkZfRVFVQUw6XG5cbiAgXHRcdFx0XHRcdC8vIFVwb24gcmVhY2hpbmcgYW4gZXF1YWxpdHksIGNoZWNrIGZvciBwcmlvciByZWR1bmRhbmNpZXMuXG4gIFx0XHRcdFx0XHRpZiAoY291bnREZWxldGUgKyBjb3VudEluc2VydCA+IDEpIHtcbiAgXHRcdFx0XHRcdFx0aWYgKGNvdW50RGVsZXRlICE9PSAwICYmIGNvdW50SW5zZXJ0ICE9PSAwKSB7XG5cbiAgXHRcdFx0XHRcdFx0XHQvLyBGYWN0b3Igb3V0IGFueSBjb21tb24gcHJlZml4ZXMuXG4gIFx0XHRcdFx0XHRcdFx0Y29tbW9ubGVuZ3RoID0gdGhpcy5kaWZmQ29tbW9uUHJlZml4KHRleHRJbnNlcnQsIHRleHREZWxldGUpO1xuICBcdFx0XHRcdFx0XHRcdGlmIChjb21tb25sZW5ndGggIT09IDApIHtcbiAgXHRcdFx0XHRcdFx0XHRcdGlmIChwb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydCA+IDAgJiYgZGlmZnNbcG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQgLSAxXVswXSA9PT0gRElGRl9FUVVBTCkge1xuICBcdFx0XHRcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydCAtIDFdWzFdICs9IHRleHRJbnNlcnQuc3Vic3RyaW5nKDAsIGNvbW1vbmxlbmd0aCk7XG4gIFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UoMCwgMCwgW0RJRkZfRVFVQUwsIHRleHRJbnNlcnQuc3Vic3RyaW5nKDAsIGNvbW1vbmxlbmd0aCldKTtcbiAgXHRcdFx0XHRcdFx0XHRcdFx0cG9pbnRlcisrO1xuICBcdFx0XHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0XHRcdFx0dGV4dEluc2VydCA9IHRleHRJbnNlcnQuc3Vic3RyaW5nKGNvbW1vbmxlbmd0aCk7XG4gIFx0XHRcdFx0XHRcdFx0XHR0ZXh0RGVsZXRlID0gdGV4dERlbGV0ZS5zdWJzdHJpbmcoY29tbW9ubGVuZ3RoKTtcbiAgXHRcdFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdFx0XHQvLyBGYWN0b3Igb3V0IGFueSBjb21tb24gc3VmZml4aWVzLlxuICBcdFx0XHRcdFx0XHRcdGNvbW1vbmxlbmd0aCA9IHRoaXMuZGlmZkNvbW1vblN1ZmZpeCh0ZXh0SW5zZXJ0LCB0ZXh0RGVsZXRlKTtcbiAgXHRcdFx0XHRcdFx0XHRpZiAoY29tbW9ubGVuZ3RoICE9PSAwKSB7XG4gIFx0XHRcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyXVsxXSA9IHRleHRJbnNlcnQuc3Vic3RyaW5nKHRleHRJbnNlcnQubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKSArIGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdFx0XHRcdFx0dGV4dEluc2VydCA9IHRleHRJbnNlcnQuc3Vic3RyaW5nKDAsIHRleHRJbnNlcnQubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKTtcbiAgXHRcdFx0XHRcdFx0XHRcdHRleHREZWxldGUgPSB0ZXh0RGVsZXRlLnN1YnN0cmluZygwLCB0ZXh0RGVsZXRlLmxlbmd0aCAtIGNvbW1vbmxlbmd0aCk7XG4gIFx0XHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdFx0Ly8gRGVsZXRlIHRoZSBvZmZlbmRpbmcgcmVjb3JkcyBhbmQgYWRkIHRoZSBtZXJnZWQgb25lcy5cbiAgXHRcdFx0XHRcdFx0aWYgKGNvdW50RGVsZXRlID09PSAwKSB7XG4gIFx0XHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIgLSBjb3VudEluc2VydCwgY291bnREZWxldGUgKyBjb3VudEluc2VydCwgW0RJRkZfSU5TRVJULCB0ZXh0SW5zZXJ0XSk7XG4gIFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY291bnRJbnNlcnQgPT09IDApIHtcbiAgXHRcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciAtIGNvdW50RGVsZXRlLCBjb3VudERlbGV0ZSArIGNvdW50SW5zZXJ0LCBbRElGRl9ERUxFVEUsIHRleHREZWxldGVdKTtcbiAgXHRcdFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQsIGNvdW50RGVsZXRlICsgY291bnRJbnNlcnQsIFtESUZGX0RFTEVURSwgdGV4dERlbGV0ZV0sIFtESUZGX0lOU0VSVCwgdGV4dEluc2VydF0pO1xuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRcdHBvaW50ZXIgPSBwb2ludGVyIC0gY291bnREZWxldGUgLSBjb3VudEluc2VydCArIChjb3VudERlbGV0ZSA/IDEgOiAwKSArIChjb3VudEluc2VydCA/IDEgOiAwKSArIDE7XG4gIFx0XHRcdFx0XHR9IGVsc2UgaWYgKHBvaW50ZXIgIT09IDAgJiYgZGlmZnNbcG9pbnRlciAtIDFdWzBdID09PSBESUZGX0VRVUFMKSB7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gTWVyZ2UgdGhpcyBlcXVhbGl0eSB3aXRoIHRoZSBwcmV2aW91cyBvbmUuXG4gIFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgLSAxXVsxXSArPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIsIDEpO1xuICBcdFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdFx0cG9pbnRlcisrO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0Y291bnRJbnNlcnQgPSAwO1xuICBcdFx0XHRcdFx0Y291bnREZWxldGUgPSAwO1xuICBcdFx0XHRcdFx0dGV4dERlbGV0ZSA9IFwiXCI7XG4gIFx0XHRcdFx0XHR0ZXh0SW5zZXJ0ID0gXCJcIjtcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0XHRpZiAoZGlmZnNbZGlmZnMubGVuZ3RoIC0gMV1bMV0gPT09IFwiXCIpIHtcbiAgXHRcdFx0ZGlmZnMucG9wKCk7IC8vIFJlbW92ZSB0aGUgZHVtbXkgZW50cnkgYXQgdGhlIGVuZC5cbiAgXHRcdH1cblxuICBcdFx0Ly8gU2Vjb25kIHBhc3M6IGxvb2sgZm9yIHNpbmdsZSBlZGl0cyBzdXJyb3VuZGVkIG9uIGJvdGggc2lkZXMgYnkgZXF1YWxpdGllc1xuICBcdFx0Ly8gd2hpY2ggY2FuIGJlIHNoaWZ0ZWQgc2lkZXdheXMgdG8gZWxpbWluYXRlIGFuIGVxdWFsaXR5LlxuICBcdFx0Ly8gZS5nOiBBPGlucz5CQTwvaW5zPkMgLT4gPGlucz5BQjwvaW5zPkFDXG4gIFx0XHRjaGFuZ2VzID0gZmFsc2U7XG4gIFx0XHRwb2ludGVyID0gMTtcblxuICBcdFx0Ly8gSW50ZW50aW9uYWxseSBpZ25vcmUgdGhlIGZpcnN0IGFuZCBsYXN0IGVsZW1lbnQgKGRvbid0IG5lZWQgY2hlY2tpbmcpLlxuICBcdFx0d2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGggLSAxKSB7XG4gIFx0XHRcdGlmIChkaWZmc1twb2ludGVyIC0gMV1bMF0gPT09IERJRkZfRVFVQUwgJiYgZGlmZnNbcG9pbnRlciArIDFdWzBdID09PSBESUZGX0VRVUFMKSB7XG5cbiAgXHRcdFx0XHRkaWZmUG9pbnRlciA9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdHBvc2l0aW9uID0gZGlmZlBvaW50ZXIuc3Vic3RyaW5nKGRpZmZQb2ludGVyLmxlbmd0aCAtIGRpZmZzW3BvaW50ZXIgLSAxXVsxXS5sZW5ndGgpO1xuXG4gIFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNpbmdsZSBlZGl0IHN1cnJvdW5kZWQgYnkgZXF1YWxpdGllcy5cbiAgXHRcdFx0XHRpZiAocG9zaXRpb24gPT09IGRpZmZzW3BvaW50ZXIgLSAxXVsxXSkge1xuXG4gIFx0XHRcdFx0XHQvLyBTaGlmdCB0aGUgZWRpdCBvdmVyIHRoZSBwcmV2aW91cyBlcXVhbGl0eS5cbiAgXHRcdFx0XHRcdGRpZmZzW3BvaW50ZXJdWzFdID0gZGlmZnNbcG9pbnRlciAtIDFdWzFdICsgZGlmZnNbcG9pbnRlcl1bMV0uc3Vic3RyaW5nKDAsIGRpZmZzW3BvaW50ZXJdWzFdLmxlbmd0aCAtIGRpZmZzW3BvaW50ZXIgLSAxXVsxXS5sZW5ndGgpO1xuICBcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciArIDFdWzFdID0gZGlmZnNbcG9pbnRlciAtIDFdWzFdICsgZGlmZnNbcG9pbnRlciArIDFdWzFdO1xuICBcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIgLSAxLCAxKTtcbiAgXHRcdFx0XHRcdGNoYW5nZXMgPSB0cnVlO1xuICBcdFx0XHRcdH0gZWxzZSBpZiAoZGlmZlBvaW50ZXIuc3Vic3RyaW5nKDAsIGRpZmZzW3BvaW50ZXIgKyAxXVsxXS5sZW5ndGgpID09PSBkaWZmc1twb2ludGVyICsgMV1bMV0pIHtcblxuICBcdFx0XHRcdFx0Ly8gU2hpZnQgdGhlIGVkaXQgb3ZlciB0aGUgbmV4dCBlcXVhbGl0eS5cbiAgXHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgLSAxXVsxXSArPSBkaWZmc1twb2ludGVyICsgMV1bMV07XG4gIFx0XHRcdFx0XHRkaWZmc1twb2ludGVyXVsxXSA9IGRpZmZzW3BvaW50ZXJdWzFdLnN1YnN0cmluZyhkaWZmc1twb2ludGVyICsgMV1bMV0ubGVuZ3RoKSArIGRpZmZzW3BvaW50ZXIgKyAxXVsxXTtcbiAgXHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyICsgMSwgMSk7XG4gIFx0XHRcdFx0XHRjaGFuZ2VzID0gdHJ1ZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0cG9pbnRlcisrO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBJZiBzaGlmdHMgd2VyZSBtYWRlLCB0aGUgZGlmZiBuZWVkcyByZW9yZGVyaW5nIGFuZCBhbm90aGVyIHNoaWZ0IHN3ZWVwLlxuICBcdFx0aWYgKGNoYW5nZXMpIHtcbiAgXHRcdFx0dGhpcy5kaWZmQ2xlYW51cE1lcmdlKGRpZmZzKTtcbiAgXHRcdH1cbiAgXHR9O1xuXG4gIFx0cmV0dXJuIGZ1bmN0aW9uIChvLCBuKSB7XG4gIFx0XHR2YXIgZGlmZiwgb3V0cHV0LCB0ZXh0O1xuICBcdFx0ZGlmZiA9IG5ldyBEaWZmTWF0Y2hQYXRjaCgpO1xuICBcdFx0b3V0cHV0ID0gZGlmZi5EaWZmTWFpbihvLCBuKTtcbiAgXHRcdGRpZmYuZGlmZkNsZWFudXBFZmZpY2llbmN5KG91dHB1dCk7XG4gIFx0XHR0ZXh0ID0gZGlmZi5kaWZmUHJldHR5SHRtbChvdXRwdXQpO1xuXG4gIFx0XHRyZXR1cm4gdGV4dDtcbiAgXHR9O1xuICB9KCk7XG5cbn0oKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGlvbihleHByLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IDAgLyogSW50ZXJwb2xhdGlvbiAqLyxcclxuICAgICAgICBleHByOiBleHByLFxyXG4gICAgICAgIHNwYW46IHNwYW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcnBvbGF0aW9uID0gaW50ZXJwb2xhdGlvbjtcclxuZnVuY3Rpb24gaWQobmFtZSwgc3Bhbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAyIC8qIElkZW50aWZpZXIgKi8sXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICBzcGFuOiBzcGFuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaWQgPSBpZDtcclxuZnVuY3Rpb24gcGF0aChoZWFkLCB0YWlsKSB7XHJcbiAgICBpZiAodGFpbCA9PT0gdm9pZCAwKSB7IHRhaWwgPSBbXTsgfVxyXG4gICAgaWYgKHRhaWwubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEgLyogUGF0aCAqLyxcclxuICAgICAgICAgICAgaGVhZDogaGVhZCxcclxuICAgICAgICAgICAgdGFpbDogdGFpbCxcclxuICAgICAgICAgICAgc3BhbjogeyBzdGFydDogaGVhZC5zcGFuLnN0YXJ0LCBlbmQ6IHRhaWxbdGFpbC5sZW5ndGggLSAxXS5zcGFuLmVuZCB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IDEgLyogUGF0aCAqLyxcclxuICAgICAgICAgICAgaGVhZDogaGVhZCxcclxuICAgICAgICAgICAgc3BhbjogaGVhZC5zcGFuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLnBhdGggPSBwYXRoO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tYmluYXRvcnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC9jb21iaW5hdG9yc1wiKSk7XHJcbmV4cG9ydHMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcclxudmFyIG11bHRpID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvbXVsdGlcIikpO1xyXG5leHBvcnRzLm11bHRpID0gbXVsdGk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NuaXBwZXRcIikpO1xyXG52YXIgYXN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2FzdFwiKSk7XHJcbmV4cG9ydHMuYXN0ID0gYXN0O1xyXG5fX2V4cG9ydChyZXF1aXJlKFwiLi9yZWFkL3JlYWRcIikpO1xyXG52YXIgdG9rZW5zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWQvdG9rZW5zXCIpKTtcclxuZXhwb3J0cy50b2tlbnMgPSB0b2tlbnM7XHJcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NwYW5cIikpO1xyXG52YXIgYiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkL3Rva2VuLWJ1aWxkZXJcIikpO1xyXG5leHBvcnRzLmIgPSBiO1xyXG52YXIgdXRpbHMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZC91dGlsc1wiKSk7XHJcbmV4cG9ydHMudXRpbHMgPSB1dGlscztcclxuX19leHBvcnQocmVxdWlyZShcIi4vcmVhZC9zZXJpYWxpemVcIikpO1xyXG5mdW5jdGlvbiBwYXJzZShpbnB1dCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG59XHJcbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiB0YWcoc291cmNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIG5leHQgPSBpbnB1dC5zbGljZShzb3VyY2UubGVuZ3RoKTtcclxuICAgICAgICBpZiAobmV4dC5mcmFnbWVudCA9PT0gc291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW25leHQucmVzdCwgbmV4dF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2luZDogXCJlcnJcIiwgc25pcHBldDogaW5wdXQsIHJlYXNvbjogXCJ0YWdcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50YWcgPSB0YWc7XHJcbmZ1bmN0aW9uIHBhdHRlcm4oc291cmNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIHJlc3QgPSBpbnB1dC5zbGljZVJlc3Q7XHJcbiAgICAgICAgdmFyIG1hdGNoID0gcmVzdC5tYXRjaChzb3VyY2UpO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IGlucHV0LnNsaWNlKG1hdGNoZWQubGVuZ3RoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJwYXR0ZXJuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5wYXR0ZXJuID0gcGF0dGVybjtcclxuZnVuY3Rpb24gdGFrZVVudGlsKHBhdHRlcm4pIHtcclxuICAgIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIG5leHQgPSBpbnB1dDtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0LmlzRU9GKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJ0YWtlVW50aWxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0LmlzTWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSBuZXh0LmV4dGVuZCgxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy50YWtlVW50aWwgPSB0YWtlVW50aWw7XHJcbmZ1bmN0aW9uIHRha2VXaGlsZShwYXR0ZXJuKSB7XHJcbiAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXh0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dC5pc0VPRigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbbmV4dC5yZXN0LCBuZXh0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0LmlzTWF0Y2gocGF0dGVybikpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5leHRlbmQocGF0dGVybi5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJ0YWtlV2hpbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LnJlc3QsIG5leHRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy50YWtlV2hpbGUgPSB0YWtlV2hpbGU7XHJcbmZ1bmN0aW9uIHNlcSgpIHtcclxuICAgIHZhciBjb21iaW5hdG9ycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBjb21iaW5hdG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciBvdXQgPSBbXTtcclxuICAgICAgICB2YXIgY3VycmVudCA9IGlucHV0O1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgY29tYmluYXRvcnNfMSA9IGNvbWJpbmF0b3JzOyBfaSA8IGNvbWJpbmF0b3JzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gY29tYmluYXRvcnNfMVtfaV07XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVtKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICBvdXQucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gbmV4dC5yZXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnNlcSA9IHNlcTtcclxuZnVuY3Rpb24gYW55KCkge1xyXG4gICAgdmFyIGNvbWJpbmF0b3JzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGNvbWJpbmF0b3JzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbWJpbmF0b3JzXzIgPSBjb21iaW5hdG9yczsgX2kgPCBjb21iaW5hdG9yc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNvbWJpbmF0b3JzXzJbX2ldO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlbShjdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5lcnIoaW5wdXQsIFwiYW55XCIpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFueSA9IGFueTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiBtYW55KHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gaW5wdXQ7XHJcbiAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVyYXRlID0gc291cmNlKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBpZiAoaXRlcmF0ZS5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LnJlc3QsIG91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gaXRlcmF0ZS52YWx1ZSwgbmV4dCA9IF9hWzBdLCBtYXRjaCA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMubWFueSA9IG1hbnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzbmlwcGV0XzEgPSByZXF1aXJlKFwiLi4vc25pcHBldFwiKTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG52YXIgY29tYmluYXRvcnNfMSA9IHJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzXCIpO1xyXG52YXIgbXVsdGlfMSA9IHJlcXVpcmUoXCIuL211bHRpXCIpO1xyXG52YXIgdG9rZW5zXzEgPSByZXF1aXJlKFwiLi90b2tlbnNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmZ1bmN0aW9uIHJlYWQoc291cmNlKSB7XHJcbiAgICB2YXIgaW5wdXQgPSBzbmlwcGV0XzEuU25pcHBldC5pbnB1dChzb3VyY2UpO1xyXG4gICAgdmFyIHJlc3VsdCA9IHV0aWxzXzEuY29tcGxldGUodXRpbHNfMS5tYXAobXVsdGlfMS5tYW55KElOVEVSUE9MQVRFKSwgZnVuY3Rpb24gKHRva2Vucykge1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEucm9vdCh0b2tlbnMsIHNwYW5fMS5yYW5nZS5hcHBseSh2b2lkIDAsIHRva2VucykpKTtcclxuICAgIH0pKShpbnB1dCk7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIHJldHVybiB1dGlsc18xLm1hcFJlc3VsdChyZXN1bHQsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IF9hWzFdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW4pO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yZWFkID0gcmVhZDtcclxuZnVuY3Rpb24gSU5URVJQT0xBVEUoaW5wdXQpIHtcclxuICAgIHJldHVybiB1dGlsc18xLm1hcChjb21iaW5hdG9yc18xLnNlcShjb21iaW5hdG9yc18xLnRhZyhcInt7XCIpLCBTUEFDRURfVE9LRU5TLCBjb21iaW5hdG9yc18xLnRhZyhcIn19XCIpKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBfYVswXSwgcGF0aCA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuaW50ZXJwb2xhdGUocGF0aCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSkpO1xyXG4gICAgfSkoaW5wdXQpO1xyXG59XHJcbmV4cG9ydHMuSU5URVJQT0xBVEUgPSBJTlRFUlBPTEFURTtcclxuZnVuY3Rpb24gU0VYUChpbnB1dCkge1xyXG4gICAgcmV0dXJuIHV0aWxzXzEubWFwKGNvbWJpbmF0b3JzXzEuc2VxKGNvbWJpbmF0b3JzXzEudGFnKFwiKFwiKSwgU1BBQ0VEX1RPS0VOUywgY29tYmluYXRvcnNfMS50YWcoXCIpXCIpKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIG9wZW4gPSBfYVswXSwgcGF0aCA9IF9hWzFdLCBjbG9zZSA9IF9hWzJdO1xyXG4gICAgICAgIHJldHVybiBzbmlwcGV0XzEub2sodG9rZW5zXzEuc2V4cChwYXRoLCBzcGFuXzEucmFuZ2Uob3BlbiwgY2xvc2UpKSk7XHJcbiAgICB9KShpbnB1dCk7XHJcbn1cclxuZXhwb3J0cy5TRVhQID0gU0VYUDtcclxudmFyIElEX1NOSVBQRVQgPSBjb21iaW5hdG9yc18xLnBhdHRlcm4oL15cXHB7SURfU3RhcnR9W1xccHtJRF9Db250aW51ZX0tXSovdSk7XHJcbnZhciBJRCA9IHRva2VuKElEX1NOSVBQRVQsIFwiSWRlbnRpZmllclwiIC8qIElkZW50aWZpZXIgKi8pO1xyXG52YXIgRE9UID0gdG9rZW4oY29tYmluYXRvcnNfMS50YWcoXCIuXCIpLCBcIkRvdFwiIC8qIERvdCAqLyk7XHJcbnZhciBXUyA9IHRva2VuKGNvbWJpbmF0b3JzXzEucGF0dGVybigvXlsgXSsvKSwgXCJXU1wiIC8qIFdTICovKTtcclxudmFyIEVRID0gdG9rZW4oY29tYmluYXRvcnNfMS50YWcoXCI9XCIpLCBcIkVxXCIgLyogRXEgKi8pO1xyXG52YXIgQVJHID0gdXRpbHNfMS5tYXAoY29tYmluYXRvcnNfMS5zZXEoY29tYmluYXRvcnNfMS50YWcoXCJAXCIpLCBJRF9TTklQUEVUKSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgYXQgPSBfYVswXSwgaWQgPSBfYVsxXTtcclxuICAgIHJldHVybiBzbmlwcGV0XzEub2soYXJnKHNwYW5fMS5yYW5nZShhdCwgaWQpKSk7XHJcbn0pO1xyXG5mdW5jdGlvbiB3cmFwKGNvbWJpbmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gY29tYmluYXRvcihpbnB1dCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtyZXN1bHQudmFsdWVbMF0sIFtyZXN1bHQudmFsdWVbMV1dXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLndyYXAgPSB3cmFwO1xyXG5mdW5jdGlvbiB0b2tlbihjb21iaW5hdG9yLCB0eXBlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNvbWJpbmF0b3IoaW5wdXQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbXHJcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWVbMF0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBzcGFuOiByZXN1bHQudmFsdWVbMV0uc3BhblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudG9rZW4gPSB0b2tlbjtcclxuZnVuY3Rpb24gU1BBQ0VEX1RPS0VOUyhpbnB1dCkge1xyXG4gICAgdmFyIG91dCA9IFtdO1xyXG4gICAgdmFyIHRrID0gY29tYmluYXRvcnNfMS5hbnkod3JhcChTRVhQKSwgZXhwb3J0cy5OQU1FRCwgUEFUSCwgd3JhcChXUykpO1xyXG4gICAgdmFyIGN1cnJlbnQgPSBpbnB1dDtcclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQuaXNFT0YoKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRrKGN1cnJlbnQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIHRva2VucyA9IF9hWzFdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzIgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbl8xID0gdG9rZW5zXzJbX2ldO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbl8xKSkge1xyXG4gICAgICAgICAgICAgICAgb3V0LnB1c2guYXBwbHkob3V0LCB0b2tlbl8xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG91dC5wdXNoKHRva2VuXzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnQgPSBuZXh0O1xyXG4gICAgfVxyXG4gICAgaWYgKG91dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBraW5kOiBcImVyclwiLFxyXG4gICAgICAgICAgICByZWFzb246IFwicHJlc2VudFwiLFxyXG4gICAgICAgICAgICBzbmlwcGV0OiBpbnB1dFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc25pcHBldF8xLm9rKFtjdXJyZW50LCBvdXRdKTtcclxufVxyXG5leHBvcnRzLlNQQUNFRF9UT0tFTlMgPSBTUEFDRURfVE9LRU5TO1xyXG5leHBvcnRzLk5BTUVEID0gY29tYmluYXRvcnNfMS5zZXEoSUQsIEVRLCBQQVRIKTtcclxuZXhwb3J0cy5IRUFEID0gY29tYmluYXRvcnNfMS5hbnkoQVJHLCBJRCk7XHJcbi8vIFRPRE86IEFsbG93IGBbXWAgb3Igc3RyaW5nIG1lbWJlcnNcclxuZXhwb3J0cy5NRU1CRVIgPSBJRDtcclxuZnVuY3Rpb24gUEFUSChpbnB1dCkge1xyXG4gICAgdmFyIHJlc3VsdCA9IGV4cG9ydHMuSEVBRChpbnB1dCk7XHJcbiAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgdmFyIF9hID0gcmVzdWx0LnZhbHVlLCBjdXJyZW50ID0gX2FbMF0sIGhlYWQgPSBfYVsxXTtcclxuICAgIHZhciBvdXQgPSBbaGVhZF07XHJcbiAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgIHZhciByZXN1bHREb3QgPSBET1QoY3VycmVudCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdERvdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzbmlwcGV0XzEub2soW2N1cnJlbnQsIG91dF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50ID0gcmVzdWx0RG90LnZhbHVlWzBdO1xyXG4gICAgICAgIHZhciBuZXh0RG90ID0gcmVzdWx0RG90LnZhbHVlWzFdO1xyXG4gICAgICAgIHZhciByZXN1bHRNZW1iZXIgPSBleHBvcnRzLk1FTUJFUihjdXJyZW50KTtcclxuICAgICAgICBpZiAocmVzdWx0TWVtYmVyLmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdE1lbWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudCA9IHJlc3VsdE1lbWJlci52YWx1ZVswXTtcclxuICAgICAgICB2YXIgbmV4dE1lbWJlciA9IHJlc3VsdE1lbWJlci52YWx1ZVsxXTtcclxuICAgICAgICBvdXQucHVzaChuZXh0RG90LCBuZXh0TWVtYmVyKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlBBVEggPSBQQVRIO1xyXG5mdW5jdGlvbiBsZWFmKHR5cGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoc3BhbikgeyByZXR1cm4gKHsgdHlwZTogdHlwZSwgc3Bhbjogc3BhbiB9KTsgfTtcclxufVxyXG5leHBvcnRzLmxlYWYgPSBsZWFmO1xyXG5leHBvcnRzLmlkID0gbGVhZihcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovKTtcclxuZXhwb3J0cy5kb3QgPSBsZWFmKFwiRG90XCIgLyogRG90ICovKTtcclxuZXhwb3J0cy5lcSA9IGxlYWYoXCJFcVwiIC8qIEVxICovKTtcclxuZXhwb3J0cy53cyA9IGxlYWYoXCJXU1wiIC8qIFdTICovKTtcclxuZnVuY3Rpb24gYXJnKHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJBcmd1bWVudFwiIC8qIEFyZ3VtZW50ICovLFxyXG4gICAgICAgIG5hbWU6IHsgc3RhcnQ6IHNwYW4uc3RhcnQgKyAxLCBlbmQ6IHNwYW4uZW5kIH0sXHJcbiAgICAgICAgc3Bhbjogc3BhblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmFyZyA9IGFyZztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBzcGFuXzEgPSByZXF1aXJlKFwiLi4vc3BhblwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuZnVuY3Rpb24gc2VyaWFsaXplUm9vdChyb290LCBzb3VyY2UpIHtcclxuICAgIHZhciBvdXQgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSByb290LmNoaWxkcmVuOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IF9hW19pXTtcclxuICAgICAgICBvdXQucHVzaC5hcHBseShvdXQsIHNlcmlhbGl6ZU5vZGUodG9rZW4sIHNvdXJjZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dC5qb2luKFwiXCIpO1xyXG59XHJcbmV4cG9ydHMuc2VyaWFsaXplUm9vdCA9IHNlcmlhbGl6ZVJvb3Q7XHJcbmZ1bmN0aW9uIHNlcmlhbGl6ZU5vZGUodG9rZW4sIHNvdXJjZSkge1xyXG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIkRvdFwiIC8qIERvdCAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFtcIi5cIl07XHJcbiAgICAgICAgY2FzZSBcIkVxXCIgLyogRXEgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBbXCI9XCJdO1xyXG4gICAgICAgIGNhc2UgXCJBcmd1bWVudFwiIC8qIEFyZ3VtZW50ICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW1wiQFwiLCBzcGFuXzEuc2xpY2UodG9rZW4ubmFtZSwgc291cmNlKV07XHJcbiAgICAgICAgY2FzZSBcIklkZW50aWZpZXJcIiAvKiBJZGVudGlmaWVyICovOlxyXG4gICAgICAgIGNhc2UgXCJXU1wiIC8qIFdTICovOlxyXG4gICAgICAgICAgICByZXR1cm4gW3NwYW5fMS5zbGljZSh0b2tlbi5zcGFuLCBzb3VyY2UpXTtcclxuICAgICAgICBjYXNlIFwiU2V4cFwiIC8qIFNleHAgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbXCIoXCJdLCBzZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBbXCIpXCJdKTtcclxuICAgICAgICBjYXNlIFwiSW50ZXJwb2xhdGVcIiAvKiBJbnRlcnBvbGF0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFtcInt7XCJdLCBzZXJpYWxpemVMaXN0KHRva2VuLmNoaWxkcmVuLCBzb3VyY2UpLCBbXCJ9fVwiXSk7XHJcbiAgICAgICAgY2FzZSBcIlRydXN0ZWRJbnRlcnBvbGF0ZVwiIC8qIFRydXN0ZWRJbnRlcnBvbGF0ZSAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFtcInt7e1wiXSwgc2VyaWFsaXplTGlzdCh0b2tlbi5jaGlsZHJlbiwgc291cmNlKSwgW1wifX19XCJdKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS51bnJlYWNoYWJsZSh0b2tlbik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5zZXJpYWxpemVOb2RlID0gc2VyaWFsaXplTm9kZTtcclxuZnVuY3Rpb24gc2VyaWFsaXplTGlzdCh0b2tlbnMsIHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKHRva2Vucy5mbGF0TWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gc2VyaWFsaXplTm9kZShjaGlsZCwgc291cmNlKTsgfSkpO1xyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHJlYWQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZFwiKSk7XHJcbnZhciB0b2tlbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdG9rZW5zXCIpKTtcclxudmFyIHNwYW5fMSA9IHJlcXVpcmUoXCIuLi9zcGFuXCIpO1xyXG5mdW5jdGlvbiBpZChuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHJlYWQuaWQoYnVpbGRlci5jb25zdW1lKG5hbWUpKTsgfTtcclxufVxyXG5leHBvcnRzLmlkID0gaWQ7XHJcbmZ1bmN0aW9uIGFyZyhuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHJlYWQuYXJnKGJ1aWxkZXIuY29uc3VtZShuYW1lKSk7IH07XHJcbn1cclxuZXhwb3J0cy5hcmcgPSBhcmc7XHJcbmV4cG9ydHMuZG90ID0gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHJlYWQuZG90KGJ1aWxkZXIuY29uc3VtZShcIi5cIikpOyB9O1xyXG5leHBvcnRzLmVxID0gZnVuY3Rpb24gKGJ1aWxkZXIpIHsgcmV0dXJuIHJlYWQuZXEoYnVpbGRlci5jb25zdW1lKFwiPVwiKSk7IH07XHJcbmV4cG9ydHMuc3AgPSBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gcmVhZC53cyhidWlsZGVyLmNvbnN1bWUoXCIgXCIpKTsgfTtcclxuZnVuY3Rpb24gd3Moc3BhY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikgeyByZXR1cm4gcmVhZC53cyhidWlsZGVyLmNvbnN1bWUoc3BhY2UpKTsgfTtcclxufVxyXG5leHBvcnRzLndzID0gd3M7XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlKGNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICB2YXIgb3BlbiA9IGJ1aWxkZXIuY29uc3VtZShcInt7XCIpO1xyXG4gICAgICAgIHZhciBvdXQgPSBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZChidWlsZGVyKTsgfSk7XHJcbiAgICAgICAgdmFyIGNsb3NlID0gYnVpbGRlci5jb25zdW1lKFwifX1cIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5pbnRlcnBvbGF0ZShvdXQsIHNwYW5fMS5yYW5nZShvcGVuLCBjbG9zZSkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVycG9sYXRlID0gaW50ZXJwb2xhdGU7XHJcbmZ1bmN0aW9uIHNleHAoY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgIHZhciBvcGVuID0gYnVpbGRlci5jb25zdW1lKFwiKFwiKTtcclxuICAgICAgICB2YXIgb3V0ID0gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQoYnVpbGRlcik7IH0pO1xyXG4gICAgICAgIHZhciBjbG9zZSA9IGJ1aWxkZXIuY29uc3VtZShcIilcIik7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vucy5zZXhwKG91dCwgc3Bhbl8xLnJhbmdlKG9wZW4sIGNsb3NlKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuc2V4cCA9IHNleHA7XHJcbmZ1bmN0aW9uIHJvb3QoY2hpbGRyZW4pIHtcclxuICAgIHZhciBidWlsZGVyID0gbmV3IFRva2VuQnVpbGRlcigpO1xyXG4gICAgdmFyIHN0YXJ0ID0gYnVpbGRlci5wb3M7XHJcbiAgICB2YXIgb3V0ID0gY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQoYnVpbGRlcik7IH0pO1xyXG4gICAgdmFyIGVuZCA9IGJ1aWxkZXIucG9zO1xyXG4gICAgcmV0dXJuIHRva2Vucy5yb290KG91dCwgc3Bhbl8xLnNwYW4oc3RhcnQsIGVuZCkpO1xyXG59XHJcbmV4cG9ydHMucm9vdCA9IHJvb3Q7XHJcbnZhciBUb2tlbkJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUb2tlbkJ1aWxkZXIocG9zKSB7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gdm9pZCAwKSB7IHBvcyA9IDA7IH1cclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgIH1cclxuICAgIFRva2VuQnVpbGRlci5wcm90b3R5cGUuY29uc3VtZSA9IGZ1bmN0aW9uIChjaGFycykge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xyXG4gICAgICAgIHRoaXMucG9zICs9IGNoYXJzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogdGhpcy5wb3MgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVG9rZW5CdWlsZGVyO1xyXG59KCkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBzZXhwKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiU2V4cFwiIC8qIFNleHAgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5zZXhwID0gc2V4cDtcclxuZnVuY3Rpb24gaW50ZXJwb2xhdGUoY2hpbGRyZW4sIHNwYW4pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogXCJJbnRlcnBvbGF0ZVwiIC8qIEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZTtcclxuZnVuY3Rpb24gdHJ1c3RlZEludGVycG9sYXRlKGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiVHJ1c3RlZEludGVycG9sYXRlXCIgLyogVHJ1c3RlZEludGVycG9sYXRlICovLFxyXG4gICAgICAgIHNwYW46IHNwYW4sXHJcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudHJ1c3RlZEludGVycG9sYXRlID0gdHJ1c3RlZEludGVycG9sYXRlO1xyXG5mdW5jdGlvbiByb290KGNoaWxkcmVuLCBzcGFuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFwiUm9vdFwiIC8qIFJvb3QgKi8sXHJcbiAgICAgICAgc3Bhbjogc3BhbixcclxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5yb290ID0gcm9vdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHNuaXBwZXRfMSA9IHJlcXVpcmUoXCIuLi9zbmlwcGV0XCIpO1xyXG5mdW5jdGlvbiB0aGVuKGNvbWJpbmF0b3IsIHRoZW4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgZmlyc3QgPSBjb21iaW5hdG9yKGlucHV0KTtcclxuICAgICAgICBpZiAoZmlyc3Qua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IGZpcnN0LnZhbHVlLCBuZXh0ID0gX2FbMF0sIGZpcnN0VmFsdWUgPSBfYVsxXTtcclxuICAgICAgICB2YXIgc2Vjb25kID0gdGhlbihuZXh0KTtcclxuICAgICAgICBpZiAoc2Vjb25kLmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlY29uZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9iID0gc2Vjb25kLnZhbHVlLCByZXN0ID0gX2JbMF0sIHNlY29uZFZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayhbcmVzdCwgW2ZpcnN0VmFsdWUsIHNlY29uZFZhbHVlXV0pO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnRoZW4gPSB0aGVuO1xyXG5mdW5jdGlvbiBtYXBSZXN1bHQocmVzdWx0LCBjYWxsYmFjaykge1xyXG4gICAgaWYgKHJlc3VsdC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHQudmFsdWUpO1xyXG59XHJcbmV4cG9ydHMubWFwUmVzdWx0ID0gbWFwUmVzdWx0O1xyXG5mdW5jdGlvbiBtYXAoY29tYmluYXRvciwgbWFwcGVyKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICAgdmFyIGZpcnN0ID0gY29tYmluYXRvcihpbnB1dCk7XHJcbiAgICAgICAgaWYgKGZpcnN0LmtpbmQgPT09IFwiZXJyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpcnN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSBmaXJzdC52YWx1ZSwgbmV4dCA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBtYXBwZXIodmFsdWUsIG5leHQpO1xyXG4gICAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc25pcHBldF8xLm9rKFtuZXh0LCByZXN1bHQudmFsdWVdKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5tYXAgPSBtYXA7XHJcbmZ1bmN0aW9uIGNvbXBsZXRlKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgICAgIHJldHVybiBtYXAoc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIG5leHQpIHtcclxuICAgICAgICAgICAgaWYgKG5leHQubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJpbmNvbXBsZXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNuaXBwZXRfMS5vayh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KShpbnB1dCk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuY29tcGxldGUgPSBjb21wbGV0ZTtcclxuZnVuY3Rpb24gcHJlc2VudChzb3VyY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gc291cmNlKGlucHV0KTtcclxuICAgICAgICBpZiAocmVzdWx0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSByZXN1bHQudmFsdWUsIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgICAgICAgICAgaWYgKGlucHV0LmVxKG5leHQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc25pcHBldF8xLmVycihpbnB1dCwgXCJlbXB0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLnByZXNlbnQgPSBwcmVzZW50O1xyXG5mdW5jdGlvbiB1bnJlYWNoYWJsZSh2YWx1ZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWFjaGFibGUgY29kZSByZWFjaGVkXCIpO1xyXG59XHJcbmV4cG9ydHMudW5yZWFjaGFibGUgPSB1bnJlYWNoYWJsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFNuaXBwZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTbmlwcGV0KHNvdXJjZSwgb2Zmc2V0LCBsZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIH1cclxuICAgIFNuaXBwZXQuaW5wdXQgPSBmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbmlwcGV0KHNvdXJjZSwgMCwgMCk7XHJcbiAgICB9O1xyXG4gICAgU25pcHBldC5wcm90b3R5cGUuZXEgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc291cmNlID09PSBvdGhlci5zb3VyY2UgJiZcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPT09IG90aGVyLm9mZnNldCAmJlxyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9PT0gb3RoZXIubGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5mbXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPG9mZnNldDpcIiArIHRoaXMub2Zmc2V0ICsgXCIgbGVuZ3RoOlwiICsgdGhpcy5sZW5ndGggKyBcIj5cIjtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChjaGFycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgY2hhcnMpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJzbGljZVJlc3RcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc2xpY2UodGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU25pcHBldC5wcm90b3R5cGUsIFwicmVzdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5pc0VPRiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCA9PT0gdGhpcy5zb3VyY2UubGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmlzTWF0Y2ggPSBmdW5jdGlvbiAoY2hhcnMpIHtcclxuICAgICAgICB2YXIgc2xpY2UgPSB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoLCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoICsgY2hhcnMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gc2xpY2UgPT09IGNoYXJzO1xyXG4gICAgfTtcclxuICAgIFNuaXBwZXQucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChjb3VudCkge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gdm9pZCAwKSB7IGNvdW50ID0gMTsgfVxyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQsIHRoaXMubGVuZ3RoICsgY291bnQpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJzcGFuXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLm9mZnNldCxcclxuICAgICAgICAgICAgICAgIGVuZDogdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNuaXBwZXQucHJvdG90eXBlLCBcImZyYWdtZW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIHRoaXMubGVuZ3RoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJyZXN0TGVuZ3RoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLmxlbmd0aCAtIHRoaXMub2Zmc2V0IC0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gU25pcHBldDtcclxufSgpKTtcclxuZXhwb3J0cy5TbmlwcGV0ID0gU25pcHBldDtcclxuZnVuY3Rpb24gb2sodmFsdWUpIHtcclxuICAgIHJldHVybiB7IGtpbmQ6IFwib2tcIiwgdmFsdWU6IHZhbHVlIH07XHJcbn1cclxuZXhwb3J0cy5vayA9IG9rO1xyXG5mdW5jdGlvbiBlcnIoc25pcHBldCwgcmVhc29uKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtpbmQ6IFwiZXJyXCIsXHJcbiAgICAgICAgc25pcHBldDogc25pcHBldCxcclxuICAgICAgICByZWFzb246IHJlYXNvblxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmVyciA9IGVycjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gc3BhbihzdGFydCwgZW5kKSB7XHJcbiAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogZW5kIH07XHJcbn1cclxuZXhwb3J0cy5zcGFuID0gc3BhbjtcclxuZnVuY3Rpb24gcmFuZ2UoKSB7XHJcbiAgICB2YXIgc3BhbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgc3BhbnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChzcGFucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gc3BhbigwLCAwKTtcclxuICAgIH1cclxuICAgIHZhciBmaXJzdCA9IHNwYW5zWzBdO1xyXG4gICAgdmFyIGxhc3QgPSBmaXJzdDtcclxuICAgIGZvciAodmFyIF9hID0gMCwgc3BhbnNfMSA9IHNwYW5zOyBfYSA8IHNwYW5zXzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgdmFyIHNwYW5fMSA9IHNwYW5zXzFbX2FdO1xyXG4gICAgICAgIGxhc3QgPSBzcGFuXzE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdGFydDogZ2V0U3BhbihmaXJzdCkuc3RhcnQsIGVuZDogZ2V0U3BhbihsYXN0KS5lbmQgfTtcclxufVxyXG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XHJcbmZ1bmN0aW9uIGlzU3BhbihpdGVtKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0uc3RhcnQgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGl0ZW0uZW5kID09PSBcIm51bWJlclwiO1xyXG59XHJcbmV4cG9ydHMuaXNTcGFuID0gaXNTcGFuO1xyXG5mdW5jdGlvbiBnZXRTcGFuKGl0ZW0pIHtcclxuICAgIGlmIChpc1NwYW4oaXRlbSkpIHtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnNwYW47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5nZXRTcGFuID0gZ2V0U3BhbjtcclxuZnVuY3Rpb24gc2xpY2Uoc3Bhbiwgc291cmNlKSB7XHJcbiAgICByZXR1cm4gc291cmNlLnNsaWNlKHNwYW4uc3RhcnQsIHNwYW4uZW5kKTtcclxufVxyXG5leHBvcnRzLnNsaWNlID0gc2xpY2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBxdW5pdF8xID0gcmVxdWlyZShcInF1bml0XCIpO1xyXG52YXIgaGJzX3BhcnNlcl9uZXh0XzEgPSByZXF1aXJlKFwiaGJzLXBhcnNlci1uZXh0XCIpO1xyXG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcclxucXVuaXRfMS5tb2R1bGUoXCJbY29tYmluYXRvcnNdIHRhZ1wiKTtcclxucXVuaXRfMS50ZXN0KFwibWF0Y2g6IG9uZSBjaGFyYWN0ZXIgdGFnXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIHZhciBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiKTtcclxuICAgIHZhciBfYSA9IGhlbHBlcnNfMS51bndyYXAoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwiaFwiKShpbnB1dCkpLCBuZXh0ID0gX2FbMF0sIGZyYWdtZW50ID0gX2FbMV07XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0LnNsaWNlKDEpLnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChmcmFnbWVudCwgaW5wdXQuc2xpY2UoMSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwibWF0Y2g6IG11bHRpLWNoYXJhY3RlciB0YWdcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgdmFyIF9hID0gaGVscGVyc18xLnVud3JhcChoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJoZWxsb1wiKShpbnB1dCkpLCBuZXh0ID0gX2FbMF0sIGZyYWdtZW50ID0gX2FbMV07XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0LnNsaWNlKDUpLnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChmcmFnbWVudCwgaW5wdXQuc2xpY2UoNSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwibWlzbWF0Y2g6IG11bHRpLWNoYXJhY3RlciB0YWdcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgdmFyIG5leHQgPSBoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJob2xsYVwiKShpbnB1dCk7XHJcbiAgICBoZWxwZXJzXzEuZXFFcnJvcihuZXh0LCBoYnNfcGFyc2VyX25leHRfMS5lcnIoaW5wdXQsIFwidGFnXCIpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1pc21hdGNoOiBub3QgYXQgMCBvZmZzZXRcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgdmFyIG5leHQgPSBoZWxwZXJzXzEudW53cmFwKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRhZyhcImhlbGxvIFwiKShpbnB1dCkpWzBdO1xyXG4gICAgdmFyIG1pc21hdGNoID0gaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwid29vbGRcIikobmV4dCk7XHJcbiAgICBoZWxwZXJzXzEuZXFFcnJvcihtaXNtYXRjaCwgaGJzX3BhcnNlcl9uZXh0XzEuZXJyKG5leHQsIFwidGFnXCIpKTtcclxufSk7XHJcbnF1bml0XzEubW9kdWxlKFwiW2NvbWJpbmF0b3JzXSB0YWtlVW50aWxcIik7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBza2lwcGluZyBhIGNodW5rIG9mIGNoYXJhY3RlcnNcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgdmFyIF9hID0gaGVscGVyc18xLnVud3JhcChoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlVW50aWwoXCJ3b3JsZFwiKShpbnB1dCkpLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0LnNsaWNlKDYpLnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChtYXRjaCwgaW5wdXQuc2xpY2UoNikpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwibWF0Y2g6IHNraXBwaW5nIHplcm8gY2hhcmFjdGVyc1wiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICB2YXIgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIik7XHJcbiAgICB2YXIgX2EgPSBoZWxwZXJzXzEudW53cmFwKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRha2VVbnRpbChcImhlbGxvXCIpKGlucHV0KSksIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQucmVzdCk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG1hdGNoLCBpbnB1dC5yZXN0KTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBza2lwcGluZyB1bnRpbCB0aGUgbGFzdCBjaGFyYWN0ZXJcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgdmFyIF9hID0gaGVscGVyc18xLnVud3JhcChoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlVW50aWwoXCJkXCIpKGlucHV0KSksIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoMTApLnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChtYXRjaCwgaW5wdXQuc2xpY2UoMTApKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBza2lwcGluZyB1bnRpbCB0aGUgbGFzdCBjaGFyYWN0ZXJzXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIHZhciBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiKTtcclxuICAgIHZhciBfYSA9IGhlbHBlcnNfMS51bndyYXAoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFrZVVudGlsKFwid29ybGRcIikoaW5wdXQpKSwgbmV4dCA9IF9hWzBdLCBtYXRjaCA9IF9hWzFdO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSg2KS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobWF0Y2gsIGlucHV0LnNsaWNlKDYpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1pc21hdGNoOiBubyBtYXRjaCBiZWZvcmUgdGhlIGVuZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICB2YXIgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIik7XHJcbiAgICB2YXIgbWlzbWF0Y2ggPSBoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlVW50aWwoXCJjcnVlbFwiKShpbnB1dCk7XHJcbiAgICBoZWxwZXJzXzEuZXFFcnJvcihtaXNtYXRjaCwgaGJzX3BhcnNlcl9uZXh0XzEuZXJyKGlucHV0LCBcInRha2VVbnRpbFwiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLm1vZHVsZShcIltjb21iaW5hdG9yc10gdGFrZVdoaWxlXCIpO1xyXG5xdW5pdF8xLnRlc3QoXCJtYXRjaDogYXQgbm9uLXplcm8gb2Zmc2V0XCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIHZhciBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyEhISFcIik7XHJcbiAgICB2YXIgbmV4dDEgPSBoZWxwZXJzXzEudW53cmFwKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRhZyhcImhlbGxvXCIpKGlucHV0KSlbMF07XHJcbiAgICB2YXIgX2EgPSBoZWxwZXJzXzEudW53cmFwKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRha2VXaGlsZShcIiFcIikobmV4dDEpKSwgbmV4dCA9IF9hWzBdLCBtYXRjaCA9IF9hWzFdO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSg5KS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobWF0Y2gsIGlucHV0LnNsaWNlKDUpLnNsaWNlKDQpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBza2lwcGluZyB6ZXJvIGNoYXJhY3RlcnNcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgdmFyIF9hID0gaGVscGVyc18xLnVud3JhcChoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlVW50aWwoXCJoZWxsb1wiKShpbnB1dCkpLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobWF0Y2gsIGlucHV0KTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBza2lwcGluZyB1bnRpbCB0aGUgbGFzdCBjaGFyYWN0ZXJcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgdmFyIF9hID0gaGVscGVyc18xLnVud3JhcChoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlVW50aWwoXCJkXCIpKGlucHV0KSksIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoMTApLnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChtYXRjaCwgaW5wdXQuc2xpY2UoMTApKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBza2lwcGluZyB1bnRpbCB0aGUgbGFzdCBjaGFyYWN0ZXJzXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIHZhciBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiKTtcclxuICAgIHZhciBfYSA9IGhlbHBlcnNfMS51bndyYXAoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFrZVVudGlsKFwid29ybGRcIikoaW5wdXQpKSwgbmV4dCA9IF9hWzBdLCBtYXRjaCA9IF9hWzFdO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSg2KS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobWF0Y2gsIGlucHV0LnNsaWNlKDYpKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm1pc21hdGNoOiBubyBtYXRjaCBiZWZvcmUgdGhlIGVuZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICB2YXIgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIik7XHJcbiAgICB2YXIgbWlzbWF0Y2ggPSBoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWtlVW50aWwoXCJjcnVlbFwiKShpbnB1dCk7XHJcbiAgICBoZWxwZXJzXzEuZXFFcnJvcihtaXNtYXRjaCwgaGJzX3BhcnNlcl9uZXh0XzEuZXJyKGlucHV0LCBcInRha2VVbnRpbFwiKSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcXVuaXRfMSA9IHJlcXVpcmUoXCJxdW5pdFwiKTtcclxudmFyIGhic19wYXJzZXJfbmV4dF8xID0gcmVxdWlyZShcImhicy1wYXJzZXItbmV4dFwiKTtcclxucXVuaXRfMS5tb2R1bGUoXCJbUkVBREVSXSBzaW1wbGUgaW50ZXJwb2xhdGlvblwiKTtcclxucXVuaXRfMS5hc3NlcnQudHJlZSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgIHZhciBleHBlY3RlZCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBleHBlY3RlZFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBzdGVwID0gc291cmNlIHx8IFwiKGVtcHR5KVwiO1xyXG4gICAgdGhpcy5zdGVwKHN0ZXApO1xyXG4gICAgdmFyIHRyZWUgPSBoYnNfcGFyc2VyX25leHRfMS5yZWFkKHNvdXJjZSk7XHJcbiAgICB2YXIgZXhwZWN0ZWRTdHJpbmcgPSBoYnNfcGFyc2VyX25leHRfMS5zZXJpYWxpemVSb290KGhic19wYXJzZXJfbmV4dF8xLmIucm9vdChleHBlY3RlZCksIHNvdXJjZSk7XHJcbiAgICBpZiAodHJlZS5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgdGhpcy5vayhmYWxzZSwgXCJleHBlY3RlZCB0b2tlbnMgKFwiICsgZXhwZWN0ZWRTdHJpbmcgKyBcIiksIGdvdCBlcnJvciAoXCIgKyB0cmVlLnJlYXNvbiArIFwiKVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBhY3R1YWxTdHJpbmcgPSBoYnNfcGFyc2VyX25leHRfMS5zZXJpYWxpemVSb290KHRyZWUudmFsdWUsIHNvdXJjZSk7XHJcbiAgICAgICAgdGhpcy5zdHJpY3RFcXVhbChhY3R1YWxTdHJpbmcsIGV4cGVjdGVkU3RyaW5nLCBcInNlcmlhbGl6YXRpb24gb2YgZXhwZWN0ZWQgYW5kIGFjdHVhbCBtYXRjaFwiKTtcclxuICAgICAgICB0aGlzLmRlZXBFcXVhbCh0cmVlLnZhbHVlLCBoYnNfcGFyc2VyX25leHRfMS5iLnJvb3QoZXhwZWN0ZWQpLCBcInRva2VuIHRyZWVzIG1hdGNoXCIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy52ZXJpZnlTdGVwcyhbc3RlcF0sIFwidmVyaWZpZWQgc3RlcHNcIik7XHJcbn07XHJcbnF1bml0XzEudGVzdChcImVtcHR5XCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIGFzc2VydC50cmVlKFwiXCIgLyogbm8gYm9keSAqLyk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ7e2lkfX0gaW50ZXJwb2xhdGluZyBhbiBpZFwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7aWRlbnRpZmllcn19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZGVudGlmaWVyXCIpXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e2lkfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e2lkLXdpdGgtZGFzaH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZC13aXRoLWRhc2hcIildKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ7eyhpZCl9fSBpbnRlcnBvbGF0aW5nIGFuIGV4cHJlc3Npb25cIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7eyhpZCl9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLnNleHAoW2hic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKV0pXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7eyAoaWQpIH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuc2V4cChbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpXSksIGhic19wYXJzZXJfbmV4dF8xLmIuc3BdKSk7XHJcbiAgICBhc3NlcnQudHJlZShcInt7KCBpZCApfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5zZXhwKFtoYnNfcGFyc2VyX25leHRfMS5iLnNwLCBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaWRcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuc3BdKV0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3sgKCBpZCApIH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuc2V4cChbaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpLCBoYnNfcGFyc2VyX25leHRfMS5iLnNwXSksIGhic19wYXJzZXJfbmV4dF8xLmIuc3BdKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ7e0BpZH19IGludGVycG9sYXRpbmcgYW4gYXJndW1lbnRcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e0BpZGVudGlmaWVyfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAaWRlbnRpZmllclwiKV0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3tAaWR9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtoYnNfcGFyc2VyX25leHRfMS5iLmFyZyhcIkBpZFwiKV0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3tAaWQtd2l0aC1kYXNofX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAaWQtd2l0aC1kYXNoXCIpXSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwid2hpdGVzcGFjZSBhcm91bmQgaW50ZXJwb2xhdGlvblwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7IGlkZW50aWZpZXIgfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkZW50aWZpZXJcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuc3BdKSk7XHJcbiAgICBhc3NlcnQudHJlZShcInt7IGlkIH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcF0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3sgaWQtd2l0aC1kYXNoIH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW2hic19wYXJzZXJfbmV4dF8xLmIuc3AsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZC13aXRoLWRhc2hcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuc3BdKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJwYXRoc1wiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7aWQud2l0aC5wYXRofX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpLCBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIndpdGhcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LCBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwicGF0aFwiKV0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3sgaWQud2l0aC5wYXRoIH19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW1xyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJwYXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3BcclxuICAgIF0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3sgIGlkLndpdGgucGF0aCAgfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi53cyhcIiAgXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwid2l0aFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwicGF0aFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLndzKFwiICBcIilcclxuICAgIF0pKTtcclxuICAgIGFzc2VydC50cmVlKFwie3tAaWQud2l0aC5wYXRofX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAaWRcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LCBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwid2l0aFwiKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJwYXRoXCIpXSkpO1xyXG4gICAgYXNzZXJ0LnRyZWUoXCJ7e0BkYXNoLWlkLndpdGgtZGFzaGVkLnBhdGh9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmFyZyhcIkBkYXNoLWlkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoLWRhc2hlZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwicGF0aFwiKVxyXG4gICAgXSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwie3tpZC53aXRoLnBhdGggc29tZSBvdGhlci5zdHVmZn19XCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIGFzc2VydC50cmVlKFwie3tpZC53aXRoLnBhdGggc29tZSBvdGhlci5zdHVmZn19XCIsIGhic19wYXJzZXJfbmV4dF8xLmIuaW50ZXJwb2xhdGUoW1xyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwid2l0aFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwicGF0aFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJzb21lXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm90aGVyXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJzdHVmZlwiKVxyXG4gICAgXSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwibmFtZWQgYXJndW1lbnRzXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIGFzc2VydC50cmVlKFwie3tpZC53aXRoLnBhdGggc29tZSBuYW1lZD1hcmdzIG90aGVyPW5hbWVkLmFyZ3N9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaWRcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIndpdGhcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInBhdGhcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwic29tZVwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJuYW1lZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmVxLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm90aGVyXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZXEsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm5hbWVkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpXHJcbiAgICBdKSk7XHJcbiAgICBhc3NlcnQudHJlZShcInt7aWQud2l0aC5wYXRoIHNvbWUgQGFyZyBuYW1lZD1hcmdzIG90aGVyPUBuYW1lZC5hcmdzfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImlkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJwYXRoXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInNvbWVcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmFyZyhcIkBhcmdcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwibmFtZWRcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5lcSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiYXJnc1wiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJvdGhlclwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmVxLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuYXJnKFwiQG5hbWVkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpXHJcbiAgICBdKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJ1c2luZyBhbGwgdGhlIGZlYXR1cmVzXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIGFzc2VydC50cmVlKFwie3sgIChpZC53aXRoLnBhdGggc29tZSBAYXJnIG5hbWVkPWFyZ3Mgb3RoZXI9QG5hbWVkLmFyZ3MpIEBzb21lLmFyZyBhbm90aGVyLmFyZyBuYW1lZD1AYXJnIG90aGVyPW5hbWVkLmFyZyAgfX1cIiwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi53cyhcIiAgXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc2V4cChbXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJpZFwiKSxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJ3aXRoXCIpLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInBhdGhcIiksXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJzb21lXCIpLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmFyZyhcIkBhcmdcIiksXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJuYW1lZFwiKSxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5lcSxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImFyZ3NcIiksXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJvdGhlclwiKSxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5lcSxcclxuICAgICAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAbmFtZWRcIiksXHJcbiAgICAgICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiYXJnc1wiKVxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5hcmcoXCJAc29tZVwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiYXJnXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImFub3RoZXJcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcImFyZ1wiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJuYW1lZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmVxLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuYXJnKFwiQGFyZ1wiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJvdGhlclwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmVxLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJuYW1lZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmRvdCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiYXJnXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIud3MoXCIgIFwiKVxyXG4gICAgXSkpO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwidHdvIGludGVycG9sYXRpb25zIG5leHQgdG8gZWFjaCBvdGhlclwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICBhc3NlcnQudHJlZShcInt7aWQud2l0aC5wYXRoIHNvbWUgbmFtZWQ9YXJncyBvdGhlcj1uYW1lZC5hcmdzfX17e3NvbWUuc3R1ZmZ9fVwiLCBoYnNfcGFyc2VyX25leHRfMS5iLmludGVycG9sYXRlKFtcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwiaWRcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIndpdGhcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5kb3QsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInBhdGhcIiksXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5zcCxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwic29tZVwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLnNwLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJuYW1lZFwiKSxcclxuICAgICAgICBoYnNfcGFyc2VyX25leHRfMS5iLmVxLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuc3AsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm90aGVyXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZXEsXHJcbiAgICAgICAgaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcIm5hbWVkXCIpLFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LFxyXG4gICAgICAgIGhic19wYXJzZXJfbmV4dF8xLmIuaWQoXCJhcmdzXCIpXHJcbiAgICBdKSwgaGJzX3BhcnNlcl9uZXh0XzEuYi5pbnRlcnBvbGF0ZShbaGJzX3BhcnNlcl9uZXh0XzEuYi5pZChcInNvbWVcIiksIGhic19wYXJzZXJfbmV4dF8xLmIuZG90LCBoYnNfcGFyc2VyX25leHRfMS5iLmlkKFwic3R1ZmZcIildKSk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgcXVuaXRfMSA9IHJlcXVpcmUoXCJxdW5pdFwiKTtcclxuZnVuY3Rpb24gdW53cmFwKGlucHV0KSB7XHJcbiAgICBpZiAoaW5wdXQua2luZCA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgT2sgcmVzdWx0LCBnb3QgRXJyIChyZWFzb249XCIgKyBpbnB1dC5yZWFzb24gKyBcIilcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy51bndyYXAgPSB1bndyYXA7XHJcbmZ1bmN0aW9uIGVxUmVzdWx0KGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBxdW5pdF8xLmFzc2VydC5zdHJpY3RFcXVhbChsZWZ0LmtpbmQsIHJpZ2h0LmtpbmQpO1xyXG4gICAgaWYgKGxlZnQua2luZCA9PT0gXCJva1wiICYmIHJpZ2h0LmtpbmQgPT09IFwib2tcIikge1xyXG4gICAgICAgIHF1bml0XzEuYXNzZXJ0Lm9rKGxlZnQudmFsdWUuZXEocmlnaHQudmFsdWUpKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGxlZnQua2luZCA9PT0gXCJlcnJcIiAmJiByaWdodC5raW5kID09PSBcImVyclwiKSB7XHJcbiAgICAgICAgcXVuaXRfMS5hc3NlcnQub2sobGVmdC5zbmlwcGV0LmVxKHJpZ2h0LnNuaXBwZXQpLCBcImxlZnQ9XCIgKyBsZWZ0LnNuaXBwZXQuZm10KCkgKyBcIiByaWdodD1cIiArIHJpZ2h0LnNuaXBwZXQuZm10KCkpO1xyXG4gICAgICAgIHF1bml0XzEuYXNzZXJ0LnN0cmljdEVxdWFsKGxlZnQucmVhc29uLCByaWdodC5yZWFzb24pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZXFSZXN1bHQgPSBlcVJlc3VsdDtcclxuZnVuY3Rpb24gZXFTbmlwcGV0KGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBxdW5pdF8xLmFzc2VydC5vayhsZWZ0LmVxKHJpZ2h0KSwgXCJsZWZ0PVwiICsgbGVmdC5mbXQoKSArIFwiIHJpZ2h0PVwiICsgcmlnaHQuZm10KCkpO1xyXG59XHJcbmV4cG9ydHMuZXFTbmlwcGV0ID0gZXFTbmlwcGV0O1xyXG5mdW5jdGlvbiBlcVNuaXBwZXRzKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICBpZiAobGVmdC5sZW5ndGggIT09IHJpZ2h0Lmxlbmd0aCkge1xyXG4gICAgICAgIHF1bml0XzEuYXNzZXJ0Lm9rKGZhbHNlLCBcImxlZnQ9XCIgKyBKU09OLnN0cmluZ2lmeShsZWZ0Lm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5mbXQoKTsgfSkpICsgXCJcXG5yaWdodD1cIiArIEpTT04uc3RyaW5naWZ5KHJpZ2h0Lm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5mbXQoKTsgfSkpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVmdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbGVmdEl0ZW0gPSBsZWZ0W2ldO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHRJdGVtID0gcmlnaHRbaV07XHJcbiAgICAgICAgICAgIGVxU25pcHBldChsZWZ0SXRlbSwgcmlnaHRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5lcVNuaXBwZXRzID0gZXFTbmlwcGV0cztcclxuZnVuY3Rpb24gZXFFcnJvcihsZWZ0LCByaWdodCkge1xyXG4gICAgaWYgKGxlZnQua2luZCA9PT0gXCJlcnJcIikge1xyXG4gICAgICAgIHF1bml0XzEuYXNzZXJ0Lm9rKGxlZnQuc25pcHBldC5lcShyaWdodC5zbmlwcGV0KSwgXCJsZWZ0PVwiICsgbGVmdC5zbmlwcGV0LmZtdCgpICsgXCIgcmlnaHQ9XCIgKyByaWdodC5zbmlwcGV0LmZtdCgpKTtcclxuICAgICAgICBxdW5pdF8xLmFzc2VydC5zdHJpY3RFcXVhbChsZWZ0LnJlYXNvbiwgcmlnaHQucmVhc29uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHF1bml0XzEuYXNzZXJ0LnN0cmljdEVxdWFsKGxlZnQua2luZCwgXCJlcnJcIiwgXCJleHBlY3RlZCBhbiBlcnJvclwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmVxRXJyb3IgPSBlcUVycm9yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9pbmRleC5odG1sXCIpO1xyXG5yZXF1aXJlKFwiZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi4vbm9kZV9tb2R1bGVzL3F1bml0L3F1bml0L3F1bml0LmNzc1wiKTtcclxudmFyIHF1bml0XzEgPSByZXF1aXJlKFwicXVuaXRcIik7XHJcbnF1bml0XzEuY29uZmlnLmF1dG9zdGFydCA9IHRydWU7XHJcbnF1bml0XzEuZHVtcC5tYXhEZXB0aCA9IDI1O1xyXG5yZXF1aXJlKFwiLi9jb21iaW5hdG9ycy10ZXN0XCIpO1xyXG5yZXF1aXJlKFwiLi9tdWx0aS10ZXN0XCIpO1xyXG5yZXF1aXJlKFwiLi9oYnMtcmVhZGVyLXRlc3RcIik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBxdW5pdF8xID0gcmVxdWlyZShcInF1bml0XCIpO1xyXG52YXIgaGJzX3BhcnNlcl9uZXh0XzEgPSByZXF1aXJlKFwiaGJzLXBhcnNlci1uZXh0XCIpO1xyXG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcclxucXVuaXRfMS5tb2R1bGUoXCJbY29tYmluYXRvcnNdIG1hbnlcIik7XHJcbnF1bml0XzEudGVzdChcInplcm8gdGltZXNcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImFiY2FiY2FiY1wiKTtcclxuICAgIHZhciBfYSA9IGhlbHBlcnNfMS51bndyYXAoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJkZWZcIikpKGlucHV0KSksIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldHMobWF0Y2gsIFtdKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcIm9uZSB0aW1lXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIHZhciBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiKTtcclxuICAgIHZhciBfYSA9IGhlbHBlcnNfMS51bndyYXAoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJoZWxsb1wiKSkoaW5wdXQpKSwgbmV4dCA9IF9hWzBdLCBtYXRjaCA9IF9hWzFdO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldChuZXh0LCBpbnB1dC5zbGljZSg1KS5yZXN0KTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXRzKG1hdGNoLCBbaW5wdXQuc2xpY2UoNSldKTtcclxufSk7XHJcbnF1bml0XzEudGVzdChcInNldmVyYWwgdGltZXNcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImFiY2FiY2FiY1wiKTtcclxuICAgIHZhciBfYSA9IGhlbHBlcnNfMS51bndyYXAoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJhYmNcIikpKGlucHV0KSksIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoOSkucmVzdCk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0cyhtYXRjaCwgW1xyXG4gICAgICAgIGlucHV0LnNsaWNlKDMpLFxyXG4gICAgICAgIGlucHV0LnNsaWNlKDMpLnNsaWNlKDMpLFxyXG4gICAgICAgIGlucHV0LnNsaWNlKDYpLnNsaWNlKDMpXHJcbiAgICBdKTtcclxufSk7XHJcbnF1bml0XzEubW9kdWxlKFwiW2NvbWJpbmF0b3JzXSBwcmVzZW50KG1hbnkpIChhdCBsZWFzdCBvbmUgbWF0Y2gpXCIpO1xyXG5xdW5pdF8xLnRlc3QoXCJ6ZXJvIHRpbWVzXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIHZhciBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJhYmNhYmNhYmNcIik7XHJcbiAgICB2YXIgbWlzbWF0Y2ggPSBoYnNfcGFyc2VyX25leHRfMS51dGlscy5wcmVzZW50KGhic19wYXJzZXJfbmV4dF8xLm11bHRpLm1hbnkoaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwiZGVmXCIpKSkoaW5wdXQpO1xyXG4gICAgaGVscGVyc18xLmVxRXJyb3IobWlzbWF0Y2gsIGhic19wYXJzZXJfbmV4dF8xLmVycihpbnB1dCwgXCJlbXB0eVwiKSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJvbmUgdGltZVwiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICB2YXIgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIik7XHJcbiAgICB2YXIgX2EgPSBoZWxwZXJzXzEudW53cmFwKGhic19wYXJzZXJfbmV4dF8xLnV0aWxzLnByZXNlbnQoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJoZWxsb1wiKSkpKGlucHV0KSksIG5leHQgPSBfYVswXSwgbWF0Y2ggPSBfYVsxXTtcclxuICAgIGhlbHBlcnNfMS5lcVNuaXBwZXQobmV4dCwgaW5wdXQuc2xpY2UoNSkucmVzdCk7XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0cyhtYXRjaCwgW2lucHV0LnNsaWNlKDUpXSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJzZXZlcmFsIHRpbWVzXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIHZhciBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJhYmNhYmNhYmNcIik7XHJcbiAgICB2YXIgX2EgPSBoZWxwZXJzXzEudW53cmFwKGhic19wYXJzZXJfbmV4dF8xLnV0aWxzLnByZXNlbnQoaGJzX3BhcnNlcl9uZXh0XzEubXVsdGkubWFueShoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJhYmNcIikpKShpbnB1dCkpLCBuZXh0ID0gX2FbMF0sIG1hdGNoID0gX2FbMV07XHJcbiAgICBoZWxwZXJzXzEuZXFTbmlwcGV0KG5leHQsIGlucHV0LnNsaWNlKDkpLnJlc3QpO1xyXG4gICAgaGVscGVyc18xLmVxU25pcHBldHMobWF0Y2gsIFtcclxuICAgICAgICBpbnB1dC5zbGljZSgzKSxcclxuICAgICAgICBpbnB1dC5zbGljZSgzKS5zbGljZSgzKSxcclxuICAgICAgICBpbnB1dC5zbGljZSg2KS5zbGljZSgzKVxyXG4gICAgXSk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9