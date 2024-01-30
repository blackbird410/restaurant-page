import './style.css';
import image1 from './img/clark-douglas.jpg';
import image2 from './img/nerfee-mirandilla.jpg';

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
	description.textContent = 'Delicioso is a compilation of lively dining experiences. Delicioso celebrates the best of Italian American dishes with welcoming hospitality and service. Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis, pizzas and more. Staying true to the Italian dining traditions, Delicioso also offers a "For the Table" dining option curated for a family-style experience, offered nightly alongside the full a la carte menu.';
	descriptionContainer.appendChild(description);

	const learnMore = document.createElement('button');
	learnMore.id = 'learn-more-btn';
	learnMore.textContent = 'LEARN MORE';

	descriptionContainer.appendChild(learnMore);

	c.appendChild(descriptionContainer);

	return c;
};

document.body.appendChild(newHeader());
document.body.appendChild(content());
