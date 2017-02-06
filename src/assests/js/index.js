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
			prepare: function (data) {
				data._cc = 'amatino@rosehousecolorado.com';
				resolve(data);
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
			query: form,
			method: 'post',
			responseType: 'json',
			action: 'https://www.enformed.io/zpn17s0',
			prepare: function (data) {
				data._cc = 'amatino@rosehousecolorado.com,lindseya@rosehousecolorado.com,krosen@rosehousecolorado.com';
				resolve(data);
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
