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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _building_assembly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building/assembly.js */ \"(app-client)/./app/building/assembly.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _building_db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building/db.js */ \"(app-client)/./app/building/db.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const recordedVersion = window.localStorage.getItem(\"recorded_version\");\n        const setVersion = async ()=>{\n            const [currentVersion, data] = await (0,_building_db_js__WEBPACK_IMPORTED_MODULE_3__.preloadData)(recordedVersion);\n            for(d in data){\n                console.log(JSON.stringify(d));\n            }\n            window.localStorage.setItem(\"recorded_version\", currentVersion);\n        };\n        setVersion();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-row items-start justify-between px-20 py-16 font-agency-fb text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-1/3 text-2x1 flex-col\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_building_assembly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n} /*\n <main className=\"flex min-h-screen flex-col items-center justify-between p-24\">\n      <div className=\"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\">\n        <p className=\"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\">\n          Get started that's crazy&nbsp;\n          <code className=\"font-mono font-bold\">app/page.js</code>\n        </p>\n        <div className=\"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none\">\n          <a\n            className=\"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0\"\n            href=\"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n            target=\"_blank\"\n            rel=\"noopener noreferrer\"\n          >\n            By{' '}\n            <Image\n              src=\"/vercel.svg\"\n              alt=\"Vercel Logo\"\n              className=\"dark:invert\"\n              width={100}\n              height={24}\n              priority\n            />\n          </a>\n        </div>\n      </div>\n\n      <div className=\"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]\">\n        <Image\n          className=\"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert\"\n          src=\"/next.svg\"\n          alt=\"Next.js Logo\"\n          width={180}\n          height={37}\n          priority\n        />\n      </div>\n\n      <div className=\"mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left\">\n        <a\n          href=\"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n          className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          <h2 className={`mb-3 text-2xl font-semibold`}>\n            Docs{' '}\n            <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n              -&gt;\n            </span>\n          </h2>\n          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n            Find in-depth information about Next.js features and API.\n          </p>\n        </a>\n\n        <a\n          href=\"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n          className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          <h2 className={`mb-3 text-2xl font-semibold`}>\n            Learn{' '}\n            <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n              -&gt;\n            </span>\n          </h2>\n          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n            Learn about Next.js in an interactive course with&nbsp;quizzes!\n          </p>\n        </a>\n\n        <a\n          href=\"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n          className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          <h2 className={`mb-3 text-2xl font-semibold`}>\n            Templates{' '}\n            <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n              -&gt;\n            </span>\n          </h2>\n          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n            Explore the Next.js 13 playground.\n          </p>\n        </a>\n\n        <a\n          href=\"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app\"\n          className=\"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          <h2 className={`mb-3 text-2xl font-semibold`}>\n            Deploy{' '}\n            <span className=\"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\">\n              -&gt;\n            </span>\n          </h2>\n          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>\n            Instantly deploy your Next.js site to a shareable URL with Vercel.\n          </p>\n        </a>\n      </div>\n    </main>\n */ \n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEM7QUFDWjtBQUNhO0FBRWhDLFNBQVNHOztJQUl0QkYsZ0RBQVNBLENBQUM7UUFFUixNQUFNRyxrQkFBa0JDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQ3BELE1BQU1DLGFBQWE7WUFDakIsTUFBTSxDQUFDQyxnQkFBZ0JDLEtBQUssR0FBRyxNQUFNUiw0REFBV0EsQ0FBQ0U7WUFDakQsSUFBSU8sS0FBS0QsS0FBTTtnQkFDYkUsUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNKO1lBQzdCO1lBQ0FOLE9BQU9DLFlBQVksQ0FBQ1UsT0FBTyxDQUFDLG9CQUFvQlA7UUFDbEQ7UUFDQUQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1M7UUFBS0MsV0FBVTtrQkFHZCw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ2xCLDZEQUFRQTs7Ozs7Ozs7Ozs7Ozs7O0FBSWpCLEVBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTRHQztHQXpJdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgQXNzZW1ibHkgZnJvbSAnLi9idWlsZGluZy9hc3NlbWJseS5qcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwcmVsb2FkRGF0YSB9IGZyb20gJy4vYnVpbGRpbmcvZGIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgcmVjb3JkZWRWZXJzaW9uID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVjb3JkZWRfdmVyc2lvblwiKTtcbiAgICBjb25zdCBzZXRWZXJzaW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgW2N1cnJlbnRWZXJzaW9uLCBkYXRhXSA9IGF3YWl0IHByZWxvYWREYXRhKHJlY29yZGVkVmVyc2lvbik7XG4gICAgICBmb3IoZCBpbiBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGQpKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlY29yZGVkX3ZlcnNpb25cIiwgY3VycmVudFZlcnNpb24pO1xuICAgIH07XG4gICAgc2V0VmVyc2lvbigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LXJvdyBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcHgtMjAgcHktMTYgZm9udC1hZ2VuY3ktZmIgdGV4dC13aGl0ZVwiPlxuXG4gICAgICB7Lyphc3NlbWJseSBjb250YWluZXIqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC0yeDEgZmxleC1jb2xcIj4gXG4gICAgICAgIDxBc3NlbWJseSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cblxuLypcbiA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbWF4LXctNXhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6ZmxleFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXhlZCBsZWZ0LTAgdG9wLTAgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS16aW5jLTIwMCBwYi02IHB0LTggYmFja2Ryb3AtYmx1ci0yeGwgZGFyazpib3JkZXItbmV1dHJhbC04MDAgZGFyazpiZy16aW5jLTgwMC8zMCBkYXJrOmZyb20taW5oZXJpdCBsZzpzdGF0aWMgbGc6dy1hdXRvICBsZzpyb3VuZGVkLXhsIGxnOmJvcmRlciBsZzpiZy1ncmF5LTIwMCBsZzpwLTQgbGc6ZGFyazpiZy16aW5jLTgwMC8zMFwiPlxuICAgICAgICAgIEdldCBzdGFydGVkIHRoYXQncyBjcmF6eSZuYnNwO1xuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LWJvbGRcIj5hcHAvcGFnZS5qczwvY29kZT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCBmbGV4IGgtNDggdy1mdWxsIGl0ZW1zLWVuZCBqdXN0aWZ5LWNlbnRlciBiZy1ncmFkaWVudC10by10IGZyb20td2hpdGUgdmlhLXdoaXRlIGRhcms6ZnJvbS1ibGFjayBkYXJrOnZpYS1ibGFjayBsZzpzdGF0aWMgbGc6aC1hdXRvIGxnOnctYXV0byBsZzpiZy1ub25lXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBwbGFjZS1pdGVtcy1jZW50ZXIgZ2FwLTIgcC04IGxnOnBvaW50ZXItZXZlbnRzLWF1dG8gbGc6cC0wXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQnl7JyAnfVxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi92ZXJjZWwuc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOmludmVydFwiXG4gICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHBsYWNlLWl0ZW1zLWNlbnRlciBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOmgtWzMwMHB4XSBiZWZvcmU6dy1bNDgwcHhdIGJlZm9yZTotdHJhbnNsYXRlLXgtMS8yIGJlZm9yZTpyb3VuZGVkLWZ1bGwgYmVmb3JlOmJnLWdyYWRpZW50LXJhZGlhbCBiZWZvcmU6ZnJvbS13aGl0ZSBiZWZvcmU6dG8tdHJhbnNwYXJlbnQgYmVmb3JlOmJsdXItMnhsIGJlZm9yZTpjb250ZW50LVsnJ10gYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6LXotMjAgYWZ0ZXI6aC1bMTgwcHhdIGFmdGVyOnctWzI0MHB4XSBhZnRlcjp0cmFuc2xhdGUteC0xLzMgYWZ0ZXI6YmctZ3JhZGllbnQtY29uaWMgYWZ0ZXI6ZnJvbS1za3ktMjAwIGFmdGVyOnZpYS1ibHVlLTIwMCBhZnRlcjpibHVyLTJ4bCBhZnRlcjpjb250ZW50LVsnJ10gYmVmb3JlOmRhcms6YmctZ3JhZGllbnQtdG8tYnIgYmVmb3JlOmRhcms6ZnJvbS10cmFuc3BhcmVudCBiZWZvcmU6ZGFyazp0by1ibHVlLTcwMCBiZWZvcmU6ZGFyazpvcGFjaXR5LTEwIGFmdGVyOmRhcms6ZnJvbS1za3ktOTAwIGFmdGVyOmRhcms6dmlhLVsjMDE0MWZmXSBhZnRlcjpkYXJrOm9wYWNpdHktNDAgYmVmb3JlOmxnOmgtWzM2MHB4XVwiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBkYXJrOmRyb3Atc2hhZG93LVswXzBfMC4zcmVtXyNmZmZmZmY3MF0gZGFyazppbnZlcnRcIlxuICAgICAgICAgIHNyYz1cIi9uZXh0LnN2Z1wiXG4gICAgICAgICAgYWx0PVwiTmV4dC5qcyBMb2dvXCJcbiAgICAgICAgICB3aWR0aD17MTgwfVxuICAgICAgICAgIGhlaWdodD17Mzd9XG4gICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTMyIGdyaWQgdGV4dC1jZW50ZXIgbGc6bWItMCBsZzpncmlkLWNvbHMtNCBsZzp0ZXh0LWxlZnRcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3M/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1hcHBkaXItdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIERvY3N7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZVwiPlxuICAgICAgICAgICAgICAtJmd0O1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIEZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybj91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWFwcGRpci10ZW1wbGF0ZS10dyZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwIGhvdmVyOmRhcms6Ymctb3BhY2l0eS0zMFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2BtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIExlYXJueycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgICAgICAgICAgICAgLSZndDtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG0tMCBtYXgtdy1bMzBjaF0gdGV4dC1zbSBvcGFjaXR5LTUwYH0+XG4gICAgICAgICAgICBMZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoJm5ic3A7cXVpenplcyFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vdGVtcGxhdGVzP2ZyYW1ld29yaz1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBUZW1wbGF0ZXN7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZVwiPlxuICAgICAgICAgICAgICAtJmd0O1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIEV4cGxvcmUgdGhlIE5leHQuanMgMTMgcGxheWdyb3VuZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vbmV3P3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09YXBwZGlyLXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBEZXBsb3l7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZVwiPlxuICAgICAgICAgICAgICAtJmd0O1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfT5cbiAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBzaGFyZWFibGUgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICovIl0sIm5hbWVzIjpbIkFzc2VtYmx5IiwidXNlRWZmZWN0IiwicHJlbG9hZERhdGEiLCJIb21lIiwicmVjb3JkZWRWZXJzaW9uIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFZlcnNpb24iLCJjdXJyZW50VmVyc2lvbiIsImRhdGEiLCJkIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});