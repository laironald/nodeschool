fs = require('fs')

var path = process.argv[2];
var filetype = process.argv[3];

fs.readdir(path, function(err, list) {
  var ext = null;
  for(var i = 0; i<= list.length; i++) {
    if (list[i]) {
      ext = list[i].split('.');
      if (ext.length > 1 && ext[ext.length - 1] === filetype) {
        console.log(list[i]);
      }
    }
  }
});
