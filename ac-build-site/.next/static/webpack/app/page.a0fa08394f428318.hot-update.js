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

/***/ "(app-client)/./app/building/partsui.js":
/*!*********************************!*\
  !*** ./app/building/partsui.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PartsBuilder: function() { return /* binding */ PartsBuilder; },\n/* harmony export */   PartsSelector: function() { return /* binding */ PartsSelector; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries.js */ \"(app-client)/./app/building/queries.js\");\n/* harmony import */ var _ui_corners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/corners.js */ \"(app-client)/./app/ui/corners.js\");\n/* __next_internal_client_entry_do_not_use__ PartsSelector,PartsBuilder auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PartsSelector(param) {\n    let { category, parts, handleClick, currentSelect } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center text-[rgb(200,200,200)]\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part, index)=>{\n        if (part === currentSelect) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow basis-0 bg-[rgb(77,98,127)]\",\n                onClick: ()=>handleClick(part),\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"py-2 text-center\",\n                        children: part\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow basis-0 bg-[rgb(35,50,67)] hover:bg-[rgb(120,148,162)]\",\n                onClick: ()=>handleClick(part),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"py-2 text-center\",\n                    children: part\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            partHeader,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-evenly\",\n                children: partElements\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsSelector;\nfunction PartsBuilder(param) {\n    let { currentSelect, currentMenu, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped } = param;\n    _s();\n    const [renderedData, setRenderedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = ()=>{\n            const query = (0,_queries_js__WEBPACK_IMPORTED_MODULE_2__.getPartQuery)(currentSelect); //this has to be an await despite grabbing from local storage\n            const localQuery = currentMenu.toLowerCase() + \"_data\";\n            //DATA NOT RECIEVING IN DATA, TEST FOR THAT\n            const rawData = JSON.parse(localStorage.getItem(localQuery));\n            const data = [];\n            for(let i = 0; i < rawData.length; i++){\n                if (rawData[i][\"type\"] === query) {\n                    data.push(JSON.stringify(rawData[i]));\n                }\n            }\n            setRenderedData(data);\n        };\n        fetchData();\n        const checkEquipped = async ()=>{\n            if (localStorage.getItem(currentSelect) != \"[object Object]\") {\n                setCurrentEquipped(JSON.parse(localStorage.getItem(currentSelect)));\n            }\n        };\n        checkEquipped();\n    }, [\n        currentSelect\n    ]);\n    function Equippable(param) {\n        let { part, changeCurrentEquipped } = param;\n        try {\n            if (part[\"name\"] === currentEquipped[\"name\"]) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                    onClick: (event)=>{\n                        event.stopPropagation();\n                        console.log(\"Already equipped\");\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Equipped\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 86,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 85,\n                    columnNumber: 21\n                }, this);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                    onClick: (event)=>{\n                        event.stopPropagation();\n                        changeCurrentEquipped(part);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Equip Part\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 93,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 92,\n                    columnNumber: 21\n                }, this);\n            }\n        } catch (error) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                onClick: (event)=>{\n                    event.stopPropagation();\n                    changeCurrentEquipped(part);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Equip Part\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 101,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 100,\n                columnNumber: 17\n            }, this);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(currentSelect, JSON.stringify(currentEquipped));\n        if (currentEquipped[\"type\"] !== currentSelect) {\n            console.log(\"hi\");\n        }\n    }, [\n        currentEquipped\n    ]);\n    function changeCurrentEquipped(part) {\n        setCurrentEquipped(part);\n    }\n    function changeCurrentPart(part) {\n        setCurrentPart(part);\n    }\n    function Part(param) {\n        let { partData, index, changeCurrentPart } = param;\n        const part = JSON.parse(partData);\n        if (currentPart[\"name\"] === part[\"name\"]) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"relative text-center py-20 mx-10 my-2 bg-[rgb(101,117,131)]\",\n                onClick: ()=>changeCurrentPart(part),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: part[\"name\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 131,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Equippable, {\n                        part: part,\n                        changeCurrentEquipped: changeCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 132,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 130,\n                columnNumber: 17\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"relative text-center py-20 mx-10 my-2 bg-[rgb(86,106,135)] hover:bg-[rgb(101,117,131)]\",\n                onClick: ()=>changeCurrentPart(part),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: part[\"name\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 139,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Equippable, {\n                        part: part,\n                        changeCurrentEquipped: changeCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 140,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 138,\n                columnNumber: 17\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-b from-custom-gradient-start via-custom-gradient-mid to-custom-gradient-end relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-auto h-full max-h-[75vh] no-scrollbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-none p-0\",\n                    children: renderedData.map((partData, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Part, {\n                                partData: partData,\n                                changeCurrentPart: changeCurrentPart\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                                lineNumber: 156,\n                                columnNumber: 32\n                            }, this)\n                        }, void 0, false))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 152,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_corners_js__WEBPACK_IMPORTED_MODULE_3__.Corners, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 162,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 150,\n        columnNumber: 9\n    }, this);\n} //cache parts idea\n /*let cache = {};\r\n\r\nfunction getItemFromLocalStorage(key) {\r\n  if (cache.hasOwnProperty(key)) {\r\n    // Item is found in the cache, return it\r\n    return cache[key];\r\n  }\r\n\r\n  // Item is not found in the cache, retrieve it from localStorage\r\n  const item = localStorage.getItem(key);\r\n\r\n  // Store the item in the cache\r\n  cache[key] = item;\r\n\r\n  return item;\r\n}\r\n\r\n// Handle storage events to update the cache\r\nwindow.addEventListener('storage', (event) => {\r\n  const { key } = event;\r\n  \r\n  // Remove the item from the cache if it is updated or removed in localStorage\r\n  if (cache.hasOwnProperty(key)) {\r\n    delete cache[key];\r\n  }\r\n});\r\n\r\n// Usage example\r\nconst value1 = getItemFromLocalStorage('item1'); // Retrieves 'item1' from localStorage and stores it in the cache\r\nconst value2 = getItemFromLocalStorage('item2'); // Retrieves 'item2' from localStorage and stores it in the cache\r\n\r\n// Update 'item1' in localStorage\r\nlocalStorage.setItem('item1', 'new value');\r\n\r\nconst updatedValue1 = getItemFromLocalStorage('item1'); // Retrieves the updated value from localStorage and updates the cache\r\n*/ \n_s(PartsBuilder, \"vkH3aO/4c08WanxeMXHLCNvWIt4=\");\n_c1 = PartsBuilder;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsSelector\");\n$RefreshReg$(_c1, \"PartsBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtqQjtJQUlKO0lBRUEscUJBQ0ksOERBQUNOO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQzJDO29CQUFHM0MsV0FBVTs4QkFFTmEsYUFBYVYsR0FBRyxDQUFDLENBQUNzQyxVQUFVcEMsc0JBQ3hCO3NDQUNHLDRFQUFDbUM7Z0NBQUtDLFVBQVVBO2dDQUFzQkYsbUJBQW1CQTsrQkFBMUJsQzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNbEQsOERBQUNiLG1EQUFPQTs7Ozs7Ozs7Ozs7QUFHcEIsRUFFQSxrQkFBa0I7Q0FDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0dBOUpnQmU7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2J1aWxkaW5nL3BhcnRzdWkuanM/MjhiMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldFBhcnRRdWVyeSB9IGZyb20gJy4vcXVlcmllcy5qcyc7XHJcbmltcG9ydCB7IENvcm5lcnMgfSBmcm9tICcuLi91aS9jb3JuZXJzLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJ0c1NlbGVjdG9yKHsgY2F0ZWdvcnksIHBhcnRzLCBoYW5kbGVDbGljaywgY3VycmVudFNlbGVjdCB9KSB7XHJcblxyXG4gICAgY29uc3QgcGFydEhlYWRlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMngxIHBiLTJcIj4gXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LVtyZ2IoMjAwLDIwMCwyMDApXVwiPntjYXRlZ29yeX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwYXJ0RWxlbWVudHMgPSBwYXJ0cy5tYXAoIChwYXJ0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKHBhcnQgPT09IGN1cnJlbnRTZWxlY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleC1ncm93IGJhc2lzLTAgYmctW3JnYig3Nyw5OCwxMjcpXVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHBhcnQpfT4gey8qIGNoYW5nZSBob3ZlciB0byBncmFkaWVudCBwbGVhc2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1jZW50ZXJcIj57cGFydH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleC1ncm93IGJhc2lzLTAgYmctW3JnYigzNSw1MCw2NyldIGhvdmVyOmJnLVtyZ2IoMTIwLDE0OCwxNjIpXVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHBhcnQpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlclwiPntwYXJ0fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qY2F0ZWdvcnkgaGVhZGluZyovfVxyXG4gICAgICAgICAgICB7cGFydEhlYWRlcn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKnBhcnRzIGluIGNhdGVnb3J5Ki99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICAgICAge3BhcnRFbGVtZW50c31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFydHNCdWlsZGVyKHsgY3VycmVudFNlbGVjdCwgY3VycmVudE1lbnUsIGN1cnJlbnRQYXJ0LCBzZXRDdXJyZW50UGFydCwgY3VycmVudEVxdWlwcGVkLCBzZXRDdXJyZW50RXF1aXBwZWQgfSkge1xyXG5cclxuICAgIGNvbnN0IFtyZW5kZXJlZERhdGEsIHNldFJlbmRlcmVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4geyAvL2NhbiBtb3ZlIHRoaXMgdG8gdXNlRWZmZWN0IGluIHBhZ2UuanMgdG8gdHJ1bHkgcHJlbG9hZFxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGdldFBhcnRRdWVyeShjdXJyZW50U2VsZWN0KTsgLy90aGlzIGhhcyB0byBiZSBhbiBhd2FpdCBkZXNwaXRlIGdyYWJiaW5nIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICBjb25zdCBsb2NhbFF1ZXJ5ID0gY3VycmVudE1lbnUudG9Mb3dlckNhc2UoKSArIFwiX2RhdGFcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vREFUQSBOT1QgUkVDSUVWSU5HIElOIERBVEEsIFRFU1QgRk9SIFRIQVRcclxuICAgICAgICAgICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxRdWVyeSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYocmF3RGF0YVtpXVsndHlwZSddID09PSBxdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChKU09OLnN0cmluZ2lmeShyYXdEYXRhW2ldKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRSZW5kZXJlZERhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBjaGVja0VxdWlwcGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50U2VsZWN0KSAhPSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50RXF1aXBwZWQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50U2VsZWN0KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja0VxdWlwcGVkKCk7XHJcblxyXG4gICAgfSwgW2N1cnJlbnRTZWxlY3RdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBFcXVpcHBhYmxlKHtwYXJ0LCBjaGFuZ2VDdXJyZW50RXF1aXBwZWR9KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYocGFydFsnbmFtZSddID09PSBjdXJyZW50RXF1aXBwZWRbJ25hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0zLzQgYm9yZGVyLXdoaXRlIGJvcmRlci0yIGJvdHRvbS0wIGxlZnQtWzUwJV0gLXRyYW5zbGF0ZS14LVs1MCVdIGhvdmVyOmN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KGV2ZW50KSA9PiB7ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IGNvbnNvbGUubG9nKFwiQWxyZWFkeSBlcXVpcHBlZFwiKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXF1aXBwZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0zLzQgYm9yZGVyLXdoaXRlIGJvcmRlci0yIGJvdHRvbS0wIGxlZnQtWzUwJV0gLXRyYW5zbGF0ZS14LVs1MCVdIGhvdmVyOmN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KGV2ZW50KSA9PiB7ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7ICBjaGFuZ2VDdXJyZW50RXF1aXBwZWQocGFydCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVxdWlwIFBhcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctMy80IGJvcmRlci13aGl0ZSBib3JkZXItMiBib3R0b20tMCBsZWZ0LVs1MCVdIC10cmFuc2xhdGUteC1bNTAlXSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eyhldmVudCkgPT4ge2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAgY2hhbmdlQ3VycmVudEVxdWlwcGVkKHBhcnQpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVxdWlwIFBhcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50U2VsZWN0LCBKU09OLnN0cmluZ2lmeShjdXJyZW50RXF1aXBwZWQpKTtcclxuICAgICAgICBpZihjdXJyZW50RXF1aXBwZWRbJ3R5cGUnXSAhPT0gY3VycmVudFNlbGVjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJyZW50RXF1aXBwZWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50RXF1aXBwZWQocGFydCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRFcXVpcHBlZChwYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhcnQocGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUGFydCh7IHBhcnREYXRhLCBpbmRleCwgY2hhbmdlQ3VycmVudFBhcnQgfSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnQgPSBKU09OLnBhcnNlKHBhcnREYXRhKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYoY3VycmVudFBhcnRbJ25hbWUnXT09PXBhcnRbJ25hbWUnXSkge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgcHktMjAgbXgtMTAgbXktMiBiZy1bcmdiKDEwMSwxMTcsMTMxKV1cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnRbJ25hbWUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVxdWlwcGFibGUgcGFydD17cGFydH0gY2hhbmdlQ3VycmVudEVxdWlwcGVkPXtjaGFuZ2VDdXJyZW50RXF1aXBwZWR9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgcHktMjAgbXgtMTAgbXktMiBiZy1bcmdiKDg2LDEwNiwxMzUpXSBob3ZlcjpiZy1bcmdiKDEwMSwxMTcsMTMxKV1cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnRbJ25hbWUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVxdWlwcGFibGUgcGFydD17cGFydH0gY2hhbmdlQ3VycmVudEVxdWlwcGVkPXtjaGFuZ2VDdXJyZW50RXF1aXBwZWR9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oIC8vbWFrZSBkaXYgYmFja2dyb3VuZCBhIGdyYWRpZW50XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tY3VzdG9tLWdyYWRpZW50LXN0YXJ0IHZpYS1jdXN0b20tZ3JhZGllbnQtbWlkIHRvLWN1c3RvbS1ncmFkaWVudC1lbmQgcmVsYXRpdmVcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIGgtZnVsbCBtYXgtaC1bNzV2aF0gbm8tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWREYXRhLm1hcCgocGFydERhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnQgcGFydERhdGE9e3BhcnREYXRhfSBrZXk9e2luZGV4fSBjaGFuZ2VDdXJyZW50UGFydD17Y2hhbmdlQ3VycmVudFBhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvcm5lcnMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vY2FjaGUgcGFydHMgaWRlYVxyXG4vKmxldCBjYWNoZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgIC8vIEl0ZW0gaXMgZm91bmQgaW4gdGhlIGNhY2hlLCByZXR1cm4gaXRcclxuICAgIHJldHVybiBjYWNoZVtrZXldO1xyXG4gIH1cclxuXHJcbiAgLy8gSXRlbSBpcyBub3QgZm91bmQgaW4gdGhlIGNhY2hlLCByZXRyaWV2ZSBpdCBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAvLyBTdG9yZSB0aGUgaXRlbSBpbiB0aGUgY2FjaGVcclxuICBjYWNoZVtrZXldID0gaXRlbTtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbi8vIEhhbmRsZSBzdG9yYWdlIGV2ZW50cyB0byB1cGRhdGUgdGhlIGNhY2hlXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgaXRlbSBmcm9tIHRoZSBjYWNoZSBpZiBpdCBpcyB1cGRhdGVkIG9yIHJlbW92ZWQgaW4gbG9jYWxTdG9yYWdlXHJcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgIGRlbGV0ZSBjYWNoZVtrZXldO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBVc2FnZSBleGFtcGxlXHJcbmNvbnN0IHZhbHVlMSA9IGdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKCdpdGVtMScpOyAvLyBSZXRyaWV2ZXMgJ2l0ZW0xJyBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgc3RvcmVzIGl0IGluIHRoZSBjYWNoZVxyXG5jb25zdCB2YWx1ZTIgPSBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgnaXRlbTInKTsgLy8gUmV0cmlldmVzICdpdGVtMicgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIHN0b3JlcyBpdCBpbiB0aGUgY2FjaGVcclxuXHJcbi8vIFVwZGF0ZSAnaXRlbTEnIGluIGxvY2FsU3RvcmFnZVxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbTEnLCAnbmV3IHZhbHVlJyk7XHJcblxyXG5jb25zdCB1cGRhdGVkVmFsdWUxID0gZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoJ2l0ZW0xJyk7IC8vIFJldHJpZXZlcyB0aGUgdXBkYXRlZCB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgdXBkYXRlcyB0aGUgY2FjaGVcclxuKi8iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRQYXJ0UXVlcnkiLCJDb3JuZXJzIiwiUGFydHNTZWxlY3RvciIsImNhdGVnb3J5IiwicGFydHMiLCJoYW5kbGVDbGljayIsImN1cnJlbnRTZWxlY3QiLCJwYXJ0SGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYXJ0RWxlbWVudHMiLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJvbkNsaWNrIiwiUGFydHNCdWlsZGVyIiwiY3VycmVudE1lbnUiLCJjdXJyZW50UGFydCIsInNldEN1cnJlbnRQYXJ0IiwiY3VycmVudEVxdWlwcGVkIiwic2V0Q3VycmVudEVxdWlwcGVkIiwicmVuZGVyZWREYXRhIiwic2V0UmVuZGVyZWREYXRhIiwiZmV0Y2hEYXRhIiwicXVlcnkiLCJsb2NhbFF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJyYXdEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJpIiwibGVuZ3RoIiwicHVzaCIsInN0cmluZ2lmeSIsImNoZWNrRXF1aXBwZWQiLCJFcXVpcHBhYmxlIiwiY2hhbmdlQ3VycmVudEVxdWlwcGVkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwibG9nIiwicCIsImVycm9yIiwic2V0SXRlbSIsImNoYW5nZUN1cnJlbnRQYXJ0IiwiUGFydCIsInBhcnREYXRhIiwibGkiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/building/partsui.js\n"));

/***/ })

});