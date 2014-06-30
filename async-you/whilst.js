var http = require('http'),
    async = require('async');

var count = 0;
var requestbody = '';

async.whilst(
  // test function
  function() {
    return (requestbody.indexOf("meerkat") == -1);
  }, 
  // function for get request
  function(cb) {
  count += 1;
  var body = '';
  http.get(process.argv[2], function(res) {
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(){
      requestbody = body;
      cb(null, body);
    });

  }).on('error', function(err) {
    cb(err);
  });
  },
  // callback
  function cb(err, result) {
    if(err) {
      console.log(err);
    }
    console.log(count);
  }
);
