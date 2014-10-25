module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
		data :{
			banner : grunt.file.read('src/meta/banner.txt'),
		},
	});
};