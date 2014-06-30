var http = require('http'),
    async = require('async');

async.each([process.argv[2], process.argv[3]], function(item, cb) {
  http.get(item, function(res) {
    res.on('data', function(chunk){
    });

    res.on('end', function(){
      cb(null);
    });

  }).on('error', function(err) {
    cb(err);
  });
}, function cb(err) {
    if(err) {
      console.log(err);
    }
  }
);
