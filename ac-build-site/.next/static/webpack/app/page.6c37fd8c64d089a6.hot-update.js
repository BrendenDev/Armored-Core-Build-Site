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

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _building_assembly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building/assembly.js */ \"(app-client)/./app/building/assembly.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _building_db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building/db.js */ \"(app-client)/./app/building/db.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const recordedVersion = window.localStorage.getItem(\"recorded_version\");\n        const setVersion = async ()=>{\n            const [currentVersion, data] = await (0,_building_db_js__WEBPACK_IMPORTED_MODULE_3__.preloadData)(recordedVersion);\n            for(d in data){\n                console.log(\"hi\");\n                console.log(d);\n            }\n            window.localStorage.setItem(\"recorded_version\", currentVersion);\n        };\n        setVersion();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-row items-start justify-between px-20 py-16 font-agency-fb text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-1/3 text-2x1 flex-col\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_building_assembly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n} /*\n <main className=\"flex min-h-screen flex-col items-center justify-between p-24\">\n      <div className=\"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\">\n        <p className=\"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\">\n          Get started that's crazy&nbsp;\n          <code className=\"font-mono font-bold\">app/page.js</code>\n        </p>\n        <div className=\"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none\">\n          <a\n            className=\"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0\"\n            href=\"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n            target=\"_blank\"\n            rel=\"noopener noreferrer\"\n          >\n            By{' '}\n            <Image\n              src=\"/vercel.svg\"\n              alt=\"Vercel Logo\"\n              className=\"dark:invert\"\n              width={100}\n              height={24}\n              priority\n            />\n          </a>\n        </div>\n      </div>\n\n      <div className=\"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]\">\n        <Image\n          className=\"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert\"\n          src=\"/next.svg\"\n          alt=\"Next.js Logo\"\n          width={180}\n          height={37}\n          priority\n        />\n      </div>\n\n      <div className=\"mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left\">\n        <a\n          href=\"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n          className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          <h2 className={`mb-3 text-2xl font-semibold`}>\n            Docs{' '}\n            <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n              -&gt;\n            </span>\n          </h2>\n          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n            Find in-depth information about Next.js features and API.\n          </p>\n        </a>\n\n        <a\n          href=\"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n          className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          <h2 className={`mb-3 text-2xl font-semibold`}>\n            Learn{' '}\n            <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n              -&gt;\n            </span>\n          </h2>\n          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n            Learn about Next.js in an interactive course with&nbsp;quizzes!\n          </p>\n        </a>\n\n        <a\n          href=\"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n          className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          <h2 className={`mb-3 text-2xl font-semibold`}>\n            Templates{' '}\n            <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n              -&gt;\n            </span>\n          </h2>\n          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n            Explore the Next.js 13 playground.\n          </p>\n        </a>\n\n        <a\n          href=\"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n          className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          <h2 className={`mb-3 text-2xl font-semibold`}>\n            Deploy{' '}\n            <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n              -&gt;\n            </span>\n          </h2>\n          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n            Instantly deploy your Next.js site to a shareable URL with Vercel.\n          </p>\n        </a>\n      </div>\n    </main>\n */ \n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEM7QUFDWjtBQUNhO0FBRWhDLFNBQVNHOztJQUl0QkYsZ0RBQVNBLENBQUM7UUFFUixNQUFNRyxrQkFBa0JDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQ3BELE1BQU1DLGFBQWE7WUFDakIsTUFBTSxDQUFDQyxnQkFBZ0JDLEtBQUssR0FBRyxNQUFNUiw0REFBV0EsQ0FBQ0U7WUFDakQsSUFBSU8sS0FBS0QsS0FBTTtnQkFDYkUsUUFBUUMsR0FBRyxDQUFDO2dCQUNaRCxRQUFRQyxHQUFHLENBQUNGO1lBQ2Q7WUFDQU4sT0FBT0MsWUFBWSxDQUFDUSxPQUFPLENBQUMsb0JBQW9CTDtRQUNsRDtRQUNBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTztRQUFLQyxXQUFVO2tCQUdkLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDaEIsNkRBQVFBOzs7Ozs7Ozs7Ozs7Ozs7QUFJakIsRUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEdDO0dBMUl1Qkc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBBc3NlbWJseSBmcm9tICcuL2J1aWxkaW5nL2Fzc2VtYmx5LmpzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHByZWxvYWREYXRhIH0gZnJvbSAnLi9idWlsZGluZy9kYi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgICBjb25zdCByZWNvcmRlZFZlcnNpb24gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWNvcmRlZF92ZXJzaW9uXCIpO1xuICAgIGNvbnN0IHNldFZlcnNpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBbY3VycmVudFZlcnNpb24sIGRhdGFdID0gYXdhaXQgcHJlbG9hZERhdGEocmVjb3JkZWRWZXJzaW9uKTtcbiAgICAgIGZvcihkIGluIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZCk7XG4gICAgICB9XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWNvcmRlZF92ZXJzaW9uXCIsIGN1cnJlbnRWZXJzaW9uKTtcbiAgICB9O1xuICAgIHNldFZlcnNpb24oKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1yb3cgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHB4LTIwIHB5LTE2IGZvbnQtYWdlbmN5LWZiIHRleHQtd2hpdGVcIj5cblxuICAgICAgey8qYXNzZW1ibHkgY29udGFpbmVyKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHRleHQtMngxIGZsZXgtY29sXCI+IFxuICAgICAgICA8QXNzZW1ibHkgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5cbi8qXG4gPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIGxnOmZsZXhcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZml4ZWQgbGVmdC0wIHRvcC0wIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBiZy1ncmFkaWVudC10by1iIGZyb20temluYy0yMDAgcGItNiBwdC04IGJhY2tkcm9wLWJsdXItMnhsIGRhcms6Ym9yZGVyLW5ldXRyYWwtODAwIGRhcms6YmctemluYy04MDAvMzAgZGFyazpmcm9tLWluaGVyaXQgbGc6c3RhdGljIGxnOnctYXV0byAgbGc6cm91bmRlZC14bCBsZzpib3JkZXIgbGc6YmctZ3JheS0yMDAgbGc6cC00IGxnOmRhcms6YmctemluYy04MDAvMzBcIj5cbiAgICAgICAgICBHZXQgc3RhcnRlZCB0aGF0J3MgY3JhenkmbmJzcDtcbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkXCI+YXBwL3BhZ2UuanM8L2NvZGU+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMCBsZWZ0LTAgZmxleCBoLTQ4IHctZnVsbCBpdGVtcy1lbmQganVzdGlmeS1jZW50ZXIgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHZpYS13aGl0ZSBkYXJrOmZyb20tYmxhY2sgZGFyazp2aWEtYmxhY2sgbGc6c3RhdGljIGxnOmgtYXV0byBsZzp3LWF1dG8gbGc6Ymctbm9uZVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGZsZXggcGxhY2UtaXRlbXMtY2VudGVyIGdhcC0yIHAtOCBsZzpwb2ludGVyLWV2ZW50cy1hdXRvIGxnOnAtMFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJ5eycgJ31cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvdmVyY2VsLnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFyazppbnZlcnRcIlxuICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTpoLVszMDBweF0gYmVmb3JlOnctWzQ4MHB4XSBiZWZvcmU6LXRyYW5zbGF0ZS14LTEvMiBiZWZvcmU6cm91bmRlZC1mdWxsIGJlZm9yZTpiZy1ncmFkaWVudC1yYWRpYWwgYmVmb3JlOmZyb20td2hpdGUgYmVmb3JlOnRvLXRyYW5zcGFyZW50IGJlZm9yZTpibHVyLTJ4bCBiZWZvcmU6Y29udGVudC1bJyddIGFmdGVyOmFic29sdXRlIGFmdGVyOi16LTIwIGFmdGVyOmgtWzE4MHB4XSBhZnRlcjp3LVsyNDBweF0gYWZ0ZXI6dHJhbnNsYXRlLXgtMS8zIGFmdGVyOmJnLWdyYWRpZW50LWNvbmljIGFmdGVyOmZyb20tc2t5LTIwMCBhZnRlcjp2aWEtYmx1ZS0yMDAgYWZ0ZXI6Ymx1ci0yeGwgYWZ0ZXI6Y29udGVudC1bJyddIGJlZm9yZTpkYXJrOmJnLWdyYWRpZW50LXRvLWJyIGJlZm9yZTpkYXJrOmZyb20tdHJhbnNwYXJlbnQgYmVmb3JlOmRhcms6dG8tYmx1ZS03MDAgYmVmb3JlOmRhcms6b3BhY2l0eS0xMCBhZnRlcjpkYXJrOmZyb20tc2t5LTkwMCBhZnRlcjpkYXJrOnZpYS1bIzAxNDFmZl0gYWZ0ZXI6ZGFyazpvcGFjaXR5LTQwIGJlZm9yZTpsZzpoLVszNjBweF1cIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZGFyazpkcm9wLXNoYWRvdy1bMF8wXzAuM3JlbV8jZmZmZmZmNzBdIGRhcms6aW52ZXJ0XCJcbiAgICAgICAgICBzcmM9XCIvbmV4dC5zdmdcIlxuICAgICAgICAgIGFsdD1cIk5leHQuanMgTG9nb1wiXG4gICAgICAgICAgd2lkdGg9ezE4MH1cbiAgICAgICAgICBoZWlnaHQ9ezM3fVxuICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zMiBncmlkIHRleHQtY2VudGVyIGxnOm1iLTAgbGc6Z3JpZC1jb2xzLTQgbGc6dGV4dC1sZWZ0XCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBEb2NzeycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgICAgICAgICAgICAgLSZndDtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBGaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm4/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUtdHcmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMCBob3ZlcjpkYXJrOmJnLW9wYWNpdHktMzBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBMZWFybnsnICd9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSBtb3Rpb24tcmVkdWNlOnRyYW5zZm9ybS1ub25lXCI+XG4gICAgICAgICAgICAgIC0mZ3Q7XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2BtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9PlxuICAgICAgICAgICAgTGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCZuYnNwO3F1aXp6ZXMhXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL3RlbXBsYXRlcz9mcmFtZXdvcms9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAgICAgICAgICAgVGVtcGxhdGVzeycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgICAgICAgICAgICAgLSZndDtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBFeHBsb3JlIHRoZSBOZXh0LmpzIDEzIHBsYXlncm91bmQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAgICAgICAgICAgRGVwbG95eycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgICAgICAgICAgICAgLSZndDtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgc2hhcmVhYmxlIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAqLyJdLCJuYW1lcyI6WyJBc3NlbWJseSIsInVzZUVmZmVjdCIsInByZWxvYWREYXRhIiwiSG9tZSIsInJlY29yZGVkVmVyc2lvbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRWZXJzaW9uIiwiY3VycmVudFZlcnNpb24iLCJkYXRhIiwiZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRJdGVtIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});