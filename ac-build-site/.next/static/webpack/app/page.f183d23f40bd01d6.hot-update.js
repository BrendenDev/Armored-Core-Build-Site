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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PartsBuilder: function() { return /* binding */ PartsBuilder; },\n/* harmony export */   \"default\": function() { return /* binding */ Assembly; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db.js */ \"(app-client)/./app/building/db.js\");\n/* __next_internal_client_entry_do_not_use__ PartsBuilder,default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nfunction PartsOverview(param) {\n    let { category, parts, handleClick } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-[rgb(200,200,200)] bg-[rgb(55,69,86)] pl-4\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 9,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part1, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-[0.15rem] border-2 border-[rgb(52,64,80)] bg-[rgb(54,72,97)] hover:bg-[rgb(120,148,162)]\",\n            onClick: ()=>handleClick(category, part1),\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"pl-10 py-2\",\n                    children: part1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, index, true, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-6\",\n        children: [\n            partHeader,\n            partElements\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsOverview;\nfunction PartsSelector(param) {\n    let { category, parts, handleClick, currentSelect } = param;\n    const partHeader = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-2x1 pb-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-center text-[rgb(200,200,200)]\",\n            children: category\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n    const partElements = parts.map((part1, index)=>{\n        if (part1 === currentSelect) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow basis-0 bg-[rgb(120,148,162)]\",\n                onClick: ()=>handleClick(part1),\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"py-2 text-center\",\n                        children: part1\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, this);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow basis-0 bg-[rgb(35,50,67)] hover:bg-[rgb(120,148,162)]\",\n                onClick: ()=>handleClick(part1),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"py-2 text-center\",\n                    children: part1\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, this);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pb-6\",\n        children: [\n            partHeader,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-evenly\",\n                children: partElements\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}\n_c1 = PartsSelector;\nfunction PartsBuilder(param) {\n    let { currentSelect, currentMenu } = param;\n    _s();\n    const [renderedData, setRenderedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const query = await (0,_db_js__WEBPACK_IMPORTED_MODULE_2__.getPartQuery)(currentSelect, currentMenu);\n            const localQuery = currentMenu + \"_data\";\n            //DATA NOT RECIEVING IN DATA, TEST FOR THAT\n            const rawData = localStorage.getItem(localQuery);\n            const data = [];\n            for(part in rawData){\n                const partSpecs = JSON.parse(part);\n                data.push(partSpecs[\"name\"]);\n            }\n            setRenderedData(data);\n        };\n        fetchData();\n    }, [\n        currentSelect\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full border border-gray-300 rounded overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"overflow-y-auto h-full max-h-[75vh]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-none p-0\",\n                children: renderedData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"text-center py-20\",\n                        children: item\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 103,\n                        columnNumber: 29\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                lineNumber: 100,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 99,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, this);\n}\n_s(PartsBuilder, \"Y++HhU481FnkrX2x8MyBRt6t0Ew=\");\n_c2 = PartsBuilder;\nfunction Assembly() {\n    _s1();\n    const partCategories = [\n        {\n            category: \"UNIT\",\n            parts: [\n                \"R-ARM UNIT\",\n                \"L-ARM UNIT\",\n                \"R-BACK UNIT\",\n                \"L-BACK UNIT\"\n            ]\n        },\n        {\n            category: \"FRAME\",\n            parts: [\n                \"HEAD\",\n                \"CORE\",\n                \"ARMS\",\n                \"LEGS\"\n            ]\n        },\n        {\n            category: \"INNER\",\n            parts: [\n                \"BOOSTER\",\n                \"FCS\",\n                \"GENERATOR\"\n            ]\n        },\n        {\n            category: \"EXPANSION\",\n            parts: [\n                \"EXPANSION\"\n            ]\n        }\n    ];\n    //eventually change these to localstorage so we can keep the person's last state\n    const [currentSelect, setcurrentSelect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function changePart(newPart) {\n        setcurrentSelect(newPart);\n    }\n    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"default\");\n    function changeMenu(menuClicked, newPart) {\n        setMenu(menuClicked);\n        setcurrentSelect(newPart);\n    }\n    if (menu === \"default\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: partCategories.map((part1)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsOverview, {\n                        category: part1.category,\n                        parts: part1.parts,\n                        handleClick: changeMenu\n                    }, part1.category, false, {\n                        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                        lineNumber: 155,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false);\n            })\n        }, void 0, false);\n    } else {\n        const currentParts = partCategories.find((part1)=>part1.category === menu).parts; //find object category of menu, and then retrieve parts in that object\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-1/2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsSelector, {\n                    category: menu,\n                    parts: currentParts,\n                    handleClick: changePart,\n                    currentSelect: currentSelect\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 167,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PartsBuilder, {\n                    currentSelect: currentSelect,\n                    currentMenu: menu\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n                    lineNumber: 168,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\building\\\\assembly.js\",\n            lineNumber: 166,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s1(Assembly, \"lbmzwRIoknemGz5v09S3Vk+tKLk=\");\n_c3 = Assembly;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"PartsOverview\");\n$RefreshReg$(_c1, \"PartsSelector\");\n$RefreshReg$(_c2, \"PartsBuilder\");\n$RefreshReg$(_c3, \"Assembly\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2J1aWxkaW5nL2Fzc2VtYmx5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ0w7QUFFdkMsU0FBU0csY0FBYyxLQUFnQztRQUFoQyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFLEdBQWhDO0lBRW5CLE1BQU1DLDJCQUNGLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNQLDRFQUFDQztZQUFHRCxXQUFVO3NCQUFtREw7Ozs7Ozs7Ozs7O0lBSTdFLE1BQU1PLGVBQWVOLE1BQU1PLEdBQUcsQ0FBRSxDQUFDQyxPQUFNQztRQUNuQyxxQkFDSSw4REFBQ047WUFBZ0JDLFdBQVU7WUFBOEZNLFNBQVMsSUFBTVQsWUFBWUYsVUFBVVM7O2dCQUFPOzhCQUNqSyw4REFBQ0g7b0JBQUdELFdBQVU7OEJBQWNJOzs7Ozs7O1dBRHRCQzs7Ozs7SUFJbEI7SUFHQSxxQkFDSSw4REFBQ047UUFBSUMsV0FBVTs7WUFFVkY7WUFHQUk7Ozs7Ozs7QUFHYjtLQTFCU1I7QUE0QlQsU0FBU2EsY0FBYyxLQUErQztRQUEvQyxFQUFFWixRQUFRLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFVyxhQUFhLEVBQUUsR0FBL0M7SUFFbkIsTUFBTVYsMkJBQ0YsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUdELFdBQVU7c0JBQXVDTDs7Ozs7Ozs7Ozs7SUFJN0QsTUFBTU8sZUFBZU4sTUFBTU8sR0FBRyxDQUFFLENBQUNDLE9BQU1DO1FBQ25DLElBQUdELFVBQVNJLGVBQWU7WUFDdkIscUJBQ0ksOERBQUNUO2dCQUFnQkMsV0FBVTtnQkFBMENNLFNBQVMsSUFBTVQsWUFBWU87O29CQUFPO2tDQUNuRyw4REFBQ0g7d0JBQUdELFdBQVU7a0NBQW9CSTs7Ozs7OztlQUQ1QkM7Ozs7O1FBSWxCLE9BQ0s7WUFDRCxxQkFDSSw4REFBQ047Z0JBQWdCQyxXQUFVO2dCQUFtRU0sU0FBUyxJQUFNVCxZQUFZTzswQkFDckgsNEVB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InNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRQYXJ0UXVlcnkgfSBmcm9tICcuL2RiLmpzJztcclxuXHJcbmZ1bmN0aW9uIFBhcnRzT3ZlcnZpZXcoeyBjYXRlZ29yeSwgcGFydHMsIGhhbmRsZUNsaWNrIH0pIHsgLy9jYXRlZ29yeSA9IHVuaXQsIGZyYW1lLCBpbm5lciwgb3IgZXhwYW5zaW9uXHJcblxyXG4gICAgY29uc3QgcGFydEhlYWRlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMngxIHBiLTJcIj4gXHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bcmdiKDIwMCwyMDAsMjAwKV0gYmctW3JnYig1NSw2OSw4NildIHBsLTRcIj57Y2F0ZWdvcnl9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcGFydEVsZW1lbnRzID0gcGFydHMubWFwKCAocGFydCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm15LVswLjE1cmVtXSBib3JkZXItMiBib3JkZXItW3JnYig1Miw2NCw4MCldIGJnLVtyZ2IoNTQsNzIsOTcpXSBob3ZlcjpiZy1bcmdiKDEyMCwxNDgsMTYyKV1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhjYXRlZ29yeSwgcGFydCl9PiB7LyogY2hhbmdlIGhvdmVyIHRvIGdyYWRpZW50IHBsZWFzZSAqL31cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwbC0xMCBweS0yXCI+e3BhcnR9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNlwiPlxyXG4gICAgICAgICAgICB7LypjYXRlZ29yeSBoZWFkaW5nKi99XHJcbiAgICAgICAgICAgIHtwYXJ0SGVhZGVyfVxyXG5cclxuICAgICAgICAgICAgey8qcGFydHMgaW4gY2F0ZWdvcnkqL31cclxuICAgICAgICAgICAge3BhcnRFbGVtZW50c31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhcnRzU2VsZWN0b3IoeyBjYXRlZ29yeSwgcGFydHMsIGhhbmRsZUNsaWNrLCBjdXJyZW50U2VsZWN0IH0pIHtcclxuXHJcbiAgICBjb25zdCBwYXJ0SGVhZGVyID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeDEgcGItMlwiPiBcclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtW3JnYigyMDAsMjAwLDIwMCldXCI+e2NhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHBhcnRFbGVtZW50cyA9IHBhcnRzLm1hcCggKHBhcnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYocGFydCA9PT0gY3VycmVudFNlbGVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYmFzaXMtMCBiZy1bcmdiKDEyMCwxNDgsMTYyKV1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwYXJ0KX0+IHsvKiBjaGFuZ2UgaG92ZXIgdG8gZ3JhZGllbnQgcGxlYXNlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJweS0yIHRleHQtY2VudGVyXCI+e3BhcnR9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBiYXNpcy0wIGJnLVtyZ2IoMzUsNTAsNjcpXSBob3ZlcjpiZy1bcmdiKDEyMCwxNDgsMTYyKV1cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwYXJ0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTIgdGV4dC1jZW50ZXJcIj57cGFydH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNlwiPlxyXG4gICAgICAgICAgICB7LypjYXRlZ29yeSBoZWFkaW5nKi99XHJcbiAgICAgICAgICAgIHtwYXJ0SGVhZGVyfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qcGFydHMgaW4gY2F0ZWdvcnkqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICAgICAgICB7cGFydEVsZW1lbnRzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJ0c0J1aWxkZXIoeyBjdXJyZW50U2VsZWN0LCBjdXJyZW50TWVudSB9KSB7XHJcblxyXG4gICAgY29uc3QgW3JlbmRlcmVkRGF0YSwgc2V0UmVuZGVyZWREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgZ2V0UGFydFF1ZXJ5KGN1cnJlbnRTZWxlY3QsIGN1cnJlbnRNZW51KTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxRdWVyeSA9IGN1cnJlbnRNZW51ICsgXCJfZGF0YVwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9EQVRBIE5PVCBSRUNJRVZJTkcgSU4gREFUQSwgVEVTVCBGT1IgVEhBVFxyXG4gICAgICAgICAgICBjb25zdCByYXdEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxRdWVyeSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICAgICAgZm9yKHBhcnQgaW4gcmF3RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydFNwZWNzID0gSlNPTi5wYXJzZShwYXJ0KTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChwYXJ0U3BlY3NbJ25hbWUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRSZW5kZXJlZERhdGEoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtjdXJyZW50U2VsZWN0XSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy15LWF1dG8gaC1mdWxsIG1heC1oLVs3NXZoXVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHktMjBcIj57aXRlbX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZW1ibHkoKSB7XHJcblxyXG4gICAgY29uc3QgcGFydENhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiVU5JVFwiLFxyXG4gICAgICAgICAgcGFydHM6IFtcIlItQVJNIFVOSVRcIiwgXCJMLUFSTSBVTklUXCIsIFwiUi1CQUNLIFVOSVRcIiwgXCJMLUJBQ0sgVU5JVFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwiRlJBTUVcIixcclxuICAgICAgICAgIHBhcnRzOiBbXCJIRUFEXCIsIFwiQ09SRVwiLCBcIkFSTVNcIiwgXCJMRUdTXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJJTk5FUlwiLFxyXG4gICAgICAgICAgcGFydHM6IFtcIkJPT1NURVJcIiwgXCJGQ1NcIiwgXCJHRU5FUkFUT1JcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhdGVnb3J5OiBcIkVYUEFOU0lPTlwiLFxyXG4gICAgICAgICAgcGFydHM6IFtcIkVYUEFOU0lPTlwiXVxyXG4gICAgICAgIH1cclxuICAgIF07XHJcblxyXG4gICAgLy9ldmVudHVhbGx5IGNoYW5nZSB0aGVzZSB0byBsb2NhbHN0b3JhZ2Ugc28gd2UgY2FuIGtlZXAgdGhlIHBlcnNvbidzIGxhc3Qgc3RhdGVcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFNlbGVjdCwgc2V0Y3VycmVudFNlbGVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VQYXJ0KG5ld1BhcnQpIHtcclxuICAgICAgICBzZXRjdXJyZW50U2VsZWN0KG5ld1BhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFttZW51LCBzZXRNZW51XSA9IHVzZVN0YXRlKCdkZWZhdWx0Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTWVudShtZW51Q2xpY2tlZCwgbmV3UGFydCkge1xyXG4gICAgICAgIHNldE1lbnUobWVudUNsaWNrZWQpO1xyXG4gICAgICAgIHNldGN1cnJlbnRTZWxlY3QobmV3UGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWVudSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtwYXJ0Q2F0ZWdvcmllcy5tYXAoKHBhcnQpID0+IHsgLy9tYXAgYWxsIHRoZSBwYXJ0c1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKmJhY2sgYnV0dG9uIGhhbmRsZWVyKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJ0c092ZXJ2aWV3IGtleT17cGFydC5jYXRlZ29yeX0gY2F0ZWdvcnk9e3BhcnQuY2F0ZWdvcnl9IHBhcnRzPXtwYXJ0LnBhcnRzfSBoYW5kbGVDbGljaz17Y2hhbmdlTWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApOyAgXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFydHMgPSBwYXJ0Q2F0ZWdvcmllcy5maW5kKChwYXJ0KSA9PiBwYXJ0LmNhdGVnb3J5ID09PSBtZW51KS5wYXJ0czsgLy9maW5kIG9iamVjdCBjYXRlZ29yeSBvZiBtZW51LCBhbmQgdGhlbiByZXRyaWV2ZSBwYXJ0cyBpbiB0aGF0IG9iamVjdFxyXG4gICAgICAgIHJldHVybiggXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEvMic+XHJcbiAgICAgICAgICAgICAgICA8UGFydHNTZWxlY3RvciBjYXRlZ29yeT17bWVudX0gcGFydHM9e2N1cnJlbnRQYXJ0c30gaGFuZGxlQ2xpY2s9e2NoYW5nZVBhcnR9IGN1cnJlbnRTZWxlY3Q9e2N1cnJlbnRTZWxlY3R9Lz5cclxuICAgICAgICAgICAgICAgIDxQYXJ0c0J1aWxkZXIgY3VycmVudFNlbGVjdD17Y3VycmVudFNlbGVjdH0gY3VycmVudE1lbnU9e21lbnV9Lz5cclxuICAgICAgICAgICAgICAgIHsvKmFkZCBQYXJ0c0J1aWxkZXIgaGVyZSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0UGFydFF1ZXJ5IiwiUGFydHNPdmVydmlldyIsImNhdGVnb3J5IiwicGFydHMiLCJoYW5kbGVDbGljayIsInBhcnRIZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInBhcnRFbGVtZW50cyIsIm1hcCIsInBhcnQiLCJpbmRleCIsIm9uQ2xpY2siLCJQYXJ0c1NlbGVjdG9yIiwiY3VycmVudFNlbGVjdCIsIlBhcnRzQnVpbGRlciIsImN1cnJlbnRNZW51IiwicmVuZGVyZWREYXRhIiwic2V0UmVuZGVyZWREYXRhIiwiZmV0Y2hEYXRhIiwicXVlcnkiLCJsb2NhbFF1ZXJ5IiwicmF3RGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhIiwicGFydFNwZWNzIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsInVsIiwiaXRlbSIsImxpIiwiQXNzZW1ibHkiLCJwYXJ0Q2F0ZWdvcmllcyIsInNldGN1cnJlbnRTZWxlY3QiLCJjaGFuZ2VQYXJ0IiwibmV3UGFydCIsIm1lbnUiLCJzZXRNZW51IiwiY2hhbmdlTWVudSIsIm1lbnVDbGlja2VkIiwiY3VycmVudFBhcnRzIiwiZmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/building/assembly.js\n"));

/***/ })

});