import rIndex from './routes/r-index.js';

Promise.resolve().then(function () {

	return Oxe.setup({
		general: {
			base: '/blog/'
		},
		router: {
			contain: true,
			routes: [
				rIndex
			]
		}
	});

}).catch(console.error);
