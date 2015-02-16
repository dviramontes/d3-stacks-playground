// an example karma.conf.js
module.exports = function(config) {
	config.set({
		basePath: '../..',
		frameworks: ['jspm', 'jasmine'],
		jspm: {
			// Edit this to your needs
			loadFiles: ['src/**/*.js', 'test/**/*.js'],
			//useBundles: true
		}
	});
};