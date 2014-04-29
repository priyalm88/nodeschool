var fs = require('fs');

fs.readFile(process.argv[2], function(err,data) {
  if(err) throw err;
  var num = data.toString().split('\n').length-1;
  // Number of new lines
  console.log(num);
});
