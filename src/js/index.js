import '../css/style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';

const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

const pages = {
    home: null,
    menu: null,
    about: null
};

let currentPage = undefined;

const clearContent = () => {
    contentDiv.innerHTML = "";
};

const openHomePage = () => {
    if (currentPage !== pages.home) {
        clearContent();

        if (pages.home === null) {
            pages.home = loadHome();
        }

        contentDiv.appendChild(pages.home);
        currentPage = pages.home;
    }
};

const openMenuPage = () => {
    if (currentPage !== pages.menu) {
        clearContent();

        if (pages.menu === null) {
            pages.menu = loadMenu();
        }

        contentDiv.appendChild(pages.menu);
        currentPage = pages.menu;
    }
};

const openAboutPage = () => {
    if (currentPage !== pages.about) {
        clearContent();

        if (pages.about === null) {
            pages.about = loadAbout();
        }

        contentDiv.appendChild(pages.about);
        currentPage = pages.about;
    }
};

homeBtn.addEventListener('click', openHomePage);
menuBtn.addEventListener('click', openMenuPage);
aboutBtn.addEventListener('click', openAboutPage);

openHomePage();
