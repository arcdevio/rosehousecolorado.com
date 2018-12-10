
// testimonial
(function() {
	var slider = document.querySelector('.testimonial');

	if (slider) {
		var index = 2;

		setInterval(function () {

			if (index === slider.children.length) {
				slider.children[index - 1].classList.toggle('active');
				index = 2;
				slider.children[index].classList.toggle('active');
			}

			if (index > 2) {
				slider.children[index - 1].classList.toggle('active');
				slider.children[index].classList.toggle('active');
			}

			index++;
		}, 3000);
	}
}());

(function() {
	var contactWidget = document.querySelector('.contact-widget-body');
	if (!contactWidget) return;

	var contactWidgetHeight = contactWidget.getBoundingClientRect().height;
	var contactWidgetParent = contactWidget.parentNode;
	var contactWidgetBottom;
	var contactWidgetParentTop;

	window.addEventListener('scroll', function () {
		window.requestAnimationFrame(function () {
			contactWidgetParentTop = contactWidgetParent.getBoundingClientRect().top;
			contactWidgetBottom = (contactWidgetParentTop + contactWidgetHeight);

			if (window.innerWidth < 940) {
				return contactWidget.classList.remove('fixed');
			}

			if (contactWidgetParentTop <= 0) {
				return contactWidget.classList.add('fixed');
			}

			if (contactWidgetBottom >= 0) {
				return contactWidget.classList.remove('fixed');
			}

		});
	});

}());
