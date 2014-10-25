module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-contrib-clean'); 
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('c', ['clean:CleanPreviousBuild']);
	grunt.registerTask('copyMetaFile',['concat:cname','concat:human','concat:readme','concat:robots']); 
	grunt.registerTask('copyProjectFiles',['concat:main']) ;
	grunt.registerTask('default', ['c','copyMetaFile','copyProjectFiles']);
	grunt.registerTask('publish', ['bump','c','copyMetaFile','copyProjectFiles']);

	// Project configuration.
	grunt.initConfig({


	bump: {
		options: {
		  files: ['package.json','bower.json'],
		  updateConfigs: ['pkg','bower'],
		  commit: false,
		  createTag: false,
		  push: false,
		  globalReplace: false
		}
	},

	pkg: grunt.file.readJSON('package.json'),
	bower: grunt.file.readJSON('bower.json'),

	/* Cleaning */
	clean: {
	    CleanPreviousBuild:   ["index.html", "CNAME","humans.txt","README.md","robots.txt","dest/"],
	},

	/* Copy files and combine*/
	concat: {
		main:{
			src:['src/app/index.html'],
			dest:'index.html'
		},
	robots :{
	  src:['src/meta/robots.txt'],
	  dest:'robots.txt',
	},
	human :{
	  src:['src/meta/humans.txt'],
	  dest:'humans.txt',
	},
	cname :{
	  src:['src/meta/CNAME'],
	  dest:'CNAME',
	},
	readme :{
	  src:['src/meta/README.md'],
	  dest:'README.md',
	}
	},

	});

};