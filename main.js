/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/location.js */ \"./src/modules/location.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\nregisterButtonListener(\"#home-nav\", () => (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content));\nregisterButtonListener(\"#menu-nav\", () => (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content));\nregisterButtonListener(\"#location-nav\", () => (0,_modules_location_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content));\ndocument.querySelector(\"#home-nav\").click();\n\nfunction registerButtonListener(buttonID, action) {\n    document.querySelector(buttonID).addEventListener(\"click\", (event) => {\n        content.replaceChildren();\n        action();\n    });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QztBQUNBO0FBQ1E7O0FBRWpEO0FBQ0EsMENBQTBDLDREQUFRO0FBQ2xELDBDQUEwQyw0REFBUTtBQUNsRCw4Q0FBOEMsZ0VBQVk7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG9tZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy9ob21lLmpzXCI7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSBcIi4vbW9kdWxlcy9tZW51LmpzXCI7XG5pbXBvcnQgbG9jYXRpb25Mb2FkIGZyb20gXCIuL21vZHVsZXMvbG9jYXRpb24uanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbnJlZ2lzdGVyQnV0dG9uTGlzdGVuZXIoXCIjaG9tZS1uYXZcIiwgKCkgPT4gaG9tZUxvYWQoY29udGVudCkpO1xucmVnaXN0ZXJCdXR0b25MaXN0ZW5lcihcIiNtZW51LW5hdlwiLCAoKSA9PiBtZW51TG9hZChjb250ZW50KSk7XG5yZWdpc3RlckJ1dHRvbkxpc3RlbmVyKFwiI2xvY2F0aW9uLW5hdlwiLCAoKSA9PiBsb2NhdGlvbkxvYWQoY29udGVudCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLW5hdlwiKS5jbGljaygpO1xuXG5mdW5jdGlvbiByZWdpc3RlckJ1dHRvbkxpc3RlbmVyKGJ1dHRvbklELCBhY3Rpb24pIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbklEKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGFjdGlvbigpO1xuICAgIH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent) => {\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Lee's Light Lunches\";\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"All lunches, all light, all luscious\";\n\n    const p = document.createElement(\"p\");\n    p.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis cum amet molestiae earum est labore temporibus accusantium vitae iusto modi quae, aliquid ab, commodi nulla tempore magnam vel veritatis!\";\n\n    parent.appendChild(h1);\n    parent.appendChild(h2);\n    parent.appendChild(p);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcz9jMzYyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChwYXJlbnQpID0+IHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiTGVlJ3MgTGlnaHQgTHVuY2hlc1wiO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIudGV4dENvbnRlbnQgPSBcIkFsbCBsdW5jaGVzLCBhbGwgbGlnaHQsIGFsbCBsdXNjaW91c1wiO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZ1Z2EgY29ycG9yaXMgY3VtIGFtZXQgbW9sZXN0aWFlIGVhcnVtIGVzdCBsYWJvcmUgdGVtcG9yaWJ1cyBhY2N1c2FudGl1bSB2aXRhZSBpdXN0byBtb2RpIHF1YWUsIGFsaXF1aWQgYWIsIGNvbW1vZGkgbnVsbGEgdGVtcG9yZSBtYWduYW0gdmVsIHZlcml0YXRpcyFcIjtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoMSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGgyKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/home.js\n");

/***/ }),

