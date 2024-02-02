import './style.css';
import { printMe, newHeader, content, footer, hoursAndLocations, menus, about, gallery, events, reservations } from './data.js';

document.body.appendChild(newHeader());
//displayContent();
document.body.appendChild(about());
document.body.appendChild(footer());
addEvents();

function addEvents()
{
	Array.from(document.querySelectorAll('.nav-btn')).forEach(btn => {
		btn.addEventListener('click', displayContent)
	});
	document.querySelector('.logo').addEventListener('click', displayContent);
}

function displayContent(e)
{
	let target = '';
	if (e)
	{
		target = e.currentTarget.id;
		document.body.querySelector('#content').remove();
		document.body.querySelector('.footer').remove();
	}
	
	switch(target)
	{
		case 'hours&locations':
			document.body.appendChild(hoursAndLocations());
			document.body.appendChild(footer());
			break;
		case 'menus':
			document.body.appendChild(menus());
			document.body.appendChild(footer());
			break;
		case 'about':
			document.body.appendChild(about());
			document.body.appendChild(footer());
			break;
		case 'gallery':
			document.body.appendChild(gallery());
			document.body.appendChild(footer());
			break;
		case 'events':
			document.body.appendChild(events());
			document.body.appendChild(footer());
			break;
		case 'reservations':
			document.body.appendChild(reservations());
			document.body.appendChild(footer());
			break;
		default:
			document.body.appendChild(content());
			document.body.appendChild(footer());
			break;
	}

	addEvents();
}


