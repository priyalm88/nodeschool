var net = require('net');
var strftime = require('strftime')

var port = parseInt(process.argv[2]);
var server = net.createServer(function(socket) {
  var date = new Date();
  var val = date.getTime();
  var data = strftime('%F %R', new Date(val));  
  socket.end(data);
});
server.listen(port);
