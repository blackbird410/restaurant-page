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
      /******/ // no module.id needed
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
  /************************************************************************/
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
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/data.js");
  /******/
  /******/
})();
