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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   events: () => (/* binding */ events),\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   gallery: () => (/* binding */ gallery),\n/* harmony export */   hoursAndLocations: () => (/* binding */ hoursAndLocations),\n/* harmony export */   menus: () => (/* binding */ menus),\n/* harmony export */   newHeader: () => (/* binding */ newHeader),\n/* harmony export */   reservations: () => (/* binding */ reservations)\n/* harmony export */ });\n/* harmony import */ var _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/clark-douglas.jpg */ \"./src/img/clark-douglas.jpg\");\n/* harmony import */ var _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/nerfee-mirandilla.jpg */ \"./src/img/nerfee-mirandilla.jpg\");\n/* harmony import */ var _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/lee-myungseong.jpg */ \"./src/img/lee-myungseong.jpg\");\n/* harmony import */ var _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/amadeo-valar.jpg */ \"./src/img/amadeo-valar.jpg\");\n/* harmony import */ var _img_jonas_albert_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/jonas-albert.jpg */ \"./src/img/jonas-albert.jpg\");\n/* harmony import */ var _img_mgg_vitchakorn_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/mgg-vitchakorn.jpg */ \"./src/img/mgg-vitchakorn.jpg\");\n/* harmony import */ var _img_tim_toomey_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/tim-toomey.jpg */ \"./src/img/tim-toomey.jpg\");\n/* harmony import */ var _img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pablo-merchan-montes.jpg */ \"./src/img/pablo-merchan-montes.jpg\");\n/* harmony import */ var _img_direction_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/direction.png */ \"./src/img/direction.png\");\n/* harmony import */ var _img_alexandru_bogdan_ghita_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/alexandru-bogdan-ghita.jpg */ \"./src/img/alexandru-bogdan-ghita.jpg\");\n/* harmony import */ var _img_davey_gravy_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/davey-gravy.jpg */ \"./src/img/davey-gravy.jpg\");\n/* harmony import */ var _img_albert_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/albert.jpg */ \"./src/img/albert.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Press {\n\n\tconstructor()\n\t{\n\t\tthis.featuredPressContainer = document.createElement('div');\n\t\tthis.featuredPressContainer.classList.add('featured-press-container');\n\t\tthis.featuredPressTitle = document.createElement('h1');\n\t\tthis.featuredPressTitle.classList.add('featured-press-title');\n\t\tthis.featuredPressTitle.textContent = 'Featured Press';\n\t\tthis.featuredPressContainer.appendChild(this.featuredPressTitle);\n\t}\n\n\taddPress(p) {\n\t\tconst container = document.createElement('div');\n\t\tcontainer.classList.add('press-container');\n\n\t\tconst title = document.createElement('div');\n\t\ttitle.classList.add('press-title');\n\t\ttitle.textContent = p.title.toUpperCase();\n\n\t\tconst eventName = document.createElement('div');\n\t\teventName.classList.add('event-name');\n\t\teventName.textContent = p.event_name.toUpperCase();\n\n\t\tcontainer.appendChild(title);\n\t\tcontainer.appendChild(eventName);\n\t\tthis.featuredPressContainer.appendChild(container);\n\t};\n\n\tget featuredPress() {\n\t\treturn this.featuredPressContainer;\n\t};\n\n}\n\nclass Card {\n\tconstructor(bgImage, text, btnTitle) {\n\t\tthis.cardContainer = document.createElement('div');\n\t\tthis.cardContainer.classList.add('card');\n\t\tthis.cardContainer.style.backgroundImage = `url(${bgImage})`;\n\t\t\t\n\t\tthis.cardText = document.createElement('div');\n\t\tthis.cardText.classList.add('card-text');\n\t\tthis.cardText.textContent = text;\n\n\t\tthis.cardBtn = document.createElement('button');\n\t\tthis.cardBtn.classList.add('card-btn');\n\t\tthis.cardBtn.textContent = btnTitle;\n\t\t\t\n\t\tthis.cardContainer.appendChild(this.cardText);\n\t\tthis.cardContainer.appendChild(this.cardBtn);\n\t}\n\n\tget card() {\n\t\treturn this.cardContainer;\n\t}\n\n}\n\nclass Menu {\n\t\n\tconstructor(meal, comment, content) {\n\t\tthis.mealContainer = document.createElement('div');\n\t\tthis.mealContainer.classList.add('meal-container');\n\n\t\tthis.mealHeader = document.createElement('div');\n\t\tthis.mealHeader.classList.add('meal-header');\n\n\t\tthis.mealName = document.createElement('div');\n\t\tthis.mealName.classList.add('meal-name', 'section-title');\n\t\tthis.mealName.textContent = meal;\n\t\tthis.mealHeader.appendChild(this.mealName);\n\n\t\tthis.mealComment = document.createElement('div');\n\t\tthis.mealComment.classList.add('meal-comment');\n\t\tthis.mealComment.textContent = comment;\n\t\tthis.mealHeader.appendChild(this.mealComment);\n\n\t\tthis.mealContainer.appendChild(this.mealHeader);\n\t\t\n\t\tthis.container = document.createElement('div');\n\t\tthis.container.classList.add('items-container');\n\t\tcontent.forEach(food => {\n\t\t\tconst c = document.createElement('div');\n\t\t\tc.classList.add('item-container');\n\n\t\t\tconst title = document.createElement('em');\n\t\t\ttitle.classList.add('item-title');\n\t\t\ttitle.textContent = food.title.toUpperCase();\n\t\t\tc.appendChild(title);\n\n\t\t\tlet content = '';\n\t\t\tfood.contents.forEach(elt => {\n\t\t\t\tcontent += elt + ', ';\n\t\t\t});\n\t\t\tc.innerHTML += content.slice(0, -2);\n\n\t\t\tconst number = document.createElement('em');\n\t\t\tnumber.classList.add('item-number');\n\t\t\tnumber.textContent = food.number;\n\t\t\tc.appendChild(number);\n\n\t\t\tthis.container.appendChild(c);\n\t\t});\n\t\tthis.mealContainer.appendChild(this.container);\n\t}\n\n\tget meal() {\n\t\treturn this.mealContainer;\n\t}\n\n\n}\n\nclass Description {\n\tconstructor(textContent) {\n\t\t\n\t\tthis.descriptionContainer = document.createElement('div');\n\t\tthis.descriptionContainer.classList.add('description-container');\n\t\tthis.description = document.createElement('p');\n\t\tthis.description.textContent = textContent;\n\t\tthis.descriptionContainer.appendChild(this.description);\n\t}\n\n\tget text() {\n\t\treturn this.descriptionContainer;\n\t}\n}\n\nclass Employee {\n\tconstructor(name, img, job) {\n\t\tthis.container = document.createElement('div');\n\t\tthis.container.classList.add('employee-container')\n\t\t\n\t\tthis.imgContainer = document.createElement('img');\n\t\tthis.imgContainer.classList.add('employee-image');\n\t\tthis.imgContainer.src = img;\n\n\t\tthis.name = document.createElement('div');\n\t\tthis.name.classList.add('employee-name');\n\t\tthis.name.textContent = name;\n\n\t\tthis.container.appendChild(this.imgContainer);\n\t\tthis.container.appendChild(this.name);\n\n\t\tthis.job = document.createElement('div');\n\t\tthis.job.textContent = job;\n\t\tthis.job.classList.add('employee-job');\n\t\tthis.container.appendChild(this.job);\n\t}\n}\n\nfunction about() {\n\tconst content = document.createElement('div');\n\tcontent.id = 'content';\n\n\tconst picture = document.createElement('div');\n\tpicture.classList.add('card', 'main-card');\n\tpicture.style.backgroundImage = `url(${_img_albert_jpg__WEBPACK_IMPORTED_MODULE_11__})`;\n\tcontent.appendChild(picture);\n\n\tconst title = document.createElement('div');\n\ttitle.classList.add('section-title');\n\ttitle.textContent = 'About';\n\tpicture.appendChild(title);\n\n\tconst desc = new Description(descText);\n\tdesc.text.classList.add('about-description');\n\tcontent.appendChild(desc.text);\n\n\tconst cardsContainer = document.createElement('div');\n\tcardsContainer.classList.add('cards-container', 'about-cards');\n\tlet shuffle = true;\n\taboutCards.forEach(card => {\n\t\tconst cardContainer = document.createElement('div');\n\t\tconst i = document.createElement('img');\n\t\tconst descContainer = document.createElement('div');\n\t\tconst title = document.createElement('h2');\n\t\tconst text = document.createElement('p');\n\n\t\tcardContainer.classList.add('card-container');\n\t\ti.classList = 'card-image';\n\t\tdescContainer.classList.add('card-description');\n\t\ttitle.classList.add('card-title');\n\n\t\ti.src = card.image;\n\t\ttitle.textContent = card.title;\n\t\ttext.textContent = card.description;\n\t\t\n\t\tdescContainer.appendChild(title);\n\t\tdescContainer.appendChild(text);\n\n\t\tif (shuffle)\n\t\t{\n\t\t\tcardContainer.appendChild(i);\n\t\t\tcardContainer.appendChild(descContainer);\n\t\t\tcardsContainer.appendChild(cardContainer);\n\t\t} \n\t\telse {\n\t\t\tcardContainer.appendChild(descContainer);\n\t\t\tcardsContainer.appendChild(cardContainer);\n\t\t\tcardContainer.appendChild(i);\n\t\t}\n\t\tshuffle = (shuffle) ? false : true;\n\t});\n\tcontent.appendChild(cardsContainer);\n\t\n\tconst team = document.createElement('div');\n\tteam.classList.add('team-container');\n\n\tconst teamTitle = document.createElement('div');\n\tteamTitle.textContent = \"Team\";\n\tteamTitle.classList.add('section-title');\n\tcontent.appendChild(teamTitle);\n\n\tteam_members.forEach(member => {\n\t\tconst m = new Employee(member.name, member.img, member.job);\n\t\tteam.appendChild(m.container);\n\t});\n\tcontent.appendChild(team);\n\t\n\treturn content;\n}\n\nfunction menus() {\n\tconst content = document.createElement('div');\n\tcontent.id = 'content';\n\n\tconst picture = document.createElement('img');\n\tpicture.classList.add('main-picture');\n\tpicture.src = _img_davey_gravy_jpg__WEBPACK_IMPORTED_MODULE_10__;\n\tcontent.appendChild(picture);\n\n\tconst menuOptions = document.createElement('div');\n\tmenuOptions.classList.add('menu-options');\n\tconst menuTitle = document.createElement('div');\n\tmenuTitle.classList.add('section-title');\n\tmenuTitle.textContent = 'Atlanta';\n\tmenuOptions.appendChild(menuTitle);\n\n\tconst options = ['DINNER', 'BRUNCH', 'HAPPY HOUR', 'WINE & COCKTAILS', 'DESERT'];\n\tconst optionsContainer = document.createElement('div');\n\toptionsContainer.classList.add('options-container');\n\toptions.forEach(option => {\n\t\tconst btn = document.createElement('button');\n\t\tbtn.classList.add('menu-btn');\n\t\tbtn.textContent = option;\n\t\toptionsContainer.appendChild(btn);\n\t});\n\n\tmenuOptions.appendChild(optionsContainer);\n\n\tconst pdfDownloadBtn = document.createElement('button');\n\tpdfDownloadBtn.classList.add('pdf-download-btn');\n\tpdfDownloadBtn.textContent = 'DOWNLOAD PDF';\n\n\tmenuOptions.appendChild(pdfDownloadBtn);\n\tcontent.appendChild(menuOptions);\n\n\tconst menuContainer = document.createElement('div');\n\tmenuContainer.classList.add('menu-container');\n\tmenu_items.forEach(item => {\n\t\tconst menu = new Menu(item.meal, item.comment, item.content);\n\t\tmenuContainer.appendChild(menu.meal);\n\t});\n\tcontent.appendChild(menuContainer);\n\n\treturn content;\n}\n\nfunction hoursAndLocations() {\n\t\tconst content = document.createElement('div');\n\t\tcontent.id = 'content';\n\n\t\tconst picture = document.createElement('img');\n\t\tpicture.classList.add('main-picture');\n\t\tpicture.src = _img_tim_toomey_jpg__WEBPACK_IMPORTED_MODULE_6__;\n\t\tcontent.appendChild(picture);\n\n\t\tconst main = document.createElement('div');\n\t\tmain.classList.add('main-section');\n\n\t\tconst informations = document.createElement('div');\n\t\tinformations.classList.add('information-container');\n\n\t\tconst hoursAndLoc =  document.createElement('div');\n\t\thoursAndLoc.classList.add('section-title');\n\t\thoursAndLoc.textContent =  'Hours & Location';\n\t\tinformations.appendChild(hoursAndLoc);\n\n\t\tconst contentContainer = document.createElement('div');\n\t\tcontentContainer.classList.add('content-container');\n\n\t\tconst contactInfo = document.createElement('div');\n\t\tcontactInfo.classList.add('contact-info');\n\t\tconst address = document.createElement('a');\n\t\taddress.textContent = contact_info.address;\n\t\tconst phone = document.createElement('a');\n\t\tphone.textContent = contact_info.phone;\n\t\tconst mail = document.createElement('a');\n\t\tmail.textContent = contact_info.mail;\n\t\tcontactInfo.appendChild(address);\n\t\tcontactInfo.appendChild(phone);\n\t\tcontactInfo.appendChild(mail);\n\t\tcontentContainer.appendChild(contactInfo);\n\n\t\teating_time.forEach(eatingTime => {\n\t\t\tconst container = document.createElement('div');\n\t\t\tcontainer.classList.add('eating-time-container');\n\n\t\t\tconst titleContainer = document.createElement('div');\n\t\t\tconst title = document.createElement('div');\n\t\t\ttitleContainer.classList.add('title-container');\n\t\t\ttitle.classList.add('eating-time-title');\n\t\t\ttitle.textContent = eatingTime.title;\n\t\t\ttitleContainer.appendChild(title);\n\n\t\t\tif (eatingTime.comment)\n\t\t\t{\n\t\t\t\tconst comment = document.createElement('div');\n\t\t\t\tcomment.classList.add('comment');\n\t\t\t\tcomment.textContent = eatingTime.comment;\n\t\t\t\ttitleContainer.appendChild(comment);\n\t\t\t}\n\t\t\tcontainer.appendChild(titleContainer);\n\n\t\t\teatingTime.schedules.forEach(sched => {\t\n\t\t\t\t\tconst schedule = document.createElement('div');\n\t\t\t\t\tschedule.classList.add('schedule');\n\t\t\t\t\tschedule.textContent = sched;\n\t\t\t\t\tcontainer.appendChild(schedule);\n\t\t\t});\n\t\t\tcontentContainer.appendChild(container);\n\t\t});\n\n\t\tconst orderBtn = document.createElement('button');\n\t\torderBtn.textContent = 'ORDER ONLINE';\n\t\tcontentContainer.appendChild(orderBtn);\n\n\t\tinformations.appendChild(contentContainer);\n\t\tmain.appendChild(informations);\n\t\t\n\t\tconst aboutContainer = document.createElement('div');\n\t\taboutContainer.classList.add('about-container');\n\n\t\tconst aboutTitle = document.createElement('div');\n\t\taboutTitle.classList.add('section-title', 'about-title');\n\t\taboutTitle.textContent = 'About';\n\t\taboutContainer.appendChild(aboutTitle);\n\n\t\tconst aboutContent = document.createElement('div');\n\t\taboutContent.classList.add('about-content');\n\t\tabout_content.forEach(parag => {\n\t\t\tconst p = document.createElement('p');\n\t\t\tp.textContent = parag;\n\t\t\taboutContent.appendChild(p);\n\t\t});\n\t\taboutContainer.appendChild(aboutContent);\n\t\tmain.appendChild(aboutContainer);\n\t\tcontent.appendChild(main);\n\n\t\tconst mediaContainer = document.createElement('div');\n\t\tmediaContainer.classList.add('media-container');\n\t\tconst mediaTitle = document.createElement('div');\n\t\tmediaTitle.classList.add('media-title');\n\t\tmediaTitle.textContent = 'FOLLOW US ON SOCIAL';\n\t\tmediaContainer.appendChild(mediaTitle);\n\n\t\tconst iconContainer = document.createElement('div');\n\t\ticonContainer.classList.add('icon-container');\n\t\tmedia_icons.forEach(icon => {\n\t\t\tconst i = document.createElement('a');\n\t\t\ticon.icon_classes.forEach(c =>\ti.classList.add(c));\n\t\t\ti.href = icon.href;\n\t\t\ticonContainer.appendChild(i);\n\t\t});\n\t\tmediaContainer.appendChild(iconContainer);\n\t\tcontent.appendChild(mediaContainer);\n\t\t\n\t\tconst directionContainer = document.createElement('div');\n\t\tdirectionContainer.classList.add('direction-container');\n\t\tdirectionContainer.style.backgroundImage = `url(${_img_direction_png__WEBPACK_IMPORTED_MODULE_8__})`;\n\t\tconst directionBtn = document.createElement('button');\n\t\tdirectionBtn.classList.add('direction-btn');\n\t\tdirectionBtn.id = 'dir-btn';\n\t\tdirectionBtn.textContent = \"GET DIRECTIONS\";\n\t\tdirectionContainer.appendChild(directionBtn);\n\t\tcontent.appendChild(directionContainer);\n\n\t\tconst newPress = new Press();\n\t\thl_press.forEach(p => newPress.addPress(p));\n\t\tcontent.appendChild(newPress.featuredPress);\n\n\t\tconst galleryCard = new Card(_img_alexandru_bogdan_ghita_jpg__WEBPACK_IMPORTED_MODULE_9__, 'Delicioso Atlanta gallery', 'GALLERY');\n\t\tcontent.appendChild(galleryCard.card);\n\n\t\treturn content;\t\t\n}\n\n\n\nfunction gallery() {\n\n}\n\nfunction events() {\n\n}\n\nfunction reservations() {\n\n}\n\nfunction newHeader() {\n\t\n\tconst header = document.createElement('header');\n\tconst logo = document.createElement('div');\n\tlogo.classList.add('logo');\n\tlogo.textContent = 'Delicioso';\n\n\tconst nav = document.createElement('nav');\n\tconst btns = [\n\t\t'Hours&Locations', 'Menus', 'About', 'Gallery', 'Events', 'Reservations'\n\t\t];\n\tbtns.forEach(btnTitle => {\n\t\tconst btn = document.createElement('button');\n\t\tbtn.id = btnTitle.toLowerCase();\n\t\tbtn.textContent = btnTitle.toUpperCase();\n\t\tbtn.classList.add('nav-btn');\n\n\t\tnav.appendChild(btn);\n\t});\n\n\theader.appendChild(logo);\n\theader.appendChild(nav);\n\n\treturn header;\n};\n\nfunction content() {\n\tconst c = document.createElement('div');\n\tc.id = 'content';\n\n\tconst pictureContainer = document.createElement('div');\n\tpictureContainer.classList.add('picture-container');\n\t\n\t[_img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__, _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__].forEach(img => { \n\t\t\tconst i = document.createElement('img');\n\t\t\ti.src = img;\n\t\t\ti.alt = 'A plate of italian food';\n\t\t\tpictureContainer.appendChild(i);\n\n\t});\n\tc.appendChild(pictureContainer);\n\n\tconst desc = new Description(descText);\n\tconst learnMore = document.createElement('button');\n\tlearnMore.id = 'learn-more-btn';\n\tlearnMore.textContent = 'LEARN MORE';\n\n\tdesc.text.appendChild(learnMore);\n\n\tc.appendChild(desc.text);\n\n\tconst cardsContainer = document.createElement('div');\n\tcardsContainer.classList.add('cards-container')\n\tlet shuffle = true;\n\tcards.forEach(card => {\n\t\tconst cardContainer = document.createElement('div');\n\t\tconst i = document.createElement('img');\n\t\tconst descContainer = document.createElement('div');\n\t\tconst title = document.createElement('h2');\n\t\tconst text = document.createElement('p');\n\t\tconst btnContainer = document.createElement('div');\n\n\t\tcardContainer.classList.add('card-container');\n\t\ti.classList = 'card-image';\n\t\tdescContainer.classList.add('card-description');\n\t\ttitle.classList.add('card-title');\n\t\tbtnContainer.classList.add('btn-container');\n\n\t\ti.src = card.image;\n\t\ttitle.textContent = card.title;\n\t\ttext.textContent = card.description;\n\t\t\n\t\tcard.buttons.forEach(btnTitle => {\n\t\t\tconst btn = document.createElement('button');\n\t\t\tbtn.classList.add('btn', 'card-btn');\n\t\t\tbtn.textContent = btnTitle;\n\t\t\tbtnContainer.appendChild(btn);\n\t\t});\n\n\t\tdescContainer.appendChild(title);\n\t\tdescContainer.appendChild(text);\n\t\tdescContainer.appendChild(btnContainer);\n\n\t\tif (shuffle)\n\t\t{\n\t\t\tcardContainer.appendChild(i);\n\t\t\tcardContainer.appendChild(descContainer);\n\t\t\tcardsContainer.appendChild(cardContainer);\n\t\t} \n\t\telse {\n\t\t\tcardContainer.appendChild(descContainer);\n\t\t\tcardsContainer.appendChild(cardContainer);\n\t\t\tcardContainer.appendChild(i);\n\t\t}\n\t\tshuffle = (shuffle) ? false : true;\n\t});\n\tc.appendChild(cardsContainer);\n\n\t\n\tconst newPress = new Press();\n\tpress.forEach(p => {\n\t\tnewPress.addPress(p);\n\t});\n\tc.appendChild(newPress.featuredPress);\n\n\tconst reservation = new Card(_img_pablo_merchan_montes_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Join Us For dinner', 'RESERVATIONS');\n\tc.appendChild(reservation.card);\n\n\treturn c;\n};\n\nfunction footer() {\n\tconst f = document.createElement('div');\n\tconst link = document.createElement('a');\n\n\tf.classList.add('footer');\n\tlink.classList.add('portfolio-link');\n\tlink.textContent = 'Copyright \\u00A9 Neil Taison Rigaud';\n\tlink.href = 'https://blackbird410.github.io/';\n\tlink.target = '_blank';\n\tf.appendChild(link);\n\n\treturn f;\n};\n\nconst press = [\n\t{\n\t\ttitle: 'Cary Magazine',\n\t\tevent_name: '2023 Maggy Awards: Best New Restaurant',\n\t},\n\t{\n\t\ttitle: 'Thrillist',\n\t\tevent_name: 'The Best Italian Restaurants in Atlanta',\n\t},\n]\n\nconst hl_press = [\n\t{\n\t\ttitle: 'Thrillist',\n\t\tevent_name: 'The Best Italian Restaurants in Atlanta',\n\t},\n\t{\n\t\ttitle: 'Jezebel',\n\t\tevent_name: '100 hottest restaurants',\n\t},\n]\n\n\nconst cards = [\n\t{ \n\t\timage: _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__, \n\t\ttitle: 'Host A Party', \n\t\tdescription: \"We recommend celebrating all moments, big or small, or turning a business dinner into a festive feast. At Delicioso, you don't need an excuse to gather.\", \n\t\tbuttons: ['Atlanta', 'Cary'], \n\t},\n\t{ \n\t\timage: _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__, \n\t\ttitle: 'Menus', \n\t\tdescription: \"Come see the items features from our scratch made kitchen. Every items from our menu was selected carefully to please our customers and will satify your taste.\", \n\t\tbuttons: ['Atlanta', 'Cary'], \n\t},\n\n\n];\n\nconst aboutCards = [\n\t{ \n\t\timage: _img_mgg_vitchakorn_jpg__WEBPACK_IMPORTED_MODULE_5__, \n\t\ttitle: 'Delicioso Carry', \n\t\tdescription: \"Seasonal changes, outstanding ingredients and a made-from-scratch philosophy guide Delicioso's menu of house-made focaccia and pasta, antispasti, made-to-order wood-fired pizzas, and piatti. The chef curated dinner and desert menus, pair with the well balanced wine and beverage program. Located at Fenton in Cary, NC, this casual yet polished family-style Italian restaurant features 120 indoor dining seats, 60 seats outdoors on the semi-covered patio, and a 12-seat bar.\", \n\t},\n\t{ \n\t\timage: _img_jonas_albert_jpg__WEBPACK_IMPORTED_MODULE_4__, \n\t\ttitle: 'Delicioso Atlanta', \n\t\tdescription: \"Located at Avalon in Alpharotta, GA, Delicioso Atlanta's restaurant's open-concept dining room is anchored around the kitchen's wood-burning oven, reminiscent of the hearth in a family home. Accented by reclaimed barn wood and refined ceramic tile, the modern space envelops guests in a welcoming atmosphere-whether they're visiting the bar for a hand-crafted cocktail or a glass of wine, grabbing a pizza with the kids or sitting down for a family-style dinner with friends and colleagues.\", \n\t},\n];\n\nconst descText  = 'Delicioso is a compilation of lively dining experiences. Delicioso celebrates the best of Italian American dishes with welcoming hospitality and service. Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis, pizzas and more. Staying true to the Italian dining traditions, Delicioso also offers a \"For the Table\" dining option curated for a family-style experience, offered nightly alongside the full a la carte menu.';\n\nconst contact_info = {\n\taddress: \"900 3rd St, Alpharotta, GA 30009\",\n\tphone: \"(678) 722-5455\",\n\tmail:\"Delicioso@theindigoroad.com\",\n};\n\nconst eating_time = [\n\t{\n\t\ttitle: \"Brunch\",\n\t\tcomment: '',\n\t\tschedules: ['Saturday + Sunday: 11 a.m. - 2:30 p.m.',]\n\t},\n\t{\n\t\ttitle: \"Dinner\",\n\t\tcomment: '',\n\t\tschedules: [\n\t\t\t\"Sunday: 5-9 p.m.\",\n\t\t\t\"Monday - Thursday: 5 - 10 p.m.\",\n\t\t\t\"Friday + Saturday: 5 - 11 p.m.\",\n\t\t]\n\t},\n\t{\n\t\ttitle: \"Happy Hour\",\n\t\tcomment: 'available at the bar',\n\t\tschedules: ['Monday - Friday: 5 - 7 p.m.',]\n\t},\n];\n\nconst about_content = [\n\t\"Located within Alpharotta's Avalon, Delicioso, which means more than delicious, is just that - a compilation of lively dining experiences, top-notch service and quality American Italian cuisine that sets the stage for genuine connection over a great meal.\",\n\t`Delicioso's cuisine puts a twist on treasured classics and introducing modern culinary techniques with the changing of the seasons. House-made pastas, cheeses and other hand-crafted ingredients abound in the from-scratch kitchen, and guests will taste the culinary team's attention to detail in every bite. Staying true to Italian dining traditions, Delicioso also offers a \"For the table\" dining option that allows for a fun, family-style experience, offered nightly alongside the full a la carte menu.`,\n];\n\nconst media_icons = [\n\t{\n\t\ticon: 'facebook',\n\t\ticon_classes: ['fa', 'fa-facebook',],\n\t\thref: '#',\n\t},\n\t{\n\t\ticon: 'twitter',\n\t\ticon_classes: ['fa', 'fa-twitter',],\n\t\thref: '#',\n\t},\n\t{\n\t\ticon: 'instagram',\n\t\ticon_classes: ['fa', 'fa-instagram',],\n\t\thref: '#',\n\t}\n\n];\n\nconst menu_items = [\n\t{\n\t\tmeal: 'Antipasti',\n\t\tcomment: 'Before the meal',\n\t\tcontent: [\n\t\t\t{\n\t\t\t\ttitle: 'Caesar salad',\n\t\t\t\tcontents: [\n\t\t\t\t\t'hearts of romaine',\n\t\t\t\t\t'focaccia crouton',\n\t\t\t\t\t'parmesan dressing',\n\t\t\t\t],\n\t\t\t\tnumber: 14,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Colletta chopped salad',\n\t\t\t\tcontents: [\n\t\t\t\t\t'Kale',\n\t\t\t\t\t'iceberg',\n\t\t\t\t\t'ceci beans',\n\t\t\t\t\t'cherry tomatoes',\n\t\t\t\t\t'roasted olives',\n\t\t\t\t\t'Toscano salami ricotta salata',\n\t\t\t\t\t'pepperoncino',\n\t\t\t\t\t'olive-brine vinaigrette',\n\t\t\t\t],\n\t\t\t\tnumber: 16,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Fire roasted octopus',\n\t\t\t\tcontents: [\n\t\t\t\t\t'spicy tomato puree',\n\t\t\t\t\t'crispy capers',\n\t\t\t\t\t'smoked olives',\n\t\t\t\t\t'herbs',\n\t\t\t\t],\n\t\t\t\tnumber: 19,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Burrata',\n\t\t\t\tcontents: [\n\t\t\t\t\t'wood-roasted delicata squash',\n\t\t\t\t\t'Bose pears',\n\t\t\t\t\t'Calabrian hot honey',\n\t\t\t\t],\n\t\t\t\tnumber: 18,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Shrimp scampi',\n\t\t\t\tcontents: [\n\t\t\t\t\t'lemon',\n\t\t\t\t\t'parsley',\n\t\t\t\t\t'garlic',\n\t\t\t\t\t'butter',\n\t\t\t\t\t'toasted flat bread',\n\t\t\t\t],\n\t\t\t\tnumber: 18,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Meatballs',\n\t\t\t\tcontents: [\n\t\t\t\t\t'CAB',\n\t\t\t\t\t'pork and veal',\n\t\t\t\t\t'san marzano tomato',\n\t\t\t\t\t'polenta',\n\t\t\t\t\t'parmesan',\n\t\t\t\t\t'basil',\n\t\t\t\t],\n\t\t\t\tnumber: 15,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Prosciutto di parma',\n\t\t\t\tcontents: [\n\t\t\t\t\t'parmesan',\n\t\t\t\t\t'honeycomb',\n\t\t\t\t\t'seasonal fruit',\n\t\t\t\t\t'fried flatbread',\n\t\t\t\t],\n\t\t\t\tnumber: 25,\n\t\t\t},\n\t\t],\n\t},\n\n\t// --------------------------------------------------------\n\t{\n\t\tmeal: 'Pizza',\n\t\tcomment: 'From the brick oven',\n\t\tcontent: [\n\t\t\t{\n\t\t\t\ttitle: 'Margherita',\n\t\t\t\tcontents: [\n\t\t\t\t\t'san marzano tomato',\n\t\t\t\t\t'mozzarella',\n\t\t\t\t\t'basil',\n\t\t\t\t],\n\t\t\t\tnumber: 17,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Pistachio pesto',\n\t\t\t\tcontents: [\n\t\t\t\t\t'Smoked Mozzarella',\n\t\t\t\t\t'pickled red onion',\n\t\t\t\t\t'Roman artichoke',\n\t\t\t\t\t'pistachio pesto',\n\t\t\t\t\t'parmesan',\n\t\t\t\t],\n\t\t\t\tnumber: 21,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Nduja',\n\t\t\t\tcontents: [\n\t\t\t\t\t'Spicy sausage',\n\t\t\t\t\t'fire roasted red pepper',\n\t\t\t\t\t'peperoncino',\n\t\t\t\t\t'fontina',\n\t\t\t\t],\n\t\t\t\tnumber: 18,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Calabrese',\n\t\t\t\tcontents: [\n\t\t\t\t\t'calabrese salami',\n\t\t\t\t\t'calabrian chili',\n\t\t\t\t\t'olive',\n\t\t\t\t\t'mozzarella',\n\t\t\t\t\t'honey',\n\t\t\t\t],\n\t\t\t\tnumber: 18,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Fungi',\n\t\t\t\tcontents: [\n\t\t\t\t\t'roasted mushrooms',\n\t\t\t\t\t'truffle cream',\n\t\t\t\t\t'aged fontina',\n\t\t\t\t\t'herbs',\n\t\t\t\t],\n\t\t\t\tnumber: 19,\n\t\t\t},\n\t\t],\n\t},\n\t\n\t//----------------------------------------------\n\t{\n\t\tmeal: 'Pasta',\n\t\tcomment: 'Made fresh daily',\n\t\tcontent: [\n\t\t\t{\n\t\t\t\ttitle: 'Rigatoni',\n\t\t\t\tcontents: [\n\t\t\t\t\t'CAB bolognese',\n\t\t\t\t\t'tomato',\n\t\t\t\t\t'parmesan',\n\t\t\t\t\t'basil',\n\t\t\t\t],\n\t\t\t\tnumber: 28,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Black pepper taglia telle',\n\t\t\t\tcontents: [\n\t\t\t\t\t'pork tesa',\n\t\t\t\t\t'egg yolk',\n\t\t\t\t\t'brodo',\n\t\t\t\t\t'chives',\n\t\t\t\t],\n\t\t\t\tnumber: 27,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Spaghetti',\n\t\t\t\tcontents: [\n\t\t\t\t\t'san marzano tomato',\n\t\t\t\t\t'shaved garlic',\n\t\t\t\t\t'basil',\n\t\t\t\t\t'olive oil',\n\t\t\t\t],\n\t\t\t\tnumber: 26,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Malfaldine',\n\t\t\t\tcontents: [\n\t\t\t\t\t'Fra Diavolo',\n\t\t\t\t\t'shrimp',\n\t\t\t\t\t'mussels',\n\t\t\t\t\t'lemon',\n\t\t\t\t\t'parsley',\n\t\t\t\t],\n\t\t\t\tnumber: 28,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Lasagna',\n\t\t\t\tcontents: [\n\t\t\t\t\t'CAB bolognese',\n\t\t\t\t\t'tomato',\n\t\t\t\t\t'parmesan',\n\t\t\t\t\t'mozzarella',\n\t\t\t\t\t'whipped ricotta',\n\t\t\t\t],\n\t\t\t\tnumber: 28,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Ravioli',\n\t\t\t\tcontents: [\n\t\t\t\t\t'herb ricotta',\n\t\t\t\t\t'house italian',\n\t\t\t\t\t'sausage',\n\t\t\t\t\t'vodka sauce',\n\t\t\t\t],\n\t\t\t\tnumber: 28,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Balanzoni',\n\t\t\t\tcontents: [\n\t\t\t\t\t'roasted eggplant',\n\t\t\t\t\t'saffron',\n\t\t\t\t\t'San Marzano dried tomatoes',\n\t\t\t\t\t'fennel pollen',\n\t\t\t\t\t'ricotta salata',\n\t\t\t\t],\n\t\t\t\tnumber: 27,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: '',\n\t\t\t\tcontents: [\n\t\t\t\t\t'gluten-free pasta available',\n\t\t\t\t],\n\t\t\t\tnumber: '',\n\t\t\t},\n\t\t],\n\t},\n\t\n\t// ----------------------------------------------------\n\t{\n\t\tmeal: 'Piatti',\n\t\tcomment: 'Composed entrees',\n\t\tcontent: [\n\t\t\t{\n\t\t\t\ttitle: 'CAB flat iron',\n\t\t\t\tcontents: [\n\t\t\t\t\t'cavalo nero',\n\t\t\t\t\t'crispy potatoes',\n\t\t\t\t\t'salsa verde',\n\t\t\t\t\t'crispy shallots',\n\t\t\t\t],\n\t\t\t\tnumber: 34,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Chicken \"Cacciatore\"',\n\t\t\t\tcontents: [\n\t\t\t\t\t'grilled half chicken',\n\t\t\t\t\t'onion',\n\t\t\t\t\t'trumpet mushrooms',\n\t\t\t\t\t'fire roasted bell peppers',\n\t\t\t\t\t'olives',\n\t\t\t\t\t'tomato gravy',\n\t\t\t\t],\n\t\t\t\tnumber: 36,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Bone-in pork chop',\n\t\t\t\tcontents: [\n\t\t\t\t\t'apple cider brine',\n\t\t\t\t\t'parsnip',\n\t\t\t\t\t'roasted brussels sprouts',\n\t\t\t\t\t'mostarda',\n\t\t\t\t],\n\t\t\t\tnumber: 36,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Chicken parmesan',\n\t\t\t\tcontents: [\n\t\t\t\t\t'crispy Joyce Farms breast',\n\t\t\t\t\t'spaghetti',\n\t\t\t\t\t'vodka sauce',\n\t\t\t\t\t'mozzarella',\n\t\t\t\t\t'basil',\n\t\t\t\t],\n\t\t\t\tnumber: 28,\n\t\t\t},\n\t\t\t{\n\t\t\t\ttitle: 'Grilled steelhead trout \"A la puntanesca\"',\n\t\t\t\tcontents: [\n\t\t\t\t\t'confit cherry tomatoes',\n\t\t\t\t\t'olives',\n\t\t\t\t\t'capers',\n\t\t\t\t\t'saffron potato puree',\n\t\t\t\t],\n\t\t\t\tnumber: 36,\n\t\t\t},\n\t\t],\n\t},\n]\n\nconst team_members = [\n\t{\n\t\tname: 'Peter Sanders',\n\t\timg: _img_clark_douglas_jpg__WEBPACK_IMPORTED_MODULE_0__,\n\t\tjob: 'Culinary Director',\n\t},\n\t{\n\t\tname: 'Alexi Ivanof',\n\t\timg: _img_nerfee_mirandilla_jpg__WEBPACK_IMPORTED_MODULE_1__,\n\t\tjob: 'General Manager',\n\t},\n\t{\n\t\tname: 'Vinsmoke Sanji',\n\t\timg: _img_lee_myungseong_jpg__WEBPACK_IMPORTED_MODULE_2__,\n\t\tjob: 'Chef de Cuisine',\n\t},\n\t{\n\t\tname: 'Gojo Satorou',\n\t\timg: _img_amadeo_valar_jpg__WEBPACK_IMPORTED_MODULE_3__,\n\t\tjob: 'Pastry, Cary',\n\t},\n\t{\n\t\tname: 'Kilua Zoldyck',\n\t\timg: _img_jonas_albert_jpg__WEBPACK_IMPORTED_MODULE_4__,\n\t\tjob: 'Atlanta Area Director',\n\t},\n\t{\n\t\tname: 'Monkey D. Luffy',\n\t\timg: _img_mgg_vitchakorn_jpg__WEBPACK_IMPORTED_MODULE_5__,\n\t\tjob: 'Founder',\n\t},\n];\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/data.js?");

