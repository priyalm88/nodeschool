var http = require('http'),
    async = require('async'),
    fs = require('fs');

var httpReq = function(url, prev, cb) {
  var body = '';
  http.get(url, function(res) {
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(){
      cb(null, prev + Number(body));
    });

  }).on('error', function(err) {
    cb(err);
  });
};

async.reduce(['one', 'two', 'three'], 0, function (memo, item, cb) {
   var url = process.argv[2] + "/?number=" + item;
   return httpReq(url, memo, cb);
}, function cb(err, result) {
    if(err) {
      console.error(err);
    }
    console.log(result);
  }
);
