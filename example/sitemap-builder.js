require('babel-register');

const router = require('./router').default;
const Sitemap = require('../').default;

const filterConfig = {
	isValid: false,
	rules: [
			/\*/,
	],
};

const paramsConfig = {
	'/user/:guid': [
		{ projectName: 'some-random-token' }
	],
	'/patient/:guid/cases': [
		{ projectName: 'some-random-token' }
	]
};

(
	new Sitemap(router)
		.filterPaths(filterConfig)
		.applyParams(paramsConfig)
		.build('https://portal.globehealer.com')
		.save('./sitemap.xml')
);
