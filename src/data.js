import image1 from './img/clark-douglas.jpg';
import image2 from './img/nerfee-mirandilla.jpg';
import image3 from './img/lee-myungseong.jpg';
import image4 from './img/amadeo-valar.jpg';
import image5 from './img/jonas-albert.jpg';
import image6 from './img/mgg-vitchakorn.jpg';
import hl_image1 from './img/tim-toomey.jpg';
import reservationBg from './img/pablo-merchan-montes.jpg';
import directionBg from './img/direction.png';
import hl_image2 from './img/alexandru-bogdan-ghita.jpg';
import menu_image1 from './img/davey-gravy.jpg';
import about_image1 from './img/albert.jpg';

class Press {

	constructor()
	{
		this.featuredPressContainer = document.createElement('div');
		this.featuredPressContainer.classList.add('featured-press-container');
		this.featuredPressTitle = document.createElement('h1');
		this.featuredPressTitle.classList.add('featured-press-title');
		this.featuredPressTitle.textContent = 'Featured Press';
		this.featuredPressContainer.appendChild(this.featuredPressTitle);
	}

	addPress(p) {
		const container = document.createElement('div');
		container.classList.add('press-container');

		const title = document.createElement('div');
		title.classList.add('press-title');
		title.textContent = p.title.toUpperCase();

		const eventName = document.createElement('div');
		eventName.classList.add('event-name');
		eventName.textContent = p.event_name.toUpperCase();

		container.appendChild(title);
		container.appendChild(eventName);
		this.featuredPressContainer.appendChild(container);
	};

	get featuredPress() {
		return this.featuredPressContainer;
	};

}

class Card {
	constructor(bgImage, text, btnTitle) {
		this.cardContainer = document.createElement('div');
		this.cardContainer.classList.add('card');
		this.cardContainer.style.backgroundImage = `url(${bgImage})`;
			
		this.cardText = document.createElement('div');
		this.cardText.classList.add('card-text');
		this.cardText.textContent = text;

		this.cardBtn = document.createElement('button');
		this.cardBtn.classList.add('card-btn');
		this.cardBtn.textContent = btnTitle;
			
		this.cardContainer.appendChild(this.cardText);
		this.cardContainer.appendChild(this.cardBtn);
	}

	get card() {
		return this.cardContainer;
	}

}

class Menu {
	
	constructor(meal, comment, content) {
		this.mealContainer = document.createElement('div');
		this.mealContainer.classList.add('meal-container');

		this.mealHeader = document.createElement('div');
		this.mealHeader.classList.add('meal-header');

		this.mealName = document.createElement('div');
		this.mealName.classList.add('meal-name', 'section-title');
		this.mealName.textContent = meal;
		this.mealHeader.appendChild(this.mealName);

		this.mealComment = document.createElement('div');
		this.mealComment.classList.add('meal-comment');
		this.mealComment.textContent = comment;
		this.mealHeader.appendChild(this.mealComment);

		this.mealContainer.appendChild(this.mealHeader);
		
		this.container = document.createElement('div');
		this.container.classList.add('items-container');
		content.forEach(food => {
			const c = document.createElement('div');
			c.classList.add('item-container');

			const title = document.createElement('em');
			title.classList.add('item-title');
			title.textContent = food.title.toUpperCase();
			c.appendChild(title);

			let content = '';
			food.contents.forEach(elt => {
				content += elt + ', ';
			});
			c.innerHTML += content.slice(0, -2);

			const number = document.createElement('em');
			number.classList.add('item-number');
			number.textContent = food.number;
			c.appendChild(number);

			this.container.appendChild(c);
		});
		this.mealContainer.appendChild(this.container);
	}

	get meal() {
		return this.mealContainer;
	}


}

class Description {
	constructor(textContent) {
		
		this.descriptionContainer = document.createElement('div');
		this.descriptionContainer.classList.add('description-container');
		this.description = document.createElement('p');
		this.description.textContent = textContent;
		this.descriptionContainer.appendChild(this.description);
	}

	get text() {
		return this.descriptionContainer;
	}
}

class Employee {
	constructor(name, img, job) {
		this.container = document.createElement('div');
		this.container.classList.add('employee-container')
		
		this.imgContainer = document.createElement('img');
		this.imgContainer.classList.add('employee-image');
		this.imgContainer.src = img;

		this.name = document.createElement('div');
		this.name.classList.add('employee-name');
		this.name.textContent = name;

		this.container.appendChild(this.imgContainer);
		this.container.appendChild(this.name);

		this.job = document.createElement('div');
		this.job.textContent = job;
		this.job.classList.add('employee-job');
		this.container.appendChild(this.job);
	}
}

