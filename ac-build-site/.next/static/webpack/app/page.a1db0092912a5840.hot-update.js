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

/***/ "(app-client)/./app/statUI/statbox.js":
/*!*******************************!*\
  !*** ./app/statUI/statbox.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FrameStats: function() { return /* binding */ FrameStats; },\n/* harmony export */   PartsStats: function() { return /* binding */ PartsStats; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ PartsStats,FrameStats auto */ \nvar _s = $RefreshSig$();\n\nfunction PartsStats(param) {\n    let { currentMenu, currentSelect, currentPart } = param;\n    function StatsList(currentPart) {\n        function convertToTitleCase(str) {\n            let words = str.split(\"_\");\n            let result = \"\";\n            for(let i = 0; i < words.length; i++){\n                let word = words[i];\n                result += word.charAt(0).toUpperCase() + word.slice(1) + \" \";\n            }\n            return result.trim();\n        }\n        if (currentMenu === \"default\" || currentPart === null) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n        } else {\n            const data = [] //might be better to just make three arrays and then turn it into one and return that instead or even return as three so you can adjust the three separately\n            ;\n            const rawData = currentPart[\"currentPart\"];\n            for (let [key, value] of Object.entries(rawData)){\n                if (key !== \"_id\" && key !== \"type\") {\n                    if (key === \"extra_type\") {\n                        if (value === \"none\") {\n                            value = currentSelect;\n                        }\n                        data.unshift(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: value.toUpperCase()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                lineNumber: 38,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this));\n                    } else if (key === \"name\") {\n                        data.splice(0, 0, /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-[15vh]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                lineNumber: 45,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, this));\n                    } else if (key === \"description\") {\n                        data.splice(1, 0, /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-[40vh]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\",\n                                    children: \"Part Info\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: value\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, this));\n                    } else {\n                        const spec = convertToTitleCase(key);\n                        data.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\",\n                                    children: [\n                                        spec,\n                                        \"\\xa0\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\",\n                                    children: value\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, this));\n                    }\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: data\n            }, void 0, false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatsList, {\n                currentPart: currentPart\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                lineNumber: 83,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n            lineNumber: 82,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsStats;\nfunction FrameStats(param) {\n    let { currentSelect, currentEquipped } = param;\n    _s();\n    const [equippedParts, setEquippedParts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const allParts = [\n        \"R-ARM UNIT\",\n        \"L-ARM UNIT\",\n        \"R-BACK UNIT\",\n        \"L-BACK UNIT\",\n        \"HEAD\",\n        \"CORE\",\n        \"ARMS\",\n        \"LEGS\",\n        \"BOOSTER\",\n        \"FCS\",\n        \"GENERATOR\",\n        \"EXPANSION\"\n    ];\n    const statContributors = {\n        armour_points: [\n            \"armour_points\"\n        ],\n        defensive_performance: [],\n        attitude_stability: [],\n        boost_speed: [],\n        current_load: [\n            \"weight\"\n        ],\n        current_en_load: [\n            \"en_load\"\n        ]\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const frameData = {};\n        allParts.forEach((part)=>{\n            frameData[part] = JSON.parse(localStorage.getItem(part));\n        });\n        setEquippedParts(frameData);\n        setStats({\n            armour_points: 0,\n            defensive_performance: 0,\n            attitude_stability: 0,\n            boost_speed: 0,\n            current_load: 0,\n            current_en_load: 0\n        });\n        const statData = stats; //i don't know what happened here. I just know my brain exploded writing this and I probably won't remember how this works\n        for(let part in frameData){\n            if (frameData[part] !== null && frameData[part] !== \"\") {\n                for (let [spec, value] of Object.entries(frameData[part])){\n                    for(let stat in statContributors){\n                        if (statContributors[stat].includes(spec)) {\n                            //console.log(\"adding \" + spec + \"=\" + value +\" to \" + stat)   \n                            statData[stat] += calculateString(value);\n                        }\n                    }\n                }\n            }\n        }\n        setStats(statData);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentSelect !== null && currentSelect !== \"\") {\n            setStats({\n                armour_points: 0,\n                defensive_performance: 0,\n                attitude_stability: 0,\n                boost_speed: 0,\n                current_load: 0,\n                current_en_load: 0\n            });\n            const frameData = equippedParts;\n            const newEquippedPart = localStorage.getItem(currentSelect);\n            frameData[currentSelect] = newEquippedPart;\n            const statData = stats; //i don't know what happened here. I just know my brain exploded writing this and I probably won't remember how this works\n            for(let part in frameData){\n                if (frameData[part] !== null && frameData[part] !== \"\") {\n                    for (let [spec, value] of Object.entries(frameData[part])){\n                        for(let stat in statContributors){\n                            if (statContributors[stat].includes(spec)) {\n                                //console.log(\"adding \" + spec + \"=\" + value +\" to \" + stat)   \n                                if (statData[stat] !== null) {\n                                    statData[stat] += calculateString(value);\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n            //console.log(statData);\n            setStats(statData);\n            setEquippedParts(frameData);\n        }\n    }, [\n        currentEquipped\n    ]);\n    function calculateString(possibleString) {\n        if (typeof possibleString === \"string\") {\n            const operatorIndex = possibleString.indexOf(\"x\");\n            if (operatorIndex !== -1) {\n                const operand1 = parseFloat(possibleString.substring(0, operatorIndex));\n                const operand2 = parseFloat(possibleString.substring(operatorIndex + 1));\n                const result = operand1 * operand2;\n                return result;\n            }\n        }\n        return parseFloat(possibleString);\n    }\n    function RenderedStats() {\n        const renderedData = [];\n        if (stats !== null && stats !== undefined) {\n            for (let [spec, value] of Object.entries(stats)){\n                renderedData.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        spec,\n                        \": \",\n                        value\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                    lineNumber: 194,\n                    columnNumber: 21\n                }, this));\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: renderedData\n            }, void 0, false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RenderedStats, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n            lineNumber: 211,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(FrameStats, \"ausUfQw1yQwS9T/tWBl+FAdzimw=\");\n_c1 = FrameStats;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsStats\");\n$RefreshReg$(_c1, \"FrameStats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQ2IsOERBQUNIOzt3QkFBR0U7d0JBQUs7d0JBQUdSOzs7Ozs7O1lBRXBCO1lBR0EscUJBQ0k7MEJBQ0s2Qzs7UUFJYjtJQUVKO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNEOzs7Ozs7QUFLYjtHQTlIZ0JqQztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc3RhdFVJL3N0YXRib3guanM/YTllZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQYXJ0c1N0YXRzKHsgY3VycmVudE1lbnUsIGN1cnJlbnRTZWxlY3QsIGN1cnJlbnRQYXJ0IH0pIHtcclxuXHJcbiAgICBmdW5jdGlvbiBTdGF0c0xpc3QoY3VycmVudFBhcnQpIHtcclxuICBcclxuICAgICAgZnVuY3Rpb24gY29udmVydFRvVGl0bGVDYXNlKHN0cikge1xyXG4gICAgICAgIGxldCB3b3JkcyA9IHN0ci5zcGxpdCgnXycpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgd29yZCA9IHdvcmRzW2ldO1xyXG4gICAgICAgICAgcmVzdWx0ICs9IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpICsgJyAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzdWx0LnRyaW0oKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYoY3VycmVudE1lbnUgPT09ICdkZWZhdWx0JyB8fCBjdXJyZW50UGFydCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGVsc2UgeyAvL3RoaXMgb3JnYW5pemF0aW9uIG9mIGVudGVyaW5nIGRhdGEgaXMgcHVyZWx5IGJhc2VkIG9uIGhvdyB0aGUgZGF0YSBpcyBvcmdhbml6ZWQgaW4gdGhlIGRhdGFiYXNlLiB5ZWEsIGkga25vdyB0aGF0J3MgYmFkLiBTdWUgbWUuIGprIHBscyBkb250XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IFtdIC8vbWlnaHQgYmUgYmV0dGVyIHRvIGp1c3QgbWFrZSB0aHJlZSBhcnJheXMgYW5kIHRoZW4gdHVybiBpdCBpbnRvIG9uZSBhbmQgcmV0dXJuIHRoYXQgaW5zdGVhZCBvciBldmVuIHJldHVybiBhcyB0aHJlZSBzbyB5b3UgY2FuIGFkanVzdCB0aGUgdGhyZWUgc2VwYXJhdGVseVxyXG4gICAgICAgIGNvbnN0IHJhd0RhdGEgPSBjdXJyZW50UGFydFsnY3VycmVudFBhcnQnXTtcclxuICAgICAgICBmb3IobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyYXdEYXRhKSkge1xyXG4gICAgICAgICAgaWYoa2V5ICE9PSAnX2lkJyAmJiBrZXkgIT09ICd0eXBlJykge1xyXG4gICAgICAgICAgICBpZihrZXkgPT09ICdleHRyYV90eXBlJykge1xyXG4gICAgICAgICAgICAgIGlmKHZhbHVlID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gY3VycmVudFNlbGVjdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGF0YS51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+e3ZhbHVlLnRvVXBwZXJDYXNlKCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGtleSA9PT0gJ25hbWUnICkge1xyXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKDAsIDAsIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzE1dmhdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt2YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGtleSA9PT0gJ2Rlc2NyaXB0aW9uJykge1xyXG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKDEsIDAsIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzQwdmhdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlBhcnQgSW5mbzwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+e3ZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNwZWMgPSBjb252ZXJ0VG9UaXRsZUNhc2Uoa2V5KTtcclxuICAgICAgICAgICAgICBkYXRhLnB1c2goXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57c3BlY30mbmJzcDs8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPnt2YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICk7XHJcbiAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtkYXRhfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8U3RhdHNMaXN0IGN1cnJlbnRQYXJ0PXtjdXJyZW50UGFydH0vPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRnJhbWVTdGF0cyh7Y3VycmVudFNlbGVjdCwgY3VycmVudEVxdWlwcGVkfSkge1xyXG5cclxuICAgIGNvbnN0IFtlcXVpcHBlZFBhcnRzLCBzZXRFcXVpcHBlZFBhcnRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKCk7IFxyXG4gICAgY29uc3QgYWxsUGFydHMgPSBbXCJSLUFSTSBVTklUXCIsIFwiTC1BUk0gVU5JVFwiLCBcIlItQkFDSyBVTklUXCIsIFwiTC1CQUNLIFVOSVRcIiwgXCJIRUFEXCIsIFwiQ09SRVwiLCBcIkFSTVNcIiwgXCJMRUdTXCIsIFwiQk9PU1RFUlwiLCBcIkZDU1wiLCBcIkdFTkVSQVRPUlwiLCBcIkVYUEFOU0lPTlwiXTtcclxuICAgIGNvbnN0IHN0YXRDb250cmlidXRvcnMgPSB7XHJcbiAgICAgICAgYXJtb3VyX3BvaW50czogWydhcm1vdXJfcG9pbnRzJ10sXHJcbiAgICAgICAgZGVmZW5zaXZlX3BlcmZvcm1hbmNlOiBbXSxcclxuICAgICAgICBhdHRpdHVkZV9zdGFiaWxpdHk6IFtdLFxyXG4gICAgICAgIGJvb3N0X3NwZWVkOiBbXSxcclxuICAgICAgICBjdXJyZW50X2xvYWQ6IFsnd2VpZ2h0J10sXHJcbiAgICAgICAgY3VycmVudF9lbl9sb2FkOiBbJ2VuX2xvYWQnXVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmcmFtZURhdGEgPSB7fTtcclxuICAgICAgICBhbGxQYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiB7XHJcbiAgICAgICAgICAgIGZyYW1lRGF0YVtwYXJ0XSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFydCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEVxdWlwcGVkUGFydHMoZnJhbWVEYXRhKTtcclxuICAgICAgICBzZXRTdGF0cyh7XHJcbiAgICAgICAgICAgIGFybW91cl9wb2ludHM6IDAsXHJcbiAgICAgICAgICAgIGRlZmVuc2l2ZV9wZXJmb3JtYW5jZTogMCxcclxuICAgICAgICAgICAgYXR0aXR1ZGVfc3RhYmlsaXR5OiAwLFxyXG4gICAgICAgICAgICBib29zdF9zcGVlZDogMCxcclxuICAgICAgICAgICAgY3VycmVudF9sb2FkOiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50X2VuX2xvYWQ6IDBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdERhdGEgPSBzdGF0czsgLy9pIGRvbid0IGtub3cgd2hhdCBoYXBwZW5lZCBoZXJlLiBJIGp1c3Qga25vdyBteSBicmFpbiBleHBsb2RlZCB3cml0aW5nIHRoaXMgYW5kIEkgcHJvYmFibHkgd29uJ3QgcmVtZW1iZXIgaG93IHRoaXMgd29ya3NcclxuICAgICAgICAgICAgZm9yKGxldCBwYXJ0IGluIGZyYW1lRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZnJhbWVEYXRhW3BhcnRdICE9PSBudWxsICYmIGZyYW1lRGF0YVtwYXJ0XSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NwZWMsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmcmFtZURhdGFbcGFydF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgc3RhdCBpbiBzdGF0Q29udHJpYnV0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdGF0Q29udHJpYnV0b3JzW3N0YXRdLmluY2x1ZGVzKHNwZWMpKSB7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWRkaW5nIFwiICsgc3BlYyArIFwiPVwiICsgdmFsdWUgK1wiIHRvIFwiICsgc3RhdCkgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0RGF0YVtzdGF0XSArPSBjYWxjdWxhdGVTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHNldFN0YXRzKHN0YXREYXRhKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGN1cnJlbnRTZWxlY3QgIT09IG51bGwgJiYgY3VycmVudFNlbGVjdCAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBzZXRTdGF0cyh7XHJcbiAgICAgICAgICAgICAgICBhcm1vdXJfcG9pbnRzOiAwLFxyXG4gICAgICAgICAgICAgICAgZGVmZW5zaXZlX3BlcmZvcm1hbmNlOiAwLFxyXG4gICAgICAgICAgICAgICAgYXR0aXR1ZGVfc3RhYmlsaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgYm9vc3Rfc3BlZWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X2xvYWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50X2VuX2xvYWQ6IDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lRGF0YSA9IGVxdWlwcGVkUGFydHM7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0VxdWlwcGVkUGFydCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRTZWxlY3QpO1xyXG4gICAgICAgICAgICBmcmFtZURhdGFbY3VycmVudFNlbGVjdF0gPSBuZXdFcXVpcHBlZFBhcnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0RGF0YSA9IHN0YXRzOyAvL2kgZG9uJ3Qga25vdyB3aGF0IGhhcHBlbmVkIGhlcmUuIEkganVzdCBrbm93IG15IGJyYWluIGV4cGxvZGVkIHdyaXRpbmcgdGhpcyBhbmQgSSBwcm9iYWJseSB3b24ndCByZW1lbWJlciBob3cgdGhpcyB3b3Jrc1xyXG4gICAgICAgICAgICBmb3IobGV0IHBhcnQgaW4gZnJhbWVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZihmcmFtZURhdGFbcGFydF0gIT09IG51bGwgJiYgZnJhbWVEYXRhW3BhcnRdICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc3BlYywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGZyYW1lRGF0YVtwYXJ0XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBzdGF0IGluIHN0YXRDb250cmlidXRvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0YXRDb250cmlidXRvcnNbc3RhdF0uaW5jbHVkZXMoc3BlYykpIHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhZGRpbmcgXCIgKyBzcGVjICsgXCI9XCIgKyB2YWx1ZSArXCIgdG8gXCIgKyBzdGF0KSAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0YXREYXRhW3N0YXRdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXREYXRhW3N0YXRdICs9IGNhbGN1bGF0ZVN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHN0YXREYXRhKTtcclxuICAgICAgICAgICAgc2V0U3RhdHMoc3RhdERhdGEpO1xyXG5cclxuICAgICAgICAgICAgc2V0RXF1aXBwZWRQYXJ0cyhmcmFtZURhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgLCBbY3VycmVudEVxdWlwcGVkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlU3RyaW5nKHBvc3NpYmxlU3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwb3NzaWJsZVN0cmluZyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3JJbmRleCA9IHBvc3NpYmxlU3RyaW5nLmluZGV4T2YoJ3gnKTtcclxuICAgICAgICAgICAgaWYgKG9wZXJhdG9ySW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhbmQxID0gcGFyc2VGbG9hdChwb3NzaWJsZVN0cmluZy5zdWJzdHJpbmcoMCwgb3BlcmF0b3JJbmRleCkpO1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYW5kMiA9IHBhcnNlRmxvYXQocG9zc2libGVTdHJpbmcuc3Vic3RyaW5nKG9wZXJhdG9ySW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wZXJhbmQxICogb3BlcmFuZDI7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocG9zc2libGVTdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJlbmRlcmVkU3RhdHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVuZGVyZWREYXRhID0gW107XHJcbiAgICAgICAgaWYoc3RhdHMgIT09IG51bGwgJiYgc3RhdHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IFtzcGVjLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3RhdHMpKSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZERhdGEucHVzaChcclxuICAgICAgICAgICAgICAgICAgICA8cD57c3BlY306IHt2YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyZWREYXRhfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxSZW5kZXJlZFN0YXRzIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxuICAgIFxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUGFydHNTdGF0cyIsImN1cnJlbnRNZW51IiwiY3VycmVudFNlbGVjdCIsImN1cnJlbnRQYXJ0IiwiU3RhdHNMaXN0IiwiY29udmVydFRvVGl0bGVDYXNlIiwic3RyIiwid29yZHMiLCJzcGxpdCIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRyaW0iLCJkYXRhIiwicmF3RGF0YSIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsInVuc2hpZnQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BsaWNlIiwic3BlYyIsInB1c2giLCJzcGFuIiwiRnJhbWVTdGF0cyIsImN1cnJlbnRFcXVpcHBlZCIsImVxdWlwcGVkUGFydHMiLCJzZXRFcXVpcHBlZFBhcnRzIiwic3RhdHMiLCJzZXRTdGF0cyIsImFsbFBhcnRzIiwic3RhdENvbnRyaWJ1dG9ycyIsImFybW91cl9wb2ludHMiLCJkZWZlbnNpdmVfcGVyZm9ybWFuY2UiLCJhdHRpdHVkZV9zdGFiaWxpdHkiLCJib29zdF9zcGVlZCIsImN1cnJlbnRfbG9hZCIsImN1cnJlbnRfZW5fbG9hZCIsImZyYW1lRGF0YSIsImZvckVhY2giLCJwYXJ0IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0YXREYXRhIiwic3RhdCIsImluY2x1ZGVzIiwiY2FsY3VsYXRlU3RyaW5nIiwibmV3RXF1aXBwZWRQYXJ0IiwicG9zc2libGVTdHJpbmciLCJvcGVyYXRvckluZGV4IiwiaW5kZXhPZiIsIm9wZXJhbmQxIiwicGFyc2VGbG9hdCIsInN1YnN0cmluZyIsIm9wZXJhbmQyIiwiUmVuZGVyZWRTdGF0cyIsInJlbmRlcmVkRGF0YSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/statUI/statbox.js\n"));

/***/ })

});