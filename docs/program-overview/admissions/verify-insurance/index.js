
(function() {

	var response = document.querySelector('.form-response');
	var form = document.querySelector('.insurance-form');
	if (!form) return;

    form.addEventListener('submit', function (e) {
		response.innerText = 'Submitting Form';

        e.preventDefault();

        var data = {};
        var inputs = form.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            var name = input.name;
            var value = input.value;
            if (name) data[name] = value;
        }

		data['*default_email'] = 'ahill@rosehousecolorado.com';
		data['*cc'] = 'mchambers101@gmail.com,ngrebe@rosehousecolorado.com';

        fetch('https://www.enformed.io/csl0xqaw/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            response.json();
        }).then(function (data) {
    		form.style.display = 'none';
    		response.style.color = '#B0BF7F';
    		response.innerText = 'Submitted Form';
        }).catch(function (error) {
    		response.style.color = '#89293D';
    		response.innerText = 'Error Please Call';
        });

    });

}());