export function about() {
	const content = document.createElement('div');
	content.id = 'content';

	const picture = document.createElement('div');
	picture.classList.add('card', 'main-card');
	picture.style.backgroundImage = `url(${about_image1})`;
	content.appendChild(picture);

	const title = document.createElement('div');
	title.classList.add('section-title');
	title.textContent = 'About';
	picture.appendChild(title);

	const desc = new Description(descText);
	desc.text.classList.add('about-description');
	content.appendChild(desc.text);

	const cardsContainer = document.createElement('div');
	cardsContainer.classList.add('cards-container', 'about-cards');
	let shuffle = true;
	aboutCards.forEach(card => {
		const cardContainer = document.createElement('div');
		const i = document.createElement('img');
		const descContainer = document.createElement('div');
		const title = document.createElement('h2');
		const text = document.createElement('p');

		cardContainer.classList.add('card-container');
		i.classList = 'card-image';
		descContainer.classList.add('card-description');
		title.classList.add('card-title');

		i.src = card.image;
		title.textContent = card.title;
		text.textContent = card.description;
		
		descContainer.appendChild(title);
		descContainer.appendChild(text);

		if (shuffle)
		{
			cardContainer.appendChild(i);
			cardContainer.appendChild(descContainer);
			cardsContainer.appendChild(cardContainer);
		} 
		else {
			cardContainer.appendChild(descContainer);
			cardsContainer.appendChild(cardContainer);
			cardContainer.appendChild(i);
		}
		shuffle = (shuffle) ? false : true;
	});
	content.appendChild(cardsContainer);
	
	const team = document.createElement('div');
	team.classList.add('team-container');

	const teamTitle = document.createElement('div');
	teamTitle.textContent = "Team";
	teamTitle.classList.add('section-title');
	content.appendChild(teamTitle);

	team_members.forEach(member => {
		const m = new Employee(member.name, member.img, member.job);
		team.appendChild(m.container);
	});
	content.appendChild(team);
	
	return content;
}

export function menus() {
	const content = document.createElement('div');
	content.id = 'content';

	const picture = document.createElement('img');
	picture.classList.add('main-picture');
	picture.src = menu_image1;
	content.appendChild(picture);

	const menuOptions = document.createElement('div');
	menuOptions.classList.add('menu-options');
	const menuTitle = document.createElement('div');
	menuTitle.classList.add('section-title');
	menuTitle.textContent = 'Atlanta';
	menuOptions.appendChild(menuTitle);

	const options = ['DINNER', 'BRUNCH', 'HAPPY HOUR', 'WINE & COCKTAILS', 'DESERT'];
	const optionsContainer = document.createElement('div');
	optionsContainer.classList.add('options-container');
	options.forEach(option => {
		const btn = document.createElement('button');
		btn.classList.add('menu-btn');
		btn.textContent = option;
		optionsContainer.appendChild(btn);
	});

	menuOptions.appendChild(optionsContainer);

	const pdfDownloadBtn = document.createElement('button');
	pdfDownloadBtn.classList.add('pdf-download-btn');
	pdfDownloadBtn.textContent = 'DOWNLOAD PDF';

	menuOptions.appendChild(pdfDownloadBtn);
	content.appendChild(menuOptions);

	const menuContainer = document.createElement('div');
	menuContainer.classList.add('menu-container');
	menu_items.forEach(item => {
		const menu = new Menu(item.meal, item.comment, item.content);
		menuContainer.appendChild(menu.meal);
	});
	content.appendChild(menuContainer);

	return content;
}

