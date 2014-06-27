var http = require('http'),
    async = require('async'),
    fs = require('fs');

async.waterfall([
  // function to read file
  function(cb) {
    var path = process.argv[2];
    var url;
    fs.readFile(path, function(err, data) {
      if(err) {
        return cb(err);
      }
      url = data.toString().trim();
      cb(null, url);
    });
  },

  // function to make GET request
  function(url, cb) {
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
  }],
  function cb(err, result) {
    if(err) {
      console.error(err);
    }
    console.log(result);
  }
);
