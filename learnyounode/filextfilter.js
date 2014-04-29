var fs = require('fs');
var p = require('path');

module.exports = function (dirPath, ext, callback) {
  fs.readdir(dirPath, function(err, list) {
    var filteredList = new Array();
    ext = "." + ext;
    if(err) {
      return callback(err);
    }
    for(var i=0; i<list.length; i++) {
      if(ext === p.extname(list[i])) {
        filteredList.push(list[i]);
      }
    }
    callback(null, filteredList);
  });  
};