export function hoursAndLocations() {
		const content = document.createElement('div');
		content.id = 'content';

		const picture = document.createElement('img');
		picture.classList.add('main-picture');
		picture.src = hl_image1;
		content.appendChild(picture);

		const main = document.createElement('div');
		main.classList.add('main-section');

		const informations = document.createElement('div');
		informations.classList.add('information-container');

		const hoursAndLoc =  document.createElement('div');
		hoursAndLoc.classList.add('section-title');
		hoursAndLoc.textContent =  'Hours & Location';
		informations.appendChild(hoursAndLoc);

		const contentContainer = document.createElement('div');
		contentContainer.classList.add('content-container');

		const contactInfo = document.createElement('div');
		contactInfo.classList.add('contact-info');
		const address = document.createElement('a');
		address.textContent = contact_info.address;
		const phone = document.createElement('a');
		phone.textContent = contact_info.phone;
		const mail = document.createElement('a');
		mail.textContent = contact_info.mail;
		contactInfo.appendChild(address);
		contactInfo.appendChild(phone);
		contactInfo.appendChild(mail);
		contentContainer.appendChild(contactInfo);

		eating_time.forEach(eatingTime => {
			const container = document.createElement('div');
			container.classList.add('eating-time-container');

			const titleContainer = document.createElement('div');
			const title = document.createElement('div');
			titleContainer.classList.add('title-container');
			title.classList.add('eating-time-title');
			title.textContent = eatingTime.title;
			titleContainer.appendChild(title);

			if (eatingTime.comment)
			{
				const comment = document.createElement('div');
				comment.classList.add('comment');
				comment.textContent = eatingTime.comment;
				titleContainer.appendChild(comment);
			}
			container.appendChild(titleContainer);

			eatingTime.schedules.forEach(sched => {	
					const schedule = document.createElement('div');
					schedule.classList.add('schedule');
					schedule.textContent = sched;
					container.appendChild(schedule);
			});
			contentContainer.appendChild(container);
		});

		const orderBtn = document.createElement('button');
		orderBtn.textContent = 'ORDER ONLINE';
		contentContainer.appendChild(orderBtn);

		informations.appendChild(contentContainer);
		main.appendChild(informations);
		
		const aboutContainer = document.createElement('div');
		aboutContainer.classList.add('about-container');

		const aboutTitle = document.createElement('div');
		aboutTitle.classList.add('section-title', 'about-title');
		aboutTitle.textContent = 'About';
		aboutContainer.appendChild(aboutTitle);

		const aboutContent = document.createElement('div');
		aboutContent.classList.add('about-content');
		about_content.forEach(parag => {
			const p = document.createElement('p');
			p.textContent = parag;
			aboutContent.appendChild(p);
		});
		aboutContainer.appendChild(aboutContent);
		main.appendChild(aboutContainer);
		content.appendChild(main);

		const mediaContainer = document.createElement('div');
		mediaContainer.classList.add('media-container');
		const mediaTitle = document.createElement('div');
		mediaTitle.classList.add('media-title');
		mediaTitle.textContent = 'FOLLOW US ON SOCIAL';
		mediaContainer.appendChild(mediaTitle);

		const iconContainer = document.createElement('div');
		iconContainer.classList.add('icon-container');
		media_icons.forEach(icon => {
			const i = document.createElement('a');
			icon.icon_classes.forEach(c =>	i.classList.add(c));
			i.href = icon.href;
			iconContainer.appendChild(i);
		});
		mediaContainer.appendChild(iconContainer);
		content.appendChild(mediaContainer);
		
		const directionContainer = document.createElement('div');
		directionContainer.classList.add('direction-container');
		directionContainer.style.backgroundImage = `url(${directionBg})`;
		const directionBtn = document.createElement('button');
		directionBtn.classList.add('direction-btn');
		directionBtn.id = 'dir-btn';
		directionBtn.textContent = "GET DIRECTIONS";
		directionContainer.appendChild(directionBtn);
		content.appendChild(directionContainer);

		const newPress = new Press();
		hl_press.forEach(p => newPress.addPress(p));
		content.appendChild(newPress.featuredPress);

		const galleryCard = new Card(hl_image2, 'Delicioso Atlanta gallery', 'GALLERY');
		content.appendChild(galleryCard.card);

		return content;		
}



export function gallery() {

}

export function events() {

}

export function reservations() {

}

export function newHeader() {
	
	const header = document.createElement('header');
	const logo = document.createElement('div');
	logo.classList.add('logo');
	logo.textContent = 'Delicioso';

	const nav = document.createElement('nav');
	const btns = [
		'Hours&Locations', 'Menus', 'About', 'Gallery', 'Events', 'Reservations'
		];
	btns.forEach(btnTitle => {
		const btn = document.createElement('button');
		btn.id = btnTitle.toLowerCase();
		btn.textContent = btnTitle.toUpperCase();
		btn.classList.add('nav-btn');

		nav.appendChild(btn);
	});

	header.appendChild(logo);
	header.appendChild(nav);

	return header;
};

