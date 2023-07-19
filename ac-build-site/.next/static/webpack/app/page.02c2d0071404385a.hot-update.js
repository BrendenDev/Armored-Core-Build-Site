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

/***/ "(app-client)/./app/building/assembly.js":
/*!**********************************!*\
  !*** ./app/building/assembly.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Assembly; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _partsui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partsui.js */ \"(app-client)/./app/building/partsui.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction PartsOverview(param) {\n    let { category, parts, handleClick, equippedParts } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 9,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)]\",\n            onClick: ()=>handleClick(category, part),\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"f\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-10 pt-1 text-xs text-[rgb(112,126,148)]\",\n                            children: part\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this),\n                        equippedParts && equippedParts[part] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-10 pb-1 text-sm\",\n                            children: equippedParts[part][\"name\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 19,\n                            columnNumber: 22\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-10 pb-1 text-sm\",\n                            children: \"Not Selected\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 20,\n                            columnNumber: 22\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, index, true, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-6\",\n        children: [\n            partHeader,\n            partElements\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsOverview;\nfunction Assembly(param) {\n    let { currentMenu, setCurrentMenu, currentSelect, setCurrentSelect, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped, equippedParts } = param;\n    const partCategories = [\n        {\n            category: \"UNIT\",\n            parts: [\n                \"R-ARM UNIT\",\n                \"L-ARM UNIT\",\n                \"R-BACK UNIT\",\n                \"L-BACK UNIT\"\n            ]\n        },\n        {\n            category: \"FRAME\",\n            parts: [\n                \"HEAD\",\n                \"CORE\",\n                \"ARMS\",\n                \"LEGS\"\n            ]\n        },\n        {\n            category: \"INNER\",\n            parts: [\n                \"BOOSTER\",\n                \"FCS\",\n                \"GENERATOR\"\n            ]\n        },\n        {\n            category: \"EXPANSION\",\n            parts: [\n                \"EXPANSION\"\n            ]\n        }\n    ];\n    function changeSelect(newPart) {\n        setCurrentSelect(newPart);\n    }\n    function changeMenu(currentMenuClicked, newPart) {\n        setCurrentMenu(currentMenuClicked);\n        setCurrentSelect(newPart);\n    }\n    if (currentMenu === \"default\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-4\",\n            children: partCategories.map((part, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsOverview, {\n                        category: part.category,\n                        parts: part.parts,\n                        handleClick: changeMenu,\n                        equippedParts: equippedParts\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 74,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 70,\n            columnNumber: 13\n        }, this);\n    } else {\n        const currentParts = partCategories.find((part)=>part.category === currentMenu).parts; //find object category of currentMenu, and then retrieve parts in that object\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsSelector, {\n                        category: currentMenu,\n                        parts: currentParts,\n                        handleClick: changeSelect,\n                        currentSelect: currentSelect\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsBuilder, {\n                        currentSelect: currentSelect,\n                        currentMenu: currentMenu,\n                        currentPart: currentPart,\n                        setCurrentPart: setCurrentPart,\n                        currentEquipped: currentEquipped,\n                        setCurrentEquipped: setCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n}\n_c1 = Assembly;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsOverview\");\n$RefreshReg$(_c1, \"Assembly\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL2Fzc2VtYmx5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMyRDtBQUNmO0FBRTVDLFNBQVNJLGNBQWMsS0FBK0M7UUFBL0MsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFLEdBQS9DO0lBRW5CLE1BQU1DLDJCQUNGLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNQLDRFQUFDQztZQUFHRCxXQUFVO3NCQUFtRE47Ozs7Ozs7Ozs7O0lBSTdFLE1BQU1RLGVBQWVQLE1BQU1RLEdBQUcsQ0FBRSxDQUFDQyxNQUFNQztRQUNuQyxxQkFDSSw4REFBQ047WUFBZ0JDLFdBQVU7WUFBOEZNLFNBQVMsSUFBTVYsWUFBWUYsVUFBVVU7O2dCQUFPOzhCQUNqSyw4REFBQ0w7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDTzs0QkFBRVAsV0FBVTtzQ0FBOENJOzs7Ozs7d0JBQzFEUCxpQkFBaUJBLGFBQWEsQ0FBQ08sS0FBSyxpQkFDcEMsOERBQUNHOzRCQUFFUCxXQUFVO3NDQUFzQkgsYUFBYSxDQUFDTyxLQUFLLENBQUMsT0FBTzs7Ozs7aURBQzlELDhEQUFDRzs0QkFBRVAsV0FBVTtzQ0FBcUI7Ozs7Ozs7Ozs7Ozs7V0FMakNLOzs7OztJQVNsQjtJQUdBLHFCQUNJLDhEQUFDTjtRQUFJQyxXQUFVOztZQUVWRjtZQUdBSTs7Ozs7OztBQUdiO0tBL0JTVDtBQWlDTSxTQUFTZSxTQUFTLEtBQWdKO1FBQWhKLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsZUFBZSxFQUFFQyxrQkFBa0IsRUFBRW5CLGFBQWEsRUFBQyxHQUFoSjtJQUU3QixNQUFNb0IsaUJBQWlCO1FBQ25CO1lBQ0V2QixVQUFVO1lBQ1ZDLE9BQU87Z0JBQUM7Z0JBQWM7Z0JBQWM7Z0JBQWU7YUFBYztRQUNuRTtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsT0FBTztnQkFBQztnQkFBUTtnQkFBUTtnQkFBUTthQUFPO1FBQ3pDO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxPQUFPO2dCQUFDO2dCQUFXO2dCQUFPO2FBQVk7UUFDeEM7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUM7YUFBWTtRQUN0QjtLQUNIO0lBRUQsU0FBU3VCLGFBQWFDLE9BQU87UUFDekJQLGlCQUFpQk87SUFDckI7SUFFQSxTQUFTQyxXQUFXQyxrQkFBa0IsRUFBRUYsT0FBTztRQUMzQ1QsZUFBZVc7UUFDZlQsaUJBQWlCTztJQUNyQjtJQUVBLElBQUdWLGdCQUFnQixXQUFXO1FBQzFCLHFCQUNJLDhEQUFDVjtZQUFJQyxXQUFVO3NCQUNWaUIsZUFBZWQsR0FBRyxDQUFDLENBQUNDLE1BQU1DO2dCQUN2QixxQkFDSTs4QkFDSSw0RUFBQ1o7d0JBQTBCQyxVQUFVVSxLQUFLVixRQUFRO3dCQUFFQyxPQUFPUyxLQUFLVCxLQUFLO3dCQUFFQyxhQUFhd0I7d0JBQVl2QixlQUFlQTt1QkFBM0ZROzs7Ozs7WUFHaEM7Ozs7OztJQUdaLE9BRUs7UUFDRCxNQUFNaUIsZUFBZUwsZUFBZU0sSUFBSSxDQUFDLENBQUNuQixPQUFTQSxLQUFLVixRQUFRLEtBQUtlLGFBQWFkLEtBQUssRUFBRSw2RUFBNkU7UUFDdEsscUJBQ0k7c0JBQ0EsNEVBQUNJO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1gsc0RBQWFBO3dCQUFDSyxVQUFVZTt3QkFBYWQsT0FBTzJCO3dCQUFjMUIsYUFBYXNCO3dCQUFjUCxlQUFlQTs7Ozs7O2tDQUNyRyw4REFBQ3JCLHFEQUFZQTt3QkFBQ3FCLGVBQWVBO3dCQUFlRixhQUFhQTt3QkFBYUksYUFBYUE7d0JBQWFDLGdCQUFnQkE7d0JBQWdCQyxpQkFBaUJBO3dCQUFpQkMsb0JBQW9CQTs7Ozs7Ozs7Ozs7OztJQUlsTTtBQUVKO01BeER3QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2J1aWxkaW5nL2Fzc2VtYmx5LmpzP2YzZGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IFBhcnRzU2VsZWN0b3IsIFBhcnRzQnVpbGRlciB9IGZyb20gJy4vcGFydHN1aS5qcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBQYXJ0c092ZXJ2aWV3KHsgY2F0ZWdvcnksIHBhcnRzLCBoYW5kbGVDbGljaywgZXF1aXBwZWRQYXJ0cyB9KSB7IC8vY2F0ZWdvcnkgPSB1bml0LCBmcmFtZSwgaW5uZXIsIG9yIGV4cGFuc2lvblxyXG5cclxuICAgIGNvbnN0IHBhcnRIZWFkZXIgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4MSBwYi0yXCI+IFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtW3JnYigyMDAsMjAwLDIwMCldIGJnLVtyZ2IoNTUsNjksODYpXSBwbC00XCI+e2NhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHBhcnRFbGVtZW50cyA9IHBhcnRzLm1hcCggKHBhcnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJteS1bMC4xNXJlbV0gYm9yZGVyLTIgYm9yZGVyLVtyZ2IoNTIsNjQsODApXSBiZy1bcmdiKDU0LDcyLDk3KV0gaG92ZXI6YmctW3JnYigxMjAsMTQ4LDE2MildXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soY2F0ZWdvcnksIHBhcnQpfT4gey8qIGNoYW5nZSBob3ZlciB0byBncmFkaWVudCBwbGVhc2UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbC0xMCBwdC0xIHRleHQteHMgdGV4dC1bcmdiKDExMiwxMjYsMTQ4KV1cIj57cGFydH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAge2VxdWlwcGVkUGFydHMgJiYgZXF1aXBwZWRQYXJ0c1twYXJ0XSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICg8cCBjbGFzc05hbWU9XCJwbC0xMCBwYi0xIHRleHQtc21cIj57ZXF1aXBwZWRQYXJ0c1twYXJ0XVsnbmFtZSddfTwvcD4pIDogXHJcbiAgICAgICAgICAgICAgICAgICAgKDxwIGNsYXNzTmFtZT1cInBsLTEwIHBiLTEgdGV4dC1zbVwiPk5vdCBTZWxlY3RlZDwvcD4pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTZcIj5cclxuICAgICAgICAgICAgey8qY2F0ZWdvcnkgaGVhZGluZyovfVxyXG4gICAgICAgICAgICB7cGFydEhlYWRlcn1cclxuXHJcbiAgICAgICAgICAgIHsvKnBhcnRzIGluIGNhdGVnb3J5Ki99XHJcbiAgICAgICAgICAgIHtwYXJ0RWxlbWVudHN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3NlbWJseSh7IGN1cnJlbnRNZW51LCBzZXRDdXJyZW50TWVudSwgY3VycmVudFNlbGVjdCwgc2V0Q3VycmVudFNlbGVjdCwgY3VycmVudFBhcnQsIHNldEN1cnJlbnRQYXJ0LCBjdXJyZW50RXF1aXBwZWQsIHNldEN1cnJlbnRFcXVpcHBlZCwgZXF1aXBwZWRQYXJ0c30pIHtcclxuXHJcbiAgICBjb25zdCBwYXJ0Q2F0ZWdvcmllcyA9IFsgLy9jYW4gcHV0IHRoaXMgaW4gaG9tZSBjb21wb25lbnQgYW5kIHNob290IGl0IGRvd24gdG8gYXNzZW1ibHkgYXMgd2VsbCBhcyBzdGF0Ym94LiBhbHNvIGNhbiBzZXBhcmF0ZSBjYXRlZ29yeSBhbmQgcGFydHMgaW50byB0d28gYXJyYXlzIGluc3RlYWQgb2YgdG9nZXRoZXIgaW4gb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiVU5JVFwiLCBcclxuICAgICAgICAgIHBhcnRzOiBbXCJSLUFSTSBVTklUXCIsIFwiTC1BUk0gVU5JVFwiLCBcIlItQkFDSyBVTklUXCIsIFwiTC1CQUNLIFVOSVRcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkZSQU1FXCIsXHJcbiAgICAgICAgICBwYXJ0czogW1wiSEVBRFwiLCBcIkNPUkVcIiwgXCJBUk1TXCIsIFwiTEVHU1wiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiSU5ORVJcIixcclxuICAgICAgICAgIHBhcnRzOiBbXCJCT09TVEVSXCIsIFwiRkNTXCIsIFwiR0VORVJBVE9SXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJFWFBBTlNJT05cIixcclxuICAgICAgICAgIHBhcnRzOiBbXCJFWFBBTlNJT05cIl1cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVNlbGVjdChuZXdQYXJ0KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFNlbGVjdChuZXdQYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZW51KGN1cnJlbnRNZW51Q2xpY2tlZCwgbmV3UGFydCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRNZW51KGN1cnJlbnRNZW51Q2xpY2tlZCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNlbGVjdChuZXdQYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihjdXJyZW50TWVudSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgICB7cGFydENhdGVnb3JpZXMubWFwKChwYXJ0LCBpbmRleCkgPT4geyAvL21hcCBhbGwgdGhlIHBhcnRzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJ0c092ZXJ2aWV3IGtleT17aW5kZXh9IGNhdGVnb3J5PXtwYXJ0LmNhdGVnb3J5fSBwYXJ0cz17cGFydC5wYXJ0c30gaGFuZGxlQ2xpY2s9e2NoYW5nZU1lbnV9IGVxdWlwcGVkUGFydHM9e2VxdWlwcGVkUGFydHN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTsgIFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhcnRzID0gcGFydENhdGVnb3JpZXMuZmluZCgocGFydCkgPT4gcGFydC5jYXRlZ29yeSA9PT0gY3VycmVudE1lbnUpLnBhcnRzOyAvL2ZpbmQgb2JqZWN0IGNhdGVnb3J5IG9mIGN1cnJlbnRNZW51LCBhbmQgdGhlbiByZXRyaWV2ZSBwYXJ0cyBpbiB0aGF0IG9iamVjdFxyXG4gICAgICAgIHJldHVybiggXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTMvNCc+XHJcbiAgICAgICAgICAgICAgICA8UGFydHNTZWxlY3RvciBjYXRlZ29yeT17Y3VycmVudE1lbnV9IHBhcnRzPXtjdXJyZW50UGFydHN9IGhhbmRsZUNsaWNrPXtjaGFuZ2VTZWxlY3R9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8UGFydHNCdWlsZGVyIGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9IGN1cnJlbnRNZW51PXtjdXJyZW50TWVudX0gY3VycmVudFBhcnQ9e2N1cnJlbnRQYXJ0fSBzZXRDdXJyZW50UGFydD17c2V0Q3VycmVudFBhcnR9IGN1cnJlbnRFcXVpcHBlZD17Y3VycmVudEVxdWlwcGVkfSBzZXRDdXJyZW50RXF1aXBwZWQ9e3NldEN1cnJlbnRFcXVpcHBlZH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsiUGFydHNTZWxlY3RvciIsIlBhcnRzQnVpbGRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGFydHNPdmVydmlldyIsImNhdGVnb3J5IiwicGFydHMiLCJoYW5kbGVDbGljayIsImVxdWlwcGVkUGFydHMiLCJwYXJ0SGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYXJ0RWxlbWVudHMiLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJvbkNsaWNrIiwicCIsIkFzc2VtYmx5IiwiY3VycmVudE1lbnUiLCJzZXRDdXJyZW50TWVudSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiY3VycmVudFBhcnQiLCJzZXRDdXJyZW50UGFydCIsImN1cnJlbnRFcXVpcHBlZCIsInNldEN1cnJlbnRFcXVpcHBlZCIsInBhcnRDYXRlZ29yaWVzIiwiY2hhbmdlU2VsZWN0IiwibmV3UGFydCIsImNoYW5nZU1lbnUiLCJjdXJyZW50TWVudUNsaWNrZWQiLCJjdXJyZW50UGFydHMiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/building/assembly.js\n"));

/***/ })

});