module.exports = {
  replacebuilddate :{
      src : ['src/meta/humans.txt','src/meta/sitemap.xml'],
      dest : 'dist/meta/',
      replacements: [{
        from : '@@lastmod@@',
        to : function(grunt){ 
          var now = new Date();
          return (now.getFullYear() +'-'+ (now.getMonth()+1 )+ '-' + now.getDate() + ' ' + now.toTimeString())}
      }]
    },
    wordart :{
      src : ['src/app/index.html'],
      dest : 'dist/app/index.html',
      replacements: [{
        from : "<meta name=\"banner\" value=\"sriramajeyam.com\">",
        to : "<%= banner %>"
      }]
    }
}