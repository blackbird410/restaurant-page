/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./great-vibes/GreatVibes-Regular.ttf */ \"./src/great-vibes/GreatVibes-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./copperplate/OPTICopperplate-Heavy.otf */ \"./src/copperplate/OPTICopperplate-Heavy.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./copperplate/OPTICopperplate-Light.otf */ \"./src/copperplate/OPTICopperplate-Light.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./copperplate/OPTICopperplate.otf */ \"./src/copperplate/OPTICopperplate.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400;1,900&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,700;1,100;1,300&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n\tfont-family: 'cursiveFont';\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n\tfont-family: 'copperplate';\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_1___}),\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_2___}),\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_3___});\t\t\n}\n\n:root {\n\t--mainFont: 'Lato', Roboto, Helvetica, Arial, sans-serif;\t\n\t--logoFont: \"Cedarville Cursive\";\n\t--descFont: 'Lato', sans-serif;\n\t--cardTitleFont: 'cursiveFont';\n\t--pressTitleFont: 'copperplate', 'Lato', serif;\n\t--eventNameFont: Roboto;\n\n\t--headerBg: #141414;\n\t--contentBg: #3b3b3b;\n\n\t--imgSize: 350px;\n}\n\nbody {\n\theight: 100vh;\n\tpadding: 0;\n\tmargin: 0;\n\tdisplay: grid;\n\tfont-family: var(--mainFont);\n\tcolor: white;\n}\n\nheader {\n\tposition: fixed;\n\twidth: 95vw;\n\tbackground-color: var(--headerBg);\n\tdisplay: grid;\n\tgrid-template-columns: repeat(5, 1fr);\n\talign-items: center;\n\tmargin: 12px;\n\tpadding: 12px;\n}\n\n.logo {\n\ttext-align: center;\n\tfont-size: 2rem;\n\tfont-family: var(--logoFont);\n\tcolor: orange;\n\ttext-shadow: #FC0 1px 0 10px;\n}\n\nnav {\n\tgrid-column: 3 / -1;\n\t\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: right;\n\tgap: 12px;\n}\n\nbutton {\n\twidth: fit-content;\n\tpadding: 8px 12px;\n\tborder: none;\n\tbackground: inherit;\n\tcolor: white;\n}\n\n\n#content {\n\tbackground-color: var(--contentBg);\n\tdisplay: grid;\n\tpadding-top: min(150px, 40%);\n\talign-items: center;\n\tgap: 16px;\n}\n\n.picture-container,\n.description-container,\n.cards-container,\n.card-container, \n.featured-press-container {\n\tdisplay: grid;\n\tjustify-items: center;\n\tjustify-content: center;\n}\n\n.picture-container {\n\tgrid-template-rows: repeat(auto-fit, minmax(var(--imgSize), 1fr));\n\tgrid-template-columns: repeat(auto-fit, minmax(var(--imgSize), 1fr));\n\tgrid-auto-flow: row;\n\tpadding: 8px;\n\tgap: 12px;\n}\n\n.description-container {\n\tbackground: black;\n\ttext-align: center;\n\n\tgrid-template-columns: minmax(300px, 70%);\n\tpadding: 48px 16px;\n}\n\np {\n\tfont-size: 1.5rem;\n\tfont-weight: 300;\n\tline-height: 2rem;\n\tfont-style: italic;\n\tfont-family: var(--descFont);\n}\n\n#learn-more-btn,\n.card-btn {\n\tjustify-self: center;\n\tborder-radius: 0;\n\tborder: 2px solid white;\n\tfont-weight: 100;\n}\n\nbutton:hover,\n.press-title:hover {\n\tbackground-color: white;\n\tcolor: black;\n\tfont-weight: bold;\n}\n\nimg {\n\theight: var(--imgSize);\n\twidth: auto;\n\tmax-width: 100%;\n}\n\n.cards-container {\n\tgrid-template-rows: repeat(auto-fit, min(var(--imgSize), 1fr));\n\tgap: 16px;\n\tpadding: 0 1.5rem;\n}\n\n.card-container {\n\tgrid-template-columns: repeat(auto-fit, minmax(var(--imgSize), 1fr));\n\talign-items: center;\n\tgap: 16px;\n}\n\n\n.card-description,\n.press-title {\n\tbox-shadow: 5px 5px 10px gray;\n}\n\n.card-description {\n\tdisplay: grid;\n\tgrid-template-rows: 70px 1fr 50px;\n\n\tborder: 2px solid white;\n\tpadding: 16px;\n}\n\n.card-description p {\n\tmargin: 0;\n}\n\n.cards-container .btn-container {\n\tdisplay: flex;\n\tgap: 22px;\n\talign-items: center;\n}\n\n.btn-container,\n.card-title,\n.card-description {\n\n\tpadding-left: 16px;\n}\n\n.card-title,\n.featured-press-title {\n\tfont-family: var(--cardTitleFont);\n\tfont-size: 2rem;\n}\n\n.card-btn {\n\tborder: none;\n\tmin-width: 140px;\n\tfont-size: 1rem;\n\tfont-weight: 300;\n\tbackground-color: black;\n\tfont-family: var(--descFont);\n}\n\n.featured-press-container {\n\tgap: 36px;\n\ttext-align: center;\n\n}\n\n.press-container {\n\tjustify-self: stretch;\n}\n\n.press-title {\n\tfont-size: 1.8rem;\n\tborder: 2px solid white;\n\tpadding: 8px;\n\tfont-family: var(--pressTitleFont);\n\tmargin-bottom: 8px;\n}\n\n.event-name {\n\tfont-size: 1.2rem;\n\tfont-family: var(--eventNameFont);\n\tfont-weight: 100;\n}\n\n@media only screen and (max-width: 600px) {\n\tnav {\n\t\tgrid-column: 2 / -1;\n\n\t\tjustify-content: center;\n\t}\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ printMe)\n/* harmony export */ });\nfunction printMe() {\n  console.log('I get called from print.js!');\n}\n\n/*\nexport default const cards = [\n\t\t{ \n\t\t\timage: '', \n\t\t\ttitle: 'Host A Party', \n\t\t\tdescription: \"This is a description\", \n\t\t\tbuttons: ['Atlanta', 'Cary'], \n\t\t}, \n];\n\nexport default const descText  = 'Delicioso is a compilation of lively dining experiences. Delicioso celebrates the best of Italian American dishes with welcoming hospitality and service. Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis, pizzas and more. Staying true to the Italian dining traditions, Delicioso also offers a \"For the Table\" dining option curated for a family-style experience, offered nightly alongside the full a la carte menu.';\n*/\n\n\n//# sourceURL=webpack://restaurant-page/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/clark-douglas.jpg */ \"./src/img/clark-douglas.jpg\");\n/* harmony import */ var _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/nerfee-mirandilla.jpg */ \"./src/img/nerfee-mirandilla.jpg\");\n/* harmony import */ var _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/lee-myungseong.jpg */ \"./src/img/lee-myungseong.jpg\");\n/* harmony import */ var _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/amadeo-valar.jpg */ \"./src/img/amadeo-valar.jpg\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\n\n\n\n\n\n(0,_data_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\nfunction newHeader() {\n\t\n\tconst header = document.createElement('header');\n\tconst logo = document.createElement('div');\n\tlogo.classList.add('logo');\n\tlogo.textContent = 'Delicioso';\n\n\tconst nav = document.createElement('nav');\n\tconst btns = [\n\t\t'Hours&Locations', 'Menus', 'About', 'Gallery', 'Events', 'Reservations'\n\t\t];\n\tbtns.forEach(btnTitle => {\n\t\tconst btn = document.createElement('button');\n\t\tbtn.textContent = btnTitle.toUpperCase();\n\t\tbtn.classList.add('nav-btn');\n\n\t\tnav.appendChild(btn);\n\t});\n\n\theader.appendChild(logo);\n\theader.appendChild(nav);\n\n\treturn header;\n};\n\nfunction content() {\n\tconst c = document.createElement('div');\n\tc.id = 'content';\n\n\tconst pictureContainer = document.createElement('div');\n\tpictureContainer.classList.add('picture-container');\n\t\n\t[_img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_2__].forEach(img => { \n\t\t\tconst i = document.createElement('img');\n\t\t\ti.src = img;\n\t\t\ti.alt = 'A plate of italian food';\n\t\t\tpictureContainer.appendChild(i);\n\n\t});\n\tc.appendChild(pictureContainer);\n\n\tconst descriptionContainer = document.createElement('div');\n\tdescriptionContainer.classList.add('description-container');\n\tconst description = document.createElement('p');\n\tdescription.textContent = descText;\n\tdescriptionContainer.appendChild(description);\n\n\tconst learnMore = document.createElement('button');\n\tlearnMore.id = 'learn-more-btn';\n\tlearnMore.textContent = 'LEARN MORE';\n\n\tdescriptionContainer.appendChild(learnMore);\n\n\tc.appendChild(descriptionContainer);\n\n\tconst cardsContainer = document.createElement('div');\n\tcardsContainer.classList.add('cards-container')\n\tlet shuffle = true;\n\tcards.forEach(card => {\n\t\tconst cardContainer = document.createElement('div');\n\t\tconst i = document.createElement('img');\n\t\tconst descContainer = document.createElement('div');\n\t\tconst title = document.createElement('h2');\n\t\tconst text = document.createElement('p');\n\t\tconst btnContainer = document.createElement('div');\n\n\t\tcardContainer.classList.add('card-container');\n\t\ti.classList = 'card-image';\n\t\tdescContainer.classList.add('card-description');\n\t\ttitle.classList.add('card-title');\n\t\tbtnContainer.classList.add('btn-container');\n\n\t\ti.src = card.image;\n\t\ttitle.textContent = card.title;\n\t\ttext.textContent = card.description;\n\t\t\n\t\tcard.buttons.forEach(btnTitle => {\n\t\t\tconst btn = document.createElement('button');\n\t\t\tbtn.classList.add('btn', 'card-btn');\n\t\t\tbtn.textContent = btnTitle;\n\t\t\tbtnContainer.appendChild(btn);\n\t\t});\n\n\t\tdescContainer.appendChild(title);\n\t\tdescContainer.appendChild(text);\n\t\tdescContainer.appendChild(btnContainer);\n\n\t\tif (shuffle)\n\t\t{\n\t\t\tcardContainer.appendChild(i);\n\t\t\tcardContainer.appendChild(descContainer);\n\t\t\tcardsContainer.appendChild(cardContainer);\n\t\t} \n\t\telse {\n\t\t\tcardContainer.appendChild(descContainer);\n\t\t\tcardsContainer.appendChild(cardContainer);\n\t\t\tcardContainer.appendChild(i);\n\t\t}\n\t\tshuffle = (shuffle) ? false : true;\n\t});\n\tc.appendChild(cardsContainer);\n\n\tconst featuredPress = document.createElement('div');\n\tfeaturedPress.classList.add('featured-press-container');\n\tconst featuredPressTitle = document.createElement('h1');\n\tfeaturedPressTitle.classList.add('featured-press-title');\n\tfeaturedPressTitle.textContent = 'Featured Press';\n\tfeaturedPress.appendChild(featuredPressTitle);\n\n\tpress.forEach(p => {\n\t\tconst container = document.createElement('div');\n\t\tcontainer.classList.add('press-container');\n\n\t\tconst title = document.createElement('div');\n\t\ttitle.classList.add('press-title');\n\t\ttitle.textContent = p.title;\n\n\t\tconst eventName = document.createElement('div');\n\t\teventName.classList.add('event-name');\n\t\teventName.textContent = p.event_name;\n\n\t\tcontainer.appendChild(title);\n\t\tcontainer.appendChild(eventName);\n\t\tfeaturedPress.appendChild(container);\n\t});\n\tc.appendChild(featuredPress);\n\n\treturn c;\n};\n\n\n\n\n\n\nconst press = [\n\t{\n\t\ttitle: 'Cary Magazine',\n\t\tevent_name: '2023 Maggy Awards Best New Restaurant',\n\t},\n\t{\n\t\ttitle: 'Thrilist',\n\t\tevent_name: 'The Best Italian Restaurants in Atlanta',\n\t},\n]\n\nconst cards = [\n\t{ \n\t\timage: _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_3__, \n\t\ttitle: 'Host A Party', \n\t\tdescription: \"We recommend celebrating all moments, big or small, or turning a business dinner into a festive feast. At Delicioso, you don't need an excuse to gather.\", \n\t\tbuttons: ['Atlanta', 'Cary'], \n\t},\n\t{ \n\t\timage: _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_4__, \n\t\ttitle: 'Menus', \n\t\tdescription: \"Come see the items features from our scratch made kitchen. Every items from our menu was selected carefully to please our customers and will satify your taste.\", \n\t\tbuttons: ['Atlanta', 'Cary'], \n\t},\n\n\n];\n\nconst descText  = 'Delicioso is a compilation of lively dining experiences. Delicioso celebrates the best of Italian American dishes with welcoming hospitality and service. Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis, pizzas and more. Staying true to the Italian dining traditions, Delicioso also offers a \"For the Table\" dining option curated for a family-style experience, offered nightly alongside the full a la carte menu.';\n\n\ndocument.body.appendChild(newHeader());\ndocument.body.appendChild(content());\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/copperplate/OPTICopperplate-Heavy.otf":
/*!***************************************************!*\
  !*** ./src/copperplate/OPTICopperplate-Heavy.otf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01ce6f318db42eec4c24.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/copperplate/OPTICopperplate-Heavy.otf?");

/***/ }),

