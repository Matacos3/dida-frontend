"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n\n\n\n\n\n\n// import {faFacebook} from \"\"\n\nvar _s = $RefreshSig$();\nfunction Header(props) {\n    _s();\n    var smallStyle = {\n        \"height\": \"40px\",\n        fontSize: \"1.1rem\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), show = ref[0], setShow = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), offset = ref1[0], setOffset = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(offset), previousOff = ref2[0], setPreviousOff = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), section = ref3[0], setSection = ref3[1];\n    //  console.log(\"position sur la page :\", offset)\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var onScroll = function() {\n            setPreviousOff(offset);\n            setOffset(window.scrollY);\n            if (offset >= previousOff) {\n                setShow(false);\n            } else {\n                setShow(true);\n            }\n            //mécanisme pour le style\n            console.log(window.innerHeight);\n            console.log(window.scrollY / window.innerHeight);\n            setSection(Math.round(window.scrollY / window.innerHeight));\n            console.log(\"on est dans cette section:\", section);\n        };\n        window.removeEventListener(\"scroll\", onScroll);\n        window.addEventListener(\"scroll\", onScroll, {\n            passive: true\n        });\n        return function() {\n            return window.removeEventListener(\"scroll\", onScroll);\n        };\n    });\n    var styleOfHeader = {\n        \"background\": \"#B5EFE7\",\n        \"color\": \"black\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().headercontainer),\n        style: !show && {\n            display: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"FR | EN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"0\",\n                            style: section === 0 ? styleOfHeader : {},\n                            onClick: function() {\n                                return props.handleLink(\"homecontent\");\n                            },\n                            children: \"Accueil\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"1\",\n                            style: section === 1 ? styleOfHeader : {},\n                            onClick: function() {\n                                return props.handleLink(\"section1\");\n                            },\n                            children: \"Qui sommes-nous ? \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"2\",\n                            style: section === 2 ? styleOfHeader : {},\n                            onClick: function() {\n                                return props.handleLink(\"section2\");\n                            },\n                            children: \"Nous rejoindre / nous soutenir\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"3\",\n                            style: section === 3 || section === 4 ? styleOfHeader : {},\n                            onClick: function() {\n                                return props.handleLink(\"section3\");\n                            },\n                            children: \"Activit\\xe9s\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"4\",\n                            onClick: function() {\n                                return props.handleLink(\"section1\");\n                            },\n                            children: \"Plus\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectionAndNetworks),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                children: \"Connexion\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                                lineNumber: 65,\n                                columnNumber: 28\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"https://www.facebook.com/DIDA.Rennes/?locale=fr_FR\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFacebook\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                                lineNumber: 66,\n                                columnNumber: 75\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"TAD9uN1NInsD6auJHu0DJX7lAkc=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Ozs7Ozt3QkFDdkY7OEJBQ04sOERBQUNaLEtBQUc7b0JBQUNDLFNBQVMsRUFBRWxDLHdGQUE0Qjs7c0NBQzFDLDhEQUFDQyxrREFBSTs0QkFBQzhDLElBQUksRUFBRSxHQUFHO3NDQUFFLDRFQUFDTixNQUFJO2dDQUFDUCxTQUFTLEVBQUVsQyx1RUFBVzswQ0FBRSxXQUFTOzs7OztvQ0FBTzs7Ozs7Z0NBQU87c0NBQ3RFLDhEQUFDQyxrREFBSTs0QkFBQzhDLElBQUksRUFBQyxvREFBb0Q7c0NBQUMsNEVBQUM3QywyRUFBZTtnQ0FBQzhDLElBQUksRUFBRXhDLDBFQUFVOzs7OztvQ0FBSTs7Ozs7Z0NBQU87Ozs7Ozt3QkFDeEc7Ozs7OztnQkFDRjs7Ozs7WUFDRixDQUFDO0NBQ1Y7R0E1RFFDLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQThEZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hlYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFIZWFydCwgZmFTdGFyLCBmYVZpZGVvIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuLy8gaW1wb3J0IHtmYUZhY2Vib29rfSBmcm9tIFwiXCJcclxuaW1wb3J0IHsgZmFGYWNlYm9vayB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuXHJcbiAgY29uc3Qgc21hbGxTdHlsZSA9IHtcImhlaWdodFwiIDogXCI0MHB4XCIsIGZvbnRTaXplIDogXCIxLjFyZW1cIn1cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUgKDApO1xyXG4gIGNvbnN0IFtwcmV2aW91c09mZiwgc2V0UHJldmlvdXNPZmZdID0gdXNlU3RhdGUob2Zmc2V0KVxyXG4gIGNvbnN0IFtzZWN0aW9uLCBzZXRTZWN0aW9uXSA9IHVzZVN0YXRlKDApXHJcbi8vICBjb25zb2xlLmxvZyhcInBvc2l0aW9uIHN1ciBsYSBwYWdlIDpcIiwgb2Zmc2V0KVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+e1xyXG4gICAgICBzZXRQcmV2aW91c09mZihvZmZzZXQpXHJcbiAgICAgIHNldE9mZnNldCh3aW5kb3cuc2Nyb2xsWSlcclxuICAgICAgaWYob2Zmc2V0ID49IHByZXZpb3VzT2ZmKXtcclxuICAgICAgICBzZXRTaG93KGZhbHNlKVxyXG4gICAgICB9IGVsc2V7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKVxyXG4gICAgICB9XHJcblxyXG4gICAgLy9tw6ljYW5pc21lIHBvdXIgbGUgc3R5bGVcclxuICAgICAgY29uc29sZS5sb2cod2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZIC8gd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgIHNldFNlY3Rpb24oTWF0aC5yb3VuZCh3aW5kb3cuc2Nyb2xsWSAvIHdpbmRvdy5pbm5lckhlaWdodCkpXHJcbiAgICAgY29uc29sZS5sb2coXCJvbiBlc3QgZGFucyBjZXR0ZSBzZWN0aW9uOlwiLHNlY3Rpb24pXHJcbiAgICB9XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLG9uU2Nyb2xsKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsb25TY3JvbGwse3Bhc3NpdmU6dHJ1ZX0pO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsb25TY3JvbGwpXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgc3R5bGVPZkhlYWRlciA9IHtcclxuICAgIFwiYmFja2dyb3VuZFwiIDogXCIjQjVFRkU3XCIsXHJcbiAgICBcImNvbG9yXCIgOuKAr1wiYmxhY2tcIlxyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcmNvbnRhaW5lcn0gc3R5bGU9eyFzaG93ICYmIHtkaXNwbGF5Olwibm9uZVwifX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBGUiB8IEVOXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc30+XHJcblxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30gaWQ9XCIwXCIgc3R5bGU9e3NlY3Rpb24gPT09IDAgPyBzdHlsZU9mSGVhZGVyIDoge319IG9uQ2xpY2s9eygpPT5wcm9wcy5oYW5kbGVMaW5rKFwiaG9tZWNvbnRlbnRcIil9PkFjY3VlaWw8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBpZD1cIjFcIiBzdHlsZT17c2VjdGlvbiA9PT0gMSA/IHN0eWxlT2ZIZWFkZXIgOiB7fX0gb25DbGljaz17KCk9PnByb3BzLmhhbmRsZUxpbmsoXCJzZWN0aW9uMVwiKX0+UXVpIHNvbW1lcy1ub3VzID8gPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30gaWQ9XCIyXCIgc3R5bGU9e3NlY3Rpb24gPT09IDIgPyBzdHlsZU9mSGVhZGVyIDoge319IG9uQ2xpY2s9eygpPT5wcm9wcy5oYW5kbGVMaW5rKFwic2VjdGlvbjJcIil9Pk5vdXMgcmVqb2luZHJlIC8gbm91cyBzb3V0ZW5pcjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGlkPVwiM1wiIHN0eWxlPXsoc2VjdGlvbiA9PT0gMyB8fCBzZWN0aW9uID09PSA0KSA/IHN0eWxlT2ZIZWFkZXIgOiB7fX0gb25DbGljaz17KCk9PnByb3BzLmhhbmRsZUxpbmsoXCJzZWN0aW9uM1wiKX0+QWN0aXZpdMOpczwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGlkPVwiNFwiIG9uQ2xpY2s9eygpPT5wcm9wcy5oYW5kbGVMaW5rKFwic2VjdGlvbjFcIil9PlBsdXM8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb25uZWN0aW9uQW5kTmV0d29ya3N9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkNvbm5leGlvbjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0RJREEuUmVubmVzLz9sb2NhbGU9ZnJfRlJcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRmFjZWJvb2t9IC8+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFIZWFydCIsImZhU3RhciIsImZhVmlkZW8iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZhRmFjZWJvb2siLCJIZWFkZXIiLCJwcm9wcyIsInNtYWxsU3R5bGUiLCJmb250U2l6ZSIsInNob3ciLCJzZXRTaG93Iiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwicHJldmlvdXNPZmYiLCJzZXRQcmV2aW91c09mZiIsInNlY3Rpb24iLCJzZXRTZWN0aW9uIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyIsImlubmVySGVpZ2h0IiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwic3R5bGVPZkhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlcmNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsImhlYWRlciIsInAiLCJsaW5rcyIsInNwYW4iLCJsaW5rIiwiaWQiLCJvbkNsaWNrIiwiaGFuZGxlTGluayIsImNvbm5lY3Rpb25BbmROZXR3b3JrcyIsImhyZWYiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});