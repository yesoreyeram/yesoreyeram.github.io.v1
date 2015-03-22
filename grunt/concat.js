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
        src:['lib/bootstrap/dist/css/bootstrap.min.css'],
        dest:'css/lib.min.css',
    },
    cssApp:{
        src:['src/app/app.css','src/app/aboutme/aboutme.css','src/app/skills/skills.css','src/app/contactme/contactme.css','src/app/bookmarks/bookmarks.css'],
        dest:'css/app.css',
    },
    jsLib: {
        src:['lib/underscore/underscore-min.js','lib/angular/angular.min.js','lib/angular-route/angular-route.min.js','lib/angular-sanitize/angular-sanitize.min.js'],
        dest:'js/lib.min.js',
    },
    jsApp: {
        src:['src/app/app.js','src/app/home/home.js','src/app/aboutme/aboutme.js','src/app/skills/skills.js','src/app/contactme/contactme.js','src/app/bookmarks/bookmarks.js','src/app/disclaimer/disclaimer.js','src/app/articles/articles.js','src/app/404/404.js'],
        dest:'js/app.js',
    }
}