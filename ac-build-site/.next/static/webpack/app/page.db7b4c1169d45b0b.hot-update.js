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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Assembly; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _partsui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partsui.js */ \"(app-client)/./app/building/partsui.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction PartsOverview(param) {\n    let { category, parts, handleClick, equippedParts } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 8,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)] h-[5vh] overflow-auto no-scrollbar\",\n            onClick: ()=>handleClick(category, part),\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-center text-4x1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-[7%] text-[rgb(112,126,148)]\",\n                            children: part\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this),\n                        equippedParts && equippedParts[part] ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-[7%]\",\n                            children: equippedParts[part][\"name\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 18,\n                            columnNumber: 22\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"pl-[7%]\",\n                            children: \"(Nothing)\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                            lineNumber: 19,\n                            columnNumber: 22\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, index, true, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            partHeader,\n            partElements\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsOverview;\nfunction Assembly(param) {\n    let { currentMenu, setCurrentMenu, currentSelect, setCurrentSelect, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped, equippedParts } = param;\n    const partCategories = [\n        {\n            category: \"UNIT\",\n            parts: [\n                \"R-ARM UNIT\",\n                \"L-ARM UNIT\",\n                \"R-BACK UNIT\",\n                \"L-BACK UNIT\"\n            ]\n        },\n        {\n            category: \"FRAME\",\n            parts: [\n                \"HEAD\",\n                \"CORE\",\n                \"ARMS\",\n                \"LEGS\"\n            ]\n        },\n        {\n            category: \"INNER\",\n            parts: [\n                \"BOOSTER\",\n                \"FCS\",\n                \"GENERATOR\"\n            ]\n        },\n        {\n            category: \"EXPANSION\",\n            parts: [\n                \"EXPANSION\"\n            ]\n        }\n    ];\n    function changeMenu(currentMenuClicked, newPart) {\n        setCurrentMenu(currentMenuClicked);\n        setCurrentSelect(newPart);\n    }\n    if (currentMenu === \"default\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            children: partCategories.map((part, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsOverview, {\n                        category: part.category,\n                        parts: part.parts,\n                        handleClick: changeMenu,\n                        equippedParts: equippedParts\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 69,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this);\n    } else {\n        const currentParts = partCategories.find((part)=>part.category === currentMenu).parts; //find object category of currentMenu, and then retrieve parts in that object\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsSelector, {\n                        currentMenu: currentMenu,\n                        setCurrentMenu: setCurrentMenu,\n                        parts: currentParts,\n                        setCurrentSelect: setCurrentSelect,\n                        currentSelect: currentSelect\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partsui_js__WEBPACK_IMPORTED_MODULE_1__.PartsBuilder, {\n                        currentSelect: currentSelect,\n                        currentMenu: currentMenu,\n                        currentPart: currentPart,\n                        setCurrentPart: setCurrentPart,\n                        currentEquipped: currentEquipped,\n                        setCurrentEquipped: setCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        }, void 0, false);\n    }\n}\n_c1 = Assembly;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsOverview\");\n$RefreshReg$(_c1, \"Assembly\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL2Fzc2VtYmx5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMkQ7QUFFM0QsU0FBU0UsY0FBYyxLQUErQztRQUEvQyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUUsR0FBL0M7SUFFbkIsTUFBTUMsMkJBQ0YsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1AsNEVBQUNDO1lBQUdELFdBQVU7c0JBQW1ETjs7Ozs7Ozs7Ozs7SUFJN0UsTUFBTVEsZUFBZVAsTUFBTVEsR0FBRyxDQUFFLENBQUNDLE1BQU1DO1FBQ25DLHFCQUNJLDhEQUFDTjtZQUFnQkMsV0FBVTtZQUFpSU0sU0FBUyxJQUFNVixZQUFZRixVQUFVVTs7Z0JBQU87OEJBQ3BNLDhEQUFDTDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNPOzRCQUFFUCxXQUFVO3NDQUFtQ0k7Ozs7Ozt3QkFDL0NQLGlCQUFpQkEsYUFBYSxDQUFDTyxLQUFLLGlCQUNwQyw4REFBQ0c7NEJBQUVQLFdBQVU7c0NBQVdILGFBQWEsQ0FBQ08sS0FBSyxDQUFDLE9BQU87Ozs7O2lEQUNuRCw4REFBQ0c7NEJBQUVQLFdBQVU7c0NBQVU7Ozs7Ozs7Ozs7Ozs7V0FMdEJLOzs7OztJQVNsQjtJQUdBLHFCQUNJLDhEQUFDTjtRQUFJQyxXQUFVOztZQUVWRjtZQUdBSTs7Ozs7OztBQUdiO0tBL0JTVDtBQWlDTSxTQUFTZSxTQUFTLEtBQWdKO1FBQWhKLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLGdCQUFnQixFQUFFQyxXQUFXLEVBQUVDLGNBQWMsRUFBRUMsZUFBZSxFQUFFQyxrQkFBa0IsRUFBRW5CLGFBQWEsRUFBQyxHQUFoSjtJQUU3QixNQUFNb0IsaUJBQWlCO1FBQ25CO1lBQ0V2QixVQUFVO1lBQ1ZDLE9BQU87Z0JBQUM7Z0JBQWM7Z0JBQWM7Z0JBQWU7YUFBYztRQUNuRTtRQUNBO1lBQ0VELFVBQVU7WUFDVkMsT0FBTztnQkFBQztnQkFBUTtnQkFBUTtnQkFBUTthQUFPO1FBQ3pDO1FBQ0E7WUFDRUQsVUFBVTtZQUNWQyxPQUFPO2dCQUFDO2dCQUFXO2dCQUFPO2FBQVk7UUFDeEM7UUFDQTtZQUNFRCxVQUFVO1lBQ1ZDLE9BQU87Z0JBQUM7YUFBWTtRQUN0QjtLQUNIO0lBRUQsU0FBU3VCLFdBQVdDLGtCQUFrQixFQUFFQyxPQUFPO1FBQzNDVixlQUFlUztRQUNmUCxpQkFBaUJRO0lBQ3JCO0lBRUEsSUFBR1gsZ0JBQWdCLFdBQVc7UUFDMUIscUJBQ0ksOERBQUNWO1lBQUlDLFdBQVU7c0JBQ1ZpQixlQUFlZCxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0JBQ3ZCLHFCQUNJOzhCQUNJLDRFQUFDWjt3QkFBMEJDLFVBQVVVLEtBQUtWLFFBQVE7d0JBQUVDLE9BQU9TLEtBQUtULEtBQUs7d0JBQUVDLGFBQWFzQjt3QkFBWXJCLGVBQWVBO3VCQUEzRlE7Ozs7OztZQUdoQzs7Ozs7O0lBR1osT0FFSztRQUNELE1BQU1nQixlQUFlSixlQUFlSyxJQUFJLENBQUMsQ0FBQ2xCLE9BQVNBLEtBQUtWLFFBQVEsS0FBS2UsYUFBYWQsS0FBSyxFQUFFLDZFQUE2RTtRQUN0SyxxQkFDSTtzQkFDQSw0RUFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVCxzREFBYUE7d0JBQUNrQixhQUFhQTt3QkFBYUMsZ0JBQWdCQTt3QkFBZ0JmLE9BQU8wQjt3QkFBY1Qsa0JBQWtCQTt3QkFBa0JELGVBQWVBOzs7Ozs7a0NBQ2pKLDhEQUFDbkIscURBQVlBO3dCQUFDbUIsZUFBZUE7d0JBQWVGLGFBQWFBO3dCQUFhSSxhQUFhQTt3QkFBYUMsZ0JBQWdCQTt3QkFBZ0JDLGlCQUFpQkE7d0JBQWlCQyxvQkFBb0JBOzs7Ozs7Ozs7Ozs7O0lBSWxNO0FBRUo7TUFwRHdCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYnVpbGRpbmcvYXNzZW1ibHkuanM/ZjNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgUGFydHNTZWxlY3RvciwgUGFydHNCdWlsZGVyIH0gZnJvbSAnLi9wYXJ0c3VpLmpzJztcclxuXHJcbmZ1bmN0aW9uIFBhcnRzT3ZlcnZpZXcoeyBjYXRlZ29yeSwgcGFydHMsIGhhbmRsZUNsaWNrLCBlcXVpcHBlZFBhcnRzIH0pIHsgLy9jYXRlZ29yeSA9IHVuaXQsIGZyYW1lLCBpbm5lciwgb3IgZXhwYW5zaW9uXHJcblxyXG4gICAgY29uc3QgcGFydEhlYWRlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMngxIHBiLTJcIj4gXHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bcmdiKDIwMCwyMDAsMjAwKV0gYmctW3JnYig1NSw2OSw4NildIHBsLTRcIj57Y2F0ZWdvcnl9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcGFydEVsZW1lbnRzID0gcGFydHMubWFwKCAocGFydCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm15LVswLjE1cmVtXSBib3JkZXItMiBib3JkZXItW3JnYig1Miw2NCw4MCldIGJnLVtyZ2IoNTQsNzIsOTcpXSBob3ZlcjpiZy1bcmdiKDEyMCwxNDgsMTYyKV0gaC1bNXZoXSBvdmVyZmxvdy1hdXRvIG5vLXNjcm9sbGJhclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGNhdGVnb3J5LCBwYXJ0KX0+IHsvKiBjaGFuZ2UgaG92ZXIgdG8gZ3JhZGllbnQgcGxlYXNlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtNHgxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtWzclXSB0ZXh0LVtyZ2IoMTEyLDEyNiwxNDgpXVwiPntwYXJ0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7ZXF1aXBwZWRQYXJ0cyAmJiBlcXVpcHBlZFBhcnRzW3BhcnRdID8gXHJcbiAgICAgICAgICAgICAgICAgICAgKDxwIGNsYXNzTmFtZT1cInBsLVs3JV1cIj57ZXF1aXBwZWRQYXJ0c1twYXJ0XVsnbmFtZSddfTwvcD4pIDogXHJcbiAgICAgICAgICAgICAgICAgICAgKDxwIGNsYXNzTmFtZT1cInBsLVs3JV1cIj4oTm90aGluZyk8L3A+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgey8qY2F0ZWdvcnkgaGVhZGluZyovfVxyXG4gICAgICAgICAgICB7cGFydEhlYWRlcn1cclxuXHJcbiAgICAgICAgICAgIHsvKnBhcnRzIGluIGNhdGVnb3J5Ki99XHJcbiAgICAgICAgICAgIHtwYXJ0RWxlbWVudHN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3NlbWJseSh7IGN1cnJlbnRNZW51LCBzZXRDdXJyZW50TWVudSwgY3VycmVudFNlbGVjdCwgc2V0Q3VycmVudFNlbGVjdCwgY3VycmVudFBhcnQsIHNldEN1cnJlbnRQYXJ0LCBjdXJyZW50RXF1aXBwZWQsIHNldEN1cnJlbnRFcXVpcHBlZCwgZXF1aXBwZWRQYXJ0c30pIHtcclxuXHJcbiAgICBjb25zdCBwYXJ0Q2F0ZWdvcmllcyA9IFsgLy9jYW4gcHV0IHRoaXMgaW4gaG9tZSBjb21wb25lbnQgYW5kIHNob290IGl0IGRvd24gdG8gYXNzZW1ibHkgYXMgd2VsbCBhcyBzdGF0Ym94LiBhbHNvIGNhbiBzZXBhcmF0ZSBjYXRlZ29yeSBhbmQgcGFydHMgaW50byB0d28gYXJyYXlzIGluc3RlYWQgb2YgdG9nZXRoZXIgaW4gb2JqZWN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiVU5JVFwiLCBcclxuICAgICAgICAgIHBhcnRzOiBbXCJSLUFSTSBVTklUXCIsIFwiTC1BUk0gVU5JVFwiLCBcIlItQkFDSyBVTklUXCIsIFwiTC1CQUNLIFVOSVRcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkZSQU1FXCIsXHJcbiAgICAgICAgICBwYXJ0czogW1wiSEVBRFwiLCBcIkNPUkVcIiwgXCJBUk1TXCIsIFwiTEVHU1wiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiSU5ORVJcIixcclxuICAgICAgICAgIHBhcnRzOiBbXCJCT09TVEVSXCIsIFwiRkNTXCIsIFwiR0VORVJBVE9SXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJFWFBBTlNJT05cIixcclxuICAgICAgICAgIHBhcnRzOiBbXCJFWFBBTlNJT05cIl1cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1lbnUoY3VycmVudE1lbnVDbGlja2VkLCBuZXdQYXJ0KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudE1lbnUoY3VycmVudE1lbnVDbGlja2VkKTtcclxuICAgICAgICBzZXRDdXJyZW50U2VsZWN0KG5ld1BhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGN1cnJlbnRNZW51ID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAge3BhcnRDYXRlZ29yaWVzLm1hcCgocGFydCwgaW5kZXgpID0+IHsgLy9tYXAgYWxsIHRoZSBwYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFydHNPdmVydmlldyBrZXk9e2luZGV4fSBjYXRlZ29yeT17cGFydC5jYXRlZ29yeX0gcGFydHM9e3BhcnQucGFydHN9IGhhbmRsZUNsaWNrPXtjaGFuZ2VNZW51fSBlcXVpcHBlZFBhcnRzPXtlcXVpcHBlZFBhcnRzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICk7ICBcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJ0cyA9IHBhcnRDYXRlZ29yaWVzLmZpbmQoKHBhcnQpID0+IHBhcnQuY2F0ZWdvcnkgPT09IGN1cnJlbnRNZW51KS5wYXJ0czsgLy9maW5kIG9iamVjdCBjYXRlZ29yeSBvZiBjdXJyZW50TWVudSwgYW5kIHRoZW4gcmV0cmlldmUgcGFydHMgaW4gdGhhdCBvYmplY3RcclxuICAgICAgICByZXR1cm4oIFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0c1NlbGVjdG9yIGN1cnJlbnRNZW51PXtjdXJyZW50TWVudX0gc2V0Q3VycmVudE1lbnU9e3NldEN1cnJlbnRNZW51fSBwYXJ0cz17Y3VycmVudFBhcnRzfSBzZXRDdXJyZW50U2VsZWN0PXtzZXRDdXJyZW50U2VsZWN0fSBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPFBhcnRzQnVpbGRlciBjdXJyZW50U2VsZWN0PXtjdXJyZW50U2VsZWN0fSBjdXJyZW50TWVudT17Y3VycmVudE1lbnV9IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0gc2V0Q3VycmVudFBhcnQ9e3NldEN1cnJlbnRQYXJ0fSBjdXJyZW50RXF1aXBwZWQ9e2N1cnJlbnRFcXVpcHBlZH0gc2V0Q3VycmVudEVxdWlwcGVkPXtzZXRDdXJyZW50RXF1aXBwZWR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG59Il0sIm5hbWVzIjpbIlBhcnRzU2VsZWN0b3IiLCJQYXJ0c0J1aWxkZXIiLCJQYXJ0c092ZXJ2aWV3IiwiY2F0ZWdvcnkiLCJwYXJ0cyIsImhhbmRsZUNsaWNrIiwiZXF1aXBwZWRQYXJ0cyIsInBhcnRIZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInBhcnRFbGVtZW50cyIsIm1hcCIsInBhcnQiLCJpbmRleCIsIm9uQ2xpY2siLCJwIiwiQXNzZW1ibHkiLCJjdXJyZW50TWVudSIsInNldEN1cnJlbnRNZW51IiwiY3VycmVudFNlbGVjdCIsInNldEN1cnJlbnRTZWxlY3QiLCJjdXJyZW50UGFydCIsInNldEN1cnJlbnRQYXJ0IiwiY3VycmVudEVxdWlwcGVkIiwic2V0Q3VycmVudEVxdWlwcGVkIiwicGFydENhdGVnb3JpZXMiLCJjaGFuZ2VNZW51IiwiY3VycmVudE1lbnVDbGlja2VkIiwibmV3UGFydCIsImN1cnJlbnRQYXJ0cyIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/building/assembly.js\n"));

/***/ })

});