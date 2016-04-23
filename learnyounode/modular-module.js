fs = require('fs')

module.exports = function(path, filetype, callback) {

  fs.readdir(path, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      var ext = null;
      var results = [];
      for(var i = 0; i<= list.length; i++) {
        if (list[i]) {
          ext = list[i].split('.');
          if (ext.length > 1 && ext[ext.length - 1] === filetype) {
            results.push(list[i]);
          }
        }
      }
      callback(null, results);
    }
  });
  
};
