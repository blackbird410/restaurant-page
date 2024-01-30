import './style.css';

function newHeader() {
	
	const header = document.createElement('header');
	const logo = document.createElement('div');
	logo.classList.add('logo');
	logo.textContent = 'Delicioso';

	const nav = document.createElement('nav');
	const btns = [
		'Hours&Location', 'Menus', 'About', 'Gallery', 'Events', 'Reservations'
		];
	btns.forEach(btnTitle => {
		const btn = document.createElement('button');
		btn.textContent = btnTitle;
		btn.classList.add('nav-btn');

		nav.appendChild(btn);
	});

	header.appendChild(logo);
	header.appendChild(nav);

	return header;
};

function content() {
	const c = document.createElement('div');
	c.classList.add('content');
	


	return c;
};

document.body.appendChild(newHeader());
document.body.appendChild(content());
