$(document).foundation();

$(document).ready(function(){
	$('.sliderA').slick({
		dots: true,
		slidesToShow: 1,
		speed: 1000,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false
	})
});

/*
	contact-form
*/
(function() {
	'use strict';

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
				data['*default_email'] = 'amatino@rosehousecolorado.com';
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
	'use strict';

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
				data['*default_email'] = 'amatino@rosehousecolorado.com';
				data['*cc'] = 'lindseya@rosehousecolorado.com,krosen@rosehousecolorado.com';
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
