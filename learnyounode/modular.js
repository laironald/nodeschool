var modular = require('./modular-module');

modular(process.argv[2], process.argv[3], function(err, results) {
  for(var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
});
