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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPartQuery: function() { return /* binding */ getPartQuery; },\n/* harmony export */   partQueryMaker: function() { return /* binding */ partQueryMaker; }\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ partQueryMaker,getPartQuery auto */ function partQueryMaker(currentSelect) {\n    //part query exceptions\n    if (currentSelect.toLowerCase() === \"fcs\") {\n        return \"FCS\";\n    } else {\n        //change from R-ARM UNIT to R-Arm Unit or CAPS to Caps\n        return currentSelect.split(\" \") // Split the string by spaces\n        .map((word)=>{\n            if (word.includes(\"-\")) {\n                // If the word contains a hyphen, split it and capitalize each part\n                const parts = word.split(\"-\");\n                return parts.map((part)=>part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(\"-\"); // Join the parts back together with a hyphen\n            } else {\n                // Otherwise, capitalize the entire word\n                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();\n            }\n        }).join(\" \");\n    }\n}\nfunction menuQueryMaker(currentMenu) {\n    switch(currentMenu){\n        case \"UNIT\":\n            return \"ACUnitSpecs\";\n        case \"FRAME\":\n            return \"ACFrameSpecs\";\n        case \"INNER\":\n            return \"ACInnerSpecs\";\n        case \"EXPANSION\":\n            return \"ACExpansionSpecs\";\n        default:\n            throw new Error(\"Invalid menu option\");\n    }\n}\nfunction getPartQuery(currentSelect) {\n    const partQuery = partQueryMaker(currentSelect);\n    return partQuery;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL3F1ZXJpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7aUZBRU8sU0FBU0EsZUFBZUMsYUFBYTtJQUMxQyx1QkFBdUI7SUFDdkIsSUFBR0EsY0FBY0MsV0FBVyxPQUFPLE9BQU87UUFDeEMsT0FBTztJQUNULE9BR0s7UUFDSCxzREFBc0Q7UUFDdEQsT0FBT0QsY0FBY0UsS0FBSyxDQUFDLEtBQUssNkJBQTZCO1NBQzVEQyxHQUFHLENBQUMsQ0FBQ0M7WUFDSixJQUFJQSxLQUFLQyxRQUFRLENBQUMsTUFBTTtnQkFDdEIsbUVBQW1FO2dCQUNuRSxNQUFNQyxRQUFRRixLQUFLRixLQUFLLENBQUM7Z0JBQ3pCLE9BQU9JLE1BQ0pILEdBQUcsQ0FBQyxDQUFDSSxPQUFTQSxLQUFLQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLRixLQUFLRyxLQUFLLENBQUMsR0FBR1QsV0FBVyxJQUN0RVUsSUFBSSxDQUFDLE1BQU0sNkNBQTZDO1lBQzdELE9BQU87Z0JBQ0wsd0NBQXdDO2dCQUN4QyxPQUFPUCxLQUFLSSxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLTCxLQUFLTSxLQUFLLENBQUMsR0FBR1QsV0FBVztZQUNqRTtRQUNGLEdBQ0NVLElBQUksQ0FBQztJQUNSO0FBRUY7QUFFQSxTQUFTQyxlQUFlQyxXQUFXO0lBQ2pDLE9BQVFBO1FBQ04sS0FBSztZQUNILE9BQU87UUFFVCxLQUFLO1lBQ0gsT0FBTztRQUVULEtBQUs7WUFDSCxPQUFPO1FBRVQsS0FBSztZQUNILE9BQU87UUFFVDtZQUNFLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtBQUVGO0FBRU8sU0FBU0MsYUFBYWYsYUFBYTtJQUV4QyxNQUFNZ0IsWUFBWWpCLGVBQWVDO0lBRWpDLE9BQU9nQjtBQUVUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9idWlsZGluZy9xdWVyaWVzLmpzP2MwMTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFydFF1ZXJ5TWFrZXIoY3VycmVudFNlbGVjdCkge1xyXG4gIC8vcGFydCBxdWVyeSBleGNlcHRpb25zXHJcbiAgaWYoY3VycmVudFNlbGVjdC50b0xvd2VyQ2FzZSgpID09PSBcImZjc1wiKSB7XHJcbiAgICByZXR1cm4gJ0ZDUyc7XHJcbiAgfVxyXG4gIFxyXG4gIC8vbm9ybWFsIGNhc2VcclxuICBlbHNlIHtcclxuICAgIC8vY2hhbmdlIGZyb20gUi1BUk0gVU5JVCB0byBSLUFybSBVbml0IG9yIENBUFMgdG8gQ2Fwc1xyXG4gICAgcmV0dXJuIGN1cnJlbnRTZWxlY3Quc3BsaXQoJyAnKSAvLyBTcGxpdCB0aGUgc3RyaW5nIGJ5IHNwYWNlc1xyXG4gICAgLm1hcCgod29yZCkgPT4ge1xyXG4gICAgICBpZiAod29yZC5pbmNsdWRlcygnLScpKSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIHdvcmQgY29udGFpbnMgYSBoeXBoZW4sIHNwbGl0IGl0IGFuZCBjYXBpdGFsaXplIGVhY2ggcGFydFxyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gd29yZC5zcGxpdCgnLScpO1xyXG4gICAgICAgIHJldHVybiBwYXJ0c1xyXG4gICAgICAgICAgLm1hcCgocGFydCkgPT4gcGFydC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBhcnQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgIC5qb2luKCctJyk7IC8vIEpvaW4gdGhlIHBhcnRzIGJhY2sgdG9nZXRoZXIgd2l0aCBhIGh5cGhlblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgY2FwaXRhbGl6ZSB0aGUgZW50aXJlIHdvcmRcclxuICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5qb2luKCcgJyk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51UXVlcnlNYWtlcihjdXJyZW50TWVudSkge1xyXG4gIHN3aXRjaCAoY3VycmVudE1lbnUpIHtcclxuICAgIGNhc2UgJ1VOSVQnOlxyXG4gICAgICByZXR1cm4gJ0FDVW5pdFNwZWNzJztcclxuXHJcbiAgICBjYXNlICdGUkFNRSc6XHJcbiAgICAgIHJldHVybiAnQUNGcmFtZVNwZWNzJztcclxuXHJcbiAgICBjYXNlICdJTk5FUic6XHJcbiAgICAgIHJldHVybiAnQUNJbm5lclNwZWNzJztcclxuXHJcbiAgICBjYXNlICdFWFBBTlNJT04nOlxyXG4gICAgICByZXR1cm4gJ0FDRXhwYW5zaW9uU3BlY3MnO1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtZW51IG9wdGlvbicpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJ0UXVlcnkoY3VycmVudFNlbGVjdCkge1xyXG5cclxuICBjb25zdCBwYXJ0UXVlcnkgPSBwYXJ0UXVlcnlNYWtlcihjdXJyZW50U2VsZWN0KTtcclxuXHJcbiAgcmV0dXJuIHBhcnRRdWVyeTtcclxuXHJcbn0iXSwibmFtZXMiOlsicGFydFF1ZXJ5TWFrZXIiLCJjdXJyZW50U2VsZWN0IiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJpbmNsdWRlcyIsInBhcnRzIiwicGFydCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIiwibWVudVF1ZXJ5TWFrZXIiLCJjdXJyZW50TWVudSIsIkVycm9yIiwiZ2V0UGFydFF1ZXJ5IiwicGFydFF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/building/queries.js\n"));

/***/ })

});