/***/ "./src/modules/location.js":
/*!*********************************!*\
  !*** ./src/modules/location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent) => {\n\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Where Are We?\";\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"We're always at the cool corner\";\n\n    const p = document.createElement(\"div\");\n    const addr = document.createElement(\"div\");\n    const addr2 = document.createElement(\"div\");\n    const addr3 = document.createElement(\"div\");\n    addr.textContent = \"123 Main St.\"\n    addr2.textContent = \"Small Town, Slightly Larger Province.\"\n    addr3.textContent = \"Find us at the intersection of Main St. and Cool Dr. Be there, or be square.\";\n\n    p.appendChild(addr);\n    p.appendChild(addr2);\n    p.appendChild(addr3);\n\n    const h2a = document.createElement(\"h2\");\n    h2a.textContent = \"We're always at the cool corner\";\n\n    const pa = document.createElement(\"p\");\n    pa.textContent = \"10 - 2 every day except holidays.\";\n\n    parent.appendChild(h1);\n    parent.appendChild(h2);\n    parent.appendChild(p);\n    parent.appendChild(h2a);\n    parent.appendChild(pa);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9sb2NhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7O0FBRWY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbG9jYXRpb24uanM/ZTViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocGFyZW50KSA9PiB7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiV2hlcmUgQXJlIFdlP1wiO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDIudGV4dENvbnRlbnQgPSBcIldlJ3JlIGFsd2F5cyBhdCB0aGUgY29vbCBjb3JuZXJcIjtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZHIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGRyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkci50ZXh0Q29udGVudCA9IFwiMTIzIE1haW4gU3QuXCJcbiAgICBhZGRyMi50ZXh0Q29udGVudCA9IFwiU21hbGwgVG93biwgU2xpZ2h0bHkgTGFyZ2VyIFByb3ZpbmNlLlwiXG4gICAgYWRkcjMudGV4dENvbnRlbnQgPSBcIkZpbmQgdXMgYXQgdGhlIGludGVyc2VjdGlvbiBvZiBNYWluIFN0LiBhbmQgQ29vbCBEci4gQmUgdGhlcmUsIG9yIGJlIHNxdWFyZS5cIjtcblxuICAgIHAuYXBwZW5kQ2hpbGQoYWRkcik7XG4gICAgcC5hcHBlbmRDaGlsZChhZGRyMik7XG4gICAgcC5hcHBlbmRDaGlsZChhZGRyMyk7XG5cbiAgICBjb25zdCBoMmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaDJhLnRleHRDb250ZW50ID0gXCJXZSdyZSBhbHdheXMgYXQgdGhlIGNvb2wgY29ybmVyXCI7XG5cbiAgICBjb25zdCBwYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhLnRleHRDb250ZW50ID0gXCIxMCAtIDIgZXZlcnkgZGF5IGV4Y2VwdCBob2xpZGF5cy5cIjtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoMSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGgyKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGgyYSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHBhKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/location.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((parent) => {\n\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"Menu\";\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Light Up Your Lunch With This Lineup\";\n\n    const ul = document.createElement(\"ul\");\n    \n    const li_blt = document.createElement(\"li\");\n    li_blt.textContent = \"BLT - The classic. Bacon, lettuce and tomato (pronounced however you want)\";\n    \n    const li_veg = document.createElement(\"li\");\n    li_veg.textContent = \"Sliced Veggie Wraps (aka. Veggie Sushi) - All your favourite veggies wrapped in a soft tortilla. Served sliced to ressemble sushi.\"\n            \n    const li_hip = document.createElement(\"li\");\n    li_hip.textContent = \"The Hipster's Special - Avocado toast. Served on a bread type you've never heard of before.\"\n\n    ul.appendChild(li_blt);\n    ul.appendChild(li_veg);\n    ul.appendChild(li_hip);\n\n    parent.appendChild(h1);\n    parent.appendChild(h2);\n    parent.appendChild(ul);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChwYXJlbnQpID0+IHtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoMi50ZXh0Q29udGVudCA9IFwiTGlnaHQgVXAgWW91ciBMdW5jaCBXaXRoIFRoaXMgTGluZXVwXCI7XG5cbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBcbiAgICBjb25zdCBsaV9ibHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlfYmx0LnRleHRDb250ZW50ID0gXCJCTFQgLSBUaGUgY2xhc3NpYy4gQmFjb24sIGxldHR1Y2UgYW5kIHRvbWF0byAocHJvbm91bmNlZCBob3dldmVyIHlvdSB3YW50KVwiO1xuICAgIFxuICAgIGNvbnN0IGxpX3ZlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaV92ZWcudGV4dENvbnRlbnQgPSBcIlNsaWNlZCBWZWdnaWUgV3JhcHMgKGFrYS4gVmVnZ2llIFN1c2hpKSAtIEFsbCB5b3VyIGZhdm91cml0ZSB2ZWdnaWVzIHdyYXBwZWQgaW4gYSBzb2Z0IHRvcnRpbGxhLiBTZXJ2ZWQgc2xpY2VkIHRvIHJlc3NlbWJsZSBzdXNoaS5cIlxuICAgICAgICAgICAgXG4gICAgY29uc3QgbGlfaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpX2hpcC50ZXh0Q29udGVudCA9IFwiVGhlIEhpcHN0ZXIncyBTcGVjaWFsIC0gQXZvY2FkbyB0b2FzdC4gU2VydmVkIG9uIGEgYnJlYWQgdHlwZSB5b3UndmUgbmV2ZXIgaGVhcmQgb2YgYmVmb3JlLlwiXG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaV9ibHQpO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpX3ZlZyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGlfaGlwKTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoMSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGgyKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodWwpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;