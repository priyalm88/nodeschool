var http = require('http'),
    async = require('async');

var url = "http://" + process.argv[2] + ":" + process.argv[3];

async.series([
  // function for post request
  function(cb) {
    async.times(5, function(n, cb1) {
      var obj = JSON.stringify({user_id: n+1});
      var opts = {
        hostname: process.argv[2],
        port: process.argv[3],
        path: '/users/create',
        method: 'POST',
        headers: {
          'Content-Length': obj.length
        }
      };
      var req = http.request(opts, function(res) {
        res.on('data', function(chunk) {
        });
        res.on('end', function(chunk) {
          return cb1();
        });
      });
      req.on('error', cb1);
      req.write(obj);
      req.end();
    }, function cb1(err) {
      if(err) {
        return cb(err);
       }
       return cb(null, 'done');
    });
  },
  // function for get request
  function(cb) {
  var body = '';
  http.get(url + '/users', function(res) {
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(){
      return cb(null, body);
    });

  }).on('error', function(err) {
    cb(err);
  });
}], function cb(err, result) {
    if(err) {
      console.error(err);
    }
    console.log(result[1]);
  }
);
