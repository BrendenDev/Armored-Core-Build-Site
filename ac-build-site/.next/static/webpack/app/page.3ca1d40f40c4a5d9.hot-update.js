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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _building_assembly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building/assembly.js */ \"(app-client)/./app/building/assembly.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _building_db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building/db.js */ \"(app-client)/./app/building/db.js\");\n/* harmony import */ var _statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statUI/statbox.js */ \"(app-client)/./app/statUI/statbox.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomeButton(param) {\n    let { setCurrentMenu } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex justify-center items-center\",\n        onClick: ()=>setCurrentMenu(\"default\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Home\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = HomeButton;\nfunction Home() {\n    _s();\n    const [currentMenu, setCurrentMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\"); //menus: default, unit, frame, inner, expansion\n    const [currentSelect, setCurrentSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //selects: the sub-categories of unit, frame, inner, and expansion\n    const [currentPart, setCurrentPart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //current part of stats displayed: all the parts of the sub-categories\n    const [currentEquipped, setCurrentEquipped] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); //current equipped part, not just selected (applies to overall stats, not just viewing)\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //check version\n        const recordedVersion = window.localStorage.getItem(\"recorded_version\");\n        const setVersion = async ()=>{\n            const [currentVersion, data] = await (0,_building_db_js__WEBPACK_IMPORTED_MODULE_3__.preloadData)(recordedVersion);\n            if (data !== null) {\n                const [unitData, frameData, innerData, expansionData] = data;\n                window.localStorage.setItem(\"unit_data\", JSON.stringify(unitData));\n                window.localStorage.setItem(\"frame_data\", JSON.stringify(frameData));\n                window.localStorage.setItem(\"inner_data\", JSON.stringify(innerData));\n                window.localStorage.setItem(\"expansion_data\", JSON.stringify(expansionData));\n            }\n            window.localStorage.setItem(\"recorded_version\", currentVersion);\n        };\n        setVersion();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-row items-start justify-between px-20 py-16 font-agency-fb text-white no-text-cursor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/3 text-2x1 flex-col mx-8 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_building_assembly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        currentMenu: currentMenu,\n                        setCurrentMenu: setCurrentMenu,\n                        currentSelect: currentSelect,\n                        setCurrentSelect: setCurrentSelect,\n                        currentPart: currentPart,\n                        setCurrentPart: setCurrentPart,\n                        currentEquipped: currentEquipped,\n                        setCurrentEquipped: setCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"absolute top-0 left-0 w-2 h-2 bg-black rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"absolute top-0 right-0 w-2 h-2 bg-black rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"absolute bottom-0 left-0 w-2 h-2 bg-black rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"absolute bottom-0 right-0 w-2 h-2 bg-black rounded-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[44.44%] mx-8 items-end justify-end relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__.PartsStats, {\n                    currentMenu: currentMenu,\n                    currentSelect: currentSelect,\n                    currentPart: currentPart\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[33.33%] mt-[70vh] bg-[rgb(37,49,74)] bg-opacity-80 mx-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__.FrameStats, {\n                    currentSelect: currentSelect,\n                    currentEquipped: currentEquipped\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-[3vh] border-2 border-white w-[5vw] h-[5vh]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomeButton, {\n                    setCurrentMenu: setCurrentMenu\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PeLB1fTHOOcuf/gLvFCBaf+K3AY=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeButton\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzhDO0FBQ0Y7QUFDRztBQUNhO0FBRTVELFNBQVNNLFdBQVcsS0FBZ0I7UUFBaEIsRUFBQ0MsY0FBYyxFQUFDLEdBQWhCO0lBQ2xCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQWlEQyxTQUFTLElBQU1ILGVBQWU7a0JBQzVGLDRFQUFDSTtzQkFBRTs7Ozs7Ozs7Ozs7QUFJVDtLQVBTTDtBQVNNLFNBQVNNOztJQUV0QixNQUFNLENBQUNDLGFBQWFOLGVBQWUsR0FBR04sK0NBQVFBLENBQUMsWUFBWSwrQ0FBK0M7SUFFMUcsTUFBTSxDQUFDYSxlQUFlQyxpQkFBaUIsR0FBR2QsK0NBQVFBLENBQUMsS0FBSyxrRUFBa0U7SUFFMUgsTUFBTSxDQUFDZSxhQUFhQyxlQUFlLEdBQUdoQiwrQ0FBUUEsQ0FBQyxLQUFLLHNFQUFzRTtJQUUxSCxNQUFNLENBQUNpQixpQkFBaUJDLG1CQUFtQixHQUFHbEIsK0NBQVFBLENBQUMsS0FBSyx1RkFBdUY7SUFHbkpDLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZTtRQUNmLE1BQU1rQixrQkFBa0JDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQ3BELE1BQU1DLGFBQWE7WUFDakIsTUFBTSxDQUFDQyxnQkFBZ0JDLEtBQUssR0FBRyxNQUFNdkIsNERBQVdBLENBQUNpQjtZQUNqRCxJQUFHTSxTQUFTLE1BQU07Z0JBQ2hCLE1BQU0sQ0FBQ0MsVUFBVUMsV0FBV0MsV0FBV0MsY0FBYyxHQUFHSjtnQkFDeERMLE9BQU9DLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ047Z0JBQ3hETixPQUFPQyxZQUFZLENBQUNTLE9BQU8sQ0FBQyxjQUFjQyxLQUFLQyxTQUFTLENBQUNMO2dCQUN6RFAsT0FBT0MsWUFBWSxDQUFDUyxPQUFPLENBQUMsY0FBY0MsS0FBS0MsU0FBUyxDQUFDSjtnQkFDekRSLE9BQU9DLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLGtCQUFrQkMsS0FBS0MsU0FBUyxDQUFDSDtZQUMvRDtZQUNBVCxPQUFPQyxZQUFZLENBQUNTLE9BQU8sQ0FBQyxvQkFBb0JOO1FBQ2xEO1FBQ0FEO0lBRUYsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO1FBQUt6QixXQUFVOzswQkFHZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVCw2REFBUUE7d0JBQUNhLGFBQWFBO3dCQUFhTixnQkFBZ0JBO3dCQUFnQk8sZUFBZUE7d0JBQWVDLGtCQUFrQkE7d0JBQWtCQyxhQUFhQTt3QkFBYUMsZ0JBQWdCQTt3QkFBZ0JDLGlCQUFpQkE7d0JBQWlCQyxvQkFBb0JBOzs7Ozs7a0NBQ3BQLDhEQUFDWDt3QkFBSTJCLE9BQU07Ozs7OztrQ0FDWCw4REFBQzNCO3dCQUFJMkIsT0FBTTs7Ozs7O2tDQUNYLDhEQUFDM0I7d0JBQUkyQixPQUFNOzs7Ozs7a0NBQ1gsOERBQUMzQjt3QkFBSTJCLE9BQU07Ozs7Ozs7Ozs7OzswQkFJZiw4REFBQzNCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDTCwwREFBVUE7b0JBQUNTLGFBQWFBO29CQUFhQyxlQUFlQTtvQkFBZUUsYUFBYUE7Ozs7Ozs7Ozs7OzBCQUluRiw4REFBQ1I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNKLDBEQUFVQTtvQkFBQ1MsZUFBZUE7b0JBQWVJLGlCQUFpQkE7Ozs7Ozs7Ozs7OzBCQUc3RCw4REFBQ1Y7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNIO29CQUFXQyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQztHQXpEd0JLO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgQXNzZW1ibHkgZnJvbSAnLi9idWlsZGluZy9hc3NlbWJseS5qcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcHJlbG9hZERhdGEgfSBmcm9tICcuL2J1aWxkaW5nL2RiLmpzJztcbmltcG9ydCB7IFBhcnRzU3RhdHMsIEZyYW1lU3RhdHMgfSBmcm9tICcuL3N0YXRVSS9zdGF0Ym94LmpzJ1xuXG5mdW5jdGlvbiBIb21lQnV0dG9uKHtzZXRDdXJyZW50TWVudX0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50TWVudShcImRlZmF1bHRcIil9PlxuICAgICAgPHA+SG9tZTwvcD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbY3VycmVudE1lbnUsIHNldEN1cnJlbnRNZW51XSA9IHVzZVN0YXRlKCdkZWZhdWx0Jyk7IC8vbWVudXM6IGRlZmF1bHQsIHVuaXQsIGZyYW1lLCBpbm5lciwgZXhwYW5zaW9uXG5cbiAgY29uc3QgW2N1cnJlbnRTZWxlY3QsIHNldEN1cnJlbnRTZWxlY3RdID0gdXNlU3RhdGUoXCJcIik7IC8vc2VsZWN0czogdGhlIHN1Yi1jYXRlZ29yaWVzIG9mIHVuaXQsIGZyYW1lLCBpbm5lciwgYW5kIGV4cGFuc2lvblxuXG4gIGNvbnN0IFtjdXJyZW50UGFydCwgc2V0Q3VycmVudFBhcnRdID0gdXNlU3RhdGUoXCJcIik7IC8vY3VycmVudCBwYXJ0IG9mIHN0YXRzIGRpc3BsYXllZDogYWxsIHRoZSBwYXJ0cyBvZiB0aGUgc3ViLWNhdGVnb3JpZXNcblxuICBjb25zdCBbY3VycmVudEVxdWlwcGVkLCBzZXRDdXJyZW50RXF1aXBwZWRdID0gdXNlU3RhdGUoXCJcIik7IC8vY3VycmVudCBlcXVpcHBlZCBwYXJ0LCBub3QganVzdCBzZWxlY3RlZCAoYXBwbGllcyB0byBvdmVyYWxsIHN0YXRzLCBub3QganVzdCB2aWV3aW5nKVxuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vY2hlY2sgdmVyc2lvblxuICAgIGNvbnN0IHJlY29yZGVkVmVyc2lvbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlY29yZGVkX3ZlcnNpb25cIik7XG4gICAgY29uc3Qgc2V0VmVyc2lvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IFtjdXJyZW50VmVyc2lvbiwgZGF0YV0gPSBhd2FpdCBwcmVsb2FkRGF0YShyZWNvcmRlZFZlcnNpb24pO1xuICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbdW5pdERhdGEsIGZyYW1lRGF0YSwgaW5uZXJEYXRhLCBleHBhbnNpb25EYXRhXSA9IGRhdGE7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVuaXRfZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh1bml0RGF0YSkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmcmFtZV9kYXRhXCIsIEpTT04uc3RyaW5naWZ5KGZyYW1lRGF0YSkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbm5lcl9kYXRhXCIsIEpTT04uc3RyaW5naWZ5KGlubmVyRGF0YSkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBhbnNpb25fZGF0YVwiLCBKU09OLnN0cmluZ2lmeShleHBhbnNpb25EYXRhKSk7XG4gICAgICB9XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWNvcmRlZF92ZXJzaW9uXCIsIGN1cnJlbnRWZXJzaW9uKTtcbiAgICB9O1xuICAgIHNldFZlcnNpb24oKTtcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LXJvdyBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcHgtMjAgcHktMTYgZm9udC1hZ2VuY3ktZmIgdGV4dC13aGl0ZSBuby10ZXh0LWN1cnNvclwiPlxuXG4gICAgICB7Lyphc3NlbWJseSBjb250YWluZXIqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC0yeDEgZmxleC1jb2wgbXgtOCByZWxhdGl2ZVwiPiBcbiAgICAgICAgPEFzc2VtYmx5IGN1cnJlbnRNZW51PXtjdXJyZW50TWVudX0gc2V0Q3VycmVudE1lbnU9e3NldEN1cnJlbnRNZW51fSBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSBzZXRDdXJyZW50U2VsZWN0PXtzZXRDdXJyZW50U2VsZWN0fSBjdXJyZW50UGFydD17Y3VycmVudFBhcnR9IHNldEN1cnJlbnRQYXJ0PXtzZXRDdXJyZW50UGFydH0gY3VycmVudEVxdWlwcGVkPXtjdXJyZW50RXF1aXBwZWR9IHNldEN1cnJlbnRFcXVpcHBlZD17c2V0Q3VycmVudEVxdWlwcGVkfS8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LTIgaC0yIGJnLWJsYWNrIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctMiBoLTIgYmctYmxhY2sgcm91bmRlZC1mdWxsXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCB3LTIgaC0yIGJnLWJsYWNrIHJvdW5kZWQtZnVsbFwiPjwvZGl2PiBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB3LTIgaC0yIGJnLWJsYWNrIHJvdW5kZWQtZnVsbFwiPjwvZGl2PiBcbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LypwYXJ0IHN0YXRzIGNvbnRhaW5lciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzQ0LjQ0JV0gbXgtOCBpdGVtcy1lbmQganVzdGlmeS1lbmQgcmVsYXRpdmUnPlxuICAgICAgICA8UGFydHNTdGF0cyBjdXJyZW50TWVudT17Y3VycmVudE1lbnV9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0vPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKmZyYW1lIHN0YXRzIGNvbnRhaW5lciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzMzLjMzJV0gbXQtWzcwdmhdIGJnLVtyZ2IoMzcsNDksNzQpXSBiZy1vcGFjaXR5LTgwIG14LTgnPlxuICAgICAgICA8RnJhbWVTdGF0cyBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSBjdXJyZW50RXF1aXBwZWQ9e2N1cnJlbnRFcXVpcHBlZH0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLVszdmhdIGJvcmRlci0yIGJvcmRlci13aGl0ZSB3LVs1dnddIGgtWzV2aF0nPlxuICAgICAgICA8SG9tZUJ1dHRvbiBzZXRDdXJyZW50TWVudT17c2V0Q3VycmVudE1lbnV9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxuICBcbn0iXSwibmFtZXMiOlsiQXNzZW1ibHkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZWxvYWREYXRhIiwiUGFydHNTdGF0cyIsIkZyYW1lU3RhdHMiLCJIb21lQnV0dG9uIiwic2V0Q3VycmVudE1lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicCIsIkhvbWUiLCJjdXJyZW50TWVudSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiY3VycmVudFBhcnQiLCJzZXRDdXJyZW50UGFydCIsImN1cnJlbnRFcXVpcHBlZCIsInNldEN1cnJlbnRFcXVpcHBlZCIsInJlY29yZGVkVmVyc2lvbiIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRWZXJzaW9uIiwiY3VycmVudFZlcnNpb24iLCJkYXRhIiwidW5pdERhdGEiLCJmcmFtZURhdGEiLCJpbm5lckRhdGEiLCJleHBhbnNpb25EYXRhIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWluIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});