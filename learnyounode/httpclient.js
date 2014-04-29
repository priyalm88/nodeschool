var http = require('http');
var stream = require('stream');

http.get(process.argv[2], function(response) {
  response.on('data', function(data) {
    console.log(data.toString());
  });
});
