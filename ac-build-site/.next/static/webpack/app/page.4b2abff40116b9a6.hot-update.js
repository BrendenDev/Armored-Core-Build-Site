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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Assembly; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _partsui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partsui.js */ \"(app-client)/./app/building/partsui.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction PartsOverview(param) {\n    let { category, parts, handleClick, equippedParts } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-[0.5%]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 8,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)] overflow-auto no-scrollbar\",\n            onClick: ()=>handleClick(category, part),\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center text-8x1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-[7%] text-[rgb(112,126,148)]\",\n                            children: part\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this),\n                        equippedParts && equippedParts[part] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-[7%]\",\n                            children: equippedParts[part][\"name\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 18,\n                            columnNumber: 22\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-[7%]\",\n                            children: \"(Nothing)\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 19,\n                            columnNumber: 22\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, index, true, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-2\",\n        children: [\n            partHeader,\n            partElements\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsOverview;\nfunction Assembly(param) {\n    let { currentMenu, setCurrentMenu, currentSelect, setCurrentSelect, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped, equippedParts } = param;\n    const partCategories = [\n        {\n            category: \"UNIT\",\n            parts: [\n                \"R-ARM UNIT\",\n                \"L-ARM UNIT\",\n                \"R-BACK UNIT\",\n                \"L-BACK UNIT\"\n            ]\n        },\n        {\n            category: \"FRAME\",\n            parts: [\n                \"HEAD\",\n                \"CORE\",\n                \"ARMS\",\n                \"LEGS\"\n            ]\n        },\n        {\n            category: \"INNER\",\n            parts: [\n                \"BOOSTER\",\n                \"FCS\",\n                \"GENERATOR\"\n            ]\n        },\n        {\n            category: \"EXPANSION\",\n            parts: [\n                \"EXPANSION\"\n            ]\n        }\n    ];\n    function changeMenu(currentMenuClicked, newPart) {\n        setCurrentMenu(currentMenuClicked);\n        setCurrentSelect(newPart);\n    }\n    if (currentMenu === \"default\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: partCategories.map((part, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsOverview, {\n                        category: part.category,\n                        parts: part.parts,\n                        handleClick: changeMenu,\n                        equippedParts: equippedParts\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 69,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this);\n    } else {\n        const currentParts = partCategories.find((part)=>part.category === currentMenu).parts; //find object category of currentMenu, and then retrieve parts in that object\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsSelector, {\n                        currentMenu: currentMenu,\n                        setCurrentMenu: setCurrentMenu,\n                        parts: currentParts,\n                        setCurrentSelect: setCurrentSelect,\n                        currentSelect: currentSelect\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsBuilder, {\n                        currentSelect: currentSelect,\n                        currentMenu: currentMenu,\n                        currentPart: currentPart,\n                        setCurrentPart: setCurrentPart,\n                        currentEquipped: currentEquipped,\n                        setCurrentEquipped: setCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n}\n_c1 = Assembly;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsOverview\");\n$RefreshReg$(_c1, \"Assembly\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL2Fzc2VtYmx5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMkQ7QUFFM0QsU0FBU0UsY0FBYyxLQUErQztRQUEvQyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUUsR0FBL0M7SUFFbkIsTUFBTUMsMkJBQ0YsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1AsNEVBQUNDO1lBQUdELFdBQVU7c0JBQW1ETjs7Ozs7Ozs7Ozs7SUFJN0UsTUFBTVEsZUFBZVAsTUFBTVEsR0FBRyxDQUFFLENBQUNDLE1BQU1DO1FBQ25DLHFCQUNJLDhEQUFDTjtZQUFnQkMsV0FBVTtZQUF5SE0sU0FBUyxJQUFNVixZQUFZRixVQUFVVTs7Z0JBQU87OEJBQzVMLDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNPOzRCQUFFUCxXQUFVO3NDQUFtQ0k7Ozs7Ozt3QkFDL0NQLGlCQUFpQkEsYUFBYSxDQUFDTyxLQUFLLGlCQUNwQyw4REFBQ0c7NEJBQUVQLFdBQVU7c0NBQVdILGFBQWEsQ0FBQ08sS0FBSyxDQUFDLE9BQU87Ozs7O2lEQUNuRCw4REFBQ0c7NEJBQUVQLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs7V0FMdEJLOzs7OztJQVNsQjtJQUdBLHFCQUNJLDhEQUFDTjtRQUFJQyxXQUFVOztZQUVWRjtZQUdBSTs7Ozs7OztBQUdiO0tBL0JTVDtBQWlDTSxTQUFTZSxTQUFTLEtBQWdKO1FBQWhKLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsZUFBZSxFQUFFQyxrQkFBa0IsRUFBRW5CLGFBQWEsRUFBQyxHQUFoSjtJQUU3QixNQUFNb0IsaUJBQWlCO1FBQ25CO1lBQ0V2QixVQUFVO1lBQ1ZDLE9BQU87Z0JBQUM7Z0JBQWM7Z0JBQWM7Z0JBQWU7YUFBYztRQUNuRTtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsT0FBTztnQkFBQztnQkFBUTtnQkFBUTtnQkFBUTthQUFPO1FBQ3pDO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxPQUFPO2dCQUFDO2dCQUFXO2dCQUFPO2FBQVk7UUFDeEM7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUM7YUFBWTtRQUN0QjtLQUNIO0lBRUQsU0FBU3VCLFdBQVdDLGtCQUFrQixFQUFFQyxPQUFPO1FBQzNDVixlQUFlUztRQUNmUCxpQkFBaUJRO0lBQ3JCO0lBRUEsSUFBR1gsZ0JBQWdCLFdBQVc7UUFDMUIscUJBQ0ksOERBQUNWO1lBQUlDLFdBQVU7c0JBQ1ZpQixlQUFlZCxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0JBQ3ZCLHFCQUNJOzhCQUNJLDRFQUFDWjt3QkFBMEJDLFVBQVVVLEtBQUtWLFFBQVE7d0JBQUVDLE9BQU9TLEtBQUtULEtBQUs7d0JBQUVDLGFBQWFzQjt3QkFBWXJCLGVBQWVBO3VCQUEzRlE7Ozs7OztZQUdoQzs7Ozs7O0lBR1osT0FFSztRQUNELE1BQU1nQixlQUFlSixlQUFlSyxJQUFJLENBQUMsQ0FBQ2xCLE9BQVNBLEtBQUtWLFFBQVEsS0FBS2UsYUFBYWQsS0FBSyxFQUFFLDZFQUE2RTtRQUN0SyxxQkFDSTtzQkFDQSw0RUFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVCxzREFBYUE7d0JBQUNrQixhQUFhQTt3QkFBYUMsZ0JBQWdCQTt3QkFBZ0JmLE9BQU8wQjt3QkFBY1Qsa0JBQWtCQTt3QkFBa0JELGVBQWVBOzs7Ozs7a0NBQ2pKLDhEQUFDbkIscURBQVlBO3dCQUFDbUIsZUFBZUE7d0JBQWVGLGFBQWFBO3dCQUFhSSxhQUFhQTt3QkFBYUMsZ0JBQWdCQTt3QkFBZ0JDLGlCQUFpQkE7d0JBQWlCQyxvQkFBb0JBOzs7Ozs7Ozs7Ozs7O0lBSWxNO0FBRUo7TUFwRHdCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYnVpbGRpbmcvYXNzZW1ibHkuanM/ZjNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgUGFydHNTZWxlY3RvciwgUGFydHNCdWlsZGVyIH0gZnJvbSAnLi9wYXJ0c3VpLmpzJztcclxuXHJcbmZ1bmN0aW9uIFBhcnRzT3ZlcnZpZXcoeyBjYXRlZ29yeSwgcGFydHMsIGhhbmRsZUNsaWNrLCBlcXVpcHBlZFBhcnRzIH0pIHsgLy9jYXRlZ29yeSA9IHVuaXQsIGZyYW1lLCBpbm5lciwgb3IgZXhwYW5zaW9uXHJcblxyXG4gICAgY29uc3QgcGFydEhlYWRlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMngxIHBiLVswLjUlXVwiPiBcclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVtyZ2IoMjAwLDIwMCwyMDApXSBiZy1bcmdiKDU1LDY5LDg2KV0gcGwtNFwiPntjYXRlZ29yeX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwYXJ0RWxlbWVudHMgPSBwYXJ0cy5tYXAoIChwYXJ0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibXktWzAuMTVyZW1dIGJvcmRlci0yIGJvcmRlci1bcmdiKDUyLDY0LDgwKV0gYmctW3JnYig1NCw3Miw5NyldIGhvdmVyOmJnLVtyZ2IoMTIwLDE0OCwxNjIpXSBvdmVyZmxvdy1hdXRvIG5vLXNjcm9sbGJhclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGNhdGVnb3J5LCBwYXJ0KX0+IHsvKiBjaGFuZ2UgaG92ZXIgdG8gZ3JhZGllbnQgcGxlYXNlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtOHgxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtWzclXSB0ZXh0LVtyZ2IoMTEyLDEyNiwxNDgpXVwiPntwYXJ0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7ZXF1aXBwZWRQYXJ0cyAmJiBlcXVpcHBlZFBhcnRzW3BhcnRdID8gXHJcbiAgICAgICAgICAgICAgICAgICAgKDxwIGNsYXNzTmFtZT1cInBsLVs3JV1cIj57ZXF1aXBwZWRQYXJ0c1twYXJ0XVsnbmFtZSddfTwvcD4pIDogXHJcbiAgICAgICAgICAgICAgICAgICAgKDxwIGNsYXNzTmFtZT1cInBsLVs3JV1cIj4oTm90aGluZyk8L3A+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0yXCI+XHJcbiAgICAgICAgICAgIHsvKmNhdGVnb3J5IGhlYWRpbmcqL31cclxuICAgICAgICAgICAge3BhcnRIZWFkZXJ9XHJcblxyXG4gICAgICAgICAgICB7LypwYXJ0cyBpbiBjYXRlZ29yeSovfVxyXG4gICAgICAgICAgICB7cGFydEVsZW1lbnRzfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZW1ibHkoeyBjdXJyZW50TWVudSwgc2V0Q3VycmVudE1lbnUsIGN1cnJlbnRTZWxlY3QsIHNldEN1cnJlbnRTZWxlY3QsIGN1cnJlbnRQYXJ0LCBzZXRDdXJyZW50UGFydCwgY3VycmVudEVxdWlwcGVkLCBzZXRDdXJyZW50RXF1aXBwZWQsIGVxdWlwcGVkUGFydHN9KSB7XHJcblxyXG4gICAgY29uc3QgcGFydENhdGVnb3JpZXMgPSBbIC8vY2FuIHB1dCB0aGlzIGluIGhvbWUgY29tcG9uZW50IGFuZCBzaG9vdCBpdCBkb3duIHRvIGFzc2VtYmx5IGFzIHdlbGwgYXMgc3RhdGJveC4gYWxzbyBjYW4gc2VwYXJhdGUgY2F0ZWdvcnkgYW5kIHBhcnRzIGludG8gdHdvIGFycmF5cyBpbnN0ZWFkIG9mIHRvZ2V0aGVyIGluIG9iamVjdFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIlVOSVRcIiwgXHJcbiAgICAgICAgICBwYXJ0czogW1wiUi1BUk0gVU5JVFwiLCBcIkwtQVJNIFVOSVRcIiwgXCJSLUJBQ0sgVU5JVFwiLCBcIkwtQkFDSyBVTklUXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJGUkFNRVwiLFxyXG4gICAgICAgICAgcGFydHM6IFtcIkhFQURcIiwgXCJDT1JFXCIsIFwiQVJNU1wiLCBcIkxFR1NcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIklOTkVSXCIsXHJcbiAgICAgICAgICBwYXJ0czogW1wiQk9PU1RFUlwiLCBcIkZDU1wiLCBcIkdFTkVSQVRPUlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRVhQQU5TSU9OXCIsXHJcbiAgICAgICAgICBwYXJ0czogW1wiRVhQQU5TSU9OXCJdXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZW51KGN1cnJlbnRNZW51Q2xpY2tlZCwgbmV3UGFydCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRNZW51KGN1cnJlbnRNZW51Q2xpY2tlZCk7XHJcbiAgICAgICAgc2V0Q3VycmVudFNlbGVjdChuZXdQYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihjdXJyZW50TWVudSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIHtwYXJ0Q2F0ZWdvcmllcy5tYXAoKHBhcnQsIGluZGV4KSA9PiB7IC8vbWFwIGFsbCB0aGUgcGFydHNcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnRzT3ZlcnZpZXcga2V5PXtpbmRleH0gY2F0ZWdvcnk9e3BhcnQuY2F0ZWdvcnl9IHBhcnRzPXtwYXJ0LnBhcnRzfSBoYW5kbGVDbGljaz17Y2hhbmdlTWVudX0gZXF1aXBwZWRQYXJ0cz17ZXF1aXBwZWRQYXJ0c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApOyAgXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFydHMgPSBwYXJ0Q2F0ZWdvcmllcy5maW5kKChwYXJ0KSA9PiBwYXJ0LmNhdGVnb3J5ID09PSBjdXJyZW50TWVudSkucGFydHM7IC8vZmluZCBvYmplY3QgY2F0ZWdvcnkgb2YgY3VycmVudE1lbnUsIGFuZCB0aGVuIHJldHJpZXZlIHBhcnRzIGluIHRoYXQgb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuKCBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XHJcbiAgICAgICAgICAgICAgICA8UGFydHNTZWxlY3RvciBjdXJyZW50TWVudT17Y3VycmVudE1lbnV9IHNldEN1cnJlbnRNZW51PXtzZXRDdXJyZW50TWVudX0gcGFydHM9e2N1cnJlbnRQYXJ0c30gc2V0Q3VycmVudFNlbGVjdD17c2V0Q3VycmVudFNlbGVjdH0gY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0c0J1aWxkZXIgY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gY3VycmVudE1lbnU9e2N1cnJlbnRNZW51fSBjdXJyZW50UGFydD17Y3VycmVudFBhcnR9IHNldEN1cnJlbnRQYXJ0PXtzZXRDdXJyZW50UGFydH0gY3VycmVudEVxdWlwcGVkPXtjdXJyZW50RXF1aXBwZWR9IHNldEN1cnJlbnRFcXVpcHBlZD17c2V0Q3VycmVudEVxdWlwcGVkfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJuYW1lcyI6WyJQYXJ0c1NlbGVjdG9yIiwiUGFydHNCdWlsZGVyIiwiUGFydHNPdmVydmlldyIsImNhdGVnb3J5IiwicGFydHMiLCJoYW5kbGVDbGljayIsImVxdWlwcGVkUGFydHMiLCJwYXJ0SGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYXJ0RWxlbWVudHMiLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJvbkNsaWNrIiwicCIsIkFzc2VtYmx5IiwiY3VycmVudE1lbnUiLCJzZXRDdXJyZW50TWVudSIsImN1cnJlbnRTZWxlY3QiLCJzZXRDdXJyZW50U2VsZWN0IiwiY3VycmVudFBhcnQiLCJzZXRDdXJyZW50UGFydCIsImN1cnJlbnRFcXVpcHBlZCIsInNldEN1cnJlbnRFcXVpcHBlZCIsInBhcnRDYXRlZ29yaWVzIiwiY2hhbmdlTWVudSIsImN1cnJlbnRNZW51Q2xpY2tlZCIsIm5ld1BhcnQiLCJjdXJyZW50UGFydHMiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/building/assembly.js\n"));

/***/ })

});