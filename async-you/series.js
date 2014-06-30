var http = require('http'),
    async = require('async'),
    fs = require('fs');

var httpReq = function(url, cb) {
  var body = '';
  http.get(url, function(res) {
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(){
      cb(null, body);
    });

  }).on('error', function(err) {
    cb(err);
  });
};

async.series({
  requestOne: function(cb) {
    return httpReq(process.argv[2], cb);
  }, 
  requestTwo: function(cb) {
    return httpReq(process.argv[3], cb);
  }
}, function cb(err, result) {
    if(err) {
      console.error(err);
    }
    console.log(result);
  }
);
