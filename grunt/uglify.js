module.exports = {
    my_target: {
    options: {
        mangle: false,
        sourceMap: true,
        sourceMapName: 'js/app.min.js.map'
      },
      files: {
        'js/app.min.js': ['js/app.js']
      }
    }
};