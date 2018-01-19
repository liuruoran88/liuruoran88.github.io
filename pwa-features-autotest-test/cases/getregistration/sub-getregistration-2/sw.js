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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 271);
/******/ })
/************************************************************************/
/******/ ({

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _log = __webpack_require__(42);

(0, _log.log)('getregistration: in sw-2/sw.js'); /**
                                                  * @file indexeddb index.js
                                                  * @author clark-t (clarktanglei@163.com)
                                                  */

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
/**
 * @file log.js
 * @author clark-t (clarktanglei@163.com)
 */

// import {until} from 'helper';
// import {getStore} from 'store';

// const logStore = getStore('log');

function log() {
    var _console;

    (_console = console).log.apply(_console, arguments);

    // args = args.map(msg => {
    //     if (typeof msg === 'object') {
    //         msg = JSON.stringify(msg);
    //     }
    //     return msg;
    // });

    // args.unshift(Date.now());

    // if (typeof document === 'undefined') {
    //     swLog(...args);
    // }
    // else {
    //     mainLog(...args);
    // }
}

// let wrapper;
// let scope;

// function init() {
//     scope = location.pathname.split('/').slice(0, -1).join('/') + '-';

//     if (typeof document !== 'undefined') {
//         wrapper = document.createElement('div');
//         wrapper.classList.add('log-wrapper');
//         wrapper.style.wordBreak = 'break-all';
//         wrapper.style.background = 'rgba(0,0,0,0.5)';
//         document.body.appendChild(wrapper);

//         const tictok = () => setTimeout(async () => {
//             if (await logStore.getItem(scope + 'stack')) {
//                 if (await lock('main')) {
//                     let stack = await logStore.getItem(scope + 'stack');

//                     await logStore.setItem(scope + 'stack', '');
//                     await unlock();

//                     try {
//                         stack = JSON.parse(stack);
//                         stack.forEach(msg => {
//                             mainLog(...msg);
//                         });
//                     }
//                     catch (e) {
//                         console.log('error in parse json:');
//                         console.log(stack);
//                         console.log(e);
//                     }
//                 }
//             }

//             return tictok();
//         }, 200);

//         tictok();
//     }

// }

// async function lock(name) {
//     if (await logStore.getItem(scope + 'lock')) {
//         return false;
//     }

//     await logStore.setItem(scope + 'lock', name);
//     let lock = await logStore.getItem(scope + 'lock');

//     return lock === name;
// }

// async function unlock() {
//     await logStore.setItem(scope + 'lock', '');
// }

// let logStack = [];

// export function mainLog(...args) {
//     logStack.push(args);

//     let html = logStack.sort((a, b) => a[0] - b[0])
//         .map(msg => {
//             let str = msg.slice(1).join(' - ');
//             return `<div style="word-break: break-all; color: #fff">${str}</div>`;
//         })
//         .join('');

//     wrapper.innerHTML = html;
// }

// // let count = 0;

// export async function swLog(...args) {
//     await until(lock.bind(null, 'sw' + Math.floor(Math.random() * Date.now())));
//     let stack = await logStore.getItem(scope + 'stack');
//     if (stack) {
//         stack = JSON.parse(stack);
//         stack.push(args);
//     }
//     else {
//         stack = [args];
//     }

//     stack = JSON.stringify(stack);
//     await logStore.setItem(scope + 'stack', stack);
//     await unlock();
// }

// init();

/***/ })

/******/ });