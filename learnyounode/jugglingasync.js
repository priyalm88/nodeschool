var http = require('http')
var bl = require('bl')
var dataArr = new Array("", "", "");
var waiting = 3;

var processResponse = function(response, index) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    dataArr[index] = data;
    waiting--;
    print();
  }))
};

var print = function() {
  if(waiting == 0) {
    for(var i=0; i<3; i++) {
      console.log(dataArr[i]);
    }
  }
}

http.get(process.argv[2], function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    dataArr[0] = data;
    waiting--;
    print();
  }))
});
http.get(process.argv[3], function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    dataArr[1] = data;
    waiting--;
    print();
  }))
});
http.get(process.argv[4], function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    dataArr[2] = data;
    waiting--;
    print();
  }))
});
