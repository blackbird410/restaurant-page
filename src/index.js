import './style.css';
import image1 from './img/clark-douglas.jpg';
import image2 from './img/nerfee-mirandilla.jpg';
import image3 from './img/lee-myungseong.jpg';
import image4 from './img/amadeo-valar.jpg';
import reservationBg from './img/pablo-merchan-montes.jpg';
import printMe from './data.js';

printMe();

function newHeader() {
	
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
		btn.textContent = btnTitle.toUpperCase();
		btn.classList.add('nav-btn');

		nav.appendChild(btn);
	});

	header.appendChild(logo);
	header.appendChild(nav);

	return header;
};

function content() {
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

	const featuredPress = document.createElement('div');
	featuredPress.classList.add('featured-press-container');
	const featuredPressTitle = document.createElement('h1');
	featuredPressTitle.classList.add('featured-press-title');
	featuredPressTitle.textContent = 'Featured Press';
	featuredPress.appendChild(featuredPressTitle);

	press.forEach(p => {
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
		featuredPress.appendChild(container);
	});
	c.appendChild(featuredPress);

	const reservation = document.createElement('div');
	reservation.classList.add('reservation');
	reservation.style.backgroundImage = `url(${reservationBg})`;
	
	const reservationText = document.createElement('div');
	reservationText.classList.add('reservation-text');
	reservationText.textContent = 'Join us for dinner';

	const reservationBtn = document.createElement('button');
	reservationBtn.classList.add('reservation-btn');
	reservationBtn.textContent = 'RESERVATIONS';
	
	reservation.appendChild(reservationText);
	reservation.appendChild(reservationBtn);

	c.appendChild(reservation);

	return c;
};

function footer() {
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
		event_name: '2023 Maggy Awards Best New Restaurant',
	},
	{
		title: 'Thrilist',
		event_name: 'The Best Italian Restaurants in Atlanta',
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


document.body.appendChild(newHeader());
document.body.appendChild(content());
document.body.appendChild(footer());
