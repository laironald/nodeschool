var fs = require('fs');

fs.readFile(process.argv[2], function(err, result) {
  var lines = result.toString().split('\n').length - 1;
  console.log(lines);
});