export function content() {
	const c = document.createElement('div');
	c.id = 'content';

	const pictureContainer = document.createElement('div');
	pictureContainer.classList.add('picture-container');
	
	[image1, image2].forEach(img => { 
			const i = document.createElement('img');
			i.src = img;
			i.alt = 'A plate of italian food';
			pictureContainer.appendChild(i);

	});
	c.appendChild(pictureContainer);

	const desc = new Description(descText);
	const learnMore = document.createElement('button');
	learnMore.id = 'learn-more-btn';
	learnMore.textContent = 'LEARN MORE';

	desc.text.appendChild(learnMore);

	c.appendChild(desc.text);

	const cardsContainer = document.createElement('div');
	cardsContainer.classList.add('cards-container')
	let shuffle = true;
	cards.forEach(card => {
		const cardContainer = document.createElement('div');
		const i = document.createElement('img');
		const descContainer = document.createElement('div');
		const title = document.createElement('h2');
		const text = document.createElement('p');
		const btnContainer = document.createElement('div');

		cardContainer.classList.add('card-container');
		i.classList = 'card-image';
		descContainer.classList.add('card-description');
		title.classList.add('card-title');
		btnContainer.classList.add('btn-container');

		i.src = card.image;
		title.textContent = card.title;
		text.textContent = card.description;
		
		card.buttons.forEach(btnTitle => {
			const btn = document.createElement('button');
			btn.classList.add('btn', 'card-btn');
			btn.textContent = btnTitle;
			btnContainer.appendChild(btn);
		});

		descContainer.appendChild(title);
		descContainer.appendChild(text);
		descContainer.appendChild(btnContainer);

		if (shuffle)
		{
			cardContainer.appendChild(i);
			cardContainer.appendChild(descContainer);
			cardsContainer.appendChild(cardContainer);
		} 
		else {
			cardContainer.appendChild(descContainer);
			cardsContainer.appendChild(cardContainer);
			cardContainer.appendChild(i);
		}
		shuffle = (shuffle) ? false : true;
	});
	c.appendChild(cardsContainer);

	
	const newPress = new Press();
	press.forEach(p => {
		newPress.addPress(p);
	});
	c.appendChild(newPress.featuredPress);

	const reservation = new Card(reservationBg, 'Join Us For dinner', 'RESERVATIONS');
	c.appendChild(reservation.card);

	return c;
};

export function footer() {
	const f = document.createElement('div');
	const link = document.createElement('a');

	f.classList.add('footer');
	link.classList.add('portfolio-link');
	link.textContent = 'Copyright \u00A9 Neil Taison Rigaud';
	link.href = 'https://blackbird410.github.io/';
	link.target = '_blank';
	f.appendChild(link);

	return f;
};

const press = [
	{
		title: 'Cary Magazine',
		event_name: '2023 Maggy Awards: Best New Restaurant',
	},
	{
		title: 'Thrillist',
		event_name: 'The Best Italian Restaurants in Atlanta',
	},
]

const hl_press = [
	{
		title: 'Thrillist',
		event_name: 'The Best Italian Restaurants in Atlanta',
	},
	{
		title: 'Jezebel',
		event_name: '100 hottest restaurants',
	},
]


const cards = [
	{ 
		image: image3, 
		title: 'Host A Party', 
		description: "We recommend celebrating all moments, big or small, or turning a business dinner into a festive feast. At Delicioso, you don't need an excuse to gather.", 
		buttons: ['Atlanta', 'Cary'], 
	},
	{ 
		image: image4, 
		title: 'Menus', 
		description: "Come see the items features from our scratch made kitchen. Every items from our menu was selected carefully to please our customers and will satify your taste.", 
		buttons: ['Atlanta', 'Cary'], 
	},


];

