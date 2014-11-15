module.exports = {
        removeWhiteSpaceAndComments: {                                     
          options: {                                
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                         
            'dist/app/index.html': 'src/app/index.html'
          }
        }
}