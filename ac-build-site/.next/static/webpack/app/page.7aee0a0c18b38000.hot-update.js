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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PartsBuilder: function() { return /* binding */ PartsBuilder; },\n/* harmony export */   PartsSelector: function() { return /* binding */ PartsSelector; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries.js */ \"(app-client)/./app/building/queries.js\");\n/* harmony import */ var _queries_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_queries_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_corners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/corners.js */ \"(app-client)/./app/ui/corners.js\");\n/* __next_internal_client_entry_do_not_use__ PartsSelector,PartsBuilder auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PartsSelector(param) {\n    let { category, parts, handleClick, currentSelect } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center text-[rgb(200,200,200)]\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part, index)=>{\n        if (part === currentSelect) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow basis-0 bg-[rgb(77,98,127)]\",\n                onClick: ()=>handleClick(part),\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"py-2 text-center\",\n                        children: part\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow basis-0 bg-[rgb(35,50,67)] hover:bg-[rgb(120,148,162)]\",\n                onClick: ()=>handleClick(part),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"py-2 text-center\",\n                    children: part\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 25,\n                    columnNumber: 21\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            partHeader,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-evenly\",\n                children: partElements\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsSelector;\nfunction PartsBuilder(param) {\n    let { currentSelect, currentMenu, currentPart, setCurrentPart, currentEquipped, setCurrentEquipped } = param;\n    _s();\n    const [renderedData, setRenderedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const query = (0,_queries_js__WEBPACK_IMPORTED_MODULE_2__.getPartQuery)(currentSelect); //this has to be an await despite grabbing from local storage\n            const localQuery = currentMenu.toLowerCase() + \"_data\";\n            //DATA NOT RECIEVING IN DATA, TEST FOR THAT\n            const rawData = JSON.parse(localStorage.getItem(localQuery));\n            const data = [];\n            for(let i = 0; i < rawData.length; i++){\n                if (rawData[i][\"type\"] === query) {\n                    data.push(JSON.stringify(rawData[i]));\n                }\n            }\n            setRenderedData(data);\n        };\n        fetchData();\n        const checkEquipped = async ()=>{\n            if (localStorage.getItem(currentSelect) != \"[object Object]\") {\n                setCurrentEquipped(JSON.parse(localStorage.getItem(currentSelect)));\n            }\n        };\n        checkEquipped();\n    }, [\n        currentSelect\n    ]);\n    function Equippable(param) {\n        let { part, changeCurrentEquipped } = param;\n        try {\n            if (part[\"name\"] === currentEquipped[\"name\"]) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                    onClick: (event)=>{\n                        event.stopPropagation();\n                        console.log(\"Already equipped\");\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Equipped\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 87,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 86,\n                    columnNumber: 21\n                }, this);\n            } else {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                    onClick: (event)=>{\n                        event.stopPropagation();\n                        changeCurrentEquipped(part);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Equip Part\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 94,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 93,\n                    columnNumber: 21\n                }, this);\n            }\n        } catch (error) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-3/4 border-white border-2 bottom-0 left-[50%] -translate-x-[50%] hover:cursor-pointer\",\n                onClick: (event)=>{\n                    event.stopPropagation();\n                    changeCurrentEquipped(part);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Equip Part\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 102,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 101,\n                columnNumber: 17\n            }, this);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(currentSelect, JSON.stringify(currentEquipped));\n    }, [\n        currentEquipped\n    ]);\n    function changeCurrentEquipped(part) {\n        setCurrentEquipped(part);\n    }\n    function changeCurrentPart(part) {\n        setCurrentPart(part);\n    }\n    function Part(param) {\n        let { partData, index, changeCurrentPart } = param;\n        const part = JSON.parse(partData);\n        if (currentPart[\"name\"] === part[\"name\"]) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"relative text-center py-20 mx-10 my-2 bg-[rgb(101,117,131)]\",\n                onClick: ()=>changeCurrentPart(part),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: part[\"name\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 129,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Equippable, {\n                        part: part,\n                        changeCurrentEquipped: changeCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 130,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 128,\n                columnNumber: 17\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"relative text-center py-20 mx-10 my-2 bg-[rgb(86,106,135)] hover:bg-[rgb(101,117,131)]\",\n                onClick: ()=>changeCurrentPart(part),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: part[\"name\"]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 137,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Equippable, {\n                        part: part,\n                        changeCurrentEquipped: changeCurrentEquipped\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                        lineNumber: 138,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 136,\n                columnNumber: 17\n            }, this);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-b from-custom-gradient-start via-custom-gradient-mid to-custom-gradient-end relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-auto h-full max-h-[75vh] no-scrollbar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-none p-0\",\n                    children: renderedData.map((partData, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Part, {\n                                partData: partData,\n                                changeCurrentPart: changeCurrentPart\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                                lineNumber: 154,\n                                columnNumber: 32\n                            }, this)\n                        }, void 0, false))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                    lineNumber: 150,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_corners_js__WEBPACK_IMPORTED_MODULE_3__.Corners, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n                lineNumber: 160,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\partsui.js\",\n        lineNumber: 148,\n        columnNumber: 9\n    }, this);\n} //cache parts idea\n /*let cache = {};\r\n\r\nfunction getItemFromLocalStorage(key) {\r\n  if (cache.hasOwnProperty(key)) {\r\n    // Item is found in the cache, return it\r\n    return cache[key];\r\n  }\r\n\r\n  // Item is not found in the cache, retrieve it from localStorage\r\n  const item = localStorage.getItem(key);\r\n\r\n  // Store the item in the cache\r\n  cache[key] = item;\r\n\r\n  return item;\r\n}\r\n\r\n// Handle storage events to update the cache\r\nwindow.addEventListener('storage', (event) => {\r\n  const { key } = event;\r\n  \r\n  // Remove the item from the cache if it is updated or removed in localStorage\r\n  if (cache.hasOwnProperty(key)) {\r\n    delete cache[key];\r\n  }\r\n});\r\n\r\n// Usage example\r\nconst value1 = getItemFromLocalStorage('item1'); // Retrieves 'item1' from localStorage and stores it in the cache\r\nconst value2 = getItemFromLocalStorage('item2'); // Retrieves 'item2' from localStorage and stores it in the cache\r\n\r\n// Update 'item1' in localStorage\r\nlocalStorage.setItem('item1', 'new value');\r\n\r\nconst updatedValue1 = getItemFromLocalStorage('item1'); // Retrieves the updated value from localStorage and updates the cache\r\n*/ \n_s(PartsBuilder, \"vkH3aO/4c08WanxeMXHLCNvWIt4=\");\n_c1 = PartsBuilder;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsSelector\");\n$RefreshReg$(_c1, \"PartsBuilder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL3BhcnRzdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMwQztBQUNFO0FBQ0Q7QUFFcEMsU0FBU0ksY0FBYyxLQUErQztRQUEvQyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUUsR0FBL0M7SUFFMUIsTUFBTUMsMkJBQ0YsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUdELFdBQVU7c0JBQXVDTjs7Ozs7Ozs7Ozs7SUFJN0QsTUFBTVEsZUFBZVAsTUFBTVEsR0FBRyxDQUFFLENBQUNDLE1BQU1DO1FBQ25DLElBQUdELFNBQVNQLGVBQWU7WUFDdkIscUJBQ0ksOERBQUNFO2dCQUFnQkMsV0FBVTtnQkFBd0NNLFNBQVMsSUFBTVYsWUFBWVE7O29CQUFPO2tDQUNqRyw4REFBQ0g7d0JBQUdELFdBQVU7a0NBQW9CSTs7Ozs7OztlQUQ1QkM7Ozs7O1FBSWxCLE9BQ0s7WUFDRCxxQkFDSSw4REFBQ047Z0JBQWdCQyxXQUFVO2dCQUFtRU0sU0FBUyxJQUFNVixZQUFZUTswQkFDckgsNEVBQUNIO29CQUFHRCxXQUFVOzhCQUFvQkk7Ozs7OztlQUQ1QkM7Ozs7O1FBSWxCO0lBQ0o7SUFHQSxxQkFDSSw4REFBQ047O1lBRUlEOzBCQUdELDhEQUFDQztnQkFBSUMsV0FBVTswQkFDVkU7Ozs7Ozs7Ozs7OztBQUlqQjtLQXJDZ0JUO0FBdUNULFNBQVNjLGFBQWEsS0FBZ0c7UUFBaEcsRUFBRVYsYUFBYSxFQUFFVyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFLEdBQWhHOztJQUV6QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHekIsK0NBQVFBLENBQUMsRUFBRTtJQUduREMsZ0RBQVNBLENBQUM7UUFDTixNQUFNeUIsWUFBWTtZQUNkLE1BQU1DLFFBQVF6Qix5REFBWUEsQ0FBQ00sZ0JBQWdCLDZEQUE2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QUNYLDRFQUFDMkM7b0JBQUczQyxXQUFVOzhCQUVOYSxhQUFhVixHQUFHLENBQUMsQ0FBQ3NDLFVBQVVwQyxzQkFDeEI7c0NBQ0csNEVBQUNtQztnQ0FBS0MsVUFBVUE7Z0NBQXNCRixtQkFBbUJBOytCQUExQmxDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQU1sRCw4REFBQ2IsbURBQU9BOzs7Ozs7Ozs7OztBQUdwQixFQUVBLGtCQUFrQjtDQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7R0E1SmdCZTtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYnVpbGRpbmcvcGFydHN1aS5qcz8yOGIyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0UGFydFF1ZXJ5IH0gZnJvbSAnLi9xdWVyaWVzLmpzJztcclxuaW1wb3J0IHsgQ29ybmVycyB9IGZyb20gJy4uL3VpL2Nvcm5lcnMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhcnRzU2VsZWN0b3IoeyBjYXRlZ29yeSwgcGFydHMsIGhhbmRsZUNsaWNrLCBjdXJyZW50U2VsZWN0IH0pIHtcclxuXHJcbiAgICBjb25zdCBwYXJ0SGVhZGVyID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeDEgcGItMlwiPiBcclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtW3JnYigyMDAsMjAwLDIwMCldXCI+e2NhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHBhcnRFbGVtZW50cyA9IHBhcnRzLm1hcCggKHBhcnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYocGFydCA9PT0gY3VycmVudFNlbGVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYmFzaXMtMCBiZy1bcmdiKDc3LDk4LDEyNyldXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socGFydCl9PiB7LyogY2hhbmdlIGhvdmVyIHRvIGdyYWRpZW50IHBsZWFzZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHktMiB0ZXh0LWNlbnRlclwiPntwYXJ0fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYmFzaXMtMCBiZy1bcmdiKDM1LDUwLDY3KV0gaG92ZXI6YmctW3JnYigxMjAsMTQ4LDE2MildXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socGFydCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJweS0yIHRleHQtY2VudGVyXCI+e3BhcnR9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LypjYXRlZ29yeSBoZWFkaW5nKi99XHJcbiAgICAgICAgICAgIHtwYXJ0SGVhZGVyfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qcGFydHMgaW4gY2F0ZWdvcnkqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICAgICAgICB7cGFydEVsZW1lbnRzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJ0c0J1aWxkZXIoeyBjdXJyZW50U2VsZWN0LCBjdXJyZW50TWVudSwgY3VycmVudFBhcnQsIHNldEN1cnJlbnRQYXJ0LCBjdXJyZW50RXF1aXBwZWQsIHNldEN1cnJlbnRFcXVpcHBlZCB9KSB7XHJcblxyXG4gICAgY29uc3QgW3JlbmRlcmVkRGF0YSwgc2V0UmVuZGVyZWREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7IC8vY2FuIG1vdmUgdGhpcyB0byB1c2VFZmZlY3QgaW4gcGFnZS5qcyB0byB0cnVseSBwcmVsb2FkXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gZ2V0UGFydFF1ZXJ5KGN1cnJlbnRTZWxlY3QpOyAvL3RoaXMgaGFzIHRvIGJlIGFuIGF3YWl0IGRlc3BpdGUgZ3JhYmJpbmcgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUXVlcnkgPSBjdXJyZW50TWVudS50b0xvd2VyQ2FzZSgpICsgXCJfZGF0YVwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9EQVRBIE5PVCBSRUNJRVZJTkcgSU4gREFUQSwgVEVTVCBGT1IgVEhBVFxyXG4gICAgICAgICAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYXdEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyYXdEYXRhW2ldWyd0eXBlJ10gPT09IHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKEpTT04uc3RyaW5naWZ5KHJhd0RhdGFbaV0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVkRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrRXF1aXBwZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRTZWxlY3QpICE9IFwiW29iamVjdCBPYmplY3RdXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRFcXVpcHBlZChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRTZWxlY3QpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZWNrRXF1aXBwZWQoKTtcclxuXHJcblxyXG4gICAgfSwgW2N1cnJlbnRTZWxlY3RdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBFcXVpcHBhYmxlKHtwYXJ0LCBjaGFuZ2VDdXJyZW50RXF1aXBwZWR9KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYocGFydFsnbmFtZSddID09PSBjdXJyZW50RXF1aXBwZWRbJ25hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0zLzQgYm9yZGVyLXdoaXRlIGJvcmRlci0yIGJvdHRvbS0wIGxlZnQtWzUwJV0gLXRyYW5zbGF0ZS14LVs1MCVdIGhvdmVyOmN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KGV2ZW50KSA9PiB7ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IGNvbnNvbGUubG9nKFwiQWxyZWFkeSBlcXVpcHBlZFwiKTt9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXF1aXBwZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0zLzQgYm9yZGVyLXdoaXRlIGJvcmRlci0yIGJvdHRvbS0wIGxlZnQtWzUwJV0gLXRyYW5zbGF0ZS14LVs1MCVdIGhvdmVyOmN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KGV2ZW50KSA9PiB7ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7ICBjaGFuZ2VDdXJyZW50RXF1aXBwZWQocGFydCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVxdWlwIFBhcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctMy80IGJvcmRlci13aGl0ZSBib3JkZXItMiBib3R0b20tMCBsZWZ0LVs1MCVdIC10cmFuc2xhdGUteC1bNTAlXSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eyhldmVudCkgPT4ge2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAgY2hhbmdlQ3VycmVudEVxdWlwcGVkKHBhcnQpO319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVxdWlwIFBhcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50U2VsZWN0LCBKU09OLnN0cmluZ2lmeShjdXJyZW50RXF1aXBwZWQpKTtcclxuICAgIH0sIFtjdXJyZW50RXF1aXBwZWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50RXF1aXBwZWQocGFydCkge1xyXG4gICAgICAgIHNldEN1cnJlbnRFcXVpcHBlZChwYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhcnQocGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUGFydCh7IHBhcnREYXRhLCBpbmRleCwgY2hhbmdlQ3VycmVudFBhcnQgfSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnQgPSBKU09OLnBhcnNlKHBhcnREYXRhKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYoY3VycmVudFBhcnRbJ25hbWUnXT09PXBhcnRbJ25hbWUnXSkge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgcHktMjAgbXgtMTAgbXktMiBiZy1bcmdiKDEwMSwxMTcsMTMxKV1cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnRbJ25hbWUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVxdWlwcGFibGUgcGFydD17cGFydH0gY2hhbmdlQ3VycmVudEVxdWlwcGVkPXtjaGFuZ2VDdXJyZW50RXF1aXBwZWR9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1jZW50ZXIgcHktMjAgbXgtMTAgbXktMiBiZy1bcmdiKDg2LDEwNiwxMzUpXSBob3ZlcjpiZy1bcmdiKDEwMSwxMTcsMTMxKV1cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VDdXJyZW50UGFydChwYXJ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3BhcnRbJ25hbWUnXX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPEVxdWlwcGFibGUgcGFydD17cGFydH0gY2hhbmdlQ3VycmVudEVxdWlwcGVkPXtjaGFuZ2VDdXJyZW50RXF1aXBwZWR9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oIC8vbWFrZSBkaXYgYmFja2dyb3VuZCBhIGdyYWRpZW50XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tY3VzdG9tLWdyYWRpZW50LXN0YXJ0IHZpYS1jdXN0b20tZ3JhZGllbnQtbWlkIHRvLWN1c3RvbS1ncmFkaWVudC1lbmQgcmVsYXRpdmVcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteS1hdXRvIGgtZnVsbCBtYXgtaC1bNzV2aF0gbm8tc2Nyb2xsYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWREYXRhLm1hcCgocGFydERhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcnQgcGFydERhdGE9e3BhcnREYXRhfSBrZXk9e2luZGV4fSBjaGFuZ2VDdXJyZW50UGFydD17Y2hhbmdlQ3VycmVudFBhcnR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENvcm5lcnMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vY2FjaGUgcGFydHMgaWRlYVxyXG4vKmxldCBjYWNoZSA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgIC8vIEl0ZW0gaXMgZm91bmQgaW4gdGhlIGNhY2hlLCByZXR1cm4gaXRcclxuICAgIHJldHVybiBjYWNoZVtrZXldO1xyXG4gIH1cclxuXHJcbiAgLy8gSXRlbSBpcyBub3QgZm91bmQgaW4gdGhlIGNhY2hlLCByZXRyaWV2ZSBpdCBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG5cclxuICAvLyBTdG9yZSB0aGUgaXRlbSBpbiB0aGUgY2FjaGVcclxuICBjYWNoZVtrZXldID0gaXRlbTtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn1cclxuXHJcbi8vIEhhbmRsZSBzdG9yYWdlIGV2ZW50cyB0byB1cGRhdGUgdGhlIGNhY2hlXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xyXG4gIFxyXG4gIC8vIFJlbW92ZSB0aGUgaXRlbSBmcm9tIHRoZSBjYWNoZSBpZiBpdCBpcyB1cGRhdGVkIG9yIHJlbW92ZWQgaW4gbG9jYWxTdG9yYWdlXHJcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgIGRlbGV0ZSBjYWNoZVtrZXldO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBVc2FnZSBleGFtcGxlXHJcbmNvbnN0IHZhbHVlMSA9IGdldEl0ZW1Gcm9tTG9jYWxTdG9yYWdlKCdpdGVtMScpOyAvLyBSZXRyaWV2ZXMgJ2l0ZW0xJyBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgc3RvcmVzIGl0IGluIHRoZSBjYWNoZVxyXG5jb25zdCB2YWx1ZTIgPSBnZXRJdGVtRnJvbUxvY2FsU3RvcmFnZSgnaXRlbTInKTsgLy8gUmV0cmlldmVzICdpdGVtMicgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIHN0b3JlcyBpdCBpbiB0aGUgY2FjaGVcclxuXHJcbi8vIFVwZGF0ZSAnaXRlbTEnIGluIGxvY2FsU3RvcmFnZVxyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbTEnLCAnbmV3IHZhbHVlJyk7XHJcblxyXG5jb25zdCB1cGRhdGVkVmFsdWUxID0gZ2V0SXRlbUZyb21Mb2NhbFN0b3JhZ2UoJ2l0ZW0xJyk7IC8vIFJldHJpZXZlcyB0aGUgdXBkYXRlZCB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZSBhbmQgdXBkYXRlcyB0aGUgY2FjaGVcclxuKi8iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRQYXJ0UXVlcnkiLCJDb3JuZXJzIiwiUGFydHNTZWxlY3RvciIsImNhdGVnb3J5IiwicGFydHMiLCJoYW5kbGVDbGljayIsImN1cnJlbnRTZWxlY3QiLCJwYXJ0SGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYXJ0RWxlbWVudHMiLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJvbkNsaWNrIiwiUGFydHNCdWlsZGVyIiwiY3VycmVudE1lbnUiLCJjdXJyZW50UGFydCIsInNldEN1cnJlbnRQYXJ0IiwiY3VycmVudEVxdWlwcGVkIiwic2V0Q3VycmVudEVxdWlwcGVkIiwicmVuZGVyZWREYXRhIiwic2V0UmVuZGVyZWREYXRhIiwiZmV0Y2hEYXRhIiwicXVlcnkiLCJsb2NhbFF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJyYXdEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhdGEiLCJpIiwibGVuZ3RoIiwicHVzaCIsInN0cmluZ2lmeSIsImNoZWNrRXF1aXBwZWQiLCJFcXVpcHBhYmxlIiwiY2hhbmdlQ3VycmVudEVxdWlwcGVkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25zb2xlIiwibG9nIiwicCIsImVycm9yIiwic2V0SXRlbSIsImNoYW5nZUN1cnJlbnRQYXJ0IiwiUGFydCIsInBhcnREYXRhIiwibGkiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/building/partsui.js\n"));

/***/ })

});