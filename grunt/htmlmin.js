module.exports = {
        removeWhiteSpaceAndComments: {                                     
          options: {                                
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                         
            'dist/app/index.html': 'src/app/index.html'
          }
        },
        CopyModules: {                                     
          options: {                                
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                         
            'modules/home/home.html': 'src/app/home/home.html',
            'modules/aboutme/aboutme.html': 'src/app/aboutme/aboutme.html',
            'modules/app/topmenu.html': 'src/app/app/topmenu.html',
            'modules/app/bottom.html': 'src/app/app/bottom.html'
          }
        }
}