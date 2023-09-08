const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
	toggleActiveClass(menu);
	toggleActiveClass(menuBtn);
});

function toggleActiveClass(element) {
	element.classList.toggle('active');
}