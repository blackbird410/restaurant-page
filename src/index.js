import './style.css';
import { printMe, newHeader, content, footer } from './data.js';

document.body.appendChild(newHeader());
document.body.appendChild(content());
document.body.appendChild(footer());
