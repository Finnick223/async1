/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/getAlbums.ts":
/*!*******************************!*\
  !*** ./src/data/getAlbums.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAlbums: () => (/* binding */ getAlbums)\n/* harmony export */ });\n// import users from './users.json';\nvar getAlbums = function (id) {\n    return fetch(\"https://jsonplaceholder.typicode.com/users/\".concat(id, \"/albums\"))\n        .then(function (response) { return response.json(); })\n        .then(function (json) {\n        return json;\n    })\n        .catch(console.error);\n};\n\n\n//# sourceURL=webpack://test-webpack/./src/data/getAlbums.ts?");

/***/ }),

/***/ "./src/data/getUsers.ts":
/*!******************************!*\
  !*** ./src/data/getUsers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUsers: () => (/* binding */ getUsers)\n/* harmony export */ });\n// import users from './users.json';\n// export const getUsers = () => {\n//   return new Promise((resolve, reject) => {\n//     setTimeout(() => {\n//       resolve('jest git');\n//       reject({ error: 'no users' });\n//     }, 2000);\n//   });\n// };\nvar getUsers = function () {\n    return fetch('https://jsonplaceholder.typicode.com/users')\n        .then(function (response) { return response.json(); })\n        .then(function (json) {\n        return json;\n    })\n        .catch(console.error);\n};\n\n\n//# sourceURL=webpack://test-webpack/./src/data/getUsers.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/getUsers */ \"./src/data/getUsers.ts\");\n/* harmony import */ var _data_getAlbums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/getAlbums */ \"./src/data/getAlbums.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n// const sleep = (time: number) =>\n//   new Promise((resolve) => setTimeout(resolve, time));\nvar getContainer = function () {\n    var container = document.querySelector('.container');\n    if (!container)\n        throw new Error('container doesnt exist');\n    var row1 = document.querySelector('.row1');\n    var row2 = document.querySelector('.row2');\n    var del = document.querySelector('.del');\n    var loader = document.querySelector('.loader');\n    return {\n        container: container,\n        row1: row1,\n        row2: row2,\n        del: del,\n        loader: loader,\n    };\n};\nvar loading = function () {\n    return new Promise(function (resolve, reject) {\n        var loader = getContainer().loader;\n        if (!loader)\n            throw new Error('nie da sie wczytac loadera');\n        loader.style.display = 'block';\n        setTimeout(function () {\n            resolve((loader.style.display = 'none'));\n            reject({ error: 'no users' });\n        }, 1500);\n    });\n};\nvar renderUser = function (id, username) {\n    var element = document.createElement('div');\n    element.id = String(id);\n    element.textContent = username;\n    element.classList.add('flex-item');\n    var row1 = getContainer().row1;\n    row1 === null || row1 === void 0 ? void 0 : row1.appendChild(element);\n};\nvar renderAlbums = function (id, title) {\n    var el = document.createElement('div');\n    el.textContent = title;\n    el.classList.add('flex-item');\n    var row2 = getContainer().row2;\n    row2 === null || row2 === void 0 ? void 0 : row2.appendChild(el);\n};\nvar clearAlbums = function () {\n    var row2 = getContainer().row2;\n    if (row2)\n        row2.innerHTML = '';\n};\n//! INITTTTTT\nvar init = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, del, row1, data, i, e_1;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                _a = getContainer(), del = _a.del, row1 = _a.row1;\n                _b.label = 1;\n            case 1:\n                _b.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, (0,_data_getUsers__WEBPACK_IMPORTED_MODULE_0__.getUsers)()];\n            case 2:\n                data = _b.sent();\n                // console.log(data[0]);\n                // console.log(data[0].id);\n                // console.log(data[0].name);\n                // console.log(data[0].username);\n                // await sleep(2000);\n                // console.log('data', data);\n                for (i in data) {\n                    renderUser(data[i].id, data[i].username);\n                }\n                return [3 /*break*/, 4];\n            case 3:\n                e_1 = _b.sent();\n                console.log(e_1);\n                return [3 /*break*/, 4];\n            case 4:\n                row1 === null || row1 === void 0 ? void 0 : row1.addEventListener('click', function (e) {\n                    return __awaiter(this, void 0, void 0, function () {\n                        var album, i, e_2;\n                        return __generator(this, function (_a) {\n                            switch (_a.label) {\n                                case 0:\n                                    _a.trys.push([0, 4, , 5]);\n                                    if (!e.target.id) return [3 /*break*/, 3];\n                                    clearAlbums();\n                                    return [4 /*yield*/, loading()];\n                                case 1:\n                                    _a.sent();\n                                    return [4 /*yield*/, (0,_data_getAlbums__WEBPACK_IMPORTED_MODULE_1__.getAlbums)(e.target.id)];\n                                case 2:\n                                    album = _a.sent();\n                                    for (i in album) {\n                                        renderAlbums(album[i].id, album[i].title);\n                                    }\n                                    _a.label = 3;\n                                case 3: return [3 /*break*/, 5];\n                                case 4:\n                                    e_2 = _a.sent();\n                                    console.log(e_2);\n                                    return [3 /*break*/, 5];\n                                case 5: return [2 /*return*/];\n                            }\n                        });\n                    });\n                });\n                del === null || del === void 0 ? void 0 : del.addEventListener('click', clearAlbums);\n                return [2 /*return*/];\n        }\n    });\n}); };\ninit();\n\n\n//# sourceURL=webpack://test-webpack/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;