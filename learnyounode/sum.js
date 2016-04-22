var _ = require('lodash');
var nums = process.argv;

nums.splice(0, 2);
sum = 0;

_.each(nums, function(num) {
  num = parseInt(num);
  if (num) {
    sum += num;
  }
});

console.log(sum);
