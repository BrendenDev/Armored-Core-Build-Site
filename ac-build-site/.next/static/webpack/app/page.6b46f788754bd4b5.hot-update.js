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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PartsBuilder: function() { return /* binding */ PartsBuilder; },\n/* harmony export */   PartsSelector: function() { return /* binding */ PartsSelector; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries.js */ \"(app-client)/./app/building/queries.js\");\n/* harmony import */ var _ui_corners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/corners.js */ \"(app-client)/./app/ui/corners.js\");\n/* __next_internal_client_entry_do_not_use__ PartsSelector,PartsBuilder auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PartsSelector(param) {\n    let { category, parts, handleClick, currentSelect } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center text-[rgb(200,200,200)]\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part, index)=>{\n        if (part === currentSelect) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow basis-0 bg-[rgb(77,98,127)]\",\n                onClick: ()=>handleClick(part),\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"py-2 text-center\",\n                        children: part\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow basis-0 bg-[rgb(35,50,67)] hover:bg-[rgb(120,148,162)]\",\n                onClick: ()=>handleClick(part),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"py-2 text-center\",\n                    children: part\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            partHeader,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-evenly\",\n                children: partElements\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsSelector;\nfunction PartsBuilder(param) {\n    let { currentSelect, currentMenu, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped } = param;\n    _s();\n    const [renderedData, setRenderedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = ()=>{\n            const query = (0,_queries_js__WEBPACK_IMPORTED_MODULE_2__.getPartQuery)(currentSelect); //this has to be an await despite grabbing from local storage\n            const localQuery = currentMenu.toLowerCase() + \"_data\";\n            //DATA NOT RECIEVING IN DATA, TEST FOR THAT\n            const rawData = JSON.parse(localStorage.getItem(localQuery));\n            const data = [];\n            for(let i = 0; i < rawData.length; i++){\n                if (rawData[i][\"type\"] === query) {\n                    data.push(JSON.stringify(rawData[i]));\n                }\n            }\n            setRenderedData(data);\n        };\n        fetchData();\n        const checkEquipped = async ()=>{\n            if (localStorage.getItem(currentSelect) != \"[object Object]\") {\n                setCurrentEquipped(JSON.parse(localStorage.getItem(currentSelect)));\n            }\n        };\n        checkEquipped();\n    }, [\n        currentSelect\n    ]);\n    function Equippable(param) {\n        let { part, changeCurrentEquipped } = param;\n        try {\n            if (part[\"name\"] === currentEquipped[\"name\"]) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                    onClick: (event)=>{\n                        event.stopPropagation();\n                        console.log(\"Already equipped\");\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Equipped\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 86,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 85,\n                    columnNumber: 21\n                }, this);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                    onClick: (event)=>{\n                        event.stopPropagation();\n                        changeCurrentEquipped(part);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Equip Part\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 93,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 92,\n                    columnNumber: 21\n                }, this);\n            }\n        } catch (error) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                onClick: (event)=>{\n                    event.stopPropagation();\n                    changeCurrentEquipped(part);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Equip Part\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 101,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 100,\n                columnNumber: 17\n            }, this);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(currentSelect, JSON.stringify(currentEquipped));\n        if (currentEquipped !== null && currentEquipped[\"type\"] !== currentSelect) {\n            setCurrentPart(currentEquipped);\n        }\n    }, [\n        currentEquipped\n    ]);\n    function changeCurrentEquipped(part) {\n        setCurrentEquipped(part);\n    }\n    function changeCurrentPart(part) {\n        setCurrentPart(part);\n    }\n    function Part(param) {\n        let { partData, index, changeCurrentPart } = param;\n        const part = JSON.parse(partData);\n        if (currentPart[\"name\"] === part[\"name\"]) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"relative text-center py-20 mx-10 my-2 bg-[rgb(101,117,131)]\",\n                onClick: ()=>changeCurrentPart(part),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: part[\"name\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 131,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Equippable, {\n                        part: part,\n                        changeCurrentEquipped: changeCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 132,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 130,\n                columnNumber: 17\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"relative text-center py-20 mx-10 my-2 bg-[rgb(86,106,135)] hover:bg-[rgb(101,117,131)]\",\n                onClick: ()=>changeCurrentPart(part),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: part[\"name\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 139,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Equippable, {\n                        part: part,\n                        changeCurrentEquipped: changeCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 140,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 138,\n                columnNumber: 17\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-b from-custom-gradient-start via-custom-gradient-mid to-custom-gradient-end relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-auto h-full max-h-[75vh] no-scrollbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-none p-0\",\n                    children: renderedData.map((partData, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Part, {\n                                partData: partData,\n                                changeCurrentPart: changeCurrentPart\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                                lineNumber: 156,\n                                columnNumber: 32\n                            }, this)\n                        }, void 0, false))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 152,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_corners_js__WEBPACK_IMPORTED_MODULE_3__.Corners, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 162,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 150,\n        columnNumber: 9\n    }, this);\n} //cache parts idea\n /*let cache = {};\r\n\r\nfunction getItemFromLocalStorage(key) {\r\n  if (cache.hasOwnProperty(key)) {\r\n    // Item is found in the cache, return it\r\n    return cache[key];\r\n  }\r\n\r\n  // Item is not found in the cache, retrieve it from localStorage\r\n  const item = localStorage.getItem(key);\r\n\r\n  // Store the item in the cache\r\n  cache[key] = item;\r\n\r\n  return item;\r\n}\r\n\r\n// Handle storage events to update the cache\r\nwindow.addEventListener('storage', (event) => {\r\n  const { key } = event;\r\n  \r\n  // Remove the item from the cache if it is updated or removed in localStorage\r\n  if (cache.hasOwnProperty(key)) {\r\n    delete cache[key];\r\n  }\r\n});\r\n\r\n// Usage example\r\nconst value1 = getItemFromLocalStorage('item1'); // Retrieves 'item1' from localStorage and stores it in the cache\r\nconst value2 = getItemFromLocalStorage('item2'); // Retrieves 'item2' from localStorage and stores it in the cache\r\n\r\n// Update 'item1' in localStorage\r\nlocalStorage.setItem('item1', 'new value');\r\n\r\nconst updatedValue1 = getItemFromLocalStorage('item1'); // Retrieves the updated value from localStorage and updates the cache\r\n*/ \n_s(PartsBuilder, \"vkH3aO/4c08WanxeMXHLCNvWIt4=\");\n_c1 = PartsBuilder;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsSelector\");\n$RefreshReg$(_c1, \"PartsBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFLakI7SUFJSjtJQUVBLHFCQUNJLDhEQUFDTjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUMyQztvQkFBRzNDLFdBQVU7OEJBRU5hLGFBQWFWLEdBQUcsQ0FBQyxDQUFDc0MsVUFBVXBDLHNCQUN4QjtzQ0FDRyw0RUFBQ21DO2dDQUFLQyxVQUFVQTtnQ0FBc0JGLG1CQUFtQkE7K0JBQTFCbEM7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWxELDhEQUFDYixtREFBT0E7Ozs7Ozs7Ozs7O0FBR3BCLEVBRUEsa0JBQWtCO0NBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTtHQTlKZ0JlO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9idWlsZGluZy9wYXJ0c3VpLmpzPzI4YjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRQYXJ0UXVlcnkgfSBmcm9tICcuL3F1ZXJpZXMuanMnO1xyXG5pbXBvcnQgeyBDb3JuZXJzIH0gZnJvbSAnLi4vdWkvY29ybmVycy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFydHNTZWxlY3Rvcih7IGNhdGVnb3J5LCBwYXJ0cywgaGFuZGxlQ2xpY2ssIGN1cnJlbnRTZWxlY3QgfSkge1xyXG5cclxuICAgIGNvbnN0IHBhcnRIZWFkZXIgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4MSBwYi0yXCI+IFxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1bcmdiKDIwMCwyMDAsMjAwKV1cIj57Y2F0ZWdvcnl9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcGFydEVsZW1lbnRzID0gcGFydHMubWFwKCAocGFydCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZihwYXJ0ID09PSBjdXJyZW50U2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBiYXNpcy0wIGJnLVtyZ2IoNzcsOTgsMTI3KV1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwYXJ0KX0+IHsvKiBjaGFuZ2UgaG92ZXIgdG8gZ3JhZGllbnQgcGxlYXNlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJweS0yIHRleHQtY2VudGVyXCI+e3BhcnR9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBiYXNpcy0wIGJnLVtyZ2IoMzUsNTAsNjcpXSBob3ZlcjpiZy1bcmdiKDEyMCwxNDgsMTYyKV1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwYXJ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1jZW50ZXJcIj57cGFydH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKmNhdGVnb3J5IGhlYWRpbmcqL31cclxuICAgICAgICAgICAge3BhcnRIZWFkZXJ9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LypwYXJ0cyBpbiBjYXRlZ29yeSovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1ldmVubHlcIj5cclxuICAgICAgICAgICAgICAgIHtwYXJ0RWxlbWVudHN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnRzQnVpbGRlcih7IGN1cnJlbnRTZWxlY3QsIGN1cnJlbnRNZW51LCBjdXJyZW50UGFydCwgc2V0Q3VycmVudFBhcnQsIGN1cnJlbnRFcXVpcHBlZCwgc2V0Q3VycmVudEVxdWlwcGVkIH0pIHtcclxuXHJcbiAgICBjb25zdCBbcmVuZGVyZWREYXRhLCBzZXRSZW5kZXJlZERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHsgLy9jYW4gbW92ZSB0aGlzIHRvIHVzZUVmZmVjdCBpbiBwYWdlLmpzIHRvIHRydWx5IHByZWxvYWRcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBnZXRQYXJ0UXVlcnkoY3VycmVudFNlbGVjdCk7IC8vdGhpcyBoYXMgdG8gYmUgYW4gYXdhaXQgZGVzcGl0ZSBncmFiYmluZyBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxRdWVyeSA9IGN1cnJlbnRNZW51LnRvTG93ZXJDYXNlKCkgKyBcIl9kYXRhXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0RBVEEgTk9UIFJFQ0lFVklORyBJTiBEQVRBLCBURVNUIEZPUiBUSEFUXHJcbiAgICAgICAgICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsUXVlcnkpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHJhd0RhdGFbaV1bJ3R5cGUnXSA9PT0gcXVlcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goSlNPTi5zdHJpbmdpZnkocmF3RGF0YVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0UmVuZGVyZWREYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tFcXVpcHBlZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFNlbGVjdCkgIT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEVxdWlwcGVkKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFNlbGVjdCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hlY2tFcXVpcHBlZCgpO1xyXG5cclxuICAgIH0sIFtjdXJyZW50U2VsZWN0XSk7XHJcblxyXG4gICAgZnVuY3Rpb24gRXF1aXBwYWJsZSh7cGFydCwgY2hhbmdlQ3VycmVudEVxdWlwcGVkfSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmKHBhcnRbJ25hbWUnXSA9PT0gY3VycmVudEVxdWlwcGVkWyduYW1lJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctMy80IGJvcmRlci13aGl0ZSBib3JkZXItMiBib3R0b20tMCBsZWZ0LVs1MCVdIC10cmFuc2xhdGUteC1bNTAlXSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eyhldmVudCkgPT4ge2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBjb25zb2xlLmxvZyhcIkFscmVhZHkgZXF1aXBwZWRcIik7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVxdWlwcGVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctMy80IGJvcmRlci13aGl0ZSBib3JkZXItMiBib3R0b20tMCBsZWZ0LVs1MCVdIC10cmFuc2xhdGUteC1bNTAlXSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eyhldmVudCkgPT4ge2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAgY2hhbmdlQ3VycmVudEVxdWlwcGVkKHBhcnQpO319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FcXVpcCBQYXJ0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTMvNCBib3JkZXItd2hpdGUgYm9yZGVyLTIgYm90dG9tLTAgbGVmdC1bNTAlXSAtdHJhbnNsYXRlLXgtWzUwJV0gaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoZXZlbnQpID0+IHtldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgIGNoYW5nZUN1cnJlbnRFcXVpcHBlZChwYXJ0KTt9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5FcXVpcCBQYXJ0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFNlbGVjdCwgSlNPTi5zdHJpbmdpZnkoY3VycmVudEVxdWlwcGVkKSk7XHJcbiAgICAgICAgaWYoY3VycmVudEVxdWlwcGVkICE9PSBudWxsICYmIGN1cnJlbnRFcXVpcHBlZFsndHlwZSddICE9PSBjdXJyZW50U2VsZWN0KSB7IC8vc2V0cyB0aGUgY3VycmVudFBhcnQgKHN0YXQgcHJldmlldykgdG8gdGhlIGVxdWlwcGVkIHBhcnQgd2hlbiB5b3UgY2hhbmdlIHNlbGVjdFxyXG4gICAgICAgICAgICBzZXRDdXJyZW50UGFydChjdXJyZW50RXF1aXBwZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJyZW50RXF1aXBwZWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50RXF1aXBwZWQocGFydCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRFcXVpcHBlZChwYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhcnQocGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUGFydCh7IHBhcnREYXRhLCBpbmRleCwgY2hhbmdlQ3VycmVudFBhcnQgfSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnQgPSBKU09OLnBhcnNlKHBhcnREYXRhKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYoY3VycmVudFBhcnRbJ25hbWUnXT09PXBhcnRbJ25hbWUnXSkge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgcHktMjAgbXgtMTAgbXktMiBiZy1bcmdiKDEwMSwxMTcsMTMxKV1cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnRbJ25hbWUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVxdWlwcGFibGUgcGFydD17cGFydH0gY2hhbmdlQ3VycmVudEVxdWlwcGVkPXtjaGFuZ2VDdXJyZW50RXF1aXBwZWR9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgcHktMjAgbXgtMTAgbXktMiBiZy1bcmdiKDg2LDEwNiwxMzUpXSBob3ZlcjpiZy1bcmdiKDEwMSwxMTcsMTMxKV1cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnRbJ25hbWUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVxdWlwcGFibGUgcGFydD17cGFydH0gY2hhbmdlQ3VycmVudEVxdWlwcGVkPXtjaGFuZ2VDdXJyZW50RXF1aXBwZWR9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oIC8vbWFrZSBkaXYgYmFja2dyb3VuZCBhIGdyYWRpZW50XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tY3VzdG9tLWdyYWRpZW50LXN0YXJ0IHZpYS1jdXN0b20tZ3JhZGllbnQtbWlkIHRvLWN1c3RvbS1ncmFkaWVudC1lbmQgcmVsYXRpdmVcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIGgtZnVsbCBtYXgtaC1bNzV2aF0gbm8tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWREYXRhLm1hcCgocGFydERhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnQgcGFydERhdGE9e3BhcnREYXRhfSBrZXk9e2luZGV4fSBjaGFuZ2VDdXJyZW50UGFydD17Y2hhbmdlQ3VycmVudFBhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvcm5lcnMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vY2FjaGUgcGFydHMgaWRlYVxyXG4vKmxldCBjYWNoZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgIC8vIEl0ZW0gaXMgZm91bmQgaW4gdGhlIGNhY2hlLCByZXR1cm4gaXRcclxuICAgIHJldHVybiBjYWNoZVtrZXldO1xyXG4gIH1cclxuXHJcbiAgLy8gSXRlbSBpcyBub3QgZm91bmQgaW4gdGhlIGNhY2hlLCByZXRyaWV2ZSBpdCBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAvLyBTdG9yZSB0aGUgaXRlbSBpbiB0aGUgY2FjaGVcclxuICBjYWNoZVtrZXldID0gaXRlbTtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbi8vIEhhbmRsZSBzdG9yYWdlIGV2ZW50cyB0byB1cGRhdGUgdGhlIGNhY2hlXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgaXRlbSBmcm9tIHRoZSBjYWNoZSBpZiBpdCBpcyB1cGRhdGVkIG9yIHJlbW92ZWQgaW4gbG9jYWxTdG9yYWdlXHJcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgIGRlbGV0ZSBjYWNoZVtrZXldO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBVc2FnZSBleGFtcGxlXHJcbmNvbnN0IHZhbHVlMSA9IGdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKCdpdGVtMScpOyAvLyBSZXRyaWV2ZXMgJ2l0ZW0xJyBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgc3RvcmVzIGl0IGluIHRoZSBjYWNoZVxyXG5jb25zdCB2YWx1ZTIgPSBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgnaXRlbTInKTsgLy8gUmV0cmlldmVzICdpdGVtMicgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIHN0b3JlcyBpdCBpbiB0aGUgY2FjaGVcclxuXHJcbi8vIFVwZGF0ZSAnaXRlbTEnIGluIGxvY2FsU3RvcmFnZVxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbTEnLCAnbmV3IHZhbHVlJyk7XHJcblxyXG5jb25zdCB1cGRhdGVkVmFsdWUxID0gZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoJ2l0ZW0xJyk7IC8vIFJldHJpZXZlcyB0aGUgdXBkYXRlZCB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgdXBkYXRlcyB0aGUgY2FjaGVcclxuKi8iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRQYXJ0UXVlcnkiLCJDb3JuZXJzIiwiUGFydHNTZWxlY3RvciIsImNhdGVnb3J5IiwicGFydHMiLCJoYW5kbGVDbGljayIsImN1cnJlbnRTZWxlY3QiLCJwYXJ0SGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYXJ0RWxlbWVudHMiLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJvbkNsaWNrIiwiUGFydHNCdWlsZGVyIiwiY3VycmVudE1lbnUiLCJjdXJyZW50UGFydCIsInNldEN1cnJlbnRQYXJ0IiwiY3VycmVudEVxdWlwcGVkIiwic2V0Q3VycmVudEVxdWlwcGVkIiwicmVuZGVyZWREYXRhIiwic2V0UmVuZGVyZWREYXRhIiwiZmV0Y2hEYXRhIiwicXVlcnkiLCJsb2NhbFF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJyYXdEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJpIiwibGVuZ3RoIiwicHVzaCIsInN0cmluZ2lmeSIsImNoZWNrRXF1aXBwZWQiLCJFcXVpcHBhYmxlIiwiY2hhbmdlQ3VycmVudEVxdWlwcGVkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwibG9nIiwicCIsImVycm9yIiwic2V0SXRlbSIsImNoYW5nZUN1cnJlbnRQYXJ0IiwiUGFydCIsInBhcnREYXRhIiwibGkiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/building/partsui.js\n"));

/***/ })

});