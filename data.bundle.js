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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   newHeader: () => (/* binding */ newHeader)\n/* harmony export */ });\n/* harmony import */ var _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/clark-douglas.jpg */ \"./src/img/clark-douglas.jpg\");\n/* harmony import */ var _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/nerfee-mirandilla.jpg */ \"./src/img/nerfee-mirandilla.jpg\");\n/* harmony import */ var _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/lee-myungseong.jpg */ \"./src/img/lee-myungseong.jpg\");\n/* harmony import */ var _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/amadeo-valar.jpg */ \"./src/img/amadeo-valar.jpg\");\n/* harmony import */ var _img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pablo-merchan-montes.jpg */ \"./src/img/pablo-merchan-montes.jpg\");\n\n\n\n\n\n\nfunction newHeader() {\n\t\n\tconst header = document.createElement('header');\n\tconst logo = document.createElement('div');\n\tlogo.classList.add('logo');\n\tlogo.textContent = 'Delicioso';\n\n\tconst nav = document.createElement('nav');\n\tconst btns = [\n\t\t'Hours&Locations', 'Menus', 'About', 'Gallery', 'Events', 'Reservations'\n\t\t];\n\tbtns.forEach(btnTitle => {\n\t\tconst btn = document.createElement('button');\n\t\tbtn.textContent = btnTitle.toUpperCase();\n\t\tbtn.classList.add('nav-btn');\n\n\t\tnav.appendChild(btn);\n\t});\n\n\theader.appendChild(logo);\n\theader.appendChild(nav);\n\n\treturn header;\n};\n\nfunction content() {\n\tconst c = document.createElement('div');\n\tc.id = 'content';\n\n\tconst pictureContainer = document.createElement('div');\n\tpictureContainer.classList.add('picture-container');\n\t\n\t[_img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__, _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__].forEach(img => { \n\t\t\tconst i = document.createElement('img');\n\t\t\ti.src = img;\n\t\t\ti.alt = 'A plate of italian food';\n\t\t\tpictureContainer.appendChild(i);\n\n\t});\n\tc.appendChild(pictureContainer);\n\n\tconst descriptionContainer = document.createElement('div');\n\tdescriptionContainer.classList.add('description-container');\n\tconst description = document.createElement('p');\n\tdescription.textContent = descText;\n\tdescriptionContainer.appendChild(description);\n\n\tconst learnMore = document.createElement('button');\n\tlearnMore.id = 'learn-more-btn';\n\tlearnMore.textContent = 'LEARN MORE';\n\n\tdescriptionContainer.appendChild(learnMore);\n\n\tc.appendChild(descriptionContainer);\n\n\tconst cardsContainer = document.createElement('div');\n\tcardsContainer.classList.add('cards-container')\n\tlet shuffle = true;\n\tcards.forEach(card => {\n\t\tconst cardContainer = document.createElement('div');\n\t\tconst i = document.createElement('img');\n\t\tconst descContainer = document.createElement('div');\n\t\tconst title = document.createElement('h2');\n\t\tconst text = document.createElement('p');\n\t\tconst btnContainer = document.createElement('div');\n\n\t\tcardContainer.classList.add('card-container');\n\t\ti.classList = 'card-image';\n\t\tdescContainer.classList.add('card-description');\n\t\ttitle.classList.add('card-title');\n\t\tbtnContainer.classList.add('btn-container');\n\n\t\ti.src = card.image;\n\t\ttitle.textContent = card.title;\n\t\ttext.textContent = card.description;\n\t\t\n\t\tcard.buttons.forEach(btnTitle => {\n\t\t\tconst btn = document.createElement('button');\n\t\t\tbtn.classList.add('btn', 'card-btn');\n\t\t\tbtn.textContent = btnTitle;\n\t\t\tbtnContainer.appendChild(btn);\n\t\t});\n\n\t\tdescContainer.appendChild(title);\n\t\tdescContainer.appendChild(text);\n\t\tdescContainer.appendChild(btnContainer);\n\n\t\tif (shuffle)\n\t\t{\n\t\t\tcardContainer.appendChild(i);\n\t\t\tcardContainer.appendChild(descContainer);\n\t\t\tcardsContainer.appendChild(cardContainer);\n\t\t} \n\t\telse {\n\t\t\tcardContainer.appendChild(descContainer);\n\t\t\tcardsContainer.appendChild(cardContainer);\n\t\t\tcardContainer.appendChild(i);\n\t\t}\n\t\tshuffle = (shuffle) ? false : true;\n\t});\n\tc.appendChild(cardsContainer);\n\n\tconst featuredPress = document.createElement('div');\n\tfeaturedPress.classList.add('featured-press-container');\n\tconst featuredPressTitle = document.createElement('h1');\n\tfeaturedPressTitle.classList.add('featured-press-title');\n\tfeaturedPressTitle.textContent = 'Featured Press';\n\tfeaturedPress.appendChild(featuredPressTitle);\n\n\tpress.forEach(p => {\n\t\tconst container = document.createElement('div');\n\t\tcontainer.classList.add('press-container');\n\n\t\tconst title = document.createElement('div');\n\t\ttitle.classList.add('press-title');\n\t\ttitle.textContent = p.title.toUpperCase();\n\n\t\tconst eventName = document.createElement('div');\n\t\teventName.classList.add('event-name');\n\t\teventName.textContent = p.event_name.toUpperCase();\n\n\t\tcontainer.appendChild(title);\n\t\tcontainer.appendChild(eventName);\n\t\tfeaturedPress.appendChild(container);\n\t});\n\tc.appendChild(featuredPress);\n\n\tconst reservation = document.createElement('div');\n\treservation.classList.add('reservation');\n\treservation.style.backgroundImage = `url(${_img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_4__})`;\n\t\n\tconst reservationText = document.createElement('div');\n\treservationText.classList.add('reservation-text');\n\treservationText.textContent = 'Join us for dinner';\n\n\tconst reservationBtn = document.createElement('button');\n\treservationBtn.classList.add('reservation-btn');\n\treservationBtn.textContent = 'RESERVATIONS';\n\t\n\treservation.appendChild(reservationText);\n\treservation.appendChild(reservationBtn);\n\n\tc.appendChild(reservation);\n\n\treturn c;\n};\n\nfunction footer() {\n\tconst f = document.createElement('div');\n\tconst link = document.createElement('a');\n\n\tf.classList.add('footer');\n\tlink.classList.add('portfolio-link');\n\tlink.textContent = 'Copyright \\u00A9 Neil Taison Rigaud';\n\tlink.href = 'https://blackbird410.github.io/';\n\tlink.target = '_blank';\n\tf.appendChild(link);\n\n\treturn f;\n};\n\nconst press = [\n\t{\n\t\ttitle: 'Cary Magazine',\n\t\tevent_name: '2023 Maggy Awards Best New Restaurant',\n\t},\n\t{\n\t\ttitle: 'Thrillist',\n\t\tevent_name: 'The Best Italian Restaurants in Atlanta',\n\t},\n]\n\nconst cards = [\n\t{ \n\t\timage: _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__, \n\t\ttitle: 'Host A Party', \n\t\tdescription: \"We recommend celebrating all moments, big or small, or turning a business dinner into a festive feast. At Delicioso, you don't need an excuse to gather.\", \n\t\tbuttons: ['Atlanta', 'Cary'], \n\t},\n\t{ \n\t\timage: _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__, \n\t\ttitle: 'Menus', \n\t\tdescription: \"Come see the items features from our scratch made kitchen. Every items from our menu was selected carefully to please our customers and will satify your taste.\", \n\t\tbuttons: ['Atlanta', 'Cary'], \n\t},\n\n\n];\n\nconst descText  = 'Delicioso is a compilation of lively dining experiences. Delicioso celebrates the best of Italian American dishes with welcoming hospitality and service. Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis, pizzas and more. Staying true to the Italian dining traditions, Delicioso also offers a \"For the Table\" dining option curated for a family-style experience, offered nightly alongside the full a la carte menu.';\n\n\n//# sourceURL=webpack://restaurant-page/./src/data.js?");

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

/***/ }),

/***/ "./src/img/pablo-merchan-montes.jpg":
/*!******************************************!*\
  !*** ./src/img/pablo-merchan-montes.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"38e5ec6fd6d8a098548c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/pablo-merchan-montes.jpg?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/data.js");
/******/ 	
/******/ })()
;