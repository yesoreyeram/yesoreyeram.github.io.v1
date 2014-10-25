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
    cssLib: {
        src:['lib/bootstrap/dist/css/bootstrap.css'],
        dest:'css/lib.css',
    }
}