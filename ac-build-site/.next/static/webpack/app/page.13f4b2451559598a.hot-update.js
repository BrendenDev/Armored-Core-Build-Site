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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _building_assembly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building/assembly.js */ \"(app-client)/./app/building/assembly.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _building_db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building/db.js */ \"(app-client)/./app/building/db.js\");\n/* harmony import */ var _statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statUI/statbox.js */ \"(app-client)/./app/statUI/statbox.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomeButton(param) {\n    let { setCurrentMenu } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex justify-center items-center\",\n        onClick: ()=>setCurrentMenu(\"default\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Home\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = HomeButton;\nfunction Home() {\n    _s();\n    const [currentMenu, setCurrentMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\"); //menus: default, unit, frame, inner, expansion\n    const [currentSelect, setCurrentSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //selects: the sub-categories of unit, frame, inner, and expansion\n    const [currentPart, setCurrentPart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //current part of stats displayed: all the parts of the sub-categories\n    const [currentEquipped, setCurrentEquipped] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //current equipped part, not just selected (applies to overall stats, not just viewing)\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //check version\n        const recordedVersion = window.localStorage.getItem(\"recorded_version\");\n        const setVersion = async ()=>{\n            const [currentVersion, data] = await (0,_building_db_js__WEBPACK_IMPORTED_MODULE_3__.preloadData)(recordedVersion);\n            if (data !== null) {\n                const [unitData, frameData, innerData, expansionData] = data;\n                window.localStorage.setItem(\"unit_data\", JSON.stringify(unitData));\n                window.localStorage.setItem(\"frame_data\", JSON.stringify(frameData));\n                window.localStorage.setItem(\"inner_data\", JSON.stringify(innerData));\n                window.localStorage.setItem(\"expansion_data\", JSON.stringify(expansionData));\n            }\n            window.localStorage.setItem(\"recorded_version\", currentVersion);\n        };\n        setVersion();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-row items-start justify-between px-20 py-16 font-agency-fb text-white no-text-cursor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3 text-2x1 flex-col mx-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_building_assembly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        currentMenu: currentMenu,\n                        setCurrentMenu: setCurrentMenu,\n                        currentSelect: currentSelect,\n                        setCurrentSelect: setCurrentSelect,\n                        currentPart: currentPart,\n                        setCurrentPart: setCurrentPart,\n                        currentEquipped: currentEquipped,\n                        setCurrentEquipped: setCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dot dot-top-left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dot dot-top-right\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dot dot-bottom-left\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dot dot-bottom-right\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[44.44%] mx-8 items-end justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__.PartsStats, {\n                    currentMenu: currentMenu,\n                    currentSelect: currentSelect,\n                    currentPart: currentPart\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[33.33%] mt-[70vh] bg-[rgb(37,49,74)] bg-opacity-80 mx-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__.FrameStats, {\n                    currentSelect: currentSelect,\n                    currentEquipped: currentEquipped\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-[3vh] border-2 border-white w-[5vw] h-[5vh]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomeButton, {\n                    setCurrentMenu: setCurrentMenu\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PeLB1fTHOOcuf/gLvFCBaf+K3AY=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeButton\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzhDO0FBQ0Y7QUFDRztBQUNhO0FBRTVELFNBQVNNLFdBQVcsS0FBZ0I7UUFBaEIsRUFBQ0MsY0FBYyxFQUFDLEdBQWhCO0lBQ2xCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQWlEQyxTQUFTLElBQU1ILGVBQWU7a0JBQzVGLDRFQUFDSTtzQkFBRTs7Ozs7Ozs7Ozs7QUFJVDtLQVBTTDtBQVNNLFNBQVNNOztJQUV0QixNQUFNLENBQUNDLGFBQWFOLGVBQWUsR0FBR04sK0NBQVFBLENBQUMsWUFBWSwrQ0FBK0M7SUFFMUcsTUFBTSxDQUFDYSxlQUFlQyxpQkFBaUIsR0FBR2QsK0NBQVFBLENBQUMsS0FBSyxrRUFBa0U7SUFFMUgsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLLHNFQUFzRTtJQUUxSCxNQUFNLENBQUNpQixpQkFBaUJDLG1CQUFtQixHQUFHbEIsK0NBQVFBLENBQUMsS0FBSyx1RkFBdUY7SUFHbkpDLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZTtRQUNmLE1BQU1rQixrQkFBa0JDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQ3BELE1BQU1DLGFBQWE7WUFDakIsTUFBTSxDQUFDQyxnQkFBZ0JDLEtBQUssR0FBRyxNQUFNdkIsNERBQVdBLENBQUNpQjtZQUNqRCxJQUFHTSxTQUFTLE1BQU07Z0JBQ2hCLE1BQU0sQ0FBQ0MsVUFBVUMsV0FBV0MsV0FBV0MsY0FBYyxHQUFHSjtnQkFDeERMLE9BQU9DLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ047Z0JBQ3hETixPQUFPQyxZQUFZLENBQUNTLE9BQU8sQ0FBQyxjQUFjQyxLQUFLQyxTQUFTLENBQUNMO2dCQUN6RFAsT0FBT0MsWUFBWSxDQUFDUyxPQUFPLENBQUMsY0FBY0MsS0FBS0MsU0FBUyxDQUFDSjtnQkFDekRSLE9BQU9DLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLGtCQUFrQkMsS0FBS0MsU0FBUyxDQUFDSDtZQUMvRDtZQUNBVCxPQUFPQyxZQUFZLENBQUNTLE9BQU8sQ0FBQyxvQkFBb0JOO1FBQ2xEO1FBQ0FEO0lBRUYsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO1FBQUt6QixXQUFVOzswQkFHZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVCw2REFBUUE7d0JBQUNhLGFBQWFBO3dCQUFhTixnQkFBZ0JBO3dCQUFnQk8sZUFBZUE7d0JBQWVDLGtCQUFrQkE7d0JBQWtCQyxhQUFhQTt3QkFBYUMsZ0JBQWdCQTt3QkFBZ0JDLGlCQUFpQkE7d0JBQWlCQyxvQkFBb0JBOzs7Ozs7a0NBQ3RQLDhEQUFDWDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUlqQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNMLDBEQUFVQTtvQkFBQ1MsYUFBYUE7b0JBQWFDLGVBQWVBO29CQUFlRSxhQUFhQTs7Ozs7Ozs7Ozs7MEJBSW5GLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0osMERBQVVBO29CQUFDUyxlQUFlQTtvQkFBZUksaUJBQWlCQTs7Ozs7Ozs7Ozs7MEJBRzdELDhEQUFDVjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0g7b0JBQVdDLGdCQUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0dBekR3Qks7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBBc3NlbWJseSBmcm9tICcuL2J1aWxkaW5nL2Fzc2VtYmx5LmpzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwcmVsb2FkRGF0YSB9IGZyb20gJy4vYnVpbGRpbmcvZGIuanMnO1xuaW1wb3J0IHsgUGFydHNTdGF0cywgRnJhbWVTdGF0cyB9IGZyb20gJy4vc3RhdFVJL3N0YXRib3guanMnXG5cbmZ1bmN0aW9uIEhvbWVCdXR0b24oe3NldEN1cnJlbnRNZW51fSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRNZW51KFwiZGVmYXVsdFwiKX0+XG4gICAgICA8cD5Ib21lPC9wPlxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtjdXJyZW50TWVudSwgc2V0Q3VycmVudE1lbnVdID0gdXNlU3RhdGUoJ2RlZmF1bHQnKTsgLy9tZW51czogZGVmYXVsdCwgdW5pdCwgZnJhbWUsIGlubmVyLCBleHBhbnNpb25cblxuICBjb25zdCBbY3VycmVudFNlbGVjdCwgc2V0Q3VycmVudFNlbGVjdF0gPSB1c2VTdGF0ZShcIlwiKTsgLy9zZWxlY3RzOiB0aGUgc3ViLWNhdGVnb3JpZXMgb2YgdW5pdCwgZnJhbWUsIGlubmVyLCBhbmQgZXhwYW5zaW9uXG5cbiAgY29uc3QgW2N1cnJlbnRQYXJ0LCBzZXRDdXJyZW50UGFydF0gPSB1c2VTdGF0ZShcIlwiKTsgLy9jdXJyZW50IHBhcnQgb2Ygc3RhdHMgZGlzcGxheWVkOiBhbGwgdGhlIHBhcnRzIG9mIHRoZSBzdWItY2F0ZWdvcmllc1xuXG4gIGNvbnN0IFtjdXJyZW50RXF1aXBwZWQsIHNldEN1cnJlbnRFcXVpcHBlZF0gPSB1c2VTdGF0ZShcIlwiKTsgLy9jdXJyZW50IGVxdWlwcGVkIHBhcnQsIG5vdCBqdXN0IHNlbGVjdGVkIChhcHBsaWVzIHRvIG92ZXJhbGwgc3RhdHMsIG5vdCBqdXN0IHZpZXdpbmcpXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9jaGVjayB2ZXJzaW9uXG4gICAgY29uc3QgcmVjb3JkZWRWZXJzaW9uID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVjb3JkZWRfdmVyc2lvblwiKTtcbiAgICBjb25zdCBzZXRWZXJzaW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgW2N1cnJlbnRWZXJzaW9uLCBkYXRhXSA9IGF3YWl0IHByZWxvYWREYXRhKHJlY29yZGVkVmVyc2lvbik7XG4gICAgICBpZihkYXRhICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IFt1bml0RGF0YSwgZnJhbWVEYXRhLCBpbm5lckRhdGEsIGV4cGFuc2lvbkRhdGFdID0gZGF0YTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidW5pdF9kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHVuaXREYXRhKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZyYW1lX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZnJhbWVEYXRhKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlubmVyX2RhdGFcIiwgSlNPTi5zdHJpbmdpZnkoaW5uZXJEYXRhKSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImV4cGFuc2lvbl9kYXRhXCIsIEpTT04uc3RyaW5naWZ5KGV4cGFuc2lvbkRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlY29yZGVkX3ZlcnNpb25cIiwgY3VycmVudFZlcnNpb24pO1xuICAgIH07XG4gICAgc2V0VmVyc2lvbigpO1xuXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtcm93IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBweC0yMCBweS0xNiBmb250LWFnZW5jeS1mYiB0ZXh0LXdoaXRlIG5vLXRleHQtY3Vyc29yXCI+XG5cbiAgICAgIHsvKmFzc2VtYmx5IGNvbnRhaW5lciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LTJ4MSBmbGV4LWNvbCBteC04XCI+IFxuICAgICAgICA8QXNzZW1ibHkgY3VycmVudE1lbnU9e2N1cnJlbnRNZW51fSBzZXRDdXJyZW50TWVudT17c2V0Q3VycmVudE1lbnV9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IHNldEN1cnJlbnRTZWxlY3Q9e3NldEN1cnJlbnRTZWxlY3R9IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0gc2V0Q3VycmVudFBhcnQ9e3NldEN1cnJlbnRQYXJ0fSBjdXJyZW50RXF1aXBwZWQ9e2N1cnJlbnRFcXVpcHBlZH0gc2V0Q3VycmVudEVxdWlwcGVkPXtzZXRDdXJyZW50RXF1aXBwZWR9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3QgZG90LXRvcC1sZWZ0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90IGRvdC10b3AtcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3QgZG90LWJvdHRvbS1sZWZ0XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90IGRvdC1ib3R0b20tcmlnaHRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LypwYXJ0IHN0YXRzIGNvbnRhaW5lciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzQ0LjQ0JV0gbXgtOCBpdGVtcy1lbmQganVzdGlmeS1lbmQnPlxuICAgICAgICA8UGFydHNTdGF0cyBjdXJyZW50TWVudT17Y3VycmVudE1lbnV9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0vPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKmZyYW1lIHN0YXRzIGNvbnRhaW5lciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzMzLjMzJV0gbXQtWzcwdmhdIGJnLVtyZ2IoMzcsNDksNzQpXSBiZy1vcGFjaXR5LTgwIG14LTgnPlxuICAgICAgICA8RnJhbWVTdGF0cyBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSBjdXJyZW50RXF1aXBwZWQ9e2N1cnJlbnRFcXVpcHBlZH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLVszdmhdIGJvcmRlci0yIGJvcmRlci13aGl0ZSB3LVs1dnddIGgtWzV2aF0nPlxuICAgICAgICA8SG9tZUJ1dHRvbiBzZXRDdXJyZW50TWVudT17c2V0Q3VycmVudE1lbnV9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxuICBcbn0iXSwibmFtZXMiOlsiQXNzZW1ibHkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZWxvYWREYXRhIiwiUGFydHNTdGF0cyIsIkZyYW1lU3RhdHMiLCJIb21lQnV0dG9uIiwic2V0Q3VycmVudE1lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicCIsIkhvbWUiLCJjdXJyZW50TWVudSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiY3VycmVudFBhcnQiLCJzZXRDdXJyZW50UGFydCIsImN1cnJlbnRFcXVpcHBlZCIsInNldEN1cnJlbnRFcXVpcHBlZCIsInJlY29yZGVkVmVyc2lvbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRWZXJzaW9uIiwiY3VycmVudFZlcnNpb24iLCJkYXRhIiwidW5pdERhdGEiLCJmcmFtZURhdGEiLCJpbm5lckRhdGEiLCJleHBhbnNpb25EYXRhIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});