var through = require('through');
var split = require('split');

var ctr = 0;
var tr = through(function(line) {
    ctr++;
    if(ctr%2 == 0) {
      this.queue(line.toString().toUpperCase() + '\n');
    } else {
      this.queue(line.toString().toLowerCase() + '\n');
    }
  });
process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);
