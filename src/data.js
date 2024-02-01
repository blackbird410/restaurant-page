import image1 from './img/clark-douglas.jpg';
import image2 from './img/nerfee-mirandilla.jpg';
import image3 from './img/lee-myungseong.jpg';
import image4 from './img/amadeo-valar.jpg';
import hl_image1 from './img/tim-toomey.jpg';
import reservationBg from './img/pablo-merchan-montes.jpg';
import directionBg from './img/direction.png';
import hl_image2 from './img/alexandru-bogdan-ghita.jpg';


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

export function menus() {

}


export function about() {

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

	const descriptionContainer = document.createElement('div');
	descriptionContainer.classList.add('description-container');
	const description = document.createElement('p');
	description.textContent = descText;
	descriptionContainer.appendChild(description);

	const learnMore = document.createElement('button');
	learnMore.id = 'learn-more-btn';
	learnMore.textContent = 'LEARN MORE';

	descriptionContainer.appendChild(learnMore);

	c.appendChild(descriptionContainer);

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
