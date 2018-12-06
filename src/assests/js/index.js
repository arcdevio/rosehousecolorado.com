// $(document).foundation();
//
// $(document).ready(function(){
// 	$('.sliderA').slick({
// 		dots: true,
// 		slidesToShow: 1,
// 		speed: 1000,
// 		adaptiveHeight: true,
// 		autoplay: true,
// 		autoplaySpeed: 5000,
// 		arrows: false
// 	})
// });
// Testimonial Slider

var slider = document.querySelector('.testimonial');
var sliderChildren = slider.children;
setTimeout(function () {
	for (var i = 0; i < sliderChildren.length; i++) {
		sliderChildren[i].classList.add('active');
	}
}, 3000);



(function() {
	var contactWidget = document.querySelector('.contact-widget');
	var contactWidgetHeight = contactWidget.getBoundingClientRect().height;
	var contactWidgetParent = contactWidget.parentNode;
	var contactWidgetParentTop;
	var contactWidgetBottom;
	window.addEventListener('scroll', function () {
		window.requestAnimationFrame(function () {
			contactWidgetParentTop = contactWidgetParent.getBoundingClientRect().top;
			contactWidgetBottom = (contactWidgetParentTop + contactWidgetHeight);
			if (contactWidgetParentTop <= 0) {
					contactWidget.style.top = '0';
					contactWidget.style.right = '0';
					contactWidget.style.zIndex = '1';
					contactWidget.style.position = 'fixed';
			} else if (contactWidgetBottom >= 0) {
				contactWidget.style.top = 'initial';
				contactWidget.style.right = 'initial';
				contactWidget.style.zIndex = 'initial';
				contactWidget.style.position = 'initial';
			}
		});
	});
}());

/*
	contact-form
*/
(function() {

	var response = document.querySelector('.form-response');
	var form = document.querySelector('.contact-form');

	if (form) {
		At.setup.spinner.size = '6px';
		At.setup.spinner.thickness = '30px';

		At.submit({
			query: form,
			method: 'post',
			responseType: 'json',
			action: 'https://www.enformed.io/zpn17s0',
			prepare: function (data, resolve) {
				data['*default_email'] = 'ahill@rosehousecolorado.com';
				data['*cc'] = 'mchambers101@gmail.com,cconger@rosehousecolorado.com';
				resolve(data);
			},
			complete: function (error, success) {

				if (error) {
					response.style.color = '#89293D';
					response.innerText = 'Error Please See Console';
				} else {
					form.style.display = 'none';
					response.style.color = '#B0BF7F';
					response.innerText = 'Contact Information Is Sent';
				}

			}
		});
	}

}());

/*
	insurnace-form
*/
(function() {

	var response = document.querySelector('.form-response');
	var form = document.querySelector('.insurance-form');

	if (form) {
		At.setup.spinner.size = '6px';
		At.setup.spinner.thickness = '30px';

		At.submit({
			query: form,
			method: 'post',
			responseType: 'json',
			action: 'https://www.enformed.io/zpn17s0',
			prepare: function (data, resolve) {
				data['*default_email'] = 'ahill@rosehousecolorado.com';
				data['*cc'] = 'mchambers101@gmail.com,cconger@rosehousecolorado.com';
				resolve(data);
			},
			complete: function (error, success) {

				if (error) {
					response.style.color = '#89293D';
					response.innerText = 'Error Pease see Console';
				} else {
					form.style.display = 'none';
					response.style.color = '#B0BF7F';
					response.innerText = 'Verification Information Is Sent';
				}

			}
		});
	}

}());
