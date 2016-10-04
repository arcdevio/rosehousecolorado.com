(function() {
	'use strict';

	var response = document.querySelector('.form-response');
	var form = document.querySelector('.insurance-form');

	At.setup.spinner.size = '6px';
	At.setup.spinner.thickness = '30px';

	At.submit({
		mimeType: 'json',
		query: '.insurance-form',
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
				response.innerText = 'Verification Was Sent';
			}

		}
	});

}());
