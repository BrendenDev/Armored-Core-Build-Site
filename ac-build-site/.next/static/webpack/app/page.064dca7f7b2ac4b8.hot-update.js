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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PartsStats: function() { return /* binding */ PartsStats; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _building_assembly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building/assembly.js */ \"(app-client)/./app/building/assembly.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _building_db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building/db.js */ \"(app-client)/./app/building/db.js\");\n/* harmony import */ var _statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statUI/statbox.js */ \"(app-client)/./app/statUI/statbox.js\");\n/* harmony import */ var _statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! postcss */ \"(app-client)/./node_modules/postcss/lib/postcss.mjs\");\n/* __next_internal_client_entry_do_not_use__ PartsStats,default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction PartsStats(param) {\n    let { currentMenu, currentSelect, currentPart } = param;\n    _s();\n    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    //function changeStatData() \n    /*useEffect(() => {\n    if(currentPart === null) {} \n    else {\n      setStats(JSON.stringify(currentPart));\n    }\n\n  }, [currentPart]); //possibly dont need stateChangeTrigger and can use current select, but need to be able to activate when initially press*/ function StatsList(currentPart) {\n        function convertToTitleCase(str) {\n            let words = str.split(\"_\");\n            let result = \"\";\n            for(let i = 0; i < words.length; i++){\n                let word = words[i];\n                result += word.charAt(0).toUpperCase() + word.slice(1) + \" \";\n            }\n            return result.trim();\n        }\n        let originalString = \"attack_power\";\n        let convertedString = convertToTitleCase(originalString);\n        console.log(convertedString);\n        if (currentMenu === \"default\" || currentPart === null) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n        } else {\n            const data = [];\n            const rawData = currentPart[\"currentPart\"];\n            for (let [key, value] of Object.entries(rawData)){\n                if (key !== \"_id\" && key !== \"name\" & key !== \"type\") {\n                    const spec = convertToTitleCase(key);\n                    data.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"inline\",\n                                children: [\n                                    spec,\n                                    \"\\xa0\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this));\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: data\n            }, void 0, false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatsList, {\n                currentPart: currentPart\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n            lineNumber: 72,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 71,\n        columnNumber: 7\n    }, this);\n}\n_s(PartsStats, \"TSsQN2e2Q9URm+mGsWXqNsmG8F8=\");\n_c = PartsStats;\nfunction Home() {\n    _s1();\n    const [currentMenu, setCurrentMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\"); //menus: default, unit, frame, inner, expansion\n    const [currentSelect, setCurrentSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //selects: the sub-categories of unit, frame, inner, and expansion\n    const [currentPart, setCurrentPart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //current parts: all the parts of the sub-categories\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //check version\n        const recordedVersion = window.localStorage.getItem(\"recorded_version\");\n        const setVersion = async ()=>{\n            const [currentVersion, data] = await (0,_building_db_js__WEBPACK_IMPORTED_MODULE_3__.preloadData)(recordedVersion);\n            if (data !== null) {\n                const [unitData, frameData, innerData, expansionData] = data;\n                window.localStorage.setItem(\"unit_data\", JSON.stringify(unitData));\n                window.localStorage.setItem(\"frame_data\", JSON.stringify(frameData));\n                window.localStorage.setItem(\"inner_data\", JSON.stringify(innerData));\n                window.localStorage.setItem(\"expansion_data\", JSON.stringify(expansionData));\n            }\n            window.localStorage.setItem(\"recorded_version\", currentVersion);\n        };\n        setVersion();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-row items-start justify-between px-20 py-16 font-agency-fb text-white no-text-cursor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3 text-2x1 flex-col mx-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_building_assembly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    currentMenu: currentMenu,\n                    setCurrentMenu: setCurrentMenu,\n                    currentSelect: currentSelect,\n                    setCurrentSelect: setCurrentSelect,\n                    currentPart: currentPart,\n                    setCurrentPart: setCurrentPart\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[44.44%] border-white border-2 mx-8 items-end justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsStats, {\n                    currentMenu: currentMenu,\n                    currentSelect: currentSelect,\n                    currentPart: currentPart\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[33.33%] border-black border-2 mx-8\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, this);\n}\n_s1(Home, \"p2JWqGjgy8TfEGKgF0KgqdD6/DE=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsStats\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1EsT0FBTyxDQUFDLG9CQUFvQkw7UUFDbEQ7UUFDQUQ7SUFFRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1E7UUFBS2xCLFdBQVU7OzBCQUdkLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ3RDLDZEQUFRQTtvQkFBQ00sYUFBYUE7b0JBQWFtQyxnQkFBZ0JBO29CQUFnQmxDLGVBQWVBO29CQUFlbUMsa0JBQWtCQTtvQkFBa0JsQyxhQUFhQTtvQkFBYW1DLGdCQUFnQkE7Ozs7Ozs7Ozs7OzBCQUVsTCw4REFBQ0o7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNqQztvQkFBV0MsYUFBYUE7b0JBQWFDLGVBQWVBO29CQUFlQyxhQUFhQTs7Ozs7Ozs7Ozs7MEJBRW5GLDhEQUFDK0I7Z0JBQUlELFdBQVU7Ozs7Ozs7Ozs7OztBQUtyQjtJQTFDd0JFO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgQXNzZW1ibHkgZnJvbSAnLi9idWlsZGluZy9hc3NlbWJseS5qcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcHJlbG9hZERhdGEgfSBmcm9tICcuL2J1aWxkaW5nL2RiLmpzJztcbmltcG9ydCB7IH0gZnJvbSAnLi9zdGF0VUkvc3RhdGJveC5qcydcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3Bvc3Rjc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gUGFydHNTdGF0cyh7IGN1cnJlbnRNZW51LCBjdXJyZW50U2VsZWN0LCBjdXJyZW50UGFydCB9KSB7XG5cbiAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZSgpO1xuXG4gIC8vZnVuY3Rpb24gY2hhbmdlU3RhdERhdGEoKSBcblxuICAvKnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoY3VycmVudFBhcnQgPT09IG51bGwpIHt9IFxuICAgIGVsc2Uge1xuICAgICAgc2V0U3RhdHMoSlNPTi5zdHJpbmdpZnkoY3VycmVudFBhcnQpKTtcbiAgICB9XG5cbiAgfSwgW2N1cnJlbnRQYXJ0XSk7IC8vcG9zc2libHkgZG9udCBuZWVkIHN0YXRlQ2hhbmdlVHJpZ2dlciBhbmQgY2FuIHVzZSBjdXJyZW50IHNlbGVjdCwgYnV0IG5lZWQgdG8gYmUgYWJsZSB0byBhY3RpdmF0ZSB3aGVuIGluaXRpYWxseSBwcmVzcyovXG5cbiAgZnVuY3Rpb24gU3RhdHNMaXN0KGN1cnJlbnRQYXJ0KSB7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0VG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgICBsZXQgd29yZHMgPSBzdHIuc3BsaXQoJ18nKTtcbiAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd29yZCA9IHdvcmRzW2ldO1xuICAgICAgICByZXN1bHQgKz0gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkgKyAnICc7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiByZXN1bHQudHJpbSgpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgb3JpZ2luYWxTdHJpbmcgPSBcImF0dGFja19wb3dlclwiO1xuICAgIGxldCBjb252ZXJ0ZWRTdHJpbmcgPSBjb252ZXJ0VG9UaXRsZUNhc2Uob3JpZ2luYWxTdHJpbmcpO1xuICAgIGNvbnNvbGUubG9nKGNvbnZlcnRlZFN0cmluZyk7XG4gICAgaWYoY3VycmVudE1lbnUgPT09ICdkZWZhdWx0JyB8fCBjdXJyZW50UGFydCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZGF0YSA9IFtdXG4gICAgICBjb25zdCByYXdEYXRhID0gY3VycmVudFBhcnRbJ2N1cnJlbnRQYXJ0J107XG4gICAgICBmb3IobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyYXdEYXRhKSkge1xuICAgICAgICBpZihrZXkgIT09ICdfaWQnICYmIGtleSAhPT0gJ25hbWUnICYga2V5ICE9PSAndHlwZScpIHtcbiAgICAgICAgICBjb25zdCBzcGVjID0gY29udmVydFRvVGl0bGVDYXNlKGtleSk7XG4gICAgICAgICAgZGF0YS5wdXNoKFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZVwiPntzcGVjfSZuYnNwOzwvcD5cbiAgICAgICAgICAgICAgPHAgPnt2YWx1ZX08L3A+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAge2RhdGF9XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8U3RhdHNMaXN0IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0vPlxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICApO1xuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbY3VycmVudE1lbnUsIHNldEN1cnJlbnRNZW51XSA9IHVzZVN0YXRlKCdkZWZhdWx0Jyk7IC8vbWVudXM6IGRlZmF1bHQsIHVuaXQsIGZyYW1lLCBpbm5lciwgZXhwYW5zaW9uXG5cbiAgY29uc3QgW2N1cnJlbnRTZWxlY3QsIHNldEN1cnJlbnRTZWxlY3RdID0gdXNlU3RhdGUoXCJcIik7IC8vc2VsZWN0czogdGhlIHN1Yi1jYXRlZ29yaWVzIG9mIHVuaXQsIGZyYW1lLCBpbm5lciwgYW5kIGV4cGFuc2lvblxuXG4gIGNvbnN0IFtjdXJyZW50UGFydCwgc2V0Q3VycmVudFBhcnRdID0gdXNlU3RhdGUoXCJcIik7IC8vY3VycmVudCBwYXJ0czogYWxsIHRoZSBwYXJ0cyBvZiB0aGUgc3ViLWNhdGVnb3JpZXNcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL2NoZWNrIHZlcnNpb25cbiAgICBjb25zdCByZWNvcmRlZFZlcnNpb24gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWNvcmRlZF92ZXJzaW9uXCIpO1xuICAgIGNvbnN0IHNldFZlcnNpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBbY3VycmVudFZlcnNpb24sIGRhdGFdID0gYXdhaXQgcHJlbG9hZERhdGEocmVjb3JkZWRWZXJzaW9uKTtcbiAgICAgIGlmKGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgW3VuaXREYXRhLCBmcmFtZURhdGEsIGlubmVyRGF0YSwgZXhwYW5zaW9uRGF0YV0gPSBkYXRhO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1bml0X2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkodW5pdERhdGEpKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZnJhbWVfZGF0YVwiLCBKU09OLnN0cmluZ2lmeShmcmFtZURhdGEpKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaW5uZXJfZGF0YVwiLCBKU09OLnN0cmluZ2lmeShpbm5lckRhdGEpKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZXhwYW5zaW9uX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZXhwYW5zaW9uRGF0YSkpO1xuICAgICAgfVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVjb3JkZWRfdmVyc2lvblwiLCBjdXJyZW50VmVyc2lvbik7XG4gICAgfTtcbiAgICBzZXRWZXJzaW9uKCk7XG5cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1yb3cgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHB4LTIwIHB5LTE2IGZvbnQtYWdlbmN5LWZiIHRleHQtd2hpdGUgbm8tdGV4dC1jdXJzb3JcIj5cblxuICAgICAgey8qYXNzZW1ibHkgY29udGFpbmVyKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHRleHQtMngxIGZsZXgtY29sIG14LThcIj4gXG4gICAgICAgIDxBc3NlbWJseSBjdXJyZW50TWVudT17Y3VycmVudE1lbnV9IHNldEN1cnJlbnRNZW51PXtzZXRDdXJyZW50TWVudX0gY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gc2V0Q3VycmVudFNlbGVjdD17c2V0Q3VycmVudFNlbGVjdH0gY3VycmVudFBhcnQ9e2N1cnJlbnRQYXJ0fSBzZXRDdXJyZW50UGFydD17c2V0Q3VycmVudFBhcnR9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzQ0LjQ0JV0gYm9yZGVyLXdoaXRlIGJvcmRlci0yIG14LTggaXRlbXMtZW5kIGp1c3RpZnktZW5kJz5cbiAgICAgICAgPFBhcnRzU3RhdHMgY3VycmVudE1lbnU9e2N1cnJlbnRNZW51fSBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSBjdXJyZW50UGFydD17Y3VycmVudFBhcnR9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzMzLjMzJV0gYm9yZGVyLWJsYWNrIGJvcmRlci0yIG14LTgnPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG4gIFxufSJdLCJuYW1lcyI6WyJBc3NlbWJseSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJlbG9hZERhdGEiLCJzdHJpbmdpZnkiLCJQYXJ0c1N0YXRzIiwiY3VycmVudE1lbnUiLCJjdXJyZW50U2VsZWN0IiwiY3VycmVudFBhcnQiLCJzdGF0cyIsInNldFN0YXRzIiwiU3RhdHNMaXN0IiwiY29udmVydFRvVGl0bGVDYXNlIiwic3RyIiwid29yZHMiLCJzcGxpdCIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRyaW0iLCJvcmlnaW5hbFN0cmluZyIsImNvbnZlcnRlZFN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmF3RGF0YSIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsInNwZWMiLCJwdXNoIiwic3BhbiIsInAiLCJjbGFzc05hbWUiLCJkaXYiLCJIb21lIiwic2V0Q3VycmVudE1lbnUiLCJzZXRDdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFBhcnQiLCJyZWNvcmRlZFZlcnNpb24iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0VmVyc2lvbiIsImN1cnJlbnRWZXJzaW9uIiwidW5pdERhdGEiLCJmcmFtZURhdGEiLCJpbm5lckRhdGEiLCJleHBhbnNpb25EYXRhIiwic2V0SXRlbSIsIkpTT04iLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});