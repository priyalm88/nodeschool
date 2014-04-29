var duplex = require('duplexer');
var through = require('through');

module.exports = function (counter) {
  var counts = {};
  var input = through(function(data) {
    if(!counts[data.country]) {
      counts[data.country] = 1;
    } else {
      counts[data.country] += 1;
    }
  }, function() {
    counter.setCounts(counts);
  });
  return duplex(input, counter);
}