/***/ }),

/***/ "./src/img/albert.jpg":
/*!****************************!*\
  !*** ./src/img/albert.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd5268622da82ce97ef9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/albert.jpg?");

/***/ }),

/***/ "./src/img/alexandru-bogdan-ghita.jpg":
/*!********************************************!*\
  !*** ./src/img/alexandru-bogdan-ghita.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a0d04819cd742c12bff2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/alexandru-bogdan-ghita.jpg?");

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

/***/ "./src/img/davey-gravy.jpg":
/*!*********************************!*\
  !*** ./src/img/davey-gravy.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ccca848ca5b8e70458bd.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/davey-gravy.jpg?");

/***/ }),

/***/ "./src/img/direction.png":
/*!*******************************!*\
  !*** ./src/img/direction.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5269a69df4971984c267.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/direction.png?");

/***/ }),

/***/ "./src/img/jonas-albert.jpg":
/*!**********************************!*\
  !*** ./src/img/jonas-albert.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8fce45539158a7c74756.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/jonas-albert.jpg?");

/***/ }),

/***/ "./src/img/lee-myungseong.jpg":
/*!************************************!*\
  !*** ./src/img/lee-myungseong.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73f6bcaa6ee04c8f0620.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/lee-myungseong.jpg?");

/***/ }),

/***/ "./src/img/mgg-vitchakorn.jpg":
/*!************************************!*\
  !*** ./src/img/mgg-vitchakorn.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ca25807a920f73a0876.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/mgg-vitchakorn.jpg?");

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

/***/ }),

/***/ "./src/img/tim-toomey.jpg":
/*!********************************!*\
  !*** ./src/img/tim-toomey.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"901b797f27e3037d50b1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tim-toomey.jpg?");

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