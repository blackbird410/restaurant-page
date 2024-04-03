/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./great-vibes/GreatVibes-Regular.ttf */ "./src/great-vibes/GreatVibes-Regular.ttf"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./copperplate/OPTICopperplate-Heavy.otf */ "./src/copperplate/OPTICopperplate-Heavy.otf"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./copperplate/OPTICopperplate-Light.otf */ "./src/copperplate/OPTICopperplate-Light.otf"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./copperplate/OPTICopperplate.otf */ "./src/copperplate/OPTICopperplate.otf"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300;1,400;1,900&display=swap);"]);\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,700;1,100;1,300&display=swap);"]);\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: "cursiveFont";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n  font-family: "copperplate";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}),\n    url(${___CSS_LOADER_URL_REPLACEMENT_2___}),\n    url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n}\n\n:root {\n  --mainFont: "Lato", Roboto, Helvetica, Arial, sans-serif;\n  --logoFont: "Cedarville Cursive";\n  --descFont: "Lato", sans-serif;\n  --cardTitleFont: "cursiveFont";\n  --pressTitleFont: "copperplate", "Lato", serif;\n  --eventNameFont: Roboto;\n\n  --headerBg: #141414;\n  --contentBg: #3b3b3b;\n\n  --imgSize: 350px;\n}\n\nbody {\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  grid-template-rows: 1fr min(15%, 50px);\n  font-family: var(--mainFont);\n  color: white;\n}\n\nheader {\n  position: fixed;\n  width: 95%;\n  background-color: var(--headerBg);\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  align-items: center;\n  margin: 1rem;\n  padding: 1rem;\n  border: 2px solid gray;\n}\n\n.logo {\n  text-align: center;\n  font-size: 2rem;\n  font-family: var(--logoFont);\n  color: orange;\n  text-shadow: #fc0 1px 0 10px;\n}\n\nnav {\n  grid-column: 3 / -1;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: right;\n  gap: 12px;\n}\n\nbutton {\n  width: fit-content;\n  padding: 8px 12px;\n  border: none;\n  background: black;\n  color: white;\n}\n\nnav button {\n  background: inherit;\n}\n\nnav button:last-of-type {\n  background-color: white;\n  color: black;\n}\n\nnav button:last-of-type:hover {\n  background-color: brown;\n  color: white;\n}\n\n#content {\n  background-color: var(--contentBg);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: min(150px, 40%) 0 50px 0;\n  align-items: center;\n  gap: 1rem;\n}\n\n.description-container,\n.cards-container,\n.card-container,\n.featured-press-container {\n  display: grid;\n  justify-items: center;\n  justify-content: center;\n}\n\n.event-options-container,\n.picture-container {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 8px;\n  gap: 12px;\n}\n\n.description-container {\n  width: 100vw;\n  background: black;\n  text-align: center;\n\n  grid-template-columns: minmax(var(--imgSize), 70%);\n  padding: 48px 16px;\n}\n\np {\n  font-size: 1.5rem;\n  font-weight: 300;\n  line-height: 2rem;\n  font-style: italic;\n  font-family: var(--descFont);\n}\n\n#learn-more-btn,\n.card-btn {\n  justify-self: center;\n  border-radius: 0;\n  border: 2px solid white;\n  font-weight: 100;\n}\n\nbutton:hover,\n.press-title:hover {\n  background: white;\n  color: black;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 400px;\n}\n\n.cards-container {\n  width: 80%;\n  grid-template-rows: repeat(auto-fit, min(var(--imgSize), 1fr));\n  grid-template-columns: repeat(auto-fit, min(var(--imgSize), 1fr));\n  gap: 1rem;\n  padding: 0 1.5rem;\n}\n\n.card-container {\n  grid-template-columns: repeat(auto-fit, minmax(var(--imgSize), 1fr));\n  align-items: center;\n  gap: 1rem;\n}\n\n.card-description,\n.press-title,\n.gallery-photo {\n  box-shadow: 5px 5px 10px gray;\n}\n\n.card-description {\n  width: 80%;\n  display: grid;\n  grid-template-rows: 70px 1fr 50px;\n\n  border: 2px solid white;\n  padding: 16px;\n  gap: 1rem;\n}\n\n.card-description p {\n  margin: 0;\n}\n\n.cards-container .btn-container {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));\n  gap: 1rem;\n  align-items: center;\n}\n\n.card-title,\n.card-description {\n  padding-left: 16px;\n}\n\n.card-title,\n.featured-press-title,\n.section-title {\n  font-family: var(--cardTitleFont);\n  font-size: 2rem;\n}\n\n.card-btn,\n.direction-btn {\n  border: none;\n  min-width: 140px;\n  font-size: 1rem;\n  font-weight: 300;\n  font-family: var(--descFont);\n}\n\n.featured-press-container {\n  row-gap: 36px;\n  text-align: center;\n  width: 80%;\n  justify-content: center;\n\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n}\n\n.featured-press-title {\n  grid-column: 1 / -1;\n  align-self: center;\n  justify-self: center;\n}\n\n.press-container {\n  display: grid;\n  justify-items: center;\n}\n\n.press-title {\n  width: 350px;\n  font-size: 1.3rem;\n  border: 2px solid white;\n  padding: 8px;\n  font-family: var(--pressTitleFont);\n  margin-bottom: 8px;\n}\n\n.event-name {\n  font-size: 1.2rem;\n  font-family: var(--eventNameFont);\n  font-weight: 100;\n}\n\n.card,\n.direction-container {\n  background-size: max(90%, 400px), contain;\n  background-repeat: no-repeat;\n  background-position: center;\n\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n}\n\n.card {\n  width: max(80%, 400px);\n  height: max(80%, 400px);\n  grid-template-rows: repeat(2, 100px);\n}\n\n.card-text {\n  font-family: var(--cardTitleFont);\n  font-size: 2rem;\n  background-color: black;\n  opacity: 0.8;\n  width: fit-content;\n  padding: 12px;\n}\n\n.card-btn,\n.direction-btn {\n  font-size: 1rem;\n  padding: 16px;\n}\n\n.direction-btn,\n.card .card-btn {\n  background-color: brown;\n}\n\n.direction-btn:hover,\n.card .card-btn:hover {\n  background: white;\n}\n\n.footer {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  padding: 1rem;\n  background-color: var(--headerBg);\n}\n\n.portfolio-link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.portfolio-link:hover {\n  color: orange;\n}\n\n.main-picture {\n  width: 80%;\n  height: auto;\n  flex-grow: 1;\n  flex-shrink: 3;\n}\n\n.main-section {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(var(--imgSize), 1fr));\n  padding: 2rem;\n  gap: 2rem;\n}\n\n.information-container,\n.about-container {\n  display: grid;\n  grid-template-rows: 4rem 1fr;\n  text-align: center;\n  gap: 16px;\n  padding: 16px;\n}\n\n.content-container,\n.about-container {\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px;\n}\n\n.section-title {\n  font-size: 3rem;\n}\n\n.contact-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.contact-info a {\n  color: orange;\n  text-decoration: underline;\n}\n\n.contact-info a:hover {\n  color: lightblue;\n  cursor: pointer;\n}\n\n.title-container {\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n}\n\n.comment {\n  font-weight: normal;\n  font-style: italic;\n}\n\n.comment:before {\n  content: ", ";\n}\n\n.content-container button {\n  align-self: center;\n  padding: 16px 24px;\n}\n\n.media-container {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  text-align: center;\n  justify-items: stretch;\n  gap: 12px;\n}\n\n.media-title {\n  font-size: 2rem;\n}\n\n.icon-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n}\n\n.fa {\n  padding: 10px;\n  font-size: 30px;\n  width: 30px;\n  height: auto;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 50%;\n  background-color: black;\n  color: white;\n}\n\n.fa:hover {\n  background-color: white;\n  color: black;\n}\n\n.direction-container {\n  width: 80%;\n  height: 80%;\n  min-height: 400px;\n}\n\n.menu-options {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.options-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n}\n\n.menu-container {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  justify-items: center;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.meal-container {\n  flex-basis: 500px;\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-options button {\n  padding: 12px 28px;\n  font-size: 1rem;\n}\n\n.menu-options button:hover {\n  background-color: brown;\n  color: white;\n}\n\n.meal-header {\n  border-bottom: 2px solid white;\n}\n\n.meal-comment {\n  text-align: right;\n  font-size: 1.2rem;\n  color: gold;\n}\n\n.items-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 16px;\n}\n\n.item-container {\n  display: inline-block;\n}\n\n.item-title {\n  font-weight: bold;\n  font-size: 1.5rem;\n  font-style: normal;\n}\n\n.item-title::after {\n  content: " ";\n}\n\n.item-number {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.main-card {\n  width: 80%;\n  min-height: 500px;\n}\n\n.main-card {\n  align-content: end;\n}\n\n.main-card .section-title {\n  grid-row: 1 / -1;\n  justify-self: left;\n  align-self: end;\n  text-align: center;\n  background-color: var(--contentBg);\n  padding: 1rem 0;\n  width: 80%;\n}\n\n.about-description {\n  background-color: inherit;\n}\n\n.about-description p {\n  font-size: 1.7rem;\n}\n\n.team-container {\n  width: 80%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  padding: 18px;\n  justify-content: center;\n  justify-items: center;\n}\n\n.employee-container {\n  display: grid;\n  flex-basis: 300px;\n  grid-template-rows: 1fr 40px;\n  text-align: center;\n  justify-items: center;\n}\n\n.employee-image {\n  height: 100%;\n  width: auto;\n  max-width: 100%;\n  max-height: 300px;\n}\n\n.employee-name {\n  background: white;\n  color: black;\n  font-size: 1.2rem;\n  font-weight: bold;\n  place-self: stretch;\n  display: grid;\n  align-items: center;\n  padding: 12px;\n}\n\n.gallery-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  max-width: 80%;\n}\n\n.event-guide-btn {\n  border: 2px solid white;\n}\n\n.event-container {\n  display: grid;\n  grid-template-rows: 4fr 1fr;\n  justify-items: center;\n  background: white;\n  color: black;\n  font-weight: bold;\n}\n\n.event-container:hover {\n  opacity: 0.7;\n}\n\n.event-name {\n  display: grid;\n  align-items: center;\n}\n\nform {\n  width: min(80%, 350px);\n  display: grid;\n  grid-template-rows: repeat(50px, 4);\n  grid-template-columns: auto;\n  gap: 1rem;\n  padding: 1rem;\n}\n\nform .section-title {\n  text-align: center;\n}\n\nform label,\nform button {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\nform label span {\n  font-weight: normal;\n  font-style: italic;\n}\n\nform button {\n  width: 100%;\n}\n\n.input-container {\n  display: grid;\n  grid-template-rows: 2fr 3fr;\n  gap: 5px;\n}\n\n@media only screen and (max-width: 600px) {\n  nav {\n    grid-column: 2 / -1;\n    justify-content: center;\n  }\n\n  img {\n    max-width: 350px;\n  }\n}\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?',
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?",
        );

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?',
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?",
        );

        /***/
      },

    /***/ "./src/data.js":
      /*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   events: () => (/* binding */ events),\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   gallery: () => (/* binding */ gallery),\n/* harmony export */   hoursAndLocations: () => (/* binding */ hoursAndLocations),\n/* harmony export */   menus: () => (/* binding */ menus),\n/* harmony export */   newHeader: () => (/* binding */ newHeader),\n/* harmony export */   reservations: () => (/* binding */ reservations)\n/* harmony export */ });\n/* harmony import */ var _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/clark-douglas.jpg */ "./src/img/clark-douglas.jpg");\n/* harmony import */ var _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/nerfee-mirandilla.jpg */ "./src/img/nerfee-mirandilla.jpg");\n/* harmony import */ var _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/lee-myungseong.jpg */ "./src/img/lee-myungseong.jpg");\n/* harmony import */ var _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/amadeo-valar.jpg */ "./src/img/amadeo-valar.jpg");\n/* harmony import */ var _img_jonas_albert_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/jonas-albert.jpg */ "./src/img/jonas-albert.jpg");\n/* harmony import */ var _img_mgg_vitchakorn_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/mgg-vitchakorn.jpg */ "./src/img/mgg-vitchakorn.jpg");\n/* harmony import */ var _img_tim_toomey_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/tim-toomey.jpg */ "./src/img/tim-toomey.jpg");\n/* harmony import */ var _img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pablo-merchan-montes.jpg */ "./src/img/pablo-merchan-montes.jpg");\n/* harmony import */ var _img_direction_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/direction.png */ "./src/img/direction.png");\n/* harmony import */ var _img_alexandru_bogdan_ghita_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/alexandru-bogdan-ghita.jpg */ "./src/img/alexandru-bogdan-ghita.jpg");\n/* harmony import */ var _img_davey_gravy_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/davey-gravy.jpg */ "./src/img/davey-gravy.jpg");\n/* harmony import */ var _img_albert_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/albert.jpg */ "./src/img/albert.jpg");\n/* harmony import */ var _img_the_storyteller_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/the-storyteller.jpg */ "./src/img/the-storyteller.jpg");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Press {\n  constructor() {\n    this.featuredPressContainer = document.createElement("div");\n    this.featuredPressContainer.classList.add("featured-press-container");\n    this.featuredPressTitle = document.createElement("h1");\n    this.featuredPressTitle.classList.add("featured-press-title");\n    this.featuredPressTitle.textContent = "Featured Press";\n    this.featuredPressContainer.appendChild(this.featuredPressTitle);\n  }\n\n  addPress(p) {\n    const container = document.createElement("div");\n    container.classList.add("press-container");\n\n    const title = document.createElement("div");\n    title.classList.add("press-title");\n    title.textContent = p.title.toUpperCase();\n\n    const eventName = document.createElement("div");\n    eventName.classList.add("event-name");\n    eventName.textContent = p.event_name.toUpperCase();\n\n    container.appendChild(title);\n    container.appendChild(eventName);\n    this.featuredPressContainer.appendChild(container);\n  }\n\n  get featuredPress() {\n    return this.featuredPressContainer;\n  }\n}\n\nclass Card {\n  constructor(bgImage, text, btnTitle) {\n    this.cardContainer = document.createElement("div");\n    this.cardContainer.classList.add("card");\n    this.cardContainer.style.backgroundImage = `url(${bgImage})`;\n\n    this.cardText = document.createElement("div");\n    this.cardText.classList.add("card-text");\n    this.cardText.textContent = text;\n\n    this.cardBtn = document.createElement("button");\n    this.cardBtn.classList.add("card-btn");\n    this.cardBtn.textContent = btnTitle;\n\n    this.cardContainer.appendChild(this.cardText);\n    this.cardContainer.appendChild(this.cardBtn);\n  }\n\n  get card() {\n    return this.cardContainer;\n  }\n}\n\nclass Menu {\n  constructor(meal, comment, content) {\n    this.mealContainer = document.createElement("div");\n    this.mealContainer.classList.add("meal-container");\n\n    this.mealHeader = document.createElement("div");\n    this.mealHeader.classList.add("meal-header");\n\n    this.mealName = document.createElement("div");\n    this.mealName.classList.add("meal-name", "section-title");\n    this.mealName.textContent = meal;\n    this.mealHeader.appendChild(this.mealName);\n\n    this.mealComment = document.createElement("div");\n    this.mealComment.classList.add("meal-comment");\n    this.mealComment.textContent = comment;\n    this.mealHeader.appendChild(this.mealComment);\n\n    this.mealContainer.appendChild(this.mealHeader);\n\n    this.container = document.createElement("div");\n    this.container.classList.add("items-container");\n    content.forEach((food) => {\n      const c = document.createElement("div");\n      c.classList.add("item-container");\n\n      const title = document.createElement("em");\n      title.classList.add("item-title");\n      title.textContent = food.title.toUpperCase();\n      c.appendChild(title);\n\n      let content = "";\n      food.contents.forEach((elt) => {\n        content += elt + ", ";\n      });\n      c.innerHTML += content.slice(0, -2);\n\n      const number = document.createElement("em");\n      number.classList.add("item-number");\n      number.textContent = food.number;\n      c.appendChild(number);\n\n      this.container.appendChild(c);\n    });\n    this.mealContainer.appendChild(this.container);\n  }\n\n  get meal() {\n    return this.mealContainer;\n  }\n}\n\nclass Description {\n  constructor(textContent) {\n    this.descriptionContainer = document.createElement("div");\n    this.descriptionContainer.classList.add("description-container");\n    this.description = document.createElement("p");\n    this.description.textContent = textContent;\n    this.descriptionContainer.appendChild(this.description);\n  }\n\n  get text() {\n    return this.descriptionContainer;\n  }\n}\n\nclass Employee {\n  constructor(name, img, job) {\n    this.container = document.createElement("div");\n    this.container.classList.add("employee-container");\n\n    this.imgContainer = document.createElement("img");\n    this.imgContainer.classList.add("employee-image");\n    this.imgContainer.src = img;\n\n    this.name = document.createElement("div");\n    this.name.classList.add("employee-name");\n    this.name.textContent = name;\n\n    this.container.appendChild(this.imgContainer);\n    this.container.appendChild(this.name);\n\n    this.job = document.createElement("div");\n    this.job.textContent = job;\n    this.job.classList.add("employee-job");\n    this.container.appendChild(this.job);\n  }\n}\n\nclass Gallery {\n  constructor() {\n    this.container = document.createElement("div");\n    this.container.classList.add("gallery-container");\n  }\n\n  get gallery() {\n    return this.container;\n  }\n\n  addPhoto(photo) {\n    const p = document.createElement("img");\n    p.classList.add("gallery-photo");\n    p.src = photo;\n    this.container.appendChild(p);\n  }\n}\n\nclass ReservationForm {\n  constructor() {\n    this.form = document.createElement("form");\n    this.form.id = "businessForm";\n\n    this.title = document.createElement("div");\n    this.title.classList.add("section-title");\n    this.title.textContent = "Reservations";\n    this.form.appendChild(this.title);\n\n    this.fields = ["Location", "Number of People", "Date", "Time"];\n    this.fields.forEach((field) => {\n      const container = document.createElement("div");\n      container.classList.add("input-container");\n\n      let id = field.toLowerCase().split(" ").join("-");\n      const label = document.createElement("label");\n      label.setAttribute("for", id);\n      label.textContent = field;\n\n      if (field == "Location" || field == "Date") {\n        const span = document.createElement("span");\n        span.textContent = " - Required";\n        label.appendChild(span);\n      }\n      container.appendChild(label);\n\n      if (field == "Date") {\n        const input = document.createElement("input");\n        input.id = id;\n        input.name = id;\n        input.type = "date";\n        container.appendChild(input);\n        this.form.appendChild(container);\n      } else {\n        const input = document.createElement("select");\n        input.id = id;\n        input.name = id;\n        input.placeholder = field;\n        let values;\n\n        switch (field) {\n          case "Location":\n            values = form_options.locations;\n            break;\n          case "Time":\n            values = form_options.get_hour_frames();\n            break;\n          default:\n            values = form_options.get_people();\n            break;\n        }\n\n        values.forEach((v) => {\n          const o = document.createElement("option");\n          o.value = v;\n          o.textContent = v;\n          input.appendChild(o);\n        });\n        container.appendChild(input);\n        this.form.appendChild(container);\n      }\n    });\n\n    this.btn = document.createElement("button");\n    this.btn.textContent = "Find a table";\n    this.form.appendChild(this.btn);\n  }\n\n  get content() {\n    return this.form;\n  }\n}\n\nconst form_options = {\n  locations: ["Atlanta", "Cary"],\n  max_number_of_people: 8,\n  open_hours: "7:00 AM - 11:00 PM",\n  get_people() {\n    let peoples = ["1 Person"];\n    for (let p = 2; p <= this.max_number_of_people; p++)\n      peoples.push(`${p} People`);\n    return peoples;\n  },\n  get_hour_frames() {\n    let hours = [];\n    let start = this.open_hours.split("-")[0].trim().split(" ");\n    let end = this.open_hours.split("-")[1].trim().split(" ");\n\n    start =\n      start[1] == "AM"\n        ? Number(start[0].split(":").join(""))\n        : Number(start[0].split(":").join("")) + 1200;\n    end =\n      end[1] == "AM"\n        ? Number(end[0].split(":").join(""))\n        : Number(end[0].split(":").join("")) + 1200;\n\n    let span = 30;\n    let h = 0;\n    let m = 0;\n    let p;\n    while (start <= end) {\n      h = Math.floor(start / 100) == 12 ? 12 : Math.floor(start / 100) % 12;\n      m = start % 100 ? start % 100 : "00";\n      p = Math.floor(start / 100) < 12 ? "AM" : "PM";\n      hours.push(`${h}:${m} ${p}`);\n      start += span;\n      span = span == 30 ? 70 : 30;\n    }\n\n    return hours;\n  },\n};\n\nfunction reservations() {\n  const content = document.createElement("div");\n  content.id = "content";\n\n  const newForm = new ReservationForm();\n  content.appendChild(newForm.content);\n\n  return content;\n}\n\nfunction events() {\n  const content = document.createElement("div");\n  content.id = "content";\n\n  const picture = document.createElement("div");\n  picture.classList.add("card", "main-card");\n  picture.style.backgroundImage = `url(${_img_the_storyteller_jpg__WEBPACK_IMPORTED_MODULE_12__})`;\n  content.appendChild(picture);\n\n  const title = document.createElement("div");\n  title.classList.add("section-title");\n  title.textContent = "Private Dining & Events";\n  picture.appendChild(title);\n\n  const desc = document.createElement("div");\n  desc.classList.add("description-container");\n\n  const descTitle = document.createElement("div");\n  descTitle.classList.add("section-title", "event-title");\n  descTitle.textContent = "Book and event";\n  desc.appendChild(descTitle);\n\n  const text = document.createElement("p");\n  text.classList.add("description-text");\n  text.textContent =\n    "For all inquiries, please fill out the form below and we\'ll be in touch soon.";\n  desc.appendChild(text);\n\n  const btn = document.createElement("button");\n  btn.classList.add("card-btn", "event-guide-btn");\n  btn.textContent = "DOWNLOAD PRIVATE DINING GUIDE";\n  desc.appendChild(btn);\n  content.appendChild(desc);\n\n  const eventOptions = document.createElement("div");\n  eventOptions.classList.add("event-options-container");\n\n  options.forEach((option) => {\n    const optionContainer = document.createElement("div");\n    optionContainer.classList.add("event-container");\n\n    const i = document.createElement("img");\n    i.classList.add("event-image");\n    i.src = option.img;\n    optionContainer.appendChild(i);\n\n    const eventName = document.createElement("div");\n    eventName.classList.add("event-name");\n    eventName.textContent = option.name.toUpperCase();\n    optionContainer.appendChild(eventName);\n    eventOptions.appendChild(optionContainer);\n  });\n  content.appendChild(eventOptions);\n\n  return content;\n}\n\nfunction gallery() {\n  const content = document.createElement("div");\n  content.id = "content";\n\n  const title = document.createElement("div");\n  title.classList.add("section-title");\n  title.textContent = "Delicioso Gallery";\n\n  content.appendChild(title);\n\n  const newGallery = new Gallery();\n  gallery_photos.forEach((photo) => newGallery.addPhoto(photo));\n  content.appendChild(newGallery.gallery);\n\n  return content;\n}\n\nfunction about() {\n  const content = document.createElement("div");\n  content.id = "content";\n\n  const picture = document.createElement("div");\n  picture.classList.add("card", "main-card");\n  picture.style.backgroundImage = `url(${_img_albert_jpg__WEBPACK_IMPORTED_MODULE_11__})`;\n  content.appendChild(picture);\n\n  const title = document.createElement("div");\n  title.classList.add("section-title");\n  title.textContent = "About";\n  picture.appendChild(title);\n\n  const desc = new Description(descText);\n  desc.text.classList.add("about-description");\n  content.appendChild(desc.text);\n\n  const cardsContainer = document.createElement("div");\n  cardsContainer.classList.add("cards-container", "about-cards");\n  let shuffle = true;\n  aboutCards.forEach((card) => {\n    const cardContainer = document.createElement("div");\n    const i = document.createElement("img");\n    const descContainer = document.createElement("div");\n    const title = document.createElement("h2");\n    const text = document.createElement("p");\n\n    cardContainer.classList.add("card-container");\n    i.classList = "card-image";\n    descContainer.classList.add("card-description");\n    title.classList.add("card-title");\n\n    i.src = card.image;\n    title.textContent = card.title;\n    text.textContent = card.description;\n\n    descContainer.appendChild(title);\n    descContainer.appendChild(text);\n\n    if (shuffle) {\n      cardContainer.appendChild(i);\n      cardContainer.appendChild(descContainer);\n      cardsContainer.appendChild(cardContainer);\n    } else {\n      cardContainer.appendChild(descContainer);\n      cardsContainer.appendChild(cardContainer);\n      cardContainer.appendChild(i);\n    }\n    shuffle = shuffle ? false : true;\n  });\n  content.appendChild(cardsContainer);\n\n  const team = document.createElement("div");\n  team.classList.add("team-container");\n\n  const teamTitle = document.createElement("div");\n  teamTitle.textContent = "Team";\n  teamTitle.classList.add("section-title");\n  content.appendChild(teamTitle);\n\n  team_members.forEach((member) => {\n    const m = new Employee(member.name, member.img, member.job);\n    team.appendChild(m.container);\n  });\n  content.appendChild(team);\n\n  return content;\n}\n\nfunction menus() {\n  const content = document.createElement("div");\n  content.id = "content";\n\n  const picture = document.createElement("img");\n  picture.classList.add("main-picture");\n  picture.src = _img_davey_gravy_jpg__WEBPACK_IMPORTED_MODULE_10__;\n  content.appendChild(picture);\n\n  const menuOptions = document.createElement("div");\n  menuOptions.classList.add("menu-options");\n  const menuTitle = document.createElement("div");\n  menuTitle.classList.add("section-title");\n  menuTitle.textContent = "Atlanta";\n  menuOptions.appendChild(menuTitle);\n\n  const options = [\n    "DINNER",\n    "BRUNCH",\n    "HAPPY HOUR",\n    "WINE & COCKTAILS",\n    "DESERT",\n  ];\n  const optionsContainer = document.createElement("div");\n  optionsContainer.classList.add("options-container");\n  options.forEach((option) => {\n    const btn = document.createElement("button");\n    btn.classList.add("menu-btn");\n    btn.textContent = option;\n    optionsContainer.appendChild(btn);\n  });\n\n  menuOptions.appendChild(optionsContainer);\n\n  const pdfDownloadBtn = document.createElement("button");\n  pdfDownloadBtn.classList.add("pdf-download-btn");\n  pdfDownloadBtn.textContent = "DOWNLOAD PDF";\n\n  menuOptions.appendChild(pdfDownloadBtn);\n  content.appendChild(menuOptions);\n\n  const menuContainer = document.createElement("div");\n  menuContainer.classList.add("menu-container");\n  menu_items.forEach((item) => {\n    const menu = new Menu(item.meal, item.comment, item.content);\n    menuContainer.appendChild(menu.meal);\n  });\n  content.appendChild(menuContainer);\n\n  return content;\n}\n\nfunction hoursAndLocations() {\n  const content = document.createElement("div");\n  content.id = "content";\n\n  const picture = document.createElement("img");\n  picture.classList.add("main-picture");\n  picture.src = _img_tim_toomey_jpg__WEBPACK_IMPORTED_MODULE_6__;\n  content.appendChild(picture);\n\n  const main = document.createElement("div");\n  main.classList.add("main-section");\n\n  const informations = document.createElement("div");\n  informations.classList.add("information-container");\n\n  const hoursAndLoc = document.createElement("div");\n  hoursAndLoc.classList.add("section-title");\n  hoursAndLoc.textContent = "Hours & Location";\n  informations.appendChild(hoursAndLoc);\n\n  const contentContainer = document.createElement("div");\n  contentContainer.classList.add("content-container");\n\n  const contactInfo = document.createElement("div");\n  contactInfo.classList.add("contact-info");\n  const address = document.createElement("a");\n  address.textContent = contact_info.address;\n  const phone = document.createElement("a");\n  phone.textContent = contact_info.phone;\n  const mail = document.createElement("a");\n  mail.textContent = contact_info.mail;\n  contactInfo.appendChild(address);\n  contactInfo.appendChild(phone);\n  contactInfo.appendChild(mail);\n  contentContainer.appendChild(contactInfo);\n\n  eating_time.forEach((eatingTime) => {\n    const container = document.createElement("div");\n    container.classList.add("eating-time-container");\n\n    const titleContainer = document.createElement("div");\n    const title = document.createElement("div");\n    titleContainer.classList.add("title-container");\n    title.classList.add("eating-time-title");\n    title.textContent = eatingTime.title;\n    titleContainer.appendChild(title);\n\n    if (eatingTime.comment) {\n      const comment = document.createElement("div");\n      comment.classList.add("comment");\n      comment.textContent = eatingTime.comment;\n      titleContainer.appendChild(comment);\n    }\n    container.appendChild(titleContainer);\n\n    eatingTime.schedules.forEach((sched) => {\n      const schedule = document.createElement("div");\n      schedule.classList.add("schedule");\n      schedule.textContent = sched;\n      container.appendChild(schedule);\n    });\n    contentContainer.appendChild(container);\n  });\n\n  const orderBtn = document.createElement("button");\n  orderBtn.textContent = "ORDER ONLINE";\n  contentContainer.appendChild(orderBtn);\n\n  informations.appendChild(contentContainer);\n  main.appendChild(informations);\n\n  const aboutContainer = document.createElement("div");\n  aboutContainer.classList.add("about-container");\n\n  const aboutTitle = document.createElement("div");\n  aboutTitle.classList.add("section-title", "about-title");\n  aboutTitle.textContent = "About";\n  aboutContainer.appendChild(aboutTitle);\n\n  const aboutContent = document.createElement("div");\n  aboutContent.classList.add("about-content");\n  about_content.forEach((parag) => {\n    const p = document.createElement("p");\n    p.textContent = parag;\n    aboutContent.appendChild(p);\n  });\n  aboutContainer.appendChild(aboutContent);\n  main.appendChild(aboutContainer);\n  content.appendChild(main);\n\n  const mediaContainer = document.createElement("div");\n  mediaContainer.classList.add("media-container");\n  const mediaTitle = document.createElement("div");\n  mediaTitle.classList.add("media-title");\n  mediaTitle.textContent = "FOLLOW US ON SOCIAL";\n  mediaContainer.appendChild(mediaTitle);\n\n  const iconContainer = document.createElement("div");\n  iconContainer.classList.add("icon-container");\n  media_icons.forEach((icon) => {\n    const i = document.createElement("a");\n    icon.icon_classes.forEach((c) => i.classList.add(c));\n    i.href = icon.href;\n    iconContainer.appendChild(i);\n  });\n  mediaContainer.appendChild(iconContainer);\n  content.appendChild(mediaContainer);\n\n  const directionContainer = document.createElement("div");\n  directionContainer.classList.add("direction-container");\n  directionContainer.style.backgroundImage = `url(${_img_direction_png__WEBPACK_IMPORTED_MODULE_8__})`;\n  const directionBtn = document.createElement("button");\n  directionBtn.classList.add("direction-btn");\n  directionBtn.id = "dir-btn";\n  directionBtn.textContent = "GET DIRECTIONS";\n  directionContainer.appendChild(directionBtn);\n  content.appendChild(directionContainer);\n\n  const newPress = new Press();\n  hl_press.forEach((p) => newPress.addPress(p));\n  content.appendChild(newPress.featuredPress);\n\n  const galleryCard = new Card(\n    _img_alexandru_bogdan_ghita_jpg__WEBPACK_IMPORTED_MODULE_9__,\n    "Delicioso Atlanta gallery",\n    "GALLERY",\n  );\n  content.appendChild(galleryCard.card);\n\n  return content;\n}\n\nfunction newHeader() {\n  const header = document.createElement("header");\n  const logo = document.createElement("div");\n  logo.classList.add("logo");\n  logo.textContent = "Delicioso";\n\n  const nav = document.createElement("nav");\n  const btns = [\n    "Hours&Locations",\n    "Menus",\n    "About",\n    "Gallery",\n    "Events",\n    "Reservations",\n  ];\n  btns.forEach((btnTitle) => {\n    const btn = document.createElement("button");\n    btn.id = btnTitle.toLowerCase();\n    btn.textContent = btnTitle.toUpperCase();\n    btn.classList.add("nav-btn");\n\n    nav.appendChild(btn);\n  });\n\n  header.appendChild(logo);\n  header.appendChild(nav);\n\n  return header;\n}\n\nfunction content() {\n  const c = document.createElement("div");\n  c.id = "content";\n\n  const pictureContainer = document.createElement("div");\n  pictureContainer.classList.add("picture-container");\n\n  [_img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__, _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__].forEach((img) => {\n    const i = document.createElement("img");\n    i.src = img;\n    i.alt = "A plate of italian food";\n    pictureContainer.appendChild(i);\n  });\n  c.appendChild(pictureContainer);\n\n  const desc = new Description(descText);\n  const learnMore = document.createElement("button");\n  learnMore.id = "learn-more-btn";\n  learnMore.textContent = "LEARN MORE";\n\n  desc.text.appendChild(learnMore);\n\n  c.appendChild(desc.text);\n\n  const cardsContainer = document.createElement("div");\n  cardsContainer.classList.add("cards-container");\n  let shuffle = true;\n  cards.forEach((card) => {\n    const cardContainer = document.createElement("div");\n    const i = document.createElement("img");\n    const descContainer = document.createElement("div");\n    const title = document.createElement("h2");\n    const text = document.createElement("p");\n    const btnContainer = document.createElement("div");\n\n    cardContainer.classList.add("card-container");\n    i.classList = "card-image";\n    descContainer.classList.add("card-description");\n    title.classList.add("card-title");\n    btnContainer.classList.add("btn-container");\n\n    i.src = card.image;\n    title.textContent = card.title;\n    text.textContent = card.description;\n\n    card.buttons.forEach((btnTitle) => {\n      const btn = document.createElement("button");\n      btn.classList.add("btn", "card-btn");\n      btn.textContent = btnTitle;\n      btnContainer.appendChild(btn);\n    });\n\n    descContainer.appendChild(title);\n    descContainer.appendChild(text);\n    descContainer.appendChild(btnContainer);\n\n    if (shuffle) {\n      cardContainer.appendChild(i);\n      cardContainer.appendChild(descContainer);\n      cardsContainer.appendChild(cardContainer);\n    } else {\n      cardContainer.appendChild(descContainer);\n      cardsContainer.appendChild(cardContainer);\n      cardContainer.appendChild(i);\n    }\n    shuffle = shuffle ? false : true;\n  });\n  c.appendChild(cardsContainer);\n\n  const newPress = new Press();\n  press.forEach((p) => {\n    newPress.addPress(p);\n  });\n  c.appendChild(newPress.featuredPress);\n\n  const reservation = new Card(\n    _img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_7__,\n    "Join Us For dinner",\n    "RESERVATIONS",\n  );\n  c.appendChild(reservation.card);\n\n  return c;\n}\n\nfunction footer() {\n  const f = document.createElement("div");\n  const link = document.createElement("a");\n\n  f.classList.add("footer");\n  link.classList.add("portfolio-link");\n  link.textContent = "Copyright \\u00A9 Neil Taison Rigaud";\n  link.href = "https://blackbird410.github.io/blackbird410";\n  link.target = "_blank";\n  f.appendChild(link);\n\n  return f;\n}\n\nconst press = [\n  {\n    title: "Cary Magazine",\n    event_name: "2023 Maggy Awards: Best New Restaurant",\n  },\n  {\n    title: "Thrillist",\n    event_name: "The Best Italian Restaurants in Atlanta",\n  },\n];\n\nconst hl_press = [\n  {\n    title: "Thrillist",\n    event_name: "The Best Italian Restaurants in Atlanta",\n  },\n  {\n    title: "Jezebel",\n    event_name: "100 hottest restaurants",\n  },\n];\n\nconst cards = [\n  {\n    image: _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    title: "Host A Party",\n    description:\n      "We recommend celebrating all moments, big or small, or turning a business dinner into a festive feast. At Delicioso, you don\'t need an excuse to gather.",\n    buttons: ["Atlanta", "Cary"],\n  },\n  {\n    image: _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    title: "Menus",\n    description:\n      "Come see the items features from our scratch made kitchen. Every items from our menu was selected carefully to please our customers and will satify your taste.",\n    buttons: ["Atlanta", "Cary"],\n  },\n];\n\nconst aboutCards = [\n  {\n    image: _img_mgg_vitchakorn_jpg__WEBPACK_IMPORTED_MODULE_5__,\n    title: "Delicioso Carry",\n    description:\n      "Seasonal changes, outstanding ingredients and a made-from-scratch philosophy guide Delicioso\'s menu of house-made focaccia and pasta, antispasti, made-to-order wood-fired pizzas, and piatti. The chef curated dinner and desert menus, pair with the well balanced wine and beverage program. Located at Fenton in Cary, NC, this casual yet polished family-style Italian restaurant features 120 indoor dining seats, 60 seats outdoors on the semi-covered patio, and a 12-seat bar.",\n  },\n  {\n    image: _img_jonas_albert_jpg__WEBPACK_IMPORTED_MODULE_4__,\n    title: "Delicioso Atlanta",\n    description:\n      "Located at Avalon in Alpharotta, GA, Delicioso Atlanta\'s restaurant\'s open-concept dining room is anchored around the kitchen\'s wood-burning oven, reminiscent of the hearth in a family home. Accented by reclaimed barn wood and refined ceramic tile, the modern space envelops guests in a welcoming atmosphere-whether they\'re visiting the bar for a hand-crafted cocktail or a glass of wine, grabbing a pizza with the kids or sitting down for a family-style dinner with friends and colleagues.",\n  },\n];\n\nconst descText =\n  \'Delicioso is a compilation of lively dining experiences. Delicioso celebrates the best of Italian American dishes with welcoming hospitality and service. Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis, pizzas and more. Staying true to the Italian dining traditions, Delicioso also offers a "For the Table" dining option curated for a family-style experience, offered nightly alongside the full a la carte menu.\';\n\nconst contact_info = {\n  address: "900 3rd St, Alpharotta, GA 30009",\n  phone: "(678) 722-5455",\n  mail: "Delicioso@theindigoroad.com",\n};\n\nconst eating_time = [\n  {\n    title: "Brunch",\n    comment: "",\n    schedules: ["Saturday + Sunday: 11 a.m. - 2:30 p.m."],\n  },\n  {\n    title: "Dinner",\n    comment: "",\n    schedules: [\n      "Sunday: 5-9 p.m.",\n      "Monday - Thursday: 5 - 10 p.m.",\n      "Friday + Saturday: 5 - 11 p.m.",\n    ],\n  },\n  {\n    title: "Happy Hour",\n    comment: "available at the bar",\n    schedules: ["Monday - Friday: 5 - 7 p.m."],\n  },\n];\n\nconst about_content = [\n  "Located within Alpharotta\'s Avalon, Delicioso, which means more than delicious, is just that - a compilation of lively dining experiences, top-notch service and quality American Italian cuisine that sets the stage for genuine connection over a great meal.",\n  `Delicioso\'s cuisine puts a twist on treasured classics and introducing modern culinary techniques with the changing of the seasons. House-made pastas, cheeses and other hand-crafted ingredients abound in the from-scratch kitchen, and guests will taste the culinary team\'s attention to detail in every bite. Staying true to Italian dining traditions, Delicioso also offers a "For the table" dining option that allows for a fun, family-style experience, offered nightly alongside the full a la carte menu.`,\n];\n\nconst media_icons = [\n  {\n    icon: "facebook",\n    icon_classes: ["fa", "fa-facebook"],\n    href: "#",\n  },\n  {\n    icon: "twitter",\n    icon_classes: ["fa", "fa-twitter"],\n    href: "#",\n  },\n  {\n    icon: "instagram",\n    icon_classes: ["fa", "fa-instagram"],\n    href: "#",\n  },\n];\n\nconst menu_items = [\n  {\n    meal: "Antipasti",\n    comment: "Before the meal",\n    content: [\n      {\n        title: "Caesar salad",\n        contents: [\n          "hearts of romaine",\n          "focaccia crouton",\n          "parmesan dressing",\n        ],\n        number: 14,\n      },\n      {\n        title: "Colletta chopped salad",\n        contents: [\n          "Kale",\n          "iceberg",\n          "ceci beans",\n          "cherry tomatoes",\n          "roasted olives",\n          "Toscano salami ricotta salata",\n          "pepperoncino",\n          "olive-brine vinaigrette",\n        ],\n        number: 16,\n      },\n      {\n        title: "Fire roasted octopus",\n        contents: [\n          "spicy tomato puree",\n          "crispy capers",\n          "smoked olives",\n          "herbs",\n        ],\n        number: 19,\n      },\n      {\n        title: "Burrata",\n        contents: [\n          "wood-roasted delicata squash",\n          "Bose pears",\n          "Calabrian hot honey",\n        ],\n        number: 18,\n      },\n      {\n        title: "Shrimp scampi",\n        contents: [\n          "lemon",\n          "parsley",\n          "garlic",\n          "butter",\n          "toasted flat bread",\n        ],\n        number: 18,\n      },\n      {\n        title: "Meatballs",\n        contents: [\n          "CAB",\n          "pork and veal",\n          "san marzano tomato",\n          "polenta",\n          "parmesan",\n          "basil",\n        ],\n        number: 15,\n      },\n      {\n        title: "Prosciutto di parma",\n        contents: [\n          "parmesan",\n          "honeycomb",\n          "seasonal fruit",\n          "fried flatbread",\n        ],\n        number: 25,\n      },\n    ],\n  },\n\n  // --------------------------------------------------------\n  {\n    meal: "Pizza",\n    comment: "From the brick oven",\n    content: [\n      {\n        title: "Margherita",\n        contents: ["san marzano tomato", "mozzarella", "basil"],\n        number: 17,\n      },\n      {\n        title: "Pistachio pesto",\n        contents: [\n          "Smoked Mozzarella",\n          "pickled red onion",\n          "Roman artichoke",\n          "pistachio pesto",\n          "parmesan",\n        ],\n        number: 21,\n      },\n      {\n        title: "Nduja",\n        contents: [\n          "Spicy sausage",\n          "fire roasted red pepper",\n          "peperoncino",\n          "fontina",\n        ],\n        number: 18,\n      },\n      {\n        title: "Calabrese",\n        contents: [\n          "calabrese salami",\n          "calabrian chili",\n          "olive",\n          "mozzarella",\n          "honey",\n        ],\n        number: 18,\n      },\n      {\n        title: "Fungi",\n        contents: [\n          "roasted mushrooms",\n          "truffle cream",\n          "aged fontina",\n          "herbs",\n        ],\n        number: 19,\n      },\n    ],\n  },\n\n  //----------------------------------------------\n  {\n    meal: "Pasta",\n    comment: "Made fresh daily",\n    content: [\n      {\n        title: "Rigatoni",\n        contents: ["CAB bolognese", "tomato", "parmesan", "basil"],\n        number: 28,\n      },\n      {\n        title: "Black pepper taglia telle",\n        contents: ["pork tesa", "egg yolk", "brodo", "chives"],\n        number: 27,\n      },\n      {\n        title: "Spaghetti",\n        contents: ["san marzano tomato", "shaved garlic", "basil", "olive oil"],\n        number: 26,\n      },\n      {\n        title: "Malfaldine",\n        contents: ["Fra Diavolo", "shrimp", "mussels", "lemon", "parsley"],\n        number: 28,\n      },\n      {\n        title: "Lasagna",\n        contents: [\n          "CAB bolognese",\n          "tomato",\n          "parmesan",\n          "mozzarella",\n          "whipped ricotta",\n        ],\n        number: 28,\n      },\n      {\n        title: "Ravioli",\n        contents: ["herb ricotta", "house italian", "sausage", "vodka sauce"],\n        number: 28,\n      },\n      {\n        title: "Balanzoni",\n        contents: [\n          "roasted eggplant",\n          "saffron",\n          "San Marzano dried tomatoes",\n          "fennel pollen",\n          "ricotta salata",\n        ],\n        number: 27,\n      },\n      {\n        title: "",\n        contents: ["gluten-free pasta available"],\n        number: "",\n      },\n    ],\n  },\n\n  // ----------------------------------------------------\n  {\n    meal: "Piatti",\n    comment: "Composed entrees",\n    content: [\n      {\n        title: "CAB flat iron",\n        contents: [\n          "cavalo nero",\n          "crispy potatoes",\n          "salsa verde",\n          "crispy shallots",\n        ],\n        number: 34,\n      },\n      {\n        title: \'Chicken "Cacciatore"\',\n        contents: [\n          "grilled half chicken",\n          "onion",\n          "trumpet mushrooms",\n          "fire roasted bell peppers",\n          "olives",\n          "tomato gravy",\n        ],\n        number: 36,\n      },\n      {\n        title: "Bone-in pork chop",\n        contents: [\n          "apple cider brine",\n          "parsnip",\n          "roasted brussels sprouts",\n          "mostarda",\n        ],\n        number: 36,\n      },\n      {\n        title: "Chicken parmesan",\n        contents: [\n          "crispy Joyce Farms breast",\n          "spaghetti",\n          "vodka sauce",\n          "mozzarella",\n          "basil",\n        ],\n        number: 28,\n      },\n      {\n        title: \'Grilled steelhead trout "A la puntanesca"\',\n        contents: [\n          "confit cherry tomatoes",\n          "olives",\n          "capers",\n          "saffron potato puree",\n        ],\n        number: 36,\n      },\n    ],\n  },\n];\n\nconst team_members = [\n  {\n    name: "Peter Sanders",\n    img: _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    job: "Culinary Director",\n  },\n  {\n    name: "Alexi Ivanof",\n    img: _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    job: "General Manager",\n  },\n  {\n    name: "Vinsmoke Sanji",\n    img: _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    job: "Chef de Cuisine",\n  },\n  {\n    name: "Gojo Satorou",\n    img: _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    job: "Pastry, Cary",\n  },\n  {\n    name: "Kilua Zoldyck",\n    img: _img_jonas_albert_jpg__WEBPACK_IMPORTED_MODULE_4__,\n    job: "Atlanta Area Director",\n  },\n  {\n    name: "Monkey D. Luffy",\n    img: _img_mgg_vitchakorn_jpg__WEBPACK_IMPORTED_MODULE_5__,\n    job: "Founder",\n  },\n];\n\nconst gallery_photos = [\n  _img_albert_jpg__WEBPACK_IMPORTED_MODULE_11__,\n  _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__,\n  _img_alexandru_bogdan_ghita_jpg__WEBPACK_IMPORTED_MODULE_9__,\n  _img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_7__,\n  _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__,\n  _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__,\n  _img_tim_toomey_jpg__WEBPACK_IMPORTED_MODULE_6__,\n  _img_jonas_albert_jpg__WEBPACK_IMPORTED_MODULE_4__,\n  _img_mgg_vitchakorn_jpg__WEBPACK_IMPORTED_MODULE_5__,\n];\n\nconst options = [\n  {\n    name: "Atlanta Private Dining Room",\n    img: _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__,\n  },\n  {\n    name: "Patio Events",\n    img: _img_albert_jpg__WEBPACK_IMPORTED_MODULE_11__,\n  },\n];\n\n\n//# sourceURL=webpack://restaurant-page/./src/data.js?',
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");\n\n\n\ndocument.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.newHeader)());\ndisplayContent();\n\nfunction addEvents() {\n  Array.from(document.querySelectorAll(".nav-btn")).forEach((btn) => {\n    btn.addEventListener("click", displayContent);\n  });\n  document.querySelector(".logo").addEventListener("click", displayContent);\n}\n\nfunction displayContent(e) {\n  let target = "";\n  if (e) {\n    target = e.currentTarget.id;\n    document.body.querySelector("#content").remove();\n    document.body.querySelector(".footer").remove();\n  }\n\n  switch (target) {\n    case "hours&locations":\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.hoursAndLocations)());\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n      break;\n    case "menus":\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.menus)());\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n      break;\n    case "about":\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.about)());\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n      break;\n    case "gallery":\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.gallery)());\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n      break;\n    case "events":\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.events)());\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n      break;\n    case "reservations":\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.reservations)());\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n      break;\n    default:\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.content)());\n      document.body.appendChild((0,_data_js__WEBPACK_IMPORTED_MODULE_1__.footer)());\n      break;\n  }\n\n  addEvents();\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?',
        );

        /***/
      },

    /***/ "./src/copperplate/OPTICopperplate-Heavy.otf":
      /*!***************************************************!*\
  !*** ./src/copperplate/OPTICopperplate-Heavy.otf ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "01ce6f318db42eec4c24.otf";\n\n//# sourceURL=webpack://restaurant-page/./src/copperplate/OPTICopperplate-Heavy.otf?',
        );

        /***/
      },

    /***/ "./src/copperplate/OPTICopperplate-Light.otf":
      /*!***************************************************!*\
  !*** ./src/copperplate/OPTICopperplate-Light.otf ***!
  \***************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "860a7f842cea4ad8c01a.otf";\n\n//# sourceURL=webpack://restaurant-page/./src/copperplate/OPTICopperplate-Light.otf?',
        );

        /***/
      },

    /***/ "./src/copperplate/OPTICopperplate.otf":
      /*!*********************************************!*\
  !*** ./src/copperplate/OPTICopperplate.otf ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "06d92876f6b4f12f51a3.otf";\n\n//# sourceURL=webpack://restaurant-page/./src/copperplate/OPTICopperplate.otf?',
        );

        /***/
      },

    /***/ "./src/great-vibes/GreatVibes-Regular.ttf":
      /*!************************************************!*\
  !*** ./src/great-vibes/GreatVibes-Regular.ttf ***!
  \************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "9f3b78d95140c3425300.ttf";\n\n//# sourceURL=webpack://restaurant-page/./src/great-vibes/GreatVibes-Regular.ttf?',
        );

        /***/
      },

    /***/ "./src/img/albert.jpg":
      /*!****************************!*\
  !*** ./src/img/albert.jpg ***!
  \****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "dd5268622da82ce97ef9.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/albert.jpg?',
        );

        /***/
      },

    /***/ "./src/img/alexandru-bogdan-ghita.jpg":
      /*!********************************************!*\
  !*** ./src/img/alexandru-bogdan-ghita.jpg ***!
  \********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "a0d04819cd742c12bff2.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/alexandru-bogdan-ghita.jpg?',
        );

        /***/
      },

    /***/ "./src/img/amadeo-valar.jpg":
      /*!**********************************!*\
  !*** ./src/img/amadeo-valar.jpg ***!
  \**********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "cf181fcc734bd8d41c93.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/amadeo-valar.jpg?',
        );

        /***/
      },

    /***/ "./src/img/clark-douglas.jpg":
      /*!***********************************!*\
  !*** ./src/img/clark-douglas.jpg ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "c50d1bbfe994608f71df.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/clark-douglas.jpg?',
        );

        /***/
      },

    /***/ "./src/img/davey-gravy.jpg":
      /*!*********************************!*\
  !*** ./src/img/davey-gravy.jpg ***!
  \*********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "ccca848ca5b8e70458bd.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/davey-gravy.jpg?',
        );

        /***/
      },

    /***/ "./src/img/direction.png":
      /*!*******************************!*\
  !*** ./src/img/direction.png ***!
  \*******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "5269a69df4971984c267.png";\n\n//# sourceURL=webpack://restaurant-page/./src/img/direction.png?',
        );

        /***/
      },

    /***/ "./src/img/jonas-albert.jpg":
      /*!**********************************!*\
  !*** ./src/img/jonas-albert.jpg ***!
  \**********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "8fce45539158a7c74756.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/jonas-albert.jpg?',
        );

        /***/
      },

    /***/ "./src/img/lee-myungseong.jpg":
      /*!************************************!*\
  !*** ./src/img/lee-myungseong.jpg ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "73f6bcaa6ee04c8f0620.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/lee-myungseong.jpg?',
        );

        /***/
      },

    /***/ "./src/img/mgg-vitchakorn.jpg":
      /*!************************************!*\
  !*** ./src/img/mgg-vitchakorn.jpg ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "0ca25807a920f73a0876.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/mgg-vitchakorn.jpg?',
        );

        /***/
      },

    /***/ "./src/img/nerfee-mirandilla.jpg":
      /*!***************************************!*\
  !*** ./src/img/nerfee-mirandilla.jpg ***!
  \***************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "55d16baeb489274f58dc.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/nerfee-mirandilla.jpg?',
        );

        /***/
      },

    /***/ "./src/img/pablo-merchan-montes.jpg":
      /*!******************************************!*\
  !*** ./src/img/pablo-merchan-montes.jpg ***!
  \******************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "38e5ec6fd6d8a098548c.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/pablo-merchan-montes.jpg?',
        );

        /***/
      },

    /***/ "./src/img/the-storyteller.jpg":
      /*!*************************************!*\
  !*** ./src/img/the-storyteller.jpg ***!
  \*************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "85a72239e4fc43261d41.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/the-storyteller.jpg?',
        );

        /***/
      },

    /***/ "./src/img/tim-toomey.jpg":
      /*!********************************!*\
  !*** ./src/img/tim-toomey.jpg ***!
  \********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "901b797f27e3037d50b1.jpg";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tim-toomey.jpg?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ index: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
