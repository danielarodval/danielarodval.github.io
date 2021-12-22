// JavaScript Document
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.nav__menu')

//Display mobile-menu
const hamburger = () => {
	menu.classList.toggle('is-active')
	menuLinks.classList.toggle('active');
};

menu.addEventListener('click', hamburger);
