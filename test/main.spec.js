var cwd = process.cwd();
var path = require('path');
var initJspm = require('karma-jspm');


describe('jspm plugin init', function(){
	var files, jspm, client;
	var basePath = ".";

	beforeEach(function(){
		files = [];
		jspm = {
			config: 'config.js',
			loadFiles: ['src/**/*.js'],
			//packages: 'custom_packages/',
			serveFiles: ['testfile.js']
		};
		client = {};

		initJspm(files, basePath, jspm, client);
	});

	it('should add adapter.js to the top of the files array', function(){
		//expect(true).toEqual(cwd + '/src/adapter.js');
		expect(true).toEqual(false);
	});

});