/***/ "./src/copperplate/OPTICopperplate-Light.otf":
/*!***************************************************!*\
  !*** ./src/copperplate/OPTICopperplate-Light.otf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"860a7f842cea4ad8c01a.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/copperplate/OPTICopperplate-Light.otf?");

/***/ }),

/***/ "./src/copperplate/OPTICopperplate.otf":
/*!*********************************************!*\
  !*** ./src/copperplate/OPTICopperplate.otf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06d92876f6b4f12f51a3.otf\";\n\n//# sourceURL=webpack://restaurant-page/./src/copperplate/OPTICopperplate.otf?");

/***/ }),

/***/ "./src/great-vibes/GreatVibes-Regular.ttf":
/*!************************************************!*\
  !*** ./src/great-vibes/GreatVibes-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f3b78d95140c3425300.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/great-vibes/GreatVibes-Regular.ttf?");

/***/ }),

/***/ "./src/img/amadeo-valar.jpg":
/*!**********************************!*\
  !*** ./src/img/amadeo-valar.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf181fcc734bd8d41c93.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/amadeo-valar.jpg?");

/***/ }),

/***/ "./src/img/clark-douglas.jpg":
/*!***********************************!*\
  !*** ./src/img/clark-douglas.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c50d1bbfe994608f71df.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/clark-douglas.jpg?");

/***/ }),

/***/ "./src/img/lee-myungseong.jpg":
/*!************************************!*\
  !*** ./src/img/lee-myungseong.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73f6bcaa6ee04c8f0620.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/lee-myungseong.jpg?");

/***/ }),

/***/ "./src/img/nerfee-mirandilla.jpg":
/*!***************************************!*\
  !*** ./src/img/nerfee-mirandilla.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"55d16baeb489274f58dc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/nerfee-mirandilla.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;