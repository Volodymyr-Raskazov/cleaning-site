// let slideIndex = 1;
// showSlides(slideIndex);

// function showSlides(n) {
// 	let i;
// 	let slides = document.getElementsByClassName("slide-items__item");
// 	let dots = document.getElementsByClassName("slider-block__switch");
// 	if (n > slides.length) { slideIndex = 1 }
// 	if (n < 1) { slideIndex = slides.length }
// 	for (i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}
// 	slides[slideIndex - 1].style.display = "block";
// 	dots[slideIndex - 1].className += " active";
// }

$('.slider-block__switch').on('click', function (e) {
	e.preventDefault();

	$('.slider-block__switch.active').removeClass('active');
	let id = $(this).data('id');

	$('.slide-items__item.active').fadeOut(300, function () {
		$(this).removeClass('active');

		$(`.slide-items__item[data-id="${id}"]`).fadeIn(300, function () {
			$(this).addClass('active');
		});
	});
	$(this).addClass('active');
});