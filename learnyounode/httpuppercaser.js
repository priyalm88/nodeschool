var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
  if(req.method == 'POST') {
    var allData = "";
    req.on('data', function(chunk) {
      allData += chunk.toString().toUpperCase();
    });
    req.on('end', function() {
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      res.write(allData);
      res.end();
    });
  }
})
server.listen(Number(process.argv[2]));
