module.exports = {
    main: {
        src: ['src/app/index.html'],
        dest: 'index.html'
    },
    robots: {
        src: ['src/meta/robots.txt'],
        dest: 'robots.txt',
    },
    human: {
        src: ['src/meta/humans.txt'],
        dest: 'humans.txt',
    },
    cname: {
        src: ['src/meta/CNAME'],
        dest: 'CNAME',
    },
    readme: {
        src: ['src/meta/README.md'],
        dest: 'README.md',
    }
}