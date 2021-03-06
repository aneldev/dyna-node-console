(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chalk"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-node-console", ["chalk"], factory);
	else if(typeof exports === 'object')
		exports["dyna-node-console"] = factory(require("chalk"));
	else
		root["dyna-node-console"] = factory(root["chalk"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __webpack_require__(0);
var isNode = typeof process !== "undefined" && !!process.cwd;
(function () {
    if (isNode) {
        if (process._dynaNodeConsole)
            return; // is already applied
        process._dynaNodeConsole = true;
        var cl_1 = console.log;
        var ci_1 = console.info;
        var cd_1 = console.debug;
        var cw_1 = console.warn;
        var ce_1 = console.error;
        var ELogType = void 0;
        (function (ELogType) {
            ELogType["LOG"] = "LOG";
            ELogType["INFO"] = "INFO";
            ELogType["DEBUG"] = "DEBUG";
            ELogType["WARN"] = "WARN";
            ELogType["ERROR"] = "ERROR";
            ELogType["TIME"] = "TIME";
        })(ELogType || (ELogType = {}));
        var isTime_1 = function (args) { return args[0] === "%s: %sms"; };
        var isFormatted_1 = function (args) { return args.length > 1 && typeof args[0] === "string" && args[0].indexOf("%") > -1; };
        var getLabel_1 = function (logType) {
            switch (logType) {
                case ELogType.LOG: return '⚪ LOG  ';
                case ELogType.INFO: return '🔵 INFO ';
                case ELogType.DEBUG: return '🐞 DEBUG';
                case ELogType.WARN: return '🔶 WARN ';
                case ELogType.ERROR: return '🔴 ERROR';
                case ELogType.TIME: return '⏱ TIME ';
            }
        };
        var getColorMethod_1 = function (logType) {
            switch (logType) {
                case ELogType.LOG: return function (text) { return text; };
                case ELogType.INFO: return chalk_1.default.blueBright;
                case ELogType.DEBUG: return chalk_1.default.blue;
                case ELogType.WARN: return chalk_1.default.yellow;
                case ELogType.ERROR: return chalk_1.default.red;
                case ELogType.TIME: return chalk_1.default.green;
            }
        };
        var colorArgs_1 = function (logType, args) {
            var colorMethod = getColorMethod_1(logType);
            return args.map(function (arg) {
                if (typeof arg === "string" ||
                    typeof arg === "number" ||
                    typeof arg === "boolean" ||
                    arg instanceof Date)
                    return colorMethod(arg);
                return arg;
            });
        };
        var buildArgs_1 = function (logType, args) {
            var now = new Date;
            var ms = now.getMilliseconds();
            var timeStamp = (new Date).toLocaleString() + "." + ("000" + ms).substr(-3);
            var _isTime = isTime_1(args);
            var _isFormatted = isFormatted_1(args);
            var output;
            if (_isTime)
                logType = ELogType.TIME;
            var prefix = getLabel_1(logType) + " " + timeStamp;
            if (_isFormatted) {
                output = [].concat(prefix + " " + args[0], args.slice(1));
            }
            else {
                output = [].concat(prefix, args);
            }
            output = colorArgs_1(logType, output);
            return output;
        };
        console.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return cl_1.apply(void 0, buildArgs_1(ELogType.LOG, args));
        };
        console.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return ci_1.apply(void 0, buildArgs_1(ELogType.INFO, args));
        };
        console.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return cd_1.apply(void 0, buildArgs_1(ELogType.DEBUG, args));
        };
        console.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return cw_1.apply(void 0, buildArgs_1(ELogType.WARN, args));
        };
        console.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return ce_1.apply(void 0, buildArgs_1(ELogType.ERROR, args));
        };
    }
})();


/***/ })
/******/ ]);
});