var http = require('http');
var through = require('through');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req
      .pipe(through(function(buf) {
         this.queue(buf.toString().toUpperCase());
       }))
      .pipe(res);
  }
});
server.listen(Number(process.argv[2]));