const aboutCards = [
	{ 
		image: image6, 
		title: 'Delicioso Carry', 
		description: "Seasonal changes, outstanding ingredients and a made-from-scratch philosophy guide Delicioso's menu of house-made focaccia and pasta, antispasti, made-to-order wood-fired pizzas, and piatti. The chef curated dinner and desert menus, pair with the well balanced wine and beverage program. Located at Fenton in Cary, NC, this casual yet polished family-style Italian restaurant features 120 indoor dining seats, 60 seats outdoors on the semi-covered patio, and a 12-seat bar.", 
	},
	{ 
		image: image5, 
		title: 'Delicioso Atlanta', 
		description: "Located at Avalon in Alpharotta, GA, Delicioso Atlanta's restaurant's open-concept dining room is anchored around the kitchen's wood-burning oven, reminiscent of the hearth in a family home. Accented by reclaimed barn wood and refined ceramic tile, the modern space envelops guests in a welcoming atmosphere-whether they're visiting the bar for a hand-crafted cocktail or a glass of wine, grabbing a pizza with the kids or sitting down for a family-style dinner with friends and colleagues.", 
	},
];

const descText  = 'Delicioso is a compilation of lively dining experiences. Delicioso celebrates the best of Italian American dishes with welcoming hospitality and service. Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis, pizzas and more. Staying true to the Italian dining traditions, Delicioso also offers a "For the Table" dining option curated for a family-style experience, offered nightly alongside the full a la carte menu.';

const contact_info = {
	address: "900 3rd St, Alpharotta, GA 30009",
	phone: "(678) 722-5455",
	mail:"Delicioso@theindigoroad.com",
};

const eating_time = [
	{
		title: "Brunch",
		comment: '',
		schedules: ['Saturday + Sunday: 11 a.m. - 2:30 p.m.',]
	},
	{
		title: "Dinner",
		comment: '',
		schedules: [
			"Sunday: 5-9 p.m.",
			"Monday - Thursday: 5 - 10 p.m.",
			"Friday + Saturday: 5 - 11 p.m.",
		]
	},
	{
		title: "Happy Hour",
		comment: 'available at the bar',
		schedules: ['Monday - Friday: 5 - 7 p.m.',]
	},
];

const about_content = [
	"Located within Alpharotta's Avalon, Delicioso, which means more than delicious, is just that - a compilation of lively dining experiences, top-notch service and quality American Italian cuisine that sets the stage for genuine connection over a great meal.",
	`Delicioso's cuisine puts a twist on treasured classics and introducing modern culinary techniques with the changing of the seasons. House-made pastas, cheeses and other hand-crafted ingredients abound in the from-scratch kitchen, and guests will taste the culinary team's attention to detail in every bite. Staying true to Italian dining traditions, Delicioso also offers a "For the table" dining option that allows for a fun, family-style experience, offered nightly alongside the full a la carte menu.`,
];

const media_icons = [
	{
		icon: 'facebook',
		icon_classes: ['fa', 'fa-facebook',],
		href: '#',
	},
	{
		icon: 'twitter',
		icon_classes: ['fa', 'fa-twitter',],
		href: '#',
	},
	{
		icon: 'instagram',
		icon_classes: ['fa', 'fa-instagram',],
		href: '#',
	}

];

