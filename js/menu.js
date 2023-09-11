const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
	toggleActiveClass(menu);
	toggleActiveClass(menuBtn);
	toggleActiveClass(body);
});

function toggleActiveClass(element) {
	element.classList.toggle('active');
}