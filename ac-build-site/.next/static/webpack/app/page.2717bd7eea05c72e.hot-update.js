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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FrameStats: function() { return /* binding */ FrameStats; },\n/* harmony export */   PartsStats: function() { return /* binding */ PartsStats; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ PartsStats,FrameStats auto */ \nvar _s = $RefreshSig$();\n\nfunction PartsStats(param) {\n    let { currentMenu, currentSelect, currentPart } = param;\n    function StatsList(currentPart) {\n        function convertToTitleCase(str) {\n            let words = str.split(\"_\");\n            let result = \"\";\n            for(let i = 0; i < words.length; i++){\n                let word = words[i];\n                result += word.charAt(0).toUpperCase() + word.slice(1) + \" \";\n            }\n            return result.trim();\n        }\n        if (currentMenu === \"default\" || currentPart === null) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n        } else {\n            const data = [] //might be better to just make three arrays and then turn it into one and return that instead or even return as three so you can adjust the three separately\n            ;\n            const rawData = currentPart[\"currentPart\"];\n            for (let [key, value] of Object.entries(rawData)){\n                if (key !== \"_id\" && key !== \"type\") {\n                    if (key === \"extra_type\") {\n                        if (value === \"none\") {\n                            value = currentSelect;\n                        }\n                        data.unshift(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: value.toUpperCase()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                lineNumber: 38,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, this));\n                    } else if (key === \"name\") {\n                        data.splice(0, 0, /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-[15vh]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                lineNumber: 45,\n                                columnNumber: 19\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, this));\n                    } else if (key === \"description\") {\n                        data.splice(1, 0, /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-[40vh]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\",\n                                    children: \"Part Info\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: value\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, this));\n                    } else {\n                        const spec = convertToTitleCase(key);\n                        data.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\",\n                                    children: [\n                                        spec,\n                                        \"\\xa0\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\",\n                                    children: value\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, this));\n                    }\n                }\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: data\n            }, void 0, false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatsList, {\n                currentPart: currentPart\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n                lineNumber: 83,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n            lineNumber: 82,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this);\n}\n_c = PartsStats;\nfunction FrameStats(param) {\n    let { currentSelect, currentEquipped } = param;\n    _s();\n    const [equippedParts, setEquippedParts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const allParts = [\n        \"R-ARM UNIT\",\n        \"L-ARM UNIT\",\n        \"R-BACK UNIT\",\n        \"L-BACK UNIT\",\n        \"HEAD\",\n        \"CORE\",\n        \"ARMS\",\n        \"LEGS\",\n        \"BOOSTER\",\n        \"FCS\",\n        \"GENERATOR\",\n        \"EXPANSION\"\n    ];\n    const statContributors = {\n        armour_points: [\n            \"armour_points\"\n        ],\n        defensive_performance: [],\n        attitude_stability: [],\n        boost_speed: [],\n        current_load: [\n            \"weight\"\n        ],\n        current_en_load: [\n            \"en_load\"\n        ]\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const frameData = {};\n        allParts.forEach((part)=>{\n            frameData[part] = JSON.parse(localStorage.getItem(part));\n        });\n        setEquippedParts(frameData);\n        setStats({\n            armour_points: 0,\n            defensive_performance: 0,\n            attitude_stability: 0,\n            boost_speed: 0,\n            current_load: 0,\n            current_en_load: 0\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentSelect !== null && currentSelect !== \"\") {\n            setStats({\n                armour_points: 0,\n                defensive_performance: 0,\n                attitude_stability: 0,\n                boost_speed: 0,\n                current_load: 0,\n                current_en_load: 0\n            });\n            const frameData = equippedParts;\n            const newEquippedPart = localStorage.getItem(currentSelect);\n            frameData[currentSelect] = newEquippedPart;\n            console.log(frameData);\n            const statData = stats;\n            for(let part in frameData){\n                if (frameData[part] !== null && frameData[part] !== \"\") {\n                    for (let [spec, value] of Object.entries(frameData[part])){\n                        for(let stat in statContributors){\n                            if (statContributors[stat].includes(spec)) {\n                                statData[stat] += possibleString(value);\n                            }\n                        }\n                    }\n                }\n            }\n            console.log(statData);\n            setEquippedParts(frameData);\n        }\n    }, [\n        currentEquipped\n    ]);\n    function calculateString(possibleString1) {\n        if (typeof possibleString1 === \"string\") {\n            const operatorIndex = possibleString1.indexOf(\"x\");\n            if (operatorIndex !== -1) {\n                const operand1 = parseFloat(possibleString1.substring(0, operatorIndex));\n                const operand2 = parseFloat(possibleString1.substring(operatorIndex + 1));\n                const result = operand1 * operand2;\n                return result;\n            }\n        }\n        return possibleString1;\n    }\n    function recalculateStats() {}\n    function RenderedStats() {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RenderedStats, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\17204\\\\Desktop\\\\Desktop\\\\DevStuff\\\\Armored-Core-Build-Site\\\\ac-build-site\\\\app\\\\statUI\\\\statbox.js\",\n            lineNumber: 187,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(FrameStats, \"ausUfQw1yQwS9T/tWBl+FAdzimw=\");\n_c1 = FrameStats;\nvar _c, _c1;\n$RefreshReg$(_c, \"PartsStats\");\n$RefreshReg$(_c1, \"FrameStats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBR0EsR0FDRjtRQUFDYjtLQUFnQjtJQUVuQixTQUFTMkIsZ0JBQWdCRCxlQUFjO1FBQ25DLElBQUksT0FBT0Esb0JBQW1CLFVBQVU7WUFDcEMsTUFBTUUsZ0JBQWdCRixnQkFBZUcsT0FBTyxDQUFDO1lBQzdDLElBQUlELGtCQUFrQixDQUFDLEdBQUc7Z0JBQzFCLE1BQU1FLFdBQVdDLFdBQVdMLGdCQUFlTSxTQUFTLENBQUMsR0FBR0o7Z0JBQ3hELE1BQU1LLFdBQVdGLFdBQVdMLGdCQUFlTSxTQUFTLENBQUNKLGdCQUFnQjtnQkFDckUsTUFBTW5ELFNBQVNxRCxXQUFXRztnQkFDMUIsT0FBT3hEO1lBQ1A7UUFDSjtRQUNBLE9BQU9pRDtJQUNYO0lBRUEsU0FBU1Esb0JBRVQ7SUFFQSxTQUFTQyxpQkFFVDtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDQTs7Ozs7O0FBS2I7R0F0R2dCcEM7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3N0YXRVSS9zdGF0Ym94LmpzP2E5ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFydHNTdGF0cyh7IGN1cnJlbnRNZW51LCBjdXJyZW50U2VsZWN0LCBjdXJyZW50UGFydCB9KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gU3RhdHNMaXN0KGN1cnJlbnRQYXJ0KSB7XHJcbiAgXHJcbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRUb1RpdGxlQ2FzZShzdHIpIHtcclxuICAgICAgICBsZXQgd29yZHMgPSBzdHIuc3BsaXQoJ18nKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IHdvcmQgPSB3b3Jkc1tpXTtcclxuICAgICAgICAgIHJlc3VsdCArPSB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSArICcgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50cmltKCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmKGN1cnJlbnRNZW51ID09PSAnZGVmYXVsdCcgfHwgY3VycmVudFBhcnQgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBlbHNlIHsgLy90aGlzIG9yZ2FuaXphdGlvbiBvZiBlbnRlcmluZyBkYXRhIGlzIHB1cmVseSBiYXNlZCBvbiBob3cgdGhlIGRhdGEgaXMgb3JnYW5pemVkIGluIHRoZSBkYXRhYmFzZS4geWVhLCBpIGtub3cgdGhhdCdzIGJhZC4gU3VlIG1lLiBqayBwbHMgZG9udFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXSAvL21pZ2h0IGJlIGJldHRlciB0byBqdXN0IG1ha2UgdGhyZWUgYXJyYXlzIGFuZCB0aGVuIHR1cm4gaXQgaW50byBvbmUgYW5kIHJldHVybiB0aGF0IGluc3RlYWQgb3IgZXZlbiByZXR1cm4gYXMgdGhyZWUgc28geW91IGNhbiBhZGp1c3QgdGhlIHRocmVlIHNlcGFyYXRlbHlcclxuICAgICAgICBjb25zdCByYXdEYXRhID0gY3VycmVudFBhcnRbJ2N1cnJlbnRQYXJ0J107XHJcbiAgICAgICAgZm9yKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocmF3RGF0YSkpIHtcclxuICAgICAgICAgIGlmKGtleSAhPT0gJ19pZCcgJiYga2V5ICE9PSAndHlwZScpIHtcclxuICAgICAgICAgICAgaWYoa2V5ID09PSAnZXh0cmFfdHlwZScpIHtcclxuICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGN1cnJlbnRTZWxlY3Q7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRhdGEudW5zaGlmdChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt2YWx1ZS50b1VwcGVyQ2FzZSgpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihrZXkgPT09ICduYW1lJyApIHtcclxuICAgICAgICAgICAgICBkYXRhLnNwbGljZSgwLCAwLCAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLVsxNXZoXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihrZXkgPT09ICdkZXNjcmlwdGlvbicpIHtcclxuICAgICAgICAgICAgICBkYXRhLnNwbGljZSgxLCAwLCAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLVs0MHZoXVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5QYXJ0IEluZm88L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt2YWx1ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBzcGVjID0gY29udmVydFRvVGl0bGVDYXNlKGtleSk7XHJcbiAgICAgICAgICAgICAgZGF0YS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e3NwZWN9Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57dmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApO1xyXG4gIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZGF0YX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPFN0YXRzTGlzdCBjdXJyZW50UGFydD17Y3VycmVudFBhcnR9Lz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZyYW1lU3RhdHMoe2N1cnJlbnRTZWxlY3QsIGN1cnJlbnRFcXVpcHBlZH0pIHtcclxuXHJcbiAgICBjb25zdCBbZXF1aXBwZWRQYXJ0cywgc2V0RXF1aXBwZWRQYXJ0c10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZSgpOyBcclxuICAgIGNvbnN0IGFsbFBhcnRzID0gW1wiUi1BUk0gVU5JVFwiLCBcIkwtQVJNIFVOSVRcIiwgXCJSLUJBQ0sgVU5JVFwiLCBcIkwtQkFDSyBVTklUXCIsIFwiSEVBRFwiLCBcIkNPUkVcIiwgXCJBUk1TXCIsIFwiTEVHU1wiLCBcIkJPT1NURVJcIiwgXCJGQ1NcIiwgXCJHRU5FUkFUT1JcIiwgXCJFWFBBTlNJT05cIl07XHJcbiAgICBjb25zdCBzdGF0Q29udHJpYnV0b3JzID0ge1xyXG4gICAgICAgIGFybW91cl9wb2ludHM6IFsnYXJtb3VyX3BvaW50cyddLFxyXG4gICAgICAgIGRlZmVuc2l2ZV9wZXJmb3JtYW5jZTogW10sXHJcbiAgICAgICAgYXR0aXR1ZGVfc3RhYmlsaXR5OiBbXSxcclxuICAgICAgICBib29zdF9zcGVlZDogW10sXHJcbiAgICAgICAgY3VycmVudF9sb2FkOiBbJ3dlaWdodCddLFxyXG4gICAgICAgIGN1cnJlbnRfZW5fbG9hZDogWydlbl9sb2FkJ11cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZyYW1lRGF0YSA9IHt9O1xyXG4gICAgICAgIGFsbFBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcclxuICAgICAgICAgICAgZnJhbWVEYXRhW3BhcnRdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwYXJ0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RXF1aXBwZWRQYXJ0cyhmcmFtZURhdGEpO1xyXG4gICAgICAgIHNldFN0YXRzKHtcclxuICAgICAgICAgICAgYXJtb3VyX3BvaW50czogMCxcclxuICAgICAgICAgICAgZGVmZW5zaXZlX3BlcmZvcm1hbmNlOiAwLFxyXG4gICAgICAgICAgICBhdHRpdHVkZV9zdGFiaWxpdHk6IDAsXHJcbiAgICAgICAgICAgIGJvb3N0X3NwZWVkOiAwLFxyXG4gICAgICAgICAgICBjdXJyZW50X2xvYWQ6IDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRfZW5fbG9hZDogMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoY3VycmVudFNlbGVjdCAhPT0gbnVsbCAmJiBjdXJyZW50U2VsZWN0ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRzKHtcclxuICAgICAgICAgICAgICAgIGFybW91cl9wb2ludHM6IDAsXHJcbiAgICAgICAgICAgICAgICBkZWZlbnNpdmVfcGVyZm9ybWFuY2U6IDAsXHJcbiAgICAgICAgICAgICAgICBhdHRpdHVkZV9zdGFiaWxpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICBib29zdF9zcGVlZDogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfbG9hZDogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfZW5fbG9hZDogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWVEYXRhID0gZXF1aXBwZWRQYXJ0cztcclxuICAgICAgICAgICAgY29uc3QgbmV3RXF1aXBwZWRQYXJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFNlbGVjdCk7XHJcbiAgICAgICAgICAgIGZyYW1lRGF0YVtjdXJyZW50U2VsZWN0XSA9IG5ld0VxdWlwcGVkUGFydDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZyYW1lRGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0RGF0YSA9IHN0YXRzOyBcclxuICAgICAgICAgICAgZm9yKGxldCBwYXJ0IGluIGZyYW1lRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYoZnJhbWVEYXRhW3BhcnRdICE9PSBudWxsICYmIGZyYW1lRGF0YVtwYXJ0XSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NwZWMsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhmcmFtZURhdGFbcGFydF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgc3RhdCBpbiBzdGF0Q29udHJpYnV0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdGF0Q29udHJpYnV0b3JzW3N0YXRdLmluY2x1ZGVzKHNwZWMpKSB7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0RGF0YVtzdGF0XSArPSBwb3NzaWJsZVN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0RGF0YSk7XHJcblxyXG4gICAgICAgICAgICBzZXRFcXVpcHBlZFBhcnRzKGZyYW1lRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgLCBbY3VycmVudEVxdWlwcGVkXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlU3RyaW5nKHBvc3NpYmxlU3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwb3NzaWJsZVN0cmluZyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3JJbmRleCA9IHBvc3NpYmxlU3RyaW5nLmluZGV4T2YoJ3gnKTtcclxuICAgICAgICAgICAgaWYgKG9wZXJhdG9ySW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhbmQxID0gcGFyc2VGbG9hdChwb3NzaWJsZVN0cmluZy5zdWJzdHJpbmcoMCwgb3BlcmF0b3JJbmRleCkpO1xyXG4gICAgICAgICAgICBjb25zdCBvcGVyYW5kMiA9IHBhcnNlRmxvYXQocG9zc2libGVTdHJpbmcuc3Vic3RyaW5nKG9wZXJhdG9ySW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wZXJhbmQxICogb3BlcmFuZDI7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlY2FsY3VsYXRlU3RhdHMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJlbmRlcmVkU3RhdHMoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiggXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFJlbmRlcmVkU3RhdHMgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcblxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYXJ0c1N0YXRzIiwiY3VycmVudE1lbnUiLCJjdXJyZW50U2VsZWN0IiwiY3VycmVudFBhcnQiLCJTdGF0c0xpc3QiLCJjb252ZXJ0VG9UaXRsZUNhc2UiLCJzdHIiLCJ3b3JkcyIsInNwbGl0IiwicmVzdWx0IiwiaSIsImxlbmd0aCIsIndvcmQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidHJpbSIsImRhdGEiLCJyYXdEYXRhIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwidW5zaGlmdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGxpY2UiLCJzcGVjIiwicHVzaCIsInNwYW4iLCJGcmFtZVN0YXRzIiwiY3VycmVudEVxdWlwcGVkIiwiZXF1aXBwZWRQYXJ0cyIsInNldEVxdWlwcGVkUGFydHMiLCJzdGF0cyIsInNldFN0YXRzIiwiYWxsUGFydHMiLCJzdGF0Q29udHJpYnV0b3JzIiwiYXJtb3VyX3BvaW50cyIsImRlZmVuc2l2ZV9wZXJmb3JtYW5jZSIsImF0dGl0dWRlX3N0YWJpbGl0eSIsImJvb3N0X3NwZWVkIiwiY3VycmVudF9sb2FkIiwiY3VycmVudF9lbl9sb2FkIiwiZnJhbWVEYXRhIiwiZm9yRWFjaCIsInBhcnQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV3RXF1aXBwZWRQYXJ0IiwiY29uc29sZSIsImxvZyIsInN0YXREYXRhIiwic3RhdCIsImluY2x1ZGVzIiwicG9zc2libGVTdHJpbmciLCJjYWxjdWxhdGVTdHJpbmciLCJvcGVyYXRvckluZGV4IiwiaW5kZXhPZiIsIm9wZXJhbmQxIiwicGFyc2VGbG9hdCIsInN1YnN0cmluZyIsIm9wZXJhbmQyIiwicmVjYWxjdWxhdGVTdGF0cyIsIlJlbmRlcmVkU3RhdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/statUI/statbox.js\n"));

/***/ })

});