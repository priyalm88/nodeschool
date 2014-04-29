var concat = require('concat-stream');

process.stdin.pipe(concat(function(buf) {
     var str = buf.toString();
     str = str.split('').reverse().join('');
     console.log(str);
   }));
