"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/building/queries.js":
/*!*********************************!*\
  !*** ./app/building/queries.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPartQuery: function() { return /* binding */ getPartQuery; },\n/* harmony export */   partQueryMaker: function() { return /* binding */ partQueryMaker; }\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ partQueryMaker,getPartQuery auto */ function partQueryMaker(currentSelect) {\n    if (currentSelect === \"R-ARM UNIT\" || currentSelect === \"L-ARM UNIT\") {\n        return \"arm\"; //original, non-preload, get from db query was: return {type: {$regex: 'arm'}};\n    } else if (currentSelect === \"R-BACK UNIT\" || currentSelect === \"L-BACK UNIT\") {\n        return \"back\";\n    } else {\n        return currentSelect.toLowerCase().charAt(0).toUpperCase();\n    }\n}\nfunction menuQueryMaker(currentMenu) {\n    switch(currentMenu){\n        case \"UNIT\":\n            return \"ACUnitSpecs\";\n        case \"FRAME\":\n            return \"ACFrameSpecs\";\n        case \"INNER\":\n            return \"ACInnerSpecs\";\n        case \"EXPANSION\":\n            return \"ACExpansionSpecs\";\n        default:\n            throw new Error(\"Invalid menu option\");\n    }\n}\nfunction getPartQuery(currentSelect) {\n    const partQuery = partQueryMaker(currentSelect);\n    return partQuery;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL3F1ZXJpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7aUZBRU8sU0FBU0EsZUFBZUMsYUFBYTtJQUUxQyxJQUFHQSxrQkFBa0IsZ0JBQWdCQSxrQkFBa0IsY0FBYztRQUNqRSxPQUFPLE9BQU8sK0VBQStFO0lBQ2pHLE9BQ0ssSUFBR0Esa0JBQWtCLGlCQUFpQkEsa0JBQWtCLGVBQWU7UUFDeEUsT0FBTztJQUNYLE9BQ0s7UUFDRCxPQUFPQSxjQUFjQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXO0lBQzVEO0FBRUY7QUFFQSxTQUFTQyxlQUFlQyxXQUFXO0lBQ2pDLE9BQVFBO1FBQ04sS0FBSztZQUNILE9BQU87UUFFVCxLQUFLO1lBQ0gsT0FBTztRQUVULEtBQUs7WUFDSCxPQUFPO1FBRVQsS0FBSztZQUNILE9BQU87UUFFVDtZQUNFLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtBQUVGO0FBRU8sU0FBU0MsYUFBYVAsYUFBYTtJQUV4QyxNQUFNUSxZQUFZVCxlQUFlQztJQUVqQyxPQUFPUTtBQUVUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9idWlsZGluZy9xdWVyaWVzLmpzP2MwMTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFydFF1ZXJ5TWFrZXIoY3VycmVudFNlbGVjdCkge1xyXG5cclxuICBpZihjdXJyZW50U2VsZWN0ID09PSAnUi1BUk0gVU5JVCcgfHwgY3VycmVudFNlbGVjdCA9PT0gJ0wtQVJNIFVOSVQnKSB7XHJcbiAgICAgIHJldHVybiAnYXJtJzsgLy9vcmlnaW5hbCwgbm9uLXByZWxvYWQsIGdldCBmcm9tIGRiIHF1ZXJ5IHdhczogcmV0dXJuIHt0eXBlOiB7JHJlZ2V4OiAnYXJtJ319O1xyXG4gIH1cclxuICBlbHNlIGlmKGN1cnJlbnRTZWxlY3QgPT09ICdSLUJBQ0sgVU5JVCcgfHwgY3VycmVudFNlbGVjdCA9PT0gJ0wtQkFDSyBVTklUJykge1xyXG4gICAgICByZXR1cm4gJ2JhY2snO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnRTZWxlY3QudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVRdWVyeU1ha2VyKGN1cnJlbnRNZW51KSB7XHJcbiAgc3dpdGNoIChjdXJyZW50TWVudSkge1xyXG4gICAgY2FzZSAnVU5JVCc6XHJcbiAgICAgIHJldHVybiAnQUNVbml0U3BlY3MnO1xyXG5cclxuICAgIGNhc2UgJ0ZSQU1FJzpcclxuICAgICAgcmV0dXJuICdBQ0ZyYW1lU3BlY3MnO1xyXG5cclxuICAgIGNhc2UgJ0lOTkVSJzpcclxuICAgICAgcmV0dXJuICdBQ0lubmVyU3BlY3MnO1xyXG5cclxuICAgIGNhc2UgJ0VYUEFOU0lPTic6XHJcbiAgICAgIHJldHVybiAnQUNFeHBhbnNpb25TcGVjcyc7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1lbnUgb3B0aW9uJyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnRRdWVyeShjdXJyZW50U2VsZWN0KSB7XHJcblxyXG4gIGNvbnN0IHBhcnRRdWVyeSA9IHBhcnRRdWVyeU1ha2VyKGN1cnJlbnRTZWxlY3QpO1xyXG5cclxuICByZXR1cm4gcGFydFF1ZXJ5O1xyXG5cclxufSJdLCJuYW1lcyI6WyJwYXJ0UXVlcnlNYWtlciIsImN1cnJlbnRTZWxlY3QiLCJ0b0xvd2VyQ2FzZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwibWVudVF1ZXJ5TWFrZXIiLCJjdXJyZW50TWVudSIsIkVycm9yIiwiZ2V0UGFydFF1ZXJ5IiwicGFydFF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/building/queries.js\n"));

/***/ })

});