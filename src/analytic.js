
var id = 'UA-87780296-1';

var COMMA = /\s*,\s*/;
var COLON = /\s*:\s*/;
var ATTRIBUTE = 'data-track';

// attribute example
// data-track="event, event: category, action, label, value"

window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;

ga('create', id, 'auto');

if (window.location.hostname === 'localhost') {
	ga('set', 'sendHitTask', null);
}

ga('send', 'pageview');

var loaded = function () {

	var nodes = document.querySelectorAll('[' + ATTRIBUTE + ']');
	var elements = Array.prototype.slice.call(nodes);

	elements.forEach(function (element) {

		var value = element.getAttribute(ATTRIBUTE);
		var parts = value.split(COLON);
		var events = parts[0].split(COMMA);
		var values = parts[1].split(COMMA);

		events.forEach(function (name) {
			element.addEventListener(name, function (options) {
				console.log(options);
				ga.apply(null, ['send', 'event'].concat(options));
			}.bind(null, values));
		});

	});

};

if (document.readyState === 'interactive' && document.readyState === 'complete') {
	loaded();
} else {
	document.addEventListener('DOMContentLoaded', loaded);
}

// add google analytics script to head
var script = document.createElement('script');

script.setAttribute('async', '');
script.setAttribute('src', 'https://www.google-analytics.com/analytics.js');

document.head.appendChild(script);
