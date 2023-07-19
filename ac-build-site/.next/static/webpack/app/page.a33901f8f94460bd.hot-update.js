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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Assembly; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _partsui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partsui.js */ \"(app-client)/./app/building/partsui.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction PartsOverview(param) {\n    let { category, parts, handleClick, equippedParts } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(equippedParts);\n    }, []);\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 13,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)]\",\n            onClick: ()=>handleClick(category, part),\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"f\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-10 pt-1 text-xs text-[rgb(112,126,148)]\",\n                            children: part\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-10 pb-1 text-sm\",\n                            children: \"hi\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, index, true, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-6\",\n        children: [\n            partHeader,\n            partElements\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(PartsOverview, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = PartsOverview;\nfunction Assembly(param) {\n    let { currentMenu, setCurrentMenu, currentSelect, setCurrentSelect, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped, equippedParts } = param;\n    const partCategories = [\n        {\n            category: \"UNIT\",\n            parts: [\n                \"R-ARM UNIT\",\n                \"L-ARM UNIT\",\n                \"R-BACK UNIT\",\n                \"L-BACK UNIT\"\n            ]\n        },\n        {\n            category: \"FRAME\",\n            parts: [\n                \"HEAD\",\n                \"CORE\",\n                \"ARMS\",\n                \"LEGS\"\n            ]\n        },\n        {\n            category: \"INNER\",\n            parts: [\n                \"BOOSTER\",\n                \"FCS\",\n                \"GENERATOR\"\n            ]\n        },\n        {\n            category: \"EXPANSION\",\n            parts: [\n                \"EXPANSION\"\n            ]\n        }\n    ];\n    function changeSelect(newPart) {\n        setCurrentSelect(newPart);\n    }\n    function changeMenu(currentMenuClicked, newPart) {\n        setCurrentMenu(currentMenuClicked);\n        setCurrentSelect(newPart);\n    }\n    if (currentMenu === \"default\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-4\",\n            children: partCategories.map((part, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsOverview, {\n                        category: part.category,\n                        parts: part.parts,\n                        handleClick: changeMenu,\n                        equippedParts: equippedParts\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 76,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 72,\n            columnNumber: 13\n        }, this);\n    } else {\n        const currentParts = partCategories.find((part)=>part.category === currentMenu).parts; //find object category of currentMenu, and then retrieve parts in that object\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsSelector, {\n                        category: currentMenu,\n                        parts: currentParts,\n                        handleClick: changeSelect,\n                        currentSelect: currentSelect\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsBuilder, {\n                        currentSelect: currentSelect,\n                        currentMenu: currentMenu,\n                        currentPart: currentPart,\n                        setCurrentPart: setCurrentPart,\n                        currentEquipped: currentEquipped,\n                        setCurrentEquipped: setCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n}\n_c1 = Assembly;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsOverview\");\n$RefreshReg$(_c1, \"Assembly\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL2Fzc2VtYmx5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMkQ7QUFDekI7QUFFbEMsU0FBU0csY0FBYyxLQUErQztRQUEvQyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUUsR0FBL0M7O0lBRW5CTCxnREFBU0EsQ0FBQztRQUNOTSxRQUFRQyxHQUFHLENBQUNGO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLE1BQU1HLDJCQUNGLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNQLDRFQUFDQztZQUFHRCxXQUFVO3NCQUFtRFI7Ozs7Ozs7Ozs7O0lBSTdFLE1BQU1VLGVBQWVULE1BQU1VLEdBQUcsQ0FBRSxDQUFDQyxNQUFNQztRQUNuQyxxQkFDSSw4REFBQ047WUFBZ0JDLFdBQVU7WUFBOEZNLFNBQVMsSUFBTVosWUFBWUYsVUFBVVk7O2dCQUFPOzhCQUNqSyw4REFBQ0w7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDTzs0QkFBRVAsV0FBVTtzQ0FBOENJOzs7Ozs7c0NBQzNELDhEQUFDRzs0QkFBRVAsV0FBVTtzQ0FBcUI7Ozs7Ozs7Ozs7Ozs7V0FIaENLOzs7OztJQU9sQjtJQUdBLHFCQUNJLDhEQUFDTjtRQUFJQyxXQUFVOztZQUVWRjtZQUdBSTs7Ozs7OztBQUdiO0dBakNTWDtLQUFBQTtBQW1DTSxTQUFTaUIsU0FBUyxLQUFnSjtRQUFoSixFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsYUFBYSxFQUFFQyxnQkFBZ0IsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQUVyQixhQUFhLEVBQUMsR0FBaEo7SUFFN0IsTUFBTXNCLGlCQUFpQjtRQUNuQjtZQUNFekIsVUFBVTtZQUNWQyxPQUFPO2dCQUFDO2dCQUFjO2dCQUFjO2dCQUFlO2FBQWM7UUFDbkU7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUM7Z0JBQVE7Z0JBQVE7Z0JBQVE7YUFBTztRQUN6QztRQUNBO1lBQ0VELFVBQVU7WUFDVkMsT0FBTztnQkFBQztnQkFBVztnQkFBTzthQUFZO1FBQ3hDO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxPQUFPO2dCQUFDO2FBQVk7UUFDdEI7S0FDSDtJQUVELFNBQVN5QixhQUFhQyxPQUFPO1FBQ3pCUCxpQkFBaUJPO0lBQ3JCO0lBRUEsU0FBU0MsV0FBV0Msa0JBQWtCLEVBQUVGLE9BQU87UUFDM0NULGVBQWVXO1FBQ2ZULGlCQUFpQk87SUFDckI7SUFFQSxJQUFHVixnQkFBZ0IsV0FBVztRQUMxQixxQkFDSSw4REFBQ1Y7WUFBSUMsV0FBVTtzQkFDVmlCLGVBQWVkLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztnQkFDdkIscUJBQ0k7OEJBQ0ksNEVBQUNkO3dCQUEwQkMsVUFBVVksS0FBS1osUUFBUTt3QkFBRUMsT0FBT1csS0FBS1gsS0FBSzt3QkFBRUMsYUFBYTBCO3dCQUFZekIsZUFBZUE7dUJBQTNGVTs7Ozs7O1lBR2hDOzs7Ozs7SUFHWixPQUVLO1FBQ0QsTUFBTWlCLGVBQWVMLGVBQWVNLElBQUksQ0FBQyxDQUFDbkIsT0FBU0EsS0FBS1osUUFBUSxLQUFLaUIsYUFBYWhCLEtBQUssRUFBRSw2RUFBNkU7UUFDdEsscUJBQ0k7c0JBQ0EsNEVBQUNNO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1osc0RBQWFBO3dCQUFDSSxVQUFVaUI7d0JBQWFoQixPQUFPNkI7d0JBQWM1QixhQUFhd0I7d0JBQWNQLGVBQWVBOzs7Ozs7a0NBQ3JHLDhEQUFDdEIscURBQVlBO3dCQUFDc0IsZUFBZUE7d0JBQWVGLGFBQWFBO3dCQUFhSSxhQUFhQTt3QkFBYUMsZ0JBQWdCQTt3QkFBZ0JDLGlCQUFpQkE7d0JBQWlCQyxvQkFBb0JBOzs7Ozs7Ozs7Ozs7O0lBSWxNO0FBRUo7TUF4RHdCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYnVpbGRpbmcvYXNzZW1ibHkuanM/ZjNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgUGFydHNTZWxlY3RvciwgUGFydHNCdWlsZGVyIH0gZnJvbSAnLi9wYXJ0c3VpLmpzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUGFydHNPdmVydmlldyh7IGNhdGVnb3J5LCBwYXJ0cywgaGFuZGxlQ2xpY2ssIGVxdWlwcGVkUGFydHMgfSkgeyAvL2NhdGVnb3J5ID0gdW5pdCwgZnJhbWUsIGlubmVyLCBvciBleHBhbnNpb25cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVxdWlwcGVkUGFydHMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHBhcnRIZWFkZXIgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4MSBwYi0yXCI+IFxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtW3JnYigyMDAsMjAwLDIwMCldIGJnLVtyZ2IoNTUsNjksODYpXSBwbC00XCI+e2NhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHBhcnRFbGVtZW50cyA9IHBhcnRzLm1hcCggKHBhcnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJteS1bMC4xNXJlbV0gYm9yZGVyLTIgYm9yZGVyLVtyZ2IoNTIsNjQsODApXSBiZy1bcmdiKDU0LDcyLDk3KV0gaG92ZXI6YmctW3JnYigxMjAsMTQ4LDE2MildXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soY2F0ZWdvcnksIHBhcnQpfT4gey8qIGNoYW5nZSBob3ZlciB0byBncmFkaWVudCBwbGVhc2UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbC0xMCBwdC0xIHRleHQteHMgdGV4dC1bcmdiKDExMiwxMjYsMTQ4KV1cIj57cGFydH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtMTAgcGItMSB0ZXh0LXNtXCI+aGk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNlwiPlxyXG4gICAgICAgICAgICB7LypjYXRlZ29yeSBoZWFkaW5nKi99XHJcbiAgICAgICAgICAgIHtwYXJ0SGVhZGVyfVxyXG5cclxuICAgICAgICAgICAgey8qcGFydHMgaW4gY2F0ZWdvcnkqL31cclxuICAgICAgICAgICAge3BhcnRFbGVtZW50c31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzc2VtYmx5KHsgY3VycmVudE1lbnUsIHNldEN1cnJlbnRNZW51LCBjdXJyZW50U2VsZWN0LCBzZXRDdXJyZW50U2VsZWN0LCBjdXJyZW50UGFydCwgc2V0Q3VycmVudFBhcnQsIGN1cnJlbnRFcXVpcHBlZCwgc2V0Q3VycmVudEVxdWlwcGVkLCBlcXVpcHBlZFBhcnRzfSkge1xyXG5cclxuICAgIGNvbnN0IHBhcnRDYXRlZ29yaWVzID0gWyAvL2NhbiBwdXQgdGhpcyBpbiBob21lIGNvbXBvbmVudCBhbmQgc2hvb3QgaXQgZG93biB0byBhc3NlbWJseSBhcyB3ZWxsIGFzIHN0YXRib3guIGFsc28gY2FuIHNlcGFyYXRlIGNhdGVnb3J5IGFuZCBwYXJ0cyBpbnRvIHR3byBhcnJheXMgaW5zdGVhZCBvZiB0b2dldGhlciBpbiBvYmplY3RcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJVTklUXCIsIFxyXG4gICAgICAgICAgcGFydHM6IFtcIlItQVJNIFVOSVRcIiwgXCJMLUFSTSBVTklUXCIsIFwiUi1CQUNLIFVOSVRcIiwgXCJMLUJBQ0sgVU5JVFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRlJBTUVcIixcclxuICAgICAgICAgIHBhcnRzOiBbXCJIRUFEXCIsIFwiQ09SRVwiLCBcIkFSTVNcIiwgXCJMRUdTXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJJTk5FUlwiLFxyXG4gICAgICAgICAgcGFydHM6IFtcIkJPT1NURVJcIiwgXCJGQ1NcIiwgXCJHRU5FUkFUT1JcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkVYUEFOU0lPTlwiLFxyXG4gICAgICAgICAgcGFydHM6IFtcIkVYUEFOU0lPTlwiXVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlU2VsZWN0KG5ld1BhcnQpIHtcclxuICAgICAgICBzZXRDdXJyZW50U2VsZWN0KG5ld1BhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1lbnUoY3VycmVudE1lbnVDbGlja2VkLCBuZXdQYXJ0KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudE1lbnUoY3VycmVudE1lbnVDbGlja2VkKTtcclxuICAgICAgICBzZXRDdXJyZW50U2VsZWN0KG5ld1BhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGN1cnJlbnRNZW51ID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICAgIHtwYXJ0Q2F0ZWdvcmllcy5tYXAoKHBhcnQsIGluZGV4KSA9PiB7IC8vbWFwIGFsbCB0aGUgcGFydHNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnRzT3ZlcnZpZXcga2V5PXtpbmRleH0gY2F0ZWdvcnk9e3BhcnQuY2F0ZWdvcnl9IHBhcnRzPXtwYXJ0LnBhcnRzfSBoYW5kbGVDbGljaz17Y2hhbmdlTWVudX0gZXF1aXBwZWRQYXJ0cz17ZXF1aXBwZWRQYXJ0c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApOyAgXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFydHMgPSBwYXJ0Q2F0ZWdvcmllcy5maW5kKChwYXJ0KSA9PiBwYXJ0LmNhdGVnb3J5ID09PSBjdXJyZW50TWVudSkucGFydHM7IC8vZmluZCBvYmplY3QgY2F0ZWdvcnkgb2YgY3VycmVudE1lbnUsIGFuZCB0aGVuIHJldHJpZXZlIHBhcnRzIGluIHRoYXQgb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuKCBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMy80Jz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0c1NlbGVjdG9yIGNhdGVnb3J5PXtjdXJyZW50TWVudX0gcGFydHM9e2N1cnJlbnRQYXJ0c30gaGFuZGxlQ2xpY2s9e2NoYW5nZVNlbGVjdH0gY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0c0J1aWxkZXIgY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gY3VycmVudE1lbnU9e2N1cnJlbnRNZW51fSBjdXJyZW50UGFydD17Y3VycmVudFBhcnR9IHNldEN1cnJlbnRQYXJ0PXtzZXRDdXJyZW50UGFydH0gY3VycmVudEVxdWlwcGVkPXtjdXJyZW50RXF1aXBwZWR9IHNldEN1cnJlbnRFcXVpcHBlZD17c2V0Q3VycmVudEVxdWlwcGVkfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJQYXJ0c1NlbGVjdG9yIiwiUGFydHNCdWlsZGVyIiwidXNlRWZmZWN0IiwiUGFydHNPdmVydmlldyIsImNhdGVnb3J5IiwicGFydHMiLCJoYW5kbGVDbGljayIsImVxdWlwcGVkUGFydHMiLCJjb25zb2xlIiwibG9nIiwicGFydEhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicGFydEVsZW1lbnRzIiwibWFwIiwicGFydCIsImluZGV4Iiwib25DbGljayIsInAiLCJBc3NlbWJseSIsImN1cnJlbnRNZW51Iiwic2V0Q3VycmVudE1lbnUiLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImN1cnJlbnRQYXJ0Iiwic2V0Q3VycmVudFBhcnQiLCJjdXJyZW50RXF1aXBwZWQiLCJzZXRDdXJyZW50RXF1aXBwZWQiLCJwYXJ0Q2F0ZWdvcmllcyIsImNoYW5nZVNlbGVjdCIsIm5ld1BhcnQiLCJjaGFuZ2VNZW51IiwiY3VycmVudE1lbnVDbGlja2VkIiwiY3VycmVudFBhcnRzIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/building/assembly.js\n"));

/***/ })

});