
// testimonial
(function() {
	var slider = document.querySelector('.testimonial');
	var next = document.querySelector('.next');
	var prev = document.querySelector('.prev');

	if (slider) {
		var index = 0;
		var slides = slider.children;

		next.addEventListener('click', function () {
			index++;
			if (index > slides.length -1) {
				slides[index - 1].classList.toggle('active');
				index = 0;
				slides[index].classList.toggle('active');
			} else {
				slides[index - 1].classList.toggle('active');
				slides[index].classList.toggle('active');
			}
		});
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
