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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PartsStats: function() { return /* binding */ PartsStats; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _building_assembly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building/assembly.js */ \"(app-client)/./app/building/assembly.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _building_db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building/db.js */ \"(app-client)/./app/building/db.js\");\n/* harmony import */ var _statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statUI/statbox.js */ \"(app-client)/./app/statUI/statbox.js\");\n/* harmony import */ var _statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! postcss */ \"(app-client)/./node_modules/postcss/lib/postcss.mjs\");\n/* __next_internal_client_entry_do_not_use__ PartsStats,default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction PartsStats(param) {\n    let { currentMenu, currentSelect, currentPart } = param;\n    _s();\n    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    //function changeStatData() \n    /*useEffect(() => {\n    if(currentPart === null) {} \n    else {\n      setStats(JSON.stringify(currentPart));\n    }\n\n  }, [currentPart]); //possibly dont need stateChangeTrigger and can use current select, but need to be able to activate when initially press*/ function StatsList(currentPart) {\n        function convertToTitleCase(str) {\n            let words = str.split(\"_\");\n            let result = \"\";\n            for(let i = 0; i < words.length; i++){\n                let word = words[i];\n                result += word.charAt(0).toUpperCase() + word.slice(1) + \" \";\n            }\n            return result.trim();\n        }\n        let originalString = \"attack_power\";\n        let convertedString = convertToTitleCase(originalString);\n        console.log(convertedString);\n        if (currentMenu === \"default\" || currentPart === null) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n        } else {\n            const data = [];\n            const rawData = currentPart[\"currentPart\"];\n            for (let [key, value] of Object.entries(rawData)){\n                if (key !== \"_id\" && key !== \"name\" & key !== \"type\") {\n                    const spec = convertToTitleCase(key);\n                    data.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex justify-between space-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"justify-end\",\n                                children: [\n                                    spec,\n                                    \"\\xa0\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 15\n                    }, this));\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: data\n            }, void 0, false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatsList, {\n                currentPart: currentPart\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n            lineNumber: 74,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 73,\n        columnNumber: 7\n    }, this);\n}\n_s(PartsStats, \"TSsQN2e2Q9URm+mGsWXqNsmG8F8=\");\n_c = PartsStats;\nfunction Home() {\n    _s1();\n    const [currentMenu, setCurrentMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\"); //menus: default, unit, frame, inner, expansion\n    const [currentSelect, setCurrentSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //selects: the sub-categories of unit, frame, inner, and expansion\n    const [currentPart, setCurrentPart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //current parts: all the parts of the sub-categories\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //check version\n        const recordedVersion = window.localStorage.getItem(\"recorded_version\");\n        const setVersion = async ()=>{\n            const [currentVersion, data] = await (0,_building_db_js__WEBPACK_IMPORTED_MODULE_3__.preloadData)(recordedVersion);\n            if (data !== null) {\n                const [unitData, frameData, innerData, expansionData] = data;\n                window.localStorage.setItem(\"unit_data\", JSON.stringify(unitData));\n                window.localStorage.setItem(\"frame_data\", JSON.stringify(frameData));\n                window.localStorage.setItem(\"inner_data\", JSON.stringify(innerData));\n                window.localStorage.setItem(\"expansion_data\", JSON.stringify(expansionData));\n            }\n            window.localStorage.setItem(\"recorded_version\", currentVersion);\n        };\n        setVersion();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-row items-start justify-between px-20 py-16 font-agency-fb text-white no-text-cursor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3 text-2x1 flex-col mx-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_building_assembly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    currentMenu: currentMenu,\n                    setCurrentMenu: setCurrentMenu,\n                    currentSelect: currentSelect,\n                    setCurrentSelect: setCurrentSelect,\n                    currentPart: currentPart,\n                    setCurrentPart: setCurrentPart\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[44.44%] border-white border-2 mx-8 items-end justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsStats, {\n                    currentMenu: currentMenu,\n                    currentSelect: currentSelect,\n                    currentPart: currentPart\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[33.33%] border-black border-2 mx-8\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s1(Home, \"p2JWqGjgy8TfEGKgF0KgqdD6/DE=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsStats\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzhDO0FBQ0Y7QUFDRztBQUNWO0FBQ0Q7QUFFN0IsU0FBU0ssV0FBVyxLQUEyQztRQUEzQyxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFLEdBQTNDOztJQUV6QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBO0lBRWxDLDRCQUE0QjtJQUU1Qjs7Ozs7OzZJQU0ySSxHQUUzSSxTQUFTVSxVQUFVSCxXQUFXO1FBRTVCLFNBQVNJLG1CQUFtQkMsR0FBRztZQUM3QixJQUFJQyxRQUFRRCxJQUFJRSxLQUFLLENBQUM7WUFDdEIsSUFBSUMsU0FBUztZQUViLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxNQUFNSSxNQUFNLEVBQUVELElBQUs7Z0JBQ3JDLElBQUlFLE9BQU9MLEtBQUssQ0FBQ0csRUFBRTtnQkFDbkJELFVBQVVHLEtBQUtDLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLEtBQUtGLEtBQUtHLEtBQUssQ0FBQyxLQUFLO1lBQzNEO1lBRUEsT0FBT04sT0FBT08sSUFBSTtRQUNwQjtRQUVBLElBQUlDLGlCQUFpQjtRQUNyQixJQUFJQyxrQkFBa0JiLG1CQUFtQlk7UUFDekNFLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixJQUFHbkIsZ0JBQWdCLGFBQWFFLGdCQUFnQixNQUFNO1lBQ3BELHFCQUNFO1FBR0osT0FDSztZQUNILE1BQU1vQixPQUFPLEVBQUU7WUFDZixNQUFNQyxVQUFVckIsV0FBVyxDQUFDLGNBQWM7WUFDMUMsS0FBSSxJQUFJLENBQUNzQixLQUFLQyxNQUFNLElBQUlDLE9BQU9DLE9BQU8sQ0FBQ0osU0FBVTtnQkFDL0MsSUFBR0MsUUFBUSxTQUFTQSxRQUFRLFNBQVNBLFFBQVEsUUFBUTtvQkFFbkQsTUFBTUksT0FBT3RCLG1CQUFtQmtCO29CQUNoQ0YsS0FBS08sSUFBSSxlQUNMLDhEQUFDQzt3QkFBS0MsV0FBVTs7MENBQ2QsOERBQUNDO2dDQUFFRCxXQUFVOztvQ0FBZUg7b0NBQUs7Ozs7Ozs7MENBQ2pDLDhEQUFDSTtnQ0FBRUQsV0FBVTswQ0FBSU47Ozs7Ozs7Ozs7OztnQkFJekI7WUFDRjtZQUVBLHFCQUNFOzBCQUNHSDs7UUFHUDtJQUdGO0lBRUEscUJBQ0ksOERBQUNXO1FBQUlGLFdBQVU7a0JBQ1gsNEVBQUNDO3NCQUNDLDRFQUFDM0I7Z0JBQVVILGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0dBeEVnQkg7S0FBQUE7QUEyRUQsU0FBU21DOztJQUV0QixNQUFNLENBQUNsQyxhQUFhbUMsZUFBZSxHQUFHeEMsK0NBQVFBLENBQUMsWUFBWSwrQ0FBK0M7SUFFMUcsTUFBTSxDQUFDTSxlQUFlbUMsaUJBQWlCLEdBQUd6QywrQ0FBUUEsQ0FBQyxLQUFLLGtFQUFrRTtJQUUxSCxNQUFNLENBQUNPLGFBQWFtQyxlQUFlLEdBQUcxQywrQ0FBUUEsQ0FBQyxLQUFLLG9EQUFvRDtJQUd4R0MsZ0RBQVNBLENBQUM7UUFDUixlQUFlO1FBQ2YsTUFBTTBDLGtCQUFrQkMsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7UUFDcEQsTUFBTUMsYUFBYTtZQUNqQixNQUFNLENBQUNDLGdCQUFnQnJCLEtBQUssR0FBRyxNQUFNekIsNERBQVdBLENBQUN5QztZQUNqRCxJQUFHaEIsU0FBUyxNQUFNO2dCQUNoQixNQUFNLENBQUNzQixVQUFVQyxXQUFXQyxXQUFXQyxjQUFjLEdBQUd6QjtnQkFDeERpQixPQUFPQyxZQUFZLENBQUNRLE9BQU8sQ0FBQyxhQUFhQyxLQUFLbkQsU0FBUyxDQUFDOEM7Z0JBQ3hETCxPQUFPQyxZQUFZLENBQUNRLE9BQU8sQ0FBQyxjQUFjQyxLQUFLbkQsU0FBUyxDQUFDK0M7Z0JBQ3pETixPQUFPQyxZQUFZLENBQUNRLE9BQU8sQ0FBQyxjQUFjQyxLQUFLbkQsU0FBUyxDQUFDZ0Q7Z0JBQ3pEUCxPQUFPQyxZQUFZLENBQUNRLE9BQU8sQ0FBQyxrQkFBa0JDLEtBQUtuRCxTQUFTLENBQUNpRDtZQUMvRDtZQUNBUixPQUFPQyxZQUFZLENBQUNRLE9BQU8sQ0FBQyxvQkFBb0JMO1FBQ2xEO1FBQ0FEO0lBRUYsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUtuQixXQUFVOzswQkFHZCw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNyQyw2REFBUUE7b0JBQUNNLGFBQWFBO29CQUFhbUMsZ0JBQWdCQTtvQkFBZ0JsQyxlQUFlQTtvQkFBZW1DLGtCQUFrQkE7b0JBQWtCbEMsYUFBYUE7b0JBQWFtQyxnQkFBZ0JBOzs7Ozs7Ozs7OzswQkFFbEwsOERBQUNKO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDaEM7b0JBQVdDLGFBQWFBO29CQUFhQyxlQUFlQTtvQkFBZUMsYUFBYUE7Ozs7Ozs7Ozs7OzBCQUVuRiw4REFBQytCO2dCQUFJRixXQUFVOzs7Ozs7Ozs7Ozs7QUFLckI7SUExQ3dCRztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IEFzc2VtYmx5IGZyb20gJy4vYnVpbGRpbmcvYXNzZW1ibHkuanMnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHByZWxvYWREYXRhIH0gZnJvbSAnLi9idWlsZGluZy9kYi5qcyc7XG5pbXBvcnQgeyB9IGZyb20gJy4vc3RhdFVJL3N0YXRib3guanMnXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdwb3N0Y3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFBhcnRzU3RhdHMoeyBjdXJyZW50TWVudSwgY3VycmVudFNlbGVjdCwgY3VycmVudFBhcnQgfSkge1xuXG4gIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlU3RhdGUoKTtcblxuICAvL2Z1bmN0aW9uIGNoYW5nZVN0YXREYXRhKCkgXG5cbiAgLyp1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGN1cnJlbnRQYXJ0ID09PSBudWxsKSB7fSBcbiAgICBlbHNlIHtcbiAgICAgIHNldFN0YXRzKEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQYXJ0KSk7XG4gICAgfVxuXG4gIH0sIFtjdXJyZW50UGFydF0pOyAvL3Bvc3NpYmx5IGRvbnQgbmVlZCBzdGF0ZUNoYW5nZVRyaWdnZXIgYW5kIGNhbiB1c2UgY3VycmVudCBzZWxlY3QsIGJ1dCBuZWVkIHRvIGJlIGFibGUgdG8gYWN0aXZhdGUgd2hlbiBpbml0aWFsbHkgcHJlc3MqL1xuXG4gIGZ1bmN0aW9uIFN0YXRzTGlzdChjdXJyZW50UGFydCkge1xuXG4gICAgZnVuY3Rpb24gY29udmVydFRvVGl0bGVDYXNlKHN0cikge1xuICAgICAgbGV0IHdvcmRzID0gc3RyLnNwbGl0KCdfJyk7XG4gICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHdvcmQgPSB3b3Jkc1tpXTtcbiAgICAgICAgcmVzdWx0ICs9IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpICsgJyAnO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gcmVzdWx0LnRyaW0oKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IG9yaWdpbmFsU3RyaW5nID0gXCJhdHRhY2tfcG93ZXJcIjtcbiAgICBsZXQgY29udmVydGVkU3RyaW5nID0gY29udmVydFRvVGl0bGVDYXNlKG9yaWdpbmFsU3RyaW5nKTtcbiAgICBjb25zb2xlLmxvZyhjb252ZXJ0ZWRTdHJpbmcpO1xuICAgIGlmKGN1cnJlbnRNZW51ID09PSAnZGVmYXVsdCcgfHwgY3VycmVudFBhcnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXVxuICAgICAgY29uc3QgcmF3RGF0YSA9IGN1cnJlbnRQYXJ0WydjdXJyZW50UGFydCddO1xuICAgICAgZm9yKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmF3RGF0YSkpIHtcbiAgICAgICAgaWYoa2V5ICE9PSAnX2lkJyAmJiBrZXkgIT09ICduYW1lJyAmIGtleSAhPT0gJ3R5cGUnKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3Qgc3BlYyA9IGNvbnZlcnRUb1RpdGxlQ2FzZShrZXkpO1xuICAgICAgICAgIGRhdGEucHVzaChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImp1c3RpZnktZW5kXCI+e3NwZWN9Jm5ic3A7PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPnt2YWx1ZX08L3A+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgIHtkYXRhfVxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPFN0YXRzTGlzdCBjdXJyZW50UGFydD17Y3VycmVudFBhcnR9Lz5cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2N1cnJlbnRNZW51LCBzZXRDdXJyZW50TWVudV0gPSB1c2VTdGF0ZSgnZGVmYXVsdCcpOyAvL21lbnVzOiBkZWZhdWx0LCB1bml0LCBmcmFtZSwgaW5uZXIsIGV4cGFuc2lvblxuXG4gIGNvbnN0IFtjdXJyZW50U2VsZWN0LCBzZXRDdXJyZW50U2VsZWN0XSA9IHVzZVN0YXRlKFwiXCIpOyAvL3NlbGVjdHM6IHRoZSBzdWItY2F0ZWdvcmllcyBvZiB1bml0LCBmcmFtZSwgaW5uZXIsIGFuZCBleHBhbnNpb25cblxuICBjb25zdCBbY3VycmVudFBhcnQsIHNldEN1cnJlbnRQYXJ0XSA9IHVzZVN0YXRlKFwiXCIpOyAvL2N1cnJlbnQgcGFydHM6IGFsbCB0aGUgcGFydHMgb2YgdGhlIHN1Yi1jYXRlZ29yaWVzXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9jaGVjayB2ZXJzaW9uXG4gICAgY29uc3QgcmVjb3JkZWRWZXJzaW9uID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVjb3JkZWRfdmVyc2lvblwiKTtcbiAgICBjb25zdCBzZXRWZXJzaW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgW2N1cnJlbnRWZXJzaW9uLCBkYXRhXSA9IGF3YWl0IHByZWxvYWREYXRhKHJlY29yZGVkVmVyc2lvbik7XG4gICAgICBpZihkYXRhICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IFt1bml0RGF0YSwgZnJhbWVEYXRhLCBpbm5lckRhdGEsIGV4cGFuc2lvbkRhdGFdID0gZGF0YTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidW5pdF9kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHVuaXREYXRhKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZyYW1lX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZnJhbWVEYXRhKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlubmVyX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoaW5uZXJEYXRhKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGFuc2lvbl9kYXRhXCIsIEpTT04uc3RyaW5naWZ5KGV4cGFuc2lvbkRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlY29yZGVkX3ZlcnNpb25cIiwgY3VycmVudFZlcnNpb24pO1xuICAgIH07XG4gICAgc2V0VmVyc2lvbigpO1xuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtcm93IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBweC0yMCBweS0xNiBmb250LWFnZW5jeS1mYiB0ZXh0LXdoaXRlIG5vLXRleHQtY3Vyc29yXCI+XG5cbiAgICAgIHsvKmFzc2VtYmx5IGNvbnRhaW5lciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LTJ4MSBmbGV4LWNvbCBteC04XCI+IFxuICAgICAgICA8QXNzZW1ibHkgY3VycmVudE1lbnU9e2N1cnJlbnRNZW51fSBzZXRDdXJyZW50TWVudT17c2V0Q3VycmVudE1lbnV9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IHNldEN1cnJlbnRTZWxlY3Q9e3NldEN1cnJlbnRTZWxlY3R9IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0gc2V0Q3VycmVudFBhcnQ9e3NldEN1cnJlbnRQYXJ0fS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs0NC40NCVdIGJvcmRlci13aGl0ZSBib3JkZXItMiBteC04IGl0ZW1zLWVuZCBqdXN0aWZ5LWVuZCc+XG4gICAgICAgIDxQYXJ0c1N0YXRzIGN1cnJlbnRNZW51PXtjdXJyZW50TWVudX0gY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gY3VycmVudFBhcnQ9e2N1cnJlbnRQYXJ0fS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVszMy4zMyVdIGJvcmRlci1ibGFjayBib3JkZXItMiBteC04Jz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxuICBcbn0iXSwibmFtZXMiOlsiQXNzZW1ibHkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZWxvYWREYXRhIiwic3RyaW5naWZ5IiwiUGFydHNTdGF0cyIsImN1cnJlbnRNZW51IiwiY3VycmVudFNlbGVjdCIsImN1cnJlbnRQYXJ0Iiwic3RhdHMiLCJzZXRTdGF0cyIsIlN0YXRzTGlzdCIsImNvbnZlcnRUb1RpdGxlQ2FzZSIsInN0ciIsIndvcmRzIiwic3BsaXQiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwid29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0cmltIiwib3JpZ2luYWxTdHJpbmciLCJjb252ZXJ0ZWRTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJhd0RhdGEiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJzcGVjIiwicHVzaCIsInNwYW4iLCJjbGFzc05hbWUiLCJwIiwiZGl2IiwiSG9tZSIsInNldEN1cnJlbnRNZW51Iiwic2V0Q3VycmVudFNlbGVjdCIsInNldEN1cnJlbnRQYXJ0IiwicmVjb3JkZWRWZXJzaW9uIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFZlcnNpb24iLCJjdXJyZW50VmVyc2lvbiIsInVuaXREYXRhIiwiZnJhbWVEYXRhIiwiaW5uZXJEYXRhIiwiZXhwYW5zaW9uRGF0YSIsInNldEl0ZW0iLCJKU09OIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});