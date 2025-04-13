import "./style.css";

import homeHTML from "./home.js";
import menuHTML from "./menu.js";
import aboutHTML from "./about.js";

const HOME_BTN = document.querySelector('#homeBtn');

const MENU_BTN = document.querySelector('#menuBtn');

const ABOUT_BTN = document.querySelector('#aboutBtn');

let lastActiveBtn;
const start = () => {
    lastActiveBtn = HOME_BTN;
    activateButton(HOME_BTN);
    generateContent(homeHTML);
};

HOME_BTN.addEventListener('click', () => {
    activateButton(HOME_BTN);
    generateContent(homeHTML);
});
MENU_BTN.addEventListener('click', () => {
    activateButton(MENU_BTN);
    generateContent(menuHTML);
});
ABOUT_BTN.addEventListener('click', () => {
    activateButton(ABOUT_BTN);
    generateContent(aboutHTML);
});

start();

function activateButton(button) {
    lastActiveBtn.classList.remove('active');
    button.classList.add('active');
    lastActiveBtn = button;
}

function generateContent(content) {
    document.querySelector('#container').innerHTML = content;
}   