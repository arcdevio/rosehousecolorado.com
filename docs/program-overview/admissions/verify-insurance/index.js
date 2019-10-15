
(function () {

	var response = document.querySelector('.form-response');
	var form = document.querySelector('.insurance-form');
	if (!form) return;

	At.setup.spinner.size = '6px';
	At.setup.spinner.thickness = '30px';

	At.submit({
		query: form,
		method: 'post',
		responseType: 'json',
		action: 'https://www.enformed.io/csl0xqaw',
		prepare: function prepare(data, resolve) {
			data['*default_email'] = 'ahill@rosehousecolorado.com';
			data['*cc'] = 'mchambers101@gmail.com,cconger@rosehousecolorado.com';
			resolve(data);
		},
		complete: function complete(error, success) {
			if (error) {
				response.style.color = '#89293D';
				response.innerText = 'Error Please Call';
			} else {
				form.style.display = 'none';
				response.style.color = '#B0BF7F';
				response.innerText = 'Verification Form Submitted';
			}
		}
	});
})();