import './style.css';
import image1 from './img/clark-douglas.jpg';
import image2 from './img/nerfee-mirandilla.jpg';
import image3 from './img/lee-myungseong.jpg';
import image4 from './img/amadeo-valar.jpg';
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

	return c;
};







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
