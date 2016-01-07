module.exports = {
	options: {
	    files: ['package.json','bower.json'],
	    updateConfigs: [],
	    releaseBranch: 'master',
	    add: true,
	    addFiles: ['.'], // '.' for all files except ingored files in .gitignore
	    commit: false,
	    commitMessage: 'Release v%VERSION%',
	    commitFiles: ['package.json'], // '-a' for all files
	    createTag: true,
	    tagName: 'v%VERSION%',
	    tagMessage: 'Version %VERSION%',
	    push: false,
	    pushTo: 'origin',
	    npm: false,
	    npmTag: 'Release v%VERSION%',
	    gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
	}
};