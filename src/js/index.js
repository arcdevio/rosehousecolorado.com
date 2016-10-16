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
			mimeType: 'json',
			query: '.contact-form',
			prepare: function (data) {
				// data._cc = 'bburns@peaksrecovery.com';
				data._cc = 'jburns@webcabdesign.com';
			},
			complete: function (error, success) {

				if (error) {
					var errorMessage = '';

					try { errorMessage = JSON.parse(error.response).error; }
					catch (e) { console.log(error); }

					response.style.color = '#89293D';
					response.innerText = 'Error ' + errorMessage;
				} else {
					form.style.display = 'none';
					response.style.color = '#B0BF7F';
					response.innerText = 'Contact Information Was Sent';
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
			mimeType: 'json',
			query: '.insurance-form',
			prepare: function (data) {
				data._cc = 'bburns@peaksrecovery.com';
			},
			complete: function (error, success) {

				if (error) {
					var errorMessage = '';

					try { errorMessage = JSON.parse(error.response).error; }
					catch (e) { console.log(error); }

					response.style.color = '#89293D';
					response.innerText = 'Error ' + errorMessage;
				} else {
					form.style.display = 'none';
					response.style.color = '#B0BF7F';
					response.innerText = 'Verification Information Was Sent';
				}

			}
		});
	}

}());
