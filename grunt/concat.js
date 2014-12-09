module.exports = {
    main: {
        src: ['dist/app/index.html'],
        dest: 'index.html'
    },
    robots: {
        src: ['src/meta/robots.txt'],
        dest: 'robots.txt',
    },
    human: {
        src: ['dist/meta/humans.txt'],
        dest: 'humans.txt',
    },
    sitemap: {
        src: ['dist/meta/sitemap.xml'],
        dest: 'sitemap.xml',
    },
    cname: {
        src: ['src/meta/CNAME'],
        dest: 'CNAME',
    },
    readme: {
        src: ['src/meta/README.md'],
        dest: 'README.md',
    },
    manifest: {
        src: ['src/meta/manifest.json'],
        dest: 'manifest.json',
    },
    cssLib: {
        src:['lib/bootstrap/dist/css/bootstrap.css'],
        dest:'css/lib.css',
    },
    cssApp:{
        src:['src/app/app.css'],
        dest:'css/app.css',
    },
    jsLib: {
        src:['lib/angular/angular.js','lib/angular-route/angular-route.js'],
        dest:'js/lib.js',
    },
    jsApp: {
        src:['src/app/app.js','src/app/home/home.js','src/app/aboutme/aboutme.js'],
        dest:'js/app.js',
    }
}