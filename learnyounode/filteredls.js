var fs = require('fs');
var p = require('path');

var dirPath = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dirPath, function(err, list) {
  if(err) throw err;
  for(var i=0; i<list.length; i++) {
    if(ext === p.extname(list[i])) {
      console.log(list[i]);
    }
  }
});
