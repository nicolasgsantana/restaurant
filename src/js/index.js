import '../css/style.css';
import loadHome from './home';

const contentDiv = document.getElementById("content");

const home = loadHome();
console.log(contentDiv.appendChild(home));
