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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n\n\n\n\n\n\n// import {faFacebook} from \"\"\n\nvar _s = $RefreshSig$();\nfunction Header(props) {\n    _s();\n    var smallStyle = {\n        \"height\": \"40px\",\n        fontSize: \"1.1rem\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), show = ref[0], setShow = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), offset = ref1[0], setOffset = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(offset), previousOff = ref2[0], setPreviousOff = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), section = ref3[0], setSection = ref3[1];\n    //  console.log(\"position sur la page :\", offset)\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var onScroll = function() {\n            setPreviousOff(offset);\n            setOffset(window.scrollY);\n            if (offset >= previousOff) {\n                setShow(false);\n            } else {\n                setShow(true);\n            }\n            //mécanisme pour le style\n            console.log(window.innerHeight);\n            console.log(window.scrollY / window.innerHeight);\n            setSection(Math.round(window.scrollY / window.innerHeight));\n            console.log(\"on est dans cette section:\", section);\n        };\n        window.removeEventListener(\"scroll\", onScroll);\n        window.addEventListener(\"scroll\", onScroll, {\n            passive: true\n        });\n        return function() {\n            return window.removeEventListener(\"scroll\", onScroll);\n        };\n    });\n    var styleOfHeader = {\n        \"background\": \"#B5EFE7\",\n        \"color\": \"black\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().headercontainer),\n        style: !show,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"FR | EN\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().links),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"0\",\n                            style: section === 0 ? styleOfHeader : {},\n                            onClick: function() {\n                                return props.handleLink(\"homecontent\");\n                            },\n                            children: \"Accueil\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"1\",\n                            style: section === 1 ? styleOfHeader : {},\n                            onClick: function() {\n                                return props.handleLink(\"section1\");\n                            },\n                            children: \"Qui sommes-nous ? \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"2\",\n                            style: section === 2 ? styleOfHeader : {},\n                            onClick: function() {\n                                return props.handleLink(\"section2\");\n                            },\n                            children: \"Nous rejoindre / nous soutenir\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"3\",\n                            style: section === 3 || section === 4 ? styleOfHeader : {},\n                            onClick: function() {\n                                return props.handleLink(\"section3\");\n                            },\n                            children: \"Activit\\xe9s\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            id: \"4\",\n                            onClick: function() {\n                                return props.handleLink(\"section1\");\n                            },\n                            children: \"Plus\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().connectionAndNetworks),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                children: \"Connexion\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                                lineNumber: 65,\n                                columnNumber: 28\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"https://www.facebook.com/DIDA.Rennes/?locale=fr_FR\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFacebook\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                                lineNumber: 66,\n                                columnNumber: 75\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Header.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"TAD9uN1NInsD6auJHu0DJX7lAkc=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztvQkFBQ0MsU0FBUyxFQUFFbEMsd0ZBQTRCOztzQ0FDMUMsOERBQUNDLGtEQUFJOzRCQUFDNkMsSUFBSSxFQUFFLEdBQUc7c0NBQUUsNEVBQUNOLE1BQUk7Z0NBQUNOLFNBQVMsRUFBRWxDLHVFQUFXOzBDQUFFLFdBQVM7Ozs7O29DQUFPOzs7OztnQ0FBTztzQ0FDdEUsOERBQUNDLGtEQUFJOzRCQUFDNkMsSUFBSSxFQUFDLG9EQUFvRDtzQ0FBQyw0RUFBQzVDLDJFQUFlO2dDQUFDNkMsSUFBSSxFQUFFdkMsMEVBQVU7Ozs7O29DQUFJOzs7OztnQ0FBTzs7Ozs7O3dCQUN4Rzs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQUM7Q0FDVjtHQTVEUUMsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBOERmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUhlYXJ0LCBmYVN0YXIsIGZhVmlkZW8gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcblxyXG4vLyBpbXBvcnQge2ZhRmFjZWJvb2t9IGZyb20gXCJcIlxyXG5pbXBvcnQgeyBmYUZhY2Vib29rIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG5cclxuICBjb25zdCBzbWFsbFN0eWxlID0ge1wiaGVpZ2h0XCIgOiBcIjQwcHhcIiwgZm9udFNpemUgOiBcIjEuMXJlbVwifVxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSAoMCk7XHJcbiAgY29uc3QgW3ByZXZpb3VzT2ZmLCBzZXRQcmV2aW91c09mZl0gPSB1c2VTdGF0ZShvZmZzZXQpXHJcbiAgY29uc3QgW3NlY3Rpb24sIHNldFNlY3Rpb25dID0gdXNlU3RhdGUoMClcclxuLy8gIGNvbnNvbGUubG9nKFwicG9zaXRpb24gc3VyIGxhIHBhZ2UgOlwiLCBvZmZzZXQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PntcclxuICAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT57XHJcbiAgICAgIHNldFByZXZpb3VzT2ZmKG9mZnNldClcclxuICAgICAgc2V0T2Zmc2V0KHdpbmRvdy5zY3JvbGxZKVxyXG4gICAgICBpZihvZmZzZXQgPj0gcHJldmlvdXNPZmYpe1xyXG4gICAgICAgIHNldFNob3coZmFsc2UpXHJcbiAgICAgIH0gZWxzZXtcclxuICAgICAgICBzZXRTaG93KHRydWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICAvL23DqWNhbmlzbWUgcG91ciBsZSBzdHlsZVxyXG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgc2V0U2VjdGlvbihNYXRoLnJvdW5kKHdpbmRvdy5zY3JvbGxZIC8gd2luZG93LmlubmVySGVpZ2h0KSlcclxuICAgICBjb25zb2xlLmxvZyhcIm9uIGVzdCBkYW5zIGNldHRlIHNlY3Rpb246XCIsc2VjdGlvbilcclxuICAgIH1cclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsb25TY3JvbGwpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixvblNjcm9sbCx7cGFzc2l2ZTp0cnVlfSk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixvblNjcm9sbClcclxuICB9KVxyXG5cclxuICBjb25zdCBzdHlsZU9mSGVhZGVyID0ge1xyXG4gICAgXCJiYWNrZ3JvdW5kXCIgOiBcIiNCNUVGRTdcIixcclxuICAgIFwiY29sb3JcIiA64oCvXCJibGFja1wiXHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyY29udGFpbmVyfSBzdHlsZT17IXNob3d9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgRlIgfCBFTlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3N9PlxyXG5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGlkPVwiMFwiIHN0eWxlPXtzZWN0aW9uID09PSAwID8gc3R5bGVPZkhlYWRlciA6IHt9fSBvbkNsaWNrPXsoKT0+cHJvcHMuaGFuZGxlTGluayhcImhvbWVjb250ZW50XCIpfT5BY2N1ZWlsPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlua30gaWQ9XCIxXCIgc3R5bGU9e3NlY3Rpb24gPT09IDEgPyBzdHlsZU9mSGVhZGVyIDoge319IG9uQ2xpY2s9eygpPT5wcm9wcy5oYW5kbGVMaW5rKFwic2VjdGlvbjFcIil9PlF1aSBzb21tZXMtbm91cyA/IDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGlkPVwiMlwiIHN0eWxlPXtzZWN0aW9uID09PSAyID8gc3R5bGVPZkhlYWRlciA6IHt9fSBvbkNsaWNrPXsoKT0+cHJvcHMuaGFuZGxlTGluayhcInNlY3Rpb24yXCIpfT5Ob3VzIHJlam9pbmRyZSAvIG5vdXMgc291dGVuaXI8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBpZD1cIjNcIiBzdHlsZT17KHNlY3Rpb24gPT09IDMgfHwgc2VjdGlvbiA9PT0gNCkgPyBzdHlsZU9mSGVhZGVyIDoge319IG9uQ2xpY2s9eygpPT5wcm9wcy5oYW5kbGVMaW5rKFwic2VjdGlvbjNcIil9PkFjdGl2aXTDqXM8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBpZD1cIjRcIiBvbkNsaWNrPXsoKT0+cHJvcHMuaGFuZGxlTGluayhcInNlY3Rpb24xXCIpfT5QbHVzPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29ubmVjdGlvbkFuZE5ldHdvcmtzfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5Db25uZXhpb248L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ESURBLlJlbm5lcy8/bG9jYWxlPWZyX0ZSXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZhY2Vib29rfSAvPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsIkZvbnRBd2Vzb21lSWNvbiIsImZhSGVhcnQiLCJmYVN0YXIiLCJmYVZpZGVvIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmYUZhY2Vib29rIiwiSGVhZGVyIiwicHJvcHMiLCJzbWFsbFN0eWxlIiwiZm9udFNpemUiLCJzaG93Iiwic2V0U2hvdyIsIm9mZnNldCIsInNldE9mZnNldCIsInByZXZpb3VzT2ZmIiwic2V0UHJldmlvdXNPZmYiLCJzZWN0aW9uIiwic2V0U2VjdGlvbiIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJpbm5lckhlaWdodCIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInN0eWxlT2ZIZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXJjb250YWluZXIiLCJzdHlsZSIsImhlYWRlciIsInAiLCJsaW5rcyIsInNwYW4iLCJsaW5rIiwiaWQiLCJvbkNsaWNrIiwiaGFuZGxlTGluayIsImNvbm5lY3Rpb25BbmROZXR3b3JrcyIsImhyZWYiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});