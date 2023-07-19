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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Assembly; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _partsui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partsui.js */ \"(app-client)/./app/building/partsui.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction PartsOverview(param) {\n    let { category, parts, handleClick, equippedParts } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 8,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)]\",\n            onClick: ()=>handleClick(category, part),\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"f\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-10 pt-1 text-xs text-[rgb(112,126,148)]\",\n                            children: part\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-10 pb-1 text-sm\",\n                            children: \"hi\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, index, true, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-6\",\n        children: [\n            partHeader,\n            partElements\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsOverview;\nfunction Assembly(param) {\n    let { currentMenu, setCurrentMenu, currentSelect, setCurrentSelect, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped, equippedParts } = param;\n    const partCategories = [\n        {\n            category: \"UNIT\",\n            parts: [\n                \"R-ARM UNIT\",\n                \"L-ARM UNIT\",\n                \"R-BACK UNIT\",\n                \"L-BACK UNIT\"\n            ]\n        },\n        {\n            category: \"FRAME\",\n            parts: [\n                \"HEAD\",\n                \"CORE\",\n                \"ARMS\",\n                \"LEGS\"\n            ]\n        },\n        {\n            category: \"INNER\",\n            parts: [\n                \"BOOSTER\",\n                \"FCS\",\n                \"GENERATOR\"\n            ]\n        },\n        {\n            category: \"EXPANSION\",\n            parts: [\n                \"EXPANSION\"\n            ]\n        }\n    ];\n    function changeSelect(newPart) {\n        setCurrentSelect(newPart);\n    }\n    function changeMenu(currentMenuClicked, newPart) {\n        setCurrentMenu(currentMenuClicked);\n        setCurrentSelect(newPart);\n    }\n    if (currentMenu === \"default\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-4\",\n            children: partCategories.map((part, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsOverview, {\n                        category: part.category,\n                        parts: part.parts,\n                        handleClick: changeMenu,\n                        equippedParts: equippedParts\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 71,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 67,\n            columnNumber: 13\n        }, this);\n    } else {\n        const currentParts = partCategories.find((part)=>part.category === currentMenu).parts; //find object category of currentMenu, and then retrieve parts in that object\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsSelector, {\n                        category: currentMenu,\n                        parts: currentParts,\n                        handleClick: changeSelect,\n                        currentSelect: currentSelect\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsBuilder, {\n                        currentSelect: currentSelect,\n                        currentMenu: currentMenu,\n                        currentPart: currentPart,\n                        setCurrentPart: setCurrentPart,\n                        currentEquipped: currentEquipped,\n                        setCurrentEquipped: setCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n}\n_c1 = Assembly;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsOverview\");\n$RefreshReg$(_c1, \"Assembly\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL2Fzc2VtYmx5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMkQ7QUFFM0QsU0FBU0UsY0FBYyxLQUErQztRQUEvQyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUUsR0FBL0M7SUFFbkIsTUFBTUMsMkJBQ0YsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1AsNEVBQUNDO1lBQUdELFdBQVU7c0JBQW1ETjs7Ozs7Ozs7Ozs7SUFJN0UsTUFBTVEsZUFBZVAsTUFBTVEsR0FBRyxDQUFFLENBQUNDLE1BQU1DO1FBQ25DLHFCQUNJLDhEQUFDTjtZQUFnQkMsV0FBVTtZQUE4Rk0sU0FBUyxJQUFNVixZQUFZRixVQUFVVTs7Z0JBQU87OEJBQ2pLLDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNPOzRCQUFFUCxXQUFVO3NDQUE4Q0k7Ozs7OztzQ0FDM0QsOERBQUNHOzRCQUFFUCxXQUFVO3NDQUFxQjs7Ozs7Ozs7Ozs7OztXQUhoQ0s7Ozs7O0lBT2xCO0lBR0EscUJBQ0ksOERBQUNOO1FBQUlDLFdBQVU7O1lBRVZGO1lBR0FJOzs7Ozs7O0FBR2I7S0E3QlNUO0FBK0JNLFNBQVNlLFNBQVMsS0FBZ0o7UUFBaEosRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGFBQWEsRUFBRUMsZ0JBQWdCLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFbkIsYUFBYSxFQUFDLEdBQWhKO0lBRTdCLE1BQU1vQixpQkFBaUI7UUFDbkI7WUFDRXZCLFVBQVU7WUFDVkMsT0FBTztnQkFBQztnQkFBYztnQkFBYztnQkFBZTthQUFjO1FBQ25FO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxPQUFPO2dCQUFDO2dCQUFRO2dCQUFRO2dCQUFRO2FBQU87UUFDekM7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUM7Z0JBQVc7Z0JBQU87YUFBWTtRQUN4QztRQUNBO1lBQ0VELFVBQVU7WUFDVkMsT0FBTztnQkFBQzthQUFZO1FBQ3RCO0tBQ0g7SUFFRCxTQUFTdUIsYUFBYUMsT0FBTztRQUN6QlAsaUJBQWlCTztJQUNyQjtJQUVBLFNBQVNDLFdBQVdDLGtCQUFrQixFQUFFRixPQUFPO1FBQzNDVCxlQUFlVztRQUNmVCxpQkFBaUJPO0lBQ3JCO0lBRUEsSUFBR1YsZ0JBQWdCLFdBQVc7UUFDMUIscUJBQ0ksOERBQUNWO1lBQUlDLFdBQVU7c0JBQ1ZpQixlQUFlZCxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0JBQ3ZCLHFCQUNJOzhCQUNJLDRFQUFDWjt3QkFBMEJDLFVBQVVVLEtBQUtWLFFBQVE7d0JBQUVDLE9BQU9TLEtBQUtULEtBQUs7d0JBQUVDLGFBQWF3Qjt3QkFBWXZCLGVBQWVBO3VCQUEzRlE7Ozs7OztZQUdoQzs7Ozs7O0lBR1osT0FFSztRQUNELE1BQU1pQixlQUFlTCxlQUFlTSxJQUFJLENBQUMsQ0FBQ25CLE9BQVNBLEtBQUtWLFFBQVEsS0FBS2UsYUFBYWQsS0FBSyxFQUFFLDZFQUE2RTtRQUN0SyxxQkFDSTtzQkFDQSw0RUFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVCxzREFBYUE7d0JBQUNHLFVBQVVlO3dCQUFhZCxPQUFPMkI7d0JBQWMxQixhQUFhc0I7d0JBQWNQLGVBQWVBOzs7Ozs7a0NBQ3JHLDhEQUFDbkIscURBQVlBO3dCQUFDbUIsZUFBZUE7d0JBQWVGLGFBQWFBO3dCQUFhSSxhQUFhQTt3QkFBYUMsZ0JBQWdCQTt3QkFBZ0JDLGlCQUFpQkE7d0JBQWlCQyxvQkFBb0JBOzs7Ozs7Ozs7Ozs7O0lBSWxNO0FBRUo7TUF4RHdCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYnVpbGRpbmcvYXNzZW1ibHkuanM/ZjNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgUGFydHNTZWxlY3RvciwgUGFydHNCdWlsZGVyIH0gZnJvbSAnLi9wYXJ0c3VpLmpzJztcclxuXHJcbmZ1bmN0aW9uIFBhcnRzT3ZlcnZpZXcoeyBjYXRlZ29yeSwgcGFydHMsIGhhbmRsZUNsaWNrLCBlcXVpcHBlZFBhcnRzIH0pIHsgLy9jYXRlZ29yeSA9IHVuaXQsIGZyYW1lLCBpbm5lciwgb3IgZXhwYW5zaW9uXHJcblxyXG4gICAgY29uc3QgcGFydEhlYWRlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMngxIHBiLTJcIj4gXHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bcmdiKDIwMCwyMDAsMjAwKV0gYmctW3JnYig1NSw2OSw4NildIHBsLTRcIj57Y2F0ZWdvcnl9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcGFydEVsZW1lbnRzID0gcGFydHMubWFwKCAocGFydCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm15LVswLjE1cmVtXSBib3JkZXItMiBib3JkZXItW3JnYig1Miw2NCw4MCldIGJnLVtyZ2IoNTQsNzIsOTcpXSBob3ZlcjpiZy1bcmdiKDEyMCwxNDgsMTYyKV1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhjYXRlZ29yeSwgcGFydCl9PiB7LyogY2hhbmdlIGhvdmVyIHRvIGdyYWRpZW50IHBsZWFzZSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsLTEwIHB0LTEgdGV4dC14cyB0ZXh0LVtyZ2IoMTEyLDEyNiwxNDgpXVwiPntwYXJ0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbC0xMCBwYi0xIHRleHQtc21cIj5oaTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi02XCI+XHJcbiAgICAgICAgICAgIHsvKmNhdGVnb3J5IGhlYWRpbmcqL31cclxuICAgICAgICAgICAge3BhcnRIZWFkZXJ9XHJcblxyXG4gICAgICAgICAgICB7LypwYXJ0cyBpbiBjYXRlZ29yeSovfVxyXG4gICAgICAgICAgICB7cGFydEVsZW1lbnRzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZW1ibHkoeyBjdXJyZW50TWVudSwgc2V0Q3VycmVudE1lbnUsIGN1cnJlbnRTZWxlY3QsIHNldEN1cnJlbnRTZWxlY3QsIGN1cnJlbnRQYXJ0LCBzZXRDdXJyZW50UGFydCwgY3VycmVudEVxdWlwcGVkLCBzZXRDdXJyZW50RXF1aXBwZWQsIGVxdWlwcGVkUGFydHN9KSB7XHJcblxyXG4gICAgY29uc3QgcGFydENhdGVnb3JpZXMgPSBbIC8vY2FuIHB1dCB0aGlzIGluIGhvbWUgY29tcG9uZW50IGFuZCBzaG9vdCBpdCBkb3duIHRvIGFzc2VtYmx5IGFzIHdlbGwgYXMgc3RhdGJveC4gYWxzbyBjYW4gc2VwYXJhdGUgY2F0ZWdvcnkgYW5kIHBhcnRzIGludG8gdHdvIGFycmF5cyBpbnN0ZWFkIG9mIHRvZ2V0aGVyIGluIG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIlVOSVRcIiwgXHJcbiAgICAgICAgICBwYXJ0czogW1wiUi1BUk0gVU5JVFwiLCBcIkwtQVJNIFVOSVRcIiwgXCJSLUJBQ0sgVU5JVFwiLCBcIkwtQkFDSyBVTklUXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJGUkFNRVwiLFxyXG4gICAgICAgICAgcGFydHM6IFtcIkhFQURcIiwgXCJDT1JFXCIsIFwiQVJNU1wiLCBcIkxFR1NcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIklOTkVSXCIsXHJcbiAgICAgICAgICBwYXJ0czogW1wiQk9PU1RFUlwiLCBcIkZDU1wiLCBcIkdFTkVSQVRPUlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRVhQQU5TSU9OXCIsXHJcbiAgICAgICAgICBwYXJ0czogW1wiRVhQQU5TSU9OXCJdXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VTZWxlY3QobmV3UGFydCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRTZWxlY3QobmV3UGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTWVudShjdXJyZW50TWVudUNsaWNrZWQsIG5ld1BhcnQpIHtcclxuICAgICAgICBzZXRDdXJyZW50TWVudShjdXJyZW50TWVudUNsaWNrZWQpO1xyXG4gICAgICAgIHNldEN1cnJlbnRTZWxlY3QobmV3UGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY3VycmVudE1lbnUgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICAgICAge3BhcnRDYXRlZ29yaWVzLm1hcCgocGFydCwgaW5kZXgpID0+IHsgLy9tYXAgYWxsIHRoZSBwYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFydHNPdmVydmlldyBrZXk9e2luZGV4fSBjYXRlZ29yeT17cGFydC5jYXRlZ29yeX0gcGFydHM9e3BhcnQucGFydHN9IGhhbmRsZUNsaWNrPXtjaGFuZ2VNZW51fSBlcXVpcHBlZFBhcnRzPXtlcXVpcHBlZFBhcnRzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7ICBcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJ0cyA9IHBhcnRDYXRlZ29yaWVzLmZpbmQoKHBhcnQpID0+IHBhcnQuY2F0ZWdvcnkgPT09IGN1cnJlbnRNZW51KS5wYXJ0czsgLy9maW5kIG9iamVjdCBjYXRlZ29yeSBvZiBjdXJyZW50TWVudSwgYW5kIHRoZW4gcmV0cmlldmUgcGFydHMgaW4gdGhhdCBvYmplY3RcclxuICAgICAgICByZXR1cm4oIFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0zLzQnPlxyXG4gICAgICAgICAgICAgICAgPFBhcnRzU2VsZWN0b3IgY2F0ZWdvcnk9e2N1cnJlbnRNZW51fSBwYXJ0cz17Y3VycmVudFBhcnRzfSBoYW5kbGVDbGljaz17Y2hhbmdlU2VsZWN0fSBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPFBhcnRzQnVpbGRlciBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSBjdXJyZW50TWVudT17Y3VycmVudE1lbnV9IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0gc2V0Q3VycmVudFBhcnQ9e3NldEN1cnJlbnRQYXJ0fSBjdXJyZW50RXF1aXBwZWQ9e2N1cnJlbnRFcXVpcHBlZH0gc2V0Q3VycmVudEVxdWlwcGVkPXtzZXRDdXJyZW50RXF1aXBwZWR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG59Il0sIm5hbWVzIjpbIlBhcnRzU2VsZWN0b3IiLCJQYXJ0c0J1aWxkZXIiLCJQYXJ0c092ZXJ2aWV3IiwiY2F0ZWdvcnkiLCJwYXJ0cyIsImhhbmRsZUNsaWNrIiwiZXF1aXBwZWRQYXJ0cyIsInBhcnRIZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInBhcnRFbGVtZW50cyIsIm1hcCIsInBhcnQiLCJpbmRleCIsIm9uQ2xpY2siLCJwIiwiQXNzZW1ibHkiLCJjdXJyZW50TWVudSIsInNldEN1cnJlbnRNZW51IiwiY3VycmVudFNlbGVjdCIsInNldEN1cnJlbnRTZWxlY3QiLCJjdXJyZW50UGFydCIsInNldEN1cnJlbnRQYXJ0IiwiY3VycmVudEVxdWlwcGVkIiwic2V0Q3VycmVudEVxdWlwcGVkIiwicGFydENhdGVnb3JpZXMiLCJjaGFuZ2VTZWxlY3QiLCJuZXdQYXJ0IiwiY2hhbmdlTWVudSIsImN1cnJlbnRNZW51Q2xpY2tlZCIsImN1cnJlbnRQYXJ0cyIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/building/assembly.js\n"));

/***/ })

});