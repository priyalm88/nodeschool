var http = require('http'),
    async = require('async');

async.map([process.argv[2], process.argv[3]], function(item, cb) {
  var body = '';
  http.get(item, function(res) {
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(){
      return cb(null, body);
    });

  }).on('error', function(err) {
    cb(err);
  });
}, function cb(err, result) {
    if(err) {
      console.error(err);
    }
    console.log(result);
  }
);
