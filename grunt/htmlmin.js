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
            'modules/skills/skills.html': 'src/app/skills/skills.html',
            'modules/contactme/contactme.html': 'src/app/contactme/contactme.html',
            'modules/bookmarks/bookmarks.html': 'src/app/bookmarks/bookmarks.html',
            'modules/disclaimer/disclaimer.html': 'src/app/disclaimer/disclaimer.html',
            'modules/app/topmenu.html': 'src/app/app/topmenu.html',
            'modules/app/bottom.html': 'src/app/app/bottom.html'
          }
        }
}