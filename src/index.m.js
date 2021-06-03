
(function () {
	var slider = document.querySelector('.testimonial');
	// var next = document.querySelector('.next');
	// var prev = document.querySelector('.prev');

	if (slider) {
		var index = 1;

		setInterval(function () {
			if (index === slider.children.length) {
				slider.children[ index - 1 ].classList.toggle('active');
				index = 0;
				slider.children[ index ].classList.toggle('active');
			} else {
				slider.children[ index - 1 ].classList.toggle('active');
				slider.children[ index ].classList.toggle('active');
			}
			index++;
		}, 10000);

	}

	// if (slider) {
	// 	var index = 0;
	// 	var slides = slider.children;
	//
	// 	next.addEventListener('click', function () {
	// 		index++;
	// 		if (index > slides.length -1) {
	// 			slides[index - 1].classList.toggle('active');
	// 			index = 0;
	// 			slides[index].classList.toggle('active');
	// 		} else {
	// 			slides[index - 1].classList.toggle('active');
	// 			slides[index].classList.toggle('active');
	// 		}
	// 	});
	// }
}());

(function () {
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

(function () {

	var response = document.querySelector('.form-response');
	var form = document.querySelector('form');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		response.innerText = 'Submitting Form';

		var data = {};
		var elements = [];

		elements.push.apply(elements, form.querySelectorAll('input'));
		elements.push.apply(elements, form.querySelectorAll('textarea'));

		for (var i = 0; i < elements.length; i++) {
			var input = elements[ i ];
			var name = input.name;
			var value = input.value;
			if (name) data[ name ] = value;
		}

		data[ '$to' ] = 'ahill@rosehousecolorado.com';
		data[ '$cc' ] = 'mchambers101@gmail.com,ngrebe@rosehousecolorado.com';

		fetch('/email', {
			method: 'POST',
			body: JSON.stringify(data)
		}).then(function (result) {
			if (result.status !== 200) throw new Error(result.statusText);
			form.reset();
		}).then(function (data) {
			form.style.display = 'none';
			response.style.color = '#B0BF7F';
			response.innerText = 'Success: Form Sent';
		}).catch(function (error) {
			console.log(error);
			response.style.color = '#89293D';
			response.innerText = 'Error: Please Call';
		});

	});

}());
