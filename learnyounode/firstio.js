var fs = require('fs');
var str = fs.readFileSync(process.argv[2]).toString();
var arr = str.split('\n');
// Number of new lines
console.log(arr.length-1);
