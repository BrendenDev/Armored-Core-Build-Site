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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _building_assembly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./building/assembly.js */ \"(app-client)/./app/building/assembly.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _building_db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building/db.js */ \"(app-client)/./app/building/db.js\");\n/* harmony import */ var _statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statUI/statbox.js */ \"(app-client)/./app/statUI/statbox.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomeButton(param) {\n    let { setCurrentMenu } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full flex justify-center items-center  px-[2vw] py-[1vh]\",\n        onClick: ()=>setCurrentMenu(\"default\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Home\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = HomeButton;\n//to fix the image loading before everything else, just make sure it picks a part before you open the menu\nfunction Home() {\n    _s();\n    const [currentMenu, setCurrentMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"default\"); //menus: default, unit, frame, inner, expansion\n    const [currentSelect, setCurrentSelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); //selects: the sub-categories of unit, frame, inner, and expansion\n    const [currentPart, setCurrentPart] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); //current part of stats displayed: all the parts of the sub-categories\n    const [currentEquipped, setCurrentEquipped] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); //current equipped part, not just selected (applies to overall stats, not just viewing)\n    const [equippedParts, setEquippedParts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null); //ALL current equipped parts\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //check version\n        const recordedVersion = window.localStorage.getItem(\"recorded_version\");\n        const setVersion = async ()=>{\n            const [currentVersion, data] = await (0,_building_db_js__WEBPACK_IMPORTED_MODULE_3__.preloadData)(recordedVersion);\n            if (data !== null) {\n                const [unitData, frameData, innerData, expansionData] = data;\n                window.localStorage.setItem(\"unit_data\", JSON.stringify(unitData));\n                window.localStorage.setItem(\"frame_data\", JSON.stringify(frameData));\n                window.localStorage.setItem(\"inner_data\", JSON.stringify(innerData));\n                window.localStorage.setItem(\"expansion_data\", JSON.stringify(expansionData));\n            }\n            window.localStorage.setItem(\"recorded_version\", currentVersion);\n        };\n        setVersion();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex h-screen flex-row items-start justify-between py-[5vh] font-agency-fb text-white no-text-cursor\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[25%] text-2x1 flex-col mx-[2vw]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_building_assembly_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    currentMenu: currentMenu,\n                    setCurrentMenu: setCurrentMenu,\n                    currentSelect: currentSelect,\n                    setCurrentSelect: setCurrentSelect,\n                    currentPart: currentPart,\n                    setCurrentPart: setCurrentPart,\n                    currentEquipped: currentEquipped,\n                    setCurrentEquipped: setCurrentEquipped,\n                    equippedParts: equippedParts\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[35%] mx-[2vw] items-end justify-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__.PartsStats, {\n                    currentMenu: currentMenu,\n                    currentSelect: currentSelect,\n                    currentPart: currentPart,\n                    currentEquipped: currentEquipped\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3 mx-[2vw] relative h-full flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_statUI_statbox_js__WEBPACK_IMPORTED_MODULE_4__.FrameStats, {\n                    currentSelect: currentSelect,\n                    currentEquipped: currentEquipped,\n                    equippedParts: equippedParts,\n                    setEquippedParts: setEquippedParts\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-[2vh] right-[3vw] border-[0.1rem] border-white hover:cursor-pointer\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HomeButton, {\n                    setCurrentMenu: setCurrentMenu\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\page.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Am0U4vREao711kcl/QFCP0gY7Og=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeButton\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzhDO0FBQ0Y7QUFDRztBQUNjO0FBRTdELFNBQVNNLFdBQVcsS0FBZ0I7UUFBaEIsRUFBQ0MsY0FBYyxFQUFDLEdBQWhCO0lBQ2xCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQW9FQyxTQUFTLElBQU1ILGVBQWU7a0JBQy9HLDRFQUFDSTtzQkFBRTs7Ozs7Ozs7Ozs7QUFJVDtLQVBTTDtBQVNULDBHQUEwRztBQUUzRixTQUFTTTs7SUFFdEIsTUFBTSxDQUFDQyxhQUFhTixlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLFlBQVksK0NBQStDO0lBRTFHLE1BQU0sQ0FBQ2EsZUFBZUMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFDLE9BQU8sa0VBQWtFO0lBRTVILE1BQU0sQ0FBQ2UsYUFBYUMsZUFBZSxHQUFHaEIsK0NBQVFBLENBQUMsT0FBTyxzRUFBc0U7SUFFNUgsTUFBTSxDQUFDaUIsaUJBQWlCQyxtQkFBbUIsR0FBR2xCLCtDQUFRQSxDQUFDLE9BQU8sdUZBQXVGO0lBRXJKLE1BQU0sQ0FBQ21CLGVBQWVDLGlCQUFpQixHQUFHcEIsK0NBQVFBLENBQUMsT0FBTyw0QkFBNEI7SUFHdEZDLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZTtRQUNmLE1BQU1vQixrQkFBa0JDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQ3BELE1BQU1DLGFBQWE7WUFDakIsTUFBTSxDQUFDQyxnQkFBZ0JDLEtBQUssR0FBRyxNQUFNekIsNERBQVdBLENBQUNtQjtZQUNqRCxJQUFHTSxTQUFTLE1BQU07Z0JBQ2hCLE1BQU0sQ0FBQ0MsVUFBVUMsV0FBV0MsV0FBV0MsY0FBYyxHQUFHSjtnQkFDeERMLE9BQU9DLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLGFBQWFDLEtBQUtDLFNBQVMsQ0FBQ047Z0JBQ3hETixPQUFPQyxZQUFZLENBQUNTLE9BQU8sQ0FBQyxjQUFjQyxLQUFLQyxTQUFTLENBQUNMO2dCQUN6RFAsT0FBT0MsWUFBWSxDQUFDUyxPQUFPLENBQUMsY0FBY0MsS0FBS0MsU0FBUyxDQUFDSjtnQkFDekRSLE9BQU9DLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLGtCQUFrQkMsS0FBS0MsU0FBUyxDQUFDSDtZQUMvRDtZQUNBVCxPQUFPQyxZQUFZLENBQUNTLE9BQU8sQ0FBQyxvQkFBb0JOO1FBQ2xEO1FBQ0FEO0lBRUYsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO1FBQUszQixXQUFVOzswQkFHZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNULDZEQUFRQTtvQkFBQ2EsYUFBYUE7b0JBQWFOLGdCQUFnQkE7b0JBQWdCTyxlQUFlQTtvQkFBZUMsa0JBQWtCQTtvQkFBa0JDLGFBQWFBO29CQUFhQyxnQkFBZ0JBO29CQUFnQkMsaUJBQWlCQTtvQkFBaUJDLG9CQUFvQkE7b0JBQW9CQyxlQUFlQTs7Ozs7Ozs7Ozs7MEJBSTNSLDhEQUFDWjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0wsMERBQVVBO29CQUFDUyxhQUFhQTtvQkFBYUMsZUFBZUE7b0JBQWVFLGFBQWFBO29CQUFhRSxpQkFBaUJBOzs7Ozs7Ozs7OzswQkFJakgsOERBQUNWO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDSiwwREFBVUE7b0JBQUNTLGVBQWVBO29CQUFlSSxpQkFBaUJBO29CQUFpQkUsZUFBZUE7b0JBQWVDLGtCQUFrQkE7Ozs7Ozs7Ozs7OzBCQUc5SCw4REFBQ2I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNIO29CQUFXQyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQztHQXZEd0JLO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgQXNzZW1ibHkgZnJvbSAnLi9idWlsZGluZy9hc3NlbWJseS5qcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcHJlbG9hZERhdGEgfSBmcm9tICcuL2J1aWxkaW5nL2RiLmpzJztcbmltcG9ydCB7IFBhcnRzU3RhdHMsIEZyYW1lU3RhdHMgfSBmcm9tICcuL3N0YXRVSS9zdGF0Ym94LmpzJztcblxuZnVuY3Rpb24gSG9tZUJ1dHRvbih7c2V0Q3VycmVudE1lbnV9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBweC1bMnZ3XSBweS1bMXZoXVwiIG9uQ2xpY2s9eygpID0+IHNldEN1cnJlbnRNZW51KFwiZGVmYXVsdFwiKX0+XG4gICAgICA8cD5Ib21lPC9wPlxuICAgIDwvZGl2PlxuICAgIFxuICApO1xufVxuXG4vL3RvIGZpeCB0aGUgaW1hZ2UgbG9hZGluZyBiZWZvcmUgZXZlcnl0aGluZyBlbHNlLCBqdXN0IG1ha2Ugc3VyZSBpdCBwaWNrcyBhIHBhcnQgYmVmb3JlIHlvdSBvcGVuIHRoZSBtZW51XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2N1cnJlbnRNZW51LCBzZXRDdXJyZW50TWVudV0gPSB1c2VTdGF0ZSgnZGVmYXVsdCcpOyAvL21lbnVzOiBkZWZhdWx0LCB1bml0LCBmcmFtZSwgaW5uZXIsIGV4cGFuc2lvblxuXG4gIGNvbnN0IFtjdXJyZW50U2VsZWN0LCBzZXRDdXJyZW50U2VsZWN0XSA9IHVzZVN0YXRlKG51bGwpOyAvL3NlbGVjdHM6IHRoZSBzdWItY2F0ZWdvcmllcyBvZiB1bml0LCBmcmFtZSwgaW5uZXIsIGFuZCBleHBhbnNpb25cblxuICBjb25zdCBbY3VycmVudFBhcnQsIHNldEN1cnJlbnRQYXJ0XSA9IHVzZVN0YXRlKG51bGwpOyAvL2N1cnJlbnQgcGFydCBvZiBzdGF0cyBkaXNwbGF5ZWQ6IGFsbCB0aGUgcGFydHMgb2YgdGhlIHN1Yi1jYXRlZ29yaWVzXG5cbiAgY29uc3QgW2N1cnJlbnRFcXVpcHBlZCwgc2V0Q3VycmVudEVxdWlwcGVkXSA9IHVzZVN0YXRlKG51bGwpOyAvL2N1cnJlbnQgZXF1aXBwZWQgcGFydCwgbm90IGp1c3Qgc2VsZWN0ZWQgKGFwcGxpZXMgdG8gb3ZlcmFsbCBzdGF0cywgbm90IGp1c3Qgdmlld2luZylcblxuICBjb25zdCBbZXF1aXBwZWRQYXJ0cywgc2V0RXF1aXBwZWRQYXJ0c10gPSB1c2VTdGF0ZShudWxsKTsgLy9BTEwgY3VycmVudCBlcXVpcHBlZCBwYXJ0c1xuICBcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vY2hlY2sgdmVyc2lvblxuICAgIGNvbnN0IHJlY29yZGVkVmVyc2lvbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlY29yZGVkX3ZlcnNpb25cIik7XG4gICAgY29uc3Qgc2V0VmVyc2lvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IFtjdXJyZW50VmVyc2lvbiwgZGF0YV0gPSBhd2FpdCBwcmVsb2FkRGF0YShyZWNvcmRlZFZlcnNpb24pO1xuICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbdW5pdERhdGEsIGZyYW1lRGF0YSwgaW5uZXJEYXRhLCBleHBhbnNpb25EYXRhXSA9IGRhdGE7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVuaXRfZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh1bml0RGF0YSkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmcmFtZV9kYXRhXCIsIEpTT04uc3RyaW5naWZ5KGZyYW1lRGF0YSkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbm5lcl9kYXRhXCIsIEpTT04uc3RyaW5naWZ5KGlubmVyRGF0YSkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJleHBhbnNpb25fZGF0YVwiLCBKU09OLnN0cmluZ2lmeShleHBhbnNpb25EYXRhKSk7XG4gICAgICB9XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWNvcmRlZF92ZXJzaW9uXCIsIGN1cnJlbnRWZXJzaW9uKTtcbiAgICB9O1xuICAgIHNldFZlcnNpb24oKTtcblxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGZsZXgtcm93IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBweS1bNXZoXSBmb250LWFnZW5jeS1mYiB0ZXh0LXdoaXRlIG5vLXRleHQtY3Vyc29yXCI+XG5cbiAgICAgIHsvKmFzc2VtYmx5IGNvbnRhaW5lciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsyNSVdIHRleHQtMngxIGZsZXgtY29sIG14LVsydnddXCI+IFxuICAgICAgICA8QXNzZW1ibHkgY3VycmVudE1lbnU9e2N1cnJlbnRNZW51fSBzZXRDdXJyZW50TWVudT17c2V0Q3VycmVudE1lbnV9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IHNldEN1cnJlbnRTZWxlY3Q9e3NldEN1cnJlbnRTZWxlY3R9IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0gc2V0Q3VycmVudFBhcnQ9e3NldEN1cnJlbnRQYXJ0fSBjdXJyZW50RXF1aXBwZWQ9e2N1cnJlbnRFcXVpcHBlZH0gc2V0Q3VycmVudEVxdWlwcGVkPXtzZXRDdXJyZW50RXF1aXBwZWR9IGVxdWlwcGVkUGFydHM9e2VxdWlwcGVkUGFydHN9Lz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LypwYXJ0IHN0YXRzIGNvbnRhaW5lciovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzM1JV0gbXgtWzJ2d10gaXRlbXMtZW5kIGp1c3RpZnktZW5kJz5cbiAgICAgICAgPFBhcnRzU3RhdHMgY3VycmVudE1lbnU9e2N1cnJlbnRNZW51fSBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSBjdXJyZW50UGFydD17Y3VycmVudFBhcnR9IGN1cnJlbnRFcXVpcHBlZD17Y3VycmVudEVxdWlwcGVkfS8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qZnJhbWUgc3RhdHMgY29udGFpbmVyKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0yLzMgbXgtWzJ2d10gcmVsYXRpdmUgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyJz5cbiAgICAgICAgPEZyYW1lU3RhdHMgY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gY3VycmVudEVxdWlwcGVkPXtjdXJyZW50RXF1aXBwZWR9IGVxdWlwcGVkUGFydHM9e2VxdWlwcGVkUGFydHN9IHNldEVxdWlwcGVkUGFydHM9e3NldEVxdWlwcGVkUGFydHN9Lz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLVsydmhdIHJpZ2h0LVszdnddIGJvcmRlci1bMC4xcmVtXSBib3JkZXItd2hpdGUgaG92ZXI6Y3Vyc29yLXBvaW50ZXInPlxuICAgICAgICA8SG9tZUJ1dHRvbiBzZXRDdXJyZW50TWVudT17c2V0Q3VycmVudE1lbnV9Lz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKVxuICBcbn0iXSwibmFtZXMiOlsiQXNzZW1ibHkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZWxvYWREYXRhIiwiUGFydHNTdGF0cyIsIkZyYW1lU3RhdHMiLCJIb21lQnV0dG9uIiwic2V0Q3VycmVudE1lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicCIsIkhvbWUiLCJjdXJyZW50TWVudSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiY3VycmVudFBhcnQiLCJzZXRDdXJyZW50UGFydCIsImN1cnJlbnRFcXVpcHBlZCIsInNldEN1cnJlbnRFcXVpcHBlZCIsImVxdWlwcGVkUGFydHMiLCJzZXRFcXVpcHBlZFBhcnRzIiwicmVjb3JkZWRWZXJzaW9uIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldFZlcnNpb24iLCJjdXJyZW50VmVyc2lvbiIsImRhdGEiLCJ1bml0RGF0YSIsImZyYW1lRGF0YSIsImlubmVyRGF0YSIsImV4cGFuc2lvbkRhdGEiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});