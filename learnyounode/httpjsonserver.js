var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  if(req.method == 'GET') {
    console.log("In get request : " + req.url);
    var obj = url.parse(req.url, true);
    var date = new Date(obj.query['iso']);
    var responseObj;
    if(obj.pathname === '/api/parsetime') {
      // return 'hour', 'minute' and 'second' properties
      responseObj = {'hour' : date.getHours(),
                     'minute' : date.getMinutes(),
                     'second' : date.getSeconds()
                    };
    } else if(obj.pathname === '/api/unixtime') {
      // return unixtime
      responseObj = {'unixtime' : date.getTime()}; 
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(responseObj));
    res.end();
  }
})
server.listen(Number(process.argv[2]));
