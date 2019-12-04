module.exports = {

    Setup: {
        dev: 'mkdir -p lib/target/dev && rm -rf lib/target/dev/*',
        build: 'mkdir -p lib/target/build && rm -rf lib/target/build/*',
    },

    Index: {
        after: 'Setup',
        dev: 'cp src/index.html lib/target/dev/index.html',
        build: 'cp src/index.html lib/target/build/index.html',
        watch: 'src/index.html',
    },

    Reason: {
        after: 'Setup',
        dev: 'bsb -make-world',
        build: `bsb -clean && bsb -make-world`,
        watch: 'src/*.re',
    },

    Sass: {
        after: 'Setup',
        dev: 'sass src/index.scss lib/target/dev/index.css --source-map',
        build: `sass src/index.scss lib/target/build/index.css --no-source-map`,
        watch: 'src/*.scss',
        reload: 'styles',
    },

    Webpack: {
        after: 'Reason',
        dev: 'webpack lib/js/src/index.bs.js -o lib/target/dev/index.js --mode development',
        build: `webpack lib/js/src/index.bs.js -o lib/target/build/index.js --mode production`,
        reload: 'page',
    },

    Uglify: {
        after: 'Webpack',
        build: `uglifyjs lib/target/build/index.js -o lib/target/build/index.js`,
    },
};
