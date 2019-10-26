import rIndex from './routes/r-index.js';

var base = document.createElement('base');
base.href = '/blog/';
document.head.append(base);

Promise.resolve().then(function () {

	return Oxe.setup({
		general: {
			base: '/blog/'
		},
		router: {
			contain: true,
			routes: [rIndex]
		}
	});
}).catch(console.error);