const menu_items = [
	{
		meal: 'Antipasti',
		comment: 'Before the meal',
		content: [
			{
				title: 'Caesar salad',
				contents: [
					'hearts of romaine',
					'focaccia crouton',
					'parmesan dressing',
				],
				number: 14,
			},
			{
				title: 'Colletta chopped salad',
				contents: [
					'Kale',
					'iceberg',
					'ceci beans',
					'cherry tomatoes',
					'roasted olives',
					'Toscano salami ricotta salata',
					'pepperoncino',
					'olive-brine vinaigrette',
				],
				number: 16,
			},
			{
				title: 'Fire roasted octopus',
				contents: [
					'spicy tomato puree',
					'crispy capers',
					'smoked olives',
					'herbs',
				],
				number: 19,
			},
			{
				title: 'Burrata',
				contents: [
					'wood-roasted delicata squash',
					'Bose pears',
					'Calabrian hot honey',
				],
				number: 18,
			},
			{
				title: 'Shrimp scampi',
				contents: [
					'lemon',
					'parsley',
					'garlic',
					'butter',
					'toasted flat bread',
				],
				number: 18,
			},
			{
				title: 'Meatballs',
				contents: [
					'CAB',
					'pork and veal',
					'san marzano tomato',
					'polenta',
					'parmesan',
					'basil',
				],
				number: 15,
			},
			{
				title: 'Prosciutto di parma',
				contents: [
					'parmesan',
					'honeycomb',
					'seasonal fruit',
					'fried flatbread',
				],
				number: 25,
			},
		],
	},

	// --------------------------------------------------------
	{
		meal: 'Pizza',
		comment: 'From the brick oven',
		content: [
			{
				title: 'Margherita',
				contents: [
					'san marzano tomato',
					'mozzarella',
					'basil',
				],
				number: 17,
			},
			{
				title: 'Pistachio pesto',
				contents: [
					'Smoked Mozzarella',
					'pickled red onion',
					'Roman artichoke',
					'pistachio pesto',
					'parmesan',
				],
				number: 21,
			},
			{
				title: 'Nduja',
				contents: [
					'Spicy sausage',
					'fire roasted red pepper',
					'peperoncino',
					'fontina',
				],
				number: 18,
			},
			{
				title: 'Calabrese',
				contents: [
					'calabrese salami',
					'calabrian chili',
					'olive',
					'mozzarella',
					'honey',
				],
				number: 18,
			},
			{
				title: 'Fungi',
				contents: [
					'roasted mushrooms',
					'truffle cream',
					'aged fontina',
					'herbs',
				],
				number: 19,
			},
		],
	},
	
	//----------------------------------------------
	{
		meal: 'Pasta',
		comment: 'Made fresh daily',
		content: [
			{
				title: 'Rigatoni',
				contents: [
					'CAB bolognese',
					'tomato',
					'parmesan',
					'basil',
				],
				number: 28,
			},
			{
				title: 'Black pepper taglia telle',
				contents: [
					'pork tesa',
					'egg yolk',
					'brodo',
					'chives',
				],
				number: 27,
			},
			{
				title: 'Spaghetti',
				contents: [
					'san marzano tomato',
					'shaved garlic',
					'basil',
					'olive oil',
				],
				number: 26,
			},
			{
				title: 'Malfaldine',
				contents: [
					'Fra Diavolo',
					'shrimp',
					'mussels',
					'lemon',
					'parsley',
				],
				number: 28,
			},
			{
				title: 'Lasagna',
				contents: [
					'CAB bolognese',
					'tomato',
					'parmesan',
					'mozzarella',
					'whipped ricotta',
				],
				number: 28,
			},
			{
				title: 'Ravioli',
				contents: [
					'herb ricotta',
					'house italian',
					'sausage',
					'vodka sauce',
				],
				number: 28,
			},
			{
				title: 'Balanzoni',
				contents: [
					'roasted eggplant',
					'saffron',
					'San Marzano dried tomatoes',
					'fennel pollen',
					'ricotta salata',
				],
				number: 27,
			},
			{
				title: '',
				contents: [
					'gluten-free pasta available',
				],
				number: '',
			},
		],
	},
	
	// ----------------------------------------------------
	{
		meal: 'Piatti',
		comment: 'Composed entrees',
		content: [
			{
				title: 'CAB flat iron',
				contents: [
					'cavalo nero',
					'crispy potatoes',
					'salsa verde',
					'crispy shallots',
				],
				number: 34,
			},
			{
				title: 'Chicken "Cacciatore"',
				contents: [
					'grilled half chicken',
					'onion',
					'trumpet mushrooms',
					'fire roasted bell peppers',
					'olives',
					'tomato gravy',
				],
				number: 36,
			},
			{
				title: 'Bone-in pork chop',
				contents: [
					'apple cider brine',
					'parsnip',
					'roasted brussels sprouts',
					'mostarda',
				],
				number: 36,
			},
			{
				title: 'Chicken parmesan',
				contents: [
					'crispy Joyce Farms breast',
					'spaghetti',
					'vodka sauce',
					'mozzarella',
					'basil',
				],
				number: 28,
			},
			{
				title: 'Grilled steelhead trout "A la puntanesca"',
				contents: [
					'confit cherry tomatoes',
					'olives',
					'capers',
					'saffron potato puree',
				],
				number: 36,
			},
		],
	},
]

const team_members = [
	{
		name: 'Peter Sanders',
		img: image1,
		job: 'Culinary Director',
	},
	{
		name: 'Alexi Ivanof',
		img: image2,
		job: 'General Manager',
	},
	{
		name: 'Vinsmoke Sanji',
		img: image3,
		job: 'Chef de Cuisine',
	},
	{
		name: 'Gojo Satorou',
		img: image4,
		job: 'Pastry, Cary',
	},
	{
		name: 'Kilua Zoldyck',
		img: image5,
		job: 'Atlanta Area Director',
	},
	{
		name: 'Monkey D. Luffy',
		img: image6,
		job: 'Founder',
	},
];

