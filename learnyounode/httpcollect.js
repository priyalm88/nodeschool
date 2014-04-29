var http = require('http');
var stream = require('stream');
var bl = require('bl');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  var allData = "";
  response.on('data', function(data) {
    allData += data;
  });
  response.on('end', function() {
    console.log(allData.length);
    console.log(allData);
  });
});
