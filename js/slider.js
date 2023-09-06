let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slide-items__item");
	let dots = document.getElementsByClassName("slider-block__switch");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" _active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " _active";
}