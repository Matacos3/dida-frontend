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

/***/ "./components/Activities.js":
/*!**********************************!*\
  !*** ./components/Activities.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Activities.module.css */ \"./styles/Activities.module.css\");\n/* harmony import */ var _styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Assets_pictures_timetable_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/pictures/timetable.webp */ \"./Assets/pictures/timetable.webp\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _Activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Activity */ \"./components/Activity.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n//possibilité d’ajouter ou supprimer les activités\nfunction Activities(props) {\n    var _this = this;\n    _s();\n    var activitiesData = [\n        {\n            name: \"Atelier de fran\\xe7ais r\\xe9serv\\xe9 aux femmes\",\n            description: \"Parce-que nous savons qu'il est parfois difficile pour les femmes de se sentir \\xe0 l'aise dans un espace o\\xf9 beaucoup d'hommes sont pr\\xe9sents, nous d\\xe9dions un cr\\xe9neau aux apprenantes femmes, le lundi apr\\xe8s-midi.Ce cr\\xe9neau est anim\\xe9 exclusivement par des b\\xe9n\\xe9voles femmes, et est en plus de l'atelier de fran\\xe7ais, un moment de d\\xe9tente et de rencontre. \",\n            time: \"Le lundi de 16h15 \\xe0 17h45\",\n            imgPath: \"atelier_fr_femmes\"\n        },\n        {\n            name: \"La permanence administrative\",\n            description: \"Si vous avez du mal \\xe0 comprendre les d\\xe9marches administratives fran\\xe7aises, nous pouvons vous aider ! Au cours de la permanence administrative, nous remplirons ensemble des formulaires, des papiers divers, nous pourrons vous aider \\xe0 t\\xe9l\\xe9phoner pour prendre des rendez-vous ou encore \\xe0 envoyer un mail. Nous ferons notre possible pour vous aider ! Si n\\xe9cessaire, nous vous orienterons vers d'autres collectifs comme le MRAP, ou encore la CIMADE.\",\n            time: \"Le jeudi de 14h \\xe0 16h. Le vendredi de 14h \\xe0 16h.\",\n            imgPath: \"permanence_admin\"\n        },\n        {\n            name: \"Tea-times\",\n            description: \"Deux fois par semaine, nous nous retrouvons pour boire un th\\xe9, un caf\\xe9, discuter et faire des jeux.Le Tea Time est un moment convivial et ouvert \\xe0 toutes et \\xe0 tous ! Il s\\u2019agit d\\u2019un moment de d\\xe9tente o\\xf9 l\\u2019on rit, on parle de sujets divers et on joue ! Vous pouvez arriver quand vous voulez, repartir quand bon vous semble \\u2026 c\\u2019est un moment collectif totalement libre.\",\n            time: \"Les mardis et jeudis de 16h30 \\xe0 18h\",\n            imgPath: \"tea_time\"\n        },\n        {\n            name: \"Les ateliers de fran\\xe7ais\",\n            description: \"Les ateliers de fran\\xe7ais sont l\\xe0 depuis les d\\xe9buts de DIDA.Pour suivre nos ateliers de Fran\\xe7ais, il suffit de venir s'inscrire le mardi ou le jeudi entre 14h30 et 16h30 \\xe0 notre local au BAM. En fonction de votre niveau, nous vous fournirons une carte et vous serez ensuite ajout\\xe9 \\xe0 un groupe d'apprentissage avec un b\\xe9n\\xe9vole pour apprendre le fran\\xe7ais!\",\n            time: \"Tous les lundis, mardis et jeudis de 18h30 \\xe0 20h et le mercredi de 10h30 \\xe0 12h au TNB\",\n            imgPath: \"french_class\"\n        }, \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(activitiesData.map(function(information, index) {\n        return false;\n    })), activityBool = ref[0], setActivityBool = ref[1];\n    //fonction de display des activités\n    var displayactivity = function(position) {\n        console.log(activityBool);\n        setActivityBool(activityBool.map(function(data, index) {\n            if (index === position) {\n                return !data;\n            } else {\n                return false;\n            }\n        }));\n    };\n    var activitiesToDisplay = activitiesData.map(function(datas, i) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                margin: \"10px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    style: {\n                        cursor: \"pointer\"\n                    },\n                    src: \"/\".concat(datas.imgPath, \".png\"),\n                    width: 500,\n                    height: 400,\n                    onClick: function() {\n                        return displayactivity(i);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        top: activityBool[i] === false ? \"-50vh\" : \"50vh\",\n                        background: \"url(/\".concat(datas.imgPath, \".png) left bottom 50%\")\n                    },\n                    className: (_styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6___default().actSubSection),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6___default().subsectiontext),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: datas.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faXmark,\n                                style: {\n                                    position: \"absolute\",\n                                    top: \"15px\",\n                                    right: \"20px\",\n                                    height: \"30px\",\n                                    cursor: \"pointer\"\n                                },\n                                onClick: function() {\n                                    return displayactivity(i);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: datas.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: datas.time\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, i, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, _this);\n    });\n    var activitiesToDisplay2 = activitiesData.map(function(datas, i) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Activity__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            src: datas.imgPath,\n            description: datas.description,\n            time: datas.time,\n            name: datas.name\n        }, i, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: props.id,\n        className: (_styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6___default().subcontainer),\n                style: {\n                    background: \"#FFFFFF\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Emploi du temps\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _Assets_pictures_timetable_webp__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n                        width: 1100,\n                        height: 800\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6___default().subcontainer),\n                style: {\n                    background: \"#B5EFE7\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Nos activit\\xe9s\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Activities_module_css__WEBPACK_IMPORTED_MODULE_6___default().activitiesContainer),\n                        children: activitiesToDisplay2\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\D\\u2019ici, d\\u2019ailleurs\\\\dida\\\\components\\\\Activities.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(Activities, \"xR1kp9anxgkO6h3s7bDc5cSGLyQ=\");\n_c = Activities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activities);\nvar _c;\n$RefreshReg$(_c, \"Activities\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjdGl2aXRpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW9EO0FBQ3JCO0FBQ3VCO0FBQ3JCO0FBQ2dDO0FBQ0w7QUFFMUI7O0FBR2xDO0FBQ0ksU0FBS08sVUFBVSxDQUFDQyxLQUFLLEVBQUU7OztJQUV6QixJQUFNQyxjQUFjLEdBQUc7UUFDckI7WUFDRUMsSUFBSSxFQUFFLGlEQUF3QztZQUMzQ0MsV0FBUSxFQUFFLGlZQUE2VjtZQUM5VkMsSUFBUixFQUFFLDhCQUEyQjtZQUNoQ0MsT0FBTSxFQUFFLG1CQUFtQjtTQUM3QjtRQUNEO1lBQ0VILElBQUksRUFBRSw4QkFBOEI7WUFDcENDLFdBQVcsRUFBRSxxZEFBNmI7WUFDbGNDLElBQUosRUFBRSx3REFBa0Q7WUFDdERDLE9BQUssRUFBRSxrQkFBa0I7U0FDNUI7UUFDRDtZQUNFSCxJQUFJLEVBQUUsV0FBVztZQUNqQkMsV0FBVyxFQUFFLDJaQUFnWDtZQUM3V0MsSUFBWixFQUFFLHdDQUFxQztZQUMxQ0MsT0FBTSxFQUFFLFVBQVU7U0FDcEI7UUFDRDtZQUNFSCxJQUFJLEVBQUUsNkJBQTBCO1lBQy9CQyxXQUFVLEVBQUUsZ1lBQWtXO1lBQ3JXQyxJQUFOLEVBQUUsNkZBQXVGO1lBQzNGQyxPQUFLLEVBQUUsY0FBYztTQUN4QjtLQUNGO0lBQ0QsSUFBd0NWLEdBQTJELEdBQTNEQSwrQ0FBUSxDQUFDTSxjQUFjLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxXQUFXLEVBQUVDLEtBQUs7ZUFBSyxLQUFLO0tBQUEsQ0FBQyxDQUFDLEVBdkNyRyxZQXVDcUIsR0FBcUJiLEdBQTJELEdBQWhGLEVBdkNyQixlQXVDc0MsR0FBSUEsR0FBMkQsR0FBL0Q7SUFFcEM7SUFFQyxJQUFLZ0IsZUFBZSxHQUFHLFNBQUNDLFFBQVEsRUFBSztRQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFlBQVksQ0FBQztRQUN6QkMsZUFBZSxDQUFDRCxZQUFZLENBQUNILEdBQUcsQ0FBQyxTQUFDUyxJQUFJLEVBQUVQLEtBQUssRUFBSztZQUNoRCxJQUFJQSxLQUFLLEtBQUtJLFFBQVEsRUFBRTtnQkFDdEIsT0FBTyxDQUFDRyxJQUFJO2FBQ2IsTUFBTTtnQkFDTCxPQUFPLEtBQUs7YUFDYjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBS0QsSUFBTUMsbUJBQW1CLEdBQUdmLGNBQWMsQ0FBQ0ssR0FBRyxDQUFDLFNBQUNXLEtBQUssRUFBRUMsQ0FBQyxFQUFLO1FBRTNELHFCQUNFLDhEQUFDQyxLQUFHO1lBQUNDLEtBQUssRUFBRTtnQkFBQ0MsTUFBTSxFQUFDLE1BQU07YUFBQzs7OEJBQ3pCLDhEQUFDNUIsbURBQUs7b0JBQUMyQixLQUFLLEVBQUU7d0JBQUVFLE1BQU0sRUFBRSxTQUFTO3FCQUFFO29CQUFFQyxHQUFHLEVBQUUsR0FBRSxDQUFnQixNQUFJLENBQWxCTixLQUFLLENBQUNaLE9BQU8sRUFBQyxNQUFJLENBQUM7b0JBQUVtQixLQUFLLEVBQUUsR0FBRztvQkFBRUMsTUFBTSxFQUFFLEdBQUc7b0JBQUVDLE9BQU8sRUFBRTsrQkFBTWYsZUFBZSxDQUFDTyxDQUFDLENBQUM7cUJBQUE7Ozs7O3lCQUFJOzhCQUdqSSw4REFBQ0MsS0FBRztvQkFBQ0MsS0FBSyxFQUFFO3dCQUFFTyxHQUFHLEVBQUVsQixZQUFZLENBQUNTLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBRyxPQUFPLEdBQUcsTUFBTTt3QkFBRVUsVUFBVSxFQUFDLE9BQU0sQ0FBZ0IsTUFBcUIsQ0FBbkNYLEtBQUssQ0FBQ1osT0FBTyxFQUFDLHVCQUFxQixDQUFDO3FCQUFFO29CQUFFd0IsU0FBUyxFQUFFckMsb0ZBQW9COzhCQUV6Siw0RUFBQzJCLEtBQUc7d0JBQUNVLFNBQVMsRUFBRXJDLHFGQUFxQjs7MENBQ3JDLDhEQUFDd0MsSUFBRTswQ0FBRWYsS0FBSyxDQUFDZixJQUFJOzs7OztxQ0FBTTswQ0FDbkIsOERBQUNOLDJFQUFlO2dDQUFDcUMsSUFBSSxFQUFFcEMsc0VBQU87Z0NBQUV1QixLQUFLLEVBQUU7b0NBQUVSLFFBQVEsRUFBRSxVQUFVO29DQUFFZSxHQUFHLEVBQUUsTUFBTTtvQ0FBRU8sS0FBSyxFQUFFLE1BQU07b0NBQUVULE1BQU0sRUFBRSxNQUFNO29DQUFFSCxNQUFNLEVBQUUsU0FBUztpQ0FBRTtnQ0FBRUksT0FBTyxFQUFFOzJDQUFNZixlQUFlLENBQUNPLENBQUMsQ0FBQztpQ0FBQTs7Ozs7cUNBQUk7MENBQ3JLLDhEQUFDaUIsR0FBQzswQ0FBRWxCLEtBQUssQ0FBQ2QsV0FBVzs7Ozs7cUNBQUs7MENBQzFCLDhEQUFDZ0MsR0FBQzswQ0FBRWxCLEtBQUssQ0FBQ2IsSUFBSTs7Ozs7cUNBQUs7Ozs7Ozs2QkFDZjs7Ozs7eUJBQ0Y7O1dBWnlCYyxDQUFDOzs7O2lCQWE1QixDQUNQO0tBQ0YsQ0FBQztJQUVGLElBQU1rQixvQkFBb0IsR0FBR25DLGNBQWMsQ0FBQ0ssR0FBRyxDQUFDLFNBQUNXLEtBQUssRUFBQ0MsQ0FBQyxFQUFHO1FBQ3pELHFCQUNFLDhEQUFDcEIsaURBQVE7WUFBU3lCLEdBQUcsRUFBRU4sS0FBSyxDQUFDWixPQUFPO1lBQUVGLFdBQVcsRUFBRWMsS0FBSyxDQUFDZCxXQUFXO1lBQUVDLElBQUksRUFBRWEsS0FBSyxDQUFDYixJQUFJO1lBQUVGLElBQUksRUFBRWUsS0FBSyxDQUFDZixJQUFJO1dBQXpGZ0IsQ0FBQzs7OztpQkFBNEYsQ0FDN0c7S0FDRixDQUFDO0lBRUYscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ2tCLEVBQUUsRUFBRXJDLEtBQUssQ0FBQ3FDLEVBQUU7UUFBRVIsU0FBUyxFQUFFckMsZ0ZBQWdCOzswQkFDNUMsOERBQUMyQixLQUFHO2dCQUFDVSxTQUFTLEVBQUVyQyxtRkFBbUI7Z0JBQUU0QixLQUFLLEVBQUU7b0JBQUVRLFVBQVUsRUFBRSxTQUFTO2lCQUFFOztrQ0FFbkUsOERBQUNJLElBQUU7a0NBQUMsaUJBQWU7Ozs7OzRCQUFLO2tDQUN4Qiw4REFBQ3ZDLG1EQUFLO3dCQUFDOEIsR0FBRyxFQUFFN0IsMkVBQVM7d0JBQUU4QixLQUFLLEVBQUUsSUFBSTt3QkFBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7OzRCQUFJOzs7Ozs7b0JBQy9DOzBCQUNOLDhEQUFDTixLQUFHO2dCQUFDVSxTQUFTLEVBQUVyQyxtRkFBbUI7Z0JBQUU0QixLQUFLLEVBQUU7b0JBQUVRLFVBQVUsRUFBRSxTQUFTO2lCQUFFOztrQ0FDbkUsOERBQUNJLElBQUU7a0NBQUMsa0JBQWE7Ozs7OzRCQUFLO2tDQUN0Qiw4REFBQ2IsS0FBRzt3QkFBQ1UsU0FBUyxFQUFFckMsMEZBQTBCO2tDQUN2QzRDLG9CQUFvQjs7Ozs7NEJBQ2pCOzs7Ozs7b0JBQ0Y7Ozs7OztZQUNGLENBQ1A7Q0FDRjtHQXZGUXJDLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQXdGbkIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY3Rpdml0aWVzLmpzPzc3NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0FjdGl2aXRpZXMubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgaGFuZHMgZnJvbSBcIi4uL0Fzc2V0cy9waWN0dXJlcy90aW1ldGFibGUud2VicFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYVhtYXJrIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxuaW1wb3J0IEFjdGl2aXR5IGZyb20gXCIuL0FjdGl2aXR5XCI7XHJcblxyXG5cclxuLy9wb3NzaWJpbGl0w6kgZOKAmWFqb3V0ZXIgb3Ugc3VwcHJpbWVyIGxlcyBhY3Rpdml0w6lzXHJcbmZ1bmN0aW9uIEFjdGl2aXRpZXMocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgYWN0aXZpdGllc0RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQXRlbGllciBkZSBmcmFuw6dhaXMgcsOpc2VydsOpIGF1eCBmZW1tZXNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUGFyY2UtcXVlIG5vdXMgc2F2b25zIHF1J2lsIGVzdCBwYXJmb2lzIGRpZmZpY2lsZSBwb3VyIGxlcyBmZW1tZXMgZGUgc2Ugc2VudGlyIMOgIGwnYWlzZSBkYW5zIHVuIGVzcGFjZSBvw7kgYmVhdWNvdXAgZCdob21tZXMgc29udCBwcsOpc2VudHMsIG5vdXMgZMOpZGlvbnMgdW4gY3LDqW5lYXUgYXV4IGFwcHJlbmFudGVzIGZlbW1lcywgbGUgbHVuZGkgYXByw6hzLW1pZGkuQ2UgY3LDqW5lYXUgZXN0IGFuaW3DqSBleGNsdXNpdmVtZW50IHBhciBkZXMgYsOpbsOpdm9sZXMgZmVtbWVzLCBldCBlc3QgZW4gcGx1cyBkZSBsJ2F0ZWxpZXIgZGUgZnJhbsOnYWlzLCB1biBtb21lbnQgZGUgZMOpdGVudGUgZXQgZGUgcmVuY29udHJlLiBcIixcclxuICAgICAgdGltZTogXCJMZSBsdW5kaSBkZSAxNmgxNSDDoCAxN2g0NVwiLFxyXG4gICAgICBpbWdQYXRoOiBcImF0ZWxpZXJfZnJfZmVtbWVzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTGEgcGVybWFuZW5jZSBhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJTaSB2b3VzIGF2ZXogZHUgbWFsIMOgIGNvbXByZW5kcmUgbGVzIGTDqW1hcmNoZXMgYWRtaW5pc3RyYXRpdmVzIGZyYW7Dp2Fpc2VzLCBub3VzIHBvdXZvbnMgdm91cyBhaWRlciAhIEF1IGNvdXJzIGRlIGxhIHBlcm1hbmVuY2UgYWRtaW5pc3RyYXRpdmUsIG5vdXMgcmVtcGxpcm9ucyBlbnNlbWJsZSBkZXMgZm9ybXVsYWlyZXMsIGRlcyBwYXBpZXJzIGRpdmVycywgbm91cyBwb3Vycm9ucyB2b3VzIGFpZGVyIMOgIHTDqWzDqXBob25lciBwb3VyIHByZW5kcmUgZGVzIHJlbmRlei12b3VzIG91IGVuY29yZSDDoCBlbnZveWVyIHVuIG1haWwuIE5vdXMgZmVyb25zIG5vdHJlIHBvc3NpYmxlIHBvdXIgdm91cyBhaWRlciAhIFNpIG7DqWNlc3NhaXJlLCBub3VzIHZvdXMgb3JpZW50ZXJvbnMgdmVycyBkJ2F1dHJlcyBjb2xsZWN0aWZzIGNvbW1lIGxlIE1SQVAsIG91IGVuY29yZSBsYSBDSU1BREUuXCIsXHJcbiAgICAgIHRpbWU6IFwiTGUgamV1ZGkgZGUgMTRoIMOgIDE2aC4gTGUgdmVuZHJlZGkgZGUgMTRoIMOgIDE2aC5cIixcclxuICAgICAgaW1nUGF0aDogXCJwZXJtYW5lbmNlX2FkbWluXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVGVhLXRpbWVzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRldXggZm9pcyBwYXIgc2VtYWluZSwgbm91cyBub3VzIHJldHJvdXZvbnMgcG91ciBib2lyZSB1biB0aMOpLCB1biBjYWbDqSwgZGlzY3V0ZXIgZXQgZmFpcmUgZGVzIGpldXguTGUgVGVhIFRpbWUgZXN0IHVuIG1vbWVudCBjb252aXZpYWwgZXQgb3V2ZXJ0IMOgIHRvdXRlcyBldCDDoCB0b3VzICEgSWwgc+KAmWFnaXQgZOKAmXVuIG1vbWVudCBkZSBkw6l0ZW50ZSBvw7kgbOKAmW9uIHJpdCwgb24gcGFybGUgZGUgc3VqZXRzIGRpdmVycyBldCBvbiBqb3VlICEgVm91cyBwb3V2ZXogYXJyaXZlciBxdWFuZCB2b3VzIHZvdWxleiwgcmVwYXJ0aXIgcXVhbmQgYm9uIHZvdXMgc2VtYmxlIOKApiBj4oCZZXN0IHVuIG1vbWVudCBjb2xsZWN0aWYgdG90YWxlbWVudCBsaWJyZS5cIixcclxuICAgICAgdGltZTogXCJMZXMgbWFyZGlzIGV0IGpldWRpcyBkZSAxNmgzMCDDoCAxOGhcIixcclxuICAgICAgaW1nUGF0aDogXCJ0ZWFfdGltZVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkxlcyBhdGVsaWVycyBkZSBmcmFuw6dhaXNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTGVzIGF0ZWxpZXJzIGRlIGZyYW7Dp2FpcyBzb250IGzDoCBkZXB1aXMgbGVzIGTDqWJ1dHMgZGUgRElEQS5Qb3VyIHN1aXZyZSBub3MgYXRlbGllcnMgZGUgRnJhbsOnYWlzLCBpbCBzdWZmaXQgZGUgdmVuaXIgcydpbnNjcmlyZSBsZSBtYXJkaSBvdSBsZSBqZXVkaSBlbnRyZSAxNGgzMCBldCAxNmgzMCDDoCBub3RyZSBsb2NhbCBhdSBCQU0uIEVuIGZvbmN0aW9uIGRlIHZvdHJlIG5pdmVhdSwgbm91cyB2b3VzIGZvdXJuaXJvbnMgdW5lIGNhcnRlIGV0IHZvdXMgc2VyZXogZW5zdWl0ZSBham91dMOpIMOgIHVuIGdyb3VwZSBkJ2FwcHJlbnRpc3NhZ2UgYXZlYyB1biBiw6luw6l2b2xlIHBvdXIgYXBwcmVuZHJlIGxlIGZyYW7Dp2FpcyFcIixcclxuICAgICAgdGltZTogXCJUb3VzIGxlcyBsdW5kaXMsIG1hcmRpcyBldCBqZXVkaXMgZGUgMThoMzAgw6AgMjBoIGV0IGxlIG1lcmNyZWRpIGRlIDEwaDMwIMOgIDEyaCBhdSBUTkJcIixcclxuICAgICAgaW1nUGF0aDogXCJmcmVuY2hfY2xhc3NcIlxyXG4gICAgfSxcclxuICBdXHJcbiAgY29uc3QgW2FjdGl2aXR5Qm9vbCwgc2V0QWN0aXZpdHlCb29sXSA9IHVzZVN0YXRlKGFjdGl2aXRpZXNEYXRhLm1hcCgoaW5mb3JtYXRpb24sIGluZGV4KSA9PiBmYWxzZSkpXHJcblxyXG4gIC8vZm9uY3Rpb24gZGUgZGlzcGxheSBkZXMgYWN0aXZpdMOpc1xyXG5cclxuICBjb25zdCBkaXNwbGF5YWN0aXZpdHkgPSAocG9zaXRpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGl2aXR5Qm9vbClcclxuICAgIHNldEFjdGl2aXR5Qm9vbChhY3Rpdml0eUJvb2wubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPT09IHBvc2l0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuICFkYXRhXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBhY3Rpdml0aWVzVG9EaXNwbGF5ID0gYWN0aXZpdGllc0RhdGEubWFwKChkYXRhcywgaSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46XCIxMHB4XCJ9fWtleT17aX0+XHJcbiAgICAgICAgPEltYWdlIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gc3JjPXtgLyR7ZGF0YXMuaW1nUGF0aH0ucG5nYH0gd2lkdGg9ezUwMH0gaGVpZ2h0PXs0MDB9IG9uQ2xpY2s9eygpID0+IGRpc3BsYXlhY3Rpdml0eShpKX0gLz5cclxuICAgICAgICB7LyogPGltZyBzcmM9e2Ake2RhdGFzLmltZ1BhdGh9LnBuZ2B9Lz4gKi99XHJcbiAgICAgICAgey8qIDxwPntkYXRhcy5uYW1lfTwvcD4gKi99XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB0b3A6IGFjdGl2aXR5Qm9vbFtpXSA9PT0gZmFsc2UgPyBcIi01MHZoXCIgOiBcIjUwdmhcIiwgYmFja2dyb3VuZDpgdXJsKC8ke2RhdGFzLmltZ1BhdGh9LnBuZykgbGVmdCBib3R0b20gNTAlYCB9fSBjbGFzc05hbWU9e3N0eWxlcy5hY3RTdWJTZWN0aW9ufSA+XHJcbiAgICAgICAgICB7LyogPEltYWdlIHNyYz17YC8ke2RhdGFzLmltZ1BhdGh9LnBuZ2B9IGxheW91dD1cImZpbGxcIiBjbGFzc05hbWU9e3N0eWxlcy5iZ0ltZ30gLz4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnNlY3Rpb250ZXh0fT5cclxuICAgICAgICAgIDxoMj57ZGF0YXMubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhWG1hcmt9IHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogXCIxNXB4XCIsIHJpZ2h0OiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjMwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXsoKSA9PiBkaXNwbGF5YWN0aXZpdHkoaSl9IC8+XHJcbiAgICAgICAgICAgIDxwPntkYXRhcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwPntkYXRhcy50aW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9KVxyXG5cclxuICBjb25zdCBhY3Rpdml0aWVzVG9EaXNwbGF5MiA9IGFjdGl2aXRpZXNEYXRhLm1hcCgoZGF0YXMsaSk9PntcclxuICAgIHJldHVybihcclxuICAgICAgPEFjdGl2aXR5IGtleT17aX0gc3JjPXtkYXRhcy5pbWdQYXRofSBkZXNjcmlwdGlvbj17ZGF0YXMuZGVzY3JpcHRpb259IHRpbWU9e2RhdGFzLnRpbWV9IG5hbWU9e2RhdGFzLm5hbWV9IC8+XHJcbiAgICApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3Byb3BzLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YmNvbnRhaW5lcn0gc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIgfX0+XHJcblxyXG4gICAgICAgIDxoMj5FbXBsb2kgZHUgdGVtcHM8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2hhbmRzLnNyY30gd2lkdGg9ezExMDB9IGhlaWdodD17ODAwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJjb250YWluZXJ9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI0I1RUZFN1wiIH19PlxyXG4gICAgICAgIDxoMj5Ob3MgYWN0aXZpdMOpczwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpdml0aWVzQ29udGFpbmVyfT5cclxuICAgICAgICAgIHthY3Rpdml0aWVzVG9EaXNwbGF5Mn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdGllcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsImhhbmRzIiwidXNlU3RhdGUiLCJGb250QXdlc29tZUljb24iLCJmYVhtYXJrIiwiQWN0aXZpdHkiLCJBY3Rpdml0aWVzIiwicHJvcHMiLCJhY3Rpdml0aWVzRGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRpbWUiLCJpbWdQYXRoIiwibWFwIiwiaW5mb3JtYXRpb24iLCJpbmRleCIsImFjdGl2aXR5Qm9vbCIsInNldEFjdGl2aXR5Qm9vbCIsImRpc3BsYXlhY3Rpdml0eSIsInBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJhY3Rpdml0aWVzVG9EaXNwbGF5IiwiZGF0YXMiLCJpIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW4iLCJjdXJzb3IiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siLCJ0b3AiLCJiYWNrZ3JvdW5kIiwiY2xhc3NOYW1lIiwiYWN0U3ViU2VjdGlvbiIsInN1YnNlY3Rpb250ZXh0IiwiaDIiLCJpY29uIiwicmlnaHQiLCJwIiwiYWN0aXZpdGllc1RvRGlzcGxheTIiLCJpZCIsImNvbnRhaW5lciIsInN1YmNvbnRhaW5lciIsImFjdGl2aXRpZXNDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Activities.js\n");

/***/ })

});