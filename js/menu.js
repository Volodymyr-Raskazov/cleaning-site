"use strict"

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('_active');
	menuBtn.classList.toggle('_active');
});