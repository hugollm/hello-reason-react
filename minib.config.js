module.exports = {

    Index: {
        dev: 'mkdir -p .dev && rm -rf .dev/* && cp src/index.html .dev/index.html',
        build: 'mkdir -p dist && rm -rf dist/* && cp src/index.html dist/index.html',
        watch: 'src/index.html',
    },

    Reason: {
        after: 'Index',
        dev: 'bsb -make-world',
        build: `bsb -clean && bsb -make-world`,
        watch: 'src/*.re',
    },

    Sass: {
        after: 'Index',
        dev: 'sass src/index.scss .dev/index.css --source-map',
        build: `sass src/index.scss dist/index.css --no-source-map`,
        watch: 'src/*.scss',
        reload: 'styles',
    },

    Browserify: {
        after: 'Reason',
        dev: 'browserify lib/js/src/index.bs.js -o .dev/index.js',
        build: `browserify lib/js/src/index.bs.js -o dist/index.js`,
        reload: 'page',
    },
};
