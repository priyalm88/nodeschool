var fs = require('fs');

fs.readFile(process.argv[2], function(err,data) {
  if(err) throw err;
  var startIndex = 0;
  for(var i=0; i<data.length; i++) {
    if(data[i] === 10) {
      console.log(data.slice(startIndex, i));
      startIndex = i+1;
    }
  }
  console.log(data.slice(startIndex, i));
});
