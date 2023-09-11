$(function () {

	$('.accordion-items__button').on('click', function (e) {

		e.preventDefault();
		let $this = $(this);

		if (!$this.hasClass("active")) {
			$('.accordion-items__content').slideUp(300);
			$('.accordion-items__button, .accordion-items__button span').removeClass('active');
		}

		$this.toggleClass('active');
		$this.next().slideToggle();
		$('span', this).toggleClass('active');
	});

});



// class accordion {
// 	constructor(target, config) {
// 		this._el = typeof target === 'string' ? document.querySelector(target) : target;
// 		const defaultConfig = {
// 			alwaysOpen: true,
// 			duration: 300
// 		};
// 		this._config = Object.assign(defaultConfig, config);
// 		this.addEventListener();
// 	}
// 	addEventListener() {
// 		this._el.addEventListener('click', (e) => {
// 			const elHeader = e.target.closest('.accordion-items__button');
// 			if (!elHeader) {
// 				return;
// 			}
// 			if (!this._config.alwaysOpen) {
// 				const elOpenItem = this._el.querySelector('.accordion-items__item_show');
// 				if (elOpenItem) {
// 					elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
// 				}
// 			}
// 			this.toggle(elHeader.parentElement);
// 		});
// 	}
// 	show(el) {
// 		const elBody = el.querySelector('.accordion-items__content');
// 		if (elBody.classList.contains('_collapsing') || el.classList.contains('accordion-items__item_show')) {
// 			return;
// 		}
// 		elBody.style.display = 'block';
// 		const height = elBody.offsetHeight;
// 		elBody.style.height = 0;
// 		elBody.style.overflow = 'hidden';
// 		elBody.style.transition = `height ${this._config.duration}ms ease`;
// 		elBody.classList.add('_collapsing');
// 		el.classList.add('_slidedown');
// 		elBody.offsetHeight;
// 		elBody.style.height = `${height}px`;
// 		window.setTimeout(() => {
// 			elBody.classList.remove('_collapsing');
// 			el.classList.remove('_slidedown');
// 			elBody.classList.add('_collapse');
// 			el.classList.add('accordion-items__item_show');
// 			elBody.style.display = '';
// 			elBody.style.height = '';
// 			elBody.style.transition = '';
// 			elBody.style.overflow = '';
// 		}, this._config.duration);
// 	}
// 	hide(el) {
// 		const elBody = el.querySelector('.accordion-items__content');
// 		if (elBody.classList.contains('_collapsing') || !el.classList.contains('accordion-items__item_show')) {
// 			return;
// 		}
// 		elBody.style.height = `${elBody.offsetHeight}px`;
// 		elBody.offsetHeight;
// 		elBody.style.display = 'block';
// 		elBody.style.height = 0;
// 		elBody.style.overflow = 'hidden';
// 		elBody.style.transition = `height ${this._config.duration}ms ease`;
// 		elBody.classList.remove('collapse');
// 		el.classList.remove('accordion-items__item_show');
// 		elBody.classList.add('collapsing');
// 		window.setTimeout(() => {
// 			elBody.classList.remove('_collapsing');
// 			elBody.classList.add('_collapse');
// 			elBody.style.display = '';
// 			elBody.style.height = '';
// 			elBody.style.transition = '';
// 			elBody.style.overflow = '';
// 		}, this._config.duration);
// 	}
// 	toggle(el) {
// 		el.classList.contains('accordion-items__item_show') ? this.hide(el) : this.show(el);
// 	}
// }